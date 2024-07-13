import type { Metadata } from 'next'
import './globals.css';
export const metadata: Metadata = {
  title: 'Frontend developer',
  description: "Loren Lee's personal site",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <link rel={"stylesheet"} href={"/css/font.css"}></link>
      <link rel={"icon"} href={"/image/favicon/favicon.ico"}></link>
    </head>
      <body>{children}</body>
    <script>
      (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();

      ChannelIO('boot', {
      "pluginKey": "1667bdd5-209d-4b93-9292-87af6353a474"
    });
    </script>
    </html>
  )
}
