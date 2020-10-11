import React from 'react';
import { Button, ButtonGroup, Nav, NavItem, NavLink } from 'shards-react'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

function Navigation() {

  const { t, i18n } = useTranslation()
  const changeLanguage = (langCode) => {
    localStorage.setItem("savedLang_michalgeci", langCode)
    i18n.changeLanguage(langCode)
  }
  const location = useLocation()

  return (
    <Nav tabs>

      <NavItem>
        <NavLink active={location.pathname === "/"} href="#/">
          {t('about_me')}
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink active={location.pathname === "/projects"} href="#/projects">
          {t('my_projects')}
        </NavLink>
      </NavItem>



      <li style={{ marginLeft: 'auto' }}>
        <ButtonGroup>
          <Button outline={i18n.language !== "sk"} onClick={() => { changeLanguage("sk") }}>SK</Button>
          <Button outline={i18n.language !== "en"} onClick={() => { changeLanguage("en") }}>EN</Button>
        </ButtonGroup>
      </li>
    </Nav>
  )
}

export default Navigation