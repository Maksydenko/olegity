(self.webpackChunkolegity=self.webpackChunkolegity||[]).push([[743],{2234:function(e,t,n){var r,o=n(2122).default,a=n(6690).default,l=n(9728).default,u=n(6115).default,i=n(1655).default,s=n(6389).default,p=n(4704).default,c=Object.create,y=Object.defineProperty,f=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,h=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,m=function(e,t,n,r){if(t&&"object"===typeof t||"function"===typeof t){var o,a=p(d(t));try{var l=function(){var a=o.value;v.call(e,a)||a===n||y(e,a,{get:function(){return t[a]},enumerable:!(r=f(t,a))||r.enumerable})};for(a.s();!(o=a.n()).done;)l()}catch(u){a.e(u)}finally{a.f()}}return e},k=function(e,t,n){return function(e,t,n){t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==typeof t?t+"":t,n),n},b={};!function(e,t){for(var n in t)y(e,n,{get:t[n],enumerable:!0})}(b,{default:function(){return M}}),e.exports=(r=b,m(y({},"__esModule",{value:!0}),r));var P=function(e,t,n){return n=null!=e?c(h(e)):{},m(!t&&e&&e.__esModule?n:y(n,"default",{value:e,enumerable:!0}),e)}(n(2791)),g=n(2737),O=n(7709),w=function(e){return e.replace("/manage/videos","")},M=function(e){"use strict";i(n,e);var t=s(n);function n(){var e;return a(this,n),e=t.apply(this,arguments),k(u(e),"callPlayer",g.callPlayer),k(u(e),"duration",null),k(u(e),"currentTime",null),k(u(e),"secondsLoaded",null),k(u(e),"mute",(function(){e.setMuted(!0)})),k(u(e),"unmute",(function(){e.setMuted(!1)})),k(u(e),"ref",(function(t){e.container=t})),e}return l(n,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this;this.duration=null,(0,g.getSDK)("https://player.vimeo.com/api/player.js","Vimeo").then((function(n){if(t.container){var r=t.props.config,a=r.playerOptions,l=r.title;t.player=new n.Player(t.container,o({url:w(e),autoplay:t.props.playing,muted:t.props.muted,loop:t.props.loop,playsinline:t.props.playsinline,controls:t.props.controls},a)),t.player.ready().then((function(){var e=t.container.querySelector("iframe");e.style.width="100%",e.style.height="100%",l&&(e.title=l)})).catch(t.props.onError),t.player.on("loaded",(function(){t.props.onReady(),t.refreshDuration()})),t.player.on("play",(function(){t.props.onPlay(),t.refreshDuration()})),t.player.on("pause",t.props.onPause),t.player.on("seeked",(function(e){return t.props.onSeek(e.seconds)})),t.player.on("ended",t.props.onEnded),t.player.on("error",t.props.onError),t.player.on("timeupdate",(function(e){var n=e.seconds;t.currentTime=n})),t.player.on("progress",(function(e){var n=e.seconds;t.secondsLoaded=n})),t.player.on("bufferstart",t.props.onBuffer),t.player.on("bufferend",t.props.onBufferEnd),t.player.on("playbackratechange",(function(e){return t.props.onPlaybackRateChange(e.playbackRate)}))}}),this.props.onError)}},{key:"refreshDuration",value:function(){var e=this;this.player.getDuration().then((function(t){e.duration=t}))}},{key:"play",value:function(){var e=this.callPlayer("play");e&&e.catch(this.props.onError)}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("unload")}},{key:"seekTo",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("setCurrentTime",e),t||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"setMuted",value:function(e){this.callPlayer("setMuted",e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("setPlaybackRate",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){var e={width:"100%",height:"100%",overflow:"hidden",display:this.props.display};return P.default.createElement("div",{key:this.props.url,ref:this.ref,style:e})}}]),n}(P.Component);k(M,"displayName","Vimeo"),k(M,"canPlay",O.canPlay.vimeo),k(M,"forceLoad",!0)}}]);
//# sourceMappingURL=reactPlayerVimeo.566c3f30.chunk.js.map