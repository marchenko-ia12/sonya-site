const importAll = (r: any) => {
	console.log('r', r)
	return r.keys().map(r);
}

const images = importAll(require.context('../../arts/', false, /\.(png|jpe?g|svg)$/));

export default images;