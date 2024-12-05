import styles from "../styles/OurCreations.module.css";

function OurCreations() {
  return (
    <section className={styles.creations}>
      <h2 className={styles.title}>Our Creations</h2>
      <p className={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&lsquo;s
        standard dummy text.
      </p>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="img13.png" alt="Product Categories" className={styles.image} />
          <h3>Product Categories</h3>
          <p>Personalized Gifts</p>
        </div>
        <div className={styles.card}>
          <img src="img14.png" alt="Customer Stories" className={styles.image} />
          <h3>Customer Stories</h3>
          <p>John&#39;s Wedding Gift Set</p>
        </div>
        <div className={styles.card}>
          <img src="img15.png" alt="Best-Selling Items" className={styles.image} />
          <h3>Best-Selling Items</h3>
          <p>Premium Leather Journal</p>
        </div>
      </div>
      <button className={styles.shopNowButton}>Shop Now</button>
      
    </section>
    
  ); 
}

export default OurCreations;
