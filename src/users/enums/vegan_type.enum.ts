import { registerEnumType } from '@nestjs/graphql';

export enum VeganType {
  Pollo = 'Pollo',
  Pesco = 'Pesco',
  Lacto = 'Lacto',
  Ovo = 'Ovo',
  Vegan = 'Vegan',
}
registerEnumType(VeganType, { name: 'VeganType' });
