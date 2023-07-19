(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q;function ca(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function t(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;da(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(ca(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:ca(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ka(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||ma});
var na="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},oa;
if("function"==typeof Object.setPrototypeOf)oa=Object.setPrototypeOf;else{var pa;a:{var qa={a:!0},ra={};try{ra.__proto__=qa;pa=ra.a;break a}catch(a){}pa=!1}oa=pa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=oa;
function v(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ma=b.prototype}
function ta(){this.G=!1;this.l=null;this.h=void 0;this.g=1;this.s=this.v=0;this.aa=this.i=null}
function ua(a){if(a.G)throw new TypeError("Generator is already running");a.G=!0}
ta.prototype.P=function(a){this.h=a};
function va(a,b){a.i={Wb:b,ic:!0};a.g=a.v||a.s}
ta.prototype.return=function(a){this.i={return:a};this.g=this.s};
function w(a,b,c){a.g=c;return{value:b}}
ta.prototype.C=function(a){this.g=a};
function ya(a,b,c){a.v=b;void 0!=c&&(a.s=c)}
function za(a,b){a.g=b;a.v=0}
function Ba(a){a.v=0;var b=a.i.Wb;a.i=null;return b}
function Ca(a){a.aa=[a.i];a.v=0;a.s=0}
function Da(a){var b=a.aa.splice(0)[0];(b=a.i=a.i||b)?b.ic?a.g=a.v||a.s:void 0!=b.C&&a.s<b.C?(a.g=b.C,a.i=null):a.g=a.s:a.g=0}
function Ea(a){this.g=new ta;this.h=a}
function Fa(a,b){ua(a.g);var c=a.g.l;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.g.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.G=!1,e;var f=e.value}catch(g){return a.g.l=null,va(a.g,g),Ha(a)}a.g.l=null;d.call(a.g,f);return Ha(a)}
function Ha(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.G=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,va(a.g,c)}a.g.G=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.ic)throw b.Wb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){ua(a.g);a.g.l?b=Ga(a,a.g.l.next,b,a.g.P):(a.g.P(b),b=Ha(a));return b};
this.throw=function(b){ua(a.g);a.g.l?b=Ga(a,a.g.l["throw"],b,a.g.P):(va(a.g,b),b=Ha(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ja(new Ia(new Ea(a)))}
function La(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
t("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
t("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.G=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.s()})}this.g.push(g)};
var e=fa.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.s=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.g=null};
c.prototype.l=function(g){this.i(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Bc),reject:g(this.s)}};
b.prototype.Bc=function(g){if(g===this)this.s(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Ec(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Ac(g):this.v(g)}};
b.prototype.Ac=function(g){var h=void 0;try{h=g.then}catch(k){this.s(k);return}"function"==typeof h?this.Fc(h,g):this.v(g)};
b.prototype.s=function(g){this.P(2,g)};
b.prototype.v=function(g){this.P(1,g)};
b.prototype.P=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.Dc();this.aa()};
b.prototype.Dc=function(){var g=this;e(function(){if(g.kb()){var h=fa.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.kb=function(){if(this.G)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.aa=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.Ec=function(g){var h=this.l();g.qb(h.resolve,h.reject)};
b.prototype.Fc=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(y){try{l(r(y))}catch(A){m(A)}}:p}
var l,m,n=new b(function(r,p){l=r;m=p});
this.qb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.qb=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.G=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).qb(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(y){return function(A){r[y]=A;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).qb(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
t("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!la(k,g)){var l=new c;da(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.g)?delete k[g][this.g]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.g;return ha(function(){if(l){for(;l.head!=h.g;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&la(h.data_,l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.g=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.g,previous:this.g.previous,head:this.g,key:h,value:k},l.list.push(l.entry),this.g.previous.next=l.entry,this.g.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.g=this.g.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ma(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ma(this,b,"includes").indexOf(b,c||0)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
function Na(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Na(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Na(this,function(b){return b})}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Array.prototype.values",function(a){return a?a:function(){return Na(this,function(b,c){return c})}});
t("Object.setPrototypeOf",function(a){return a||sa});
t("Set",function(a){function b(c){this.g=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
var z=this||self;function B(a,b){a=a.split(".");b=b||z;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Oa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ya(a,b,c){Ya=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ua:Va;return Ya.apply(null,arguments)}
function C(a,b){a=a.split(".");var c=z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.ma=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Id=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Za(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},fb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function gb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function hb(a){return Array.prototype.concat.apply([],arguments)}
function ib(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function lb(a){var b=mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function nb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ob(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ob(a[c]);return b}
var pb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pb.length;f++)c=pb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var rb;function sb(){}
function tb(a){return new sb(ub,a)}
var ub={};tb("");var vb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},wb=/&/g,xb=/</g,yb=/>/g,zb=/"/g,Ab=/'/g,Gb=/\x00/g,Hb=/[\x00&<>"']/;function Ib(a){this.g=a}
Ib.prototype.toString=function(){return this.g.toString()};
var Jb={},Kb=new Ib("about:invalid#zClosurez",Jb);var Lb,Mb=B("CLOSURE_FLAGS"),Nb=Mb&&Mb[610401301];Lb=null!=Nb?Nb:!1;function Ob(){var a=z.navigator;return a&&(a=a.userAgent)?a:""}
var Pb,Qb=z.navigator;Pb=Qb?Qb.userAgentData||null:null;function Rb(a){return Lb?Pb?Pb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function E(a){return-1!=Ob().indexOf(a)}
;function Sb(){return Lb?!!Pb&&0<Pb.brands.length:!1}
function Tb(){return Sb()?!1:E("Trident")||E("MSIE")}
function Ub(){return Sb()?Rb("Chromium"):(E("Chrome")||E("CriOS"))&&!(Sb()?0:E("Edge"))||E("Silk")}
;function Vb(a){this.g=a}
Vb.prototype.toString=function(){return this.g.toString()};function Wb(a){Hb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(wb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(xb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(yb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(zb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Ab,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Gb,"&#0;")));return a}
;var Xb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yb(a){return a?decodeURI(a):a}
function Zb(a){return Yb(a.match(Xb)[3]||null)}
function $b(a){var b=a.match(Xb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function ac(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ac(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function bc(a){var b=[],c;for(c in a)ac(c,a[c],b);return b.join("&")}
var cc=/#|$/;function dc(a,b){var c=a.search(cc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function ec(a){z.setTimeout(function(){throw a;},0)}
;function fc(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function gc(a){gc[" "](a);return a}
gc[" "]=function(){};var hc=Sb()?!1:E("Opera"),mc=Tb(),nc=E("Edge"),oc=E("Gecko")&&!(-1!=Ob().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),pc=-1!=Ob().toLowerCase().indexOf("webkit")&&!E("Edge");function qc(){var a=z.document;return a?a.documentMode:void 0}
var rc;a:{var sc="",tc=function(){var a=Ob();if(oc)return/rv:([^\);]+)(\)|;)/.exec(a);if(nc)return/Edge\/([\d\.]+)/.exec(a);if(mc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(pc)return/WebKit\/(\S+)/.exec(a);if(hc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
tc&&(sc=tc?tc[1]:"");if(mc){var uc=qc();if(null!=uc&&uc>parseFloat(sc)){rc=String(uc);break a}}rc=sc}var vc=rc,wc;if(z.document&&mc){var xc=qc();wc=xc?xc:parseInt(vc,10)||void 0}else wc=void 0;var yc=wc;var zc=fc()||E("iPod"),Ac=E("iPad");!E("Android")||Ub();Ub();var Bc=E("Safari")&&!(Ub()||(Sb()?0:E("Coast"))||(Sb()?0:E("Opera"))||(Sb()?0:E("Edge"))||(Sb()?Rb("Microsoft Edge"):E("Edg/"))||(Sb()?Rb("Opera"):E("OPR"))||E("Firefox")||E("FxiOS")||E("Silk")||E("Android"))&&!(fc()||E("iPad")||E("iPod"));var Cc={},Dc=null;
function Ec(a,b){Pa(a);void 0===b&&(b=0);if(!Dc){Dc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Cc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Dc[h]&&(Dc[h]=g)}}}b=Cc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Fc="undefined"!==typeof Uint8Array,Gc=!mc&&"function"===typeof btoa;function Hc(a){return Array.prototype.slice.call(a)}
;var Ic="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function Jc(a,b){Ic?a[Ic]|=b:void 0!==a.ia?a.ia|=b:Object.defineProperties(a,{ia:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function Kc(a){var b=F(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Hc(a)),Mc(a,b|1))}
function Nc(a,b){Ic?a[Ic]&&(a[Ic]&=~b):void 0!==a.ia&&(a.ia&=~b)}
function F(a){var b;Ic?b=a[Ic]:b=a.ia;return b|0}
function Mc(a,b){Ic?a[Ic]=b:void 0!==a.ia?a.ia=b:Object.defineProperties(a,{ia:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}
function Oc(a,b){Object.isFrozen(a)&&(a=Hc(a));Mc(a,b);return a}
function Pc(a){Jc(a,1);return a}
function Qc(a,b){Mc(b,(a|0)&-51)}
function Rc(a,b){Mc(b,(a|18)&-41)}
;var Sc={};function Tc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Uc,Vc=Object.freeze(Mc([],23));function Wc(a){if(F(a.L)&2)throw Error();}
;function Xc(a){return a.displayName||a.name||"unknown type name"}
function Yc(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Xc(b)+" but got "+(a&&Xc(a.constructor)));return a}
function Zc(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Jb===Sc)return a;if(d){var e=d=F(a);0===e&&(e|=c&16);e|=c&2;e!==d&&Mc(a,e);return new b(a)}}
;function cd(a,b,c){return-1===b?null:b>=a.h?a.g?a.g[b]:void 0:c&&a.g&&(c=a.g[b],null!=c)?c:a.L[b+a.i]}
function G(a,b,c){Wc(a);return dd(a,b,c)}
function dd(a,b,c,d){Tc(c);a.l&&(a.l=void 0);if(b>=a.h||d)return d=a.h+a.i,(a.g||(a.g=a.L[d]={}))[b]=c,a;a.L[b+a.i]=c;(c=a.g)&&b in c&&delete c[b];return a}
function ed(a,b,c,d){var e=cd(a,b);Array.isArray(e)||(e=Vc);var f=F(e);f&1||Pc(e);if(d)f&2||Jc(e,18),c&1||Object.freeze(e);else{d=!(c&2);var g=f&2;c&1||!g?d&&f&16&&!g&&Nc(e,16):(e=Pc(Hc(e)),dd(a,b,e))}return e}
function fd(a,b,c,d){Wc(a);(c=gd(a,c))&&c!==b&&null!=d&&dd(a,c,void 0,!1);dd(a,b,d)}
function gd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=cd(a,e)&&(0!==c&&dd(a,c,void 0,!1),c=e)}return c}
function hd(a,b,c){var d=void 0===d?!1:d;var e=cd(a,c,d);b=Zc(e,b,F(a.L));b!==e&&null!=b&&dd(a,c,b,d);e=b;if(null==e)return e;if(!(F(a.L)&2)){b=e;if(F(b.L)&2){var f=id(b,!1);f.l=b;b=f}b!==e&&(e=b,dd(a,c,e,d))}return e}
function I(a,b,c,d){Wc(a);null!=d?Yc(d,b):d=void 0;return dd(a,c,d)}
function jd(a,b,c,d,e){Wc(a);null!=e?Yc(e,b):e=void 0;fd(a,c,d,e)}
function kd(a,b,c,d){var e=F(a.L);if(e&2)throw Error();var f=!!(e&2),g=ed(a,b,1,f);if(g!==Vc&&F(g)&4){if(!f){f=Object.isFrozen(g);e=F(g);var h=e&-19;f&&(g=Hc(g),e=0,dd(a,b,g));e!==h&&Mc(g,h)}a=g}else{f=g;var k=!!(e&2);h=!!(F(f)&2);g=f;!k&&h&&(f=Hc(f));e|=h?2:0;h=h||void 0;for(var l=k=0;k<f.length;k++){var m=Zc(f[k],c,e);void 0!==m&&(h||(h=!!(2&F(m.L))),f[l++]=m)}l<k&&(f.length=l);h=!h;e=F(f);k=e|5;h=h?k|8:k&-9;e!=h&&(f=Oc(f,h));g!==f&&dd(a,b,f);a=f}c=null!=d?Yc(d,c):new c;a.push(c);F(c.L)&2&&Nc(a,
8)}
function ld(a,b){a=cd(a,b);return null==a?"":a}
function md(a,b){var c=gd(a,nd)===b;return cd(a,c?b:-1)}
;var od;function pd(a,b){return qd(b)}
function qd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)&&Fc&&null!=a&&a instanceof Uint8Array){if(Gc){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Ec(a);return a}}return a}
;function rd(a,b){for(var c=Hc(a.L),d=a.g,e=c.length+(d?-1:0),f=0;f<e;f++)c[f]=b(c[f]);if(d){e=c[f]={};for(var g in d)e[g]=b(d[g])}b=a.constructor;Jc(c,16);F(c);od=c;c=new b(c);od=void 0;a.hc&&(c.hc=Hc(a.hc));return c}
function sd(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&F(a)&1?void 0:f&&F(a)&2?a:td(a,b,c,void 0!==d,e,f);else if(Tc(a)){var g={},h;for(h in a)g[h]=sd(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function td(a,b,c,d,e,f){var g=d||c?F(a):0;d=d?!!(g&16):void 0;a=Hc(a);for(var h=0;h<a.length;h++)a[h]=sd(a[h],b,c,d,e,f);c&&c(g,a);return a}
function ud(a){return a.Jb===Sc?a.toJSON():qd(a)}
;function vd(a,b,c){c=void 0===c?Rc:c;if(null!=a){if(Fc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=F(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Mc(a,d|18),a;a=td(a,vd,d&4?Rc:c,!0,!1,!0);b=F(a);b&4&&b&2&&Object.freeze(a);return a}a.Jb===Sc&&(F(a.L)&2||(a=id(a,!0),Jc(a.L,18)));return a}}
function id(a,b){var c=F(a.L),d=b||c&2?Rc:Qc,e=!!(c&16);return rd(a,function(f){return vd(f,e,d)})}
;function J(a,b,c){null==a&&(a=od);od=void 0;if(null==a)a=c?[c]:[],Mc(a,48);else{if(!Array.isArray(a))throw Error();if(c&&c!==a[0])throw Error();Jc(a,32)}this.i=c?0:-1;this.L=a;a:{c=this.L.length;a=c-1;if(c&&(c=this.L[a],Tc(c))){this.g=c;this.h=a-this.i;break a}b?(this.h=Math.max(b,a+1-this.i),this.g=void 0):this.h=Number.MAX_VALUE}F(this.L)}
J.prototype.toJSON=function(){if(Uc)var a=wd(this,this.L,!1);else a=td(this.L,ud,void 0,void 0,!1,!1),a=wd(this,a,!0);return a};
function xd(a){Uc=!0;try{return JSON.stringify(a.toJSON(),pd)}finally{Uc=!1}}
J.prototype.clone=function(){return id(this,!1)};
J.prototype.Jb=Sc;J.prototype.toString=function(){return wd(this,this.L,!1).toString()};
function wd(a,b,c){var d=a?a.constructor.la:void 0,e=a.h;if(d){if(!c){b=Hc(b);var f;if(b.length&&Tc(f=b[b.length-1]))for(var g=0;g<d.length;g++)if(d[g]>=e){Object.assign(b[b.length-1]={},f);break}}e=b;c=!c;f=a.h;var h;for(g=0;g<d.length;g++){var k=d[g];if(k<f){k+=a.i;var l=e[k];null==l?e[k]=c?Vc:Pc([]):c&&l!==Vc&&Kc(l)}else h||(l=void 0,e.length&&Tc(l=e[e.length-1])?h=l:e.push(h={})),l=h[k],null==h[k]?h[k]=c?Vc:Pc([]):c&&l!==Vc&&Kc(l)}}return b}
;var yd=window;tb("csi.gstatic.com");tb("googleads.g.doubleclick.net");tb("partner.googleadservices.com");tb("pubads.g.doubleclick.net");tb("securepubads.g.doubleclick.net");tb("tpc.googlesyndication.com");function zd(a,b){this.width=a;this.height=b}
q=zd.prototype;q.clone=function(){return new zd(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ad(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Bd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Cd(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Dd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ed[c])c=Ed[c];else{c=String(c);if(!Ed[c]){var f=/function\s+([^\(]+)/m.exec(c);Ed[c]=f?f[1]:"[Anonymous]"}c=Ed[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Dd(a,b){b||(b={});b[Fd(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Fd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Dd(a,b));return c}
function Fd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ed={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Gd;try{new URL("s://g"),Gd=!0}catch(a){Gd=!1}var Hd=Gd;function Id(a,b){a.removeAttribute("srcdoc");var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof Ib)b instanceof Ib&&b.constructor===Ib?b=b.g:(Oa(b),b="type_error:SafeUrl");else{b:if(Hd){try{var e=new URL(b)}catch(f){c="https:";break b}c=e.protocol}else c:{c=document.createElement("a");
try{c.href=b}catch(f){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b)}
;function Jd(a){this.ad=a}
function Kd(a){return new Jd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Ld=[Kd("data"),Kd("http"),Kd("https"),Kd("mailto"),Kd("ftp"),new Jd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Md(a,b){b=void 0===b?Ld:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Jd&&d.ad(a))return new Ib(a,Jb)}}
function Nd(a){var b=void 0===b?Ld:b;return Md(a,b)||Kb}
;function Od(a){var b=Pd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Qd(){var a=[];Od(function(b){a.push(b)});
return a}
var Pd={pd:"allow-forms",qd:"allow-modals",rd:"allow-orientation-lock",sd:"allow-pointer-lock",td:"allow-popups",ud:"allow-popups-to-escape-sandbox",vd:"allow-presentation",wd:"allow-same-origin",xd:"allow-scripts",yd:"allow-top-navigation",zd:"allow-top-navigation-by-user-activation"},Rd=db(function(){return Qd()});
function Sd(){var a=Td(),b={};D(Rd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Td(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Ud=(new Date).getTime();function Vd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var Wd="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ka(Wd);function Xd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,p=0;64>p;p+=4)r[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(n<<1|n>>>31)&4294967295;n=e[0];var y=e[1],A=e[2],H=e[3],O=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var T=H^y&(A^H);var Q=1518500249}else T=y^A^H,Q=1859775393;else 60>p?(T=y&A|H&(y|A),Q=2400959708):(T=y^A^H,Q=3395469782);T=((n<<5|n>>>27)&4294967295)+T+O+Q+r[p]&4294967295;O=H;H=A;A=(y<<30|y>>>2)&4294967295;y=n;n=T}e[0]=e[0]+n&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+A&4294967295;e[3]=e[3]+H&4294967295;e[4]=e[4]+O&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],y=0,A=n.length;y<A;++y)p.push(n.charCodeAt(y));n=p}r||(r=n.length);p=0;if(0==l)for(;p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var y=24;0<=y;y-=8)n[r++]=e[p]>>y&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Lc:function(){for(var n=d(),r="",p=0;p<n.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return r}}}
;function Yd(a,b,c){var d=String(z.location.href);return d&&a&&b?[b,Zd(Vd(d),a,c||null)].join(" "):null}
function Zd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),$d(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=$d(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function $d(a){var b=Xd();b.update(a);return b.Lc().toLowerCase()}
;var ae={};function be(a){this.g=a||{cookie:""}}
q=be.prototype;q.isEnabled=function(){if(!z.navigator.cookieEnabled)return!1;if(this.g.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Gb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Pd;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Gb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=vb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Gb:0,path:b,domain:c});return d};
q.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=vb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ce=new be("undefined"==typeof document?null:document);function de(a){return!!ae.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ee(a,b,c,d){(a=z[a])||"undefined"===typeof document||(a=(new be(document)).get(b));return a?Yd(a,c,d):null}
function fe(a){var b=void 0===b?!1:b;var c=Vd(String(z.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=z.__SAPISID||z.__APISID||z.__3PSAPISID||z.__OVERRIDE_SID;de(e)&&(f=f||z.__1PSAPISID);if(f)e=!0;else{if("undefined"!==typeof document){var g=new be(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");de(e)&&(f=f||g.get("__Secure-1PAPISID"))}e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?
z.__SAPISID:z.__APISID,e||"undefined"===typeof document||(e=new be(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Yd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&de(b)&&((b=ee("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=ee("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;"undefined"!==typeof TextDecoder&&new TextDecoder;var ge="undefined"!==typeof TextEncoder?new TextEncoder:null,he=ge?function(a){return ge.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function ie(){this.i=this.i;this.s=this.s}
ie.prototype.i=!1;ie.prototype.dispose=function(){this.i||(this.i=!0,this.Ea())};
ie.prototype.Ea=function(){if(this.s)for(;this.s.length;)this.s.shift()()};function je(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
je.prototype.stopPropagation=function(){this.i=!0};
je.prototype.preventDefault=function(){this.defaultPrevented=!0};var ke=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
z.addEventListener("test",c,b);z.removeEventListener("test",c,b)}catch(d){}return a}();function oe(a,b){je.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
Za(oe,je);var pe={2:"touch",3:"pen",4:"mouse"};
oe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(oc){a:{try{gc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:pe[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&oe.ma.preventDefault.call(this)};
oe.prototype.stopPropagation=function(){oe.ma.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
oe.prototype.preventDefault=function(){oe.ma.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var qe="closure_listenable_"+(1E6*Math.random()|0);var re=0;function se(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ub=e;this.key=++re;this.hb=this.pb=!1}
function te(a){a.hb=!0;a.listener=null;a.proxy=null;a.src=null;a.ub=null}
;function ue(a){this.src=a;this.listeners={};this.g=0}
ue.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=ve(a,b,d,e);-1<g?(b=a[g],c||(b.pb=!1)):(b=new se(b,this.src,f,!!d,e),b.pb=c,a.push(b));return b};
ue.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ve(e,b,c,d);return-1<b?(te(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function we(a,b){var c=b.type;c in a.listeners&&gb(a.listeners[c],b)&&(te(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function ve(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.hb&&f.listener==b&&f.capture==!!c&&f.ub==d)return e}return-1}
;var xe="closure_lm_"+(1E6*Math.random()|0),ye={},ze=0;function Ae(a,b,c,d,e){if(d&&d.once)Be(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ae(a,b[f],c,d,e);else c=Ce(c),a&&a[qe]?a.Ga(b,c,Qa(d)?!!d.capture:!!d,e):De(a,b,c,!1,d,e)}
function De(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Ee(a);h||(a[xe]=h=new ue(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Fe();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ke||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ge(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ze++}}
function Fe(){function a(c){return b.call(a.src,a.listener,c)}
var b=He;return a}
function Be(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Be(a,b[f],c,d,e);else c=Ce(c),a&&a[qe]?a.g.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):De(a,b,c,!0,d,e)}
function Ie(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ie(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Ce(c),a&&a[qe])?a.g.remove(String(b),c,d,e):a&&(a=Ee(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ve(b,c,d,e)),(c=-1<a?b[a]:null)&&Je(c))}
function Je(a){if("number"!==typeof a&&a&&!a.hb){var b=a.src;if(b&&b[qe])we(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ge(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ze--;(c=Ee(b))?(we(c,a),0==c.g&&(c.src=null,b[xe]=null)):te(a)}}}
function Ge(a){return a in ye?ye[a]:ye[a]="on"+a}
function He(a,b){if(a.hb)a=!0;else{b=new oe(b,this);var c=a.listener,d=a.ub||a.src;a.pb&&Je(a);a=c.call(d,b)}return a}
function Ee(a){a=a[xe];return a instanceof ue?a:null}
var Ke="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ce(a){if("function"===typeof a)return a;a[Ke]||(a[Ke]=function(b){return a.handleEvent(b)});
return a[Ke]}
;function Le(){ie.call(this);this.g=new ue(this);this.kb=this;this.P=null}
Za(Le,ie);Le.prototype[qe]=!0;Le.prototype.addEventListener=function(a,b,c,d){Ae(this,a,b,c,d)};
Le.prototype.removeEventListener=function(a,b,c,d){Ie(this,a,b,c,d)};
function Me(a,b){var c=a.P;if(c){var d=[];for(var e=1;c;c=c.P)d.push(c),++e}a=a.kb;c=b.type||b;"string"===typeof b?b=new je(b,a):b instanceof je?b.target=b.target||a:(e=b,b=new je(c,a),qb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=Ne(g,c,!0,b)&&e}b.i||(g=b.g=a,e=Ne(g,c,!0,b)&&e,b.i||(e=Ne(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=Ne(g,c,!1,b)&&e}
Le.prototype.Ea=function(){Le.ma.Ea.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,te(d[e]);delete a.listeners[c];a.g--}}this.P=null};
Le.prototype.Ga=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function Ne(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.hb&&g.capture==c){var h=g.listener,k=g.ub||g.src;g.pb&&we(a.g,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Oe(a){Le.call(this);var b=this;this.aa=this.l=0;this.fa=null!=a?a:{oa:function(e,f){return setTimeout(e,f)},
Na:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.v=function(){return x(function(e){return w(e,Pe(b),0)})};
window.addEventListener("offline",this.v);window.addEventListener("online",this.v);this.aa||Qe(this)}
v(Oe,Le);function Re(){var a=Se;Oe.g||(Oe.g=new Oe(a));return Oe.g}
Oe.prototype.dispose=function(){window.removeEventListener("offline",this.v);window.removeEventListener("online",this.v);this.fa.Na(this.aa);delete Oe.g};
Oe.prototype.ba=function(){return this.h};
function Qe(a){a.aa=a.fa.oa(function(){var b;return x(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.C(3):w(c,Pe(a),3):w(c,Pe(a),3);Qe(a);c.g=0})},3E4)}
function Pe(a,b){return a.G?a.G:a.G=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.l=a.fa.oa(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ca(h);a.G=void 0;a.l&&(a.fa.Na(a.l),a.l=0);g!==a.h&&(a.h=g,a.h?Me(a,"networkstatus-online"):Me(a,"networkstatus-offline"));c(g);Da(h);break;case 2:Ba(h),g=!1,h.C(3)}})})}
;function Te(){this.data_=[];this.g=-1}
Te.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.g=-1)};
Te.prototype.get=function(a){return!!this.data_[a]};
function Ue(a){-1===a.g&&(a.g=fb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.g}
;function Ve(a){J.call(this,a)}
v(Ve,J);function We(a){J.call(this,a)}
v(We,J);function Xe(a,b){return G(a,2,b)}
function Ye(a,b){return G(a,3,b)}
function Ze(a,b){return G(a,4,b)}
function $e(a,b){return G(a,5,b)}
function af(a,b){return G(a,9,b)}
function bf(a,b){Wc(a);if(null!=b){for(var c=!!b.length,d=0;d<b.length;d++){var e=b[d];Yc(e,Ve);c=c&&!(F(e.L)&2)}d=F(b);e=d|1;e=(c?e|8:e&-9)|4;e!=d&&(b=Oc(b,e))}null==b&&(b=void 0);return dd(a,10,b)}
function cf(a,b){return G(a,11,null==b?b:!!b)}
function df(a,b){return G(a,1,b)}
function ef(a,b){return G(a,7,null==b?b:!!b)}
We.la=[10,6];var ff="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function gf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function hf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function jf(){var a=window;if(!hf(a))return null;var b=gf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(ff).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function kf(a){var b;return cf(bf($e(Xe(df(Ze(ef(af(Ye(new We,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Ve;d=G(d,1,c.brand);return G(d,2,c.version)}))||[]),a.wow64||!1)}
function lf(){var a,b;return null!=(b=null==(a=jf())?void 0:a.then(function(c){return kf(c)}))?b:null}
;function mf(a,b){this.i=a;this.l=b;this.h=0;this.g=null}
mf.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function nf(a,b){a.l(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var of;function pf(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=Ad();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ya(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Tb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Tb;c.Tb=null;e()}};
return function(e){d.next={Tb:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function qf(){this.h=this.g=null}
qf.prototype.add=function(a,b){var c=rf.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
qf.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var rf=new mf(function(){return new sf},function(a){return a.reset()});
function sf(){this.next=this.scope=this.g=null}
sf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
sf.prototype.reset=function(){this.next=this.scope=this.g=null};var tf,uf=!1,vf=new qf;function wf(a,b){tf||xf();uf||(tf(),uf=!0);vf.add(a,b)}
function xf(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);tf=function(){a.then(yf)}}else tf=function(){var b=yf;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&(Sb()||!E("Edge"))&&z.Window.prototype.setImmediate==z.setImmediate?(of||(of=pf()),of(b)):z.setImmediate(b)}}
function yf(){for(var a;a=vf.remove();){try{a.g.call(a.scope)}catch(b){ec(b)}nf(rf,a)}uf=!1}
;function zf(a,b){this.g=a[z.Symbol.iterator]();this.h=b}
zf.prototype[Symbol.iterator]=function(){return this};
zf.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function Af(a,b){return new zf(a,b)}
;function Bf(){this.blockSize=-1}
;function Cf(){this.blockSize=-1;this.blockSize=64;this.g=[];this.s=[];this.v=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.l=this.h=0;this.reset()}
Za(Cf,Bf);Cf.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.l=this.h=0};
function Df(a,b,c){c||(c=0);var d=a.v;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
Cf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.s,f=this.h;d<b;){if(0==f)for(;d<=c;)Df(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Df(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Df(this,e);f=0;break}}this.h=f;this.l+=b}};
Cf.prototype.digest=function(){var a=[],b=8*this.l;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.s[c]=b&255,b/=256;Df(this,this.s);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function Ef(){}
Ef.prototype.next=function(){return Ff};
var Ff={done:!0,value:void 0};function Gf(a){return{value:a,done:!1}}
Ef.prototype.ga=function(){return this};function Hf(a){if(a instanceof If||a instanceof Jf||a instanceof Kf)return a;if("function"==typeof a.next)return new If(function(){return a});
if("function"==typeof a[Symbol.iterator])return new If(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ga)return new If(function(){return a.ga()});
throw Error("Not an iterator or iterable.");}
function If(a){this.h=a}
If.prototype.ga=function(){return new Jf(this.h())};
If.prototype[Symbol.iterator]=function(){return new Kf(this.h())};
If.prototype.g=function(){return new Kf(this.h())};
function Jf(a){this.h=a}
v(Jf,Ef);Jf.prototype.next=function(){return this.h.next()};
Jf.prototype[Symbol.iterator]=function(){return new Kf(this.h)};
Jf.prototype.g=function(){return new Kf(this.h)};
function Kf(a){If.call(this,function(){return a});
this.i=a}
v(Kf,If);Kf.prototype.next=function(){return this.i.next()};function Lf(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Lf)for(c=Mf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Mf(a){Nf(a);return a.g.concat()}
q=Lf.prototype;q.has=function(a){return Of(this.h,a)};
q.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Pf;Nf(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Pf(a,b){return a===b}
q.clear=function(){this.h={};this.i=this.size=this.g.length=0};
q.remove=function(a){return this.delete(a)};
q.delete=function(a){return Of(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&Nf(this),!0):!1};
function Nf(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];Of(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],Of(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
q.get=function(a,b){return Of(this.h,a)?this.h[a]:b};
q.set=function(a,b){Of(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
q.forEach=function(a,b){for(var c=Mf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new Lf(this)};
q.keys=function(){return Hf(this.ga(!0)).g()};
q.values=function(){return Hf(this.ga(!1)).g()};
q.entries=function(){var a=this;return Af(this.keys(),function(b){return[b,a.get(b)]})};
q.ga=function(a){Nf(this);var b=0,c=this.i,d=this,e=new Ef;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return Ff;var f=d.g[b++];return Gf(a?f:d.h[f])};
return e};
function Of(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var Qf=z.JSON.stringify;function Rf(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Sf(a){this.g=0;this.G=void 0;this.l=this.h=this.i=null;this.s=this.v=!1;if(a!=cb)try{var b=this;a.call(void 0,function(c){Tf(b,2,c)},function(c){Tf(b,3,c)})}catch(c){Tf(this,3,c)}}
function Uf(){this.next=this.context=this.h=this.i=this.g=null;this.l=!1}
Uf.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.l=!1};
var Vf=new mf(function(){return new Uf},function(a){a.reset()});
function Wf(a,b,c){var d=Vf.get();d.i=a;d.h=b;d.context=c;return d}
Sf.prototype.then=function(a,b,c){return Xf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Sf.prototype.$goog_Thenable=!0;Sf.prototype.cancel=function(a){if(0==this.g){var b=new Yf(a);wf(function(){Zf(this,b)},this)}};
function Zf(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.l||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?Zf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):$f(c),ag(c,e,3,b)))}a.i=null}else Tf(a,3,b)}
function bg(a,b){a.h||2!=a.g&&3!=a.g||cg(a);a.l?a.l.next=b:a.h=b;a.l=b}
function Xf(a,b,c,d){var e=Wf(null,null,null);e.g=new Sf(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Yf?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;bg(a,e);return e.g}
Sf.prototype.aa=function(a){this.g=0;Tf(this,2,a)};
Sf.prototype.kb=function(a){this.g=0;Tf(this,3,a)};
function Tf(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.aa,f=a.kb;if(d instanceof Sf){bg(d,Wf(e||cb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if("function"===typeof k){dg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.G=c,a.g=b,a.i=null,cg(a),3!=b||c instanceof Yf||eg(a,c))}}
function dg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function cg(a){a.v||(a.v=!0,wf(a.P,a))}
function $f(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}
Sf.prototype.P=function(){for(var a;a=$f(this);)ag(this,a,this.g,this.G);this.v=!1};
function ag(a,b,c,d){if(3==c&&b.h&&!b.l)for(;a&&a.s;a=a.i)a.s=!1;if(b.g)b.g.i=null,fg(b,c,d);else try{b.l?b.i.call(b.context):fg(b,c,d)}catch(e){gg.call(null,e)}nf(Vf,b)}
function fg(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function eg(a,b){a.s=!0;wf(function(){a.s&&gg.call(null,b)})}
var gg=ec;function Yf(a){ab.call(this,a)}
Za(Yf,ab);Yf.prototype.name="cancel";function K(a){ie.call(this);this.G=1;this.l=[];this.v=0;this.g=[];this.h={};this.P=!!a}
Za(K,ie);q=K.prototype;q.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.G;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.G=e+3;d.push(e);return e};
function hg(a,b,c){var d=ig;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.jb(a)}}
q.jb=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.v?(this.l.push(a),this.g[a+1]=function(){}):(c&&gb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
q.Wa=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.P)for(e=0;e<c.length;e++){var g=c[e];jg(this.g[g+1],this.g[g+2],d)}else{this.v++;try{for(e=0,f=c.length;e<f&&!this.i;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.v--,0<this.l.length&&0==this.v)for(;c=this.l.pop();)this.jb(c)}}return 0!=e}return!1};
function jg(a,b,c){wf(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.jb,this),delete this.h[a])}else this.g.length=0,this.h={}};
q.Ea=function(){K.ma.Ea.call(this);this.clear();this.l.length=0};function kg(a){this.g=a}
kg.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,Qf(b))};
kg.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
kg.prototype.remove=function(a){this.g.remove(a)};function lg(a){this.g=a}
Za(lg,kg);function mg(a){this.data=a}
function ng(a){return void 0===a||a instanceof mg?a:new mg(a)}
lg.prototype.set=function(a,b){lg.ma.set.call(this,a,ng(b))};
lg.prototype.h=function(a){a=lg.ma.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
lg.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function og(a){this.g=a}
Za(og,lg);og.prototype.set=function(a,b,c){if(b=ng(b)){if(c){if(c<Date.now()){og.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}og.ma.set.call(this,a,b)};
og.prototype.h=function(a){var b=og.ma.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())og.prototype.remove.call(this,a);else return b}};function pg(){}
;function qg(){}
Za(qg,pg);qg.prototype[Symbol.iterator]=function(){return Hf(this.ga(!0)).g()};
qg.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function rg(a){this.g=a}
Za(rg,qg);q=rg.prototype;q.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.g.removeItem(a)};
q.ga=function(a){var b=0,c=this.g,d=new Ef;d.next=function(){if(b>=c.length)return Ff;var e=c.key(b++);if(a)return Gf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Gf(e)};
return d};
q.clear=function(){this.g.clear()};
q.key=function(a){return this.g.key(a)};function sg(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a}
Za(sg,rg);function tg(a,b){this.h=a;this.g=null;var c;if(c=mc)c=!(9<=Number(yc));if(c){ug||(ug=new Lf);this.g=ug.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),ug.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
Za(tg,qg);var vg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ug=null;function wg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return vg[b]})}
q=tg.prototype;q.set=function(a,b){this.g.setAttribute(wg(a),b);xg(this)};
q.get=function(a){a=this.g.getAttribute(wg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.g.removeAttribute(wg(a));xg(this)};
q.ga=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new Ef;d.next=function(){if(b>=c.length)return Ff;var e=c[b++];if(a)return Gf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Gf(e)};
return d};
q.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);xg(this)};
function xg(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function yg(a,b){this.h=a;this.g=b+"::"}
Za(yg,qg);yg.prototype.set=function(a,b){this.h.set(this.g+a,b)};
yg.prototype.get=function(a){return this.h.get(this.g+a)};
yg.prototype.remove=function(a){this.h.remove(this.g+a)};
yg.prototype.ga=function(a){var b=this.h[Symbol.iterator](),c=this,d=new Ef;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return Gf(a?e.slice(c.g.length):c.h.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var M={},zg="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;M.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
M.Nb=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Ag={Ma:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Xb:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Bg={Ma:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Xb:function(a){return[].concat.apply([],a)}};
M.jd=function(){zg?(M.La=Uint8Array,M.na=Uint16Array,M.Cc=Int32Array,M.assign(M,Ag)):(M.La=Array,M.na=Array,M.Cc=Array,M.assign(M,Bg))};
M.jd();var Cg=!0;try{new Uint8Array(1)}catch(a){Cg=!1}
function Dg(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new M.La(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Eg={};Eg=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Fg={},Gg,Hg=[],Ig=0;256>Ig;Ig++){Gg=Ig;for(var Jg=0;8>Jg;Jg++)Gg=Gg&1?3988292384^Gg>>>1:Gg>>>1;Hg[Ig]=Gg}Fg=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Hg[(a^b[d])&255];return a^-1};var Kg={};Kg={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function fh(a){for(var b=a.length;0<=--b;)a[b]=0}
var gh=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],hh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],ih=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],jh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],kh=Array(576);fh(kh);var lh=Array(60);fh(lh);var mh=Array(512);fh(mh);var nh=Array(256);fh(nh);var oh=Array(29);fh(oh);var ph=Array(30);fh(ph);function qh(a,b,c,d,e){this.vc=a;this.Pc=b;this.Oc=c;this.Mc=d;this.ed=e;this.ac=a&&a.length}
var rh,sh,th;function uh(a,b){this.Vb=a;this.Ta=0;this.Aa=b}
function vh(a,b){a.J[a.pending++]=b&255;a.J[a.pending++]=b>>>8&255}
function N(a,b,c){a.N>16-c?(a.U|=b<<a.N&65535,vh(a,a.U),a.U=b>>16-a.N,a.N+=c-16):(a.U|=b<<a.N&65535,a.N+=c)}
function wh(a,b,c){N(a,c[2*b],c[2*b+1])}
function xh(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function yh(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=xh(d[e]++,e))}
function zh(a){var b;for(b=0;286>b;b++)a.W[2*b]=0;for(b=0;30>b;b++)a.Fa[2*b]=0;for(b=0;19>b;b++)a.R[2*b]=0;a.W[512]=1;a.ta=a.Xa=0;a.ca=a.matches=0}
function Ah(a){8<a.N?vh(a,a.U):0<a.N&&(a.J[a.pending++]=a.U);a.U=0;a.N=0}
function Bh(a,b,c){Ah(a);vh(a,c);vh(a,~c);M.Ma(a.J,a.window,b,c,a.pending);a.pending+=c}
function Ch(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Dh(a,b,c){for(var d=a.K[c],e=c<<1;e<=a.sa;){e<a.sa&&Ch(b,a.K[e+1],a.K[e],a.depth)&&e++;if(Ch(b,d,a.K[e],a.depth))break;a.K[c]=a.K[e];c=e;e<<=1}a.K[c]=d}
function Eh(a,b,c){var d=0;if(0!==a.ca){do{var e=a.J[a.ab+2*d]<<8|a.J[a.ab+2*d+1];var f=a.J[a.Fb+d];d++;if(0===e)wh(a,f,b);else{var g=nh[f];wh(a,g+256+1,b);var h=gh[g];0!==h&&(f-=oh[g],N(a,f,h));e--;g=256>e?mh[e]:mh[256+(e>>>7)];wh(a,g,c);h=hh[g];0!==h&&(e-=ph[g],N(a,e,h))}}while(d<a.ca)}wh(a,256,b)}
function Fh(a,b){var c=b.Vb,d=b.Aa.vc,e=b.Aa.ac,f=b.Aa.Mc,g,h=-1;a.sa=0;a.Qa=573;for(g=0;g<f;g++)0!==c[2*g]?(a.K[++a.sa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.sa;){var k=a.K[++a.sa]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.ta--;e&&(a.Xa-=d[2*k+1])}b.Ta=h;for(g=a.sa>>1;1<=g;g--)Dh(a,c,g);k=f;do g=a.K[1],a.K[1]=a.K[a.sa--],Dh(a,c,1),d=a.K[1],a.K[--a.Qa]=g,a.K[--a.Qa]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.K[1]=k++,Dh(a,c,1);while(2<=a.sa);a.K[--a.Qa]=
a.K[1];g=b.Vb;k=b.Ta;d=b.Aa.vc;e=b.Aa.ac;f=b.Aa.Pc;var l=b.Aa.Oc,m=b.Aa.ed,n,r=0;for(n=0;15>=n;n++)a.pa[n]=0;g[2*a.K[a.Qa]+1]=0;for(b=a.Qa+1;573>b;b++){var p=a.K[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,r++);g[2*p+1]=n;if(!(p>k)){a.pa[n]++;var y=0;p>=l&&(y=f[p-l]);var A=g[2*p];a.ta+=A*(n+y);e&&(a.Xa+=A*(d[2*p+1]+y))}}if(0!==r){do{for(n=m-1;0===a.pa[n];)n--;a.pa[n]--;a.pa[n+1]+=2;a.pa[m]--;r-=2}while(0<r);for(n=m;0!==n;n--)for(p=a.pa[n];0!==p;)d=a.K[--b],d>k||(g[2*d+1]!==n&&(a.ta+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}yh(c,h,a.pa)}
function Gh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.R[2*l]+=g:0!==l?(l!==e&&a.R[2*l]++,a.R[32]++):10>=g?a.R[34]++:a.R[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Hh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do wh(a,l,a.R);while(0!==--g)}else 0!==l?(l!==e&&(wh(a,l,a.R),g--),wh(a,16,a.R),N(a,g-3,2)):10>=g?(wh(a,17,a.R),N(a,g-3,3)):(wh(a,18,a.R),N(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Ih(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.W[2*c])return 0;if(0!==a.W[18]||0!==a.W[20]||0!==a.W[26])return 1;for(c=32;256>c;c++)if(0!==a.W[2*c])return 1;return 0}
var Jh=!1;function Kh(a,b,c){a.J[a.ab+2*a.ca]=b>>>8&255;a.J[a.ab+2*a.ca+1]=b&255;a.J[a.Fb+a.ca]=c&255;a.ca++;0===b?a.W[2*c]++:(a.matches++,b--,a.W[2*(nh[c]+256+1)]++,a.Fa[2*(256>b?mh[b]:mh[256+(b>>>7)])]++);return a.ca===a.eb-1}
;function Lh(a,b){a.msg=Kg[b];return b}
function Mh(a){for(var b=a.length;0<=--b;)a[b]=0}
function Nh(a){var b=a.state,c=b.pending;c>a.D&&(c=a.D);0!==c&&(M.Ma(a.fb,b.J,b.gb,c,a.Ua),a.Ua+=c,b.gb+=c,a.Ob+=c,a.D-=c,b.pending-=c,0===b.pending&&(b.gb=0))}
function P(a,b){var c=0<=a.Y?a.Y:-1,d=a.j-a.Y,e=0;if(0<a.level){2===a.A.Cb&&(a.A.Cb=Ih(a));Fh(a,a.wb);Fh(a,a.sb);Gh(a,a.W,a.wb.Ta);Gh(a,a.Fa,a.sb.Ta);Fh(a,a.Rb);for(e=18;3<=e&&0===a.R[2*jh[e]+1];e--);a.ta+=3*(e+1)+14;var f=a.ta+3+7>>>3;var g=a.Xa+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)N(a,b?1:0,3),Bh(a,c,d);else if(4===a.strategy||g===f)N(a,2+(b?1:0),3),Eh(a,kh,lh);else{N(a,4+(b?1:0),3);c=a.wb.Ta+1;d=a.sb.Ta+1;e+=1;N(a,c-257,5);N(a,d-1,5);N(a,e-4,4);for(f=0;f<e;f++)N(a,a.R[2*jh[f]+1],
3);Hh(a,a.W,c-1);Hh(a,a.Fa,d-1);Eh(a,a.W,a.Fa)}zh(a);b&&Ah(a);a.Y=a.j;Nh(a.A)}
function R(a,b){a.J[a.pending++]=b}
function Oh(a,b){a.J[a.pending++]=b>>>8&255;a.J[a.pending++]=b&255}
function Ph(a,b){var c=a.jc,d=a.j,e=a.Z,f=a.lc,g=a.j>a.S-262?a.j-(a.S-262):0,h=a.window,k=a.Ba,l=a.ka,m=a.j+258,n=h[d+e-1],r=h[d+e];a.Z>=a.Zb&&(c>>=2);f>a.m&&(f=a.m);do{var p=b;if(h[p+e]===r&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Sa=b;e=p;if(p>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.m?e:a.m}
function Qh(a){var b=a.S,c;do{var d=a.yc-a.m-a.j;if(a.j>=b+(b-262)){M.Ma(a.window,a.window,b,b,0);a.Sa-=b;a.j-=b;a.Y-=b;var e=c=a.vb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.ka[--e],a.ka[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.A.T)break;e=a.A;c=a.window;f=a.j+a.m;var g=e.T;g>d&&(g=d);0===g?c=0:(e.T-=g,M.Ma(c,e.input,e.Ja,g,f),1===e.state.wrap?e.u=Eg(e.u,c,g,f):2===e.state.wrap&&(e.u=Fg(e.u,c,g,f)),e.Ja+=g,e.Ka+=g,c=g);a.m+=c;if(3<=a.m+a.X)for(d=a.j-a.X,a.B=a.window[d],a.B=
(a.B<<a.ra^a.window[d+1])&a.qa;a.X&&!(a.B=(a.B<<a.ra^a.window[d+3-1])&a.qa,a.ka[d&a.Ba]=a.head[a.B],a.head[a.B]=d,d++,a.X--,3>a.m+a.X););}while(262>a.m&&0!==a.A.T)}
function Rh(a,b){for(var c;;){if(262>a.m){Qh(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.B=(a.B<<a.ra^a.window[a.j+3-1])&a.qa,c=a.ka[a.j&a.Ba]=a.head[a.B],a.head[a.B]=a.j);0!==c&&a.j-c<=a.S-262&&(a.F=Ph(a,c));if(3<=a.F)if(c=Kh(a,a.j-a.Sa,a.F-3),a.m-=a.F,a.F<=a.Hb&&3<=a.m){a.F--;do a.j++,a.B=(a.B<<a.ra^a.window[a.j+3-1])&a.qa,a.ka[a.j&a.Ba]=a.head[a.B],a.head[a.B]=a.j;while(0!==--a.F);a.j++}else a.j+=a.F,a.F=0,a.B=a.window[a.j],a.B=(a.B<<a.ra^a.window[a.j+1])&a.qa;else c=Kh(a,0,a.window[a.j]),
a.m--,a.j++;if(c&&(P(a,!1),0===a.A.D))return 1}a.X=2>a.j?a.j:2;return 4===b?(P(a,!0),0===a.A.D?3:4):a.ca&&(P(a,!1),0===a.A.D)?1:2}
function Sh(a,b){for(var c,d;;){if(262>a.m){Qh(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.B=(a.B<<a.ra^a.window[a.j+3-1])&a.qa,c=a.ka[a.j&a.Ba]=a.head[a.B],a.head[a.B]=a.j);a.Z=a.F;a.oc=a.Sa;a.F=2;0!==c&&a.Z<a.Hb&&a.j-c<=a.S-262&&(a.F=Ph(a,c),5>=a.F&&(1===a.strategy||3===a.F&&4096<a.j-a.Sa)&&(a.F=2));if(3<=a.Z&&a.F<=a.Z){d=a.j+a.m-3;c=Kh(a,a.j-1-a.oc,a.Z-3);a.m-=a.Z-1;a.Z-=2;do++a.j<=d&&(a.B=(a.B<<a.ra^a.window[a.j+3-1])&a.qa,a.ka[a.j&a.Ba]=a.head[a.B],a.head[a.B]=a.j);while(0!==
--a.Z);a.Ha=0;a.F=2;a.j++;if(c&&(P(a,!1),0===a.A.D))return 1}else if(a.Ha){if((c=Kh(a,0,a.window[a.j-1]))&&P(a,!1),a.j++,a.m--,0===a.A.D)return 1}else a.Ha=1,a.j++,a.m--}a.Ha&&(Kh(a,0,a.window[a.j-1]),a.Ha=0);a.X=2>a.j?a.j:2;return 4===b?(P(a,!0),0===a.A.D?3:4):a.ca&&(P(a,!1),0===a.A.D)?1:2}
function Th(a,b){for(var c,d,e,f=a.window;;){if(258>=a.m){Qh(a);if(258>=a.m&&0===b)return 1;if(0===a.m)break}a.F=0;if(3<=a.m&&0<a.j&&(d=a.j-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.j+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.F=258-(e-d);a.F>a.m&&(a.F=a.m)}3<=a.F?(c=Kh(a,1,a.F-3),a.m-=a.F,a.j+=a.F,a.F=0):(c=Kh(a,0,a.window[a.j]),a.m--,a.j++);if(c&&(P(a,!1),0===a.A.D))return 1}a.X=0;return 4===b?(P(a,!0),0===a.A.D?3:4):a.ca&&
(P(a,!1),0===a.A.D)?1:2}
function Uh(a,b){for(var c;;){if(0===a.m&&(Qh(a),0===a.m)){if(0===b)return 1;break}a.F=0;c=Kh(a,0,a.window[a.j]);a.m--;a.j++;if(c&&(P(a,!1),0===a.A.D))return 1}a.X=0;return 4===b?(P(a,!0),0===a.A.D?3:4):a.ca&&(P(a,!1),0===a.A.D)?1:2}
function Vh(a,b,c,d,e){this.Sc=a;this.dd=b;this.gd=c;this.cd=d;this.Qc=e}
var Wh;Wh=[new Vh(0,0,0,0,function(a,b){var c=65535;for(c>a.da-5&&(c=a.da-5);;){if(1>=a.m){Qh(a);if(0===a.m&&0===b)return 1;if(0===a.m)break}a.j+=a.m;a.m=0;var d=a.Y+c;if(0===a.j||a.j>=d)if(a.m=a.j-d,a.j=d,P(a,!1),0===a.A.D)return 1;if(a.j-a.Y>=a.S-262&&(P(a,!1),0===a.A.D))return 1}a.X=0;if(4===b)return P(a,!0),0===a.A.D?3:4;a.j>a.Y&&P(a,!1);return 1}),
new Vh(4,4,8,4,Rh),new Vh(4,5,16,8,Rh),new Vh(4,6,32,32,Rh),new Vh(4,4,16,16,Sh),new Vh(8,16,32,32,Sh),new Vh(8,16,128,128,Sh),new Vh(8,32,128,256,Sh),new Vh(32,128,258,1024,Sh),new Vh(32,258,258,4096,Sh)];
function Xh(){this.A=null;this.status=0;this.J=null;this.wrap=this.pending=this.gb=this.da=0;this.o=null;this.ea=0;this.method=8;this.Ra=-1;this.Ba=this.Pb=this.S=0;this.window=null;this.yc=0;this.head=this.ka=null;this.lc=this.Zb=this.strategy=this.level=this.Hb=this.jc=this.Z=this.m=this.Sa=this.j=this.Ha=this.oc=this.F=this.Y=this.ra=this.qa=this.Db=this.vb=this.B=0;this.W=new M.na(1146);this.Fa=new M.na(122);this.R=new M.na(78);Mh(this.W);Mh(this.Fa);Mh(this.R);this.Rb=this.sb=this.wb=null;this.pa=
new M.na(16);this.K=new M.na(573);Mh(this.K);this.Qa=this.sa=0;this.depth=new M.na(573);Mh(this.depth);this.N=this.U=this.X=this.matches=this.Xa=this.ta=this.ab=this.ca=this.eb=this.Fb=0}
function Yh(a,b){if(!a||!a.state||5<b||0>b)return a?Lh(a,-2):-2;var c=a.state;if(!a.fb||!a.input&&0!==a.T||666===c.status&&4!==b)return Lh(a,0===a.D?-5:-2);c.A=a;var d=c.Ra;c.Ra=b;if(42===c.status)if(2===c.wrap)a.u=0,R(c,31),R(c,139),R(c,8),c.o?(R(c,(c.o.text?1:0)+(c.o.ya?2:0)+(c.o.xa?4:0)+(c.o.name?8:0)+(c.o.comment?16:0)),R(c,c.o.time&255),R(c,c.o.time>>8&255),R(c,c.o.time>>16&255),R(c,c.o.time>>24&255),R(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),R(c,c.o.Od&255),c.o.xa&&c.o.xa.length&&(R(c,
c.o.xa.length&255),R(c,c.o.xa.length>>8&255)),c.o.ya&&(a.u=Fg(a.u,c.J,c.pending,0)),c.ea=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),R(c,3),c.status=113);else{var e=8+(c.Pb-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.j&&(e|=32);c.status=113;Oh(c,e+(31-e%31));0!==c.j&&(Oh(c,a.u>>>16),Oh(c,a.u&65535));a.u=1}if(69===c.status)if(c.o.xa){for(e=c.pending;c.ea<(c.o.xa.length&65535)&&(c.pending!==c.da||(c.o.ya&&c.pending>
e&&(a.u=Fg(a.u,c.J,c.pending-e,e)),Nh(a),e=c.pending,c.pending!==c.da));)R(c,c.o.xa[c.ea]&255),c.ea++;c.o.ya&&c.pending>e&&(a.u=Fg(a.u,c.J,c.pending-e,e));c.ea===c.o.xa.length&&(c.ea=0,c.status=73)}else c.status=73;if(73===c.status)if(c.o.name){e=c.pending;do{if(c.pending===c.da&&(c.o.ya&&c.pending>e&&(a.u=Fg(a.u,c.J,c.pending-e,e)),Nh(a),e=c.pending,c.pending===c.da)){var f=1;break}f=c.ea<c.o.name.length?c.o.name.charCodeAt(c.ea++)&255:0;R(c,f)}while(0!==f);c.o.ya&&c.pending>e&&(a.u=Fg(a.u,c.J,c.pending-
e,e));0===f&&(c.ea=0,c.status=91)}else c.status=91;if(91===c.status)if(c.o.comment){e=c.pending;do{if(c.pending===c.da&&(c.o.ya&&c.pending>e&&(a.u=Fg(a.u,c.J,c.pending-e,e)),Nh(a),e=c.pending,c.pending===c.da)){f=1;break}f=c.ea<c.o.comment.length?c.o.comment.charCodeAt(c.ea++)&255:0;R(c,f)}while(0!==f);c.o.ya&&c.pending>e&&(a.u=Fg(a.u,c.J,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.o.ya?(c.pending+2>c.da&&Nh(a),c.pending+2<=c.da&&(R(c,a.u&255),R(c,a.u>>8&255),a.u=0,
c.status=113)):c.status=113);if(0!==c.pending){if(Nh(a),0===a.D)return c.Ra=-1,0}else if(0===a.T&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Lh(a,-5);if(666===c.status&&0!==a.T)return Lh(a,-5);if(0!==a.T||0!==c.m||0!==b&&666!==c.status){d=2===c.strategy?Uh(c,b):3===c.strategy?Th(c,b):Wh[c.level].Qc(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.D&&(c.Ra=-1),0;if(2===d&&(1===b?(N(c,2,3),wh(c,256,kh),16===c.N?(vh(c,c.U),c.U=0,c.N=0):8<=c.N&&(c.J[c.pending++]=c.U&255,c.U>>=8,c.N-=
8)):5!==b&&(N(c,0,3),Bh(c,0,0),3===b&&(Mh(c.head),0===c.m&&(c.j=0,c.Y=0,c.X=0))),Nh(a),0===a.D))return c.Ra=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(R(c,a.u&255),R(c,a.u>>8&255),R(c,a.u>>16&255),R(c,a.u>>24&255),R(c,a.Ka&255),R(c,a.Ka>>8&255),R(c,a.Ka>>16&255),R(c,a.Ka>>24&255)):(Oh(c,a.u>>>16),Oh(c,a.u&65535));Nh(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Zh={};Zh=function(){this.input=null;this.Ka=this.T=this.Ja=0;this.fb=null;this.Ob=this.D=this.Ua=0;this.msg="";this.state=null;this.Cb=2;this.u=0};var $h=Object.prototype.toString;
function ai(a){if(!(this instanceof ai))return new ai(a);a=this.options=M.assign({level:-1,method:8,chunkSize:16384,Ca:15,fd:8,strategy:0,xc:""},a||{});a.raw&&0<a.Ca?a.Ca=-a.Ca:a.Tc&&0<a.Ca&&16>a.Ca&&(a.Ca+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.A=new Zh;this.A.D=0;var b=this.A;var c=a.level,d=a.method,e=a.Ca,f=a.fd,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Lh(b,-2);else{8===e&&(e=9);var k=new Xh;
b.state=k;k.A=b;k.wrap=h;k.o=null;k.Pb=e;k.S=1<<k.Pb;k.Ba=k.S-1;k.Db=f+7;k.vb=1<<k.Db;k.qa=k.vb-1;k.ra=~~((k.Db+3-1)/3);k.window=new M.La(2*k.S);k.head=new M.na(k.vb);k.ka=new M.na(k.S);k.eb=1<<f+6;k.da=4*k.eb;k.J=new M.La(k.da);k.ab=1*k.eb;k.Fb=3*k.eb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Ka=b.Ob=0;b.Cb=2;c=b.state;c.pending=0;c.gb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.u=2===c.wrap?0:1;c.Ra=0;if(!Jh){d=Array(16);for(f=g=0;28>f;f++)for(oh[f]=g,e=0;e<1<<gh[f];e++)nh[g++]=
f;nh[g-1]=f;for(f=g=0;16>f;f++)for(ph[f]=g,e=0;e<1<<hh[f];e++)mh[g++]=f;for(g>>=7;30>f;f++)for(ph[f]=g<<7,e=0;e<1<<hh[f]-7;e++)mh[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)kh[2*e+1]=8,e++,d[8]++;for(;255>=e;)kh[2*e+1]=9,e++,d[9]++;for(;279>=e;)kh[2*e+1]=7,e++,d[7]++;for(;287>=e;)kh[2*e+1]=8,e++,d[8]++;yh(kh,287,d);for(e=0;30>e;e++)lh[2*e+1]=5,lh[2*e]=xh(e,5);rh=new qh(kh,gh,257,286,15);sh=new qh(lh,hh,0,30,15);th=new qh([],ih,0,19,7);Jh=!0}c.wb=new uh(c.W,rh);c.sb=new uh(c.Fa,sh);c.Rb=new uh(c.R,
th);c.U=0;c.N=0;zh(c);c=0}else c=Lh(b,-2);0===c&&(b=b.state,b.yc=2*b.S,Mh(b.head),b.Hb=Wh[b.level].dd,b.Zb=Wh[b.level].Sc,b.lc=Wh[b.level].gd,b.jc=Wh[b.level].cd,b.j=0,b.Y=0,b.m=0,b.X=0,b.F=b.Z=2,b.Ha=0,b.B=0);b=c}}else b=-2;if(0!==b)throw Error(Kg[b]);a.header&&(b=this.A)&&b.state&&2===b.state.wrap&&(b.state.o=a.header);if(a.bb){var l;"string"===typeof a.bb?l=Dg(a.bb):"[object ArrayBuffer]"===$h.call(a.bb)?l=new Uint8Array(a.bb):l=a.bb;a=this.A;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,
2===b||1===b&&42!==l.status||l.m)b=-2;else{1===b&&(a.u=Eg(a.u,f,g,0));l.wrap=0;g>=l.S&&(0===b&&(Mh(l.head),l.j=0,l.Y=0,l.X=0),c=new M.La(l.S),M.Ma(c,f,g-l.S,l.S,0),f=c,g=l.S);c=a.T;d=a.Ja;e=a.input;a.T=g;a.Ja=0;a.input=f;for(Qh(l);3<=l.m;){f=l.j;g=l.m-2;do l.B=(l.B<<l.ra^l.window[f+3-1])&l.qa,l.ka[f&l.Ba]=l.head[l.B],l.head[l.B]=f,f++;while(--g);l.j=f;l.m=2;Qh(l)}l.j+=l.m;l.Y=l.j;l.X=l.m;l.m=0;l.F=l.Z=2;l.Ha=0;a.Ja=d;a.input=e;a.T=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Kg[b]);this.Fd=!0}}
ai.prototype.push=function(a,b){var c=this.A,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Dg(a):"[object ArrayBuffer]"===$h.call(a)?c.input=new Uint8Array(a):c.input=a;c.Ja=0;c.T=c.input.length;do{0===c.D&&(c.fb=new M.La(d),c.Ua=0,c.D=d);a=Yh(c,e);if(1!==a&&0!==a)return bi(this,a),this.ended=!0,!1;if(0===c.D||0===c.T&&(4===e||2===e))if("string"===this.options.xc){var f=M.Nb(c.fb,c.Ua);b=f;f=f.length;if(65537>f&&(b.subarray&&Cg||!b.subarray))b=
String.fromCharCode.apply(null,M.Nb(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=M.Nb(c.fb,c.Ua),this.chunks.push(b)}while((0<c.T||0===c.D)&&1!==a);if(4===e)return(c=this.A)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Lh(c,-2):(c.state=null,a=113===d?Lh(c,-3):0)):a=-2,bi(this,a),this.ended=!0,0===a;2===e&&(bi(this,0),c.D=0);return!0};
function bi(a,b){0===b&&(a.result="string"===a.options.xc?a.chunks.join(""):M.Xb(a.chunks));a.chunks=[];a.err=b;a.msg=a.A.msg}
;function ci(a){this.name=a}
;var di=new ci("rawColdConfigGroup");var ei=new ci("rawHotConfigGroup");function fi(a){J.call(this,a)}
v(fi,J);function gi(a){J.call(this,a)}
v(gi,J);function hi(a){J.call(this,a)}
v(hi,J);hi.la=[2];function ii(a){J.call(this,a)}
v(ii,J);ii.prototype.getPlayerType=function(){var a=cd(this,36);a=null==a?a:a;return null==a?0:a};
ii.prototype.setHomeGroupInfo=function(a){return I(this,hi,81,a)};
ii.la=[9,66,24,32,86,100,101];function ji(a){J.call(this,a)}
v(ji,J);ji.prototype.getKey=function(){return ld(this,1)};
ji.prototype.ha=function(){return ld(this,2===gd(this,ki)?2:-1)};
var ki=[2,3,4,5,6];function li(a){J.call(this,a)}
v(li,J);li.la=[15,26,28];function mi(a){J.call(this,a)}
v(mi,J);mi.la=[5];function ni(a){J.call(this,a)}
v(ni,J);function oi(a){J.call(this,a)}
v(oi,J);oi.prototype.setSafetyMode=function(a){return G(this,5,a)};
oi.la=[12];function pi(a){J.call(this,a)}
v(pi,J);pi.la=[12];var qi={Ed:"WEB_DISPLAY_MODE_UNKNOWN",Ad:"WEB_DISPLAY_MODE_BROWSER",Cd:"WEB_DISPLAY_MODE_MINIMAL_UI",Dd:"WEB_DISPLAY_MODE_STANDALONE",Bd:"WEB_DISPLAY_MODE_FULLSCREEN"};function ri(a){J.call(this,a)}
v(ri,J);ri.prototype.getKey=function(){return ld(this,1)};
ri.prototype.ha=function(){return ld(this,2)};function si(a){J.call(this,a)}
v(si,J);si.la=[4,5];function ti(a){J.call(this,a)}
v(ti,J);function ui(a){J.call(this,a)}
v(ui,J);var vi=[2,3,4,5];function wi(a){J.call(this,a)}
v(wi,J);function xi(a){J.call(this,a)}
v(xi,J);function yi(a){J.call(this,a)}
v(yi,J);function zi(a){J.call(this,a)}
v(zi,J);zi.la=[10,17];function Ai(a){J.call(this,a)}
v(Ai,J);function Bi(a){J.call(this,a)}
v(Bi,J);function Ci(a){J.call(this,a)}
v(Ci,J);function Di(a){J.call(this,a,475)}
v(Di,J);
var Ei=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474];function Fi(a){J.call(this,a)}
v(Fi,J);function Gi(a){J.call(this,a)}
v(Gi,J);Gi.prototype.getPlaylistId=function(){return md(this,2)};
var nd=[1,2];function Hi(a){J.call(this,a)}
v(Hi,J);Hi.la=[3];var Ii=z.window,Ji,Ki,Li=(null==Ii?void 0:null==(Ji=Ii.yt)?void 0:Ji.config_)||(null==Ii?void 0:null==(Ki=Ii.ytcfg)?void 0:Ki.data_)||{};C("yt.config_",Li);function Mi(){var a=arguments;1<a.length?Li[a[0]]=a[1]:1===a.length&&Object.assign(Li,a[0])}
function S(a,b){return a in Li?Li[a]:b}
function Ni(){return S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Oi(){var a=Li.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Pi=[];function Qi(a){Pi.forEach(function(b){return b(a)})}
function Ri(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Si(b)}}:a}
function Si(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Mi("ERRORS",b));Qi(a)}
function Ti(a,b,c,d,e){var f=B("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Mi("ERRORS",f))}
;function U(a){a=Ui(a);return"string"===typeof a&&"false"===a?!1:!!a}
function W(a,b){a=Ui(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Ui(a){var b=S("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:S("EXPERIMENT_FLAGS",{})[a]}
function Vi(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=u(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});var e=u(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Wi=0;C("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Wi});var Xi={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Yi(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Xi||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Yi.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Yi.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Yi.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var mb=z.ytEventsEventsListeners||{};C("ytEventsEventsListeners",mb);var Zi=z.ytEventsEventsCounter||{count:0};C("ytEventsEventsCounter",Zi);
function $i(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return lb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&nb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function aj(a){a&&("string"==typeof a&&(a=[a]),D(a,function(b){if(b in mb){var c=mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?bj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete mb[b]}}))}
var bj=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function cj(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=$i(a,b,c,d);if(!e){e=++Zi.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Yi(h);if(!Bd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Yi(h);
h.currentTarget=a;return c.call(a,h)};
g=Ri(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),bj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);mb[e]=[a,b,c,g,d]}}}
;function dj(a,b){"function"===typeof a&&(a=Ri(a));return window.setTimeout(a,b)}
function ej(a){"function"===typeof a&&(a=Ri(a));return window.setInterval(a,250)}
;var fj=/^[\w.]*$/,gj={q:!0,search_query:!0};function hj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=ij(f[0]||""),h=ij(f[1]||"");g in c?Array.isArray(c[g])?jb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(hj);k.args=[{key:l,value:f[1],query:a,method:jj==m?"unchanged":m}];gj.hasOwnProperty(l)||Ti(k)}}return c}
var jj=String(hj);function kj(a){var b=[];kb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function lj(a){"?"==a.charAt(0)&&(a=a.substr(1));return hj(a,"&")}
function mj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=lj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=bc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function nj(a){if(!b)var b=window.location.href;var c=a.match(Xb)[1]||null,d=Zb(a);c&&d?(a=a.match(Xb),b=b.match(Xb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Zb(b)==d&&(Number(b.match(Xb)[4]||null)||null)==(Number(a.match(Xb)[4]||null)||null):!0;return a}
function ij(a){return a&&a.match(fj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function oj(a){var b=pj;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Ud;e.flash="0";a:{try{var f=b.g.top.location.href}catch(aa){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?yd:g;try{var h=g.history.length}catch(aa){h=0}e.u_his=h;var k;e.u_h=null==(k=yd.screen)?void 0:k.height;var l;e.u_w=null==(l=yd.screen)?void 0:l.width;var m;e.u_ah=null==(m=yd.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=yd.screen)?void 0:n.availWidth;var r;e.u_cd=null==(r=yd.screen)?void 0:r.colorDepth}catch(aa){}h=b.g;try{var p=h.screenX;var y=h.screenY}catch(aa){}try{var A=h.outerWidth;var H=h.outerHeight}catch(aa){}try{var O=h.innerWidth;var T=h.innerHeight}catch(aa){}try{var Q=h.screenLeft;var wa=h.screenTop}catch(aa){}try{O=h.innerWidth,T=h.innerHeight}catch(aa){}try{var Lc=h.screen.availWidth;var Ka=h.screen.availTop}catch(aa){}p=[Q,wa,p,y,Lc,Ka,A,H,O,T];y=b.g.top;try{var xa=(y||window).document,ba=
"CSS1Compat"==xa.compatMode?xa.documentElement:xa.body;var ia=(new zd(ba.clientWidth,ba.clientHeight)).round()}catch(aa){ia=new zd(-12245933,-12245933)}xa=ia;ia={};var ja=void 0===ja?z:ja;ba=new Te;"SVGElement"in ja&&"createElementNS"in ja.document&&ba.set(0);y=Sd();y["allow-top-navigation-by-user-activation"]&&ba.set(1);y["allow-popups-to-escape-sandbox"]&&ba.set(2);ja.crypto&&ja.crypto.subtle&&ba.set(3);"TextDecoder"in ja&&"TextEncoder"in ja&&ba.set(4);ja=Ue(ba);ia.bc=ja;ia.bih=xa.height;ia.biw=
xa.width;ia.brdim=p.join();b=b.h;b=(ia.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ia.wgl=!!yd.WebGLRenderingContext,ia);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var pj=new function(){var a=window.document;this.g=window;this.h=a};
C("yt.ads_.signals_.getAdSignalsString",function(a){return kj(oj(a))});Date.now();var qj="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function rj(){if(!qj)return null;var a=qj();return"open"in a?a:null}
;var sj={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},tj="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ka(Wd)),uj=!1;
function vj(a,b){b=void 0===b?{}:b;var c=nj(a),d=U("web_ajax_ignore_global_headers_if_set"),e;for(e in sj){var f=S(sj[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=S("VISITOR_DATA"));!f||!c&&Zb(a)||d&&void 0!==b[e]||(!U("move_vss_away_from_login_info_cookie")||"TVHTML5_UNPLUGGED"===S("INNERTUBE_CLIENT_NAME"))&&g||(b[e]=f)}U("move_vss_away_from_login_info_cookie")&&c&&S("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==S("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");
"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Zb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Zb(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Zb(a)||(b["X-YouTube-Ad-Signals"]=kj(oj()));return b}
function wj(a){var b=window.location.search,c=Zb(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&nj(a)&&(c=document.location.hostname);var d=Yb(a.match(Xb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=lj(b),f={};D(tj,function(g){e[g]&&(f[g]=e[g])});
return mj(a,f||{},!1)}
function xj(a,b){var c=b.format||"JSON";a=yj(a,b);var d=zj(a,b),e=!1,f=Aj(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=Bj(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||z;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=dj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||z,f))},d)}return f}
function yj(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=mj(a,b||{},!0);return a}
function zj(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams;var g=S("XSRF_FIELD_NAME");var h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Zb(a)&&!b.withCredentials&&Zb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=lj(e),qb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):bc(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!uj&&a&&"POST"!=b.method&&(uj=!0,Si(Error("AJAX request with postData should use POST")));return e}
function Bj(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ti(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Cj(a):null)e={},D(a.getElementsByTagName("*"),function(g){e[g.tagName]=Dj(g)})}d&&Ej(e);
return e}
function Ej(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===rb){var e=null;var f=z.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(g){z.console&&z.console.error(g.message)}rb=e}else rb=e}d=(e=rb)?e.createHTML(d):d;a[c]=new Vb(d)}else Ej(a[b])}}
function Cj(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Dj(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Fj(a,b){b.method="POST";b.postParams||(b.postParams={});return xj(a,b)}
function Aj(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Ri(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=rj();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;U("debug_forward_web_query_parameters")&&(a=wj(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=vj(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var Gj=[{Ib:function(a){return"Cannot read property '"+a.key+"'"},
xb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ib:function(a){return"Cannot call '"+a.key+"'"},
xb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ib:function(a){return a.key+" is not defined"},
xb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Ij={za:[],wa:[{Jc:Hj,weight:500}]};function Hj(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Jj(){this.wa=[];this.za=[]}
var Kj;function Lj(){if(!Kj){var a=Kj=new Jj;a.za.length=0;a.wa.length=0;Ij.za&&a.za.push.apply(a.za,Ij.za);Ij.wa&&a.wa.push.apply(a.wa,Ij.wa)}return Kj}
;var Mj=new K;function Nj(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Oj(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Oj(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Oj(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Oj(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Pj(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Qj(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Nj(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Qj(e+".ve",f,g,h):0;d+=g;d+=Qj(e,a[e],b,c);if(500<d)break}}else c[b]=Rj(a),d+=c[b].length;else c[b]=Rj(a),d+=c[b].length;return d}
function Qj(a,b,c,d){c+="."+a;a=Rj(b);d[c]=a;return c.length+a.length}
function Rj(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Sj(){}
;function Tj(){if(!z.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return z.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":z.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":z.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":z.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;C("ytglobal.prefsUserPrefsPrefs_",B("ytglobal.prefsUserPrefsPrefs_")||{});var Uj={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Vj={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Wj={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Xj={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Yj(){var a=z.navigator;return a?a.connection:void 0}
;function Zj(a){var b=La.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ka(b))}
v(Zj,Error);function ak(){try{return bk(),!0}catch(a){return!1}}
function bk(){if(void 0!==S("DATASYNC_ID"))return S("DATASYNC_ID");throw new Zj("Datasync ID not set","unknown");}
;function ck(){}
function dk(a,b){return ek(a,0,b)}
ck.prototype.oa=function(a,b){return ek(a,1,b)};function fk(){ck.apply(this,arguments)}
v(fk,ck);function gk(){fk.g||(fk.g=new fk);return fk.g}
function ek(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):dj(a,c||0)}
fk.prototype.Na=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
fk.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
var Se=gk();function hk(a){var b=new sg;if(b.g)try{b.g.setItem("__sak","1");b.g.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new yg(b,a):b:null)||(a=new tg(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new og(a):null;this.h=document.domain||window.location.hostname}
hk.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Qf(b))}catch(f){return}else e=escape(b);b=this.h;ce.set(""+a,e,{Gb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
hk.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=ce.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
hk.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;ce.remove(""+a,"/",void 0===b?"youtube.com":b)};var ik=function(){var a;return function(){a||(a=new hk("ytidb"));return a}}();
function jk(){var a;return null==(a=ik())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var kk=[],lk=!1;function mk(a){lk||(kk.push({type:"ERROR",payload:a}),10<kk.length&&kk.shift())}
function nk(a,b){lk||(kk.push({type:"EVENT",eventType:a,payload:b}),10<kk.length&&kk.shift())}
;function ok(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function pk(a){return a.substr(0,a.indexOf(":"))||a}
;var qk=zc||Ac;var rk={},sk=(rk.AUTH_INVALID="No user identifier specified.",rk.EXPLICIT_ABORT="Transaction was explicitly aborted.",rk.IDB_NOT_SUPPORTED="IndexedDB is not supported.",rk.MISSING_INDEX="Index not created.",rk.MISSING_OBJECT_STORES="Object stores not created.",rk.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",rk.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",rk.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
rk.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",rk.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",rk.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",rk.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",rk),tk={},uk=(tk.AUTH_INVALID="ERROR",tk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",tk.EXPLICIT_ABORT="IGNORED",tk.IDB_NOT_SUPPORTED="ERROR",tk.MISSING_INDEX=
"WARNING",tk.MISSING_OBJECT_STORES="ERROR",tk.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",tk.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",tk.QUOTA_EXCEEDED="WARNING",tk.QUOTA_MAYBE_EXCEEDED="WARNING",tk.UNKNOWN_ABORT="WARNING",tk.INCOMPATIBLE_DB_VERSION="WARNING",tk),vk={},wk=(vk.AUTH_INVALID=!1,vk.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,vk.EXPLICIT_ABORT=!1,vk.IDB_NOT_SUPPORTED=!1,vk.MISSING_INDEX=!1,vk.MISSING_OBJECT_STORES=!1,vk.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,vk.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,vk.QUOTA_EXCEEDED=!1,vk.QUOTA_MAYBE_EXCEEDED=!0,vk.UNKNOWN_ABORT=!0,vk.INCOMPATIBLE_DB_VERSION=!1,vk);function X(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?sk[a]:c;d=void 0===d?uk[a]:d;e=void 0===e?wk[a]:e;Zj.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,X.prototype)}
v(X,Zj);function xk(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},sk.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,xk.prototype)}
v(xk,X);function yk(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,yk.prototype)}
v(yk,Error);var zk=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ak(a,b,c,d){b=pk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new X("QUOTA_EXCEEDED",a);if(Bc&&"UnknownError"===e.name)return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof yk)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&zk.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Nd:e.name})];e.level="WARNING";return e}
function Bk(a,b,c){var d=jk();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Ck(a){if(!a)throw Error();throw a;}
function Dk(a){return a}
function Ek(a){this.g=a}
function Fk(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
Fk.resolve=function(a){return new Fk(new Ek(function(b,c){a instanceof Fk?a.then(b,c):b(a)}))};
Fk.reject=function(a){return new Fk(new Ek(function(b,c){c(a)}))};
Fk.prototype.then=function(a,b){var c=this,d=null!=a?a:Dk,e=null!=b?b:Ck;return new Fk(new Ek(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){Gk(c,c,d,f,g)}),c.h.push(function(){Hk(c,c,e,f,g)})):"FULFILLED"===c.state.status?Gk(c,c,d,f,g):"REJECTED"===c.state.status&&Hk(c,c,e,f,g)}))};
function Ik(a,b){a.then(void 0,b)}
function Gk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Fk?Jk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Hk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Fk?Jk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Jk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Fk?Jk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Kk(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Lk(a){return new Promise(function(b,c){Kk(a,b,c)})}
function Mk(a){return new Fk(new Ek(function(b,c){Kk(a,b,c)}))}
;function Nk(a,b){return new Fk(new Ek(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Ok=window,Y=Ok.ytcsi&&Ok.ytcsi.now?Ok.ytcsi.now:Ok.performance&&Ok.performance.timing&&Ok.performance.now&&Ok.performance.timing.navigationStart?function(){return Ok.performance.timing.navigationStart+Ok.performance.now()}:function(){return(new Date).getTime()};function Pk(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.h=!1}
q=Pk.prototype;q.add=function(a,b,c){return Qk(this,[a],{mode:"readwrite",V:!0},function(d){return d.objectStore(a).add(b,c)})};
q.clear=function(a){return Qk(this,[a],{mode:"readwrite",V:!0},function(b){return b.objectStore(a).clear()})};
q.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function Rk(a,b,c){a=a.g.createObjectStore(b,c);return new Sk(a)}
q.delete=function(a,b){return Qk(this,[a],{mode:"readwrite",V:!0},function(c){return c.objectStore(a).delete(b)})};
q.get=function(a,b){return Qk(this,[a],{mode:"readonly",V:!0},function(c){return c.objectStore(a).get(b)})};
function Tk(a,b,c){return Qk(a,[b],{mode:"readwrite",V:!0},function(d){d=d.objectStore(b);return Mk(d.g.put(c,void 0))})}
q.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function Qk(a,b,c,d){var e,f,g,h,k,l,m,n,r,p,y,A;return x(function(H){switch(H.g){case 1:var O={mode:"readonly",V:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?O.mode=c:Object.assign(O,c);e=O;a.transactionCount++;f=e.V?3:1;g=0;case 2:if(h){H.C(4);break}g++;k=Math.round(Y());ya(H,5);l=a.g.transaction(b,e.mode);O=new Uk(l);O=Vk(O,d);return w(H,O,7);case 7:return m=H.h,n=Math.round(Y()),Wk(a,k,n,g,void 0,b.join(),e),H.return(m);case 5:r=Ba(H);p=Math.round(Y());y=Ak(r,a.g.name,b.join(),a.g.version);
if((A=y instanceof X&&!y.g)||g>=f)Wk(a,k,p,g,y,b.join(),e),h=y;H.C(2);break;case 4:return H.return(Promise.reject(h))}})}
function Wk(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&nk("QUOTA_EXCEEDED",{dbName:pk(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),nk("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),Xk(a,!1,d,f,b,g.tag),mk(e)):Xk(a,!0,d,f,b,g.tag)}
function Xk(a,b,c,d,e,f){nk("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
q.getName=function(){return this.g.name};
function Sk(a){this.g=a}
q=Sk.prototype;q.add=function(a,b){return Mk(this.g.add(a,b))};
q.autoIncrement=function(){return this.g.autoIncrement};
q.clear=function(){return Mk(this.g.clear()).then(function(){})};
function Yk(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function Zk(a,b){return $k(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
q.delete=function(a){return a instanceof IDBKeyRange?Zk(this,a):Mk(this.g.delete(a))};
q.get=function(a){return Mk(this.g.get(a))};
q.index=function(a){try{return new al(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new yk(a,this.g.name);throw b;}};
q.getName=function(){return this.g.name};
q.keyPath=function(){return this.g.keyPath};
function $k(a,b,c){a=a.g.openCursor(b.query,b.direction);return bl(a).then(function(d){return Nk(d,c)})}
function Uk(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=X;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function Vk(a,b){var c=new Promise(function(d,e){try{Ik(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Uk.prototype.abort=function(){this.g.abort();this.h=!0;throw new X("EXPLICIT_ABORT");};
Uk.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new Sk(a),this.i.set(a,b));return b};
function al(a){this.g=a}
q=al.prototype;q.delete=function(a){return cl(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
q.get=function(a){return Mk(this.g.get(a))};
q.getKey=function(a){return Mk(this.g.getKey(a))};
q.keyPath=function(){return this.g.keyPath};
q.unique=function(){return this.g.unique};
function cl(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return bl(a).then(function(d){return Nk(d,c)})}
function dl(a,b){this.request=a;this.cursor=b}
function bl(a){return Mk(a).then(function(b){return b?new dl(a,b):null})}
q=dl.prototype;q.advance=function(a){this.cursor.advance(a);return bl(this.request)};
q.continue=function(a){this.cursor.continue(a);return bl(this.request)};
q.delete=function(){return Mk(this.cursor.delete()).then(function(){})};
q.getKey=function(){return this.cursor.key};
q.ha=function(){return this.cursor.value};
q.update=function(a){return Mk(this.cursor.update(a))};function el(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Pk(g.result,{closed:n}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Hc,k=c.Ic,l=c.kd,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&nk("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:pk(a)});var y=f(),A=new Uk(g.transaction);m&&
m(y,function(H){return p.oldVersion<H&&p.newVersion>=H},A);
A.done.catch(function(H){e(H)})}catch(H){e(H)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){nk("IDB_UNEXPECTEDLY_CLOSED",{dbName:pk(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function fl(a,b,c){c=void 0===c?{}:c;return el(a,b,c)}
function gl(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.g)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Hc)&&c.addEventListener("blocked",function(){e()}),w(g,Lk(c),4);
if(2!=g.g)return za(g,0);f=Ba(g);throw Ak(f,a,"",-1);})}
;function Ul(a,b){this.name=a;this.options=b;this.i=!0;this.s=this.l=0}
Ul.prototype.h=function(a,b,c){c=void 0===c?{}:c;return fl(a,b,c)};
Ul.prototype.delete=function(a){a=void 0===a?{}:a;return gl(this.name,a)};
function Vl(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Wl(a,b){if(!b)throw Bk("openWithToken",pk(a.name));return Xl(a)}
function Xl(a){function b(){var f,g,h,k,l,m,n,r,p,y;return x(function(A){switch(A.g){case 1:return g=null!=(f=Error().stack)?f:"",ya(A,2),w(A,a.h(a.name,a.options.version,d),4);case 4:h=A.h;for(var H=a.options,O=[],T=u(Object.keys(H.Va)),Q=T.next();!Q.done;Q=T.next()){Q=Q.value;var wa=H.Va[Q],Lc=void 0===wa.hd?Number.MAX_VALUE:wa.hd;!(h.g.version>=wa.Za)||h.g.version>=Lc||h.g.objectStoreNames.contains(Q)||O.push(Q)}k=O;if(0===k.length){A.C(5);break}l=Object.keys(a.options.Va);m=h.objectStoreNames();
if(a.s<W("ytidb_reopen_db_retries",0))return a.s++,h.close(),mk(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());if(!(a.l<W("ytidb_remake_db_retries",1))){A.C(6);break}a.l++;return w(A,a.delete(),7);case 7:return mk(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());case 6:throw new xk(m,l);case 5:return A.return(h);case 2:n=Ba(A);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){A.C(8);break}return w(A,a.h(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=A.h;p=r.g.version;if(void 0!==a.options.version&&p>a.options.version+1)throw r.close(),a.i=!1,Vl(a,p);return A.return(r);case 8:throw c(),n instanceof Error&&!U("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Ak(n,a.name,"",null!=(y=a.options.version)?y:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw Vl(a);if(a.g)return a.g;var d={Ic:function(f){f.close()},
closed:c,kd:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var Yl=new Ul("YtIdbMeta",{Va:{databases:{Za:1}},upgrade:function(a,b){b(1)&&Rk(a,"databases",{keyPath:"actualName"})}});
function Zl(a,b){var c;return x(function(d){if(1==d.g)return w(d,Wl(Yl,b),2);c=d.h;return d.return(Qk(c,["databases"],{V:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Mk(f.g.put(a,void 0)).then(function(){})})}))})}
function $l(a,b){var c;return x(function(d){if(1==d.g)return a?w(d,Wl(Yl,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function am(a,b){var c,d;return x(function(e){return 1==e.g?(c=[],w(e,Wl(Yl,b),2)):3!=e.g?(d=e.h,w(e,Qk(d,["databases"],{V:!0,mode:"readonly"},function(f){c.length=0;return $k(f.objectStore("databases"),{},function(g){a(g.ha())&&c.push(g.ha());return g.continue()})}),3)):e.return(c)})}
function bm(a){return am(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var cm,dm=new function(){}(new function(){});
function em(){var a,b,c,d;return x(function(e){switch(e.g){case 1:a=jk();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=qk)f=/WebKit\/([0-9]+)/.exec(Ob()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Ob()),f=!(f&&602<=parseInt(f[1],10)));if(f||nc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,Zl(d,dm),4);case 4:return w(e,$l("yt-idb-test-do-not-use",dm),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function fm(){if(void 0!==cm)return cm;lk=!0;return cm=em().then(function(a){lk=!1;var b;if(null!=(b=ik())&&b.g){var c;b={hasSucceededOnce:(null==(c=jk())?void 0:c.hasSucceededOnce)||a};var d;null==(d=ik())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function gm(){return B("ytglobal.idbToken_")||void 0}
function hm(){var a=gm();return a?Promise.resolve(a):fm().then(function(b){(b=b?dm:void 0)&&C("ytglobal.idbToken_",b);return b})}
;new Rf;function im(a){if(!ak())throw a=new X("AUTH_INVALID",{dbName:a}),mk(a),a;var b=bk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function jm(a,b,c,d){var e,f,g,h,k,l;return x(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",w(m,hm(),2);case 2:g=m.h;if(!g)throw h=Bk("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),mk(h),h;ok(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:im(a);ya(m,3);return w(m,Zl(k,g),5);case 5:return w(m,fl(k.actualName,b,d),6);case 6:return m.return(m.h);case 3:return l=Ba(m),ya(m,7),w(m,$l(k.actualName,g),9);case 9:za(m,
8);break;case 7:Ba(m);case 8:throw l;}})}
function km(a,b,c){c=void 0===c?{}:c;return jm(a,b,!1,c)}
function lm(a,b,c){c=void 0===c?{}:c;return jm(a,b,!0,c)}
function mm(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.g)return w(e,hm(),2);if(3!=e.g){c=e.h;if(!c)return e.return();ok(a);d=im(a);return w(e,gl(d.actualName,b),3)}return w(e,$l(d.actualName,c),0)})}
function nm(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.g?w(e,gl(d.actualName,b),2):w(e,$l(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function om(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.g)return w(d,hm(),2);if(3!=d.g){b=d.h;if(!b)return d.return();ok("LogsDatabaseV2");return w(d,bm(b),3)}c=d.h;return w(d,nm(c,a,b),0)})}
function pm(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.g)return w(d,hm(),2);if(3!=d.g){c=d.h;if(!c)return d.return();ok(a);return w(d,gl(a,b),3)}return w(d,$l(a,c),0)})}
;function qm(a,b){Ul.call(this,a,b);this.options=b;ok(a)}
v(qm,Ul);function rm(a,b){var c;return function(){c||(c=new qm(a,b));return c}}
qm.prototype.h=function(a,b,c){c=void 0===c?{}:c;return(this.options.Bb?lm:km)(a,b,Object.assign({},c))};
qm.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Bb?pm:mm)(this.name,a)};
function sm(a,b){return rm(a,b)}
;var tm={},um=sm("ytGcfConfig",{Va:(tm.coldConfigStore={Za:1},tm.hotConfigStore={Za:1},tm),Bb:!1,upgrade:function(a,b){b(1)&&(Yk(Rk(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Yk(Rk(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function vm(a){return Wl(um(),a)}
function wm(a,b,c){var d,e,f;return x(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},w(g,vm(c),2);case 2:return e=g.h,w(g,e.clear("hotConfigStore"),3);case 3:return w(g,Tk(e,"hotConfigStore",d),4);case 4:return f=g.h,g.return(f)}})}
function xm(a,b,c,d){var e,f,g;return x(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},w(h,vm(d),2);case 2:return f=h.h,w(h,f.clear("coldConfigStore"),3);case 3:return w(h,Tk(f,"coldConfigStore",e),4);case 4:return g=h.h,h.return(g)}})}
function ym(a){var b,c;return x(function(d){return 1==d.g?w(d,vm(a),2):3!=d.g?(b=d.h,c=void 0,w(d,Qk(b,["coldConfigStore"],{mode:"readwrite",V:!0},function(e){return cl(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.ha()})}),3)):d.return(c)})}
function zm(a){var b,c;return x(function(d){return 1==d.g?w(d,vm(a),2):3!=d.g?(b=d.h,c=void 0,w(d,Qk(b,["hotConfigStore"],{mode:"readwrite",V:!0},function(e){return cl(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.ha()})}),3)):d.return(c)})}
;function Am(){ie.apply(this,arguments);this.g=[]}
v(Am,ie);Am.prototype.Ea=function(){this.g.length=0;ie.prototype.Ea.call(this)};function Bm(){this.g=0;this.h=new Am}
function Cm(a,b,c){var d,e,f;return x(function(g){switch(g.g){case 1:if(!U("update_log_event_config")){g.C(0);break}c&&(a.i=c,C("yt.gcf.config.hotConfigGroup",a.i||null));a.hotHashData=b;C("yt.gcf.config.hotHashData",a.hotHashData||null);d=gm();if(!d){g.C(3);break}if(c){g.C(4);break}return w(g,zm(d),5);case 5:e=g.h,c=null==(f=e)?void 0:f.config;case 4:return w(g,wm(c,b,d),3);case 3:if(c)for(var h=c,k=u(a.h.g),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.g=0}})}
function Dm(a,b,c){var d,e,f,g;return x(function(h){if(1==h.g){if(!U("update_log_event_config"))return h.C(0);a.coldHashData=b;C("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=gm())?c?h.C(4):w(h,ym(d),5):h.C(0)}4!=h.g&&(e=h.h,c=null==(f=e)?void 0:f.config);if(!c)return h.C(0);g=c.configData;return w(h,xm(c,b,g,d),0)})}
;function Em(){return"INNERTUBE_API_KEY"in Li&&"INNERTUBE_API_VERSION"in Li}
function Fm(){return{Uc:S("INNERTUBE_API_KEY"),Vc:S("INNERTUBE_API_VERSION"),Eb:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),cc:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Wc:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),dc:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),fc:S("INNERTUBE_CONTEXT_HL"),ec:S("INNERTUBE_CONTEXT_GL"),Xc:S("INNERTUBE_HOST_OVERRIDE")||"",Zc:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Yc:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Gm(a){var b={client:{hl:a.fc,gl:a.ec,clientName:a.cc,clientVersion:a.dc,configInfo:a.Eb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=z.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Vi();0<c.length&&(b.request={internalExperimentFlags:c});Hm(a,void 0,b);Im(void 0,b);Jm(void 0,b);Km(a,void 0,b);Lm(void 0,b);U("start_sending_config_hash")&&Mm(void 0,b);S("DELEGATED_SESSION_ID")&&
!U("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!U("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries(lj(S("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===
g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Nm(a){var b=new pi,c=new ii;G(c,1,a.fc);G(c,2,a.ec);G(c,16,a.Wc);G(c,17,a.dc);if(a.Eb){var d=a.Eb,e=new fi;d.coldConfigData&&G(e,1,d.coldConfigData);d.appInstallData&&G(e,6,d.appInstallData);d.coldHashData&&G(e,3,d.coldHashData);d.hotHashData&&G(e,5,d.hotHashData);I(c,fi,62,e)}if((d=z.devicePixelRatio)&&1!=d){if(null!=d&&"number"!==typeof d)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof d+": "+d);G(c,65,d)}d=S("EXPERIMENTS_TOKEN","");""!==d&&G(c,
54,d);d=Vi();if(0<d.length){e=new li;for(var f=0;f<d.length;f++){var g=new ji;G(g,1,d[f].key);fd(g,2,ki,d[f].value);kd(e,15,ji,g)}I(b,li,5,e)}Hm(a,c);Im(b);Jm(c);Km(a,c);Lm(c);U("start_sending_config_hash")&&Mm(c);S("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(a=new oi,G(a,3,S("DELEGATED_SESSION_ID")));!U("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(d=hd(b,oi,3)||new oi,a=G(d,18,a),I(b,oi,3,a));a=u(Object.entries(lj(S("DEVICE",""))));
for(d=a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?G(c,12,e):"cmodel"===d?G(c,13,e):"cbr"===d?G(c,87,e):"cbrver"===d?G(c,88,e):"cos"===d?G(c,18,e):"cosver"===d?G(c,19,e):"cplatform"===d&&G(c,42,e);I(b,ii,1,c);return b}
function Hm(a,b,c){a=a.cc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=hd(b,gi,96)||new gi;var d=Tj();d=Object.keys(qi).indexOf(d);d=-1===d?null:d;null!==d&&G(c,3,d);I(b,gi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Tj())}
function Im(a,b){var c=B("yt.embedded_player.embed_url");c&&(a?(b=hd(a,mi,7)||new mi,G(b,4,c),I(a,mi,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Jm(a,b){var c;if(U("web_log_memory_total_kbytes")&&(null==(c=z.navigator)?0:c.deviceMemory)){var d;c=null==(d=z.navigator)?void 0:d.deviceMemory;a?G(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Km(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=hd(b,fi,62))?d:new fi;G(c,6,a.appInstallData);I(b,fi,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Lm(a,b){a:{var c=Yj();if(c){var d=Uj[c.type||"unknown"]||"CONN_UNKNOWN";c=Uj[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?G(a,61,Vj[d]):b&&(b.client.connectionType=d));U("web_log_effective_connection_type")&&(d=Yj(),d=null!=d&&d.effectiveType?Xj.hasOwnProperty(d.effectiveType)?Xj[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?G(a,94,Wj[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Om(a,b,c){c=void 0===c?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Hd||S("AUTHORIZATION");if(!b)if(a)b="Bearer "+B("gapi.auth.getToken")().Gd;else{Sj.g||(Sj.g=new Sj);a={};if(c=fe([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in Li||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in Li&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID"));U("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function Mm(a,b){if(!Bm.g){var c=new Bm;Bm.g=c}c=Bm.g;var d=Y()-c.g;if(0!==c.g&&d<W("send_config_hash_timer"))c=void 0;else{d=B("yt.gcf.config.coldConfigData");var e=B("yt.gcf.config.hotHashData"),f=B("yt.gcf.config.coldHashData");d&&e&&f&&(c.g=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=hd(a,fi,62))?g:new fi;G(b,1,c);G(b,3,d);G(b,5,e);I(a,fi,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var Pm=B("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.jb;K.prototype.publish=K.prototype.Wa;K.prototype.clear=K.prototype.clear;C("ytPubsub2Pubsub2Instance",Pm);C("ytPubsub2Pubsub2SubscribedKeys",B("ytPubsub2Pubsub2SubscribedKeys")||{});C("ytPubsub2Pubsub2TopicToKeys",B("ytPubsub2Pubsub2TopicToKeys")||{});C("ytPubsub2Pubsub2IsAsync",B("ytPubsub2Pubsub2IsAsync")||{});C("ytPubsub2Pubsub2SkipSubKey",null);function Qm(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={Sd:a,Rd:b},(b=B("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var Rm=W("max_body_size_to_compress",5E5),Sm=W("min_body_size_to_compress",500),Tm=!0,Um=0,Vm=0,Wm=W("compression_performance_threshold",250),Xm=W("slow_compressions_before_abandon_count",4);
function Ym(a,b,c,d){var e=Y(),f={startTime:e,ticks:{},infos:{}};if(Tm)try{try{var g=(new Blob(b.split(""))).size}catch(r){Ti(r),g=null}if(null==g||!(g>Rm||g<Sm)){var h=he(b);var k=k||{};k.Tc=!0;var l=new ai(k);l.push(h,!0);if(l.err)throw l.msg||Kg[l.err];var m=l.result;var n=Y();f.ticks.gelc=n;Vm++;U("disable_compression_due_to_performance_degredation")&&n-e>=Wm&&(Um++,U("abandon_compression_after_N_slow_zips")?Vm===W("compression_disable_point")&&Um>Xm&&(Tm=!1):Tm=!1);U("gel_compression_csi_killswitch")||
!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||Qm("gel_compression",f,{sampleRate:.1});c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=m;c.postParams=void 0}d(a,c)}catch(r){Ti(r),d(a,c)}else d(a,c)}
;function Zm(a){a=Object.assign({},a);delete a.Authorization;var b=fe();if(b){var c=new Cf;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=Ec(c.digest(),3)}return a}
;var $m;function an(){$m||($m=new hk("yt.innertube"));return $m}
function bn(a,b,c,d){if(d)return null;d=an().get("nextId",!0)||1;var e=an().get("requests",!0)||{};e[d]={method:a,request:b,authState:Zm(c),requestTime:Math.round(Y())};an().set("nextId",d+1,86400,!0);an().set("requests",e,86400,!0);return d}
function cn(a){var b=an().get("requests",!0)||{};delete b[a];an().set("requests",b,86400,!0)}
function dn(a){var b=an().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState,f=Zm(Om(!1));nb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),en(a,d.method,e,{}));delete b[c]}}an().set("requests",b,86400,!0)}}
;function fn(a){this.ob=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.Pa=function(){};
this.now=Date.now;this.cb=!1;var b;this.wc=null!=(b=a.wc)?b:100;var c;this.uc=null!=(c=a.uc)?c:1;var d;this.qc=null!=(d=a.qc)?d:2592E6;var e;this.pc=null!=(e=a.pc)?e:12E4;var f;this.sc=null!=(f=a.sc)?f:5E3;var g;this.H=null!=(g=a.H)?g:void 0;this.tb=!!a.tb;var h;this.rb=null!=(h=a.rb)?h:.1;var k;this.yb=null!=(k=a.yb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Pa&&(this.Pa=a.Pa);a.cb&&(this.cb=a.cb);a.ob&&(this.ob=a.ob);this.I=a.I;this.fa=a.fa;this.M=a.M;this.O=a.O;this.va=a.va;this.Lb=
a.Lb;this.Kb=a.Kb;gn(this)&&(!this.I||this.I("networkless_logging"))&&hn(this)}
function hn(a){gn(a)&&!a.cb&&(a.g=!0,a.tb&&Math.random()<=a.rb&&a.M.Kc(a.H),jn(a),a.O.ba()&&a.ib(),a.O.Ga(a.Lb,a.ib.bind(a)),a.O.Ga(a.Kb,a.Sb.bind(a)))}
q=fn.prototype;q.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(gn(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.M.set(d,this.H).then(function(e){d.id=e;c.O.ba()&&kn(c,d)}).catch(function(e){kn(c,d);
ln(c,e)})}else this.va(a,b)};
q.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(gn(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.I&&this.I("nwl_skip_retry")&&(e.skipRetry=c);if(this.O.ba()||this.I&&this.I("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.g)return w(k,d.M.set(e,d.H).catch(function(l){ln(d,l)}),2);
f(g,h);k.g=0})}}this.va(a,b,e.skipRetry)}else this.M.set(e,this.H).catch(function(g){d.va(a,b,e.skipRetry);
ln(d,g)})}else this.va(a,b,this.I&&this.I("nwl_skip_retry")&&c)};
q.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(gn(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.M.Oa(d.id,c.H):e=!0;c.O.Ia&&c.I&&c.I("vss_network_hint")&&c.O.Ia(!0);f(g,h)};
this.va(d.url,d.options);this.M.set(d,this.H).then(function(g){d.id=g;e&&c.M.Oa(d.id,c.H)}).catch(function(g){ln(c,g)})}else this.va(a,b)};
q.ib=function(){var a=this;if(!gn(this))throw Bk("throttleSend");this.h||(this.h=this.fa.oa(function(){var b;return x(function(c){if(1==c.g)return w(c,a.M.Yb("NEW",a.H),2);if(3!=c.g)return b=c.h,b?w(c,kn(a,b),3):(a.Sb(),c.return());a.h&&(a.h=0,a.ib());c.g=0})},this.wc))};
q.Sb=function(){this.fa.Na(this.h);this.h=0};
function kn(a,b){var c,d;return x(function(e){switch(e.g){case 1:if(!gn(a))throw c=Bk("immediateSend"),c;if(void 0===b.id){e.C(2);break}return w(e,a.M.bd(b.id,a.H),3);case 3:(d=e.h)||a.Pa(Error("The request cannot be found in the database."));case 2:if(mn(a,b,a.qc)){e.C(4);break}a.Pa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.C(5);break}return w(e,a.M.Oa(b.id,a.H),5);case 5:return e.return();case 4:b.skipRetry||(b=nn(a,b));if(!b){e.C(0);break}if(!b.skipRetry||
void 0===b.id){e.C(8);break}return w(e,a.M.Oa(b.id,a.H),8);case 8:a.va(b.url,b.options,!!b.skipRetry),e.g=0}})}
function nn(a,b){if(!gn(a))throw Bk("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return x(function(m){switch(m.g){case 1:g=on(f);(h=pn(f))&&a.I&&a.I("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.I&&a.I("nwl_consider_error_code")&&g||a.I&&!a.I("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.yb)){m.C(2);break}if(!a.O.Ab){m.C(3);break}return w(m,a.O.Ab(),3);case 3:if(a.O.ba()){m.C(2);break}c(e,f);if(!a.I||!a.I("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){m.C(6);
break}return w(m,a.M.Mb(b.id,a.H,!1),6);case 6:return m.return();case 2:if(a.I&&a.I("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.yb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.C(8);break}return b.sendCount<a.uc?w(m,a.M.Mb(b.id,a.H,!0,h?!1:void 0),12):w(m,a.M.Oa(b.id,a.H),8);case 12:a.fa.oa(function(){a.O.ba()&&a.ib()},a.sc);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.C(2):w(h,a.M.Oa(b.id,a.H),2);a.O.Ia&&a.I&&a.I("vss_network_hint")&&a.O.Ia(!0);d(e,f);h.g=0})};
return b}
function mn(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function jn(a){if(!gn(a))throw Bk("retryQueuedRequests");a.M.Yb("QUEUED",a.H).then(function(b){b&&!mn(a,b,a.pc)?a.fa.oa(function(){return x(function(c){if(1==c.g)return void 0===b.id?c.C(2):w(c,a.M.Mb(b.id,a.H),2);jn(a);c.g=0})}):a.O.ba()&&a.ib()})}
function ln(a,b){a.zc&&!a.O.ba()?a.zc(b):a.handleError(b)}
function gn(a){return!!a.H||a.ob}
function on(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function pn(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var qn;
function rn(){if(qn)return qn();var a={};qn=sm("LogsDatabaseV2",{Va:(a.LogsRequestsStore={Za:2},a),Bb:!1,upgrade:function(b,c,d){c(2)&&Rk(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),Yk(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return qn()}
;function sn(a){return Wl(rn(),a)}
function tn(a,b){var c,d,e,f;return x(function(g){if(1==g.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},w(g,sn(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,Tk(d,"LogsRequestsStore",e),3);f=g.h;c.ticks.tc=Y();un(c);return g.return(f)})}
function vn(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},w(l,sn(b),2);if(3!=l.g)return d=l.h,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,Qk(d,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(m){return cl(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.ha()&&(k=n.ha(),"NEW"===a&&(k.status="QUEUED",
n.update(k)))})}),3);
c.ticks.tc=Y();un(c);return l.return(k)})}
function wn(a,b){var c;return x(function(d){if(1==d.g)return w(d,sn(b),2);c=d.h;return d.return(Qk(c,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Mk(f.g.put(g,void 0)).then(function(){return g})})}))})}
function xn(a,b,c,d){c=void 0===c?!0:c;var e;return x(function(f){if(1==f.g)return w(f,sn(b),2);e=f.h;return f.return(Qk(e,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Mk(h.g.put(k,void 0)).then(function(){return k})):Fk.resolve(void 0)})}))})}
function yn(a,b){var c;return x(function(d){if(1==d.g)return w(d,sn(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function zn(a){var b,c;return x(function(d){if(1==d.g)return w(d,sn(a),2);b=d.h;c=Y()-2592E6;return w(d,Qk(b,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(e){return $k(e.objectStore("LogsRequestsStore"),{},function(f){if(f.ha().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function An(){x(function(a){return w(a,om(),0)})}
function un(a){U("nwl_csi_killswitch")||Qm("networkless_performance",a,{sampleRate:1})}
;var Bn={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,tvhtml5ApiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,
tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,
postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,
proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,
accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,
sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477};var Cn={},Dn=sm("ServiceWorkerLogsDatabase",{Va:(Cn.SWHealthLog={Za:1},Cn),Bb:!0,upgrade:function(a,b){b(1)&&Yk(Rk(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function En(a){return Wl(Dn(),a)}
function Fn(a){var b,c;x(function(d){if(1==d.g)return w(d,En(a),2);b=d.h;c=Y()-2592E6;return w(d,Qk(b,["SWHealthLog"],{mode:"readwrite",V:!0},function(e){return $k(e.objectStore("SWHealthLog"),{},function(f){if(f.ha().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Gn(a){var b;return x(function(c){if(1==c.g)return w(c,En(a),2);b=c.h;return w(c,b.clear("SWHealthLog"),0)})}
;var Hn={},In=0;function Jn(a){var b=new Image,c=""+In++;Hn[c]=b;b.onload=b.onerror=function(){delete Hn[c]};
b.src=a}
;function Kn(){this.g=new Map;this.h=!1}
function Ln(){if(!Kn.g){var a=B("yt.networkRequestMonitor.instance")||new Kn;C("yt.networkRequestMonitor.instance",a);Kn.g=a}return Kn.g}
Kn.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
Kn.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
Kn.prototype.removeParams=function(a){return a.split("?")[0]};
Kn.prototype.removeParams=Kn.prototype.removeParams;Kn.prototype.isEndpointCFR=Kn.prototype.isEndpointCFR;Kn.prototype.requestComplete=Kn.prototype.requestComplete;Kn.getInstance=Ln;var Mn;function Nn(){Mn||(Mn=new hk("yt.offline"));return Mn}
function On(a){if(U("offline_error_handling")){var b=Nn().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Nn().set("errors",b,2592E3,!0)}}
;function Z(){Le.call(this);var a=this;this.l=!1;this.h=Re();this.h.Ga("networkstatus-online",function(){if(a.l&&U("offline_error_handling")){var b=Nn().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Zj(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Si(d)}Nn().set("errors",{},2592E3,!0)}}})}
v(Z,Le);function Pn(){if(!Z.g){var a=B("yt.networkStatusManager.instance")||new Z;C("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
q=Z.prototype;q.ba=function(){return this.h.ba()};
q.Ia=function(a){this.h.h=a};
q.Rc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
q.Nc=function(){this.l=!0};
q.Ga=function(a,b){return this.h.Ga(a,b)};
q.Ab=function(a){a=Pe(this.h,a);a.then(function(b){U("use_cfr_monitor")&&Ln().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Ab;Z.prototype.listen=Z.prototype.Ga;Z.prototype.enableErrorFlushing=Z.prototype.Nc;Z.prototype.getWindowStatus=Z.prototype.Rc;Z.prototype.networkStatusHint=Z.prototype.Ia;Z.prototype.isNetworkAvailable=Z.prototype.ba;Z.getInstance=Pn;function Qn(a){a=void 0===a?{}:a;Le.call(this);var b=this;this.h=this.G=0;this.l=Pn();var c=B("yt.networkStatusManager.instance.listen").bind(this.l);c&&(a.zb?(this.zb=a.zb,c("networkstatus-online",function(){Rn(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Rn(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Me(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Me(b,"publicytnetworkstatus-offline")})))}
v(Qn,Le);Qn.prototype.ba=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.l)():!0};
Qn.prototype.Ia=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.l);b&&b(a)};
Qn.prototype.Ab=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.l);return U("skip_network_check_if_cfr")&&Ln().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Ia((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ba())})):c?d.return(c(a)):d.return(!0)})};
function Rn(a,b){a.zb?a.h?(Se.Na(a.G),a.G=Se.oa(function(){a.v!==b&&(Me(a,b),a.v=b,a.h=Y())},a.zb-(Y()-a.h))):(Me(a,b),a.v=b,a.h=Y()):Me(a,b)}
;var Sn;function Tn(){var a=fn.call;Sn||(Sn=new Qn({Ld:!0,Kd:!0}));a.call(fn,this,{M:{Kc:zn,Oa:yn,Yb:vn,bd:wn,Mb:xn,set:tn},O:Sn,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Ti(new Zj(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Si(b)},
Pa:Ti,va:Un,now:Y,zc:On,fa:gk(),Lb:"publicytnetworkstatus-online",Kb:"publicytnetworkstatus-offline",tb:!0,rb:.1,yb:W("potential_esf_error_limit",10),I:U,cb:!(ak()&&"www.youtube-nocookie.com"!==Zb(document.location.toString()))});this.i=new Rf;U("networkless_immediately_drop_all_requests")&&An();pm("LogsDatabaseV2")}
v(Tn,fn);function Vn(){var a=B("yt.networklessRequestController.instance");a||(a=new Tn,C("yt.networklessRequestController.instance",a),U("networkless_logging")&&hm().then(function(b){a.H=b;hn(a);a.i.resolve();a.tb&&Math.random()<=a.rb&&a.H&&Fn(a.H);U("networkless_immediately_drop_sw_health_store")&&Wn(a)}));
return a}
Tn.prototype.writeThenSend=function(a,b){b||(b={});ak()||(this.g=!1);fn.prototype.writeThenSend.call(this,a,b)};
Tn.prototype.sendThenWrite=function(a,b,c){b||(b={});ak()||(this.g=!1);fn.prototype.sendThenWrite.call(this,a,b,c)};
Tn.prototype.sendAndWrite=function(a,b){b||(b={});ak()||(this.g=!1);fn.prototype.sendAndWrite.call(this,a,b)};
Tn.prototype.awaitInitialization=function(){return this.i.promise};
function Wn(a){var b;x(function(c){if(!a.H)throw b=Bk("clearSWHealthLogsDb"),b;return c.return(Gn(a.H).catch(function(d){a.handleError(d)}))})}
function Un(a,b,c){b=U("web_fp_via_jspb")?Object.assign({},b):b;U("use_cfr_monitor")&&Xn(a,b);if(U("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;var g=void 0===g?!1:g;if(a)if(e)Aj(a,void 0,"POST",e);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Aj(a,void 0,"GET",
"",void 0,void 0,f,g);else{b:{try{var h=new bb({url:a});if(h.i&&h.h||h.l){var k=Yb(a.match(Xb)[5]||null);var l=!(!k||!k.endsWith("/aclk")||"1"!==dc(a,"ri"));break b}}catch(n){}l=!1}if(l){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var m=!0;break b}}catch(n){}m=!1}c=m?!0:!1}else c=!1;c||Jn(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Ym(a,b.postBody,b,xj)):Ym(a,JSON.stringify(b.postParams),b,Fj):
xj(a,b)}
function Xn(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Ln().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Ln().requestComplete(a,!0);d(e,f)}}
;var Yn=z.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};C("ytNetworklessLoggingInitializationOptions",Yn);function Zn(a){var b=this;this.config_=null;a?this.config_=a:Em()&&(this.config_=Fm());dk(function(){dn(b)},5E3)}
Zn.prototype.isReady=function(){!this.config_&&Em()&&(this.config_=Fm());return!!this.config_};
function en(a,b,c,d){function e(y){y=void 0===y?!1:y;var A;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||U("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(A=bn(b,c,l,k)),A)){var H=g.onSuccess,O=g.onFetchSuccess;g.onSuccess=function(Q,wa){cn(A);H(Q,wa)};
c.onFetchSuccess=function(Q,wa){cn(A);O(Q,wa)}}try{if(y&&d.retry&&!d.kc.bypassNetworkless)g.method="POST",d.kc.writeThenSend?Vn().writeThenSend(p,g):Vn().sendAndWrite(p,g);
else if(d.compress)if(g.postBody){var T=g.postBody;"string"!==typeof T&&(T=JSON.stringify(g.postBody));Ym(p,T,g,xj)}else Ym(p,JSON.stringify(g.postParams),g,Fj);else U("web_all_payloads_via_jspb")?xj(p,g):Fj(p,g)}catch(Q){if("InvalidAccessError"==Q.name)A&&(cn(A),A=0),Ti(Error("An extension is blocking network request."));else throw Q;}A&&dk(function(){dn(a)},5E3)}
!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ti(new Zj("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Zj("innertube xhrclient not ready",b,c,d);Si(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,A){if(d.onSuccess)d.onSuccess(A)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,A){if(d.onError)d.onError(A)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Xc)&&(h=f);var k=a.config_.Zc||!1,l=Om(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.Vc+"/"+b,n={alt:"json"},r=a.config_.Yc&&f;r=r&&f.startsWith("Bearer");r||(n.key=a.config_.Uc);var p=mj(""+h+m,n||{},!0);B("ytNetworklessLoggingInitializationOptions")&&
Yn.isNwlInitialized?fm().then(function(y){e(y)}):e(!1)}
;function $n(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var ao=z.ytPubsubPubsubInstance||new K,bo=z.ytPubsubPubsubSubscribedKeys||{},co=z.ytPubsubPubsubTopicToKeys||{},eo=z.ytPubsubPubsubIsSynchronous||{};K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.jb;K.prototype.publish=K.prototype.Wa;K.prototype.clear=K.prototype.clear;C("ytPubsubPubsubInstance",ao);C("ytPubsubPubsubTopicToKeys",co);C("ytPubsubPubsubIsSynchronous",eo);C("ytPubsubPubsubSubscribedKeys",bo);var fo=Symbol("injectionDeps");function go(){this.key=Bm}
function ho(){this.h=new Map;this.g=new Map}
ho.prototype.resolve=function(a){return a instanceof go?io(this,a.key,[],!0):io(this,a,[])};
function io(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.nd)var e=d.nd;else if(d.md)e=d[fo]?jo(a,d[fo],c):[],e=d.md.apply(d,ka(e));else if(d.ld){e=d.ld;var f=e[fo]?jo(a,e[fo],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ka(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Qd||a.g.set(b,e);return e}
function jo(a,b,c){return b?b.map(function(d){return d instanceof go?io(a,d.key,c,!0):io(a,d,c)}):[]}
;var ko;function lo(){ko||(ko=new ho);return ko}
;function mo(){this.store={};this.g={}}
mo.prototype.storePayload=function(a,b){a=no(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
mo.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=oo(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ka(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ka(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ka(this.smartExtractMatchingEntries(a))));return c};
mo.prototype.extractMatchingEntries=function(a){a=oo(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ka(this.store[a[c]])),delete this.store[a[c]]);return b};
mo.prototype.getSequenceCount=function(a){a=oo(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function oo(a,b){var c=no(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&no(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(po(b.auth,g[0])){var h=b.isJspb;po(void 0===h?"undefined":h?"true":"false",g[1])&&po(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),po(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function po(a,b){return void 0===a||"undefined"===a?!0:a===b}
mo.prototype.getSequenceCount=mo.prototype.getSequenceCount;mo.prototype.extractMatchingEntries=mo.prototype.extractMatchingEntries;mo.prototype.smartExtractMatchingEntries=mo.prototype.smartExtractMatchingEntries;mo.prototype.storePayload=mo.prototype.storePayload;function no(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var qo=W("initial_gel_batch_timeout",2E3),ro=W("gel_queue_timeout_max_ms",6E4),so=Math.pow(2,16)-1,to=void 0;function uo(){this.i=this.g=this.h=0}
var vo=new uo,wo=new uo,xo=new uo,yo=new uo,zo,Ao=!0,Bo=z.ytLoggingTransportTokensToCttTargetIds_||{};C("ytLoggingTransportTokensToCttTargetIds_",Bo);var Co=z.ytLoggingTransportTokensToJspbCttTargetIds_||{};C("ytLoggingTransportTokensToJspbCttTargetIds_",Co);var Do={};function Eo(){var a=B("yt.logging.ims");a||(a=new mo,C("yt.logging.ims",a));return a}
function Fo(a,b){if("log_event"===a.endpoint){Go(a);var c=Ho(a);a:{var d=Object.keys(a.payload);d=u(d);for(var e=d.next();!e.done;e=d.next())if(e=e.value,Bn[e]){d=e;break a}d=void 0}d=Io(d||"");400===d?Jo(a,b):(Do[c]=!0,d={cttAuthInfo:c,isJspb:!1,tier:d},Eo().storePayload(d,a.payload),Ko(b,c,!1,d))}}
function Lo(a,b,c){if("log_event"===b.endpoint){Go(void 0,b);var d=Ho(b,!0),e=Io(a);400===e?Mo(a,b,c):(Do[d]=!0,a={cttAuthInfo:d,isJspb:!0,tier:e},Eo().storePayload(a,b.payload.toJSON()),Ko(c,d,!0,a))}}
function Ko(a,b,c,d){function e(){No({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;a&&(to=new a);a=W("tvhtml5_logging_max_batch_ads_fork")||W("web_logging_max_batch")||100;var f=Y(),g=Oo(c,d.tier),h=g.i,k=0;d&&(k=Eo().getSequenceCount(d));1E3<=k&&U("web_logging_max_batch_hard_limit")?e():k>=a?zo||(zo=Po(function(){e();zo=void 0},0)):10<=f-h&&(Qo(c,d.tier),g.i=f)}
function Jo(a,b){if("log_event"===a.endpoint){Go(a);var c=Ho(a),d=new Map;d.set(c,[a.payload]);b&&(to=new b);return new Sf(function(e,f){to&&to.isReady()?Ro(d,to,e,f,{bypassNetworkless:!0},!0):e()})}}
function Mo(a,b,c){if("log_event"===b.endpoint){Go(void 0,b);a=Ho(b,!0);var d=new Map;d.set(a,[b.payload.toJSON()]);c&&(to=new c);return new Sf(function(e){to&&to.isReady()?So(d,to,e,{bypassNetworkless:!0},!0):e()})}}
function Ho(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Gi;c.videoId?fd(d,1,nd,c.videoId):c.playlistId&&fd(d,2,nd,c.playlistId);Co[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Bo[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function No(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Sf(function(e,f){var g=Oo(c,d);To(g.h);To(g.g);g.g=0;to&&to.isReady()?void 0===d&&U("enable_web_tiered_gel")?Uo(e,f,a,b,c,300):Uo(e,f,a,b,c,d):(Qo(c,d),e())})}
function Uo(a,b,c,d,e,f){var g=to;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;var h=new Map,k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f},m={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=U("enable_web_tiered_gel")?Eo().smartExtractMatchingEntries({keys:[l,m],sizeLimit:1E3}):Eo().extractMatchingEntries(m),h.set(d,b),So(h,g,a,c)):(h=U("enable_web_tiered_gel")?Eo().smartExtractMatchingEntries({keys:[l,m],sizeLimit:1E3}):Eo().extractMatchingEntries(m),k.set(d,h),Ro(k,g,a,b,c));else if(e){b=u(Object.keys(Do));
for(d=b.next();!d.done;d=b.next())k=d.value,f=U("enable_web_tiered_gel")?Eo().smartExtractMatchingEntries({keys:[l,m],sizeLimit:1E3}):Eo().extractMatchingEntries({isJspb:!0,cttAuthInfo:k}),0<f.length&&h.set(k,f),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete Do[k];So(h,g,a,c)}else{h=u(Object.keys(Do));for(d=h.next();!d.done;d=h.next())l=d.value,m=U("enable_web_tiered_gel")?Eo().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},{isJspb:!1,
cttAuthInfo:l}],sizeLimit:1E3}):Eo().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<m.length&&k.set(l,m),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete Do[l];Ro(k,g,a,b,c)}}
function Qo(a,b){a=void 0===a?!1:a;b=void 0===b?200:b;var c=Oo(a,b),d=c===yo||c===xo?5E3:ro;U("web_gel_timeout_cap")&&!c.g&&(d=Po(function(){No({writeThenSend:!0},void 0,a,b)},d),c.g=d);
To(c.h);d=S("LOGGING_BATCH_TIMEOUT",W("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&Ao&&(d=qo);d=Po(function(){No({writeThenSend:!0},void 0,a,b)},d);
c.h=d}
function Ro(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(Y()),h=a.size,k={};a=u(a);for(var l=a.next();!l.done;k={lb:k.lb,Da:k.Da,Ya:k.Ya,nb:k.nb,mb:k.mb},l=a.next()){var m=u(l.value);l=m.next().value;m=m.next().value;k.Da=ob({context:Gm(b.config_||Fm())});if(!Pa(m)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}k.Da.events=m;(m=Bo[l])&&Vo(k.Da,l,m);delete Bo[l];k.Ya="visitorOnlyApprovedKey"===l;Wo(k.Da,g,k.Ya);Xo(e);k.nb=function(n){U("update_log_event_config")&&Se.oa(function(){return x(function(r){return w(r,
Yo(n),0)})});
h--;h||c()};
k.lb=0;k.mb=function(n){return function(){n.lb++;if(e.bypassNetworkless&&1===n.lb)try{en(b,"log_event",n.Da,Zo({writeThenSend:!0},n.Ya,n.nb,n.mb,f)),Ao=!1}catch(r){Si(r),d()}h--;h||c()}}(k);
try{en(b,"log_event",k.Da,Zo(e,k.Ya,k.nb,k.mb,f)),Ao=!1}catch(n){Si(n),d()}}}
function So(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(Y()),g=a.size,h=new Map([].concat(ka(a)));h=u(h);for(var k=h.next();!k.done;k=h.next()){var l=u(k.value).next().value,m=a.get(l);k=new Hi;var n=Nm(b.config_||Fm());I(k,pi,1,n);m=m?$o(m):[];m=u(m);for(n=m.next();!n.done;n=m.next())kd(k,3,Di,n.value);(m=Co[l])&&ap(k,l,m);delete Co[l];l="visitorOnlyApprovedKey"===l;bp(k,f,l);Xo(d);m={startTime:Y(),ticks:{},infos:{}};k=xd(k);m.ticks.geljspc=Y();U("log_jspb_serialize_latency")&&Qm("gel_jspb_serialize",
m,{sampleRate:.1});l=Zo(d,l,function(r){U("update_log_event_config")&&Se.oa(function(){return x(function(p){return w(p,Yo(r),0)})});
g--;g||c()},function(){g--;
g||c()},e);
l.headers["Content-Type"]="application/json+protobuf";l.postBodyFormat="JSPB";l.postBody=k;en(b,"log_event","",l);Ao=!1}}
function Xo(a){U("always_send_and_write")&&(a.writeThenSend=!1)}
function Zo(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,kc:a,dangerousLogToVisitorSession:b,Jd:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};cp()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function Wo(a,b,c){cp()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&(c=dp(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function bp(a,b,c){cp()||G(a,2,b);if(!c&&(b=S("EVENT_ID"))){c=dp();var d=new Fi;G(d,1,b);G(d,2,c);I(a,Fi,5,d)}}
function dp(){var a=S("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*so/2));a++;a>so&&(a=1);Mi("BATCH_CLIENT_COUNTER",a);return a}
function Vo(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function ap(a,b,c){if(md(c,1))var d=1;else if(c.getPlaylistId())d=2;else return;I(a,Gi,4,c);a=hd(a,pi,1)||new pi;c=hd(a,oi,3)||new oi;var e=new ni;G(e,2,b);G(e,1,d);kd(c,12,ni,e);I(a,oi,3,c)}
function $o(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Di(a[c]))}catch(d){Si(new Zj("Transport failed to deserialize "+String(a[c])))}return b}
function Go(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);if(d&&1<=d.length)for(b=0;b<d.length;b++)if(a&&a.payload[d[b]]){var e=void 0;c.push((null==(e=a)?void 0:e.payload)[d[b]])}C("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function cp(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function Po(a,b){return U("transport_use_scheduler")?dk(a,b):dj(a,b)}
function To(a){U("transport_use_scheduler")?Se.Na(a):window.clearTimeout(a)}
function Yo(a){var b,c,d,e,f,g,h,k,l,m;return x(function(n){if(1==n.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var r=d?d[ei.name]:void 0;e=r;g=null==(f=d)?void 0:f.hotHashData;r=d?d[di.name]:void 0;h=r;l=null==(k=d)?void 0:k.coldHashData;return(m=lo().resolve(new go))?g?e?w(n,Cm(m,g,e),2):w(n,Cm(m,g),2):n.C(2):n.return()}return l?h?w(n,Dm(m,l,h),0):w(n,Dm(m,l),0):n.C(0)})}
function Oo(a,b){b=void 0===b?200:b;return a?300===b?yo:wo:300===b?xo:vo}
function Io(a){if(U("enable_web_tiered_gel")){a=Bn[a||""];var b,c;if(null==lo().resolve(new go))var d=void 0;else{var e=null!=(d=B("yt.gcf.config.hotConfigGroup"))?d:null;d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c].tier;return 200}}
;var ep=z.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",ep);
function fp(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||Y());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=$n();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};U("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,b={index:gp(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete ep[d.sequenceGroup]);(d.sendIsolatedPayload?Jo:Fo)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
function hp(a){No(void 0,void 0,void 0===a?!1:a)}
function gp(a){ep[a]=a in ep?ep[a]+1:0;return ep[a]}
;var ip=[];function jp(a,b,c){c=void 0===c?{}:c;var d=Zn;S("ytLoggingEventsDefaultDisabled",!1)&&Zn===Zn&&(d=null);U("web_all_payloads_via_jspb")?(c.timestamp||(c.lact=$n(),c.timestamp=Y()),ip.push({mc:a,payload:b,options:c})):fp(a,b,d,c)}
;var kp=z.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",kp);function lp(a,b){var c=void 0;c=void 0===c?{}:c;var d=!1;S("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);d=d?null:Zn;c=void 0===c?{}:c;var e=Math.round(c.timestamp||Y());G(b,1,e<Number.MAX_SAFE_INTEGER?e:0);e=new Ci;if(c.lact)G(e,1,isFinite(c.lact)?c.lact:-1);else if(c.timestamp)G(e,1,-1);else{var f=$n();G(e,1,isFinite(f)?f:-1)}if(U("log_sequence_info_on_gel_web")&&c.sequenceGroup){f=c.sequenceGroup;var g=gp(f),h=new Bi;G(h,2,g);G(h,1,f);I(e,Bi,3,h);c.endOfSequence&&delete kp[c.sequenceGroup]}I(b,
Ci,33,e);(c.sendIsolatedPayload?Mo:Lo)(a,{endpoint:"log_event",payload:b,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}
;var mp=new Set,np=0,op=0,pp=0,qp=[],rp=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function sp(a){try{mp.add(a.message)}catch(b){}np++}
function tp(){for(var a=u(rp),b=a.next();!b.done;b=a.next()){var c=Ob();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function up(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=u(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=Ni())for(b=u(Object.keys(c)),d=b.next();!d.done;d=b.next())d=
d.value,a.postParams[d]=c[d];c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}xj(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function vp(){var a;return x(function(b){return(a=lf())?b.return(a.then(function(c){c=xd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Ec(d,3)})):b.return(Promise.resolve(null))})}
;var wp={};function xp(a){return wp[a]||(wp[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var yp={},zp=[],ig=new K,Ap={};function Bp(){for(var a=u(zp),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Cp(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[xp(b)]:a.getAttribute("data-"+b):null;return c}
function Dp(a){ig.Wa.apply(ig,arguments)}
;function Ep(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Fp(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Gp(a,b,c){Hp||(Hp={},Ip=new Set,cj(window,"message",function(d){a:if(Ip.has(d.origin)){try{var e=JSON.parse(d.data)}catch(g){break a}var f=Hp[e.id];f&&d.origin===f.Gc&&(d=f.od,d.G=!0,d.G&&(D(d.v,d.sendMessage,d),d.v.length=0),d.Qb(e))}}));
a=String(Fp(a,"host"));Hp[c]={od:b,Gc:a};Ip.add(a)}
var Hp=null,Ip=null;var Jp=window;
function Kp(a,b,c){this.s=this.g=this.h=null;this.i=0;this.G=!1;this.v=[];this.l=null;this.aa={};if(!a)throw Error("YouTube player element ID required.");this.id=Ra(this);this.P=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?$b(a.src):"https://www.youtube.com"),this.h=new Ep(b),c||(b=Lp(this,a),this.s=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Ra(this.g)),yp[this.g.id]=this,window.postMessage){this.l=
new K;Mp(this);b=Fp(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Ap)Ap.hasOwnProperty(e)&&Np(this,e)}}
q=Kp.prototype;q.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
q.getIframe=function(){return this.g};
q.Qb=function(a){Op(this,a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);Pp(this,a);return this};
function Np(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.P===b[0]&&Pp(a,c)}}
q.destroy=function(){this.g&&this.g.id&&(yp[this.g.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.s){a=this.g;var b=a.parentNode;b&&b.replaceChild(this.s,a)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);Hp&&(Hp[this.id]=null);this.h=null;a=this.g;for(var c in mb)mb[c][0]==a&&aj(c);this.s=this.g=null};
q.Ub=function(){return{}};
function Qp(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.G?a.sendMessage(b):a.v.push(b)}
function Op(a,b,c){a.l.i||(c={target:a,data:c},a.l.Wa(b,c),Dp(a.P+"."+b,c))}
function Lp(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+Fp(a.h,"title"));(b=Fp(a.h,"width"))&&c.setAttribute("width",b.toString());(b=Fp(a.h,"height"))&&
c.setAttribute("height",b.toString());var g=a.Ub();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&D(["debugjs","debugcss"],function(k){var l=dc(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Fp(a.h,"host")+("/embed/"+Fp(a.h,"videoId"))+"?"+bc(g);Jp.yt_embedsEnableUaChProbe?vp().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Md(l.href).toString();Id(c,Nd(k));c.sandbox.add("allow-presentation","allow-top-navigation");return k}):Jp.yt_embedsEnableIframeSrcWithIntent?(Id(c,Nd(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
q.nc=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function Mp(a){Gp(a.h,a,a.id);a.i=ej(a.nc.bind(a));cj(a.g,"load",function(){window.clearInterval(a.i);a.i=ej(a.nc.bind(a))})}
function Pp(a,b){a.aa[b]||(a.aa[b]=!0,Qp(a,"addEventListener",[b]))}
q.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[$b(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(ic){if(ic.name&&"SyntaxError"===ic.name){if(!(ic.message&&0<ic.message.indexOf("target origin ''"))){var e=void 0,f=ic;e=void 0===e?{}:e;e.name=S("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=S("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(U("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=np)){var m=void 0,n=void 0,r=f,p=e,y=Cd(r),A=y.message||"Unknown Error",
H=y.name||"UnknownError",O=y.stack||r.h||"Not available";if(O.startsWith(H+": "+A)){var T=O.split("\n");T.shift();O=T.join("\n")}var Q=y.lineNumber||"Not available",wa=y.fileName||"Not available",Lc=O,Ka=0;if(r.hasOwnProperty("args")&&r.args&&r.args.length)for(var xa=0;xa<r.args.length&&!(Ka=Pj(r.args[xa],"params."+xa,p,Ka),500<=Ka);xa++);else if(r.hasOwnProperty("params")&&r.params){var ba=r.params;if("object"===typeof r.params)for(n in ba){if(ba[n]){var ia="params."+n,ja=Rj(ba[n]);p[ia]=ja;Ka+=
ia.length+ja.length;if(500<Ka)break}}else p.params=Rj(ba)}if(qp.length)for(var aa=0;aa<qp.length&&!(Ka=Pj(qp[aa],"params.context."+aa,p,Ka),500<=Ka);aa++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var V={message:A,name:H,lineNumber:Q,fileName:wa,stack:Lc,params:p,sampleWeight:1},hl=Number(r.columnNumber);isNaN(hl)||(V.lineNumber=V.lineNumber+":"+hl);if("IGNORED"===r.level)m=0;else a:{for(var il=Lj(),jl=u(il.za),Lg=jl.next();!Lg.done;Lg=jl.next()){var kl=
Lg.value;if(V.message&&V.message.match(kl.Md)){m=kl.weight;break a}}for(var ll=u(il.wa),Mg=ll.next();!Mg.done;Mg=ll.next()){var ml=Mg.value;if(ml.Jc(V)){m=ml.weight;break a}}m=1}V.sampleWeight=m;for(var nl=u(Gj),Ng=nl.next();!Ng.done;Ng=nl.next()){var Og=Ng.value;if(Og.xb[V.name])for(var ol=u(Og.xb[V.name]),Pg=ol.next();!Pg.done;Pg=ol.next()){var pl=Pg.value,le=V.message.match(pl.regexp);if(le){V.params["params.error.original"]=le[0];for(var Qg=pl.groups,ql={},jc=0;jc<Qg.length;jc++)ql[Qg[jc]]=le[jc+
1],V.params["params.error."+Qg[jc]]=le[jc+1];V.message=Og.Ib(ql);break}}}V.params||(V.params={});var rl=Lj();V.params["params.errorServiceSignature"]="msg="+rl.za.length+"&cb="+rl.wa.length;V.params["params.serviceWorker"]="false";z.document&&z.document.querySelectorAll&&(V.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));tb("sample").constructor!==sb&&(V.params["params.fconst"]="true");var $c=V;window.yterr&&"function"===typeof window.yterr&&window.yterr($c);
if(0!==$c.sampleWeight&&!mp.has($c.message))if(h&&U("web_enable_error_204")){var sl=$c;up(void 0===g?"ERROR":g,sl);sp(sl)}else{var Rg=void 0,Sg=void 0,tl=void 0,ul=void 0,Tg=void 0,L=$c,Bb=g;Bb=void 0===Bb?"ERROR":Bb;if("ERROR"===Bb){Mj.Wa("handleError",L);if(U("record_app_crashed_web")&&0===pp&&1===L.sampleWeight)if(pp++,U("errors_via_jspb")){var Wp=new Ai;Tg=G(Wp,1,1);if(!U("report_client_error_with_app_crash_ks")){var Xp=new zi,Yp=new yi,Zp=new xi,$p=new wi;var aq=G($p,1,L.message);var bq=I(Zp,
wi,3,aq);ul=I(Yp,xi,5,bq);tl=I(Xp,yi,9,ul);I(Tg,zi,4,tl)}var vl=U("jspb_sparse_encoded_pivot")?new Di([{}]):new Di;jd(vl,Ai,20,Ei,Tg);lp("appCrashed",vl)}else{var wl={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};U("report_client_error_with_app_crash_ks")||(wl.systemHealth={crashData:{clientError:{logMessage:{message:L.message}}}});jp("appCrashed",wl)}op++}else"WARNING"===Bb&&Mj.Wa("handleWarning",L);if(U("kevlar_gel_error_routing"))a:{var ad=Bb;if(U("errors_via_jspb")){if(tp())Sg=void 0;else{var kc=new ti;
G(kc,1,L.stack);L.fileName&&G(kc,4,L.fileName);var Wa=L.lineNumber&&L.lineNumber.split?L.lineNumber.split(":"):[];if(0!==Wa.length)if(1===Wa.length&&!isNaN(Number(Wa[0]))){var cq=kc,xl=Number(Wa[0]);Oa(xl);G(cq,2,xl)}else if(2===Wa.length&&!isNaN(Number(Wa[0]))&&!isNaN(Number(Wa[1]))){var dq=kc,yl=Number(Wa[0]);Oa(yl);G(dq,2,yl);var eq=kc,zl=Number(Wa[1]);Oa(zl);G(eq,3,zl)}var Cb=new wi;G(Cb,1,L.message);G(Cb,3,L.name);var fq=Cb,Al=L.sampleWeight;Oa(Al);G(fq,6,Al);"ERROR"===ad?G(Cb,2,2):"WARNING"===
ad?G(Cb,2,1):G(Cb,2,0);var Ug=new ui;G(Ug,1,!0);jd(Ug,ti,3,vi,kc);var Db=new si;G(Db,3,window.location.href);for(var Bl=S("FEXP_EXPERIMENTS",[]),Vg=0;Vg<Bl.length;Vg++){var Cl=Db,gq=Bl[Vg];Wc(Cl);ed(Cl,5,2,!1).push(gq)}var Wg=Ni();if(!Oi()&&Wg)for(var Dl=u(Object.keys(Wg)),Eb=Dl.next();!Eb.done;Eb=Dl.next()){var El=Eb.value,Xg=new ri;G(Xg,1,El);G(Xg,2,String(Wg[El]));kd(Db,4,ri,Xg)}var Yg=L.params;if(Yg){var Fl=u(Object.keys(Yg));for(Eb=Fl.next();!Eb.done;Eb=Fl.next()){var Gl=Eb.value,Zg=new ri;G(Zg,
1,"client."+Gl);G(Zg,2,String(Yg[Gl]));kd(Db,4,ri,Zg)}}var Hl=S("SERVER_NAME"),Il=S("SERVER_VERSION");if(Hl&&Il){var $g=new ri;G($g,1,"server.name");G($g,2,Hl);kd(Db,4,ri,$g);var ah=new ri;G(ah,1,"server.version");G(ah,2,Il);kd(Db,4,ri,ah)}var me=new xi;I(me,si,1,Db);I(me,ui,2,Ug);I(me,wi,3,Cb);Sg=me}var Jl=Sg;if(!Jl)break a;var Kl=U("jspb_sparse_encoded_pivot")?new Di([{}]):new Di;jd(Kl,xi,163,Ei,Jl);lp("clientError",Kl)}else{var Aa=void 0;Aa=void 0===Aa?{}:Aa;if(tp())Rg=void 0;else{var bd={stackTrace:L.stack};
L.fileName&&(bd.filename=L.fileName);var Xa=L.lineNumber&&L.lineNumber.split?L.lineNumber.split(":"):[];0!==Xa.length&&(1!==Xa.length||isNaN(Number(Xa[0]))?2!==Xa.length||isNaN(Number(Xa[0]))||isNaN(Number(Xa[1]))||(bd.lineNumber=Number(Xa[0]),bd.columnNumber=Number(Xa[1])):bd.lineNumber=Number(Xa[0]));var bh={level:"ERROR_LEVEL_UNKNOWN",message:L.message,errorClassName:L.name,sampleWeight:L.sampleWeight};"ERROR"===ad?bh.level="ERROR_LEVEL_ERROR":"WARNING"===ad&&(bh.level="ERROR_LEVEL_WARNNING");
var hq={isObfuscated:!0,browserStackInfo:bd};Aa.pageUrl=window.location.href;Aa.kvPairs=[];S("FEXP_EXPERIMENTS")&&(Aa.experimentIds=S("FEXP_EXPERIMENTS"));var ch=Ni();if(!Oi()&&ch)for(var Ll=u(Object.keys(ch)),Fb=Ll.next();!Fb.done;Fb=Ll.next()){var Ml=Fb.value;Aa.kvPairs.push({key:Ml,value:String(ch[Ml])})}var dh=L.params;if(dh){var Nl=u(Object.keys(dh));for(Fb=Nl.next();!Fb.done;Fb=Nl.next()){var Ol=Fb.value;Aa.kvPairs.push({key:"client."+Ol,value:String(dh[Ol])})}}var Pl=S("SERVER_NAME"),Ql=S("SERVER_VERSION");
Pl&&Ql&&(Aa.kvPairs.push({key:"server.name",value:Pl}),Aa.kvPairs.push({key:"server.version",value:Ql}));Rg={errorMetadata:Aa,stackTrace:hq,logMessage:bh}}var Rl=Rg;if(!Rl)break a;jp("clientError",Rl)}if("ERROR"===ad||U("errors_flush_gel_always_killswitch"))b:{if(U("web_fp_via_jspb")){var ne=!0;ne=void 0===ne?!1:ne;var Sl=ip;ip=[];if(Sl)for(var Tl=u(Sl),eh=Tl.next();!eh.done;eh=Tl.next()){var lc=eh.value;ne?fp(lc.mc,lc.payload,Zn,lc.options):jp(lc.mc,lc.payload,lc.options)}hp(!0);if(!U("web_fp_via_jspb_and_json"))break b}hp()}}U("suppress_error_204_logging")||
up(Bb,L);sp(L)}}}}}else throw ic;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Rp(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Sp(a){return 0===a.search("get")||0===a.search("is")}
;function Tp(a,b){Kp.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ja={};this.playerInfo={};this.videoTitle=""}
v(Tp,Kp);q=Tp.prototype;q.Ub=function(){var a=Fp(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Fp(this.h,"embedConfig")){if(Qa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.Qb=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Qa(a))for(var c in a)a.hasOwnProperty(c)&&(this.ja[c]=a[c]);break;case "infoDelivery":Up(this,a);break;case "initialDelivery":Qa(a)&&(window.clearInterval(this.i),this.playerInfo={},this.ja={},Vp(this,a.apiInterface),Up(this,a));break;default:Op(this,b,a)}};
function Up(a,b){if(Qa(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+Fp(a.h,"title"))))}}
function Vp(a,b){D(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Rp(c)?this[c]=function(){this.playerInfo={};
this.ja={};Qp(this,c,arguments);return this}:Sp(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Qp(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=Fp(this.h,"host")+("/embed/"+Fp(this.h,"videoId")),b=Number(Fp(this.h,"width")),c=Number(Fp(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Wb(a);d=Wb(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
q.getOptions=function(a){return this.ja.namespaces?a?this.ja[a]?this.ja[a].options||[]:[]:this.ja.namespaces||[]:[]};
q.getOption=function(a,b){if(this.ja.namespaces&&a&&b&&this.ja[a])return this.ja[a][b]};
function iq(a){if("iframe"!==a.tagName.toLowerCase()){var b=Cp(a,"videoid");b&&(b={videoId:b,width:Cp(a,"width"),height:Cp(a,"height")},new Tp(a,b))}}
;C("YT.PlayerState.UNSTARTED",-1);C("YT.PlayerState.ENDED",0);C("YT.PlayerState.PLAYING",1);C("YT.PlayerState.PAUSED",2);C("YT.PlayerState.BUFFERING",3);C("YT.PlayerState.CUED",5);C("YT.get",function(a){return yp[a]});
C("YT.scan",Bp);C("YT.subscribe",function(a,b,c){ig.subscribe(a,b,c);Ap[a]=!0;for(var d in yp)yp.hasOwnProperty(d)&&Np(yp[d],a)});
C("YT.unsubscribe",function(a,b,c){hg(a,b,c)});
C("YT.Player",Tp);Kp.prototype.destroy=Kp.prototype.destroy;Kp.prototype.setSize=Kp.prototype.setSize;Kp.prototype.getIframe=Kp.prototype.getIframe;Kp.prototype.addEventListener=Kp.prototype.addEventListener;Tp.prototype.getVideoEmbedCode=Tp.prototype.getVideoEmbedCode;Tp.prototype.getOptions=Tp.prototype.getOptions;Tp.prototype.getOption=Tp.prototype.getOption;
zp.push(function(a){var b=a;b||(b=document);a=ib(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=eb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=ib(b);D(hb(a,b),iq)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Bp();var jq=z.onYTReady;jq&&jq();var kq=z.onYouTubeIframeAPIReady;kq&&kq();var lq=z.onYouTubePlayerAPIReady;lq&&lq();}).call(this);
