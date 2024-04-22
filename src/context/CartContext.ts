import { createContext, Dispatch, SetStateAction } from 'react';

export type CartContextType = {
    cartItemNumber: number;
    setCartItemNumber: Dispatch<SetStateAction<number>>;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);
