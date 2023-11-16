"use strict";(self.webpackChunkcar_rental_project=self.webpackChunkcar_rental_project||[]).push([[96],{96:(n,e,o)=>{o.r(e),o.d(e,{default:()=>rn});var r,t=o(168),i=o(867);const s=i.ZP.button(r||(r=(0,t.Z)(["\n  background-color: var(--button-color);\n  color: var(--invert-color);\n  transition: background-color 250ms ease-in-out;\n  width: 100%;\n  border-radius: 12px;\n  border: none;\n  padding: 12px 0;\n  margin-top: 28px;\n  cursor: pointer;\n  &:hover {\n    background-color: var(--button-hover);\n  }\n"])));var a=o(184);const d=n=>{let{onClick:e}=n;return(0,a.jsx)(s,{onClick:e,children:"Learn more"})};var l,c,p,h,x,u,g,f,b,v,j=o(692);const m=i.ZP.div(l||(l=(0,t.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  justify-content: space-between;\n"]))),w=i.ZP.div(c||(c=(0,t.Z)(["\n  border-radius: 14px;\n  background: linear-gradient(\n      180deg,\n      rgba(18, 20, 23, 0.5) 2.5%,\n      rgba(18, 20, 23, 0) 41.07%\n    ),\n    url(<path-to-image>), lightgray 50% / cover no-repeat;\n  width: 274px;\n  height: 268px;\n  max-width: 100%;\n  overflow: hidden;\n  position: relative;\n  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out;\n  cursor: pointer;\n  margin-bottom: 14px;\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0 1px 10px black;\n  }\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(\n      180deg,\n      rgba(18, 20, 23, 0.5) 2.5%,\n      rgba(18, 20, 23, 0) 41.07%\n    );\n  }\n"]))),Z=i.ZP.div(p||(p=(0,t.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  cursor: pointer;\n  transition: transform 250ms ease-in-out;\n  &:hover {\n    transform: scale(1.5);\n  }\n"]))),k=(0,i.ZP)(j.kTx)(h||(h=(0,t.Z)(["\n  fill: #ffffff;\n"]))),P=(0,i.ZP)(j.SEb)(x||(x=(0,t.Z)(["\n  fill: var(--button-color);\n"]))),y=i.ZP.img(u||(u=(0,t.Z)(["\n  object-fit: cover;\n  width: 100%;\n"]))),C=i.ZP.div(g||(g=(0,t.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--primary-color);\n"]))),E=i.ZP.span(f||(f=(0,t.Z)(["\n  color: var(--button-color);\n"]))),z=i.ZP.p(b||(b=(0,t.Z)(["\n  color: var(--secondary-color);\n  font-size: 12px;\n  line-height: 1.5;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 90%;\n"]))),L=i.ZP.span(v||(v=(0,t.Z)(["\n  color: var(--separator-color);\n"])));var M,O,I,_,S=o(791),R=o(434),T=o(46),B=o(87),F=o(164);const N=i.ZP.div(M||(M=(0,t.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #ffffff;\n  border: 1px solid #dce3e5cc;\n  border-radius: 24px;\n  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);\n  z-index: 1000;\n  transition: transform 250ms ease-in-out;\n"]))),U=i.ZP.div(O||(O=(0,t.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #12141780;\n  z-index: 999;\n  transition: transform 250ms ease-in-out;\n"]))),q=(i.ZP.div(I||(I=(0,t.Z)(["\n  background-color: white;\n  width: 541px;\n  padding: 20px;\n  border-radius: 5px;\n"]))),i.ZP.button(_||(_=(0,t.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: 24px;\n  padding: 0;\n"]))));var A=o(71);const D=n=>{let{isOpen:e,onClose:o,children:r}=n;return(0,S.useEffect)((()=>{const n=n=>{e&&"Escape"===n.key&&o()};return document.body.style.overflow=e?"hidden":"auto",window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n),document.body.style.overflow="auto"}}),[e,o]),e?F.createPortal((0,a.jsx)(U,{onClick:n=>{n.target===n.currentTarget&&o()},children:(0,a.jsxs)(N,{id:"modal-container",children:[(0,a.jsx)(q,{onClick:o,children:(0,a.jsx)(A.IOM,{width:24,height:24})}),r]})}),document.getElementById("modal-root")):null};var G,H;const J=i.ZP.div(G||(G=(0,t.Z)(["\n  padding: 40px;\n  width: 541px;\n"]))),K=i.ZP.img(H||(H=(0,t.Z)(["\n    object-fit: cover;\n    border-radius: 14px;\n"]))),Q=n=>{let{isModalOpen:e,closeModal:o,car:r}=n;const{model:t,img:i,description:s}=r;return(0,a.jsx)(D,{isOpen:e,onClose:o,children:(0,a.jsxs)(J,{children:[(0,a.jsx)(K,{src:i,alt:t,width:"461",height:"248"}),(0,a.jsx)("p",{children:s}),(0,a.jsx)(B.rU,{to:"tel:+380730000000",children:"Rental car"})]})})};var V=o(312);const W=n=>{let{car:e}=n;const{id:o,year:r,make:t,model:i,type:s,img:l,functionalities:c,rentalPrice:p,rentalCompany:h,address:x}=e,[u,g]=(0,S.useState)(!1),[f,b]=(0,S.useState)(!1),v=(0,R.I0)(),j=()=>{g(!0);const n=v((0,T.F)(e.id));console.log(n)},M=x.split(","),O=M[2],I=M[1];return(0,a.jsxs)(m,{children:[(0,a.jsxs)(w,{onClick:j,children:[(0,a.jsx)(Z,{onClick:n=>{n.stopPropagation(),b(!f),v(f?(0,V.Ni)(e):(0,V.a3)(e))},children:f?(0,a.jsx)(P,{width:18,height:18}):(0,a.jsx)(k,{width:18,height:18})}),(0,a.jsx)(y,{src:l,alt:i,width:"274",height:"268"})]}),(0,a.jsxs)(C,{children:[(0,a.jsxs)("p",{children:[t," ",(0,a.jsx)(E,{children:i}),", ",r]}),(0,a.jsx)("p",{children:p})]}),(0,a.jsxs)(z,{children:[I," ",(0,a.jsx)(L,{children:" | "}),O," ",(0,a.jsx)(L,{children:" | "})," ",h]}),(0,a.jsxs)(z,{children:[s," ",(0,a.jsx)(L,{children:" | "})," ",i," ",(0,a.jsx)(L,{children:" | "})," ",o,(0,a.jsx)(L,{children:" | "})," ",c[0]]}),(0,a.jsx)(d,{car:e,onClick:j}),u&&(0,a.jsx)(Q,{isModalOpen:u,closeModal:()=>{g(!1)},car:e})]})},X=n=>n.cars;var Y,$;const nn=i.ZP.ul(Y||(Y=(0,t.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 29px;\n  list-style: none;\n   margin: 0 auto;\n"]))),en=i.ZP.li($||($=(0,t.Z)(["\n   width: 274px;\n"]))),on=()=>{const n=(0,R.I0)(),{cars:e,isLoading:o,error:r}=(0,R.v9)(X);return(0,S.useEffect)((()=>{n((0,T.R)())}),[n]),(0,a.jsxs)(nn,{children:[o&&(0,a.jsx)("p",{children:"Loading cars..."}),r&&(0,a.jsx)("p",{children:r}),e.map((n=>(0,a.jsx)(en,{children:(0,a.jsx)(W,{car:n})},n.id)))]})},rn=()=>(0,a.jsx)(on,{})}}]);
//# sourceMappingURL=96.25e95c8a.chunk.js.map