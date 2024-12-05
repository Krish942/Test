import styles from "../styles/Products.module.css";

function Products() {
  return (
    <section className={styles.products} id="section">
      <div className={styles.visionContainer}>
        {/* Vision Section */}
        <div className={styles.visionText}>
          <h1 style={{ fontWeight: 1000 }}>Vision</h1>
          <p>
            Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat.
            Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit
            aliquet at. Magna nam platea justo.
          </p>
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>
        <div className={styles.visionImage}>
          <img src="img7.png" alt="Vision" />
        </div>
      </div>

      {/* Existing Product Grid */}
      <div>
        <h1 style={{ fontWeight: 1000 }}>Products</h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&lsquo;s
        standard dummy text.
      </div>
      <div className={styles.grid}>
        <div>
          <img src="/img2.png" alt="Product 1" />
          <h1>Stationary Items</h1>
          Ante mus blandit sapien sociosqu per consequat ad.
        </div>

        {/* Second Product */}
        <div>
          <img src="/img3.png" alt="Product 2" id="img2" />
          <h1>Couple Gift Items</h1>
          Ante mus blandit sapien sociosqu
        </div>

        {/* Third Product */}
        <div>
          <img src="img5.png" alt="Product 3" id="img3" />
          <h1>Greeting Cards</h1>
          Ante mus blandit sapien sociosqu per consequat ad.
        </div>

        {/* Fourth Product */}
        <div>
          <img src="img6.png" alt="Product 4" id="img4" />
          <h1>Gift Items</h1>
          Ante mus blandit sapien sociosqu per consequat ad.
        </div>
      </div>
    </section>
  );
}

export default Products;
