import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { Card, CardImg, CardBody, CardTitle, Button, CardFooter } from 'shards-react';

import { useTranslation } from 'react-i18next'

import androidLogo from '../images/android.png'
import pwaLogo from '../images/pwa.png'
import iOSLogo from '../images/ios.png'
import nodejsLogo from '../images/nodejs.png'

import secretHitler from '../images/apps/secretHitler.png'
import proofs from '../images/apps/proofs.png'
import covid from '../images/apps/covid.png'
import slovnik from '../images/apps/slovnik.png'
import rickNMorty from '../images/apps/rick_morty.png'
import notes from '../images/apps/notes.png'

import thatsAll from '../images/thats_all.gif'

function Projects() {

  const { t, i18n } = useTranslation()

  const data = [
    {
      "title": "Secret Hitler",
      "image": secretHitler,
      "description": t("secter_hitler_description"),
      "gitUrl": "https://github.com/michalgeci/SecretHitler",
      "url": "https://michalgeci.github.io/SecretHitler/",
      "technology": androidLogo,
      "altTech": "android"
    }, {
      "title": "COVID-19 SK Štatistika",
      "image": covid,
      "description": t("covid_description"),
      "gitUrl": "https://github.com/michalgeci/COVID-19_SK_statistics_android",
      "url": "https://michalgeci.github.io/COVID-19_SK_statistics_android/",
      "technology": androidLogo,
      "altTech": "android"
    }, {
      "title": "Hundreds of Proofs",
      "image": proofs,
      "description": t("proofs_description"),
      "gitUrl": "https://github.com/michalgeci/HundredProofs",
      "url": "https://michalgeci.github.io/HundredProofs/",
      "technology": pwaLogo,
      "altTech": "PWA"
    }, {
      "title": "Slovník cudzích slov",
      "image": slovnik,
      "description": t("slovnik_description"),
      "gitUrl": "",
      "url": "https://play.google.com/store/apps/details?id=sk.slovnik.slovnikcudzchslov",
      "technology": androidLogo,
      "altTech": "android"
    }, {
      "title": "Rick 'n Morty Catalog",
      "image": rickNMorty,
      "description": t("rnm_description"),
      "gitUrl": "https://github.com/michalgeci/RnM_catalog",
      "url": "",
      "technology": iOSLogo,
      "altTech": "iOS"
    }
  ]

  const makeCard = (data, key) => {
    return (<Card key={key} style={{ width: "300px", margin: "1em" }}>
      <CardImg top style={{ width: "300px", height: "200px" }} src={data.image} />
      <CardBody>
        <CardTitle>{data.title}</CardTitle>
        <p style={{ fontStyle: "italic", fontSize: "0.8em", marginBottom: "0px", height: "3em" }}>{data.description}</p>
        <a style={{ fontSize: "0.9em", fontFamily: "monospace", visibility: data.gitUrl === "" ? "hidden" : "visible" }} target="_blank" rel="noopener noreferrer" href={data.gitUrl}>{t("source_code")}</a>
      </CardBody>
      <CardFooter style={{ padding: "0.7rem", display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <div style={{ margin: "auto auto auto 1.175rem" }}>
          <img style={{ maxHeight: "26px" }}
            src={data.technology}
            alt={data.altTech} />
        </div>
        <Button style={{ float: "right", visibility: data.url === "" ? "hidden" : "visible" }} onClick={() => { window.open(data.url, "_blank") }}>
          {t("visit_page")}
        </Button>
      </CardFooter>
    </Card>)
  }

  return (
    <div style={{display: "flex", flexDirection:"column"}}>
      <h1 style={{ marginTop: "24px", marginBottom: "16px", textAlign: "center" }}>{t('my_projects')}</h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
      }}>
        {
          data.map((item, index) => {
            return (makeCard(item, index))
          })
        }

        <Card style={{ width: "300px", margin: "1em" }}>
          <CardImg top style={{ width: "300px", height: "200px" }} src={notes} />
          <CardBody>
            <CardTitle>"Swifty/Tiny Notes"</CardTitle>
            <p style={{ fontStyle: "italic", fontSize: "0.8em", marginBottom: "0px", height: "3em"}}>
              {t("notes_description")}
            </p>
            <div style={{display: "flex", marginTop: "0.5em"}}>
              <a style={{ fontSize: "0.9em", fontFamily: "monospace" }} target="_blank" rel="noopener noreferrer" href={"https://github.com/michalgeci/swiftly_notes"}>iOS app GIT</a>
              <a style={{ fontSize: "0.9em", fontFamily: "monospace", margin: "0 0 0 auto" }} target="_blank" rel="noopener noreferrer" href={"https://github.com/michalgeci/swiftly_notes"}>Backend GIT</a>
            </div>
          </CardBody>
          <CardFooter style={{ padding: "0.7rem", display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <div style={{ margin: "auto auto auto 1.175rem" }}>
              <img style={{ maxHeight: "26px" }}
                src={iOSLogo}
                alt="iOS" /> &nbsp;
              <img style={{ maxHeight: "26px" }}
                src={nodejsLogo}
                alt="nodeJS" />
              <Button style={{visibility: "hidden"}}>Hei</Button>
            </div>
          </CardFooter>
        </Card>

      </div>

      <img style={{margin: "42px auto 42px auto", borderRadius: "16px"}} src={thatsAll} alt="Thats all"/>
    </div>
  )
}

export default Projects
