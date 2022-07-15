"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,v=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(v,s(s({ref:t},p),{},{components:n})):r.createElement(v,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:5},s="Mutators",u={unversionedId:"state-management/mutators",id:"state-management/mutators",title:"Mutators",description:"Mutate previos value",source:"@site/docs/state-management/mutators.md",sourceDirName:"state-management",slug:"/state-management/mutators",permalink:"/docs/state-management/mutators",draft:!1,editUrl:"https://github.com/whatsup/whatsup/docs/state-management/mutators.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Reactions",permalink:"/docs/state-management/reactions"},next:{title:"Decorators",permalink:"/docs/state-management/decorators"}},l={},i=[{value:"Mutate previos value",id:"mutate-previos-value",level:3},{value:"Mutators as filters",id:"mutators-as-filters",level:3},{value:"Equality filters",id:"equality-filters",level:3}],p={toc:i};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mutators"},"Mutators"),(0,a.kt)("h3",{id:"mutate-previos-value"},"Mutate previos value"),(0,a.kt)("p",null,"Allows you to create new data based on previous."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { observable, computed, mutator, autorun } from 'whatsup'\n\nconst concat = (letter: string) => {\n    return mutator((prev = '') => prev + letter)\n}\n\nconst output = computed(function* () {\n    const input = observable('')\n\n    window.addEventListener('keypress', (e) => input(e.key))\n\n    while (true) {\n        yield concat(input())\n    }\n})\n\nautorun(() => console.log(output()))\n\n// bress 'a' > 'a'\n// press 'b' > 'ab'\n// press 'c' > 'abc'\n")),(0,a.kt)("h3",{id:"mutators-as-filters"},"Mutators as filters"),(0,a.kt)("p",null,"Mutators can be used to control how updates are propagated. Whatsup under the hood compares the previous and new value by reference using the ",(0,a.kt)("inlineCode",{parentName:"p"},"===")," operator. When values are equal, update propagation stops."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { observable, computed, mutator, autorun } from 'whatsup'\n\nconst timer = computed(function* () {\n    const counter = observable(0)\n    const timerId = setInterval(() => counter(counter() + 1), 1000)\n\n    while (true) {\n        yield counter()\n    }\n})\n\n// Define a mutator that returns the new value\n// if it is even, otherwise the old value\nconst evenOnly = (next: number) => {\n    return mutator((prev = 0) => (next % 2 === 0 ? next : prev))\n}\n\nconst evenOnlyTimer = computed(() => {\n    return evenOnly(timer())\n})\n\nautorun(() => console.log(evenOnlyTimer()))\n//> 0\n//> 2\n//> 4\n//> ...\n")),(0,a.kt)("h3",{id:"equality-filters"},"Equality filters"),(0,a.kt)("p",null,"You can create custom equality filters. For example, we want the computed to not run recalculations if the new filtered users list is shallow equal to the previous one."),(0,a.kt)("p",null,"If we use ",(0,a.kt)("inlineCode",{parentName:"p"},"mobx")," we will do it like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const users = observable.array<User>([])\nconst admins = computed(() => users.filter((u) => u.isAdmin), {\n    equals: comparer.shallow,\n})\n")),(0,a.kt)("p",null,"Here is ",(0,a.kt)("inlineCode",{parentName:"p"},"whatsup")," way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const users = array<User>([])\nconst admins = computed(() => shallow(users.filter((u) => u.isAdmin)))\n")),(0,a.kt)("p",null,"And somewhere in the utilities"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// ./utuls.ts\n\nconst shallow<T> = (next: T[]) => {\n    /*\n    We have to compare the old and new value and\n    if they are equivalent return the old one,\n    otherwise return the new one.\n    */\n    return mutator((prev?: T[]) => {\n        if (\n            Array.isArray(prev) &&\n            prev.lenght === next.length &&\n            prev.every((item, i) => item === next[i])\n        ) {\n            return prev\n        }\n\n        return next\n    })\n}\n")),(0,a.kt)("p",null,"Later we will collect the most necessary filters in a separate package."))}c.isMDXComponent=!0}}]);