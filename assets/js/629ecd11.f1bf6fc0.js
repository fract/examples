"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||s;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const s={sidebar_position:3},i="Configuration",a={unversionedId:"styling/configuration",id:"styling/configuration",title:"Configuration",description:"Autoprefixer, Source maps i.e....",source:"@site/docs/styling/configuration.md",sourceDirName:"styling",slug:"/styling/configuration",permalink:"/docs/styling/configuration",draft:!1,editUrl:"https://github.com/whatsup/whatsup/docs/styling/configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Import directive",permalink:"/docs/styling/import"},next:{title:"Intellisense",permalink:"/docs/styling/intellisense"}},p={},c=[{value:"Autoprefixer, Source maps i.e....",id:"autoprefixer-source-maps-ie",level:3},{value:"Preprocessors",id:"preprocessors",level:3}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"autoprefixer-source-maps-ie"},"Autoprefixer, Source maps i.e...."),(0,o.kt)("p",null,"Whatsup style-system is based on ",(0,o.kt)("inlineCode",{parentName:"p"},"postcss"),", so you can use the standard config file for further customization."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// .postcssrc.js\n\nmodule.exports = {\n    plugins: {\n        autoprefixer: isProduction,\n    },\n    processOptions: {\n        map: isDevelopment,\n    },\n}\n")),(0,o.kt)("h3",{id:"preprocessors"},"Preprocessors"),(0,o.kt)("p",null,"Whatsup application based on webpack. So you can use any preprocessor as ",(0,o.kt)("inlineCode",{parentName:"p"},"sass"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"scss"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"less"),". Just add the appropriate loader to the webpack config file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    module: {\n        rules: [\n            {\n                test: /\\.(css|scss|sass)$/i,\n                use: [\n                    'style-loader',\n                    '@whatsup/webpack-loader-css-components',\n                    'sass-loader',\n                ],\n            },\n        ],\n    },\n}\n")))}u.isMDXComponent=!0}}]);