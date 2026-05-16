import styles from './ProfileImage.module.css';
function ProfileImage () {
    return (
        <img
        className={styles.image}
        src="https://placehold.co/220x220/1e293b/fbbf24?text=DevSerhat"
        alt="Mehmet Serhat ABA"
        title="Mehmet Serhat ABA"
        />
    );
}
export default ProfileImage;