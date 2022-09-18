/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import Award from "../../components/Award";

const Awards = () => {
    return (
        <div className={styles.container}>
            <Header title="Awards" />
            <section className={styles.section}>
                <Award
                    title="Finalist of IFEST#10 2022"
                    detail="Issued by Universitas Atma Jaya Yogyakarta · May 2022"
                />
                <Award
                    title="Finalist of The 2021 ACM ICPC Asia Jakarta Regional Contest"
                    detail="Issued by Bina Nusantara University · Nov 2021"
                />
                <Award
                    title="Finalist of GEMASTIK XIV Divisi Pemrograman"
                    detail="Issued by Pusat Prestasi Nasional, Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi · Oct 2021"
                />
                <Award
                    title="Finalist of The 2020 ACM ICPC Asia Jakarta Regional Contest"
                    detail="Issued by Bina Nusantara University · Dec 2020"
                />
                <Award
                    title="Finalist of Falcon Project 10 (Competitive Programming)"
                    detail="Issued by Universitas Pelita Harapan · Nov 2020"
                />
            </section>
        </div>
    );
}

export default Awards;
