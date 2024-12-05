
import styles from "../styles/CreativeDesigns.module.css";

function CreativeDesigns() {
  return (
    <section className={styles.creative}>
      <h2>Creative Designs</h2>
      <div className={styles.grid}>
        <img src="/images/creative1.jpg" alt="Creative Design 1" />
        <img src="/images/creative2.jpg" alt="Creative Design 2" />
      </div>
    </section>
  );
}

export default CreativeDesigns;
