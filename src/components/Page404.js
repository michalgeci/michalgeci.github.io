import React from 'react';
import { useTranslation } from 'react-i18next'
import image from '../images/404.png'


function Page404() {

  // eslint-disable-next-line no-unused-vars
  const { t, _i18n } = useTranslation()

  return (
    <div style={{display: 'flex', flexFlow:'column'}}>
      <img className="dropShadow" src={image} style={{width: "400px", height:"200px", margin: "32px auto auto auto", borderRadius: "16px"}} alt="404"/>
      <h1 style={{margin: "32px auto auto auto"}}>{t("404")}</h1>
    </div> 
  )
}

export default Page404