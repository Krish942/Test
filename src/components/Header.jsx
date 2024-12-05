
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>Revolutionizing Gift Giving</h1>
        <p className={styles.description}>
          Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat.
          Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet
          at. Magna nam platea justo.
        </p>
        <button className={styles.learnMoreButton}>Learn More</button>
      </div>
      <div className={styles.imageSection}>
        <img src="img8.png" alt="Background" className={styles.backgroundImage} />
      </div>
    </header>
  );
}

export default Header;
