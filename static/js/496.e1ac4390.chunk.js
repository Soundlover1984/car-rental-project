"use strict";(self.webpackChunkcar_rental_project=self.webpackChunkcar_rental_project||[]).push([[496],{7692:(e,t,r)=>{r.d(t,{SEb:()=>c,kTx:()=>o});var n=r(9983);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"}}]})(e)}function c(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"}}]})(e)}},71:(e,t,r)=>{r.d(t,{IOM:()=>o});var n=r(9983);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 368L144 144m224 0L144 368"}}]})(e)}},9983:(e,t,r)=>{r.d(t,{w_:()=>l});var n=r(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=n.createContext&&n.createContext(o),s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function a(e){return e&&e.map((function(e,t){return n.createElement(e.tag,s({key:t},e.attr),a(e.child))}))}function l(e){return function(t){return n.createElement(u,s({attr:s({},e.attr)},t),a(e.child))}}function u(e){var t=function(t){var r,o=e.attr,c=e.size,a=e.title,l=i(e,["attr","size","title"]),u=c||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==c?n.createElement(c.Consumer,null,(function(e){return t(e)})):t(o)}},3791:(e,t,r)=>{r.d(t,{M:()=>v});var n=r(2791),o=r(2199);function c(){const e=(0,n.useRef)(!1);return(0,o.L)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var s=r(8771);var i=r(131),a=r(9829);class l extends n.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function u(e){let{children:t,isPresent:r}=e;const o=(0,n.useId)(),c=(0,n.useRef)(null),s=(0,n.useRef)({width:0,height:0,top:0,left:0});return(0,n.useInsertionEffect)((()=>{const{width:e,height:t,top:n,left:i}=s.current;if(r||!c.current||!e||!t)return;c.current.dataset.motionPopId=o;const a=document.createElement("style");return document.head.appendChild(a),a.sheet&&a.sheet.insertRule('\n          [data-motion-pop-id="'.concat(o,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(n,"px !important;\n            left: ").concat(i,"px !important;\n          }\n        ")),()=>{document.head.removeChild(a)}}),[r]),n.createElement(l,{isPresent:r,childRef:c,sizeRef:s},n.cloneElement(t,{ref:c}))}const f=e=>{let{children:t,initial:r,isPresent:o,onExitComplete:c,custom:s,presenceAffectsLayout:l,mode:f}=e;const d=(0,a.h)(p),m=(0,n.useId)(),h=(0,n.useMemo)((()=>({id:m,initial:r,isPresent:o,custom:s,onExitComplete:e=>{d.set(e,!0);for(const t of d.values())if(!t)return;c&&c()},register:e=>(d.set(e,!1),()=>d.delete(e))})),l?void 0:[o]);return(0,n.useMemo)((()=>{d.forEach(((e,t)=>d.set(t,!1)))}),[o]),n.useEffect((()=>{!o&&!d.size&&c&&c()}),[o]),"popLayout"===f&&(t=n.createElement(u,{isPresent:o},t)),n.createElement(i.O.Provider,{value:h},t)};function p(){return new Map}var d=r(7497);var m=r(5956);const h=e=>e.key||"";const v=e=>{let{children:t,custom:r,initial:i=!0,onExitComplete:a,exitBeforeEnter:l,presenceAffectsLayout:u=!0,mode:p="sync"}=e;(0,m.k)(!l,"Replace exitBeforeEnter with mode='wait'");const v=(0,n.useContext)(d.p).forceRender||function(){const e=c(),[t,r]=(0,n.useState)(0),o=(0,n.useCallback)((()=>{e.current&&r(t+1)}),[t]);return[(0,n.useCallback)((()=>s.Wi.postRender(o)),[o]),t]}()[0],E=c(),y=function(e){const t=[];return n.Children.forEach(e,(e=>{(0,n.isValidElement)(e)&&t.push(e)})),t}(t);let g=y;const w=(0,n.useRef)(new Map).current,x=(0,n.useRef)(g),k=(0,n.useRef)(new Map).current,C=(0,n.useRef)(!0);var O;if((0,o.L)((()=>{C.current=!1,function(e,t){e.forEach((e=>{const r=h(e);t.set(r,e)}))}(y,k),x.current=g})),O=()=>{C.current=!0,k.clear(),w.clear()},(0,n.useEffect)((()=>()=>O()),[]),C.current)return n.createElement(n.Fragment,null,g.map((e=>n.createElement(f,{key:h(e),isPresent:!0,initial:!!i&&void 0,presenceAffectsLayout:u,mode:p},e))));g=[...g];const P=x.current.map(h),b=y.map(h),L=P.length;for(let n=0;n<L;n++){const e=P[n];-1!==b.indexOf(e)||w.has(e)||w.set(e,void 0)}return"wait"===p&&w.size&&(g=[]),w.forEach(((e,t)=>{if(-1!==b.indexOf(t))return;const o=k.get(t);if(!o)return;const c=P.indexOf(t);let s=e;if(!s){const e=()=>{w.delete(t);const e=Array.from(k.keys()).filter((e=>!b.includes(e)));if(e.forEach((e=>k.delete(e))),x.current=y.filter((r=>{const n=h(r);return n===t||e.includes(n)})),!w.size){if(!1===E.current)return;v(),a&&a()}};s=n.createElement(f,{key:h(o),isPresent:!1,onExitComplete:e,custom:r,presenceAffectsLayout:u,mode:p},o),w.set(t,s)}g.splice(c,0,s)})),g=g.map((e=>{const t=e.key;return w.has(t)?e:n.createElement(f,{key:h(e),isPresent:!0,presenceAffectsLayout:u,mode:p},e)})),n.createElement(n.Fragment,null,w.size?g:g.map((e=>(0,n.cloneElement)(e))))}}}]);
//# sourceMappingURL=496.e1ac4390.chunk.js.map