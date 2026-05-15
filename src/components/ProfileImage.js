import styles from './ProfileImage.module.css';
function ProfileImage () {
    return (
        <img
        className={styles.image}
        src="profile.jpg"
        alt="Mehmet Serhat ABA"
        title="Mehmet Serhat ABA"
        />
    );
}
export default ProfileImage;