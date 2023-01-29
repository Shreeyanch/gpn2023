
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard  from "./projectcard";


import { projectimg1,projectimg2,projectimg3,colorsharp2,netflix,
  crunchyroll,
  youtubepremium,
  amazonprime,
  Hotstar, timesprime,applemusic,
  spotify, giftcards,gametokens,playstationgift,
  applegift,
  rolblox,
  valopoints,
  gp,
  fortnight,




  stitch,
  sm47,
  cronctp,
  polarcutting,
  lamination,
  kotakctp,
  mop,
  nine,
  twenty,
  more,

  broshure,
  wallcalender,
  tablecalender,
  letterhead,
  files,
folding,} from "../assets";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

  const projects = [
    {
      title: "Broshure",
      // description: "Broshure",
      imgUrl: broshure ,
    },
    {
      title: "Wall calender",
      // description: "Wall calender",
      imgUrl:wallcalender ,
    },
    {
      title: "Table Calender",
      // description: "Table Calender",
      imgUrl: tablecalender ,
    },
    {
      title: "Letterhead",
      // description: "Letter Heads ",
      imgUrl:letterhead,
    },
    {
      title: "Books",
      // description: "Books",
      imgUrl: files,
    },
    {
      title: "and many more...",
      // description: "and many more...",
      imgUrl: more,
    },
    

  ];

  // const music_projects = [
  //   {
  //     music_title: "Spotify",
  //     // music_description: "Design & Development",
  //     music_imgUrl: spotify,
  //   },
  //   {
  //     music_title: "Apple Music",
  //     // music_description: "Design & Development",
  //     music_imgUrl: applemusic,
  //   },
    
  // ];

  const  games_projects = [
   
    {
      game_title: "SM47(20X30)",
      // game_description: "SM47(20X30)",
      game_imgUrl: sm47,
    },
    {
      game_title: "MOP(19X25)",
      // game_description: "MOP(19X25)",
      game_imgUrl: mop,
    },{
      game_title: "19X25",
      // game_description: "19X25",
      game_imgUrl: nine,
    },{
      game_title: "20X30",
      // game_description: "20X30",
      game_imgUrl: twenty,
    },
    {
      game_title: "Kotak CTP",
      // game_description: "Kotak CTP",
      game_imgUrl: kotakctp,
    },
    {
      game_title: "Cron CTP",
      // game_description: "Cron CTP",
      game_imgUrl: cronctp,
    },
    {
      game_title: "Stitch",
      // game_description: "Stitch",
      game_imgUrl: stitch,
    },
    {
      game_title: "Folding",
      // game_description: "Folding",
      game_imgUrl:folding,
    },
    {
      game_title: "Lamination",
      // game_description: "Lamination",
      game_imgUrl:lamination,
    },
    // {
    //   game_title: "Lamination",
    //   // game_description: "Lamination",
    //   game_imgUrl:lamination ,
    // },
    // {
    //   game_title: "Polarcutting",
    //   // game_description: "Polarcutting",
    //   game_imgUrl:polarcutting ,
    // },


  ];
 

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <center><span className="text-gradient font-poppins mb-lg-2 font-semibold ss:text-[62px] text-[42px] text-white ">Services</span></center>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className=" font-poppinsnav-pills mb-5 mt-lg-2 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Machines</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Details</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          games_projects.map((project2, index2) => {
                            return (
                              <ProjectCard
                                key={index2}
                                {...project2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p><ol> 
                    <li><b>1.</b> SM74 20"X30" Heidelberg Multi color Machine -1set</li>
                    <li><b>2.</b> Mov 19"X25" Heidelberg Multi Color Machine -1set</li>
                    <li><b>3.</b> SORM 20"X30" Heidelberg Single Color Machine -1set</li>
                    <li><b>4.</b> MO 19"X25" Heidelberg Single Color Machine -1set</li>
                    <li><b>5.</b> 36" Polar Cutting Machine -1set</li>
                    <li><b>6.</b> Power Stich Machine 1.25 inch -1set</li>
                    <li><b>7.</b> Power Stich Machine 0.75inch -2set</li>
                    <li><b>8.</b> Kodak Thermal CTP Machine -1set</li>
                    <li><b>9.</b> Crown CTP Machine 1set</li>
                    <li><b>10.</b> Horizon 4 Clamp Glue Banding Machine -1set</li>
                    <li><b>11.</b> Lamination Machine Thermal & Normal -2set</li>
                    <li><b>12.</b> Generator 50 KVA -1set</li>
                    <li><b>13.</b> Generator 30KVA -1set</li>
                    <li><b>14.</b> Delivery Van -1nos.</li>
                    <li><b>15.</b> Motor Bike -3nos.</li>


                      </ol></p>

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorsharp2}></img>
    </section>
  );
};
export default Projects