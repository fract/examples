"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},i="State management",s={unversionedId:"state-management/index",id:"state-management/index",title:"State management",description:"Whatsup promotes the philosophy of functionally reactive programming. Whatsup provides simple and robust components to organize the observed state.",source:"@site/docs/state-management/index.md",sourceDirName:"state-management",slug:"/state-management/",permalink:"/docs/state-management/",draft:!1,editUrl:"https://github.com/whatsup/whatsup/docs/state-management/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Event system",permalink:"/docs/components/context/event-system"},next:{title:"Observables",permalink:"/docs/state-management/observables"}},l={},p=[],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"state-management"},"State management"),(0,a.kt)("p",null,"Whatsup promotes the philosophy of functionally reactive programming. Whatsup provides simple and robust components to organize the observed state."),(0,a.kt)("p",null,"Whatsup state management is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"clean, expressive, boilerplate free code"),(0,a.kt)("li",{parentName:"ul"},"timely change detection and optimal rendering without unnecessary calculations"),(0,a.kt)("li",{parentName:"ul"},"freedom in the choice of architectural solutions, you decide how to organize the state of the application")),(0,a.kt)("p",null,"Key Components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"observables"),(0,a.kt)("li",{parentName:"ul"},"computeds"),(0,a.kt)("li",{parentName:"ul"},"actions"),(0,a.kt)("li",{parentName:"ul"},"reactions"),(0,a.kt)("li",{parentName:"ul"},"mutators")))}m.isMDXComponent=!0}}]);