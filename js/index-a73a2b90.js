import{w as p,j as a,ab as x,H as u,ac as f,r as h,a as e,B as c,C as i,a5 as l,ad as g,ae as T,af as F,ag as A,ah as y,ai as B,a1 as n,a3 as d,X as C,F as r,D,aj as I,a0 as k,a2 as w}from"./index.js";import{u as E}from"./useDispatch-d096d5b2.js";const L=p(a("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack"),v=()=>{const{countryId:s}=x(),t=u(o=>f(o,s));return h.exports.useEffect(()=>{window.scrollTo(0,0)},[]),e(c,{sx:{paddingBottom:i.gutter},children:[e(l,{container:!0,columnSpacing:{md:6},rowSpacing:{xs:2},children:[a(l,{item:!0,xs:12,md:6,children:a(g,{countryById:t})}),e(l,{item:!0,xs:12,md:6,children:[a(T,{countryById:t}),a(F,{countryById:t}),a(A,{countryById:t})]})]}),a(y,{countryById:t})]})},U={fontSize:C.xxsmall,color:r.color9,background:r.color7,boxShadow:D.default,padding:`${i.xsmall} ${i.medium}`,"&:hover":{color:r.color9,background:r.color8}},b=()=>{const s=E(),t=I(),{statusFetch:o,errorFetch:S}=u(k),m=()=>{t(-1)};return h.exports.useEffect(()=>{o===n.IDLE_STATUS&&s(w())},[]),{statusFetch:o,errorFetch:S,handleClick:m}},_=()=>{const{statusFetch:s,errorFetch:t,handleClick:o}=b();return e(c,{children:[a(c,{children:a(B,{variant:"contained",onClick:o,startIcon:a(L,{sx:{fontSize:30}}),sx:U,children:"Back"})}),e(c,{sx:{pt:i.gutter},children:[s===n.LOADING_STATUS&&a(d,{fontFamily:"monospace",children:"Loading Details ..."}),s===n.FAILED_STATUS&&a(d,{fontFamily:"monospace",children:t}),s===n.SUCCESS_STATUS&&a(v,{})]})]})};export{_ as default};
