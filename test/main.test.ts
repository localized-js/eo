import eo from '../main';

(async () => {
	eo.tabelo.porĈiu([1, 2, 3], n => console.log(n));

	console.log(await eo.kunkura.tabelo.kelke([1, 2, 3], async i => i % 2 === 0))
})();