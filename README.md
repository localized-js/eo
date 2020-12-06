# <small>@localized/</small> *Esperanto*

(This guide is currently only available in English)

## Installation

```sh
npm install @localized/eo
```

```js
const eo = require('@localized/eo');
```

or in TypeScript

```ts
import eo from '@localized/eo';
```

## Exports

Exported is an object: top-level properties expose sync methods while the two objects `kunkura` (concurrent) and `lauviĉa` (sequential) contain async methods, (mostly that take higher-order async functions) such as `eo.kunkura.tabelo.mapi` representing an async concurrent map taking an async function as the mapper.

## Sync

### `tabelo`

This is the array object. It exposes every function in `Array` and `Array.prototype` (as of ES2019) named in Esperanto.

(all functions list coming soon)

- `tabelo.interligi` (`Array#concat`)
- `tabelo.moviMemoron` (`Array#copyWithin`)
- `tabelo.eniroj` (`Array#entries`)
- `tabelo.ĉiu` (`Array#every`)
- `tabelo.plenigi` (`Array#fill`)
- `tabelo.filtri` (`Array#filter`)
- `tabelo.trovi` (`Array#find`)
- `tabelo.troviIndekso` (`Array#findIndex`)
- `tabelo.platigi` (`Array#flat`)
- `tabelo.plataMapi` (`Array#flatMap`)
- `tabelo.porĈiu` (`Array#forEach`)
- `tabelo.inkluzivas` (`Array#includes`)
- `tabelo.indeksoDe` (`Array#indexOf`)
- `tabelo.unuigi` (`Array#join`)
- `tabelo.klavoj` (`Array#keys`)
- `tabelo.lastaIndeksoDe` (`Array#lastIndexOf`)
- `tabelo.kraketi` (`Array#pop`) -- can someone help translate it better?
- `tabelo.puŝi` (`Array#push`)
- `tabelo.redukti` (`Array#reduce`)
- `tabelo.dekstraRedukti` (`Array#reduceRight`)
- `tabelo.inversigi` (`Array#reverse`)
- `tabelo.movi` (`Array#shift`) -- can someone help translate it better?
- `tabelo.tranĉi` (`Array#slice`)
- `tabelo.kelke` (`Array#some`)
- `tabelo.klasi` (`Array#sort`)
- `tabelo.splisi` (`Array#splice`)
- `tabelo.malmovi` (`Array#unshift`) -- can someone help translate it better?
- `tabelo.valoroj` (`Array#values`)
- `tabelo.signovicigi` (`Array#toString`)
- `tabelo.lokaSignovicigi` (`Array#toLocaleString`)
- `tabelo.longeco` (`Array#length`)
- `tabelo.de` (`Array.from`) -- can someone help translate it better?
- `tabelo.da` (`Array.of`) -- can someone help translate it better?
- `tabelo.estasTabelo` (`Array.isArray`)

#### Example (TS)

```ts
import { tabelo } from '@localized/eo';
console.log(tabelo.unuigi(tabelo.interligi([tabelo.redukti(tabelo.mapi([1, 2, 3], i => i + 1), (a, b) => a + b)], [10, 11, 12]), ' & '));
// → "9 & 10 & 11 & 12"
```

## Async (concurrent)

### `kunkura.tabelo`

This is the concurrent async array object. It exposes 8 functions:

- `kunkura.tabelo.ĉiu` (`Array#every`)
- `kunkura.tabelo.filtri` (`Array#filter`)
- `kunkura.tabelo.trovi` (`Array#find`)
- `kunkura.tabelo.troviIndekso` (`Array#findIndex`)
- `kunkura.tabelo.plataMapi` (`Array#flatMap`)
- `kunkura.tabelo.porĈiu` (`Array#forEach`)
- `kunkura.tabelo.mapi` (`Array#map`)
- `kunkura.tabelo.kelke` (`Array#some`)

The corresponding `Array` methods are not one to one, as the higher-order functions should return a `Promise`.

## Async (sequential)

### `lauviĉa.tabelo`

This is the sequential async array object. It exposes 10 functions:

- `lauviĉa.tabelo.ĉiu` (`Array#every`)
- `kunkura.tabelo.filtri` (`Array#filter`)
- `kunkura.tabelo.trovi` (`Array#find`)
- `kunkura.tabelo.troviIndekso` (`Array#findIndex`)
- `kunkura.tabelo.plataMapi` (`Array#flatMap`)
- `kunkura.tabelo.porĈiu` (`Array#forEach`)
- `kunkura.tabelo.mapi` (`Array#map`)
- `kunkura.tabelo.redukti` (`Array#reduce`)
- `kunkura.tabelo.dekstraRedukti` (`Array#reduceRight`)
- `kunkura.tabelo.kelke` (`Array#some`)

The corresponding `Array` methods are not one to one, as the higher-order functions should return a `Promise`.

## Usage notes

This package supports x-notation, so for example `ĉ` can be replaced with `cx` (eg `tabelo.cxiu()`)

## Contributions

*Mi estas komencanta esperantisto*, so if you can help translate I appreciate! If you instead want to add a function, check the [core package](https://www.npmjs.com/package/@localized/core) doc.

## License

`MIT`
