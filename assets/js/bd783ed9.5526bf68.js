"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||s;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const s={sidebar_position:3},a="Components",c={unversionedId:"components/index",id:"components/index",title:"Components",description:"Whatsup components use regular functions for stateless components and generators for stateful components.",source:"@site/docs/components/index.md",sourceDirName:"components",slug:"/components/",permalink:"/docs/components/",draft:!1,editUrl:"https://github.com/whatsup/whatsup/docs/components/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Lifecycle",permalink:"/docs/components/lifecycle"}},i={},p=[{value:"Your first stateless component",id:"your-first-stateless-component",level:2},{value:"Your first stateful component",id:"your-first-stateful-component",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"components"},"Components"),(0,o.kt)("p",null,"Whatsup components use regular functions for stateless components and generators for stateful components."),(0,o.kt)("p",null,"Each component is an atom of a reactive system, automatically keeping track of its dependencies and applying changes in the most evvective way."),(0,o.kt)("h2",{id:"your-first-stateless-component"},"Your first stateless component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { render } from 'whatsup/jsx'\n\nfunction App() {\n    return <div>Hello World</div>\n}\n\nrender(<App />)\n")),(0,o.kt)("p",null,"Yes, we can render without a container, directly to the body"),(0,o.kt)("h2",{id:"your-first-stateful-component"},"Your first stateful component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { render } from 'whatsup/jsx'\n\nfunction* App() {\n    const counter = observable(0)\n    const handleClick = () => counter(counter() + 1)\n\n    while (true) {\n        yield (\n            <div>\n                <p>You click {counter()} times</p>\n                <button onClick={handleClick}>Click me</button>\n            </div>\n        )\n    }\n}\n\nrender(<App />)\n")),(0,o.kt)("p",null,"Yes, we use generators to store local state"))}u.isMDXComponent=!0}}]);