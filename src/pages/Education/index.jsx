import mikroskil from "../../assets/img/mikroskil.png";
import hacktiv8 from "../../assets/img/hacktiv8.png";
import alterra from "../../assets/img/alterra.png";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import EducationSection from "../../components/EducationSection";

const Education = () => {
    return (
        <div className={styles.container}>
            <Header title="Education" />
            <section className={styles.section}>
                <EducationSection
                    title="Universitas Mikroskil"
                    position="Bachelor's degree, Informatics Engineering"
                    date="Sep 2019 - 2023"
                    logo={mikroskil}
                />
                <EducationSection
                    title="Hacktiv8 Indonesia"
                    position="Studi Independen, React and React Native for Front End Developer"
                    date="Aug 2022 - Dec 2022"
                    logo={hacktiv8}
                />
                <EducationSection
                    title="Alterra Academy"
                    position="Studi Independen, React JS Front-End Engineer"
                    date="Feb 2022 - Jul 2022"
                    logo={alterra}
                />
            </section>
        </div>
    );
}

export default Education;
