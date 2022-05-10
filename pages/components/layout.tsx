import Head from 'next/head'
import styles from '../../styles/main.module.css'
import Header from "./header";
import { ReactElement } from "react";
import Footer from "./footer";

type LayoutPropsType = {
	logo?: boolean,
	children: ReactElement | ReactElement[],
};

const Layout = ({ children , logo = true}: LayoutPropsType): ReactElement => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Sonya&apos;s portfolio</title>
				<meta name="description" content="Sonya Makhson's art portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header logo={logo} />
			<main className={styles.main}>
				{children}
			</main>
			<Footer />
		</div>
	)
}

export default Layout;
