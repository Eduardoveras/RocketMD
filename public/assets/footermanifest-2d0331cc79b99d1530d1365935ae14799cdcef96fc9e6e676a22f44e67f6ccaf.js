//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
;
/* jQuery Storage API Plugin 1.7.4 https://github.com/julien-maurel/jQuery-Storage-API */

!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){function t(t){var r,i,n,o=arguments.length,s=window[t],a=arguments,u=a[1];if(2>o)throw Error("Minimum 2 arguments must be given");if(e.isArray(u)){i={};for(var f in u){r=u[f];try{i[r]=JSON.parse(s.getItem(r))}catch(c){i[r]=s.getItem(r)}}return i}if(2!=o){try{i=JSON.parse(s.getItem(u))}catch(c){throw new ReferenceError(u+" is not defined in this storage")}for(var f=2;o-1>f;f++)if(i=i[a[f]],void 0===i)throw new ReferenceError([].slice.call(a,1,f+1).join(".")+" is not defined in this storage");if(e.isArray(a[f])){n=i,i={};for(var m in a[f])i[a[f][m]]=n[a[f][m]];return i}return i[a[f]]}try{return JSON.parse(s.getItem(u))}catch(c){return s.getItem(u)}}function r(t){var r,i,n=arguments.length,o=window[t],s=arguments,a=s[1],u=s[2],f={};if(2>n||!e.isPlainObject(a)&&3>n)throw Error("Minimum 3 arguments must be given or second parameter must be an object");if(e.isPlainObject(a)){for(var c in a)r=a[c],e.isPlainObject(r)?o.setItem(c,JSON.stringify(r)):o.setItem(c,r);return a}if(3==n)return"object"==typeof u?o.setItem(a,JSON.stringify(u)):o.setItem(a,u),u;try{i=o.getItem(a),null!=i&&(f=JSON.parse(i))}catch(m){}i=f;for(var c=2;n-2>c;c++)r=s[c],i[r]&&e.isPlainObject(i[r])||(i[r]={}),i=i[r];return i[s[c]]=s[c+1],o.setItem(a,JSON.stringify(f)),f}function i(t){var r,i,n=arguments.length,o=window[t],s=arguments,a=s[1];if(2>n)throw Error("Minimum 2 arguments must be given");if(e.isArray(a)){for(var u in a)o.removeItem(a[u]);return!0}if(2==n)return o.removeItem(a),!0;try{r=i=JSON.parse(o.getItem(a))}catch(f){throw new ReferenceError(a+" is not defined in this storage")}for(var u=2;n-1>u;u++)if(i=i[s[u]],void 0===i)throw new ReferenceError([].slice.call(s,1,u).join(".")+" is not defined in this storage");if(e.isArray(s[u]))for(var c in s[u])delete i[s[u][c]];else delete i[s[u]];return o.setItem(a,JSON.stringify(r)),!0}function n(t,r){var n=a(t);for(var o in n)i(t,n[o]);if(r)for(var o in e.namespaceStorages)u(o)}function o(r){var i=arguments.length,n=arguments,s=(window[r],n[1]);if(1==i)return 0==a(r).length;if(e.isArray(s)){for(var u=0;u<s.length;u++)if(!o(r,s[u]))return!1;return!0}try{var f=t.apply(this,arguments);e.isArray(n[i-1])||(f={totest:f});for(var u in f)if(!(e.isPlainObject(f[u])&&e.isEmptyObject(f[u])||e.isArray(f[u])&&!f[u].length)&&f[u])return!1;return!0}catch(c){return!0}}function s(r){var i=arguments.length,n=arguments,o=(window[r],n[1]);if(2>i)throw Error("Minimum 2 arguments must be given");if(e.isArray(o)){for(var a=0;a<o.length;a++)if(!s(r,o[a]))return!1;return!0}try{var u=t.apply(this,arguments);e.isArray(n[i-1])||(u={totest:u});for(var a in u)if(void 0===u[a]||null===u[a])return!1;return!0}catch(f){return!1}}function a(r){var i=arguments.length,n=window[r],o=arguments,s=(o[1],[]),a={};if(a=i>1?t.apply(this,o):n,a._cookie)for(var u in e.cookie())""!=u&&s.push(u.replace(a._prefix,""));else for(var f in a)s.push(f);return s}function u(t){if(!t||"string"!=typeof t)throw Error("First parameter must be a string");g?(window.localStorage.getItem(t)||window.localStorage.setItem(t,"{}"),window.sessionStorage.getItem(t)||window.sessionStorage.setItem(t,"{}")):(window.localCookieStorage.getItem(t)||window.localCookieStorage.setItem(t,"{}"),window.sessionCookieStorage.getItem(t)||window.sessionCookieStorage.setItem(t,"{}"));var r={localStorage:e.extend({},e.localStorage,{_ns:t}),sessionStorage:e.extend({},e.sessionStorage,{_ns:t})};return e.cookie&&(window.cookieStorage.getItem(t)||window.cookieStorage.setItem(t,"{}"),r.cookieStorage=e.extend({},e.cookieStorage,{_ns:t})),e.namespaceStorages[t]=r,r}function f(e){var t="jsapi";try{return window[e]?(window[e].setItem(t,t),window[e].removeItem(t),!0):!1}catch(r){return!1}}var c="ls_",m="ss_",g=f("localStorage"),l={_type:"",_ns:"",_callMethod:function(e,t){var r=[this._type],t=Array.prototype.slice.call(t),i=t[0];return this._ns&&r.push(this._ns),"string"==typeof i&&-1!==i.indexOf(".")&&(t.shift(),[].unshift.apply(t,i.split("."))),[].push.apply(r,t),e.apply(this,r)},get:function(){return this._callMethod(t,arguments)},set:function(){var t=arguments.length,i=arguments,n=i[0];if(1>t||!e.isPlainObject(n)&&2>t)throw Error("Minimum 2 arguments must be given or first parameter must be an object");if(e.isPlainObject(n)&&this._ns){for(var o in n)r(this._type,this._ns,o,n[o]);return n}var s=this._callMethod(r,i);return this._ns?s[n.split(".")[0]]:s},remove:function(){if(arguments.length<1)throw Error("Minimum 1 argument must be given");return this._callMethod(i,arguments)},removeAll:function(e){return this._ns?(r(this._type,this._ns,{}),!0):n(this._type,e)},isEmpty:function(){return this._callMethod(o,arguments)},isSet:function(){if(arguments.length<1)throw Error("Minimum 1 argument must be given");return this._callMethod(s,arguments)},keys:function(){return this._callMethod(a,arguments)}};if(e.cookie){window.name||(window.name=Math.floor(1e8*Math.random()));var h={_cookie:!0,_prefix:"",_expires:null,_path:null,_domain:null,setItem:function(t,r){e.cookie(this._prefix+t,r,{expires:this._expires,path:this._path,domain:this._domain})},getItem:function(t){return e.cookie(this._prefix+t)},removeItem:function(t){return e.removeCookie(this._prefix+t)},clear:function(){for(var t in e.cookie())""!=t&&(!this._prefix&&-1===t.indexOf(c)&&-1===t.indexOf(m)||this._prefix&&0===t.indexOf(this._prefix))&&e.removeCookie(t)},setExpires:function(e){return this._expires=e,this},setPath:function(e){return this._path=e,this},setDomain:function(e){return this._domain=e,this},setConf:function(e){return e.path&&(this._path=e.path),e.domain&&(this._domain=e.domain),e.expires&&(this._expires=e.expires),this},setDefaultConf:function(){this._path=this._domain=this._expires=null}};g||(window.localCookieStorage=e.extend({},h,{_prefix:c,_expires:3650}),window.sessionCookieStorage=e.extend({},h,{_prefix:m+window.name+"_"})),window.cookieStorage=e.extend({},h),e.cookieStorage=e.extend({},l,{_type:"cookieStorage",setExpires:function(e){return window.cookieStorage.setExpires(e),this},setPath:function(e){return window.cookieStorage.setPath(e),this},setDomain:function(e){return window.cookieStorage.setDomain(e),this},setConf:function(e){return window.cookieStorage.setConf(e),this},setDefaultConf:function(){return window.cookieStorage.setDefaultConf(),this}})}e.initNamespaceStorage=function(e){return u(e)},g?(e.localStorage=e.extend({},l,{_type:"localStorage"}),e.sessionStorage=e.extend({},l,{_type:"sessionStorage"})):(e.localStorage=e.extend({},l,{_type:"localCookieStorage"}),e.sessionStorage=e.extend({},l,{_type:"sessionCookieStorage"})),e.namespaceStorages={},e.removeAllStorages=function(t){e.localStorage.removeAll(t),e.sessionStorage.removeAll(t),e.cookieStorage&&e.cookieStorage.removeAll(t),t||(e.namespaceStorages={})}});
/*! pace 1.0.2 */

