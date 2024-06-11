(()=>{"use strict";const e=e=>e.x,n=e=>e.x+e.w,t=e=>e.y,o=e=>e.y+e.h,r=r=>Object({...r,l:e(r),r:n(r),t:t(r),b:o(r)}),a=e=>e.x+e.w/2,i=e=>e.y+e.h/2,l=e=>e.x,c=e=>e.y,h=e=>e.x,s=e=>e.y+e.h,d=e=>e.x+e.w,u=e=>e.y,p=e=>e.x+e.w,f=e=>e.y+e.h,v=e=>Object({...e,cx:a(e),cy:i(e),ltx:l(e),lty:c(e),lbx:h(e),lby:s(e),rtx:d(e),rty:u(e),rbx:p(e),rby:f(e)}),y=e=>.01*Math.min(e.w,e.h),g=e=>.01*Math.max(e.w,e.h),m=e=>.01*e.w,w=e=>.01*e.h,x=e=>Object({...e,vmin:y(e),vmax:g(e),vw:m(e),vh:w(e)}),E=e=>Object({x:e.x,y:e.y,w:e.w,h:e.h,...r(e),...v(e),...x(e)}),b=g,A=E,k={add:e=>e.reduce(((e,n)=>Object({x:e.x+(n.x||0),y:e.y+(n.y||0),w:e.w+(n.w||0),h:e.h+(n.h||0)})),{x:0,y:0,w:0,h:0}),box:e=>e.reduce(((e,n)=>Object({x:n.x?Math.min(e.x,n.x):e.x,y:n.y?Math.min(e.y,n.y):e.y,w:n.x&&n.w?Math.max(e.w,n.x+n.w):e.w,h:n.y&&n.h?Math.max(e.h,n.y+n.h):e.h})),{x:0,y:0,w:0,h:0}),wmin:e=>e.reduce(((e,n)=>n.w?Math.min(n.w,e):e),0),wmax:e=>e.reduce(((e,n)=>n.w?Math.max(n.w,e):e),0),hmin:e=>e.reduce(((e,n)=>n.h?Math.min(n.h,e):e),0),hmax:e=>e.reduce(((e,n)=>n.h?Math.max(n.h,e):e),0)},z=k;var M=[],B=[],C=0,I=0,P={alternate:"root",children:[]},T=P,L=!1,X=!1,Y=[],S=void 0,R=0,O=[],j=void 0,D=[];const F=e=>{e.hooks.filter((e=>e.type===G&&e.effectPrevious&&"function"==typeof e.effectPrevious)).forEach((e=>Y.push((()=>e.effectPrevious())))),e.hooks.filter((e=>e.type===J&&e.effectPrevious&&"function"==typeof e.effectPrevious)).forEach((e=>e.effectPrevious())),e.children.forEach((e=>F(e)))},U=e=>{T=e,S.children[R]=e,S=e,R=0,B.push(0),O.push({hooks:e.hooks,index:0}),j=O[O.length-1]},q=e=>{T=e,e.children.filter(((e,n)=>n>R||n===R)).forEach((e=>F(e))),e.children=e.children.filter(((e,n)=>n<R)),S=e.parent,R=S.children.findIndex((n=>n===e))+1,M=M.filter(((e,n)=>n<M.length-B[B.length-1])),B=B.filter(((e,n)=>n<B.length-1)),O=O.filter(((e,n)=>n<O.length-1)),j=O[O.length-1]},W=()=>{for(L=!0,C=performance.now(),S=P,R=0,D.forEach((e=>e()));0!==Y.length;)Y.shift()();const e=()=>{requestAnimationFrame((()=>{const n=performance.now();n-C<I&&e(),(n-C>I||n-C===I)&&(L=!1),(n-C>I||n-C===I)&&W()}))};X&&e(),!1===X&&(L=!1),X=!1},H=e=>{var n;return void 0===n&&(n=j.hooks[j.index]),void 0===n&&(n={state:e}),j.hooks[j.index]=n,[n.state,e=>{"function"==typeof e&&(n.state=e(n.state)),"function"!=typeof e&&(n.state=e),!0===L&&(X=!0),!1===L&&requestAnimationFrame(W)}]},N=e=>{var n;return void 0===n&&(n=j.hooks[j.index]),void 0===n&&(n={current:e}),j.hooks[j.index]=n,n},G=(e,n)=>{var t;void 0===t&&(t=j.hooks[j.index]),void 0===t&&(t={effect:e}),j.hooks[j.index]=t,(void 0===t.dependence||t.dependence.some(((e,t)=>e!==n[t])))&&Y.push((()=>t.effectPrevious=t.effectPrevious&&"function"==typeof t.effectPrevious?t.effectPrevious():void 0)),(void 0===t.dependence||t.dependence.some(((e,t)=>e!==n[t])))&&Y.push((()=>t.effectPrevious=e())),t.dependence=n},J=(e,n)=>{var t;void 0===t&&(t=j.hooks[j.index]),void 0===t&&(t={effect:e}),j.hooks[j.index]=t,(void 0===t.dependence||t.dependence.some(((e,t)=>e!==n[t])))&&(t.effectPrevious=t.effectPrevious&&"function"==typeof t.effectPrevious?t.effectPrevious():void 0),(void 0===t.dependence||t.dependence.some(((e,t)=>e!==n[t])))&&(t.effectPrevious=e()),t.dependence=n},K=(e,n)=>{var t;return void 0===t&&(t=j.hooks[j.index]),void 0===t&&(t={memo:e}),j.hooks[j.index]=t,(void 0===t.dependence||t.dependence.some(((e,t)=>e!==n[t])))&&(t.memo=e()),t.dependence=n,t.memo},Q=(e,n)=>{var t;return void 0===t&&(t=j.hooks[j.index]),void 0===t&&(t={callback:e}),j.hooks[j.index]=t,(void 0===t.dependence||t.dependence.some(((e,t)=>e!==n[t])))&&(t.callback=e),t.dependence=n,t.callback},V={renderNode:()=>T,mount:(e,n)=>(D.push(e),I=n,V),render:W,componentRunBefore:U,componentRunAfter:q,compoment:(e,n,t)=>{var o,r=Object(n).key,a=Object(n).ref,i=S.children.findIndex((n=>void 0!==n.key&&n.key===r&&n.alternate===e));-1!==i&&S.children.splice(R,0,S.children.splice(i,1)[0]),void 0===o&&S.children[R]&&S.children[R].alternate===e&&S.children[R].key===r&&(o=S.children[R]),void 0===o&&(o={key:r,alternate:e,children:[],hooks:[],props:n}),o!==S.children[R]&&S.children[R]&&F(S.children[R]),o.parent=S,U(o),t(o.alternate(n)),q(o),"function"==typeof a&&a(o)},createElement:(e,n,...t)=>({react:!0,alternate:e,props:n,children:t}),Fragment:e=>e.children,contextProvider:e=>{M.push(e),B[B.length-1]=B[B.length-1]+1},contextProviderExtend:e=>{M.push({...M[M.length-1],...e}),B[B.length-1]=B[B.length-1]+1},shouldRender:()=>{!0===L&&(X=!0),!1===L&&requestAnimationFrame(W)},useContext:()=>M[M.length-1],useState:H,useRef:N,useEffect:G,useEffectImmediate:J,useMemo:K,useCallback:Q};Object.keys(V).filter((e=>[H,N,G,J,K,Q].includes(V[e]))).forEach((e=>{return V[e]=(n=V[e],(...e)=>{try{if(void 0!==j.hooks[j.index]&&j.hooks[j.index].type!==n)throw Error(n);return n(...e)}finally{j.hooks[j.index].type=n,j.index=j.index+1}});var n}));const Z=V,$=e=>new Array(Math.ceil(100*b(e.position)/e.gap/2)).fill().map(((n,t)=>0===t?Z.createElement(Z.Fragment,null,Z.createElement("rect",{save:!0,fill:!0,x:e.position.x,y:e.position.cy,w:100*b(e.position),h:.1*b(e.position),globalAlpha:.5,fillStyle:e.color}),Z.createElement("rect",{save:!0,fill:!0,x:e.position.cx,y:e.position.y,w:.1*b(e.position),h:100*b(e.position),globalAlpha:.5,fillStyle:e.color})):0!==t?Z.createElement(Z.Fragment,null,Z.createElement("rect",{save:!0,fill:!0,x:e.position.x,y:e.position.cy+e.gap*t,w:100*b(e.position),h:.1*b(e.position),globalAlpha:.25,fillStyle:e.color}),Z.createElement("rect",{save:!0,fill:!0,x:e.position.x,y:e.position.cy-e.gap*t,w:100*b(e.position),h:.1*b(e.position),globalAlpha:.25,fillStyle:e.color}),Z.createElement("rect",{save:!0,fill:!0,x:e.position.cx+e.gap*t,y:e.position.y,w:.1*b(e.position),h:100*b(e.position),globalAlpha:.25,fillStyle:e.color}),Z.createElement("rect",{save:!0,fill:!0,x:e.position.cx-e.gap*t,y:e.position.y,w:.1*b(e.position),h:100*b(e.position),globalAlpha:.25,fillStyle:e.color})):void 0));var _=[];const ee=(e,n)=>{_=[..._,{type:e,callback:n}]},ne=(e,n)=>{_=_.filter((t=>t.type!==e||t.callback!==n))},te={addEventListener:ee,removeEventListener:ne,clearEventListener:()=>{_=[]},useEventListener:(e,n)=>{Z.useEffectImmediate((()=>ee(e,n)),[e,n]),Z.useEffectImmediate((()=>()=>ne(e,n)),[e,n])},addEventListenerWithCanvas:e=>{new Array("click","touchstart","touchmove","touchend","mousedown","mousemove","mouseup").forEach((n=>{e.addEventListener(n,(e=>((e,n)=>{const t=_.filter((e=>e.type===n)).sort(((e,n)=>{const t=void 0===e.option||void 0===e.option.priority?0:e.option.priority;return(void 0===n.option||void 0===n.option.priority?0:n.option.priority)-t}));var o=!1;t.forEach((n=>{var t,r;void 0===window.ontouchstart&&(t=e.pageX),void 0===window.ontouchstart&&(r=e.pageY),void 0!==window.ontouchstart&&(t=e.changedTouches[0].pageX),void 0!==window.ontouchstart&&(r=e.changedTouches[0].pageY),t*=Be.dpr(),r*=Be.dpr();const a={native:e,x:t,y:r,stopPropagation:()=>o=!0};!1===o&&n.callback(a)}))})(e,n)),{passive:!0})}))}},oe=te,re=e=>{if(void 0===window.ontouchstart){var{onStart:n,onMove:t,onEnd:o}=(e=>{const n=Z.useRef(),t=Z.useRef(),o=Z.useCallback((n=>{e.onChange&&e.onChange(n)}),[e.onChange]);return{onStart:Z.useCallback((r=>{if(!1===e.enable)return;const a=r.pageX,i=r.pageY;n.current={x:a,y:i},t.current={x:a,y:i},o({type:"mouse",status:"afterStart",e:r,x:a,y:i,changedX:0,changedY:0,continuedX:0,continuedY:0})}),[e.enable,e.onChange]),onMove:Z.useCallback((r=>{if(!1===e.enable)return;if(void 0===t.current)return;const a=r.pageX,i=r.pageY,l=a-t.current.x,c=i-t.current.y,h=t.current.x-n.current.x,s=t.current.y-n.current.y;t.current={x:a,y:i},o({type:"mouse",status:"afterMove",e:r,x:a,y:i,changedX:l,changedY:c,continuedX:h,continuedY:s})}),[e.enable,e.onChange]),onEnd:Z.useCallback((r=>{if(!1===e.enable)return;if(void 0===t.current)return;const a=r.pageX,i=r.pageY,l=a-t.current.x,c=i-t.current.y,h=t.current.x-n.current.x,s=t.current.y-n.current.y;o({type:"mouse",status:"beforeEnd",e:r,x:a,y:i,changedX:l,changedY:c,continuedX:h,continuedY:s}),n.current=void 0,t.current=void 0,o({type:"mouse",status:"afterEnd",e:r,x:a,y:i,changedX:l,changedY:c,continuedX:h,continuedY:s})}),[e.enable,e.onChange])}})({onChange:e.onChange,enable:e.enable});oe.useEventListener("mousedown",n,e.startOption),oe.useEventListener("mousemove",t,e.moveOption),oe.useEventListener("mouseup",o,e.endOption)}if(void 0!==window.ontouchstart){var{onStart:n,onMove:t,onEnd:o}=(e=>{const n=Z.useRef(),t=Z.useRef(),o=Z.useCallback((n=>{e.onChange&&e.onChange(n),e.onChangeMemo&&e.onChangeMemo(n)}),[e.onChange]);return{onStart:Z.useCallback((r=>{if(!1===e.enable)return;const a=[...r.changedTouches].map((e=>e.pageX)),i=[...r.changedTouches].map((e=>e.pageY));n.current={x:a,y:i},t.current={x:a,y:i};const l=[],c=[],h=[],s=[];a.forEach(((e,n)=>{l[n]=0,h[n]=0})),i.forEach(((e,n)=>{c[n]=0,s[n]=0})),o({type:"touch",status:"afterStart",e:r,x:a,y:i,changedX:l,changedY:c,continuedX:h,continuedY:s})}),[e.enable,e.onChange]),onMove:Z.useCallback((r=>{if(!1===e.enable)return;if(void 0===t.current)return;const a=[...r.changedTouches].map((e=>e.pageX)),i=[...r.changedTouches].map((e=>e.pageY)),l=[],c=[],h=[],s=[];a.forEach(((e,o)=>{l[o]=e-t.current.x[o],h[o]=t.current.x[o]-n.current.x[o]})),i.forEach(((e,o)=>{c[o]=e-t.current.y[o],s[o]=t.current.y[o]-n.current.y[o]})),t.current={x:a,y:i},o({type:"touch",status:"afterMove",e:r,x:a,y:i,changedX:l,changedY:c,continuedX:h,continuedY:s})}),[e.enable,e.onChange]),onEnd:Z.useCallback((r=>{if(!1===e.enable)return;if(void 0===t.current)return;const a=[...r.changedTouches].map((e=>e.pageX)),i=[...r.changedTouches].map((e=>e.pageY)),l=[],c=[],h=[],s=[];a.forEach(((e,o)=>{l[o]=e-t.current.x[o],h[o]=t.current.x[o]-n.current.x[o]})),i.forEach(((e,o)=>{c[o]=e-t.current.y[o],s[o]=t.current.y[o]-n.current.y[o]})),o({type:"touch",status:"beforeEnd",e:r,x:a,y:i,changedX:l,changedY:c,continuedX:h,continuedY:s}),n.current=void 0,t.current=void 0,o({type:"touch",status:"afterEnd",e:r,x:a,y:i,changedX:l,changedY:c,continuedX:h,continuedY:s})}),[e.enable,e.onChange])}})({onChange:e.onChange,enable:e.enable});oe.useEventListener("touchstart",n,e.startOption),oe.useEventListener("touchmove",t,e.moveOption),oe.useEventListener("touchend",o,e.endOption)}},ae=e=>(be.componentRunBefore(e),((e,n,t,o,r,a)=>{var{x:i,y:l,w:c,h}=n;e.beginPath(),e.arc(i,l,t,o,r,a)})(Be.context(),{x:e.x,y:e.y,w:e.w,h:e.h},e.radius,e.sAngle,e.eAngle,e.counterclockwise),be.componentRunAfter(e),e.children),ie=e=>(be.componentRunBefore(e),!0!==Boolean(e.clipmin)&&!0===Boolean(e.clipmax)&&((e,n,t)=>{var{x:o,y:r,w:a,h:i}=n;if(0===t.width||0===t.height)return;var l=0,c=0,h=t.width,s=t.height;const d=a/h,u=i/s;d>u&&(c=s-s*u/d,s-=s-s*u/d),u>d&&(l=h-h*d/u,h-=h-h*d/u),e.drawImage(t,l,c,h,s,o,r,a,i)})(Be.context(),{x:e.x,y:e.y,w:e.w,h:e.h},e.image),!0===Boolean(e.clipmin)&&!0!==Boolean(e.clipmax)&&((e,n,t)=>{var{x:o,y:r,w:a,h:i}=n;if(0===t.width||0===t.height)return;var l=t.width,c=t.height;const h=a/l,s=i/c;h>s&&(o+=(a-a*s/h)/2,a-=a-a*s/h),s>h&&(r+=(i-i*h/s)/2,i-=i-i*h/s),e.drawImage(t,0,0,l,c,o,r,a,i)})(Be.context(),{x:e.x,y:e.y,w:e.w,h:e.h},e.image),!0!==Boolean(e.clipmin)&&!0!==Boolean(e.clipmax)&&((e,n,t)=>{var{x:o,y:r,w:a,h:i}=n;if(0!==t.width&&0!==t.height){var l=t.width,c=t.height;e.drawImage(t,0,0,l,c,o,r,a,i)}})(Be.context(),{x:e.x,y:e.y,w:e.w,h:e.h},e.image),be.componentRunAfter(e),e.children),le=(e,n)=>{var t=0;return n.forEach((n=>{n.x=e.x+t,t+=n.w})),n},ce=(e,n)=>{var t=0;return n.forEach((n=>{n.x=e.x+e.w-n.w-t,t+=n.w})),n},he=(e,n)=>{var t=0,o=z.add(n).w;return n.forEach((n=>{n.x=e.x+(e.w-o)/2+t,t+=n.w})),n},se=(e,n)=>{var t=0,o=z.add(n).w;return n.forEach(((r,a)=>{r.x=e.x+(e.w-o)/(n.length-1)*a+t,t+=r.w})),n},de=(e,n)=>{var t=0,o=z.add(n).w;return n.forEach(((r,a)=>{r.x=e.x+(e.w-o)/(n.length+1)*(a+1)+t,t+=r.w})),n},ue=(e,n)=>{var t=0,o=!1,r=[];return n.forEach((n=>{!1===o&&(t+n.w<e.w||t+n.w===e.w)&&r.push(n),!1===o&&(t+n.w<e.w||t+n.w===e.w)&&(t+=n.w),t+n.w>e.w&&(o=!0)})),{result:r,rest:n.filter(((e,n)=>n>r.length-1))}},pe=(e,n,t)=>{for(var o=[],r=n;r.length;){const n=ue(e,r);o=[...o,t(e,n.result)],r=n.rest}return{result:o,rest:n.filter(((e,n)=>n<o.flat().length-1))}},fe=(e,n)=>{var t=0;return n.forEach((n=>{n.y=e.y+t,t+=n.h})),n},ve=(e,n)=>{var t=0;return n.forEach((n=>{n.y=e.y+e.h-n.h-t,t+=n.h})),n},ye=(e,n)=>{var t=0,o=z.add(n).h;return n.forEach((n=>{n.y=e.y+(e.h-o)/2+t,t+=n.h})),n},ge=(e,n)=>{var t=0,o=z.add(n).h;return n.forEach(((r,a)=>{r.y=e.y+(e.h-o)/(n.length-1)*a+t,t+=r.h})),n},me=(e,n)=>{var t=0,o=z.add(n).h;return n.forEach(((r,a)=>{r.y=e.y+(e.h-o)/(n.length+1)*(a+1)+t,t+=r.h})),n},we=(e,n,t)=>{for(var o=[],r=n;r.length;)o=[...o,t(e,r).result],r=t(e,r).rest;return{result:o,rest:n.filter(((e,n)=>n<o.flat().length-1))}},xe=e=>(be.componentRunBefore(e),"object"==typeof e.children&&e.children.every((e=>"layout"===e.alternate))&&e.flow&&(e=>{e.flow.forEach((n=>{"horizontal"===n&&(e=>{if(!0===Boolean(e.horizontalAccommodate)){const n=ue(e,e.children.map((e=>e.props))).result;e.children=e.children.filter(((e,t)=>t<n.length))}!1===Boolean(e.horizontalInfinite)&&"forward"===e.horizontal&&le(e,e.children.map((e=>e.props))),!1===Boolean(e.horizontalInfinite)&&"reverse"===e.horizontal&&ce(e,e.children.map((e=>e.props))),!1===Boolean(e.horizontalInfinite)&&"center"===e.horizontal&&he(e,e.children.map((e=>e.props))),!1===Boolean(e.horizontalInfinite)&&"around"===e.horizontal&&se(e,e.children.map((e=>e.props))),!1===Boolean(e.horizontalInfinite)&&"between"===e.horizontal&&de(e,e.children.map((e=>e.props))),!0===Boolean(e.horizontalInfinite)&&"forward"===e.horizontal&&pe(e,e.children.map((e=>e.props)),le),!0===Boolean(e.horizontalInfinite)&&"reverse"===e.horizontal&&pe(e,e.children.map((e=>e.props)),ce),!0===Boolean(e.horizontalInfinite)&&"center"===e.horizontal&&pe(e,e.children.map((e=>e.props)),he),!0===Boolean(e.horizontalInfinite)&&"around"===e.horizontal&&pe(e,e.children.map((e=>e.props)),se),!0===Boolean(e.horizontalInfinite)&&"between"===e.horizontal&&pe(e,e.children.map((e=>e.props)),de)})(e),"vertical"===n&&(e=>{if(!0===Boolean(e.verticalAccommodate)){const i=(n=e,t=e.children.map((e=>e.props)),o=0,r=!1,a=[],t.forEach((e=>{!1===r&&(o+e.h<n.h||o+e.h===n.h)&&a.push(e),!1===r&&(o+e.h<n.h||o+e.h===n.h)&&(o+=e.h),o+e.y>n.h&&(r=!0)})),{result:a,rest:t.filter(((e,n)=>n>a.length-1))}).result;e.children=e.children.filter(((e,n)=>n<i.length))}var n,t,o,r,a;!1===Boolean(e.verticalInfinite)&&"forward"===e.vertical&&fe(e,e.children.map((e=>e.props))),!1===Boolean(e.verticalInfinite)&&"reverse"===e.vertical&&ve(e,e.children.map((e=>e.props))),!1===Boolean(e.verticalInfinite)&&"center"===e.vertical&&ye(e,e.children.map((e=>e.props))),!1===Boolean(e.verticalInfinite)&&"around"===e.vertical&&ge(e,e.children.map((e=>e.props))),!1===Boolean(e.verticalInfinite)&&"between"===e.vertical&&me(e,e.children.map((e=>e.props))),!0===Boolean(e.verticalInfinite)&&"forward"===e.vertical&&we(e,e.children.map((e=>e.props)),fe),!0===Boolean(e.verticalInfinite)&&"reverse"===e.vertical&&we(e,e.children.map((e=>e.props)),ve),!0===Boolean(e.verticalInfinite)&&"center"===e.vertical&&we(e,e.children.map((e=>e.props)),ye),!0===Boolean(e.verticalInfinite)&&"around"===e.vertical&&we(e,e.children.map((e=>e.props)),ge),!0===Boolean(e.verticalInfinite)&&"between"===e.vertical&&we(e,e.children.map((e=>e.props)),me)})(e),"horizontalAlign"===n&&(e=>{var n;"left"===e.horizontalAlign&&(n=e,e.children.map((e=>e.props)).forEach(((e,t)=>{e.x=n.x}))),"right"===e.horizontalAlign&&((e,n)=>{n.forEach(((n,t)=>{n.x=e.x+e.w}))})(e,e.children.map((e=>e.props))),"center"===e.horizontalAlign&&((e,n)=>{n.forEach(((n,t)=>{n.x=e.x+(e.w-n.w)/2}))})(e,e.children.map((e=>e.props)))})(e),"verticalAlign"===n&&(e=>{var n;"top"===e.verticalAlign&&(n=e,e.children.map((e=>e.props)).forEach(((e,t)=>{e.y=n.y}))),"bottom"===e.verticalAlign&&((e,n)=>{n.forEach(((n,t)=>{n.y=e.y+e.h}))})(e,e.children.map((e=>e.props))),"center"===e.verticalAlign&&((e,n)=>{n.forEach(((n,t)=>{n.y=e.y+(e.h-n.h)/2}))})(e,e.children.map((e=>e.props)))})(e)}))})(e),be.componentRunAfter(e),e.children.map((n=>"function"==typeof n?n({x:e.x,y:e.y,w:e.w,h:e.h}):"object"==typeof n?n:void 0))),Ee=e=>(be.componentRunBefore(e),!0===Boolean(e.radius)&&((e,n,t)=>{var{x:o,y:r,w:a,h:i}=n;const l=Array.isArray(t)?t:new Array(4).fill(t);e.beginPath(),e.moveTo(o,r+l[0]),e.arcTo(o,r,o+l[0],r,l[0]),e.lineTo(o+a-l[1],r),e.arcTo(o+a,r,o+a,r+l[1],l[1]),e.lineTo(o+a,r+i-l[2]),e.arcTo(o+a,r+i,o+a-l[2],r+i,l[2]),e.lineTo(o+l[3],r+i),e.arcTo(o,r+i,o,r+i-l[3],l[3]),e.closePath()})(Be.context(),{x:e.x,y:e.y,w:e.w,h:e.h},e.radius),!0!==Boolean(e.radius)&&((e,n)=>{var{x:t,y:o,w:r,h:a}=n;e.beginPath(),e.moveTo(t,o),e.lineTo(t+r,o),e.lineTo(t+r,o+a),e.lineTo(t,o+a),e.closePath()})(Be.context(),{x:e.x,y:e.y,w:e.w,h:e.h}),be.componentRunAfter(e),e.children),be={render:e=>"layout"===e?xe:"rect"===e?Ee:"arc"===e?ae:"image"===e?ie:void 0,componentRunBefore:e=>{e.save&&Be.context().save()},componentRunAfter:e=>{e.globalAlpha&&(Be.context().globalAlpha=e.globalAlpha),e.fillStyle&&(Be.context().fillStyle=e.fillStyle),e.fill&&Be.context().fill(),e.save&&Be.context().restore(),e&&"function"==typeof e.onClick&&oe.useEventListener("click",e.onClick),e&&"function"==typeof e.onTouchStart&&oe.useEventListener("touchstart",e.onTouchStart),e&&"function"==typeof e.onTouchMove&&oe.useEventListener("touchmove",e.onTouchMove),e&&"function"==typeof e.onTouchEnd&&oe.useEventListener("touchend",e.onTouchEnd),e&&"function"==typeof e.onMouseUp&&oe.useEventListener("mousedown",e.onMouseUp),e&&"function"==typeof e.onMouseMove&&oe.useEventListener("mousemove",e.onMouseMove),e&&"function"==typeof e.onMouseUp&&oe.useEventListener("mouseup",e.onMouseUp),e&&"object"==typeof e.onDrag&&re(e.onDragOption)}};var Ae,ke,ze;const Me=e=>{e&&"object"==typeof e&&(!0===Array.isArray(e)&&e.forEach((e=>Me(e))),!1===Array.isArray(e)&&"function"==typeof e.alternate&&!0===e.react&&Z.compoment(e.alternate,{...e.props,children:e.children},Me),!1===Array.isArray(e)&&"string"==typeof e.alternate&&"layout"!==e.alternate&&Z.compoment(be.render(e.alternate),{...e.props,children:e.children},Me),!1===Array.isArray(e)&&"string"==typeof e.alternate&&"layout"===e.alternate&&Z.compoment(be.render(e.alternate),{...e.props,children:e.children},Me))},Be={dpr:()=>Ae,canvas:()=>ke,context:()=>ze,mount:(e,n)=>{const t=document.createElement("style");t.innerHTML=["::-webkit-scrollbar { width: 0; height: 0; }","body { padding: 0; margin: 0; }","body, body * { overscroll-behavior: none; }"].join(" "),document.head.appendChild(t),window.addEventListener("wheel",(e=>e.preventDefault()),{passive:!1}),window.addEventListener("touchmove",(e=>e.preventDefault()),{passive:!1}),window.addEventListener("contextmenu",(e=>e.preventDefault()),{passive:!1}),Ae=2,ke=document.createElement("canvas"),ze=ke.getContext("2d");const o=()=>{ke.width=window.innerWidth*Ae,ke.height=window.innerHeight*Ae,ke.style.width="100%",ke.style.height="100%",ke.coordinate=A({x:0,y:0,w:ke.width,h:ke.height})};return ke.style.position="absolute",ke.style.width="100%",ke.style.height="100%",ke.style.background="black",ke.style.overflow="hidden",o(),window.addEventListener("resize",(()=>{o(),Z.shouldRender()})),document.body.appendChild(ke),oe.addEventListenerWithCanvas(ke),Z.mount((()=>{ze.clearRect(0,0,ke.width,ke.height),Me(e)}),n.frameTimeDiffMax),{render:Z.render}}};function Ce(){return Ce=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ce.apply(null,arguments)}const Ie=function(){return Z.createElement(Z.Fragment,null,Z.createElement($,{position:Be.canvas().coordinate,gap:100,color:"rgba(255, 255, 255, 1)"}),Z.createElement("layout",{x:Be.canvas().coordinate.x,y:Be.canvas().coordinate.y,w:Be.canvas().coordinate.w,h:Be.canvas().coordinate.h,flow:["horizontal","verticalAlign"],horizontal:"center",verticalAlign:"center"},Z.createElement("layout",{w:100,h:100,flow:["verticalAlign","horizontalAlign"],verticalAlign:"center",horizontalAlign:"center"},Z.createElement("layout",{w:92,h:92,flow:["verticalAlign","horizontalAlign"],verticalAlign:"center",horizontalAlign:"center"},Z.createElement("layout",{w:0,h:0},(e=>Z.createElement("arc",Ce({save:!0,fill:!0,fillStyle:"rgba(255, 0, 0, 1)"},e,{radius:40,sAngle:0,eAngle:2*Math.PI,counterclockwise:!1})))))),Z.createElement("layout",{w:100,h:100,flow:["verticalAlign","horizontalAlign"],verticalAlign:"center",horizontalAlign:"center"},Z.createElement("layout",{w:92,h:92,flow:["verticalAlign","horizontalAlign"],verticalAlign:"center",horizontalAlign:"center"},Z.createElement("layout",{w:0,h:0},(e=>Z.createElement("arc",Ce({save:!0,fill:!0,fillStyle:"rgba(255, 0, 0, 1)"},e,{radius:16,sAngle:0,eAngle:2*Math.PI,counterclockwise:!1})))))),Z.createElement("layout",{w:100,h:100,flow:["verticalAlign","horizontalAlign"],verticalAlign:"center",horizontalAlign:"center"},Z.createElement("layout",{w:92,h:92,flow:["verticalAlign","horizontalAlign"],verticalAlign:"center",horizontalAlign:"center"},Z.createElement("layout",{w:0,h:0},(e=>Z.createElement("arc",Ce({save:!0,fill:!0,fillStyle:"rgba(255, 0, 0, 1)"},e,{radius:25,sAngle:.4*Math.PI,eAngle:1.5*Math.PI,counterclockwise:!1})))))),Z.createElement("layout",{w:100,h:100,flow:["verticalAlign","horizontalAlign"],verticalAlign:"center",horizontalAlign:"center"},Z.createElement("layout",{w:92,h:92,flow:["verticalAlign","horizontalAlign"],verticalAlign:"center",horizontalAlign:"center"},Z.createElement("layout",{w:0,h:0},(e=>Z.createElement("arc",Ce({save:!0,fill:!0,fillStyle:"rgba(255, 0, 0, 1)"},e,{radius:32,sAngle:1*Math.PI,eAngle:1.75*Math.PI,counterclockwise:!0}))))))))};Be.mount(Z.createElement(Ie,null),{frameTimeDiffMax:12}).render()})();