(this["webpackJsonplooper-app"]=this["webpackJsonplooper-app"]||[]).push([[0],{12:function(c,o,i){},14:function(c,o,i){"use strict";i.r(o);var n=i(1),e=i(7),a=i.n(e),d=(i(12),i(2)),s=i(0),t=function(c){var o=c.song,i=c.toggle;return Object(s.jsx)("li",{className:"square",children:Object(s.jsx)("div",{className:"sqr",onClick:i,children:Object(s.jsx)("span",{className:"sqr-icon",children:o.isPlaying?o.icon:o.baseIcon})})})},l=function(c){var o=c.playAllSongs,i=c.stopAllSongs;return Object(s.jsx)("header",{className:"app-header flex justify-center",children:Object(s.jsx)("div",{className:"header-container row",children:Object(s.jsxs)("nav",{className:"main-nav container flex justify-space align-center",children:[Object(s.jsx)("div",{className:"logo-container",children:"grooveo"}),Object(s.jsxs)("ul",{className:"controls-nav",children:[Object(s.jsxs)("li",{className:"item nav-item",children:[" ",Object(s.jsx)("button",{onClick:o,children:"Play All"})]}),Object(s.jsx)("li",{className:"item nav-item",children:Object(s.jsx)("button",{onClick:i,children:"Stop"})})]})]})})})},u=i(4),r=function(){var c=Object(n.useState)(["https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/1.mp3","https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/2.mp3","https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/3.mp3","https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/4.mp3","https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/5.mp3","https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/6.mp3","https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/7.mp3","https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/8.mp3","https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/9.mp3"].map((function(c){return{url:c,audio:new Audio(c)}}))),o=Object(d.a)(c,1)[0],i=Object(n.useState)([{id:1,url:"https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/1.mp3",baseIcon:"S",icon:"A",isPlaying:!1},{id:2,url:"https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/2.mp3",baseIcon:"Q",icon:"B",isPlaying:!1},{id:3,url:"https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/3.mp3",baseIcon:"P",icon:"C",isPlaying:!1},{id:4,url:"https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/4.mp3",baseIcon:"O",icon:"D",isPlaying:!1},{id:5,url:"https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/5.mp3",baseIcon:"N",icon:"E",isPlaying:!1},{id:6,url:"https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/6.mp3",baseIcon:"M",icon:"F",isPlaying:!1},{id:7,url:"https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/7.mp3",baseIcon:"T",icon:"G",isPlaying:!1},{id:8,url:"https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/8.mp3",baseIcon:"K",icon:"H",isPlaying:!1},{id:9,url:"https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/9.mp3",baseIcon:"J",icon:"I",isPlaying:!1}]),e=Object(d.a)(i,2),a=e[0],s=e[1],t=Object(n.useState)([]),l=Object(d.a)(t,2),r=l[0],p=l[1],m=function(c){var i=Object(u.a)(o)[c];r.includes(i)||(r.splice(c,0,i),p(r),console.log(r))};return Object(n.useEffect)((function(){o.forEach((function(c,o){a[o].isPlaying?c.audio.play():c.audio.load()}))}),[o,a]),Object(n.useEffect)((function(){return o.forEach((function(c,o){c.audio.addEventListener("ended",(function(){var c=Object(u.a)(a);c[o].isPlaying=!1,s(c)}))})),function(){o.forEach((function(c,o){c.audio.removeEventListener("ended",(function(){var c=Object(u.a)(a);c[o].isPlaying=!1,s(c)}))}))}}),[]),[a,function(c){return function(){var o=Object(u.a)(a),i=a.findIndex((function(c){return!0===c.isPlaying}));-1!==i&&i!==c?(o[i].isPlaying=!0,setTimeout((function(){o[c].isPlaying=!0}),4e3)):o[c].isPlaying=-1===i,m(c),s(o)}},function(){r.forEach((function(c,o){a[o].isPlaying?c.audio.pause():c.audio.play()}))},function(){r.forEach((function(c,o){a[o].isPlaying?c.audio.pause():c.audio.load()}))}]},p=function(c){var o=c.urls,i=r(o),n=Object(d.a)(i,4),e=n[0],a=n[1],u=n[2],p=n[3];return Object(s.jsxs)("section",{className:"sound-board",children:[Object(s.jsx)(l,{playAllSongs:u,stopAllSongs:p}),Object(s.jsx)("div",{className:"soundboard-container container",children:e.map((function(c,o){return Object(s.jsx)(t,{song:c,toggle:a(o)},o)}))})]})};a.a.render(Object(s.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.533ecad6.chunk.js.map