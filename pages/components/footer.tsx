import Link from "next/link";
import styles from '../../styles/main.module.css';

const Footer = ({ logo = true }) => {
	return (
		<footer className={styles.footer}>
			<span>ILLUSTRATIONS BY <Link href="https://www.behance.net/sonyamakhson">SONYA MAKHSON</Link></span>
			<p className={styles.footerText}>All images, photo and video materials belong to their owners and are used for demonstration purposes only. Please do not use them in commercial projects.</p>
		</footer>
	);
}

export default Footer;