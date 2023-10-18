"use strict";(self.webpackChunkresume_docs=self.webpackChunkresume_docs||[]).push([[2446],{9695:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>E,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=l(7462),a=(l(7294),l(3905)),r=l(3301),i=l(7030);const o={sidebar_position:1,slug:"/edu/get-full-education"},u="Get Full Education",s={unversionedId:"Education/getFullEducation",id:"Education/getFullEducation",title:"Get Full Education",description:"Get the full biography section of the resume",source:"@site/api/Education/getFullEducation.mdx",sourceDirName:"Education",slug:"/edu/get-full-education",permalink:"/resumeapi-docs/api/edu/get-full-education",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/edu/get-full-education"},sidebar:"apiSidebar",previous:{title:"Get Contact Information",permalink:"/resumeapi-docs/api/api/bio/get-contact-info"},next:{title:"Get Degrees",permalink:"/resumeapi-docs/api/api/edu/get-degree"}},c={},d=[{value:"Request",id:"request",level:2},{value:"Response",id:"response",level:2},{value:"Try it out",id:"try-it-out",level:2}],p={toc:d},m="wrapper";function E(e){let{components:t,...l}=e;return(0,a.kt)(m,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-full-education"},"Get Full Education"),(0,a.kt)("div",{id:"top"}),(0,a.kt)("p",null,"Get the full biography section of the resume"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Working on a cleaner way to list bullets for description"),(0,a.kt)("li",{parentName:"ul"},"Working on a cleaner UI for entity descriptions"))),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"GET ",(0,a.kt)("em",{parentName:"strong"},"/api/v1/edu/getAll")," ")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("hr",null),(0,a.kt)(i.Z,{type:"EduEntity",mdxType:"EduComponent"}),(0,a.kt)("h2",{id:"try-it-out"},"Try it out"),(0,a.kt)("hr",null),(0,a.kt)(r.Z,{url:"edu/getAll",mdxType:"ApiCallComponent"}),(0,a.kt)("a",{href:"#top"},"Back to top"))}E.isMDXComponent=!0},3301:(e,t,l)=>{l.d(t,{Z:()=>r});var n=l(7294),a=l(7693);const r=e=>{let{url:t}=e;const[l,r]=(0,n.useState)([]),[i,o]=(0,n.useState)(!1),u="https://resume-api-fnk7.onrender.com/api/v1/"+t,s="/api/v1/"+t;return n.createElement("div",null,n.createElement("button",{className:"apiButton",onClick:function(){o(!0),fetch(u,{method:"GET"}).then((e=>e.text())).then((e=>{let t=JSON.parse(e);e=JSON.stringify(t,null,2),r(e)})).catch((e=>console.log(e))).finally((()=>{o(!1)}))}},i?n.createElement(n.Fragment,null,"Loading.."):n.createElement(n.Fragment,null,"Call ",s)),l&&n.createElement("pre",null,n.createElement(a.Z,{className:"apiWindow",language:"json",title:s,showLineNumbers:!0},l)))}},7030:(e,t,l)=>{l.d(t,{Z:()=>a});var n=l(7294);const a=()=>{const[e,t]=(0,n.useState)(!1);return n.createElement("div",null,n.createElement("div",{onClick:()=>{t(!e)},style:{cursor:"pointer",userSelect:"none"}},n.createElement("h3",null,n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-right-circle-fill",viewBox:"0 0 16 16"},n.createElement("path",{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"}))," ",n.createElement("b",null,"education")," EducationEntity")),e&&n.createElement("div",{style:{marginLeft:20}},n.createElement("div",null,n.createElement("p",null,n.createElement("b",null,"institution")," string"),n.createElement("p",null,"Name of the University/Institution"),n.createElement("p",null,'Example value: "University of the North Pole"')),n.createElement("div",{style:{paddingTop:10}},n.createElement("p",null,n.createElement("b",null,"gradDate")," string"),n.createElement("p",null,"Expected or actual graduation date from listed institution"),n.createElement("p",null,'Example value: "Spring 2023"')),n.createElement("div",{style:{paddingTop:10}},n.createElement("p",null,n.createElement("b",null,"degree")," string"),n.createElement("p",null,"Type of degree obtained"),n.createElement("p",null,'Example value: "BBA"')),n.createElement("div",{style:{paddingTop:10}},n.createElement("p",null,n.createElement("b",null,"majors")," string"),n.createElement("p",null,"Majors for the degree"),n.createElement("p",null,'Example value: "Business"')),n.createElement("div",{style:{paddingTop:10}},n.createElement("p",null,n.createElement("b",null,"minor")," string"),n.createElement("p",null,"Supplementary minors to the main degree"),n.createElement("p",null,'Example value: "Computer Science"')),n.createElement("div",{style:{paddingTop:10}},n.createElement("p",null,n.createElement("b",null,"relevantCourses")," string"),n.createElement("p",null,"List of relevant courses towards desired industry"),n.createElement("p",null,'Example value: "Introduction to Computer Science I"'))))}}}]);