import styles from "./style";
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Billing, MusicCard, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, ProjectCard, Projects,TOUCH } from "./components";

const App = () => (
  <div className="bg-primaryy w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primaryy ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    
    <div className={`bg-primaryy ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <ProjectCard />
        <Projects />
        <Business />
        <Billing />
        <Testimonials />
        {/* <CONTACT/> */}
        <TOUCH/>
        <CTA />        

        
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
