
import styles from "../styles/CreativeDesigns.module.css";

function CreativeDesigns() {
  return (
    <section className={styles.creative}>
     <div><h1>Creative Designs 
             for Every Occasion
</h1>
<p>Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.</p>
</div>
      <div className={styles.grid}>
          <div> 
            <img src="img9.png" alt="Creative Design 1" />
         </div>

        <img src="img10.png" alt="Creative Design 2" id="A" />
        <img src="img11.png" alt="Creative Design 3"id="B" />
        <img src="img12.png" alt="Creative Design 4"id="C" />
        
      </div>

     

      
      {/* <div> <img src="img11.png" alt="Creative Design 1"id="B" />
       </div> */}
     
    </section>
  );
}

export default CreativeDesigns;