(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X=[].slice,Y={}.hasOwnProperty,Z=function(a,b){function c(){this.constructor=a}for(var d in b)Y.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},$=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(u={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},C=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?a:+new Date},E=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==E&&(E=function(a){return setTimeout(a,50)},t=function(a){return clearTimeout(a)}),G=function(a){var b,c;return b=C(),(c=function(){var d;return d=C()-b,d>=33?(b=C(),a(d,function(){return E(c)})):setTimeout(c,33-d)})()},F=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?X.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},v=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?X.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)Y.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?v(b[a],e):b[a]=e);return b},q=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},x=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)e.push(this.bindings[a][c].handler===b?this.bindings[a].splice(c,1):c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),i.push(f?this.bindings[c].splice(e,1):e++);return i}},a}(),j=window.Pace||{},window.Pace=j,v(j,g.prototype),D=j.options=v({},u,window.paceOptions,x()),U=["ajax","document","eventLag","elements"],Q=0,S=U.length;S>Q;Q++)K=U[Q],D[K]===!0&&(D[K]=u[K]);i=function(a){function b(){return V=b.__super__.constructor.apply(this,arguments)}return Z(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(D.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b,c,d,e,f,g;if(null==document.querySelector(D.target))return!1;for(a=this.getElement(),d="translate3d("+this.progress+"%, 0, 0)",g=["webkitTransform","msTransform","transform"],e=0,f=g.length;f>e;e++)b=g[e],a.children[0].style[b]=d;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?c="99":(c=this.progress<10?"0":"",c+=0|this.progress),a.children[0].setAttribute("data-progress",""+c)),this.lastRenderedProgress=this.progress},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),P=window.XMLHttpRequest,O=window.XDomainRequest,N=window.WebSocket,w=function(a,b){var c,d,e;e=[];for(d in b.prototype)try{e.push(null==a[d]&&"function"!=typeof b[d]?"function"==typeof Object.defineProperty?Object.defineProperty(a,d,{get:function(){return b.prototype[d]},configurable:!0,enumerable:!0}):a[d]=b.prototype[d]:void 0)}catch(f){c=f}return e},A=[],j.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("ignore"),c=b.apply(null,a),A.shift(),c},j.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("track"),c=b.apply(null,a),A.shift(),c},J=function(a){var b;if(null==a&&(a="GET"),"track"===A[0])return"force";if(!A.length&&D.ajax){if("socket"===a&&D.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),$.call(D.ajax.trackMethods,b)>=0)return!0}return!1},k=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){return J(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new P(b),a(c),c};try{w(window.XMLHttpRequest,P)}catch(d){}if(null!=O){window.XDomainRequest=function(){var b;return b=new O,a(b),b};try{w(window.XDomainRequest,O)}catch(d){}}if(null!=N&&D.ajax.trackWebSockets){window.WebSocket=function(a,b){var d;return d=null!=b?new N(a,b):new N(a),J("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d};try{w(window.WebSocket,N)}catch(d){}}}return Z(b,a),b}(h),R=null,y=function(){return null==R&&(R=new k),R},I=function(a){var b,c,d,e;for(e=D.ajax.ignoreURLs,c=0,d=e.length;d>c;c++)if(b=e[c],"string"==typeof b){if(-1!==a.indexOf(b))return!0}else if(b.test(a))return!0;return!1},y().on("request",function(b){var c,d,e,f,g;return f=b.type,e=b.request,g=b.url,I(g)?void 0:j.running||D.restartOnRequestAfter===!1&&"force"!==J(f)?void 0:(d=arguments,c=D.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,k;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(j.restart(),i=j.sources,k=[],c=0,g=i.length;g>c;c++){if(K=i[c],K instanceof a){K.watch.apply(K,d);break}k.push(void 0)}return k}},c))}),a=function(){function a(){var a=this;this.elements=[],y().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;return d=a.type,b=a.request,e=a.url,I(e)?void 0:(c="socket"===d?new n(b):new o(b),this.elements.push(c))},a}(),o=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return h.progress=a.lengthComputable?100*a.loaded/a.total:h.progress+(100-h.progress)/2},!1),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100},!1);else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),n=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100},!1)}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},D.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=C(),b=setInterval(function(){var g;return g=C()-c-50,c=C(),e.push(g),e.length>D.eventLag.sampleCount&&e.shift(),a=q(e),++d>=D.eventLag.minSamples&&a<D.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),m=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=D.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=F(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=F(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/D.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,D.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+D.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),L=null,H=null,r=null,M=null,p=null,s=null,j.running=!1,z=function(){return D.restartOnPushState?j.restart():void 0},null!=window.history.pushState&&(T=window.history.pushState,window.history.pushState=function(){return z(),T.apply(window.history,arguments)}),null!=window.history.replaceState&&(W=window.history.replaceState,window.history.replaceState=function(){return z(),W.apply(window.history,arguments)}),l={ajax:a,elements:d,document:c,eventLag:f},(B=function(){var a,c,d,e,f,g,h,i;for(j.sources=L=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],D[a]!==!1&&L.push(new l[a](D[a]));for(i=null!=(h=D.extraSources)?h:[],d=0,f=i.length;f>d;d++)K=i[d],L.push(new K(D));return j.bar=r=new b,H=[],M=new m})(),j.stop=function(){return j.trigger("stop"),j.running=!1,r.destroy(),s=!0,null!=p&&("function"==typeof t&&t(p),p=null),B()},j.restart=function(){return j.trigger("restart"),j.stop(),j.start()},j.go=function(){var a;return j.running=!0,r.render(),a=C(),s=!1,p=G(function(b,c){var d,e,f,g,h,i,k,l,n,o,p,q,t,u,v,w;for(l=100-r.progress,e=p=0,f=!0,i=q=0,u=L.length;u>q;i=++q)for(K=L[i],o=null!=H[i]?H[i]:H[i]=[],h=null!=(w=K.elements)?w:[K],k=t=0,v=h.length;v>t;k=++t)g=h[k],n=null!=o[k]?o[k]:o[k]=new m(g),f&=n.done,n.done||(e++,p+=n.tick(b));return d=p/e,r.update(M.tick(b,d)),r.done()||f||s?(r.update(100),j.trigger("done"),setTimeout(function(){return r.finish(),j.running=!1,j.trigger("hide")},Math.max(D.ghostTime,Math.max(D.minTime-(C()-a),0)))):c()})},j.start=function(a){v(D,a),j.running=!0;try{r.render()}catch(b){i=b}return document.querySelector(".pace")?(j.trigger("start"),j.go()):setTimeout(j.start,50)},"function"==typeof define&&define.amd?define(["pace"],function(){return j}):"object"==typeof exports?module.exports=j:D.startOnPageLoad&&j.start()}).call(this);
// lazyload config
var MODULE_CONFIG = {
    easyPieChart:   [ '../libs/jquery/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js' ],
    sparkline:      [ '../libs/jquery/jquery.sparkline/dist/jquery.sparkline.retina.js' ],
    plot:           [ '../libs/jquery/flot/jquery.flot.js',
                      '../libs/jquery/flot/jquery.flot.resize.js',
                      '../libs/jquery/flot/jquery.flot.pie.js',
                      '../libs/jquery/flot.tooltip/js/jquery.flot.tooltip.min.js',
                      '../libs/jquery/flot-spline/js/jquery.flot.spline.min.js',
                      '../libs/jquery/flot.orderbars/js/jquery.flot.orderBars.js'],
    vectorMap:      [ '../libs/jquery/bower-jvectormap/jquery-jvectormap-1.2.2.min.js',
                      '../libs/jquery/bower-jvectormap/jquery-jvectormap.css', 
                      '../libs/jquery/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                      '../libs/jquery/bower-jvectormap/jquery-jvectormap-us-aea-en.js' ],
    dataTable:      [
                      '../libs/jquery/datatables/media/js/jquery.dataTables.min.js',
                      '../libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                      '../libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
    footable:       [
                      '../libs/jquery/footable/dist/footable.all.min.js',
                      '../libs/jquery/footable/css/footable.core.css'
                    ],
    screenfull:     [
                      '../libs/jquery/screenfull/dist/screenfull.min.js'
                    ],
    sortable:       [
                      '../libs/jquery/html.sortable/dist/html.sortable.min.js'
                    ],
    nestable:       [
                      '../libs/jquery/nestable/jquery.nestable.css',
                      '../libs/jquery/nestable/jquery.nestable.js'
                    ],
    summernote:     [
                      '../libs/jquery/summernote/dist/summernote.css',
                      '../libs/jquery/summernote/dist/summernote.js'
                    ],
    parsley:        [
                      '../libs/jquery/parsleyjs/dist/parsley.css',
                      '../libs/jquery/parsleyjs/dist/parsley.min.js'
                    ],
    select2:        [
                      '../libs/jquery/select2/dist/css/select2.min.css',
                      '../libs/jquery/select2-bootstrap-theme/dist/select2-bootstrap.min.css',
                      '../libs/jquery/select2-bootstrap-theme/dist/select2-bootstrap.4.css',
                      '../libs/jquery/select2/dist/js/select2.min.js'
                    ],
    datetimepicker: [
                      '../libs/jquery/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css',
                      '../libs/jquery/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.dark.css',
                      '../libs/js/moment/moment.js',
                      '../libs/jquery/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                    ],
    chart:          [
                      '../libs/js/echarts/build/dist/echarts-all.js',
                      '../libs/js/echarts/build/dist/theme.js',
                      '../libs/js/echarts/build/dist/jquery.echarts.js'
                    ],
    bootstrapWizard:[
                      '../libs/jquery/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js'
                    ],
    fullCalendar:   [
                      '../libs/jquery/moment/moment.js',
                      '../libs/jquery/fullcalendar/dist/fullcalendar.min.js',
                      '../libs/jquery/fullcalendar/dist/fullcalendar.css',
                      '../libs/jquery/fullcalendar/dist/fullcalendar.theme.css',
                      'scripts/plugins/calendar.js'
                    ],
    dropzone:       [
                      '../libs/js/dropzone/dist/min/dropzone.min.js',
                      '../libs/js/dropzone/dist/min/dropzone.min.css'
                    ]
  };
/**
 * google-material-color v1.2.6
 * https://github.com/danlevan/google-material-color
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.palette = factory();
  }
})(this, function() {
  // avoid using lodash in dependencies
  function keys(obj) {
    var keys, key;
    
    keys = [];
    
    for (var key in obj) if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
    
    return keys;
  }
  
  // avoid using lodash in dependencies
  function random(min, max) {
    return Math.floor(Math.random() * ( max - min + 1 )) + min;
  }


  return {
    palette: { 
      'red': { 
        '50': '#FFEBEE', 
        '100': '#FFCDD2', 
        '200': '#EF9A9A', 
        '300': '#E57373', 
        '400': '#EF5350', 
        '500': '#F44336', 
        '600': '#E53935', 
        '700': '#D32F2F', 
        '800': '#C62828', 
        '900': '#B71C1C', 
        'A100': '#FF8A80', 
        'A200': '#FF5252', 
        'A400': '#FF1744', 
        'A700': '#D50000', 
      },

      'pink': { 
        '50': '#FCE4EC', 
        '100': '#F8BBD0', 
        '200': '#F48FB1', 
        '300': '#F06292', 
        '400': '#EC407A', 
        '500': '#E91E63', 
        '600': '#D81B60', 
        '700': '#C2185B', 
        '800': '#AD1457', 
        '900': '#880E4F', 
        'A100': '#FF80AB', 
        'A200': '#FF4081', 
        'A400': '#F50057', 
        'A700': '#C51162', 
      },

      'purple': { 
        '50': '#F3E5F5', 
        '100': '#E1BEE7', 
        '200': '#CE93D8', 
        '300': '#BA68C8', 
        '400': '#AB47BC', 
        '500': '#9C27B0', 
        '600': '#8E24AA', 
        '700': '#7B1FA2', 
        '800': '#6A1B9A', 
        '900': '#4A148C', 
        'A100': '#EA80FC', 
        'A200': '#E040FB', 
        'A400': '#D500F9', 
        'A700': '#AA00FF', 
      },

      'deep-purple': { 
        '50': '#EDE7F6', 
        '100': '#D1C4E9', 
        '200': '#B39DDB', 
        '300': '#9575CD', 
        '400': '#7E57C2', 
        '500': '#673AB7', 
        '600': '#5E35B1', 
        '700': '#512DA8', 
        '800': '#4527A0', 
        '900': '#311B92', 
        'A100': '#B388FF', 
        'A200': '#7C4DFF', 
        'A400': '#651FFF', 
        'A700': '#6200EA', 
      },

      'indigo': { 
        '50': '#E8EAF6', 
        '100': '#C5CAE9', 
        '200': '#9FA8DA', 
        '300': '#7986CB', 
        '400': '#5C6BC0', 
        '500': '#3F51B5', 
        '600': '#3949AB', 
        '700': '#303F9F', 
        '800': '#283593', 
        '900': '#1A237E', 
        'A100': '#8C9EFF', 
        'A200': '#536DFE', 
        'A400': '#3D5AFE', 
        'A700': '#304FFE', 
      },

      'blue': {
        '50': '#E3F2FD', 
        '100': '#BBDEFB', 
        '200': '#90CAF9', 
        '300': '#64B5F6', 
        '400': '#42A5F5', 
        '500': '#2196F3', 
        '600': '#1E88E5', 
        '700': '#1976D2', 
        '800': '#1565C0', 
        '900': '#0D47A1', 
        'A100': '#82B1FF', 
        'A200': '#448AFF', 
        'A400': '#2979FF', 
        'A700': '#2962FF', 
      },

      'light-blue': { 
        '50': '#E1F5FE', 
        '100': '#B3E5FC', 
        '200': '#81D4FA', 
        '300': '#4FC3F7', 
        '400': '#29B6F6', 
        '500': '#03A9F4', 
        '600': '#039BE5', 
        '700': '#0288D1', 
        '800': '#0277BD', 
        '900': '#01579B', 
        'A100': '#80D8FF', 
        'A200': '#40C4FF', 
        'A400': '#00B0FF', 
        'A700': '#0091EA', 
      },

      'cyan': { 
        '50': '#E0F7FA', 
        '100': '#B2EBF2', 
        '200': '#80DEEA', 
        '300': '#4DD0E1', 
        '400': '#26C6DA', 
        '500': '#00BCD4', 
        '600': '#00ACC1', 
        '700': '#0097A7', 
        '800': '#00838F', 
        '900': '#006064', 
        'A100': '#84FFFF', 
        'A200': '#18FFFF', 
        'A400': '#00E5FF', 
        'A700': '#00B8D4', 
      },

      'teal': { 
        '50': '#E0F2F1', 
        '100': '#B2DFDB', 
        '200': '#80CBC4', 
        '300': '#4DB6AC', 
        '400': '#26A69A', 
        '500': '#009688', 
        '600': '#00897B', 
        '700': '#00796B', 
        '800': '#00695C', 
        '900': '#004D40', 
        'A100': '#A7FFEB', 
        'A200': '#64FFDA', 
        'A400': '#1DE9B6', 
        'A700': '#00BFA5', 
      },

      'green': { 
        '50': '#E8F5E9', 
        '100': '#C8E6C9', 
        '200': '#A5D6A7', 
        '300': '#81C784', 
        '400': '#66BB6A', 
        '500': '#4CAF50', 
        '600': '#43A047', 
        '700': '#388E3C', 
        '800': '#2E7D32', 
        '900': '#1B5E20', 
        'A100': '#B9F6CA', 
        'A200': '#69F0AE', 
        'A400': '#00E676', 
        'A700': '#00C853', 
      },

      'light-green': { 
        '50': '#F1F8E9', 
        '100': '#DCEDC8', 
        '200': '#C5E1A5', 
        '300': '#AED581', 
        '400': '#9CCC65', 
        '500': '#8BC34A', 
        '600': '#7CB342', 
        '700': '#689F38', 
        '800': '#558B2F', 
        '900': '#33691E', 
        'A100': '#CCFF90', 
        'A200': '#B2FF59', 
        'A400': '#76FF03', 
        'A700': '#64DD17', 
      },

      'lime': { 
        '50': '#F9FBE7', 
        '100': '#F0F4C3', 
        '200': '#E6EE9C', 
        '300': '#DCE775', 
        '400': '#D4E157', 
        '500': '#CDDC39', 
        '600': '#C0CA33', 
        '700': '#AFB42B', 
        '800': '#9E9D24', 
        '900': '#827717', 
        'A100': '#F4FF81', 
        'A200': '#EEFF41', 
        'A400': '#C6FF00', 
        'A700': '#AEEA00', 
      },

      'yellow': { 
        '50': '#FFFDE7', 
        '100': '#FFF9C4', 
        '200': '#FFF59D', 
        '300': '#FFF176', 
        '400': '#FFEE58', 
        '500': '#FFEB3B', 
        '600': '#FDD835', 
        '700': '#FBC02D', 
        '800': '#F9A825', 
        '900': '#F57F17', 
        'A100': '#FFFF8D', 
        'A200': '#FFFF00', 
        'A400': '#FFEA00', 
        'A700': '#FFD600', 
      },

      'amber': { 
        '50': '#FFF8E1', 
        '100': '#FFECB3', 
        '200': '#FFE082', 
        '300': '#FFD54F', 
        '400': '#FFCA28', 
        '500': '#FFC107', 
        '600': '#FFB300', 
        '700': '#FFA000', 
        '800': '#FF8F00', 
        '900': '#FF6F00', 
        'A100': '#FFE57F', 
        'A200': '#FFD740', 
        'A400': '#FFC400', 
        'A700': '#FFAB00', 
      },

      'orange': { 
        '50': '#FFF3E0', 
        '100': '#FFE0B2', 
        '200': '#FFCC80', 
        '300': '#FFB74D', 
        '400': '#FFA726', 
        '500': '#FF9800', 
        '600': '#FB8C00', 
        '700': '#F57C00', 
        '800': '#EF6C00', 
        '900': '#E65100', 
        'A100': '#FFD180', 
        'A200': '#FFAB40', 
        'A400': '#FF9100', 
        'A700': '#FF6D00', 
      },

      'deep-orange': { 
        '50': '#FBE9E7', 
        '100': '#FFCCBC', 
        '200': '#FFAB91', 
        '300': '#FF8A65', 
        '400': '#FF7043', 
        '500': '#FF5722', 
        '600': '#F4511E', 
        '700': '#E64A19', 
        '800': '#D84315', 
        '900': '#BF360C', 
        'A100': '#FF9E80', 
        'A200': '#FF6E40', 
        'A400': '#FF3D00', 
        'A700': '#DD2C00', 
      },

      'brown': { 
        '50': '#EFEBE9', 
        '100': '#D7CCC8', 
        '200': '#BCAAA4', 
        '300': '#A1887F', 
        '400': '#8D6E63', 
        '500': '#795548', 
        '600': '#6D4C41', 
        '700': '#5D4037', 
        '800': '#4E342E', 
        '900': '#3E2723', 
      },

      'grey': { 
        '50': '#FAFAFA', 
        '100': '#F5F5F5', 
        '200': '#EEEEEE', 
        '300': '#E0E0E0', 
        '400': '#BDBDBD', 
        '500': '#9E9E9E', 
        '600': '#757575', 
        '700': '#616161', 
        '800': '#424242', 
        '900': '#212121', 
      },

      'blue-grey': { 
        '50': '#ECEFF1', 
        '100': '#CFD8DC', 
        '200': '#B0BEC5', 
        '300': '#90A4AE', 
        '400': '#78909C', 
        '500': '#607D8B', 
        '600': '#546E7A', 
        '700': '#455A64', 
        '800': '#37474F', 
        '900': '#263238', 
      },

      'black': { 
        '500': '#000000', 
        'Text': 'rgba(0,0,0,0.87)', 
        'Secondary Text': 'rgba(0,0,0,0.54)', 
        'Icons': 'rgba(0,0,0,0.54)', 
        'Disabled': 'rgba(0,0,0,0.26)', 
        'Hint Text': 'rgba(0,0,0,0.26)', 
        'Dividers': 'rgba(0,0,0,0.12)', 
      },

      'white': { 
        '500': '#ffffff', 
        'Text': '#ffffff', 
        'Secondary Text': 'rgba(255,255,255,0.7)', 
        'Icons': '#ffffff', 
        'Disabled': 'rgba(255,255,255,0.3)', 
        'Hint Text': 'rgba(255,255,255,0.3)', 
        'Dividers': 'rgba(255,255,255,0.12)', 
      },

    },

    get: function (color, shade) {
      return this.palette[color][shade || '500'];
    },

    find: function(color){
      var colors = color.split('-'),
          color, 
          shade = 500;

      if(colors.length == 3){
        color = colors[0]+'-'+colors[1];
        shade = colors[2];
      }
      if(colors.length == 2){
        if(colors[1].indexOf('0') > 0){
          color = colors[0];
          shade = colors[1];
        }else{
          color = colors[0]+'-'+colors[1];
        }
      }
      return this.get( color, shade );
    },
    
    random: function(shade) {
      var colors, color, shades;
    
      colors = keys(this.palette);
      color = colors[random(0, colors.length - 1)];
      
      if (shade == null) {
        shades = keys(color);
        shade = shades[random(0, shades.length - 1)];
      }
      
      return this.get(color, shade);
    }
  };
});



var uiLoad = uiLoad || {};

(function($, $document, uiLoad) {
	"use strict";

	var loaded = [],
	promise = false,
	deferred = $.Deferred();

	/**
	 * Chain loads the given sources
	 * @param srcs array, script or css
	 * @returns {*} Promise that will be resolved once the sources has been loaded.
	 */
	uiLoad.load = function (srcs) {
		srcs = $.isArray(srcs) ? srcs : srcs.split(/\s+/);
		if(!promise){
			promise = deferred.promise();
		}

		$.each(srcs, function(index, src) {
			promise = promise.then( function(){
				return src.indexOf('.css') >=0 ? loadCSS(src) : loadScript(src);
			} );
		});
		deferred.resolve();
		return promise;
	};

	/**
	 * Dynamically loads the given script
	 * @param src The url of the script to load dynamically
	 * @returns {*} Promise that will be resolved once the script has been loaded.
	 */
	var loadScript = function (src) {
		if(loaded[src]) return loaded[src].promise();

		var deferred = $.Deferred();
		var script = $document.createElement('script');
		script.src = src;
		script.onload = function (e) {
			deferred.resolve(e);
		};
		script.onerror = function (e) {
			deferred.reject(e);
		};
		$document.body.appendChild(script);
		loaded[src] = deferred;

		return deferred.promise();
	};

	/**
	 * Dynamically loads the given CSS file
	 * @param href The url of the CSS to load dynamically
	 * @returns {*} Promise that will be resolved once the CSS file has been loaded.
	 */
	var loadCSS = function (href) {
		if(loaded[href]) return loaded[href].promise();

		var deferred = $.Deferred();
		var style = $document.createElement('link');
		style.rel = 'stylesheet';
		style.type = 'text/css';
		style.href = href;
		style.onload = function (e) {
			deferred.resolve(e);
		};
		style.onerror = function (e) {
			deferred.reject(e);
		};
		$document.head.appendChild(style);
		loaded[href] = deferred;

		return deferred.promise();
	}

})(jQuery, document, uiLoad);
(function ($, MODULE_CONFIG) {
  	"use strict";
  
	$.fn.uiJp = function(){

		var lists  = this;

        lists.each(function()
        {
        	var self = $(this);
			var options = eval('[' + self.attr('ui-options') + ']');
			if ($.isPlainObject(options[0])) {
				options[0] = $.extend({}, options[0]);
			}

			uiLoad.load(MODULE_CONFIG[self.attr('ui-jp')]).then( function(){
				self[self.attr('ui-jp')].apply(self, options);
			});
        });

        return lists;
	}

})(jQuery, MODULE_CONFIG);
(function ($) {
  	"use strict";
  	
	var promise = false,
		deferred = $.Deferred();
	_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	$.fn.uiInclude = function(){
		if(!promise){
			promise = deferred.promise();
		}
		//console.log('start: includes');
		
		compile(this);

		function compile(node){
			node.find('[ui-include]').each(function(){
				var that = $(this),
					url  = that.attr('ui-include');
				promise = promise.then( 
					function(){
						//console.log('start: compile '+ url);
						var request = $.ajax({
							url: eval(url),
							method: "GET",
							dataType: "text"
						});
						//console.log('start: loading '+ url);
						var chained = request.then(
							function(text){
								//console.log('done: loading '+ url);
								var compiled = _.template(text.toString());
								var html = compiled({app: app});
								var ui = that.replaceWithPush( html );
				    			ui.find('[ui-jp]').uiJp();
								ui.find('[ui-include]').length && compile(ui);
							}
						);
						return chained;
					}
				);
			});
		}

		deferred.resolve();
		return promise;
	}

	$.fn.replaceWithPush = function(o) {
	    var $o = $(o);
	    this.replaceWith($o);
	    return $o;
	}

})(jQuery);
(function ($) {
	"use strict";

    // Checks for ie
    if ( !!navigator.userAgent.match(/MSIE/i) || !!navigator.userAgent.match(/Trident.*rv:11\./) ){
    	$('body').addClass('ie');
    }

    // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
    var ua = window['navigator']['userAgent'] || window['navigator']['vendor'] || window['opera'];
    if( (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua) ){
    	$('body').addClass('smart');
	} 

})(jQuery);
(function ($) {
	"use strict";

	$('input, textarea').each(function(){
		$(this).val() ? $(this).addClass('has-value') : $(this).removeClass('has-value');
	});
	$(document).on('blur', 'input, textarea', function(e){
		$(this).val() ? $(this).addClass('has-value') : $(this).removeClass('has-value');
	});

})(jQuery);
(function ($) {
  "use strict";
  
  $(document).on('click', '[ui-nav] a', function (e) {
    var $this = $(e.target), $active, $li;
    $this.is('a') || ($this = $this.closest('a'));
    
    $li = $this.parent();
    $active = $li.siblings( ".active" );
    $li.toggleClass('active');
    $active.removeClass('active');
  });
})(jQuery);
(function ($) {
	"use strict";
  	
	uiLoad.load('../libs/jquery/screenfull/dist/screenfull.min.js');
	$(document).on('click', '[ui-fullscreen]', function (e) {
		e.preventDefault();
		if (screenfull.enabled) {
		  screenfull.toggle();
		}
	});
})(jQuery);
(function ($) {
	"use strict";
  	$.extend( jQuery.easing,{
	    def: 'easeOutQuad',
	    easeInOutExpo: function (x, t, b, c, d) {
	        if (t==0) return b;
	        if (t==d) return b+c;
	        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
	        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	    }
	});

	$(document).on('click', '[ui-scroll-to]', function (e) {
		e.preventDefault();
		var target = $('#'+$(this).attr('ui-scroll-to'));
		$('html,body').animate({
          scrollTop: target.offset().top
        }, 600, 'easeInOutExpo');
	});
})(jQuery);
(function ($) {
	"use strict";
	
    $(document).on('click', '[ui-toggle-class]', function (e) {
        e.preventDefault();
        var $this = $(e.target);
        $this.attr('ui-toggle-class') || ($this = $this.closest('[ui-toggle-class]'));
		var classes = $this.attr('ui-toggle-class').split(','),
			targets = ($this.attr('ui-target') && $this.attr('ui-target').split(',')) || ($this.attr('target') && $this.attr('target').split(',')) || Array($this),
			key = 0;
		$.each(classes, function( index, value ) {
			var target = $( targets[(targets.length && key)] ),
                current = target.attr('ui-class'),
                _class = classes[index];

            (current != _class) && target.removeClass( target.attr('ui-class') );
			target.toggleClass(classes[index]);
			target.attr('ui-class', _class);
			key ++;
		});
		$this.toggleClass('active');

    });
})(jQuery);
(function ($) {
	'use strict';

	  window.app = {
      name: 'Flatkit',
      version: '1.1.3',
      // for chart colors
      color: {
        'primary':      '#0cc2aa',
        'accent':       '#a88add',
        'warn':         '#fcc100',
        'info':         '#6887ff',
        'success':      '#6cc788',
        'warning':      '#f77a99',
        'danger':       '#f44455',
        'white':        '#ffffff',
        'light':        '#f1f2f3',
        'dark':         '#2e3e4e',
        'black':        '#2a2b3c'
      },
      setting: {
        theme: {
    			primary: 'primary',
    			accent: 'accent',
    			warn: 'warn'
        },
        color: {
	        primary:      '#0cc2aa',
	        accent:       '#a88add',
	        warn:         '#fcc100'
    	  },
        folded: false,
        boxed: false,
        container: false,
        themeID: 1,
        bg: ''
      }
    };

    var setting = 'jqStorage-'+app.name+'-Setting',
        storage = $.localStorage;
    
    if( storage.isEmpty(setting) ){
        storage.set(setting, app.setting);
    }else{
        app.setting = storage.get(setting);
    }
    var v = window.location.search.substring(1).split('&');
    for (var i = 0; i < v.length; i++)
    {
        var n = v[i].split('=');
        app.setting[n[0]] = (n[1] == "true" || n[1]== "false") ? (n[1] == "true") : n[1];
        storage.set(setting, app.setting);
    }

    // init
    function setTheme(){

      $('body').removeClass($('body').attr('ui-class')).addClass(app.setting.bg).attr('ui-class', app.setting.bg);
      app.setting.folded ? $('#aside').addClass('folded') : $('#aside').removeClass('folded');
      app.setting.boxed ? $('body').addClass('container') : $('body').removeClass('container');

      $('.switcher input[value="'+app.setting.themeID+'"]').prop('checked', true);
      $('.switcher input[value="'+app.setting.bg+'"]').prop('checked', true);

      $('[data-target="folded"] input').prop('checked', app.setting.folded);
      $('[data-target="boxed"] input').prop('checked', app.setting.boxed);
      
    }

    // click to switch
    $(document).on('click.setting', '.switcher input', function(e){
      var $this = $(this), $target;
      $target = $this.parent().attr('data-target') ? $this.parent().attr('data-target') : $this.parent().parent().attr('data-target');
      app.setting[$target] = $this.is(':checkbox') ? $this.prop('checked') : $(this).val();
      ($(this).attr('name')=='color') && (app.setting.theme = eval('[' +  $(this).parent().attr('data-value') +']')[0]) && setColor();
      storage.set(setting, app.setting);
      setTheme(app.setting);
    });

    function setColor(){
      app.setting.color = {
        primary: getColor( app.setting.theme.primary ),
        accent: getColor( app.setting.theme.accent ),
        warn: getColor( app.setting.theme.warn )
      };
    };

    function getColor(name){
      return app.color[ name ] ? app.color[ name ] : palette.find(name);
    };

    function init(){
      $('[ui-jp]').uiJp();
      $('body').uiInclude();
    }

    $(document).on('pjaxStart', function() {
        $('#aside').modal('hide');
        $('body').removeClass('modal-open').find('.modal-backdrop').remove();
        $('.navbar-toggleable-sm').collapse('hide');
    });
    
    init();
    setTheme();

})(jQuery);




















