import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BasicEntity } from 'src/common/entities/basic.entity';
import { Column, Entity, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { SocialType } from '../enums/social_type.enum';

@InputType('SocialInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Social extends BasicEntity {
  @Field((type) => SocialType, { description: '소셜로그인 타입' })
  @Column({ type: 'enum', enum: SocialType })
  socialType: SocialType;

  @Field((type) => User, { description: 'User Join' })
  @OneToOne((type) => User, (user) => user.social)
  user: User;
}
