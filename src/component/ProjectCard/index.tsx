import style from "./style.module.scss";
import Image, {StaticImageData} from "next/image";
import clsx from "clsx";
import {useTranslation} from "react-i18next";

export type ProjectInfo = {
  translateKey: string;
  image: StaticImageData;
}

type ProjectCardProps = {
  projectInfo: ProjectInfo;
}

const ProjectCard = ({projectInfo}: ProjectCardProps) => {
  const {t} = useTranslation();

  return (
    <div className={style.project}>
      <div className={style.projectImageWrapper}>
        <a href={t(`${projectInfo.translateKey}.liveURL.long`)} target={'_blank'}>
          <Image src={projectInfo.image} alt={"project cover image"}/>
        </a>
      </div>
      <div className={style.projectTitle}>
        {t(`${projectInfo.translateKey}.title`)}
      </div>
      <div>
        <span className={style.textGray}>{t("completed")}<span
          className={style.textBar}> | </span></span>{t(`${projectInfo.translateKey}.completed`)}<br/>
        <span className={style.textGray}>{t("type")}<span
          className={style.textBar}> | </span></span>{t(`${projectInfo.translateKey}.type`)}<br/>
        <span className={style.textGray}>{t("skills")}<span
          className={style.textBar}> | </span></span>{t(`${projectInfo.translateKey}.usingSkills`)}<br/>
        <span className={style.textGray}>{t("company")}<span
          className={style.textBar}> | </span></span>{t(`${projectInfo.translateKey}.company`)} <br/>
        <span className={style.textGray}>{t("liveURL")}<span className={style.textBar}> | </span> </span><a
        href={t(`${projectInfo.translateKey}.liveURL.long`)}
        target={'_blank'}>{t(`${projectInfo.translateKey}.liveURL.short`)}</a>
      </div>
    </div>
  )
}

export default ProjectCard;