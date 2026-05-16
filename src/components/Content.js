import styles from './Content.module.css';
import { userData } from "./Data";
import SocialMedia from "./SocialMedia";

function Content () {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{ userData.fullName }</h1>
            <p className={styles.description}>{ userData.title }</p>

            <ul className={styles.skillList}>
                {userData.skills.map((skill, index) => (
                    <li key={index} className={styles.skillItem}>
                        <i className={`fa-solid ${skill.icon} ${styles.skillIcon}`}></i>
                        {skill.name}
                    </li>
                ))}
            </ul>

            <SocialMedia />

            <div className={styles.btnContainer}>
                <button className={styles['btn']}>More About Me</button>
                <a
                className={` ${styles.btn} ${styles['btn-tropy']}`}
                href='/serhat-cv.pdf'
                download="Mehmet_Serhat_ABA_CV"
                title="Download my cv"
                >That's My Cv</a>
            </div>
        </div>
    );
}

export default Content;