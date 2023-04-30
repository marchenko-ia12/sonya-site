const importAll = (r: any) => {
	return r.keys().map(r);
}

const images = importAll(require.context('../arts/', false, /\.(png|jpe?g|webp)$/));

export default images;