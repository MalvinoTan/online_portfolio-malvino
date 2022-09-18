import hacktiv8 from "../../assets/img/hacktiv8.png";
import mikroskil from "../../assets/img/mikroskil.png";
import springkraf from "../../assets/img/springkraf.png";
import alterra from "../../assets/img/alterra.png";
import linkedin from "../../assets/img/linkedin.png";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import Interest from "../../components/Interest";

const Interests = () => {
    return (
        <div className={styles.container}>
            <Header title="Interests" />
            <section className={styles.section}>
                <Interest title="Hacktiv8 Indonesia" followers={8903} logo={hacktiv8} />
                <Interest title="Universitas Mikroskil" followers={4305} logo={mikroskil} />
                <Interest title="Springkraf" followers={143} logo={springkraf} />
                <Interest title="Alterra Academy" followers={4551} logo={alterra} />
                <Interest title="Linkedin News Asia" followers={3039872} logo={linkedin} />
            </section>
        </div>
    );
}

export default Interests;
