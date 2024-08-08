(()=>{"use strict";var e=void 0,o=0,t=0,n=!1,r=!1,p=void 0,a=void 0,i=[],s=[],c=[],l=[],d=[],u=void 0;const h=e=>{e.hooks.forEach((e=>{"function"==typeof e.effectPrevious&&e.type===g&&i.push((()=>e.effectPrevious()))})),e.hooks.forEach((e=>{"function"==typeof e.effectPrevious&&e.type===M&&e.effectPrevious()})),e.children.forEach((e=>h(e)))},v=e=>{var o={element:e,key:void 0,type:void 0,children:[],hooks:[],memo:void 0,update:void 0,create:void 0,parent:void 0};return!0===Boolean(e)&&"object"==typeof e||(o.type=0),!0===Boolean(e)&&"object"==typeof e&&"function"==typeof e.tag&&(o.type=1,o.key=e.key),!0===Boolean(e)&&"object"==typeof e&&"string"==typeof e.tag&&(o.type=2,o.key=e.key),!0===Boolean(e)&&"object"==typeof e&&!0===Array.isArray(e)&&(o.type=3,o.key=e.key),o},y=e=>{a={hooks:e.hooks,index:0,node:e};var o=[],t=[],n=[];return!0===e.memo&&!0!==l.includes(e)||1!==e.type||(o=new Array(e.element.tag({...e.element.props,children:e.element.props.children||e.element.children}))),!0===e.memo&&!0!==l.includes(e)||2!==e.type||(o=e.element.props.children||e.element.children),!0===e.memo&&!0!==l.includes(e)||3!==e.type||(o=e.element),!0===e.memo&&!0!==l.includes(e)&&0!==e.type&&(o=e.children.map((e=>e.element))),n=e.children,o.forEach(((o,r)=>{var p,a=e.children.findIndex((e=>e&&o&&"object"==typeof e&&"object"==typeof o&&void 0!==e.key&&e.key===o.key&&e.element.tag===o.tag));-1!==a&&e.children.splice(r,0,e.children.splice(a,1)[0]);const i=Boolean(e.children[r]&&e.children[r].element===o);!0===i&&(p=e.children[r]),!0!==i&&(p=v(o)),p.memo=i;const s=!i&&Boolean(e.children[r]&&e.children[r].type===p.type&&e.children[r].key===p.key&&e.children[r].element.tag===p.element.tag);!0===s&&(p.hooks=e.children[r].hooks,p.children=e.children[r].children),p.update=s,p.create=!1===i&&!1===s,p.parent=e,!0!==i&&!0!==s||(n=n.filter((o=>o!==e.children[r]))),t.push(y(p))})),e.children=t,n.forEach((e=>h(e))),e.hooks.forEach((e=>{"function"==typeof e.effect&&e.type===b&&e.effect()})),a=void 0,e},m=()=>{for(c=[],l=[],d=[],u&&(u=cancelAnimationFrame(u)),p&&h(p),p=v(e),n=!0,y(p),s(p);0!==i.length;)i.shift()();n=!1,r&&r!==(r=!1)&&x()},x=()=>{if(void 0===u){const e=performance.now();e-o<t&&(u=requestAnimationFrame((()=>{u=void 0,x()}))),(e-o>t||e-o===t)&&(u=requestAnimationFrame((()=>{for(u=void 0,o=e,l=Array.from(new Set(c)),d=l.filter((e=>{for(var o=!0;!0===o&&e.parent;)e=e.parent,o=l.every((o=>o!==e));return o})),c=[],n=!0,d.forEach((e=>y(e))),s(p);0!==i.length;)i.shift()();n=!1,l=[],d=[],r&&r!==(r=!1)&&x()})))}},f=e=>(...o)=>{try{if(void 0!==a.hooks[a.index]&&a.hooks[a.index].type!==e)throw Error(e);return e(...o)}finally{a.hooks[a.index].type=e,a.index=a.index+1}},w=e=>{c=[...c,e],!0===n&&(r=!0),!0!==n&&x()},g=(e,o)=>{var t;void 0===t&&(t=a.hooks[a.index]),void 0===t&&(t={effect:e}),a.hooks[a.index]=t,(void 0===t.dependence||t.dependence.some(((e,t)=>e!==o[t])))&&i.push((()=>t.effectPrevious=t.effectPrevious&&"function"==typeof t.effectPrevious?t.effectPrevious():void 0)),(void 0===t.dependence||t.dependence.some(((e,t)=>e!==o[t])))&&i.push((()=>t.effectPrevious=e())),t.dependence=o},M=(e,o)=>{var t;void 0===t&&(t=a.hooks[a.index]),void 0===t&&(t={effect:e}),a.hooks[a.index]=t,(void 0===t.dependence||t.dependence.some(((e,t)=>e!==o[t])))&&(t.effectPrevious=t.effectPrevious&&"function"==typeof t.effectPrevious?t.effectPrevious():void 0),(void 0===t.dependence||t.dependence.some(((e,t)=>e!==o[t])))&&(t.effectPrevious=e()),t.dependence=o},b=(e,o)=>{var t;void 0===t&&(t=a.hooks[a.index]),void 0===t&&(t={effect:e}),a.hooks[a.index]=t,(void 0===t.dependence||t.dependence.some(((e,t)=>e!==o[t])))&&(t.effect=e),t.dependence=o},E={renderQueueNode:()=>p,mount:(o,n,r)=>(e=o,t=n,s=r,{render:m}),unmount:()=>{for(p&&h(p),u&&(u=cancelAnimationFrame(u));0!==i.length;)i.shift()();e=void 0,o=0,t=0,n=!1,r=!1,p=void 0,a=void 0,i=[],s=[],c=[],l=[],d=[],u=void 0},render:m,renderNode:y,createElement:(e,o,...t)=>({tag:e,key:Object(o).key,props:o||Object(),children:t}),Fragment:e=>e.children,shouldRender:w,createContext:e=>{const o={value:e};return{context:o,Consumer:e=>e.children(o.value),Provider:e=>(void 0!==e.value&&(o.value=e.value),e.children)}},useContext:e=>e.context.value,useShouldRender:()=>{const e=a.node;return()=>w(e)},useState:f((e=>{var o;void 0===o&&(o=a.hooks[a.index]),void 0===o&&(o={state:e}),a.hooks[a.index]=o;const t=a.node;return[o.state,e=>{const n=o.state;"function"==typeof e&&(o.state=e(o.state)),"function"!=typeof e&&(o.state=e),o.state!==n&&w(t)}]})),useRef:f((e=>{var o;return void 0===o&&(o=a.hooks[a.index]),void 0===o&&(o={current:e}),a.hooks[a.index]=o,o})),useEffect:f(g),useEffectImmediateLoopEnd:f(b),useEffectImmediate:f(M),useMemo:f(((e,o)=>{var t;return void 0===t&&(t=a.hooks[a.index]),void 0===t&&(t={memo:e}),a.hooks[a.index]=t,(void 0===t.dependence||t.dependence.some(((e,t)=>e!==o[t])))&&(t.memo=e()),t.dependence=o,t.memo})),useCallback:f(((e,o)=>{var t;return void 0===t&&(t=a.hooks[a.index]),void 0===t&&(t={callback:e}),a.hooks[a.index]=t,(void 0===t.dependence||t.dependence.some(((e,t)=>e!==o[t])))&&(t.callback=e),t.dependence=o,t.callback}))},k=E,U=e=>isNaN(e)?NaN:e,A=e=>U(e.x),P=e=>U(e.y),_=e=>U(e.w),C=e=>U(e.h),O=e=>Object({x:A(e),y:P(e),w:_(e),h:C(e)}),B=e=>U(e.x),T=e=>U(e.x+e.w),j=e=>U(e.y),I=e=>U(e.y+e.h),L=e=>Object({l:B(e),r:T(e),t:j(e),b:I(e)}),R=e=>U(e.x+e.w/2),z=e=>U(e.y+e.h/2),S=e=>U(e.x),N=e=>U(e.y),F=e=>U(e.x),D=e=>U(e.y+e.h),$=e=>U(e.x+e.w),H=e=>U(e.y),X=e=>U(e.x+e.w),Y=e=>U(e.y+e.h),W=e=>Object({cx:R(e),cy:z(e),ltx:S(e),lty:N(e),lbx:F(e),lby:D(e),rtx:$(e),rty:H(e),rbx:X(e),rby:Y(e)}),q=e=>U(.01*Math.min(e.w,e.h)),Q=e=>U(.01*Math.max(e.w,e.h)),J=e=>U(.01*e.w),G=e=>U(.01*e.h),K=e=>Object({vmin:q(e),vmax:Q(e),vw:J(e),vh:G(e)}),V=e=>Object({...O(e),...L(e),...W(e),...K(e)}),Z=e=>{const o=e.reduce(((e,o)=>({x:void 0!==e.x?e.x+o.x:o.x,y:void 0!==e.y?e.y+o.y:o.y,w:void 0!==e.w?e.w+o.w:o.w,h:void 0!==e.h?e.h+o.h:o.h})),{x:void 0,y:void 0,w:void 0,h:void 0});return o};var ee=[],oe=[];const te=()=>{ee=[]},ne={locationMount:e=>{Le.locationMount(e)},locationUnmount:e=>{Le.locationUnmount(e)},renderMount:e=>{Le.renderMount_0(e),De.context().arc(e.props.cx,e.props.cy,e.props.radius,e.props.sAngle,e.props.eAngle,e.props.counterclockwise),Le.renderMount_1(e)},renderUnmount:e=>{Le.renderUnmount_0(e),Le.renderUnmount_1(e,((o,t)=>{return n=o,r=t,p=e.props.cx,a=e.props.cy,i=e.props.radius,e.props.sAngle,e.props.eAngle,e.props.counterclockwise,(Math.abs(n-p)**2+Math.abs(r-a)**2)**.5<=i;var n,r,p,a,i}))}},re=ne,pe={locationMount:e=>{Le.locationMount(e)},locationUnmount:e=>{Le.locationUnmount(e)},renderMount:e=>{Le.renderMount_0(e),De.context().moveTo(e.props.cx,e.props.cy),De.context().arc(e.props.cx,e.props.cy,e.props.radius,e.props.sAngle,e.props.eAngle,e.props.counterclockwise),De.context().lineTo(e.props.cx,e.props.cy),Le.renderMount_1(e)},renderUnmount:e=>{Le.renderUnmount_0(e),Le.renderUnmount_1(e,((o,t)=>((e,o,t,n,r,p,a,i)=>{const s=(Math.abs(e-t)**2+Math.abs(o-n)**2)**.5,c=Math.atan2(o-n,e-t),l=c+(c<0?2*Math.PI:0);var d=p,u=a,h=i;for(!0===Boolean(i)&&p>a&&p-a>=2*Math.PI&&(d=2*Math.PI,u=0),!0!==Boolean(i)&&p<a&&a-p>=2*Math.PI&&(d=0,u=2*Math.PI);d>2*Math.PI;)d-=2*Math.PI;for(;u>2*Math.PI;)u-=2*Math.PI;for(;d<0;)d+=2*Math.PI;for(;u<0;)u+=2*Math.PI;if(!0===Boolean(i)&&d>u){h=!Boolean(i);var[d,u]=[u,d]}if(!0!==Boolean(i)&&d>u){h=!Boolean(i);var[d,u]=[u,d]}return!0===Boolean(h)?s<=r&&(l<=d||l>=u):!0!==Boolean(h)?s<=r&&l>=d&&l<=u:void 0})(o,t,e.props.cx,e.props.cy,e.props.radius,e.props.sAngle,e.props.eAngle,e.props.counterclockwise)))}},ae=pe,ie={locationMount:e=>{Le.locationMount(e)},locationUnmount:e=>{Le.locationUnmount(e)},renderMount:e=>{Le.renderMount_0(e),De.context().clip(),Le.renderMount_1(e)},renderUnmount:e=>{Le.renderUnmount_0(e)}},se={locationMount:e=>{Le.locationMount(e)},locationUnmount:e=>{Le.locationUnmount(e)},renderMount:e=>{Le.renderMount_0(e),De.context().fill(),Le.renderMount_1(e)},renderUnmount:e=>{Le.renderUnmount_0(e)}},ce={locationMount:e=>{Le.locationMount(e)},locationUnmount:e=>{Le.locationUnmount(e)},renderMount:e=>{if(void 0===e.props.beginPath&&(e.props.beginPath=!1),Le.renderMount_0(e),e.props.src){const o=((e,o,t,n)=>{var{x:r,y:p,w:a,h:i}=e;if(o&&0!==o.width&&0!==o.height){var s=0,c=0,l=o.width,d=o.height;if("auto-max"===t&&"center"===n){const e=a/l,o=i/d;e>o&&(c=d-d*o/e,d-=d-d*o/e),o>e&&(s=l-l*e/o,l-=l-l*e/o)}if("auto-min"===t&&"center"===n){const e=a/l,o=i/d;e>o&&(r+=(a-a*o/e)/2,a-=a-a*o/e),o>e&&(p+=(i-i*e/o)/2,i-=i-i*e/o)}return{sx:s,sy:c,sw:l,sh:d,x:r,y:p,w:a,h:i}}})({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},e.props.src,e.props.size,e.props.position);1===e.props.key&&console.log(o),void 0!==o&&De.context().drawImage(e.props.src,o.sx,o.sy,o.sw,o.sh,o.x,o.y,o.w,o.h)}Le.renderMount_1(e)},renderUnmount:e=>{Le.renderUnmount_0(e)}},le=ce,de=(e,o,t)=>{var n=0,r=!1,p=[];return o.forEach((o=>{!1===r&&(n+o.w+t<e.w||n+o.w+t===e.w)&&p.push(o),!1===r&&(n+o.w+t<e.w||n+o.w+t===e.w)&&(n=n+o.w+t),n+o.w+t>e.w&&(r=!0)})),{result:p,rest:o.filter(((e,o)=>o>p.length-1))}},ue=(e,o,t)=>{var n=0,r=!1,p=[];return o.forEach((o=>{!1===r&&(n+o.h+t<e.h||n+o.h+t===e.h)&&p.push(o),!1===r&&(n+o.h+t<e.h||n+o.h+t===e.h)&&(n=n+o.h+t),n+o.h+t>e.h&&(r=!0)})),{result:p,rest:o.filter(((e,o)=>o>p.length-1))}},he={horizontalForward:(e,o,t)=>{var n=0;return o.forEach((e=>{e.x=n,n=n+e.w+t})),o},horizontalReverse:(e,o,t)=>{var n=0;return o.forEach((o=>{o.x=e.w-o.w-n,n=n+o.w+t})),o},horizontalCenter:(e,o,t)=>{var n=0,r=Z(o).w+(o.length-1)*t;return o.forEach((o=>{o.x=(e.w-r)/2+n,n=n+o.w+t})),o},horizontalAround:(e,o)=>{var t=0,n=Z(o).w;return o.forEach(((r,p)=>{r.x=(e.w-n)/(o.length+1)*(p+1)+t,t+=r.w})),o},horizontalBetween:(e,o)=>{var t=0,n=Z(o).w;return o.forEach(((r,p)=>{r.x=(e.w-n)/(o.length-1)*p+t,t+=r.w})),o},horizontalAlignForward:(e,o)=>(o.forEach(((e,o)=>{e.x=0})),o),horizontalAlignReverse:(e,o)=>(o.forEach(((o,t)=>{o.x=e.w-o.w})),o),horizontalAlignCenter:(e,o)=>(o.forEach(((o,t)=>{o.x=(e.w-o.w)/2})),o),verticalForward:(e,o,t)=>{var n=0;return o.forEach((e=>{e.y=n,n=n+e.h+t})),o},verticalReverse:(e,o,t)=>{var n=0;return o.forEach((o=>{o.y=e.h-o.h-n,n=n+o.h+t})),o},verticalCenter:(e,o,t)=>{var n=0,r=Z(o).h+(o.length-1)*t;return o.forEach((o=>{o.y=(e.h-r)/2+n,n=n+o.h+t})),o},verticalAround:(e,o)=>{var t=0,n=Z(o).h;return o.forEach(((r,p)=>{r.y=(e.h-n)/(o.length+1)*(p+1)+t,t+=r.h})),o},verticalBetween:(e,o)=>{var t=0,n=Z(o).h;return o.forEach(((r,p)=>{r.y=(e.h-n)/(o.length-1)*p+t,t+=r.h})),o},verticalAlignForward:(e,o)=>(o.forEach(((e,o)=>{e.y=0})),o),verticalAlignReverse:(e,o)=>(o.forEach(((o,t)=>{o.y=e.h-o.h})),o),verticalAlignCenter:(e,o)=>(o.forEach(((o,t)=>{o.y=(e.h-o.h)/2})),o)},ve={locationMount:e=>{if(Le.locationMount(e),!0===Boolean(e.props.container)&&e.children.length>0){const o=e.props.gap||0,t=e.children.filter((e=>"layout"===e.element.tag&&!0===Boolean(e.props.item)));t.forEach((e=>{Le.locationMount(e),e.props={...e.element.props,w:e.props.w,h:e.props.h}}));const n=t.map((e=>e.props)),r=Object.keys(e.props).findIndex((e=>["horizontalForward","horizontalReverse","horizontalCenter","horizontalAround","horizontalAround","horizontalBetween"].includes(e))),p=Object.keys(e.props).findIndex((e=>["verticalForward","verticalReverse","verticalCenter","verticalAround","verticalAround","verticalBetween"].includes(e))),a=Object.keys(e.props).findIndex((e=>["horizontalAlignForward","horizontalAlignReverse","horizontalAlignCenter"].includes(e))),i=Object.keys(e.props).findIndex((e=>["verticalAlignForward","verticalAlignReverse","verticalAlignCenter"].includes(e)));!0===Boolean(e.props.wrap)&&r>-1&&p>-1&&r<p&&((e,o,t,n,r)=>{for(var p=[],a=o;a.length;){const o=de(e,a,r);0===o.result.length&&(p=[...p,o.rest[0]],a=o.rest.filter(((e,o)=>0!==o))),o.result.length>0&&(p=[...p,o.result],a=o.rest)}n(e,p.map((o=>{return Object({y:e.y,h:(t=o,t.reduce(((e,o)=>o.h?Math.max(o.h,e):e),0))});var t})),r).forEach(((e,o)=>p[o].forEach((o=>o.y=e.y)))),p.forEach((o=>t({x:e.x,y:o.y,w:e.w},o,r)))})({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,he[Object.keys(e.props)[r]],he[Object.keys(e.props)[p]],o),!0===Boolean(e.props.wrap)&&p>-1&&p>-1&&p<r&&((e,o,t,n,r)=>{for(var p=[],a=o;a.length;){const o=ue(e,a,r);0===o.result.length&&(p=[...p,o.rest[0]],a=o.rest.filter(((e,o)=>0!==o))),o.result.length>0&&(p=[...p,o.result],a=o.rest)}n(e,p.map((o=>{return Object({x:e.x,w:(t=o,t.reduce(((e,o)=>o.w?Math.max(o.w,e):e),0))});var t})),r).forEach(((e,o)=>p[o].forEach((o=>o.x=e.x)))),p.forEach((o=>t({y:e.y,h:e.h},o)),r)})({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,he[Object.keys(e.props)[p]],he[Object.keys(e.props)[r]],o),!1===Boolean(e.props.wrap)&&(r>-1&&((e,o,t)=>{const n=o.reduce(((e,o)=>e+o.w),0)+t*(o.length-1),r=o.reduce(((e,o)=>e+(o.grow||0)),0),p=o.reduce(((e,o)=>e+(o.shrink||0)),0);n>e.w&&p>0&&o.forEach((o=>{o.shrink&&(o.w=o.w-(n-e.w)*(o.shrink/p))})),n<e.w&&r>0&&o.forEach((o=>{o.grow&&(o.w=o.w-(n-e.w)*(o.grow/r))}))})({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,o),p>-1&&((e,o,t)=>{const n=o.reduce(((e,o)=>e+o.h),0)+t*(o.length-1),r=o.reduce(((e,o)=>e+(o.grow||0)),0),p=o.reduce(((e,o)=>e+(o.shrink||0)),0);n>e.h&&p>0&&o.forEach((o=>{o.shrink&&(o.h=o.h-(n-e.h)*(o.shrink/p))})),n<e.h&&r>0&&o.forEach((o=>{o.grow&&(o.h=o.h-(n-e.h)*(o.grow/r))}))})({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,o),r>-1&&he[Object.keys(e.props)[r]]({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,o),p>-1&&he[Object.keys(e.props)[p]]({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,o),a>-1&&he[Object.keys(e.props)[a]]({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,o),i>-1&&he[Object.keys(e.props)[i]]({x:e.props.x,y:e.props.y,w:e.props.w,h:e.props.h},n,o))}},locationUnmount:e=>{Le.locationUnmount(e)},renderMount:e=>{void 0===e.props.beginPath&&(e.props.beginPath=!1),Le.renderMount_0(e),Le.renderMount_1(e)},renderUnmount:e=>{Le.renderUnmount_0(e)}},ye=ve,me={locationMount:e=>{Le.locationMount(e)},locationUnmount:e=>{Le.locationUnmount(e)},renderMount:e=>{Le.renderMount_0(e),e.children.filter((e=>"path"===e.element.tag)).map((e=>e.props)).forEach(((e,o)=>{0===o&&De.context().moveTo(e.x,e.y),0===o&&De.context().lineTo(e.x,e.y),0!==o&&De.context().lineTo(e.x,e.y)})),Le.renderMount_1(e)},renderUnmount:e=>{Le.renderUnmount_0(e)}},xe={locationMount:e=>{Le.locationMount(e)},locationUnmount:e=>{Le.locationUnmount(e)},renderMount:e=>{Le.renderMount_0(e),Le.renderMount_1(e)},renderUnmount:e=>{Le.renderUnmount_0(e)}},fe={locationMount:e=>{Le.locationMount(e)},locationUnmount:e=>{Le.locationUnmount(e)},renderMount:e=>{Le.renderMount_0(e),De.context().rect(e.props.x,e.props.y,e.props.w,e.props.h),Le.renderMount_1(e)},renderUnmount:e=>{Le.renderUnmount_0(e),Le.renderUnmount_1(e,((o,t)=>{return n=o,r=t,p=e.props.x,a=e.props.y,i=e.props.w,s=e.props.h,n>=p&&n<=p+i&&r>=a&&r<=a+s;var n,r,p,a,i,s}))}},we=fe,ge=(e,o,t,n)=>(Math.abs(e-t)**2+Math.abs(o-n)**2)**.5,Me=(e,o,t,n)=>{var r=Math.atan2(o-n,e-t);return r<0&&(r+=2*Math.PI),r},be=e=>{var o=new Array(4).fill(0);return e&&"object"==typeof e&&(o=e),e&&"number"==typeof e&&(o=new Array(4).fill(e)),o},Ee={locationMount:e=>{Le.locationMount(e)},locationUnmount:e=>{Le.locationUnmount(e)},renderMount:e=>{Le.renderMount_0(e);const o=be(e.props.radius);o.forEach(((t,n)=>{o[n]>e.props.w/2&&(o[n]=e.props.w/2),o[n]>e.props.h/2&&(o[n]=e.props.h/2),o[n]<0&&(o[n]=0)})),De.context().moveTo(e.props.x,e.props.y+o[0]),De.context().arcTo(e.props.x,e.props.y,e.props.x+o[0],e.props.y,o[0]),De.context().lineTo(e.props.x+e.props.w-o[1],e.props.y),De.context().arcTo(e.props.x+e.props.w,e.props.y,e.props.x+e.props.w,e.props.y+o[1],o[1]),De.context().lineTo(e.props.x+e.props.w,e.props.y+e.props.h-o[2]),De.context().arcTo(e.props.x+e.props.w,e.props.y+e.props.h,e.props.x+e.props.w-o[2],e.props.y+e.props.h,o[2]),De.context().lineTo(e.props.x+o[3],e.props.y+e.props.h),De.context().arcTo(e.props.x,e.props.y+e.props.h,e.props.x,e.props.y+e.props.h-o[3],o[3]),De.context().lineTo(e.props.x,e.props.y+o[0]),Le.renderMount_1(e)},renderUnmount:e=>{Le.renderUnmount_0(e),Le.renderUnmount_1(e,((o,t)=>((e,o,t,n,r,p,a)=>{const i=e>=t&&e<=t+r&&o>=n&&o<=n+p;return!(!0===i&&e>t+r/2&&o>n+p/2&&ge(e,o,t+r-a[2],n+p-a[2])>a[2]&&Me(e,o,t+r-a[2],n+p-a[2])>0*Math.PI&&Me(e,o,t+r-a[2],n+p-a[2])<.5*Math.PI)&&!(!0===i&&e<t+r/2&&o>n+p/2&&ge(e,o,t+a[3],n+p-a[3])>a[3]&&Me(e,o,t+a[3],n+p-a[3])>.5*Math.PI&&Me(e,o,t+a[3],n+p-a[3])<1*Math.PI)&&!(!0===i&&e<t+r/2&&o<n+p/2&&ge(e,o,t+a[0],n+a[0])>a[0]&&Me(e,o,t+a[0],n+a[0])>1*Math.PI&&Me(e,o,t+a[0],n+a[0])<1.5*Math.PI)&&!(!0===i&&e>t+r/2&&o<n+p/2&&ge(e,o,t+r-a[1],n+a[1])>a[1]&&Me(e,o,t+r-a[1],n+a[1])>1.5*Math.PI&&Me(e,o,t+r-a[1],n+a[1])<2*Math.PI)&&i})(o,t,e.props.x,e.props.y,e.props.w,e.props.h,be(e.props.radius))))}},ke=Ee,Ue={locationMount:e=>{Le.locationMount(e)},locationUnmount:e=>{Le.locationUnmount(e)},renderMount:e=>{void 0===e.props.beginPath&&(e.props.beginPath=!1),Le.renderMount_0(e),De.context().rotate(e.props.rotateAngle),Le.renderMount_1(e)},renderUnmount:e=>{Le.renderUnmount_0(e)}},Ae={locationMount:e=>{Le.locationMount(e)},locationUnmount:e=>{Le.locationUnmount(e)},renderMount:e=>{void 0===e.props.beginPath&&(e.props.beginPath=!1),Le.renderMount_0(e),De.context().scale(e.props.scaleW,e.props.scaleH),Le.renderMount_1(e)},renderUnmount:e=>{Le.renderUnmount_0(e)}},Pe={locationMount:e=>{Le.locationMount(e)},locationUnmount:e=>{Le.locationUnmount(e)},renderMount:e=>{Le.renderMount_0(e),De.context().stroke(),Le.renderMount_1(e)},renderUnmount:e=>{Le.renderUnmount_0(e)}},_e=(e,o,t,n,r,p)=>{r=r||"",p=p||"";const a=Number(o.match(/[\d\.]+px/)[0].replace("px",""));De.context().save(),De.context().font=o;var i="",s=[];return e=e.split(p).map(((e,o)=>o?[p,e]:[e])).flat(),!0===Boolean(n)&&e.forEach((e=>{const o=De.context().measureText(i+e).width;o>t&&""!==i&&s.push(i),o>t&&""!==i&&(i=e),o>t&&""===i&&s.push(e),o<t&&(i+=e)})),!0!==Boolean(n)&&e.some((e=>{const o=De.context().measureText(i+e+r).width;return o>t&&s.push(i+r),o>t&&(i=""),o<t&&(i+=e),s.length>0})),i&&s.push(i),s=s.map((e=>({text:e.trim(),w:De.context().measureText(e.trim()).width,h:a}))),De.context().restore(),s},Ce={locationMount:e=>{Le.locationMount(e)},locationUnmount:e=>{Le.locationUnmount(e)},renderMount:e=>{Le.renderMount_0(e);const o=e.props.lineHeight||1,t=e.props.gap||0,n=Number(De.context().font.match(/[\d\.]+px/)[0].replace("px",""));(e.props.line?e.props.line:_e(e.props.text,e.props.font,e.props.w,e.props.wrap,e.props.ellipsis,e.props.split)).forEach(((r,p)=>{var a=e.props.x,i=e.props.y,s=n*o;i=(i=i-.18*n-.5*(s-n))+(p+1)*s+p*t,e.props.align,"center"===e.props.align&&(a+=(e.props.w-r.w)/2),"right"===e.props.align&&(a+=e.props.w-r.w),!0===Boolean(e.props.fillText)&&De.context().fillText(r.text,a,i),!0===Boolean(e.props.strokeText)&&De.context().strokeText(r.text,a,i)})),Le.renderMount_1(e)},renderUnmount:e=>{Le.renderUnmount_0(e)}};Ce.caculateLine=_e,Ce.caculateLineLocation=(e,o,t)=>{const n=Math.max(...e.map((e=>e.w))),r=e.reduce(((e,n,r)=>e+n.h*o+(r?t:0)),0);return{w:n,h:r}};const Oe=Ce,Be={locationMount:e=>{Le.locationMount(e)},locationUnmount:e=>{Le.locationUnmount(e)},renderMount:e=>{void 0===e.props.beginPath&&(e.props.beginPath=!1),Le.renderMount_0(e),De.context().translate(e.props.translateX,e.props.translateY),Le.renderMount_1(e)},renderUnmount:e=>{Le.renderUnmount_0(e)}},Te=e=>"arc"===e?re:"circle"===e?ae:"clip"===e?ie:"fill"===e?se:"image"===e?le:"layout"===e?ye:"line"===e?me:"path"===e?xe:"rect"===e?we:"rectradius"===e?ke:"rotate"===e?Ue:"scale"===e?Ae:"stroke"===e?Pe:"text"===e?Oe:"translate"===e?Be:void 0,je=e=>{const o=Te(e.element.tag);void 0!==o&&"function"==typeof e.props.onLocationMount&&e.props.onLocationMount(e),void 0!==o&&o.locationMount(e),void 0!==o&&"function"==typeof e.props.onLocationMounted&&e.props.onLocationMounted(e),e.children&&e.children.forEach((e=>je(e))),void 0!==o&&"function"==typeof e.props.onLocationUnmount&&e.props.onLocationUnmount(e),void 0!==o&&o.locationUnmount(e),void 0!==o&&"function"==typeof e.props.onLocationUnmounted&&e.props.onLocationUnmounted(e)},Ie=e=>{const o=Te(e.element.tag);void 0!==o&&"function"==typeof e.props.onRenderMount&&e.props.onRenderMount(e),void 0!==o&&o.renderMount(e),void 0!==o&&"function"==typeof e.props.onRenderMounted&&e.props.onRenderMounted(e),e.children&&e.children.sort(((e,o)=>(e.props.zIndex||0)-(o.props.zIndex||0))).forEach((e=>Ie(e))),void 0!==o&&"function"==typeof e.props.onRenderUnmount&&e.props.onRenderUnmount(e),void 0!==o&&o.renderUnmount(e),void 0!==o&&"function"==typeof e.props.onRenderUnmounted&&e.props.onRenderUnmounted(e)},Le={pick:Te,relocation:je,rerender:Ie,locationMount:e=>{const o=o=>o.every((o=>void 0===e.props[o])),t=(o,n)=>{if("number"==typeof o)return o;if("string"==typeof o){if(o.match(/^[\d\.-]+$/)&&!1===isNaN(o))return Number(o);if(o.match(/^.+px$/))return Number(o.replace(/px/,""));if(o.match(/^min\(.+\)$/)){const e=o.replace(/^min\(/,"").replace(/\)$/,"").split(/\s?,\s?/);return e.forEach(((o,r)=>{e[r]=t(o,n)})),Math.min(...e)}if(o.match(/^max\(.+\)$/)){const e=o.replace(/^max\(/,"").replace(/\)$/,"").split(/(\s+)?,(\s+)?/);return e.forEach(((o,r)=>{e[r]=t(o,n)})),Math.max(...e)}if(o.match(/^.+%$/)){if("x"===n||"cx"===n||"gx"===n||"w"===n||"l"===n||"r"===n)return e.parent.props.w*Number(o.replace(/%/,""))/100;if("y"===n||"cy"===n||"gy"===n||"h"===n||"r"===n||"b"===n)return e.parent.props.h*Number(o.replace(/%/,""))/100}if(o.match(/^.+vmin$/))return e.parent.props.vmin*Number(o.replace(/vmin/,""));if(o.match(/^.+vmax$/))return e.parent.props.vmax*Number(o.replace(/vmax/,""));if(o.match(/^.+vw$/))return e.parent.props.vw*Number(o.replace(/vw/,""));if(o.match(/^.+vh$/))return e.parent.props.vh*Number(o.replace(/vh/,""));if(o.match(/^calc\(.+\)$/))return o.replace(/^calc\(/,"").replace(/\)$/,"").split(/\s+/).reduce(((e,o)=>("+"!==o&&"-"!==o&&"*"!==o&&"/"!==o||(e.operator=o),"+"!==o&&"-"!==o&&"*"!==o&&"/"!==o&&"+"===e.operator&&(e.value=e.value+t(o,n)),"+"!==o&&"-"!==o&&"*"!==o&&"/"!==o&&"-"===e.operator&&(e.value=e.value-t(o,n)),"+"!==o&&"-"!==o&&"*"!==o&&"/"!==o&&"*"===e.operator&&(e.value=e.value*t(o,n)),"+"!==o&&"-"!==o&&"*"!==o&&"/"!==o&&"/"===e.operator&&(e.value=e.value/t(o,n)),"+"!==o&&"-"!==o&&"*"!==o&&"/"!==o&&void 0===e.operator&&(e.value=t(o,n)),e)),{value:void 0,operator:void 0}).value}};void 0!==e.props.w&&(e.props.w=t(e.props.w,"w")),void 0===e.props.w&&(e.props.w=e.parent.props.w),void 0!==e.props.h&&(e.props.h=t(e.props.h,"h")),void 0===e.props.h&&(e.props.h=e.parent.props.h),void 0!==e.props.x&&(e.props.x=e.parent.props.x+t(e.props.x,"x")),void 0===e.props.x&&o(["cx","gx","l","r"])&&(e.props.x=e.parent.props.x),void 0!==e.props.y&&(e.props.y=e.parent.props.y+t(e.props.y,"y")),void 0===e.props.y&&o(["cy","gy","t","b"])&&(e.props.y=e.parent.props.y),void 0!==e.props.cx&&o(["x","gx","l","r"])&&(e.props.x=e.parent.props.x-e.props.w/2+t(e.props.cx,"cx")),void 0!==e.props.cy&&o(["y","gy","t","b"])&&(e.props.y=e.parent.props.y-e.props.h/2+t(e.props.cy,"cy")),void 0!==e.props.gx&&o(["x","cx","l","r"])&&(e.props.x=t(e.props.gx,"gx")),void 0!==e.props.gy&&o(["y","cy","t","b"])&&(e.props.y=t(e.props.gy,"gy")),void 0!==e.props.l&&o(["x","cx","gx","r"])&&(e.props.x=e.parent.props.x+t(e.props.l,"l")),void 0!==e.props.r&&o(["x","cx","gx","l"])&&(e.props.x=e.parent.props.x+e.parent.props.w-e.props.w-t(e.props.r,"r")),void 0!==e.props.t&&o(["y","cy","gy","b"])&&(e.props.y=e.parent.props.y+t(e.props.t,"t")),void 0!==e.props.b&&o(["y","cy","gy","t"])&&(e.props.y=e.parent.props.y+e.parent.props.h-e.props.h-t(e.props.b,"b")),Object.assign(e.props,V(e.props))},locationUnmount:e=>{Object.assign(e.props,V(e.props))},renderMount_0:e=>{if(void 0!==e.props.save&&!0!==Boolean(e.props.save)||De.context().save(),void 0!==e.props.beginPath&&!0!==Boolean(e.props.beginPath)||De.context().beginPath(),void 0!==e.props.globalAlpha&&(De.context().globalAlpha=De.context().globalAlpha*e.props.globalAlpha),void 0!==e.props.font&&(De.context().font=e.props.font),void 0!==e.props.fillStyle&&(De.context().fillStyle=e.props.fillStyle),void 0!==e.props.strokeStyle&&(De.context().strokeStyle=e.props.strokeStyle),void 0!==e.props.shadowBlur&&(De.context().shadowBlur=e.props.shadowBlur),void 0!==e.props.shadowColor&&(De.context().shadowColor=e.props.shadowColor),void 0!==e.props.shadowOffsetX&&(De.context().shadowOffsetX=e.props.shadowOffsetX),void 0!==e.props.shadowOffsetY&&(De.context().shadowOffsetY=e.props.shadowOffsetY),void 0!==e.props.lineWidth&&(De.context().lineWidth=e.props.lineWidth),void 0!==e.props.transform){const o=(e,o)=>{"rotate"===e&&De.context().rotate(o.angle),"scale"===e&&De.context().scale(o.w,o.h),"translate"===e&&De.context().translate(o.x,o.y)};e.props.transform.forEach((e=>Object.keys(e).forEach((t=>o(t,e[t])))))}},renderMount_1:e=>{!0===Boolean(e.props.clip)&&De.context().clip(),!0===Boolean(e.props.fill)&&De.context().fill(),!0===Boolean(e.props.stroke)&&De.context().stroke(),!0!==Boolean(e.props.isolated)||void 0!==e.props.save&&!0!==Boolean(e.props.save)||De.context().restore()},renderUnmount_0:e=>{!0===Boolean(e.props.isolated)||void 0!==e.props.save&&!0!==Boolean(e.props.save)||De.context().restore()},renderUnmount_1:(e,o)=>{[{type:"click",event:e.props.onClick,eventAway:e.props.onClickAway,option:e.props.onClickOption},{type:"touchstart",event:e.props.onTouchStart||e.props.onPointerDown,eventAway:e.props.onTouchStartAway||e.props.onPointerDownAway,option:e.props.onTouchStartOption||e.props.onPointerDownOption},{type:"touchmove",event:e.props.onTouchMove||e.props.onPointerMove,eventAway:e.props.onTouchMoveAway||e.props.onPointerMoveAway,option:e.props.onTouchMoveOption||e.props.onPointerMoveOption},{type:"touchend",event:e.props.onTouchEnd||e.props.onPointerUp,eventAway:e.props.onTouchEndAway||e.props.onPointerUpAway,option:e.props.onTouchEndOption||e.props.onPointerUpOption},{type:"mousedown",event:e.props.onMouseDown||e.props.onPointerDown,eventAway:e.props.onMouseDownAway||e.props.onPointerDownAway,option:e.props.onMouseDownOption||e.props.onPointerDownOption},{type:"mousemove",event:e.props.onMouseMove||e.props.onPointerMove,eventAway:e.props.onMouseMoveAway||e.props.onPointerMoveAway,option:e.props.onMouseOption||e.props.onPointerMoveOption},{type:"mouseup",event:e.props.onMouseUp||e.props.onPointerUp,eventAway:e.props.onMouseUpAway||e.props.onPointerUpAway,option:e.props.onMouseUpOption||e.props.onPointerUpOption}].forEach((t=>{var n,r,p;(t.event||t.eventAway)&&(n=t.type,r=n=>((t,n)=>{const r=t.xs.some(((e,n)=>!0===o(t.xs[n],t.ys[n]))),p=t.xs.some(((e,n)=>!1===o(t.xs[n],t.ys[n])));!0===r&&n.event&&n.event({...t,dom:e,cover:o}),!0===p&&n.eventAway&&n.eventAway({...t,dom:e,cover:o})})(n,t),p=t.option,r&&(ee=[...ee,{type:n,callback:r,option:p}]))}))},Arc:re,Circle:ae,Clip:ie,Fill:se,Image:le,Layout:ye,Line:me,Path:xe,Rect:we,RectRadius:ke,Scale:Ae,Rotate:Ue,Stroke:Pe,Text:Oe,Translate:Be};var Re,ze,Se,Ne;const Fe=()=>{(Ne=Re.getBoundingClientRect()).x=Ne.x,Ne.y=Ne.y,void 0===Ne.x&&(Ne.x=Ne.left),void 0===Ne.y&&(Ne.y=Ne.top),Re.width=Ne.width*Se,Re.height=Ne.height*Se},De={dpr:()=>Se,canvas:()=>Re,context:()=>ze,rect:()=>Ne,mount:(e,o)=>{Se=o,ze=(Re=e).getContext("2d"),Fe(),(e=>{oe.forEach((o=>e.removeEventListener(o.type,o.event))),oe=[]})(Re),(e=>{const o=o=>{const t=e=>((e,o)=>{const t=ee.filter((e=>e.type===o)).sort(((e,o)=>{const t=void 0===e.option||void 0===e.option.priority?0:e.option.priority;return(void 0===o.option||void 0===o.option.priority?0:o.option.priority)-t}));var n=!1;t.forEach((o=>{var t,r,p,a,i;if(e.pageX&&(t=(e.pageX-De.rect().x)*De.dpr()),e.pageY&&(r=(e.pageY-De.rect().y)*De.dpr()),e.changedTouches&&(p=[...e.changedTouches].map((e=>(e.pageX-De.rect().x)*De.dpr()))),e.changedTouches&&(a=[...e.changedTouches].map((e=>(e.pageY-De.rect().y)*De.dpr()))),void 0===window.ontouchstart&&(i="mouse"),void 0!==window.ontouchstart&&(i="touch"),void 0===t&&void 0===p)return;if(void 0===r&&void 0===a)return;void 0===t&&(t=p[0]),void 0===r&&(r=a[0]),void 0===p&&(p=[t]),void 0===a&&(a=[r]);const s={native:e,x:t,y:r,xs:p,ys:a,device:i,stopPropagation:()=>n=!0};!1===n&&o.callback(s)}))})(e,o);e.addEventListener(o,t,{passive:!0}),oe.push({type:o,event:t})};new Array("click","pointerdown","pointermove","pointerup").forEach(o),void 0!==window.ontouchstart&&new Array("touchstart","touchmove","touchend").forEach(o),void 0===window.ontouchstart&&new Array("mousedown","mousemove","mouseup").forEach(o)})(Re)},unMount:()=>{ze.clearRect(0,0,Re.width,Re.height),Re=void 0,ze=void 0,Se=void 0,Ne=void 0,te()},render:e=>{ze.clearRect(0,0,Re.width,Re.height),te(),Le.relocation(e),Le.rerender(e)},update:Fe},$e=De,He=e=>{const[o,t]=k.useState(e.defaultCount);return k.useEffect((()=>{var n=o;!0===e.play&&o!==e.destination&&o>e.destination&&(n-=e.rate),!0===e.play&&o!==e.destination&&o<e.destination&&(n+=e.rate),!0===e.play&&o>e.destination&&n<e.destination&&(n=e.destination),!0===e.play&&o<e.destination&&n>e.destination&&(n=e.destination),t(n)})),{animationCount:e.postprocess?e.postprocess(o):o,setAnimationCount:t}},Xe=function(e){return k.createElement("layout",{onLocationMounted:e=>{e.props.x=$e.rect().x,e.props.y=$e.rect().y,e.props.w=$e.rect().width*$e.dpr(),e.props.h=$e.rect().height*$e.dpr()}},e.children)},Ye=Le.Text.caculateLine,We=Le.Text.caculateLineLocation,qe=e=>{const o=k.useMemo((()=>Ye(e.text,e.font,e.w,e.wrap,e.ellipsis,e.split)),[e.text,e.font,e.w,e.wrap,e.ellipsis,e.split]),t=k.useMemo((()=>{var t,n;if(void 0!==e.lineHeight&&void 0!==e.gap){const r=We(o,e.lineHeight,e.gap);t=r.w,n=r.h}return{w:t,h:n}}),[o,e.lineHeight,e.gap]);return e.children.map((e=>e(o,t)))},Qe=function(e){const o=$e.rect().width*$e.dpr(),t=$e.rect().height*$e.dpr(),n=Math.min(o,t),{animationCount:r}=He({play:!0,defaultCount:0,destination:1,rate:1/30,postprocess:e=>Number(e.toFixed(3))}),{animationCount:p}=He({play:!0,defaultCount:0,destination:1,rate:1/60,postprocess:e=>Number(e.toFixed(3))}),{animationCount:a}=He({play:1===p,defaultCount:0,destination:1,rate:1/30,postprocess:e=>Number(e.toFixed(3))});return 1===a?e.children:1!==a?k.createElement(Xe,null,k.createElement("layout",{container:!0,verticalCenter:!0,horizontalAlignCenter:!0,globalAlpha:r-a},k.createElement(qe,{text:"CanvasXML",font:.06*n+"px courier",lineHeight:1,gap:0,w:o-.02*n,split:" ",wrap:!0},((e,o)=>k.createElement("layout",{w:o.w,h:o.h,item:!0},k.createElement("text",{fillText:!0,fillStyle:"white",align:"center",font:.06*n+"px courier",lineHeight:1,gap:0,line:e})))),k.createElement("layout",{h:.02*n,item:!0}),k.createElement(qe,{text:"Powered by CanvasXML JS",font:.025*n+"px courier",lineHeight:1,gap:0,w:o-.02*n,split:" ",wrap:!0},((e,o)=>k.createElement("layout",{w:o.w,h:o.h,item:!0},k.createElement("text",{fillText:!0,fillStyle:"rgb(130, 130, 130)",align:"center",font:.025*n+"px courier",lineHeight:1,gap:0,line:e})))))):void 0},Je=e=>({...e,props:{...e.element.props}}),Ge=e=>{for(;e.children.some((e=>2!==e.type));)e.children=e.children.map((e=>2!==e.type?e.children:e)).flat();return e.children=e.children.map((o=>Ge({...Je(o),parent:e}))),e},Ke={mount:(e,o,t)=>{const n=t&&t.dpr||2,r=t&&t.renderFrameTimeDiffMax||0,p=!t||void 0===t.powered||t.powered;var a;return!0===Boolean(p)&&(a=k.createElement(Qe,null,e)),!0!==Boolean(p)&&(a=e),$e.mount(o,n),k.mount(a,r,(e=>$e.render(Ge(Je(e))))),{render:k.render}},unMount:()=>{$e.unMount(),k.unmount()},update:()=>{$e.update(),k.shouldRender(k.renderQueueNode())}},Ve=Ke;function Ze(){return k.createElement("layout",{w:"120px",h:"120px",item:!0,container:!0,horizontalAlignCenter:!0,verticalAlignCenter:!0},k.createElement("rectradius",{fillStyle:"rgba(255, 135, 135, 1)"},k.createElement("fill",null)))}function eo(){const[e,o]=k.useState(0),[t,n]=k.useState(0),r=k.useMemo((()=>k.createElement(Ze,null)),[t]);return k.createElement("rectradius",{fillStyle:"rgba(255, 255, 255, 1)",radius:16},k.createElement("fill",null),k.createElement("clip",null,k.createElement("layout",{container:!0,horizontalAlignCenter:!0,verticalAlignCenter:!0},k.createElement("layout",{w:"calc(100% - 48px)",h:"calc(100% - 48px)",gap:24,item:!0,container:!0,wrap:!0,horizontalCenter:!0,verticalCenter:!0},k.createElement("layout",{w:"120px",h:"120px",item:!0,container:!0,horizontalAlignCenter:!0,verticalAlignCenter:!0},k.createElement("rectradius",{fillStyle:"rgba(135, 135, 135, 1)",onClick:t=>{"mouse"===t.device&&$e.Location.pointcover(t.dom.props,{x:t.x,y:t.y})&&o(e+1),"touch"===t.device&&$e.Location.pointcover(t.dom.props,{x:t.x[0],y:t.y[0]})&&o(e+1)}},k.createElement("fill",null))),k.createElement("layout",{w:"120px",h:"120px",item:!0,container:!0,horizontalAlignCenter:!0,verticalAlignCenter:!0},k.createElement("rectradius",{fillStyle:"rgba(135, 255, 135, 1)",onClick:e=>{"mouse"===e.device&&$e.Location.pointcover(e.dom.props,{x:e.x,y:e.y})&&n(t+1),"touch"===e.device&&$e.Location.pointcover(e.dom.props,{x:e.x[0],y:e.y[0]})&&n(t+1)}},k.createElement("fill",null))),r))))}const oo=function(){return k.createElement(eo,null)},to=document.createElement("canvas");to.style.position="absolute",to.style.top="0",to.style.left="0",to.style.width="100%",to.style.height="100%",to.style.background="black",to.style.overflow="hidden",window.addEventListener("wheel",(e=>e.preventDefault()),{passive:!1}),window.addEventListener("touchmove",(e=>e.preventDefault()),{passive:!1}),window.addEventListener("contextmenu",(e=>e.preventDefault()),{passive:!1}),document.body.appendChild(to);var no=!1;new ResizeObserver((()=>{no&&Ve.unMount(),Ve.mount(k.createElement(Xe,null,k.createElement(oo,null)),to).render(),no=!0})).observe(to)})();