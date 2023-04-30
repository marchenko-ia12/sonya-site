import type { NextPage } from 'next'
import MasonryGrid from "../components/masonry";
import Layout from "../components/layout";

const Home: NextPage = () => {
	return (
		<Layout>
			<MasonryGrid />
		</Layout>
	)
}

export default Home
