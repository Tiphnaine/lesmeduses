function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(o)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function a(t,n,e,o){if(t){const s=f(t,n,e,o);return t[0](s)}}function f(t,n,o,s){return t[1]&&s?e(o.ctx.slice(),t[1](s(n))):o.ctx}function l(t,n,e,o,s,r,i){const c=function(t,n,e,o){if(t[2]&&o){const s=t[2](o(e));if(void 0===n.dirty)return s;if("object"==typeof s){const t=[],e=Math.max(n.dirty.length,s.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|s[o];return t}return n.dirty|s}return n.dirty}(n,o,s,r);if(c){const s=f(n,e,o,i);t.p(s,c)}}function d(n){return n&&i(n.destroy)?n.destroy:t}const p="undefined"!=typeof window;let h=p?()=>window.performance.now():()=>Date.now(),m=p?t=>requestAnimationFrame(t):t;const g=new Set;function y(t){g.forEach((n=>{n.c(t)||(g.delete(n),n.f())})),0!==g.size&&m(y)}function $(t){let n;return 0===g.size&&m(y),{promise:new Promise((e=>{g.add(n={c:t,f:e})})),abort(){g.delete(n)}}}function b(t,n){t.appendChild(n)}function _(t,n,e){t.insertBefore(n,e||null)}function w(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function x(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function E(){return k(" ")}function C(){return k("")}function S(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function A(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function M(t){return Array.from(t.childNodes)}function j(t,n,e,o){for(let s=0;s<t.length;s+=1){const o=t[s];if(o.nodeName===n){let n=0;const r=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||r.push(t.name)}for(let t=0;t<r.length;t++)o.removeAttribute(r[t]);return t.splice(s,1)[0]}}return o?x(n):v(n)}function O(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return k(n)}function R(t){return O(t," ")}function P(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function q(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function N(t,n,e){t.classList[e?"add":"remove"](n)}function B(t,n=document.body){return Array.from(n.querySelectorAll(t))}const D=new Set;let T,z=0;function L(t,n,e,o,s,r,i,c=0){const u=16.666/o;let a="{\n";for(let g=0;g<=1;g+=u){const t=n+(e-n)*r(g);a+=100*g+`%{${i(t,1-t)}}\n`}const f=a+`100% {${i(e,1-e)}}\n}`,l=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(f)}_${c}`,d=t.ownerDocument;D.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(v("style")).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[l]||(h[l]=!0,p.insertRule(`@keyframes ${l} ${f}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${l} ${o}ms linear ${s}ms 1 both`,z+=1,l}function F(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),s=e.length-o.length;s&&(t.style.animation=o.join(", "),z-=s,z||m((()=>{z||(D.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),D.clear())})))}function H(e,o,s,r){if(!o)return t;const i=e.getBoundingClientRect();if(o.left===i.left&&o.right===i.right&&o.top===i.top&&o.bottom===i.bottom)return t;const{delay:c=0,duration:u=300,easing:a=n,start:f=h()+c,end:l=f+u,tick:d=t,css:p}=s(e,{from:o,to:i},r);let m,g=!0,y=!1;function b(){p&&F(e,m),g=!1}return $((t=>{if(!y&&t>=f&&(y=!0),y&&t>=l&&(d(1,0),b()),!g)return!1;if(y){const n=0+1*a((t-f)/u);d(n,1-n)}return!0})),p&&(m=L(e,0,1,u,c,a,p)),c||(y=!0),d(0,1),b}function W(t){const n=getComputedStyle(t);if("absolute"!==n.position&&"fixed"!==n.position){const{width:e,height:o}=n,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=e,t.style.height=o,G(t,s)}}function G(t,n){const e=t.getBoundingClientRect();if(n.left!==e.left||n.top!==e.top){const o=getComputedStyle(t),s="none"===o.transform?"":o.transform;t.style.transform=`${s} translate(${n.left-e.left}px, ${n.top-e.top}px)`}}function I(t){T=t}function J(){if(!T)throw new Error("Function called outside component initialization");return T}function K(t){J().$$.on_mount.push(t)}function Q(t){J().$$.after_update.push(t)}function U(t,n){J().$$.context.set(t,n)}const V=[],X=[],Y=[],Z=[],tt=Promise.resolve();let nt=!1;function et(t){Y.push(t)}let ot=!1;const st=new Set;function rt(){if(!ot){ot=!0;do{for(let t=0;t<V.length;t+=1){const n=V[t];I(n),it(n.$$)}for(I(null),V.length=0;X.length;)X.pop()();for(let t=0;t<Y.length;t+=1){const n=Y[t];st.has(n)||(st.add(n),n())}Y.length=0}while(V.length);for(;Z.length;)Z.pop()();nt=!1,ot=!1,st.clear()}}function it(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(et)}}let ct;function ut(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const at=new Set;let ft;function lt(){ft={r:0,c:[],p:ft}}function dt(){ft.r||r(ft.c),ft=ft.p}function pt(t,n){t&&t.i&&(at.delete(t),t.i(n))}function ht(t,n,e,o){if(t&&t.o){if(at.has(t))return;at.add(t),ft.c.push((()=>{at.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const mt={duration:0};function gt(e,o,s,c){let u=o(e,s),a=c?0:1,f=null,l=null,d=null;function p(){d&&F(e,d)}function m(t,n){const e=t.b-a;return n*=Math.abs(e),{a:a,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function g(o){const{delay:s=0,duration:i=300,easing:c=n,tick:g=t,css:y}=u||mt,b={start:h()+s,b:o};o||(b.group=ft,ft.r+=1),f||l?l=b:(y&&(p(),d=L(e,a,o,i,s,c,y)),o&&g(0,1),f=m(b,i),et((()=>ut(e,o,"start"))),$((t=>{if(l&&t>l.start&&(f=m(l,i),l=null,ut(e,f.b,"start"),y&&(p(),d=L(e,a,f.b,f.duration,0,c,u.css))),f)if(t>=f.end)g(a=f.b,1-a),ut(e,f.b,"end"),l||(f.b?p():--f.group.r||r(f.group.c)),f=null;else if(t>=f.start){const n=t-f.start;a=f.a+f.d*c(n/f.duration),g(a,1-a)}return!(!f&&!l)})))}return{run(t){i(u)?(ct||(ct=Promise.resolve(),ct.then((()=>{ct=null}))),ct).then((()=>{u=u(),g(t)})):g(t)},end(){p(),f=l=null}}}function yt(t,n){t.f(),function(t,n){ht(t,1,1,(()=>{n.delete(t.key)}))}(t,n)}function $t(t,n,e,o,s,r,i,c,u,a,f,l){let d=t.length,p=r.length,h=d;const m={};for(;h--;)m[t[h].key]=h;const g=[],y=new Map,$=new Map;for(h=p;h--;){const t=l(s,r,h),c=e(t);let u=i.get(c);u?o&&u.p(t,n):(u=a(c,t),u.c()),y.set(c,g[h]=u),c in m&&$.set(c,Math.abs(h-m[c]))}const b=new Set,_=new Set;function w(t){pt(t,1),t.m(c,f),i.set(t.key,t),f=t.first,p--}for(;d&&p;){const n=g[p-1],e=t[d-1],o=n.key,s=e.key;n===e?(f=n.first,d--,p--):y.has(s)?!i.has(o)||b.has(o)?w(n):_.has(s)?d--:$.get(o)>$.get(s)?(_.add(o),w(n)):(b.add(s),d--):(u(e,i),d--)}for(;d--;){const n=t[d];y.has(n.key)||u(n,i)}for(;p;)w(g[p-1]);return g}function bt(t,n){const e={},o={},s={$$scope:1};let r=t.length;for(;r--;){const i=t[r],c=n[r];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)s[t]||(e[t]=c[t],s[t]=1);t[r]=c}else for(const t in i)s[t]=1}for(const i in o)i in e||(e[i]=void 0);return e}function _t(t){return"object"==typeof t&&null!==t?t:{}}function wt(t){t&&t.c()}function vt(t,n){t&&t.l(n)}function xt(t,n,e,s){const{fragment:c,on_mount:u,on_destroy:a,after_update:f}=t.$$;c&&c.m(n,e),s||et((()=>{const n=u.map(o).filter(i);a?a.push(...n):r(n),t.$$.on_mount=[]})),f.forEach(et)}function kt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Et(t,n){-1===t.$$.dirty[0]&&(V.push(t),nt||(nt=!0,tt.then(rt)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ct(n,e,o,i,c,u,a=[-1]){const f=T;I(n);const l=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:s(),dirty:a,skip_bound:!1};let d=!1;if(l.ctx=o?o(n,e.props||{},((t,e,...o)=>{const s=o.length?o[0]:e;return l.ctx&&c(l.ctx[t],l.ctx[t]=s)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](s),d&&Et(n,t)),e})):[],l.update(),d=!0,r(l.before_update),l.fragment=!!i&&i(l.ctx),e.target){if(e.hydrate){const t=M(e.target);l.fragment&&l.fragment.l(t),t.forEach(w)}else l.fragment&&l.fragment.c();e.intro&&pt(n.$$.fragment),xt(n,e.target,e.anchor,e.customElement),rt()}I(f)}class St{$destroy(){kt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const At=[];function Mt(n,e=t){let o;const s=[];function r(t){if(c(n,t)&&(n=t,o)){const t=!At.length;for(let e=0;e<s.length;e+=1){const t=s[e];t[1](),At.push(t,n)}if(t){for(let t=0;t<At.length;t+=2)At[t][0](At[t+1]);At.length=0}}}return{set:r,update:function(t){r(t(n))},subscribe:function(i,c=t){const u=[i,c];return s.push(u),1===s.length&&(o=e(r)||t),i(n),()=>{const t=s.indexOf(u);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}function jt(t){const n=t-1;return n*n*n+1}function Ot(t){return"[object Date]"===Object.prototype.toString.call(t)}function Rt(t,n,e,o){if("number"==typeof e||Ot(e)){const s=o-e,r=(e-n)/(t.dt||1/60),i=(r+(t.opts.stiffness*s-t.opts.damping*r)*t.inv_mass)*t.dt;return Math.abs(i)<t.opts.precision&&Math.abs(s)<t.opts.precision?o:(t.settled=!1,Ot(e)?new Date(e.getTime()+i):e+i)}if(Array.isArray(e))return e.map(((s,r)=>Rt(t,n[r],e[r],o[r])));if("object"==typeof e){const s={};for(const r in e)s[r]=Rt(t,n[r],e[r],o[r]);return s}throw new Error(`Cannot spring ${typeof e} values`)}function Pt(t,n={}){const e=Mt(t),{stiffness:o=.15,damping:s=.8,precision:r=.01}=n;let i,c,u,a=t,f=t,l=1,d=0,p=!1;function m(n,o={}){f=n;const s=u={};if(null==t||o.hard||g.stiffness>=1&&g.damping>=1)return p=!0,i=h(),a=n,e.set(t=f),Promise.resolve();if(o.soft){const t=!0===o.soft?.5:+o.soft;d=1/(60*t),l=0}return c||(i=h(),p=!1,c=$((n=>{if(p)return p=!1,c=null,!1;l=Math.min(l+d,1);const o={inv_mass:l,opts:g,settled:!0,dt:60*(n-i)/1e3},s=Rt(o,a,t,f);return i=n,a=t,e.set(t=s),o.settled&&(c=null),!o.settled}))),new Promise((t=>{c.promise.then((()=>{s===u&&t()}))}))}const g={set:m,update:(n,e)=>m(n(f,t),e),subscribe:e.subscribe,stiffness:o,damping:s,precision:r};return g}function qt(t,{delay:n=0,duration:e=400,easing:o=jt,start:s=0,opacity:r=0}={}){const i=getComputedStyle(t),c=+i.opacity,u="none"===i.transform?"":i.transform,a=1-s,f=c*(1-r);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${u} scale(${1-a*n});\n\t\t\topacity: ${c-f*n}\n\t\t`}}function Nt(t,n,e={}){const o=getComputedStyle(t),s="none"===o.transform?"":o.transform,r=n.from.width/t.clientWidth,c=n.from.height/t.clientHeight,u=(n.from.left-n.to.left)/r,a=(n.from.top-n.to.top)/c,f=Math.sqrt(u*u+a*a),{delay:l=0,duration:d=(t=>120*Math.sqrt(t)),easing:p=jt}=e;return{delay:l,duration:i(d)?d(f):d,easing:p,css:(t,n)=>`transform: ${s} translate(${n*u}px, ${n*a}px);`}}export{e as A,lt as B,Mt as C,x as D,b as E,t as F,a as G,l as H,q as I,S as J,r as K,Pt as L,u as M,B as N,N as O,d as P,i as Q,W as R,St as S,G as T,H as U,et as V,gt as W,$t as X,Nt as Y,qt as Z,yt as _,M as a,A as b,j as c,w as d,v as e,_ as f,O as g,P as h,Ct as i,wt as j,E as k,C as l,vt as m,R as n,xt as o,bt as p,_t as q,ht as r,c as s,k as t,dt as u,pt as v,kt as w,U as x,Q as y,K as z};