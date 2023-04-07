import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BasicEntity } from 'src/common/entities/basic.entity';
import { Column, Entity, OneToOne } from 'typeorm';
import { User } from './user.entity';

@InputType('adminProfileInputTYpe', { isAbstract: true })
@ObjectType()
@Entity()
export class adminProfile extends BasicEntity {
  @Field((type) => User, { description: 'User Join' })
  @OneToOne((type) => User, (user) => user.adminProfile)
  user: User;

  @Field((type) => String, { description: '이름' })
  @Column()
  name: string;

  @Field((type) => String, { description: '소속' })
  @Column()
  team: string;

  @Field((type) => String, { description: '직책' })
  @Column()
  position: string;

  @Field((type) => String, { nullable: true, description: '직무' })
  @Column({ nullable: true })
  duty: string;

  @Field((type) => String, { description: '연락처' })
  @Column()
  phone: string;
}
