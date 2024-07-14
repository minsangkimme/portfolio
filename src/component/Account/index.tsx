import style from "./style.module.scss";
import MailIcon from "../../../public/image/icon/mail.svg";
import LinkIcon from "../../../public/image/icon/linkedin.svg";
import GithubIcon from "../../../public/image/icon/github.svg";
import {account} from "@/const/account";

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

export default Account;