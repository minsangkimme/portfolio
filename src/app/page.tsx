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
import shortid from 'shortid';

import clsx from "clsx";

const account = {
  email: 'lorenlee.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lorenleedev',
  github: 'https://www.github.com/lorenleedev'
}

const work = [
  {
    image: Project1,
    title: 'Real estate trading platform',
    completed: '2023',
    type: 'Platform',
    usingSkills: 'Vue, TS, JS, HTML, SCSS',
    company: 'dukkubisesang',
    liveURL: {
      long: 'https://www.peterpanz.com',
      short: 'www.peterpanz.com'
    }
  },
  {
    image: Project2,
    title: 'Landing page for the platform',
    completed: '2022',
    type: 'Responsive Landing Page',
    usingSkills: 'React, JS, HTML, SCSS',
    company: 'dukkubisesang',
    liveURL: {
      long: 'https://partners.peterpanz.com',
      short: 'partners.peterpanz.com'
    }
  },
  {
    image: Project3,
    title: 'Telemedicine platform',
    completed: '2021',
    type: 'Platform',
    usingSkills: 'Vue, JS, HTML, SCSS, AWS chime',
    company: 'hrobotics',
    liveURL: {
      long: 'https://hroboticsus.com/smart-rehab-devices/rebless-clinic',
      short: 'https://hroboticsus.com'
    }
  },
  {
    image: Project4,
    title: 'Landing page for the platform',
    completed: '2020',
    type: 'Responsive Landing Page',
    usingSkills: 'React, JS, HTML, SCSS',
    company: 'hrobotics',
    liveURL: {
      long: 'https://www.rebless.clinic',
      short: 'www.rebless.clinic'
    }
  }
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
    </div>
  )
}
export default function Home() {
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
          Frontend?<br/>
          Loren Lee!
        </h1>
      </div>
      <div className="flex flex-col items-center mb-3.5">
        <MapPin color={"white"}/>
        <p className={style.based}>based Seoul,<br/> freelance worker</p>
        <Image className={style.profile} src={Profile} alt={""}/>
      </div>
      <div className={style.introWrapper}>
        <p className={style.introTitle}>Hello!</p>
        <p className={style.introText}>
          I build responsive websites and web apps using HTML, CSS, and JavaScript to ensure users get the best experience on their devices and browsers.
        </p>
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
        <h2 className={style.heading2}>Featured Work</h2>
      </div>
      <div className={style.projectWrapper}>
        {
          work.map((item, index) => {
            return (
              <div
                key={shortid()}
                className={style.project}
              >
                <div className={style.projectImageWrapper}>
                  <Image className={style.projectImage} src={item.image} alt={"project cover image"}/>
                </div>
                <div className={clsx(style.projectTitle, style.projectTitleYellow)}>
                  {item.title}
                </div>
                <div className={style.projectContent}>
                  <span className={style.textGray}>Completed | </span>{item.completed}<br/>
                  <span className={style.textGray}>Type | </span>{item.type}<br/>
                  <span className={style.textGray}>Using Skills | </span>{item.usingSkills}<br/>
                  <span className={style.textGray}>Company | </span>{item.company} <br/>
                  <span className={style.textGray}>Live URL | </span><a href={item.liveURL.long} target={'_black'}>{item.liveURL.short}</a>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className={"m-20"}></div>
      <div className={style.headingWrapper}>
        <h2 className={style.heading2}>Want to Start a Project?</h2>
      </div>
      <a className={style.contactWrapper}>
        {account.email}
      </a>
      <div className={style.attractText}>
        With my skills, I can turn your idea into a product.
      </div>

      <div className={"m-20"}></div>

      <Account/>

      <footer className={style.footer}>
        © 2023 Loren Lee All rights reserved.
      </footer>
    </main>
  )
}
