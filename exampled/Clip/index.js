(()=>{"use strict";const e=e=>isNaN(e)?NaN:e,t=t=>e(t.x),o=t=>e(t.y),n=t=>e(t.w),r=t=>e(t.h),a=e=>Object({...e,x:t(e),y:o(e),w:n(e),h:r(e)}),p=t=>e(t.x),i=t=>e(t.x+t.w),c=t=>e(t.y),s=t=>e(t.y+t.h),l=e=>Object({...e,l:p(e),r:i(e),t:c(e),b:s(e)}),d=t=>e(t.x+t.w/2),u=t=>e(t.y+t.h/2),h=t=>e(t.x-t.w/2),x=t=>e(t.y-t.h/2),m=t=>e(t.x),y=t=>e(t.y),f=t=>e(t.x),v=t=>e(t.y+t.h),w=t=>e(t.x+t.w),g=t=>e(t.y),b=t=>e(t.x+t.w),E=t=>e(t.y+t.h),k=e=>Object({...e,cx:d(e),cy:u(e),rcx:h(e),rcy:x(e),ltx:m(e),lty:y(e),lbx:f(e),lby:v(e),rtx:w(e),rty:g(e),rbx:b(e),rby:E(e)}),C=t=>e(.01*Math.min(t.w,t.h)),M=t=>e(.01*Math.max(t.w,t.h)),A=t=>e(.01*t.w),N=t=>e(.01*t.h),L=e=>Object({...e,vmin:C(e),vmax:M(e),vw:A(e),vh:N(e)}),T={x:t,y:o,w:n,h:r,locational:a,l:p,r:i,t:c,b:s,wireframe:l,cx:d,cy:u,rcx:h,rcy:x,ltx:m,lty:y,lbx:f,lby:v,rtx:w,rty:g,rbx:b,rby:E,point:k,vmin:C,vmax:M,vw:A,vh:N,viewport:L,coordinate:e=>Object({...a(e),...l(e),...k(e),...L(e)}),validate:e=>{const t=e.reduce(((e,t)=>e&&"number"==typeof t.x&&"number"==typeof t.y&&"number"==typeof t.w&&"number"==typeof t.h),!0);return t},add:e=>{const t=e.reduce(((e,t)=>({x:void 0!==e.x?e.x+t.x:t.x,y:void 0!==e.y?e.y+t.y:t.y,w:void 0!==e.w?e.w+t.w:t.w,h:void 0!==e.h?e.h+t.h:t.h})),{x:void 0,y:void 0,w:void 0,h:void 0});return t},box:e=>{const t=e.reduce(((e,t)=>({boxt:void 0!==e.boxt?isNaN(t.y)?e.boxt:Math.min(e.boxt,t.y):isNaN(t.y)?e.boxt:t.y,boxb:void 0!==e.boxb?isNaN(t.y+t.h)?e.boxb:Math.max(e.boxb,t.y+t.h):isNaN(t.y+t.h)?e.boxt:t.y+t.h,boxl:void 0!==e.boxl?isNaN(t.x)?e.boxl:Math.min(e.boxl,t.x):isNaN(t.x)?e.boxt:t.x,boxr:void 0!==e.boxr?isNaN(t.x+t.w)?e.boxr:Math.max(e.boxr,t.x+t.w):isNaN(t.x+t.w)?e.boxt:t.x+t.w})),{boxt:void 0,boxb:void 0,boxl:void 0,boxr:void 0});return{x:t.boxl,y:t.boxt,w:t.boxr-t.boxl,h:t.boxb-t.boxt}},wmin:e=>e.reduce(((e,t)=>t.w?Math.min(t.w,e):e),0),wmax:e=>e.reduce(((e,t)=>t.w?Math.max(t.w,e):e),0),hmin:e=>e.reduce(((e,t)=>t.h?Math.min(t.h,e):e),0),hmax:e=>e.reduce(((e,t)=>t.h?Math.max(t.h,e):e),0),pointcover:(e,t)=>t.x>=e.x&&t.x<=e.x+e.w&&t.y>=e.y&&t.y<=e.y+e.h},S=T;var U=void 0,j=0,P=0,O=!1,R=!1,B=void 0,z=void 0,F=[],$=[],I=[],D=[],X=[],Y=void 0;const _=e=>{e.hooks.forEach((e=>{"function"==typeof e.effectPrevious&&e.type===V&&F.push((()=>e.effectPrevious()))})),e.hooks.forEach((e=>{"function"==typeof e.effectPrevious&&e.type===Z&&e.effectPrevious()})),e.children.forEach((e=>_(e)))},H=e=>{var t={element:e,key:void 0,type:void 0,children:[],hooks:[],memo:void 0,update:void 0,create:void 0,parent:void 0};return!0===Boolean(e)&&"object"==typeof e||(t.type=0),!0===Boolean(e)&&"object"==typeof e&&"function"==typeof e.tag&&!0===e.xml&&(t.type=1,t.key=e.key),!0===Boolean(e)&&"object"==typeof e&&"string"==typeof e.tag&&(t.type=2,t.key=e.key),!0===Boolean(e)&&"object"==typeof e&&!0===Array.isArray(e)&&(t.type=3,t.key=e.key),!0===Boolean(e)&&"object"==typeof e&&e.tag===G&&(t.type=4,t.key=e.key),t},W=e=>{z={hooks:e.hooks,index:0,node:e};var t=[],o=[],n=[];return!0===e.memo&&!0!==D.includes(e)||1!==e.type||(t=new Array(e.element.tag({...e.element.props,children:e.element.children,parent:e.parent}))),!0===e.memo&&!0!==D.includes(e)||2!==e.type||(t=e.element.children),!0===e.memo&&!0!==D.includes(e)||3!==e.type||(t=e.element),!0===e.memo&&!0!==D.includes(e)||4!==e.type||(t=e.element.tag({children:e.element.children})),!0===e.memo&&!0!==D.includes(e)&&(t=e.children.map((e=>e.element))),n=e.children,t.forEach(((t,r)=>{var a,p=e.children.findIndex((e=>void 0!==e.key&&e.key===t.key&&e.element.tag===t.tag));-1!==p&&e.children.splice(r,0,e.children.splice(p,1)[0]);const i=Boolean(e.children[r]&&e.children[r].element===t);!0===i&&(a=e.children[r]),!0!==i&&(a=H(t)),a.memo=i;const c=!i&&Boolean(e.children[r]&&e.children[r].type===a.type&&e.children[r].key===a.key&&e.children[r].element.tag===a.element.tag);!0===c&&(a.hooks=e.children[r].hooks,a.children=e.children[r].children),a.update=c,a.create=!1===i&&!1===c,a.parent=e,!0!==i&&!0!==c||(n=n.filter((t=>t!==e.children[r]))),o.push(W(a))})),n.forEach((e=>_(e))),e.children=o,e.hooks.forEach((e=>{"function"==typeof e.effect&&e.type===ee&&e.effect()})),z=void 0,e},G=e=>e.children,q=()=>{if(void 0===Y){const e=performance.now();e-j<P&&(Y=requestAnimationFrame((()=>{Y=void 0,q()}))),(e-j>P||e-j===P)&&(Y=requestAnimationFrame((()=>{for(Y=void 0,j=e,D=Array.from(new Set(I)),X=D.filter((e=>{for(var t=!0;!0===t&&e.parent;)e=e.parent,t=D.every((t=>t!==e));return t})),I=[],O=!0,X.forEach((e=>W(e))),O=!1,D=[],X=[],$.forEach((e=>e(B)));0!==F.length;)F.shift()();var t=R;R=!1,t&&q()})))}},Q=e=>{I=[...I,e],!0===O&&(R=!0),!0!==O&&q()},J=e=>{var t;void 0===t&&(t=z.hooks[z.index]),void 0===t&&(t={state:e}),z.hooks[z.index]=t;const o=z.node;return[t.state,e=>{const n=t.state;"function"==typeof e&&(t.state=e(t.state)),"function"!=typeof e&&(t.state=e),t.state!==n&&Q(o)}]},K=e=>{var t;return void 0===t&&(t=z.hooks[z.index]),void 0===t&&(t={current:e}),z.hooks[z.index]=t,t},V=(e,t)=>{var o;void 0===o&&(o=z.hooks[z.index]),void 0===o&&(o={effect:e}),z.hooks[z.index]=o,(void 0===o.dependence||o.dependence.some(((e,o)=>e!==t[o])))&&F.push((()=>o.effectPrevious=o.effectPrevious&&"function"==typeof o.effectPrevious?o.effectPrevious():void 0)),(void 0===o.dependence||o.dependence.some(((e,o)=>e!==t[o])))&&F.push((()=>o.effectPrevious=e())),o.dependence=t},Z=(e,t)=>{var o;void 0===o&&(o=z.hooks[z.index]),void 0===o&&(o={effect:e}),z.hooks[z.index]=o,(void 0===o.dependence||o.dependence.some(((e,o)=>e!==t[o])))&&(o.effectPrevious=o.effectPrevious&&"function"==typeof o.effectPrevious?o.effectPrevious():void 0),(void 0===o.dependence||o.dependence.some(((e,o)=>e!==t[o])))&&(o.effectPrevious=e()),o.dependence=t},ee=(e,t)=>{var o;void 0===o&&(o=z.hooks[z.index]),void 0===o&&(o={effect:e}),z.hooks[z.index]=o,(void 0===o.dependence||o.dependence.some(((e,o)=>e!==t[o])))&&(o.effect=e),o.dependence=t},te=(e,t)=>{var o;return void 0===o&&(o=z.hooks[z.index]),void 0===o&&(o={memo:e}),z.hooks[z.index]=o,(void 0===o.dependence||o.dependence.some(((e,o)=>e!==t[o])))&&(o.memo=e()),o.dependence=t,o.memo},oe=(e,t)=>{var o;return void 0===o&&(o=z.hooks[z.index]),void 0===o&&(o={callback:e}),z.hooks[z.index]=o,(void 0===o.dependence||o.dependence.some(((e,o)=>e!==t[o])))&&(o.callback=e),o.dependence=t,o.callback},ne={renderQueueNode:()=>B,mount:(e,t,o)=>($.push(e),U=t,P=o,ne),render:()=>{for(I=[],D=[],X=[],Y&&(Y=cancelAnimationFrame(Y)),B&&_(B),B=H(U),O=!0,W(B),O=!1,$.forEach((e=>e(B)));0!==F.length;)F.shift()();var e=R;R=!1,e&&q()},renderNode:W,createElement:(e,t,...o)=>({tag:e,key:Object(t).key,props:t||Object(),children:o,xml:!0}),Fragment:G,shouldRender:Q,createContext:e=>{const t={value:e};return{context:t,Consumer:e=>e.children(t.value),Provider:e=>(void 0!==e.value&&(t.value=e.value),e.children)}},useContext:e=>e.context.value,useState:J,useRef:K,useEffect:V,useEffectImmediateLoopEnd:ee,useEffectImmediate:Z,useMemo:te,useCallback:oe};Object.keys(ne).filter((e=>[J,K,V,ee,Z,te,oe].includes(ne[e]))).forEach((e=>{return ne[e]=(t=ne[e],(...e)=>{try{if(void 0!==z.hooks[z.index]&&z.hooks[z.index].type!==t)throw Error(t);return t(...e)}finally{z.hooks[z.index].type=t,z.index=z.index+1}});var t}));const re=ne;var ae=[],pe=[];const ie=(e,t)=>{t&&(ae=[...ae,{type:e,callback:t}])},ce=(e,t)=>{t&&(ae=ae.filter((o=>o.type!==e||o.callback!==t)))},se={addEventListener:ie,removeEventListener:ce,clearEventListener:()=>{ae=[]},useEventListener:(e,t)=>{re.useEffectImmediate((()=>{t&&ie(e,t)}),[e,t]),re.useEffectImmediate((()=>{if(t)return()=>ce(e,t)}),[e,t])},addEventListenerWithCanvas:e=>{const t=t=>{const o=e=>((e,t)=>{const o=ae.filter((e=>e.type===t)).sort(((e,t)=>{const o=void 0===e.option||void 0===e.option.priority?0:e.option.priority;return(void 0===t.option||void 0===t.option.priority?0:t.option.priority)-o}));var n=!1;o.forEach((t=>{var o,r,a;void 0===window.ontouchstart&&(o=e.pageX*Ie.dpr()),void 0===window.ontouchstart&&(r=e.pageY*Ie.dpr()),void 0!==window.ontouchstart&&(o=e.pageX?[e.pageX*Ie.dpr()]:[...e.changedTouches].map((e=>e*Ie.dpr()))),void 0!==window.ontouchstart&&(r=e.pageY?[e.pageY*Ie.dpr()]:[...e.changedTouches].map((e=>e*Ie.dpr()))),void 0===window.ontouchstart&&(a="mouse"),void 0!==window.ontouchstart&&(a="touch");const p={native:e,x:o,y:r,device:a,stopPropagation:()=>n=!0};!1===n&&t.callback(p)}))})(e,t);e.addEventListener(t,o,{passive:!0}),pe.push({type:t,event:o})};new Array("click").forEach(t),void 0!==window.ontouchstart&&new Array("touchstart","touchmove","touchend").forEach(t),void 0===window.ontouchstart&&new Array("mousedown","mousemove","mouseup").forEach(t)},removeEventListenerWithCanvas:e=>{pe.forEach((t=>e.removeEventListener(t.type,t.event))),pe=[]},useDragControlMouse:e=>{const t=re.useRef(),o=re.useRef(),n=re.useCallback((t=>{e.onChange&&e.onChange(t)}),[e.onChange]),r=re.useCallback((r=>{if(!1===e.enable)return;const a=r.x,p=r.y;t.current={x:a,y:p},o.current={x:a,y:p},n({type:"mouse",status:"afterStart",e:r,x:a,y:p,changedX:0,changedY:0,continuedX:0,continuedY:0})}),[e.enable,e.onChange]),a=re.useCallback((r=>{if(!1===e.enable)return;if(void 0===o.current)return;const a=r.x,p=r.y,i=a-o.current.x,c=p-o.current.y,s=o.current.x-t.current.x,l=o.current.y-t.current.y;o.current={x:a,y:p},n({type:"mouse",status:"afterMove",e:r,x:a,y:p,changedX:i,changedY:c,continuedX:s,continuedY:l})}),[e.enable,e.onChange]),p=re.useCallback((r=>{if(!1===e.enable)return;if(void 0===o.current)return;const a=r.x,p=r.y,i=a-o.current.x,c=p-o.current.y,s=o.current.x-t.current.x,l=o.current.y-t.current.y;n({type:"mouse",status:"beforeEnd",e:r,x:a,y:p,changedX:i,changedY:c,continuedX:s,continuedY:l}),t.current=void 0,o.current=void 0,n({type:"mouse",status:"afterEnd",e:r,x:a,y:p,changedX:i,changedY:c,continuedX:s,continuedY:l})}),[e.enable,e.onChange]);return{onStart:r,onMove:a,onEnd:p}},useDragControlTouch:e=>{const t=re.useRef(),o=re.useRef(),n=re.useCallback((t=>{e.onChange&&e.onChange(t),e.onChangeMemo&&e.onChangeMemo(t)}),[e.onChange]),r=re.useCallback((r=>{if(!1===e.enable)return;const a=r.x,p=r.y;t.current={x:a,y:p},o.current={x:a,y:p};const i=[],c=[],s=[],l=[];a.forEach(((e,t)=>{i[t]=0,s[t]=0})),p.forEach(((e,t)=>{c[t]=0,l[t]=0})),n({type:"touch",status:"afterStart",e:r,x:a,y:p,changedX:i,changedY:c,continuedX:s,continuedY:l})}),[e.enable,e.onChange]),a=re.useCallback((r=>{if(!1===e.enable)return;if(void 0===o.current)return;const a=r.x,p=r.y,i=[],c=[],s=[],l=[];a.forEach(((e,n)=>{i[n]=e-o.current.x[n],s[n]=o.current.x[n]-t.current.x[n]})),p.forEach(((e,n)=>{c[n]=e-o.current.y[n],l[n]=o.current.y[n]-t.current.y[n]})),o.current={x:a,y:p},n({type:"touch",status:"afterMove",e:r,x:a,y:p,changedX:i,changedY:c,continuedX:s,continuedY:l})}),[e.enable,e.onChange]),p=re.useCallback((r=>{if(!1===e.enable)return;if(void 0===o.current)return;const a=r.x,p=r.y,i=[],c=[],s=[],l=[];a.forEach(((e,n)=>{i[n]=e-o.current.x[n],s[n]=o.current.x[n]-t.current.x[n]})),p.forEach(((e,n)=>{c[n]=e-o.current.y[n],l[n]=o.current.y[n]-t.current.y[n]})),n({type:"touch",status:"beforeEnd",e:r,x:a,y:p,changedX:i,changedY:c,continuedX:s,continuedY:l}),t.current=void 0,o.current=void 0,n({type:"touch",status:"afterEnd",e:r,x:a,y:p,changedX:i,changedY:c,continuedX:s,continuedY:l})}),[e.enable,e.onChange]);return{onStart:r,onMove:a,onEnd:p}}},le=se,de={locationMount:e=>{Ue.locationMount(e)},locationUnmount:e=>{Ue.locationUnmount(e)},renderMount:e=>{Ue.renderMount_0(e),Ie.context().arc(e.props.x,e.props.y,e.props.radius,e.props.sAngle,e.props.eAngle,e.props.counterclockwise),Ue.renderMount_1(e)},renderUnmount:e=>{Ue.renderUnmount(e)}},ue={locationMount:e=>{Ue.locationMount(e)},locationUnmount:e=>{Ue.locationUnmount(e)},renderMount:e=>{Ue.renderMount_0(e),Ie.context().clip(),Ue.renderMount_1(e)},renderUnmount:e=>{Ue.renderUnmount(e)}},he={locationMount:e=>{Ue.locationMount(e)},locationUnmount:e=>{Ue.locationUnmount(e)},renderMount:e=>{Ue.renderMount_0(e),Ie.context().fill(),Ue.renderMount_1(e)},renderUnmount:e=>{Ue.renderUnmount(e)}},xe={locationMount:e=>{Ue.locationMount(e)},locationUnmount:e=>{Ue.locationUnmount(e)},renderMount:e=>{Ue.renderMount_0(e);const t=((e,t,o,n)=>{var{x:r,y:a,w:p,h:i}=e;if(0!==t.width&&0!==t.height){var c=0,s=0,l=t.width,d=t.height;if("auto-max"===o&&"center"===n){const e=p/l,t=i/d;e>t&&(s=d-d*t/e,d-=d-d*t/e),t>e&&(c=l-l*e/t,l-=l-l*e/t)}if("auto-min"===o&&"center"===n){const e=p/l,t=i/d;e>t&&(r+=(p-p*t/e)/2,p-=p-p*t/e),t>e&&(a+=(i-i*e/t)/2,i-=i-i*e/t)}return{sx:c,sy:s,sw:l,sh:d,x:r,y:a,w:p,h:i}}})({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},e.props.image,e.props.size,e.props.position);void 0!==t&&Ie.context().drawImage(e.props.image,t.sx,t.sy,t.sw,t.sh,t.x,t.y,t.w,t.h),Ue.renderMount_1(e)},renderUnmount:e=>{Ue.renderUnmount(e)}},me=xe,ye=e=>[e,...e.children.map((e=>ye(e))).flat()],fe=(e,t)=>e.props.id===t?e:e.children.reduce(((e,o)=>e||fe(o,t)),null),ve={flatDom:ye,getDomById:fe},we=(e,t,o)=>{var n=0,r=!1,a=[];return t.forEach((t=>{!1===r&&(n+t.w+o<e.w||n+t.w+o===e.w)&&a.push(t),!1===r&&(n+t.w+o<e.w||n+t.w+o===e.w)&&(n=n+t.w+o),n+t.w+o>e.w&&(r=!0)})),{result:a,rest:t.filter(((e,t)=>t>a.length-1))}},ge=(e,t,o)=>{var n=0,r=!1,a=[];return t.forEach((t=>{!1===r&&(n+t.h+o<e.h||n+t.h+o===e.h)&&a.push(t),!1===r&&(n+t.h+o<e.h||n+t.h+o===e.h)&&(n=n+t.h+o),n+t.h+o>e.h&&(r=!0)})),{result:a,rest:t.filter(((e,t)=>t>a.length-1))}},be={horizontalForward:(e,t,o)=>{var n=0;return t.forEach((t=>{t.x=e.x+n,n=n+t.w+o})),t},horizontalReverse:(e,t,o)=>{var n=0;return t.forEach((t=>{t.x=e.x+e.w-t.w-n,n=n+t.w+o})),t},horizontalCenter:(e,t,o)=>{var n=0,r=S.add(t).w+(t.length-1)*o;return t.forEach((t=>{t.x=e.x+(e.w-r)/2+n,n=n+t.w+o})),t},horizontalAround:(e,t)=>{var o=0,n=S.add(t).w;return t.forEach(((r,a)=>{r.x=e.x+(e.w-n)/(t.length-1)*a+o,o+=r.w})),t},horizontalBetween:(e,t)=>{var o=0,n=S.add(t).w;return t.forEach(((r,a)=>{r.x=e.x+(e.w-n)/(t.length+1)*(a+1)+o,o+=r.w})),t},horizontalAlignForward:(e,t)=>(t.forEach(((t,o)=>{t.x=e.x})),t),horizontalAlignReverse:(e,t)=>(t.forEach(((t,o)=>{t.x=e.x+e.w})),t),horizontalAlignCenter:(e,t)=>(t.forEach(((t,o)=>{t.x=e.x+(e.w-t.w)/2})),t),verticalForward:(e,t,o)=>{var n=0;return t.forEach((t=>{t.y=e.y+n,n=n+t.h+o})),t},verticalReverse:(e,t,o)=>{var n=0;return t.forEach((t=>{t.y=e.y+e.h-t.h-n,n=n+t.h+o})),t},verticalCenter:(e,t,o)=>{var n=0,r=S.add(t).h+(t.length-1)*o;return t.forEach((t=>{t.y=e.y+(e.h-r)/2+n,n=n+t.h+o})),t},verticalAround:(e,t)=>{var o=0,n=S.add(t).h;return t.forEach(((r,a)=>{r.y=e.y+(e.h-n)/(t.length-1)*a+o,o+=r.h})),t},verticalBetween:(e,t)=>{var o=0,n=S.add(t).h;return t.forEach(((r,a)=>{r.y=e.y+(e.h-n)/(t.length+1)*(a+1)+o,o+=r.h})),t},verticalAlignForward:(e,t)=>(t.forEach(((t,o)=>{t.y=e.y})),t),verticalAlignReverse:(e,t)=>(t.forEach(((t,o)=>{t.y=e.y+e.h})),t),verticalAlignCenter:(e,t)=>(t.forEach(((t,o)=>{t.y=e.y+(e.h-t.h)/2})),t)},Ee={locationMount:e=>{if(Ue.locationMount(e),!0===Boolean(e.props.container)&&e.children.length>0){const t=e.props.gap||0,o=e.children.filter((e=>"layout"===e.element.tag&&!0===Boolean(e.props.item)));o.forEach((e=>Ie.relocation({...e,children:[]})));const n=o.map((e=>e.props)),r=Object.keys(e.props).findIndex((e=>["horizontalForward","horizontalReverse","horizontalCenter","horizontalAround","horizontalAround","horizontalBetween"].includes(e))),a=Object.keys(e.props).findIndex((e=>["verticalForward","verticalReverse","verticalCenter","verticalAround","verticalAround","verticalBetween"].includes(e))),p=Object.keys(e.props).findIndex((e=>["horizontalAlignForward","horizontalAlignReverse","horizontalAlignCenter"].includes(e))),i=Object.keys(e.props).findIndex((e=>["verticalAlignForward","verticalAlignReverse","verticalAlignCenter"].includes(e)));!0===Boolean(e.props.wrap)&&r>-1&&a>-1&&r<a&&((e,t,o,n,r)=>{for(var a=[],p=t;p.length;){const t=we(e,p,r);0===t.result.length&&(a=[...a,t.rest[0]],p=t.rest.filter(((e,t)=>0!==t))),t.result.length>0&&(a=[...a,t.result],p=t.rest)}n(e,a.map((t=>Object({y:e.y,h:S.hmax(t)}))),r).forEach(((e,t)=>a[t].forEach((t=>t.y=e.y)))),a.forEach((t=>o({x:e.x,y:t.y,w:e.w},t,r)))})({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,be[Object.keys(e.props)[r]],be[Object.keys(e.props)[a]],t),!0===Boolean(e.props.wrap)&&a>-1&&a>-1&&a<r&&((e,t,o,n,r)=>{for(var a=[],p=t;p.length;){const t=ge(e,p,r);0===t.result.length&&(a=[...a,t.rest[0]],p=t.rest.filter(((e,t)=>0!==t))),t.result.length>0&&(a=[...a,t.result],p=t.rest)}n(e,a.map((t=>Object({x:e.x,w:S.wmax(t)}))),r).forEach(((e,t)=>a[t].forEach((t=>t.x=e.x)))),a.forEach((t=>o({y:e.y,h:e.h},t)),r)})({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,be[Object.keys(e.props)[a]],be[Object.keys(e.props)[r]],t),!1===Boolean(e.props.wrap)&&(r>-1&&((e,t,o)=>{const n=t.reduce(((e,t)=>e+t.w),0)+o*(t.length-1),r=t.reduce(((e,t)=>e+(t.grow||0)),0),a=t.reduce(((e,t)=>e+(t.shrink||0)),0);n>e.w&&a>0&&t.forEach((t=>{t.shrink&&(t.w=t.w-(n-e.w)*(t.shrink/a))})),n<e.w&&t.forEach((t=>{t.grow&&(t.w=t.w-(n-e.w)*(t.grow/r))}))})({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,t),a>-1&&((e,t,o)=>{const n=t.reduce(((e,t)=>e+t.h),0)+o*(t.length-1),r=t.reduce(((e,t)=>e+(t.grow||0)),0),a=t.reduce(((e,t)=>e+(t.shrink||0)),0);n>e.h&&a>0&&t.forEach((t=>{t.shrink&&(t.h=t.h-(n-e.h)*(t.shrink/a))})),n<e.h&&t.forEach((t=>{t.grow&&(t.h=t.h-(n-e.h)*(t.grow/r))}))})({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,t),r>-1&&be[Object.keys(e.props)[r]]({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,t),a>-1&&be[Object.keys(e.props)[a]]({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,t),p>-1&&be[Object.keys(e.props)[p]]({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,t),i>-1&&be[Object.keys(e.props)[i]]({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,t))}},locationUnmount:e=>{Ue.locationUnmount(e)},renderMount:e=>{Ue.renderMount_0(e),Ue.renderMount_1(e)},renderUnmount:e=>{Ue.renderUnmount(e)}},ke=Ee,Ce={locationMount:e=>{Ue.locationMount(e)},locationUnmount:e=>{Ue.locationUnmount(e)},renderMount:e=>{Ue.renderMount_0(e);var t=new Array(4).fill(0);e.props.radius&&"object"==typeof t&&Array.isArray(t)&&(t=e.props.radius),e.props.radius&&"number"==typeof t&&(t=new Array(4).fill(e.props.radius)),Ie.context().moveTo(e.props.x,e.props.y+t[0]),Ie.context().arcTo(e.props.x,e.props.y,e.props.x+t[0],e.props.y,t[0]),Ie.context().lineTo(e.props.x+e.props.w-t[1],e.props.y),Ie.context().arcTo(e.props.x+e.props.w,e.props.y,e.props.x+e.props.w,e.props.y+t[1],t[1]),Ie.context().lineTo(e.props.x+e.props.w,e.props.y+e.props.h-t[2]),Ie.context().arcTo(e.props.x+e.props.w,e.props.y+e.props.h,e.props.x+e.props.w-t[2],e.props.y+e.props.h,t[2]),Ie.context().lineTo(e.props.x+t[3],e.props.y+e.props.h),Ie.context().arcTo(e.props.x,e.props.y+e.props.h,e.props.x,e.props.y+e.props.h-t[3],t[3]),Ue.renderMount_1(e)},renderUnmount:e=>{Ue.renderUnmount(e)}},Me={locationMount:e=>{Ue.locationMount(e)},locationUnmount:e=>{Ue.locationUnmount(e)},renderMount:e=>{Ue.renderMount_0(e),Ie.context().stroke(),Ue.renderMount_1(e)},renderUnmount:e=>{Ue.renderUnmount(e)}},Ae=(e,t,o,n="")=>{Ie.context().save(),Ie.context().font=t;const r=Number(Ie.context().font.match(/\d+px/)[0].replace("px",""));var a="",p=[];return(e=e.split(n).map(((e,t)=>t?[n,e]:[e])).flat()).forEach(((e,t)=>{const n=Ie.context().measureText(a+e).width;n>o&&""!==a&&p.push(a),n>o&&""!==a&&(a=e),n>o&&""===a&&p.push(e),n<o&&(a+=e)})),a&&p.push(a),p=p.map((e=>({text:e.trim(),w:Ie.context().measureText(e.trim()).width,h:r,font:Ie.context().font}))),Ie.context().restore(),p},Ne=(e,t,o)=>{const n=Math.max(...e.map((e=>e.w))),r=e.reduce(((e,n,r)=>e+n.h*t+(r?o:0)),0);return{w:n,h:r}},Le={locationMount:e=>{Ue.locationMount(e)},locationUnmount:e=>{Ue.locationUnmount(e)},renderMount:e=>{Ue.renderMount_0(e);const t=e.props.lineHeight||1,o=e.props.gap||0;if(!0===Boolean(e.props.wrap)){const n=Number(Ie.context().font.match(/\d+px/)[0].replace("px",""));(e.props.line?e.props.line:Ae(e.props.text,e.props.font,e.props.w,e.props.split)).forEach(((r,a)=>{var p=e.props.x,i=e.props.y,c=n*t;i=(i=i-.18*n-.5*(c-n))+(a+1)*c+a*o,e.props.align,"center"===e.props.align&&(p+=(e.props.w-r.w)/2),"right"===e.props.align&&(p+=e.props.w-r.w),!0===Boolean(e.props.fillText)&&Ie.context().fillText(r.text,p,i),!0===Boolean(e.props.strokeText)&&Ie.context().strokeText(r.text,p,i)}))}if(!0!==Boolean(e.props.wrap)){const o=Number(Ie.context().font.match(/\d+px/)[0].replace("px",""));var n=Ie.context().measureText(e.props.text).width,r=o*t,a=e.props.x,p=e.props.y;p=p-.18*o-.5*(r-o),p+=r,e.props.align,"center"===e.props.align&&(a+=(e.props.w-n)/2),"right"===e.props.align&&(a+=e.props.w-n),!0===Boolean(e.props.fillText)&&Ie.context().fillText(e.props.text,a,p),!0===Boolean(e.props.strokeText)&&Ie.context().strokeText(e.props.text,a,p)}Ue.renderMount_1(e)},renderUnmount:e=>{Ue.renderUnmount(e)}};Le.caculateLine=Ae,Le.caculateLineLocation=Ne,Le.CaculateLine=e=>{var t,o;const n=re.useMemo((()=>Ae(e.text,e.font,e.w,e.split).map((t=>Object({...e,...t})))),[e.w,e.text,e.font,e.split]);if(void 0!==e.lineHeight&&void 0!==e.gap){const r=Ne(n,e.lineHeight,e.gap);t=r.w,o=r.h}return e.children.map((e=>e(n,{w:t,h:o})))};const Te=Le,Se={pick:e=>"arc"===e?de:"clip"===e?ue:"fill"===e?he:"image"===e?me:"layout"===e?ke:"rect"===e?Ce:"stroke"===e?Me:"text"===e?Te:void 0,locationMount:e=>{const t=(o,n)=>{if("number"==typeof o)return o;if("function"==typeof o)return o(e.parent.props);if("string"==typeof o){if("extend"===o&&("x"===n||"y"===n||"w"===n||"h"===n))return e.parent.props[n];if(o.match(/^fit-content\(.+\)$/)&&("w"===n||"h"===n))return t(o.replace(/^fit-content\(/,"").replace(/\)$/,""),n);if(o.match(/^min\(.+\)$/)){const e=o.replace(/^min\(/,"").replace(/\)$/,"").split(/\s?,\s?/);return e.forEach(((o,r)=>{e[r]=t(o,n)})),Math.min(...e)}if(o.match(/^max\(.+\)$/)){const e=o.replace(/^max\(/,"").replace(/\)$/,"").split(/(\s+)?,(\s+)?/);return e.forEach(((o,r)=>{e[r]=t(o,n)})),Math.max(...e)}if(o.match(/^calc\(.+\)$/)){const e=o.replace(/^calc\(/,"").replace(/\)$/,"").split(" ");return e.forEach(((o,r)=>{"+"!==o&&"-"!==o&&"*"!==o&&"/"!==o&&(e[r]=t(o,n))})),new Function("return "+e.join(" "))()}if(o.match(/^.+%$/)){if("w"===n||"l"===n||"r"===n)return e.parent.props.w*Number(o.replace(/%/,""))/100;if("h"===n||"r"===n||"b"===n)return e.parent.props.h*Number(o.replace(/%/,""))/100}if(o.match(/^.+vmin$/))return e.parent.props.vmin*Number(o.replace(/vmin/,""));if(o.match(/^.+vmax$/))return e.parent.props.vmax*Number(o.replace(/vmax/,""));if(o.match(/^.+vw$/))return e.parent.props.vw*Number(o.replace(/vw/,""));if(o.match(/^.+vh$/))return e.parent.props.vh*Number(o.replace(/vh/,""));if(o.match(/^.+px$/))return Number(o.replace(/px/,""));if(o.match(/^\d+$/))return Number(o)}};(()=>{if(e.props&&e.parent&&("string"==typeof e.props.x||"number"==typeof e.props.x||"function"==typeof e.props.x)){const o=t(e.props.x,"x");!1===isNaN(o)&&(e.props.x=o)}if(e.props&&e.parent&&("string"==typeof e.props.y||"number"==typeof e.props.y||"function"==typeof e.props.y)){const o=t(e.props.y,"y");!1===isNaN(o)&&(e.props.y=o)}if(e.props&&e.parent&&("string"==typeof e.props.w||"number"==typeof e.props.w||"function"==typeof e.props.w)){const o=t(e.props.w,"w");!1===isNaN(o)&&(e.props.w=o)}if(e.props&&e.parent&&("string"==typeof e.props.h||"number"==typeof e.props.h||"function"==typeof e.props.h)){const o=t(e.props.h,"h");!1===isNaN(o)&&(e.props.h=o)}if(e.props&&e.parent&&("string"==typeof e.props.l||"number"==typeof e.props.l)&&void 0===e.props.x){const o=t(e.props.l,"l");!1===isNaN(o)&&(e.props.x=e.parent.props.x+o)}if(e.props&&e.parent&&("string"==typeof e.props.r||"number"==typeof e.props.r)&&void 0===e.props.x){const o=t(e.props.r,"r");!1===isNaN(o)&&(e.props.x=e.parent.props.x+e.parent.props.w-o)}if(e.props&&e.parent&&("string"==typeof e.props.t||"number"==typeof e.props.t)&&void 0===e.props.y){const o=t(e.props.t,"t");!1===isNaN(o)&&(e.props.y=e.parent.props.y+o)}if(e.props&&e.parent&&("string"==typeof e.props.b||"number"==typeof e.props.b)&&void 0===e.props.y){const o=t(e.props.b,"b");!1===isNaN(o)&&(e.props.y=e.parent.props.y+e.parent.props.h-o)}})(),Object.assign(e.props,S.coordinate(e.props))},locationUnmount:e=>{if("string"==typeof e.element.props.w&&e.element.props.w.match(/^fit-content\(.+\)$/)){const t=S.box(e.children.map((e=>e.props))).w;!1===isNaN(t)&&(e.props.w=t)}if("string"==typeof e.element.props.h&&e.element.props.h.match(/^fit-content\(.+\)$/)){const t=S.box(e.children.map((e=>e.props))).h;!1===isNaN(t)&&(e.props.h=t)}Object.assign(e.props,S.coordinate(e.props))},renderMount_0:e=>{Ie.context().save(),void 0!==e.props.globalAlpha&&(Ie.context().globalAlpha=e.props.globalAlpha),void 0!==e.props.font&&(Ie.context().font=e.props.font),void 0!==e.props.fillStyle&&(Ie.context().fillStyle=e.props.fillStyle),void 0!==e.props.strokeStyle&&(Ie.context().strokeStyle=e.props.strokeStyle),!0===Boolean(e.props.beginPath)&&Ie.context().beginPath()},renderMount_1:e=>{!0===Boolean(e.props.clip)&&Ie.context().clip(),!0===Boolean(e.props.fill)&&Ie.context().fill(),!0===Boolean(e.props.stroke)&&Ie.context().stroke(),!0===Boolean(e.props.isolated)&&Ie.context().restore()},renderUnmount:e=>{!0!==Boolean(e.props.isolated)&&Ie.context().restore(),e.props.onClick&&le.addEventListener("click",(t=>e.props.onClick({...t,dom:e}))),e.props.onTouchStart&&le.addEventListener("touchstart",(t=>e.props.onTouchStart({...t,dom:e}))),e.props.onTouchMove&&le.addEventListener("touchmove",(t=>e.props.onTouchMove({...t,dom:e}))),e.props.onTouchEnd&&le.addEventListener("touchend",(t=>e.props.onTouchEnd({...t,dom:e}))),e.props.onMouseDown&&le.addEventListener("mousedown",(t=>e.props.onMouseDown({...t,dom:e}))),e.props.onMouseMove&&le.addEventListener("mousemove",(t=>e.props.onMouseMove({...t,dom:e}))),e.props.onMouseUp&&le.addEventListener("mouseup",(t=>e.props.onMouseUp({...t,dom:e})))},Arc:de,Clip:ue,Fill:he,Image:me,Layout:ke,Rect:Ce,Stroke:Me,Text:Te},Ue=Se;var je,Pe,Oe;const Re=e=>{Oe.clearRect(0,0,Pe.width,Pe.height),le.clearEventListener();const t=Be({element:{props:Pe.coordinate},children:[e]}),o=ze(t);Fe(o),$e(o)},Be=e=>({...e,props:{...e.element.props}}),ze=e=>{for(;e.children.some((e=>2!==e.type));)e.children=e.children.map((e=>2!==e.type?e.children:e)).flat();return e.children=e.children.map((t=>ze({...Be(t),parent:e}))),e.getDomById=t=>ve.getDomById(e,t),e},Fe=e=>{void 0!==Ue.pick(e.element.tag)&&(Ue.pick(e.element.tag).locationMount(e),"function"==typeof e.props.onLocationMount&&e.props.onLocationMount(e)),e.children&&e.children.forEach((e=>Fe(e))),void 0!==Ue.pick(e.element.tag)&&(Ue.pick(e.element.tag).locationUnmount(e),"function"==typeof e.props.onLocationUnmount&&e.props.onLocationUnmount(e))},$e=e=>{void 0!==Ue.pick(e.element.tag)&&(Ue.pick(e.element.tag).renderMount(e),"function"==typeof e.props.onRenderMount&&e.props.onRenderMount(e)),e.children&&e.children.forEach((e=>$e(e))),void 0!==Ue.pick(e.element.tag)&&(Ue.pick(e.element.tag).renderUnmount(e),"function"==typeof e.props.onRenderUnmount&&e.props.onRenderUnmount(e))},Ie={dpr:()=>je,canvas:()=>Pe,context:()=>Oe,mount:(e,t)=>{const o=document.createElement("style");o.innerHTML=["::-webkit-scrollbar { width: 0; height: 0; }","body { padding: 0; margin: 0; }","body, body * { overscroll-behavior: none; }"].join(" "),document.head.appendChild(o),window.addEventListener("wheel",(e=>e.preventDefault()),{passive:!1}),window.addEventListener("touchmove",(e=>e.preventDefault()),{passive:!1}),window.addEventListener("contextmenu",(e=>e.preventDefault()),{passive:!1}),je=2,Pe=document.createElement("canvas"),Oe=Pe.getContext("2d");const n=()=>{Pe.width=window.innerWidth*je,Pe.height=window.innerHeight*je,Pe.style.width="100%",Pe.style.height="100%",Pe.coordinate=S.coordinate({x:0,y:0,w:Pe.width,h:Pe.height})};return Pe.style.position="absolute",Pe.style.width="100%",Pe.style.height="100%",Pe.style.background="black",Pe.style.overflow="hidden",n(),window.addEventListener("resize",(()=>{n(),re.shouldRender(re.renderQueueNode())})),document.body.appendChild(Pe),le.removeEventListenerWithCanvas(Pe),le.addEventListenerWithCanvas(Pe),re.mount(Re,e,t.renderFrameTimeDiffMax),{render:re.render}},relocation:Fe};const De=e=>{const[t,o]=re.useState(),[n,r]=re.useState();return re.createElement("layout",{x:"extend",y:"extend",w:"extend",h:"extend",onRenderUnmount:t=>(t=>{o(Math.ceil(t.props.w/e.gap/2)),r(Math.ceil(t.props.h/e.gap/2))})(t)},void 0!==t&&void 0!==n?re.createElement(re.Fragment,null,re.createElement("rect",{beginPath:!0,fill:!0,y:"extend",h:"extend",w:"0.1vmax",x:"calc(extend + 50vw)",globalAlpha:.5,fillStyle:e.color}),re.createElement("rect",{beginPath:!0,fill:!0,x:"extend",w:"extend",h:"0.1vmax",y:"calc(extend + 50vh)",globalAlpha:.5,fillStyle:e.color}),new Array(t).fill().map(((t,o)=>re.createElement(re.Fragment,null,re.createElement("rect",{beginPath:!0,fill:!0,y:"extend",h:"extend",w:"0.1vmax",x:`calc(extend + 50vw + ${e.gap*(o+1)})`,globalAlpha:.25,fillStyle:e.color}),re.createElement("rect",{beginPath:!0,fill:!0,y:"extend",h:"extend",w:"0.1vmax",x:`calc(extend + 50vw - ${e.gap*(o+1)})`,globalAlpha:.25,fillStyle:e.color})))),new Array(n).fill().map(((t,o)=>re.createElement(re.Fragment,null,re.createElement("rect",{beginPath:!0,fill:!0,x:"extend",w:"extend",h:"0.1vmax",y:`calc(extend + 50vh + ${e.gap*(o+1)})`,globalAlpha:.25,fillStyle:e.color}),re.createElement("rect",{beginPath:!0,fill:!0,x:"extend",w:"extend",h:"0.1vmax",y:`calc(extend + 50vh - ${e.gap*(o+1)})`,globalAlpha:.25,fillStyle:e.color}))))):null)},Xe={useAnimationCount:e=>{const[t,o]=re.useState(e.defaultCount),[n,r]=re.useState(e.defaultDelay),[a,p]=re.useState(e.defaultFlow);return re.useEffect((()=>{0!==n&&r(n-1)})),re.useEffect((()=>{!0===e.play&&0===n&&!0===e.reverse&&(t===e.min||t<e.min)&&p(0),!0===e.play&&0===n&&!0===e.reverse&&(t===e.max||t>e.max)&&p(1)})),re.useEffect((()=>{!0===e.play&&0===n&&0===a&&t<e.max&&o(t+e.rate),!0===e.play&&0===n&&1===a&&t>e.min&&o(t-e.rate)})),{animationCount:t,setAnimationCount:o,animationDelay:n,setAnimationDelay:r,animationFlow:a,setAnimationFlow:p}},useTransitionCount:e=>{const[t,o]=re.useState(e.defaultCount);return re.useEffect((()=>{var n=t;t!==e.destination&&t>e.destination&&(n-=e.rate),t!==e.destination&&t<e.destination&&(n+=e.rate),t>e.destination&&n<e.destination&&(n=e.destination),t<e.destination&&n>e.destination&&(n=e.destination),o(n)})),{transitionCount:e.postprocess?e.postprocess(t):t,setTransitionCount:o}},useImage:e=>{const t=re.useMemo((()=>new Image),[]);return re.useEffectImmediate((()=>t.src=e.src),[e.src]),re.useEffectImmediate((()=>t.onload=()=>e.onload?e.onload():void 0),[e.onload]),{image:t}},useResourceReload:e=>{const[t,o]=re.useState(0),[n,r]=re.useState(!0);return re.useEffectImmediate((()=>{o(0),r(!0),e.resource.forEach((e=>fetch(e).then((()=>o((e=>e+1))))))}),[...e.resource]),re.useEffectImmediate((()=>r(t<e.resource.length)),[t]),{resourceCount:t,resourceLoading:n}},useLocationPropertyImmediate:e=>{const t=re.useRef(),o=re.useRef(e.default);return re.useEffectImmediate((()=>{if(t.current){const e=Object.keys(o.current);e.some((e=>o.current[e]!==t.current.props[e]))&&(o.current=e.reduce(((e,o)=>Object({...e,[o]:t.current.props[o]})),Object))}})),{ref:t,location:o.current}},useLocationPropertyLazy:e=>{const t=re.useRef(),[o,n]=re.useState(e.default);return re.useEffect((()=>{if(t.current){const e=Object.keys(o);e.some((e=>o[e]!==t.current.props[e]))&&n(e.reduce(((e,o)=>Object({...e,[o]:t.current.props[o]})),Object))}})),{ref:t,location:o,setLocation:n}},useLocationBox:e=>{const t=re.useRef(),[o,n]=re.useState(e.default);return re.useEffect((()=>{if(t.current){const e=Object.keys(o),r=S.box(ve.flatDom(t.current).filter((e=>e!==t.current)).map((e=>e.props)));e.some((e=>o[e]!==r[e]))&&n(e.reduce(((e,t)=>Object({...e,[t]:r[t]})),Object))}})),{ref:t,location:o,setLocation:n}}},Ye=Xe;function _e(e){const[t,o]=re.useState(!1),n=new Array([45,60],[45,60],[45,60]).map((e=>Ye.useTransitionCount({defaultCount:e[0],destination:e[t?1:0],rate:(e[1]-e[0])/15,postprocess:e=>e.toFixed(0)})));return re.createElement("layout",{x:"extend",y:"extend",w:"extend",h:"extend",onClick:t=>{"mouse"===t.device&&S.pointcover({x:t.dom.props.x,y:t.dom.props.y,w:t.dom.props.w,h:t.dom.props.h},{x:t.x,y:t.y})&&e.onClick&&e.onClick(),"touch"===t.device&&S.pointcover({x:t.dom.props.x,y:t.dom.props.y,w:t.dom.props.w,h:t.dom.props.h},{x:t.x[0],y:t.y[0]})&&e.onClick&&e.onClick()},onMouseMove:e=>{o(S.pointcover({x:e.dom.props.x,y:e.dom.props.y,w:e.dom.props.w,h:e.dom.props.h},{x:e.x,y:e.y}))},onTouchMove:e=>{o(S.pointcover({x:e.dom.props.x,y:e.dom.props.y,w:e.dom.props.w,h:e.dom.props.h},{x:e.x[0],y:e.y[0]}))}},re.createElement("rect",{x:"extend",y:"extend",w:"extend",h:"extend",beginPath:!0,radius:8},re.createElement("fill",{fillStyle:`rgba(${n[0].transitionCount}, ${n[1].transitionCount}, ${n[2].transitionCount}, 1)`})),re.createElement("layout",{x:"extend",y:"extend",w:"extend",h:"extend",container:!0,horizontalAlignCenter:!0,verticalAlignCenter:!0},re.createElement(Ue.Text.CaculateLine,{text:e.text,font:"24px monospace",lineHeight:1,gap:12,w:e.w,split:" "},((t,o)=>re.createElement("layout",{w:"extend",h:o.h,item:!0},re.createElement("text",{x:"extend",y:"extend",fillText:!0,fillStyle:"rgba(255, 255, 255, 1)",align:"center",text:e.text,font:"24px monospace",lineHeight:1,gap:12,w:e.w,split:" ",wrap:!0,line:t}))))))}function He(e){const{ref:t,location:o}=Ye.useLocationPropertyLazy({default:{w:0,h:0}});return re.useEffect((()=>e.setHeight(o.h+48)),[o.h]),re.createElement("layout",{x:"extend",y:"extend",w:"extend",h:"extend",container:!0,horizontalAlignCenter:!0,verticalAlignCenter:!0},re.createElement("layout",{w:"calc(extend - 48px)",h:"calc(extend - 48px)",item:!0},re.createElement("layout",{x:"extend",y:"extend",w:"extend",h:"fit-content(extend)",item:!0,container:!0,horizontalForward:!0,verticalForward:!0,wrap:!0,gap:24,onRenderUnmount:e=>t.current=e},e.content.map((e=>re.createElement("layout",{w:"180px",h:"64px",item:!0},re.createElement(_e,{w:180,text:e.text,onClick:e.onClick})))))))}function We(e){const[t,o]=re.useState(!1),[n,r]=re.useState(!1),{ref:a,location:p}=Ye.useLocationPropertyLazy({default:{w:void 0,h:void 0}}),{ref:i,location:c}=Ye.useLocationPropertyLazy({default:{w:0,h:0}}),{transitionCount:s}=Ye.useTransitionCount({defaultCount:t?1:0,destination:t?1:0,rate:.1,postprocess:e=>Number(e.toFixed(2))}),l=new Array([45,60],[45,60],[45,60]).map((e=>Ye.useTransitionCount({defaultCount:e[0],destination:e[n?1:0],rate:(e[1]-e[0])/15,postprocess:e=>e.toFixed(0)})));re.useEffect((()=>e.setHeight((t?p.h:c.h)+48)),[p.h,c.h,t]);const d=re.useMemo((()=>e.content.map(((e,t)=>0===t?{...e,text:e.text+" "+"...".slice(0,Math.round(3-3*s))}:0!==t?e:void 0))),[e.content,s,p.w]);return re.createElement("layout",{x:"extend",y:"extend",w:"extend",h:"extend",onClick:e=>{"mouse"===e.device&&S.pointcover({x:e.dom.props.x,y:e.dom.props.y,w:e.dom.props.w,h:e.dom.props.h},{x:e.x,y:e.y})&&o(!t),"touch"===e.device&&S.pointcover({x:e.dom.props.x,y:e.dom.props.y,w:e.dom.props.w,h:e.dom.props.h},{x:e.x[0],y:e.y[0]})&&o(!t)},onMouseMove:e=>{r(S.pointcover({x:e.dom.props.x,y:e.dom.props.y,w:e.dom.props.w,h:e.dom.props.h},{x:e.x,y:e.y}))},onTouchMove:e=>{r(S.pointcover({x:e.dom.props.x,y:e.dom.props.y,w:e.dom.props.w,h:e.dom.props.h},{x:e.x[0],y:e.y[0]}))}},re.createElement("rect",{x:"extend",y:"extend",w:"extend",h:"extend",beginPath:!0,radius:16},re.createElement("fill",{fillStyle:`rgba(${l[0].transitionCount}, ${l[1].transitionCount}, ${l[2].transitionCount}, 1)`})),re.createElement("layout",{x:"extend",y:"extend",w:"extend",h:"extend",container:!0,horizontalAlignCenter:!0,verticalAlignCenter:!0},re.createElement("layout",{w:"calc(extend - 48px)",h:"calc(extend - 48px)",item:!0},re.createElement("rect",{x:"extend",y:"extend",w:"extend",h:"extend",beginPath:!0},re.createElement("clip",{x:"extend",y:"extend",w:"extend",h:"extend"},re.createElement("layout",{x:"extend",y:"extend",w:"extend",h:"fit-content(extend)",container:!0,verticalForward:!0,horizontalAlignForward:!0,gap:24,onRenderUnmount:e=>a.current=e},d.map(((e,t)=>re.createElement(Ue.Text.CaculateLine,{text:e.text,font:e.font,lineHeight:e.lineHeight,gap:e.gap,w:p.w,split:" "},((o,n)=>re.createElement("layout",{w:n.w,h:n.h,item:!0,onRenderUnmount:0===t?e=>i.current=e:void 0},re.createElement("text",{x:"extend",y:"extend",fillText:!0,fillStyle:e.fillStyle,align:e.align,text:e.text,font:e.font,lineHeight:e.lineHeight,gap:e.gap,w:p.w,split:" ",wrap:!0,line:o}))))))))))))}const Ge=function(e){const[t,o]=re.useState(0),[n,r]=re.useState(0),{ref:a,location:p}=Ye.useLocationPropertyLazy({default:{w:0,h:0}}),{transitionCount:i,setTransitionCount:c}=Ye.useTransitionCount({defaultCount:t,destination:t,rate:.24*p.h/15,postprocess:e=>Number(e.toFixed(2))});return re.useEffect((()=>{0!==t&&0===i&&c(t)}),[t]),re.createElement(re.Fragment,null,re.createElement("layout",{x:"extend",y:"extend",w:"extend",h:"extend",onRenderUnmount:e=>a.current=e},re.createElement("layout",{x:"extend",y:"extend",w:"extend",h:"extend"},re.createElement(De,{gap:100,color:"rgba(255, 255, 255, 1)"})),re.createElement("layout",{x:"extend",y:"extend",w:"extend",h:"extend",container:!0,verticalCenter:!0,horizontalAlignCenter:!0,gap:24},re.createElement("layout",{w:"extend",h:n,item:!0},re.createElement(He,{setHeight:r,content:e.title})),re.createElement("layout",{w:"extend",h:`calc(100% - ${n}px)`,item:!0,shrink:1,container:!0,verticalCenter:!0,horizontalAlignCenter:!0,gap:24},re.createElement("layout",{w:"min(calc(100% - 120px), 1600px)",h:"60%",item:!0,shrink:1},e.GraphComponent),re.createElement("layout",{w:"min(calc(100% - 120px), 1600px)",h:`min(24%, ${i}px)`,item:!0,shrink:1},re.createElement(We,{setHeight:o,content:e.description}))))))};function qe(){return re.createElement("rect",{x:"extend",y:"extend",w:"extend",h:"extend",beginPath:!0,fillStyle:"rgba(255, 255, 255, 1)",radius:16},re.createElement("fill",null),re.createElement("clip",{x:"extend",y:"extend",w:"extend",h:"extend"},re.createElement("layout",{x:"extend",y:"extend",w:"extend",h:"extend",container:!0,horizontalAlignCenter:!0,verticalAlignCenter:!0},re.createElement("layout",{w:"calc(100% - 48px)",h:"calc(100% - 48px)",item:!0},re.createElement("rect",{x:"extend",y:"extend",w:"extend",h:"extend",fillStyle:"rgba(135, 135, 135, 1)",beginPath:!0},re.createElement("fill",null),re.createElement("clip",{x:"extend",y:"extend",w:"extend",h:"extend",key:1},re.createElement("arc",{fillStyle:"rgba(255, 0, 255, 1)",x:"calc(extend + 85px)",y:"calc(extend - 25px)",radius:200,sAngle:0,eAngle:2*Math.PI,counterclockwise:!1,beginPath:!0},re.createElement("fill",null)),re.createElement("arc",{fillStyle:"rgba(0, 0, 255, 1)",x:"calc(extend + 145px)",y:"calc(extend + 100vh - 75px)",radius:200,sAngle:0,eAngle:2*Math.PI,counterclockwise:!1,beginPath:!0},re.createElement("fill",null)),re.createElement("arc",{fillStyle:"rgba(255, 255, 0, 1)",x:"calc(extend + 100vw)",y:"calc(extend + 25vh)",radius:200,sAngle:0,eAngle:2*Math.PI,counterclockwise:!1,beginPath:!0},re.createElement("fill",null))))))))}const Qe=function(){const e=[{text:"CanvasXML"},{text:"Document",onClick:()=>window.open("https://github.com/wvOoOvw/20240601x001/tree/master/example/Rect")},{text:"Github",onClick:()=>window.open("https://github.com/wvOoOvw/20240601x001")},{text:"Npm",onClick:()=>window.open("https://www.npmjs.com/package/canvasxml")}];return re.createElement(Ge,{GraphComponent:re.createElement(qe,null),title:e,description:[{text:"Component <Clip/> API",font:"28px monospace",fillStyle:"rgba(255, 255, 255, 1)",lineHeight:1,gap:14,align:"left"},{text:"This Is A Basic Clip Component Display By Setting Different Orientations, Sizes, Rounded Corners, And Rendering Modes, Try To Click The Rect Above To Change The Color",font:"24px monospace",fillStyle:"rgba(185, 185, 185, 1)",lineHeight:1,gap:12,align:"left"}]})};Ie.mount(re.createElement(Qe,null),{renderFrameTimeDiffMax:12}).render()})();