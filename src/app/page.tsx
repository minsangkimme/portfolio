'use client';

import Image from 'next/image';
import style from './style.module.scss';
import MailIcon from '../../public/image/icon/mail.svg';
import LinkIcon from '../../public/image/icon/linkedin.svg';
import GithubIcon from '../../public/image/icon/github.svg';
import Profile from '../../public/image/profile/profile1.png';
import Project1 from '../../public/image/project/project1.png';
import Project2 from '../../public/image/project/project2.png';
import Project3 from '../../public/image/project/project3.png';
import Project4 from '../../public/image/project/project4.png';
import Project5 from '../../public/image/project/project5.png';
import Project6 from '../../public/image/project/project6.png';
import Project7 from '../../public/image/project/project7.png';
import Project8 from '../../public/image/project/project8.png';

import ChannelService from "../thirdParty/channeltalk";
import shortid from 'shortid';
import { useTranslation } from 'react-i18next';
import i18n from "../thirdParty/i18n";

import clsx from "clsx";
import {useEffect, useState} from "react";

const account = {
  email: 'lorenlee.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lorenlee-dev',
  github: 'https://www.github.com/lorenleedev'
}

// 오래된 순으로 나열
const works = [
  {
    image: Project3,
  },
  {
    image: Project4,
  },
  {
    image: Project1,
  },
  {
    image: Project2,
  },
  {
    image: Project5,
  },
  {
    image: Project6,
  },
  {
    image: Project7,
  },
  {
    image: Project8,
  },
]

const skills = [
  {
    label: 'Typescript',
    color: '#ffb53e',
    backgroundColor: '#faf8f4'
  },
  {
    label: 'React',
    color: '#3e8af7',
    backgroundColor: '#eef7fc'
  },
  {
    label: 'Vue',
    color: '#64d17c',
    backgroundColor: '#f4faf4'
  },
  {
    label: 'Next',
    color: '#7f5cf1',
    backgroundColor: '#f5f3fb'
  },
  {
    label: 'SCSS',
    color: '#ff5150',
    backgroundColor: '#fdf4f3'
  },
  {
    label: 'Webflow',
    color: '#4d4d4d',
    backgroundColor: '#f4f4f4'
  },
  {
    label: 'UI',
    color: '#fff62a',
    backgroundColor: '#ffffe5'
  }
]
const Account = ({lang, handleChangeLanguage}: {lang: string, handleChangeLanguage: () => void}) => {

  return (
    <div className={style.socialWrapper}>
      <a href={`mailto:${account.email}`}>
        <MailIcon color={'#212121'}/>
      </a>
      <a
        href={account.linkedin}
        target={"_blank"}
      >
        <LinkIcon color={"#212121"}/>
      </a>
      <a href={account.github}

         target={"_blank"}
      >
        <GithubIcon color={"#212121"}/>
      </a>
      <a
        title={lang.includes("ko-KR") ? "translate into English" : "한국어로 보기"}
        className={style.languageButton}
        onClick={handleChangeLanguage}
      >
        {lang.includes("ko-KR") ? "🇬🇧" : "🇰🇷"}
      </a>
    </div>
  )
}
export default function Home() {
  const { t } = useTranslation();
  const [lang, setLang] = useState("en-US");

  useEffect(() => {
    setLang(navigator?.language || "en-US");
    ChannelService.loadScript();
    ChannelService.boot({
      "pluginKey": "1667bdd5-209d-4b93-9292-87af6353a474", // fill your plugin key
      "customLauncherSelector": "#custom-channeltalk-button",
      "hideChannelButtonOnBoot": true
    });
  }, []);

  const handleChangeLanguage = () => {
    if (lang.includes("ko-KR")) {
      i18n.changeLanguage("en-US")
      setLang("en-US")
    } else {
      i18n.changeLanguage("ko-KR")
      setLang("ko-KR")
    }
  }

  return (
    <main className={style.main}>
      <Account lang={lang} handleChangeLanguage={handleChangeLanguage}/>
      <div className={style.profileWrapper}>
        <Image className={style.profile} src={Profile} alt={""}/>
        <div className={clsx(style.headingWrapper, style.headingWrapper2)} >
          <h2 className={style.heading2}>{t("greeting")}</h2>
        </div>
        <div className={style.introWrapper}>
          <p className={style.introText}>{t("introduction")}</p>
          <div className={style.badgeWrapper}>
            {
              skills.map((item) => {
                return (
                  <div
                    key={shortid()}
                    className={style.badge}
                    style={{borderColor: item.color, backgroundColor: item.backgroundColor}}
                  >
                    {item.label}
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
      <div className={"m-12"}></div>
      <div className={style.headingWrapper}>
        <h2 className={style.heading2}>{t("heading2")}</h2>
      </div>
      <div className={style.projectWrapper}>
        {
          works.map((item, index) => {
            return (
              <div
                key={shortid()}
                className={style.project}
              >
                <div className={style.projectImageWrapper}>
                  <a href={t(`work${index+1}.liveURL.long`)} target={'_blank'}>
                    <Image className={style.projectImage} src={item.image} alt={"project cover image"}/>
                  </a>
                </div>
                <div className={clsx(style.projectTitle, style.projectTitleYellow)}>
                  {t(`work${index+1}.title`) }
                </div>
                <div className={style.projectContent}>
                  <span className={style.textGray}>{t("completed")}<span className={style.textBar}> | </span></span>{t(`work${index+1}.completed`)}<br/>
                  <span className={style.textGray}>{t("type")}<span className={style.textBar}> | </span></span>{t(`work${index+1}.type`)}<br/>
                  <span className={style.textGray}>{t("skills")}<span className={style.textBar}> | </span></span>{t(`work${index+1}.usingSkills`)}<br/>
                  <span className={style.textGray}>{t("company")}<span className={style.textBar}> | </span></span>{t(`work${index+1}.company`)} <br/>
                  <span className={style.textGray}>{t("liveURL")}<span className={style.textBar}> | </span> </span><a href={t(`work${index+1}.liveURL.long`)} target={'_blank'}>{t(`work${index+1}.liveURL.short`)}</a>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className={"m-20"}></div>

      <Account lang={lang} handleChangeLanguage={handleChangeLanguage}/>

      <footer className={style.footer}>
        © 2024 Loren Lee All rights reserved.
      </footer>

      <div className={style.floatingButtonWrapper}>
        <button id={"custom-channeltalk-button"} className={style.floatingButton}>
          {t('coffee_chat_button')}
        </button>
        <a className={style.floatingButton2} href={"https://lorenlee.webflow.io/"} target={"_blank"}>
          {t('resume_button')}
        </a>
      </div>
    </main>
  )
}
