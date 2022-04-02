import Layout from "./components/layout";
import styles from '../styles/main.module.css'

const About = () => {
	return (
		<Layout logo={false}>
			<div className={styles.about}>
				<h1>Sonya Makhson</h1>
				<h2>Children&apos;s book illustrator</h2>
				<p>
					Hello everyone! <br />
					My name is Sonya and I am a freelance book illustrator. I create my illustrations with digital and natural materials. <br />
					I graduated from the Art Institute and now I am constantly studying and practicing new techniques. <br />
					As a child, I constantly drew fairy tale characters, at school I illustrated my first book. <br />
					In my works I am inspired by nature and the beauty of our life.
				</p>
			</div>
		</Layout>
	)
}

export default About;