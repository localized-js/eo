import localized from '@localized/core';
const { array } = localized.concurrent;

export const ĉiu = array.every() as <A>(tabelo: A[], funkco: (elemento: A, indekso: number, tabelo: A[]) => Promise<boolean>) => Promise<boolean>;
export const cxiu = ĉiu;
export const filtri = array.filter() as <A>(tabelo: A[], funkco: (elemento: A, indekso: number, tabelo: A[]) => Promise<boolean>) => Promise<A[]>;
export const trovi = array.find() as <A>(tabelo: A[], funkco: (elemento: A, indekso: number, tabelo: A[]) => Promise<boolean>) => Promise<A>;
export const troviIndekso = array.findIndex() as <A>(tabelo: A[], funkco: (elemento: A, indekso: number, tabelo: A[]) => Promise<boolean>) => Promise<number>;
export const plataMapi = array.flatMap() as <A, B>(tabelo: A[], funkco: (elemento: A, indekso: number, tabelo: A[]) => Promise<B>) => Promise<B[]>;
export const porĈiu = array.forEach() as <A>(tabelo: A[], funkco: (elemento: A, indekso: number, tabelo: A[]) => Promise<void>) => Promise<void>;
export const porCxiu = porĈiu;
export const mapi = array.map() as <A, B>(tabelo: A[], funkco: (elemento: A, indekso: number, tabelo: A[]) => Promise<B>) => Promise<B[]>;
export const kelke = array.some() as <A>(tabelo: A[], funkco: (elemento: A, indekso: number, tabelo: A[]) => Promise<boolean>) => Promise<boolean>;