import type { StaticImageData } from 'next/image';
import { create } from 'zustand';

import BuyTableCardLevel1 from '@/../public/images/buy-table-card-level-1.png';
import BuyTableCardLevel2 from '@/../public/images/buy-table-card-level-2.png';
import BuyTableCardLevel3 from '@/../public/images/buy-table-card-level-3.png';

export interface ITable {
  levelTitle: string;
  levelMark: string;
  image: StaticImageData;
  price: number;
  minTableAmount: number;
  maxTableAmount: number;
  isSelectTable: boolean;
  userSelectedAmount: number;
  userBoughtTableQuantity: number;
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
  userHasLvl1AndLvl2Table: () => boolean;
  getTotalPrice: () => number;
}

export const useBuyTable = create<ITables>((set, get) => ({
  buyTables: [
    {
      levelTitle: 'level 1',
      levelMark: 'lvl 1',
      image: BuyTableCardLevel1,
      price: 0.15,
      minTableAmount: 3,
      maxTableAmount: 15,
      isSelectTable: false,
      userSelectedAmount: 3,
      userBoughtTableQuantity: 0,
    },
    {
      levelTitle: 'level 2',
      levelMark: 'lvl 2',
      image: BuyTableCardLevel2,
      price: 0.3,
      minTableAmount: 2,
      maxTableAmount: 10,
      isSelectTable: false,
      userSelectedAmount: 2,
      userBoughtTableQuantity: 0,
    },
    {
      levelTitle: 'level 3',
      levelMark: 'lvl 3',
      image: BuyTableCardLevel3,
      price: 0.5,
      minTableAmount: 1,
      maxTableAmount: 5,
      isSelectTable: false,
      userSelectedAmount: 1,
      userBoughtTableQuantity: 0,
    },
  ],
  updateUserSelectedAmount: (levelMark, action) => {
    set((state) => ({
      buyTables: state.buyTables.map((table) => {
        if (table.levelMark === levelMark) {
          switch (action) {
            case 'increase':
              table.userSelectedAmount++;
              break;
            case 'decrease':
              table.userSelectedAmount--;
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
    console.log('PickUpTable');
    const tables = get().buyTables;
    const table = tables.find((t) => t.levelMark === levelMark) as ITable;
    table.isSelectTable = true;
    set({ buyTables: tables });
    console.log(`PickUpTable [0] ${get().buyTables[0].isSelectTable}`);
    console.log(`PickUpTable [1] ${get().buyTables[1].isSelectTable}`);
    console.log(`PickUpTable [2] ${get().buyTables[2].isSelectTable}`);
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
    return userLvl1Table && userLvl1Table.userBoughtTableQuantity > 0
      ? true
      : false;
  },
  userHasLvl1AndLvl2Table: () => {
    return get()
      .buyTables.filter(
        (table) => table.levelMark === 'lvl 1' || table.levelMark === 'lvl 2',
      )
      .every((t) => t.userBoughtTableQuantity > 0);
  },
  getTotalPrice: () => {
    return +get()
      .buyTables.filter((table) => table.isSelectTable)
      .reduce(
        (sum, current) => sum + current.userSelectedAmount * current.price,
        0,
      )
      .toFixed(2);
  },
}));
