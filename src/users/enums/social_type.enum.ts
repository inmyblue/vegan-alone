import { registerEnumType } from '@nestjs/graphql';

export enum SocialType {
  Google = 'Google',
  Naver = 'Naver',
  Kakao = 'Kakao',
}

registerEnumType(SocialType, { name: 'SocialType' });
