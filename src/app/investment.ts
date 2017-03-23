import { TransactionI } from './transaction-interface';

export class Investment {

    id: number;
    name: string;
    investmentId: string;
    investerId: string;
    transactions: TransactionI[];
    lockInPeriod: number;

    constructor (public id: name,public investmentId: string,public investerId: string,public transactions: Transaction[],
        public lockInPeriod: number) {}

}