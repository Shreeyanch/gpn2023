import styles from "../style";
import Button from "./Button";

const CTA = () => (
  
  <section className="abc">
    <div className=" w-100  flex-row mb-5"><iframe className="map  w-[100%] h-[400px] mr-5"  src="https://www.youtube.com/embed/pKazei2OFug" />;
    <iframe className="map  w-[100%] h-[400px] "src="https://www.youtube.com/embed/n28Q6x0un5Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    
    
    <iframe className="map w-[100%] h-[250px] " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6395745199497!2d85.32644025095604!3d27.69753258271147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a47af3fe01%3A0x649bcea35813c85f!2sGlobal%20Nepal%20Printing%20Press%20Service%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1654402483992!5m2!1sen!2sin" />
    
    {/* <div className="">
      <h2 className={styles.heading2}>How to Purchase?</h2>
      
      
      
      <p className={`${styles.paragraph}  max-w-[470px] mt-5`}>
      
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div> */}
  </section>
);

export default CTA;
