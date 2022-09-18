import mikroskil from "../../assets/img/mikroskil.png";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import ExperienceSection from "../../components/ExperienceSection";

const Experience = () => {
    return (
        <div className={styles.container}>
            <Header title="Experience" />
            <section className={styles.section}>
                <ExperienceSection
                    title="Software Engineer"
                    position="Universitas Mikroskil · Full-time"
                    date="Apr 2022 - Present · 6 mos"
                    logo={mikroskil}
                />
            </section>
        </div>
    );
}

export default Experience;
