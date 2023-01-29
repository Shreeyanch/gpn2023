import React from 'react'

import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl,music_title, music_description, music_imgUrl, game_title,game_imgUrl,game_description }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      
      {/* <div className="proj-imgbx">
        <img src={music_imgUrl} />
        <div className="proj-txtx">
          <h4>{music_title}</h4>
          <span>{music_description}</span>
        </div>
      </div> */}

      <div className="proj-imgbx">
        <img src={game_imgUrl} />
        <div className="proj-txtx">
          <h4>{game_title}</h4>
          <span>{game_description}</span>
        </div>
      </div>
    
    </Col>

    
  )
}
export default ProjectCard