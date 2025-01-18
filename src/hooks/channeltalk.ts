import {useEffect} from "react";
import ChannelService from "@/thirdParty/channeltalk";

const useChanneltalk = () => {
  useEffect(() => {
    ChannelService.loadScript();
    ChannelService.boot({
      "pluginKey": "5ef1a8b6-59b0-49f5-b29c-2f32071df86c",
      "customLauncherSelector": "#custom-channeltalk-button",
      "hideChannelButtonOnBoot": true
    });
  }, []);
}

export default useChanneltalk;

