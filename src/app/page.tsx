'use client';

import Image from 'next/image';
import style from './style.module.scss';
import MailIcon from '../../public/image/icon/mail.svg';
import LinkIcon from '../../public/image/icon/linkedin.svg';
import GithubIcon from '../../public/image/icon/github.svg';
import MapPin from '../../public/image/icon/map-pin.svg';
import Profile from '../../public/image/profile/profile.png';
import Project1 from '../../public/image/project/project1.png';
import Project2 from '../../public/image/project/project2.png';
import Project3 from '../../public/image/project/project3.png';
import Project4 from '../../public/image/project/project4.png';
import Project5 from '../../public/image/project/project5.png';
import Project6 from '../../public/image/project/project6.png';
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
]

const skill = [
  'Typescript',
  'React',
  'Vue',
  'Next',
  'Responsive Web',
  'UI'
]
const Account = () => {
  const [lang, setLang] = useState("en-US");

  useEffect(() => {
    setLang(navigator?.language || "en-US");
  }, []);

  return (
    <div className={style.socialWrapper}>
      <a href={`mailto:${account.email}`}>
        <MailIcon color={"white"}/>
      </a>
      <a
        href={account.linkedin}
        target={"_blank"}
      >
        <LinkIcon color={"white"}/>
      </a>
      <a href={account.github}

         target={"_blank"}
      >
        <GithubIcon color={"white"}/>
      </a>
      <a
        title={lang.includes("ko-KR") ? "change language" : "영어로 보기"}
        className={style.languageButton}
        onClick={() => {
          if (lang.includes("ko-KR")) {
            i18n.changeLanguage("en-US")
            setLang("en-US")
          } else {
            i18n.changeLanguage("ko-KR")
            setLang("ko-KR")
          }
        }}
      >
        {lang.includes("ko-KR") ? "🇺🇸" : "🇰🇷"}
      </a>
    </div>
  )
}
export default function Home() {
  const { t } = useTranslation();

  return (
    <main className={style.main}>
      <header className={style.header}>
       <span className={style.headerTag}>{`</>`}</span> Loren Lee
      </header>
      <Account/>
      <div
        className={clsx("w-full", style.mainHeadingWrapper)}
        style={{backgroundImage: `url('/image/background/round-purple.png')`}}
      >
        <h1 className={style.mainHeading}>
          {t("title1")}<br/>
          {t("title2")}
        </h1>
      </div>
      <div className="flex flex-col items-center mb-3.5">
        <MapPin color={"white"}/>
        <p className={style.based}>{t("based")}<br/> {t("freelancer")}</p>
        <Image className={style.profile} src={Profile} alt={""}/>
      </div>
      <div className={style.introWrapper}>
        <p className={style.introTitle}>{t("greeting")}</p>
        <p className={style.introText}>{t("introduction")}</p>
        <div className={style.badgeWrapper}>
          {
            skill.map((item) => {
              return (
                <div
                  key={shortid()}
                  className={style.badge}
                >
                  #{item}
                </div>
              )
            })
          }
        </div>

      </div>

      <div className={"m-20"}></div>
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
                  <a href={t(`work${index+1}.liveURL.long`)} target={'_black'}>
                    <Image className={style.projectImage} src={item.image} alt={"project cover image"}/>
                  </a>
                </div>
                <div className={clsx(style.projectTitle, style.projectTitleYellow)}>
                  {t(`work${index+1}.title`) }
                </div>
                <div className={style.projectContent}>
                  <span className={style.textGray}>{t("completed")} | </span>{t(`work${index+1}.completed`)}<br/>
                  <span className={style.textGray}>{t("type")} | </span>{t(`work${index+1}.type`)}<br/>
                  <span className={style.textGray}>{t("skills")} | </span>{t(`work${index+1}.usingSkills`)}<br/>
                  <span className={style.textGray}>{t("company")} | </span>{t(`work${index+1}.company`)} <br/>
                  <span className={style.textGray}>{t("liveURL")} | </span><a href={t(`work${index+1}.liveURL.long`)} target={'_black'}>{t(`work${index+1}.liveURL.short`)}</a>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className={"m-20"}></div>
      <div className={style.headingWrapper}>
        <h2 className={style.heading2}>{t("startProject")}</h2>
      </div>
      <a className={style.contactWrapper}  href={`mailto:${account.email}`}>
        {account.email}
      </a>
      <div className={style.attractText}>
        {t("attract")}
      </div>

      <div className={"m-20"}></div>

      <Account/>

      <footer className={style.footer}>
        © 2023 Loren Lee All rights reserved.
      </footer>
    </main>
  )
}
