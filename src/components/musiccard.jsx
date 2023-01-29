import React from 'react'

import { Col } from "react-bootstrap";

const MusicCard = ({ music_title, music_description, music_imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={music_imgUrl} />
        <div className="proj-txtx">
          <h4>{music_title}</h4>
          <span>{music_description}</span>
        </div>
      </div>
    </Col>
  )
}
export default MusicCard