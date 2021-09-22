(this["webpackJsonpspotify-stats-app"]=this["webpackJsonpspotify-stats-app"]||[]).push([[0],{93:function(n,e,t){},94:function(n,e,t){"use strict";t.r(e);var a,i,o=t(0),r=t(37),s=t.n(r),c=t(42),p=t(2),l=t(4),d=t(5),u="375px",x="500px",b="768px",f="1024px",m="1440px",j="2560px",g={mobileS:"(max-width: ".concat("320px",")"),mobileM:"(max-width: ".concat(u,")"),mobileL:"(max-width: ".concat(x,")"),tablet:"(max-width: ".concat(b,")"),laptop:"(max-width: ".concat(f,")"),laptopL:"(max-width: ".concat(m,")"),desktop:"(max-width: ".concat(j,")")},h=t(1),O=d.a.button(a||(a=Object(l.a)(["\n  cursor: pointer;\n  font-size: 16px;\n  background-color: #1db954;\n  color: #fff;\n  padding: 10px 100px;\n  margin: 20px;\n  border: none;\n  border-radius: 20px;\n  transition: all 0.3s;\n\n  &:hover {\n    background-color: #14883d;\n  }\n\n  // Responsive styling\n  @media "," {\n    padding: 10px 50px;\n  }\n"])),g.tablet);function y(){var n=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLIENT_ID:"007990511b1b474db46ba7ff36c77fac",REACT_APP_AUTHORIZE_URL:"https://accounts.spotify.com/authorize",REACT_APP_REDIRECT_URL:"https://spotify-stats-app-blue.vercel.app/redirect"}),e=n.REACT_APP_CLIENT_ID,t=n.REACT_APP_AUTHORIZE_URL,a=n.REACT_APP_REDIRECT_URL;return Object(h.jsx)(O,{type:"submit",onClick:function(){window.location="".concat(t,"?client_id=").concat(e,"&redirect_uri=").concat(a,"&response_type=token&show_dialog=true&scope=user-top-read%20playlist-modify-private%20playlist-modify-public")},children:"LOG IN"})}var v=d.a.div(i||(i=Object(l.a)(["\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100vh;\n\n  .login-content-wrapper {\n    padding: 20px;\n    .login-content {\n      padding: 20px;\n      margin: 50px 200px;\n      background: rgba(0, 0, 0, 0.644);\n      backdrop-filter: saturate(180%) blur(10px);\n      border-radius: 20px;\n\n      h1 {\n        font-size: 50px;\n        padding: 10px;\n      }\n      .app-description {\n        font-size: 20px;\n\n        p {\n          padding: 5px;\n        }\n      }\n    }\n  }\n\n  // Responsive styling\n  @media "," {\n    .login-content-wrapper {\n      .login-content {\n        margin: 50px;\n\n        h1 {\n          font-size: 40px;\n        }\n        .app-description {\n          font-size: 17px;\n        }\n      }\n    }\n  }\n\n  @media "," {\n    .login-content-wrapper {\n      .login-content {\n        margin: 0px;\n\n        h1 {\n          font-size: 30px;\n        }\n        .app-description {\n          font-size: 15px;\n        }\n      }\n    }\n  }\n"])),g.laptop,g.tablet);function w(){return Object(h.jsx)(v,{children:Object(h.jsx)("div",{className:"login-content-wrapper",children:Object(h.jsxs)("div",{className:"login-content",children:[Object(h.jsx)("h1",{children:"Your Top Spotify Songs"}),Object(h.jsxs)("div",{className:"app-description",children:[Object(h.jsx)("p",{children:"Check your top tracks based on calculated affinity"}),Object(h.jsx)("p",{children:"See your all time or just last month top tracks, listen to previews of the songs, open tem on Spotify or create a playlist and listen your favorite tracks any time you want"})]}),Object(h.jsx)(y,{})]})})})}var k,_,N=t(11),S=t.n(N),z=t(15),E=t(6),T=t(16),C=t.n(T),A=t(13),P=t.n(A),R=t(18),L=t(41),D=t.n(L),I=d.a.li(k||(k=Object(l.a)(["\n  display: grid;\n  grid-template-columns: auto auto 1fr 1fr auto;\n  padding: 10px 20px;\n  background-color: #000000;\n  margin: 5px;\n  border-radius: 20px;\n  transition: all 0.5s;\n\n  &:hover {\n    background-color: #000000;\n  }\n\n  .img-wrapper {\n    display: flex;\n    align-items: center;\n    img {\n      width: 70px;\n      vertical-align: middle;\n    }\n  }\n\n  .audio-preview {\n    display: grid;\n    align-items: center;\n\n    .icons {\n      background-color: #1db954;\n      padding: 15px;\n      border-radius: 10px;\n      font-size: 15px;\n      margin: 10px 20px 10px 10px;\n      vertical-align: middle;\n      transition: all 0.3s;\n      color: #fff;\n\n      &:hover {\n        background-color: #14883d;\n      }\n    }\n\n    .play-pause {\n      cursor: pointer;\n    }\n  }\n\n  .track-name {\n    display: flex;\n    align-items: center;\n    padding: 0 20px;\n  }\n\n  .artist-name {\n    display: flex;\n    align-items: center;\n  }\n\n  .song-to-spotify {\n    display: grid;\n    align-items: center;\n    button {\n      cursor: pointer;\n      font-size: 13px;\n      background-color: #1db954;\n      color: #fff;\n      padding: 10px 15px;\n      border: none;\n      border-radius: 20px;\n      transition: all 0.3s;\n\n      &:hover {\n        background-color: #14883d;\n      }\n\n      .spotify-icon {\n        font-size: 13px;\n        margin-right: 5px;\n      }\n    }\n  }\n\n  // Responsive style\n  @media "," {\n    padding: 10px;\n    .track-name {\n      h3 {\n        font-size: 18px;\n      }\n    }\n  }\n\n  @media ",' {\n    /* padding: 0px; */\n    display: grid;\n    grid-template-columns: auto auto 1fr 1fr auto;\n    grid-template-rows: auto;\n    grid-template-areas:\n      "audio image artist artist button"\n      "audio image track track button";\n\n    .audio-preview {\n      grid-area: audio;\n\n      .icons {\n        padding: 10px;\n        border-radius: 10px;\n        font-size: 15px;\n        margin: 10px 20px 10px 10px;\n        vertical-align: middle;\n      }\n    }\n\n    .img-wrapper {\n      grid-area: image;\n      img {\n        width: 50px;\n      }\n    }\n\n    .track-name {\n      grid-area: track;\n      h3 {\n        font-size: 15px;\n      }\n    }\n\n    .artist-name {\n      grid-area: artist;\n      padding: 0 20px;\n      font-size: 13px;\n    }\n\n    .song-to-spotify {\n      grid-area: button;\n\n      button {\n        font-size: 0px;\n        padding: 10px 10px;\n\n        .spotify-icon {\n          font-size: 15px;\n          margin-right: 0px;\n        }\n      }\n      span {\n        display: none;\n      }\n    }\n  }\n\n  @media '," {\n    .track-name {\n      h3 {\n        font-size: 13px;\n      }\n    }\n\n    .artist-name {\n      grid-area: artist;\n      padding: 0 20px;\n      font-size: 11px;\n    }\n  }\n"])),g.laptopL,g.laptop,g.tablet);function U(n){var e=n.trackData,t=n.onPlay,a=n.isPlaying,i=(n.currentID,n.onEnd),r=Object(o.useState)(new Audio(e.preview_url)),s=Object(E.a)(r,1)[0];return Object(o.useEffect)((function(){return a?s.play():s.pause(),function(){return s.pause()}}),[a,s]),Object(o.useEffect)((function(){return s.addEventListener("ended",(function(){return i()})),function(){s.removeEventListener("ended",(function(){return i()}))}}),[s,i]),Object(h.jsx)(D.a,{bottom:!0,children:Object(h.jsxs)(I,{children:[Object(h.jsx)("div",{className:"audio-preview",children:null==e.preview_url?Object(h.jsx)(R.c,{style:{color:"#ffffff"},className:"icons"}):Object(h.jsx)("div",{onClick:function(){t(!a)},children:a?Object(h.jsx)(R.a,{style:{color:"#ffffff"},className:"icons play-pause"}):Object(h.jsx)(R.b,{className:"icons play-pause"})})}),Object(h.jsx)("div",{className:"img-wrapper",children:Object(h.jsx)("img",{src:e.album.images[0].url,alt:"Track images ".concat(e.name)})}),Object(h.jsx)("div",{className:"track-name",children:Object(h.jsx)("h3",{children:e.name})}),Object(h.jsx)("div",{className:"artist-name",children:Object(h.jsx)("p",{children:e.album.artists[0].name})}),Object(h.jsx)("div",{className:"song-to-spotify",children:Object(h.jsx)("a",{href:e.external_urls.spotify,target:"_blank",rel:"noreferrer noopener",children:Object(h.jsxs)("button",{children:[Object(h.jsx)(R.d,{className:"spotify-icon"}),Object(h.jsx)("span",{children:"Open in Spotify"})]})})})]})})}var B,H=d.a.div(_||(_=Object(l.a)(["\n  ul {\n    display: grid;\n    justify-content: center;\n    grid-template-columns: repeat(1, 1fr);\n    list-style: none;\n    margin: 0 100px;\n  }\n\n  // Responsive style\n  @media "," {\n    ul {\n      margin: 0 50px;\n    }\n  }\n\n  @media "," {\n    ul {\n      margin: 0 20px;\n    }\n  }\n"])),g.laptopL,g.laptop);function Y(n){var e=n.topArtists,t=Object(o.useState)(null),a=Object(E.a)(t,2),i=a[0],r=a[1];return console.log("State from TOPSongs:",i),Object(h.jsx)(H,{children:0===e.length?Object(h.jsx)("h2",{children:"No songs available from this time range!"}):Object(h.jsx)("ul",{children:e.map((function(n){return Object(h.jsx)(U,{currentID:i,onPlay:function(e){return r(e?n.id:null)},onEnd:function(){r(null)},isPlaying:n.id===i,trackData:n},n.id)}))})})}var F,G=d.a.div(B||(B=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  padding: 0px 20px;\n  img {\n    width: 40px;\n    height: auto;\n    border-radius: 100%;\n  }\n\n  h3 {\n    font-size: 15px;\n    padding: 0 20px;\n  }\n\n  @media "," {\n    justify-content: center;\n    img {\n      width: 30px;\n    }\n    h3 {\n      font-size: 14px;\n      padding: 0 10px;\n    }\n  }\n"])),g.laptop);function V(n){var e=n.personsID,t=Object(o.useState)({}),a=Object(E.a)(t,2),i=a[0],r=a[1];return Object(o.useEffect)((function(){var n=C.a.parse(window.location.hash);function e(){return(e=Object(z.a)(S.a.mark((function e(){var t,a,i,o,s,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()({method:"GET",url:"https://api.spotify.com/v1/me",headers:{Authorization:"Bearer "+n.access_token}});case 2:t=e.sent,a=t.data,i=a.id,o=a.display_name,s=a.images,c={persons_id:i,display_name:o,image:s[0].url},r(c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(h.jsxs)(G,{onLoad:function(){return e(i.persons_id)},children:[Object(h.jsx)("div",{className:"px-4",children:Object(h.jsx)("img",{className:"w-8 object-cover rounded-full",src:i.image,alt:"profile_pic"})}),Object(h.jsx)("h3",{className:"px-4",children:i.display_name})]})}var K,W=d.a.div(F||(F=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0 20px 0px 20px;\n  select {\n    background-color: rgba(0, 0, 0, 0.7);\n    color: #ffffff;\n    outline: none;\n    border: none;\n    border-radius: 25px;\n    font-size: 13px;\n    background-color: #1db954;\n    color: #fff;\n    padding: 9px 15px;\n  }\n\n  @media "," {\n    select {\n      font-size: 12px;\n      padding: 8px 14px;\n    }\n  }\n\n  @media "," {\n    margin: 5px 10px 10px 10px;\n    select {\n      font-size: 14px;\n      padding: 7px 13px;\n    }\n  }\n"])),g.laptop,g.tablet);function J(n){var e=n.options,t=n.sortValue,a=Object(o.useRef)();return Object(h.jsx)(W,{children:Object(h.jsx)("select",{ref:a,onChange:function(n){t(n.target.value)},children:e.map((function(n,e){return Object(h.jsx)("option",{value:n.value,children:n.text},e)}))})})}var Z,q=d.a.div(K||(K=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.555);\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n  transition: all 0.3s ease-in-out;\n  pointer-events: none;\n\n  &.show {\n    opacity: 1;\n    pointer-events: visible;\n\n    .modal-box {\n      transform: translateY(0px);\n    }\n  }\n\n  .modal-box {\n    display: grid;\n    background: #fff;\n    color: #000;\n    padding: 16px;\n    border-radius: 8px;\n    transition: all 0.5s;\n    transform: translateY(-50px);\n    transition: all 0.5s ease-in-out;\n\n    h1 {\n      text-align: center;\n      font-size: 18px;\n    }\n\n    .input-playlist-name {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 10px 0px;\n      label {\n        font-size: 14px;\n        color: #121212;\n      }\n\n      input {\n        border: none;\n        outline: none;\n        border-bottom: 2px solid black;\n        padding: 3px;\n      }\n    }\n\n    .modal-buttons {\n      text-align: center;\n      display: grid;\n\n      .close-modal {\n        text-align: center;\n        background-color: #fff;\n        border: none;\n        color: rgba(0, 0, 0, 0.5);\n        padding: 8px 34px;\n        line-height: 18px;\n        font-size: 13px;\n        letter-spacing: 1.76px;\n        cursor: pointer;\n      }\n\n      .form-submit {\n        cursor: pointer;\n        font-size: 13px;\n        background-color: #1db954;\n        color: #fff;\n        padding: 9px 15px;\n        margin: 10px 20px;\n        border: none;\n        border-radius: 20px;\n        transition: all 0.3s;\n\n        &:hover {\n          background-color: #14883d;\n        }\n      }\n    }\n  }\n"])));function M(n){var e=n.show,t=n.onClose,a=n.POSTvalue,i=n.playlistSongs,r=Object(o.useState)(""),s=Object(E.a)(r,2),c=s[0],p=s[1],l=Object(o.useState)(null),d=Object(E.a)(l,2),u=d[0],x=d[1];return console.log("TEST",u),Object(h.jsx)(q,{className:"".concat(e?"show":""),children:u?Object(h.jsx)("div",{className:"modal-box",children:Object(h.jsxs)("div",{className:"modal-buttons",children:[Object(h.jsx)("a",{href:u,target:"_blank",rel:"noreferrer noopener",children:Object(h.jsx)("button",{className:"form-submit",type:"button",children:"Open playlist in Spotify"})}),Object(h.jsx)("button",{className:"close-modal",type:"button",onClick:function(){x(null),t()},children:"Cancel"})]})}):Object(h.jsxs)("form",{action:"",onSubmit:function(n){n.preventDefault();var e=C.a.parse(window.location.hash),t="https://api.spotify.com/v1/users/".concat(a,"/playlists");function o(){return(o=Object(z.a)(S.a.mark((function n(){return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P()({method:"POST",url:t,headers:{Authorization:"Bearer "+e.access_token,"Content-Type":"application/json"},data:{name:c,description:"Your top tracks based on calculated affinity",public:!1}}).then((function(n){x(n.data.external_urls.spotify);var t=[];i.map((function(n){return t.push(n.uri)})),P()({method:"POST",url:"https://api.spotify.com/v1/playlists/".concat(n.data.id,"/tracks"),headers:{Authorization:"Bearer "+e.access_token,"Content-Type":"application/json"},data:{uris:t}})}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){o.apply(this,arguments)}()},className:"modal-box",children:[Object(h.jsx)("h1",{children:"CREATE A PLAYLIST"}),Object(h.jsxs)("div",{className:"input-playlist-name",children:[Object(h.jsx)("label",{htmlFor:"",children:"Playlist Name:"}),Object(h.jsx)("input",{type:"text",onChange:function(n){return p(n.target.value)}})]}),Object(h.jsxs)("div",{className:"modal-buttons",children:[Object(h.jsx)("input",{className:"form-submit",type:"submit",value:"Create playlist"}),Object(h.jsx)("button",{className:"close-modal",type:"button",onClick:t,children:"Cancel"})]})]})})}var Q=d.a.div(Z||(Z=Object(l.a)(["\n  nav {\n    position: fixed;\n    overflow: hidden;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #000000;\n    color: #ffffff;\n    padding: 10px;\n\n    .dropdown-wrapper {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n  }\n  .content-wrapper {\n    padding: 100px 50px;\n    display: flex;\n    justify-content: center;\n\n    #loading {\n      display: inline-block;\n      width: 50px;\n      height: 50px;\n      border: 3px solid rgba(255, 255, 255, 0.3);\n      border-radius: 50%;\n      border-top-color: #fff;\n      animation: spin 1s ease-in-out infinite;\n      -webkit-animation: spin 1s ease-in-out infinite;\n    }\n\n    @keyframes spin {\n      to {\n        -webkit-transform: rotate(360deg);\n      }\n    }\n    @-webkit-keyframes spin {\n      to {\n        -webkit-transform: rotate(360deg);\n      }\n    }\n  }\n\n  .modal-button {\n    cursor: pointer;\n    font-size: 13px;\n    background-color: #1db954;\n    color: #fff;\n    padding: 9px 15px;\n    margin: 10px 20px;\n    border: none;\n    border-radius: 20px;\n    transition: all 0.3s;\n\n    &:hover {\n      background-color: #14883d;\n    }\n  }\n\n  // Responsive style\n  @media "," {\n    nav {\n      padding: 5px 0;\n    }\n\n    .content-wrapper {\n      padding: 100px 0px;\n    }\n  }\n  @media "," {\n    nav {\n      display: grid;\n      grid-template-columns: repeat(1, 1fr);\n\n      .dropdown-wrapper {\n        order: 1;\n      }\n    }\n\n    .content-wrapper {\n      padding: 100px 0px;\n    }\n\n    .modal-button {\n      padding: 8px 14px;\n      font-size: 12px;\n    }\n  }\n\n  @media "," {\n    nav {\n      border-bottom-left-radius: 20px;\n      border-bottom-right-radius: 20px;\n    }\n    .content-wrapper {\n      padding: 100px 0px 70px 0px;\n    }\n    .create-playlist {\n      position: fixed;\n      bottom: 0;\n      left: 0;\n      background-color: #000000;\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      padding: 10px 0;\n      border-top-left-radius: 20px;\n      border-top-right-radius: 20px;\n      .modal-button {\n        font-size: 15px;\n        padding: 7px 13px;\n        margin: 10px;\n      }\n    }\n  }\n"])),g.laptopL,g.laptop,g.tablet);function X(){var n=Object(o.useState)([]),e=Object(E.a)(n,2),t=e[0],a=e[1],i=Object(o.useState)(!1),r=Object(E.a)(i,2),s=r[0],c=r[1],p=Object(o.useState)("long_term"),l=Object(E.a)(p,2),d=l[0],u=l[1],x=Object(o.useState)(50),b=Object(E.a)(x,2),f=b[0],m=b[1],j=Object(o.useState)(!1),g=Object(E.a)(j,2),O=g[0],y=g[1],v=Object(o.useState)(null),w=Object(E.a)(v,2),k=w[0],_=w[1];Object(o.useEffect)((function(){var n=C.a.parse(window.location.hash);function e(){return(e=Object(z.a)(S.a.mark((function e(){var t,i,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.spotify.com/v1/me/top/tracks?time_range=".concat(d,"&limit=").concat(f,"&offset=5"),e.next=3,P()({method:"GET",url:t,headers:{Authorization:"Bearer "+n.access_token}});case 3:i=e.sent,c(!0),console.log(i),o=i.data.items,a(o);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[d,f]);function N(n){isNaN(n)?u(n):m(n)}return Object(h.jsxs)(Q,{children:[Object(h.jsxs)("nav",{children:[Object(h.jsxs)("div",{className:"dropdown-wrapper",children:[Object(h.jsx)(J,{sortValue:N,options:[{text:"All time",value:"long_term"},{text:"Last 6 months",value:"medium_term"},{text:"Last month",value:"short_term"}]}),Object(h.jsx)(J,{sortValue:N,options:[{text:"50 Songs",value:50},{text:"30 songs",value:30},{text:"10 songs",value:10}]}),Object(h.jsx)("div",{className:"create-playlist",children:Object(h.jsx)("button",{className:"modal-button",onClick:function(){y(!0)},children:"Create Playlist"})})]}),Object(h.jsx)(V,{personsID:function(n){_(n)}})]}),Object(h.jsxs)("div",{className:"content-wrapper",children:[Object(h.jsx)(M,{POSTvalue:k,onClose:function(){return y(!1)},show:O,playlistSongs:t}),s?Object(h.jsx)(Y,{topArtists:t}):Object(h.jsx)("div",{id:"loading"})]})]})}function $(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"PAGE NOT FOUND"})})}function nn(){return Object(h.jsx)(c.a,{children:Object(h.jsxs)(p.c,{children:[Object(h.jsx)(p.a,{exact:!0,path:"/",component:w}),Object(h.jsx)(p.a,{path:"/redirect",component:X}),Object(h.jsx)(p.a,{component:$})]})})}t(93);s.a.render(Object(h.jsx)(nn,{}),document.querySelector("#root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.401bc818.chunk.js.map