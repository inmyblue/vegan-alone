import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsString } from 'class-validator';
import { BasicEntity } from 'src/common/entities/basic.entity';
import { Column, Entity, OneToOne } from 'typeorm';
import { Profile } from './profile.entity';
import { adminProfile } from './adminProfile.entity';
import { Social } from './social.entity';
import { UserRole } from '../enums/user_role.enum';

@InputType('UserInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class User extends BasicEntity {
  @Field((type) => String, { description: '유저 ID' })
  @Column()
  @IsString()
  userId: string;

  @Field((type) => String, { description: '패스워드' })
  @Column()
  @IsString()
  password: string;

  @Field((type) => String, { description: '이메일' })
  @Column()
  @IsEmail()
  email: string;

  @Field((type) => UserRole, { description: 'Role' })
  @Column({ type: 'enum', enum: UserRole })
  @IsEnum(UserRole)
  userRole: UserRole;

  @Field((type) => String, { nullable: true, description: '프로필사진 URL' })
  @Column({ nullable: true })
  profileImg: string;

  @Field((type) => Profile)
  @OneToOne((type) => Profile, (profile) => profile.user)
  profile: Profile;

  @Field((type) => adminProfile)
  @OneToOne((type) => adminProfile, (adminProfile) => adminProfile.user)
  adminProfile: adminProfile;

  @Field((type) => Social)
  @OneToOne((type) => Social, (social) => social.user)
  social: Social;
}
