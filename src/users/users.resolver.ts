import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  // 회원가입

  // 로그인

  // 내 정보 수정

  // 카카오로그인

  // 네이버로그인

  // 구글로그인
  @Query((returns) => Boolean)
  userMe(): Boolean {
    return true;
  }
}
