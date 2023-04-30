import Layout from "../components/layout";
import styles from '../styles/main.module.css'

const Contacts = () => {
	return (
		<Layout>
			<a href="https://sonyamakhson.art/" target="_blank">
				<p className={styles.contacts}>My Website</p>
			</a>
			<a href="https://www.behance.net/sonyamakhson" target="_blank">
				<p className={styles.contacts}>My Behance</p>
			</a>
			<a href="https://illustrators.ru/users/artstudiosonya" target="_blank">
				<p className={styles.contacts}>Illustrators.ru</p>
			</a>
			<a href="https://www.instagram.com/art.studio.sonya/" target="_blank">
				<p className={styles.contacts}>Instagram</p>
			</a>
			<a href="https://t.me/sofyamakhson" target="_blank">
				<p className={styles.contacts}>Telegram</p>
			</a>
			<a href="mailto:makshonsofya@gmail.com" >
				<p className={styles.contacts}>Email</p>
			</a>
	</Layout>
	)
}

export default Contacts;