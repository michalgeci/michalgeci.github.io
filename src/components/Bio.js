import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { useTranslation } from 'react-i18next'

import './Bio.css'
import moment from 'moment';
import { Col, Container, Row } from 'shards-react';
import useBootstrapSize from './bootstrapSize';

import bowtie from '../images/profile/bowtie.jpg'
import figg from '../images/profile/figgis.png'
import thugLife from '../images/profile/thug_life.jpg'
import krieg from '../images/profile/krieg.png'
import sith from '../images/profile/sith.jpg'

import planet from '../images/planet.png'

import workIcon from '../images/work.svg'
import educationIcon from '../images/education.svg'
import wrenchIcon from '../images/wrench.svg'

import { useSpring, animated as a } from 'react-spring';

function Bio() {

  var myAge = moment().diff(moment("1995-05-13"), 'years')
  var size = useBootstrapSize()

  // eslint-disable-next-line no-unused-vars
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

    if ((imageIndex1 === images.length - 2 && imageIndex2 === images.length - 1) || (imageIndex1 === images.length - 1 && imageIndex2 === images.length - 2)) {
      setDuration(3500)
      setAnimParams([document.getElementById("my_container").offsetWidth, 48])
      document.getElementById("planet").style.opacity = 1
    }
  }

  const [animParams, setAnimParams] = useState([0, 0])
  const [duration, setDuration] = useState(0)
  const {transform} = useSpring({
    immediate: false,
    reset: true,
    from: { transform: 'scale(0.5) translate(0px, 0px) rotate(-20deg)' },
    to: { transform: `scale(1) translate(${animParams[0]}px, ${animParams[1]}px) rotate(40deg)`},
    config: { duration: duration },
    onRest: ()=>{ 
      document.getElementById("planet").style.opacity = 0
      setDuration(0)
     }
  })

  return (
    <Container id="my_container">

      
      <a.div 
        id="planet" 
        style={ { transform, opacity: 0, position: 'absolute', display: 'flex', width: "120px", height: "100px", zIndex: 99, justifyContent: 'center', alignItems: 'center'}}
        onClick={()=>{
          window.open("https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=michalgeci&view=PD", "_blank")
        }}
      >
        <img src={planet} style={{width: "120px", height: "100px"}} alt="easterEgg"/>
          <h2 className="whiteOutline" outline pill theme="danger" 
                  style={{position: 'absolute', margin: "auto"}} >
            <b>{t('tap')}!</b>
            </h2>
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
            <h3 className="dt">{t('age')}: {myAge}</h3>
            <h5 className="dt">{t('gender')}: ♂</h5>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md="12" lg="6">
          <div style={{display: 'flex', flexFlow: 'column', width: 'fit-content', marginBottom: "48px"}}>
            <div style={{display: 'flex', flexFlow: 'row', width: 'fit-content'}}>
              <img src={workIcon} alt="workIcon" style={{marginRight: "16px", marginBottom: "8px"}}/>
              <h3 style={{marginTop: 'auto', marginBottom: 'auto'}}>{t('work_experience')}</h3>
            </div>

            <h5 style={{marginBottom: '0px'}}>localhost.company</h5>
            <span><b>iOS/Android developer</b></span>
            <span>Aug. 2017 - Sep. 2019, Jan. - Apr. 2020</span>

            <h5 style={{marginBottom: '0px', marginTop: '16px'}}>adastra.one</h5>
            <span><b>iOS developer</b></span>
            <span>Nov. - Dec. 2019</span>


            <div style={{display: 'flex', flexFlow: 'row', marginTop:"24px", marginBottom: "8px", width: 'fit-content'}}>
              <img src={educationIcon} alt="educationIcon" style={{marginRight: "16px"}}/>
              <h3 style={{marginTop: 'auto', marginBottom: 'auto'}}>{t('education')}: <small><i>Ing.</i></small></h3>
            </div>

            <h5 style={{marginBottom: '0px'}}>{t('tuke')} <i><small>2014&nbsp;-&nbsp;2019</small></i></h5>
            <span><b>{t('fei')}, {t('kkui')}</b></span>
            <span>{t('cybernetics')} - {t('is')}</span>

            <h5 style={{marginBottom: '0px', marginTop: '16px'}}>{t('gta')} <i><small>2010&nbsp;-&nbsp;2014</small></i></h5>
            <span>{t('gta_detail')}</span>
          </div>
        </Col>

        <Col md="12" lg="6">
          <div style={{width: 'fit-content'}}>
            <div style={{display: 'flex', flexFlow: 'row', marginBottom: "8px", width: 'fit-content'}}>
              <img src={wrenchIcon} alt="educationIcon" style={{marginRight: "16px"}}/>
              <h3 style={{marginTop: 'auto', marginBottom: 'auto', display: 'inline'}}>{t('skills')}</h3>
            </div>

            <h5 style={{marginBottom: '4px'}}>{t('major_languages')}:</h5>
            <b>
            <ul>
              <li>Kotlin</li>
              <li>Swift</li>
              <li>Python</li>
            </ul>
            </b>

            <span><i>{t('minor_languages')}: <b>JavaScript</b>, <b>C</b>, <b>Java</b></i></span>

            <h5 style={{marginTop: '46px'}}>{t('fancy')}</h5>
            <p><b>React, REST, Postman, JSON, MVC, MVVC, Alamofire, Retrofit, Swagger, CocoaPods, 
              GIT, SCRUM, RxSwift, RxJava, Evolutionary algorithms, Neural networks, Machine learning
              </b></p>
            
            <p><i>{t('last_words')}</i></p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Bio
