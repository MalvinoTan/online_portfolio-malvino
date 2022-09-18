import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";

const About = () => {
    return (
        <div className={styles.container}>
            <Header title="About" />
            <section className={styles.section}>
                <h2>MALVINO AUSTIN TANURA</h2>
                <em>Software Engineer at Universitas Mikroskil Medan</em>
                <h3>Contact</h3>
                <em>+62895633098496</em>
                <em>malvinoaustintanura@gmail.com</em>
                <h3>About Me</h3>
                <p>
                    A software engineer and last year student from Universitas Mikroskil Medan
                    who is interested in Programming and Leadership
                </p>
                <br />
                <div className={styles.icons}>
                    <a href="https://www.instagram.com/malvino.tan/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/malvino-austin-tanura/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                    </a>
                </div>
            </section>
        </div>
    );
}

export default About;
