  
import styles from "../styles/Products.module.css";

function Products() {
  return (
    <section className={styles.products}>
      <h2>Our Products</h2>
      <div className={styles.grid}>
        
        <img src="/img1.png" alt="Product 1" />
        <img src="/img2.png" alt="Product 2" />
        <img src="/images/product3.jpg" alt="Product 3" />
      </div>
    </section>
  );
}

export default Products;
