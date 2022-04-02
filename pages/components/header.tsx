import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/main.module.css'
import Head from "next/head";

const Header = ({ logo = true }) => {
	return (
		<header className={styles.header}>
			<Head>
				<title>Sonya&apos;s portfolio</title>
				<meta name="description" content="Sonya Makhson's art portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.headerImage}>
				<Image
					src={logo ? '/head.jpg' : '/me.png'}
					alt='header image'
					width={logo ? 225 : 180}
					height={180}
				/>
			</div>
			<div className={styles.navigation}>
				<Link href="/">Portfolio</Link>
				<Link href="/about">About</Link>
				<Link href="/contacts">Contacts</Link>
			</div>
		</header>
	);
}

export default Header;