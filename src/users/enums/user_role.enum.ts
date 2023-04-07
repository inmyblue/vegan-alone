import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
  SuperAdmin = 'SuperAdmin',
  VeganAdmin = 'VeganAdmin',
  ServiceAdmin = 'ServiceAdmin',
  Customer = 'Customer',
}

registerEnumType(UserRole, { name: 'UserRole' });
