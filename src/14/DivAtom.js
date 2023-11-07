import { atom, selector } from "recoil";

export const DivAtom = atom({
    key : 'DivAtom',
    default : 0
});

export const DivAtom2 = selector({
    key : 'DivAtom2',
    get : ({get}) => {
        return get(DivAtom) * 2;
    }
});

export const DivAtom3 = selector({
    key : 'DivAtom3',
    get : ({get}) => {
        return get(DivAtom) * 3;
    }
});

export const DivAtom4 = selector({
    key : 'DivAtom4',
    get : ({get}) => {
        return get(DivAtom) * 4;
    }
});