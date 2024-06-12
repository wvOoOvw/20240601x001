(()=>{"use strict";const e=e=>e.x,t=e=>e.x+e.w,n=e=>e.y,o=e=>e.y+e.h,r=r=>Object({...r,l:e(r),r:t(r),t:n(r),b:o(r)}),a=e=>e.x+e.w/2,c=e=>e.y+e.h/2,i=e=>e.x,l=e=>e.y,h=e=>e.x,s=e=>e.y+e.h,d=e=>e.x+e.w,u=e=>e.y,x=e=>e.x+e.w,y=e=>e.y+e.h,f=e=>Object({...e,cx:a(e),cy:c(e),ltx:i(e),lty:l(e),lbx:h(e),lby:s(e),rtx:d(e),rty:u(e),rbx:x(e),rby:y(e)}),v=e=>.01*Math.min(e.w,e.h),p=e=>.01*Math.max(e.w,e.h),w=e=>.01*e.w,g=e=>.01*e.h,m=e=>Object({...e,vmin:v(e),vmax:p(e),vw:w(e),vh:g(e)}),b=e=>Object({...e,x:e.cx-e.w/2,y:e.cy-e.h/2}),E=e=>Object({x:e.x,y:e.y,w:e.w,h:e.h,...r(e),...f(e),...m(e)}),k={l:e,r:t,t:n,b:o,wireframe:r,cx:a,cy:c,ltx:i,lty:l,lbx:h,lby:s,rtx:d,rty:u,rbx:x,rby:y,point:f,vmin:v,vmax:p,vw:w,vh:g,viewport:m,fromcenter:b,coordinate:E,coordinatefromcenter:e=>E(b(e)),add:e=>e.reduce(((e,t)=>Object({x:e.x+(t.x||0),y:e.y+(t.y||0),w:e.w+(t.w||0),h:e.h+(t.h||0)})),{x:0,y:0,w:0,h:0}),box:e=>{const t=e.reduce(((e,t)=>({boxt:e.boxt?Math.min(e.boxt,t.y):t.y,boxb:e.boxb?Math.min(e.boxb,t.y+t.h):t.y+t.h,boxl:e.boxl?Math.min(e.boxl,t.x):t.x,boxr:e.boxr?Math.min(e.boxr,t.x+t.w):t.x+t.w})),{boxt:void 0,boxb:void 0,boxl:void 0,boxr:void 0});return{x:t.boxl,y:t.boxt,w:t.boxr-t.boxl,h:t.boxb-t.boxt}},wmin:e=>e.reduce(((e,t)=>t.w?Math.min(t.w,e):e),0),wmax:e=>e.reduce(((e,t)=>t.w?Math.max(t.w,e):e),0),hmin:e=>e.reduce(((e,t)=>t.h?Math.min(t.h,e):e),0),hmax:e=>e.reduce(((e,t)=>t.h?Math.max(t.h,e):e),0),pointcover:(e,t)=>t.x>=e.x&&t.x<=e.x+e.w&&t.y>=e.y&&t.y<=e.y+e.h},A=k;var C=[],M=[],P=0,L=0,j={alternate:"root",children:[]},B=!1,S=!1,T=[],O=void 0,z=0,X=[],Y=void 0,R=j,I=[];const F=e=>{e.hooks.filter((e=>e.type===W&&e.effectPrevious&&"function"==typeof e.effectPrevious)).forEach((e=>T.push((()=>e.effectPrevious())))),e.hooks.filter((e=>e.type===H&&e.effectPrevious&&"function"==typeof e.effectPrevious)).forEach((e=>e.effectPrevious())),e.children.forEach((e=>F(e)))},D=()=>{for(B=!0,P=performance.now(),O=j,z=0,I.forEach((e=>e()));0!==T.length;)T.shift()();const e=()=>{requestAnimationFrame((()=>{const t=performance.now();t-P<L&&e(),(t-P>L||t-P===L)&&(B=!1),(t-P>L||t-P===L)&&D()}))};S&&e(),!1===S&&(B=!1),S=!1},q=e=>{var t;return void 0===t&&(t=Y.hooks[Y.index]),void 0===t&&(t={state:e}),Y.hooks[Y.index]=t,[t.state,e=>{"function"==typeof e&&(t.state=e(t.state)),"function"!=typeof e&&(t.state=e),!0===B&&(S=!0),!1===B&&requestAnimationFrame(D)}]},N=e=>{var t;return void 0===t&&(t=Y.hooks[Y.index]),void 0===t&&(t={current:e}),Y.hooks[Y.index]=t,t},W=(e,t)=>{var n;void 0===n&&(n=Y.hooks[Y.index]),void 0===n&&(n={effect:e}),Y.hooks[Y.index]=n,(void 0===n.dependence||n.dependence.some(((e,n)=>e!==t[n])))&&T.push((()=>n.effectPrevious=n.effectPrevious&&"function"==typeof n.effectPrevious?n.effectPrevious():void 0)),(void 0===n.dependence||n.dependence.some(((e,n)=>e!==t[n])))&&T.push((()=>n.effectPrevious=e())),n.dependence=t},H=(e,t)=>{var n;void 0===n&&(n=Y.hooks[Y.index]),void 0===n&&(n={effect:e}),Y.hooks[Y.index]=n,(void 0===n.dependence||n.dependence.some(((e,n)=>e!==t[n])))&&(n.effectPrevious=n.effectPrevious&&"function"==typeof n.effectPrevious?n.effectPrevious():void 0),(void 0===n.dependence||n.dependence.some(((e,n)=>e!==t[n])))&&(n.effectPrevious=e()),n.dependence=t},U=(e,t)=>{var n;void 0===n&&(n=Y.hooks[Y.index]),void 0===n&&(n={effect:e}),Y.hooks[Y.index]=n,(void 0===n.dependence||n.dependence.some(((e,n)=>e!==t[n])))&&(n.effect=e),n.dependence=t},G=(e,t)=>{var n;return void 0===n&&(n=Y.hooks[Y.index]),void 0===n&&(n={memo:e}),Y.hooks[Y.index]=n,(void 0===n.dependence||n.dependence.some(((e,n)=>e!==t[n])))&&(n.memo=e()),n.dependence=t,n.memo},J=(e,t)=>{var n;return void 0===n&&(n=Y.hooks[Y.index]),void 0===n&&(n={callback:e}),Y.hooks[Y.index]=n,(void 0===n.dependence||n.dependence.some(((e,n)=>e!==t[n])))&&(n.callback=e),n.dependence=t,n.callback},K={renderNode:()=>R,mount:(e,t)=>(I.push(e),L=t,K),render:D,compoment:(e,t,n)=>{var o,r=Object(t).key,a=Object(t).ref,c=O.children.findIndex((t=>void 0!==t.key&&t.key===r&&t.alternate===e));-1!==c&&O.children.splice(z,0,O.children.splice(c,1)[0]),void 0===o&&O.children[z]&&O.children[z].alternate===e&&O.children[z].key===r&&(o=O.children[z]),void 0===o&&(o={key:r,alternate:e,children:[],hooks:[],props:t}),o!==O.children[z]&&O.children[z]&&F(O.children[z]),o.parent=O,(e=>{R=e,O.children[z]=e,O=e,z=0,M.push(0),X.push({hooks:e.hooks,index:0}),Y=X[X.length-1]})(o),n(o.alternate(t)),(e=>{R=e,e.children.filter(((e,t)=>t>z||t===z)).forEach((e=>F(e))),e.children=e.children.filter(((e,t)=>t<z)),O=e.parent,z=O.children.findIndex((t=>t===e))+1,C=C.filter(((e,t)=>t<C.length-M[M.length-1])),M=M.filter(((e,t)=>t<M.length-1)),X=X.filter(((e,t)=>t<X.length-1)),Y=X[X.length-1],e.hooks.filter((e=>e.type===U&&e.effect&&"function"==typeof e.effect)).forEach((e=>e.effect()))})(o),"function"==typeof a&&a(o)},createElement:(e,t,...n)=>({alternate:e,props:t,children:n}),Fragment:e=>e.children,contextProvider:e=>{C.push(e),M[M.length-1]=M[M.length-1]+1},contextProviderExtend:e=>{C.push({...C[C.length-1],...e}),M[M.length-1]=M[M.length-1]+1},shouldRender:()=>{!0===B&&(S=!0),!1===B&&requestAnimationFrame(D)},useContext:()=>C[C.length-1],useState:q,useRef:N,useEffect:W,useEffectLoopEnd:U,useEffectImmediate:H,useMemo:G,useCallback:J};Object.keys(K).filter((e=>[q,N,W,U,H,G,J].includes(K[e]))).forEach((e=>{return K[e]=(t=K[e],(...e)=>{try{if(void 0!==Y.hooks[Y.index]&&Y.hooks[Y.index].type!==t)throw Error(t);return t(...e)}finally{Y.hooks[Y.index].type=t,Y.index=Y.index+1}});var t}));const Q=K,V=e=>{const t=A.coordinate({x:e.x,y:e.y,w:e.w,h:e.h});return new Array(Math.ceil(100*t.vmax/e.gap/2)).fill().map(((n,o)=>0===o?Q.createElement(Q.Fragment,null,Q.createElement("rect",{isolated:!0,beginPath:!0,fill:!0,x:t.x,y:t.cy,w:100*t.vmax,h:.1*t.vmax,globalAlpha:.5,fillStyle:e.color}),Q.createElement("rect",{isolated:!0,beginPath:!0,fill:!0,x:t.cx,y:t.y,w:.1*t.vmax,h:100*t.vmax,globalAlpha:.5,fillStyle:e.color})):0!==o?Q.createElement(Q.Fragment,null,Q.createElement("rect",{isolated:!0,beginPath:!0,fill:!0,x:t.x,y:t.cy+e.gap*o,w:100*t.vmax,h:.1*t.vmax,globalAlpha:.25,fillStyle:e.color}),Q.createElement("rect",{isolated:!0,beginPath:!0,fill:!0,x:t.x,y:t.cy-e.gap*o,w:100*t.vmax,h:.1*t.vmax,globalAlpha:.25,fillStyle:e.color}),Q.createElement("rect",{isolated:!0,beginPath:!0,fill:!0,x:t.cx+e.gap*o,y:t.y,w:.1*t.vmax,h:100*t.vmax,globalAlpha:.25,fillStyle:e.color}),Q.createElement("rect",{isolated:!0,beginPath:!0,fill:!0,x:t.cx-e.gap*o,y:t.y,w:.1*t.vmax,h:100*t.vmax,globalAlpha:.25,fillStyle:e.color})):void 0))};var Z=[];const $=(e,t)=>{t&&(Z=[...Z,{type:e,callback:t}])},_=(e,t)=>{t&&(Z=Z.filter((n=>n.type!==e||n.callback!==t)))},ee={addEventListener:$,removeEventListener:_,clearEventListener:()=>{Z=[]},useEventListener:(e,t)=>{Q.useEffectImmediate((()=>{t&&$(e,t)}),[e,t]),Q.useEffectImmediate((()=>{if(t)return()=>_(e,t)}),[e,t])},addEventListenerWithCanvas:e=>{new Array("click","touchstart","touchmove","touchend","mousedown","mousemove","mouseup").forEach((t=>{e.addEventListener(t,(e=>((e,t)=>{const n=Z.filter((e=>e.type===t)).sort(((e,t)=>{const n=void 0===e.option||void 0===e.option.priority?0:e.option.priority;return(void 0===t.option||void 0===t.option.priority?0:t.option.priority)-n}));var o=!1;n.forEach((t=>{var n,r;void 0===window.ontouchstart&&(n=e.pageX*pe.dpr()),void 0===window.ontouchstart&&(r=e.pageY*pe.dpr()),void 0!==window.ontouchstart&&(n=[...e.changedTouches].map((e=>e*pe.dpr()))),void 0!==window.ontouchstart&&(r=[...e.changedTouches].map((e=>e*pe.dpr())));const a={native:e,x:n,y:r,stopPropagation:()=>o=!0};!1===o&&t.callback(a)}))})(e,t)),{passive:!0})}))}},te=ee,ne=(e,t)=>{if(void 0===window.ontouchstart){var{onStart:n,onMove:o,onEnd:r}=(e=>{const t=Q.useRef(),n=Q.useRef(),o=Q.useCallback((t=>{e.onChange&&e.onChange(t)}),[e.onChange]);return{onStart:Q.useCallback((r=>{if(!1===e.enable)return;const a=r.x,c=r.y;t.current={x:a,y:c},n.current={x:a,y:c},o({type:"mouse",status:"afterStart",e:r,x:a,y:c,changedX:0,changedY:0,continuedX:0,continuedY:0})}),[e.enable,e.onChange]),onMove:Q.useCallback((r=>{if(!1===e.enable)return;if(void 0===n.current)return;const a=r.x,c=r.y,i=a-n.current.x,l=c-n.current.y,h=n.current.x-t.current.x,s=n.current.y-t.current.y;n.current={x:a,y:c},o({type:"mouse",status:"afterMove",e:r,x:a,y:c,changedX:i,changedY:l,continuedX:h,continuedY:s})}),[e.enable,e.onChange]),onEnd:Q.useCallback((r=>{if(!1===e.enable)return;if(void 0===n.current)return;const a=r.x,c=r.y,i=a-n.current.x,l=c-n.current.y,h=n.current.x-t.current.x,s=n.current.y-t.current.y;o({type:"mouse",status:"beforeEnd",e:r,x:a,y:c,changedX:i,changedY:l,continuedX:h,continuedY:s}),t.current=void 0,n.current=void 0,o({type:"mouse",status:"afterEnd",e:r,x:a,y:c,changedX:i,changedY:l,continuedX:h,continuedY:s})}),[e.enable,e.onChange])}})({enable:e,onChange:t});te.useEventListener("mousedown",n),te.useEventListener("mousemove",o),te.useEventListener("mouseup",r)}if(void 0!==window.ontouchstart){var{onStart:n,onMove:o,onEnd:r}=(e=>{const t=Q.useRef(),n=Q.useRef(),o=Q.useCallback((t=>{e.onChange&&e.onChange(t),e.onChangeMemo&&e.onChangeMemo(t)}),[e.onChange]);return{onStart:Q.useCallback((r=>{if(!1===e.enable)return;const a=r.x,c=r.y;t.current={x:a,y:c},n.current={x:a,y:c};const i=[],l=[],h=[],s=[];a.forEach(((e,t)=>{i[t]=0,h[t]=0})),c.forEach(((e,t)=>{l[t]=0,s[t]=0})),o({type:"touch",status:"afterStart",e:r,x:a,y:c,changedX:i,changedY:l,continuedX:h,continuedY:s})}),[e.enable,e.onChange]),onMove:Q.useCallback((r=>{if(!1===e.enable)return;if(void 0===n.current)return;const a=r.x,c=r.y,i=[],l=[],h=[],s=[];a.forEach(((e,o)=>{i[o]=e-n.current.x[o],h[o]=n.current.x[o]-t.current.x[o]})),c.forEach(((e,o)=>{l[o]=e-n.current.y[o],s[o]=n.current.y[o]-t.current.y[o]})),n.current={x:a,y:c},o({type:"touch",status:"afterMove",e:r,x:a,y:c,changedX:i,changedY:l,continuedX:h,continuedY:s})}),[e.enable,e.onChange]),onEnd:Q.useCallback((r=>{if(!1===e.enable)return;if(void 0===n.current)return;const a=r.x,c=r.y,i=[],l=[],h=[],s=[];a.forEach(((e,o)=>{i[o]=e-n.current.x[o],h[o]=n.current.x[o]-t.current.x[o]})),c.forEach(((e,o)=>{l[o]=e-n.current.y[o],s[o]=n.current.y[o]-t.current.y[o]})),o({type:"touch",status:"beforeEnd",e:r,x:a,y:c,changedX:i,changedY:l,continuedX:h,continuedY:s}),t.current=void 0,n.current=void 0,o({type:"touch",status:"afterEnd",e:r,x:a,y:c,changedX:i,changedY:l,continuedX:h,continuedY:s})}),[e.enable,e.onChange])}})({enable:e,onChange:t});te.useEventListener("touchstart",n),te.useEventListener("touchmove",o),te.useEventListener("touchend",r)}},oe=e=>(ue.preprocessing(e),pe.context().arc(e.x,e.y,e.radius,e.sAngle,e.eAngle,e.counterclockwise),ue.postprocessing(e),e.children),re=e=>(ue.preprocessing(e),pe.context().clip(),ue.postprocessing(e),e.children),ae=e=>{var t;return ue.preprocessing(e),!0===Boolean(e.image)&&(!0===Boolean(e.clipMaxCenter)&&(t=((e,t,n)=>{var{x:o,y:r,w:a,h:c}=t;if(0===n.width||0===n.height)return;var i=0,l=0,h=n.width,s=n.height;const d=a/h,u=c/s;return d>u&&(l=s-s*u/d,s-=s-s*u/d),u>d&&(i=h-h*d/u,h-=h-h*d/u),e.drawImage(n,i,l,h,s,o,r,a,c),{sx:i,sy:l,sw:h,sh:s,x:o,y:r,w:a,h:c}})(pe.context(),{x:e.x,y:e.y,w:e.w,h:e.h},e.image)),!0===Boolean(e.clipMinCenter)&&(t=((e,t,n)=>{var{x:o,y:r,w:a,h:c}=t;if(0===n.width||0===n.height)return;var i=n.width,l=n.height;const h=a/i,s=c/l;return h>s&&(o+=(a-a*s/h)/2,a-=a-a*s/h),s>h&&(r+=(c-c*h/s)/2,c-=c-c*h/s),e.drawImage(n,0,0,i,l,o,r,a,c),{sx:0,sy:0,sw:i,sh:l,x:o,y:r,w:a,h:c}})(pe.context(),{x:e.x,y:e.y,w:e.w,h:e.h},e.image)),!0!==Boolean(e.clipMaxCenter)&&!0!==Boolean(e.clipMinCenter)&&((e,t,n)=>{var{x:o,y:r,w:a,h:c}=t;if(0!==n.width&&0!==n.height){var i=n.width,l=n.height;e.drawImage(n,0,0,i,l,o,r,a,c)}})(pe.context(),{x:e.x,y:e.y,w:e.w,h:e.h},e.image)),!0===Boolean(t)&&!0===Boolean(e.onClipPosition)&&e.onClipPosition(t),ue.postprocessing(e),e.children},ce=(e,t)=>{var n=0,o=!1,r=[];return t.forEach((t=>{!1===o&&(n+t.w<e.w||n+t.w===e.w)&&r.push(t),!1===o&&(n+t.w<e.w||n+t.w===e.w)&&(n+=t.w),n+t.w>e.w&&(o=!0)})),{result:r,rest:t.filter(((e,t)=>t>r.length-1))}},ie=(e,t)=>{var n=0,o=!1,r=[];return t.forEach((t=>{!1===o&&(n+t.h<e.h||n+t.h===e.h)&&r.push(t),!1===o&&(n+t.h<e.h||n+t.h===e.h)&&(n+=t.h),n+t.y>e.h&&(o=!0)})),{result:r,rest:t.filter(((e,t)=>t>r.length-1))}},le={horizontalForward:(e,t)=>{var n=0;return t.forEach((t=>{t.x=e.x+n,n+=t.w})),t},horizontalReverse:(e,t)=>{var n=0;return t.forEach((t=>{t.x=e.x+e.w-t.w-n,n+=t.w})),t},horizontalCenter:(e,t)=>{var n=0,o=A.add(t).w;return t.forEach((t=>{t.x=e.x+(e.w-o)/2+n,n+=t.w})),t},horizontalAround:(e,t)=>{var n=0,o=A.add(t).w;return t.forEach(((r,a)=>{r.x=e.x+(e.w-o)/(t.length-1)*a+n,n+=r.w})),t},horizontalBetween:(e,t)=>{var n=0,o=A.add(t).w;return t.forEach(((r,a)=>{r.x=e.x+(e.w-o)/(t.length+1)*(a+1)+n,n+=r.w})),t},horizontalAlignLeft:(e,t)=>(t.forEach(((t,n)=>{t.x=e.x})),t),horizontalAlignRight:(e,t)=>(t.forEach(((t,n)=>{t.x=e.x+e.w})),t),horizontalAlignCenter:(e,t)=>(t.forEach(((t,n)=>{t.x=e.x+(e.w-t.w)/2})),t),verticalForward:(e,t)=>{var n=0;return t.forEach((t=>{t.y=e.y+n,n+=t.h})),t},verticalReverse:(e,t)=>{var n=0;return t.forEach((t=>{t.y=e.y+e.h-t.h-n,n+=t.h})),t},verticalCenter:(e,t)=>{var n=0,o=A.add(t).h;return t.forEach((t=>{t.y=e.y+(e.h-o)/2+n,n+=t.h})),t},verticalAround:(e,t)=>{var n=0,o=A.add(t).h;return t.forEach(((r,a)=>{r.y=e.y+(e.h-o)/(t.length-1)*a+n,n+=r.h})),t},verticalBetween:(e,t)=>{var n=0,o=A.add(t).h;return t.forEach(((r,a)=>{r.y=e.y+(e.h-o)/(t.length+1)*(a+1)+n,n+=r.h})),t},verticalAlignTop:(e,t)=>(t.forEach(((t,n)=>{t.y=e.y})),t),verticalAlignBottom:(e,t)=>(t.forEach(((t,n)=>{t.y=e.y+e.h})),t),verticalAlignCenter:(e,t)=>(t.forEach(((t,n)=>{t.y=e.y+(e.h-t.h)/2})),t)},he=e=>{ue.preprocessing(e);const t=Object.keys(e).findIndex((e=>"horizontalForward"===e||"horizontalReverse"===e||"horizontalCenter"===e||"horizontalAround"===e||"horizontalAround"===e||"horizontalBetween"===e)),n=Object.keys(e).findIndex((e=>"verticalForward"===e||"verticalReverse"===e||"verticalCenter"===e||"verticalAround"===e||"verticalAround"===e||"verticalBetween"===e)),o=e.children.flat().filter((e=>"layout"===e.alternate)).map((e=>e.props));return!0===Boolean(e.wrap)&&n>-1&&n>-1&&n<t&&((e,t,n,o)=>{for(var r=[],a=t;a.length;){const t=ce(e,a);r=[...r,t.result],a=t.rest}n(e,r.map((t=>Object({y:e.y,h:A.hmax(t)})))).forEach(((e,t)=>r[t].forEach((t=>t.y=e.y)))),r.forEach((t=>o({x:e.x,y:t.y,w:e.w},t)))})({x:e.x,y:e.y,w:e.w,h:e.h},o,le[Object.keys(e)[n]],le[Object.keys(e)[t]]),!0===Boolean(e.wrap)&&t>-1&&n>-1&&t<n&&((e,t,n,o)=>{for(var r=[],a=t;a.length;){const t=ie(e,a);r=[...r,t.result],a=t.rest}n(e,r.map((t=>Object({x:e.x,w:A.wmax(t)})))).forEach(((e,t)=>r[t].forEach((t=>t.x=e.x)))),r.forEach((t=>o({y:e.y,h:e.h},t)))})({x:e.x,y:e.y,w:e.w,h:e.h},o,le[Object.keys(e)[t]],le[Object.keys(e)[n]]),!1===Boolean(e.wrap)&&Object.keys(e).forEach((t=>{!0===Boolean(e[t])&&le[t]&&le[t]({x:e.x,y:e.y,w:e.w,h:e.h},o)})),e.children.forEach(((t,n)=>{"function"==typeof t&&(e.children[n]=t({x:e.x,y:e.y,w:e.w,h:e.h}))})),ue.postprocessing(e),e.children},se=e=>{ue.preprocessing(e);var t=new Array(4).fill(0);return e.radius&&"object"==typeof t&&Array.isArray(t)&&(t=e.radius),e.radius&&"number"==typeof t&&(t=new Array(4).fill(e.radius)),pe.context().moveTo(e.x,e.y+t[0]),pe.context().arcTo(e.x,e.y,e.x+t[0],e.y,t[0]),pe.context().lineTo(e.x+e.w-t[1],e.y),pe.context().arcTo(e.x+e.w,e.y,e.x+e.w,e.y+t[1],t[1]),pe.context().lineTo(e.x+e.w,e.y+e.h-t[2]),pe.context().arcTo(e.x+e.w,e.y+e.h,e.x+e.w-t[2],e.y+e.h,t[2]),pe.context().lineTo(e.x+t[3],e.y+e.h),pe.context().arcTo(e.x,e.y+e.h,e.x,e.y+e.h-t[3],t[3]),ue.postprocessing(e),e.children},de=e=>{ue.preprocessing(e);const t=((e,t,n)=>{var o="",r=[];return n.split("").forEach((n=>{const a=e.measureText(o+n).width;a>t&&r.push({text:o,w:a,h:Number(e.font.match(/\d+px/)[0].replace("px",""))}),a>t&&(o=""),o+=n})),o&&r.push({text:o,w:e.measureText(o).width,h:Number(e.font.match(/\d+px/)[0].replace("px",""))}),r})(pe.context(),e.w,e.text);return t.forEach(((t,n)=>{!0===Boolean(e.fillText)&&pe.context().fillText(t.text,e.x,e.y+t.h+n*t.h+n*(e.gap||0)),!0===Boolean(e.strokeText)&&pe.context().strokeText(t.text,e.x,e.y+t.h+n*t.h+n*(e.gap||0))})),ue.postprocessing(e),e.children},ue={render:e=>"arc"===e?oe:"clip"===e?re:"image"===e?ae:"layout"===e?he:"rect"===e?se:"text"===e?de:void 0,preprocessing:e=>{pe.context().save(),void 0!==e.globalAlpha&&(pe.context().globalAlpha=e.globalAlpha),void 0!==e.font&&(pe.context().font=e.font),void 0!==e.fillStyle&&(pe.context().fillStyle=e.fillStyle),void 0!==e.strokeStyle&&(pe.context().strokeStyle=e.strokeStyle),!0===Boolean(e.beginPath)&&pe.context().beginPath()},postprocessing:e=>{!0===Boolean(e.fill)&&pe.context().fill(),!0===Boolean(e.stroke)&&pe.context().stroke(),te.useEventListener("click",e.onClick),te.useEventListener("touchstart",e.onTouchStart),te.useEventListener("touchmove",e.onTouchMove),te.useEventListener("touchend",e.onTouchEnd),te.useEventListener("mousedown",e.onMouseUp),te.useEventListener("mousemove",e.onMouseMove),te.useEventListener("mouseup",e.onMouseUp),ne(e.onDragEnable,e.onDrag),!0===Boolean(e.isolated)&&pe.context().restore(),Q.useEffectLoopEnd((()=>{!0!==Boolean(e.isolated)&&pe.context().restore()}),[])}};var xe,ye,fe;const ve=e=>{e&&"object"==typeof e&&(!0===Array.isArray(e)&&e.forEach((e=>ve(e))),!1===Array.isArray(e)&&"function"==typeof e.alternate&&Q.compoment(e.alternate,{...e.props,children:e.children},ve),!1===Array.isArray(e)&&"string"==typeof e.alternate&&Q.compoment(ue.render(e.alternate),{...e.props,children:e.children},ve))},pe={dpr:()=>xe,canvas:()=>ye,context:()=>fe,mount:(e,t)=>{const n=document.createElement("style");n.innerHTML=["::-webkit-scrollbar { width: 0; height: 0; }","body { padding: 0; margin: 0; }","body, body * { overscroll-behavior: none; }"].join(" "),document.head.appendChild(n),window.addEventListener("wheel",(e=>e.preventDefault()),{passive:!1}),window.addEventListener("touchmove",(e=>e.preventDefault()),{passive:!1}),window.addEventListener("contextmenu",(e=>e.preventDefault()),{passive:!1}),xe=2,ye=document.createElement("canvas"),fe=ye.getContext("2d");const o=()=>{ye.width=window.innerWidth*xe,ye.height=window.innerHeight*xe,ye.style.width="100%",ye.style.height="100%",ye.coordinate=A.coordinate({x:0,y:0,w:ye.width,h:ye.height})};return ye.style.position="absolute",ye.style.width="100%",ye.style.height="100%",ye.style.background="black",ye.style.overflow="hidden",o(),window.addEventListener("resize",(()=>{o(),Q.shouldRender()})),document.body.appendChild(ye),te.addEventListenerWithCanvas(ye),Q.mount((()=>{fe.clearRect(0,0,ye.width,ye.height),ve(e)}),t.frameTimeDiffMax),{render:Q.render}}};function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},we.apply(null,arguments)}const ge=function(){return Q.createElement(Q.Fragment,null,Q.createElement(V,{x:pe.canvas().coordinate.x,y:pe.canvas().coordinate.y,w:pe.canvas().coordinate.w,h:pe.canvas().coordinate.h,gap:100,color:"rgba(255, 255, 255, 1)"}),Q.createElement("layout",{x:pe.canvas().coordinate.x,y:pe.canvas().coordinate.y,w:pe.canvas().coordinate.w,h:pe.canvas().coordinate.h,flow:["horizontal","verticalAlign"],horizontal:"center",verticalAlign:"center"},Q.createElement("layout",{w:300,h:300,flow:["verticalAlign","horizontalAlign"],verticalAlign:"center",horizontalAlign:"center"},Q.createElement("layout",{w:280,h:280},(e=>Q.createElement("rect",we({isolated:!0,fillStyle:"rgba(255, 0, 0, 1)"},e),Q.createElement("clip",e,Q.createElement("arc",{isolated:!0,fill:!0,fillStyle:"rgba(255, 255, 255, 1)",x:e.x,y:e.y,radius:120,sAngle:0,eAngle:2*Math.PI,counterclockwise:!1}),Q.createElement("arc",{isolated:!0,fill:!0,fillStyle:"rgba(255, 255, 255, 1)",x:e.x+e.w,y:e.y+e.h,radius:120,sAngle:0,eAngle:2*Math.PI,counterclockwise:!1}))))))))};pe.mount(Q.createElement(ge,null),{frameTimeDiffMax:12}).render()})();