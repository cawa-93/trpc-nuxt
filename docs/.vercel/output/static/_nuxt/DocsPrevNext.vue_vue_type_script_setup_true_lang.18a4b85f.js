import{b as y,e as g,u as e,o as n,f as p,c as _,w as d,h as r,t as c,k as h,j as u,q as v,s as b,ao as k}from"./entry.5c8819da.js";import{u as w}from"./index.c8e7d9b1.js";const C={key:0,class:"flex flex-col-reverse justify-between gap-3 sm:flex-row sm:items-center"},N={class:"h-4 mb-1 text-xs font-medium text-right truncate u-text-gray-500"},B={class:"flex items-center gap-3"},j={class:"flex-1 font-medium leading-5 text-right truncate"},D={key:1},V={class:"h-4 mb-1 text-xs font-medium truncate u-text-gray-500"},F={class:"flex items-center gap-3"},P={class:"flex-1 font-medium leading-5 truncate"},I=y({__name:"DocsPrevNext",setup(q){const{prev:s,next:o,navigation:x}=g(),{navDirFromPath:f}=k(),m=i=>{const a=f(i._path,x.value||[]);if(a&&a[0])return a[0]._path;{const t=i.split("/");return(t.length>1?t[t.length-2]:"").split("-").map(w).join(" ")}};return(i,a)=>{const t=v,l=b;return e(s)||e(o)?(n(),p("div",C,[e(s)?(n(),_(l,{key:0,to:e(s)._path,class:"relative min-w-0 p-3 border rounded-lg hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-500 u-border-gray-100"},{default:d(()=>[r("p",N,c(m(e(s)._path)),1),r("p",B,[h(t,{name:"heroicons-outline:arrow-sm-left",class:"flex-shrink-0 w-5 h-5"}),r("span",j,c(e(s).title),1)])]),_:1},8,["to"])):(n(),p("span",D)),e(o)?(n(),_(l,{key:2,to:e(o)._path,class:"relative min-w-0 p-3 border rounded-lg hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-500 u-border-gray-100"},{default:d(()=>[r("p",V,c(m(e(o)._path)),1),r("p",F,[r("span",P,c(e(o).title),1),h(t,{name:"heroicons-outline:arrow-sm-right",class:"flex-shrink-0 w-5 h-5"})])]),_:1},8,["to"])):u("",!0)])):u("",!0)}}});export{I as _};