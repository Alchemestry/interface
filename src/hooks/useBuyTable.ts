import type { StaticImageData } from 'next/image';
import { create } from 'zustand';

import BuyTableCardLevel1 from '@/../public/images/buy-table-card-level-1.png';
import BuyTableCardLevel2 from '@/../public/images/buy-table-card-level-2.png';
import BuyTableCardLevel3 from '@/../public/images/buy-table-card-level-3.png';
import { Decimal } from '@/utils/Decimal';

export interface ITable {
  levelTitle: string;
  levelMark: string;
  image: StaticImageData;
  price: Decimal;
  minTableAmount: Decimal;
  maxTableAmount: Decimal;
  isSelectTable: boolean;
  userSelectedAmount: Decimal;
  userBoughtTableQuantity: Decimal;
}

export interface ITables {
  buyTables: ITable[];
  updateUserSelectedAmount: (
    levelMark: string,
    action: 'increase' | 'decrease' | 'max' | 'min',
  ) => void;
  pickUpTable: (levelMark: string) => ITable;
  resetPickUpTables: () => void;
  userHasLvl1Table: () => boolean;
  userHasLvl2Table: () => boolean;
  getTotalPrice: () => Decimal;
}

export const useBuyTable = create<ITables>((set, get) => ({
  buyTables: [
    {
      levelTitle: 'level 1',
      levelMark: 'lvl 1',
      image: BuyTableCardLevel1,
      price: Decimal.from('0.15'),
      minTableAmount: Decimal.from('3'),
      maxTableAmount: Decimal.from('15'),
      isSelectTable: false,
      userSelectedAmount: Decimal.from('3'),
      userBoughtTableQuantity: Decimal.from('0'),
    },
    {
      levelTitle: 'level 2',
      levelMark: 'lvl 2',
      image: BuyTableCardLevel2,
      price: Decimal.from('0.3'),
      minTableAmount: Decimal.from('2'),
      maxTableAmount: Decimal.from('10'),
      isSelectTable: false,
      userSelectedAmount: Decimal.from('2'),
      userBoughtTableQuantity: Decimal.from('0'),
    },
    {
      levelTitle: 'level 3',
      levelMark: 'lvl 3',
      image: BuyTableCardLevel3,
      price: Decimal.from('0.5'),
      minTableAmount: Decimal.from('1'),
      maxTableAmount: Decimal.from('5'),
      isSelectTable: false,
      userSelectedAmount: Decimal.from('1'),
      userBoughtTableQuantity: Decimal.from('0'),
    },
  ],
  updateUserSelectedAmount: (levelMark, action) => {
    set((state) => ({
      buyTables: state.buyTables.map((table) => {
        if (table.levelMark === levelMark) {
          switch (action) {
            case 'increase':
              table.userSelectedAmount = table.userSelectedAmount.add(1);
              break;
            case 'decrease':
              table.userSelectedAmount = table.userSelectedAmount.sub(1);
              break;
            case 'max':
              table.userSelectedAmount = table.maxTableAmount;
              break;
            case 'min':
              table.userSelectedAmount = table.minTableAmount;
              break;
            default:
              break;
          }
        }
        return table;
      }),
    }));
  },
  pickUpTable: (levelMark) => {
    const tables = get().buyTables;
    const table = tables.find((t) => t.levelMark === levelMark) as ITable;
    table.isSelectTable = true;
    set({ buyTables: tables });
    return table;
  },
  resetPickUpTables: () => {
    const tables = get().buyTables.map((table) =>
      table.isSelectTable ? { ...table, isSelectTable: false } : table,
    );
    set({ buyTables: tables });
  },
  userHasLvl1Table: () => {
    const userLvl1Table = get().buyTables.find(
      (table) => table.levelMark === 'lvl 1',
    );
    return userLvl1Table && userLvl1Table.userBoughtTableQuantity.gt(0)
      ? true
      : false;
  },
  userHasLvl2Table: () => {
    const userLvl2Table = get().buyTables.find(
      (table) => table.levelMark === 'lvl 2',
    );
    return userLvl2Table && userLvl2Table.userBoughtTableQuantity.gt(0)
      ? true
      : false;
  },
  getTotalPrice: () => {
    return get()
      .buyTables.filter((table) => table.isSelectTable)
      .reduce(
        (sum, current) =>
          Decimal.from(sum).add(
            current.userSelectedAmount.mul(current.price).toNumber(),
          ),
        Decimal.from(0),
      );
  },
}));
