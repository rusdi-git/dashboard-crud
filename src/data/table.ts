import useSWRImmutable from 'swr/immutable'
import {faker} from '@faker-js/faker';
import { Table } from './type';
import { Laggy, laggy } from '../helper/swr';

async function getTables() {
    const total = faker.datatype.number({min:1,max:10});
    const result:Table[] = [];
    for (let i = 0; i < total; i++) {
        result.push({
            name:faker.name.jobTitle(),
            id:faker.datatype.uuid()
        });
    }
    return result
}

export function useGetTables() {
    const res = useSWRImmutable('tables', getTables, { use: [laggy] });
    const { data, error, isLagging, resetLaggy } = res as Laggy<typeof res>;
    return {
      data,
      error,
      isLagging,
      resetLaggy,
    };
  }