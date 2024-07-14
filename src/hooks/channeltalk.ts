import {useEffect} from "react";
import ChannelService from "@/thirdParty/channeltalk";

const useChanneltalk = () => {
  useEffect(() => {
    ChannelService.loadScript();
    ChannelService.boot({
      "pluginKey": "1667bdd5-209d-4b93-9292-87af6353a474",
      "customLauncherSelector": "#custom-channeltalk-button",
      "hideChannelButtonOnBoot": true
    });
  }, []);
}

export default useChanneltalk;

