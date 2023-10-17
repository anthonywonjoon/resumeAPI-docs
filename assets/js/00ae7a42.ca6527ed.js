"use strict";(self.webpackChunkresume_docs=self.webpackChunkresume_docs||[]).push([[2134],{8781:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>E,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=l(7462),a=(l(7294),l(3905)),n=l(3301),i=l(1686);const s={sidebar_position:1,slug:"/extra/get-all-activities"},c="Get All Extracurriculars",o={unversionedId:"Extracurriculars/getAllActivities",id:"Extracurriculars/getAllActivities",title:"Get All Extracurriculars",description:"Get the full experiences section from my resume",source:"@site/api/Extracurriculars/getAllActivities.mdx",sourceDirName:"Extracurriculars",slug:"/extra/get-all-activities",permalink:"/resumeapi-docs/api/extra/get-all-activities",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/extra/get-all-activities"},sidebar:"apiSidebar",previous:{title:"Get Experience By Company",permalink:"/resumeapi-docs/api/api/exp/get-experience-by-company"},next:{title:"Get Extracurricular By ID",permalink:"/resumeapi-docs/api/extra/get-activity-by-id"}},u={},p=[{value:"Request",id:"request",level:2},{value:"Response",id:"response",level:2},{value:"Try it out",id:"try-it-out",level:2}],m={toc:p},d="wrapper";function E(e){let{components:t,...l}=e;return(0,a.kt)(d,(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-all-extracurriculars"},"Get All Extracurriculars"),(0,a.kt)("div",{id:"top"}),(0,a.kt)("p",null,"Get the full experiences section from my resume"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Working on a cleaner way to list bullets for description"),(0,a.kt)("li",{parentName:"ul"},"Working on a cleaner UI for entity descriptions"))),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"GET ",(0,a.kt)("em",{parentName:"strong"},"/api/v1/activity/getAll")," ")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("hr",null),(0,a.kt)(i.Z,{type:"array of ActivityEntity",mdxType:"ActivityComponent"}),(0,a.kt)("h2",{id:"try-it-out"},"Try it out"),(0,a.kt)("hr",null),(0,a.kt)(n.Z,{url:"activity/getAll",mdxType:"ApiCallComponent"}),(0,a.kt)("a",{href:"#top"},"Back to top"))}E.isMDXComponent=!0},3301:(e,t,l)=>{l.d(t,{Z:()=>n});var r=l(7294),a=l(614);const n=e=>{let{url:t}=e;const[l,n]=(0,r.useState)([]),i="https://resume-api-fnk7.onrender.com/api/v1/"+t,s="/api/v1/"+t;return r.createElement("div",null,r.createElement("button",{className:"apiButton",onClick:function(){fetch(i,{method:"GET"}).then((e=>e.text())).then((e=>{let t=JSON.parse(e);e=JSON.stringify(t,null,2),n(e)})).catch((e=>console.log(e)))}},"Call ",s),l&&r.createElement("pre",null,r.createElement(a.Z,{className:"apiWindow",language:"json",title:s,showLineNumbers:!0},l)))}},1686:(e,t,l)=>{l.d(t,{Z:()=>a});var r=l(7294);const a=e=>{let{type:t}=e;const[l,a]=(0,r.useState)(!1);return r.createElement("div",null,r.createElement("div",{onClick:()=>{a(!l)},style:{cursor:"pointer",userSelect:"none"}},r.createElement("h3",null,r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-right-circle-fill",viewBox:"0 0 16 16"},r.createElement("path",{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"}))," ",r.createElement("b",null,"activity")," ",t)),l&&r.createElement("div",{style:{marginLeft:20}},r.createElement("div",null,r.createElement("p",null,r.createElement("b",null,"organization")," string"),r.createElement("p",null,"Name of organization"),r.createElement("p",null,'Example value: "Holiday Club"')),r.createElement("div",{style:{paddingTop:10}},r.createElement("p",null,r.createElement("b",null,"position")," string"),r.createElement("p",null,"Position title held"),r.createElement("p",null,'Example value: "Head of Christmas Committee"')),r.createElement("div",{style:{paddingTop:10}},r.createElement("p",null,r.createElement("b",null,"startDate")," string"),r.createElement("p",null,"Start date of extracurricular"),r.createElement("p",null,'Example value: "December 1870"')),r.createElement("div",{style:{paddingTop:10}},r.createElement("p",null,r.createElement("b",null,"endDate")," string"),r.createElement("p",null,"End date of extracurricular"),r.createElement("p",null,'Example value: "Present"')),r.createElement("div",{style:{paddingTop:10}},r.createElement("p",null,r.createElement("b",null,"description")," string"),r.createElement("p",null,"Description of position responsibilities, club purpose, etc"),r.createElement("p",null,'Example value: "Created outlines of when holidays should begin to celebrate throughout the year"'))))}}}]);