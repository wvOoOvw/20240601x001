(()=>{"use strict";const e={drawImage:(e,n,t)=>{var{x:o,y:r,w:i,h:a}=n;if(0!==t.width&&0!==t.height){var c=t.width,s=t.height;e.drawImage(t,0,0,c,s,o,r,i,a)}},drawImageClipMinCenter:(e,n,t)=>{var{x:o,y:r,w:i,h:a}=n;if(0===t.width||0===t.height)return;var c=t.width,s=t.height;const d=i/c,l=a/s;d>l&&(o+=(i-i*l/d)/2,i-=i-i*l/d),l>d&&(r+=(a-a*d/l)/2,a-=a-a*d/l),e.drawImage(t,0,0,c,s,o,r,i,a)},drawImageClipMaxCenter:(e,n,t)=>{var{x:o,y:r,w:i,h:a}=n;if(0===t.width||0===t.height)return;var c=0,s=0,d=t.width,l=t.height;const h=i/d,u=a/l;h>u&&(s=l-l*u/h,l-=l-l*u/h),u>h&&(c=d-d*h/u,d-=d-d*h/u),e.drawImage(t,c,s,d,l,o,r,i,a)},drawArc:(e,n,t,o,r,i)=>{var{x:a,y:c,w:s,h:d}=n;e.beginPath(),e.arc(a,c,t,o,r,i)},drawRect:(e,n)=>{var{x:t,y:o,w:r,h:i}=n;e.beginPath(),e.moveTo(t,o),e.lineTo(t+r,o),e.lineTo(t+r,o+i),e.lineTo(t,o+i),e.closePath()},drawRectRadius:(e,n,t)=>{var{x:o,y:r,w:i,h:a}=n;const c=Array.isArray(t)?t:new Array(4).fill(t);e.beginPath(),e.moveTo(o,r+c[0]),e.arcTo(o,r,o+c[0],r,c[0]),e.lineTo(o+i-c[1],r),e.arcTo(o+i,r,o+i,r+c[1],c[1]),e.lineTo(o+i,r+a-c[2]),e.arcTo(o+i,r+a,o+i-c[2],r+a,c[2]),e.lineTo(o+c[3],r+a),e.arcTo(o,r+a,o,r+a-c[3],c[3]),e.closePath()},drawText:(e,n,t)=>{var{x:o,y:r,w:i,h:a}=n;e.fillText(t,o,r)},drawTextCaculateLine:(e,n,t)=>{var{x:o,y:r,w:i,h:a}=n,c="",s=[];return t.split("").forEach((n=>{const t=e.measureText(c+n).width;t>i&&s.push({text:c,w:t,h:Number(e.font.match(/\d+px/)[0].replace("px",""))}),t>i&&(c=""),c+=n})),c&&s.push({text:c,w:e.measureText(c).width,h:Number(e.font.match(/\d+px/)[0].replace("px",""))}),s}},n=e,t=e=>e.x,o=e=>e.x+e.w,r=e=>e.y,i=e=>e.y+e.h,a=e=>Object({...e,l:t(e),r:o(e),t:r(e),b:i(e)}),c=e=>e.x+e.w/2,s=e=>e.y+e.h/2,d=e=>e.x,l=e=>e.y,h=e=>e.x,u=e=>e.y+e.h,p=e=>e.x+e.w,f=e=>e.y,v=e=>e.x+e.w,y=e=>e.y+e.h,g=e=>Object({...e,cx:c(e),cy:s(e),ltx:d(e),lty:l(e),lbx:h(e),lby:u(e),rtx:p(e),rty:f(e),rbx:v(e),rby:y(e)}),m=e=>.01*Math.min(e.w,e.h),x=e=>.01*Math.max(e.w,e.h),w=e=>.01*e.w,b=e=>.01*e.h,E=e=>Object({...e,vmin:m(e),vmax:x(e),vw:w(e),vh:b(e)}),k=e=>Object({x:e.x,y:e.y,w:e.w,h:e.h,...a(e),...g(e),...E(e)}),C=x,T=k;var A=[],M=[],L=0,P=0,X={alternate:"root",children:[]},Y=!1,S=!1,I=[],R=void 0,O=0,j=[],B=void 0,D=[];const F=e=>{e.hooks.filter((e=>e.type===z&&e.effectPrevious&&"function"==typeof e.effectPrevious)).forEach((e=>I.push((()=>e.effectPrevious())))),e.hooks.filter((e=>e.type===G&&e.effectPrevious&&"function"==typeof e.effectPrevious)).forEach((e=>e.effectPrevious())),e.children.forEach((e=>F(e)))},U=e=>{R.children[O]=e,R=e,O=0,M.push(0),j.push({hooks:e.hooks,index:0}),B=j[j.length-1]},q=e=>{e.children.filter(((e,n)=>n>O||n===O)).forEach((e=>F(e))),e.children=e.children.filter(((e,n)=>n<O)),R=e.parent,O=R.children.findIndex((n=>n===e))+1,A=A.filter(((e,n)=>n<A.length-M[M.length-1])),M=M.filter(((e,n)=>n<M.length-1)),j=j.filter(((e,n)=>n<j.length-1)),B=j[j.length-1]},W=()=>{for(Y=!0,L=performance.now(),R=X,O=0,D.forEach((e=>e()));0!==I.length;)I.shift()();const e=()=>{requestAnimationFrame((()=>{const n=performance.now();n-L<P&&e(),(n-L>P||n-L===P)&&(Y=!1),(n-L>P||n-L===P)&&W()}))};S&&e(),!1===S&&(Y=!1),S=!1},H=e=>{var n;return void 0===n&&(n=B.hooks[B.index]),void 0===n&&(n={state:e}),B.hooks[B.index]=n,[n.state,e=>{"function"==typeof e&&(n.state=e(n.state)),"function"!=typeof e&&(n.state=e),!0===Y&&(S=!0),!1===Y&&requestAnimationFrame(W)}]},N=e=>{var n;return void 0===n&&(n=B.hooks[B.index]),void 0===n&&(n={current:e}),B.hooks[B.index]=n,n},z=(e,n)=>{var t;void 0===t&&(t=B.hooks[B.index]),void 0===t&&(t={effect:e}),B.hooks[B.index]=t,(void 0===t.dependence||t.dependence.some(((e,t)=>e!==n[t])))&&I.push((()=>t.effectPrevious=t.effectPrevious&&"function"==typeof t.effectPrevious?t.effectPrevious():void 0)),(void 0===t.dependence||t.dependence.some(((e,t)=>e!==n[t])))&&I.push((()=>t.effectPrevious=e())),t.dependence=n},G=(e,n)=>{var t;void 0===t&&(t=B.hooks[B.index]),void 0===t&&(t={effect:e}),B.hooks[B.index]=t,(void 0===t.dependence||t.dependence.some(((e,t)=>e!==n[t])))&&(t.effectPrevious=t.effectPrevious&&"function"==typeof t.effectPrevious?t.effectPrevious():void 0),(void 0===t.dependence||t.dependence.some(((e,t)=>e!==n[t])))&&(t.effectPrevious=e()),t.dependence=n},J=(e,n)=>{var t;return void 0===t&&(t=B.hooks[B.index]),void 0===t&&(t={memo:e}),B.hooks[B.index]=t,(void 0===t.dependence||t.dependence.some(((e,t)=>e!==n[t])))&&(t.memo=e()),t.dependence=n,t.memo},K=(e,n)=>{var t;return void 0===t&&(t=B.hooks[B.index]),void 0===t&&(t={callback:e}),B.hooks[B.index]=t,(void 0===t.dependence||t.dependence.some(((e,t)=>e!==n[t])))&&(t.callback=e),t.dependence=n,t.callback},Q={mount:(e,n)=>(D.push(e),P=n,Q),render:W,componentRunBefore:U,componentRunAfter:q,compoment:(e,n,t)=>{var o,r=Object(n).key,i=Object(n).ref,a=R.children.findIndex((n=>void 0!==n.key&&n.key===r&&n.alternate===e));-1!==a&&R.children.splice(O,0,R.children.splice(a,1)[0]),void 0===o&&R.children[O]&&R.children[O].alternate===e&&R.children[O].key===r&&(o=R.children[O]),void 0===o&&(o={key:r,alternate:e,children:[],hooks:[],props:n}),o!==R.children[O]&&R.children[O]&&F(R.children[O]),o.parent=R,U(o),"function"==typeof i&&i(o);const c=o.alternate(n);return"function"==typeof t&&t(c),q(o),c},createElement:(e,n,...t)=>({alternate:e,props:n,children:t}),Fragment:()=>{},contextProvider:e=>{A.push(e),M[M.length-1]=M[M.length-1]+1},contextProviderExtend:e=>{A.push({...A[A.length-1],...e}),M[M.length-1]=M[M.length-1]+1},shouldRender:()=>{!0===Y&&(S=!0),!1===Y&&requestAnimationFrame(W)},useContext:()=>A[A.length-1],useState:H,useRef:N,useEffect:z,useEffectImmediate:G,useMemo:J,useCallback:K};Object.keys(Q).filter((e=>[H,N,z,G,J,K].includes(Q[e]))).forEach((e=>{return Q[e]=(n=Q[e],(...e)=>{try{if(void 0!==B.hooks[B.index]&&B.hooks[B.index].type!==n)throw Error(n);return n(...e)}finally{B.hooks[B.index].type=n,B.index=B.index+1}});var n}));const V=Q,Z=e=>new Array(Math.ceil(100*C(e.position)/e.gap/2)).fill().map(((n,t)=>0===t?V.createElement(V.Fragment,null,V.createElement("rect",{save:!0,fill:!0,x:e.position.x,y:e.position.cy,w:100*C(e.position),h:.1*C(e.position),globalAlpha:.5,fillStyle:e.color}),V.createElement("rect",{save:!0,fill:!0,x:e.position.cx,y:e.position.y,w:.1*C(e.position),h:100*C(e.position),globalAlpha:.5,fillStyle:e.color})):0!==t?V.createElement(V.Fragment,null,V.createElement("rect",{save:!0,fill:!0,x:e.position.x,y:e.position.cy+e.gap*t,w:100*C(e.position),h:.1*C(e.position),globalAlpha:.25,fillStyle:e.color}),V.createElement("rect",{save:!0,fill:!0,x:e.position.x,y:e.position.cy-e.gap*t,w:100*C(e.position),h:.1*C(e.position),globalAlpha:.25,fillStyle:e.color}),V.createElement("rect",{save:!0,fill:!0,x:e.position.cx+e.gap*t,y:e.position.y,w:.1*C(e.position),h:100*C(e.position),globalAlpha:.25,fillStyle:e.color}),V.createElement("rect",{save:!0,fill:!0,x:e.position.cx-e.gap*t,y:e.position.y,w:.1*C(e.position),h:100*C(e.position),globalAlpha:.25,fillStyle:e.color})):void 0)),$=(e,n)=>{e.save&&fe.context().save(),n(),e.globalAlpha&&(fe.context().globalAlpha=e.globalAlpha),e.fillStyle&&(fe.context().fillStyle=e.fillStyle),e.fill&&fe.context().fill(),e.save&&fe.context().restore()},_=e=>{$(e,(()=>{n.drawRect(fe.context(),{x:e.x,y:e.y,w:e.w,h:e.h})}))},ee=e=>{$(e,(()=>{n.drawArc(fe.context(),{x:e.x,y:e.y,w:e.w,h:e.h},e.radius,e.sAngle,e.eAngle,e.counterclockwise)}))},ne=e=>{$(e,(()=>{!0!==Boolean(e.clipmin)&&!0===Boolean(e.clipmax)&&n.drawImageClipMaxCenter(fe.context(),{x:e.x,y:e.y,w:e.w,h:e.h},e.image),!0===Boolean(e.clipmin)&&!0!==Boolean(e.clipmax)&&n.drawImageClipMinCenter(fe.context(),{x:e.x,y:e.y,w:e.w,h:e.h},e.image),!0!==Boolean(e.clipmin)&&!0!==Boolean(e.clipmax)&&n.drawImage(fe.context(),{x:e.x,y:e.y,w:e.w,h:e.h},e.image)}))},te=e=>"rect"===e?_:"arc"===e?ee:"image"===e?ne:void 0;var oe=[];const re=(e,n)=>{oe=[...oe,{type:e,callback:n}]},ie=(e,n)=>{oe=oe.filter((t=>t.type!==e||t.callback!==n))},ae={addEventListener:re,removeEventListener:ie,clearEventListener:()=>{oe=[]},useEventListener:(e,n)=>{V.useEffectImmediate((()=>re(e,n)),[e,n]),V.useEffectImmediate((()=>()=>ie(e,n)),[e,n])},addEventListenerWithCanvas:e=>{new Array("click","touchstart","touchmove","touchend","mousedown","mousemove","mouseup").forEach((n=>{e.addEventListener(n,(e=>((e,n)=>{const t=oe.filter((e=>e.type===n)).sort(((e,n)=>{const t=void 0===e.option||void 0===e.option.priority?0:e.option.priority;return(void 0===n.option||void 0===n.option.priority?0:n.option.priority)-t}));var o=!1;t.forEach((n=>{var t,r;void 0===window.ontouchstart&&(t=e.pageX),void 0===window.ontouchstart&&(r=e.pageY),void 0!==window.ontouchstart&&(t=e.changedTouches[0].pageX),void 0!==window.ontouchstart&&(r=e.changedTouches[0].pageY),t*=fe.dpr(),r*=fe.dpr();const i={native:e,x:t,y:r,stopPropagation:()=>o=!0};!1===o&&n.callback(i)}))})(e,n)),{passive:!0})}))}},ce=ae,se=e=>{if(void 0===window.ontouchstart){var{onStart:n,onMove:t,onEnd:o}=(e=>{const n=V.useRef(),t=V.useRef(),o=V.useCallback((n=>{e.onChange&&e.onChange(n)}),[e.onChange]);return{onStart:V.useCallback((r=>{if(!1===e.enable)return;const i=r.pageX,a=r.pageY;n.current={x:i,y:a},t.current={x:i,y:a},o({type:"mouse",status:"afterStart",e:r,x:i,y:a,changedX:0,changedY:0,continuedX:0,continuedY:0})}),[e.enable,e.onChange]),onMove:V.useCallback((r=>{if(!1===e.enable)return;if(void 0===t.current)return;const i=r.pageX,a=r.pageY,c=i-t.current.x,s=a-t.current.y,d=t.current.x-n.current.x,l=t.current.y-n.current.y;t.current={x:i,y:a},o({type:"mouse",status:"afterMove",e:r,x:i,y:a,changedX:c,changedY:s,continuedX:d,continuedY:l})}),[e.enable,e.onChange]),onEnd:V.useCallback((r=>{if(!1===e.enable)return;if(void 0===t.current)return;const i=r.pageX,a=r.pageY,c=i-t.current.x,s=a-t.current.y,d=t.current.x-n.current.x,l=t.current.y-n.current.y;o({type:"mouse",status:"beforeEnd",e:r,x:i,y:a,changedX:c,changedY:s,continuedX:d,continuedY:l}),n.current=void 0,t.current=void 0,o({type:"mouse",status:"afterEnd",e:r,x:i,y:a,changedX:c,changedY:s,continuedX:d,continuedY:l})}),[e.enable,e.onChange])}})({onChange:e.onChange,enable:e.enable});ce.useEventListener("mousedown",n,e.startOption),ce.useEventListener("mousemove",t,e.moveOption),ce.useEventListener("mouseup",o,e.endOption)}if(void 0!==window.ontouchstart){var{onStart:n,onMove:t,onEnd:o}=(e=>{const n=V.useRef(),t=V.useRef(),o=V.useCallback((n=>{e.onChange&&e.onChange(n),e.onChangeMemo&&e.onChangeMemo(n)}),[e.onChange]);return{onStart:V.useCallback((r=>{if(!1===e.enable)return;const i=[...r.changedTouches].map((e=>e.pageX)),a=[...r.changedTouches].map((e=>e.pageY));n.current={x:i,y:a},t.current={x:i,y:a};const c=[],s=[],d=[],l=[];i.forEach(((e,n)=>{c[n]=0,d[n]=0})),a.forEach(((e,n)=>{s[n]=0,l[n]=0})),o({type:"touch",status:"afterStart",e:r,x:i,y:a,changedX:c,changedY:s,continuedX:d,continuedY:l})}),[e.enable,e.onChange]),onMove:V.useCallback((r=>{if(!1===e.enable)return;if(void 0===t.current)return;const i=[...r.changedTouches].map((e=>e.pageX)),a=[...r.changedTouches].map((e=>e.pageY)),c=[],s=[],d=[],l=[];i.forEach(((e,o)=>{c[o]=e-t.current.x[o],d[o]=t.current.x[o]-n.current.x[o]})),a.forEach(((e,o)=>{s[o]=e-t.current.y[o],l[o]=t.current.y[o]-n.current.y[o]})),t.current={x:i,y:a},o({type:"touch",status:"afterMove",e:r,x:i,y:a,changedX:c,changedY:s,continuedX:d,continuedY:l})}),[e.enable,e.onChange]),onEnd:V.useCallback((r=>{if(!1===e.enable)return;if(void 0===t.current)return;const i=[...r.changedTouches].map((e=>e.pageX)),a=[...r.changedTouches].map((e=>e.pageY)),c=[],s=[],d=[],l=[];i.forEach(((e,o)=>{c[o]=e-t.current.x[o],d[o]=t.current.x[o]-n.current.x[o]})),a.forEach(((e,o)=>{s[o]=e-t.current.y[o],l[o]=t.current.y[o]-n.current.y[o]})),o({type:"touch",status:"beforeEnd",e:r,x:i,y:a,changedX:c,changedY:s,continuedX:d,continuedY:l}),n.current=void 0,t.current=void 0,o({type:"touch",status:"afterEnd",e:r,x:i,y:a,changedX:c,changedY:s,continuedX:d,continuedY:l})}),[e.enable,e.onChange])}})({onChange:e.onChange,enable:e.enable});ce.useEventListener("touchstart",n,e.startOption),ce.useEventListener("touchmove",t,e.moveOption),ce.useEventListener("touchend",o,e.endOption)}};var de,le,he,ue;const pe=e=>{if(e&&"object"==typeof e){if(!0===Array.isArray(e)&&e.forEach((e=>pe(e))),!1===Array.isArray(e)&&"function"==typeof e.alternate&&V.compoment(e.alternate,e.props,(e=>pe(e))),!1===Array.isArray(e)&&"string"==typeof e.alternate){const n=n=>{e.props&&"function"==typeof e.props.onClick&&ce.useEventListener("click",e.props.onClick),e.props&&"function"==typeof e.props.onTouchStart&&ce.useEventListener("touchstart",e.props.onTouchStart),e.props&&"function"==typeof e.props.onTouchMove&&ce.useEventListener("touchmove",e.props.onTouchMove),e.props&&"function"==typeof e.props.onTouchEnd&&ce.useEventListener("touchend",e.props.onTouchEnd),e.props&&"function"==typeof e.props.onMouseUp&&ce.useEventListener("mousedown",e.props.onMouseUp),e.props&&"function"==typeof e.props.onMouseMove&&ce.useEventListener("mousemove",e.props.onMouseMove),e.props&&"function"==typeof e.props.onMouseUp&&ce.useEventListener("mouseup",e.props.onMouseUp),e.props&&"object"==typeof e.props.onDrag&&se(e.props.onDrag),pe(n)};V.compoment(te(e.alternate),e.props,n)}!1===Array.isArray(e)&&e.children&&e.children.forEach((e=>pe(e)))}},fe={dpr:()=>de,canvas:()=>le,context:()=>he,coordinate:()=>ue,mount:(e,n)=>{const t=document.createElement("style");t.innerHTML=["::-webkit-scrollbar { width: 0; height: 0; }","body { padding: 0; margin: 0; }","body, body * { overscroll-behavior: none; }"].join(" "),document.head.appendChild(t),window.addEventListener("wheel",(e=>e.preventDefault()),{passive:!1}),window.addEventListener("touchmove",(e=>e.preventDefault()),{passive:!1}),window.addEventListener("contextmenu",(e=>e.preventDefault()),{passive:!1}),de=2,le=document.createElement("canvas"),he=le.getContext("2d");const o=()=>{le.width=window.innerWidth*de,le.height=window.innerHeight*de,le.style.width="100%",le.style.height="100%",ue=T({x:0,y:0,w:le.width,h:le.height})};return le.style.position="absolute",le.style.width="100%",le.style.height="100%",le.style.background="black",le.style.overflow="hidden",o(),window.addEventListener("resize",(()=>{o(),V.shouldRender()})),document.body.appendChild(le),ce.addEventListenerWithCanvas(le),V.mount((()=>{he.clearRect(0,0,le.width,le.height),pe(e)}),n.frameTimeDiffMax),{render:V.render}}};function ve(){return V.createElement(V.Fragment,null,V.createElement(Z,{position:fe.coordinate(),gap:100,color:"rgba(255, 255, 255, 1)"}))}fe.mount(V.createElement(ve,null),{frameTimeDiffMax:12}).render()})();