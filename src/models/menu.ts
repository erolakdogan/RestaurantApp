import { Item } from './Item';

export interface Menu {
    key: string;
    description: string;
    items: Item[];
    orderTag: string;
    active: boolean;
}