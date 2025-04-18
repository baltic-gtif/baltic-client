import{aN as F,aE as H,c as k,o as E,G as y,w as S,b as R,e as C,H as q,k as w,K as p,r as O,ap as M,p as I,Y as N,q as B,T as D,P as U}from"./framework.CA01QrOL.js";import{aH as Y,Q as V,R as b,S as X,aI as j,ag as K,as as z,at as G,av as J,aw as Q,ai as Z,W,a6 as _,aJ as ee,X as te,Y as ae,ad as oe,am as ne,an as se,ap as ie,aq as re,$ as le,ae as ce,aK as ue,ak as de}from"./eo-dash.DdUMebSm.js";import{V as T,m as me}from"./VOverlay-BzOdRu9h.BVTH_ZA_.js";import{u as fe,f as ge,a as x,b as ve,s as A,d as he,g as ye,n as pe}from"./forwardRefs-Bon_Kku1.BFA9Q3VN.js";import"./commonjsHelpers.BosuxZz1.js";import"./transition-C5I57hn6.C5Gwtfcs.js";const xe=b({target:[Object,Array]},"v-dialog-transition"),Pe=V()({name:"VDialogTransition",props:xe(),setup(e,l){let{slots:a}=l;const i={onBeforeEnter(t){t.style.pointerEvents="none",t.style.visibility="hidden"},async onEnter(t,d){var u;await new Promise(s=>requestAnimationFrame(s)),await new Promise(s=>requestAnimationFrame(s)),t.style.visibility="";const{x:o,y:r,sx:f,sy:g,speed:n}=$(e.target,t),c=x(t,[{transform:`translate(${o}px, ${r}px) scale(${f}, ${g})`,opacity:0},{}],{duration:225*n,easing:he});(u=L(t))==null||u.forEach(s=>{x(s,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*n,easing:A})}),c.finished.then(()=>d())},onAfterEnter(t){t.style.removeProperty("pointer-events")},onBeforeLeave(t){t.style.pointerEvents="none"},async onLeave(t,d){var u;await new Promise(s=>requestAnimationFrame(s));const{x:o,y:r,sx:f,sy:g,speed:n}=$(e.target,t);x(t,[{},{transform:`translate(${o}px, ${r}px) scale(${f}, ${g})`,opacity:0}],{duration:125*n,easing:ve}).finished.then(()=>d()),(u=L(t))==null||u.forEach(s=>{x(s,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*n,easing:A})})},onAfterLeave(t){t.style.removeProperty("pointer-events")}};return()=>e.target?y(D,p({name:"dialog-transition"},i,{css:!1}),a):y(D,{name:"dialog-transition"},a)}});function L(e){var a;const l=(a=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:a.children;return l&&[...l]}function $(e,l){const a=ye(e),i=pe(l),[t,d]=getComputedStyle(l).transformOrigin.split(" ").map(P=>parseFloat(P)),[o,r]=getComputedStyle(l).getPropertyValue("--v-overlay-anchor-origin").split(" ");let f=a.left+a.width/2;o==="left"||r==="left"?f-=a.width/2:(o==="right"||r==="right")&&(f+=a.width/2);let g=a.top+a.height/2;o==="top"||r==="top"?g-=a.height/2:(o==="bottom"||r==="bottom")&&(g+=a.height/2);const n=a.width/i.width,c=a.height/i.height,u=Math.max(1,n,c),s=n/u||0,v=c/u||0,m=i.width*i.height/(window.innerWidth*window.innerHeight),h=m>.12?Math.min(1.5,(m-.12)*10+1):1;return{x:f-(t+i.left),y:g-(d+i.top),sx:s,sy:v,speed:h}}const Ee=b({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...me({origin:"center center",scrollStrategy:"block",transition:{component:Pe},zIndex:2400})},"VDialog"),we=V()({name:"VDialog",props:Ee(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,l){let{emit:a,slots:i}=l;const t=_(e,"modelValue"),{scopeId:d}=fe(),o=I();function r(n){var s,v;const c=n.relatedTarget,u=n.target;if(c!==u&&((s=o.value)!=null&&s.contentEl)&&((v=o.value)!=null&&v.globalTop)&&![document,o.value.contentEl].includes(u)&&!o.value.contentEl.contains(u)){const m=ue(o.value.contentEl);if(!m.length)return;const h=m[0],P=m[m.length-1];c===h?P.focus():h.focus()}}N(()=>{document.removeEventListener("focusin",r)}),ee&&B(()=>t.value&&e.retainFocus,n=>{n?document.addEventListener("focusin",r):document.removeEventListener("focusin",r)},{immediate:!0});function f(){var n;a("afterEnter"),(n=o.value)!=null&&n.contentEl&&!o.value.contentEl.contains(document.activeElement)&&o.value.contentEl.focus({preventScroll:!0})}function g(){a("afterLeave")}return B(t,async n=>{var c;n||(await U(),(c=o.value.activatorEl)==null||c.focus({preventScroll:!0}))}),W(()=>{const n=T.filterProps(e),c=p({"aria-haspopup":"dialog"},e.activatorProps),u=p({tabindex:-1},e.contentProps);return y(T,p({ref:o,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},n,{modelValue:t.value,"onUpdate:modelValue":s=>t.value=s,"aria-modal":"true",activatorProps:c,contentProps:u,height:e.fullscreen?void 0:e.height,width:e.fullscreen?void 0:e.width,maxHeight:e.fullscreen?void 0:e.maxHeight,maxWidth:e.fullscreen?void 0:e.maxWidth,role:"dialog",onAfterEnter:f,onAfterLeave:g},d),{activator:i.activator,default:function(){for(var s=arguments.length,v=new Array(s),m=0;m<s;m++)v[m]=arguments[m];return y(de,{root:"VDialog"},{default:()=>{var h;return[(h=i.default)==null?void 0:h.call(i,...v)]}})}})}),ge({},o)}}),Ve=b({color:String,...ce(),...le(),...re(),...ie(),...se(),...ne(),...oe(),...ae(),...te()},"VSheet"),be=V()({name:"VSheet",props:Ve(),setup(e,l){let{slots:a}=l;const{themeClasses:i}=X(e),{backgroundColorClasses:t,backgroundColorStyles:d}=j(M(e,"color")),{borderClasses:o}=K(e),{dimensionStyles:r}=z(e),{elevationClasses:f}=G(e),{locationStyles:g}=J(e),{positionClasses:n}=Q(e),{roundedClasses:c}=Z(e);return W(()=>y(e.tag,{class:["v-sheet",i.value,t.value,o.value,f.value,n.value,c.value,e.class],style:[d.value,r.value,g.value,e.style]},a)),{}}}),ke={key:1},Le={__name:"PopUp",props:F({widget:{type:Object,default:void 0},maxWidth:{type:String,default:"500px"},maxHeight:{type:String,default:"500px"},width:{type:String,default:"500px"},height:{type:String,default:"500px"}},{modelValue:{type:Boolean,required:!0,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const l=H(e,"modelValue"),a=e,i={maxWidth:a.maxWidth,maxHeight:a.maxHeight,width:a.width,height:a.height},[t]=Y([a==null?void 0:a.widget]);return(d,o)=>(E(),k("span",null,[y(we,p(i,{absolute:"",scrollable:"","scroll-strategy":"block","close-on-back":"",modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=r=>l.value=r)}),{default:S(()=>[y(be,null,{default:S(()=>[e.widget?(E(),R(q(w(t).component),p({key:w(t).id},w(t).props),null,16)):C("v-if",!0),d.$slots.default?(E(),k("span",ke,[O(d.$slots,"default")])):C("v-if",!0)]),_:3})]),_:3},16,["modelValue"])]))}};export{Le as default};
