import * as tabelo from './tabelo';
import * as kunkuraTabelo from './kunkura/tabelo';
import * as lauviĉaTabelo from './lauviĉa/tabelo';

const eksporti = {
	tabelo,
	kunkura: {
		tabelo: kunkuraTabelo,
	},
	lauviĉa: {
		tabelo: lauviĉaTabelo,
	},
	lauvicxa: {
		tabelo: lauviĉaTabelo,
	}
};

export = eksporti;