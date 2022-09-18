import { NavLink } from "react-router-dom";
import profile from "../../assets/img/profile.jpeg";

/** Styles */
import styles from "./style.module.css";

const SideBar = () => {

    const menuData = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Experience",
            path: "/experience",
        },
        {
            title: "Education",
            path: "/education",
        },
        {
            title: "Skills",
            path: "/skills",
        },
        {
            title: "Interests",
            path: "/interests",
        },
        {
            title: "Awards",
            path: "/awards",
        }
    ];

    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.img}>
                    <img src={profile} alt="profile" />
                </div>
                {
                    menuData.map((data, dataIdx) => (
                        <NavLink
                            to={data.path}
                            className={styles.sidebar_item}
                            key={dataIdx}
                            style={({ isActive }) => {
                                return {
                                    paddingRight: isActive ? "0.5rem" : "",
                                    color: isActive ? "#0268b1" : "",
                                    borderRight: isActive ? " 8px solid #0583d2" : "",
                                };
                            }}>
                            {data.title}
                        </NavLink>
                    ))
                }
            </div>
        </>

    );
}

export default SideBar;