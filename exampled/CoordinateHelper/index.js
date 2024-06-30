(()=>{"use strict";var e=void 0,t=0,o=0,n=!1,r=!1,a=void 0,i=void 0,p=[],c=[],s=[],l=[],u=[],d=void 0;const h=e=>{e.hooks.forEach((e=>{"function"==typeof e.effectPrevious&&e.type===b&&p.push((()=>e.effectPrevious()))})),e.hooks.forEach((e=>{"function"==typeof e.effectPrevious&&e.type===E&&e.effectPrevious()})),e.children.forEach((e=>h(e)))},m=e=>{var t={element:e,key:void 0,type:void 0,children:[],hooks:[],memo:void 0,update:void 0,create:void 0,parent:void 0};return!0===Boolean(e)&&"object"==typeof e||(t.type=0),!0===Boolean(e)&&"object"==typeof e&&"function"==typeof e.tag&&!0===e.xml&&(t.type=1,t.key=e.key),!0===Boolean(e)&&"object"==typeof e&&"string"==typeof e.tag&&(t.type=2,t.key=e.key),!0===Boolean(e)&&"object"==typeof e&&!0===Array.isArray(e)&&(t.type=3,t.key=e.key),!0===Boolean(e)&&"object"==typeof e&&e.tag===f&&(t.type=4,t.key=e.key),t},x=e=>{i={hooks:e.hooks,index:0,node:e};var t=[],o=[],n=[];return!0===e.memo&&!0!==l.includes(e)||1!==e.type||(t=new Array(e.element.tag({...e.element.props,children:e.element.children,parent:e.parent}))),!0===e.memo&&!0!==l.includes(e)||2!==e.type||(t=e.element.children),!0===e.memo&&!0!==l.includes(e)||3!==e.type||(t=e.element),!0===e.memo&&!0!==l.includes(e)||4!==e.type||(t=e.element.tag({children:e.element.children})),!0===e.memo&&!0!==l.includes(e)&&(t=e.children.map((e=>e.element))),n=e.children,t.forEach(((t,r)=>{var a,i=e.children.findIndex((e=>void 0!==e.key&&e.key===t.key&&e.element.tag===t.tag));-1!==i&&e.children.splice(r,0,e.children.splice(i,1)[0]);const p=Boolean(e.children[r]&&e.children[r].element===t);!0===p&&(a=e.children[r]),!0!==p&&(a=m(t)),a.memo=p;const c=!p&&Boolean(e.children[r]&&e.children[r].type===a.type&&e.children[r].key===a.key&&e.children[r].element.tag===a.element.tag);!0===c&&(a.hooks=e.children[r].hooks,a.children=e.children[r].children),a.update=c,a.create=!1===p&&!1===c,a.parent=e,!0!==p&&!0!==c||(n=n.filter((t=>t!==e.children[r]))),o.push(x(a))})),e.children=o,n.forEach((e=>h(e))),e.hooks.forEach((e=>{"function"==typeof e.effect&&e.type===k&&e.effect()})),i=void 0,e},f=e=>e.children,y=()=>{if(void 0===d){const e=performance.now();e-t<o&&(d=requestAnimationFrame((()=>{d=void 0,y()}))),(e-t>o||e-t===o)&&(d=requestAnimationFrame((()=>{for(d=void 0,t=e,console.log("React.update.time.now",e),l=Array.from(new Set(s)),u=l.filter((e=>{for(var t=!0;!0===t&&e.parent;)e=e.parent,t=l.every((t=>t!==e));return t})),s=[],n=!0,u.forEach((e=>x(e))),c(a);0!==p.length;)p.shift()();n=!1,l=[],u=[];var o=r;r=!1,o&&y()})))}},v=e=>{s=[...s,e],!0===n&&(r=!0),!0!==n&&y()},g=e=>{var t;void 0===t&&(t=i.hooks[i.index]),void 0===t&&(t={state:e}),i.hooks[i.index]=t;const o=i.node;return[t.state,e=>{const n=t.state;"function"==typeof e&&(t.state=e(t.state)),"function"!=typeof e&&(t.state=e),t.state!==n&&v(o)}]},w=e=>{var t;return void 0===t&&(t=i.hooks[i.index]),void 0===t&&(t={current:e}),i.hooks[i.index]=t,t},b=(e,t)=>{var o;void 0===o&&(o=i.hooks[i.index]),void 0===o&&(o={effect:e}),i.hooks[i.index]=o,(void 0===o.dependence||o.dependence.some(((e,o)=>e!==t[o])))&&p.push((()=>o.effectPrevious=o.effectPrevious&&"function"==typeof o.effectPrevious?o.effectPrevious():void 0)),(void 0===o.dependence||o.dependence.some(((e,o)=>e!==t[o])))&&p.push((()=>o.effectPrevious=e())),o.dependence=t},E=(e,t)=>{var o;void 0===o&&(o=i.hooks[i.index]),void 0===o&&(o={effect:e}),i.hooks[i.index]=o,(void 0===o.dependence||o.dependence.some(((e,o)=>e!==t[o])))&&(o.effectPrevious=o.effectPrevious&&"function"==typeof o.effectPrevious?o.effectPrevious():void 0),(void 0===o.dependence||o.dependence.some(((e,o)=>e!==t[o])))&&(o.effectPrevious=e()),o.dependence=t},k=(e,t)=>{var o;void 0===o&&(o=i.hooks[i.index]),void 0===o&&(o={effect:e}),i.hooks[i.index]=o,(void 0===o.dependence||o.dependence.some(((e,o)=>e!==t[o])))&&(o.effect=e),o.dependence=t},C=(e,t)=>{var o;return void 0===o&&(o=i.hooks[i.index]),void 0===o&&(o={memo:e}),i.hooks[i.index]=o,(void 0===o.dependence||o.dependence.some(((e,o)=>e!==t[o])))&&(o.memo=e()),o.dependence=t,o.memo},T=(e,t)=>{var o;return void 0===o&&(o=i.hooks[i.index]),void 0===o&&(o={callback:e}),i.hooks[i.index]=o,(void 0===o.dependence||o.dependence.some(((e,o)=>e!==t[o])))&&(o.callback=e),o.dependence=t,o.callback},M={renderQueueNode:()=>a,mount:(t,n,r)=>(e=t,o=n,c=r,M),render:()=>{for(s=[],l=[],u=[],d&&(d=cancelAnimationFrame(d)),a&&h(a),a=m(e),n=!0,x(a),c(a);0!==p.length;)p.shift()();n=!1;var t=r;r=!1,t&&y()},renderNode:x,createElement:(e,t,...o)=>({tag:e,key:Object(t).key,props:t||Object(),children:o,xml:!0}),Fragment:f,shouldRender:v,createContext:e=>{const t={value:e};return{context:t,Consumer:e=>e.children(t.value),Provider:e=>(void 0!==e.value&&(t.value=e.value),e.children)}},useContext:e=>e.context.value,useShouldRender:()=>{const e=i.node;return()=>v(e)},useState:g,useRef:w,useEffect:b,useEffectImmediateLoopEnd:k,useEffectImmediate:E,useMemo:C,useCallback:T};Object.keys(M).filter((e=>[g,w,b,k,E,C,T].includes(M[e]))).forEach((e=>{return M[e]=(t=M[e],(...e)=>{try{if(void 0!==i.hooks[i.index]&&i.hooks[i.index].type!==t)throw Error(t);return t(...e)}finally{i.hooks[i.index].type=t,i.index=i.index+1}});var t}));const L=M,A={locationMount:e=>{Se.Tag.locationMount(e)},locationUnmount:e=>{Se.Tag.locationUnmount(e)},renderMount:e=>{Se.Tag.renderMount_0(e),Se.context().arc(e.props.cx,e.props.cy,e.props.radius,e.props.sAngle,e.props.eAngle,e.props.counterclockwise),Se.Tag.renderMount_1(e)},renderUnmount:e=>{Se.Tag.renderUnmount(e)}},N={locationMount:e=>{Se.Tag.locationMount(e)},locationUnmount:e=>{Se.Tag.locationUnmount(e)},renderMount:e=>{Se.Tag.renderMount_0(e),Se.context().clip(),Se.Tag.renderMount_1(e)},renderUnmount:e=>{Se.Tag.renderUnmount(e)}},U={locationMount:e=>{Se.Tag.locationMount(e)},locationUnmount:e=>{Se.Tag.locationUnmount(e)},renderMount:e=>{Se.Tag.renderMount_0(e),Se.context().fill(),Se.Tag.renderMount_1(e)},renderUnmount:e=>{Se.Tag.renderUnmount(e)}},S={locationMount:e=>{Se.Tag.locationMount(e)},locationUnmount:e=>{Se.Tag.locationUnmount(e)},renderMount:e=>{Se.Tag.renderMount_0(e);const t=((e,t,o,n)=>{var{x:r,y:a,w:i,h:p}=e;if(0!==t.width&&0!==t.height){var c=0,s=0,l=t.width,u=t.height;if("auto-max"===o&&"center"===n){const e=i/l,t=p/u;e>t&&(s=u-u*t/e,u-=u-u*t/e),t>e&&(c=l-l*e/t,l-=l-l*e/t)}if("auto-min"===o&&"center"===n){const e=i/l,t=p/u;e>t&&(r+=(i-i*t/e)/2,i-=i-i*t/e),t>e&&(a+=(p-p*e/t)/2,p-=p-p*e/t)}return{sx:c,sy:s,sw:l,sh:u,x:r,y:a,w:i,h:p}}})({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},e.props.image,e.props.size,e.props.position);void 0!==t&&Se.context().drawImage(e.props.image,t.sx,t.sy,t.sw,t.sh,t.x,t.y,t.w,t.h),Se.Tag.renderMount_1(e)},renderUnmount:e=>{Se.Tag.renderUnmount(e)}},P=S,j=(e,t,o)=>{var n=0,r=!1,a=[];return t.forEach((t=>{!1===r&&(n+t.w+o<e.w||n+t.w+o===e.w)&&a.push(t),!1===r&&(n+t.w+o<e.w||n+t.w+o===e.w)&&(n=n+t.w+o),n+t.w+o>e.w&&(r=!0)})),{result:a,rest:t.filter(((e,t)=>t>a.length-1))}},O=(e,t,o)=>{var n=0,r=!1,a=[];return t.forEach((t=>{!1===r&&(n+t.h+o<e.h||n+t.h+o===e.h)&&a.push(t),!1===r&&(n+t.h+o<e.h||n+t.h+o===e.h)&&(n=n+t.h+o),n+t.h+o>e.h&&(r=!0)})),{result:a,rest:t.filter(((e,t)=>t>a.length-1))}},R={horizontalForward:(e,t,o)=>{var n=0;return t.forEach((t=>{t.x=e.x+n,n=n+t.w+o})),t},horizontalReverse:(e,t,o)=>{var n=0;return t.forEach((t=>{t.x=e.x+e.w-t.w-n,n=n+t.w+o})),t},horizontalCenter:(e,t,o)=>{var n=0,r=Se.Location.add(t).w+(t.length-1)*o;return t.forEach((t=>{t.x=e.x+(e.w-r)/2+n,n=n+t.w+o})),t},horizontalAround:(e,t)=>{var o=0,n=Se.Location.add(t).w;return t.forEach(((r,a)=>{r.x=e.x+(e.w-n)/(t.length-1)*a+o,o+=r.w})),t},horizontalBetween:(e,t)=>{var o=0,n=Se.Location.add(t).w;return t.forEach(((r,a)=>{r.x=e.x+(e.w-n)/(t.length+1)*(a+1)+o,o+=r.w})),t},horizontalAlignForward:(e,t)=>(t.forEach(((t,o)=>{t.x=e.x})),t),horizontalAlignReverse:(e,t)=>(t.forEach(((t,o)=>{t.x=e.x+e.w})),t),horizontalAlignCenter:(e,t)=>(t.forEach(((t,o)=>{t.x=e.x+(e.w-t.w)/2})),t),verticalForward:(e,t,o)=>{var n=0;return t.forEach((t=>{t.y=e.y+n,n=n+t.h+o})),t},verticalReverse:(e,t,o)=>{var n=0;return t.forEach((t=>{t.y=e.y+e.h-t.h-n,n=n+t.h+o})),t},verticalCenter:(e,t,o)=>{var n=0,r=Se.Location.add(t).h+(t.length-1)*o;return t.forEach((t=>{t.y=e.y+(e.h-r)/2+n,n=n+t.h+o})),t},verticalAround:(e,t)=>{var o=0,n=Se.Location.add(t).h;return t.forEach(((r,a)=>{r.y=e.y+(e.h-n)/(t.length-1)*a+o,o+=r.h})),t},verticalBetween:(e,t)=>{var o=0,n=Se.Location.add(t).h;return t.forEach(((r,a)=>{r.y=e.y+(e.h-n)/(t.length+1)*(a+1)+o,o+=r.h})),t},verticalAlignForward:(e,t)=>(t.forEach(((t,o)=>{t.y=e.y})),t),verticalAlignReverse:(e,t)=>(t.forEach(((t,o)=>{t.y=e.y+e.h})),t),verticalAlignCenter:(e,t)=>(t.forEach(((t,o)=>{t.y=e.y+(e.h-t.h)/2})),t)},z={locationMount:e=>{if(Se.Tag.locationMount(e),!0===Boolean(e.props.container)&&e.children.length>0){const t=e.props.gap||0,o=e.children.filter((e=>"layout"===e.element.tag&&!0===Boolean(e.props.item)));o.forEach((e=>Se.Tag.relocation({...e,children:[]})));const n=o.map((e=>e.props)),r=Object.keys(e.props).findIndex((e=>["horizontalForward","horizontalReverse","horizontalCenter","horizontalAround","horizontalAround","horizontalBetween"].includes(e))),a=Object.keys(e.props).findIndex((e=>["verticalForward","verticalReverse","verticalCenter","verticalAround","verticalAround","verticalBetween"].includes(e))),i=Object.keys(e.props).findIndex((e=>["horizontalAlignForward","horizontalAlignReverse","horizontalAlignCenter"].includes(e))),p=Object.keys(e.props).findIndex((e=>["verticalAlignForward","verticalAlignReverse","verticalAlignCenter"].includes(e)));!0===Boolean(e.props.wrap)&&r>-1&&a>-1&&r<a&&((e,t,o,n,r)=>{for(var a=[],i=t;i.length;){const t=j(e,i,r);0===t.result.length&&(a=[...a,t.rest[0]],i=t.rest.filter(((e,t)=>0!==t))),t.result.length>0&&(a=[...a,t.result],i=t.rest)}n(e,a.map((t=>Object({y:e.y,h:Se.Location.hmax(t)}))),r).forEach(((e,t)=>a[t].forEach((t=>t.y=e.y)))),a.forEach((t=>o({x:e.x,y:t.y,w:e.w},t,r)))})({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,R[Object.keys(e.props)[r]],R[Object.keys(e.props)[a]],t),!0===Boolean(e.props.wrap)&&a>-1&&a>-1&&a<r&&((e,t,o,n,r)=>{for(var a=[],i=t;i.length;){const t=O(e,i,r);0===t.result.length&&(a=[...a,t.rest[0]],i=t.rest.filter(((e,t)=>0!==t))),t.result.length>0&&(a=[...a,t.result],i=t.rest)}n(e,a.map((t=>Object({x:e.x,w:Se.Location.wmax(t)}))),r).forEach(((e,t)=>a[t].forEach((t=>t.x=e.x)))),a.forEach((t=>o({y:e.y,h:e.h},t)),r)})({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,R[Object.keys(e.props)[a]],R[Object.keys(e.props)[r]],t),!1===Boolean(e.props.wrap)&&(r>-1&&((e,t,o)=>{const n=t.reduce(((e,t)=>e+t.w),0)+o*(t.length-1),r=t.reduce(((e,t)=>e+(t.grow||0)),0),a=t.reduce(((e,t)=>e+(t.shrink||0)),0);n>e.w&&a>0&&t.forEach((t=>{t.shrink&&(t.w=t.w-(n-e.w)*(t.shrink/a))})),n<e.w&&t.forEach((t=>{t.grow&&(t.w=t.w-(n-e.w)*(t.grow/r))}))})({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,t),a>-1&&((e,t,o)=>{const n=t.reduce(((e,t)=>e+t.h),0)+o*(t.length-1),r=t.reduce(((e,t)=>e+(t.grow||0)),0),a=t.reduce(((e,t)=>e+(t.shrink||0)),0);n>e.h&&a>0&&t.forEach((t=>{t.shrink&&(t.h=t.h-(n-e.h)*(t.shrink/a))})),n<e.h&&t.forEach((t=>{t.grow&&(t.h=t.h-(n-e.h)*(t.grow/r))}))})({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,t),r>-1&&R[Object.keys(e.props)[r]]({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,t),a>-1&&R[Object.keys(e.props)[a]]({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,t),i>-1&&R[Object.keys(e.props)[i]]({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,t),p>-1&&R[Object.keys(e.props)[p]]({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,t))}},locationUnmount:e=>{Se.Tag.locationUnmount(e)},renderMount:e=>{Se.Tag.renderMount_0(e),Se.Tag.renderMount_1(e)},renderUnmount:e=>{Se.Tag.renderUnmount(e)}},B=z,F={locationMount:e=>{Se.Tag.locationMount(e)},locationUnmount:e=>{Se.Tag.locationUnmount(e)},renderMount:e=>{Se.Tag.renderMount_0(e),e.props.path&&e.props.path.forEach(((e,t)=>{0===t&&Se.context().moveTo(e.x,e.y),0===t&&Se.context().lineTo(e.x,e.y),0!==t&&Se.context().lineTo(e.x,e.y)})),Se.Tag.renderMount_1(e)},renderUnmount:e=>{Se.Tag.renderUnmount(e)}},$={locationMount:e=>{Se.Tag.locationMount(e)},locationUnmount:e=>{Se.Tag.locationUnmount(e)},renderMount:e=>{Se.Tag.renderMount_0(e);var t=new Array(4).fill(0);e.props.radius&&"object"==typeof t&&Array.isArray(t)&&(t=e.props.radius),e.props.radius&&"number"==typeof t&&(t=new Array(4).fill(e.props.radius)),Se.context().moveTo(e.props.x,e.props.y+t[0]),Se.context().arcTo(e.props.x,e.props.y,e.props.x+t[0],e.props.y,t[0]),Se.context().lineTo(e.props.x+e.props.w-t[1],e.props.y),Se.context().arcTo(e.props.x+e.props.w,e.props.y,e.props.x+e.props.w,e.props.y+t[1],t[1]),Se.context().lineTo(e.props.x+e.props.w,e.props.y+e.props.h-t[2]),Se.context().arcTo(e.props.x+e.props.w,e.props.y+e.props.h,e.props.x+e.props.w-t[2],e.props.y+e.props.h,t[2]),Se.context().lineTo(e.props.x+t[3],e.props.y+e.props.h),Se.context().arcTo(e.props.x,e.props.y+e.props.h,e.props.x,e.props.y+e.props.h-t[3],t[3]),Se.Tag.renderMount_1(e)},renderUnmount:e=>{Se.Tag.renderUnmount(e)}},H={locationMount:e=>{Se.Tag.locationMount(e)},locationUnmount:e=>{Se.Tag.locationUnmount(e)},renderMount:e=>{Se.Tag.renderMount_0(e),Se.context().stroke(),Se.Tag.renderMount_1(e)},renderUnmount:e=>{Se.Tag.renderUnmount(e)}},I=(e,t,o,n="")=>{Se.context().save(),Se.context().font=t;const r=Number(Se.context().font.match(/\d+px/)[0].replace("px",""));var a="",i=[];return(e=e.split(n).map(((e,t)=>t?[n,e]:[e])).flat()).forEach(((e,t)=>{const n=Se.context().measureText(a+e).width;n>o&&""!==a&&i.push(a),n>o&&""!==a&&(a=e),n>o&&""===a&&i.push(e),n<o&&(a+=e)})),a&&i.push(a),i=i.map((e=>({text:e.trim(),w:Se.context().measureText(e.trim()).width,h:r,font:Se.context().font}))),Se.context().restore(),i},X={locationMount:e=>{Se.Tag.locationMount(e)},locationUnmount:e=>{Se.Tag.locationUnmount(e)},renderMount:e=>{Se.Tag.renderMount_0(e);const t=e.props.lineHeight||1,o=e.props.gap||0;if(!0===Boolean(e.props.wrap)){const n=Number(Se.context().font.match(/\d+px/)[0].replace("px",""));(e.props.line?e.props.line:I(e.props.text,e.props.font,e.props.w,e.props.split)).forEach(((r,a)=>{var i=e.props.x,p=e.props.y,c=n*t;p=(p=p-.18*n-.5*(c-n))+(a+1)*c+a*o,e.props.align,"center"===e.props.align&&(i+=(e.props.w-r.w)/2),"right"===e.props.align&&(i+=e.props.w-r.w),!0===Boolean(e.props.fillText)&&Se.context().fillText(r.text,i,p),!0===Boolean(e.props.strokeText)&&Se.context().strokeText(r.text,i,p)}))}if(!0!==Boolean(e.props.wrap)){const o=Number(Se.context().font.match(/\d+px/)[0].replace("px",""));var n=Se.context().measureText(e.props.text).width,r=o*t,a=e.props.x,i=e.props.y;i=i-.18*o-.5*(r-o),i+=r,e.props.align,"center"===e.props.align&&(a+=(e.props.w-n)/2),"right"===e.props.align&&(a+=e.props.w-n),!0===Boolean(e.props.fillText)&&Se.context().fillText(e.props.text,a,i),!0===Boolean(e.props.strokeText)&&Se.context().strokeText(e.props.text,a,i)}Se.Tag.renderMount_1(e)},renderUnmount:e=>{Se.Tag.renderUnmount(e)}};X.caculateLine=I,X.caculateLineLocation=(e,t,o)=>{const n=Math.max(...e.map((e=>e.w))),r=e.reduce(((e,n,r)=>e+n.h*t+(r?o:0)),0);return{w:n,h:r}};const _=X,D=e=>{void 0!==Se.Tag.pick(e.element.tag)&&(Se.Tag.pick(e.element.tag).locationMount(e),"function"==typeof e.props.onLocationMount&&e.props.onLocationMount(e)),e.children&&e.children.forEach((e=>D(e))),void 0!==Se.Tag.pick(e.element.tag)&&(Se.Tag.pick(e.element.tag).locationUnmount(e),"function"==typeof e.props.onLocationUnmount&&e.props.onLocationUnmount(e))},Y=e=>{void 0!==Se.Tag.pick(e.element.tag)&&(Se.Tag.pick(e.element.tag).renderMount(e),"function"==typeof e.props.onRenderMount&&e.props.onRenderMount(e)),e.children&&e.children.toSorted(((e,t)=>(e.props.zIndex||0)-(t.props.zIndex||0))).forEach((e=>Y(e))),void 0!==Se.Tag.pick(e.element.tag)&&(Se.Tag.pick(e.element.tag).renderUnmount(e),"function"==typeof e.props.onRenderUnmount&&e.props.onRenderUnmount(e))},W={pick:e=>"arc"===e?A:"clip"===e?N:"fill"===e?U:"image"===e?P:"layout"===e?B:"line"===e?F:"rect"===e?$:"stroke"===e?H:"text"===e?_:void 0,relocation:D,rerender:Y,locationMount:e=>{const t=(o,n)=>{if("number"==typeof o)return o;if("function"==typeof o)return o(e.parent.props);if(void 0===o)return e.parent.props[n];if("string"==typeof o){if("extend"===o&&("x"===n||"y"===n||"w"===n||"h"===n))return e.parent.props[n];if(o.match(/^fit-content\(.+\)$/)&&("w"===n||"h"===n))return t(o.replace(/^fit-content\(/,"").replace(/\)$/,""),n);if(o.match(/^min\(.+\)$/)){const e=o.replace(/^min\(/,"").replace(/\)$/,"").split(/\s?,\s?/);return e.forEach(((o,r)=>{e[r]=t(o,n)})),Math.min(...e)}if(o.match(/^max\(.+\)$/)){const e=o.replace(/^max\(/,"").replace(/\)$/,"").split(/(\s+)?,(\s+)?/);return e.forEach(((o,r)=>{e[r]=t(o,n)})),Math.max(...e)}if(o.match(/^calc\(.+\)$/)){const e=o.replace(/^calc\(/,"").replace(/\)$/,"").split(" ");return e.forEach(((o,r)=>{"+"!==o&&"-"!==o&&"*"!==o&&"/"!==o&&(e[r]=t(o,n))})),new Function("return "+e.join(" "))()}if(o.match(/^.+%$/)){if("w"===n||"l"===n||"r"===n)return e.parent.props.w*Number(o.replace(/%/,""))/100;if("h"===n||"r"===n||"b"===n)return e.parent.props.h*Number(o.replace(/%/,""))/100}if(o.match(/^.+vmin$/))return e.parent.props.vmin*Number(o.replace(/vmin/,""));if(o.match(/^.+vmax$/))return e.parent.props.vmax*Number(o.replace(/vmax/,""));if(o.match(/^.+vw$/))return e.parent.props.vw*Number(o.replace(/vw/,""));if(o.match(/^.+vh$/))return e.parent.props.vh*Number(o.replace(/vh/,""));if(o.match(/^.+px$/))return Number(o.replace(/px/,""));if(o.match(/^\d+$/))return Number(o)}};(()=>{if(e.props&&e.parent&&("string"==typeof e.props.x||"number"==typeof e.props.x||"function"==typeof e.props.x||void 0===e.props.x)){const o=t(e.props.x,"x");!1===isNaN(o)&&(e.props.x=o)}if(e.props&&e.parent&&("string"==typeof e.props.y||"number"==typeof e.props.y||"function"==typeof e.props.y||void 0===e.props.y)){const o=t(e.props.y,"y");!1===isNaN(o)&&(e.props.y=o)}if(e.props&&e.parent&&("string"==typeof e.props.w||"number"==typeof e.props.w||"function"==typeof e.props.w||void 0===e.props.w)){const o=t(e.props.w,"w");!1===isNaN(o)&&(e.props.w=o)}if(e.props&&e.parent&&("string"==typeof e.props.h||"number"==typeof e.props.h||"function"==typeof e.props.h||void 0===e.props.h)){const o=t(e.props.h,"h");!1===isNaN(o)&&(e.props.h=o)}if(e.props&&e.parent&&("string"==typeof e.props.l||"number"==typeof e.props.l)&&void 0===e.props.x){const o=t(e.props.l,"l");!1===isNaN(o)&&(e.props.x=e.parent.props.x+o)}if(e.props&&e.parent&&("string"==typeof e.props.r||"number"==typeof e.props.r)&&void 0===e.props.x){const o=t(e.props.r,"r");!1===isNaN(o)&&(e.props.x=e.parent.props.x+e.parent.props.w-o)}if(e.props&&e.parent&&("string"==typeof e.props.t||"number"==typeof e.props.t)&&void 0===e.props.y){const o=t(e.props.t,"t");!1===isNaN(o)&&(e.props.y=e.parent.props.y+o)}if(e.props&&e.parent&&("string"==typeof e.props.b||"number"==typeof e.props.b)&&void 0===e.props.y){const o=t(e.props.b,"b");!1===isNaN(o)&&(e.props.y=e.parent.props.y+e.parent.props.h-o)}})(),Object.assign(e.props,Se.Location.coordinate(e.props))},locationUnmount:e=>{if("string"==typeof e.element.props.w&&e.element.props.w.match(/^fit-content\(.+\)$/)){const t=Se.Location.box(e.children.map((e=>e.props))).w;!1===isNaN(t)&&(e.props.w=t)}if("string"==typeof e.element.props.h&&e.element.props.h.match(/^fit-content\(.+\)$/)){const t=Se.Location.box(e.children.map((e=>e.props))).h;!1===isNaN(t)&&(e.props.h=t)}Object.assign(e.props,Se.Location.coordinate(e.props))},renderMount_0:e=>{Se.context().save(),void 0!==e.props.globalAlpha&&(Se.context().globalAlpha=e.props.globalAlpha),void 0!==e.props.font&&(Se.context().font=e.props.font),void 0!==e.props.fillStyle&&(Se.context().fillStyle=e.props.fillStyle),void 0!==e.props.strokeStyle&&(Se.context().strokeStyle=e.props.strokeStyle),void 0!==e.props.lineWidth&&(Se.context().lineWidth=e.props.lineWidth),!0===Boolean(e.props.beginPath)&&Se.context().beginPath()},renderMount_1:e=>{!0===Boolean(e.props.clip)&&Se.context().clip(),!0===Boolean(e.props.fill)&&Se.context().fill(),!0===Boolean(e.props.stroke)&&Se.context().stroke(),!0===Boolean(e.props.isolated)&&Se.context().restore()},renderUnmount:e=>{!0!==Boolean(e.props.isolated)&&Se.context().restore(),e.props.onClick&&Se.Event.addEventListener("click",(t=>e.props.onClick({...t,dom:e}))),e.props.onTouchStart&&Se.Event.addEventListener("touchstart",(t=>e.props.onTouchStart({...t,dom:e}))),e.props.onTouchMove&&Se.Event.addEventListener("touchmove",(t=>e.props.onTouchMove({...t,dom:e}))),e.props.onTouchEnd&&Se.Event.addEventListener("touchend",(t=>e.props.onTouchEnd({...t,dom:e}))),e.props.onMouseDown&&Se.Event.addEventListener("mousedown",(t=>e.props.onMouseDown({...t,dom:e}))),e.props.onMouseMove&&Se.Event.addEventListener("mousemove",(t=>e.props.onMouseMove({...t,dom:e}))),e.props.onMouseUp&&Se.Event.addEventListener("mouseup",(t=>e.props.onMouseUp({...t,dom:e})))},Arc:A,Clip:N,Fill:U,Image:P,Layout:B,Rect:$,Stroke:H,Text:_},G=W;var q=[],Q=[];const J={addEventListener:(e,t)=>{t&&(q=[...q,{type:e,callback:t}])},removeEventListener:(e,t)=>{t&&(q=q.filter((o=>o.type!==e||o.callback!==t)))},clearEventListener:()=>{q=[]},addEventListenerWithCanvas:e=>{const t=t=>{const o=e=>((e,t)=>{const o=q.filter((e=>e.type===t)).sort(((e,t)=>{const o=void 0===e.option||void 0===e.option.priority?0:e.option.priority;return(void 0===t.option||void 0===t.option.priority?0:t.option.priority)-o}));var n=!1;o.forEach((t=>{var o,r,a;void 0===window.ontouchstart&&(o=e.pageX*Se.dpr()),void 0===window.ontouchstart&&(r=e.pageY*Se.dpr()),void 0!==window.ontouchstart&&(o=e.pageX?[e.pageX*Se.dpr()]:[...e.changedTouches].map((e=>e*Se.dpr()))),void 0!==window.ontouchstart&&(r=e.pageY?[e.pageY*Se.dpr()]:[...e.changedTouches].map((e=>e*Se.dpr()))),void 0===window.ontouchstart&&(a="mouse"),void 0!==window.ontouchstart&&(a="touch");const i={native:e,x:o,y:r,device:a,stopPropagation:()=>n=!0};!1===n&&t.callback(i)}))})(e,t);e.addEventListener(t,o,{passive:!0}),Q.push({type:t,event:o})};new Array("click").forEach(t),void 0!==window.ontouchstart&&new Array("touchstart","touchmove","touchend").forEach(t),void 0===window.ontouchstart&&new Array("mousedown","mousemove","mouseup").forEach(t)},removeEventListenerWithCanvas:e=>{Q.forEach((t=>e.removeEventListener(t.type,t.event))),Q=[]}},K=J,V=e=>isNaN(e)?NaN:e,Z=e=>V(e.x),ee=e=>V(e.y),te=e=>V(e.w),oe=e=>V(e.h),ne=e=>Object({...e,x:Z(e),y:ee(e),w:te(e),h:oe(e)}),re=e=>V(e.x),ae=e=>V(e.x+e.w),ie=e=>V(e.y),pe=e=>V(e.y+e.h),ce=e=>Object({...e,l:re(e),r:ae(e),t:ie(e),b:pe(e)}),se=e=>V(e.x+e.w/2),le=e=>V(e.y+e.h/2),ue=e=>V(e.x-e.w/2),de=e=>V(e.y-e.h/2),he=e=>V(e.x),me=e=>V(e.y),xe=e=>V(e.x),fe=e=>V(e.y+e.h),ye=e=>V(e.x+e.w),ve=e=>V(e.y),ge=e=>V(e.x+e.w),we=e=>V(e.y+e.h),be=e=>Object({...e,cx:se(e),cy:le(e),rcx:ue(e),rcy:de(e),ltx:he(e),lty:me(e),lbx:xe(e),lby:fe(e),rtx:ye(e),rty:ve(e),rbx:ge(e),rby:we(e)}),Ee=e=>V(.01*Math.min(e.w,e.h)),ke=e=>V(.01*Math.max(e.w,e.h)),Ce=e=>V(.01*e.w),Te=e=>V(.01*e.h),Me=e=>Object({...e,vmin:Ee(e),vmax:ke(e),vw:Ce(e),vh:Te(e)}),Le={x:Z,y:ee,w:te,h:oe,locational:ne,l:re,r:ae,t:ie,b:pe,wireframe:ce,cx:se,cy:le,rcx:ue,rcy:de,ltx:he,lty:me,lbx:xe,lby:fe,rtx:ye,rty:ve,rbx:ge,rby:we,point:be,vmin:Ee,vmax:ke,vw:Ce,vh:Te,viewport:Me,coordinate:e=>Object({...ne(e),...ce(e),...be(e),...Me(e)}),validate:e=>{const t=e.reduce(((e,t)=>e&&"number"==typeof t.x&&"number"==typeof t.y&&"number"==typeof t.w&&"number"==typeof t.h),!0);return t},add:e=>{const t=e.reduce(((e,t)=>({x:void 0!==e.x?e.x+t.x:t.x,y:void 0!==e.y?e.y+t.y:t.y,w:void 0!==e.w?e.w+t.w:t.w,h:void 0!==e.h?e.h+t.h:t.h})),{x:void 0,y:void 0,w:void 0,h:void 0});return t},box:e=>{const t=e.reduce(((e,t)=>({boxt:void 0!==e.boxt?isNaN(t.y)?e.boxt:Math.min(e.boxt,t.y):isNaN(t.y)?e.boxt:t.y,boxb:void 0!==e.boxb?isNaN(t.y+t.h)?e.boxb:Math.max(e.boxb,t.y+t.h):isNaN(t.y+t.h)?e.boxt:t.y+t.h,boxl:void 0!==e.boxl?isNaN(t.x)?e.boxl:Math.min(e.boxl,t.x):isNaN(t.x)?e.boxt:t.x,boxr:void 0!==e.boxr?isNaN(t.x+t.w)?e.boxr:Math.max(e.boxr,t.x+t.w):isNaN(t.x+t.w)?e.boxt:t.x+t.w})),{boxt:void 0,boxb:void 0,boxl:void 0,boxr:void 0});return{x:t.boxl,y:t.boxt,w:t.boxr-t.boxl,h:t.boxb-t.boxt}},wmin:e=>e.reduce(((e,t)=>t.w?Math.min(t.w,e):e),0),wmax:e=>e.reduce(((e,t)=>t.w?Math.max(t.w,e):e),0),hmin:e=>e.reduce(((e,t)=>t.h?Math.min(t.h,e):e),0),hmax:e=>e.reduce(((e,t)=>t.h?Math.max(t.h,e):e),0),pointcover:(e,t)=>t.x>=e.x&&t.x<=e.x+e.w&&t.y>=e.y&&t.y<=e.y+e.h};var Ae,Ne,Ue;const Se={dpr:()=>Ue,canvas:()=>Ae,context:()=>Ne,mount:(e,t,o)=>{Ae=e,Ne=t,Ue=o,K.removeEventListenerWithCanvas(Ae),K.addEventListenerWithCanvas(Ae)},render:e=>{Ne.clearRect(0,0,Ae.width,Ae.height),K.clearEventListener(),G.relocation(e),G.rerender(e)},Tag:G,Event:K,Location:Le},Pe=Se.Tag.Text.caculateLine,je=Se.Tag.Text.caculateLineLocation,Oe=e=>[e,...e.children.map((e=>Oe(e))).flat()],Re=(e,t)=>e.props.id===t?e:e.children.reduce(((e,o)=>e||Re(o,t)),null),ze={flatDom:Oe,getDomById:Re},Be={useAnimationCount:e=>{const[t,o]=L.useState(e.defaultCount),[n,r]=L.useState(e.defaultDelay),[a,i]=L.useState(e.defaultFlow);return L.useEffect((()=>{0!==n&&r(n-1)})),L.useEffect((()=>{!0===e.play&&0===n&&!0===e.reverse&&(t===e.min||t<e.min)&&i(0),!0===e.play&&0===n&&!0===e.reverse&&(t===e.max||t>e.max)&&i(1)})),L.useEffect((()=>{!0===e.play&&0===n&&0===a&&t<e.max&&o(t+e.rate),!0===e.play&&0===n&&1===a&&t>e.min&&o(t-e.rate)})),{animationCount:e.postprocess?e.postprocess(t):t,setAnimationCount:o,animationDelay:n,setAnimationDelay:r,animationFlow:a,setAnimationFlow:i}},useTransitionCount:e=>{const[t,o]=L.useState(e.defaultCount);return L.useEffect((()=>{var n=t;!0===e.play&&t!==e.destination&&t>e.destination&&(n-=e.rate),!0===e.play&&t!==e.destination&&t<e.destination&&(n+=e.rate),!0===e.play&&t>e.destination&&n<e.destination&&(n=e.destination),!0===e.play&&t<e.destination&&n>e.destination&&(n=e.destination),o(n)})),{transitionCount:e.postprocess?e.postprocess(t):t,setTransitionCount:o}},useImage:e=>{const t=L.useMemo((()=>new Image),[]);return L.useEffectImmediate((()=>t.src=e.src),[e.src]),L.useEffectImmediate((()=>t.onload=()=>e.onload?e.onload():void 0),[e.src]),{image:t}},useResourceReload:e=>{const[t,o]=L.useState(0),[n,r]=L.useState(!0);return L.useEffectImmediate((()=>{o(0),r(!0),e.resource.forEach((e=>fetch(e).then((()=>o((e=>e+1))))))}),[...e.resource]),L.useEffectImmediate((()=>r(t<e.resource.length)),[t]),{resourceCount:t,resourceLoading:n}},useLocationPropertyImmediate:e=>{const t=L.useRef(),o=L.useRef(e.default);return L.useEffectImmediate((()=>{if(t.current){const e=Object.keys(o.current);e.some((e=>o.current[e]!==t.current.props[e]))&&(o.current=e.reduce(((e,o)=>Object({...e,[o]:t.current.props[o]})),Object))}})),{ref:t,location:o.current}},useLocationPropertyLazy:e=>{const t=L.useRef(),[o,n]=L.useState(e.default);return L.useEffect((()=>{if(t.current){const e=Object.keys(o);e.some((e=>o[e]!==t.current.props[e]))&&n(e.reduce(((e,o)=>Object({...e,[o]:t.current.props[o]})),Object))}})),{ref:t,location:o,setLocation:n}},useLocationBox:e=>{const t=L.useRef(),[o,n]=L.useState(e.default);return L.useEffect((()=>{if(t.current){const e=Object.keys(o),r=Se.Location.box(ze.flatDom(t.current).filter((e=>e!==t.current)).map((e=>e.props)));e.some((e=>o[e]!==r[e]))&&n(e.reduce(((e,t)=>Object({...e,[t]:r[t]})),Object))}})),{ref:t,location:o,setLocation:n}},useDragControlMouse:e=>{const t=L.useRef(),o=L.useRef(),n=L.useCallback((t=>{e.onChange&&e.onChange(t)}),[e.onChange]),r=L.useCallback((r=>{if(!1===e.enable)return;const a=r.x,i=r.y;t.current={x:a,y:i},o.current={x:a,y:i},n({type:"mouse",status:"afterStart",e:r,x:a,y:i,changedX:0,changedY:0,continuedX:0,continuedY:0})}),[e.enable,e.onChange]),a=L.useCallback((r=>{if(!1===e.enable)return;if(void 0===o.current)return;const a=r.x,i=r.y,p=a-o.current.x,c=i-o.current.y,s=o.current.x-t.current.x,l=o.current.y-t.current.y;o.current={x:a,y:i},n({type:"mouse",status:"afterMove",e:r,x:a,y:i,changedX:p,changedY:c,continuedX:s,continuedY:l})}),[e.enable,e.onChange]),i=L.useCallback((r=>{if(!1===e.enable)return;if(void 0===o.current)return;const a=r.x,i=r.y,p=a-o.current.x,c=i-o.current.y,s=o.current.x-t.current.x,l=o.current.y-t.current.y;n({type:"mouse",status:"beforeEnd",e:r,x:a,y:i,changedX:p,changedY:c,continuedX:s,continuedY:l}),t.current=void 0,o.current=void 0,n({type:"mouse",status:"afterEnd",e:r,x:a,y:i,changedX:p,changedY:c,continuedX:s,continuedY:l})}),[e.enable,e.onChange]);return{onStart:r,onMove:a,onEnd:i}},useDragControlTouch:e=>{const t=L.useRef(),o=L.useRef(),n=L.useCallback((t=>{e.onChange&&e.onChange(t),e.onChangeMemo&&e.onChangeMemo(t)}),[e.onChange]),r=L.useCallback((r=>{if(!1===e.enable)return;const a=r.x,i=r.y;t.current={x:a,y:i},o.current={x:a,y:i};const p=[],c=[],s=[],l=[];a.forEach(((e,t)=>{p[t]=0,s[t]=0})),i.forEach(((e,t)=>{c[t]=0,l[t]=0})),n({type:"touch",status:"afterStart",e:r,x:a,y:i,changedX:p,changedY:c,continuedX:s,continuedY:l})}),[e.enable,e.onChange]),a=L.useCallback((r=>{if(!1===e.enable)return;if(void 0===o.current)return;const a=r.x,i=r.y,p=[],c=[],s=[],l=[];a.forEach(((e,n)=>{p[n]=e-o.current.x[n],s[n]=o.current.x[n]-t.current.x[n]})),i.forEach(((e,n)=>{c[n]=e-o.current.y[n],l[n]=o.current.y[n]-t.current.y[n]})),o.current={x:a,y:i},n({type:"touch",status:"afterMove",e:r,x:a,y:i,changedX:p,changedY:c,continuedX:s,continuedY:l})}),[e.enable,e.onChange]),i=L.useCallback((r=>{if(!1===e.enable)return;if(void 0===o.current)return;const a=r.x,i=r.y,p=[],c=[],s=[],l=[];a.forEach(((e,n)=>{p[n]=e-o.current.x[n],s[n]=o.current.x[n]-t.current.x[n]})),i.forEach(((e,n)=>{c[n]=e-o.current.y[n],l[n]=o.current.y[n]-t.current.y[n]})),n({type:"touch",status:"beforeEnd",e:r,x:a,y:i,changedX:p,changedY:c,continuedX:s,continuedY:l}),t.current=void 0,o.current=void 0,n({type:"touch",status:"afterEnd",e:r,x:a,y:i,changedX:p,changedY:c,continuedX:s,continuedY:l})}),[e.enable,e.onChange]);return{onStart:r,onMove:a,onEnd:i}}};var Fe,$e,He,Ie;const Xe=e=>({...e,props:{...e.element.props}}),_e=e=>{for(;e.children.some((e=>2!==e.type));)e.children=e.children.map((e=>2!==e.type?e.children:e)).flat();return e.children=e.children.map((t=>_e({...Xe(t),parent:e}))),e.getDomById=t=>ze.getDomById(e,t),e},De=e=>{const t=Xe({element:{props:Fe.coordinate},children:[e]}),o=_e(t);Se.render(o)},Ye={mount:(e,t,o)=>($e=(Fe=t).getContext("2d"),He=o&&o.dpr||2,Ie=o&&o.renderFrameTimeDiffMax||12,(()=>{const e=()=>{Fe.width=Fe.offsetWidth*He,Fe.height=Fe.offsetHeight*He,Fe.coordinate=Se.Location.coordinate({x:0,y:0,w:Fe.width,h:Fe.height})};e(),new window.ResizeObserver((()=>{Fe.width===Fe.offsetWidth*He&&Fe.height===Fe.offsetHeight*He||(e(),L.shouldRender(L.renderQueueNode()))})).observe(Fe)})(),Se.mount(Fe,$e,He),L.mount(e,Ie,De),{render:L.render}),Component:{CoordinateHelper:e=>{const[t,o]=L.useState(),[n,r]=L.useState();return L.createElement("layout",{x:"extend",y:"extend",w:"extend",h:"extend",onRenderUnmount:t=>(t=>{o(Math.ceil(t.props.w/e.gap/2)),r(Math.ceil(t.props.h/e.gap/2))})(t)},void 0!==t&&void 0!==n?L.createElement(L.Fragment,null,L.createElement("rect",{beginPath:!0,fill:!0,y:"extend",h:"extend",w:"0.1vmax",x:"calc(extend + 50vw)",globalAlpha:.5,fillStyle:e.color}),L.createElement("rect",{beginPath:!0,fill:!0,x:"extend",w:"extend",h:"0.1vmax",y:"calc(extend + 50vh)",globalAlpha:.5,fillStyle:e.color}),new Array(t).fill().map(((t,o)=>L.createElement(L.Fragment,null,L.createElement("rect",{beginPath:!0,fill:!0,y:"extend",h:"extend",w:"0.1vmax",x:`calc(extend + 50vw + ${e.gap*(o+1)})`,globalAlpha:.25,fillStyle:e.color}),L.createElement("rect",{beginPath:!0,fill:!0,y:"extend",h:"extend",w:"0.1vmax",x:`calc(extend + 50vw - ${e.gap*(o+1)})`,globalAlpha:.25,fillStyle:e.color})))),new Array(n).fill().map(((t,o)=>L.createElement(L.Fragment,null,L.createElement("rect",{beginPath:!0,fill:!0,x:"extend",w:"extend",h:"0.1vmax",y:`calc(extend + 50vh + ${e.gap*(o+1)})`,globalAlpha:.25,fillStyle:e.color}),L.createElement("rect",{beginPath:!0,fill:!0,x:"extend",w:"extend",h:"0.1vmax",y:`calc(extend + 50vh - ${e.gap*(o+1)})`,globalAlpha:.25,fillStyle:e.color}))))):null)},TextCaculateLine:e=>{const t=L.useMemo((()=>Pe(e.text,e.font,e.w,e.split).map((t=>Object({...e,...t})))),[e.w,e.text,e.font,e.split]),o=L.useMemo((()=>{var o,n;if(void 0!==e.lineHeight&&void 0!==e.gap){const r=je(t,e.lineHeight,e.gap);o=r.w,n=r.h}return{w:o,h:n}}),[t,e.lineHeight,e.gap]);return e.children.map((e=>e(t,o)))}},Plugin:Be,Utils:ze};function We(e){const[t,o]=L.useState(!1),n=new Array([45,60],[45,60],[45,60]).map((e=>Ye.Plugin.useTransitionCount({play:!0,defaultCount:e[0],destination:e[t?1:0],rate:(e[1]-e[0])/15,postprocess:e=>e.toFixed(0)})));return L.createElement("layout",{onClick:t=>{"mouse"===t.device&&Se.Location.pointcover(t.dom.props,{x:t.x,y:t.y})&&e.onClick&&e.onClick(),"touch"===t.device&&Se.Location.pointcover(t.dom.props,{x:t.x[0],y:t.y[0]})&&e.onClick&&e.onClick()},onMouseMove:e=>{o(Se.Location.pointcover(e.dom.props,{x:e.x,y:e.y}))},onTouchMove:e=>{o(Se.Location.pointcover(e.dom.props,{x:e.x[0],y:e.y[0]}))}},L.createElement("rect",{beginPath:!0,radius:8},L.createElement("fill",{fillStyle:`rgba(${n[0].transitionCount}, ${n[1].transitionCount}, ${n[2].transitionCount}, 1)`})),L.createElement("layout",{container:!0,horizontalAlignCenter:!0,verticalAlignCenter:!0},L.createElement(Ye.Component.TextCaculateLine,{text:e.text,font:"24px monospace",lineHeight:1,gap:12,w:e.w,split:" "},((t,o)=>L.createElement("layout",{h:o.h,item:!0},L.createElement("text",{fillText:!0,fillStyle:"rgba(255, 255, 255, 1)",align:"center",text:e.text,font:"24px monospace",lineHeight:1,gap:12,w:e.w,split:" ",wrap:!0,line:t}))))))}function Ge(e){const{ref:t,location:o}=Ye.Plugin.useLocationPropertyLazy({default:{w:0,h:0}});return L.useEffect((()=>e.setHeight(o.h+48)),[o.h]),L.createElement("layout",{container:!0,horizontalAlignCenter:!0,verticalAlignCenter:!0},L.createElement("layout",{w:"calc(100% - 48px)",h:"calc(100% - 48px)",item:!0},L.createElement("layout",{h:"fit-content(100%)",item:!0,container:!0,horizontalForward:!0,verticalForward:!0,wrap:!0,gap:24,onRenderUnmount:e=>t.current=e},e.content.map((e=>L.createElement("layout",{w:"180px",h:"64px",item:!0},L.createElement(We,{w:180,text:e.text,onClick:e.onClick})))))))}function qe(e){const[t,o]=L.useState(!1),[n,r]=L.useState(!1),{ref:a,location:i}=Ye.Plugin.useLocationPropertyLazy({default:{w:void 0,h:void 0}}),{ref:p,location:c}=Ye.Plugin.useLocationPropertyLazy({default:{w:void 0,h:void 0}}),{transitionCount:s}=Ye.Plugin.useTransitionCount({play:!0,defaultCount:t?1:0,destination:t?1:0,rate:.1,postprocess:e=>Number(e.toFixed(2))}),l=new Array([45,60],[45,60],[45,60]).map((e=>Ye.Plugin.useTransitionCount({play:!0,defaultCount:e[0],destination:e[n?1:0],rate:(e[1]-e[0])/15,postprocess:e=>e.toFixed(0)})));L.useEffect((()=>{!0===t&&i.h&&e.setHeight(i.h+48),!0!==t&&c.h&&e.setHeight(c.h+48)}),[i.h,c.h,t]);const u=L.useMemo((()=>e.content.map(((e,t)=>0===t?{...e,text:e.text+" "+"...".slice(0,Math.round(3-3*s))}:0!==t?e:void 0))),[e.content,s,i.w]);return L.createElement("layout",{onClick:e=>{"mouse"===e.device&&Se.Location.pointcover(e.dom.props,{x:e.x,y:e.y})&&o(!t),"touch"===e.device&&Se.Location.pointcover(e.dom.props,{x:e.x[0],y:e.y[0]})&&o(!t)},onMouseMove:e=>{r(Se.Location.pointcover(e.dom.props,{x:e.x,y:e.y}))},onTouchMove:e=>{r(Se.Location.pointcover(e.dom.props,{x:e.x[0],y:e.y[0]}))}},L.createElement("rect",{beginPath:!0,radius:16},L.createElement("fill",{fillStyle:`rgba(${l[0].transitionCount}, ${l[1].transitionCount}, ${l[2].transitionCount}, 1)`})),L.createElement("layout",{container:!0,horizontalAlignCenter:!0,verticalAlignCenter:!0},L.createElement("layout",{w:"calc(100% - 48px)",h:"calc(100% - 48px)",item:!0},L.createElement("rect",{beginPath:!0},L.createElement("clip",null,L.createElement("layout",{h:"fit-content(100%)",container:!0,verticalForward:!0,horizontalAlignForward:!0,gap:24,onRenderUnmount:e=>a.current=e},u.map(((e,t)=>L.createElement(Ye.Component.TextCaculateLine,{text:e.text,font:e.font,lineHeight:e.lineHeight,gap:e.gap,w:i.w,split:" "},((o,n)=>L.createElement("layout",{w:n.w,h:n.h,item:!0,onRenderUnmount:0===t?e=>p.current=e:void 0},L.createElement("text",{fillText:!0,fillStyle:e.fillStyle,align:e.align,text:e.text,font:e.font,lineHeight:e.lineHeight,gap:e.gap,w:i.w,split:" ",wrap:!0,line:o}))))))))))))}const Qe=function(e){const[t,o]=L.useState(0),[n,r]=L.useState(0),{ref:a,location:i}=Ye.Plugin.useLocationPropertyLazy({default:{w:0,h:0}}),{transitionCount:p,setTransitionCount:c}=Ye.Plugin.useTransitionCount({play:!0,defaultCount:t,destination:t,rate:.24*i.h/15,postprocess:e=>Number(e.toFixed(2))});return L.useEffect((()=>{0!==t&&0===p&&c(t)}),[t]),L.createElement(L.Fragment,null,L.createElement("layout",{onRenderUnmount:e=>a.current=e},L.createElement("layout",null,L.createElement(Ye.Component.CoordinateHelper,{gap:100,color:"rgba(255, 255, 255, 1)"})),L.createElement("layout",{container:!0,verticalCenter:!0,horizontalAlignCenter:!0,gap:24},L.createElement("layout",{h:n,item:!0},L.createElement(Ge,{setHeight:r,content:e.title})),L.createElement("layout",{h:`calc(100% - ${n}px)`,item:!0,shrink:1,container:!0,verticalCenter:!0,horizontalAlignCenter:!0,gap:24},L.createElement("layout",{w:"min(calc(100% - 120px), 1600px)",h:"60%",item:!0,shrink:1},e.GraphComponent),L.createElement("layout",{w:"min(calc(100% - 120px), 1600px)",h:`min(24%, ${p}px)`,item:!0,shrink:1},L.createElement(qe,{setHeight:o,content:e.description}))))))};function Je(){return L.createElement("rect",{beginPath:!0,fillStyle:"rgba(255, 255, 255, 1)",radius:16},L.createElement("fill",null),L.createElement("clip",null,L.createElement("layout",{container:!0,horizontalAlignCenter:!0,verticalAlignCenter:!0},L.createElement("layout",{w:"calc(100% - 48px)",h:"calc(100% - 48px)",gap:24,item:!0,container:!0,wrap:!0,horizontalCenter:!0,verticalCenter:!0},L.createElement(Ye.Component.CoordinateHelper,{gap:50,color:"rgba(135, 135, 135, 1)"})))))}const Ke=function(){const e=[{text:"CanvasXML"},{text:"Document",onClick:()=>window.open("https://github.com/wvOoOvw/20240601x001/tree/master/example/Rect")},{text:"Github",onClick:()=>window.open("https://github.com/wvOoOvw/20240601x001")},{text:"Npm",onClick:()=>window.open("https://www.npmjs.com/package/canvasxml")}];return L.createElement(Qe,{GraphComponent:L.createElement(Je,null),title:e,description:[{text:"Component <CoordinateHelper/> API",font:"28px monospace",fillStyle:"rgba(255, 255, 255, 1)",lineHeight:1,gap:14,align:"left"},{text:"This Is A Basic CoordinateHelper Component Display By Setting Different Orientations, Sizes, Rounded Corners, And Rendering Modes",font:"24px monospace",fillStyle:"rgba(185, 185, 185, 1)",lineHeight:1,gap:12,align:"left"}]})},Ve=document.createElement("canvas"),Ze=()=>{Ve.style.position="absolute",Ve.style.top="0px",Ve.style.left="0px",Ve.style.width="100%",Ve.style.height="100%",Ve.style.background="black",Ve.style.overflow="hidden"};Ze(),window.addEventListener("resize",Ze),window.addEventListener("wheel",(e=>e.preventDefault()),{passive:!1}),window.addEventListener("touchmove",(e=>e.preventDefault()),{passive:!1}),window.addEventListener("contextmenu",(e=>e.preventDefault()),{passive:!1}),document.body.appendChild(Ve),Ye.mount(L.createElement(Ke,null),Ve).render()})();