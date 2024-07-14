'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import {skills} from "@/const/skills";
import {projects} from "@/const/projects";

import useChanneltalk from "@/hooks/channeltalk";
import useLanguage from "@/hooks/useLanguage";

import Account from "@/component/Account";
import FloatingButtons from "@/component/ButtonGroup/FloatingButtons";
import OutlinedButton from "@/component/Buttons/OutlinedButton";
import ContainedButton from "@/component/Buttons/ContainedButton";
import Footer from "@/component/Footer";
import EmphasizedHeading from "@/component/Headings/EmphasizedHeading";
import SkillBadge from "@/component/Badges/SkillBadge";

import ProjectCard from "../component/ProjectCard";

import style from './style.module.scss';
import Profile from '../../public/image/profile/profile1.png';


export default function Home() {
  useChanneltalk();
  const { t } = useTranslation();
  const {lang, handleChangeLanguage} = useLanguage();

  return (
    <main className={style.main}>
      <Account lang={lang} handleChangeLanguage={handleChangeLanguage}/>

      <div className={style.profileWrapper}>
        <Image className={style.profile} src={Profile} alt={""}/>
        <EmphasizedHeading label={t("greeting")}/>
        <div className={style.introWrapper}>
          <p className={style.introText}>{t("introduction")}</p>
          <div className={style.skillsBadgeWrapper}>
            {
              skills.map((item, index) => {
                return (
                  <SkillBadge
                    key={`skill-${index}`}
                    label={item.label}
                    color={item.color}
                  />
                )
              })
            }
          </div>
        </div>
      </div>

      <div className={'mt-12'}/>
      <EmphasizedHeading label={t("heading2")}/>
      <div className={'mt-8'}/>

      <div className={style.projectWrapper}>
        {
          projects.map((item, index) => {
            return (
              <ProjectCard projectInfo={item} key={`project-${index}`}/>
            )
          })
        }
      </div>

      <div className={"m-20"}></div>

      <Account lang={lang} handleChangeLanguage={handleChangeLanguage}/>
      <Footer/>

      <FloatingButtons>
        <OutlinedButton
          id={"custom-channeltalk-button"}
          label={t('coffee_chat_button')}
        />
        <ContainedButton
          label={t('resume_button')}
          tag={'a'}
          href={"https://lorenlee.webflow.io/"}
          target={"_blank"}
        />
      </FloatingButtons>
    </main>
  )
}
