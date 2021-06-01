import{S as t,i as e,s as a,e as o,k as s,c as n,a as l,n as r,d,b as u,O as c,f as i,E as h,P as f,Q as p,R as m,T as v,U as y,V as g,W as b,K as E,t as j,N as T,g as w,X as x,u as O,v as k,r as M,Y as N,Z as U,B as _,_ as F,F as R}from"../../chunks/vendor-80f2df0c.js";function B(t,{pending:e,error:a,result:o}){let s;async function n(n){const l=s={};n.preventDefault();const r=new FormData(t);e&&e(r,t);try{const e=await fetch(t.action,{method:t.method,headers:{accept:"application/json"},body:r});if(l!==s)return;e.ok?o(e,t):a?a(e,null,t):console.error(await e.text())}catch(d){if(!a)throw d;a(null,d,t)}}return t.addEventListener("submit",n),{destroy(){t.removeEventListener("submit",n)}}}function D(t,e,a){const o=t.slice();return o[5]=e[a],o[6]=e,o[7]=a,o}function I(t,e){let a,j,T,w,x,O,k,M,_,F,D,I,P,V,L,S,$,A,C,H,K,Q,W,X,Y,Z,q,z=R;function G(...t){return e[3](e[5],e[6],e[7],...t)}function J(){return e[4](e[5])}return{key:t,first:null,c(){a=o("div"),j=o("form"),T=o("input"),x=s(),O=o("button"),F=s(),D=o("form"),I=o("input"),V=s(),L=o("button"),$=s(),A=o("form"),C=o("button"),Q=s(),this.h()},l(t){a=n(t,"DIV",{class:!0});var e=l(a);j=n(e,"FORM",{action:!0,method:!0});var o=l(j);T=n(o,"INPUT",{type:!0,name:!0,value:!0,class:!0}),x=r(o),O=n(o,"BUTTON",{class:!0,"aria-label":!0}),l(O).forEach(d),o.forEach(d),F=r(e),D=n(e,"FORM",{class:!0,action:!0,method:!0});var s=l(D);I=n(s,"INPUT",{"aria-label":!0,type:!0,name:!0,value:!0,class:!0}),V=r(s),L=n(s,"BUTTON",{class:!0,"aria-label":!0}),l(L).forEach(d),s.forEach(d),$=r(e),A=n(e,"FORM",{action:!0,method:!0});var u=l(A);C=n(u,"BUTTON",{class:!0,"aria-label":!0}),l(C).forEach(d),u.forEach(d),Q=r(e),e.forEach(d),this.h()},h(){u(T,"type","hidden"),u(T,"name","done"),T.value=w=e[5].done?"":"true",u(T,"class","svelte-1hyunuh"),u(O,"class","toggle svelte-1hyunuh"),u(O,"aria-label",k="Mark todo as "+(e[5].done?"not done":"done")),u(j,"action",M="/todos/"+e[5].uid+".json?_method=patch"),u(j,"method","post"),u(I,"aria-label","Edit todo"),u(I,"type","text"),u(I,"name","text"),I.value=P=e[5].text,u(I,"class","svelte-1hyunuh"),u(L,"class","save svelte-1hyunuh"),u(L,"aria-label","Save todo"),u(D,"class","text svelte-1hyunuh"),u(D,"action",S="/todos/"+e[5].uid+".json?_method=patch"),u(D,"method","post"),u(C,"class","delete svelte-1hyunuh"),u(C,"aria-label","Delete todo"),u(A,"action",H="/todos/"+e[5].uid+".json?_method=delete"),u(A,"method","post"),u(a,"class","todo svelte-1hyunuh"),c(a,"done",e[5].done),this.first=a},m(t,o){i(t,a,o),h(a,j),h(j,T),h(j,x),h(j,O),h(a,F),h(a,D),h(D,I),h(D,V),h(D,L),h(a,$),h(a,A),h(A,C),h(a,Q),Y=!0,Z||(q=[f(_=B.call(null,j,{pending:G,result:e[1]})),f(B.call(null,D,{result:e[1]})),f(K=B.call(null,A,{result:J}))],Z=!0)},p(t,o){e=t,(!Y||1&o&&w!==(w=e[5].done?"":"true"))&&(T.value=w),(!Y||1&o&&k!==(k="Mark todo as "+(e[5].done?"not done":"done")))&&u(O,"aria-label",k),(!Y||1&o&&M!==(M="/todos/"+e[5].uid+".json?_method=patch"))&&u(j,"action",M),_&&p(_.update)&&1&o&&_.update.call(null,{pending:G,result:e[1]}),(!Y||1&o&&P!==(P=e[5].text)&&I.value!==P)&&(I.value=P),(!Y||1&o&&S!==(S="/todos/"+e[5].uid+".json?_method=patch"))&&u(D,"action",S),(!Y||1&o&&H!==(H="/todos/"+e[5].uid+".json?_method=delete"))&&u(A,"action",H),K&&p(K.update)&&1&o&&K.update.call(null,{result:J}),1&o&&c(a,"done",e[5].done)},r(){X=a.getBoundingClientRect()},f(){m(a),z(),v(a,X)},a(){z(),z=y(a,X,N,{duration:200})},i(t){Y||(t&&g((()=>{W||(W=b(a,U,{start:.7},!0)),W.run(1)})),Y=!0)},o(t){t&&(W||(W=b(a,U,{start:.7},!1)),W.run(0)),Y=!1},d(t){t&&d(a),t&&W&&W.end(),Z=!1,E(q)}}}function P(t){let e,a,c,m,v,y,g,b,E,N,U,R,P=[],V=new Map,L=t[0];const S=t=>t[5].uid;for(let o=0;o<L.length;o+=1){let e=D(t,L,o),a=S(e);V.set(a,P[o]=I(a,e))}return{c(){e=s(),a=o("div"),c=o("h1"),m=j("Todos"),v=s(),y=o("form"),g=o("input"),E=s();for(let t=0;t<P.length;t+=1)P[t].c();this.h()},l(t){T('[data-svelte="svelte-181o7gf"]',document.head).forEach(d),e=r(t),a=n(t,"DIV",{class:!0});var o=l(a);c=n(o,"H1",{});var s=l(c);m=w(s,"Todos"),s.forEach(d),v=r(o),y=n(o,"FORM",{class:!0,action:!0,method:!0});var u=l(y);g=n(u,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),u.forEach(d),E=r(o);for(let e=0;e<P.length;e+=1)P[e].l(o);o.forEach(d),this.h()},h(){document.title="Todos",u(g,"name","text"),u(g,"aria-label","Add todo"),u(g,"placeholder","+ tap to add a todo"),u(g,"class","svelte-1hyunuh"),u(y,"class","new svelte-1hyunuh"),u(y,"action","/todos.json"),u(y,"method","post"),u(a,"class","todos svelte-1hyunuh")},m(o,s){i(o,e,s),i(o,a,s),h(a,c),h(c,m),h(a,v),h(a,y),h(y,g),h(a,E);for(let t=0;t<P.length;t+=1)P[t].m(a,null);N=!0,U||(R=f(b=B.call(null,y,{result:t[2]})),U=!0)},p(t,[e]){if(b&&p(b.update)&&1&e&&b.update.call(null,{result:t[2]}),3&e){L=t[0],_();for(let t=0;t<P.length;t+=1)P[t].r();P=x(P,e,S,1,t,L,V,a,F,I,null,D);for(let t=0;t<P.length;t+=1)P[t].a();O()}},i(t){if(!N){for(let t=0;t<L.length;t+=1)k(P[t]);N=!0}},o(t){for(let e=0;e<P.length;e+=1)M(P[e]);N=!1},d(t){t&&d(e),t&&d(a);for(let e=0;e<P.length;e+=1)P[e].d();U=!1,R()}}}const V=async({fetch:t})=>{const e=await t("/todos.json");if(e.ok){return{props:{todos:await e.json()}}}const{message:a}=await e.json();return{error:new Error(a)}};function L(t,e,a){let{todos:o}=e;return t.$$set=t=>{"todos"in t&&a(0,o=t.todos)},[o,async function(t){const e=await t.json();a(0,o=o.map((t=>t.uid===e.uid?e:t)))},async(t,e)=>{const s=await t.json();a(0,o=[...o,s]),e.reset()},(t,e,s,n)=>{a(0,e[s].done=!!n.get("done"),o)},t=>{a(0,o=o.filter((e=>e.uid!==t.uid)))}]}export default class extends t{constructor(t){super(),e(this,t,L,P,a,{todos:0})}}export{V as load};
