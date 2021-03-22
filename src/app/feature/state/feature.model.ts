/* eslint-disable @typescript-eslint/naming-convention */
export enum FeatureBaseType {
  'EUR' = 'EUR',
  'USD' = 'USD'
}

export interface Rate {
  [key: string]: { [key: string]: number };
}

export interface Feature {
  rates: Rate;
  start_at: string;
  base: FeatureBaseType;
  end_at: string;
}
// TODO leka: number | string is hack
export type UiGrid = { [key: string]: number | string } & {
  date: string;
};
