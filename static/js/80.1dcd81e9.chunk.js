"use strict";(self.webpackChunkcar_rental_project=self.webpackChunkcar_rental_project||[]).push([[80],{5315:(n,e,o)=>{o.d(e,{Z:()=>Bn});var r,t=o(168),i=o(6487);const a=i.ZP.button(r||(r=(0,t.Z)(["\n  background-color: var(--button-color);\n  font-weight: 600;\n  font-size: 14px;\n  color: var(--invert-color);\n  transition: background-color 500ms ease-in-out;\n  width: 100%;\n  border-radius: 12px;\n  border: none;\n  padding: 12px 0;\n  margin-top: 28px;\n  cursor: pointer;\n  &:hover {\n    background-color: var(--button-hover);\n  }\n"])));var s=o(184);const l=n=>{let{onClick:e}=n;return(0,s.jsx)(a,{onClick:e,children:"Learn more"})};var c,d,p,x,h,u,g,b,m,v,f=o(2791),w=o(9434),j=o(3791),Z=o(7692);const k=i.ZP.div(c||(c=(0,t.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  justify-content: space-between;\n"]))),y=i.ZP.div(d||(d=(0,t.Z)(["\n  border-radius: 14px;\n  width: 274px;\n  height: 268px;\n  max-width: 100%;\n  overflow: hidden;\n  position: relative;\n  transition: transform 500ms ease-in-out, box-shadow 500ms ease-in-out;\n  cursor: pointer;\n  margin-bottom: 14px;\n\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0 1px 10px black;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(\n      180deg,\n      rgba(18, 20, 23, 0.5) 2.5%,\n      rgba(18, 20, 23, 0) 41.07%\n    );\n  }\n"]))),P=i.ZP.div(p||(p=(0,t.Z)(["\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: 14px;\n  right: 14px;\n  cursor: pointer;\n  transition: transform 500ms ease-in-out;\n\n  &:hover {\n    transform: scale(1.5);\n  }\n"]))),C=(0,i.ZP)(Z.kTx)(x||(x=(0,t.Z)(["\n  fill: #ffffff;\n  width: 100%;\n  height: 100%;\n"]))),M=(0,i.ZP)(Z.SEb)(h||(h=(0,t.Z)(["\n  fill: var(--button-color);\n  width: 100%;\n  height: 100%;\n"]))),S=i.ZP.img(u||(u=(0,t.Z)(["\n  object-fit: cover;\n  width: 100%;\n"]))),z=i.ZP.div(g||(g=(0,t.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--primary-color);\n"]))),E=i.ZP.span(b||(b=(0,t.Z)(["\n  color: var(--button-color);\n"]))),L=i.ZP.p(m||(m=(0,t.Z)(["\n  color: var(--secondary-color);\n  font-size: 12px;\n  line-height: 1.5;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 90%;\n  text-align: left;\n"]))),I=i.ZP.span(v||(v=(0,t.Z)(["\n  color: var(--separator-color);\n"])));var A=o(1046),B=o(4164),O=o(8420);const{mobile:T,tablet:F,desktop:R}={mobile:375,tablet:768,desktop:1440},N=n=>"@media screen and (max-width: ".concat(n,"px)");var D,$,_,W;const H=(0,i.ZP)(O.E.div)(D||(D=(0,t.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #ffffff;\n  border: 1px solid #dce3e5cc;\n  border-radius: 24px;\n  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);\n  z-index: 1000;\n  "," {\n    width: 90%;\n    top: 10px;\n  }\n  "," {\n    top: 20px;\n    overflow-y: auto;\n    margin-top:100px;\n  }\n"])),N(500),N(F)),J=i.ZP.div($||($=(0,t.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #12141780;\n  z-index: 999;\n"]))),q=(i.ZP.div(_||(_=(0,t.Z)(["\n  background-color: var(--bg-color);\n  width: 541px;\n  padding: 20px;\n  border-radius: 5px;\n\n  "," {\n    overflow-y: auto;\n  }\n"])),N(F)),i.ZP.button(W||(W=(0,t.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: 24px;\n  padding: 0;\n  transition: color 500px ease-in-out;\n\n  :hover {\n    color: var(--accent-color);\n  }\n\n  "," {\n    top: 4px;\n    right: 4px;\n  }\n"])),N(500)));var G=o(71),K=o(4805);const Q=n=>{let{isOpen:e,onClose:o,children:r}=n;const t=(0,K.useMediaQuery)({query:"(max-width: 768px)"});return(0,f.useEffect)((()=>{const n=n=>{e&&"Escape"===n.key&&o()};return document.body.style.overflow=e?"hidden":"auto",window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n),document.body.style.overflow="auto"}}),[e,o]),e?B.createPortal((0,s.jsx)(J,{onClick:n=>{n.target===n.currentTarget&&o()},children:(0,s.jsxs)(H,{id:"modal-container",initial:t?{opacity:0,x:"-50%",y:0,scale:0}:{opacity:0,x:"-50%",y:"-50%",scale:0},animate:e?{opacity:1,scale:1}:{opacity:0,scale:0},exit:{opacity:0,scale:0},transition:{duration:.5},children:[(0,s.jsx)(q,{onClick:o,children:(0,s.jsx)(G.IOM,{width:24,height:24})}),r]},"modal")}),document.getElementById("modal-root")):null};var U,V,Y,X,nn,en,on,rn,tn,an,sn,ln,cn,dn,pn=o(1087);const xn=i.ZP.div(U||(U=(0,t.Z)(["\n  padding: 40px;\n  width: 541px;\n\n  "," {\n    padding: 20px;\n    max-height: calc(100vh - 30px);\n    overflow-y: auto;\n  }\n\n  "," {\n    max-width: 100%;\n    max-height: calc(100vh - 30px);\n    overflow-y: auto;\n  }\n  &::-webkit-scrollbar {\n    width: 6px;\n  }\n  &::-webkit-scrollbar-track {\n    background: var(--separator-color);\n    border-radius: 12px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: var(--select-color);\n    border-radius: 12px;\n  }\n"])),N(500),N(F)),hn=i.ZP.img(V||(V=(0,t.Z)(["\n  object-fit: cover;\n  border-radius: 14px;\n  margin-bottom: 14px;\n\n  "," {\n    max-width: 100%;\n  }\n"])),N(F)),un=i.ZP.div(Y||(Y=(0,t.Z)(["\n  margin-bottom: 24px;\n  "," {\n    overflow-y: auto;\n    max-height: 45vh;\n    &::-webkit-scrollbar {\n      width: 6px;\n    }\n    &::-webkit-scrollbar-track {\n      background: var(--separator-color);\n      border-radius: 12px;\n    }\n    &::-webkit-scrollbar-thumb {\n      background: var(--select-color);\n      border-radius: 12px;\n    }\n  }\n"])),N(F)),gn=i.ZP.p(X||(X=(0,t.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.33;\n  align-items: center;\n  color: var(--primary-color);\n  margin-bottom: 8px;\n"]))),bn=i.ZP.span(nn||(nn=(0,t.Z)(["\n  color: var(--button-color);\n"]))),mn=i.ZP.div(en||(en=(0,t.Z)(["\n  margin-bottom: 14px;\n"]))),vn=i.ZP.ul(on||(on=(0,t.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -6px;\n  margin-bottom: 4px;\n"]))),fn=i.ZP.li(rn||(rn=(0,t.Z)(["\n  padding: 0 6px;\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--secondary-color);\n  :not(:last-child) {\n    border-right: 1px solid var(--separator-color);\n  }\n"]))),wn=i.ZP.p(tn||(tn=(0,t.Z)(["\n  font-size: 14px;\n  line-height: 1.43;\n  margin-bottom: 24px;\n"]))),jn=i.ZP.div(an||(an=(0,t.Z)(["\n  /* margin-bottom: 24px; */\n"]))),Zn=i.ZP.p(sn||(sn=(0,t.Z)(["\n  margin-bottom: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.43;\n"]))),kn=i.ZP.ul(ln||(ln=(0,t.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n"]))),yn=i.ZP.li(cn||(cn=(0,t.Z)(["\n  background-color: var(--condition-bg-color);\n  color: var(--condition-color);\n  padding: 7px 14px;\n  border-radius: 35px;\n  font-size: 12px;\n  line-height: 1.5;\n\n  span {\n    font-weight: 600;\n  }\n"]))),Pn=(0,i.ZP)(pn.OL)(dn||(dn=(0,t.Z)(["\n  background-color: var(--button-color);\n  color: var(--invert-color);\n  transition: background-color 500ms ease-in-out;\n  border-radius: 12px;\n  border: none;\n  padding: 12px 0px;\n  text-align: center;\n  display: block;\n  width: 168px;\n  cursor: pointer;\n  &:hover {\n    background-color: var(--button-hover);\n  }\n"])));const Cn=n=>{let{isModalOpen:e,closeModal:o,car:r}=n;const{id:t,year:i,make:a,model:l,type:c,img:d,description:p,fuelConsumption:x,engineSize:h,accessories:u,functionalities:g,rentalPrice:b,address:m,rentalConditions:v,mileage:f}=r,w=m.split(","),j=w[2],Z=w[1],k=v.split("\n"),y=k[0].split(" "),P=y[2],C=y.splice(0,2).join(" "),M=function(n){if(!Number.isInteger(n))return"Invalid number";const e=n.toString();let o="";for(let r=e.length-1,t=1;r>=0;r--,t++)o=e[r]+o,t%3===0&&r>0&&(o=","+o);return o}(f);return(0,s.jsx)(Q,{isOpen:e,onClose:o,children:(0,s.jsxs)(xn,{children:[(0,s.jsx)(hn,{src:d,alt:l,width:"461",height:"248"}),(0,s.jsxs)(un,{children:[(0,s.jsxs)(gn,{children:[a," ",(0,s.jsx)(bn,{children:l}),", ",i]}),(0,s.jsxs)(mn,{children:[(0,s.jsxs)(vn,{children:[(0,s.jsx)(fn,{children:Z}),(0,s.jsx)(fn,{children:j}),(0,s.jsxs)(fn,{children:["id: ",t]}),(0,s.jsxs)(fn,{children:["Year: ",i]}),(0,s.jsxs)(fn,{children:["Type: ",c]})]}),(0,s.jsxs)(vn,{children:[(0,s.jsxs)(fn,{children:["Fuel Consumption: ",x]}),(0,s.jsxs)(fn,{children:["EngineSize: ",h]})]})]}),(0,s.jsx)(wn,{children:p}),(0,s.jsxs)(jn,{children:[(0,s.jsx)(Zn,{children:"Accessories and functionalities:"}),(0,s.jsx)(vn,{children:u.map(((n,e)=>(0,s.jsx)(fn,{children:n},e)))}),(0,s.jsx)(vn,{children:g.map(((n,e)=>(0,s.jsx)(fn,{children:n},e)))})]}),(0,s.jsxs)(jn,{children:[(0,s.jsx)(Zn,{children:"Rental Conditions: "}),(0,s.jsxs)(kn,{children:[(0,s.jsxs)(yn,{children:[C," ",(0,s.jsx)(bn,{children:P})]}),(0,s.jsx)(yn,{children:k[1]}),(0,s.jsx)(yn,{children:k[2]}),(0,s.jsxs)(yn,{children:["Mileage: ",(0,s.jsx)(bn,{children:M})]}),(0,s.jsxs)(yn,{children:["Price: ",(0,s.jsxs)(bn,{children:[b.slice(1),"$"]})]})]})]})]}),(0,s.jsx)(Pn,{to:"tel:+380730000000",children:"Rental car"})]})})};var Mn=o(8020),Sn=o(6351);const zn=n=>{let{car:e}=n;const{id:o,year:r,make:t,model:i,type:a,img:c,functionalities:d,rentalPrice:p,rentalCompany:x,address:h}=e,[u,g]=(0,f.useState)(!1),[b,m]=(0,f.useState)(!1),{favoriteCars:v}=(0,w.v9)(Sn.eA),Z=(0,w.I0)(),B=h.split(","),O=B[2],T=B[1];(0,f.useEffect)((()=>{v.some((n=>n.id===e.id))&&m(!0)}),[v,e]);const F=()=>{g(!0),Z((0,A.FJ)(e.id))};return(0,s.jsxs)(k,{children:[(0,s.jsxs)(y,{onClick:F,children:[(0,s.jsx)(P,{onClick:n=>{n.stopPropagation(),m(!b),v.some((n=>n.id===e.id))?Z((0,Mn.Ni)(e)):Z((0,Mn.a3)(e))},children:b?(0,s.jsx)(M,{width:20,height:20}):(0,s.jsx)(C,{width:20,height:20})}),(0,s.jsx)(S,{src:c,alt:i,width:"274",height:"268"})]}),(0,s.jsxs)(z,{children:[(0,s.jsxs)("p",{children:[t," ",(0,s.jsx)(E,{children:i}),", ",r]}),(0,s.jsx)("p",{children:p})]}),(0,s.jsxs)(L,{children:[T," ",(0,s.jsx)(I,{children:" | "}),O," ",(0,s.jsx)(I,{children:" | "})," ",x]}),(0,s.jsxs)(L,{children:[a," ",(0,s.jsx)(I,{children:" | "})," ",i," ",(0,s.jsx)(I,{children:" | "})," ",o,(0,s.jsx)(I,{children:" | "})," ",d[0]]}),(0,s.jsx)(l,{car:e,onClick:F}),(0,s.jsx)(j.M,{children:u&&(0,s.jsx)(Cn,{isModalOpen:u,closeModal:()=>{g(!1)},car:e})})]})};var En,Ln;const In=i.ZP.ul(En||(En=(0,t.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 29px;\n  row-gap: 50px;\n  list-style: none;\n  margin: 0 auto;\n  justify-content: center;\n  margin-bottom: 50px;\n"]))),An=i.ZP.li(Ln||(Ln=(0,t.Z)(["\n  width: 274px;\n"]))),Bn=n=>{let{carsArray:e}=n;return(0,s.jsx)(In,{children:e.map((n=>(0,s.jsx)(An,{children:(0,s.jsx)(zn,{car:n})},n.id)))})}},3080:(n,e,o)=>{o.r(e),o.d(e,{default:()=>q});var r,t=o(5315),i=o(9434),a=o(1046),s=o(168),l=o(6487);const c=l.ZP.button(r||(r=(0,s.Z)(["\n  color: var(--button-color);\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  text-decoration-line: underline;\n  background-color: transparent;\n  border: none;\n  transition: color 500ms ease-in-out;\n  :hover {\n    color: var(--button-hover);\n  }\n  cursor: pointer;\n"])));var d=o(184);const p=n=>{let{page:e,setPage:o,setShowButton:r}=n;const t=(0,i.I0)();return(0,d.jsx)(c,{onClick:async()=>{const{payload:n}=await t((0,a.Rn)(e+1));o((n=>n+1)),n.length>=12?r(!0):r(!1)},children:"Load more"})};var x=o(2791),h=o(6895);const u=n=>n.map((n=>({value:n,label:n})));var g,b,m,v=o(410);const f=l.ZP.div(g||(g=(0,s.Z)(["\n  width: ",";\n  text-align: left;\n"])),(n=>n.width)),w=l.ZP.label(b||(b=(0,s.Z)(["\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  font-size: 14px;\n  color: var(--label-color);\n"]))),j=(0,l.ZP)(v.ZP)(m||(m=(0,s.Z)(["\n \n  height: 48px;\n  .custom-select-arrow {\n    transition: transform 0.5s; \n  }\n  .custom-select.is-open .custom-select-arrow {\n    transform: rotate(180deg); \n  }\n  .custom-select.is-open.custom-select-menu::-webkit-scrollbar {\n    width: 8px; \n    background-color: red;\n  }\n  #react-select-2-listbox,\n  #react-select-3-listbox {\n    border-radius: 14px;\n    overflow: hidden;\n  }\n"]))),Z=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land Rover"]');let k=[];(()=>{for(let n=30;n<=500;n+=10)k.push(n)})();const y=n=>{let{textLabel:e,name:o,width:r,handleChange:t,value:i,brand:a}=n;const s=Z.filter(((n,e,o)=>o.indexOf(n)===e)).sort();const l=u(s),c=u(k);return(0,d.jsxs)(f,{width:r,children:[(0,d.jsx)(w,{htmlFor:o,children:e}),(0,d.jsx)(j,{id:o,options:a?l:c,className:"custom-select custom-select-menu",onChange:t,value:i,styles:{dropdownIndicator:(n,e)=>({...n,transition:"transform 0.5s",transform:e.selectProps.menuIsOpen?"rotate(180deg)":"none"}),control:(n,e)=>({...n,backgroundColor:"var(--input-bg-color)",borderRadius:"14px",border:"none",output:"none",height:"48px"})}})]})};var P,C,M,S,z,E,L,I,A=o(948);const B=l.ZP.form(P||(P=(0,s.Z)(["\n  margin: 0 auto;\n  margin-bottom: 50px;\n  display: flex;\n  justify-content: center;\n  gap: 18px;\n  flex-wrap: wrap;\n  margin-top: 30px;\n"]))),O=l.ZP.div(C||(C=(0,s.Z)(["\n  text-align: left;\n"]))),T=l.ZP.label(M||(M=(0,s.Z)(["\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  font-size: 14px;\n  color: var(--label-color);\n"]))),F=l.ZP.div(S||(S=(0,s.Z)(["\n  display: flex;\n  gap: 1px;\n  background-color: rgba(138, 138, 137, 0.2);\n  border: none;\n  border-radius: 14px;\n  overflow: hidden;\n"]))),R=l.ZP.div(z||(z=(0,s.Z)(["\n  position: relative;\n"]))),N=l.ZP.p(E||(E=(0,s.Z)(["\n  position: absolute;\n  left: 24px;\n  top: 15px;\n"]))),D=l.ZP.button(L||(L=(0,s.Z)(["\n  align-self: end;\n  padding: 14px 44px;\n  font-weight: 600;\n  font-size: 14px;\n   height: 48px;\n  border-radius: 12px;\n  background-color: var(--button-color);\n  color: var(--invert-color);\n  transition: background-color 500ms ease-in-out;\n  cursor: pointer;\n  border: none;\n  &:hover {\n    background-color: var(--button-hover);\n  }\n  &:disabled {\n    background-color: var(--secondary-color);\n    opacity: 0.8;\n    cursor: auto;\n  }"]))),$=(0,l.ZP)(A.h3)(I||(I=(0,s.Z)(["\n  padding-left: ",";\n  width: 160px;\n  height: 48px;\n  background-color: var(--input-bg-color);\n  border: none;\n  outline: none;\n"])),(n=>n.padding)),_=n=>{let{setFiltering:e,setShowButton:o}=n;const[r,t]=(0,x.useState)({value:"",label:"To $"}),[s,l]=(0,x.useState)({value:"",label:"Enter the text"}),[c,p]=(0,x.useState)(""),[u,g]=(0,x.useState)(!0),[b,m]=(0,x.useState)(""),[v,f]=(0,x.useState)(""),w=(0,i.I0)();(0,x.useEffect)((()=>{"Enter the text"!==s.label||"To $"!==r.label||""!==b||""!==v?g(!1):g(!0)}),[s,r,b,v]);const j=n=>{const e=n.target.value;switch(n.target.name){case"mileageMin":m(e);break;case"mileageMax":f(e)}};return(0,d.jsxs)(B,{children:[(0,d.jsx)(y,{textLabel:"Car brand",name:"make",brand:!0,value:s,handleChange:n=>{l({label:n.value,value:n.value})},width:"224px"}),(0,d.jsx)(y,{textLabel:"Price/ 1 hour",name:"price",value:r,handleChange:n=>{const e="To ".concat(n.value,"$");t({label:e,value:e}),p(n.value)},width:"125px"}),(0,d.jsxs)(O,{children:[(0,d.jsx)(T,{htmlFor:"fromMileage",children:"\u0421ar mileage / km"}),(0,d.jsxs)(F,{children:[(0,d.jsxs)(R,{children:[(0,d.jsx)(N,{children:"From"}),(0,d.jsx)($,{value:b,name:"mileageMin",id:"fromMileage",format:"##,###",maxLength:6,decimalScale:3,thousandSeparator:!0,onChange:j,padding:"65px"})]}),(0,d.jsxs)(R,{children:[(0,d.jsx)(N,{children:"To"}),(0,d.jsx)($,{name:"mileageMax",id:"toMileage",padding:"45px",format:"##,###",maxLength:6,decimalScale:3,thousandSeparator:!0,value:v,onChange:j})]})]})]}),(0,d.jsx)(D,{onClick:async n=>{n.preventDefault();const o={make:s.value.toLowerCase().trim()||"",price:c||"500",mileageMin:b.split(",").join("")||0,mileageMax:v.split(",").join("")||99999};w((0,h.Tv)(o)),e(!0)},disabled:u,children:"Search"}),(0,d.jsx)(D,{onClick:n=>{n.preventDefault(),w((0,a.l6)()),e(!1),t({value:"",label:"To $"}),l({value:"",label:"Enter the text"}),m(""),f(""),o(!0)},disabled:u,children:"Reset"})]})};var W=o(6351);const H=(n,e)=>n.filter((n=>{let{make:o,rentalPrice:r,mileage:t}=n;return o.toLowerCase().includes(e.make)&&parseInt(r.replace(/\D/g,""),10)<=e.price&&t>e.mileageMin&&t<e.mileageMax}));var J=o(1454);const q=()=>{const n=(0,i.I0)(),{cars:e,isLoading:o}=(0,i.v9)(W.Wz),[r,s]=(0,x.useState)(!1),[l,c]=(0,x.useState)(1),h=(0,i.v9)(W.AD),[u,g]=(0,x.useState)([]),[b,m]=(0,x.useState)(!1);return(0,x.useEffect)((()=>{1===l&&(n((0,a.l6)()),s(!0))}),[n,l]),(0,x.useEffect)((()=>{b&&(async()=>{const{payload:e}=await n((0,a.fP)()),o=await H(e,h);g(o)})()}),[b,h,n]),(0,d.jsxs)("section",{children:[(0,d.jsx)(_,{setFilterCars:g,setFiltering:m,setShowButton:s}),b?0===u.length?(0,d.jsx)("p",{children:"Apologies, no results were found here. Consider adjusting your search parameters for better outcomes..."}):(0,d.jsx)(t.Z,{carsArray:u}):(0,d.jsx)(t.Z,{carsArray:e}),!b&&(o?(0,d.jsx)(J.Z,{}):r&&(0,d.jsx)(p,{page:l,setPage:c,setShowButton:s}))]})}},6351:(n,e,o)=>{o.d(e,{AD:()=>i,Wz:()=>r,eA:()=>t});const r=n=>n.cars,t=n=>n.favorites,i=n=>n.filter}}]);
//# sourceMappingURL=80.1dcd81e9.chunk.js.map