
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img src="/images/logo.png" alt="Logo" className={styles.logo} />
      <h1>Welcome to MERA Bestie</h1>
      <p>Creative Designs for Every Occasion</p>
    </header>
  );
}

export default Header;
