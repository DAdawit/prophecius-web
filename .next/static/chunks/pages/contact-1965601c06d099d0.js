(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8367:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return s(2182)}])},2182:function(e,a,s){"use strict";s.r(a);var n=s(5893),i=s(163),l=s(62),r=s(2175),t=s(2806);s(1864),s(2506),s(7294);var m=s(4002);let c=()=>(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(i.Z,{pageTitle:"Get in touch!",breadTitle:"Contact",anchorLabel:"Send message",anchorLink:"#contact",paddingBottom:1,align:"center"}),(0,n.jsx)("div",{className:"mil-map-frame mil-up",children:(0,n.jsx)("div",{className:"mil-map",children:(0,n.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1396.5769090312324!2d-73.6519672!3d45.5673453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91f8abc30e0ff%3A0xfc6d9cbb49022e9c!2sManoir%20Saint-Joseph!5e0!3m2!1sen!2sua!4v1685485811069!5m2!1sen!2sua",style:{border:"0"},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})}),(0,n.jsx)("contactGrid",{}),(0,n.jsx)("div",{id:"dynamicContent"}),(0,n.jsx)("section",{id:"contact",children:(0,n.jsxs)("div",{className:"container mil-p-120-90",children:[(0,n.jsxs)("h3",{className:"mil-center mil-up mil-mb-120",children:["Let's ",(0,n.jsx)("span",{className:"mil-thin",children:"Talk"})]}),(0,n.jsx)(r.J9,{initialValues:{email:"",name:"",message:""},validate:e=>{let a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",a},onSubmit:(e,a)=>{let{setSubmitting:s}=a,n=document.getElementById("contactForm"),i=document.getElementById("contactFormStatus"),l=new FormData;l.append("name",e.name),l.append("email",e.email),l.append("message",e.message),fetch(n.action,{method:"POST",body:l,headers:{Accept:"application/json"}}).then(e=>{e.ok?(i.innerHTML="Thanks for your submission!",n.reset()):e.json().then(e=>{Object.hasOwn(e,"errors")?i.innerHTML=e.errors.map(e=>e.message).join(", "):i.innerHTML="Oops! There was a problem submitting your form"})}).catch(e=>{i.innerHTML="Oops! There was a problem submitting your form"}),s(!1)},children:e=>{let{values:a,errors:s,touched:i,handleChange:l,handleBlur:r,handleSubmit:c,isSubmitting:o}=e;return(0,n.jsxs)("form",{onSubmit:c,id:"contactForm",action:t.Xd.Tb,className:"row align-items-center",children:[(0,n.jsx)("div",{className:"col-lg-6 mil-up",children:(0,n.jsx)("input",{type:"text",placeholder:"What's your name",name:"name",required:"required",onChange:l,onBlur:r,value:a.name})}),(0,n.jsx)("div",{className:"col-lg-6 mil-up",children:(0,n.jsx)("input",{type:"email",placeholder:"Your Email",name:"email",required:"required",onChange:l,onBlur:r,value:a.email})}),(0,n.jsx)("div",{className:"col-lg-12 mil-up",children:(0,n.jsx)("textarea",{placeholder:"Tell us about our project",name:"message",required:"required",onChange:l,onBlur:r,value:a.message})}),(0,n.jsx)("div",{className:"col-lg-8",children:(0,n.jsxs)("p",{className:"mil-up mil-mb-30",children:[(0,n.jsx)("span",{className:"mil-accent",children:"*"})," We promise not to disclose your personal information to third parties."]})}),(0,n.jsx)("div",{className:"col-lg-4",children:(0,n.jsx)("div",{className:"mil-adaptive-right mil-up mil-mb-30",children:(0,n.jsxs)("button",{type:"submit",className:"mil-button mil-arrow-place",children:[(0,n.jsx)("span",{children:"Send message"}),(0,n.jsx)(m.Z,{})]})})}),(0,n.jsx)("div",{className:"form-status",id:"contactFormStatus"})]})}})]})})]});a.default=c}},function(e){e.O(0,[802,310,881,62,506,774,888,179],function(){return e(e.s=8367)}),_N_E=e.O()}]);