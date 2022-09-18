import mpc from "../../assets/img/mpc.png";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import Organization from "../../components/Organization";

const Organizations = () => {
    return (
        <div className={styles.container}>
            <Header title="Organizations" />
            <section className={styles.section}>
                <Organization
                    position="Leader"
                    title="Mikroskil Programming Club"
                    date="Oct 2021 - Present"
                    logo={mpc}
                />
                <Organization
                    position="Vice Leader"
                    title="Mikroskil Programming Club"
                    date="Sep 2020 - Oct 2021"
                    logo={mpc}
                />
            </section>
        </div>
    );
}

export default Organizations;
