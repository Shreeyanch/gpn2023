import { client } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={client} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>z
      <h2 className="text-gradient font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
         Some clients <br className="sm:block hidden" /> we have worked with.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With more than 10 years of experiece in the fields of field-academic, book publishing, pre-press, offset, digital printing, graphic designing. We have helped various private, government, non profit, international organizations with their printing works. Here are some of our clients.
        
      </p>
      

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
  </section>
  
);

export default Billing;
