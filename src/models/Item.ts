import { Item2 } from './item2';

export interface Item {
    name: string;
    caption: string;
    image: string;
    items: Item2[];
    price: any;
}