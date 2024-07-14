import {useEffect, useState} from "react";
import i18n from "@/thirdParty/i18n";

const useLanguage = () => {
  const [lang, setLang] = useState("en-US");

  useEffect(() => {
    setLang(navigator?.language || "en-US");
  }, []);

  const handleChangeLanguage = () => {
    if (lang.includes("ko-KR")) {
      i18n.changeLanguage("en-US");
      setLang("en-US");
    } else {
      i18n.changeLanguage("ko-KR");
      setLang("ko-KR");
    }
  }

  return {
    lang,
    handleChangeLanguage
  }
}

export default useLanguage;