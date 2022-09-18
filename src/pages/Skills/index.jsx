/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import Skill from "../../components/Skill";

const Skills = () => {
    return (
        <div className={styles.container}>
            <Header title="Skills" />
            <section className={styles.section}>
                <Skill title="PHP" />
                <Skill title="Laravel/Lumen" />
                <Skill title="Twig" />
                <Skill title="Symfony Framework" />
                <Skill title="jQuery" />
                <Skill title="Leardership" />
                <Skill title="Problem Solving" />
                <Skill title="Team Leadership" />
                <Skill title="Guitar Playing" />
                <Skill title="Cascading Style Sheets (CSS)" />
                <Skill title="HTML" />
                <Skill title="C++" />
                <Skill title="JavaScript" />
                <Skill title="React JS" />
            </section>
        </div>
    );
}

export default Skills;
