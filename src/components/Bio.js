import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { useTranslation } from 'react-i18next'

import './Bio.css'
import moment from 'moment';
import { Col, Container, Row, Button } from 'shards-react';
import useBootstrapSize from './bootstrapSize';

import bowtie from '../images/profile/bowtie.jpg'
import figg from '../images/profile/figgis.png'
import thugLife from '../images/profile/thug_life.jpg'
import krieg from '../images/profile/krieg.png'
import sith from '../images/profile/sith.jpg'

import planet from '../images/planet.png'

import { useSpring, animated as a } from 'react-spring';

function Bio() {

  var myAge = moment().diff(moment("1995-05-13"), 'years')
  var size = useBootstrapSize()

  const { t, i18n } = useTranslation()

  const [flip, setFlip] = useState("")
  const [imageIndex1, setImageIndex1] = useState(0)
  const [imageIndex2, setImageIndex2] = useState(-1)

  const images = [krieg, figg, bowtie, thugLife, sith]

  var centerOnSmall = () => {
    if (size === 'sm' || size === 'xs') {
      return "marginAuto"
    }
  }

  var flipImage = () => {
    increaseIndex()
    if (flip === "") {
      setFlip("flip")
    } else {
      setFlip("")
    }
  }

  function increaseIndex() {
    if (flip === "") {
      if (imageIndex2 + 2 >= images.length) {
        setImageIndex2(imageIndex2 - images.length + 2)
      } else {
        setImageIndex2(imageIndex2 + 2)
      }
    } else {
      if (imageIndex1 + 2 >= images.length) {
        setImageIndex1(imageIndex1 - images.length + 2)
      } else {
        setImageIndex1(imageIndex1 + 2)
      }
    }

    console.log(imageIndex1, imageIndex2)
    if ((imageIndex1 === images.length - 2 && imageIndex2 === images.length - 1) || (imageIndex1 === images.length - 1 && imageIndex2 === images.length - 2)) {
      setAnimParams([document.getElementById("my_container").offsetWidth, 48])
      document.getElementById("planet").style.opacity = 1
    }
  }

  const [animParams, setAnimParams] = useState([0, 0])
  const [duration, setDuration] = useState(0)
  const {transform} = useSpring({
    immediate: false,
    reset: true,
    from: { transform: 'scale(0.5) translate(0px, 0px) rotate(0deg)' },
    to: { transform: `scale(1) translate(${animParams[0]}px, ${animParams[1]}px) rotate(60deg)`},
    config: { duration: duration },
    onRest: (ab)=>{ 
      document.getElementById("planet").style.opacity = 0
      console.log(ab)
      if(duration === 0) {
        setDuration(3500)
      }
     }
  })

  return (
    <Container id="my_container">

      
      <a.div 
        id="planet" 
        style={ {transform, opacity: 0, position: 'absolute', display: 'flex', width: "120px", height: "100px", zIndex: 99, justifyContent: 'center', alignItems: 'center'}}
        onClick={()=>{
          window.open("https://ssd.jpl.nasa.gov/sbdb.cgi?sstr=31463;old=0;orb=1;cov=0;log=0;cad=0#orb", "_blank")
        }}
      >
        <img src={planet} style={{width: "120px", height: "100px"}} alt="easterEgg"/>
          <Button outline pill theme="danger" 
                  style={{position: 'absolute', margin: "auto"}} >
            CLICK ME
            </Button>
      </a.div>

      <Row>
        <Col sm="12" md="5" lg="4">

          <Row>
            <div className="marginAuto imageContainer">
              <div className={"dropShadow profileImageBox " + flip} onClick={flipImage}>
                <img className="marginAuto profileImage imageFront" src={images[imageIndex1]} alt="profile_picture" />
              </div>

              <div style={{position: 'absolute'}} className={"dropShadow profileImageBox " + (flip === "" ? "flip" : "")} onClick={flipImage}>
                <img className="marginAuto profileImage imageFront" src={images[imageIndex2]} alt="profile_picture" />
              </div>
            </div>


          </Row>
        </Col>

        <Col style={{ display: 'flex' }} className="marginAuto" sm={{ size: 8, order: 2, offset: 2 }} md="7" lg="8">
          <div className={centerOnSmall()} style={{ width: "fit-content" }}>
            <h1 className="dt">Michal Géci</h1>
            <h3 className="dt">age: {myAge}</h3>
            <h5 className="dt">gender: ♂</h5>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Bio
