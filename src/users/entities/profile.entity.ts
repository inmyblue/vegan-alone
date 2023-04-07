import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { BasicEntity } from 'src/common/entities/basic.entity';
import { IsString } from 'class-validator';
import { Gender } from '../enums/gender.enum';
import { VeganType } from '../enums/vegan_type.enum';

@InputType('ProfileInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Profile extends BasicEntity {
  @Field((type) => User, { description: 'User Join' })
  @OneToOne((type) => User, (user) => user.profile)
  user: User;

  @Field((type) => String, { description: '닉네임' })
  @Column()
  @IsString()
  nickname: string;

  @Field((type) => Gender, { nullable: true, description: '성별' })
  @Column({ type: 'enum', enum: Gender, nullable: true })
  gender: Gender;

  @Field((type) => Date, { nullable: true, description: '생년월일' })
  @Column({ nullable: true })
  birth: Date;

  @Field((type) => VeganType, { nullable: true, description: '비건 타입' })
  @Column({ type: 'enum', enum: VeganType, nullable: true })
  veganType: VeganType;
}
