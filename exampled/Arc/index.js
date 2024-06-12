(()=>{"use strict";const e=e=>e.x,t=e=>e.x+e.w,n=e=>e.y,r=e=>e.y+e.h,o=o=>Object({...o,l:e(o),r:t(o),t:n(o),b:r(o)}),a=e=>e.x+e.w/2,i=e=>e.y+e.h/2,c=e=>e.x,l=e=>e.y,h=e=>e.x,s=e=>e.y+e.h,d=e=>e.x+e.w,u=e=>e.y,x=e=>e.x+e.w,f=e=>e.y+e.h,y=e=>Object({...e,cx:a(e),cy:i(e),ltx:c(e),lty:l(e),lbx:h(e),lby:s(e),rtx:d(e),rty:u(e),rbx:x(e),rby:f(e)}),v=e=>.01*Math.min(e.w,e.h),p=e=>.01*Math.max(e.w,e.h),w=e=>.01*e.w,g=e=>.01*e.h,m=e=>Object({...e,vmin:v(e),vmax:p(e),vw:w(e),vh:g(e)}),b=e=>Object({...e,x:e.cx-e.w/2,y:e.cy-e.h/2}),E=e=>Object({x:e.x,y:e.y,w:e.w,h:e.h,...o(e),...y(e),...m(e)}),A={l:e,r:t,t:n,b:r,wireframe:o,cx:a,cy:i,ltx:c,lty:l,lbx:h,lby:s,rtx:d,rty:u,rbx:x,rby:f,point:y,vmin:v,vmax:p,vw:w,vh:g,viewport:m,fromcenter:b,coordinate:E,coordinatefromcenter:e=>E(b(e)),add:e=>e.reduce(((e,t)=>Object({x:e.x+(t.x||0),y:e.y+(t.y||0),w:e.w+(t.w||0),h:e.h+(t.h||0)})),{x:0,y:0,w:0,h:0}),box:e=>{const t=e.reduce(((e,t)=>({boxt:e.boxt?Math.min(e.boxt,t.y):t.y,boxb:e.boxb?Math.min(e.boxb,t.y+t.h):t.y+t.h,boxl:e.boxl?Math.min(e.boxl,t.x):t.x,boxr:e.boxr?Math.min(e.boxr,t.x+t.w):t.x+t.w})),{boxt:void 0,boxb:void 0,boxl:void 0,boxr:void 0});return{x:t.boxl,y:t.boxt,w:t.boxr-t.boxl,h:t.boxb-t.boxt}},wmin:e=>e.reduce(((e,t)=>t.w?Math.min(t.w,e):e),0),wmax:e=>e.reduce(((e,t)=>t.w?Math.max(t.w,e):e),0),hmin:e=>e.reduce(((e,t)=>t.h?Math.min(t.h,e):e),0),hmax:e=>e.reduce(((e,t)=>t.h?Math.max(t.h,e):e),0),pointcover:(e,t)=>t.x>=e.x&&t.x<=e.x+e.w&&t.y>=e.y&&t.y<=e.y+e.h},k=A;var C=[],M=[],z=0,P=0,L={alternate:"root",children:[]},j=!1,B=!1,T=[],O=void 0,S=0,X=[],Y=void 0,I=L,R=[];const F=e=>{e.hooks.filter((e=>e.type===W&&e.effectPrevious&&"function"==typeof e.effectPrevious)).forEach((e=>T.push((()=>e.effectPrevious())))),e.hooks.filter((e=>e.type===H&&e.effectPrevious&&"function"==typeof e.effectPrevious)).forEach((e=>e.effectPrevious())),e.children.forEach((e=>F(e)))},D=()=>{for(j=!0,z=performance.now(),O=L,S=0,R.forEach((e=>e()));0!==T.length;)T.shift()();const e=()=>{requestAnimationFrame((()=>{const t=performance.now();t-z<P&&e(),(t-z>P||t-z===P)&&(j=!1),(t-z>P||t-z===P)&&D()}))};B&&e(),!1===B&&(j=!1),B=!1},q=e=>{var t;return void 0===t&&(t=Y.hooks[Y.index]),void 0===t&&(t={state:e}),Y.hooks[Y.index]=t,[t.state,e=>{"function"==typeof e&&(t.state=e(t.state)),"function"!=typeof e&&(t.state=e),!0===j&&(B=!0),!1===j&&requestAnimationFrame(D)}]},N=e=>{var t;return void 0===t&&(t=Y.hooks[Y.index]),void 0===t&&(t={current:e}),Y.hooks[Y.index]=t,t},W=(e,t)=>{var n;void 0===n&&(n=Y.hooks[Y.index]),void 0===n&&(n={effect:e}),Y.hooks[Y.index]=n,(void 0===n.dependence||n.dependence.some(((e,n)=>e!==t[n])))&&T.push((()=>n.effectPrevious=n.effectPrevious&&"function"==typeof n.effectPrevious?n.effectPrevious():void 0)),(void 0===n.dependence||n.dependence.some(((e,n)=>e!==t[n])))&&T.push((()=>n.effectPrevious=e())),n.dependence=t},H=(e,t)=>{var n;void 0===n&&(n=Y.hooks[Y.index]),void 0===n&&(n={effect:e}),Y.hooks[Y.index]=n,(void 0===n.dependence||n.dependence.some(((e,n)=>e!==t[n])))&&(n.effectPrevious=n.effectPrevious&&"function"==typeof n.effectPrevious?n.effectPrevious():void 0),(void 0===n.dependence||n.dependence.some(((e,n)=>e!==t[n])))&&(n.effectPrevious=e()),n.dependence=t},U=(e,t)=>{var n;void 0===n&&(n=Y.hooks[Y.index]),void 0===n&&(n={effect:e}),Y.hooks[Y.index]=n,(void 0===n.dependence||n.dependence.some(((e,n)=>e!==t[n])))&&(n.effect=e),n.dependence=t},G=(e,t)=>{var n;return void 0===n&&(n=Y.hooks[Y.index]),void 0===n&&(n={memo:e}),Y.hooks[Y.index]=n,(void 0===n.dependence||n.dependence.some(((e,n)=>e!==t[n])))&&(n.memo=e()),n.dependence=t,n.memo},J=(e,t)=>{var n;return void 0===n&&(n=Y.hooks[Y.index]),void 0===n&&(n={callback:e}),Y.hooks[Y.index]=n,(void 0===n.dependence||n.dependence.some(((e,n)=>e!==t[n])))&&(n.callback=e),n.dependence=t,n.callback},K={renderNode:()=>I,mount:(e,t)=>(R.push(e),P=t,K),render:D,compoment:(e,t,n)=>{var r,o=Object(t).key,a=Object(t).ref,i=O.children.findIndex((t=>void 0!==t.key&&t.key===o&&t.alternate===e));-1!==i&&O.children.splice(S,0,O.children.splice(i,1)[0]),void 0===r&&O.children[S]&&O.children[S].alternate===e&&O.children[S].key===o&&(r=O.children[S]),void 0===r&&(r={key:o,alternate:e,children:[],hooks:[],props:t}),r!==O.children[S]&&O.children[S]&&F(O.children[S]),r.parent=O,(e=>{I=e,O.children[S]=e,O=e,S=0,M.push(0),X.push({hooks:e.hooks,index:0}),Y=X[X.length-1]})(r),n(r.alternate(t)),(e=>{I=e,e.children.filter(((e,t)=>t>S||t===S)).forEach((e=>F(e))),e.children=e.children.filter(((e,t)=>t<S)),O=e.parent,S=O.children.findIndex((t=>t===e))+1,C=C.filter(((e,t)=>t<C.length-M[M.length-1])),M=M.filter(((e,t)=>t<M.length-1)),X=X.filter(((e,t)=>t<X.length-1)),Y=X[X.length-1],e.hooks.filter((e=>e.type===U&&e.effect&&"function"==typeof e.effect)).forEach((e=>e.effect()))})(r),"function"==typeof a&&a(r)},createElement:(e,t,...n)=>({alternate:e,props:t,children:n}),Fragment:e=>e.children,contextProvider:e=>{C.push(e),M[M.length-1]=M[M.length-1]+1},contextProviderExtend:e=>{C.push({...C[C.length-1],...e}),M[M.length-1]=M[M.length-1]+1},shouldRender:()=>{!0===j&&(B=!0),!1===j&&requestAnimationFrame(D)},useContext:()=>C[C.length-1],useState:q,useRef:N,useEffect:W,useEffectLoopEnd:U,useEffectImmediate:H,useMemo:G,useCallback:J};Object.keys(K).filter((e=>[q,N,W,U,H,G,J].includes(K[e]))).forEach((e=>{return K[e]=(t=K[e],(...e)=>{try{if(void 0!==Y.hooks[Y.index]&&Y.hooks[Y.index].type!==t)throw Error(t);return t(...e)}finally{Y.hooks[Y.index].type=t,Y.index=Y.index+1}});var t}));const Q=K;var V=[];const Z=(e,t)=>{t&&(V=[...V,{type:e,callback:t}])},$=(e,t)=>{t&&(V=V.filter((n=>n.type!==e||n.callback!==t)))},_={addEventListener:Z,removeEventListener:$,clearEventListener:()=>{V=[]},useEventListener:(e,t)=>{Q.useEffectImmediate((()=>{t&&Z(e,t)}),[e,t]),Q.useEffectImmediate((()=>{if(t)return()=>$(e,t)}),[e,t])},addEventListenerWithCanvas:e=>{new Array("click","touchstart","touchmove","touchend","mousedown","mousemove","mouseup").forEach((t=>{e.addEventListener(t,(e=>((e,t)=>{const n=V.filter((e=>e.type===t)).sort(((e,t)=>{const n=void 0===e.option||void 0===e.option.priority?0:e.option.priority;return(void 0===t.option||void 0===t.option.priority?0:t.option.priority)-n}));var r=!1;n.forEach((t=>{var n,o;void 0===window.ontouchstart&&(n=e.pageX*ve.dpr()),void 0===window.ontouchstart&&(o=e.pageY*ve.dpr()),void 0!==window.ontouchstart&&(n=[...e.changedTouches].map((e=>e*ve.dpr()))),void 0!==window.ontouchstart&&(o=[...e.changedTouches].map((e=>e*ve.dpr())));const a={native:e,x:n,y:o,stopPropagation:()=>r=!0};!1===r&&t.callback(a)}))})(e,t)),{passive:!0})}))}},ee=_,te=(e,t)=>{if(void 0===window.ontouchstart){var{onStart:n,onMove:r,onEnd:o}=(e=>{const t=Q.useRef(),n=Q.useRef(),r=Q.useCallback((t=>{e.onChange&&e.onChange(t)}),[e.onChange]);return{onStart:Q.useCallback((o=>{if(!1===e.enable)return;const a=o.x,i=o.y;t.current={x:a,y:i},n.current={x:a,y:i},r({type:"mouse",status:"afterStart",e:o,x:a,y:i,changedX:0,changedY:0,continuedX:0,continuedY:0})}),[e.enable,e.onChange]),onMove:Q.useCallback((o=>{if(!1===e.enable)return;if(void 0===n.current)return;const a=o.x,i=o.y,c=a-n.current.x,l=i-n.current.y,h=n.current.x-t.current.x,s=n.current.y-t.current.y;n.current={x:a,y:i},r({type:"mouse",status:"afterMove",e:o,x:a,y:i,changedX:c,changedY:l,continuedX:h,continuedY:s})}),[e.enable,e.onChange]),onEnd:Q.useCallback((o=>{if(!1===e.enable)return;if(void 0===n.current)return;const a=o.x,i=o.y,c=a-n.current.x,l=i-n.current.y,h=n.current.x-t.current.x,s=n.current.y-t.current.y;r({type:"mouse",status:"beforeEnd",e:o,x:a,y:i,changedX:c,changedY:l,continuedX:h,continuedY:s}),t.current=void 0,n.current=void 0,r({type:"mouse",status:"afterEnd",e:o,x:a,y:i,changedX:c,changedY:l,continuedX:h,continuedY:s})}),[e.enable,e.onChange])}})({enable:e,onChange:t});ee.useEventListener("mousedown",n),ee.useEventListener("mousemove",r),ee.useEventListener("mouseup",o)}if(void 0!==window.ontouchstart){var{onStart:n,onMove:r,onEnd:o}=(e=>{const t=Q.useRef(),n=Q.useRef(),r=Q.useCallback((t=>{e.onChange&&e.onChange(t),e.onChangeMemo&&e.onChangeMemo(t)}),[e.onChange]);return{onStart:Q.useCallback((o=>{if(!1===e.enable)return;const a=o.x,i=o.y;t.current={x:a,y:i},n.current={x:a,y:i};const c=[],l=[],h=[],s=[];a.forEach(((e,t)=>{c[t]=0,h[t]=0})),i.forEach(((e,t)=>{l[t]=0,s[t]=0})),r({type:"touch",status:"afterStart",e:o,x:a,y:i,changedX:c,changedY:l,continuedX:h,continuedY:s})}),[e.enable,e.onChange]),onMove:Q.useCallback((o=>{if(!1===e.enable)return;if(void 0===n.current)return;const a=o.x,i=o.y,c=[],l=[],h=[],s=[];a.forEach(((e,r)=>{c[r]=e-n.current.x[r],h[r]=n.current.x[r]-t.current.x[r]})),i.forEach(((e,r)=>{l[r]=e-n.current.y[r],s[r]=n.current.y[r]-t.current.y[r]})),n.current={x:a,y:i},r({type:"touch",status:"afterMove",e:o,x:a,y:i,changedX:c,changedY:l,continuedX:h,continuedY:s})}),[e.enable,e.onChange]),onEnd:Q.useCallback((o=>{if(!1===e.enable)return;if(void 0===n.current)return;const a=o.x,i=o.y,c=[],l=[],h=[],s=[];a.forEach(((e,r)=>{c[r]=e-n.current.x[r],h[r]=n.current.x[r]-t.current.x[r]})),i.forEach(((e,r)=>{l[r]=e-n.current.y[r],s[r]=n.current.y[r]-t.current.y[r]})),r({type:"touch",status:"beforeEnd",e:o,x:a,y:i,changedX:c,changedY:l,continuedX:h,continuedY:s}),t.current=void 0,n.current=void 0,r({type:"touch",status:"afterEnd",e:o,x:a,y:i,changedX:c,changedY:l,continuedX:h,continuedY:s})}),[e.enable,e.onChange])}})({enable:e,onChange:t});ee.useEventListener("touchstart",n),ee.useEventListener("touchmove",r),ee.useEventListener("touchend",o)}},ne=e=>(de.preprocessing(e),ve.context().arc(e.x,e.y,e.radius,e.sAngle,e.eAngle,e.counterclockwise),de.postprocessing(e),e.children),re=e=>(de.preprocessing(e),ve.context().clip(),de.postprocessing(e),e.children),oe=e=>{var t;return de.preprocessing(e),!0===Boolean(e.image)&&(!0===Boolean(e.clipMaxCenter)&&(t=((e,t,n)=>{var{x:r,y:o,w:a,h:i}=t;if(0===n.width||0===n.height)return;var c=0,l=0,h=n.width,s=n.height;const d=a/h,u=i/s;return d>u&&(l=s-s*u/d,s-=s-s*u/d),u>d&&(c=h-h*d/u,h-=h-h*d/u),e.drawImage(n,c,l,h,s,r,o,a,i),{sx:c,sy:l,sw:h,sh:s,x:r,y:o,w:a,h:i}})(ve.context(),{x:e.x,y:e.y,w:e.w,h:e.h},e.image)),!0===Boolean(e.clipMinCenter)&&(t=((e,t,n)=>{var{x:r,y:o,w:a,h:i}=t;if(0===n.width||0===n.height)return;var c=n.width,l=n.height;const h=a/c,s=i/l;return h>s&&(r+=(a-a*s/h)/2,a-=a-a*s/h),s>h&&(o+=(i-i*h/s)/2,i-=i-i*h/s),e.drawImage(n,0,0,c,l,r,o,a,i),{sx:0,sy:0,sw:c,sh:l,x:r,y:o,w:a,h:i}})(ve.context(),{x:e.x,y:e.y,w:e.w,h:e.h},e.image)),!0!==Boolean(e.clipMaxCenter)&&!0!==Boolean(e.clipMinCenter)&&((e,t,n)=>{var{x:r,y:o,w:a,h:i}=t;if(0!==n.width&&0!==n.height){var c=n.width,l=n.height;e.drawImage(n,0,0,c,l,r,o,a,i)}})(ve.context(),{x:e.x,y:e.y,w:e.w,h:e.h},e.image)),!0===Boolean(t)&&!0===Boolean(e.onClipPosition)&&e.onClipPosition(t),de.postprocessing(e),e.children},ae=(e,t)=>{var n=0,r=!1,o=[];return t.forEach((t=>{!1===r&&(n+t.w<e.w||n+t.w===e.w)&&o.push(t),!1===r&&(n+t.w<e.w||n+t.w===e.w)&&(n+=t.w),n+t.w>e.w&&(r=!0)})),{result:o,rest:t.filter(((e,t)=>t>o.length-1))}},ie=(e,t)=>{var n=0,r=!1,o=[];return t.forEach((t=>{!1===r&&(n+t.h<e.h||n+t.h===e.h)&&o.push(t),!1===r&&(n+t.h<e.h||n+t.h===e.h)&&(n+=t.h),n+t.y>e.h&&(r=!0)})),{result:o,rest:t.filter(((e,t)=>t>o.length-1))}},ce={horizontalForward:(e,t)=>{var n=0;return t.forEach((t=>{t.x=e.x+n,n+=t.w})),t},horizontalReverse:(e,t)=>{var n=0;return t.forEach((t=>{t.x=e.x+e.w-t.w-n,n+=t.w})),t},horizontalCenter:(e,t)=>{var n=0,r=k.add(t).w;return t.forEach((t=>{t.x=e.x+(e.w-r)/2+n,n+=t.w})),t},horizontalAround:(e,t)=>{var n=0,r=k.add(t).w;return t.forEach(((o,a)=>{o.x=e.x+(e.w-r)/(t.length-1)*a+n,n+=o.w})),t},horizontalBetween:(e,t)=>{var n=0,r=k.add(t).w;return t.forEach(((o,a)=>{o.x=e.x+(e.w-r)/(t.length+1)*(a+1)+n,n+=o.w})),t},horizontalAlignLeft:(e,t)=>(t.forEach(((t,n)=>{t.x=e.x})),t),horizontalAlignRight:(e,t)=>(t.forEach(((t,n)=>{t.x=e.x+e.w})),t),horizontalAlignCenter:(e,t)=>(t.forEach(((t,n)=>{t.x=e.x+(e.w-t.w)/2})),t),verticalForward:(e,t)=>{var n=0;return t.forEach((t=>{t.y=e.y+n,n+=t.h})),t},verticalReverse:(e,t)=>{var n=0;return t.forEach((t=>{t.y=e.y+e.h-t.h-n,n+=t.h})),t},verticalCenter:(e,t)=>{var n=0,r=k.add(t).h;return t.forEach((t=>{t.y=e.y+(e.h-r)/2+n,n+=t.h})),t},verticalAround:(e,t)=>{var n=0,r=k.add(t).h;return t.forEach(((o,a)=>{o.y=e.y+(e.h-r)/(t.length-1)*a+n,n+=o.h})),t},verticalBetween:(e,t)=>{var n=0,r=k.add(t).h;return t.forEach(((o,a)=>{o.y=e.y+(e.h-r)/(t.length+1)*(a+1)+n,n+=o.h})),t},verticalAlignTop:(e,t)=>(t.forEach(((t,n)=>{t.y=e.y})),t),verticalAlignBottom:(e,t)=>(t.forEach(((t,n)=>{t.y=e.y+e.h})),t),verticalAlignCenter:(e,t)=>(t.forEach(((t,n)=>{t.y=e.y+(e.h-t.h)/2})),t)},le=e=>{de.preprocessing(e);const t=Object.keys(e).findIndex((e=>"horizontalForward"===e||"horizontalReverse"===e||"horizontalCenter"===e||"horizontalAround"===e||"horizontalAround"===e||"horizontalBetween"===e)),n=Object.keys(e).findIndex((e=>"verticalForward"===e||"verticalReverse"===e||"verticalCenter"===e||"verticalAround"===e||"verticalAround"===e||"verticalBetween"===e)),r=e.children.flat().filter((e=>"layout"===e.alternate)).map((e=>e.props));return!0===Boolean(e.wrap)&&n>-1&&n>-1&&n<t&&((e,t,n,r)=>{for(var o=[],a=t;a.length;){const t=ae(e,a);o=[...o,t.result],a=t.rest}n(e,o.map((t=>Object({y:e.y,h:k.hmax(t)})))).forEach(((e,t)=>o[t].forEach((t=>t.y=e.y)))),o.forEach((t=>r({x:e.x,y:t.y,w:e.w},t)))})({x:e.x,y:e.y,w:e.w,h:e.h},r,ce[Object.keys(e)[n]],ce[Object.keys(e)[t]]),!0===Boolean(e.wrap)&&t>-1&&n>-1&&t<n&&((e,t,n,r)=>{for(var o=[],a=t;a.length;){const t=ie(e,a);o=[...o,t.result],a=t.rest}n(e,o.map((t=>Object({x:e.x,w:k.wmax(t)})))).forEach(((e,t)=>o[t].forEach((t=>t.x=e.x)))),o.forEach((t=>r({y:e.y,h:e.h},t)))})({x:e.x,y:e.y,w:e.w,h:e.h},r,ce[Object.keys(e)[t]],ce[Object.keys(e)[n]]),!1===Boolean(e.wrap)&&Object.keys(e).forEach((t=>{!0===Boolean(e[t])&&ce[t]&&ce[t]({x:e.x,y:e.y,w:e.w,h:e.h},r)})),e.children.forEach(((t,n)=>{"function"==typeof t&&(e.children[n]=t({x:e.x,y:e.y,w:e.w,h:e.h}))})),de.postprocessing(e),e.children},he=e=>{de.preprocessing(e);var t=new Array(4).fill(0);return e.radius&&"object"==typeof t&&Array.isArray(t)&&(t=e.radius),e.radius&&"number"==typeof t&&(t=new Array(4).fill(e.radius)),ve.context().moveTo(e.x,e.y+t[0]),ve.context().arcTo(e.x,e.y,e.x+t[0],e.y,t[0]),ve.context().lineTo(e.x+e.w-t[1],e.y),ve.context().arcTo(e.x+e.w,e.y,e.x+e.w,e.y+t[1],t[1]),ve.context().lineTo(e.x+e.w,e.y+e.h-t[2]),ve.context().arcTo(e.x+e.w,e.y+e.h,e.x+e.w-t[2],e.y+e.h,t[2]),ve.context().lineTo(e.x+t[3],e.y+e.h),ve.context().arcTo(e.x,e.y+e.h,e.x,e.y+e.h-t[3],t[3]),de.postprocessing(e),e.children},se=e=>{de.preprocessing(e);const t=((e,t,n)=>{var r="",o=[];return n.split("").forEach((n=>{const a=e.measureText(r+n).width;a>t&&o.push({text:r,w:a,h:Number(e.font.match(/\d+px/)[0].replace("px",""))}),a>t&&(r=""),r+=n})),r&&o.push({text:r,w:e.measureText(r).width,h:Number(e.font.match(/\d+px/)[0].replace("px",""))}),o})(ve.context(),e.w,e.text);return t.forEach(((t,n)=>{!0===Boolean(e.fillText)&&ve.context().fillText(t.text,e.x,e.y+t.h+n*t.h+n*(e.gap||0)),!0===Boolean(e.strokeText)&&ve.context().strokeText(t.text,e.x,e.y+t.h+n*t.h+n*(e.gap||0))})),de.postprocessing(e),e.children},de={render:e=>"arc"===e?ne:"clip"===e?re:"image"===e?oe:"layout"===e?le:"rect"===e?he:"text"===e?se:void 0,preprocessing:e=>{ve.context().save(),void 0!==e.globalAlpha&&(ve.context().globalAlpha=e.globalAlpha),void 0!==e.font&&(ve.context().font=e.font),void 0!==e.fillStyle&&(ve.context().fillStyle=e.fillStyle),void 0!==e.strokeStyle&&(ve.context().strokeStyle=e.strokeStyle),!0===Boolean(e.beginPath)&&ve.context().beginPath()},postprocessing:e=>{!0===Boolean(e.fill)&&ve.context().fill(),!0===Boolean(e.stroke)&&ve.context().stroke(),ee.useEventListener("click",e.onClick),ee.useEventListener("touchstart",e.onTouchStart),ee.useEventListener("touchmove",e.onTouchMove),ee.useEventListener("touchend",e.onTouchEnd),ee.useEventListener("mousedown",e.onMouseUp),ee.useEventListener("mousemove",e.onMouseMove),ee.useEventListener("mouseup",e.onMouseUp),te(e.onDragEnable,e.onDrag),!0===Boolean(e.isolated)&&ve.context().restore(),Q.useEffectLoopEnd((()=>{!0!==Boolean(e.isolated)&&ve.context().restore()}),[])}};var ue,xe,fe;const ye=e=>{e&&"object"==typeof e&&(!0===Array.isArray(e)&&e.forEach((e=>ye(e))),!1===Array.isArray(e)&&"function"==typeof e.alternate&&Q.compoment(e.alternate,{...e.props,children:e.children},ye),!1===Array.isArray(e)&&"string"==typeof e.alternate&&Q.compoment(de.render(e.alternate),{...e.props,children:e.children},ye))},ve={dpr:()=>ue,canvas:()=>xe,context:()=>fe,mount:(e,t)=>{const n=document.createElement("style");n.innerHTML=["::-webkit-scrollbar { width: 0; height: 0; }","body { padding: 0; margin: 0; }","body, body * { overscroll-behavior: none; }"].join(" "),document.head.appendChild(n),window.addEventListener("wheel",(e=>e.preventDefault()),{passive:!1}),window.addEventListener("touchmove",(e=>e.preventDefault()),{passive:!1}),window.addEventListener("contextmenu",(e=>e.preventDefault()),{passive:!1}),ue=2,xe=document.createElement("canvas"),fe=xe.getContext("2d");const r=()=>{xe.width=window.innerWidth*ue,xe.height=window.innerHeight*ue,xe.style.width="100%",xe.style.height="100%",xe.coordinate=k.coordinate({x:0,y:0,w:xe.width,h:xe.height})};return xe.style.position="absolute",xe.style.width="100%",xe.style.height="100%",xe.style.background="black",xe.style.overflow="hidden",r(),window.addEventListener("resize",(()=>{r(),Q.shouldRender()})),document.body.appendChild(xe),ee.addEventListenerWithCanvas(xe),Q.mount((()=>{fe.clearRect(0,0,xe.width,xe.height),ye(e)}),t.frameTimeDiffMax),{render:Q.render}}};function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe.apply(null,arguments)}const we=function(){return Q.createElement(Q.Fragment,null,Q.createElement("layout",{x:ve.canvas().coordinate.x,y:ve.canvas().coordinate.y,w:ve.canvas().coordinate.w,h:ve.canvas().coordinate.h,flow:["horizontal","verticalAlign"],horizontal:"center",verticalAlign:"center"},Q.createElement("layout",{w:100,h:100,infinite:"horizontal",verticalAlign:"center",horizontalAlign:"center"},Q.createElement("layout",{w:92,h:92,flow:["verticalAlign","horizontalAlign"],verticalAlign:"center",horizontalAlign:"center"},Q.createElement("layout",{w:0,h:0},(e=>Q.createElement("arc",pe({isolated:!0,fill:!0,fillStyle:"rgba(255, 0, 0, 1)"},e,{radius:40,sAngle:0,eAngle:2*Math.PI,counterclockwise:!1})))))),Q.createElement("layout",{w:100,h:100,flow:["verticalAlign","horizontalAlign"],verticalAlign:"center",horizontalAlign:"center"},Q.createElement("layout",{w:92,h:92,flow:["verticalAlign","horizontalAlign"],verticalAlign:"center",horizontalAlign:"center"},Q.createElement("layout",{w:0,h:0},(e=>Q.createElement("arc",pe({isolated:!0,fill:!0,fillStyle:"rgba(255, 0, 0, 1)"},e,{radius:16,sAngle:0,eAngle:2*Math.PI,counterclockwise:!1})))))),Q.createElement("layout",{w:100,h:100,flow:["verticalAlign","horizontalAlign"],verticalAlign:"center",horizontalAlign:"center"},Q.createElement("layout",{w:92,h:92,flow:["verticalAlign","horizontalAlign"],verticalAlign:"center",horizontalAlign:"center"},Q.createElement("layout",{w:0,h:0},(e=>Q.createElement("arc",pe({isolated:!0,fill:!0,fillStyle:"rgba(255, 0, 0, 1)"},e,{radius:25,sAngle:.4*Math.PI,eAngle:1.5*Math.PI,counterclockwise:!1})))))),Q.createElement("layout",{w:100,h:100,flow:["verticalAlign","horizontalAlign"],verticalAlign:"center",horizontalAlign:"center"},Q.createElement("layout",{w:92,h:92,flow:["verticalAlign","horizontalAlign"],verticalAlign:"center",horizontalAlign:"center"},Q.createElement("layout",{w:0,h:0},(e=>Q.createElement("arc",pe({isolated:!0,fill:!0,fillStyle:"rgba(255, 0, 0, 1)"},e,{radius:32,sAngle:1*Math.PI,eAngle:1.75*Math.PI,counterclockwise:!0}))))))))};ve.mount(Q.createElement(we,null),{frameTimeDiffMax:12}).render()})();