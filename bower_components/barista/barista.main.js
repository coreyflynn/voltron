/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
/*!
 * Bootstrap v3.0.3 (http://getbootstrap.com)
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]'),b=!0;if(a.length){var c=this.$element.find("input");"radio"===c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?b=!1:a.find(".active").removeClass("active")),b&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}b&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
d3=function(){function n(n){return null!=n&&!isNaN(n)}function t(n){return n.length}function e(n){for(var t=1;n*t%1;)t*=10;return t}function r(n,t){try{for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}catch(r){n.prototype=t}}function i(){}function u(){}function a(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function o(){}function c(n){function t(){for(var t,r=e,i=-1,u=r.length;++i<u;)(t=r[i].on)&&t.apply(this,arguments);return n}var e=[],r=new i;return t.on=function(t,i){var u,a=r.get(t);return arguments.length<2?a&&a.on:(a&&(a.on=null,e=e.slice(0,u=e.indexOf(a)).concat(e.slice(u+1)),r.remove(t)),i&&e.push(r.set(t,{on:i})),n)},t}function l(){ua.event.stopPropagation(),ua.event.preventDefault()}function f(){for(var n,t=ua.event;n=t.sourceEvent;)t=n;return t}function s(n,t){function e(){n.on(t,null)}n.on(t,function(){l(),e()},!0),setTimeout(e,0)}function h(n){for(var t=new o,e=0,r=arguments.length;++e<r;)t[arguments[e]]=c(t);return t.of=function(e,r){return function(i){try{var u=i.sourceEvent=ua.event;i.target=n,ua.event=i,t[i.type].apply(e,r)}finally{ua.event=u}}},t}function g(n,t){var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>pa&&(oa.scrollX||oa.scrollY)){e=ua.select(aa.body).append("svg").style("position","absolute").style("top",0).style("left",0);var i=e[0][0].getScreenCTM();pa=!(i.f||i.e),e.remove()}return pa?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var u=n.getBoundingClientRect();return[t.clientX-u.left-n.clientLeft,t.clientY-u.top-n.clientTop]}function p(n){for(var t=-1,e=n.length,r=[];++t<e;)r.push(n[t]);return r}function d(n){return Array.prototype.slice.call(n)}function m(n){return va(n,wa),n}function v(n){return function(){return ya(n,this)}}function y(n){return function(){return Ma(n,this)}}function M(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function i(){this.setAttribute(n,t)}function u(){this.setAttributeNS(n.space,n.local,t)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ua.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?o:a:n.local?u:i}function x(n){return n.trim().replace(/\s+/g," ")}function b(n){return RegExp("(?:^|\\s+)"+ua.requote(n)+"(?:\\s+|$)","g")}function _(n,t){function e(){for(var e=-1;++e<i;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<i;)n[e](this,r)}n=n.trim().split(/\s+/).map(w);var i=n.length;return"function"==typeof t?r:e}function w(n){var t=b(n);return function(e,r){if(i=e.classList)return r?i.add(n):i.remove(n);var i=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(i)||e.setAttribute("class",x(i+" "+n))):e.setAttribute("class",x(i.replace(t," ")))}}function S(n,t,e){function r(){this.style.removeProperty(n)}function i(){this.style.setProperty(n,t,e)}function u(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?u:i}function E(n,t){function e(){delete this[n]}function r(){this[n]=t}function i(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?i:r}function k(n){return{__data__:n}}function A(n){return function(){return _a(this,n)}}function N(n){return arguments.length||(n=ua.ascending),function(t,e){return!t-!e||n(t.__data__,e.__data__)}}function q(){}function T(n,t,e){function r(){var t=this[a];t&&(this.removeEventListener(n,t,t.$),delete this[a])}function i(){var i=c(t,da(arguments));r.call(this),this.addEventListener(n,this[a]=i,i.$=e),i._=t}function u(){var t,e=RegExp("^__on([^.]+)"+ua.requote(n)+"$");for(var r in this)if(t=r.match(e)){var i=this[r];this.removeEventListener(t[1],i,i.$),delete this[r]}}var a="__on"+n,o=n.indexOf("."),c=C;o>0&&(n=n.substring(0,o));var l=ka.get(n);return l&&(n=l,c=z),o?t?i:r:t?q:u}function C(n,t){return function(e){var r=ua.event;ua.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ua.event=r}}}function z(n,t){var e=C(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||r.compareDocumentPosition(t)&8)||e.call(t,n)}}function D(n,t){for(var e=0,r=n.length;r>e;e++)for(var i,u=n[e],a=0,o=u.length;o>a;a++)(i=u[a])&&t(i,a,e);return n}function j(n){return va(n,Aa),n}function L(){}function F(n,t,e){return new H(n,t,e)}function H(n,t,e){this.h=n,this.s=t,this.l=e}function P(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?u+(a-u)*n/60:180>n?a:240>n?u+(a-u)*(240-n)/60:u}function i(n){return Math.round(r(n)*255)}var u,a;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,a=.5>=e?e*(1+t):e+t-e*t,u=2*e-a,tt(i(n+120),i(n),i(n-120))}function R(n){return n>0?1:0>n?-1:0}function O(n){return Math.acos(Math.max(-1,Math.min(1,n)))}function Y(n){return n>1?Da/2:-1>n?-Da/2:Math.asin(n)}function U(n){return(Math.exp(n)-Math.exp(-n))/2}function I(n){return(Math.exp(n)+Math.exp(-n))/2}function V(n){return(n=Math.sin(n/2))*n}function X(n,t,e){return new Z(n,t,e)}function Z(n,t,e){this.h=n,this.c=t,this.l=e}function B(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),$(e,Math.cos(n*=La)*t,Math.sin(n)*t)}function $(n,t,e){return new J(n,t,e)}function J(n,t,e){this.l=n,this.a=t,this.b=e}function G(n,t,e){var r=(n+16)/116,i=r+t/500,u=r-e/200;return i=W(i)*Ra,r=W(r)*Oa,u=W(u)*Ya,tt(nt(3.2404542*i-1.5371385*r-.4985314*u),nt(-.969266*i+1.8760108*r+.041556*u),nt(.0556434*i-.2040259*r+1.0572252*u))}function K(n,t,e){return n>0?X(Math.atan2(e,t)*Fa,Math.sqrt(t*t+e*e),n):X(0/0,0/0,n)}function W(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function Q(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function nt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function tt(n,t,e){return new et(n,t,e)}function et(n,t,e){this.r=n,this.g=t,this.b=e}function rt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function it(n,t,e){var r,i,u,a=0,o=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(i=r[2].split(","),r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100);case"rgb":return t(ct(i[0]),ct(i[1]),ct(i[2]))}return(u=Va.get(n))?t(u.r,u.g,u.b):(null!=n&&n.charAt(0)==="#"&&(n.length===4?(a=n.charAt(1),a+=a,o=n.charAt(2),o+=o,c=n.charAt(3),c+=c):n.length===7&&(a=n.substring(1,3),o=n.substring(3,5),c=n.substring(5,7)),a=parseInt(a,16),o=parseInt(o,16),c=parseInt(c,16)),t(a,o,c))}function ut(n,t,e){var r,i,u=Math.min(n/=255,t/=255,e/=255),a=Math.max(n,t,e),o=a-u,c=(a+u)/2;return o?(i=.5>c?o/(a+u):o/(2-a-u),r=n==a?(t-e)/o+(e>t?6:0):t==a?(e-n)/o+2:(n-t)/o+4,r*=60):(r=0/0,i=c>0&&1>c?0:r),F(r,i,c)}function at(n,t,e){n=ot(n),t=ot(t),e=ot(e);var r=Q((.4124564*n+.3575761*t+.1804375*e)/Ra),i=Q((.2126729*n+.7151522*t+.072175*e)/Oa),u=Q((.0193339*n+.119192*t+.9503041*e)/Ya);return $(116*i-16,500*(r-i),200*(i-u))}function ot(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function ct(n){var t=parseFloat(n);return n.charAt(n.length-1)==="%"?Math.round(2.55*t):t}function lt(n){return"function"==typeof n?n:function(){return n}}function ft(n){return n}function st(n){return function(t,e,r){return arguments.length===2&&"function"==typeof e&&(r=e,e=null),ht(t,e,n,r)}}function ht(n,t,e,r){function i(){var n,t=c.status;if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=e.call(u,c)}catch(r){return a.error.call(u,r),void 0}a.load.call(u,n)}else a.error.call(u,c)}var u={},a=ua.dispatch("progress","load","error"),o={},c=new(oa.XDomainRequest&&/^(http(s)?:)?\/\//.test(n)?XDomainRequest:XMLHttpRequest);return"onload"in c?c.onload=c.onerror=i:c.onreadystatechange=function(){c.readyState>3&&i()},c.onprogress=function(n){var t=ua.event;ua.event=n;try{a.progress.call(u,c)}finally{ua.event=t}},u.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?o[n]:(null==t?delete o[n]:o[n]=t+"",u)},u.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",u):t},u.response=function(n){return e=n,u},["get","post"].forEach(function(n){u[n]=function(){return u.send.apply(u,[n].concat(da(arguments)))}}),u.send=function(e,r,i){if(arguments.length===2&&"function"==typeof r&&(i=r,r=null),c.open(e,n,!0),null==t||"accept"in o||(o.accept=t+",*/*"),c.setRequestHeader)for(var a in o)c.setRequestHeader(a,o[a]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=i&&u.on("error",i).on("load",function(n){i(null,n)}),c.send(null==r?null:r),u},u.abort=function(){return c.abort(),u},ua.rebind(u,a,"on"),null==r?u:u.get(gt(r))}function gt(n){return n.length===1?function(t,e){n(null==t?e:null)}:n}function pt(n,t){function e(n,e,u){arguments.length<3&&(u=e,e=null);var a=ua.xhr(n,t,u);return a.row=function(n){return arguments.length?a.response((e=n)==null?r:i(n)):e},a.row(e)}function r(n){return e.parse(n.responseText)}function i(n){return function(t){return e.parse(t.responseText,n)}}function a(t){return t.map(o).join(n)}function o(n){return c.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var c=RegExp('["'+n+"\n]"),l=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var i=Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(i(n),e)}:i})},e.parseRows=function(n,t){function e(){if(f>=c)return a;if(i)return i=!1,u;var t=f;if(n.charCodeAt(t)===34){for(var e=t;e++<c;)if(n.charCodeAt(e)===34){if(n.charCodeAt(e+1)!==34)break;++e}f=e+2;var r=n.charCodeAt(e+1);return 13===r?(i=!0,n.charCodeAt(e+2)===10&&++f):10===r&&(i=!0),n.substring(t+1,e).replace(/""/g,'"')}for(;c>f;){var r=n.charCodeAt(f++),o=1;if(10===r)i=!0;else if(13===r)i=!0,n.charCodeAt(f)===10&&(++f,++o);else if(r!==l)continue;return n.substring(t,f-o)}return n.substring(t)}for(var r,i,u={},a={},o=[],c=n.length,f=0,s=0;(r=e())!==a;){for(var h=[];r!==u&&r!==a;)h.push(r),r=e();(!t||(h=t(h,s++)))&&o.push(h)}return o},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new u,i=[];return t.forEach(function(n){for(var t in n)r.has(t)||i.push(r.add(t))}),[i.map(o).join(n)].concat(t.map(function(t){return i.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(a).join("\n")},e}function dt(){var n=mt(),t=vt()-n;t>24?(isFinite(t)&&(clearTimeout($a),$a=setTimeout(dt,t)),Ba=0):(Ba=1,Ja(dt))}function mt(){for(var n=Date.now(),t=Xa;t;)n>=t.time&&(t.flush=t.callback(n-t.time)),t=t.next;return n}function vt(){for(var n,t=Xa,e=1/0;t;)t.flush?t=n?n.next=t.next:Xa=t.next:(t.time<e&&(e=t.time),t=(n=t).next);return Za=n,e}function yt(n,t){var e=Math.pow(10,Math.abs(8-t)*3);return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Mt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function xt(n){return n+""}function bt(n,t){n&&uo.hasOwnProperty(n.type)&&uo[n.type](n,t)}function _t(n,t,e){var r,i=-1,u=n.length-e;for(t.lineStart();++i<u;)r=n[i],t.point(r[0],r[1]);t.lineEnd()}function wt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)_t(n[e],t,1);t.polygonEnd()}function St(){function n(n,t){n*=La,t=t*La/2+Da/4;var e=n-r,a=Math.cos(t),o=Math.sin(t),c=u*o,l=i*a+c*Math.cos(e),f=c*Math.sin(e);oo+=Math.atan2(f,l),r=n,i=a,u=o}var t,e,r,i,u;co.point=function(a,o){co.point=n,r=(t=a)*La,i=Math.cos(o=(e=o)*La/2+Da/4),u=Math.sin(o)},co.lineEnd=function(){n(t,e)}}function Et(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function kt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function At(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Nt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function qt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function Tt(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Ct(n){return[Math.atan2(n[1],n[0]),Math.asin(Math.max(-1,Math.min(1,n[2])))]}function zt(n,t){return Math.abs(n[0]-t[0])<ja&&Math.abs(n[1]-t[1])<ja}function Dt(n,t){if(!lo){++fo,n*=La;var e=Math.cos(t*=La);so+=(e*Math.cos(n)-so)/fo,ho+=(e*Math.sin(n)-ho)/fo,go+=(Math.sin(t)-go)/fo}}function jt(){var n,t;lo=1,Lt(),lo=2;var e=po.point;po.point=function(r,i){e(n=r,t=i)},po.lineEnd=function(){po.point(n,t),Ft(),po.lineEnd=Ft}}function Lt(){function n(n,i){n*=La;var u=Math.cos(i*=La),a=u*Math.cos(n),o=u*Math.sin(n),c=Math.sin(i),l=Math.atan2(Math.sqrt((l=e*c-r*o)*l+(l=r*a-t*c)*l+(l=t*o-e*a)*l),t*a+e*o+r*c);fo+=l,so+=l*(t+(t=a)),ho+=l*(e+(e=o)),go+=l*(r+(r=c))}var t,e,r;lo>1||(1>lo&&(lo=1,fo=so=ho=go=0),po.point=function(i,u){i*=La;var a=Math.cos(u*=La);t=a*Math.cos(i),e=a*Math.sin(i),r=Math.sin(u),po.point=n})}function Ft(){po.point=Dt}function Ht(){return!0}function Pt(n,t,e,r,i){var u=[],a=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(zt(e,r)){i.lineStart();for(var o=0;t>o;++o)i.point((e=n[o])[0],e[1]);return i.lineEnd(),void 0}var c={point:e,points:n,other:null,visited:!1,entry:!0,subject:!0},l={point:e,points:[e],other:c,visited:!1,entry:!1,subject:!1};c.other=l,u.push(c),a.push(l),c={point:r,points:[r],other:null,visited:!1,entry:!1,subject:!0},l={point:r,points:[r],other:c,visited:!1,entry:!0,subject:!1},c.other=l,u.push(c),a.push(l)}}),a.sort(t),Rt(u),Rt(a),u.length){if(e)for(var o=1,c=!e(a[0].point),l=a.length;l>o;++o)a[o].entry=c=!c;for(var f,s,h,g=u[0];;){for(f=g;f.visited;)if((f=f.next)===g)return;s=f.points,i.lineStart();do{if(f.visited=f.other.visited=!0,f.entry){if(f.subject)for(var o=0;o<s.length;o++)i.point((h=s[o])[0],h[1]);else r(f.point,f.next.point,1,i);f=f.next}else{if(f.subject){s=f.prev.points;for(var o=s.length;--o>=0;)i.point((h=s[o])[0],h[1])}else r(f.point,f.prev.point,-1,i);f=f.prev}f=f.other,s=f.points}while(!f.visited);i.lineEnd()}}}function Rt(n){if(t=n.length){for(var t,e,r=0,i=n[0];++r<t;)i.next=e=n[r],e.prev=i,i=e;i.next=e=n[0],e.prev=i}}function Ot(n,t,e){return function(r){function i(t,e){n(t,e)&&r.point(t,e)}function u(n,t){m.point(n,t)}function a(){v.point=u,m.lineStart()}function o(){v.point=i,m.lineEnd()}function c(n,t){M.point(n,t),d.push([n,t])}function l(){M.lineStart(),d=[]}function f(){c(d[0][0],d[0][1]),M.lineEnd();var n,t=M.clean(),e=y.buffer(),i=e.length;if(!i)return p=!0,g+=It(d,-1),d=null,void 0;if(d=null,1&t){n=e[0],h+=It(n,1);var u,i=n.length-1,a=-1;for(r.lineStart();++a<i;)r.point((u=n[a])[0],u[1]);return r.lineEnd(),void 0}i>1&&2&t&&e.push(e.pop().concat(e.shift())),s.push(e.filter(Yt))}var s,h,g,p,d,m=t(r),v={point:i,lineStart:a,lineEnd:o,polygonStart:function(){v.point=c,v.lineStart=l,v.lineEnd=f,p=!1,g=h=0,s=[],r.polygonStart()},polygonEnd:function(){v.point=i,v.lineStart=a,v.lineEnd=o,s=ua.merge(s),s.length?Pt(s,Vt,null,e,r):(-ja>h||p&&-ja>g)&&(r.lineStart(),e(null,null,1,r),r.lineEnd()),r.polygonEnd(),s=null},sphere:function(){r.polygonStart(),r.lineStart(),e(null,null,1,r),r.lineEnd(),r.polygonEnd()}},y=Ut(),M=t(y);return v}}function Yt(n){return n.length>1}function Ut(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:q,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function It(n,t){if(!(e=n.length))return 0;for(var e,r,i,u=0,a=0,o=n[0],c=o[0],l=o[1],f=Math.cos(l),s=Math.atan2(t*Math.sin(c)*f,Math.sin(l)),h=1-t*Math.cos(c)*f,g=s;++u<e;)o=n[u],f=Math.cos(l=o[1]),r=Math.atan2(t*Math.sin(c=o[0])*f,Math.sin(l)),i=1-t*Math.cos(c)*f,Math.abs(h-2)<ja&&Math.abs(i-2)<ja||(Math.abs(i)<ja||Math.abs(h)<ja||(Math.abs(Math.abs(r-s)-Da)<ja?i+h>2&&(a+=4*(r-s)):a+=Math.abs(h-2)<ja?4*(r-g):((3*Da+r-s)%(2*Da)-Da)*(h+i)),g=s,s=r,h=i);return a}function Vt(n,t){return((n=n.point)[0]<0?n[1]-Da/2-ja:Da/2-n[1])-((t=t.point)[0]<0?t[1]-Da/2-ja:Da/2-t[1])}function Xt(n){var t,e=0/0,r=0/0,i=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(u,a){var o=u>0?Da:-Da,c=Math.abs(u-e);Math.abs(c-Da)<ja?(n.point(e,r=(r+a)/2>0?Da/2:-Da/2),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(o,r),n.point(u,r),t=0):i!==o&&c>=Da&&(Math.abs(e-i)<ja&&(e-=i*ja),Math.abs(u-o)<ja&&(u-=o*ja),r=Zt(e,r,u,a),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(o,r),t=0),n.point(e=u,r=a),i=o},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function Zt(n,t,e,r){var i,u,a=Math.sin(n-e);return Math.abs(a)>ja?Math.atan((Math.sin(t)*(u=Math.cos(r))*Math.sin(e)-Math.sin(r)*(i=Math.cos(t))*Math.sin(n))/(i*u*a)):(t+r)/2}function Bt(n,t,e,r){var i;if(null==n)i=e*Da/2,r.point(-Da,i),r.point(0,i),r.point(Da,i),r.point(Da,0),r.point(Da,-i),r.point(0,-i),r.point(-Da,-i),r.point(-Da,0),r.point(-Da,i);else if(Math.abs(n[0]-t[0])>ja){var u=(n[0]<t[0]?1:-1)*Da;i=e*u/2,r.point(-u,i),r.point(0,i),r.point(u,i)}else r.point(t[0],t[1])}function $t(n){function t(n,t){return Math.cos(n)*Math.cos(t)>u}function e(n){var e,u,c,l,f;return{lineStart:function(){l=c=!1,f=1},point:function(s,h){var g,p=[s,h],d=t(s,h),m=a?d?0:i(s,h):d?i(s+(0>s?Da:-Da),h):0;if(!e&&(l=c=d)&&n.lineStart(),d!==c&&(g=r(e,p),(zt(e,g)||zt(p,g))&&(p[0]+=ja,p[1]+=ja,d=t(p[0],p[1]))),d!==c)f=0,d?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(o&&e&&a^d){var v;m&u||!(v=r(p,e,!0))||(f=0,a?(n.lineStart(),n.point(v[0][0],v[0][1]),n.point(v[1][0],v[1][1]),n.lineEnd()):(n.point(v[1][0],v[1][1]),n.lineEnd(),n.lineStart(),n.point(v[0][0],v[0][1])))}!d||e&&zt(e,p)||n.point(p[0],p[1]),e=p,c=d,u=m},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return f|(l&&c)<<1}}}function r(n,t,e){var r=Et(n),i=Et(t),a=[1,0,0],o=At(r,i),c=kt(o,o),l=o[0],f=c-l*l;if(!f)return!e&&n;var s=u*c/f,h=-u*l/f,g=At(a,o),p=qt(a,s),d=qt(o,h);Nt(p,d);var m=g,v=kt(p,m),y=kt(m,m),M=v*v-y*(kt(p,p)-1);if(!(0>M)){var x=Math.sqrt(M),b=qt(m,(-v-x)/y);if(Nt(b,p),b=Ct(b),!e)return b;var _,w=n[0],S=t[0],E=n[1],k=t[1];w>S&&(_=w,w=S,S=_);var A=S-w,N=Math.abs(A-Da)<ja,q=N||ja>A;if(!N&&E>k&&(_=E,E=k,k=_),q?N?E+k>0^b[1]<(Math.abs(b[0]-w)<ja?E:k):E<=b[1]&&b[1]<=k:A>Da^(w<=b[0]&&b[0]<=S)){var T=qt(m,(-v+x)/y);return Nt(T,p),[b,Ct(T)]}}}function i(t,e){var r=a?n:Da-n,i=0;return-r>t?i|=1:t>r&&(i|=2),-r>e?i|=4:e>r&&(i|=8),i}var u=Math.cos(n),a=u>0,o=Math.abs(u)>ja,c=oe(n,6*La);return Ot(t,e,c)}function Jt(n,t,e,r){function i(r,i){return Math.abs(r[0]-n)<ja?i>0?0:3:Math.abs(r[0]-e)<ja?i>0?2:1:Math.abs(r[1]-t)<ja?i>0?1:0:i>0?3:2}function u(n,t){return a(n.point,t.point)}function a(n,t){var e=i(n,1),r=i(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}function o(i,u){var a=u[0]-i[0],o=u[1]-i[1],c=[0,1];return Math.abs(a)<ja&&Math.abs(o)<ja?n<=i[0]&&i[0]<=e&&t<=i[1]&&i[1]<=r:Gt(n-i[0],a,c)&&Gt(i[0]-e,-a,c)&&Gt(t-i[1],o,c)&&Gt(i[1]-r,-o,c)?(c[1]<1&&(u[0]=i[0]+c[1]*a,u[1]=i[1]+c[1]*o),c[0]>0&&(i[0]+=c[0]*a,i[1]+=c[0]*o),!0):!1}return function(c){function l(u){var a=i(u,-1),o=f([0===a||3===a?n:e,a>1?r:t]);return o}function f(n){for(var t=0,e=M.length,r=n[1],i=0;e>i;++i)for(var u,a=1,o=M[i],c=o.length,l=o[0];c>a;++a)u=o[a],l[1]<=r?u[1]>r&&s(l,u,n)>0&&++t:u[1]<=r&&s(l,u,n)<0&&--t,l=u;return 0!==t}function s(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(e[0]-n[0])*(t[1]-n[1])}function h(u,o,c,l){var f=0,s=0;if(null==u||(f=i(u,c))!==(s=i(o,c))||a(u,o)<0^c>0){do l.point(0===f||3===f?n:e,f>1?r:t);while((f=(f+c+4)%4)!==s)}else l.point(o[0],o[1])}function g(i,u){return i>=n&&e>=i&&u>=t&&r>=u}function p(n,t){g(n,t)&&c.point(n,t)}function d(){T.point=v,M&&M.push(x=[]),A=!0,k=!1,S=E=0/0}function m(){y&&(v(b,_),w&&k&&q.rejoin(),y.push(q.buffer())),T.point=p,k&&c.lineEnd()}function v(n,t){n=Math.max(-vo,Math.min(vo,n)),t=Math.max(-vo,Math.min(vo,t));var e=g(n,t);if(M&&x.push([n,t]),A)b=n,_=t,w=e,A=!1,e&&(c.lineStart(),c.point(n,t));else if(e&&k)c.point(n,t);else{var r=[S,E],i=[n,t];o(r,i)?(k||(c.lineStart(),c.point(r[0],r[1])),c.point(i[0],i[1]),e||c.lineEnd()):e&&(c.lineStart(),c.point(n,t))}S=n,E=t,k=e}var y,M,x,b,_,w,S,E,k,A,N=c,q=Ut(),T={point:p,lineStart:d,lineEnd:m,polygonStart:function(){c=q,y=[],M=[]},polygonEnd:function(){c=N,(y=ua.merge(y)).length?(c.polygonStart(),Pt(y,u,l,h,c),c.polygonEnd()):f([n,t])&&(c.polygonStart(),c.lineStart(),h(null,null,1,c),c.lineEnd(),c.polygonEnd()),y=M=x=null}};return T}}function Gt(n,t,e){if(Math.abs(t)<ja)return 0>=n;var r=n/t;if(t>0){if(r>e[1])return!1;r>e[0]&&(e[0]=r)}else{if(r<e[0])return!1;r<e[1]&&(e[1]=r)}return!0}function Kt(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function Wt(n){function t(t){function r(e,r){e=n(e,r),t.point(e[0],e[1])}function u(){f=0/0,d.point=a,t.lineStart()}function a(r,u){var a=Et([r,u]),o=n(r,u);e(f,s,l,h,g,p,f=o[0],s=o[1],l=r,h=a[0],g=a[1],p=a[2],i,t),t.point(f,s)}function o(){d.point=r,t.lineEnd()}function c(){var n,r,c,m,v,y,M;u(),d.point=function(t,e){a(n=t,r=e),c=f,m=s,v=h,y=g,M=p,d.point=a},d.lineEnd=function(){e(f,s,l,h,g,p,c,m,n,v,y,M,i,t),d.lineEnd=o,o()}}var l,f,s,h,g,p,d={point:r,lineStart:u,lineEnd:o,polygonStart:function(){t.polygonStart(),d.lineStart=c},polygonEnd:function(){t.polygonEnd(),d.lineStart=u}};return d}function e(t,i,u,a,o,c,l,f,s,h,g,p,d,m){var v=l-t,y=f-i,M=v*v+y*y;if(M>4*r&&d--){var x=a+h,b=o+g,_=c+p,w=Math.sqrt(x*x+b*b+_*_),S=Math.asin(_/=w),E=Math.abs(Math.abs(_)-1)<ja?(u+s)/2:Math.atan2(b,x),k=n(E,S),A=k[0],N=k[1],q=A-t,T=N-i,C=y*q-v*T;(C*C/M>r||Math.abs((v*q+y*T)/M-.5)>.3)&&(e(t,i,u,a,o,c,A,N,E,x/=w,b/=w,_,d,m),m.point(A,N),e(A,N,E,x,b,_,l,f,s,h,g,p,d,m))}}var r=.5,i=16;return t.precision=function(n){return arguments.length?(i=(r=n*n)>0&&16,t):Math.sqrt(r)},t}function Qt(n){return ne(function(){return n})()}function ne(n){function t(n){return n=a(n[0]*La,n[1]*La),[n[0]*f+o,c-n[1]*f]}function e(n){return n=a.invert((n[0]-o)/f,(c-n[1])/f),n&&[n[0]*Fa,n[1]*Fa]}function r(){a=Kt(u=re(d,m,v),i);var n=i(g,p);return o=s-n[0]*f,c=h+n[1]*f,t}var i,u,a,o,c,l=Wt(function(n,t){return n=i(n,t),[n[0]*f+o,c-n[1]*f]}),f=150,s=480,h=250,g=0,p=0,d=0,m=0,v=0,y=mo,M=ft,x=null,b=null;return t.stream=function(n){return te(u,y(l(M(n))))},t.clipAngle=function(n){return arguments.length?(y=null==n?(x=n,mo):$t((x=+n)*La),t):x},t.clipExtent=function(n){return arguments.length?(b=n,M=null==n?ft:Jt(n[0][0],n[0][1],n[1][0],n[1][1]),t):b},t.scale=function(n){return arguments.length?(f=+n,r()):f},t.translate=function(n){return arguments.length?(s=+n[0],h=+n[1],r()):[s,h]},t.center=function(n){return arguments.length?(g=n[0]%360*La,p=n[1]%360*La,r()):[g*Fa,p*Fa]},t.rotate=function(n){return arguments.length?(d=n[0]%360*La,m=n[1]%360*La,v=n.length>2?n[2]%360*La:0,r()):[d*Fa,m*Fa,v*Fa]},ua.rebind(t,l,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function te(n,t){return{point:function(e,r){r=n(e*La,r*La),e=r[0],t.point(e>Da?e-2*Da:-Da>e?e+2*Da:e,r[1])},sphere:function(){t.sphere()},lineStart:function(){t.lineStart()},lineEnd:function(){t.lineEnd()},polygonStart:function(){t.polygonStart()},polygonEnd:function(){t.polygonEnd()}}}function ee(n,t){return[n,t]}function re(n,t,e){return n?t||e?Kt(ue(n),ae(t,e)):ue(n):t||e?ae(t,e):ee}function ie(n){return function(t,e){return t+=n,[t>Da?t-2*Da:-Da>t?t+2*Da:t,e]}}function ue(n){var t=ie(n);return t.invert=ie(-n),t}function ae(n,t){function e(n,t){var e=Math.cos(t),o=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),f=l*r+o*i;return[Math.atan2(c*u-f*a,o*r-l*i),Math.asin(Math.max(-1,Math.min(1,f*u+c*a)))]}var r=Math.cos(n),i=Math.sin(n),u=Math.cos(t),a=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),o=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),f=l*u-c*a;return[Math.atan2(c*u+l*a,o*r+f*i),Math.asin(Math.max(-1,Math.min(1,f*r-o*i)))]},e}function oe(n,t){var e=Math.cos(n),r=Math.sin(n);return function(i,u,a,o){null!=i?(i=ce(e,i),u=ce(e,u),(a>0?u>i:i>u)&&(i+=2*a*Da)):(i=n+2*a*Da,u=n);for(var c,l=a*t,f=i;a>0?f>u:u>f;f-=l)o.point((c=Ct([e,-r*Math.cos(f),-r*Math.sin(f)]))[0],c[1])}}function ce(n,t){var e=Et(t);e[0]-=n,Tt(e);var r=O(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-ja)%(2*Math.PI)}function le(n,t,e){var r=ua.range(n,t-ja,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function fe(n,t,e){var r=ua.range(n,t-ja,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function se(n){return n.source}function he(n){return n.target}function ge(n,t,e,r){var i=Math.cos(t),u=Math.sin(t),a=Math.cos(r),o=Math.sin(r),c=i*Math.cos(n),l=i*Math.sin(n),f=a*Math.cos(e),s=a*Math.sin(e),h=2*Math.asin(Math.sqrt(V(r-t)+i*a*V(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*f,i=e*l+t*s,a=e*u+t*o;return[Math.atan2(i,r)*Fa,Math.atan2(a,Math.sqrt(r*r+i*i))*Fa]}:function(){return[n*Fa,t*Fa]};return p.distance=h,p}function pe(){function n(n,i){var u=Math.sin(i*=La),a=Math.cos(i),o=Math.abs((n*=La)-t),c=Math.cos(o);yo+=Math.atan2(Math.sqrt((o=a*Math.sin(o))*o+(o=r*u-e*a*c)*o),e*u+r*a*c),t=n,e=u,r=a}var t,e,r;Mo.point=function(i,u){t=i*La,e=Math.sin(u*=La),r=Math.cos(u),Mo.point=n},Mo.lineEnd=function(){Mo.point=Mo.lineEnd=q}}function de(n){var t=0,e=Da/3,r=ne(n),i=r(t,e);return i.parallels=function(n){return arguments.length?r(t=n[0]*Da/180,e=n[1]*Da/180):[180*(t/Da),180*(e/Da)]},i}function me(n,t){function e(n,t){var e=Math.sqrt(u-2*i*Math.sin(t))/i;return[e*Math.sin(n*=i),a-e*Math.cos(n)]}var r=Math.sin(n),i=(r+Math.sin(t))/2,u=1+r*(2*i-r),a=Math.sqrt(u)/i;return e.invert=function(n,t){var e=a-t;return[Math.atan2(n,e)/i,Y((u-(n*n+e*e)*i*i)/(2*i))]},e}function ve(){function n(n,t){bo+=i*n-r*t,r=n,i=t}var t,e,r,i;ko.point=function(u,a){ko.point=n,t=r=u,e=i=a},ko.lineEnd=function(){n(t,e)}}function ye(n,t){_o>n&&(_o=n),n>So&&(So=n),wo>t&&(wo=t),t>Eo&&(Eo=t)}function Me(){function n(n,t){a.push("M",n,",",t,u)}function t(n,t){a.push("M",n,",",t),o.point=e}function e(n,t){a.push("L",n,",",t)}function r(){o.point=n}function i(){a.push("Z")}var u=xe(4.5),a=[],o={point:n,lineStart:function(){o.point=t},lineEnd:r,polygonStart:function(){o.lineEnd=i},polygonEnd:function(){o.lineEnd=r,o.point=n},pointRadius:function(n){return u=xe(n),o},result:function(){if(a.length){var n=a.join("");return a=[],n}}};return o}function xe(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function be(n,t){lo||(so+=n,ho+=t,++go)}function _e(){function n(n,r){var i=n-t,u=r-e,a=Math.sqrt(i*i+u*u);so+=a*(t+n)/2,ho+=a*(e+r)/2,go+=a,t=n,e=r}var t,e;if(1!==lo){if(!(1>lo))return;lo=1,so=ho=go=0}No.point=function(r,i){No.point=n,t=r,e=i}}function we(){No.point=be}function Se(){function n(n,t){var e=i*n-r*t;so+=e*(r+n),ho+=e*(i+t),go+=3*e,r=n,i=t}var t,e,r,i;2>lo&&(lo=2,so=ho=go=0),No.point=function(u,a){No.point=n,t=r=u,e=i=a},No.lineEnd=function(){n(t,e)}}function Ee(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,a,0,2*Da)}function e(t,e){n.moveTo(t,e),o.point=r}function r(t,e){n.lineTo(t,e)}function i(){o.point=t}function u(){n.closePath()}var a=4.5,o={point:t,lineStart:function(){o.point=e},lineEnd:i,polygonStart:function(){o.lineEnd=u},polygonEnd:function(){o.lineEnd=i,o.point=t},pointRadius:function(n){return a=n,o},result:q};return o}function ke(n){var t=Wt(function(t,e){return n([t*Fa,e*Fa])});return function(n){return n=t(n),{point:function(t,e){n.point(t*La,e*La)},sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}}function Ae(n,t){function e(t,e){var r=Math.cos(t),i=Math.cos(e),u=n(r*i);return[u*i*Math.sin(t),u*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),i=t(r),u=Math.sin(i),a=Math.cos(i);return[Math.atan2(n*u,r*a),Math.asin(r&&e*u/r)]},e}function Ne(n,t){function e(n,t){var e=Math.abs(Math.abs(t)-Da/2)<ja?0:a/Math.pow(i(t),u);return[e*Math.sin(u*n),a-e*Math.cos(u*n)]}var r=Math.cos(n),i=function(n){return Math.tan(Da/4+n/2)},u=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(i(t)/i(n)),a=r*Math.pow(i(n),u)/u;return u?(e.invert=function(n,t){var e=a-t,r=R(u)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/u,2*Math.atan(Math.pow(a/r,1/u))-Da/2]},e):Te}function qe(n,t){function e(n,t){var e=u-t;return[e*Math.sin(i*n),u-e*Math.cos(i*n)]}var r=Math.cos(n),i=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),u=r/i+n;return Math.abs(i)<ja?ee:(e.invert=function(n,t){var e=u-t;return[Math.atan2(n,e)/i,u-R(i)*Math.sqrt(n*n+e*e)]},e)}function Te(n,t){return[n,Math.log(Math.tan(Da/4+t/2))]}function Ce(n){var t,e=Qt(n),r=e.scale,i=e.translate,u=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=i.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var a=u.apply(e,arguments);if(a===e){if(t=null==n){var o=Da*r(),c=i();u([[c[0]-o,c[1]-o],[c[0]+o,c[1]+o]])}}else t&&(a=null);return a},e.clipExtent(null)}function ze(n,t){var e=Math.cos(t)*Math.sin(n);return[Math.log((1+e)/(1-e))/2,Math.atan2(Math.tan(t),Math.cos(n))]}function De(n){function t(t){function a(){l.push("M",u(n(f),o))}for(var c,l=[],f=[],s=-1,h=t.length,g=lt(e),p=lt(r);++s<h;)i.call(this,c=t[s],s)?f.push([+g.call(this,c,s),+p.call(this,c,s)]):f.length&&(a(),f=[]);return f.length&&a(),l.length?l.join(""):null}var e=je,r=Le,i=Ht,u=Fe,a=u.key,o=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(i=n,t):i},t.interpolate=function(n){return arguments.length?(a="function"==typeof n?u=n:(u=jo.get(n)||Fe).key,t):a},t.tension=function(n){return arguments.length?(o=n,t):o},t}function je(n){return n[0]}function Le(n){return n[1]}function Fe(n){return n.join("L")}function He(n){return Fe(n)+"Z"}function Pe(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("V",(r=n[t])[1],"H",r[0]);return i.join("")}function Re(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r=n[t])[0],"V",r[1]);return i.join("")}function Oe(n,t){return n.length<4?Fe(n):n[1]+Ie(n.slice(1,n.length-1),Ve(n,t))}function Ye(n,t){return n.length<3?Fe(n):n[0]+Ie((n.push(n[0]),n),Ve([n[n.length-2]].concat(n,[n[1]]),t))}function Ue(n,t){return n.length<3?Fe(n):n[0]+Ie(n,Ve(n,t))}function Ie(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return Fe(n);var e=n.length!=t.length,r="",i=n[0],u=n[1],a=t[0],o=a,c=1;if(e&&(r+="Q"+(u[0]-a[0]*2/3)+","+(u[1]-a[1]*2/3)+","+u[0]+","+u[1],i=n[1],c=2),t.length>1){o=t[1],u=n[c],c++,r+="C"+(i[0]+a[0])+","+(i[1]+a[1])+","+(u[0]-o[0])+","+(u[1]-o[1])+","+u[0]+","+u[1];for(var l=2;l<t.length;l++,c++)u=n[c],o=t[l],r+="S"+(u[0]-o[0])+","+(u[1]-o[1])+","+u[0]+","+u[1]}if(e){var f=n[c];r+="Q"+(u[0]+o[0]*2/3)+","+(u[1]+o[1]*2/3)+","+f[0]+","+f[1]}return r}function Ve(n,t){for(var e,r=[],i=(1-t)/2,u=n[0],a=n[1],o=1,c=n.length;++o<c;)e=u,u=a,a=n[o],r.push([i*(a[0]-e[0]),i*(a[1]-e[1])]);return r}function Xe(n){if(n.length<3)return Fe(n);var t=1,e=n.length,r=n[0],i=r[0],u=r[1],a=[i,i,i,(r=n[1])[0]],o=[u,u,u,r[1]],c=[i,",",u];for(Ge(c,a,o);++t<e;)r=n[t],a.shift(),a.push(r[0]),o.shift(),o.push(r[1]),Ge(c,a,o);for(t=-1;++t<2;)a.shift(),a.push(r[0]),o.shift(),o.push(r[1]),Ge(c,a,o);return c.join("")}function Ze(n){if(n.length<4)return Fe(n);for(var t,e=[],r=-1,i=n.length,u=[0],a=[0];++r<3;)t=n[r],u.push(t[0]),a.push(t[1]);for(e.push(Je(Ho,u)+","+Je(Ho,a)),--r;++r<i;)t=n[r],u.shift(),u.push(t[0]),a.shift(),a.push(t[1]),Ge(e,u,a);return e.join("")}function Be(n){for(var t,e,r=-1,i=n.length,u=i+4,a=[],o=[];++r<4;)e=n[r%i],a.push(e[0]),o.push(e[1]);for(t=[Je(Ho,a),",",Je(Ho,o)],--r;++r<u;)e=n[r%i],a.shift(),a.push(e[0]),o.shift(),o.push(e[1]),Ge(t,a,o);return t.join("")}function $e(n,t){var e=n.length-1;if(e)for(var r,i,u=n[0][0],a=n[0][1],o=n[e][0]-u,c=n[e][1]-a,l=-1;++l<=e;)r=n[l],i=l/e,r[0]=t*r[0]+(1-t)*(u+i*o),r[1]=t*r[1]+(1-t)*(a+i*c);return Xe(n)}function Je(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Ge(n,t,e){n.push("C",Je(Lo,t),",",Je(Lo,e),",",Je(Fo,t),",",Je(Fo,e),",",Je(Ho,t),",",Je(Ho,e))}function Ke(n,t){return(t[1]-n[1])/(t[0]-n[0])
}function We(n){for(var t=0,e=n.length-1,r=[],i=n[0],u=n[1],a=r[0]=Ke(i,u);++t<e;)r[t]=(a+(a=Ke(i=u,u=n[t+1])))/2;return r[t]=a,r}function Qe(n){for(var t,e,r,i,u=[],a=We(n),o=-1,c=n.length-1;++o<c;)t=Ke(n[o],n[o+1]),Math.abs(t)<1e-6?a[o]=a[o+1]=0:(e=a[o]/t,r=a[o+1]/t,i=e*e+r*r,i>9&&(i=3*t/Math.sqrt(i),a[o]=i*e,a[o+1]=i*r));for(o=-1;++o<=c;)i=(n[Math.min(c,o+1)][0]-n[Math.max(0,o-1)][0])/(6*(1+a[o]*a[o])),u.push([i||0,a[o]*i||0]);return u}function nr(n){return n.length<3?Fe(n):n[0]+Ie(n,Qe(n))}function tr(n,t,e,r){var i,u,a,o,c,l,f;return i=r[n],u=i[0],a=i[1],i=r[t],o=i[0],c=i[1],i=r[e],l=i[0],f=i[1],(f-a)*(o-u)-(c-a)*(l-u)>0}function er(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function rr(n,t,e,r){var i=n[0],u=e[0],a=t[0]-i,o=r[0]-u,c=n[1],l=e[1],f=t[1]-c,s=r[1]-l,h=(o*(c-l)-s*(i-u))/(s*a-o*f);return[i+h*a,c+h*f]}function ir(n,t){var e={list:n.map(function(n,t){return{index:t,x:n[0],y:n[1]}}).sort(function(n,t){return n.y<t.y?-1:n.y>t.y?1:n.x<t.x?-1:n.x>t.x?1:0}),bottomSite:null},r={list:[],leftEnd:null,rightEnd:null,init:function(){r.leftEnd=r.createHalfEdge(null,"l"),r.rightEnd=r.createHalfEdge(null,"l"),r.leftEnd.r=r.rightEnd,r.rightEnd.l=r.leftEnd,r.list.unshift(r.leftEnd,r.rightEnd)},createHalfEdge:function(n,t){return{edge:n,side:t,vertex:null,l:null,r:null}},insert:function(n,t){t.l=n,t.r=n.r,n.r.l=t,n.r=t},leftBound:function(n){var t=r.leftEnd;do t=t.r;while(t!=r.rightEnd&&i.rightOf(t,n));return t=t.l},del:function(n){n.l.r=n.r,n.r.l=n.l,n.edge=null},right:function(n){return n.r},left:function(n){return n.l},leftRegion:function(n){return n.edge==null?e.bottomSite:n.edge.region[n.side]},rightRegion:function(n){return n.edge==null?e.bottomSite:n.edge.region[Po[n.side]]}},i={bisect:function(n,t){var e={region:{l:n,r:t},ep:{l:null,r:null}},r=t.x-n.x,i=t.y-n.y,u=r>0?r:-r,a=i>0?i:-i;return e.c=n.x*r+n.y*i+.5*(r*r+i*i),u>a?(e.a=1,e.b=i/r,e.c/=r):(e.b=1,e.a=r/i,e.c/=i),e},intersect:function(n,t){var e=n.edge,r=t.edge;if(!e||!r||e.region.r==r.region.r)return null;var i=e.a*r.b-e.b*r.a;if(Math.abs(i)<1e-10)return null;var u,a,o=(e.c*r.b-r.c*e.b)/i,c=(r.c*e.a-e.c*r.a)/i,l=e.region.r,f=r.region.r;l.y<f.y||l.y==f.y&&l.x<f.x?(u=n,a=e):(u=t,a=r);var s=o>=a.region.r.x;return s&&u.side==="l"||!s&&u.side==="r"?null:{x:o,y:c}},rightOf:function(n,t){var e=n.edge,r=e.region.r,i=t.x>r.x;if(i&&n.side==="l")return 1;if(!i&&n.side==="r")return 0;if(e.a===1){var u=t.y-r.y,a=t.x-r.x,o=0,c=0;if(!i&&e.b<0||i&&e.b>=0?c=o=u>=e.b*a:(c=t.x+t.y*e.b>e.c,e.b<0&&(c=!c),c||(o=1)),!o){var l=r.x-e.region.l.x;c=e.b*(a*a-u*u)<l*u*(1+2*a/l+e.b*e.b),e.b<0&&(c=!c)}}else{var f=e.c-e.a*t.x,s=t.y-f,h=t.x-r.x,g=f-r.y;c=s*s>h*h+g*g}return n.side==="l"?c:!c},endPoint:function(n,e,r){n.ep[e]=r,n.ep[Po[e]]&&t(n)},distance:function(n,t){var e=n.x-t.x,r=n.y-t.y;return Math.sqrt(e*e+r*r)}},u={list:[],insert:function(n,t,e){n.vertex=t,n.ystar=t.y+e;for(var r=0,i=u.list,a=i.length;a>r;r++){var o=i[r];if(!(n.ystar>o.ystar||n.ystar==o.ystar&&t.x>o.vertex.x))break}i.splice(r,0,n)},del:function(n){for(var t=0,e=u.list,r=e.length;r>t&&e[t]!=n;++t);e.splice(t,1)},empty:function(){return u.list.length===0},nextEvent:function(n){for(var t=0,e=u.list,r=e.length;r>t;++t)if(e[t]==n)return e[t+1];return null},min:function(){var n=u.list[0];return{x:n.vertex.x,y:n.ystar}},extractMin:function(){return u.list.shift()}};r.init(),e.bottomSite=e.list.shift();for(var a,o,c,l,f,s,h,g,p,d,m,v,y,M=e.list.shift();;)if(u.empty()||(a=u.min()),M&&(u.empty()||M.y<a.y||M.y==a.y&&M.x<a.x))o=r.leftBound(M),c=r.right(o),h=r.rightRegion(o),v=i.bisect(h,M),s=r.createHalfEdge(v,"l"),r.insert(o,s),d=i.intersect(o,s),d&&(u.del(o),u.insert(o,d,i.distance(d,M))),o=s,s=r.createHalfEdge(v,"r"),r.insert(o,s),d=i.intersect(s,c),d&&u.insert(s,d,i.distance(d,M)),M=e.list.shift();else{if(u.empty())break;o=u.extractMin(),l=r.left(o),c=r.right(o),f=r.right(c),h=r.leftRegion(o),g=r.rightRegion(c),m=o.vertex,i.endPoint(o.edge,o.side,m),i.endPoint(c.edge,c.side,m),r.del(o),u.del(c),r.del(c),y="l",h.y>g.y&&(p=h,h=g,g=p,y="r"),v=i.bisect(h,g),s=r.createHalfEdge(v,y),r.insert(l,s),i.endPoint(v,Po[y],m),d=i.intersect(l,s),d&&(u.del(l),u.insert(l,d,i.distance(d,h))),d=i.intersect(s,f),d&&u.insert(s,d,i.distance(d,h))}for(o=r.right(r.leftEnd);o!=r.rightEnd;o=r.right(o))t(o.edge)}function ur(n){return n.x}function ar(n){return n.y}function or(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function cr(n,t,e,r,i,u){if(!n(t,e,r,i,u)){var a=.5*(e+i),o=.5*(r+u),c=t.nodes;c[0]&&cr(n,c[0],e,r,a,o),c[1]&&cr(n,c[1],a,r,i,o),c[2]&&cr(n,c[2],e,o,a,u),c[3]&&cr(n,c[3],a,o,i,u)}}function lr(n,t){n=ua.rgb(n),t=ua.rgb(t);var e=n.r,r=n.g,i=n.b,u=t.r-e,a=t.g-r,o=t.b-i;return function(n){return"#"+rt(Math.round(e+u*n))+rt(Math.round(r+a*n))+rt(Math.round(i+o*n))}}function fr(n){var t=[n.a,n.b],e=[n.c,n.d],r=hr(t),i=sr(t,e),u=hr(gr(e,t,-i))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,i*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Fa,this.translate=[n.e,n.f],this.scale=[r,u],this.skew=u?Math.atan2(i,u)*Fa:0}function sr(n,t){return n[0]*t[0]+n[1]*t[1]}function hr(n){var t=Math.sqrt(sr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function gr(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function pr(n,t){return t-=n=+n,function(e){return n+t*e}}function dr(n,t){var e,r=[],i=[],u=ua.transform(n),a=ua.transform(t),o=u.translate,c=a.translate,l=u.rotate,f=a.rotate,s=u.skew,h=a.skew,g=u.scale,p=a.scale;return o[0]!=c[0]||o[1]!=c[1]?(r.push("translate(",null,",",null,")"),i.push({i:1,x:pr(o[0],c[0])},{i:3,x:pr(o[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),l!=f?(l-f>180?f+=360:f-l>180&&(l+=360),i.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:pr(l,f)})):f&&r.push(r.pop()+"rotate("+f+")"),s!=h?i.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:pr(s,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),i.push({i:e-4,x:pr(g[0],p[0])},{i:e-2,x:pr(g[1],p[1])})):(p[0]!=1||p[1]!=1)&&r.push(r.pop()+"scale("+p+")"),e=i.length,function(n){for(var t,u=-1;++u<e;)r[(t=i[u]).i]=t.x(n);return r.join("")}}function mr(n,t){var e,r={},i={};for(e in n)e in t?r[e]=Mr(e)(n[e],t[e]):i[e]=n[e];for(e in t)e in n||(i[e]=t[e]);return function(n){for(e in r)i[e]=r[e](n);return i}}function vr(n,t){var e,r,i,u,a,o=0,c=0,l=[],f=[];for(n+="",t+="",Oo.lastIndex=0,r=0;e=Oo.exec(t);++r)e.index&&l.push(t.substring(o,c=e.index)),f.push({i:l.length,x:e[0]}),l.push(null),o=Oo.lastIndex;for(o<t.length&&l.push(t.substring(o)),r=0,u=f.length;(e=Oo.exec(n))&&u>r;++r)if(a=f[r],a.x==e[0]){if(a.i)if(l[a.i+1]==null)for(l[a.i-1]+=a.x,l.splice(a.i,1),i=r+1;u>i;++i)f[i].i--;else for(l[a.i-1]+=a.x+l[a.i+1],l.splice(a.i,2),i=r+1;u>i;++i)f[i].i-=2;else if(l[a.i+1]==null)l[a.i]=a.x;else for(l[a.i]=a.x+l[a.i+1],l.splice(a.i+1,1),i=r+1;u>i;++i)f[i].i--;f.splice(r,1),u--,r--}else a.x=pr(parseFloat(e[0]),parseFloat(a.x));for(;u>r;)a=f.pop(),l[a.i+1]==null?l[a.i]=a.x:(l[a.i]=a.x+l[a.i+1],l.splice(a.i+1,1)),u--;return l.length===1?l[0]==null?(a=f[0].x,function(n){return a(n)+""}):function(){return t}:function(n){for(r=0;u>r;++r)l[(a=f[r]).i]=a.x(n);return l.join("")}}function yr(n,t){for(var e,r=ua.interpolators.length;--r>=0&&!(e=ua.interpolators[r](n,t)););return e}function Mr(n){return"transform"==n?dr:yr}function xr(n,t){var e,r=[],i=[],u=n.length,a=t.length,o=Math.min(n.length,t.length);for(e=0;o>e;++e)r.push(yr(n[e],t[e]));for(;u>e;++e)i[e]=n[e];for(;a>e;++e)i[e]=t[e];return function(n){for(e=0;o>e;++e)i[e]=r[e](n);return i}}function br(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function _r(n){return function(t){return 1-n(1-t)}}function wr(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function Sr(n){return n*n}function Er(n){return n*n*n}function kr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Ar(n){return function(t){return Math.pow(t,n)}}function Nr(n){return 1-Math.cos(n*Da/2)}function qr(n){return Math.pow(2,10*(n-1))}function Tr(n){return 1-Math.sqrt(1-n*n)}function Cr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/(2*Da)*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,10*-r)*Math.sin(2*(r-e)*Da/t)}}function zr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Dr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function jr(n,t){n=ua.hcl(n),t=ua.hcl(t);var e=n.h,r=n.c,i=n.l,u=t.h-e,a=t.c-r,o=t.l-i;return isNaN(a)&&(a=0,r=isNaN(r)?t.c:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return B(e+u*n,r+a*n,i+o*n)+""}}function Lr(n,t){n=ua.hsl(n),t=ua.hsl(t);var e=n.h,r=n.s,i=n.l,u=t.h-e,a=t.s-r,o=t.l-i;return isNaN(a)&&(a=0,r=isNaN(r)?t.s:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return P(e+u*n,r+a*n,i+o*n)+""}}function Fr(n,t){n=ua.lab(n),t=ua.lab(t);var e=n.l,r=n.a,i=n.b,u=t.l-e,a=t.a-r,o=t.b-i;return function(n){return G(e+u*n,r+a*n,i+o*n)+""}}function Hr(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Pr(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return(e-n)*t}}function Rr(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return Math.max(0,Math.min(1,(e-n)*t))}}function Or(n){for(var t=n.source,e=n.target,r=Ur(t,e),i=[t];t!==r;)t=t.parent,i.push(t);for(var u=i.length;e!==r;)i.splice(u,0,e),e=e.parent;return i}function Yr(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Ur(n,t){if(n===t)return n;for(var e=Yr(n),r=Yr(t),i=e.pop(),u=r.pop(),a=null;i===u;)a=i,i=e.pop(),u=r.pop();return a}function Ir(n){n.fixed|=2}function Vr(n){n.fixed&=-7}function Xr(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Zr(n){n.fixed&=-5}function Br(n,t,e){var r=0,i=0;if(n.charge=0,!n.leaf)for(var u,a=n.nodes,o=a.length,c=-1;++c<o;)u=a[c],null!=u&&(Br(u,t,e),n.charge+=u.charge,r+=u.charge*u.cx,i+=u.charge*u.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var l=t*e[n.point.index];n.charge+=n.pointCharge=l,r+=l*n.point.x,i+=l*n.point.y}n.cx=r/n.charge,n.cy=i/n.charge}function $r(n,t){return ua.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=Wr,n}function Jr(n){return n.children}function Gr(n){return n.value}function Kr(n,t){return t.value-n.value}function Wr(n){return ua.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function Qr(n){return n.x}function ni(n){return n.y}function ti(n,t,e){n.y0=t,n.y=e}function ei(n){return ua.range(n.length)}function ri(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function ii(n){for(var t,e=1,r=0,i=n[0][1],u=n.length;u>e;++e)(t=n[e][1])>i&&(r=e,i=t);return r}function ui(n){return n.reduce(ai,0)}function ai(n,t){return n+t[1]}function oi(n,t){return ci(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function ci(n,t){for(var e=-1,r=+n[0],i=(n[1]-r)/t,u=[];++e<=t;)u[e]=i*e+r;return u}function li(n){return[ua.min(n),ua.max(n)]}function fi(n,t){return n.parent==t.parent?1:2}function si(n){var t=n.children;return t&&t.length?t[0]:n._tree.thread}function hi(n){var t,e=n.children;return e&&(t=e.length)?e[t-1]:n._tree.thread}function gi(n,t){var e=n.children;if(e&&(i=e.length))for(var r,i,u=-1;++u<i;)t(r=gi(e[u],t),n)>0&&(n=r);return n}function pi(n,t){return n.x-t.x}function di(n,t){return t.x-n.x}function mi(n,t){return n.depth-t.depth}function vi(n,t){function e(n,r){var i=n.children;if(i&&(a=i.length))for(var u,a,o=null,c=-1;++c<a;)u=i[c],e(u,o),o=u;t(n,r)}e(n,null)}function yi(n){for(var t,e=0,r=0,i=n.children,u=i.length;--u>=0;)t=i[u]._tree,t.prelim+=e,t.mod+=e,e+=t.shift+(r+=t.change)}function Mi(n,t,e){n=n._tree,t=t._tree;var r=e/(t.number-n.number);n.change+=r,t.change-=r,t.shift+=e,t.prelim+=e,t.mod+=e}function xi(n,t,e){return n._tree.ancestor.parent==t.parent?n._tree.ancestor:e}function bi(n,t){return n.value-t.value}function _i(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function wi(n,t){n._pack_next=t,t._pack_prev=n}function Si(n,t){var e=t.x-n.x,r=t.y-n.y,i=n.r+t.r;return i*i-e*e-r*r>.001}function Ei(n){function t(n){f=Math.min(n.x-n.r,f),s=Math.max(n.x+n.r,s),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(l=e.length)){var e,r,i,u,a,o,c,l,f=1/0,s=-1/0,h=1/0,g=-1/0;if(e.forEach(ki),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(i=e[1],i.x=i.r,i.y=0,t(i),l>2))for(u=e[2],qi(r,i,u),t(u),_i(r,u),r._pack_prev=u,_i(u,i),i=r._pack_next,a=3;l>a;a++){qi(r,i,u=e[a]);var p=0,d=1,m=1;for(o=i._pack_next;o!==i;o=o._pack_next,d++)if(Si(o,u)){p=1;break}if(1==p)for(c=r._pack_prev;c!==o._pack_prev&&!Si(c,u);c=c._pack_prev,m++);p?(m>d||d==m&&i.r<r.r?wi(r,i=o):wi(r=c,i),a--):(_i(r,u),i=u,t(u))}var v=(f+s)/2,y=(h+g)/2,M=0;for(a=0;l>a;a++)u=e[a],u.x-=v,u.y-=y,M=Math.max(M,u.r+Math.sqrt(u.x*u.x+u.y*u.y));n.r=M,e.forEach(Ai)}}function ki(n){n._pack_next=n._pack_prev=n}function Ai(n){delete n._pack_next,delete n._pack_prev}function Ni(n,t,e,r){var i=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,i)for(var u=-1,a=i.length;++u<a;)Ni(i[u],t,e,r)}function qi(n,t,e){var r=n.r+e.r,i=t.x-n.x,u=t.y-n.y;if(r&&(i||u)){var a=t.r+e.r,o=i*i+u*u;a*=a,r*=r;var c=.5+(r-a)/(2*o),l=Math.sqrt(Math.max(0,2*a*(r+o)-(r-=o)*r-a*a))/(2*o);e.x=n.x+c*i+l*u,e.y=n.y+c*u-l*i}else e.x=n.x+r,e.y=n.y}function Ti(n){return 1+ua.max(n,function(n){return n.y})}function Ci(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function zi(n){var t=n.children;return t&&t.length?zi(t[0]):n}function Di(n){var t,e=n.children;return e&&(t=e.length)?Di(e[t-1]):n}function ji(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Li(n,t){var e=n.x+t[3],r=n.y+t[0],i=n.dx-t[1]-t[3],u=n.dy-t[0]-t[2];return 0>i&&(e+=i/2,i=0),0>u&&(r+=u/2,u=0),{x:e,y:r,dx:i,dy:u}}function Fi(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Hi(n){return n.rangeExtent?n.rangeExtent():Fi(n.range())}function Pi(n,t,e,r){var i=e(n[0],n[1]),u=r(t[0],t[1]);return function(n){return u(i(n))}}function Ri(n,t){var e,r=0,i=n.length-1,u=n[r],a=n[i];return u>a&&(e=r,r=i,i=e,e=u,u=a,a=e),(t=t(a-u))&&(n[r]=t.floor(u),n[i]=t.ceil(a)),n}function Oi(n,t,e,r){var i=[],u=[],a=0,o=Math.min(n.length,t.length)-1;for(n[o]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<=o;)i.push(e(n[a-1],n[a])),u.push(r(t[a-1],t[a]));return function(t){var e=ua.bisect(n,t,1,o)-1;return u[e](i[e](t))}}function Yi(n,t,e,r){function i(){var i=Math.min(n.length,t.length)>2?Oi:Pi,c=r?Rr:Pr;return a=i(n,t,c,e),o=i(t,n,c,yr),u}function u(n){return a(n)}var a,o;return u.invert=function(n){return o(n)},u.domain=function(t){return arguments.length?(n=t.map(Number),i()):n},u.range=function(n){return arguments.length?(t=n,i()):t},u.rangeRound=function(n){return u.range(n).interpolate(Hr)},u.clamp=function(n){return arguments.length?(r=n,i()):r},u.interpolate=function(n){return arguments.length?(e=n,i()):e},u.ticks=function(t){return Xi(n,t)},u.tickFormat=function(t,e){return Zi(n,t,e)},u.nice=function(){return Ri(n,Ii),i()},u.copy=function(){return Yi(n,t,e,r)},i()}function Ui(n,t){return ua.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Ii(n){return n=Math.pow(10,Math.round(Math.log(n)/Math.LN10)-1),n&&{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}}function Vi(n,t){var e=Fi(n),r=e[1]-e[0],i=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),u=t/r*i;return.15>=u?i*=10:.35>=u?i*=5:.75>=u&&(i*=2),e[0]=Math.ceil(e[0]/i)*i,e[1]=Math.floor(e[1]/i)*i+.5*i,e[2]=i,e}function Xi(n,t){return ua.range.apply(ua,Vi(n,t))}function Zi(n,t,e){var r=-Math.floor(Math.log(Vi(n,t)[2])/Math.LN10+.01);return ua.format(e?e.replace(no,function(n,t,e,i,u,a,o,c,l,f){return[t,e,i,u,a,o,c,l||"."+(r-2*("%"===f)),f].join("")}):",."+r+"f")}function Bi(n,t,e,r,i){function u(t){return n(e(t))}function a(){return e===$i?{floor:o,ceil:c}:{floor:function(n){return-c(-n)},ceil:function(n){return-o(-n)}}}function o(n){return Math.pow(t,Math.floor(Math.log(n)/Math.log(t)))}function c(n){return Math.pow(t,Math.ceil(Math.log(n)/Math.log(t)))}return u.invert=function(t){return r(n.invert(t))},u.domain=function(t){return arguments.length?(t[0]<0?(e=Gi,r=Ki):(e=$i,r=Ji),n.domain((i=t.map(Number)).map(e)),u):i},u.base=function(n){return arguments.length?(t=+n,u):t},u.nice=function(){return n.domain(Ri(i,a).map(e)),u},u.ticks=function(){var i=Fi(n.domain()),u=[];if(i.every(isFinite)){var a=Math.log(t),o=Math.floor(i[0]/a),c=Math.ceil(i[1]/a),l=r(i[0]),f=r(i[1]),s=t%1?2:t;if(e===Gi)for(u.push(-Math.pow(t,-o));o++<c;)for(var h=s-1;h>0;h--)u.push(-Math.pow(t,-o)*h);else{for(;c>o;o++)for(var h=1;s>h;h++)u.push(Math.pow(t,o)*h);u.push(Math.pow(t,o))}for(o=0;u[o]<l;o++);for(c=u.length;u[c-1]>f;c--);u=u.slice(o,c)}return u},u.tickFormat=function(n,i){if(arguments.length<2&&(i=Jo),!arguments.length)return i;var a,o=Math.log(t),c=Math.max(.1,n/u.ticks().length),l=e===Gi?(a=-1e-12,Math.floor):(a=1e-12,Math.ceil);return function(n){return n/r(o*l(e(n)/o+a))<=c?i(n):""}},u.copy=function(){return Bi(n.copy(),t,e,r,i)},Ui(u,n)}function $i(n){return Math.log(0>n?0:n)}function Ji(n){return Math.exp(n)}function Gi(n){return-Math.log(n>0?0:-n)}function Ki(n){return-Math.exp(-n)}function Wi(n,t,e){function r(t){return n(i(t))}var i=Qi(t),u=Qi(1/t);return r.invert=function(t){return u(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(i)),r):e},r.ticks=function(n){return Xi(e,n)},r.tickFormat=function(n,t){return Zi(e,n,t)},r.nice=function(){return r.domain(Ri(e,Ii))},r.exponent=function(a){return arguments.length?(i=Qi(t=a),u=Qi(1/t),n.domain(e.map(i)),r):t},r.copy=function(){return Wi(n.copy(),t,e)},Ui(r,n)}function Qi(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function nu(n,t){function e(t){return a[((u.get(t)||u.set(t,n.push(t)))-1)%a.length]}function r(t,e){return ua.range(n.length).map(function(n){return t+e*n})}var u,a,o;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new i;for(var a,o=-1,c=r.length;++o<c;)u.has(a=r[o])||u.set(a,n.push(a));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(a=n,o=0,t={t:"range",a:arguments},e):a},e.rangePoints=function(i,u){arguments.length<2&&(u=0);var c=i[0],l=i[1],f=(l-c)/(Math.max(1,n.length-1)+u);return a=r(n.length<2?(c+l)/2:c+f*u/2,f),o=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(i,u,c){arguments.length<2&&(u=0),arguments.length<3&&(c=u);var l=i[1]<i[0],f=i[l-0],s=i[1-l],h=(s-f)/(n.length-u+2*c);return a=r(f+h*c,h),l&&a.reverse(),o=h*(1-u),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(i,u,c){arguments.length<2&&(u=0),arguments.length<3&&(c=u);var l=i[1]<i[0],f=i[l-0],s=i[1-l],h=Math.floor((s-f)/(n.length-u+2*c)),g=s-f-(n.length-u)*h;return a=r(f+Math.round(g/2),h),l&&a.reverse(),o=Math.round(h*(1-u)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Fi(t.a[0])},e.copy=function(){return nu(n,t)},e.domain(n)}function tu(n,t){function e(){var e=0,u=t.length;for(i=[];++e<u;)i[e-1]=ua.quantile(n,e/u);return r}function r(n){return isNaN(n=+n)?0/0:t[ua.bisect(i,n)]}var i;return r.domain=function(t){return arguments.length?(n=t.filter(function(n){return!isNaN(n)}).sort(ua.ascending),e()):n},r.range=function(n){return arguments.length?(t=n,e()):t},r.quantiles=function(){return i},r.copy=function(){return tu(n,t)},e()}function eu(n,t,e){function r(t){return e[Math.max(0,Math.min(a,Math.floor(u*(t-n))))]}function i(){return u=e.length/(t-n),a=e.length-1,r}var u,a;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],i()):[n,t]},r.range=function(n){return arguments.length?(e=n,i()):e},r.copy=function(){return eu(n,t,e)},i()}function ru(n,t){function e(e){return t[ua.bisect(n,e)]}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.copy=function(){return ru(n,t)},e}function iu(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Xi(n,t)},t.tickFormat=function(t,e){return Zi(n,t,e)},t.copy=function(){return iu(n)},t}function uu(n){return n.innerRadius}function au(n){return n.outerRadius}function ou(n){return n.startAngle}function cu(n){return n.endAngle}function lu(n){for(var t,e,r,i=-1,u=n.length;++i<u;)t=n[i],e=t[0],r=t[1]+nc,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function fu(n){function t(t){function c(){d.push("M",o(n(v),s),f,l(n(m.reverse()),s),"Z")}for(var h,g,p,d=[],m=[],v=[],y=-1,M=t.length,x=lt(e),b=lt(i),_=e===r?function(){return g}:lt(r),w=i===u?function(){return p}:lt(u);++y<M;)a.call(this,h=t[y],y)?(m.push([g=+x.call(this,h,y),p=+b.call(this,h,y)]),v.push([+_.call(this,h,y),+w.call(this,h,y)])):m.length&&(c(),m=[],v=[]);return m.length&&c(),d.length?d.join(""):null}var e=je,r=je,i=0,u=Le,a=Ht,o=Fe,c=o.key,l=o,f="L",s=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(i=u=n,t):u},t.y0=function(n){return arguments.length?(i=n,t):i},t.y1=function(n){return arguments.length?(u=n,t):u},t.defined=function(n){return arguments.length?(a=n,t):a},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?o=n:(o=jo.get(n)||Fe).key,l=o.reverse||o,f=o.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(s=n,t):s},t}function su(n){return n.radius}function hu(n){return[n.x,n.y]}function gu(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+nc;return[e*Math.cos(r),e*Math.sin(r)]}}function pu(){return 64}function du(){return"circle"}function mu(n){var t=Math.sqrt(n/Da);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function vu(n,t){return va(n,ac),n.id=t,n}function yu(n,t,e,r){var i=n.id;return D(n,"function"==typeof e?function(n,u,a){n.__transition__[i].tween.set(t,r(e.call(n,n.__data__,u,a)))}:(e=r(e),function(n){n.__transition__[i].tween.set(t,e)}))}function Mu(n){return null==n&&(n=""),function(){this.textContent=n}}function xu(n,t,e,r){var u=n.__transition__||(n.__transition__={active:0,count:0}),a=u[e];if(!a){var o=r.time;return a=u[e]={tween:new i,event:ua.dispatch("start","end"),time:o,ease:r.ease,delay:r.delay,duration:r.duration},++u.count,ua.timer(function(r){function i(r){return u.active>e?l():(u.active=e,h.start.call(n,f,t),a.tween.forEach(function(e,r){(r=r.call(n,f,t))&&d.push(r)}),c(r)||ua.timer(c,0,o),1)}function c(r){if(u.active!==e)return l();for(var i=(r-g)/p,a=s(i),o=d.length;o>0;)d[--o].call(n,a);return i>=1?(l(),h.end.call(n,f,t),1):void 0}function l(){return--u.count?delete u[e]:delete n.__transition__,1}var f=n.__data__,s=a.ease,h=a.event,g=a.delay,p=a.duration,d=[];return r>=g?i(r):ua.timer(i,g,o),1},0,o),a}}function bu(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function _u(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function wu(n,t,e){if(r=[],e&&t.length>1){for(var r,i,u,a=Fi(n.domain()),o=-1,c=t.length,l=(t[1]-t[0])/++e;++o<c;)for(i=e;--i>0;)(u=+t[o]-i*l)>=a[0]&&r.push(u);for(--o,i=0;++i<e&&(u=+t[o]+i*l)<a[1];)r.push(u)}return r}function Su(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Eu(n,t,e){function r(t){var e=n(t),r=u(e,1);return r-t>t-e?e:r}function i(e){return t(e=n(new gc(e-1)),1),e}function u(n,e){return t(n=new gc(+n),e),n}function a(n,r,u){var a=i(n),o=[];if(u>1)for(;r>a;)e(a)%u||o.push(new Date(+a)),t(a,1);else for(;r>a;)o.push(new Date(+a)),t(a,1);return o}function o(n,t,e){try{gc=Su;var r=new Su;return r._=n,a(r,t,e)}finally{gc=Date}}n.floor=n,n.round=r,n.ceil=i,n.offset=u,n.range=a;var c=n.utc=ku(n);return c.floor=c,c.round=ku(r),c.ceil=ku(i),c.offset=ku(u),c.range=o,n}function ku(n){return function(t,e){try{gc=Su;var r=new Su;return r._=t,n(r,e)._}finally{gc=Date}}}function Au(n,t,e,r){for(var i,u,a=0,o=t.length,c=e.length;o>a;){if(r>=c)return-1;if(i=t.charCodeAt(a++),37===i){if(u=Cc[t.charAt(a++)],!u||(r=u(n,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function Nu(n){return RegExp("^(?:"+n.map(ua.requote).join("|")+")","i")}function qu(n){for(var t=new i,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Tu(n,t,e){n+="";var r=n.length;return e>r?Array(e-r+1).join(t)+n:n}function Cu(n,t,e){Sc.lastIndex=0;var r=Sc.exec(t.substring(e));return r?e+=r[0].length:-1}function zu(n,t,e){wc.lastIndex=0;var r=wc.exec(t.substring(e));return r?e+=r[0].length:-1}function Du(n,t,e){Ac.lastIndex=0;var r=Ac.exec(t.substring(e));return r?(n.m=Nc.get(r[0].toLowerCase()),e+=r[0].length):-1}function ju(n,t,e){Ec.lastIndex=0;var r=Ec.exec(t.substring(e));return r?(n.m=kc.get(r[0].toLowerCase()),e+=r[0].length):-1}function Lu(n,t,e){return Au(n,""+Tc.c,t,e)}function Fu(n,t,e){return Au(n,""+Tc.x,t,e)}function Hu(n,t,e){return Au(n,""+Tc.X,t,e)}function Pu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+4));return r?(n.y=+r[0],e+=r[0].length):-1}function Ru(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+2));return r?(n.y=Ou(+r[0]),e+=r[0].length):-1}function Ou(n){return n+(n>68?1900:2e3)}function Yu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+2));return r?(n.m=r[0]-1,e+=r[0].length):-1}function Uu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+2));return r?(n.d=+r[0],e+=r[0].length):-1}function Iu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+2));return r?(n.H=+r[0],e+=r[0].length):-1}function Vu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+2));return r?(n.M=+r[0],e+=r[0].length):-1}function Xu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+2));return r?(n.S=+r[0],e+=r[0].length):-1}function Zu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+3));return r?(n.L=+r[0],e+=r[0].length):-1}function Bu(n,t,e){var r=Dc.get(t.substring(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}function $u(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=~~(Math.abs(t)/60),i=Math.abs(t)%60;return e+Tu(r,"0",2)+Tu(i,"0",2)}function Ju(n){return n.toISOString()}function Gu(n,t,e){function r(t){return n(t)}return r.invert=function(t){return Ku(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Ku)},r.nice=function(n){return r.domain(Ri(r.domain(),function(){return n}))},r.ticks=function(e,i){var u=Fi(r.domain());if("function"!=typeof e){var a=u[1]-u[0],o=a/e,c=ua.bisect(Lc,o);if(c==Lc.length)return t.year(u,e);if(!c)return n.ticks(e).map(Ku);Math.log(o/Lc[c-1])<Math.log(Lc[c]/o)&&--c,e=t[c],i=e[1],e=e[0].range}return e(u[0],new Date(+u[1]+1),i)},r.tickFormat=function(){return e},r.copy=function(){return Gu(n.copy(),t,e)},Ui(r,n)}function Ku(n){return new Date(n)}function Wu(n){return function(t){for(var e=n.length-1,r=n[e];!r[1](t);)r=n[--e];return r[0](t)}}function Qu(n){var t=new Date(n,0,1);return t.setFullYear(n),t}function na(n){var t=n.getFullYear(),e=Qu(t),r=Qu(t+1);return t+(n-e)/(r-e)}function ta(n){var t=new Date(Date.UTC(n,0,1));return t.setUTCFullYear(n),t}function ea(n){var t=n.getUTCFullYear(),e=ta(t),r=ta(t+1);return t+(n-e)/(r-e)}function ra(n){return JSON.parse(n.responseText)}function ia(n){var t=aa.createRange();return t.selectNode(aa.body),t.createContextualFragment(n.responseText)}var ua={version:"3.1.10"};Date.now||(Date.now=function(){return+new Date});var aa=document,oa=window;try{aa.createElement("div").style.setProperty("opacity",0,"")}catch(ca){var la=oa.CSSStyleDeclaration.prototype,fa=la.setProperty;la.setProperty=function(n,t,e){fa.call(this,n,t+"",e)}}ua.ascending=function(n,t){return t>n?-1:n>t?1:n>=t?0:0/0},ua.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},ua.min=function(n,t){var e,r,i=-1,u=n.length;if(arguments.length===1){for(;++i<u&&((e=n[i])==null||e!=e);)e=void 0;for(;++i<u;)(r=n[i])!=null&&e>r&&(e=r)}else{for(;++i<u&&((e=t.call(n,n[i],i))==null||e!=e);)e=void 0;for(;++i<u;)(r=t.call(n,n[i],i))!=null&&e>r&&(e=r)}return e},ua.max=function(n,t){var e,r,i=-1,u=n.length;if(arguments.length===1){for(;++i<u&&((e=n[i])==null||e!=e);)e=void 0;for(;++i<u;)(r=n[i])!=null&&r>e&&(e=r)}else{for(;++i<u&&((e=t.call(n,n[i],i))==null||e!=e);)e=void 0;for(;++i<u;)(r=t.call(n,n[i],i))!=null&&r>e&&(e=r)}return e},ua.extent=function(n,t){var e,r,i,u=-1,a=n.length;if(arguments.length===1){for(;++u<a&&((e=i=n[u])==null||e!=e);)e=i=void 0;for(;++u<a;)(r=n[u])!=null&&(e>r&&(e=r),r>i&&(i=r))}else{for(;++u<a&&((e=i=t.call(n,n[u],u))==null||e!=e);)e=void 0;for(;++u<a;)(r=t.call(n,n[u],u))!=null&&(e>r&&(e=r),r>i&&(i=r))}return[e,i]},ua.sum=function(n,t){var e,r=0,i=n.length,u=-1;if(arguments.length===1)for(;++u<i;)isNaN(e=+n[u])||(r+=e);else for(;++u<i;)isNaN(e=+t.call(n,n[u],u))||(r+=e);return r},ua.mean=function(t,e){var r,i=t.length,u=0,a=-1,o=0;if(arguments.length===1)for(;++a<i;)n(r=t[a])&&(u+=(r-u)/++o);else for(;++a<i;)n(r=e.call(t,t[a],a))&&(u+=(r-u)/++o);return o?u:void 0},ua.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),i=+n[r-1],u=e-r;return u?i+u*(n[r]-i):i},ua.median=function(t,e){return arguments.length>1&&(t=t.map(e)),t=t.filter(n),t.length?ua.quantile(t.sort(ua.ascending),.5):void 0},ua.bisector=function(n){return{left:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;n.call(t,t[u],u)<e?r=u+1:i=u}return r},right:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;e<n.call(t,t[u],u)?i=u:r=u+1}return r}}};var sa=ua.bisector(function(n){return n});ua.bisectLeft=sa.left,ua.bisect=ua.bisectRight=sa.right,ua.shuffle=function(n){for(var t,e,r=n.length;r;)e=Math.random()*r--|0,t=n[r],n[r]=n[e],n[e]=t;return n},ua.permute=function(n,t){for(var e=[],r=-1,i=t.length;++r<i;)e[r]=n[t[r]];return e},ua.zip=function(){if(!(i=arguments.length))return[];for(var n=-1,e=ua.min(arguments,t),r=Array(e);++n<e;)for(var i,u=-1,a=r[n]=Array(i);++u<i;)a[u]=arguments[u][n];return r},ua.transpose=function(n){return ua.zip.apply(ua,n)},ua.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ua.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ua.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ua.merge=function(n){return Array.prototype.concat.apply([],n)},ua.range=function(n,t,r){if(arguments.length<3&&(r=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/r)throw Error("infinite range");var i,u=[],a=e(Math.abs(r)),o=-1;if(n*=a,t*=a,r*=a,0>r)for(;(i=n+r*++o)>t;)u.push(i/a);else for(;(i=n+r*++o)<t;)u.push(i/a);return u},ua.map=function(n){var t=new i;for(var e in n)t.set(e,n[e]);return t},r(i,{has:function(n){return ha+n in this},get:function(n){return this[ha+n]},set:function(n,t){return this[ha+n]=t},remove:function(n){return n=ha+n,n in this&&delete this[n]},keys:function(){var n=[];return this.forEach(function(t){n.push(t)}),n},values:function(){var n=[];return this.forEach(function(t,e){n.push(e)}),n},entries:function(){var n=[];return this.forEach(function(t,e){n.push({key:t,value:e})}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===ga&&n.call(this,t.substring(1),this[t])}});var ha="\0",ga=ha.charCodeAt(0);ua.nest=function(){function n(t,o,c){if(c>=a.length)return r?r.call(u,o):e?o.sort(e):o;for(var l,f,s,h,g=-1,p=o.length,d=a[c++],m=new i;++g<p;)(h=m.get(l=d(f=o[g])))?h.push(f):m.set(l,[f]);return t?(f=t(),s=function(e,r){f.set(e,n(t,r,c))}):(f={},s=function(e,r){f[e]=n(t,r,c)}),m.forEach(s),f}function t(n,e){if(e>=a.length)return n;var r=[],i=o[e++];return n.forEach(function(n,i){r.push({key:n,values:t(i,e)})}),i?r.sort(function(n,t){return i(n.key,t.key)}):r}var e,r,u={},a=[],o=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(ua.map,e,0),0)},u.key=function(n){return a.push(n),u},u.sortKeys=function(n){return o[a.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},ua.set=function(n){var t=new u;if(n)for(var e=0;e<n.length;e++)t.add(n[e]);return t},r(u,{has:function(n){return ha+n in this
},add:function(n){return this[ha+n]=!0,n},remove:function(n){return n=ha+n,n in this&&delete this[n]},values:function(){var n=[];return this.forEach(function(t){n.push(t)}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===ga&&n.call(this,t.substring(1))}}),ua.behavior={},ua.rebind=function(n,t){for(var e,r=1,i=arguments.length;++r<i;)n[e=arguments[r]]=a(n,t,t[e]);return n},ua.dispatch=function(){for(var n=new o,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=c(n);return n},o.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.substring(e+1),n=n.substring(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(arguments.length===2){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ua.event=null,ua.mouse=function(n){return g(n,f())};var pa=/WebKit/.test(oa.navigator.userAgent)?-1:0,da=d;try{da(aa.documentElement.childNodes)[0].nodeType}catch(ma){da=p}var va=[].__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]};ua.touches=function(n,t){return arguments.length<2&&(t=f().touches),t?da(t).map(function(t){var e=g(n,t);return e.identifier=t.identifier,e}):[]},ua.behavior.drag=function(){function n(){this.on("mousedown.drag",t).on("touchstart.drag",t)}function t(){function n(){var n=a.parentNode;return null!=f?ua.touches(n).filter(function(n){return n.identifier===f})[0]:ua.mouse(n)}function t(){if(!a.parentNode)return i();var t=n(),e=t[0]-h[0],r=t[1]-h[1];g|=e|r,h=t,l(),o({type:"drag",x:t[0]+u[0],y:t[1]+u[1],dx:e,dy:r})}function i(){o({type:"dragend"}),g&&(l(),ua.event.target===c&&s(p,"click")),p.on(null!=f?"touchmove.drag-"+f:"mousemove.drag",null).on(null!=f?"touchend.drag-"+f:"mouseup.drag",null)}var u,a=this,o=e.of(a,arguments),c=ua.event.target,f=ua.event.touches?ua.event.changedTouches[0].identifier:null,h=n(),g=0,p=ua.select(oa).on(null!=f?"touchmove.drag-"+f:"mousemove.drag",t).on(null!=f?"touchend.drag-"+f:"mouseup.drag",i,!0);r?(u=r.apply(a,arguments),u=[u.x-h[0],u.y-h[1]]):u=[0,0],null==f&&l(),o({type:"dragstart"})}var e=h(n,"drag","dragstart","dragend"),r=null;return n.origin=function(t){return arguments.length?(r=t,n):r},ua.rebind(n,e,"on")};var ya=function(n,t){return t.querySelector(n)},Ma=function(n,t){return t.querySelectorAll(n)},xa=aa.documentElement,ba=xa.matchesSelector||xa.webkitMatchesSelector||xa.mozMatchesSelector||xa.msMatchesSelector||xa.oMatchesSelector,_a=function(n,t){return ba.call(n,t)};"function"==typeof Sizzle&&(ya=function(n,t){return Sizzle(n,t)[0]||null},Ma=function(n,t){return Sizzle.uniqueSort(Sizzle(n,t))},_a=Sizzle.matchesSelector),ua.selection=function(){return Na};var wa=ua.selection.prototype=[];wa.select=function(n){var t,e,r,i,u=[];"function"!=typeof n&&(n=v(n));for(var a=-1,o=this.length;++a<o;){u.push(t=[]),t.parentNode=(r=this[a]).parentNode;for(var c=-1,l=r.length;++c<l;)(i=r[c])?(t.push(e=n.call(i,i.__data__,c)),e&&"__data__"in i&&(e.__data__=i.__data__)):t.push(null)}return m(u)},wa.selectAll=function(n){var t,e,r=[];"function"!=typeof n&&(n=y(n));for(var i=-1,u=this.length;++i<u;)for(var a=this[i],o=-1,c=a.length;++o<c;)(e=a[o])&&(r.push(t=da(n.call(e,e.__data__,o))),t.parentNode=e);return m(r)};var Sa={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};ua.ns={prefix:Sa,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.substring(0,t),n=n.substring(t+1)),Sa.hasOwnProperty(e)?{space:Sa[e],local:n}:n}},wa.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=ua.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(M(t,n[t]));return this}return this.each(M(n,t))},ua.requote=function(n){return n.replace(Ea,"\\$&")};var Ea=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;wa.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=n.trim().split(/^|\s+/g)).length,i=-1;if(t=e.classList){for(;++i<r;)if(!t.contains(n[i]))return!1}else for(t=e.getAttribute("class");++i<r;)if(!b(n[i]).test(t))return!1;return!0}for(t in n)this.each(_(t,n[t]));return this}return this.each(_(n,t))},wa.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(S(e,n[e],t));return this}if(2>r)return oa.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(S(n,t,e))},wa.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(E(t,n[t]));return this}return this.each(E(n,t))},wa.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},wa.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},wa.append=function(n){function t(){return this.appendChild(aa.createElementNS(this.namespaceURI,n))}function e(){return this.appendChild(aa.createElementNS(n.space,n.local))}return n=ua.ns.qualify(n),this.select(n.local?e:t)},wa.insert=function(n,t){function e(e,r){return this.insertBefore(aa.createElementNS(this.namespaceURI,n),t.call(this,e,r))}function r(e,r){return this.insertBefore(aa.createElementNS(n.space,n.local),t.call(this,e,r))}return n=ua.ns.qualify(n),"function"!=typeof t&&(t=v(t)),this.select(n.local?r:e)},wa.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},wa.data=function(n,t){function e(n,e){var r,u,a,o=n.length,s=e.length,h=Math.min(o,s),g=Array(s),p=Array(s),d=Array(o);if(t){var m,v=new i,y=new i,M=[];for(r=-1;++r<o;)m=t.call(u=n[r],u.__data__,r),v.has(m)?d[r]=u:v.set(m,u),M.push(m);for(r=-1;++r<s;)m=t.call(e,a=e[r],r),(u=v.get(m))?(g[r]=u,u.__data__=a):y.has(m)||(p[r]=k(a)),y.set(m,a),v.remove(m);for(r=-1;++r<o;)v.has(M[r])&&(d[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],a=e[r],u?(u.__data__=a,g[r]=u):p[r]=k(a);for(;s>r;++r)p[r]=k(e[r]);for(;o>r;++r)d[r]=n[r]}p.update=g,p.parentNode=g.parentNode=d.parentNode=n.parentNode,c.push(p),l.push(g),f.push(d)}var r,u,a=-1,o=this.length;if(!arguments.length){for(n=Array(o=(r=this[0]).length);++a<o;)(u=r[a])&&(n[a]=u.__data__);return n}var c=j([]),l=m([]),f=m([]);if("function"==typeof n)for(;++a<o;)e(r=this[a],n.call(r,r.parentNode.__data__,a));else for(;++a<o;)e(r=this[a],n);return l.enter=function(){return c},l.exit=function(){return f},l},wa.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},wa.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=A(n));for(var u=0,a=this.length;a>u;u++){i.push(t=[]),t.parentNode=(e=this[u]).parentNode;for(var o=0,c=e.length;c>o;o++)(r=e[o])&&n.call(r,r.__data__,o)&&t.push(r)}return m(i)},wa.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],i=r.length-1,u=r[i];--i>=0;)(e=r[i])&&(u&&u!==e.nextSibling&&u.parentNode.insertBefore(e,u),u=e);return this},wa.sort=function(n){n=N.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},wa.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(T(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(T(n,t,e))};var ka=ua.map({mouseenter:"mouseover",mouseleave:"mouseout"});ka.forEach(function(n){"on"+n in aa&&ka.remove(n)}),wa.each=function(n){return D(this,function(t,e,r){n.call(t,t.__data__,e,r)})},wa.call=function(n){var t=da(arguments);return n.apply(t[0]=this,t),this},wa.empty=function(){return!this.node()},wa.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,i=e.length;i>r;r++){var u=e[r];if(u)return u}return null};var Aa=[];ua.selection.enter=j,ua.selection.enter.prototype=Aa,Aa.append=wa.append,Aa.insert=wa.insert,Aa.empty=wa.empty,Aa.node=wa.node,Aa.select=function(n){for(var t,e,r,i,u,a=[],o=-1,c=this.length;++o<c;){r=(i=this[o]).update,a.push(t=[]),t.parentNode=i.parentNode;for(var l=-1,f=i.length;++l<f;)(u=i[l])?(t.push(r[l]=e=n.call(i.parentNode,u.__data__,l)),e.__data__=u.__data__):t.push(null)}return m(a)},wa.transition=function(){var n,t,e=rc||++oc,r=[],i=Object.create(cc);i.time=Date.now();for(var u=-1,a=this.length;++u<a;){r.push(n=[]);for(var o=this[u],c=-1,l=o.length;++c<l;)(t=o[c])&&xu(t,c,e,i),n.push(t)}return vu(r,e)},ua.select=function(n){var t=["string"==typeof n?ya(n,aa):n];return t.parentNode=xa,m([t])},ua.selectAll=function(n){var t=da("string"==typeof n?Ma(n,aa):n);return t.parentNode=xa,m([t])};var Na=ua.select(xa);ua.behavior.zoom=function(){function n(){this.on("mousedown.zoom",o).on("mousemove.zoom",f).on(Ca+".zoom",c).on("dblclick.zoom",g).on("touchstart.zoom",p).on("touchmove.zoom",d).on("touchend.zoom",p)}function t(n){return[(n[0]-w[0])/S,(n[1]-w[1])/S]}function e(n){return[n[0]*S+w[0],n[1]*S+w[1]]}function r(n){S=Math.max(E[0],Math.min(E[1],n))}function i(n,t){t=e(t),w[0]+=n[0]-t[0],w[1]+=n[1]-t[1]}function u(){M&&M.domain(y.range().map(function(n){return(n-w[0])/S}).map(y.invert)),b&&b.domain(x.range().map(function(n){return(n-w[1])/S}).map(x.invert))}function a(n){u(),ua.event.preventDefault(),n({type:"zoom",scale:S,translate:w})}function o(){function n(){c=1,i(ua.mouse(r),h),a(u)}function e(){c&&l(),f.on("mousemove.zoom",null).on("mouseup.zoom",null),c&&ua.event.target===o&&s(f,"click.zoom")}var r=this,u=k.of(r,arguments),o=ua.event.target,c=0,f=ua.select(oa).on("mousemove.zoom",n).on("mouseup.zoom",e),h=t(ua.mouse(r));oa.focus(),l()}function c(){m||(m=t(ua.mouse(this))),r(Math.pow(2,qa()*.002)*S),i(ua.mouse(this),m),a(k.of(this,arguments))}function f(){m=null}function g(){var n=ua.mouse(this),e=t(n),u=Math.log(S)/Math.LN2;r(Math.pow(2,ua.event.shiftKey?Math.ceil(u)-1:Math.floor(u)+1)),i(n,e),a(k.of(this,arguments))}function p(){var n=ua.touches(this),e=Date.now();if(v=S,m={},n.forEach(function(n){m[n.identifier]=t(n)}),l(),n.length===1){if(500>e-_){var u=n[0],o=t(n[0]);r(2*S),i(u,o),a(k.of(this,arguments))}_=e}}function d(){var n=ua.touches(this),t=n[0],e=m[t.identifier];if(u=n[1]){var u,o=m[u.identifier];t=[(t[0]+u[0])/2,(t[1]+u[1])/2],e=[(e[0]+o[0])/2,(e[1]+o[1])/2],r(ua.event.scale*v)}i(t,e),_=null,a(k.of(this,arguments))}var m,v,y,M,x,b,_,w=[0,0],S=1,E=Ta,k=h(n,"zoom");return n.translate=function(t){return arguments.length?(w=t.map(Number),u(),n):w},n.scale=function(t){return arguments.length?(S=+t,u(),n):S},n.scaleExtent=function(t){return arguments.length?(E=null==t?Ta:t.map(Number),n):E},n.x=function(t){return arguments.length?(M=t,y=t.copy(),w=[0,0],S=1,n):M},n.y=function(t){return arguments.length?(b=t,x=t.copy(),w=[0,0],S=1,n):b},ua.rebind(n,k,"on")};var qa,Ta=[0,1/0],Ca="onwheel"in aa?(qa=function(){return-ua.event.deltaY*(ua.event.deltaMode?120:1)},"wheel"):"onmousewheel"in aa?(qa=function(){return ua.event.wheelDelta},"mousewheel"):(qa=function(){return-ua.event.detail},"MozMousePixelScroll");L.prototype.toString=function(){return this.rgb()+""},ua.hsl=function(n,t,e){return arguments.length===1?n instanceof H?F(n.h,n.s,n.l):it(""+n,ut,F):F(+n,+t,+e)};var za=H.prototype=new L;za.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),F(this.h,this.s,this.l/n)},za.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),F(this.h,this.s,n*this.l)},za.rgb=function(){return P(this.h,this.s,this.l)};var Da=Math.PI,ja=1e-6,La=Da/180,Fa=180/Da;ua.hcl=function(n,t,e){return arguments.length===1?n instanceof Z?X(n.h,n.c,n.l):n instanceof J?K(n.l,n.a,n.b):K((n=at((n=ua.rgb(n)).r,n.g,n.b)).l,n.a,n.b):X(+n,+t,+e)};var Ha=Z.prototype=new L;Ha.brighter=function(n){return X(this.h,this.c,Math.min(100,this.l+Pa*(arguments.length?n:1)))},Ha.darker=function(n){return X(this.h,this.c,Math.max(0,this.l-Pa*(arguments.length?n:1)))},Ha.rgb=function(){return B(this.h,this.c,this.l).rgb()},ua.lab=function(n,t,e){return arguments.length===1?n instanceof J?$(n.l,n.a,n.b):n instanceof Z?B(n.l,n.c,n.h):at((n=ua.rgb(n)).r,n.g,n.b):$(+n,+t,+e)};var Pa=18,Ra=.95047,Oa=1,Ya=1.08883,Ua=J.prototype=new L;Ua.brighter=function(n){return $(Math.min(100,this.l+Pa*(arguments.length?n:1)),this.a,this.b)},Ua.darker=function(n){return $(Math.max(0,this.l-Pa*(arguments.length?n:1)),this.a,this.b)},Ua.rgb=function(){return G(this.l,this.a,this.b)},ua.rgb=function(n,t,e){return arguments.length===1?n instanceof et?tt(n.r,n.g,n.b):it(""+n,tt,P):tt(~~n,~~t,~~e)};var Ia=et.prototype=new L;Ia.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,i=30;return t||e||r?(t&&i>t&&(t=i),e&&i>e&&(e=i),r&&i>r&&(r=i),tt(Math.min(255,Math.floor(t/n)),Math.min(255,Math.floor(e/n)),Math.min(255,Math.floor(r/n)))):tt(i,i,i)},Ia.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),tt(Math.floor(n*this.r),Math.floor(n*this.g),Math.floor(n*this.b))},Ia.hsl=function(){return ut(this.r,this.g,this.b)},Ia.toString=function(){return"#"+rt(this.r)+rt(this.g)+rt(this.b)};var Va=ua.map({aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"});Va.forEach(function(n,t){Va.set(n,it(t,tt,P))}),ua.functor=lt,ua.xhr=st(ft),ua.csv=pt(",","text/csv"),ua.tsv=pt("	","text/tab-separated-values");var Xa,Za,Ba,$a;ua.timer=function(n,t,e){if(arguments.length<3){if(arguments.length<2)t=0;else if(!isFinite(t))return;e=Date.now()}var r=e+t,i={callback:n,time:r,next:null};Za?Za.next=i:Xa=i,Za=i,Ba||($a=clearTimeout($a),Ba=1,Ja(dt))},ua.timer.flush=function(){mt(),vt()};var Ja=oa.requestAnimationFrame||oa.webkitRequestAnimationFrame||oa.mozRequestAnimationFrame||oa.oRequestAnimationFrame||oa.msRequestAnimationFrame||function(n){setTimeout(n,17)},Ga=".",Ka=",",Wa=[3,3],Qa=["y","z","a","f","p","n","Âµ","m","","k","M","G","T","P","E","Z","Y"].map(yt);ua.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=ua.round(n,Mt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,Math.floor((0>=e?e+1:e-1)/3)*3))),Qa[8+e/3]},ua.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)},ua.format=function(n){var t=no.exec(n),e=t[1]||" ",r=t[2]||">",i=t[3]||"",u=t[4]||"",a=t[5],o=+t[6],c=t[7],l=t[8],f=t[9],s=1,h="",g=!1;switch(l&&(l=+l.substring(1)),(a||"0"===e&&"="===r)&&(a=e="0",r="=",c&&(o-=Math.floor((o-1)/4))),f){case"n":c=!0,f="g";break;case"%":s=100,h="%",f="f";break;case"p":s=100,h="%",f="r";break;case"b":case"o":case"x":case"X":u&&(u="0"+f.toLowerCase());case"c":case"d":g=!0,l=0;break;case"s":s=-1,f="r"}"#"===u&&(u=""),"r"!=f||l||(f="g"),null!=l&&("g"==f?l=Math.max(1,Math.min(21,l)):("e"==f||"f"==f)&&(l=Math.max(0,Math.min(20,l)))),f=to.get(f)||xt;var p=a&&c;return function(n){if(g&&n%1)return"";var t=0>n||0===n&&0>1/n?(n=-n,"-"):i;if(0>s){var d=ua.formatPrefix(n,l);n=d.scale(n),h=d.symbol}else n*=s;n=f(n,l),!a&&c&&(n=eo(n));var m=u.length+n.length+(p?0:t.length),v=o>m?Array(m=o-m+1).join(e):"";return p&&(n=eo(v+n)),Ga&&n.replace(".",Ga),t+=u,("<"===r?t+n+v:">"===r?v+t+n:"^"===r?v.substring(0,m>>=1)+t+n+v.substring(m):t+(p?n:v+n))+h}};var no=/(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,to=ua.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ua.round(n,Mt(n,t))).toFixed(Math.max(0,Math.min(20,Mt(n*(1+1e-15),t))))}}),eo=ft;if(Wa){var ro=Wa.length;eo=function(n){for(var t=n.lastIndexOf("."),e=t>=0?"."+n.substring(t+1):(t=n.length,""),r=[],i=0,u=Wa[0];t>0&&u>0;)r.push(n.substring(t-=u,t+u)),u=Wa[i=(i+1)%ro];return r.reverse().join(Ka||"")+e}}ua.geo={},ua.geo.stream=function(n,t){n&&io.hasOwnProperty(n.type)?io[n.type](n,t):bt(n,t)};var io={Feature:function(n,t){bt(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length;++r<i;)bt(e[r].geometry,t)}},uo={Sphere:function(n,t){t.sphere()},Point:function(n,t){var e=n.coordinates;t.point(e[0],e[1])},MultiPoint:function(n,t){for(var e,r=n.coordinates,i=-1,u=r.length;++i<u;)e=r[i],t.point(e[0],e[1])},LineString:function(n,t){_t(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)_t(e[r],t,0)},Polygon:function(n,t){wt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)wt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length;++r<i;)bt(e[r],t)}};ua.geo.area=function(n){return ao=0,ua.geo.stream(n,co),ao};var ao,oo,co={sphere:function(){ao+=4*Da},point:q,lineStart:q,lineEnd:q,polygonStart:function(){oo=0,co.lineStart=St},polygonEnd:function(){var n=2*oo;ao+=0>n?4*Da+n:n,co.lineStart=co.lineEnd=co.point=q}};ua.geo.bounds=function(){function n(n,t){M.push(x=[f=n,h=n]),s>t&&(s=t),t>g&&(g=t)}function t(t,e){var r=Et([t*La,e*La]);if(v){var i=At(v,r),u=[i[1],-i[0],0],a=At(u,i);Tt(a),a=Ct(a);var c=t-p,l=c>0?1:-1,d=a[0]*Fa*l,m=Math.abs(c)>180;if(m^(d>l*p&&l*t>d)){var y=a[1]*Fa;y>g&&(g=y)}else if(d=(d+360)%360-180,m^(d>l*p&&l*t>d)){var y=-a[1]*Fa;s>y&&(s=y)}else s>e&&(s=e),e>g&&(g=e);m?p>t?o(f,t)>o(f,h)&&(h=t):o(t,h)>o(f,h)&&(f=t):h>=f?(f>t&&(f=t),t>h&&(h=t)):t>p?o(f,t)>o(f,h)&&(h=t):o(t,h)>o(f,h)&&(f=t)}else n(t,e);v=r,p=t}function e(){b.point=t}function r(){x[0]=f,x[1]=h,b.point=n,v=null}function i(n,e){if(v){var r=n-p;y+=Math.abs(r)>180?r+(r>0?360:-360):r}else d=n,m=e;co.point(n,e),t(n,e)}function u(){co.lineStart()}function a(){i(d,m),co.lineEnd(),Math.abs(y)>ja&&(f=-(h=180)),x[0]=f,x[1]=h,v=null}function o(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var f,s,h,g,p,d,m,v,y,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=i,b.lineStart=u,b.lineEnd=a,y=0,co.polygonStart()},polygonEnd:function(){co.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>oo?(f=-(h=180),s=-(g=90)):y>ja?g=90:-ja>y&&(s=-90),x[0]=f,x[1]=h}};return function(n){g=h=-(f=s=1/0),M=[],ua.geo.stream(n,b),M.sort(c);for(var t,e=1,r=M.length,i=M[0],u=[i];r>e;++e)t=M[e],l(t[0],i)||l(t[1],i)?(o(i[0],t[1])>o(i[0],i[1])&&(i[1]=t[1]),o(t[0],i[1])>o(i[0],i[1])&&(i[0]=t[0])):u.push(i=t);for(var a,t,p=-1/0,r=u.length-1,e=0,i=u[r];r>=e;i=t,++e)t=u[e],(a=o(i[1],t[0]))>p&&(p=a,f=t[0],h=i[1]);return M=x=null,[[f,s],[h,g]]}}(),ua.geo.centroid=function(n){lo=fo=so=ho=go=0,ua.geo.stream(n,po);var t;return fo&&Math.abs(t=Math.sqrt(so*so+ho*ho+go*go))>ja?[Math.atan2(ho,so)*Fa,Math.asin(Math.max(-1,Math.min(1,go/t)))*Fa]:void 0};var lo,fo,so,ho,go,po={sphere:function(){2>lo&&(lo=2,fo=so=ho=go=0)},point:Dt,lineStart:Lt,lineEnd:Ft,polygonStart:function(){2>lo&&(lo=2,fo=so=ho=go=0),po.lineStart=jt},polygonEnd:function(){po.lineStart=Lt}},mo=Ot(Ht,Xt,Bt),vo=1e9;ua.geo.projection=Qt,ua.geo.projectionMutator=ne,(ua.geo.equirectangular=function(){return Qt(ee)}).raw=ee.invert=ee,ua.geo.rotation=function(n){function t(t){return t=n(t[0]*La,t[1]*La),t[0]*=Fa,t[1]*=Fa,t}return n=re(n[0]%360*La,n[1]*La,n.length>2?n[2]*La:0),t.invert=function(t){return t=n.invert(t[0]*La,t[1]*La),t[0]*=Fa,t[1]*=Fa,t},t},ua.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=re(-n[0]*La,-n[1]*La,0).invert,i=[];return e(null,null,1,{point:function(n,e){i.push(n=t(n,e)),n[0]*=Fa,n[1]*=Fa}}),{type:"Polygon",coordinates:[i]}}var t,e,r=[0,0],i=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=oe((t=+r)*La,i*La),n):t},n.precision=function(r){return arguments.length?(e=oe(t*La,(i=+r)*La),n):i},n.angle(90)},ua.geo.distance=function(n,t){var e,r=(t[0]-n[0])*La,i=n[1]*La,u=t[1]*La,a=Math.sin(r),o=Math.cos(r),c=Math.sin(i),l=Math.cos(i),f=Math.sin(u),s=Math.cos(u);return Math.atan2(Math.sqrt((e=s*a)*e+(e=l*f-c*s*o)*e),c*f+l*s*o)},ua.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ua.range(Math.ceil(u/m)*m,i,m).map(h).concat(ua.range(Math.ceil(l/v)*v,c,v).map(g)).concat(ua.range(Math.ceil(r/p)*p,e,p).filter(function(n){return Math.abs(n%m)>ja}).map(f)).concat(ua.range(Math.ceil(o/d)*d,a,d).filter(function(n){return Math.abs(n%v)>ja}).map(s))}var e,r,i,u,a,o,c,l,f,s,h,g,p=10,d=p,m=90,v=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(u).concat(g(c).slice(1),h(i).reverse().slice(1),g(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(u=+t[0][0],i=+t[1][0],l=+t[0][1],c=+t[1][1],u>i&&(t=u,u=i,i=t),l>c&&(t=l,l=c,c=t),n.precision(y)):[[u,l],[i,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],o=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),o>a&&(t=o,o=a,a=t),n.precision(y)):[[r,o],[e,a]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(m=+t[0],v=+t[1],n):[m,v]},n.minorStep=function(t){return arguments.length?(p=+t[0],d=+t[1],n):[p,d]},n.precision=function(t){return arguments.length?(y=+t,f=le(o,a,90),s=fe(r,e,y),h=le(l,c,90),g=fe(u,i,y),n):y},n.majorExtent([[-180,-90+ja],[180,90-ja]]).minorExtent([[-180,-80-ja],[180,80+ja]])},ua.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||i.apply(this,arguments)]}}var t,e,r=se,i=he;return n.distance=function(){return ua.geo.distance(t||r.apply(this,arguments),e||i.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(i=t,e="function"==typeof t?null:t,n):i},n.precision=function(){return arguments.length?n:0},n},ua.geo.interpolate=function(n,t){return ge(n[0]*La,n[1]*La,t[0]*La,t[1]*La)},ua.geo.length=function(n){return yo=0,ua.geo.stream(n,Mo),yo};var yo,Mo={sphere:q,point:q,lineStart:pe,lineEnd:q,polygonStart:q,polygonEnd:q};(ua.geo.conicEqualArea=function(){return de(me)}).raw=me,ua.geo.albers=function(){return ua.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ua.geo.albersUsa=function(){function n(n){var u=n[0],a=n[1];return t=null,e(u,a),t||(r(u,a),t)||i(u,a),t}var t,e,r,i,u=ua.geo.albers(),a=ua.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),o=ua.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=u.scale(),e=u.translate(),r=(n[0]-e[0])/t,i=(n[1]-e[1])/t;return(i>=.12&&.234>i&&r>=-.425&&-.214>r?a:i>=.166&&.234>i&&r>=-.214&&-.115>r?o:u).invert(n)},n.stream=function(n){var t=u.stream(n),e=a.stream(n),r=o.stream(n);return{point:function(n,i){t.point(n,i),e.point(n,i),r.point(n,i)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(u.precision(t),a.precision(t),o.precision(t),n):u.precision()},n.scale=function(t){return arguments.length?(u.scale(t),a.scale(.35*t),o.scale(t),n.translate(u.translate())):u.scale()},n.translate=function(t){if(!arguments.length)return u.translate();var l=u.scale(),f=+t[0],s=+t[1];return e=u.translate(t).clipExtent([[f-.455*l,s-.238*l],[f+.455*l,s+.238*l]]).stream(c).point,r=a.translate([f-.307*l,s+.201*l]).clipExtent([[f-.425*l+ja,s+.12*l+ja],[f-.214*l-ja,s+.234*l-ja]]).stream(c).point,i=o.translate([f-.205*l,s+.212*l]).clipExtent([[f-.214*l+ja,s+.166*l+ja],[f-.115*l-ja,s+.234*l-ja]]).stream(c).point,n},n.scale(1070)};var xo,bo,_o,wo,So,Eo,ko={point:q,lineStart:q,lineEnd:q,polygonStart:function(){bo=0,ko.lineStart=ve},polygonEnd:function(){ko.lineStart=ko.lineEnd=ko.point=q,xo+=Math.abs(bo/2)}},Ao={point:ye,lineStart:q,lineEnd:q,polygonStart:q,polygonEnd:q},No={point:be,lineStart:_e,lineEnd:we,polygonStart:function(){No.lineStart=Se},polygonEnd:function(){No.point=be,No.lineStart=_e,No.lineEnd=we}};ua.geo.path=function(){function n(n){return n&&ua.geo.stream(n,r(i.pointRadius("function"==typeof u?+u.apply(this,arguments):u))),i.result()}var t,e,r,i,u=4.5;return n.area=function(n){return xo=0,ua.geo.stream(n,r(ko)),xo},n.centroid=function(n){return lo=so=ho=go=0,ua.geo.stream(n,r(No)),go?[so/go,ho/go]:void 0},n.bounds=function(n){return So=Eo=-(_o=wo=1/0),ua.geo.stream(n,r(Ao)),[[_o,wo],[So,Eo]]},n.projection=function(e){return arguments.length?(r=(t=e)?e.stream||ke(e):ft,n):t},n.context=function(t){return arguments.length?(i=(e=t)==null?new Me:new Ee(t),n):e},n.pointRadius=function(t){return arguments.length?(u="function"==typeof t?t:+t,n):u},n.projection(ua.geo.albersUsa()).context(null)};var qo=Ae(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ua.geo.azimuthalEqualArea=function(){return Qt(qo)}).raw=qo;var To=Ae(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},ft);(ua.geo.azimuthalEquidistant=function(){return Qt(To)}).raw=To,(ua.geo.conicConformal=function(){return de(Ne)}).raw=Ne,(ua.geo.conicEquidistant=function(){return de(qe)}).raw=qe;var Co=Ae(function(n){return 1/n},Math.atan);(ua.geo.gnomonic=function(){return Qt(Co)}).raw=Co,Te.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Da/2]},(ua.geo.mercator=function(){return Ce(Te)}).raw=Te;var zo=Ae(function(){return 1},Math.asin);(ua.geo.orthographic=function(){return Qt(zo)}).raw=zo;var Do=Ae(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ua.geo.stereographic=function(){return Qt(Do)}).raw=Do,ze.invert=function(n,t){return[Math.atan2(U(n),Math.cos(t)),Y(Math.sin(t)/I(n))]},(ua.geo.transverseMercator=function(){return Ce(ze)}).raw=ze,ua.geom={},ua.svg={},ua.svg.line=function(){return De(ft)};var jo=ua.map({linear:Fe,"linear-closed":He,"step-before":Pe,"step-after":Re,basis:Xe,"basis-open":Ze,"basis-closed":Be,bundle:$e,cardinal:Ue,"cardinal-open":Oe,"cardinal-closed":Ye,monotone:nr});jo.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Lo=[0,2/3,1/3,0],Fo=[0,1/3,2/3,0],Ho=[0,1/6,2/3,1/6];ua.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,i,u,a,o,c,l,f,s,h,g,p,d=lt(e),m=lt(r),v=n.length,y=v-1,M=[],x=[],b=0;if(d===je&&r===Le)t=n;else for(u=0,t=[];v>u;++u)t.push([+d.call(this,i=n[u],u),+m.call(this,i,u)]);for(u=1;v>u;++u)(t[u][1]<t[b][1]||t[u][1]==t[b][1]&&t[u][0]<t[b][0])&&(b=u);for(u=0;v>u;++u)u!==b&&(c=t[u][1]-t[b][1],o=t[u][0]-t[b][0],M.push({angle:Math.atan2(c,o),index:u}));for(M.sort(function(n,t){return n.angle-t.angle}),g=M[0].angle,h=M[0].index,s=0,u=1;y>u;++u){if(a=M[u].index,g==M[u].angle){if(o=t[h][0]-t[b][0],c=t[h][1]-t[b][1],l=t[a][0]-t[b][0],f=t[a][1]-t[b][1],o*o+c*c>=l*l+f*f){M[u].index=-1;continue}M[s].index=-1}g=M[u].angle,s=u,h=a}for(x.push(b),u=0,a=0;2>u;++a)M[a].index>-1&&(x.push(M[a].index),u++);for(p=x.length;y>a;++a)if(!(M[a].index<0)){for(;!tr(x[p-2],x[p-1],M[a].index,t);)--p;x[p++]=M[a].index}var _=[];for(u=p-1;u>=0;--u)_.push(n[x[u]]);return _}var e=je,r=Le;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ua.geom.polygon=function(n){return n.area=function(){for(var t=0,e=n.length,r=n[e-1][1]*n[0][0]-n[e-1][0]*n[0][1];++t<e;)r+=n[t-1][1]*n[t][0]-n[t-1][0]*n[t][1];return.5*r},n.centroid=function(t){var e,r,i=-1,u=n.length,a=0,o=0,c=n[u-1];for(arguments.length||(t=-1/(6*n.area()));++i<u;)e=c,c=n[i],r=e[0]*c[1]-c[0]*e[1],a+=(e[0]+c[0])*r,o+=(e[1]+c[1])*r;return[a*t,o*t]},n.clip=function(t){for(var e,r,i,u,a,o,c=-1,l=n.length,f=n[l-1];++c<l;){for(e=t.slice(),t.length=0,u=n[c],a=e[(i=e.length)-1],r=-1;++r<i;)o=e[r],er(o,f,u)?(er(a,f,u)||t.push(rr(a,o,f,u)),t.push(o)):er(a,f,u)&&t.push(rr(a,o,f,u)),a=o;f=u}return t},n},ua.geom.delaunay=function(n){var t=n.map(function(){return[]}),e=[];return ir(n,function(e){t[e.region.l.index].push(n[e.region.r.index])}),t.forEach(function(t,r){var i=n[r],u=i[0],a=i[1];t.forEach(function(n){n.angle=Math.atan2(n[0]-u,n[1]-a)}),t.sort(function(n,t){return n.angle-t.angle});for(var o=0,c=t.length-1;c>o;o++)e.push([i,t[o],t[o+1]])}),e},ua.geom.voronoi=function(n){function t(n){var t,r,a,o=n.map(function(){return[]}),c=lt(i),l=lt(u),f=n.length,s=1e6;if(c===je&&l===Le)t=n;else for(t=[],a=0;f>a;++a)t.push([+c.call(this,r=n[a],a),+l.call(this,r,a)]);if(ir(t,function(n){var t,e,r,i,u,a;n.a===1&&n.b>=0?(t=n.ep.r,e=n.ep.l):(t=n.ep.l,e=n.ep.r),n.a===1?(u=t?t.y:-s,r=n.c-n.b*u,a=e?e.y:s,i=n.c-n.b*a):(r=t?t.x:-s,u=n.c-n.a*r,i=e?e.x:s,a=n.c-n.a*i);var c=[r,u],l=[i,a];o[n.region.l.index].push(c,l),o[n.region.r.index].push(c,l)}),o=o.map(function(n,e){var r=t[e][0],i=t[e][1],u=n.map(function(n){return Math.atan2(n[0]-r,n[1]-i)
}),a=ua.range(n.length).sort(function(n,t){return u[n]-u[t]});return a.filter(function(n,t){return!t||u[n]-u[a[t-1]]>ja}).map(function(t){return n[t]})}),o.forEach(function(n,e){var r=n.length;if(!r)return n.push([-s,-s],[-s,s],[s,s],[s,-s]);if(!(r>2)){var i=t[e],u=n[0],a=n[1],o=i[0],c=i[1],l=u[0],f=u[1],h=a[0],g=a[1],p=Math.abs(h-l),d=g-f;if(Math.abs(d)<ja){var m=f>c?-s:s;n.push([-s,m],[s,m])}else if(ja>p){var v=l>o?-s:s;n.push([v,-s],[v,s])}else{var m=(l-o)*(g-f)>(h-l)*(f-c)?s:-s,y=Math.abs(d)-p;Math.abs(y)<ja?n.push([0>d?m:-m,m]):(y>0&&(m*=-1),n.push([-s,m],[s,m]))}}}),e)for(a=0;f>a;++a)e(o[a]);for(a=0;f>a;++a)o[a].point=n[a];return o}var e,r=null,i=je,u=Le;return arguments.length?t(n):(t.x=function(n){return arguments.length?(i=n,t):i},t.y=function(n){return arguments.length?(u=n,t):u},t.size=function(n){return arguments.length?(null==n?e=null:(r=[+n[0],+n[1]],e=ua.geom.polygon([[0,0],[0,r[1]],r,[r[0],0]]).clip),t):r},t.links=function(n){var t,e,r,a=n.map(function(){return[]}),o=[],c=lt(i),l=lt(u),f=n.length;if(c===je&&l===Le)t=n;else for(r=0;f>r;++r)t.push([+c.call(this,e=n[r],r),+l.call(this,e,r)]);return ir(t,function(t){var e=t.region.l.index,r=t.region.r.index;a[e][r]||(a[e][r]=a[r][e]=!0,o.push({source:n[e],target:n[r]}))}),o},t.triangles=function(n){if(i===je&&u===Le)return ua.geom.delaunay(n);var t,e,r,a,o,c=lt(i),l=lt(u);for(a=0,t=[],o=n.length;o>a;++a)e=[+c.call(this,r=n[a],a),+l.call(this,r,a)],e.data=r,t.push(e);return ua.geom.delaunay(t).map(function(n){return n.map(function(n){return n.data})})},t)};var Po={l:"r",r:"l"};ua.geom.quadtree=function(n,t,e,r,i){function u(n){function u(n,t,e,r,i,u,a,o){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,f=n.y;if(null!=c)if(Math.abs(c-e)+Math.abs(f-r)<.01)l(n,t,e,r,i,u,a,o);else{var s=n.point;n.x=n.y=n.point=null,l(n,s,c,f,i,u,a,o),l(n,t,e,r,i,u,a,o)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,i,u,a,o)}function l(n,t,e,r,i,a,o,c){var l=.5*(i+o),f=.5*(a+c),s=e>=l,h=r>=f,g=(h<<1)+s;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=or()),s?i=l:o=l,h?a=f:c=f,u(n,t,e,r,i,a,o,c)}var f,s,h,g,p,d,m,v,y,M=lt(o),x=lt(c);if(null!=t)d=t,m=e,v=r,y=i;else if(v=y=-(d=m=1/0),s=[],h=[],p=n.length,a)for(g=0;p>g;++g)f=n[g],f.x<d&&(d=f.x),f.y<m&&(m=f.y),f.x>v&&(v=f.x),f.y>y&&(y=f.y),s.push(f.x),h.push(f.y);else for(g=0;p>g;++g){var b=+M(f=n[g],g),_=+x(f,g);d>b&&(d=b),m>_&&(m=_),b>v&&(v=b),_>y&&(y=_),s.push(b),h.push(_)}var w=v-d,S=y-m;w>S?y=m+w:v=d+S;var E=or();if(E.add=function(n){u(E,n,+M(n,++g),+x(n,g),d,m,v,y)},E.visit=function(n){cr(n,E,d,m,v,y)},g=-1,null==t){for(;++g<p;)u(E,n[g],s[g],h[g],d,m,v,y);--g}else n.forEach(E.add);return s=h=n=f=null,E}var a,o=je,c=Le;return(a=arguments.length)?(o=ur,c=ar,3===a&&(i=e,r=t,e=t=0),u(n)):(u.x=function(n){return arguments.length?(o=n,u):o},u.y=function(n){return arguments.length?(c=n,u):c},u.size=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=e=0,r=+n[0],i=+n[1]),u):null==t?null:[r,i]},u)},ua.interpolateRgb=lr,ua.transform=function(n){var t=aa.createElementNS(ua.ns.prefix.svg,"g");return(ua.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new fr(e?e.matrix:Ro)})(n)},fr.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var Ro={a:1,b:0,c:0,d:1,e:0,f:0};ua.interpolateNumber=pr,ua.interpolateTransform=dr,ua.interpolateObject=mr,ua.interpolateString=vr;var Oo=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;ua.interpolate=yr,ua.interpolators=[function(n,t){var e=typeof t;return("string"===e?Va.has(t)||/^(#|rgb\(|hsl\()/.test(t)?lr:vr:t instanceof L?lr:"object"===e?Array.isArray(t)?xr:mr:pr)(n,t)}],ua.interpolateArray=xr;var Yo=function(){return ft},Uo=ua.map({linear:Yo,poly:Ar,quad:function(){return Sr},cubic:function(){return Er},sin:function(){return Nr},exp:function(){return qr},circle:function(){return Tr},elastic:Cr,back:zr,bounce:function(){return Dr}}),Io=ua.map({"in":ft,out:_r,"in-out":wr,"out-in":function(n){return wr(_r(n))}});ua.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.substring(0,t):n,r=t>=0?n.substring(t+1):"in";return e=Uo.get(e)||Yo,r=Io.get(r)||ft,br(r(e.apply(null,Array.prototype.slice.call(arguments,1))))},ua.interpolateHcl=jr,ua.interpolateHsl=Lr,ua.interpolateLab=Fr,ua.interpolateRound=Hr,ua.layout={},ua.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Or(n[e]));return t}},ua.layout.chord=function(){function n(){var n,l,s,h,g,p={},d=[],m=ua.range(u),v=[];for(e=[],r=[],n=0,h=-1;++h<u;){for(l=0,g=-1;++g<u;)l+=i[h][g];d.push(l),v.push(ua.range(u)),n+=l}for(a&&m.sort(function(n,t){return a(d[n],d[t])}),o&&v.forEach(function(n,t){n.sort(function(n,e){return o(i[t][n],i[t][e])})}),n=(2*Da-f*u)/n,l=0,h=-1;++h<u;){for(s=l,g=-1;++g<u;){var y=m[h],M=v[y][g],x=i[y][M],b=l,_=l+=x*n;p[y+"-"+M]={index:y,subindex:M,startAngle:b,endAngle:_,value:x}}r[y]={index:y,startAngle:s,endAngle:l,value:(l-s)/n},l+=f}for(h=-1;++h<u;)for(g=h-1;++g<u;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,i,u,a,o,c,l={},f=0;return l.matrix=function(n){return arguments.length?(u=(i=n)&&i.length,e=r=null,l):i},l.padding=function(n){return arguments.length?(f=n,e=r=null,l):f},l.sortGroups=function(n){return arguments.length?(a=n,e=r=null,l):a},l.sortSubgroups=function(n){return arguments.length?(o=n,e=null,l):o},l.sortChords=function(n){return arguments.length?(c=n,e&&t(),l):c},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},ua.layout.force=function(){function n(n){return function(t,e,r,i){if(t.point!==n){var u=t.cx-n.x,a=t.cy-n.y,o=1/Math.sqrt(u*u+a*a);if(d>(i-e)*o){var c=t.charge*o*o;return n.px-=u*c,n.py-=a*c,!0}if(t.point&&isFinite(o)){var c=t.pointCharge*o*o;n.px-=u*c,n.py-=a*c}}return!t.charge}}function t(n){n.px=ua.event.x,n.py=ua.event.y,o.resume()}var e,r,i,u,a,o={},c=ua.dispatch("start","tick","end"),l=[1,1],f=.9,s=Vo,h=Xo,g=-30,p=.1,d=.8,m=[],v=[];return o.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,o,s,h,d,y,M,x,b=m.length,_=v.length;for(e=0;_>e;++e)o=v[e],s=o.source,h=o.target,M=h.x-s.x,x=h.y-s.y,(d=M*M+x*x)&&(d=r*u[e]*((d=Math.sqrt(d))-i[e])/d,M*=d,x*=d,h.x-=M*(y=s.weight/(h.weight+s.weight)),h.y-=x*y,s.x+=M*(y=1-y),s.y+=x*y);if((y=r*p)&&(M=l[0]/2,x=l[1]/2,e=-1,y))for(;++e<b;)o=m[e],o.x+=(M-o.x)*y,o.y+=(x-o.y)*y;if(g)for(Br(t=ua.geom.quadtree(m),r,a),e=-1;++e<b;)(o=m[e]).fixed||t.visit(n(o));for(e=-1;++e<b;)o=m[e],o.fixed?(o.x=o.px,o.y=o.py):(o.x-=(o.px-(o.px=o.x))*f,o.y-=(o.py-(o.py=o.y))*f);c.tick({type:"tick",alpha:r})},o.nodes=function(n){return arguments.length?(m=n,o):m},o.links=function(n){return arguments.length?(v=n,o):v},o.size=function(n){return arguments.length?(l=n,o):l},o.linkDistance=function(n){return arguments.length?(s="function"==typeof n?n:+n,o):s},o.distance=o.linkDistance,o.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,o):h},o.friction=function(n){return arguments.length?(f=+n,o):f},o.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,o):g},o.gravity=function(n){return arguments.length?(p=+n,o):p},o.theta=function(n){return arguments.length?(d=+n,o):d},o.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),ua.timer(o.tick)),o):r},o.start=function(){function n(n,r){for(var i,u=t(e),a=-1,o=u.length;++a<o;)if(!isNaN(i=u[a][n]))return i;return Math.random()*r}function t(){if(!c){for(c=[],r=0;p>r;++r)c[r]=[];for(r=0;d>r;++r){var n=v[r];c[n.source.index].push(n.target),c[n.target.index].push(n.source)}}return c[e]}var e,r,c,f,p=m.length,d=v.length,y=l[0],M=l[1];for(e=0;p>e;++e)(f=m[e]).index=e,f.weight=0;for(e=0;d>e;++e)f=v[e],typeof f.source=="number"&&(f.source=m[f.source]),typeof f.target=="number"&&(f.target=m[f.target]),++f.source.weight,++f.target.weight;for(e=0;p>e;++e)f=m[e],isNaN(f.x)&&(f.x=n("x",y)),isNaN(f.y)&&(f.y=n("y",M)),isNaN(f.px)&&(f.px=f.x),isNaN(f.py)&&(f.py=f.y);if(i=[],"function"==typeof s)for(e=0;d>e;++e)i[e]=+s.call(this,v[e],e);else for(e=0;d>e;++e)i[e]=s;if(u=[],"function"==typeof h)for(e=0;d>e;++e)u[e]=+h.call(this,v[e],e);else for(e=0;d>e;++e)u[e]=h;if(a=[],"function"==typeof g)for(e=0;p>e;++e)a[e]=+g.call(this,m[e],e);else for(e=0;p>e;++e)a[e]=g;return o.resume()},o.resume=function(){return o.alpha(.1)},o.stop=function(){return o.alpha(0)},o.drag=function(){return e||(e=ua.behavior.drag().origin(ft).on("dragstart.force",Ir).on("drag.force",t).on("dragend.force",Vr)),arguments.length?(this.on("mouseover.force",Xr).on("mouseout.force",Zr).call(e),void 0):e},ua.rebind(o,c,"on")};var Vo=20,Xo=1;ua.layout.hierarchy=function(){function n(t,a,o){var c=i.call(e,t,a);if(t.depth=a,o.push(t),c&&(l=c.length)){for(var l,f,s=-1,h=t.children=[],g=0,p=a+1;++s<l;)f=n(c[s],p,o),f.parent=t,h.push(f),g+=f.value;r&&h.sort(r),u&&(t.value=g)}else u&&(t.value=+u.call(e,t,a)||0);return t}function t(n,r){var i=n.children,a=0;if(i&&(o=i.length))for(var o,c=-1,l=r+1;++c<o;)a+=t(i[c],l);else u&&(a=+u.call(e,n,r)||0);return u&&(n.value=a),a}function e(t){var e=[];return n(t,0,e),e}var r=Kr,i=Jr,u=Gr;return e.sort=function(n){return arguments.length?(r=n,e):r},e.children=function(n){return arguments.length?(i=n,e):i},e.value=function(n){return arguments.length?(u=n,e):u},e.revalue=function(n){return t(n,0),n},e},ua.layout.partition=function(){function n(t,e,r,i){var u=t.children;if(t.x=e,t.y=t.depth*i,t.dx=r,t.dy=i,u&&(a=u.length)){var a,o,c,l=-1;for(r=t.value?r/t.value:0;++l<a;)n(o=u[l],e,c=o.value*r,i),e+=c}}function t(n){var e=n.children,r=0;if(e&&(i=e.length))for(var i,u=-1;++u<i;)r=Math.max(r,t(e[u]));return 1+r}function e(e,u){var a=r.call(this,e,u);return n(a[0],0,i[0],i[1]/t(a[0])),a}var r=ua.layout.hierarchy(),i=[1,1];return e.size=function(n){return arguments.length?(i=n,e):i},$r(e,r)},ua.layout.pie=function(){function n(u){var a=u.map(function(e,r){return+t.call(n,e,r)}),o=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof i?i.apply(this,arguments):i)-o)/ua.sum(a),l=ua.range(u.length);null!=e&&l.sort(e===Zo?function(n,t){return a[t]-a[n]}:function(n,t){return e(u[n],u[t])});var f=[];return l.forEach(function(n){var t;f[n]={data:u[n],value:t=a[n],startAngle:o,endAngle:o+=t*c}}),f}var t=Number,e=Zo,r=0,i=2*Da;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(i=t,n):i},n};var Zo={};ua.layout.stack=function(){function n(o,c){var l=o.map(function(e,r){return t.call(n,e,r)}),f=l.map(function(t){return t.map(function(t,e){return[u.call(n,t,e),a.call(n,t,e)]})}),s=e.call(n,f,c);l=ua.permute(l,s),f=ua.permute(f,s);var h,g,p,d=r.call(n,f,c),m=l.length,v=l[0].length;for(g=0;v>g;++g)for(i.call(n,l[0][g],p=d[g],f[0][g][1]),h=1;m>h;++h)i.call(n,l[h][g],p+=f[h-1][g][1],f[h][g][1]);return o}var t=ft,e=ei,r=ri,i=ti,u=Qr,a=ni;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:Bo.get(t)||ei,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:$o.get(t)||ri,n):r},n.x=function(t){return arguments.length?(u=t,n):u},n.y=function(t){return arguments.length?(a=t,n):a},n.out=function(t){return arguments.length?(i=t,n):i},n};var Bo=ua.map({"inside-out":function(n){var t,e,r=n.length,i=n.map(ii),u=n.map(ui),a=ua.range(r).sort(function(n,t){return i[n]-i[t]}),o=0,c=0,l=[],f=[];for(t=0;r>t;++t)e=a[t],c>o?(o+=u[e],l.push(e)):(c+=u[e],f.push(e));return f.reverse().concat(l)},reverse:function(n){return ua.range(n.length).reverse()},"default":ei}),$o=ua.map({silhouette:function(n){var t,e,r,i=n.length,u=n[0].length,a=[],o=0,c=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];r>o&&(o=r),a.push(r)}for(e=0;u>e;++e)c[e]=(o-a[e])/2;return c},wiggle:function(n){var t,e,r,i,u,a,o,c,l,f=n.length,s=n[0],h=s.length,g=[];for(g[0]=c=l=0,e=1;h>e;++e){for(t=0,i=0;f>t;++t)i+=n[t][e][1];for(t=0,u=0,o=s[e][0]-s[e-1][0];f>t;++t){for(r=0,a=(n[t][e][1]-n[t][e-1][1])/(2*o);t>r;++r)a+=(n[r][e][1]-n[r][e-1][1])/o;u+=a*n[t][e][1]}g[e]=c-=i?u/i*o:0,l>c&&(l=c)}for(e=0;h>e;++e)g[e]-=l;return g},expand:function(n){var t,e,r,i=n.length,u=n[0].length,a=1/i,o=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];if(r)for(t=0;i>t;t++)n[t][e][1]/=r;else for(t=0;i>t;t++)n[t][e][1]=a}for(e=0;u>e;++e)o[e]=0;return o},zero:ri});ua.layout.histogram=function(){function n(n,u){for(var a,o,c=[],l=n.map(e,this),f=r.call(this,l,u),s=i.call(this,f,l,u),u=-1,h=l.length,g=s.length-1,p=t?1:1/h;++u<g;)a=c[u]=[],a.dx=s[u+1]-(a.x=s[u]),a.y=0;if(g>0)for(u=-1;++u<h;)o=l[u],o>=f[0]&&o<=f[1]&&(a=c[ua.bisect(s,o,1,g)-1],a.y+=p,a.push(n[u]));return c}var t=!0,e=Number,r=li,i=oi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=lt(t),n):r},n.bins=function(t){return arguments.length?(i="number"==typeof t?function(n){return ci(n,t)}:lt(t),n):i},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ua.layout.tree=function(){function n(n,i){function u(n,t){var r=n.children,i=n._tree;if(r&&(a=r.length)){for(var a,c,l,f=r[0],s=f,h=-1;++h<a;)l=r[h],u(l,c),s=o(l,c,s),c=l;yi(n);var g=.5*(f._tree.prelim+l._tree.prelim);t?(i.prelim=t._tree.prelim+e(n,t),i.mod=i.prelim-g):i.prelim=g}else t&&(i.prelim=t._tree.prelim+e(n,t))}function a(n,t){n.x=n._tree.prelim+t;var e=n.children;if(e&&(r=e.length)){var r,i=-1;for(t+=n._tree.mod;++i<r;)a(e[i],t)}}function o(n,t,r){if(t){for(var i,u=n,a=n,o=t,c=n.parent.children[0],l=u._tree.mod,f=a._tree.mod,s=o._tree.mod,h=c._tree.mod;o=hi(o),u=si(u),o&&u;)c=si(c),a=hi(a),a._tree.ancestor=n,i=o._tree.prelim+s-u._tree.prelim-l+e(o,u),i>0&&(Mi(xi(o,n,r),n,i),l+=i,f+=i),s+=o._tree.mod,l+=u._tree.mod,h+=c._tree.mod,f+=a._tree.mod;o&&!hi(a)&&(a._tree.thread=o,a._tree.mod+=s-f),u&&!si(c)&&(c._tree.thread=u,c._tree.mod+=l-h,r=n)}return r}var c=t.call(this,n,i),l=c[0];vi(l,function(n,t){n._tree={ancestor:n,prelim:0,mod:0,change:0,shift:0,number:t?t._tree.number+1:0}}),u(l),a(l,-l._tree.prelim);var f=gi(l,di),s=gi(l,pi),h=gi(l,mi),g=f.x-e(f,s)/2,p=s.x+e(s,f)/2,d=h.depth||1;return vi(l,function(n){n.x=(n.x-g)/(p-g)*r[0],n.y=n.depth/d*r[1],delete n._tree}),c}var t=ua.layout.hierarchy().sort(null).value(null),e=fi,r=[1,1];return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(r=t,n):r},$r(n,t)},ua.layout.pack=function(){function n(n,i){var u=t.call(this,n,i),a=u[0];a.x=0,a.y=0,vi(a,function(n){n.r=Math.sqrt(n.value)}),vi(a,Ei);var o=r[0],c=r[1],l=Math.max(2*a.r/o,2*a.r/c);if(e>0){var f=e*l/2;vi(a,function(n){n.r+=f}),vi(a,Ei),vi(a,function(n){n.r-=f}),l=Math.max(2*a.r/o,2*a.r/c)}return Ni(a,o/2,c/2,1/l),u}var t=ua.layout.hierarchy().sort(bi),e=0,r=[1,1];return n.size=function(t){return arguments.length?(r=t,n):r},n.padding=function(t){return arguments.length?(e=+t,n):e},$r(n,t)},ua.layout.cluster=function(){function n(n,i){var u,a=t.call(this,n,i),o=a[0],c=0;vi(o,function(n){var t=n.children;t&&t.length?(n.x=Ci(t),n.y=Ti(t)):(n.x=u?c+=e(n,u):0,n.y=0,u=n)});var l=zi(o),f=Di(o),s=l.x-e(l,f)/2,h=f.x+e(f,l)/2;return vi(o,function(n){n.x=(n.x-s)/(h-s)*r[0],n.y=(1-(o.y?n.y/o.y:1))*r[1]}),a}var t=ua.layout.hierarchy().sort(null).value(null),e=fi,r=[1,1];return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(r=t,n):r},$r(n,t)},ua.layout.treemap=function(){function n(n,t){for(var e,r,i=-1,u=n.length;++i<u;)r=(e=n[i]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var u=e.children;if(u&&u.length){var a,o,c,l=s(e),f=[],h=u.slice(),p=1/0,d="slice"===g?l.dx:"dice"===g?l.dy:"slice-dice"===g?e.depth&1?l.dy:l.dx:Math.min(l.dx,l.dy);for(n(h,l.dx*l.dy/e.value),f.area=0;(c=h.length)>0;)f.push(a=h[c-1]),f.area+=a.area,"squarify"!==g||(o=r(f,d))<=p?(h.pop(),p=o):(f.area-=f.pop().area,i(f,d,l,!1),d=Math.min(l.dx,l.dy),f.length=f.area=0,p=1/0);f.length&&(i(f,d,l,!0),f.length=f.area=0),u.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var u,a=s(t),o=r.slice(),c=[];for(n(o,a.dx*a.dy/t.value),c.area=0;u=o.pop();)c.push(u),c.area+=u.area,u.z!=null&&(i(c,u.z?a.dx:a.dy,a,!o.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,i=0,u=1/0,a=-1,o=n.length;++a<o;)(e=n[a].area)&&(u>e&&(u=e),e>i&&(i=e));return r*=r,t*=t,r?Math.max(t*i*p/r,r/(t*u*p)):1/0}function i(n,t,e,r){var i,u=-1,a=n.length,o=e.x,l=e.y,f=t?c(n.area/t):0;if(t==e.dx){for((r||f>e.dy)&&(f=e.dy);++u<a;)i=n[u],i.x=o,i.y=l,i.dy=f,o+=i.dx=Math.min(e.x+e.dx-o,f?c(i.area/f):0);i.z=!0,i.dx+=e.x+e.dx-o,e.y+=f,e.dy-=f}else{for((r||f>e.dx)&&(f=e.dx);++u<a;)i=n[u],i.x=o,i.y=l,i.dx=f,l+=i.dy=Math.min(e.y+e.dy-l,f?c(i.area/f):0);i.z=!1,i.dy+=e.y+e.dy-l,e.x+=f,e.dx-=f}}function u(r){var i=a||o(r),u=i[0];return u.x=0,u.y=0,u.dx=l[0],u.dy=l[1],a&&o.revalue(u),n([u],u.dx*u.dy/u.value),(a?e:t)(u),h&&(a=i),i}var a,o=ua.layout.hierarchy(),c=Math.round,l=[1,1],f=null,s=ji,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return u.size=function(n){return arguments.length?(l=n,u):l},u.padding=function(n){function t(t){var e=n.call(u,t,t.depth);return null==e?ji(t):Li(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Li(t,n)}if(!arguments.length)return f;var r;return s=(f=n)==null?ji:(r=typeof n)=="function"?t:"number"===r?(n=[n,n,n,n],e):e,u},u.round=function(n){return arguments.length?(c=n?Math.round:Number,u):c!=Number},u.sticky=function(n){return arguments.length?(h=n,a=null,u):h},u.ratio=function(n){return arguments.length?(p=n,u):p},u.mode=function(n){return arguments.length?(g=n+"",u):g},$r(u,o)},ua.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,i;do e=Math.random()*2-1,r=Math.random()*2-1,i=e*e+r*r;while(!i||i>1);return n+t*e*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(){var n=ua.random.normal.apply(ua,arguments);return function(){return Math.exp(n())}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t/n}}},ua.scale={},ua.scale.linear=function(){return Yi([0,1],[0,1],yr,!1)},ua.scale.log=function(){return Bi(ua.scale.linear().domain([0,Math.LN10]),10,$i,Ji,[1,10])};var Jo=ua.format(".0e");ua.scale.pow=function(){return Wi(ua.scale.linear(),1,[0,1])},ua.scale.sqrt=function(){return ua.scale.pow().exponent(.5)},ua.scale.ordinal=function(){return nu([],{t:"range",a:[[]]})},ua.scale.category10=function(){return ua.scale.ordinal().range(Go)},ua.scale.category20=function(){return ua.scale.ordinal().range(Ko)},ua.scale.category20b=function(){return ua.scale.ordinal().range(Wo)},ua.scale.category20c=function(){return ua.scale.ordinal().range(Qo)};var Go=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],Ko=["#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5"],Wo=["#393b79","#5254a3","#6b6ecf","#9c9ede","#637939","#8ca252","#b5cf6b","#cedb9c","#8c6d31","#bd9e39","#e7ba52","#e7cb94","#843c39","#ad494a","#d6616b","#e7969c","#7b4173","#a55194","#ce6dbd","#de9ed6"],Qo=["#3182bd","#6baed6","#9ecae1","#c6dbef","#e6550d","#fd8d3c","#fdae6b","#fdd0a2","#31a354","#74c476","#a1d99b","#c7e9c0","#756bb1","#9e9ac8","#bcbddc","#dadaeb","#636363","#969696","#bdbdbd","#d9d9d9"];ua.scale.quantile=function(){return tu([],[])},ua.scale.quantize=function(){return eu(0,1,[0,1])},ua.scale.threshold=function(){return ru([.5],[0,1])},ua.scale.identity=function(){return iu([0,1])},ua.svg.arc=function(){function n(){var n=t.apply(this,arguments),u=e.apply(this,arguments),a=r.apply(this,arguments)+nc,o=i.apply(this,arguments)+nc,c=(a>o&&(c=a,a=o,o=c),o-a),l=Da>c?"0":"1",f=Math.cos(a),s=Math.sin(a),h=Math.cos(o),g=Math.sin(o);return c>=tc?n?"M0,"+u+"A"+u+","+u+" 0 1,1 0,"+-u+"A"+u+","+u+" 0 1,1 0,"+u+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+u+"A"+u+","+u+" 0 1,1 0,"+-u+"A"+u+","+u+" 0 1,1 0,"+u+"Z":n?"M"+u*f+","+u*s+"A"+u+","+u+" 0 "+l+",1 "+u*h+","+u*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+l+",0 "+n*f+","+n*s+"Z":"M"+u*f+","+u*s+"A"+u+","+u+" 0 "+l+",1 "+u*h+","+u*g+"L0,0"+"Z"}var t=uu,e=au,r=ou,i=cu;return n.innerRadius=function(e){return arguments.length?(t=lt(e),n):t},n.outerRadius=function(t){return arguments.length?(e=lt(t),n):e},n.startAngle=function(t){return arguments.length?(r=lt(t),n):r},n.endAngle=function(t){return arguments.length?(i=lt(t),n):i},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,u=(r.apply(this,arguments)+i.apply(this,arguments))/2+nc;return[Math.cos(u)*n,Math.sin(u)*n]},n};var nc=-Da/2,tc=2*Da-1e-6;ua.svg.line.radial=function(){var n=De(lu);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},Pe.reverse=Re,Re.reverse=Pe,ua.svg.area=function(){return fu(ft)},ua.svg.area.radial=function(){var n=fu(lu);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ua.svg.chord=function(){function n(n,o){var c=t(this,u,n,o),l=t(this,a,n,o);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,l)?i(c.r,c.p1,c.r,c.p0):i(c.r,c.p1,l.r,l.p0)+r(l.r,l.p1,l.a1-l.a0)+i(l.r,l.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var i=t.call(n,e,r),u=o.call(n,i,r),a=c.call(n,i,r)+nc,f=l.call(n,i,r)+nc;return{r:u,a0:a,a1:f,p0:[u*Math.cos(a),u*Math.sin(a)],p1:[u*Math.cos(f),u*Math.sin(f)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Da)+",1 "+t}function i(n,t,e,r){return"Q 0,0 "+r}var u=se,a=he,o=su,c=ou,l=cu;return n.radius=function(t){return arguments.length?(o=lt(t),n):o},n.source=function(t){return arguments.length?(u=lt(t),n):u},n.target=function(t){return arguments.length?(a=lt(t),n):a},n.startAngle=function(t){return arguments.length?(c=lt(t),n):c},n.endAngle=function(t){return arguments.length?(l=lt(t),n):l},n},ua.svg.diagonal=function(){function n(n,i){var u=t.call(this,n,i),a=e.call(this,n,i),o=(u.y+a.y)/2,c=[u,{x:u.x,y:o},{x:a.x,y:o},a];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=se,e=he,r=hu;return n.source=function(e){return arguments.length?(t=lt(e),n):t},n.target=function(t){return arguments.length?(e=lt(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ua.svg.diagonal.radial=function(){var n=ua.svg.diagonal(),t=hu,e=n.projection;return n.projection=function(n){return arguments.length?e(gu(t=n)):t},n},ua.svg.symbol=function(){function n(n,r){return(ec.get(t.call(this,n,r))||mu)(e.call(this,n,r))}var t=du,e=pu;return n.type=function(e){return arguments.length?(t=lt(e),n):t},n.size=function(t){return arguments.length?(e=lt(t),n):e},n};var ec=ua.map({circle:mu,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*uc)),e=t*uc;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/ic),e=t*ic/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/ic),e=t*ic/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});ua.svg.symbolTypes=ec.keys();var rc,ic=Math.sqrt(3),uc=Math.tan(30*La),ac=[],oc=0,cc={ease:kr,delay:0,duration:250};ac.call=wa.call,ac.empty=wa.empty,ac.node=wa.node,ua.transition=function(n){return arguments.length?rc?n.transition():n:Na.transition()},ua.transition.prototype=ac,ac.select=function(n){var t,e,r,i=this.id,u=[];"function"!=typeof n&&(n=v(n));for(var a=-1,o=this.length;++a<o;){u.push(t=[]);for(var c=this[a],l=-1,f=c.length;++l<f;)(r=c[l])&&(e=n.call(r,r.__data__,l))?("__data__"in r&&(e.__data__=r.__data__),xu(e,l,i,r.__transition__[i]),t.push(e)):t.push(null)}return vu(u,i)},ac.selectAll=function(n){var t,e,r,i,u,a=this.id,o=[];"function"!=typeof n&&(n=y(n));for(var c=-1,l=this.length;++c<l;)for(var f=this[c],s=-1,h=f.length;++s<h;)if(r=f[s]){u=r.__transition__[a],e=n.call(r,r.__data__,s),o.push(t=[]);for(var g=-1,p=e.length;++g<p;)xu(i=e[g],g,a,u),t.push(i)}return vu(o,a)},ac.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=A(n));for(var u=0,a=this.length;a>u;u++){i.push(t=[]);for(var e=this[u],o=0,c=e.length;c>o;o++)(r=e[o])&&n.call(r,r.__data__,o)&&t.push(r)}return vu(i,this.id,this.time).ease(this.ease())},ac.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):D(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},ac.attr=function(n,t){function e(){this.removeAttribute(o)}function r(){this.removeAttributeNS(o.space,o.local)}function i(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(o);return e!==n&&(t=a(e,n),function(n){this.setAttribute(o,t(n))})})}function u(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(o.space,o.local);return e!==n&&(t=a(e,n),function(n){this.setAttributeNS(o.space,o.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var a=Mr(n),o=ua.ns.qualify(n);return yu(this,"attr."+n,t,o.local?u:i)},ac.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(i));return r&&function(n){this.setAttribute(i,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(i.space,i.local));return r&&function(n){this.setAttributeNS(i.space,i.local,r(n))}}var i=ua.ns.qualify(n);return this.tween("attr."+n,i.local?r:e)},ac.style=function(n,t,e){function r(){this.style.removeProperty(n)}function i(t){return null==t?r:(t+="",function(){var r,i=oa.getComputedStyle(this,null).getPropertyValue(n);return i!==t&&(r=a(i,t),function(t){this.style.setProperty(n,r(t),e)})})}var u=arguments.length;if(3>u){if("string"!=typeof n){2>u&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}var a=Mr(n);return yu(this,"style."+n,t,i)},ac.styleTween=function(n,t,e){function r(r,i){var u=t.call(this,r,i,oa.getComputedStyle(this,null).getPropertyValue(n));return u&&function(t){this.style.setProperty(n,u(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},ac.text=function(n){return yu(this,"text",n,Mu)},ac.remove=function(){return this.each("end.transition",function(){var n;!this.__transition__&&(n=this.parentNode)&&n.removeChild(this)})},ac.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=ua.ease.apply(ua,arguments)),D(this,function(e){e.__transition__[t].ease=n}))},ac.delay=function(n){var t=this.id;return D(this,"function"==typeof n?function(e,r,i){e.__transition__[t].delay=n.call(e,e.__data__,r,i)|0}:(n|=0,function(e){e.__transition__[t].delay=n}))},ac.duration=function(n){var t=this.id;return D(this,"function"==typeof n?function(e,r,i){e.__transition__[t].duration=Math.max(1,n.call(e,e.__data__,r,i)|0)}:(n=Math.max(1,0|n),function(e){e.__transition__[t].duration=n}))},ac.each=function(n,t){var e=this.id;if(arguments.length<2){var r=cc,i=rc;rc=e,D(this,function(t,r,i){cc=t.__transition__[e],n.call(t,t.__data__,r,i)}),cc=r,rc=i}else D(this,function(r){r.__transition__[e].event.on(n,t)});return this},ac.transition=function(){for(var n,t,e,r,i=this.id,u=++oc,a=[],o=0,c=this.length;c>o;o++){a.push(n=[]);for(var t=this[o],l=0,f=t.length;f>l;l++)(e=t[l])&&(r=Object.create(e.__transition__[i]),r.delay+=r.duration,xu(e,l,u,r)),n.push(e)}return vu(a,u)},ua.svg.axis=function(){function n(n){n.each(function(){var n,s=ua.select(this),h=null==l?e.ticks?e.ticks.apply(e,c):e.domain():l,g=null==t?e.tickFormat?e.tickFormat.apply(e,c):String:t,p=wu(e,h,f),d=s.selectAll(".tick.minor").data(p,String),m=d.enter().insert("line",".tick").attr("class","tick minor").style("opacity",1e-6),v=ua.transition(d.exit()).style("opacity",1e-6).remove(),y=ua.transition(d).style("opacity",1),M=s.selectAll(".tick.major").data(h,String),x=M.enter().insert("g","path").attr("class","tick major").style("opacity",1e-6),b=ua.transition(M.exit()).style("opacity",1e-6).remove(),_=ua.transition(M).style("opacity",1),w=Hi(e),S=s.selectAll(".domain").data([0]),E=(S.enter().append("path").attr("class","domain"),ua.transition(S)),k=e.copy(),A=this.__chart__||k;this.__chart__=k,x.append("line"),x.append("text");var N=x.select("line"),q=_.select("line"),T=M.select("text").text(g),C=x.select("text"),z=_.select("text");switch(r){case"bottom":n=bu,m.attr("y2",u),y.attr("x2",0).attr("y2",u),N.attr("y2",i),C.attr("y",Math.max(i,0)+o),q.attr("x2",0).attr("y2",i),z.attr("x",0).attr("y",Math.max(i,0)+o),T.attr("dy",".71em").style("text-anchor","middle"),E.attr("d","M"+w[0]+","+a+"V0H"+w[1]+"V"+a);break;case"top":n=bu,m.attr("y2",-u),y.attr("x2",0).attr("y2",-u),N.attr("y2",-i),C.attr("y",-(Math.max(i,0)+o)),q.attr("x2",0).attr("y2",-i),z.attr("x",0).attr("y",-(Math.max(i,0)+o)),T.attr("dy","0em").style("text-anchor","middle"),E.attr("d","M"+w[0]+","+-a+"V0H"+w[1]+"V"+-a);break;case"left":n=_u,m.attr("x2",-u),y.attr("x2",-u).attr("y2",0),N.attr("x2",-i),C.attr("x",-(Math.max(i,0)+o)),q.attr("x2",-i).attr("y2",0),z.attr("x",-(Math.max(i,0)+o)).attr("y",0),T.attr("dy",".32em").style("text-anchor","end"),E.attr("d","M"+-a+","+w[0]+"H0V"+w[1]+"H"+-a);break;case"right":n=_u,m.attr("x2",u),y.attr("x2",u).attr("y2",0),N.attr("x2",i),C.attr("x",Math.max(i,0)+o),q.attr("x2",i).attr("y2",0),z.attr("x",Math.max(i,0)+o).attr("y",0),T.attr("dy",".32em").style("text-anchor","start"),E.attr("d","M"+a+","+w[0]+"H0V"+w[1]+"H"+a)}if(e.ticks)x.call(n,A),_.call(n,k),b.call(n,k),m.call(n,A),y.call(n,k),v.call(n,k);else{var D=k.rangeBand()/2,j=function(n){return k(n)+D};x.call(n,j),_.call(n,j)}})}var t,e=ua.scale.linear(),r=lc,i=6,u=6,a=6,o=3,c=[10],l=null,f=0;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in fc?t+"":lc,n):r},n.ticks=function(){return arguments.length?(c=arguments,n):c},n.tickValues=function(t){return arguments.length?(l=t,n):l},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t,e){if(!arguments.length)return i;var r=arguments.length-1;return i=+t,u=r>1?+e:i,a=r>0?+arguments[r]:i,n},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(t){return arguments.length?(f=+t,n):f},n};var lc="bottom",fc={top:1,right:1,bottom:1,left:1};ua.svg.brush=function(){function n(u){u.each(function(){var u,a=ua.select(this),l=a.selectAll(".background").data([0]),s=a.selectAll(".extent").data([0]),h=a.selectAll(".resize").data(f,String);a.style("pointer-events","all").on("mousedown.brush",i).on("touchstart.brush",i),l.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),s.enter().append("rect").attr("class","extent").style("cursor","move"),h.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return sc[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),h.style("display",n.empty()?"none":null),h.exit().remove(),o&&(u=Hi(o),l.attr("x",u[0]).attr("width",u[1]-u[0]),e(a)),c&&(u=Hi(c),l.attr("y",u[0]).attr("height",u[1]-u[0]),r(a)),t(a)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)][0]+","+s[+/^s/.test(n)][1]+")"})}function e(n){n.select(".extent").attr("x",s[0][0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1][0]-s[0][0])}function r(n){n.select(".extent").attr("y",s[0][1]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",s[1][1]-s[0][1])}function i(){function i(){var n=ua.event.changedTouches;
return n?ua.touches(y,n)[0]:ua.mouse(y)}function f(){ua.event.keyCode==32&&(E||(m=null,k[0]-=s[1][0],k[1]-=s[1][1],E=2),l())}function h(){ua.event.keyCode==32&&2==E&&(k[0]+=s[1][0],k[1]+=s[1][1],E=0,l())}function g(){var n=i(),u=!1;v&&(n[0]+=v[0],n[1]+=v[1]),E||(ua.event.altKey?(m||(m=[(s[0][0]+s[1][0])/2,(s[0][1]+s[1][1])/2]),k[0]=s[+(n[0]<m[0])][0],k[1]=s[+(n[1]<m[1])][1]):m=null),w&&p(n,o,0)&&(e(b),u=!0),S&&p(n,c,1)&&(r(b),u=!0),u&&(t(b),x({type:"brush",mode:E?"move":"resize"}))}function p(n,t,e){var r,i,a=Hi(t),o=a[0],c=a[1],l=k[e],f=s[1][e]-s[0][e];return E&&(o-=l,c-=f+l),r=Math.max(o,Math.min(c,n[e])),E?i=(r+=l)+f:(m&&(l=Math.max(o,Math.min(c,2*m[e]-r))),r>l?(i=r,r=l):i=l),s[0][e]!==r||s[1][e]!==i?(u=null,s[0][e]=r,s[1][e]=i,!0):void 0}function d(){g(),b.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ua.select("body").style("cursor",null),A.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),x({type:"brushend"}),l()}var m,v,y=this,M=ua.select(ua.event.target),x=a.of(y,arguments),b=ua.select(y),_=M.datum(),w=!/^(n|s)$/.test(_)&&o,S=!/^(e|w)$/.test(_)&&c,E=M.classed("extent"),k=i(),A=ua.select(oa).on("mousemove.brush",g).on("mouseup.brush",d).on("touchmove.brush",g).on("touchend.brush",d).on("keydown.brush",f).on("keyup.brush",h);if(E)k[0]=s[0][0]-k[0],k[1]=s[0][1]-k[1];else if(_){var N=+/w$/.test(_),q=+/^n/.test(_);v=[s[1-N][0]-k[0],s[1-q][1]-k[1]],k[0]=s[N][0],k[1]=s[q][1]}else ua.event.altKey&&(m=k.slice());b.style("pointer-events","none").selectAll(".resize").style("display",null),ua.select("body").style("cursor",M.style("cursor")),x({type:"brushstart"}),g(),l()}var u,a=h(n,"brushstart","brush","brushend"),o=null,c=null,f=hc[0],s=[[0,0],[0,0]];return n.x=function(t){return arguments.length?(o=t,f=hc[!o<<1|!c],n):o},n.y=function(t){return arguments.length?(c=t,f=hc[!o<<1|!c],n):c},n.extent=function(t){var e,r,i,a,l;return arguments.length?(u=[[0,0],[0,0]],o&&(e=t[0],r=t[1],c&&(e=e[0],r=r[0]),u[0][0]=e,u[1][0]=r,o.invert&&(e=o(e),r=o(r)),e>r&&(l=e,e=r,r=l),s[0][0]=0|e,s[1][0]=0|r),c&&(i=t[0],a=t[1],o&&(i=i[1],a=a[1]),u[0][1]=i,u[1][1]=a,c.invert&&(i=c(i),a=c(a)),i>a&&(l=i,i=a,a=l),s[0][1]=0|i,s[1][1]=0|a),n):(t=u||s,o&&(e=t[0][0],r=t[1][0],u||(e=s[0][0],r=s[1][0],o.invert&&(e=o.invert(e),r=o.invert(r)),e>r&&(l=e,e=r,r=l))),c&&(i=t[0][1],a=t[1][1],u||(i=s[0][1],a=s[1][1],c.invert&&(i=c.invert(i),a=c.invert(a)),i>a&&(l=i,i=a,a=l))),o&&c?[[e,i],[r,a]]:o?[e,r]:c&&[i,a])},n.clear=function(){return u=null,s[0][0]=s[0][1]=s[1][0]=s[1][1]=0,n},n.empty=function(){return o&&s[0][0]===s[1][0]||c&&s[0][1]===s[1][1]},ua.rebind(n,a,"on")};var sc={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},hc=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]];ua.time={};var gc=Date,pc=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];Su.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){dc.setUTCDate.apply(this._,arguments)},setDay:function(){dc.setUTCDay.apply(this._,arguments)},setFullYear:function(){dc.setUTCFullYear.apply(this._,arguments)},setHours:function(){dc.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){dc.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){dc.setUTCMinutes.apply(this._,arguments)},setMonth:function(){dc.setUTCMonth.apply(this._,arguments)},setSeconds:function(){dc.setUTCSeconds.apply(this._,arguments)},setTime:function(){dc.setTime.apply(this._,arguments)}};var dc=Date.prototype,mc="%a %b %e %X %Y",vc="%m/%d/%Y",yc="%H:%M:%S",Mc=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],xc=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],bc=["January","February","March","April","May","June","July","August","September","October","November","December"],_c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];ua.time.year=Eu(function(n){return n=ua.time.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ua.time.years=ua.time.year.range,ua.time.years.utc=ua.time.year.utc.range,ua.time.day=Eu(function(n){var t=new gc(1970,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ua.time.days=ua.time.day.range,ua.time.days.utc=ua.time.day.utc.range,ua.time.dayOfYear=function(n){var t=ua.time.year(n);return Math.floor((n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*6e4)/864e5)},pc.forEach(function(n,t){n=n.toLowerCase(),t=7-t;var e=ua.time[n]=Eu(function(n){return(n=ua.time.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+Math.floor(t)*7)},function(n){var e=ua.time.year(n).getDay();return Math.floor((ua.time.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ua.time[n+"s"]=e.range,ua.time[n+"s"].utc=e.utc.range,ua.time[n+"OfYear"]=function(n){var e=ua.time.year(n).getDay();return Math.floor((ua.time.dayOfYear(n)+(e+t)%7)/7)}}),ua.time.week=ua.time.sunday,ua.time.weeks=ua.time.sunday.range,ua.time.weeks.utc=ua.time.sunday.utc.range,ua.time.weekOfYear=ua.time.sundayOfYear,ua.time.format=function(n){function t(t){for(var r,i,u,a=[],o=-1,c=0;++o<e;)n.charCodeAt(o)===37&&(a.push(n.substring(c,o)),(i=qc[r=n.charAt(++o)])!=null&&(r=n.charAt(++o)),(u=Tc[r])&&(r=u(t,null==i?"e"===r?" ":"0":i)),a.push(r),c=o+1);return a.push(n.substring(c,o)),a.join("")}var e=n.length;return t.parse=function(t){var e={y:1900,m:0,d:1,H:0,M:0,S:0,L:0},r=Au(e,n,t,0);if(r!=t.length)return null;"p"in e&&(e.H=e.H%12+e.p*12);var i=new gc;return i.setFullYear(e.y,e.m,e.d),i.setHours(e.H,e.M,e.S,e.L),i},t.toString=function(){return n},t};var wc=Nu(Mc),Sc=Nu(xc),Ec=Nu(bc),kc=qu(bc),Ac=Nu(_c),Nc=qu(_c),qc={"-":"",_:" ",0:"0"},Tc={a:function(n){return xc[n.getDay()]},A:function(n){return Mc[n.getDay()]},b:function(n){return _c[n.getMonth()]},B:function(n){return bc[n.getMonth()]},c:ua.time.format(mc),d:function(n,t){return Tu(n.getDate(),t,2)},e:function(n,t){return Tu(n.getDate(),t,2)},H:function(n,t){return Tu(n.getHours(),t,2)},I:function(n,t){return Tu(n.getHours()%12||12,t,2)},j:function(n,t){return Tu(1+ua.time.dayOfYear(n),t,3)},L:function(n,t){return Tu(n.getMilliseconds(),t,3)},m:function(n,t){return Tu(n.getMonth()+1,t,2)},M:function(n,t){return Tu(n.getMinutes(),t,2)},p:function(n){return n.getHours()>=12?"PM":"AM"},S:function(n,t){return Tu(n.getSeconds(),t,2)},U:function(n,t){return Tu(ua.time.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Tu(ua.time.mondayOfYear(n),t,2)},x:ua.time.format(vc),X:ua.time.format(yc),y:function(n,t){return Tu(n.getFullYear()%100,t,2)},Y:function(n,t){return Tu(n.getFullYear()%1e4,t,4)},Z:$u,"%":function(){return"%"}},Cc={a:Cu,A:zu,b:Du,B:ju,c:Lu,d:Uu,e:Uu,H:Iu,I:Iu,L:Zu,m:Yu,M:Vu,p:Bu,S:Xu,x:Fu,X:Hu,y:Ru,Y:Pu},zc=/^\s*\d+/,Dc=ua.map({am:0,pm:1});ua.time.format.utc=function(n){function t(n){try{gc=Su;var t=new gc;return t._=n,e(t)}finally{gc=Date}}var e=ua.time.format(n);return t.parse=function(n){try{gc=Su;var t=e.parse(n);return t&&t._}finally{gc=Date}},t.toString=e.toString,t};var jc=ua.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");ua.time.format.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Ju:jc,Ju.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Ju.toString=jc.toString,ua.time.second=Eu(function(n){return new gc(Math.floor(n/1e3)*1e3)},function(n,t){n.setTime(n.getTime()+Math.floor(t)*1e3)},function(n){return n.getSeconds()}),ua.time.seconds=ua.time.second.range,ua.time.seconds.utc=ua.time.second.utc.range,ua.time.minute=Eu(function(n){return new gc(Math.floor(n/6e4)*6e4)},function(n,t){n.setTime(n.getTime()+Math.floor(t)*6e4)},function(n){return n.getMinutes()}),ua.time.minutes=ua.time.minute.range,ua.time.minutes.utc=ua.time.minute.utc.range,ua.time.hour=Eu(function(n){var t=n.getTimezoneOffset()/60;return new gc((Math.floor(n/36e5-t)+t)*36e5)},function(n,t){n.setTime(n.getTime()+Math.floor(t)*36e5)},function(n){return n.getHours()}),ua.time.hours=ua.time.hour.range,ua.time.hours.utc=ua.time.hour.utc.range,ua.time.month=Eu(function(n){return n=ua.time.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ua.time.months=ua.time.month.range,ua.time.months.utc=ua.time.month.utc.range;var Lc=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Fc=[[ua.time.second,1],[ua.time.second,5],[ua.time.second,15],[ua.time.second,30],[ua.time.minute,1],[ua.time.minute,5],[ua.time.minute,15],[ua.time.minute,30],[ua.time.hour,1],[ua.time.hour,3],[ua.time.hour,6],[ua.time.hour,12],[ua.time.day,1],[ua.time.day,2],[ua.time.week,1],[ua.time.month,1],[ua.time.month,3],[ua.time.year,1]],Hc=[[ua.time.format("%Y"),Ht],[ua.time.format("%B"),function(n){return n.getMonth()}],[ua.time.format("%b %d"),function(n){return n.getDate()!=1}],[ua.time.format("%a %d"),function(n){return n.getDay()&&n.getDate()!=1}],[ua.time.format("%I %p"),function(n){return n.getHours()}],[ua.time.format("%I:%M"),function(n){return n.getMinutes()}],[ua.time.format(":%S"),function(n){return n.getSeconds()}],[ua.time.format(".%L"),function(n){return n.getMilliseconds()}]],Pc=ua.scale.linear(),Rc=Wu(Hc);Fc.year=function(n,t){return Pc.domain(n.map(na)).ticks(t).map(Qu)},ua.time.scale=function(){return Gu(ua.scale.linear(),Fc,Rc)};var Oc=Fc.map(function(n){return[n[0].utc,n[1]]}),Yc=[[ua.time.format.utc("%Y"),Ht],[ua.time.format.utc("%B"),function(n){return n.getUTCMonth()}],[ua.time.format.utc("%b %d"),function(n){return n.getUTCDate()!=1}],[ua.time.format.utc("%a %d"),function(n){return n.getUTCDay()&&n.getUTCDate()!=1}],[ua.time.format.utc("%I %p"),function(n){return n.getUTCHours()}],[ua.time.format.utc("%I:%M"),function(n){return n.getUTCMinutes()}],[ua.time.format.utc(":%S"),function(n){return n.getUTCSeconds()}],[ua.time.format.utc(".%L"),function(n){return n.getUTCMilliseconds()}]],Uc=Wu(Yc);return Oc.year=function(n,t){return Pc.domain(n.map(ea)).ticks(t).map(ta)},ua.time.scale.utc=function(){return Gu(ua.scale.linear(),Oc,Uc)},ua.text=st(function(n){return n.responseText}),ua.json=function(n,t){return ht(n,"application/json",ra,t)},ua.html=function(n,t){return ht(n,"text/html",ia,t)},ua.xml=st(function(n){return n.responseXML}),ua}();
(function(){var t=this;var e=t.Backbone;var i=[];var r=i.push;var s=i.slice;var n=i.splice;var a;if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.0.0";var h=t._;if(!h&&typeof require!=="undefined")h=require("underscore");a.$=t.jQuery||t.Zepto||t.ender||t.$;a.noConflict=function(){t.Backbone=e;return this};a.emulateHTTP=false;a.emulateJSON=false;var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this;var r=this;var s=h.once(function(){r.off(t,s);e.apply(this,arguments)});s._callback=e;return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f;if(!this._events||!l(this,"off",t,[e,i]))return this;if(!t&&!e&&!i){this._events={};return this}a=t?[t]:h.keys(this._events);for(o=0,u=a.length;o<u;o++){t=a[o];if(n=this._events[t]){this._events[t]=r=[];if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c];if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!l(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)c(i,e);if(r)c(r,arguments);return this},stopListening:function(t,e,i){var r=this._listeners;if(!r)return this;var s=!e&&!i;if(typeof e==="object")i=this;if(t)(r={})[t._listenerId]=t;for(var n in r){r[n].off(e,i,this);if(s)delete this._listeners[n]}return this}};var u=/\s+/;var l=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u);for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}};var f={listenTo:"on",listenToOnce:"once"};h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeners||(this._listeners={});var n=e._listenerId||(e._listenerId=h.uniqueId("l"));s[n]=e;if(typeof i==="object")r=this;e[t](i,r,this);return this}});o.bind=o.on;o.unbind=o.off;h.extend(a,o);var d=a.Model=function(t,e){var i;var r=t||{};e||(e={});this.cid=h.uniqueId("c");this.attributes={};h.extend(this,h.pick(e,p));if(e.parse)r=this.parse(r,e)||{};if(i=h.result(this,"defaults")){r=h.defaults({},r,i)}this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};var p=["url","urlRoot","collection"];h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c;if(t==null)return this;if(typeof t==="object"){s=t;i=e}else{(s={})[t]=e}i||(i={});if(!this._validate(s,i))return false;n=i.unset;o=i.silent;a=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=h.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(r in s){e=s[r];if(!h.isEqual(c[r],e))a.push(r);if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true;for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this;if(!o){while(this._pending){this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed);return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false;var e,i=false;var r=this._changing?this._previousAttributes:this.attributes;for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var i=t.success;t.success=function(r){if(!e.set(e.parse(r,t),t))return false;if(i)i(e,r,t);e.trigger("sync",e,r,t)};R(this,t);return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}if(r&&(!i||!i.wait)&&!this.set(r,i))return false;i=h.extend({validate:true},i);if(!this._validate(r,i))return false;if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true;var o=this;var u=i.success;i.success=function(t){o.attributes=a;var e=o.parse(t,i);if(i.wait)e=h.extend(r||{},e);if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i);o.trigger("sync",o,t,i)};R(this,i);s=this.isNew()?"create":i.patch?"patch":"update";if(s==="patch")i.attrs=r;n=this.sync(s,this,i);if(r&&i.wait)this.attributes=a;return n},destroy:function(t){t=t?h.clone(t):{};var e=this;var i=t.success;var r=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(s){if(t.wait||e.isNew())r();if(i)i(e,s,t);if(!e.isNew())e.trigger("sync",e,s,t)};if(this.isNew()){t.success();return false}R(this,t);var s=this.sync("delete",this,t);if(!t.wait)r();return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||U();if(this.isNew())return t;return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=h.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,h.extend(e||{},{validationError:i}));return false}});var v=["keys","values","pairs","invert","pick","omit"];h.each(v,function(t){d.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.attributes);return h[t].apply(h,e)}});var g=a.Collection=function(t,e){e||(e={});if(e.url)this.url=e.url;if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,h.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,merge:false,remove:false};h.extend(g.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.defaults(e||{},y))},remove:function(t,e){t=h.isArray(t)?t.slice():[t];e||(e={});var i,r,s,n;for(i=0,r=t.length;i<r;i++){n=this.get(t[i]);if(!n)continue;delete this._byId[n.id];delete this._byId[n.cid];s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}this._removeReference(n)}return this},set:function(t,e){e=h.defaults(e||{},m);if(e.parse)t=this.parse(t,e);if(!h.isArray(t))t=t?[t]:[];var i,s,a,o,u,l;var c=e.at;var f=this.comparator&&c==null&&e.sort!==false;var d=h.isString(this.comparator)?this.comparator:null;var p=[],v=[],g={};for(i=0,s=t.length;i<s;i++){if(!(a=this._prepareModel(t[i],e)))continue;if(u=this.get(a)){if(e.remove)g[u.cid]=true;if(e.merge){u.set(a.attributes,e);if(f&&!l&&u.hasChanged(d))l=true}}else if(e.add){p.push(a);a.on("all",this._onModelEvent,this);this._byId[a.cid]=a;if(a.id!=null)this._byId[a.id]=a}}if(e.remove){for(i=0,s=this.length;i<s;++i){if(!g[(a=this.models[i]).cid])v.push(a)}if(v.length)this.remove(v,e)}if(p.length){if(f)l=true;this.length+=p.length;if(c!=null){n.apply(this.models,[c,0].concat(p))}else{r.apply(this.models,p)}}if(l)this.sort({silent:true});if(e.silent)return this;for(i=0,s=p.length;i<s;i++){(a=p[i]).trigger("add",a,this,e)}if(l)this.trigger("sort",this,e);return this},reset:function(t,e){e||(e={});for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models;this._reset();this.add(t,h.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return this},push:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:this.length},e));return t},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:0},e));return t},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(t,e){return this.models.slice(t,e)},get:function(t){if(t==null)return void 0;return this._byId[t.id!=null?t.id:t.cid||t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},sortedIndex:function(t,e,i){e||(e=this.comparator);var r=h.isFunction(e)?e:function(t){return t.get(e)};return h.sortedIndex(this.models,t,r,i)},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var i=this;t.success=function(r){var s=t.reset?"reset":"set";i[s](r,t);if(e)e(i,r,t);i.trigger("sync",i,r,t)};R(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var i=this;var r=e.success;e.success=function(s){if(e.wait)i.add(t,e);if(r)r(t,s,e)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this;return t}e||(e={});e.collection=this;var i=new this.model(t,e);if(!i._validate(t,e)){this.trigger("invalid",this,t,e);return false}return i},_removeReference:function(t){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];h.each(_,function(t){g.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.models);return h[t].apply(h,e)}});var w=["groupBy","countBy","sortBy"];h.each(w,function(t){g.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)};return h[t](this.models,r,i)}});var b=a.View=function(t){this.cid=h.uniqueId("view");this._configure(t||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];h.extend(b.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,e){if(this.$el)this.undelegateEvents();this.$el=t instanceof a.$?t:a.$(t);this.el=this.$el[0];if(e!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!h.isFunction(i))i=this[t[e]];if(!i)continue;var r=e.match(x);var s=r[1],n=r[2];i=h.bind(i,this);s+=".delegateEvents"+this.cid;if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_configure:function(t){if(this.options)t=h.extend({},h.result(this,"options"),t);h.extend(this,h.pick(t,E));this.options=t},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"));if(this.id)t.id=h.result(this,"id");if(this.className)t["class"]=h.result(this,"className");var e=a.$("<"+h.result(this,"tagName")+">").attr(t);this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}});a.sync=function(t,e,i){var r=k[t];h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON});var s={type:r,dataType:"json"};if(!i.url){s.url=h.result(e,"url")||U()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json";s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded";s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST";if(i.emulateJSON)s.data._method=r;var n=i.beforeSend;i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r);if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i));e.trigger("request",e,o,i);return o};var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};a.ajax=function(){return a.$.ajax.apply(a.$,arguments)};var S=a.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var $=/\((.*?)\)/g;var T=/(\(\?)?:\w+/g;var H=/\*\w+/g;var A=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(S.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t);if(h.isFunction(e)){i=e;e=""}if(!i)i=this[e];var r=this;a.history.route(t,function(s){var n=r._extractParameters(t,s);i&&i.apply(r,n);r.trigger.apply(r,["route:"+e].concat(n));r.trigger("route",e,n);a.history.trigger("route",r,e,n)});return this},navigate:function(t,e){a.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=h.result(this,"routes");var t,e=h.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(A,"\\$&").replace($,"(?:$1)?").replace(T,function(t,e){return e?t:"([^/]+)"}).replace(H,"(.*?)");return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return h.map(i,function(t){return t?decodeURIComponent(t):null})}});var I=a.History=function(){this.handlers=[];h.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var P=/^\/+|\/+$/g;var O=/msie [\w.]+/;var C=/\/$/;I.started=false;h.extend(I.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.substr(i.length)}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(I.started)throw new Error("Backbone.history has already been started");I.started=true;this.options=h.extend({},{root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var e=this.getFragment();var i=document.documentMode;var r=O.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(P,"/");if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e;var s=this.location;var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!n){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._wantsPushState&&this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(N,"");this.history.replaceState({},document.title,this.root+this.fragment+s.search)}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);I.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(t){var e=this.fragment=this.getFragment(t);var i=h.any(this.handlers,function(t){if(t.route.test(e)){t.callback(e);return true}});return i},navigate:function(t,e){if(!I.started)return false;if(!e||e===true)e={trigger:e};t=this.getFragment(t||"");if(this.fragment===t)return;this.fragment=t;var i=this.root+t;if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});a.history=new I;var j=function(t,e){var i=this;var r;if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e);var s=function(){this.constructor=r};s.prototype=i.prototype;r.prototype=new s;if(t)h.extend(r.prototype,t);r.__super__=i.prototype;return r};d.extend=g.extend=S.extend=b.extend=I.extend=j;var U=function(){throw new Error('A "url" property or function must be specified')};var R=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}}}).call(this);
/*
//@ sourceMappingURL=backbone-min.map
*/
/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT @license.
*/
(function(e,t,i,n){"use strict";function r(e){return String.fromCharCode(e.charCodeAt(0)-32)+e.slice(1)}function o(e,t,i){var n=t-(e+"").length;n=0>n?0:n;for(var r="",o=0;n>o;o++)r+=i;return r+e}var s=e,l="	\n\f\r   ᠎             　\u2028\u2029﻿";if(!String.prototype.trim||l.trim()){l="["+l+"]";var a=RegExp("^"+l+l+"*"),h=RegExp(l+l+"*$");String.prototype.trim=function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");return(this+"").replace(a,"").replace(h,"")}}var c=e.Backgrid={VERSION:"0.2.0",Extension:{},requireOptions:function(e,t){for(var n=0;t.length>n;n++){var r=t[n];if(i.isUndefined(e[r]))throw new TypeError("'"+r+"' is required")}},resolveNameToClass:function(e,t){if(i.isString(e)){var n=i.map(e.split("-"),function(e){return r(e)}).join("")+t,o=c[n]||c.Extension[n];if(i.isUndefined(o))throw new ReferenceError("Class '"+n+"' not found");return o}return e}};i.extend(c,n.Events);var d=c.Command=function(e){i.extend(this,{altKey:!!e.altKey,"char":e.char,charCode:e.charCode,ctrlKey:!!e.ctrlKey,key:e.key,keyCode:e.keyCode,locale:e.locale,location:e.location,metaKey:!!e.metaKey,repeat:!!e.repeat,shiftKey:!!e.shiftKey,which:e.which})};i.extend(d.prototype,{moveUp:function(){return 38==this.keyCode},moveDown:function(){return 40===this.keyCode},moveLeft:function(){return this.shiftKey&&9===this.keyCode},moveRight:function(){return!this.shiftKey&&9===this.keyCode},save:function(){return 13===this.keyCode},cancel:function(){return 27===this.keyCode},passThru:function(){return!(this.moveUp()||this.moveDown()||this.moveLeft()||this.moveRight()||this.save()||this.cancel())}});var u=c.CellFormatter=function(){};i.extend(u.prototype,{fromRaw:function(e){return e},toRaw:function(e){return e}});var m=c.NumberFormatter=function(e){if(e=e?i.clone(e):{},i.extend(this,this.defaults,e),0>this.decimals||this.decimals>20)throw new RangeError("decimals must be between 0 and 20")};m.prototype=new u,i.extend(m.prototype,{defaults:{decimals:2,decimalSeparator:".",orderSeparator:","},HUMANIZED_NUM_RE:/(\d)(?=(?:\d{3})+$)/g,fromRaw:function(e){if(i.isNull(e)||i.isUndefined(e))return"";e=e.toFixed(~~this.decimals);var t=e.split("."),n=t[0],r=t[1]?(this.decimalSeparator||".")+t[1]:"";return n.replace(this.HUMANIZED_NUM_RE,"$1"+this.orderSeparator)+r},toRaw:function(e){for(var t="",n=e.trim().split(this.orderSeparator),r=0;n.length>r;r++)t+=n[r];var o=t.split(this.decimalSeparator);t="";for(var r=0;o.length>r;r++)t=t+o[r]+".";"."===t[t.length-1]&&(t=t.slice(0,t.length-1));var s=1*(1*t).toFixed(~~this.decimals);return i.isNumber(s)&&!i.isNaN(s)?s:void 0}});var p=c.DatetimeFormatter=function(e){if(e=e?i.clone(e):{},i.extend(this,this.defaults,e),!this.includeDate&&!this.includeTime)throw Error("Either includeDate or includeTime must be true")};p.prototype=new u,i.extend(p.prototype,{defaults:{includeDate:!0,includeTime:!0,includeMilli:!1},DATE_RE:/^([+\-]?\d{4})-(\d{2})-(\d{2})$/,TIME_RE:/^(\d{2}):(\d{2}):(\d{2})(\.(\d{3}))?$/,ISO_SPLITTER_RE:/T|Z| +/,_convert:function(e,t){e=e.trim();var n=e.split(this.ISO_SPLITTER_RE)||[],r=this.DATE_RE.test(n[0])?n[0]:"",s=r&&n[1]?n[1]:this.TIME_RE.test(n[0])?n[0]:"",l=this.DATE_RE.exec(r)||[],a=this.TIME_RE.exec(s)||[];if(t){if(this.includeDate&&i.isUndefined(l[0]))return;if(this.includeTime&&i.isUndefined(a[0]))return;if(!this.includeDate&&r)return;if(!this.includeTime&&s)return}var h=new Date(Date.UTC(1*l[1]||0,1*l[2]-1||0,1*l[3]||0,1*a[1]||null,1*a[2]||null,1*a[3]||null,1*a[5]||null)),c="";return this.includeDate&&(c=o(h.getUTCFullYear(),4,0)+"-"+o(h.getUTCMonth()+1,2,0)+"-"+o(h.getUTCDate(),2,0)),this.includeTime&&(c=c+(this.includeDate?"T":"")+o(h.getUTCHours(),2,0)+":"+o(h.getUTCMinutes(),2,0)+":"+o(h.getUTCSeconds(),2,0),this.includeMilli&&(c=c+"."+o(h.getUTCMilliseconds(),3,0))),this.includeDate&&this.includeTime&&(c+="Z"),c},fromRaw:function(e){return i.isNull(e)||i.isUndefined(e)?"":this._convert(e)},toRaw:function(e){return this._convert(e,!0)}});var f=c.StringFormatter=function(){};f.prototype=new u,i.extend(f.prototype,{fromRaw:function(e){return i.isUndefined(e)||i.isNull(e)?"":e+""}});var v=c.EmailFormatter=function(){};v.prototype=new u,i.extend(v.prototype,{toRaw:function(e){var t=e.trim().split("@");return 2===t.length&&i.all(t)?e:void 0}});var g=c.CellEditor=n.View.extend({initialize:function(e){c.requireOptions(e,["formatter","column","model"]),this.formatter=e.formatter,this.column=e.column,this.column instanceof $||(this.column=new $(this.column)),this.listenTo(this.model,"backgrid:editing",this.postRender)},postRender:function(e,t){return(null==t||t.get("name")==this.column.get("name"))&&this.$el.focus(),this}}),w=c.InputCellEditor=g.extend({tagName:"input",attributes:{type:"text"},events:{blur:"saveOrCancel",keydown:"saveOrCancel"},initialize:function(e){g.prototype.initialize.apply(this,arguments),e.placeholder&&this.$el.attr("placeholder",e.placeholder)},render:function(){return this.$el.val(this.formatter.fromRaw(this.model.get(this.column.get("name")))),this},saveOrCancel:function(e){var t=this.formatter,n=this.model,r=this.column,o=new d(e),l="blur"===e.type;if(o.moveUp()||o.moveDown()||o.moveLeft()||o.moveRight()||o.save()||l){e.preventDefault(),e.stopPropagation();var a=this.$el.val(),h=t.toRaw(a);if(i.isUndefined(h)){if(n.trigger("backgrid:error",n,r,a),l)var c=this,u=s.setTimeout(function(){c.$el.focus(),s.clearTimeout(u)},1)}else n.set(r.get("name"),h),n.trigger("backgrid:edited",n,r,o)}else o.cancel()&&(e.stopPropagation(),n.trigger("backgrid:edited",n,r,o))},postRender:function(e,t){if(null==t||t.get("name")==this.column.get("name"))if("right"===this.$el.css("text-align")){var i=this.$el.val();this.$el.focus().val(null).val(i)}else this.$el.focus();return this}}),y=c.Cell=n.View.extend({tagName:"td",formatter:new u,editor:w,events:{click:"enterEditMode"},initialize:function(e){c.requireOptions(e,["model","column"]),this.column=e.column,this.column instanceof $||(this.column=new $(this.column)),this.formatter=c.resolveNameToClass(this.formatter,"Formatter"),this.editor=c.resolveNameToClass(this.editor,"CellEditor"),this.listenTo(this.model,"change:"+this.column.get("name"),function(){this.$el.hasClass("editor")||this.render()})},render:function(){return this.$el.empty(),this.$el.text(this.formatter.fromRaw(this.model.get(this.column.get("name")))),this.delegateEvents(),this},enterEditMode:function(){var e=this.model,t=this.column;t.get("editable")&&(this.currentEditor=new this.editor({column:this.column,model:this.model,formatter:this.formatter}),e.trigger("backgrid:edit",e,t,this,this.currentEditor),this.listenTo(e,"backgrid:error",this.renderError),this.undelegateEvents(),this.$el.empty(),this.$el.append(this.currentEditor.$el),this.currentEditor.render(),this.$el.addClass("editor"),e.trigger("backgrid:editing",e,t,this,this.currentEditor))},renderError:function(e,t){(null==t||t.get("name")==this.column.get("name"))&&this.$el.addClass("error")},exitEditMode:function(){this.$el.removeClass("error"),this.currentEditor.remove(),this.stopListening(this.currentEditor),delete this.currentEditor,this.$el.removeClass("editor"),this.render()},remove:function(){return this.currentEditor&&(this.currentEditor.remove.apply(this,arguments),delete this.currentEditor),n.View.prototype.remove.apply(this,arguments)}}),C=c.StringCell=y.extend({className:"string-cell",formatter:new f});c.UriCell=y.extend({className:"uri-cell",render:function(){this.$el.empty();var e=this.formatter.fromRaw(this.model.get(this.column.get("name")));return this.$el.append(t("<a>",{tabIndex:-1,href:e,title:e,target:"_blank"}).text(e)),this.delegateEvents(),this}}),c.EmailCell=C.extend({className:"email-cell",formatter:new v,render:function(){this.$el.empty();var e=this.formatter.fromRaw(this.model.get(this.column.get("name")));return this.$el.append(t("<a>",{tabIndex:-1,href:"mailto:"+e,title:e}).text(e)),this.delegateEvents(),this}});var b=c.NumberCell=y.extend({className:"number-cell",decimals:m.prototype.defaults.decimals,decimalSeparator:m.prototype.defaults.decimalSeparator,orderSeparator:m.prototype.defaults.orderSeparator,formatter:m,initialize:function(){y.prototype.initialize.apply(this,arguments),this.formatter=new this.formatter({decimals:this.decimals,decimalSeparator:this.decimalSeparator,orderSeparator:this.orderSeparator})}});c.IntegerCell=b.extend({className:"integer-cell",decimals:0});var E=c.DatetimeCell=y.extend({className:"datetime-cell",includeDate:p.prototype.defaults.includeDate,includeTime:p.prototype.defaults.includeTime,includeMilli:p.prototype.defaults.includeMilli,formatter:p,initialize:function(){y.prototype.initialize.apply(this,arguments),this.formatter=new this.formatter({includeDate:this.includeDate,includeTime:this.includeTime,includeMilli:this.includeMilli});var e=this.includeDate?"YYYY-MM-DD":"";e+=this.includeDate&&this.includeTime?"T":"",e+=this.includeTime?"HH:mm:ss":"",e+=this.includeTime&&this.includeMilli?".SSS":"",this.editor=this.editor.extend({attributes:i.extend({},this.editor.prototype.attributes,this.editor.attributes,{placeholder:e})})}});c.DateCell=E.extend({className:"date-cell",includeTime:!1}),c.TimeCell=E.extend({className:"time-cell",includeDate:!1});var x=c.BooleanCellEditor=g.extend({tagName:"input",attributes:{tabIndex:-1,type:"checkbox"},events:{blur:"enterOrExitEditMode",change:"saveOrCancel",keydown:"saveOrCancel"},render:function(){var e=this.formatter.fromRaw(this.model.get(this.column.get("name")));return this.$el.prop("checked",e),this},enterOrExitEditMode:function(e){var t=this.$el.prop("checked"),i=this,n=this.model,r=s.setTimeout(function(){i.$el.prop("checked")!=t?i.$el.focus():n.trigger("backgrid:edited",n,i.column,new d(e)),s.clearTimeout(r)},50)},saveOrCancel:function(e){var t=this.model,i=this.column,n=this.formatter,r=new d(e);if(r.passThru()&&"change"!=e.type)return!0;if(r.cancel()&&(e.stopPropagation(),t.trigger("backgrid:edited",t,i,r)),r.save()||r.moveLeft()||r.moveRight()||r.moveUp()||r.moveDown()){e.preventDefault(),e.stopPropagation();var o=n.toRaw(this.$el.prop("checked"));t.set(i.get("name"),o),t.trigger("backgrid:edited",t,i,r)}else if("change"==e.type){var o=n.toRaw(this.$el.prop("checked"));t.set(i.get("name"),o)}}});c.BooleanCell=y.extend({className:"boolean-cell",editor:x,events:{click:"enterEditMode"},render:function(){return this.$el.empty(),this.$el.append(t("<input>",{tabIndex:-1,type:"checkbox",checked:this.formatter.fromRaw(this.model.get(this.column.get("name")))})),this.delegateEvents(),this}});var T=c.SelectCellEditor=g.extend({tagName:"select",events:{change:"save",blur:"close",keydown:"close"},template:i.template('<option value="<%- value %>" <%= selected ? \'selected="selected"\' : "" %>><%- text %></option>'),setOptionValues:function(e){this.optionValues=e},_renderOptions:function(e,t){for(var i="",n=0;e.length>n;n++)i+=this.template({text:e[n][0],value:e[n][1],selected:t==e[n][1]});return i},render:function(){this.$el.empty();var e=i.result(this,"optionValues"),n=this.model.get(this.column.get("name"));if(!i.isArray(e))throw TypeError("optionValues must be an array");for(var r=null,o=null,r=null,s=null,l=null,a=0;e.length>a;a++){var r=e[a];if(i.isArray(r))o=r[0],r=r[1],this.$el.append(this.template({text:o,value:r,selected:r==n}));else{if(!i.isObject(r))throw TypeError("optionValues elements must be a name-value pair or an object hash of { name: 'optgroup label', value: [option name-value pairs] }");s=r.name,l=t("<optgroup></optgroup>",{label:s}),l.append(this._renderOptions(r.values,n)),this.$el.append(l)}}return this.delegateEvents(),this},save:function(e){var t=this.model,i=this.column;t.set(i.get("name"),this.formatter.toRaw(this.$el.val())),t.trigger("backgrid:edited",t,i,new d(e))},close:function(e){var t=this.model,i=this.column,n=new d(e);n.cancel()?(e.stopPropagation(),t.trigger("backgrid:edited",t,i,new d(e))):(n.save()||n.moveLeft()||n.moveRight()||n.moveUp()||n.moveDown()||"blur"==e.type)&&(e.preventDefault(),e.stopPropagation(),t.trigger("backgrid:edited",t,i,new d(e)))}});c.SelectCell=y.extend({className:"select-cell",editor:T,optionValues:void 0,initialize:function(){y.prototype.initialize.apply(this,arguments),c.requireOptions(this,["optionValues"]),this.optionValues=i.result(this,"optionValues"),this.listenTo(this.model,"backgrid:edit",function(e,t,i,n){t.get("name")==this.column.get("name")&&n.setOptionValues(this.optionValues)})},render:function(){this.$el.empty();var e=this.optionValues,t=this.formatter.fromRaw(this.model.get(this.column.get("name")));try{if(!i.isArray(e)||i.isEmpty(e))throw new TypeError;for(var n=0;e.length>n;n++){var r=e[n];if(i.isArray(r)){var o=r[0],r=r[1];if(r==t){this.$el.append(o);break}}else{if(!i.isObject(r))throw new TypeError;for(var s=r.values,l=0;s.length>l;l++){var a=s[l];if(a[1]==t){this.$el.append(a[0]);break}}}}}catch(h){if(h instanceof TypeError)throw TypeError("'optionValues' must be of type {Array.<Array>|Array.<{name: string, values: Array.<Array>}>}");throw h}return this.delegateEvents(),this}});var $=c.Column=n.Model.extend({defaults:{name:void 0,label:void 0,sortable:!0,editable:!0,renderable:!0,formatter:void 0,cell:void 0,headerCell:void 0},initialize:function(e){c.requireOptions(e,["cell","name"]),this.has("label")||this.set({label:this.get("name")},{silent:!0});var t=c.resolveNameToClass(this.get("headerCell"),"HeaderCell"),i=c.resolveNameToClass(this.get("cell"),"Cell");this.set({cell:i,headerCell:t},{silent:!0})}}),R=c.Columns=n.Collection.extend({model:$}),k=c.Row=n.View.extend({tagName:"tr",requiredOptions:["columns","model"],initialize:function(e){c.requireOptions(e,this.requiredOptions);var t=this.columns=e.columns;t instanceof n.Collection||(t=this.columns=new R(t));for(var i=this.cells=[],r=0;t.length>r;r++)i.push(this.makeCell(t.at(r),e));this.listenTo(t,"change:renderable",function(e,t){for(var n=0;i.length>n;n++){var r=i[n];r.column.get("name")==e.get("name")&&(t?r.$el.show():r.$el.hide())}}),this.listenTo(t,"add",function(t,n){var r=n.indexOf(t),o=this.makeCell(t,e);i.splice(r,0,o),o.column.get("renderable")||o.$el.hide();var s=this.$el;0===r?s.prepend(o.render().$el):r===n.length-1?s.append(o.render().$el):s.children().eq(r).before(o.render().$el)}),this.listenTo(t,"remove",function(e,t,n){i[n.index].remove(),i.splice(n.index,1)})},makeCell:function(e){return new(e.get("cell"))({column:e,model:this.model})},render:function(){this.$el.empty();for(var e=document.createDocumentFragment(),t=0;this.cells.length>t;t++){var i=this.cells[t];e.appendChild(i.render().el),i.column.get("renderable")||i.$el.hide()}return this.el.appendChild(e),this.delegateEvents(),this},remove:function(){for(var e=0;this.cells.length>e;e++){var t=this.cells[e];t.remove.apply(t,arguments)}return n.View.prototype.remove.apply(this,arguments)}}),N=c.EmptyRow=n.View.extend({tagName:"tr",emptyText:null,initialize:function(e){c.requireOptions(e,["emptyText","columns"]),this.emptyText=e.emptyText,this.columns=e.columns},render:function(){this.$el.empty();var e=document.createElement("td");return e.setAttribute("colspan",this.columns.length),e.textContent=this.emptyText,this.el.setAttribute("class","empty"),this.el.appendChild(e),this}}),D=c.HeaderCell=n.View.extend({tagName:"th",events:{"click a":"onClick"},_direction:null,initialize:function(e){c.requireOptions(e,["column","collection"]),this.column=e.column,this.column instanceof $||(this.column=new $(this.column)),this.listenTo(n,"backgrid:sort",this._resetCellDirection)},direction:function(e){return arguments.length&&(this._direction&&this.$el.removeClass(this._direction),e&&this.$el.addClass(e),this._direction=e),this._direction},_resetCellDirection:function(e,t,i,n){n==this.collection&&(e!==this.column.get("name")?this.direction(null):this.direction(t))},onClick:function(e){e.preventDefault();var t=this.column.get("name");this.column.get("sortable")&&("ascending"===this.direction()?this.sort(t,"descending",function(e,i){var n=e.get(t),r=i.get(t);return n===r?0:n>r?-1:1}):"descending"===this.direction()?this.sort(t,null):this.sort(t,"ascending",function(e,i){var n=e.get(t),r=i.get(t);return n===r?0:r>n?-1:1}))},sort:function(e,t,i){i=i||this._cidComparator;var r=this.collection;if(n.PageableCollection&&r instanceof n.PageableCollection){var o;o="ascending"===t?-1:"descending"===t?1:null,r.setSorting(o?e:null,o),"client"==r.mode?(r.fullCollection.comparator||(r.fullCollection.comparator=i),r.fullCollection.sort()):r.fetch()}else r.comparator=i,r.sort();n.trigger("backgrid:sort",e,t,i,this.collection)},_cidComparator:function(e,t){var n=e.cid,r=t.cid;if(!i.isUndefined(n)&&!i.isUndefined(r)){if(n=1*n.slice(1),r=1*r.slice(1),r>n)return-1;if(n>r)return 1}return 0},render:function(){this.$el.empty();var e=t("<a>").text(this.column.get("label")).append("<b class='sort-caret'></b>");return this.$el.append(e),this.delegateEvents(),this}});c.HeaderRow=c.Row.extend({requiredOptions:["columns","collection"],initialize:function(){c.Row.prototype.initialize.apply(this,arguments)},makeCell:function(e,t){var i=e.get("headerCell")||t.headerCell||D;return i=new i({column:e,collection:this.collection})}});var O=c.Header=n.View.extend({tagName:"thead",initialize:function(e){c.requireOptions(e,["columns","collection"]),this.columns=e.columns,this.columns instanceof n.Collection||(this.columns=new R(this.columns)),this.row=new c.HeaderRow({columns:this.columns,collection:this.collection})},render:function(){return this.$el.append(this.row.render().$el),this.delegateEvents(),this},remove:function(){return this.row.remove.apply(this.row,arguments),n.View.prototype.remove.apply(this,arguments)}}),_=c.Body=n.View.extend({tagName:"tbody",initialize:function(e){c.requireOptions(e,["columns","collection"]),this.columns=e.columns,this.columns instanceof n.Collection||(this.columns=new R(this.columns)),this.row=e.row||k,this.rows=this.collection.map(function(e){var t=new this.row({columns:this.columns,model:e});return t},this),this.emptyText=e.emptyText,this._unshiftEmptyRowMayBe();var t=this.collection;this.listenTo(t,"add",this.insertRow),this.listenTo(t,"remove",this.removeRow),this.listenTo(t,"sort",this.refresh),this.listenTo(t,"reset",this.refresh),this.listenTo(t,"backgrid:edited",this.moveToNextCell)},_unshiftEmptyRowMayBe:function(){0===this.rows.length&&null!=this.emptyText&&this.rows.unshift(new N({emptyText:this.emptyText,columns:this.columns}))},insertRow:function(e,t,r){if(this.rows[0]instanceof N&&this.rows.pop().remove(),!(t instanceof n.Collection||r))return this.collection.add(e,r=t),void 0;r=i.extend({render:!0},r||{});var o=new this.row({columns:this.columns,model:e}),s=t.indexOf(e);this.rows.splice(s,0,o);var l=this.$el,a=l.children(),h=o.render().$el;r.render&&(s>=a.length?l.append(h):a.eq(s).before(h))},removeRow:function(e,t,n){return n?((i.isUndefined(n.render)||n.render)&&this.rows[n.index].remove(),this.rows.splice(n.index,1),this._unshiftEmptyRowMayBe(),void 0):(this.collection.remove(e,n=t),this._unshiftEmptyRowMayBe(),void 0)},refresh:function(){for(var e=0;this.rows.length>e;e++)this.rows[e].remove();return this.rows=this.collection.map(function(e){var t=new this.row({columns:this.columns,model:e});return t},this),this._unshiftEmptyRowMayBe(),this.render(),n.trigger("backgrid:refresh",this),this},render:function(){this.$el.empty();for(var e=document.createDocumentFragment(),t=0;this.rows.length>t;t++){var i=this.rows[t];e.appendChild(i.render().el)}return this.el.appendChild(e),this.delegateEvents(),this},remove:function(){for(var e=0;this.rows.length>e;e++){var t=this.rows[e];t.remove.apply(t,arguments)}return n.View.prototype.remove.apply(this,arguments)},moveToNextCell:function(e,t,i){var n=this.collection.indexOf(e),r=this.columns.indexOf(t);if(i.moveUp()||i.moveDown()||i.moveLeft()||i.moveRight()||i.save()){var o=this.columns.length,s=o*this.collection.length;if(i.moveUp()||i.moveDown()){var l=this.rows[n+(i.moveUp()?-1:1)];l&&l.cells[r].enterEditMode()}else if(i.moveLeft()||i.moveRight())for(var a=i.moveRight(),h=n*o+r+(a?1:-1);h>=0&&s>h;a?h++:h--){var c=~~(h/o),d=h-c*o,u=this.rows[c].cells[d];if(u.column.get("renderable")&&u.column.get("editable")){u.enterEditMode();break}}}this.rows[n].cells[r].exitEditMode()}});c.Footer=n.View.extend({tagName:"tfoot",initialize:function(e){c.requireOptions(e,["columns","collection"]),this.parent=e.parent,this.columns=e.columns,this.columns instanceof n.Collection||(this.columns=new c.Columns(this.columns))}}),c.Grid=n.View.extend({tagName:"table",className:"backgrid",header:O,body:_,footer:null,initialize:function(e){c.requireOptions(e,["columns","collection"]),e.columns instanceof n.Collection||(e.columns=new R(e.columns)),this.columns=e.columns;var t=i.omit(e,["el","id","attributes","className","tagName","events"]);this.header=e.header||this.header,this.header=new this.header(t),this.body=e.body||this.body,this.body=new this.body(t),this.footer=e.footer||this.footer,this.footer&&(this.footer=new this.footer(t)),this.listenTo(this.columns,"reset",function(){this.header=new(this.header.remove().constructor)(t),this.body=new(this.body.remove().constructor)(t),this.footer&&(this.footer=new(this.footer.remove().constructor)(t)),this.render()})},insertRow:function(e,t,i){return this.body.insertRow(e,t,i)},removeRow:function(e,t,i){return this.body.removeRow(e,t,i)},insertColumn:function(e,t){return t=t||{render:!0},this.columns.add(e,t),this},removeColumn:function(e,t){return this.columns.remove(e,t),this},render:function(){return this.$el.empty(),this.$el.append(this.header.render().$el),this.footer&&this.$el.append(this.footer.render().$el),this.$el.append(this.body.render().$el),this.delegateEvents(),this.trigger("backgrid:rendered",this),this},remove:function(){return this.header.remove.apply(this.header,arguments),this.body.remove.apply(this.body,arguments),this.footer&&this.footer.remove.apply(this.footer,arguments),n.View.prototype.remove.apply(this,arguments)}})})(this,jQuery,_,Backbone);
d3.parcoords = function(config) {
  var __ = {
    data: [],
    dimensions: [],
    types: {},
    brushed: false,
    mode: "default",
    rate: 20,
    width: 600,
    height: 300,
    margin: { top: 24, right: 0, bottom: 12, left: 0 },
    color: "#069",
    composite: "source-over",
    alpha: 0.7
  };

  extend(__, config);

  var pc = function(selection) {
    selection = pc.selection = d3.select(selection);

    __.width = selection[0][0].clientWidth;
    __.height = selection[0][0].clientHeight;

    // canvas data layers
    ["shadows", "marks", "foreground", "highlight"].forEach(function(layer) {
      canvas[layer] = selection
        .append("canvas")
        .attr("class", layer)[0][0];
      ctx[layer] = canvas[layer].getContext("2d");
    });

    // svg tick and brush layers
    pc.svg = selection
      .append("svg")
        .attr("width", __.width)
        .attr("height", __.height)
      .append("svg:g")
        .attr("transform", "translate(" + __.margin.left + "," + __.margin.top + ")");

    return pc;
  };

  var events = d3.dispatch.apply(this,["render", "resize", "highlight", "brush"].concat(d3.keys(__))),
      w = function() { return __.width - __.margin.right - __.margin.left; },
      h = function() { return __.height - __.margin.top - __.margin.bottom },
      flags = {
        brushable: false,
        reorderable: false,
        axes: false,
        interactive: false,
        shadows: false,
        debug: false
      },
      xscale = d3.scale.ordinal(),
      yscale = {},
      dragging = {},
      line = d3.svg.line(),
      axis = d3.svg.axis().orient("left").ticks(5),
      g, // groups for axes, brushes
      ctx = {},
      canvas = {};

  // side effects for setters
  var side_effects = d3.dispatch.apply(this,d3.keys(__))
    .on("composite", function(d) { ctx.foreground.globalCompositeOperation = d.value; })
    .on("alpha", function(d) { ctx.foreground.globalAlpha = d.value; })
    .on("width", function(d) { pc.resize(); })
    .on("height", function(d) { pc.resize(); })
    .on("margin", function(d) { pc.resize(); })
    .on("rate", function(d) { rqueue.rate(d.value); })
    .on("data", function(d) { 
      if (flags.shadows) paths(__.data, ctx.shadows);
    })
    .on("dimensions", function(d) {
      xscale.domain(__.dimensions);
      if (flags.interactive) pc.render().updateAxes();
    });

  pc.toString = function() { return "Parallel Coordinates: " + __.dimensions.length + " dimensions (" + d3.keys(__.data[0]).length + " total) , " + __.data.length + " rows"; };

  // expose the state of the chart
  pc.state = __;
  pc.flags = flags;

  // create getter/setters
  getset(pc, __, events);

  // expose events
  d3.rebind(pc, events, "on");

  // tick formatting
  d3.rebind(pc, axis, "ticks", "orient", "tickValues", "tickSubdivide", "tickSize", "tickPadding", "tickFormat");

  pc.autoscale = function() {
    // yscale
    var defaultScales = {
      "number": function(k) {
        return d3.scale.linear()
          .domain(d3.extent(__.data, function(d) { return +d[k]; }))
          .range([h()+1, 1])
      },
      "string": function(k) {
        return d3.scale.ordinal()
          .domain(__.data.map(function(p) { return p[k]; }))
          .rangePoints([h()+1, 1])
      }
    };

    __.dimensions.forEach(function(k) {
      yscale[k] = defaultScales[__.types[k]](k);
    });

    // hack to remove ordinal dimensions with many values
    pc.dimensions(pc.dimensions().filter(function(p,i) {
      var uniques = yscale[p].domain().length;
      if (__.types[p] == "string" && (uniques > 60 || uniques < 2)) {
        return false;
      }
      return true;
    }));

    // xscale
    xscale.rangePoints([0, w()], 1);

    // canvas sizes 
    pc.selection.selectAll("canvas")
        .style("margin-top", __.margin.top + "px") 
        .style("margin-left", __.margin.left + "px") 
        .attr("width", w()+2)
        .attr("height", h()+2)

    // default styles, needs to be set when canvas width changes
    ctx.foreground.strokeStyle = __.color;
    ctx.foreground.lineWidth = 1.4;
    ctx.foreground.globalCompositeOperation = __.composite;
    ctx.foreground.globalAlpha = __.alpha;
    ctx.highlight.lineWidth = 3;
    ctx.shadows.strokeStyle = "#dadada";

    return this;
  };

  pc.detectDimensions = function() {
    pc.types(d3.parcoords.detectDimensionTypes(__.data));
    pc.dimensions(d3.keys(pc.types()));
    return this;
  };

  pc.render = function() {
    // try to autodetect dimensions and create scales
    if (!__.dimensions.length) pc.detectDimensions();
    if (!(__.dimensions[0] in yscale)) pc.autoscale();

    pc.render[__.mode]();

    events.render.call(this);
    return this;
  };

  pc.render.default = function() {
    pc.clear('foreground');
    if (__.brushed) {
      __.brushed.forEach(path_foreground);
    } else {
      __.data.forEach(path_foreground);
    }
  };

  var rqueue = d3.renderQueue(path_foreground)
    .rate(50)
    .clear(function() { pc.clear('foreground'); });

  pc.render.queue = function() {
    if (__.brushed) {
      rqueue(__.brushed);
    } else {
      rqueue(__.data);
    }
  };

  pc.shadows = function() {
    flags.shadows = true;
    if (__.data.length > 0) paths(__.data, ctx.shadows);
    return this;
  };

  // draw little dots on the axis line where data intersects
  pc.axisDots = function() {
    var ctx = pc.ctx.marks;
    ctx.globalAlpha = d3.min([1/Math.pow(data.length, 1/2), 1]);
    __.data.forEach(function(d) {
      __.dimensions.map(function(p,i) {
        ctx.fillRect(position(p)-0.75,yscale[p](d[p])-0.75,1.5,1.5);
      });
    });
    return this;
  };

  pc.clear = function(layer) {
    ctx[layer].clearRect(0,0,w()+2,h()+2);
    return this;
  };

  pc.createAxes = function() {
    if (g) pc.removeAxes(); 

    // Add a group element for each dimension.
    g = pc.svg.selectAll(".dimension")
        .data(__.dimensions, function(d) { return d; })
      .enter().append("svg:g")
        .attr("class", "dimension")
        .attr("transform", function(d) { return "translate(" + xscale(d) + ")"; })

    // Add an axis and title.
    g.append("svg:g")
        .attr("class", "axis")
        .attr("transform", "translate(0,0)")
        .each(function(d) { d3.select(this).call(axis.scale(yscale[d])); })
      .append("svg:text")
        .attr({
          "text-anchor": "middle",
          "y": 0,
          "transform": "translate(0,-12)",
          "x": 0,
          "class": "label"
        })
        .text(String)

    flags.axes= true;
    return this;
  };

  pc.removeAxes = function() {
    g.remove();
    return this;
  };

  pc.updateAxes = function() {
    var g_data = pc.svg.selectAll(".dimension")
        .data(__.dimensions, function(d) { return d; })

    g_data.enter().append("svg:g")
        .attr("class", "dimension")
        .attr("transform", function(p) { return "translate(" + position(p) + ")"; })
        .style("opacity", 0)
        .append("svg:g")
        .attr("class", "axis")
        .attr("transform", "translate(0,0)")
        .each(function(d) { d3.select(this).call(axis.scale(yscale[d])); })
      .append("svg:text")
        .attr({
          "text-anchor": "middle",
          "y": 0,
          "transform": "translate(0,-12)",
          "x": 0,
          "class": "label"
        })
        .text(String);

    g_data.exit().remove();

    g = pc.svg.selectAll(".dimension");

    g.transition().duration(1100)
      .attr("transform", function(p) { return "translate(" + position(p) + ")"; })
      .style("opacity", 1)
    if (flags.shadows) paths(__.data, ctx.shadows);
    return this;
  };

  pc.brushable = function() {
    if (!g) pc.createAxes(); 

    // Add and store a brush for each axis.
    g.append("svg:g")
        .attr("class", "brush")
        .each(function(d) {
          d3.select(this).call(
            yscale[d].brush = d3.svg.brush()
              .y(yscale[d])
              .on("brush", pc.brush)
          );
        })
      .selectAll("rect")
        .style("visibility", null)
        .attr("x", -15)
        .attr("width", 30)
    flags.brushable = true;
    return this;
  };

  // Jason Davies, http://bl.ocks.org/1341281
  pc.reorderable = function() {
    if (!g) pc.createAxes(); 

    g.style("cursor", "move")
      .call(d3.behavior.drag()
        .on("dragstart", function(d) {
          dragging[d] = this.__origin__ = xscale(d);
        })
        .on("drag", function(d) {
          dragging[d] = Math.min(w(), Math.max(0, this.__origin__ += d3.event.dx));
          __.dimensions.sort(function(a, b) { return position(a) - position(b); });
          xscale.domain(__.dimensions);
          pc.render();
          g.attr("transform", function(d) { return "translate(" + position(d) + ")"; })
        })
        .on("dragend", function(d) {
          delete this.__origin__;
          delete dragging[d];
          d3.select(this).transition().attr("transform", "translate(" + xscale(d) + ")");
          pc.render();
        }));
    flags.reorderable = true;
    return this;
  };

  pc.interactive = function() {
    flags.interactive = true;
    return this;
  };

  // Get data within brushes
  pc.brush = function() {
    __.brushed = selected();  
    events.brush.call(pc,__.brushed);
    pc.render();
  };

  // expose a few objects
  pc.xscale = xscale;
  pc.yscale = yscale;
  pc.ctx = ctx;
  pc.canvas = canvas;
  pc.g = function() { return g; };

  // TODO
  pc.brushReset = function(dimension) {
    yscale[dimension].brush.clear()(
      pc.g()
        .filter(function(p) {
          return dimension == p;
        })
    )
    return this;
  };

  // rescale for height, width and margins
  // TODO currently assumes chart is brushable, and destroys old brushes
  pc.resize = function() {
    // selection size
    pc.selection.select("svg") 
      .attr("width", __.width)
      .attr("height", __.height)
    pc.svg.attr("transform", "translate(" + __.margin.left + "," + __.margin.top + ")");

    // scales
    pc.autoscale();

    // axes, destroys old brushes. the current brush state should pass through in the future
    if (g) pc.createAxes().brushable();
 
    events.resize.call(this, {width: __.width, height: __.height, margin: __.margin});
    return this;
  };

  // highlight an array of data
  pc.highlight = function(data) {
    pc.clear("highlight");
    d3.select(canvas.foreground).classed("faded", true);
    data.forEach(path_highlight);
    events.highlight.call(this,data);
    return this;
  };

  // clear highlighting
  pc.unhighlight = function(data) {
    pc.clear("highlight");
    d3.select(canvas.foreground).classed("faded", false);
    return this;
  };

  // draw single polyline
  function color_path(d, ctx) {
    ctx.strokeStyle = d3.functor(__.color)(d);
    ctx.beginPath();
    __.dimensions.map(function(p,i) {
      if (i == 0) {
        ctx.moveTo(position(p),yscale[p](d[p]));
      } else { 
        ctx.lineTo(position(p),yscale[p](d[p]));
      }
    });
    ctx.stroke();
  };

  // draw many polylines of the same color
  function paths(data, ctx) {
    ctx.clearRect(-1,-1,w()+2,h()+2);
    ctx.beginPath();
    data.forEach(function(d) {
      __.dimensions.map(function(p,i) {
        if (i == 0) {
          ctx.moveTo(position(p),yscale[p](d[p]));
        } else { 
          ctx.lineTo(position(p),yscale[p](d[p]));
        }
      });
    });
    ctx.stroke();
  };

  function is_brushed(p) { 
    return !yscale[p].brush.empty();
  };

  function brush_max(p) {
    return is_brushed(p) ? yscale[p](yscale[p].brush.extent()[1]) : 0;
  };

  function brush_min(p) {
    return is_brushed(p) ? yscale[p](yscale[p].brush.extent()[0]) : h();
  };

  function position(d) {
    var v = dragging[d];
    return v == null ? xscale(d) : v;
  }

  // data within extents
  function selected() {
    var actives = __.dimensions.filter(is_brushed),
        extents = actives.map(function(p) { return yscale[p].brush.extent(); });

    // test if within range
    var within = {
      "number": function(d,p,dimension) {
        return extents[dimension][0] <= d[p] && d[p] <= extents[dimension][1]
      },
      "string": function(d,p,dimension) {
        return extents[dimension][0] <= yscale[p](d[p]) && yscale[p](d[p]) <= extents[dimension][1]
      }
    };

    return __.data
      .filter(function(d) {
        return actives.every(function(p, dimension) {
          return within[__.types[p]](d,p,dimension);
        });
      });
  };

  function path_foreground(d) {
    return color_path(d, ctx.foreground);
  };

  function path_highlight(d) {
    return color_path(d, ctx.highlight);
  };

  // getter/setter with event firing
  function getset(obj,state,events)  {
    d3.keys(state).forEach(function(key) {   
      obj[key] = function(x) {
        if (!arguments.length) return state[key];
        var old = state[key];
        state[key] = x;
        side_effects[key].call(pc,{"value": x, "previous": old});
        events[key].call(pc,{"value": x, "previous": old});
        return obj;
      };
    });
  };

  function extend(target, source) {
    for (key in source) {
      target[key] = source[key];
    }
    return target;
  };

  return pc;
};

d3.parcoords.version = "0.1.7";

// quantitative dimensions based on numerical or null values in the first row
d3.parcoords.quantitative = function(data) {
  return d3.keys(data[0])
    .filter(function(col) {
      var v = data[0][col];
      return (parseFloat(v) == v) && (v != null);
    });
};

// a better "typeof" from this post: http://stackoverflow.com/questions/7390426/better-way-to-get-type-of-a-javascript-variable
d3.parcoords.toType = function(v) {
  return ({}).toString.call(v).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
};

// try to coerce to number before returning type
d3.parcoords.toTypeCoerceNumbers = function(v) {
  if ((parseFloat(v) == v) && (v != null)) return "number";
  return d3.parcoords.toType(v);
};

// attempt to determine types of each dimension based on first row of data
d3.parcoords.detectDimensionTypes = function(data) {
  var types = {}
  d3.keys(data[0])
    .forEach(function(col) {
      types[col] = d3.parcoords.toTypeCoerceNumbers(data[0][col]);
    });
  return types;
};

// pairs of adjacent dimensions
d3.parcoords.adjacent_pairs = function(arr) {
  var ret = [];
  for (var i = 0; i < arr.length-1; i++) {
    ret.push([arr[i],arr[i+1]]);
  };
  return ret;
};

// calculate 2d intersection of line a->b with line c->d
// points are objects with x and y properties
d3.parcoords.intersection =  function(a, b, c, d) {
  return {
    x: ((a.x * b.y - a.y * b.x) * (c.x - d.x) - (a.x - b.x) * (c.x * d.y - c.y * d.x)) / ((a.x - b.x) * (c.y - d.y) - (a.y - b.y) * (c.x - d.x)),
    y: ((a.x * b.y - a.y * b.x) * (c.y - d.y) - (a.y - b.y) * (c.x * d.y - c.y * d.x)) / ((a.x - b.x) * (c.y - d.y) - (a.y - b.y) * (c.x - d.x))
  };
};

d3.renderQueue = (function(func) {
  var _queue = [],                  // data to be rendered
      _rate = 10,                   // number of calls per frame
      _clear = function() {},       // clearing function
      _i = 0;                       // current iteration

  var rq = function(data) {
    if (data) rq.data(data);
    rq.invalidate();
    _clear();
    rq.render();
  };

  rq.render = function() {
    _i = 0;
    var valid = true;
    rq.invalidate = function() { valid = false; };

    function doFrame() {
      if (!valid) return false;
      if (_i > _queue.length) return false;
      var chunk = _queue.slice(_i,_i+_rate);
      _i += _rate;
      chunk.map(func);
      d3.timer(doFrame);
    }

    doFrame();
  };

  rq.data = function(data) {
    rq.invalidate();
    _queue = data.slice(0);
    return rq;
  };

  rq.rate = function(value) {
    if (!arguments.length) return _rate;
    _rate = value;
    return rq;
  };

  rq.remaining = function() {
    return _queue.length - _i;
  };

  // clear the canvas
  rq.clear = function(func) {
    if (!arguments.length) {
      _clear();
      return rq;
    }
    _clear = func;
    return rq;
  };

  rq.invalidate = function() {};

  return rq;
});
var saveAs=saveAs||(navigator.msSaveBlob&&navigator.msSaveBlob.bind(navigator))||(function(h){var r=h.document,l=function(){return h.URL||h.webkitURL||h},e=h.URL||h.webkitURL||h,n=r.createElementNS("http://www.w3.org/1999/xhtml","a"),g="download" in n,j=function(t){var s=r.createEvent("MouseEvents");s.initMouseEvent("click",true,false,h,0,0,0,0,0,false,false,false,false,0,null);t.dispatchEvent(s)},o=h.webkitRequestFileSystem,p=h.requestFileSystem||o||h.mozRequestFileSystem,m=function(s){(h.setImmediate||h.setTimeout)(function(){throw s},0)},c="application/octet-stream",k=0,b=[],i=function(){var t=b.length;while(t--){var s=b[t];if(typeof s==="string"){e.revokeObjectURL(s)}else{s.remove()}}b.length=0},q=function(t,s,w){s=[].concat(s);var v=s.length;while(v--){var x=t["on"+s[v]];if(typeof x==="function"){try{x.call(t,w||t)}catch(u){m(u)}}}},f=function(t,u){var v=this,B=t.type,E=false,x,w,s=function(){var F=l().createObjectURL(t);b.push(F);return F},A=function(){q(v,"writestart progress write writeend".split(" "))},D=function(){if(E||!x){x=s(t)}if(w){w.location.href=x}v.readyState=v.DONE;A()},z=function(F){return function(){if(v.readyState!==v.DONE){return F.apply(this,arguments)}}},y={create:true,exclusive:false},C;v.readyState=v.INIT;if(!u){u="download"}if(g){x=s(t);n.href=x;n.download=u;j(n);v.readyState=v.DONE;A();return}if(h.chrome&&B&&B!==c){C=t.slice||t.webkitSlice;t=C.call(t,0,t.size,c);E=true}if(o&&u!=="download"){u+=".download"}if(B===c||o){w=h}else{w=h.open()}if(!p){D();return}k+=t.size;p(h.TEMPORARY,k,z(function(F){F.root.getDirectory("saved",y,z(function(G){var H=function(){G.getFile(u,y,z(function(I){I.createWriter(z(function(J){J.onwriteend=function(K){w.location.href=I.toURL();b.push(I);v.readyState=v.DONE;q(v,"writeend",K)};J.onerror=function(){var K=J.error;if(K.code!==K.ABORT_ERR){D()}};"writestart progress write abort".split(" ").forEach(function(K){J["on"+K]=v["on"+K]});J.write(t);v.abort=function(){J.abort();v.readyState=v.DONE};v.readyState=v.WRITING}),D)}),D)};G.getFile(u,{create:false},z(function(I){I.remove();H()}),z(function(I){if(I.code===I.NOT_FOUND_ERR){H()}else{D()}}))}),D)}),D)},d=f.prototype,a=function(s,t){return new f(s,t)};d.abort=function(){var s=this;s.readyState=s.DONE;q(s,"abort")};d.readyState=d.INIT=0;d.WRITING=1;d.DONE=2;d.error=d.onwritestart=d.onprogress=d.onwrite=d.onabort=d.onerror=d.onwriteend=null;h.addEventListener("unload",i,false);return a}(self));
/*

Copyright (C) 2011 by Yehuda Katz

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

*/

// lib/handlebars/browser-prefix.js
var Handlebars = {};

(function(Handlebars, undefined) {
;
// lib/handlebars/base.js

Handlebars.VERSION = "1.0.0";
Handlebars.COMPILER_REVISION = 4;

Handlebars.REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '>= 1.0.0'
};

Handlebars.helpers  = {};
Handlebars.partials = {};

var toString = Object.prototype.toString,
    functionType = '[object Function]',
    objectType = '[object Object]';

Handlebars.registerHelper = function(name, fn, inverse) {
  if (toString.call(name) === objectType) {
    if (inverse || fn) { throw new Handlebars.Exception('Arg not supported with multiple helpers'); }
    Handlebars.Utils.extend(this.helpers, name);
  } else {
    if (inverse) { fn.not = inverse; }
    this.helpers[name] = fn;
  }
};

Handlebars.registerPartial = function(name, str) {
  if (toString.call(name) === objectType) {
    Handlebars.Utils.extend(this.partials,  name);
  } else {
    this.partials[name] = str;
  }
};

Handlebars.registerHelper('helperMissing', function(arg) {
  if(arguments.length === 2) {
    return undefined;
  } else {
    throw new Error("Missing helper: '" + arg + "'");
  }
});

Handlebars.registerHelper('blockHelperMissing', function(context, options) {
  var inverse = options.inverse || function() {}, fn = options.fn;

  var type = toString.call(context);

  if(type === functionType) { context = context.call(this); }

  if(context === true) {
    return fn(this);
  } else if(context === false || context == null) {
    return inverse(this);
  } else if(type === "[object Array]") {
    if(context.length > 0) {
      return Handlebars.helpers.each(context, options);
    } else {
      return inverse(this);
    }
  } else {
    return fn(context);
  }
});

Handlebars.K = function() {};

Handlebars.createFrame = Object.create || function(object) {
  Handlebars.K.prototype = object;
  var obj = new Handlebars.K();
  Handlebars.K.prototype = null;
  return obj;
};

Handlebars.logger = {
  DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3,

  methodMap: {0: 'debug', 1: 'info', 2: 'warn', 3: 'error'},

  // can be overridden in the host environment
  log: function(level, obj) {
    if (Handlebars.logger.level <= level) {
      var method = Handlebars.logger.methodMap[level];
      if (typeof console !== 'undefined' && console[method]) {
        console[method].call(console, obj);
      }
    }
  }
};

Handlebars.log = function(level, obj) { Handlebars.logger.log(level, obj); };

Handlebars.registerHelper('each', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  var i = 0, ret = "", data;

  var type = toString.call(context);
  if(type === functionType) { context = context.call(this); }

  if (options.data) {
    data = Handlebars.createFrame(options.data);
  }

  if(context && typeof context === 'object') {
    if(context instanceof Array){
      for(var j = context.length; i<j; i++) {
        if (data) { data.index = i; }
        ret = ret + fn(context[i], { data: data });
      }
    } else {
      for(var key in context) {
        if(context.hasOwnProperty(key)) {
          if(data) { data.key = key; }
          ret = ret + fn(context[key], {data: data});
          i++;
        }
      }
    }
  }

  if(i === 0){
    ret = inverse(this);
  }

  return ret;
});

Handlebars.registerHelper('if', function(conditional, options) {
  var type = toString.call(conditional);
  if(type === functionType) { conditional = conditional.call(this); }

  if(!conditional || Handlebars.Utils.isEmpty(conditional)) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});

Handlebars.registerHelper('unless', function(conditional, options) {
  return Handlebars.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn});
});

Handlebars.registerHelper('with', function(context, options) {
  var type = toString.call(context);
  if(type === functionType) { context = context.call(this); }

  if (!Handlebars.Utils.isEmpty(context)) return options.fn(context);
});

Handlebars.registerHelper('log', function(context, options) {
  var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
  Handlebars.log(level, context);
});
;
// lib/handlebars/utils.js

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

Handlebars.Exception = function(message) {
  var tmp = Error.prototype.constructor.apply(this, arguments);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }
};
Handlebars.Exception.prototype = new Error();

// Build out our basic SafeString type
Handlebars.SafeString = function(string) {
  this.string = string;
};
Handlebars.SafeString.prototype.toString = function() {
  return this.string.toString();
};

var escape = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
};

var badChars = /[&<>"'`]/g;
var possible = /[&<>"'`]/;

var escapeChar = function(chr) {
  return escape[chr] || "&amp;";
};

Handlebars.Utils = {
  extend: function(obj, value) {
    for(var key in value) {
      if(value.hasOwnProperty(key)) {
        obj[key] = value[key];
      }
    }
  },

  escapeExpression: function(string) {
    // don't escape SafeStrings, since they're already safe
    if (string instanceof Handlebars.SafeString) {
      return string.toString();
    } else if (string == null || string === false) {
      return "";
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = string.toString();

    if(!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  },

  isEmpty: function(value) {
    if (!value && value !== 0) {
      return true;
    } else if(toString.call(value) === "[object Array]" && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }
};
;
// lib/handlebars/runtime.js

Handlebars.VM = {
  template: function(templateSpec) {
    // Just add water
    var container = {
      escapeExpression: Handlebars.Utils.escapeExpression,
      invokePartial: Handlebars.VM.invokePartial,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          programWrapper = Handlebars.VM.program(i, fn, data);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = Handlebars.VM.program(i, fn);
        }
        return programWrapper;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common) {
          ret = {};
          Handlebars.Utils.extend(ret, common);
          Handlebars.Utils.extend(ret, param);
        }
        return ret;
      },
      programWithDepth: Handlebars.VM.programWithDepth,
      noop: Handlebars.VM.noop,
      compilerInfo: null
    };

    return function(context, options) {
      options = options || {};
      var result = templateSpec.call(container, Handlebars, context, options.helpers, options.partials, options.data);

      var compilerInfo = container.compilerInfo || [],
          compilerRevision = compilerInfo[0] || 1,
          currentRevision = Handlebars.COMPILER_REVISION;

      if (compilerRevision !== currentRevision) {
        if (compilerRevision < currentRevision) {
          var runtimeVersions = Handlebars.REVISION_CHANGES[currentRevision],
              compilerVersions = Handlebars.REVISION_CHANGES[compilerRevision];
          throw "Template was precompiled with an older version of Handlebars than the current runtime. "+
                "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").";
        } else {
          // Use the embedded version info since the runtime doesn't know about this revision yet
          throw "Template was precompiled with a newer version of Handlebars than the current runtime. "+
                "Please update your runtime to a newer version ("+compilerInfo[1]+").";
        }
      }

      return result;
    };
  },

  programWithDepth: function(i, fn, data /*, $depth */) {
    var args = Array.prototype.slice.call(arguments, 3);

    var program = function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
    program.program = i;
    program.depth = args.length;
    return program;
  },
  program: function(i, fn, data) {
    var program = function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
    program.program = i;
    program.depth = 0;
    return program;
  },
  noop: function() { return ""; },
  invokePartial: function(partial, name, context, helpers, partials, data) {
    var options = { helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Handlebars.Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    } else if (!Handlebars.compile) {
      throw new Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    } else {
      partials[name] = Handlebars.compile(partial, {data: data !== undefined});
      return partials[name](context, options);
    }
  }
};

Handlebars.template = Handlebars.VM.template;
;
// lib/handlebars/browser-suffix.js
})(Handlebars);
;
(function(q,f){"object"===typeof exports?f(exports):"function"===typeof define&&define.amd?define(["exports"],f):f(q)})(this,function(q){function f(a){this._targetElement=a;this._options={nextLabel:"Next &rarr;",prevLabel:"&larr; Back",skipLabel:"Skip",doneLabel:"Done",tooltipPosition:"bottom",tooltipClass:"",exitOnEsc:!0,exitOnOverlayClick:!0,showStepNumbers:!0,keyboardNavigation:!0,showButtons:!0,showBullets:!0,scrollToElement:!0}}function s(a){if(null==a||"object"!=typeof a||"undefined"!=typeof a.nodeType)return a;
var b={},c;for(c in a)b[c]=s(a[c]);return b}function t(){this._direction="forward";"undefined"===typeof this._currentStep?this._currentStep=0:++this._currentStep;if(this._introItems.length<=this._currentStep)"function"===typeof this._introCompleteCallback&&this._introCompleteCallback.call(this),u.call(this,this._targetElement);else{var a=this._introItems[this._currentStep];"undefined"!==typeof this._introBeforeChangeCallback&&this._introBeforeChangeCallback.call(this,a.element);A.call(this,a)}}function y(){this._direction=
"backward";if(0===this._currentStep)return!1;var a=this._introItems[--this._currentStep];"undefined"!==typeof this._introBeforeChangeCallback&&this._introBeforeChangeCallback.call(this,a.element);A.call(this,a)}function u(a){var b=a.querySelector(".introjs-overlay");if(null!=b){b.style.opacity=0;setTimeout(function(){b.parentNode&&b.parentNode.removeChild(b)},500);(a=a.querySelector(".introjs-helperLayer"))&&a.parentNode.removeChild(a);(a=document.querySelector(".introjsFloatingElement"))&&a.parentNode.removeChild(a);
if(a=document.querySelector(".introjs-showElement"))a.className=a.className.replace(/introjs-[a-zA-Z]+/g,"").replace(/^\s+|\s+$/g,"");if((a=document.querySelectorAll(".introjs-fixParent"))&&0<a.length)for(var c=a.length-1;0<=c;c--)a[c].className=a[c].className.replace(/introjs-fixParent/g,"").replace(/^\s+|\s+$/g,"");window.removeEventListener?window.removeEventListener("keydown",this._onKeyDown,!0):document.detachEvent&&document.detachEvent("onkeydown",this._onKeyDown);this._currentStep=void 0}}
function B(a,b,c,d){b.style.top=null;b.style.right=null;b.style.bottom=null;b.style.left=null;b.style.marginLeft=null;b.style.marginTop=null;c.style.display="inherit";"undefined"!=typeof d&&null!=d&&(d.style.top=null,d.style.left=null);if(this._introItems[this._currentStep]){var e="",e=this._introItems[this._currentStep],e="string"===typeof e.tooltipClass?e.tooltipClass:this._options.tooltipClass;b.className=("introjs-tooltip "+e).replace(/^\s+|\s+$/g,"");switch(this._introItems[this._currentStep].position){case "top":b.style.left=
"15px";b.style.top="-"+(p(b).height+10)+"px";c.className="introjs-arrow bottom";break;case "right":b.style.left=p(a).width+20+"px";c.className="introjs-arrow left";break;case "left":!0==this._options.showStepNumbers&&(b.style.top="15px");b.style.right=p(a).width+20+"px";c.className="introjs-arrow right";break;case "floating":c.style.display="none";a=p(b);b.style.left="50%";b.style.top="50%";b.style.marginLeft="-"+a.width/2+"px";b.style.marginTop="-"+a.height/2+"px";"undefined"!=typeof d&&null!=d&&
(d.style.left="-"+(a.width/2+18)+"px",d.style.top="-"+(a.height/2+18)+"px");break;default:b.style.bottom="-"+(p(b).height+10)+"px",c.className="introjs-arrow top"}}}function w(a){if(a&&this._introItems[this._currentStep]){var b=this._introItems[this._currentStep],c=p(b.element),d=10;"floating"==b.position&&(d=0);a.setAttribute("style","width: "+(c.width+d)+"px; height:"+(c.height+d)+"px; top:"+(c.top-5)+"px;left: "+(c.left-5)+"px;")}}function A(a){var b;"undefined"!==typeof this._introChangeCallback&&
this._introChangeCallback.call(this,a.element);var c=this,d=document.querySelector(".introjs-helperLayer");p(a.element);if(null!=d){var e=d.querySelector(".introjs-helperNumberLayer"),C=d.querySelector(".introjs-tooltiptext"),g=d.querySelector(".introjs-arrow"),n=d.querySelector(".introjs-tooltip"),j=d.querySelector(".introjs-skipbutton"),m=d.querySelector(".introjs-prevbutton"),k=d.querySelector(".introjs-nextbutton");n.style.opacity=0;if(null!=e&&(b=this._introItems[0<=a.step-2?a.step-2:0],null!=
b&&"forward"==this._direction&&"floating"==b.position||"backward"==this._direction&&"floating"==a.position))e.style.opacity=0;w.call(c,d);var l=document.querySelectorAll(".introjs-fixParent");if(l&&0<l.length)for(b=l.length-1;0<=b;b--)l[b].className=l[b].className.replace(/introjs-fixParent/g,"").replace(/^\s+|\s+$/g,"");b=document.querySelector(".introjs-showElement");b.className=b.className.replace(/introjs-[a-zA-Z]+/g,"").replace(/^\s+|\s+$/g,"");c._lastShowElementTimer&&clearTimeout(c._lastShowElementTimer);
c._lastShowElementTimer=setTimeout(function(){null!=e&&(e.innerHTML=a.step);C.innerHTML=a.intro;B.call(c,a.element,n,g,e);d.querySelector(".introjs-bullets li > a.active").className="";d.querySelector('.introjs-bullets li > a[data-stepnumber="'+a.step+'"]').className="active";n.style.opacity=1;e.style.opacity=1},350)}else{var j=document.createElement("div"),l=document.createElement("div"),h=document.createElement("div"),m=document.createElement("div"),k=document.createElement("div"),f=document.createElement("div");
j.className="introjs-helperLayer";w.call(c,j);this._targetElement.appendChild(j);l.className="introjs-arrow";m.className="introjs-tooltiptext";m.innerHTML=a.intro;k.className="introjs-bullets";!1===this._options.showBullets&&(k.style.display="none");var q=document.createElement("ul");b=0;for(var v=this._introItems.length;b<v;b++){var s=document.createElement("li"),r=document.createElement("a");r.onclick=function(){c.goToStep(this.getAttribute("data-stepnumber"))};0===b&&(r.className="active");r.href=
"javascript:void(0);";r.innerHTML="&nbsp;";r.setAttribute("data-stepnumber",this._introItems[b].step);s.appendChild(r);q.appendChild(s)}k.appendChild(q);f.className="introjs-tooltipbuttons";!1===this._options.showButtons&&(f.style.display="none");h.className="introjs-tooltip";h.appendChild(m);h.appendChild(k);if(!0==this._options.showStepNumbers){var x=document.createElement("span");x.className="introjs-helperNumberLayer";x.innerHTML=a.step;j.appendChild(x)}h.appendChild(l);j.appendChild(h);k=document.createElement("a");
k.onclick=function(){c._introItems.length-1!=c._currentStep&&t.call(c)};k.href="javascript:void(0);";k.innerHTML=this._options.nextLabel;m=document.createElement("a");m.onclick=function(){0!=c._currentStep&&y.call(c)};m.href="javascript:void(0);";m.innerHTML=this._options.prevLabel;j=document.createElement("a");j.className="introjs-button introjs-skipbutton";j.href="javascript:void(0);";j.innerHTML=this._options.skipLabel;j.onclick=function(){c._introItems.length-1==c._currentStep&&"function"===typeof c._introCompleteCallback&&
c._introCompleteCallback.call(c);c._introItems.length-1!=c._currentStep&&"function"===typeof c._introExitCallback&&c._introExitCallback.call(c);u.call(c,c._targetElement)};f.appendChild(j);1<this._introItems.length&&(f.appendChild(m),f.appendChild(k));h.appendChild(f);B.call(c,a.element,h,l,x)}0==this._currentStep&&1<this._introItems.length?(m.className="introjs-button introjs-prevbutton introjs-disabled",k.className="introjs-button introjs-nextbutton",j.innerHTML=this._options.skipLabel):this._introItems.length-
1==this._currentStep||1==this._introItems.length?(j.innerHTML=this._options.doneLabel,m.className="introjs-button introjs-prevbutton",k.className="introjs-button introjs-nextbutton introjs-disabled"):(m.className="introjs-button introjs-prevbutton",k.className="introjs-button introjs-nextbutton",j.innerHTML=this._options.skipLabel);k.focus();a.element.className+=" introjs-showElement";b=z(a.element,"position");"absolute"!==b&&"relative"!==b&&(a.element.className+=" introjs-relativePosition");for(b=
a.element.parentNode;null!=b&&"body"!==b.tagName.toLowerCase();){l=z(b,"z-index");h=parseFloat(z(b,"opacity"));if(/[0-9]+/.test(l)||1>h)b.className+=" introjs-fixParent";b=b.parentNode}b=a.element.getBoundingClientRect();!(0<=b.top&&0<=b.left&&b.bottom+80<=window.innerHeight&&b.right<=window.innerWidth)&&!0===this._options.scrollToElement&&(h=a.element.getBoundingClientRect(),b=void 0!=window.innerWidth?window.innerHeight:document.documentElement.clientHeight,l=h.bottom-(h.bottom-h.top),h=h.bottom-
b,0>l||a.element.clientHeight>b?window.scrollBy(0,l-30):window.scrollBy(0,h+100));"undefined"!==typeof this._introAfterChangeCallback&&this._introAfterChangeCallback.call(this,a.element)}function z(a,b){var c="";a.currentStyle?c=a.currentStyle[b]:document.defaultView&&document.defaultView.getComputedStyle&&(c=document.defaultView.getComputedStyle(a,null).getPropertyValue(b));return c&&c.toLowerCase?c.toLowerCase():c}function D(a){var b=document.createElement("div"),c="",d=this;b.className="introjs-overlay";
if("body"===a.tagName.toLowerCase())c+="top: 0;bottom: 0; left: 0;right: 0;position: fixed;",b.setAttribute("style",c);else{var e=p(a);e&&(c+="width: "+e.width+"px; height:"+e.height+"px; top:"+e.top+"px;left: "+e.left+"px;",b.setAttribute("style",c))}a.appendChild(b);b.onclick=function(){!0==d._options.exitOnOverlayClick&&(u.call(d,a),void 0!=d._introExitCallback&&d._introExitCallback.call(d))};setTimeout(function(){c+="opacity: .8;";b.setAttribute("style",c)},10);return!0}function p(a){var b={};
b.width=a.offsetWidth;b.height=a.offsetHeight;for(var c=0,d=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)c+=a.offsetLeft,d+=a.offsetTop,a=a.offsetParent;b.top=d;b.left=c;return b}var v=function(a){if("object"===typeof a)return new f(a);if("string"===typeof a){if(a=document.querySelector(a))return new f(a);throw Error("There is no element with given selector.");}return new f(document.body)};v.version="0.8.0";v.fn=f.prototype={clone:function(){return new f(this)},setOption:function(a,b){this._options[a]=
b;return this},setOptions:function(a){var b=this._options,c={},d;for(d in b)c[d]=b[d];for(d in a)c[d]=a[d];this._options=c;return this},start:function(){a:{var a=this._targetElement,b=[],c=this;if(this._options.steps)for(var d=[],e=0,d=this._options.steps.length;e<d;e++){var f=s(this._options.steps[e]);f.step=b.length+1;"string"===typeof f.element&&(f.element=document.querySelector(f.element));if("undefined"===typeof f.element||null==f.element){var g=document.querySelector(".introjsFloatingElement");
null==g&&(g=document.createElement("div"),g.className="introjsFloatingElement",document.body.appendChild(g));f.element=g;f.position="floating"}null!=f.element&&b.push(f)}else{d=a.querySelectorAll("*[data-intro]");if(1>d.length)break a;e=0;for(f=d.length;e<f;e++){var g=d[e],n=parseInt(g.getAttribute("data-step"),10);0<n&&(b[n-1]={element:g,intro:g.getAttribute("data-intro"),step:parseInt(g.getAttribute("data-step"),10),tooltipClass:g.getAttribute("data-tooltipClass"),position:g.getAttribute("data-position")||
this._options.tooltipPosition})}e=n=0;for(f=d.length;e<f;e++)if(g=d[e],null==g.getAttribute("data-step")){for(;"undefined"!=typeof b[n];)n++;b[n]={element:g,intro:g.getAttribute("data-intro"),step:n+1,tooltipClass:g.getAttribute("data-tooltipClass"),position:g.getAttribute("data-position")||this._options.tooltipPosition}}}e=[];for(d=0;d<b.length;d++)b[d]&&e.push(b[d]);b=e;b.sort(function(a,b){return a.step-b.step});c._introItems=b;D.call(c,a)&&(t.call(c),a.querySelector(".introjs-skipbutton"),a.querySelector(".introjs-nextbutton"),
c._onKeyDown=function(b){if(27===b.keyCode&&!0==c._options.exitOnEsc)u.call(c,a),void 0!=c._introExitCallback&&c._introExitCallback.call(c);else if(37===b.keyCode)y.call(c);else if(39===b.keyCode||13===b.keyCode)t.call(c),b.preventDefault?b.preventDefault():b.returnValue=!1},c._onResize=function(){w.call(c,document.querySelector(".introjs-helperLayer"))},window.addEventListener?(this._options.keyboardNavigation&&window.addEventListener("keydown",c._onKeyDown,!0),window.addEventListener("resize",c._onResize,
!0)):document.attachEvent&&(this._options.keyboardNavigation&&document.attachEvent("onkeydown",c._onKeyDown),document.attachEvent("onresize",c._onResize)))}return this},goToStep:function(a){this._currentStep=a-2;"undefined"!==typeof this._introItems&&t.call(this);return this},nextStep:function(){t.call(this);return this},previousStep:function(){y.call(this);return this},exit:function(){u.call(this,this._targetElement)},refresh:function(){w.call(this,document.querySelector(".introjs-helperLayer"));
return this},onbeforechange:function(a){if("function"===typeof a)this._introBeforeChangeCallback=a;else throw Error("Provided callback for onbeforechange was not a function");return this},onchange:function(a){if("function"===typeof a)this._introChangeCallback=a;else throw Error("Provided callback for onchange was not a function.");return this},onafterchange:function(a){if("function"===typeof a)this._introAfterChangeCallback=a;else throw Error("Provided callback for onafterchange was not a function");
return this},oncomplete:function(a){if("function"===typeof a)this._introCompleteCallback=a;else throw Error("Provided callback for oncomplete was not a function.");return this},onexit:function(a){if("function"===typeof a)this._introExitCallback=a;else throw Error("Provided callback for onexit was not a function.");return this}};return q.introJs=v});

/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * @link   http://www.phpied.com/rgb-color-parser-in-javascript/
 * @license Use it if you like it
 */
function RGBColor(color_string)
{
    this.ok = false;

    // strip any leading #
    if (color_string.charAt(0) == '#') { // remove # if any
        color_string = color_string.substr(1,6);
    }

    color_string = color_string.replace(/ /g,'');
    color_string = color_string.toLowerCase();

    // before getting into regexps, try simple matches
    // and overwrite the input
    var simple_colors = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '00ffff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000000',
        blanchedalmond: 'ffebcd',
        blue: '0000ff',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '00ffff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dodgerblue: '1e90ff',
        feldspar: 'd19275',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'ff00ff',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred : 'cd5c5c',
        indigo : '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgrey: 'd3d3d3',
        lightgreen: '90ee90',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslateblue: '8470ff',
        lightslategray: '778899',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '00ff00',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'ff00ff',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370d8',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'd87093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        red: 'ff0000',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        violetred: 'd02090',
        wheat: 'f5deb3',
        white: 'ffffff',
        whitesmoke: 'f5f5f5',
        yellow: 'ffff00',
        yellowgreen: '9acd32'
    };
    for (var key in simple_colors) {
        if (color_string == key) {
            color_string = simple_colors[key];
        }
    }
    // emd of simple type-in colors

    // array of color definition objects
    var color_defs = [
        {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
            process: function (bits){
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3])
                ];
            }
        },
        {
            re: /^(\w{2})(\w{2})(\w{2})$/,
            example: ['#00ff00', '336699'],
            process: function (bits){
                return [
                    parseInt(bits[1], 16),
                    parseInt(bits[2], 16),
                    parseInt(bits[3], 16)
                ];
            }
        },
        {
            re: /^(\w{1})(\w{1})(\w{1})$/,
            example: ['#fb0', 'f0f'],
            process: function (bits){
                return [
                    parseInt(bits[1] + bits[1], 16),
                    parseInt(bits[2] + bits[2], 16),
                    parseInt(bits[3] + bits[3], 16)
                ];
            }
        }
    ];

    // search through the definitions to find a match
    for (var i = 0; i < color_defs.length; i++) {
        var re = color_defs[i].re;
        var processor = color_defs[i].process;
        var bits = re.exec(color_string);
        if (bits) {
            channels = processor(bits);
            this.r = channels[0];
            this.g = channels[1];
            this.b = channels[2];
            this.ok = true;
        }

    }

    // validate/cleanup values
    this.r = (this.r < 0 || isNaN(this.r)) ? 0 : ((this.r > 255) ? 255 : this.r);
    this.g = (this.g < 0 || isNaN(this.g)) ? 0 : ((this.g > 255) ? 255 : this.g);
    this.b = (this.b < 0 || isNaN(this.b)) ? 0 : ((this.b > 255) ? 255 : this.b);

    // some getters
    this.toRGB = function () {
        return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
    }
    this.toHex = function () {
        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);
        if (r.length == 1) r = '0' + r;
        if (g.length == 1) g = '0' + g;
        if (b.length == 1) b = '0' + b;
        return '#' + r + g + b;
    }

    // help
    this.getHelpXML = function () {

        var examples = new Array();
        // add regexps
        for (var i = 0; i < color_defs.length; i++) {
            var example = color_defs[i].example;
            for (var j = 0; j < example.length; j++) {
                examples[examples.length] = example[j];
            }
        }
        // add type-in colors
        for (var sc in simple_colors) {
            examples[examples.length] = sc;
        }

        var xml = document.createElement('ul');
        xml.setAttribute('id', 'rgbcolor-examples');
        for (var i = 0; i < examples.length; i++) {
            try {
                var list_item = document.createElement('li');
                var list_color = new RGBColor(examples[i]);
                var example_div = document.createElement('div');
                example_div.style.cssText =
                        'margin: 3px; '
                        + 'border: 1px solid black; '
                        + 'background:' + list_color.toHex() + '; '
                        + 'color:' + list_color.toHex()
                ;
                example_div.appendChild(document.createTextNode('test'));
                var list_item_value = document.createTextNode(
                    ' ' + examples[i] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex()
                );
                list_item.appendChild(example_div);
                list_item.appendChild(list_item_value);
                xml.appendChild(list_item);

            } catch(e){}
        }
        return xml;

    }

}
/*
 * canvg.js - Javascript SVG parser and renderer on Canvas
 * MIT Licensed 
 * Gabe Lerner (gabelerner@gmail.com)
 * http://code.google.com/p/canvg/
 *
 * Requires: rgbcolor.js - http://www.phpied.com/rgb-color-parser-in-javascript/
 */
(function(){
	// canvg(target, s)
	// empty parameters: replace all 'svg' elements on page with 'canvas' elements
	// target: canvas element or the id of a canvas element
	// s: svg string, url to svg file, or xml document
	// opts: optional hash of options
	//		 ignoreMouse: true => ignore mouse events
	//		 ignoreAnimation: true => ignore animations
	//		 ignoreDimensions: true => does not try to resize canvas
	//		 ignoreClear: true => does not clear canvas
	//		 offsetX: int => draws at a x offset
	//		 offsetY: int => draws at a y offset
	//		 scaleWidth: int => scales horizontally to width
	//		 scaleHeight: int => scales vertically to height
	//		 renderCallback: function => will call the function after the first render is completed
	//		 forceRedraw: function => will call the function on every frame, if it returns true, will redraw
	this.canvg = function (target, s, opts) {
		// no parameters
		if (target == null && s == null && opts == null) {
			var svgTags = document.getElementsByTagName('svg');
			for (var i=0; i<svgTags.length; i++) {
				var svgTag = svgTags[i];
				var c = document.createElement('canvas');
				c.width = svgTag.clientWidth;
				c.height = svgTag.clientHeight;
				svgTag.parentNode.insertBefore(c, svgTag);
				svgTag.parentNode.removeChild(svgTag);
				var div = document.createElement('div');
				div.appendChild(svgTag);
				canvg(c, div.innerHTML);
			}
			return;
		}	
		opts = opts || {};
	
		if (typeof target == 'string') {
			target = document.getElementById(target);
		}
		
		// store class on canvas
		if (target.svg != null) target.svg.stop();
		var svg = build();
		// on i.e. 8 for flash canvas, we can't assign the property so check for it
		if (!(target.childNodes.length == 1 && target.childNodes[0].nodeName == 'OBJECT')) target.svg = svg;
		svg.opts = opts;
		
		var ctx = target.getContext('2d');
		if (typeof(s.documentElement) != 'undefined') {
			// load from xml doc
			svg.loadXmlDoc(ctx, s);
		}
		else if (s.substr(0,1) == '<') {
			// load from xml string
			svg.loadXml(ctx, s);
		}
		else {
			// load from url
			svg.load(ctx, s);
		}
	}

	function build() {
		var svg = { };
		
		svg.FRAMERATE = 30;
		svg.MAX_VIRTUAL_PIXELS = 30000;
		
		// globals
		svg.init = function(ctx) {
			var uniqueId = 0;
			svg.UniqueId = function () { uniqueId++; return 'canvg' + uniqueId;	};
			svg.Definitions = {};
			svg.Styles = {};
			svg.Animations = [];
			svg.Images = [];
			svg.ctx = ctx;
			svg.ViewPort = new (function () {
				this.viewPorts = [];
				this.Clear = function() { this.viewPorts = []; }
				this.SetCurrent = function(width, height) { this.viewPorts.push({ width: width, height: height }); }
				this.RemoveCurrent = function() { this.viewPorts.pop(); }
				this.Current = function() { return this.viewPorts[this.viewPorts.length - 1]; }
				this.width = function() { return this.Current().width; }
				this.height = function() { return this.Current().height; }
				this.ComputeSize = function(d) {
					if (d != null && typeof(d) == 'number') return d;
					if (d == 'x') return this.width();
					if (d == 'y') return this.height();
					return Math.sqrt(Math.pow(this.width(), 2) + Math.pow(this.height(), 2)) / Math.sqrt(2);			
				}
			});
		}
		svg.init();
		
		// images loaded
		svg.ImagesLoaded = function() { 
			for (var i=0; i<svg.Images.length; i++) {
				if (!svg.Images[i].loaded) return false;
			}
			return true;
		}

		// trim
		svg.trim = function(s) { return s.replace(/^\s+|\s+$/g, ''); }
		
		// compress spaces
		svg.compressSpaces = function(s) { return s.replace(/[\s\r\t\n]+/gm,' '); }
		
		// ajax
		svg.ajax = function(url) {
			var AJAX;
			if(window.XMLHttpRequest){AJAX=new XMLHttpRequest();}
			else{AJAX=new ActiveXObject('Microsoft.XMLHTTP');}
			if(AJAX){
			   AJAX.open('GET',url,false);
			   AJAX.send(null);
			   return AJAX.responseText;
			}
			return null;
		} 
		
		// parse xml
		svg.parseXml = function(xml) {
			if (window.DOMParser)
			{
				var parser = new DOMParser();
				return parser.parseFromString(xml, 'text/xml');
			}
			else 
			{
				xml = xml.replace(/<!DOCTYPE svg[^>]*>/, '');
				var xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
				xmlDoc.async = 'false';
				xmlDoc.loadXML(xml); 
				return xmlDoc;
			}		
		}
		
		svg.Property = function(name, value) {
			this.name = name;
			this.value = value;
		}	
			svg.Property.prototype.getValue = function() {
				return this.value;
			}
		
			svg.Property.prototype.hasValue = function() {
				return (this.value != null && this.value !== '');
			}
							
			// return the numerical value of the property
			svg.Property.prototype.numValue = function() {
				if (!this.hasValue()) return 0;
				
				var n = parseFloat(this.value);
				if ((this.value + '').match(/%$/)) {
					n = n / 100.0;
				}
				return n;
			}
			
			svg.Property.prototype.valueOrDefault = function(def) {
				if (this.hasValue()) return this.value;
				return def;
			}
			
			svg.Property.prototype.numValueOrDefault = function(def) {
				if (this.hasValue()) return this.numValue();
				return def;
			}
			
			// color extensions
				// augment the current color value with the opacity
				svg.Property.prototype.addOpacity = function(opacity) {
					var newValue = this.value;
					if (opacity != null && opacity != '' && typeof(this.value)=='string') { // can only add opacity to colors, not patterns
						var color = new RGBColor(this.value);
						if (color.ok) {
							newValue = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + opacity + ')';
						}
					}
					return new svg.Property(this.name, newValue);
				}
			
			// definition extensions
				// get the definition from the definitions table
				svg.Property.prototype.getDefinition = function() {
					var name = this.value.match(/#([^\)']+)/);
					if (name) { name = name[1]; }
					if (!name) { name = this.value; }
					return svg.Definitions[name];
				}
				
				svg.Property.prototype.isUrlDefinition = function() {
					return this.value.indexOf('url(') == 0
				}
				
				svg.Property.prototype.getFillStyleDefinition = function(e, opacityProp) {
					var def = this.getDefinition();
					
					// gradient
					if (def != null && def.createGradient) {
						return def.createGradient(svg.ctx, e, opacityProp);
					}
					
					// pattern
					if (def != null && def.createPattern) {
						if (def.getHrefAttribute().hasValue()) {
							var pt = def.attribute('patternTransform');
							def = def.getHrefAttribute().getDefinition();
							if (pt.hasValue()) { def.attribute('patternTransform', true).value = pt.value; }
						}
						return def.createPattern(svg.ctx, e);
					}
					
					return null;
				}
			
			// length extensions
				svg.Property.prototype.getDPI = function(viewPort) {
					return 96.0; // TODO: compute?
				}
				
				svg.Property.prototype.getEM = function(viewPort) {
					var em = 12;
					
					var fontSize = new svg.Property('fontSize', svg.Font.Parse(svg.ctx.font).fontSize);
					if (fontSize.hasValue()) em = fontSize.toPixels(viewPort);
					
					return em;
				}
				
				svg.Property.prototype.getUnits = function() {
					var s = this.value+'';
					return s.replace(/[0-9\.\-]/g,'');
				}
			
				// get the length as pixels
				svg.Property.prototype.toPixels = function(viewPort, processPercent) {
					if (!this.hasValue()) return 0;
					var s = this.value+'';
					if (s.match(/em$/)) return this.numValue() * this.getEM(viewPort);
					if (s.match(/ex$/)) return this.numValue() * this.getEM(viewPort) / 2.0;
					if (s.match(/px$/)) return this.numValue();
					if (s.match(/pt$/)) return this.numValue() * this.getDPI(viewPort) * (1.0 / 72.0);
					if (s.match(/pc$/)) return this.numValue() * 15;
					if (s.match(/cm$/)) return this.numValue() * this.getDPI(viewPort) / 2.54;
					if (s.match(/mm$/)) return this.numValue() * this.getDPI(viewPort) / 25.4;
					if (s.match(/in$/)) return this.numValue() * this.getDPI(viewPort);
					if (s.match(/%$/)) return this.numValue() * svg.ViewPort.ComputeSize(viewPort);
					var n = this.numValue();
					if (processPercent && n < 1.0) return n * svg.ViewPort.ComputeSize(viewPort);
					return n;
				}

			// time extensions
				// get the time as milliseconds
				svg.Property.prototype.toMilliseconds = function() {
					if (!this.hasValue()) return 0;
					var s = this.value+'';
					if (s.match(/s$/)) return this.numValue() * 1000;
					if (s.match(/ms$/)) return this.numValue();
					return this.numValue();
				}
			
			// angle extensions
				// get the angle as radians
				svg.Property.prototype.toRadians = function() {
					if (!this.hasValue()) return 0;
					var s = this.value+'';
					if (s.match(/deg$/)) return this.numValue() * (Math.PI / 180.0);
					if (s.match(/grad$/)) return this.numValue() * (Math.PI / 200.0);
					if (s.match(/rad$/)) return this.numValue();
					return this.numValue() * (Math.PI / 180.0);
				}
		
		// fonts
		svg.Font = new (function() {
			this.Styles = 'normal|italic|oblique|inherit';
			this.Variants = 'normal|small-caps|inherit';
			this.Weights = 'normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit';
			
			this.CreateFont = function(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit) { 
				var f = inherit != null ? this.Parse(inherit) : this.CreateFont('', '', '', '', '', svg.ctx.font);
				return { 
					fontFamily: fontFamily || f.fontFamily, 
					fontSize: fontSize || f.fontSize, 
					fontStyle: fontStyle || f.fontStyle, 
					fontWeight: fontWeight || f.fontWeight, 
					fontVariant: fontVariant || f.fontVariant,
					toString: function () { return [this.fontStyle, this.fontVariant, this.fontWeight, this.fontSize, this.fontFamily].join(' ') } 
				} 
			}
			
			var that = this;
			this.Parse = function(s) {
				var f = {};
				var d = svg.trim(svg.compressSpaces(s || '')).split(' ');
				var set = { fontSize: false, fontStyle: false, fontWeight: false, fontVariant: false }
				var ff = '';
				for (var i=0; i<d.length; i++) {
					if (!set.fontStyle && that.Styles.indexOf(d[i]) != -1) { if (d[i] != 'inherit') f.fontStyle = d[i]; set.fontStyle = true; }
					else if (!set.fontVariant && that.Variants.indexOf(d[i]) != -1) { if (d[i] != 'inherit') f.fontVariant = d[i]; set.fontStyle = set.fontVariant = true;	}
					else if (!set.fontWeight && that.Weights.indexOf(d[i]) != -1) {	if (d[i] != 'inherit') f.fontWeight = d[i]; set.fontStyle = set.fontVariant = set.fontWeight = true; }
					else if (!set.fontSize) { if (d[i] != 'inherit') f.fontSize = d[i].split('/')[0]; set.fontStyle = set.fontVariant = set.fontWeight = set.fontSize = true; }
					else { if (d[i] != 'inherit') ff += d[i]; }
				} if (ff != '') f.fontFamily = ff;
				return f;
			}
		});
		
		// points and paths
		svg.ToNumberArray = function(s) {
			var a = svg.trim(svg.compressSpaces((s || '').replace(/,/g, ' '))).split(' ');
			for (var i=0; i<a.length; i++) {
				a[i] = parseFloat(a[i]);
			}
			return a;
		}		
		svg.Point = function(x, y) {
			this.x = x;
			this.y = y;
		}	
			svg.Point.prototype.angleTo = function(p) {
				return Math.atan2(p.y - this.y, p.x - this.x);
			}
			
			svg.Point.prototype.applyTransform = function(v) {
				var xp = this.x * v[0] + this.y * v[2] + v[4];
				var yp = this.x * v[1] + this.y * v[3] + v[5];
				this.x = xp;
				this.y = yp;
			}

		svg.CreatePoint = function(s) {
			var a = svg.ToNumberArray(s);
			return new svg.Point(a[0], a[1]);
		}
		svg.CreatePath = function(s) {
			var a = svg.ToNumberArray(s);
			var path = [];
			for (var i=0; i<a.length; i+=2) {
				path.push(new svg.Point(a[i], a[i+1]));
			}
			return path;
		}
		
		// bounding box
		svg.BoundingBox = function(x1, y1, x2, y2) { // pass in initial points if you want
			this.x1 = Number.NaN;
			this.y1 = Number.NaN;
			this.x2 = Number.NaN;
			this.y2 = Number.NaN;
			
			this.x = function() { return this.x1; }
			this.y = function() { return this.y1; }
			this.width = function() { return this.x2 - this.x1; }
			this.height = function() { return this.y2 - this.y1; }
			
			this.addPoint = function(x, y) {	
				if (x != null) {
					if (isNaN(this.x1) || isNaN(this.x2)) {
						this.x1 = x;
						this.x2 = x;
					}
					if (x < this.x1) this.x1 = x;
					if (x > this.x2) this.x2 = x;
				}
			
				if (y != null) {
					if (isNaN(this.y1) || isNaN(this.y2)) {
						this.y1 = y;
						this.y2 = y;
					}
					if (y < this.y1) this.y1 = y;
					if (y > this.y2) this.y2 = y;
				}
			}			
			this.addX = function(x) { this.addPoint(x, null); }
			this.addY = function(y) { this.addPoint(null, y); }
			
			this.addBoundingBox = function(bb) {
				this.addPoint(bb.x1, bb.y1);
				this.addPoint(bb.x2, bb.y2);
			}
			
			this.addQuadraticCurve = function(p0x, p0y, p1x, p1y, p2x, p2y) {
				var cp1x = p0x + 2/3 * (p1x - p0x); // CP1 = QP0 + 2/3 *(QP1-QP0)
				var cp1y = p0y + 2/3 * (p1y - p0y); // CP1 = QP0 + 2/3 *(QP1-QP0)
				var cp2x = cp1x + 1/3 * (p2x - p0x); // CP2 = CP1 + 1/3 *(QP2-QP0)
				var cp2y = cp1y + 1/3 * (p2y - p0y); // CP2 = CP1 + 1/3 *(QP2-QP0)
				this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y,	cp2y, p2x, p2y);
			}
			
			this.addBezierCurve = function(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
				// from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
				var p0 = [p0x, p0y], p1 = [p1x, p1y], p2 = [p2x, p2y], p3 = [p3x, p3y];
				this.addPoint(p0[0], p0[1]);
				this.addPoint(p3[0], p3[1]);
				
				for (i=0; i<=1; i++) {
					var f = function(t) { 
						return Math.pow(1-t, 3) * p0[i]
						+ 3 * Math.pow(1-t, 2) * t * p1[i]
						+ 3 * (1-t) * Math.pow(t, 2) * p2[i]
						+ Math.pow(t, 3) * p3[i];
					}
					
					var b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
					var a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
					var c = 3 * p1[i] - 3 * p0[i];
					
					if (a == 0) {
						if (b == 0) continue;
						var t = -c / b;
						if (0 < t && t < 1) {
							if (i == 0) this.addX(f(t));
							if (i == 1) this.addY(f(t));
						}
						continue;
					}
					
					var b2ac = Math.pow(b, 2) - 4 * c * a;
					if (b2ac < 0) continue;
					var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
					if (0 < t1 && t1 < 1) {
						if (i == 0) this.addX(f(t1));
						if (i == 1) this.addY(f(t1));
					}
					var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
					if (0 < t2 && t2 < 1) {
						if (i == 0) this.addX(f(t2));
						if (i == 1) this.addY(f(t2));
					}
				}
			}
			
			this.isPointInBox = function(x, y) {
				return (this.x1 <= x && x <= this.x2 && this.y1 <= y && y <= this.y2);
			}
			
			this.addPoint(x1, y1);
			this.addPoint(x2, y2);
		}
		
		// transforms
		svg.Transform = function(v) {	
			var that = this;
			this.Type = {}
		
			// translate
			this.Type.translate = function(s) {
				this.p = svg.CreatePoint(s);			
				this.apply = function(ctx) {
					ctx.translate(this.p.x || 0.0, this.p.y || 0.0);
				}
				this.unapply = function(ctx) {
					ctx.translate(-1.0 * this.p.x || 0.0, -1.0 * this.p.y || 0.0);
				}
				this.applyToPoint = function(p) {
					p.applyTransform([1, 0, 0, 1, this.p.x || 0.0, this.p.y || 0.0]);
				}
			}
			
			// rotate
			this.Type.rotate = function(s) {
				var a = svg.ToNumberArray(s);
				this.angle = new svg.Property('angle', a[0]);
				this.cx = a[1] || 0;
				this.cy = a[2] || 0;
				this.apply = function(ctx) {
					ctx.translate(this.cx, this.cy);
					ctx.rotate(this.angle.toRadians());
					ctx.translate(-this.cx, -this.cy);
				}
				this.unapply = function(ctx) {
					ctx.translate(this.cx, this.cy);
					ctx.rotate(-1.0 * this.angle.toRadians());
					ctx.translate(-this.cx, -this.cy);
				}
				this.applyToPoint = function(p) {
					var a = this.angle.toRadians();
					p.applyTransform([1, 0, 0, 1, this.p.x || 0.0, this.p.y || 0.0]);
					p.applyTransform([Math.cos(a), Math.sin(a), -Math.sin(a), Math.cos(a), 0, 0]);
					p.applyTransform([1, 0, 0, 1, -this.p.x || 0.0, -this.p.y || 0.0]);
				}			
			}
			
			this.Type.scale = function(s) {
				this.p = svg.CreatePoint(s);
				this.apply = function(ctx) {
					ctx.scale(this.p.x || 1.0, this.p.y || this.p.x || 1.0);
				}
				this.unapply = function(ctx) {
					ctx.scale(1.0 / this.p.x || 1.0, 1.0 / this.p.y || this.p.x || 1.0);
				}
				this.applyToPoint = function(p) {
					p.applyTransform([this.p.x || 0.0, 0, 0, this.p.y || 0.0, 0, 0]);
				}				
			}
			
			this.Type.matrix = function(s) {
				this.m = svg.ToNumberArray(s);
				this.apply = function(ctx) {
					ctx.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5]);
				}
				this.applyToPoint = function(p) {
					p.applyTransform(this.m);
				}					
			}
			
			this.Type.SkewBase = function(s) {
				this.base = that.Type.matrix;
				this.base(s);
				this.angle = new svg.Property('angle', s);
			}
			this.Type.SkewBase.prototype = new this.Type.matrix;
			
			this.Type.skewX = function(s) {
				this.base = that.Type.SkewBase;
				this.base(s);
				this.m = [1, 0, Math.tan(this.angle.toRadians()), 1, 0, 0];
			}
			this.Type.skewX.prototype = new this.Type.SkewBase;
			
			this.Type.skewY = function(s) {
				this.base = that.Type.SkewBase;
				this.base(s);
				this.m = [1, Math.tan(this.angle.toRadians()), 0, 1, 0, 0];
			}
			this.Type.skewY.prototype = new this.Type.SkewBase;
		
			this.transforms = [];
			
			this.apply = function(ctx) {
				for (var i=0; i<this.transforms.length; i++) {
					this.transforms[i].apply(ctx);
				}
			}
			
			this.unapply = function(ctx) {
				for (var i=this.transforms.length-1; i>=0; i--) {
					this.transforms[i].unapply(ctx);
				}
			}
			
			this.applyToPoint = function(p) {
				for (var i=0; i<this.transforms.length; i++) {
					this.transforms[i].applyToPoint(p);
				}
			}
			
			var data = svg.trim(svg.compressSpaces(v)).replace(/\)(\s?,\s?)/g,') ').split(/\s(?=[a-z])/);
			for (var i=0; i<data.length; i++) {
				var type = svg.trim(data[i].split('(')[0]);
				var s = data[i].split('(')[1].replace(')','');
				var transform = new this.Type[type](s);
				transform.type = type;
				this.transforms.push(transform);
			}
		}
		
		// aspect ratio
		svg.AspectRatio = function(ctx, aspectRatio, width, desiredWidth, height, desiredHeight, minX, minY, refX, refY) {
			// aspect ratio - http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
			aspectRatio = svg.compressSpaces(aspectRatio);
			aspectRatio = aspectRatio.replace(/^defer\s/,''); // ignore defer
			var align = aspectRatio.split(' ')[0] || 'xMidYMid';
			var meetOrSlice = aspectRatio.split(' ')[1] || 'meet';					
	
			// calculate scale
			var scaleX = width / desiredWidth;
			var scaleY = height / desiredHeight;
			var scaleMin = Math.min(scaleX, scaleY);
			var scaleMax = Math.max(scaleX, scaleY);
			if (meetOrSlice == 'meet') { desiredWidth *= scaleMin; desiredHeight *= scaleMin; }
			if (meetOrSlice == 'slice') { desiredWidth *= scaleMax; desiredHeight *= scaleMax; }	
			
			refX = new svg.Property('refX', refX);
			refY = new svg.Property('refY', refY);
			if (refX.hasValue() && refY.hasValue()) {				
				ctx.translate(-scaleMin * refX.toPixels('x'), -scaleMin * refY.toPixels('y'));
			} 
			else {					
				// align
				if (align.match(/^xMid/) && ((meetOrSlice == 'meet' && scaleMin == scaleY) || (meetOrSlice == 'slice' && scaleMax == scaleY))) ctx.translate(width / 2.0 - desiredWidth / 2.0, 0); 
				if (align.match(/YMid$/) && ((meetOrSlice == 'meet' && scaleMin == scaleX) || (meetOrSlice == 'slice' && scaleMax == scaleX))) ctx.translate(0, height / 2.0 - desiredHeight / 2.0); 
				if (align.match(/^xMax/) && ((meetOrSlice == 'meet' && scaleMin == scaleY) || (meetOrSlice == 'slice' && scaleMax == scaleY))) ctx.translate(width - desiredWidth, 0); 
				if (align.match(/YMax$/) && ((meetOrSlice == 'meet' && scaleMin == scaleX) || (meetOrSlice == 'slice' && scaleMax == scaleX))) ctx.translate(0, height - desiredHeight); 
			}
			
			// scale
			if (align == 'none') ctx.scale(scaleX, scaleY);
			else if (meetOrSlice == 'meet') ctx.scale(scaleMin, scaleMin); 
			else if (meetOrSlice == 'slice') ctx.scale(scaleMax, scaleMax); 	
			
			// translate
			ctx.translate(minX == null ? 0 : -minX, minY == null ? 0 : -minY);			
		}
		
		// elements
		svg.Element = {}
		
		svg.EmptyProperty = new svg.Property('EMPTY', '');
		
		svg.Element.ElementBase = function(node) {	
			this.attributes = {};
			this.styles = {};
			this.children = [];
			
			// get or create attribute
			this.attribute = function(name, createIfNotExists) {
				var a = this.attributes[name];
				if (a != null) return a;
							
				if (createIfNotExists == true) { a = new svg.Property(name, ''); this.attributes[name] = a; }
				return a || svg.EmptyProperty;
			}
			
			this.getHrefAttribute = function() {
				for (var a in this.attributes) { 
					if (a.match(/:href$/)) { 
						return this.attributes[a]; 
					} 
				}
				return svg.EmptyProperty;
			}
			
			// get or create style, crawls up node tree
			this.style = function(name, createIfNotExists) {
				var s = this.styles[name];
				if (s != null) return s;
				
				var a = this.attribute(name);
				if (a != null && a.hasValue()) {
					this.styles[name] = a; // move up to me to cache
					return a;
				}
				
				var p = this.parent;
				if (p != null) {
					var ps = p.style(name);
					if (ps != null && ps.hasValue()) {
						return ps;
					}
				}
					
				if (createIfNotExists == true) { s = new svg.Property(name, ''); this.styles[name] = s; }
				return s || svg.EmptyProperty;
			}
			
			// base render
			this.render = function(ctx) {
				// don't render display=none
				if (this.style('display').value == 'none') return;
				
				// don't render visibility=hidden
				if (this.attribute('visibility').value == 'hidden') return;
			
				ctx.save();
				if (this.attribute('mask').hasValue()) { // mask
					var mask = this.attribute('mask').getDefinition();
					if (mask != null) mask.apply(ctx, this);
				}
				else if (this.style('filter').hasValue()) { // filter
					var filter = this.style('filter').getDefinition();
					if (filter != null) filter.apply(ctx, this);
				}
				else {	
					this.setContext(ctx);
					this.renderChildren(ctx);	
					this.clearContext(ctx);							
				}
				ctx.restore();
			}
			
			// base set context
			this.setContext = function(ctx) {
				// OVERRIDE ME!
			}
			
			// base clear context
			this.clearContext = function(ctx) {
				// OVERRIDE ME!
			}			
			
			// base render children
			this.renderChildren = function(ctx) {
				for (var i=0; i<this.children.length; i++) {
					this.children[i].render(ctx);
				}
			}
			
			this.addChild = function(childNode, create) {
				var child = childNode;
				if (create) child = svg.CreateElement(childNode);
				child.parent = this;
				this.children.push(child);			
			}
				
			if (node != null && node.nodeType == 1) { //ELEMENT_NODE
				// add children
				for (var i=0; i<node.childNodes.length; i++) {
					var childNode = node.childNodes[i];
					if (childNode.nodeType == 1) this.addChild(childNode, true); //ELEMENT_NODE
					if (this.captureTextNodes && childNode.nodeType == 3) {
						var text = childNode.nodeValue || childNode.text || '';
						if (svg.trim(svg.compressSpaces(text)) != '') {
							this.addChild(new svg.Element.tspan(childNode), false); // TEXT_NODE
						}
					}
				}
				
				// add attributes
				for (var i=0; i<node.attributes.length; i++) {
					var attribute = node.attributes[i];
					this.attributes[attribute.nodeName] = new svg.Property(attribute.nodeName, attribute.nodeValue);
				}
										
				// add tag styles
				var styles = svg.Styles[node.nodeName];
				if (styles != null) {
					for (var name in styles) {
						this.styles[name] = styles[name];
					}
				}					
				
				// add class styles
				if (this.attribute('class').hasValue()) {
					var classes = svg.compressSpaces(this.attribute('class').value).split(' ');
					for (var j=0; j<classes.length; j++) {
						styles = svg.Styles['.'+classes[j]];
						if (styles != null) {
							for (var name in styles) {
								this.styles[name] = styles[name];
							}
						}
						styles = svg.Styles[node.nodeName+'.'+classes[j]];
						if (styles != null) {
							for (var name in styles) {
								this.styles[name] = styles[name];
							}
						}
					}
				}
				
				// add id styles
				if (this.attribute('id').hasValue()) {
					var styles = svg.Styles['#' + this.attribute('id').value];
					if (styles != null) {
						for (var name in styles) {
							this.styles[name] = styles[name];
						}
					}
				}
				
				// add inline styles
				if (this.attribute('style').hasValue()) {
					var styles = this.attribute('style').value.split(';');
					for (var i=0; i<styles.length; i++) {
						if (svg.trim(styles[i]) != '') {
							var style = styles[i].split(':');
							var name = svg.trim(style[0]);
							var value = svg.trim(style[1]);
							this.styles[name] = new svg.Property(name, value);
						}
					}
				}	

				// add id
				if (this.attribute('id').hasValue()) {
					if (svg.Definitions[this.attribute('id').value] == null) {
						svg.Definitions[this.attribute('id').value] = this;
					}
				}
			}
		}
		
		svg.Element.RenderedElementBase = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);
			
			this.setContext = function(ctx) {
				// fill
				if (this.style('fill').isUrlDefinition()) {
					var fs = this.style('fill').getFillStyleDefinition(this, this.style('fill-opacity'));
					if (fs != null) ctx.fillStyle = fs;
				}
				else if (this.style('fill').hasValue()) {
					var fillStyle = this.style('fill');
					if (fillStyle.value == 'currentColor') fillStyle.value = this.style('color').value;
					ctx.fillStyle = (fillStyle.value == 'none' ? 'rgba(0,0,0,0)' : fillStyle.value);
				}
				if (this.style('fill-opacity').hasValue()) {
					var fillStyle = new svg.Property('fill', ctx.fillStyle);
					fillStyle = fillStyle.addOpacity(this.style('fill-opacity').value);
					ctx.fillStyle = fillStyle.value;
				}
									
				// stroke
				if (this.style('stroke').isUrlDefinition()) {
					var fs = this.style('stroke').getFillStyleDefinition(this, this.style('stroke-opacity'));
					if (fs != null) ctx.strokeStyle = fs;
				}
				else if (this.style('stroke').hasValue()) {
					var strokeStyle = this.style('stroke');
					if (strokeStyle.value == 'currentColor') strokeStyle.value = this.style('color').value;
					ctx.strokeStyle = (strokeStyle.value == 'none' ? 'rgba(0,0,0,0)' : strokeStyle.value);
				}
				if (this.style('stroke-opacity').hasValue()) {
					var strokeStyle = new svg.Property('stroke', ctx.strokeStyle);
					strokeStyle = strokeStyle.addOpacity(this.style('stroke-opacity').value);
					ctx.strokeStyle = strokeStyle.value;
				}
				if (this.style('stroke-width').hasValue()) {
					var newLineWidth = this.style('stroke-width').toPixels();
					ctx.lineWidth = newLineWidth == 0 ? 0.001 : newLineWidth; // browsers don't respect 0
			    }
				if (this.style('stroke-linecap').hasValue()) ctx.lineCap = this.style('stroke-linecap').value;
				if (this.style('stroke-linejoin').hasValue()) ctx.lineJoin = this.style('stroke-linejoin').value;
				if (this.style('stroke-miterlimit').hasValue()) ctx.miterLimit = this.style('stroke-miterlimit').value;
				if (this.style('stroke-dasharray').hasValue()) {
					var gaps = svg.ToNumberArray(this.style('stroke-dasharray').value);
					if (typeof(ctx.setLineDash) != 'undefined') { ctx.setLineDash(gaps); }
					else if (typeof(ctx.webkitLineDash) != 'undefined') { ctx.webkitLineDash = gaps; }
					else if (typeof(ctx.mozDash ) != 'undefined') { ctx.mozDash  = gaps; }
					
					var offset = this.style('stroke-dashoffset').numValueOrDefault(1);
					if (typeof(ctx.lineDashOffset) != 'undefined') { ctx.lineDashOffset = offset; }
					else if (typeof(ctx.webkitLineDashOffset) != 'undefined') { ctx.webkitLineDashOffset = offset; }
					else if (typeof(ctx.mozDashOffset) != 'undefined') { ctx.mozDashOffset = offset; }
				}

				// font
				if (typeof(ctx.font) != 'undefined') {
					ctx.font = svg.Font.CreateFont( 
						this.style('font-style').value, 
						this.style('font-variant').value, 
						this.style('font-weight').value, 
						this.style('font-size').hasValue() ? this.style('font-size').toPixels() + 'px' : '', 
						this.style('font-family').value).toString();
				}
				
				// transform
				if (this.attribute('transform').hasValue()) { 
					var transform = new svg.Transform(this.attribute('transform').value);
					transform.apply(ctx);
				}
				
				// clip
				if (this.attribute('clip-path').hasValue()) {
					var clip = this.attribute('clip-path').getDefinition();
					if (clip != null) clip.apply(ctx);
				}
				
				// opacity
				if (this.style('opacity').hasValue()) {
					ctx.globalAlpha = this.style('opacity').numValue();
				}
			}		
		}
		svg.Element.RenderedElementBase.prototype = new svg.Element.ElementBase;
		
		svg.Element.PathElementBase = function(node) {
			this.base = svg.Element.RenderedElementBase;
			this.base(node);
			
			this.path = function(ctx) {
				if (ctx != null) ctx.beginPath();
				return new svg.BoundingBox();
			}
			
			this.renderChildren = function(ctx) {
				this.path(ctx);
				svg.Mouse.checkPath(this, ctx);
				if (ctx.fillStyle != '') {
					if (this.attribute('fill-rule').hasValue()) { ctx.fill(this.attribute('fill-rule').value); }
					else { ctx.fill(); }
				}
				if (ctx.strokeStyle != '') ctx.stroke();
				
				var markers = this.getMarkers();
				if (markers != null) {
					if (this.style('marker-start').isUrlDefinition()) {
						var marker = this.style('marker-start').getDefinition();
						marker.render(ctx, markers[0][0], markers[0][1]);
					}
					if (this.style('marker-mid').isUrlDefinition()) {
						var marker = this.style('marker-mid').getDefinition();
						for (var i=1;i<markers.length-1;i++) {
							marker.render(ctx, markers[i][0], markers[i][1]);
						}
					}
					if (this.style('marker-end').isUrlDefinition()) {
						var marker = this.style('marker-end').getDefinition();
						marker.render(ctx, markers[markers.length-1][0], markers[markers.length-1][1]);
					}
				}					
			}
			
			this.getBoundingBox = function() {
				return this.path();
			}
			
			this.getMarkers = function() {
				return null;
			}
		}
		svg.Element.PathElementBase.prototype = new svg.Element.RenderedElementBase;
		
		// svg element
		svg.Element.svg = function(node) {
			this.base = svg.Element.RenderedElementBase;
			this.base(node);
			
			this.baseClearContext = this.clearContext;
			this.clearContext = function(ctx) {
				this.baseClearContext(ctx);
				svg.ViewPort.RemoveCurrent();
			}
			
			this.baseSetContext = this.setContext;
			this.setContext = function(ctx) {
				// initial values
				ctx.strokeStyle = 'rgba(0,0,0,0)';
				ctx.lineCap = 'butt';
				ctx.lineJoin = 'miter';
				ctx.miterLimit = 4;			
			
				this.baseSetContext(ctx);
				
				// create new view port
				if (!this.attribute('x').hasValue()) this.attribute('x', true).value = 0;
				if (!this.attribute('y').hasValue()) this.attribute('y', true).value = 0;
				ctx.translate(this.attribute('x').toPixels('x'), this.attribute('y').toPixels('y'));
				
				var width = svg.ViewPort.width();
				var height = svg.ViewPort.height();
				
				if (!this.attribute('width').hasValue()) this.attribute('width', true).value = '100%';
				if (!this.attribute('height').hasValue()) this.attribute('height', true).value = '100%';
				if (typeof(this.root) == 'undefined') {
					width = this.attribute('width').toPixels('x');
					height = this.attribute('height').toPixels('y');
					
					var x = 0;
					var y = 0;
					if (this.attribute('refX').hasValue() && this.attribute('refY').hasValue()) {
						x = -this.attribute('refX').toPixels('x');
						y = -this.attribute('refY').toPixels('y');
					}
					
					ctx.beginPath();
					ctx.moveTo(x, y);
					ctx.lineTo(width, y);
					ctx.lineTo(width, height);
					ctx.lineTo(x, height);
					ctx.closePath();
					ctx.clip();
				}
				svg.ViewPort.SetCurrent(width, height);	
						
				// viewbox
				if (this.attribute('viewBox').hasValue()) {				
					var viewBox = svg.ToNumberArray(this.attribute('viewBox').value);
					var minX = viewBox[0];
					var minY = viewBox[1];
					width = viewBox[2];
					height = viewBox[3];
					
					svg.AspectRatio(ctx,
									this.attribute('preserveAspectRatio').value, 
									svg.ViewPort.width(), 
									width,
									svg.ViewPort.height(),
									height,
									minX,
									minY,
									this.attribute('refX').value,
									this.attribute('refY').value);
										
					svg.ViewPort.RemoveCurrent();	
					svg.ViewPort.SetCurrent(viewBox[2], viewBox[3]);						
				}				
			}
		}
		svg.Element.svg.prototype = new svg.Element.RenderedElementBase;

		// rect element
		svg.Element.rect = function(node) {
			this.base = svg.Element.PathElementBase;
			this.base(node);
			
			this.path = function(ctx) {
				var x = this.attribute('x').toPixels('x');
				var y = this.attribute('y').toPixels('y');
				var width = this.attribute('width').toPixels('x');
				var height = this.attribute('height').toPixels('y');
				var rx = this.attribute('rx').toPixels('x');
				var ry = this.attribute('ry').toPixels('y');
				if (this.attribute('rx').hasValue() && !this.attribute('ry').hasValue()) ry = rx;
				if (this.attribute('ry').hasValue() && !this.attribute('rx').hasValue()) rx = ry;
				rx = Math.min(rx, width / 2.0);
				ry = Math.min(ry, height / 2.0);
				if (ctx != null) {
					ctx.beginPath();
					ctx.moveTo(x + rx, y);
					ctx.lineTo(x + width - rx, y);
					ctx.quadraticCurveTo(x + width, y, x + width, y + ry)
					ctx.lineTo(x + width, y + height - ry);
					ctx.quadraticCurveTo(x + width, y + height, x + width - rx, y + height)
					ctx.lineTo(x + rx, y + height);
					ctx.quadraticCurveTo(x, y + height, x, y + height - ry)
					ctx.lineTo(x, y + ry);
					ctx.quadraticCurveTo(x, y, x + rx, y)
					ctx.closePath();
				}
				
				return new svg.BoundingBox(x, y, x + width, y + height);
			}
		}
		svg.Element.rect.prototype = new svg.Element.PathElementBase;
		
		// circle element
		svg.Element.circle = function(node) {
			this.base = svg.Element.PathElementBase;
			this.base(node);
			
			this.path = function(ctx) {
				var cx = this.attribute('cx').toPixels('x');
				var cy = this.attribute('cy').toPixels('y');
				var r = this.attribute('r').toPixels();
			
				if (ctx != null) {
					ctx.beginPath();
					ctx.arc(cx, cy, r, 0, Math.PI * 2, true); 
					ctx.closePath();
				}
				
				return new svg.BoundingBox(cx - r, cy - r, cx + r, cy + r);
			}
		}
		svg.Element.circle.prototype = new svg.Element.PathElementBase;	

		// ellipse element
		svg.Element.ellipse = function(node) {
			this.base = svg.Element.PathElementBase;
			this.base(node);
			
			this.path = function(ctx) {
				var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
				var rx = this.attribute('rx').toPixels('x');
				var ry = this.attribute('ry').toPixels('y');
				var cx = this.attribute('cx').toPixels('x');
				var cy = this.attribute('cy').toPixels('y');
				
				if (ctx != null) {
					ctx.beginPath();
					ctx.moveTo(cx, cy - ry);
					ctx.bezierCurveTo(cx + (KAPPA * rx), cy - ry,  cx + rx, cy - (KAPPA * ry), cx + rx, cy);
					ctx.bezierCurveTo(cx + rx, cy + (KAPPA * ry), cx + (KAPPA * rx), cy + ry, cx, cy + ry);
					ctx.bezierCurveTo(cx - (KAPPA * rx), cy + ry, cx - rx, cy + (KAPPA * ry), cx - rx, cy);
					ctx.bezierCurveTo(cx - rx, cy - (KAPPA * ry), cx - (KAPPA * rx), cy - ry, cx, cy - ry);
					ctx.closePath();
				}
				
				return new svg.BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);
			}
		}
		svg.Element.ellipse.prototype = new svg.Element.PathElementBase;			
		
		// line element
		svg.Element.line = function(node) {
			this.base = svg.Element.PathElementBase;
			this.base(node);
			
			this.getPoints = function() {
				return [
					new svg.Point(this.attribute('x1').toPixels('x'), this.attribute('y1').toPixels('y')),
					new svg.Point(this.attribute('x2').toPixels('x'), this.attribute('y2').toPixels('y'))];
			}
								
			this.path = function(ctx) {
				var points = this.getPoints();
				
				if (ctx != null) {
					ctx.beginPath();
					ctx.moveTo(points[0].x, points[0].y);
					ctx.lineTo(points[1].x, points[1].y);
				}
				
				return new svg.BoundingBox(points[0].x, points[0].y, points[1].x, points[1].y);
			}
			
			this.getMarkers = function() {
				var points = this.getPoints();	
				var a = points[0].angleTo(points[1]);
				return [[points[0], a], [points[1], a]];
			}
		}
		svg.Element.line.prototype = new svg.Element.PathElementBase;		
				
		// polyline element
		svg.Element.polyline = function(node) {
			this.base = svg.Element.PathElementBase;
			this.base(node);
			
			this.points = svg.CreatePath(this.attribute('points').value);
			this.path = function(ctx) {
				var bb = new svg.BoundingBox(this.points[0].x, this.points[0].y);
				if (ctx != null) {
					ctx.beginPath();
					ctx.moveTo(this.points[0].x, this.points[0].y);
				}
				for (var i=1; i<this.points.length; i++) {
					bb.addPoint(this.points[i].x, this.points[i].y);
					if (ctx != null) ctx.lineTo(this.points[i].x, this.points[i].y);
				}
				return bb;
			}
			
			this.getMarkers = function() {
				var markers = [];
				for (var i=0; i<this.points.length - 1; i++) {
					markers.push([this.points[i], this.points[i].angleTo(this.points[i+1])]);
				}
				markers.push([this.points[this.points.length-1], markers[markers.length-1][1]]);
				return markers;
			}			
		}
		svg.Element.polyline.prototype = new svg.Element.PathElementBase;				
				
		// polygon element
		svg.Element.polygon = function(node) {
			this.base = svg.Element.polyline;
			this.base(node);
			
			this.basePath = this.path;
			this.path = function(ctx) {
				var bb = this.basePath(ctx);
				if (ctx != null) {
					ctx.lineTo(this.points[0].x, this.points[0].y);
					ctx.closePath();
				}
				return bb;
			}
		}
		svg.Element.polygon.prototype = new svg.Element.polyline;

		// path element
		svg.Element.path = function(node) {
			this.base = svg.Element.PathElementBase;
			this.base(node);
					
			var d = this.attribute('d').value;
			// TODO: convert to real lexer based on http://www.w3.org/TR/SVG11/paths.html#PathDataBNF
			d = d.replace(/,/gm,' '); // get rid of all commas
			d = d.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,'$1 $2'); // separate commands from commands
			d = d.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,'$1 $2'); // separate commands from commands
			d = d.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm,'$1 $2'); // separate commands from points
			d = d.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm,'$1 $2'); // separate commands from points
			d = d.replace(/([0-9])([+\-])/gm,'$1 $2'); // separate digits when no comma
			d = d.replace(/(\.[0-9]*)(\.)/gm,'$1 $2'); // separate digits when no comma
			d = d.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm,'$1 $3 $4 '); // shorthand elliptical arc path syntax
			d = svg.compressSpaces(d); // compress multiple spaces
			d = svg.trim(d);
			this.PathParser = new (function(d) {
				this.tokens = d.split(' ');
				
				this.reset = function() {
					this.i = -1;
					this.command = '';
					this.previousCommand = '';
					this.start = new svg.Point(0, 0);
					this.control = new svg.Point(0, 0);
					this.current = new svg.Point(0, 0);
					this.points = [];
					this.angles = [];
				}
								
				this.isEnd = function() {
					return this.i >= this.tokens.length - 1;
				}
				
				this.isCommandOrEnd = function() {
					if (this.isEnd()) return true;
					return this.tokens[this.i + 1].match(/^[A-Za-z]$/) != null;
				}
				
				this.isRelativeCommand = function() {
					switch(this.command)
					{
						case 'm':
						case 'l':
						case 'h':
						case 'v':
						case 'c':
						case 's':
						case 'q':
						case 't':
						case 'a':
						case 'z':
							return true;
							break;
					}
					return false;
				}
							
				this.getToken = function() {
					this.i++;
					return this.tokens[this.i];
				}
				
				this.getScalar = function() {
					return parseFloat(this.getToken());
				}
				
				this.nextCommand = function() {
					this.previousCommand = this.command;
					this.command = this.getToken();
				}				
				
				this.getPoint = function() {
					var p = new svg.Point(this.getScalar(), this.getScalar());
					return this.makeAbsolute(p);
				}
				
				this.getAsControlPoint = function() {
					var p = this.getPoint();
					this.control = p;
					return p;
				}
				
				this.getAsCurrentPoint = function() {
					var p = this.getPoint();
					this.current = p;
					return p;	
				}
				
				this.getReflectedControlPoint = function() {
					if (this.previousCommand.toLowerCase() != 'c' && 
					    this.previousCommand.toLowerCase() != 's' &&
						this.previousCommand.toLowerCase() != 'q' && 
						this.previousCommand.toLowerCase() != 't' ){
						return this.current;
					}
					
					// reflect point
					var p = new svg.Point(2 * this.current.x - this.control.x, 2 * this.current.y - this.control.y);					
					return p;
				}
				
				this.makeAbsolute = function(p) {
					if (this.isRelativeCommand()) {
						p.x += this.current.x;
						p.y += this.current.y;
					}
					return p;
				}
				
				this.addMarker = function(p, from, priorTo) {
					// if the last angle isn't filled in because we didn't have this point yet ...
					if (priorTo != null && this.angles.length > 0 && this.angles[this.angles.length-1] == null) {
						this.angles[this.angles.length-1] = this.points[this.points.length-1].angleTo(priorTo);
					}
					this.addMarkerAngle(p, from == null ? null : from.angleTo(p));
				}
				
				this.addMarkerAngle = function(p, a) {
					this.points.push(p);
					this.angles.push(a);
				}				
				
				this.getMarkerPoints = function() { return this.points; }
				this.getMarkerAngles = function() {
					for (var i=0; i<this.angles.length; i++) {
						if (this.angles[i] == null) {
							for (var j=i+1; j<this.angles.length; j++) {
								if (this.angles[j] != null) {
									this.angles[i] = this.angles[j];
									break;
								}
							}
						}
					}
					return this.angles;
				}
			})(d);

			this.path = function(ctx) {
				var pp = this.PathParser;
				pp.reset();

				var bb = new svg.BoundingBox();
				if (ctx != null) ctx.beginPath();
				while (!pp.isEnd()) {
					pp.nextCommand();
					switch (pp.command) {
					case 'M':
					case 'm':
						var p = pp.getAsCurrentPoint();
						pp.addMarker(p);
						bb.addPoint(p.x, p.y);
						if (ctx != null) ctx.moveTo(p.x, p.y);
						pp.start = pp.current;
						while (!pp.isCommandOrEnd()) {
							var p = pp.getAsCurrentPoint();
							pp.addMarker(p, pp.start);
							bb.addPoint(p.x, p.y);
							if (ctx != null) ctx.lineTo(p.x, p.y);
						}
						break;
					case 'L':
					case 'l':
						while (!pp.isCommandOrEnd()) {
							var c = pp.current;
							var p = pp.getAsCurrentPoint();
							pp.addMarker(p, c);
							bb.addPoint(p.x, p.y);
							if (ctx != null) ctx.lineTo(p.x, p.y);
						}
						break;
					case 'H':
					case 'h':
						while (!pp.isCommandOrEnd()) {
							var newP = new svg.Point((pp.isRelativeCommand() ? pp.current.x : 0) + pp.getScalar(), pp.current.y);
							pp.addMarker(newP, pp.current);
							pp.current = newP;
							bb.addPoint(pp.current.x, pp.current.y);
							if (ctx != null) ctx.lineTo(pp.current.x, pp.current.y);
						}
						break;
					case 'V':
					case 'v':
						while (!pp.isCommandOrEnd()) {
							var newP = new svg.Point(pp.current.x, (pp.isRelativeCommand() ? pp.current.y : 0) + pp.getScalar());
							pp.addMarker(newP, pp.current);
							pp.current = newP;
							bb.addPoint(pp.current.x, pp.current.y);
							if (ctx != null) ctx.lineTo(pp.current.x, pp.current.y);
						}
						break;
					case 'C':
					case 'c':
						while (!pp.isCommandOrEnd()) {
							var curr = pp.current;
							var p1 = pp.getPoint();
							var cntrl = pp.getAsControlPoint();
							var cp = pp.getAsCurrentPoint();
							pp.addMarker(cp, cntrl, p1);
							bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
							if (ctx != null) ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
						}
						break;
					case 'S':
					case 's':
						while (!pp.isCommandOrEnd()) {
							var curr = pp.current;
							var p1 = pp.getReflectedControlPoint();
							var cntrl = pp.getAsControlPoint();
							var cp = pp.getAsCurrentPoint();
							pp.addMarker(cp, cntrl, p1);
							bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
							if (ctx != null) ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
						}
						break;
					case 'Q':
					case 'q':
						while (!pp.isCommandOrEnd()) {
							var curr = pp.current;
							var cntrl = pp.getAsControlPoint();
							var cp = pp.getAsCurrentPoint();
							pp.addMarker(cp, cntrl, cntrl);
							bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);
							if (ctx != null) ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
						}
						break;
					case 'T':
					case 't':
						while (!pp.isCommandOrEnd()) {
							var curr = pp.current;
							var cntrl = pp.getReflectedControlPoint();
							pp.control = cntrl;
							var cp = pp.getAsCurrentPoint();
							pp.addMarker(cp, cntrl, cntrl);
							bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);
							if (ctx != null) ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
						}
						break;
					case 'A':
					case 'a':
						while (!pp.isCommandOrEnd()) {
						    var curr = pp.current;
							var rx = pp.getScalar();
							var ry = pp.getScalar();
							var xAxisRotation = pp.getScalar() * (Math.PI / 180.0);
							var largeArcFlag = pp.getScalar();
							var sweepFlag = pp.getScalar();
							var cp = pp.getAsCurrentPoint();

							// Conversion from endpoint to center parameterization
							// http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
							// x1', y1'
							var currp = new svg.Point(
								Math.cos(xAxisRotation) * (curr.x - cp.x) / 2.0 + Math.sin(xAxisRotation) * (curr.y - cp.y) / 2.0,
								-Math.sin(xAxisRotation) * (curr.x - cp.x) / 2.0 + Math.cos(xAxisRotation) * (curr.y - cp.y) / 2.0
							);
							// adjust radii
							var l = Math.pow(currp.x,2)/Math.pow(rx,2)+Math.pow(currp.y,2)/Math.pow(ry,2);
							if (l > 1) {
								rx *= Math.sqrt(l);
								ry *= Math.sqrt(l);
							}
							// cx', cy'
							var s = (largeArcFlag == sweepFlag ? -1 : 1) * Math.sqrt(
								((Math.pow(rx,2)*Math.pow(ry,2))-(Math.pow(rx,2)*Math.pow(currp.y,2))-(Math.pow(ry,2)*Math.pow(currp.x,2))) /
								(Math.pow(rx,2)*Math.pow(currp.y,2)+Math.pow(ry,2)*Math.pow(currp.x,2))
							);
							if (isNaN(s)) s = 0;
							var cpp = new svg.Point(s * rx * currp.y / ry, s * -ry * currp.x / rx);
							// cx, cy
							var centp = new svg.Point(
								(curr.x + cp.x) / 2.0 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y,
								(curr.y + cp.y) / 2.0 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y
							);
							// vector magnitude
							var m = function(v) { return Math.sqrt(Math.pow(v[0],2) + Math.pow(v[1],2)); }
							// ratio between two vectors
							var r = function(u, v) { return (u[0]*v[0]+u[1]*v[1]) / (m(u)*m(v)) }
							// angle between two vectors
							var a = function(u, v) { return (u[0]*v[1] < u[1]*v[0] ? -1 : 1) * Math.acos(r(u,v)); }
							// initial angle
							var a1 = a([1,0], [(currp.x-cpp.x)/rx,(currp.y-cpp.y)/ry]);
							// angle delta
							var u = [(currp.x-cpp.x)/rx,(currp.y-cpp.y)/ry];
							var v = [(-currp.x-cpp.x)/rx,(-currp.y-cpp.y)/ry];
							var ad = a(u, v);
							if (r(u,v) <= -1) ad = Math.PI;
							if (r(u,v) >= 1) ad = 0;

							// for markers
							var dir = 1 - sweepFlag ? 1.0 : -1.0;
							var ah = a1 + dir * (ad / 2.0);
							var halfWay = new svg.Point(
								centp.x + rx * Math.cos(ah),
								centp.y + ry * Math.sin(ah)
							);
							pp.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
							pp.addMarkerAngle(cp, ah - dir * Math.PI);

							bb.addPoint(cp.x, cp.y); // TODO: this is too naive, make it better
							if (ctx != null) {
								var r = rx > ry ? rx : ry;
								var sx = rx > ry ? 1 : rx / ry;
								var sy = rx > ry ? ry / rx : 1;

								ctx.translate(centp.x, centp.y);
								ctx.rotate(xAxisRotation);
								ctx.scale(sx, sy);
								ctx.arc(0, 0, r, a1, a1 + ad, 1 - sweepFlag);
								ctx.scale(1/sx, 1/sy);
								ctx.rotate(-xAxisRotation);
								ctx.translate(-centp.x, -centp.y);
							}
						}
						break;
					case 'Z':
					case 'z':
						if (ctx != null) ctx.closePath();
						pp.current = pp.start;
					}
				}

				return bb;
			}

			this.getMarkers = function() {
				var points = this.PathParser.getMarkerPoints();
				var angles = this.PathParser.getMarkerAngles();
				
				var markers = [];
				for (var i=0; i<points.length; i++) {
					markers.push([points[i], angles[i]]);
				}
				return markers;
			}
		}
		svg.Element.path.prototype = new svg.Element.PathElementBase;
		
		// pattern element
		svg.Element.pattern = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);
			
			this.createPattern = function(ctx, element) {
				var width = this.attribute('width').toPixels('x', true);
				var height = this.attribute('height').toPixels('y', true);
			
				// render me using a temporary svg element
				var tempSvg = new svg.Element.svg();
				tempSvg.attributes['viewBox'] = new svg.Property('viewBox', this.attribute('viewBox').value);
				tempSvg.attributes['width'] = new svg.Property('width', width + 'px');
				tempSvg.attributes['height'] = new svg.Property('height', height + 'px');
				tempSvg.attributes['transform'] = new svg.Property('transform', this.attribute('patternTransform').value);
				tempSvg.children = this.children;
				
				var c = document.createElement('canvas');
				c.width = width;
				c.height = height;
				var cctx = c.getContext('2d');
				if (this.attribute('x').hasValue() && this.attribute('y').hasValue()) {
					cctx.translate(this.attribute('x').toPixels('x', true), this.attribute('y').toPixels('y', true));
				}
				// render 3x3 grid so when we transform there's no white space on edges
				for (var x=-1; x<=1; x++) {
					for (var y=-1; y<=1; y++) {
						cctx.save();
						cctx.translate(x * c.width, y * c.height);
						tempSvg.render(cctx);
						cctx.restore();
					}
				}
				var pattern = ctx.createPattern(c, 'repeat');
				return pattern;
			}
		}
		svg.Element.pattern.prototype = new svg.Element.ElementBase;
		
		// marker element
		svg.Element.marker = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);
			
			this.baseRender = this.render;
			this.render = function(ctx, point, angle) {
				ctx.translate(point.x, point.y);
				if (this.attribute('orient').valueOrDefault('auto') == 'auto') ctx.rotate(angle);
				if (this.attribute('markerUnits').valueOrDefault('strokeWidth') == 'strokeWidth') ctx.scale(ctx.lineWidth, ctx.lineWidth);
				ctx.save();
							
				// render me using a temporary svg element
				var tempSvg = new svg.Element.svg();
				tempSvg.attributes['viewBox'] = new svg.Property('viewBox', this.attribute('viewBox').value);
				tempSvg.attributes['refX'] = new svg.Property('refX', this.attribute('refX').value);
				tempSvg.attributes['refY'] = new svg.Property('refY', this.attribute('refY').value);
				tempSvg.attributes['width'] = new svg.Property('width', this.attribute('markerWidth').value);
				tempSvg.attributes['height'] = new svg.Property('height', this.attribute('markerHeight').value);
				tempSvg.attributes['fill'] = new svg.Property('fill', this.attribute('fill').valueOrDefault('black'));
				tempSvg.attributes['stroke'] = new svg.Property('stroke', this.attribute('stroke').valueOrDefault('none'));
				tempSvg.children = this.children;
				tempSvg.render(ctx);
				
				ctx.restore();
				if (this.attribute('markerUnits').valueOrDefault('strokeWidth') == 'strokeWidth') ctx.scale(1/ctx.lineWidth, 1/ctx.lineWidth);
				if (this.attribute('orient').valueOrDefault('auto') == 'auto') ctx.rotate(-angle);
				ctx.translate(-point.x, -point.y);
			}
		}
		svg.Element.marker.prototype = new svg.Element.ElementBase;
		
		// definitions element
		svg.Element.defs = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);	
			
			this.render = function(ctx) {
				// NOOP
			}
		}
		svg.Element.defs.prototype = new svg.Element.ElementBase;
		
		// base for gradients
		svg.Element.GradientBase = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);
			
			this.gradientUnits = this.attribute('gradientUnits').valueOrDefault('objectBoundingBox');
			
			this.stops = [];			
			for (var i=0; i<this.children.length; i++) {
				var child = this.children[i];
				if (child.type == 'stop') this.stops.push(child);
			}	
			
			this.getGradient = function() {
				// OVERRIDE ME!
			}			

			this.createGradient = function(ctx, element, parentOpacityProp) {
				var stopsContainer = this;
				if (this.getHrefAttribute().hasValue()) {
					stopsContainer = this.getHrefAttribute().getDefinition();
				}
				
				var addParentOpacity = function (color) {
					if (parentOpacityProp.hasValue()) {
						var p = new svg.Property('color', color);
						return p.addOpacity(parentOpacityProp.value).value;
					}
					return color;
				};
			
				var g = this.getGradient(ctx, element);
				if (g == null) return addParentOpacity(stopsContainer.stops[stopsContainer.stops.length - 1].color);
				for (var i=0; i<stopsContainer.stops.length; i++) {
					g.addColorStop(stopsContainer.stops[i].offset, addParentOpacity(stopsContainer.stops[i].color));
				}
				
				if (this.attribute('gradientTransform').hasValue()) {
					// render as transformed pattern on temporary canvas
					var rootView = svg.ViewPort.viewPorts[0];
					
					var rect = new svg.Element.rect();
					rect.attributes['x'] = new svg.Property('x', -svg.MAX_VIRTUAL_PIXELS/3.0);
					rect.attributes['y'] = new svg.Property('y', -svg.MAX_VIRTUAL_PIXELS/3.0);
					rect.attributes['width'] = new svg.Property('width', svg.MAX_VIRTUAL_PIXELS);
					rect.attributes['height'] = new svg.Property('height', svg.MAX_VIRTUAL_PIXELS);
					
					var group = new svg.Element.g();
					group.attributes['transform'] = new svg.Property('transform', this.attribute('gradientTransform').value);
					group.children = [ rect ];
					
					var tempSvg = new svg.Element.svg();
					tempSvg.attributes['x'] = new svg.Property('x', 0);
					tempSvg.attributes['y'] = new svg.Property('y', 0);
					tempSvg.attributes['width'] = new svg.Property('width', rootView.width);
					tempSvg.attributes['height'] = new svg.Property('height', rootView.height);
					tempSvg.children = [ group ];
					
					var c = document.createElement('canvas');
					c.width = rootView.width;
					c.height = rootView.height;
					var tempCtx = c.getContext('2d');
					tempCtx.fillStyle = g;
					tempSvg.render(tempCtx);		
					return tempCtx.createPattern(c, 'no-repeat');
				}
				
				return g;				
			}
		}
		svg.Element.GradientBase.prototype = new svg.Element.ElementBase;
		
		// linear gradient element
		svg.Element.linearGradient = function(node) {
			this.base = svg.Element.GradientBase;
			this.base(node);
			
			this.getGradient = function(ctx, element) {
				var bb = element.getBoundingBox();
				
				if (!this.attribute('x1').hasValue()
				 && !this.attribute('y1').hasValue()
				 && !this.attribute('x2').hasValue()
				 && !this.attribute('y2').hasValue()) {
					this.attribute('x1', true).value = 0;
					this.attribute('y1', true).value = 0;
					this.attribute('x2', true).value = 1;
					this.attribute('y2', true).value = 0;
				 }
				
				var x1 = (this.gradientUnits == 'objectBoundingBox' 
					? bb.x() + bb.width() * this.attribute('x1').numValue() 
					: this.attribute('x1').toPixels('x'));
				var y1 = (this.gradientUnits == 'objectBoundingBox' 
					? bb.y() + bb.height() * this.attribute('y1').numValue()
					: this.attribute('y1').toPixels('y'));
				var x2 = (this.gradientUnits == 'objectBoundingBox' 
					? bb.x() + bb.width() * this.attribute('x2').numValue()
					: this.attribute('x2').toPixels('x'));
				var y2 = (this.gradientUnits == 'objectBoundingBox' 
					? bb.y() + bb.height() * this.attribute('y2').numValue()
					: this.attribute('y2').toPixels('y'));

				if (x1 == x2 && y1 == y2) return null;
				return ctx.createLinearGradient(x1, y1, x2, y2);
			}
		}
		svg.Element.linearGradient.prototype = new svg.Element.GradientBase;
		
		// radial gradient element
		svg.Element.radialGradient = function(node) {
			this.base = svg.Element.GradientBase;
			this.base(node);
			
			this.getGradient = function(ctx, element) {
				var bb = element.getBoundingBox();
				
				if (!this.attribute('cx').hasValue()) this.attribute('cx', true).value = '50%';
				if (!this.attribute('cy').hasValue()) this.attribute('cy', true).value = '50%';
				if (!this.attribute('r').hasValue()) this.attribute('r', true).value = '50%';
				
				var cx = (this.gradientUnits == 'objectBoundingBox' 
					? bb.x() + bb.width() * this.attribute('cx').numValue() 
					: this.attribute('cx').toPixels('x'));
				var cy = (this.gradientUnits == 'objectBoundingBox' 
					? bb.y() + bb.height() * this.attribute('cy').numValue() 
					: this.attribute('cy').toPixels('y'));
				
				var fx = cx;
				var fy = cy;
				if (this.attribute('fx').hasValue()) {
					fx = (this.gradientUnits == 'objectBoundingBox' 
					? bb.x() + bb.width() * this.attribute('fx').numValue() 
					: this.attribute('fx').toPixels('x'));
				}
				if (this.attribute('fy').hasValue()) {
					fy = (this.gradientUnits == 'objectBoundingBox' 
					? bb.y() + bb.height() * this.attribute('fy').numValue() 
					: this.attribute('fy').toPixels('y'));
				}
				
				var r = (this.gradientUnits == 'objectBoundingBox' 
					? (bb.width() + bb.height()) / 2.0 * this.attribute('r').numValue()
					: this.attribute('r').toPixels());
				
				return ctx.createRadialGradient(fx, fy, 0, cx, cy, r);
			}
		}
		svg.Element.radialGradient.prototype = new svg.Element.GradientBase;
		
		// gradient stop element
		svg.Element.stop = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);
			
			this.offset = this.attribute('offset').numValue();
			if (this.offset < 0) this.offset = 0;
			if (this.offset > 1) this.offset = 1;
			
			var stopColor = this.style('stop-color');
			if (this.style('stop-opacity').hasValue()) stopColor = stopColor.addOpacity(this.style('stop-opacity').value);
			this.color = stopColor.value;
		}
		svg.Element.stop.prototype = new svg.Element.ElementBase;
		
		// animation base element
		svg.Element.AnimateBase = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);
			
			svg.Animations.push(this);
			
			this.duration = 0.0;
			this.begin = this.attribute('begin').toMilliseconds();
			this.maxDuration = this.begin + this.attribute('dur').toMilliseconds();
			
			this.getProperty = function() {
				var attributeType = this.attribute('attributeType').value;
				var attributeName = this.attribute('attributeName').value;
				
				if (attributeType == 'CSS') {
					return this.parent.style(attributeName, true);
				}
				return this.parent.attribute(attributeName, true);			
			};
			
			this.initialValue = null;
			this.initialUnits = '';
			this.removed = false;			

			this.calcValue = function() {
				// OVERRIDE ME!
				return '';
			}
					
			this.update = function(delta) {	
				// set initial value
				if (this.initialValue == null) {
					this.initialValue = this.getProperty().value;
					this.initialUnits = this.getProperty().getUnits();
				}
			
				// if we're past the end time
				if (this.duration > this.maxDuration) {
					// loop for indefinitely repeating animations
					if (this.attribute('repeatCount').value == 'indefinite'
					 || this.attribute('repeatDur').value == 'indefinite') {
						this.duration = 0.0
					}
					else if (this.attribute('fill').valueOrDefault('remove') == 'remove' && !this.removed) {
						this.removed = true;
						this.getProperty().value = this.initialValue;
						return true;
					}
					else {
						return false; // no updates made
					}
				}			
				this.duration = this.duration + delta;
			
				// if we're past the begin time
				var updated = false;
				if (this.begin < this.duration) {
					var newValue = this.calcValue(); // tween
					
					if (this.attribute('type').hasValue()) {
						// for transform, etc.
						var type = this.attribute('type').value;
						newValue = type + '(' + newValue + ')';
					}
					
					this.getProperty().value = newValue;
					updated = true;
				}
				
				return updated;
			}
			
			this.from = this.attribute('from');
			this.to = this.attribute('to');
			this.values = this.attribute('values');
			if (this.values.hasValue()) this.values.value = this.values.value.split(';');
			
			// fraction of duration we've covered
			this.progress = function() {
				var ret = { progress: (this.duration - this.begin) / (this.maxDuration - this.begin) };
				if (this.values.hasValue()) {
					var p = ret.progress * (this.values.value.length - 1);
					var lb = Math.floor(p), ub = Math.ceil(p);
					ret.from = new svg.Property('from', parseFloat(this.values.value[lb]));
					ret.to = new svg.Property('to', parseFloat(this.values.value[ub]));
					ret.progress = (p - lb) / (ub - lb);
				}
				else {
					ret.from = this.from;
					ret.to = this.to;
				}
				return ret;
			}			
		}
		svg.Element.AnimateBase.prototype = new svg.Element.ElementBase;
		
		// animate element
		svg.Element.animate = function(node) {
			this.base = svg.Element.AnimateBase;
			this.base(node);
			
			this.calcValue = function() {
				var p = this.progress();
				
				// tween value linearly
				var newValue = p.from.numValue() + (p.to.numValue() - p.from.numValue()) * p.progress; 
				return newValue + this.initialUnits;
			};
		}
		svg.Element.animate.prototype = new svg.Element.AnimateBase;
			
		// animate color element
		svg.Element.animateColor = function(node) {
			this.base = svg.Element.AnimateBase;
			this.base(node);

			this.calcValue = function() {
				var p = this.progress();
				var from = new RGBColor(p.from.value);
				var to = new RGBColor(p.to.value);
				
				if (from.ok && to.ok) {
					// tween color linearly
					var r = from.r + (to.r - from.r) * p.progress;
					var g = from.g + (to.g - from.g) * p.progress;
					var b = from.b + (to.b - from.b) * p.progress;
					return 'rgb('+parseInt(r,10)+','+parseInt(g,10)+','+parseInt(b,10)+')';
				}
				return this.attribute('from').value;
			};
		}
		svg.Element.animateColor.prototype = new svg.Element.AnimateBase;
		
		// animate transform element
		svg.Element.animateTransform = function(node) {
			this.base = svg.Element.AnimateBase;
			this.base(node);
			
			this.calcValue = function() {
				var p = this.progress();
				
				// tween value linearly
				var from = svg.ToNumberArray(p.from.value);
				var to = svg.ToNumberArray(p.to.value);
				var newValue = '';
				for (var i=0; i<from.length; i++) {
					newValue += from[i] + (to[i] - from[i]) * p.progress + ' ';
				}
				return newValue;
			};
		}
		svg.Element.animateTransform.prototype = new svg.Element.animate;
		
		// font element
		svg.Element.font = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);

			this.horizAdvX = this.attribute('horiz-adv-x').numValue();			
			
			this.isRTL = false;
			this.isArabic = false;
			this.fontFace = null;
			this.missingGlyph = null;
			this.glyphs = [];			
			for (var i=0; i<this.children.length; i++) {
				var child = this.children[i];
				if (child.type == 'font-face') {
					this.fontFace = child;
					if (child.style('font-family').hasValue()) {
						svg.Definitions[child.style('font-family').value] = this;
					}
				}
				else if (child.type == 'missing-glyph') this.missingGlyph = child;
				else if (child.type == 'glyph') {
					if (child.arabicForm != '') {
						this.isRTL = true;
						this.isArabic = true;
						if (typeof(this.glyphs[child.unicode]) == 'undefined') this.glyphs[child.unicode] = [];
						this.glyphs[child.unicode][child.arabicForm] = child;
					}
					else {
						this.glyphs[child.unicode] = child;
					}
				}
			}	
		}
		svg.Element.font.prototype = new svg.Element.ElementBase;
		
		// font-face element
		svg.Element.fontface = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);	
			
			this.ascent = this.attribute('ascent').value;
			this.descent = this.attribute('descent').value;
			this.unitsPerEm = this.attribute('units-per-em').numValue();				
		}
		svg.Element.fontface.prototype = new svg.Element.ElementBase;
		
		// missing-glyph element
		svg.Element.missingglyph = function(node) {
			this.base = svg.Element.path;
			this.base(node);	
			
			this.horizAdvX = 0;
		}
		svg.Element.missingglyph.prototype = new svg.Element.path;
		
		// glyph element
		svg.Element.glyph = function(node) {
			this.base = svg.Element.path;
			this.base(node);	
			
			this.horizAdvX = this.attribute('horiz-adv-x').numValue();
			this.unicode = this.attribute('unicode').value;
			this.arabicForm = this.attribute('arabic-form').value;
		}
		svg.Element.glyph.prototype = new svg.Element.path;
		
		// text element
		svg.Element.text = function(node) {
			this.captureTextNodes = true;
			this.base = svg.Element.RenderedElementBase;
			this.base(node);
			
			this.baseSetContext = this.setContext;
			this.setContext = function(ctx) {
				this.baseSetContext(ctx);
				if (this.style('dominant-baseline').hasValue()) ctx.textBaseline = this.style('dominant-baseline').value;
				if (this.style('alignment-baseline').hasValue()) ctx.textBaseline = this.style('alignment-baseline').value;
			}
			
			this.getBoundingBox = function () {
				// TODO: implement
				return new svg.BoundingBox(this.attribute('x').toPixels('x'), this.attribute('y').toPixels('y'), 0, 0);
			}
			
			this.renderChildren = function(ctx) {
				this.x = this.attribute('x').toPixels('x');
				this.y = this.attribute('y').toPixels('y');
				this.x += this.getAnchorDelta(ctx, this, 0);
				for (var i=0; i<this.children.length; i++) {
					this.renderChild(ctx, this, i);
				}
			}
			
			var textAnchor = this.style('text-anchor').valueOrDefault('start');
			this.getAnchorDelta = function (ctx, parent, startI) {
				if (textAnchor != 'start') {
					var width = 0;
					for (var i=startI; i<parent.children.length; i++) {
						var child = parent.children[i];
						if (i > startI && child.attribute('x').hasValue()) break; // new group
						width += child.measureTextRecursive(ctx);
					}
					return -1 * (textAnchor == 'end' ? width : width / 2.0);
				}
				return 0;
			}
			
			this.renderChild = function(ctx, parent, i) {
				var child = parent.children[i];
				if (child.attribute('x').hasValue()) {
					child.x = child.attribute('x').toPixels('x') + this.getAnchorDelta(ctx, parent, i);
				}
				else {
					if (this.attribute('dx').hasValue()) this.x += this.attribute('dx').toPixels('x');
					if (child.attribute('dx').hasValue()) this.x += child.attribute('dx').toPixels('x');
					child.x = this.x;
				}
				this.x = child.x + child.measureText(ctx);
				
				if (child.attribute('y').hasValue()) {
					child.y = child.attribute('y').toPixels('y');
				}
				else {
					if (this.attribute('dy').hasValue()) this.y += this.attribute('dy').toPixels('y');
					if (child.attribute('dy').hasValue()) this.y += child.attribute('dy').toPixels('y');
					child.y = this.y;
				}
				this.y = child.y;
				
				child.render(ctx);
				
				for (var i=0; i<child.children.length; i++) {
					this.renderChild(ctx, child, i);
				}
			}
		}
		svg.Element.text.prototype = new svg.Element.RenderedElementBase;
		
		// text base
		svg.Element.TextElementBase = function(node) {
			this.base = svg.Element.RenderedElementBase;
			this.base(node);
			
			this.getGlyph = function(font, text, i) {
				var c = text[i];
				var glyph = null;
				if (font.isArabic) {
					var arabicForm = 'isolated';
					if ((i==0 || text[i-1]==' ') && i<text.length-2 && text[i+1]!=' ') arabicForm = 'terminal'; 
					if (i>0 && text[i-1]!=' ' && i<text.length-2 && text[i+1]!=' ') arabicForm = 'medial';
					if (i>0 && text[i-1]!=' ' && (i == text.length-1 || text[i+1]==' ')) arabicForm = 'initial';
					if (typeof(font.glyphs[c]) != 'undefined') {
						glyph = font.glyphs[c][arabicForm];
						if (glyph == null && font.glyphs[c].type == 'glyph') glyph = font.glyphs[c];
					}
				}
				else {
					glyph = font.glyphs[c];
				}
				if (glyph == null) glyph = font.missingGlyph;
				return glyph;
			}
			
			this.renderChildren = function(ctx) {
				var customFont = this.parent.style('font-family').getDefinition();
				if (customFont != null) {
					var fontSize = this.parent.style('font-size').numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize);
					var fontStyle = this.parent.style('font-style').valueOrDefault(svg.Font.Parse(svg.ctx.font).fontStyle);
					var text = this.getText();
					if (customFont.isRTL) text = text.split("").reverse().join("");
					
					var dx = svg.ToNumberArray(this.parent.attribute('dx').value);
					for (var i=0; i<text.length; i++) {
						var glyph = this.getGlyph(customFont, text, i);
						var scale = fontSize / customFont.fontFace.unitsPerEm;
						ctx.translate(this.x, this.y);
						ctx.scale(scale, -scale);
						var lw = ctx.lineWidth;
						ctx.lineWidth = ctx.lineWidth * customFont.fontFace.unitsPerEm / fontSize;
						if (fontStyle == 'italic') ctx.transform(1, 0, .4, 1, 0, 0);
						glyph.render(ctx);
						if (fontStyle == 'italic') ctx.transform(1, 0, -.4, 1, 0, 0);
						ctx.lineWidth = lw;
						ctx.scale(1/scale, -1/scale);
						ctx.translate(-this.x, -this.y);	
						
						this.x += fontSize * (glyph.horizAdvX || customFont.horizAdvX) / customFont.fontFace.unitsPerEm;
						if (typeof(dx[i]) != 'undefined' && !isNaN(dx[i])) {
							this.x += dx[i];
						}
					}
					return;
				}
			
				if (ctx.fillStyle != '') ctx.fillText(svg.compressSpaces(this.getText()), this.x, this.y);
				if (ctx.strokeStyle != '') ctx.strokeText(svg.compressSpaces(this.getText()), this.x, this.y);
			}
			
			this.getText = function() {
				// OVERRIDE ME
			}
			
			this.measureTextRecursive = function(ctx) {
				var width = this.measureText(ctx);
				for (var i=0; i<this.children.length; i++) {
					width += this.children[i].measureTextRecursive(ctx);
				}
				return width;
			}
			
			this.measureText = function(ctx) {
				var customFont = this.parent.style('font-family').getDefinition();
				if (customFont != null) {
					var fontSize = this.parent.style('font-size').numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize);
					var measure = 0;
					var text = this.getText();
					if (customFont.isRTL) text = text.split("").reverse().join("");
					var dx = svg.ToNumberArray(this.parent.attribute('dx').value);
					for (var i=0; i<text.length; i++) {
						var glyph = this.getGlyph(customFont, text, i);
						measure += (glyph.horizAdvX || customFont.horizAdvX) * fontSize / customFont.fontFace.unitsPerEm;
						if (typeof(dx[i]) != 'undefined' && !isNaN(dx[i])) {
							measure += dx[i];
						}
					}
					return measure;
				}
			
				var textToMeasure = svg.compressSpaces(this.getText());
				if (!ctx.measureText) return textToMeasure.length * 10;
				
				ctx.save();
				this.setContext(ctx);
				var width = ctx.measureText(textToMeasure).width;
				ctx.restore();
				return width;
			}
		}
		svg.Element.TextElementBase.prototype = new svg.Element.RenderedElementBase;
		
		// tspan 
		svg.Element.tspan = function(node) {
			this.captureTextNodes = true;
			this.base = svg.Element.TextElementBase;
			this.base(node);
			
			this.text = node.nodeValue || node.text || '';
			this.getText = function() {
				return this.text;
			}
		}
		svg.Element.tspan.prototype = new svg.Element.TextElementBase;
		
		// tref
		svg.Element.tref = function(node) {
			this.base = svg.Element.TextElementBase;
			this.base(node);
			
			this.getText = function() {
				var element = this.getHrefAttribute().getDefinition();
				if (element != null) return element.children[0].getText();
			}
		}
		svg.Element.tref.prototype = new svg.Element.TextElementBase;		
		
		// a element
		svg.Element.a = function(node) {
			this.base = svg.Element.TextElementBase;
			this.base(node);
			
			this.hasText = true;
			for (var i=0; i<node.childNodes.length; i++) {
				if (node.childNodes[i].nodeType != 3) this.hasText = false;
			}
			
			// this might contain text
			this.text = this.hasText ? node.childNodes[0].nodeValue : '';
			this.getText = function() {
				return this.text;
			}		

			this.baseRenderChildren = this.renderChildren;
			this.renderChildren = function(ctx) {
				if (this.hasText) {
					// render as text element
					this.baseRenderChildren(ctx);
					var fontSize = new svg.Property('fontSize', svg.Font.Parse(svg.ctx.font).fontSize);
					svg.Mouse.checkBoundingBox(this, new svg.BoundingBox(this.x, this.y - fontSize.toPixels('y'), this.x + this.measureText(ctx), this.y));					
				}
				else {
					// render as temporary group
					var g = new svg.Element.g();
					g.children = this.children;
					g.parent = this;
					g.render(ctx);
				}
			}
			
			this.onclick = function() {
				window.open(this.getHrefAttribute().value);
			}
			
			this.onmousemove = function() {
				svg.ctx.canvas.style.cursor = 'pointer';
			}
		}
		svg.Element.a.prototype = new svg.Element.TextElementBase;		
		
		// image element
		svg.Element.image = function(node) {
			this.base = svg.Element.RenderedElementBase;
			this.base(node);
			
			var href = this.getHrefAttribute().value;
			var isSvg = href.match(/\.svg$/)
			
			svg.Images.push(this);
			this.loaded = false;
			if (!isSvg) {
				this.img = document.createElement('img');
				var self = this;
				this.img.onload = function() { self.loaded = true; }
				this.img.onerror = function() { if (typeof(console) != 'undefined') { console.log('ERROR: image "' + href + '" not found'); self.loaded = true; } }
				this.img.src = href;
			}
			else {
				this.img = svg.ajax(href);
				this.loaded = true;
			}
			
			this.renderChildren = function(ctx) {
				var x = this.attribute('x').toPixels('x');
				var y = this.attribute('y').toPixels('y');
				
				var width = this.attribute('width').toPixels('x');
				var height = this.attribute('height').toPixels('y');			
				if (width == 0 || height == 0) return;
			
				ctx.save();
				if (isSvg) {
					ctx.drawSvg(this.img, x, y, width, height);
				}
				else {
					ctx.translate(x, y);
					svg.AspectRatio(ctx,
									this.attribute('preserveAspectRatio').value,
									width,
									this.img.width,
									height,
									this.img.height,
									0,
									0);	
					ctx.drawImage(this.img, 0, 0);		
				}
				ctx.restore();
			}
			
			this.getBoundingBox = function() {
				var x = this.attribute('x').toPixels('x');
				var y = this.attribute('y').toPixels('y');
				var width = this.attribute('width').toPixels('x');
				var height = this.attribute('height').toPixels('y');
				return new svg.BoundingBox(x, y, x + width, y + height);
			}
		}
		svg.Element.image.prototype = new svg.Element.RenderedElementBase;
		
		// group element
		svg.Element.g = function(node) {
			this.base = svg.Element.RenderedElementBase;
			this.base(node);
			
			this.getBoundingBox = function() {
				var bb = new svg.BoundingBox();
				for (var i=0; i<this.children.length; i++) {
					bb.addBoundingBox(this.children[i].getBoundingBox());
				}
				return bb;
			};
		}
		svg.Element.g.prototype = new svg.Element.RenderedElementBase;

		// symbol element
		svg.Element.symbol = function(node) {
			this.base = svg.Element.RenderedElementBase;
			this.base(node);
			
			this.baseSetContext = this.setContext;
			this.setContext = function(ctx) {		
				this.baseSetContext(ctx);
				
				// viewbox
				if (this.attribute('viewBox').hasValue()) {				
					var viewBox = svg.ToNumberArray(this.attribute('viewBox').value);
					var minX = viewBox[0];
					var minY = viewBox[1];
					width = viewBox[2];
					height = viewBox[3];
					
					svg.AspectRatio(ctx,
									this.attribute('preserveAspectRatio').value, 
									this.attribute('width').toPixels('x'),
									width,
									this.attribute('height').toPixels('y'),
									height,
									minX,
									minY);

					svg.ViewPort.SetCurrent(viewBox[2], viewBox[3]);						
				}
			}			
		}
		svg.Element.symbol.prototype = new svg.Element.RenderedElementBase;		
			
		// style element
		svg.Element.style = function(node) { 
			this.base = svg.Element.ElementBase;
			this.base(node);
			
			// text, or spaces then CDATA
			var css = ''
			for (var i=0; i<node.childNodes.length; i++) {
			  css += node.childNodes[i].nodeValue;
			}
			css = css.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, ''); // remove comments
			css = svg.compressSpaces(css); // replace whitespace
			var cssDefs = css.split('}');
			for (var i=0; i<cssDefs.length; i++) {
				if (svg.trim(cssDefs[i]) != '') {
					var cssDef = cssDefs[i].split('{');
					var cssClasses = cssDef[0].split(',');
					var cssProps = cssDef[1].split(';');
					for (var j=0; j<cssClasses.length; j++) {
						var cssClass = svg.trim(cssClasses[j]);
						if (cssClass != '') {
							var props = {};
							for (var k=0; k<cssProps.length; k++) {
								var prop = cssProps[k].indexOf(':');
								var name = cssProps[k].substr(0, prop);
								var value = cssProps[k].substr(prop + 1, cssProps[k].length - prop);
								if (name != null && value != null) {
									props[svg.trim(name)] = new svg.Property(svg.trim(name), svg.trim(value));
								}
							}
							svg.Styles[cssClass] = props;
							if (cssClass == '@font-face') {
								var fontFamily = props['font-family'].value.replace(/"/g,'');
								var srcs = props['src'].value.split(',');
								for (var s=0; s<srcs.length; s++) {
									if (srcs[s].indexOf('format("svg")') > 0) {
										var urlStart = srcs[s].indexOf('url');
										var urlEnd = srcs[s].indexOf(')', urlStart);
										var url = srcs[s].substr(urlStart + 5, urlEnd - urlStart - 6);
										var doc = svg.parseXml(svg.ajax(url));
										var fonts = doc.getElementsByTagName('font');
										for (var f=0; f<fonts.length; f++) {
											var font = svg.CreateElement(fonts[f]);
											svg.Definitions[fontFamily] = font;
										}
									}
								}
							}
						}
					}
				}
			}
		}
		svg.Element.style.prototype = new svg.Element.ElementBase;
		
		// use element 
		svg.Element.use = function(node) {
			this.base = svg.Element.RenderedElementBase;
			this.base(node);
			
			this.baseSetContext = this.setContext;
			this.setContext = function(ctx) {
				this.baseSetContext(ctx);
				if (this.attribute('x').hasValue()) ctx.translate(this.attribute('x').toPixels('x'), 0);
				if (this.attribute('y').hasValue()) ctx.translate(0, this.attribute('y').toPixels('y'));
			}
			
			this.getDefinition = function() {
				var element = this.getHrefAttribute().getDefinition();
				if (this.attribute('width').hasValue()) element.attribute('width', true).value = this.attribute('width').value;
				if (this.attribute('height').hasValue()) element.attribute('height', true).value = this.attribute('height').value;
				return element;
			}
			
			this.path = function(ctx) {
				var element = this.getDefinition();
				if (element != null) element.path(ctx);
			}
			
			this.getBoundingBox = function() {
				var element = this.getDefinition();
				if (element != null) return element.getBoundingBox();
			}
			
			this.renderChildren = function(ctx) {
				var element = this.getDefinition();
				if (element != null) {
					// temporarily detach from parent and render
					var oldParent = element.parent;
					element.parent = null;
					element.render(ctx);
					element.parent = oldParent;
				}
			}
		}
		svg.Element.use.prototype = new svg.Element.RenderedElementBase;
		
		// mask element
		svg.Element.mask = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);
						
			this.apply = function(ctx, element) {
				// render as temp svg	
				var x = this.attribute('x').toPixels('x');
				var y = this.attribute('y').toPixels('y');
				var width = this.attribute('width').toPixels('x');
				var height = this.attribute('height').toPixels('y');
				
				if (width == 0 && height == 0) {
					var bb = new svg.BoundingBox();
					for (var i=0; i<this.children.length; i++) {
						bb.addBoundingBox(this.children[i].getBoundingBox());
					}
					var x = Math.floor(bb.x1);
					var y = Math.floor(bb.y1);
					var width = Math.floor(bb.width());
					var	height = Math.floor(bb.height());
				}
				
				// temporarily remove mask to avoid recursion
				var mask = element.attribute('mask').value;
				element.attribute('mask').value = '';
				
					var cMask = document.createElement('canvas');
					cMask.width = x + width;
					cMask.height = y + height;
					var maskCtx = cMask.getContext('2d');
					this.renderChildren(maskCtx);
				
					var c = document.createElement('canvas');
					c.width = x + width;
					c.height = y + height;
					var tempCtx = c.getContext('2d');
					element.render(tempCtx);
					tempCtx.globalCompositeOperation = 'destination-in';
					tempCtx.fillStyle = maskCtx.createPattern(cMask, 'no-repeat');
					tempCtx.fillRect(0, 0, x + width, y + height);
					
					ctx.fillStyle = tempCtx.createPattern(c, 'no-repeat');
					ctx.fillRect(0, 0, x + width, y + height);
					
				// reassign mask
				element.attribute('mask').value = mask;	
			}
			
			this.render = function(ctx) {
				// NO RENDER
			}
		}
		svg.Element.mask.prototype = new svg.Element.ElementBase;
		
		// clip element
		svg.Element.clipPath = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);
			
			this.apply = function(ctx) {
				for (var i=0; i<this.children.length; i++) {
					var child = this.children[i];
					if (typeof(child.path) != 'undefined') {
						var transform = null;
						if (child.attribute('transform').hasValue()) { 
							transform = new svg.Transform(child.attribute('transform').value);
							transform.apply(ctx);
						}
						child.path(ctx);
						ctx.clip();
						if (transform) { transform.unapply(ctx); }
					}
				}
			}
			
			this.render = function(ctx) {
				// NO RENDER
			}
		}
		svg.Element.clipPath.prototype = new svg.Element.ElementBase;

		// filters
		svg.Element.filter = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);
						
			this.apply = function(ctx, element) {
				// render as temp svg	
				var bb = element.getBoundingBox();
				var x = Math.floor(bb.x1);
				var y = Math.floor(bb.y1);
				var width = Math.floor(bb.width());
				var	height = Math.floor(bb.height());

				// temporarily remove filter to avoid recursion
				var filter = element.style('filter').value;
				element.style('filter').value = '';
				
				var px = 0, py = 0;
				for (var i=0; i<this.children.length; i++) {
					var efd = this.children[i].extraFilterDistance || 0;
					px = Math.max(px, efd);
					py = Math.max(py, efd);
				}
				
				var c = document.createElement('canvas');
				c.width = width + 2*px;
				c.height = height + 2*py;
				var tempCtx = c.getContext('2d');
				tempCtx.translate(-x + px, -y + py);
				element.render(tempCtx);
			
				// apply filters
				for (var i=0; i<this.children.length; i++) {
					this.children[i].apply(tempCtx, 0, 0, width + 2*px, height + 2*py);
				}
				
				// render on me
				ctx.drawImage(c, 0, 0, width + 2*px, height + 2*py, x - px, y - py, width + 2*px, height + 2*py);
				
				// reassign filter
				element.style('filter', true).value = filter;	
			}
			
			this.render = function(ctx) {
				// NO RENDER
			}		
		}
		svg.Element.filter.prototype = new svg.Element.ElementBase;
		
		svg.Element.feMorphology = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);
			
			this.apply = function(ctx, x, y, width, height) {
				// TODO: implement
			}
		}
		svg.Element.feMorphology.prototype = new svg.Element.ElementBase;
		
		svg.Element.feColorMatrix = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);
			
			function imGet(img, x, y, width, height, rgba) {
				return img[y*width*4 + x*4 + rgba];
			}
			
			function imSet(img, x, y, width, height, rgba, val) {
				img[y*width*4 + x*4 + rgba] = val;
			}
			
			this.apply = function(ctx, x, y, width, height) {
				// only supporting grayscale for now per Issue 195, need to extend to all matrix
				// assuming x==0 && y==0 for now
				var srcData = ctx.getImageData(0, 0, width, height);
				for (var y = 0; y < height; y++) {
					for (var x = 0; x < width; x++) {
						var r = imGet(srcData.data, x, y, width, height, 0);
						var g = imGet(srcData.data, x, y, width, height, 1);
						var b = imGet(srcData.data, x, y, width, height, 2);
						var gray = (r + g + b) / 3;
						imSet(srcData.data, x, y, width, height, 0, gray);
						imSet(srcData.data, x, y, width, height, 1, gray);
						imSet(srcData.data, x, y, width, height, 2, gray);
					}
				}
				ctx.clearRect(0, 0, width, height);
				ctx.putImageData(srcData, 0, 0);
			}
		}
		svg.Element.feColorMatrix.prototype = new svg.Element.ElementBase;
		
		svg.Element.feGaussianBlur = function(node) {
			this.base = svg.Element.ElementBase;
			this.base(node);

			this.blurRadius = Math.floor(this.attribute('stdDeviation').numValue());
			this.extraFilterDistance = this.blurRadius;
			
			this.apply = function(ctx, x, y, width, height) {
				if (typeof(stackBlurCanvasRGBA) == 'undefined') {
					if (typeof(console) != 'undefined') { console.log('ERROR: StackBlur.js must be included for blur to work'); }
					return;
				}
				
				// StackBlur requires canvas be on document
				ctx.canvas.id = svg.UniqueId();
				ctx.canvas.style.display = 'none';
				document.body.appendChild(ctx.canvas);
				stackBlurCanvasRGBA(ctx.canvas.id, x, y, width, height, this.blurRadius);
				document.body.removeChild(ctx.canvas);
			}
		}
		svg.Element.feGaussianBlur.prototype = new svg.Element.ElementBase;
		
		// title element, do nothing
		svg.Element.title = function(node) {
		}
		svg.Element.title.prototype = new svg.Element.ElementBase;

		// desc element, do nothing
		svg.Element.desc = function(node) {
		}
		svg.Element.desc.prototype = new svg.Element.ElementBase;		
		
		svg.Element.MISSING = function(node) {
			if (typeof(console) != 'undefined') { console.log('ERROR: Element \'' + node.nodeName + '\' not yet implemented.'); }
		}
		svg.Element.MISSING.prototype = new svg.Element.ElementBase;
		
		// element factory
		svg.CreateElement = function(node) {	
			var className = node.nodeName.replace(/^[^:]+:/,''); // remove namespace
			className = className.replace(/\-/g,''); // remove dashes
			var e = null;
			if (typeof(svg.Element[className]) != 'undefined') {
				e = new svg.Element[className](node);
			}
			else {
				e = new svg.Element.MISSING(node);
			}

			e.type = node.nodeName;
			return e;
		}
				
		// load from url
		svg.load = function(ctx, url) {
			svg.loadXml(ctx, svg.ajax(url));
		}
		
		// load from xml
		svg.loadXml = function(ctx, xml) {
			svg.loadXmlDoc(ctx, svg.parseXml(xml));
		}
		
		svg.loadXmlDoc = function(ctx, dom) {
			svg.init(ctx);
			
			var mapXY = function(p) {
				var e = ctx.canvas;
				while (e) {
					p.x -= e.offsetLeft;
					p.y -= e.offsetTop;
					e = e.offsetParent;
				}
				if (window.scrollX) p.x += window.scrollX;
				if (window.scrollY) p.y += window.scrollY;
				return p;
			}
			
			// bind mouse
			if (svg.opts['ignoreMouse'] != true) {
				ctx.canvas.onclick = function(e) {
					var p = mapXY(new svg.Point(e != null ? e.clientX : event.clientX, e != null ? e.clientY : event.clientY));
					svg.Mouse.onclick(p.x, p.y);
				};
				ctx.canvas.onmousemove = function(e) {
					var p = mapXY(new svg.Point(e != null ? e.clientX : event.clientX, e != null ? e.clientY : event.clientY));
					svg.Mouse.onmousemove(p.x, p.y);
				};
			}
		
			var e = svg.CreateElement(dom.documentElement);
			e.root = true;
					
			// render loop
			var isFirstRender = true;
			var draw = function() {
				svg.ViewPort.Clear();
				if (ctx.canvas.parentNode) svg.ViewPort.SetCurrent(ctx.canvas.parentNode.clientWidth, ctx.canvas.parentNode.clientHeight);
			
				if (svg.opts['ignoreDimensions'] != true) {
					// set canvas size
					if (e.style('width').hasValue()) {
						ctx.canvas.width = e.style('width').toPixels('x');
						ctx.canvas.style.width = ctx.canvas.width + 'px';
					}
					if (e.style('height').hasValue()) {
						ctx.canvas.height = e.style('height').toPixels('y');
						ctx.canvas.style.height = ctx.canvas.height + 'px';
					}
				}
				var cWidth = ctx.canvas.clientWidth || ctx.canvas.width;
				var cHeight = ctx.canvas.clientHeight || ctx.canvas.height;
				if (svg.opts['ignoreDimensions'] == true && e.style('width').hasValue() && e.style('height').hasValue()) {
					cWidth = e.style('width').toPixels('x');
					cHeight = e.style('height').toPixels('y');
				}
				svg.ViewPort.SetCurrent(cWidth, cHeight);		
				
				if (svg.opts['offsetX'] != null) e.attribute('x', true).value = svg.opts['offsetX'];
				if (svg.opts['offsetY'] != null) e.attribute('y', true).value = svg.opts['offsetY'];
				if (svg.opts['scaleWidth'] != null && svg.opts['scaleHeight'] != null) {
					var xRatio = 1, yRatio = 1, viewBox = svg.ToNumberArray(e.attribute('viewBox').value);
					if (e.attribute('width').hasValue()) xRatio = e.attribute('width').toPixels('x') / svg.opts['scaleWidth'];
					else if (!isNaN(viewBox[2])) xRatio = viewBox[2] / svg.opts['scaleWidth'];
					if (e.attribute('height').hasValue()) yRatio = e.attribute('height').toPixels('y') / svg.opts['scaleHeight'];
					else if (!isNaN(viewBox[3])) yRatio = viewBox[3] / svg.opts['scaleHeight'];
					
					e.attribute('width', true).value = svg.opts['scaleWidth'];
					e.attribute('height', true).value = svg.opts['scaleHeight'];			
					e.attribute('viewBox', true).value = '0 0 ' + (cWidth * xRatio) + ' ' + (cHeight * yRatio);
					e.attribute('preserveAspectRatio', true).value = 'none';
				}
			
				// clear and render
				if (svg.opts['ignoreClear'] != true) {
					ctx.clearRect(0, 0, cWidth, cHeight);
				}
				e.render(ctx);
				if (isFirstRender) {
					isFirstRender = false;
					if (typeof(svg.opts['renderCallback']) == 'function') svg.opts['renderCallback'](dom);
				}			
			}
			
			var waitingForImages = true;
			if (svg.ImagesLoaded()) {
				waitingForImages = false;
				draw();
			}
			svg.intervalID = setInterval(function() { 
				var needUpdate = false;
				
				if (waitingForImages && svg.ImagesLoaded()) {
					waitingForImages = false;
					needUpdate = true;
				}
			
				// need update from mouse events?
				if (svg.opts['ignoreMouse'] != true) {
					needUpdate = needUpdate | svg.Mouse.hasEvents();
				}
			
				// need update from animations?
				if (svg.opts['ignoreAnimation'] != true) {
					for (var i=0; i<svg.Animations.length; i++) {
						needUpdate = needUpdate | svg.Animations[i].update(1000 / svg.FRAMERATE);
					}
				}
				
				// need update from redraw?
				if (typeof(svg.opts['forceRedraw']) == 'function') {
					if (svg.opts['forceRedraw']() == true) needUpdate = true;
				}
				
				// render if needed
				if (needUpdate) {
					draw();				
					svg.Mouse.runEvents(); // run and clear our events
				}
			}, 1000 / svg.FRAMERATE);
		}
		
		svg.stop = function() {
			if (svg.intervalID) {
				clearInterval(svg.intervalID);
			}
		}
		
		svg.Mouse = new (function() {
			this.events = [];
			this.hasEvents = function() { return this.events.length != 0; }
		
			this.onclick = function(x, y) {
				this.events.push({ type: 'onclick', x: x, y: y, 
					run: function(e) { if (e.onclick) e.onclick(); }
				});
			}
			
			this.onmousemove = function(x, y) {
				this.events.push({ type: 'onmousemove', x: x, y: y,
					run: function(e) { if (e.onmousemove) e.onmousemove(); }
				});
			}			
			
			this.eventElements = [];
			
			this.checkPath = function(element, ctx) {
				for (var i=0; i<this.events.length; i++) {
					var e = this.events[i];
					if (ctx.isPointInPath && ctx.isPointInPath(e.x, e.y)) this.eventElements[i] = element;
				}
			}
			
			this.checkBoundingBox = function(element, bb) {
				for (var i=0; i<this.events.length; i++) {
					var e = this.events[i];
					if (bb.isPointInBox(e.x, e.y)) this.eventElements[i] = element;
				}			
			}
			
			this.runEvents = function() {
				svg.ctx.canvas.style.cursor = '';
				
				for (var i=0; i<this.events.length; i++) {
					var e = this.events[i];
					var element = this.eventElements[i];
					while (element) {
						e.run(element);
						element = element.parent;
					}
				}		
			
				// done running, clear
				this.events = []; 
				this.eventElements = [];
			}
		});
		
		return svg;
	}
})();

if (typeof(CanvasRenderingContext2D) != 'undefined') {
	CanvasRenderingContext2D.prototype.drawSvg = function(s, dx, dy, dw, dh) {
		canvg(this.canvas, s, { 
			ignoreMouse: true, 
			ignoreAnimation: true, 
			ignoreDimensions: true, 
			ignoreClear: true, 
			offsetX: dx, 
			offsetY: dy, 
			scaleWidth: dw, 
			scaleHeight: dh
		});
	}
}
/* Blob.js
 * A Blob implementation.
 * 2013-06-20
 * 
 * By Eli Grey, http://eligrey.com
 * By Devin Samarin, https://github.com/eboyjr
 * License: X11/MIT
 *   See LICENSE.md
 */

/*global self, unescape */
/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,
  plusplus: true */

/*! @source http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js */

if (typeof Blob !== "function" || typeof URL === "undefined")
if (typeof Blob === "function" && typeof webkitURL !== "undefined") var URL = webkitURL;
else var Blob = (function (view) {
	"use strict";

	var BlobBuilder = view.BlobBuilder || view.WebKitBlobBuilder || view.MozBlobBuilder || view.MSBlobBuilder || (function(view) {
		var
			  get_class = function(object) {
				return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
			}
			, FakeBlobBuilder = function BlobBuilder() {
				this.data = [];
			}
			, FakeBlob = function Blob(data, type, encoding) {
				this.data = data;
				this.size = data.length;
				this.type = type;
				this.encoding = encoding;
			}
			, FBB_proto = FakeBlobBuilder.prototype
			, FB_proto = FakeBlob.prototype
			, FileReaderSync = view.FileReaderSync
			, FileException = function(type) {
				this.code = this[this.name = type];
			}
			, file_ex_codes = (
				  "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR "
				+ "NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR"
			).split(" ")
			, file_ex_code = file_ex_codes.length
			, real_URL = view.URL || view.webkitURL || view
			, real_create_object_URL = real_URL.createObjectURL
			, real_revoke_object_URL = real_URL.revokeObjectURL
			, URL = real_URL
			, btoa = view.btoa
			, atob = view.atob
			, can_apply_typed_arrays = false
			, can_apply_typed_arrays_test = function(pass) {
				can_apply_typed_arrays = !pass;
			}
			
			, ArrayBuffer = view.ArrayBuffer
			, Uint8Array = view.Uint8Array
		;
		FakeBlob.fake = FB_proto.fake = true;
		while (file_ex_code--) {
			FileException.prototype[file_ex_codes[file_ex_code]] = file_ex_code + 1;
		}
		try {
			if (Uint8Array) {
				can_apply_typed_arrays_test.apply(0, new Uint8Array(1));
			}
		} catch (ex) {}
		if (!real_URL.createObjectURL) {
			URL = view.URL = {};
		}
		URL.createObjectURL = function(blob) {
			var
				  type = blob.type
				, data_URI_header
			;
			if (type === null) {
				type = "application/octet-stream";
			}
			if (blob instanceof FakeBlob) {
				data_URI_header = "data:" + type;
				if (blob.encoding === "base64") {
					return data_URI_header + ";base64," + blob.data;
				} else if (blob.encoding === "URI") {
					return data_URI_header + "," + decodeURIComponent(blob.data);
				} if (btoa) {
					return data_URI_header + ";base64," + btoa(blob.data);
				} else {
					return data_URI_header + "," + encodeURIComponent(blob.data);
				}
			} else if (real_create_object_URL) {
				return real_create_object_URL.call(real_URL, blob);
			}
		};
		URL.revokeObjectURL = function(object_URL) {
			if (object_URL.substring(0, 5) !== "data:" && real_revoke_object_URL) {
				real_revoke_object_URL.call(real_URL, object_URL);
			}
		};
		FBB_proto.append = function(data/*, endings*/) {
			var bb = this.data;
			// decode data to a binary string
			if (Uint8Array && (data instanceof ArrayBuffer || data instanceof Uint8Array)) {
				if (can_apply_typed_arrays) {
					bb.push(String.fromCharCode.apply(String, new Uint8Array(data)));
				} else {
					var
						  str = ""
						, buf = new Uint8Array(data)
						, i = 0
						, buf_len = buf.length
					;
					for (; i < buf_len; i++) {
						str += String.fromCharCode(buf[i]);
					}
				}
			} else if (get_class(data) === "Blob" || get_class(data) === "File") {
				if (FileReaderSync) {
					var fr = new FileReaderSync;
					bb.push(fr.readAsBinaryString(data));
				} else {
					// async FileReader won't work as BlobBuilder is sync
					throw new FileException("NOT_READABLE_ERR");
				}
			} else if (data instanceof FakeBlob) {
				if (data.encoding === "base64" && atob) {
					bb.push(atob(data.data));
				} else if (data.encoding === "URI") {
					bb.push(decodeURIComponent(data.data));
				} else if (data.encoding === "raw") {
					bb.push(data.data);
				}
			} else {
				if (typeof data !== "string") {
					data += ""; // convert unsupported types to strings
				}
				// decode UTF-16 to binary string
				bb.push(unescape(encodeURIComponent(data)));
			}
		};
		FBB_proto.getBlob = function(type) {
			if (!arguments.length) {
				type = null;
			}
			return new FakeBlob(this.data.join(""), type, "raw");
		};
		FBB_proto.toString = function() {
			return "[object BlobBuilder]";
		};
		FB_proto.slice = function(start, end, type) {
			var args = arguments.length;
			if (args < 3) {
				type = null;
			}
			return new FakeBlob(
				  this.data.slice(start, args > 1 ? end : this.data.length)
				, type
				, this.encoding
			);
		};
		FB_proto.toString = function() {
			return "[object Blob]";
		};
		return FakeBlobBuilder;
	}(view));

	return function Blob(blobParts, options) {
		var type = options ? (options.type || "") : "";
		var builder = new BlobBuilder();
		if (blobParts) {
			for (var i = 0, len = blobParts.length; i < len; i++) {
				builder.append(blobParts[i]);
			}
		}
		return builder.getBlob(type);
	};
}(self));
/* canvas-toBlob.js
 * A canvas.toBlob() implementation.
 * 2011-07-13
 * 
 * By Eli Grey, http://eligrey.com and Devin Samarin, https://github.com/eboyjr
 * License: X11/MIT
 *   See LICENSE.md
 */

/*global self */
/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,
  plusplus: true */

/*! @source http://purl.eligrey.com/github/canvas-toBlob.js/blob/master/canvas-toBlob.js */

(function(view) {
"use strict";
var
	  Uint8Array = view.Uint8Array
	, HTMLCanvasElement = view.HTMLCanvasElement
	, is_base64_regex = /\s*;\s*base64\s*(?:;|$)/i
	, base64_ranks
	, decode_base64 = function(base64) {
		var
			  len = base64.length
			, buffer = new Uint8Array(len / 4 * 3 | 0)
			, i = 0
			, outptr = 0
			, last = [0, 0]
			, state = 0
			, save = 0
			, rank
			, code
			, undef
		;
		while (len--) {
			code = base64.charCodeAt(i++);
			rank = base64_ranks[code-43];
			if (rank !== 255 && rank !== undef) {
				last[1] = last[0];
				last[0] = code;
				save = (save << 6) | rank;
				state++;
				if (state === 4) {
					buffer[outptr++] = save >>> 16;
					if (last[1] !== 61 /* padding character */) {
						buffer[outptr++] = save >>> 8;
					}
					if (last[0] !== 61 /* padding character */) {
						buffer[outptr++] = save;
					}
					state = 0;
				}
			}
		}
		// 2/3 chance there's going to be some null bytes at the end, but that
		// doesn't really matter with most image formats.
		// If it somehow matters for you, truncate the buffer up outptr.
		return buffer;
	}
;
if (Uint8Array) {
	base64_ranks = new Uint8Array([
		  62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1
		, -1, -1,  0, -1, -1, -1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9
		, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
		, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35
		, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
	]);
}
if (HTMLCanvasElement && !HTMLCanvasElement.prototype.toBlob) {
	HTMLCanvasElement.prototype.toBlob = function(callback, type /*, ...args*/) {
		  if (!type) {
			type = "image/png";
		} if (this.mozGetAsFile) {
			callback(this.mozGetAsFile("canvas", type));
			return;
		}
		var
			  args = Array.prototype.slice.call(arguments, 1)
			, dataURI = this.toDataURL.apply(this, args)
			, header_end = dataURI.indexOf(",")
			, data = dataURI.substring(header_end + 1)
			, is_base64 = is_base64_regex.test(dataURI.substring(0, header_end))
			, blob
		;
		if (Blob.fake) {
			// no reason to decode a data: URI that's just going to become a data URI again
			blob = new Blob
			if (is_base64) {
				blob.encoding = "base64";
			} else {
				blob.encoding = "URI";
			}
			blob.data = data;
			blob.size = data.length;
		} else if (Uint8Array) {
			if (is_base64) {
				blob = new Blob([decode_base64(data)], {type: type});
			} else {
				blob = new Blob([decodeURIComponent(data)], {type: type});
			}
		}
		callback(blob);
	};
}
}(self));
/*!
 * typeahead.js 0.9.3
 * https://github.com/twitter/typeahead
 * Copyright 2013 Twitter, Inc. and other contributors; Licensed MIT
 */

!function(a){var b="0.9.3",c={isMsie:function(){var a=/(msie) ([\w.]+)/i.exec(navigator.userAgent);return a?parseInt(a[2],10):!1},isBlankString:function(a){return!a||/^\s*$/.test(a)},escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(a){return"string"==typeof a},isNumber:function(a){return"number"==typeof a},isArray:a.isArray,isFunction:a.isFunction,isObject:a.isPlainObject,isUndefined:function(a){return"undefined"==typeof a},bind:a.proxy,bindAll:function(b){var c;for(var d in b)a.isFunction(c=b[d])&&(b[d]=a.proxy(c,b))},indexOf:function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1},each:a.each,map:a.map,filter:a.grep,every:function(b,c){var d=!0;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?void 0:!1}),!!d):d},some:function(b,c){var d=!1;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?!1:void 0}),!!d):d},mixin:a.extend,getUniqueId:function(){var a=0;return function(){return a++}}(),defer:function(a){setTimeout(a,0)},debounce:function(a,b,c){var d,e;return function(){var f,g,h=this,i=arguments;return f=function(){d=null,c||(e=a.apply(h,i))},g=c&&!d,clearTimeout(d),d=setTimeout(f,b),g&&(e=a.apply(h,i)),e}},throttle:function(a,b){var c,d,e,f,g,h;return g=0,h=function(){g=new Date,e=null,f=a.apply(c,d)},function(){var i=new Date,j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(e),e=null,g=i,f=a.apply(c,d)):e||(e=setTimeout(h,j)),f}},tokenizeQuery:function(b){return a.trim(b).toLowerCase().split(/[\s]+/)},tokenizeText:function(b){return a.trim(b).toLowerCase().split(/[\s\-_]+/)},getProtocol:function(){return location.protocol},noop:function(){}},d=function(){var a=/\s+/;return{on:function(b,c){var d;if(!c)return this;for(this._callbacks=this._callbacks||{},b=b.split(a);d=b.shift();)this._callbacks[d]=this._callbacks[d]||[],this._callbacks[d].push(c);return this},trigger:function(b,c){var d,e;if(!this._callbacks)return this;for(b=b.split(a);d=b.shift();)if(e=this._callbacks[d])for(var f=0;f<e.length;f+=1)e[f].call(this,{type:d,data:c});return this}}}(),e=function(){function b(b){b&&b.el||a.error("EventBus initialized without el"),this.$el=a(b.el)}var d="typeahead:";return c.mixin(b.prototype,{trigger:function(a){var b=[].slice.call(arguments,1);this.$el.trigger(d+a,b)}}),b}(),f=function(){function a(a){this.prefix=["__",a,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+this.prefix)}function b(){return(new Date).getTime()}function d(a){return JSON.stringify(c.isUndefined(a)?null:a)}function e(a){return JSON.parse(a)}var f,g;try{f=window.localStorage,f.setItem("~~~","!"),f.removeItem("~~~")}catch(h){f=null}return g=f&&window.JSON?{_prefix:function(a){return this.prefix+a},_ttlKey:function(a){return this._prefix(a)+this.ttlKey},get:function(a){return this.isExpired(a)&&this.remove(a),e(f.getItem(this._prefix(a)))},set:function(a,e,g){return c.isNumber(g)?f.setItem(this._ttlKey(a),d(b()+g)):f.removeItem(this._ttlKey(a)),f.setItem(this._prefix(a),d(e))},remove:function(a){return f.removeItem(this._ttlKey(a)),f.removeItem(this._prefix(a)),this},clear:function(){var a,b,c=[],d=f.length;for(a=0;d>a;a++)(b=f.key(a)).match(this.keyMatcher)&&c.push(b.replace(this.keyMatcher,""));for(a=c.length;a--;)this.remove(c[a]);return this},isExpired:function(a){var d=e(f.getItem(this._ttlKey(a)));return c.isNumber(d)&&b()>d?!0:!1}}:{get:c.noop,set:c.noop,remove:c.noop,clear:c.noop,isExpired:c.noop},c.mixin(a.prototype,g),a}(),g=function(){function a(a){c.bindAll(this),a=a||{},this.sizeLimit=a.sizeLimit||10,this.cache={},this.cachedKeysByAge=[]}return c.mixin(a.prototype,{get:function(a){return this.cache[a]},set:function(a,b){var c;this.cachedKeysByAge.length===this.sizeLimit&&(c=this.cachedKeysByAge.shift(),delete this.cache[c]),this.cache[a]=b,this.cachedKeysByAge.push(a)}}),a}(),h=function(){function b(a){c.bindAll(this),a=c.isString(a)?{url:a}:a,i=i||new g,h=c.isNumber(a.maxParallelRequests)?a.maxParallelRequests:h||6,this.url=a.url,this.wildcard=a.wildcard||"%QUERY",this.filter=a.filter,this.replace=a.replace,this.ajaxSettings={type:"get",cache:a.cache,timeout:a.timeout,dataType:a.dataType||"json",beforeSend:a.beforeSend},this._get=(/^throttle$/i.test(a.rateLimitFn)?c.throttle:c.debounce)(this._get,a.rateLimitWait||300)}function d(){j++}function e(){j--}function f(){return h>j}var h,i,j=0,k={};return c.mixin(b.prototype,{_get:function(a,b){function c(c){var e=d.filter?d.filter(c):c;b&&b(e),i.set(a,c)}var d=this;f()?this._sendRequest(a).done(c):this.onDeckRequestArgs=[].slice.call(arguments,0)},_sendRequest:function(b){function c(){e(),k[b]=null,f.onDeckRequestArgs&&(f._get.apply(f,f.onDeckRequestArgs),f.onDeckRequestArgs=null)}var f=this,g=k[b];return g||(d(),g=k[b]=a.ajax(b,this.ajaxSettings).always(c)),g},get:function(a,b){var d,e,f=this,g=encodeURIComponent(a||"");return b=b||c.noop,d=this.replace?this.replace(this.url,g):this.url.replace(this.wildcard,g),(e=i.get(d))?c.defer(function(){b(f.filter?f.filter(e):e)}):this._get(d,b),!!e}}),b}(),i=function(){function d(b){c.bindAll(this),c.isString(b.template)&&!b.engine&&a.error("no template engine specified"),b.local||b.prefetch||b.remote||a.error("one of local, prefetch, or remote is required"),this.name=b.name||c.getUniqueId(),this.limit=b.limit||5,this.minLength=b.minLength||1,this.header=b.header,this.footer=b.footer,this.valueKey=b.valueKey||"value",this.template=e(b.template,b.engine,this.valueKey),this.local=b.local,this.prefetch=b.prefetch,this.remote=b.remote,this.itemHash={},this.adjacencyList={},this.storage=b.name?new f(b.name):null}function e(a,b,d){var e,f;return c.isFunction(a)?e=a:c.isString(a)?(f=b.compile(a),e=c.bind(f.render,f)):e=function(a){return"<p>"+a[d]+"</p>"},e}var g={thumbprint:"thumbprint",protocol:"protocol",itemHash:"itemHash",adjacencyList:"adjacencyList"};return c.mixin(d.prototype,{_processLocalData:function(a){this._mergeProcessedData(this._processData(a))},_loadPrefetchData:function(d){function e(a){var b=d.filter?d.filter(a):a,e=m._processData(b),f=e.itemHash,h=e.adjacencyList;m.storage&&(m.storage.set(g.itemHash,f,d.ttl),m.storage.set(g.adjacencyList,h,d.ttl),m.storage.set(g.thumbprint,n,d.ttl),m.storage.set(g.protocol,c.getProtocol(),d.ttl)),m._mergeProcessedData(e)}var f,h,i,j,k,l,m=this,n=b+(d.thumbprint||"");return this.storage&&(f=this.storage.get(g.thumbprint),h=this.storage.get(g.protocol),i=this.storage.get(g.itemHash),j=this.storage.get(g.adjacencyList)),k=f!==n||h!==c.getProtocol(),d=c.isString(d)?{url:d}:d,d.ttl=c.isNumber(d.ttl)?d.ttl:864e5,i&&j&&!k?(this._mergeProcessedData({itemHash:i,adjacencyList:j}),l=a.Deferred().resolve()):l=a.getJSON(d.url).done(e),l},_transformDatum:function(a){var b=c.isString(a)?a:a[this.valueKey],d=a.tokens||c.tokenizeText(b),e={value:b,tokens:d};return c.isString(a)?(e.datum={},e.datum[this.valueKey]=a):e.datum=a,e.tokens=c.filter(e.tokens,function(a){return!c.isBlankString(a)}),e.tokens=c.map(e.tokens,function(a){return a.toLowerCase()}),e},_processData:function(a){var b=this,d={},e={};return c.each(a,function(a,f){var g=b._transformDatum(f),h=c.getUniqueId(g.value);d[h]=g,c.each(g.tokens,function(a,b){var d=b.charAt(0),f=e[d]||(e[d]=[h]);!~c.indexOf(f,h)&&f.push(h)})}),{itemHash:d,adjacencyList:e}},_mergeProcessedData:function(a){var b=this;c.mixin(this.itemHash,a.itemHash),c.each(a.adjacencyList,function(a,c){var d=b.adjacencyList[a];b.adjacencyList[a]=d?d.concat(c):c})},_getLocalSuggestions:function(a){var b,d=this,e=[],f=[],g=[];return c.each(a,function(a,b){var d=b.charAt(0);!~c.indexOf(e,d)&&e.push(d)}),c.each(e,function(a,c){var e=d.adjacencyList[c];return e?(f.push(e),(!b||e.length<b.length)&&(b=e),void 0):!1}),f.length<e.length?[]:(c.each(b,function(b,e){var h,i,j=d.itemHash[e];h=c.every(f,function(a){return~c.indexOf(a,e)}),i=h&&c.every(a,function(a){return c.some(j.tokens,function(b){return 0===b.indexOf(a)})}),i&&g.push(j)}),g)},initialize:function(){var b;return this.local&&this._processLocalData(this.local),this.transport=this.remote?new h(this.remote):null,b=this.prefetch?this._loadPrefetchData(this.prefetch):a.Deferred().resolve(),this.local=this.prefetch=this.remote=null,this.initialize=function(){return b},b},getSuggestions:function(a,b){function d(a){f=f.slice(0),c.each(a,function(a,b){var d,e=g._transformDatum(b);return d=c.some(f,function(a){return e.value===a.value}),!d&&f.push(e),f.length<g.limit}),b&&b(f)}var e,f,g=this,h=!1;a.length<this.minLength||(e=c.tokenizeQuery(a),f=this._getLocalSuggestions(e).slice(0,this.limit),f.length<this.limit&&this.transport&&(h=this.transport.get(a,d)),!h&&b&&b(f))}}),d}(),j=function(){function b(b){var d=this;c.bindAll(this),this.specialKeyCodeMap={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},this.$hint=a(b.hint),this.$input=a(b.input).on("blur.tt",this._handleBlur).on("focus.tt",this._handleFocus).on("keydown.tt",this._handleSpecialKeyEvent),c.isMsie()?this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(a){d.specialKeyCodeMap[a.which||a.keyCode]||c.defer(d._compareQueryToInputValue)}):this.$input.on("input.tt",this._compareQueryToInputValue),this.query=this.$input.val(),this.$overflowHelper=e(this.$input)}function e(b){return a("<span></span>").css({position:"absolute",left:"-9999px",visibility:"hidden",whiteSpace:"nowrap",fontFamily:b.css("font-family"),fontSize:b.css("font-size"),fontStyle:b.css("font-style"),fontVariant:b.css("font-variant"),fontWeight:b.css("font-weight"),wordSpacing:b.css("word-spacing"),letterSpacing:b.css("letter-spacing"),textIndent:b.css("text-indent"),textRendering:b.css("text-rendering"),textTransform:b.css("text-transform")}).insertAfter(b)}function f(a,b){return a=(a||"").replace(/^\s*/g,"").replace(/\s{2,}/g," "),b=(b||"").replace(/^\s*/g,"").replace(/\s{2,}/g," "),a===b}return c.mixin(b.prototype,d,{_handleFocus:function(){this.trigger("focused")},_handleBlur:function(){this.trigger("blured")},_handleSpecialKeyEvent:function(a){var b=this.specialKeyCodeMap[a.which||a.keyCode];b&&this.trigger(b+"Keyed",a)},_compareQueryToInputValue:function(){var a=this.getInputValue(),b=f(this.query,a),c=b?this.query.length!==a.length:!1;c?this.trigger("whitespaceChanged",{value:this.query}):b||this.trigger("queryChanged",{value:this.query=a})},destroy:function(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$hint=this.$input=this.$overflowHelper=null},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getQuery:function(){return this.query},setQuery:function(a){this.query=a},getInputValue:function(){return this.$input.val()},setInputValue:function(a,b){this.$input.val(a),!b&&this._compareQueryToInputValue()},getHintValue:function(){return this.$hint.val()},setHintValue:function(a){this.$hint.val(a)},getLanguageDirection:function(){return(this.$input.css("direction")||"ltr").toLowerCase()},isOverflow:function(){return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>this.$input.width()},isCursorAtEnd:function(){var a,b=this.$input.val().length,d=this.$input[0].selectionStart;return c.isNumber(d)?d===b:document.selection?(a=document.selection.createRange(),a.moveStart("character",-b),b===a.text.length):!0}}),b}(),k=function(){function b(b){c.bindAll(this),this.isOpen=!1,this.isEmpty=!0,this.isMouseOverDropdown=!1,this.$menu=a(b.menu).on("mouseenter.tt",this._handleMouseenter).on("mouseleave.tt",this._handleMouseleave).on("click.tt",".tt-suggestion",this._handleSelection).on("mouseover.tt",".tt-suggestion",this._handleMouseover)}function e(a){return a.data("suggestion")}var f={suggestionsList:'<span class="tt-suggestions"></span>'},g={suggestionsList:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"}};return c.mixin(b.prototype,d,{_handleMouseenter:function(){this.isMouseOverDropdown=!0},_handleMouseleave:function(){this.isMouseOverDropdown=!1},_handleMouseover:function(b){var c=a(b.currentTarget);this._getSuggestions().removeClass("tt-is-under-cursor"),c.addClass("tt-is-under-cursor")},_handleSelection:function(b){var c=a(b.currentTarget);this.trigger("suggestionSelected",e(c))},_show:function(){this.$menu.css("display","block")},_hide:function(){this.$menu.hide()},_moveCursor:function(a){var b,c,d,f;if(this.isVisible()){if(b=this._getSuggestions(),c=b.filter(".tt-is-under-cursor"),c.removeClass("tt-is-under-cursor"),d=b.index(c)+a,d=(d+1)%(b.length+1)-1,-1===d)return this.trigger("cursorRemoved"),void 0;-1>d&&(d=b.length-1),f=b.eq(d).addClass("tt-is-under-cursor"),this._ensureVisibility(f),this.trigger("cursorMoved",e(f))}},_getSuggestions:function(){return this.$menu.find(".tt-suggestions > .tt-suggestion")},_ensureVisibility:function(a){var b=this.$menu.height()+parseInt(this.$menu.css("paddingTop"),10)+parseInt(this.$menu.css("paddingBottom"),10),c=this.$menu.scrollTop(),d=a.position().top,e=d+a.outerHeight(!0);0>d?this.$menu.scrollTop(c+d):e>b&&this.$menu.scrollTop(c+(e-b))},destroy:function(){this.$menu.off(".tt"),this.$menu=null},isVisible:function(){return this.isOpen&&!this.isEmpty},closeUnlessMouseIsOverDropdown:function(){this.isMouseOverDropdown||this.close()},close:function(){this.isOpen&&(this.isOpen=!1,this.isMouseOverDropdown=!1,this._hide(),this.$menu.find(".tt-suggestions > .tt-suggestion").removeClass("tt-is-under-cursor"),this.trigger("closed"))},open:function(){this.isOpen||(this.isOpen=!0,!this.isEmpty&&this._show(),this.trigger("opened"))},setLanguageDirection:function(a){var b={left:"0",right:"auto"},c={left:"auto",right:" 0"};"ltr"===a?this.$menu.css(b):this.$menu.css(c)},moveCursorUp:function(){this._moveCursor(-1)},moveCursorDown:function(){this._moveCursor(1)},getSuggestionUnderCursor:function(){var a=this._getSuggestions().filter(".tt-is-under-cursor").first();return a.length>0?e(a):null},getFirstSuggestion:function(){var a=this._getSuggestions().first();return a.length>0?e(a):null},renderSuggestions:function(b,d){var e,h,i,j,k,l="tt-dataset-"+b.name,m='<div class="tt-suggestion">%body</div>',n=this.$menu.find("."+l);0===n.length&&(h=a(f.suggestionsList).css(g.suggestionsList),n=a("<div></div>").addClass(l).append(b.header).append(h).append(b.footer).appendTo(this.$menu)),d.length>0?(this.isEmpty=!1,this.isOpen&&this._show(),i=document.createElement("div"),j=document.createDocumentFragment(),c.each(d,function(c,d){d.dataset=b.name,e=b.template(d.datum),i.innerHTML=m.replace("%body",e),k=a(i.firstChild).css(g.suggestion).data("suggestion",d),k.children().each(function(){a(this).css(g.suggestionChild)}),j.appendChild(k[0])}),n.show().find(".tt-suggestions").html(j)):this.clearSuggestions(b.name),this.trigger("suggestionsRendered")},clearSuggestions:function(a){var b=a?this.$menu.find(".tt-dataset-"+a):this.$menu.find('[class^="tt-dataset-"]'),c=b.find(".tt-suggestions");b.hide(),c.empty(),0===this._getSuggestions().length&&(this.isEmpty=!0,this._hide())}}),b}(),l=function(){function b(a){var b,d,f;c.bindAll(this),this.$node=e(a.input),this.datasets=a.datasets,this.dir=null,this.eventBus=a.eventBus,b=this.$node.find(".tt-dropdown-menu"),d=this.$node.find(".tt-query"),f=this.$node.find(".tt-hint"),this.dropdownView=new k({menu:b}).on("suggestionSelected",this._handleSelection).on("cursorMoved",this._clearHint).on("cursorMoved",this._setInputValueToSuggestionUnderCursor).on("cursorRemoved",this._setInputValueToQuery).on("cursorRemoved",this._updateHint).on("suggestionsRendered",this._updateHint).on("opened",this._updateHint).on("closed",this._clearHint).on("opened closed",this._propagateEvent),this.inputView=new j({input:d,hint:f}).on("focused",this._openDropdown).on("blured",this._closeDropdown).on("blured",this._setInputValueToQuery).on("enterKeyed tabKeyed",this._handleSelection).on("queryChanged",this._clearHint).on("queryChanged",this._clearSuggestions).on("queryChanged",this._getSuggestions).on("whitespaceChanged",this._updateHint).on("queryChanged whitespaceChanged",this._openDropdown).on("queryChanged whitespaceChanged",this._setLanguageDirection).on("escKeyed",this._closeDropdown).on("escKeyed",this._setInputValueToQuery).on("tabKeyed upKeyed downKeyed",this._managePreventDefault).on("upKeyed downKeyed",this._moveDropdownCursor).on("upKeyed downKeyed",this._openDropdown).on("tabKeyed leftKeyed rightKeyed",this._autocomplete)}function e(b){var c=a(g.wrapper),d=a(g.dropdown),e=a(b),f=a(g.hint);c=c.css(h.wrapper),d=d.css(h.dropdown),f.css(h.hint).css({backgroundAttachment:e.css("background-attachment"),backgroundClip:e.css("background-clip"),backgroundColor:e.css("background-color"),backgroundImage:e.css("background-image"),backgroundOrigin:e.css("background-origin"),backgroundPosition:e.css("background-position"),backgroundRepeat:e.css("background-repeat"),backgroundSize:e.css("background-size")}),e.data("ttAttrs",{dir:e.attr("dir"),autocomplete:e.attr("autocomplete"),spellcheck:e.attr("spellcheck"),style:e.attr("style")}),e.addClass("tt-query").attr({autocomplete:"off",spellcheck:!1}).css(h.query);try{!e.attr("dir")&&e.attr("dir","auto")}catch(i){}return e.wrap(c).parent().prepend(f).append(d)}function f(a){var b=a.find(".tt-query");c.each(b.data("ttAttrs"),function(a,d){c.isUndefined(d)?b.removeAttr(a):b.attr(a,d)}),b.detach().removeData("ttAttrs").removeClass("tt-query").insertAfter(a),a.remove()}var g={wrapper:'<span class="twitter-typeahead"></span>',hint:'<input class="tt-hint" type="text" autocomplete="off" spellcheck="off" disabled>',dropdown:'<span class="tt-dropdown-menu"></span>'},h={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none"},query:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"}};return c.isMsie()&&c.mixin(h.query,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),c.isMsie()&&c.isMsie()<=7&&(c.mixin(h.wrapper,{display:"inline",zoom:"1"}),c.mixin(h.query,{marginTop:"-1px"})),c.mixin(b.prototype,d,{_managePreventDefault:function(a){var b,c,d=a.data,e=!1;switch(a.type){case"tabKeyed":b=this.inputView.getHintValue(),c=this.inputView.getInputValue(),e=b&&b!==c;break;case"upKeyed":case"downKeyed":e=!d.shiftKey&&!d.ctrlKey&&!d.metaKey}e&&d.preventDefault()},_setLanguageDirection:function(){var a=this.inputView.getLanguageDirection();a!==this.dir&&(this.dir=a,this.$node.css("direction",a),this.dropdownView.setLanguageDirection(a))},_updateHint:function(){var a,b,d,e,f,g=this.dropdownView.getFirstSuggestion(),h=g?g.value:null,i=this.dropdownView.isVisible(),j=this.inputView.isOverflow();h&&i&&!j&&(a=this.inputView.getInputValue(),b=a.replace(/\s{2,}/g," ").replace(/^\s+/g,""),d=c.escapeRegExChars(b),e=new RegExp("^(?:"+d+")(.*$)","i"),f=e.exec(h),this.inputView.setHintValue(a+(f?f[1]:"")))},_clearHint:function(){this.inputView.setHintValue("")},_clearSuggestions:function(){this.dropdownView.clearSuggestions()},_setInputValueToQuery:function(){this.inputView.setInputValue(this.inputView.getQuery())},_setInputValueToSuggestionUnderCursor:function(a){var b=a.data;this.inputView.setInputValue(b.value,!0)},_openDropdown:function(){this.dropdownView.open()},_closeDropdown:function(a){this.dropdownView["blured"===a.type?"closeUnlessMouseIsOverDropdown":"close"]()},_moveDropdownCursor:function(a){var b=a.data;b.shiftKey||b.ctrlKey||b.metaKey||this.dropdownView["upKeyed"===a.type?"moveCursorUp":"moveCursorDown"]()},_handleSelection:function(a){var b="suggestionSelected"===a.type,d=b?a.data:this.dropdownView.getSuggestionUnderCursor();d&&(this.inputView.setInputValue(d.value),b?this.inputView.focus():a.data.preventDefault(),b&&c.isMsie()?c.defer(this.dropdownView.close):this.dropdownView.close(),this.eventBus.trigger("selected",d.datum,d.dataset))},_getSuggestions:function(){var a=this,b=this.inputView.getQuery();c.isBlankString(b)||c.each(this.datasets,function(c,d){d.getSuggestions(b,function(c){b===a.inputView.getQuery()&&a.dropdownView.renderSuggestions(d,c)})})},_autocomplete:function(a){var b,c,d,e,f;("rightKeyed"!==a.type&&"leftKeyed"!==a.type||(b=this.inputView.isCursorAtEnd(),c="ltr"===this.inputView.getLanguageDirection()?"leftKeyed"===a.type:"rightKeyed"===a.type,b&&!c))&&(d=this.inputView.getQuery(),e=this.inputView.getHintValue(),""!==e&&d!==e&&(f=this.dropdownView.getFirstSuggestion(),this.inputView.setInputValue(f.value),this.eventBus.trigger("autocompleted",f.datum,f.dataset)))},_propagateEvent:function(a){this.eventBus.trigger(a.type)},destroy:function(){this.inputView.destroy(),this.dropdownView.destroy(),f(this.$node),this.$node=null},setQuery:function(a){this.inputView.setQuery(a),this.inputView.setInputValue(a),this._clearHint(),this._clearSuggestions(),this._getSuggestions()}}),b}();!function(){var b,d={},f="ttView";b={initialize:function(b){function g(){var b,d=a(this),g=new e({el:d});b=c.map(h,function(a){return a.initialize()}),d.data(f,new l({input:d,eventBus:g=new e({el:d}),datasets:h})),a.when.apply(a,b).always(function(){c.defer(function(){g.trigger("initialized")})})}var h;return b=c.isArray(b)?b:[b],0===b.length&&a.error("no datasets provided"),h=c.map(b,function(a){var b=d[a.name]?d[a.name]:new i(a);return a.name&&(d[a.name]=b),b}),this.each(g)},destroy:function(){function b(){var b=a(this),c=b.data(f);c&&(c.destroy(),b.removeData(f))}return this.each(b)},setQuery:function(b){function c(){var c=a(this).data(f);c&&c.setQuery(b)}return this.each(c)}},jQuery.fn.typeahead=function(a){return b[a]?b[a].apply(this,[].slice.call(arguments,1)):b.initialize.apply(this,arguments)}}()}(window.jQuery);
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */



var Hogan = {};

(function (Hogan, useArrayBuffer) {
  Hogan.Template = function (renderFunc, text, compiler, options) {
    this.r = renderFunc || this.r;
    this.c = compiler;
    this.options = options;
    this.text = text || '';
    this.buf = (useArrayBuffer) ? [] : '';
  }

  Hogan.Template.prototype = {
    // render: replaced by generated code.
    r: function (context, partials, indent) { return ''; },

    // variable escaping
    v: hoganEscape,

    // triple stache
    t: coerceToString,

    render: function render(context, partials, indent) {
      return this.ri([context], partials || {}, indent);
    },

    // render internal -- a hook for overrides that catches partials too
    ri: function (context, partials, indent) {
      return this.r(context, partials, indent);
    },

    // tries to find a partial in the curent scope and render it
    rp: function(name, context, partials, indent) {
      var partial = partials[name];

      if (!partial) {
        return '';
      }

      if (this.c && typeof partial == 'string') {
        partial = this.c.compile(partial, this.options);
      }

      return partial.ri(context, partials, indent);
    },

    // render a section
    rs: function(context, partials, section) {
      var tail = context[context.length - 1];

      if (!isArray(tail)) {
        section(context, partials, this);
        return;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        section(context, partials, this);
        context.pop();
      }
    },

    // maybe start a section
    s: function(val, ctx, partials, inverted, start, end, tags) {
      var pass;

      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (typeof val == 'function') {
        val = this.ls(val, ctx, partials, inverted, start, end, tags);
      }

      pass = (val === '') || !!val;

      if (!inverted && pass && ctx) {
        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function(key, ctx, partials, returnFound) {
      var names = key.split('.'),
          val = this.f(names[0], ctx, partials, returnFound),
          cx = null;

      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        return ctx[ctx.length - 1];
      }

      for (var i = 1; i < names.length; i++) {
        if (val && typeof val == 'object' && names[i] in val) {
          cx = val;
          val = val[names[i]];
        } else {
          val = '';
        }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.lv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function(key, ctx, partials, returnFound) {
      var val = false,
          v = null,
          found = false;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        if (v && typeof v == 'object' && key in v) {
          val = v[key];
          found = true;
          break;
        }
      }

      if (!found) {
        return (returnFound) ? false : "";
      }

      if (!returnFound && typeof val == 'function') {
        val = this.lv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ho: function(val, cx, partials, text, tags) {
      var compiler = this.c;
      var options = this.options;
      options.delimiters = tags;
      var text = val.call(cx, text);
      text = (text == null) ? String(text) : text.toString();
      this.b(compiler.compile(text, options).render(cx, partials));
      return false;
    },

    // template result buffering
    b: (useArrayBuffer) ? function(s) { this.buf.push(s); } :
                          function(s) { this.buf += s; },
    fl: (useArrayBuffer) ? function() { var r = this.buf.join(''); this.buf = []; return r; } :
                           function() { var r = this.buf; this.buf = ''; return r; },

    // lambda replace section
    ls: function(val, ctx, partials, inverted, start, end, tags) {
      var cx = ctx[ctx.length - 1],
          t = null;

      if (!inverted && this.c && val.length > 0) {
        return this.ho(val, cx, partials, this.text.substring(start, end), tags);
      }

      t = val.call(cx);

      if (typeof t == 'function') {
        if (inverted) {
          return true;
        } else if (this.c) {
          return this.ho(t, cx, partials, this.text.substring(start, end), tags);
        }
      }

      return t;
    },

    // lambda replace variable
    lv: function(val, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      var result = val.call(cx);

      if (typeof result == 'function') {
        result = coerceToString(result.call(cx));
        if (this.c && ~result.indexOf("{\u007B")) {
          return this.c.compile(result, this.options).render(cx, partials);
        }
      }

      return coerceToString(result);
    }

  };

  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos =/\'/g,
      rQuot = /\"/g,
      hChars =/[&<>\"\']/;


  function coerceToString(val) {
    return String((val === null || val === undefined) ? '' : val);
  }

  function hoganEscape(str) {
    str = coerceToString(str);
    return hChars.test(str) ?
      str
        .replace(rAmp,'&amp;')
        .replace(rLt,'&lt;')
        .replace(rGt,'&gt;')
        .replace(rApos,'&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }

  var isArray = Array.isArray || function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };

})(typeof exports !== 'undefined' ? exports : Hogan);




(function (Hogan) {
  // Setup regex  assignments
  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/,
      rQuot = /\"/g,
      rNewline =  /\n/g,
      rCr = /\r/g,
      rSlash = /\\/g,
      tagTypes = {
        '#': 1, '^': 2, '/': 3,  '!': 4, '>': 5,
        '<': 6, '=': 7, '_v': 8, '{': 9, '&': 10
      };

  Hogan.scan = function scan(text, delimiters) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        tag = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push(new String(buf));
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace =
          (tokens[j].tag && tagTypes[tokens[j].tag] < tagTypes['_v']) ||
          (!tokens[j].tag && tokens[j].match(rIsWhitespace) === null);
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();

      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart, next; j < tokens.length; j++) {
          if (!tokens[j].tag) {
            if ((next = tokens[j+1]) && next.tag == '>') {
              // set indent to token value
              next.indent = tokens[j].toString()
            }
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({tag:'\n'});
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag,
          closeIndex = text.indexOf(close, index),
          delimiters = trim(
            text.substring(text.indexOf('=', index) + 1, closeIndex)
          ).split(' ');

      otag = delimiters[0];
      ctag = delimiters[1];

      return closeIndex + close.length - 1;
    }

    if (delimiters) {
      delimiters = delimiters.split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text.charAt(i) == '\n') {
            filterLine(seenTag);
          } else {
            buf += text.charAt(i);
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        tag = tagTypes[text.charAt(i + 1)];
        tagType = tag ? text.charAt(i + 1) : '_v';
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
        seenTag = i;
      } else {
        if (tagChange(ctag, text, i)) {
          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
                       i: (tagType == '/') ? seenTag - ctag.length : i + otag.length});
          buf = '';
          i += ctag.length - 1;
          state = IN_TEXT;
          if (tagType == '{') {
            if (ctag == '}}') {
              i++;
            } else {
              cleanTripleStache(tokens[tokens.length - 1]);
            }
          }
        } else {
          buf += text.charAt(i);
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  }

  function cleanTripleStache(token) {
    if (token.n.substr(token.n.length - 1) === '}') {
      token.n = token.n.substring(0, token.n.length - 1);
    }
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  function tagChange(tag, text, index) {
    if (text.charAt(index) != tag.charAt(0)) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text.charAt(index + i) != tag.charAt(i)) {
        return false;
      }
    }

    return true;
  }

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        token = null;

    while (tokens.length > 0) {
      token = tokens.shift();
      if (token.tag == '#' || token.tag == '^' || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
        instructions.push(token);
      } else if (token.tag == '/') {
        if (stack.length === 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else {
        instructions.push(token);
      }
    }

    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }

    return instructions;
  }

  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }

  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }

  Hogan.generate = function (tree, text, options) {
    var code = 'var _=this;_.b(i=i||"");' + walk(tree) + 'return _.fl();';
    if (options.asString) {
      return 'function(c,p,i){' + code + ';}';
    }

    return new Hogan.Template(new Function('c', 'p', 'i', code), text, Hogan, options);
  }

  function esc(s) {
    return s.replace(rSlash, '\\\\')
            .replace(rQuot, '\\\"')
            .replace(rNewline, '\\n')
            .replace(rCr, '\\r');
  }

  function chooseMethod(s) {
    return (~s.indexOf('.')) ? 'd' : 'f';
  }

  function walk(tree) {
    var code = '';
    for (var i = 0, l = tree.length; i < l; i++) {
      var tag = tree[i].tag;
      if (tag == '#') {
        code += section(tree[i].nodes, tree[i].n, chooseMethod(tree[i].n),
                        tree[i].i, tree[i].end, tree[i].otag + " " + tree[i].ctag);
      } else if (tag == '^') {
        code += invertedSection(tree[i].nodes, tree[i].n,
                                chooseMethod(tree[i].n));
      } else if (tag == '<' || tag == '>') {
        code += partial(tree[i]);
      } else if (tag == '{' || tag == '&') {
        code += tripleStache(tree[i].n, chooseMethod(tree[i].n));
      } else if (tag == '\n') {
        code += text('"\\n"' + (tree.length-1 == i ? '' : ' + i'));
      } else if (tag == '_v') {
        code += variable(tree[i].n, chooseMethod(tree[i].n));
      } else if (tag === undefined) {
        code += text('"' + esc(tree[i]) + '"');
      }
    }
    return code;
  }

  function section(nodes, id, method, start, end, tags) {
    return 'if(_.s(_.' + method + '("' + esc(id) + '",c,p,1),' +
           'c,p,0,' + start + ',' + end + ',"' + tags + '")){' +
           '_.rs(c,p,' +
           'function(c,p,_){' +
           walk(nodes) +
           '});c.pop();}';
  }

  function invertedSection(nodes, id, method) {
    return 'if(!_.s(_.' + method + '("' + esc(id) + '",c,p,1),c,p,1,0,0,"")){' +
           walk(nodes) +
           '};';
  }

  function partial(tok) {
    return '_.b(_.rp("' +  esc(tok.n) + '",c,p,"' + (tok.indent || '') + '"));';
  }

  function tripleStache(id, method) {
    return '_.b(_.t(_.' + method + '("' + esc(id) + '",c,p,0)));';
  }

  function variable(id, method) {
    return '_.b(_.v(_.' + method + '("' + esc(id) + '",c,p,0)));';
  }

  function text(id) {
    return '_.b(' + id + ');';
  }

  Hogan.parse = function(tokens, text, options) {
    options = options || {};
    return buildTree(tokens, '', [], options.sectionTags || []);
  },

  Hogan.cache = {};

  Hogan.compile = function(text, options) {
    // options
    //
    // asString: false (default)
    //
    // sectionTags: [{o: '_foo', c: 'foo'}]
    // An array of object with o and c fields that indicate names for custom
    // section tags. The example above allows parsing of {{_foo}}{{/foo}}.
    //
    // delimiters: A string that overrides the default delimiters.
    // Example: "<% %>"
    //
    options = options || {};

    var key = text + '||' + !!options.asString;

    var t = this.cache[key];

    if (t) {
      return t;
    }

    t = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
    return this.cache[key] = t;
  };
})(typeof exports !== 'undefined' ? exports : Hogan);


/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

/*! offline 0.7.3 */
(function(){var a,b,c,d,e,f,g;d=function(a,b){var c,d,e,f;f=[];for(d in b.prototype)try{e=b.prototype[d],f.push(null==a[d]&&"function"!=typeof e?a[d]=e:void 0)}catch(g){c=g}return f},a={},null==a.options&&(a.options={}),c={checks:{xhr:{url:function(){return"/favicon.ico?_="+Math.floor(1e9*Math.random())},timeout:5e3},image:{url:function(){return"/favicon.ico?_="+Math.floor(1e9*Math.random())}},active:"xhr"},checkOnLoad:!1,interceptRequests:!0,reconnect:!0},e=function(a,b){var c,d,e,f,g,h;for(c=a,f=b.split("."),d=g=0,h=f.length;h>g&&(e=f[d],c=c[e],"object"==typeof c);d=++g);return d===f.length-1?c:void 0},a.getOption=function(b){var d,f;return d=null!=(f=e(a.options,b))?f:e(c,b),"function"==typeof d?d():d},"function"==typeof window.addEventListener&&window.addEventListener("online",function(){return setTimeout(a.confirmUp,100)},!1),"function"==typeof window.addEventListener&&window.addEventListener("offline",function(){return a.confirmDown()},!1),a.state="up",a.markUp=function(){return a.trigger("confirmed-up"),"up"!==a.state?(a.state="up",a.trigger("up")):void 0},a.markDown=function(){return a.trigger("confirmed-down"),"down"!==a.state?(a.state="down",a.trigger("down")):void 0},f={},a.on=function(b,c,d){var e,g,h,i,j;if(g=b.split(" "),g.length>1){for(j=[],h=0,i=g.length;i>h;h++)e=g[h],j.push(a.on(e,c,d));return j}return null==f[b]&&(f[b]=[]),f[b].push([d,c])},a.off=function(a,b){var c,d,e,g,h;if(null!=f[a]){if(b){for(d=0,h=[];d<f[a].length;)g=f[a][d],c=g[0],e=g[1],h.push(e===b?f[a].splice(d,1):d++);return h}return f[a]=[]}},a.trigger=function(a){var b,c,d,e,g,h,i;if(null!=f[a]){for(g=f[a],i=[],d=0,e=g.length;e>d;d++)h=g[d],b=h[0],c=h[1],i.push(c.call(b));return i}},b=function(a,b,c){var d,e;return d=function(){return a.status&&a.status<12e3?b():c()},null===a.onprogress?(a.addEventListener("error",c,!1),a.addEventListener("timeout",c,!1),a.addEventListener("load",d,!1)):(e=a.onreadystatechange,a.onreadystatechange=function(){return 4===a.readyState?d():0===a.readyState&&c(),"function"==typeof e?e.apply(null,arguments):void 0})},a.checks={},a.checks.xhr=function(){var c,d;d=new XMLHttpRequest,d.offline=!1,d.open("HEAD",a.getOption("checks.xhr.url"),!0),null!=d.timeout&&(d.timeout=a.getOption("checks.xhr.timeout")),b(d,a.markUp,a.markDown);try{d.send()}catch(e){c=e,a.markDown()}return d},a.checks.image=function(){var b;return b=document.createElement("img"),b.onerror=a.markDown,b.onload=a.markUp,void(b.src=a.getOption("checks.image.url"))},a.checks.down=a.markDown,a.checks.up=a.markUp,a.check=function(){return a.trigger("checking"),a.checks[a.getOption("checks.active")]()},a.confirmUp=a.confirmDown=a.check,a.onXHR=function(a){var b,c,e;return b=function(b,c){var d;return d=b.open,b.open=function(e,f,g,h,i){return a({type:e,url:f,async:g,flags:c,user:h,password:i,xhr:b}),d.apply(b,arguments)}},e=window.XMLHttpRequest,window.XMLHttpRequest=function(a){var c,d,f;return c=new e(a),b(c,a),f=c.setRequestHeader,c.headers={},c.setRequestHeader=function(a,b){return c.headers[a]=b,f.call(c,a,b)},d=c.overrideMimeType,c.overrideMimeType=function(a){return c.mimeType=a,d.call(c,a)},c},d(window.XMLHttpRequest,e),null!=window.XDomainRequest?(c=window.XDomainRequest,window.XDomainRequest=function(){var a;return a=new c,b(a),a},d(window.XDomainRequest,c)):void 0},g=function(){return a.getOption("interceptRequests")&&a.onXHR(function(c){var d;return d=c.xhr,d.offline!==!1?b(d,a.confirmUp,a.confirmDown):void 0}),a.getOption("checkOnLoad")?a.check():void 0},setTimeout(g,0),window.Offline=a}).call(this),function(){var a,b,c,d,e,f,g,h,i;if(!window.Offline)throw new Error("Offline Reconnect brought in without offline.js");d=Offline.reconnect={},f=null,e=function(){var a;return null!=d.state&&"inactive"!==d.state&&Offline.trigger("reconnect:stopped"),d.state="inactive",d.remaining=d.delay=null!=(a=Offline.getOption("reconnect.initialDelay"))?a:3},b=function(){var a,b;return a=null!=(b=Offline.getOption("reconnect.delay"))?b:Math.min(Math.ceil(1.5*d.delay),3600),d.remaining=d.delay=a},g=function(){return"connecting"!==d.state?(d.remaining-=1,Offline.trigger("reconnect:tick"),0===d.remaining?h():void 0):void 0},h=function(){return"waiting"===d.state?(Offline.trigger("reconnect:connecting"),d.state="connecting",Offline.check()):void 0},a=function(){return Offline.getOption("reconnect")?(e(),d.state="waiting",Offline.trigger("reconnect:started"),f=setInterval(g,1e3)):void 0},i=function(){return null!=f&&clearInterval(f),e()},c=function(){return Offline.getOption("reconnect")?"connecting"===d.state?(Offline.trigger("reconnect:failure"),d.state="waiting",b()):void 0:void 0},d.tryNow=h,e(),Offline.on("down",a),Offline.on("confirmed-down",c),Offline.on("up",i)}.call(this),function(){var a,b,c,d,e,f;if(!window.Offline)throw new Error("Requests module brought in without offline.js");c=[],f=!1,d=function(a){return Offline.trigger("requests:capture"),"down"!==Offline.state&&(f=!0),c.push(a)},e=function(a){var b,c,d,e,f,g,h,i,j;i=a.xhr,f=a.url,e=a.type,g=a.user,d=a.password,b=a.body,i.abort(),i.open(e,f,!0,g,d),j=i.headers;for(c in j)h=j[c],i.setRequestHeader(c,h);return i.mimeType&&i.overrideMimeType(i.mimeType),i.send(b)},a=function(){return c=[]},b=function(){var b,d,f,g,h,i;for(Offline.trigger("requests:flush"),f={},h=0,i=c.length;i>h;h++)d=c[h],g=d.url.replace(/(\?|&)_=[0-9]+/,function(a,b){return"?"===b?b:""}),f[""+d.type.toUpperCase()+" - "+g]=d;for(b in f)d=f[b],e(d);return a()},setTimeout(function(){return Offline.getOption("requests")!==!1?(Offline.on("confirmed-up",function(){return f?(f=!1,a()):void 0}),Offline.on("up",b),Offline.on("down",function(){return f=!1}),Offline.onXHR(function(a){var b,c,e,f,g;return e=a.xhr,b=a.async,e.offline!==!1&&(c=function(){return d(a)},g=e.send,e.send=function(b){return a.body=b,g.apply(e,arguments)},b)?null===e.onprogress?(e.addEventListener("error",c,!1),e.addEventListener("timeout",c,!1)):(f=e.onreadystatechange,e.onreadystatechange=function(){return 0===e.readyState?c():4===e.readyState&&(0===e.status||e.status>=12e3)&&c(),"function"==typeof f?f.apply(null,arguments):void 0}):void 0}),Offline.requests={flush:b,clear:a}):void 0},0)}.call(this),function(){var a,b,c,d,e;if(!Offline)throw new Error("Offline simulate brought in without offline.js");for(e=["up","down"],c=0,d=e.length;d>c;c++)a=e[c],(document.querySelector("script[data-simulate='"+a+"']")||localStorage.OFFLINE_SIMULATE===a)&&(null==Offline.options&&(Offline.options={}),null==(b=Offline.options).checks&&(b.checks={}),Offline.options.checks.active=a)}.call(this),function(){var a,b,c,d,e,f,g,h,i,j,k,l,m;if(!window.Offline)throw new Error("Offline UI brought in without offline.js");b='<div class="offline-ui"><div class="offline-ui-content"></div></div>',a='<a href class="offline-ui-retry"></a>',e=function(a){var b;return b=document.createElement("div"),b.innerHTML=a,b.children[0]},f=d=null,c=function(a){return j(a),f.className+=" "+a},j=function(a){return f.className=f.className.replace(new RegExp("(^| )"+a.split(" ").join("|")+"( |$)","gi")," ")},h={},g=function(a,b){return c(a),null!=h[a]&&clearTimeout(h[a]),h[a]=setTimeout(function(){return j(a),delete h[a]},1e3*b)},l=function(a){var b,c,d,e;d={day:86400,hour:3600,minute:60,second:1};for(c in d)if(b=d[c],a>=b)return e=Math.floor(a/b),[e,c];return["now",""]},k=function(){var g,h;return f=e(b),document.body.appendChild(f),null!=Offline.reconnect&&Offline.getOption("reconnect")&&(f.appendChild(e(a)),g=f.querySelector(".offline-ui-retry"),h=function(a){return a.preventDefault(),Offline.reconnect.tryNow()},null!=g.addEventListener?g.addEventListener("click",h,!1):g.attachEvent("click",h)),c("offline-ui-"+Offline.state),d=f.querySelector(".offline-ui-content")},i=function(){return k(),Offline.on("up",function(){return j("offline-ui-down"),c("offline-ui-up"),g("offline-ui-up-2s",2),g("offline-ui-up-5s",5)}),Offline.on("down",function(){return j("offline-ui-up"),c("offline-ui-down"),g("offline-ui-down-2s",2),g("offline-ui-down-5s",5)}),Offline.on("reconnect:connecting",function(){return c("offline-ui-connecting"),j("offline-ui-waiting")}),Offline.on("reconnect:tick",function(){var a,b,e;return c("offline-ui-waiting"),j("offline-ui-connecting"),e=l(Offline.reconnect.remaining),a=e[0],b=e[1],d.setAttribute("data-retry-in-value",a),d.setAttribute("data-retry-in-unit",b)}),Offline.on("reconnect:stopped",function(){return j("offline-ui-connecting offline-ui-waiting"),d.setAttribute("data-retry-in-value",null),d.setAttribute("data-retry-in-unit",null)}),Offline.on("reconnect:failure",function(){return g("offline-ui-reconnect-failed-2s",2),g("offline-ui-reconnect-failed-5s",5)}),Offline.on("reconnect:success",function(){return g("offline-ui-reconnect-succeeded-2s",2),g("offline-ui-reconnect-succeeded-5s",5)})},"complete"===document.readyState?i():null!=document.addEventListener?document.addEventListener("DOMContentLoaded",i,!1):(m=document.onreadystatechange,document.onreadystatechange=function(){return"complete"===document.readyState&&i(),"function"==typeof m?m.apply(null,arguments):void 0})}.call(this);
this["BaristaTemplates"] = this["BaristaTemplates"] || {};

this["BaristaTemplates"]["CMapBaseGrid"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n	";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<p class=\"pull-left\" style=\"cursor: pointer\" id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "_download\">\n			<font color=\"#0072B2\"><i class=\"icon-download\"></i> download table</font>\n		</p>\n	";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<p class=\"pull-left\" style=\"padding-left: 8px; cursor: pointer\" id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "_slice\">\n			<font color=\"#0072B2\"><i class=\"icon-cogs\"></i> slice all data</font>\n		</p>\n	";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\n		<div class=\"col-lg-8\"></div>\n	";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		";
  stack1 = helpers['if'].call(depth0, depth0.legend, {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			";
  if (stack1 = helpers.legend) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.legend; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n		";
  return buffer;
  }

function program12(depth0,data) {
  
  
  return "\n			<span class=\"col-lg-8\">\n				<p class=\"pull-right\" style=\"padding-right: 8px\"><span class=\"label\" style=\"background-color: #E69F00\">SMC</span> Small Molecule Compound </p>\n				<p class=\"pull-right\" style=\"padding-right: 8px\"><span class=\"label\" style=\"background-color: #56B4E9\">KD</span> Knock Down </p>\n				<p class=\"pull-right\" style=\"padding-right: 8px\"><span class=\"label\" style=\"background-color: #D55E00\">OE</span> Over Expression </p>\n			</span>\n		";
  }

  buffer += "<div id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  if (stack1 = helpers.span_class) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.span_class; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " backgrid-container\" height=\"300\">\n</div>\n<div class=\"row\">\n	<span class=\"col-lg-4\">\n	";
  stack1 = helpers['if'].call(depth0, depth0.no_download, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  stack1 = helpers['if'].call(depth0, depth0.no_slice, {hash:{},inverse:self.program(5, program5, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</span>\n	";
  stack1 = helpers['if'].call(depth0, depth0.no_legend, {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["BaristaTemplates"]["CMapCard"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a class=\"cmap-card-link\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  <div id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  if (stack1 = helpers.span_class) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.span_class; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <div class=\"col-xs-12\" style=\"background-color: ";
  if (stack1 = helpers.fg_color) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fg_color; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"cmap-spacer-tiny\"></div>\n        <p class=\"hidden-xs cmap-center-text cmap-card-title-text\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n        <p class=\"visible-xs cmap-center-text cmap-card-title-text-small\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n        <div style=\"min-height:2px\"></div>\n      </div>\n\n    <div class=\"col-xs-12 cmap-card\">\n\n        <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"col-xs-4 img-responsive\" alt=\"\">\n        <h4 class=\"hidden-xs col-xs-8 cmap-card-subtitle-text text-muted\">";
  if (stack1 = helpers.subtitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n        <p class=\"visible-xs col-xs-8 cmap-card-subtitle-text-small text-muted\">";
  if (stack1 = helpers.subtitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n        <div class=\"col-xs-12 cmap-spacer-tiny\"></div>\n    </div>\n  </div>\n</a>\n";
  return buffer;
  });

this["BaristaTemplates"]["CMapFooter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img class=\"pull-right cmap-footer-image\" src=\"";
  if (stack1 = helpers.logo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.logo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a>\n	";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img class=\"cmap-footer-image\" src=\"";
  if (stack1 = helpers.logo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.logo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a>\n	";
  return buffer;
  }

  buffer += "<hr>\n<div class=\"row hidden-xs\">\n	<div class=\"col-sm-offset-1 col-sm-5 pull-left\">\n		<p>&copy ";
  if (stack1 = helpers.year) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.year; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.organization) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.organization; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " all rights reserved</p>\n		<p><a href=\"http://lincscloud.org/license/\">terms and conditions</a></p>\n	</div>\n	<div class=\"col-sm-5\">\n	";
  stack1 = helpers.each.call(depth0, depth0.logo_objects, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n</div>\n\n<div class=\"row visible-xs\">\n	<div class=\"col-xs-12\">\n		<p class=\"cmap-center-text\">&copy ";
  if (stack1 = helpers.year) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.year; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.organization) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.organization; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " all rights reserved</p>\n		<p class=\"cmap-center-text\"><a href=\"http://www.lincscloud.org/license.html\">terms and conditions</a></p>\n	</div>\n	<div class=\"col-xs-12 cmap-center-text\">\n	";
  stack1 = helpers.each.call(depth0, depth0.logo_objects, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n</div>\n<div class=\"cmap-spacer-medium\"></div>\n";
  return buffer;
  });

this["BaristaTemplates"]["CMapHeader"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n			             <span title=\"signout\" class=\"label cmap-header-signin-signout\" onclick=\"window.location.href = 'http://apps.lincscloud.org/signout';\">Sign Out</span>\n			         ";
  }

function program3(depth0,data) {
  
  
  return "\n			             <span title=\"signin\" class=\"label cmap-header-signin-signout\" onclick=\"window.location.href = 'http://apps.lincscloud.org/signin';\">Sign In</span>\n			         ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			         <p class=\"cmap-header-username pull-right\">";
  if (stack1 = helpers.user) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " </p>\n			     ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	                                     ";
  if (stack1 = helpers.user) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n	                                 ";
  return buffer;
  }

function program9(depth0,data) {
  
  
  return "\n	                                     <i title=\"signout\" class=\"fa fa-sign-out cmap-header-link\" onclick=\"window.location.href = 'http://apps.lincscloud.org/signout';\"></i>\n	                                 ";
  }

function program11(depth0,data) {
  
  
  return "\n	                                     <i title=\"signin\" class=\"fa fa-sign-in cmap-header-link\" onclick=\"window.location.href = 'http://apps.lincscloud.org/signin';\"></i>\n	                                 ";
  }

  buffer += "<div class=\"cmap-header\">\n	<div id=\"spacer\" style=\"min-height:10px\"></div>\n\n	<!-- large screens -->\n	<div class=\"row hidden-xs\">\n		<!-- logo and navigation buttons -->\n		<div class=\"col-sm-offset-1 col-sm-3\">\n\n			<!-- logo -->\n			<div class=\"row\">\n				<div class=\"col-xs-12\">\n					<a href=\"http://lincscloud.org/\"><img class=\"cmap-header-image\" src=\"http://coreyflynn.github.io/Bellhop/img/lincscloud_logo.png\"></a>\n				</div>\n			</div>\n\n			<div class=\"row\">\n				<div class=\"cmap-spacer-medium\"></div>\n			</div>\n\n			<!-- navigation buttons -->\n			<div class=\"row\">\n				<div class=\"col-sm-12\">\n\n					<!-- apps sub-list -->\n					<i title=\"Apps\" class=\"fa fa-th-large cmap-header-link\" onclick=\"window.location.href = 'http://apps.lincscloud.org/app_list';\">\n			            <div class=\"cmap-header-dropdownContain\">\n			                <div class=\"cmap-header-dropOut cmap-header-apps\">\n			                    <i class=\"cmap-header-link  fa fa-search\" style=\"opacity:0;\"></i><br>\n								<div class=\"cmap-header-dropOut-apps-container\">\n				                    <a href=\"//apps.lincscloud.org/query\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_Query.png\" alt=\"\" /></a>\n									<a href=\"//apps.lincscloud.org/data_synopsis\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_Data_Synopsis.png\" alt=\"\" /></a><br>\n									<a href=\"//apps.lincscloud.org/compound_digest\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_Compound_Digest.png\" alt=\"\" /></a>\n									<a href=\"//apps.lincscloud.org/gene_digest\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_Gene_Digest.png\" alt=\"\" /></a><br>\n									<a href=\"//apps.lincscloud.org/history\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_History.png\" alt=\"\" /></a><br>\n\n								</div>\n			                </div>\n			            </div>\n			        </i>\n\n					<!-- developer tools sub-list -->\n					<i title=\"Developer\" class=\"fa fa-cogs cmap-header-link\" onclick=\"window.location.href = 'http://developer.lincscloud.org/';\">\n						<div class=\"cmap-header-dropdownContain\">\n							<div class=\"cmap-header-dropOut cmap-header-developer\">\n								<i class=\"cmap-header-link  fa fa-cogs\" style=\"opacity:0;\"></i><br>\n								<div class=\"cmap-header-dropOut-developer-container\">\n									<a href=\"//api.lincscloud.org\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_API.png\" alt=\"\" /></a>\n									<a href=\"//c3.lincscloud.org\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_C3.png\" alt=\"\" /></a><br>\n									<a href=\"//download.lincscloud.org\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_Download.png\" alt=\"\" /></a>\n									<a href=\"//code.lincscloud.org\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_Code.png\" alt=\"\" /></a><br>\n								</div>\n							</div>\n						</div>\n					</i>\n\n					<!-- projects sub-list -->\n					<i title=\"Projects\" class=\"fa fa-book cmap-header-link\" onclick=\"window.location.href = 'http://projects.lincscloud.org/';\">\n						<div class=\"cmap-header-dropdownContain\">\n							<div class=\"cmap-header-dropOut cmap-header-projects\">\n								<i class=\"cmap-header-link  fa fa-cogs\" style=\"opacity:0;\"></i><br>\n								<div class=\"cmap-header-dropOut-projects-container\">\n									<a href=\"//projects.lincscloud.org#LJP\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_LJP.png\" alt=\"\" /></a>\n									<a href=\"//projects.lincscloud.org#LTC\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_LTC.png\" alt=\"\" /></a><br>\n								</div>\n							</div>\n						</div>\n					</i>\n\n					<!-- support -->\n					<i title=\"Support\" class=\"fa fa-question-circle cmap-header-link\" onclick=\"window.location.href = '";
  if (stack1 = helpers.support_link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.support_link; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "';\"></i>\n			    </div>\n			</div>\n\n		</div>\n\n		<!-- app title and subtitle -->\n		<div class=\"col-sm-4\">\n			<h3 class=\"col-xs-12 cmap-title-text cmap-center-text cmap-header-top-margin\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n			<p class=\"col-xs-12 text-muted cmap-subhead-text cmap-center-text\">";
  if (stack1 = helpers.subtitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n		</div>\n\n		<!-- signin/signout and support -->\n		<div class=\"col-sm-3\">\n\n			<!-- user and signin/out -->\n			<div class=\"row cmap-header-top-margin\">\n				<h4 class=\"pull-right\">\n			         ";
  stack1 = helpers['if'].call(depth0, depth0.user, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			     </h4>\n			     ";
  stack1 = helpers['if'].call(depth0, depth0.user, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n	</div>\n\n\n	<!-- small screens -->\n	<div class=\"row visible-xs\">\n	                         <div class=\"col-xs-offset-1 col-xs-10\">\n	                             <p class=\"col-xs-12 cmap-center-text cmap-header-username\">\n	                                 ";
  stack1 = helpers['if'].call(depth0, depth0.user, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	                                 <i title=\"Home\" class=\"fa fa-home cmap-header-link\" onclick=\"window.location.href = 'http://lincscloud.org';\"></i>\n	                                 <i title=\"Apps\" class=\"fa fa-th-large cmap-header-link\" onclick=\"window.location.href = 'http://apps.lincscloud.org/app_list';\"></i>\n	                                 <i title=\"Developer\" class=\"fa fa-cogs cmap-header-link\" onclick=\"window.location.href = 'http://developer.lincscloud.org/';\"></i>\n									 <i title=\"Projects\" class=\"fa fa-book cmap-header-link\" onclick=\"window.location.href = 'http://projects.lincscloud.org/';\"></i>\n	                                 <i title=\"Support\" class=\"fa fa-question-circle cmap-header-link\" onclick=\"window.location.href = '";
  if (stack1 = helpers.support_link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.support_link; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "';\"></i>\n	                                 <!-- <i data-toggle=\"modal\" href=\"#aboutModal\" title=\"about\" class=\"fa fa-info-circle cmap-header-link\"></i> -->\n	                                 ";
  stack1 = helpers['if'].call(depth0, depth0.user, {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	                             </p>\n	                         </div>\n\n		<div class=\"row\">\n		    <h3 class=\"col-sm-offset-1 col-sm-10 cmap-title-text cmap-center-text\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n		</div>\n		<div class=\"row\">\n			<p class=\"col-sm-offset-1 col-sm-10 text-muted cmap-subhead-text cmap-center-text\">";
  if (stack1 = helpers.subtitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n		</div>\n	</div>\n</div>\n";
  return buffer;
  });

this["BaristaTemplates"]["CMapPertSearchBar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<input class=\"typeahead form-control col-lg-12\" autocomplete=\"off\" type=\"text\" placeholder=\"";
  if (stack1 = helpers.placeholder) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.placeholder; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-provide=\"typeahead\" id=\"search\">";
  return buffer;
  });

this["BaristaTemplates"]["TypeaheadItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"tt-suggestion\"><span class=\"label\" style=\"background-color: ";
  if (stack1 = helpers.color) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.color; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> ";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>";
  return buffer;
  });

this["BaristaTemplates"]["d3_target"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  if (stack1 = helpers.span_class) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.span_class; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"height:";
  if (stack1 = helpers.height) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.height; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px\"></div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  if (stack1 = helpers.span_class) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.span_class; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"height:120px\"></div>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, depth0.height, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
//		Barista.js 0.2.0
//		(c) 2013 Corey Flynn, Broad Institute.
//		For all documentation:
//		http://cmap.github.io/barista

// ### Initial Setup
// build the top level namespace.  All Barista components will be exposed through this object
var Barista = {};

// current version of the library
Barista.VERSION = '0.2.0';

// build objects to be extended for Models, Collections, and Views
Barista.Models = {};
Barista.Collections = {};
Barista.Views = {};

// build an array to contain backing datasets definitions
Barista.Datasets = {};

// build an object of utilities that we need to make sure are not overwritten
Barista.Utils = {cookie: $.cookie};

// # **CellHistologyDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// Cellular Contexts available in the Connectivity Map

// CellHistologyDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
	{ CellHistology:
			{
			// only return 6 items at a time in the autocomplete dropdown
			limit: 6,

			// provide a name for the default typeahead data source
			name: 'CellHistology',

			// the template to render for all results
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use cellinfo with custom query params
				url: "",

				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return ['http://api.lincscloud.org/a2/cellinfo?',
						'q={"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"cell_histology":{"$regex":"^' + query + '", "$options":"i"}}',
						'&l=10',
						'&s={"cell_id":1}'].join('');
				},

				dataType: 'jsonp',

				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its cell_histology and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.cell_histology);
						object_map[element.cell_histology] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						_.extend(datum,{
							type: 'Cell Histology',
							search_column: 'cell_histology',
							color: '#BB4D8A',
						});
						datum_list.push(datum);
					});

					// return the processed list of datums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

// # **CellIDDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// Cellular Contexts available in the Connectivity Map

// CellIDDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
	{ CellID:
			{
			// only return 6 items at a time in the autocomplete dropdown
			limit: 6,

			// provide a name for the default typeahead data source
			name: 'CellID',

			// the template to render for all results
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use cellinfo with custom query params
				url: '',

				replace: function(url, query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return ['http://api.lincscloud.org/a2/cellinfo?',
						'q={"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"cell_id":{"$regex":"^' + query + '", "$options":"i"}}',
						'&l=10',
						'&s={"cell_id":1}'].join('')
				} ,

				dataType: 'jsonp',

				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its cell_id and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.cell_id);
						object_map[element.cell_id] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						_.extend(datum,{
							type: 'Cell ID',
							search_column: 'cell_id',
							color: '#CC79A7',
						});
						datum_list.push(datum);
					});

					// return the processed list of datums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

// # **CellLineageDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// Cellular Contexts available in the Connectivity Map

// CellLineageDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
	{ CellLineage:
			{
			// only return 6 items at a time in the autocomplete dropdown
			limit: 6,

			// provide a name for the default typeahead data source
			name: 'CellLineage',

			// the template to render for all results
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use cellinfo with custom query params
				url: '',

				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return ['http://api.lincscloud.org/a2/cellinfo?',
						'q={"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"cell_lineage":{"$regex":"^' + query + '", "$options":"i"}}',
						'&l=10',
						'&s={"cell_id":1}'].join('');
				} ,

				dataType: 'jsonp',

				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its cell_lineage and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.cell_lineage);
						object_map[element.cell_lineage] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						_.extend(datum,{
							type: 'Cell Lineage',
							search_column: 'cell_lineage',
							color: '#DDA6C4',
						});
						datum_list.push(datum);
					});

					// return the processed list of datums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

// # **CellMutationDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// Cellular mutation annotations available in the Connectivity Map

// CellMutationDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
	{ CellMutation:
			{
			// only return 6 items at a time in the autocomplete dropdown
			limit: 6,

			// provide a name for the default typeahead data source
			name: 'CellMutation',

			// the template to render for all results
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use cellinfo with custom query params
				url: '',

				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return ['http://api.lincscloud.org/a2/cellinfo?',
						'q={"lincs_status":{"$in":["core_cline","core_pline","DIVR"]}}',
						'&d=mutations'].join('');
				},

				dataType: 'jsonp',

				filter: function(response){
					var datum_list = [];
					var auto_data = response;

					// filter the list based on the query.  self comes from the closure in the view that calls the
					// dataset. It shold be a reference to the view that is consuming the dataset.  That view should
					// have a typeahead elment in it somewhere
					var re = new RegExp($(".typeahead",self.div_string).val(),"i");
					auto_data = _.filter(auto_data,function(mutation){return re.test(mutation);});

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: item
						}
						_.extend(datum,{
							type: 'Cell Mutation',
							search_column: 'mutations',
							color: '#999999',
						});
						datum_list.push(datum);
					});

					// return the processed list of datums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

// # **CompoundPertINameDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// Perturbation IDs available in the Connectivity Map

// CompoundPertINameDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
	{ CompoundPertIName:
			{
			// only return 6 items at a time in the autocomplete dropdown
			limit: 6,

			// provide a name for the default typeahead data source
			name: 'CompoundPertIName',

			// the template to render for all results
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use cellinfo with custom query params
				url: '',

				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return ['http://api.lincscloud.org/a2/pertinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}, "pert_type":"trt_cp"}',
						'&f={"pert_iname":1,"pert_type":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('');
				},

				dataType: 'jsonp',

				filter: function(response){
					var genetic_types = ["trt_sh","trt_oe","trt_sh.cgs"];
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its pert_iname and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.pert_iname);
						object_map[element.pert_iname] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// add cell lines if required
					// if (self.match_cell_lines){
					// 	auto_data = auto_data.concat(self.cell_lines);
					// }

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						if (genetic_types.indexOf(object_map[item].pert_type) != -1){
							_.extend(datum,{
								type: 'Genetic Reagent',
								color: '#0072B2',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_cp' ){
							_.extend(datum,{
								type: 'Chemical Reagent',
								color: '#E69F00',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_sh.css' ){
							_.extend(datum,{
								type: 'Seed Sequence',
								color: '#009E73',
							});
							datum_list.push(datum);
							return datum_list;
						}else{
							_.extend(datum,{
								type: object_map[item].pert_type,
								color: '#999',
							});
							datum_list.push(datum);
							return datum_list;
						}
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

// # **GeneticPertINameDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// Perturbation IDs available in the Connectivity Map

// GeneticPertINameDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
	{ GeneticPertIName:
			{
			// only return 6 items at a time in the autocomplete dropdown
			limit: 6,

			// provide a name for the default typeahead data source
			name: 'GeneticPertIName',

			// the template to render for all results
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use cellinfo with custom query params
				url: '',

				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return ['http://api.lincscloud.org/a2/pertinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}, "pert_type":{"$in":["trt_sh","trt_oe","trt_oe.mut"]}}',
						'&f={"pert_iname":1,"pert_type":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('');
				},

				dataType: 'jsonp',

				filter: function(response){
					var genetic_types = ["trt_sh","trt_oe","trt_sh.cgs"];
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its pert_iname and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.pert_iname);
						object_map[element.pert_iname] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// add cell lines if required
					// if (self.match_cell_lines){
					// 	auto_data = auto_data.concat(self.cell_lines);
					// }

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						if (genetic_types.indexOf(object_map[item].pert_type) != -1){
							_.extend(datum,{
								type: 'Genetic Reagent',
								color: '#0072B2',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_cp' ){
							_.extend(datum,{
								type: 'Chemical Reagent',
								color: '#E69F00',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_sh.css' ){
							_.extend(datum,{
								type: 'Seed Sequence',
								color: '#009E73',
							});
							datum_list.push(datum);
							return datum_list;
						}else{
							_.extend(datum,{
								type: object_map[item].pert_type,
								color: '#999',
							});
							datum_list.push(datum);
							return datum_list;
						}
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

// # **JobIDDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// job IDs available in the Connectivity Map

// JobIDDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
    { JobID:
            {
            // only return 6 items at a time in the autocomplete dropdown
            limit: 6,

            // provide a name for the default typeahead data source
            name: 'JobID',

            // the template to render for all results
            template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

            // use twitter's hogan.js to compile the template for the typeahead results
            engine: Hogan,

            remote: {
                // set the remote data source to use cellinfo with custom query params
                url: '',

                replace: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    ['http://api.lincscloud.org/compute_status?',
                          'q={"job_id":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"job_id":1}'].join('');
                },

                dataType: 'jsonp',

                filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its job_id and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.job_id);
                        object_map[element.job_id] = element;
                    });

                    // make sure we only show unique items
                    auto_data = _.uniq(auto_data);

                    // build a list of datum objects
                    auto_data.forEach(function(item){
                        var datum = {
                            value: item,
                            tokens: [item],
                            data: object_map[item]
                        }
                        _.extend(datum,{
                            type: 'Job',
                            search_column: 'job_id',
                            color: '#BDBDBD',
                        });
                        datum_list.push(datum);
                    });

                    // return the processed list of datums for the autocomplete
                    return datum_list;
                }
            }
        }
    }
);

// # **JobNameDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// job IDs available in the Connectivity Map

// JobNameDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
    { JobName:
            {
            // only return 6 items at a time in the autocomplete dropdown
            limit: 6,

            // provide a name for the default typeahead data source
            name: 'JobName',

            // the template to render for all results
            template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

            // use twitter's hogan.js to compile the template for the typeahead results
            engine: Hogan,

            remote: {
                // set the remote data source to use cellinfo with custom query params
                url: '',

                reomote: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    return ['http://api.lincscloud.org/compute_status?',
                          'q={"params.rpt":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"job_id":1}'].join('');
                },

                dataType: 'jsonp',

                filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its job_id and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.params.rpt);
                        object_map[element.params.rpt] = element;
                    });

                    // make sure we only show unique items
                    auto_data = _.uniq(auto_data);

                    // build a list of datum objects
                    auto_data.forEach(function(item){
                        var datum = {
                            value: item,
                            tokens: [item],
                            data: object_map[item]
                        }
                        _.extend(datum,{
                            type: 'Job Name',
                            search_column: 'params.rpt',
                            color: '#77A2A6',
                        });
                        datum_list.push(datum);
                    });

                    // return the processed list of datums for the autocomplete
                    return datum_list;
                }
            }
        }
    }
);

// # **JobStatusDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// job Statuses available in the Connectivity Map

// JobStatusDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
    { JobStatus:
            {
            // only return 6 items at a time in the autocomplete dropdown
            limit: 6,

            // provide a name for the default typeahead data source
            name: 'JobStatus',

            // the template to render for all results
            template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

            // use twitter's hogan.js to compile the template for the typeahead results
            engine: Hogan,

            remote: {
                // set the remote data source to use cellinfo with custom query params
                url: '',

                replace: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    return ['http://api.lincscloud.org/compute_status?',
                          'q={"status":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"status":1}'].join('')
                },

                dataType: 'jsonp',

                filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its status and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.status);
                        object_map[element.status] = element;
                    });

                    // make sure we only show unique items
                    auto_data = _.uniq(auto_data);

                    // build a list of datum objects
                    auto_data.forEach(function(item){
                        var datum = {
                            value: item,
                            tokens: [item],
                            data: object_map[item]
                        }
                        _.extend(datum,{
                            type: 'Status',
                            search_column: 'status',
                            color: '#B14A4E',
                        });
                        datum_list.push(datum);
                    });

                    // return the processed list of datums for the autocomplete
                    return datum_list;
                }
            }
        }
    }
);

// # **P100PertINameDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// P100 Perturbation IDs available in the Connectivity Map

// P100PertINameDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
	{ P100PertIName:
			{
			// only return 6 items at a time in the autocomplete dropdown
			limit: 6,

			// provide a name for the default typeahead data source
			name: 'P100PertIName',

			// the template to render for all results
			template: '<span class="label" style="background-color: #7bd9e4">P100</span><span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use cellinfo with custom query params
				url: '',

				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return ['http://prefix:8080/p100/v1/profileinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}}',
						'&f={"pert_iname":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('');
				},

				dataType: 'jsonp',

				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its pert_iname and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.pert_iname);
						object_map[element.pert_iname] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// add cell lines if required
					// if (self.match_cell_lines){
					// 	auto_data = auto_data.concat(self.cell_lines);
					// }

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						_.extend(datum,{
							type: 'Chemical Reagent',
							color: '#E69F00',
						});
						datum_list.push(datum);
						return datum_list;
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

// # **PRISMPertINameDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// PRISM Perturbation IDs available in the Connectivity Map

// PRISMPertINameDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
	{ PRISMPertIName:
			{
			// only return 6 items at a time in the autocomplete dropdown
			limit: 6,

			// provide a name for the default typeahead data source
			name: 'PRISMPertIName',

			// the template to render for all results
			template: '<span class="label" style="background-color: #8387e6">PRISM</span><span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use cellinfo with custom query params
				url: '',

				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return ['http://api.lincscloud.org/prism/v1/profileinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}}',
						'&f={"pert_iname":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('')
				},

				dataType: 'jsonp',

				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its pert_iname and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.pert_iname);
						object_map[element.pert_iname] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// add cell lines if required
					// if (self.match_cell_lines){
					// 	auto_data = auto_data.concat(self.cell_lines);
					// }

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						_.extend(datum,{
							type: 'Chemical Reagent',
							color: '#E69F00',
						});
						datum_list.push(datum);
						return datum_list;
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

// # **PertINameDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// Perturbation IDs available in the Connectivity Map

// PertINameDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
	{ PertIName:
			{
			// only return 6 items at a time in the autocomplete dropdown
			limit: 6,

			// provide a name for the default typeahead data source
			name: 'PertIName',

			// the template to render for all results
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use pertinfo with custom query params
				url: '',

				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return ['http://api.lincscloud.org/a2/pertinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}, "pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}',
						'&f={"pert_iname":1,"pert_type":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('');
				},

				dataType: 'jsonp',

				filter: function(response){
					var genetic_types = ["trt_sh","trt_oe","trt_sh.cgs"];
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its pert_iname and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.pert_iname);
						object_map[element.pert_iname] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// add cell lines if required
					// if (self.match_cell_lines){
					// 	auto_data = auto_data.concat(self.cell_lines);
					// }

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						if (genetic_types.indexOf(object_map[item].pert_type) != -1){
							_.extend(datum,{
								type: 'Genetic Reagent',
								color: '#0072B2',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_cp' ){
							_.extend(datum,{
								type: 'Chemical Reagent',
								color: '#E69F00',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_sh.css' ){
							_.extend(datum,{
								type: 'Seed Sequence',
								color: '#009E73',
							});
							datum_list.push(datum);
							return datum_list;
						}else{
							_.extend(datum,{
								type: object_map[item].pert_type,
								color: '#999',
							});
							datum_list.push(datum);
							return datum_list;
						}
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

// # **ToolIDDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// Tool IDs available in the Connectivity Map

// ToolIDDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
    { ToolID:
            {
            // only return 6 items at a time in the autocomplete dropdown
            limit: 6,

            // provide a name for the default typeahead data source
            name: 'ToolID',

            // the template to render for all results
            template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

            // use twitter's hogan.js to compile the template for the typeahead results
            engine: Hogan,

            remote: {
                // set the remote data source to use cellinfo with custom query params
                url: '',

                replace: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    return ['http://api.lincscloud.org/compute_status?',
                          'q={"tool_id":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"tool_id":1}'].join('');
                },

                dataType: 'jsonp',

                filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its tool_id and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.tool_id);
                        object_map[element.tool_id] = element;
                    });

                    // make sure we only show unique items
                    auto_data = _.uniq(auto_data);

                    // build a list of datum objects
                    auto_data.forEach(function(item){
                        var datum = {
                            value: item,
                            tokens: [item],
                            data: object_map[item]
                        }
                        _.extend(datum,{
                            type: 'Tool',
                            search_column: 'tool_id',
                            color: '#005CF2',
                        });
                        datum_list.push(datum);
                    });

                    // return the processed list of datums for the autocomplete
                    return datum_list;
                }
            }
        }
    }
);

// # **UserIDDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// user IDs available in the Connectivity Map

// UserIDDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
    { UserID:
            {
            // only return 6 items at a time in the autocomplete dropdown
            limit: 6,

            // provide a name for the default typeahead data source
            name: 'UserID',

            // the template to render for all results
            template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

            // use twitter's hogan.js to compile the template for the typeahead results
            engine: Hogan,

            remote: {
                // set the remote data source to use cellinfo with custom query params
                url: '',

                replace: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    return ['http://api.lincscloud.org/compute_status?',
                          'q={"user_id":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"user_id":1}'].join('');
                },

                dataType: 'jsonp',

                filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its job_id and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.user_id);
                        object_map[element.user_id] = element;
                    });

                    // make sure we only show unique items
                    auto_data = _.uniq(auto_data);

                    // build a list of datum objects
                    auto_data.forEach(function(item){
                        var datum = {
                            value: item,
                            tokens: [item],
                            data: object_map[item]
                        }
                        _.extend(datum,{
                            type: 'Username',
                            search_column: 'user_id',
                            color: '#B348DA',
                        });
                        datum_list.push(datum);
                    });

                    // return the processed list of datums for the autocomplete
                    return datum_list;
                }
            }
        }
    }
);

// # **CMapPertTypeAlias**

// a utility function to convert standard perturbagen type descriptors into 
// more human friendly strings. Given an input type string, an object is 
// returned with field names of 'name' and 'acronym'.  If the passed string
// is not a recoqnized type, the 'name' and 'acronym' fields are set to the 
// passed string


//		var pert_type_object = CMapPertTypeAlias("trt_cp");
//		pert_type_object.name;
//		pert_type_object.acronym;
Barista.CMapPertTypeAlias = function(input_type){
	switch(input_type){
		case "trt_cp":
			return {name: "small molecule compound", acronym: "SMC"};
		case "trt_sh":
			return {name: "knock down", acronym: "KD"};
		case "trt_oe":
			return {name: "over expression", acronym: "OE"};
		case "trt_oe.mut":
			return {name: "variant", acronym: "VAR"};
		case "DOS":
			return {name: "tool compounds", acronym: "DOS"};
		case "BIOA":
			return {name: "drugs and bioactives", acronym: "BIOA"};
		default:
			return {name: input_type, acronym: input_type};
	}
};
// # **NumbersToSubscript**
// a utility to map numbers in an input string to subscript
Barista.NumbersToSubscript = function(s) {
    if (!s){
        return s;
    }
    var subscript = "₀₁₂₃₄₅₆₇₈₉";
    var re = new RegExp('^[0-9]$');
    var new_s = "";
    s.split("").forEach(function(char){
        if (re.test(char)){
            new_s += subscript[char];
        }else{
            new_s += char;
        }
    });
    return new_s;
}

// # **arrayAverage**

// a utility function to take the average of an array of numeric values

//		//evaluates to 2
//		var a = arrayAverage([1,2,3]);
Barista.arrayAverage = function arrayAverage (arr){
	return _.reduce(arr, function(memo, num){
		return memo + num;
	}, 0) / arr.length;
};
// # **getEmSizeInPixels**

// a utility function to find the size of 1em for the given element id
Barista.getEmSizeInPixels = function(id) {
    var el = document.body;
    return Number(getComputedStyle(el, "").fontSize.match(/(\d+)px/)[1]);
}
// # **numberWithCommas**

// a utility function to return a number with commas every three digits
// credit to Elias Zamaria http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
Barista.numberWithCommas = function(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
// # **setUserKey**

// a utility function to set a user_key attribute on the Barista object and set up
// ajax calls to api.lincscloud.org to pass that user_key as a parameter

// arguments
// 
// 1.  {string}  **key**  The user_key to use or a path to a JSON file containing a user_key attribute, defaults to *""*
Barista.setUserKey = function(key) {
	// configure ajax calls to add the user key parameter on calls to api.lincscloud.org
	$.ajaxPrefilter(function( options, originalOptions, jqXHR ){
		var re = new RegExp('api.lincscloud.org');
		if (re.test(options.url)){
			options.data = $.param($.extend(originalOptions.data,{user_key:Barista.user_key}));
		}
	});

	// grab the user_key from the url given by string passed in 'key' or set the string itself
	// as user_key if an ajax call to the string fails
	var key_request = $.ajax(key,{dataType: 'json',async: false});
	key_request.done(function(res){
		Barista.user_key = res.user_key;
	});
	key_request.fail(function(){
		Barista.user_key = key;
	});
};
// # **AnalysisHistoryModel**

// A Backbone.Model that represents an analysis history object.
// `pert_model = new AnalysisHistoryModel()`
Barista.Models.AnalysisHistoryModel = Backbone.Model.extend({
    // ### initialize
    // Overides the base Model's initialize method to add the models date attribute and set the cid to the mongo _id field
    initialize: function(attributes, options) {
        this.cid = this.get('_id')
        this.set("date", new Date(parseInt(this.cid.substring(0,8), 16)*1000));
        this.set("rpt",this.get("params").rpt);
        if (this.get("status") === "completed"){
            this.set({view_result_link: '<a href="' + this.get("standard_result") + '"><i class="fa fa-eye"></i></a>'});
        }else{
            this.set({view_result_link: ''});
        }
  }
});

// # **BarPlotModel**
// A Backbone.Model to hold the information needed to make a simple bar plot.  The model includes a title,
// axis title, data, data_labels, and an optional object for metadata on the points in the data.  The meta
// data object should contain attributes for each meta data category and an array of values matching the size
// of the points in the data.  for example:

//		meta_data = {'dose: [1,2,3]', timepoint: ['6H','6H','6H']}

// usage:

//		summly_result = new SummlyResultModel();
Barista.Models.BarPlotModel = Backbone.Model.extend({
	// ### defaults
	// set of model defaults

	// 1.  {String}  **title**  the title of the plot. Defaults to *""*
	// 2.  {String}  **axis_title**  the title of the x_axis. Defaults to *""*
	// 4.  {Array}  **data**  an array of data for the x_axis. Defaults to *[]*
	// 5.  {Array}  **data_labels**  an array of data for the y_axis. Defaults to *[]*
	// 1.  {Object}  **meta_data**  object containing meta data for the points in the plot. Defaults to *{}*
	defaults: {
		title: "",
		axis_title: "",
		data: [],
		data_labels: [],
		meta_data: {}
	}
});

// # **CellCountModel**

// A Backbone.Model that represents the count of a set of cell_lines.  The data model
// captures both the total count of cell lines that meet a search criteria and the count
// of each annotation category for the set of cell lines.

// optional arguments:

// 1.  {string}  **type\_string**  the string of pert_types that will be search upon fetching data, defaults to *'["trt_sh","trt_oe"]'*

// `cell_count_model = new CellCountModel({type_string: '["trt_sh","trt_oe"]'})`
Barista.Models.CellCountModel = Backbone.Model.extend({
  // ### defaults
  // describes the model's default parameters

  // 1.  {Number}  **pert\_count**  the number of perturbagens matching an api query, defaults to *0*
  // 2.  {Array}  **pert\_types**  an array of objects representing pert\_type categories to keep track of, defaults to *[{}}]*
  // 3.  {Date}  **last\_update**  a timestamp of the latest model update, defaults to the current time
  defaults: {
    count: 0,
    pert_types: [{}],
    g: "cell_type",
    last_update: (new Date()).getTime()
  },

  // ### fetch
  // fetches new data from the cell_info api.  the count and pert_types data
  // is replaced with new data coming from the api call
  fetch: function(search_string,search_type){
    // depending on the type of query we are making, set up the pert_params for the api call.
    // if we are doing a single query, match that query as a regular expression. If we are
    // doing a multi query, match exact names. If we are doing a cell line query, only match
    // cell\_ids
    var sig_info = 'http://api.lincscloud.org/a2/siginfo?callback=?';
    var pert_info = 'http://api.lincscloud.org/a2/pertinfo?callback=?';
    var cell_info = 'http://api.lincscloud.org/a2/cellinfo?callback=?';
    var params = {};
    if (search_type === "multi"){
      search_string = '["' + search_string.split(/[:, ]/).join('","') + '"]';
      pert_params = {q:'{"pert_iname":{"$in":' + search_string + '},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}', d:"cell_id"};
    }
    if (search_type === "single" || search_type === undefined){
      pert_params = {q:'{"pert_iname":{"$regex":"^' + search_string + '","$options":"i"},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}', d:"cell_id"};
    }
    if (search_type === "cell") {
      pert_params = {q:'{"cell_id":"' + search_string + '"}', f:'{"cell_id":1}', l:1};
    }

    // run the api request to get the total count of cell lines.
    var self = this;
    var num_perts;
    var t = (new Date()).getTime();
    // if the search type is a "cell", leverage siginfo and cellinfo apis
    if (search_type === "cell") {
      $.getJSON(sig_info,pert_params,function(sig_res) {
        // if there is no reponse, set **pert\_count: num_perts** and **pert\_types: [{}]**
        if (sig_res === 0){
          num_perts = 0;
          self.set({count: num_perts, pert_types: [{}], last_update: t});
        }else{
          // if there is a reponse, update *pert\_count* and *pert\_types*
          num_perts = sig_res.length;
          var cell_lines = '["' + sig_res.join('","') + '"]';
          var cell_params = {q:'{"cell_id":"' + search_string + '"}', g:"cell_type"};
          $.getJSON(cell_info,cell_params,function(cell_res){
            self.set({count: num_perts, pert_types: cell_res, last_update: t});
          });
        }
      });
    }else{
        // if the search type is not "cell", leverage the pertinfo api
        $.getJSON(pert_info,pert_params,function(pert_res) {
        if (pert_res === 0){
          // if there is no reponse, set **pert\_count: num_perts** and **pert\_types: [{}]**
          num_perts = 0;
          self.set({count: num_perts, pert_types: [{}], last_update: t});
        }else{
          // if there is a reponse, update *pert\_count* and *pert\_types*
          num_perts = pert_res.length;
          var cell_lines = '["' + pert_res.join('","') + '"]';
          var cell_params = {q:'{"cell_id":{"$in":' + cell_lines + '}}', g:self.get("g")};
          $.getJSON(cell_info,cell_params,function(cell_res){
            self.set({count: num_perts, pert_types: cell_res, last_update: t});
          });
        }
      });
     }
  }
});

// # **CellModel**

// A Backbone.Model that represents a cell line
// `pert_model = new CellModel()`
Barista.Models.CellModel = Backbone.Model.extend({
	// ### initialize
	// Overides the base Model's initialize method to set the model's cid to the cell_id of the perturbagen
	initialize: function(attributes, options) {
		this.cid = this.get('cell_id');
  }
});

// # **CompoundDetailModel**

// A Backbone.Model that represents a single compound's description.  The data
// model captures a number of fields including

// 1. pert_id: the compound's perturbagen identifier
// 2. pert_iname: the compound's standardized name
// 3. pert_summary: a short description of the compound
// 4. pubchem_cid: the PubChem identifier associated with the compound
// 5. wiki_url: wikipedia url

// `pert_detail_model = new CompoundDetailModel()`

Barista.Models.CompoundDetailModel = Backbone.Model.extend({
  // ### defaults
  // describes the model's default parameters

  defaults: {
    pert_id: "",
    pert_iname: "",
    pert_summary: null,
    pubchem_cid: null,
    wiki_url: null,
    molecular_formula: null,
    molecular_wt: null,
    pert_vendor: null,
    num_gold: 0,
    num_sig: 0,
    cell_id: [],
    inchi_key: "",
    structure_url: ""
  },

  // ### fetch
  // fetches new data from the pert_info api. All fields are replaced by the first item
  // that matches the api search_string
  fetch: function(search_string){
    // set up a deferred object that can be used by outside functions.  This deferred will be
    // resolved with the contents of the model attributes
    var deferred = $.Deferred();

    // set up the api parameters to make a regular expression matched query against
    // pert_inames in pertinfo and retrieve the first result's pert_iname and pert_desc
    var pert_info = 'http://api.lincscloud.org/a2/pertinfo?callback=?';
    var params = params = {q:'{"pert_type":"trt_cp","pert_iname":{"$regex":"^' + search_string + '", "$options":"i"}}',
                          l:1};

    // run the api request.  If the search string is "", set the short and long
    // description to undefined and trigger a "CompoundDetailModel:ModelIsNull" event.
    // Otherwise, retrive the pert_iname and pert_desc of the response and set
    // them to the model and trigger a "CompoundDetailModel:ModelIsNotNull" event
    var self = this;
    $.getJSON(pert_info,params,function(perts) {
      if (perts == 0 || search_string == ""){
        self.set({pert_id: "",
                  pert_iname: "",
                  pert_summary: null,
                  pubchem_cid: null,
                  wiki_url: null,
                  molecular_formula: null,
                  molecular_wt: null,
                  pert_vendor: null,
                  num_gold: 0,
                  num_sig: 0,
                  cell_id: [],
                  inchi_key: "",
                  structure_url: ""})
        self.trigger("CompoundDetailModel:ModelIsNull");
      }else{
        //   set all fields on the model
        self.set(perts[0]);

        // grab the wikipedia link if it is there
        var wiki_url = null;
        if (perts[0].pert_url){
          var links = perts[0].pert_url.split(',');
          var wiki_re = /wikipedia/
          links.forEach(function(link){
            if (wiki_re.exec(link)){
              wiki_url = link;
            }
          });
        }

        // grab the PubChem ID if it is there.
        var pubchem_cid = null;
        if (perts[0].pubchem_cid){
          pubchem_cid = perts[0].pubchem_cid;
        }

        // grab the pert summary if it is there
        var pert_summary = null;
        if (perts[0].pert_summary){
          pert_summary = perts[0].pert_summary;
        }

        // grab the sstructure_url if it is there and there is a pubchem_cid (i.e. it is public).
        var structure_url = null;
        if (perts[0].structure_url && pubchem_cid){
          structure_url = perts[0].structure_url;
        }

        // set the fields on the model
        self.set({pert_id: perts[0].pert_id,
                  pert_iname: perts[0].pert_iname,
                  pert_summary: pert_summary,
                  pubchem_cid: pubchem_cid,
                  wiki_url: wiki_url,
                  molecular_formula: perts[0].molecular_formula,
                  molecular_wt: perts[0].molecular_wt,
                  pert_vendor: perts[0].pert_vendor,
                  num_gold: perts[0].num_gold,
                  num_sig: perts[0].num_sig,
                  cell_id: perts[0].cell_id,
                  inchi_key: perts[0].inchi_key,
                  structure_url: structure_url,
                  last_update: (new Date()).getTime()});

        // trigger an event to tell us that the model is not null
        self.trigger("CompoundDetailModel:ModelIsNotNull");
      }
      deferred.resolve(self.attributes);
    });
    return deferred;
  }
});

// # **GeneDetailModel**

// A Backbone.Model that represents a single compound's description.  The data
// model captures a number of fields including

// 1. pert_id: the compound's perturbagen identifier
// 2. pert_iname: the compound's standardized name
// 3. pert_summary: a short description of the compound
// 4. pubchem_cid: the PubChem identifier associated with the compound
// 5. wiki_url: wikipedia url

// `pert_detail_model = new GeneDetailModel()`

Barista.Models.GeneDetailModel = Backbone.Model.extend({
  // ### defaults
  // describes the model's default parameters

  defaults: {
    cell_id: [],
    clone_name: null,
    has_kd: false,
    has_oe: false,
    num_gold: null,
    num_inst: null,
    num_sig: null,
    oligo_seq: null,
    pert_id: null,
    pert_iname: null,
    pert_summary: null,
    seed_seq6: null,
    seed_seq7: null,
    sig_id: [],
    sig_id_gold: [],
    target_region: null,
    target_seq: null,
    vector_id: null
  },

  // ### kd_fields
  // kd specific model fields
  kd_fields: ['clone_name','oligo_seq','seed_seq6','seed_seq7','target_region','target_seq','vector_id'],

  // ### array_fields
  // fields that are arrays
  array_fields: ['cell_id','sig_id','sig_id_gold'],

  // ### fetch
  // fetches new data from the pert_info api. All fields are replaced by the first item
  // that matches the api search_string
  fetch: function(search_string){
    // set up a deferred object that can be used by outside functions.  This deferred will be
    // resolved with the contents of the model attributes
    var deferred = $.Deferred();

    // set up the api parameters to make a regular expression matched query against
    // pert_inames in pertinfo
    var pert_info = 'http://api.lincscloud.org/a2/pertinfo?callback=?';
    var params = params = {
        q:'{"pert_type":{"$in":["trt_sh","trt_oe"]},"pert_iname":{"$regex":"^' + search_string + '", "$options":"i"}}',
        f:'{"pert_iname":1}',
        l:1
    };

    // get annotations for both KD and OE experiments of the matched gene name
    var self = this;
    $.getJSON(pert_info,params,function(perts) {
          if (perts == 0 || search_string == ""){
            // if there is no matched gene, go back to defaults
            self.set(self.defaults);
            self.trigger("GeneDetailModel:ModelIsNull");
          }else{
            // otherwise, populate the model with a combination of KD and OE annotations

            // set up the deferred objects for calls to the pertinfo API
            var search_string = perts[0].pert_iname;
            KD_deferred = self.fetch_pert_type(search_string,"trt_sh");
            OE_deferred = self.fetch_pert_type(search_string,"trt_oe");

            // act on the deferred objects once they are resolved
            $.when(KD_deferred,OE_deferred).done(function(kd_annots, oe_annots){
                if ( kd_annots === null && oe_annots === null ){
                    self.set(self.defaults);
                    self.trigger("GeneDetailModel:ModelIsNull");
                }else{
                    var annots = {pert_type:"gene"};
                    if (kd_annots === null){
                        annots.has_kd = false;
                        annots.has_oe = true;
                        self.set(_.extend(oe_annots.unprefixed,oe_annots.prefixed,annots));
                    }else if (oe_annots === null){
                        annots.has_kd = true;
                        annots.has_oe = false;
                        self.set(_.extend(kd_annots.unprefixed,kd_annots.prefixed,annots));
                    }else{
                        annots.has_kd = true;
                        annots.has_oe = true;
                        self.set(_.extend(kd_annots.unprefixed,kd_annots.prefixed,oe_annots.prefixed,annots));
                    }
                    // trigger an event to tell us that the model is not null
                    self.trigger("GeneDetailModel:ModelIsNotNull");
                }
                deferred.resolve(self.attributes);
            });
          }
        });
        return deferred;
    },

    // ### fetch_pert_type
    // fetches new data from the pert_info API for the given pert_type.
    fetch_pert_type: function(search_string,pert_type){
        // set up a deferred object that we can use in the fetch function above
        var deferred = $.Deferred();

        // set up the api parameters to make an exact matched query against
        // pert_inames in pertinfo and retrieve the first result
        var pert_info = 'http://api.lincscloud.org/a2/pertinfo?callback=?';
        var params = params = {q:'{"pert_type":"'+ pert_type + '","pert_iname":"' + search_string + '"}',
                              l:1};

        // run the api request.  If the search string is ""resolve the generated promise
        // with a null value, otherwise resolve it with the returned pert annotations
        var self = this;
        $.getJSON(pert_info,params,function(perts) {
            if (perts == 0 || search_string == ""){
                deferred.resolve(null);
            }else{
                var annots = {};
                for (field in perts[0]){
                    annots[pert_type + '_' + field] = perts[0][field];
                }
                deferred.resolve({prefixed: annots, unprefixed: perts[0]});
            }
        });

        return deferred;
    }
});

// # **GenericCountModel**

// A Backbone.Model that represents the count of a set CMap databbase items.  The data model
// captures the total count of perturbagens that meet a search criteria.

// optional arguments:

// 1.  {string}  **search_field**  the document field the model with count over upon fetching data, defaults to *"pert_iname"*
// 2.  {string}  **url**  the url of the api service to fetch data from, defaults to *"http://api.lincscloud.org/a2/pertinfo"*

// `generic_count_model = new GenericCountModel()`

Barista.Models.GenericCountModel = Backbone.Model.extend({
  // ### defaults
  // describes the model's default parameters

  // 1.  {string}  **search_field**  the document field the model with count over upon fetching data, defaults to *"pert_iname"*
  // 2.  {string}  **url**  the url of the api service to fetch data from, defaults to *"http://api.lincscloud.org/a2/pertinfo"*
  defaults: {
    "search_field": "pert_iname",
    "url": "http://api.lincscloud.org/a2/pertinfo",
    "count": 0,
    "last_update": (new Date()).getTime(),
    "search_string": "",
    "distinct": false
  },

  // ## initialize
  // custom initialization to make sure we have the correct url for jsonp
  initialize: function(){
    var re = new RegExp("/?callback=/?");
    if (!re.test(this.get("url"))){
      this.set({"url": this.get("url") + "?callback=?"});
    }
  },

  // ### fetch
  // fetches new data from the API.  the count is updated with a new
  // count based on the results of the api call
  fetch: function(search_string){
    // update the model's search string attribute
    this.set("search_string",search_string);

    // set up API call parameters
    search_string = (search_string[0] === "*") ? search_string.replace("*",".*") : search_string;
    var params = {q:'{"' + this.get("search_field") + '":{"$regex":"^' + search_string + '","$options":"i"}}',
              c:true};
    if (this.get("distinct")){
        _.extend(params,{d:this.get("search_field")});
    }

    // run the api request
    var self = this;
    var count;
    $.getJSON(this.get("url"),params,function(res) {
      if (res === 0){
        count = 0;
      }else{
        count = res.count;
      }
      var t = (new Date()).getTime();
      self.set({count: count,last_update: t});
    });
  }
});

// # **GenericMongoModel**

// A Backbone.Model that represents a generic MongoDB object.  All fields in the document
// are passed to the model as normal and a date attribute is set from the _id field of the mongo document
// `pert_model = new GenericMongoModel()`
Barista.Models.GenericMongoModel = Backbone.Model.extend({
    // ### initialize
    // Overides the base Model's initialize method to add the models date attribute and set the cid to the mongo _id field
    initialize: function(attributes, options) {
        this.cid = this.get('_id')
        this.set("date", new Date(parseInt(this.cid.substring(0,8), 16)*1000));
  }
});

// # **HeatmapModel**

// A Backbone.Model that represents the data in a heatmap.  The model contains
// a two dimensional array of numbers, row and columns labels, and a title.

// example usage:

// 			heatmap_model = new HeatmapModel();

// optional arguments

// 1.  {Array}  **data**  the data object to use in the heatmap. defualts to *[[1,2],[3,4]]*
// 2.  {Array}  **rid**  the row labels to use in the heatmap. defualts to *['1','2']*
// 3.  {Array}  **cid**  the column labels to use in the heatmap. defualts to *['1','2']*
// 4.  {Array}  **annots**  optional annotations categories to show under the heatmap. defualts to *undefined*
// 4.  {Array}  **annots_label**  optional label for annotations. defualts to *undefined*
// 5.  {String}  **title**  the title to use in the plot, defaults to *""*

//			heatmap_model = new HeatmapModel({data: [[1,2],[3,4]],
//											rid: ['1','2'],
//											cid: ['1','2'],
//											annots: ['1','2'],
//											title: ""});
Barista.Models.HeatmapModel = Backbone.Model.extend({
	// ### defaults
	// set up defaults for model values

	// 1.  {Array}  **data**  the data object to use in the heatmap. defualts to *[[1,2],[3,4]]*
	// 2.  {Array}  **rid**  the row labels to use in the heatmap. defualts to *['1','2']*
	// 3.  {Array}  **cid**  the column labels to use in the heatmap. defualts to *['1','2']*
	// 4.  {Array}  **annots**  optional annotations categories to show under the heatmap. defualts to *undefined*
	// 5.  {String}  **title**  the title to use in the plot, defaults to *""*
	defaults: {
		data: [[1,2],[3,4]],
		rid: ['1','2'],
		cid: ['1','2'],
		annots: undefined,
		title: "",
		last_update: (new Date()).getTime()
	}
})
// # **PertCellBreakdownModel**

// A Backbone.Model that represents the cell line based breakdown of a set of perturbagens.  The number of
// perturbagens matching a query is counted for each cell line. Data for all cell lines that contain a match
// to the query are represented in the model

// `pert_cell_breakdown_model = new PertCellBreakdownModel()`
Barista.Models.PertCellBreakdownModel = Backbone.Model.extend({
  // ### defaults
  // describes the model's default parameters

  // 1.  {String}  **pert\_filter**  the current filter to be used with api calls, defaults to *""*
  // 2.  {Object}  **tree\_object**  an object that describes the structured tree data representing cell_line counts, defaults to *{children:[]}*
  defaults: {
    "filter": "",
    "tree_object": {children:[]}
  },

  // ### fetch
  // fetches new data from the pert_info api.  the tree_object data is updated
  fetch: function(search_string,search_type){
    // depending on the type of query we are making, set up the q param for the api call.
    // if we are doing a single query, match that query as a regular expression. If we are
    // doing a multi query, match exact names. If we are doing a cell line query, only match
    // cell\_ids
    var pert_info = 'http://api.lincscloud.org/a2/pertinfo?callback=?';
    var params = {};
    if (search_type === "multi"){
      search_string = '["' + search_string.split(/[:, ]/).join('","') + '"]';
      params = {q:'{' + this.get('filter') + '"pert_iname":{"$in":' + search_string + '}}', g:"cell_id"};
    }
    if (search_type === "single" || search_type === undefined){
      params = {q:'{' + this.get('filter') + '"pert_iname":{"$regex":"^' + search_string + '","$options":"i"}}', g:"cell_id"};
    }
    if (search_type === "cell") {
      params = {q:'{' + this.get('filter') + '"pert_iname":{"$regex":""}}', g:"cell_id"};
    }


    // run the api request
    var self = this;
    $.getJSON(pert_info,params,function(response) {
      if (response === 0){
        children = [];
      }else{
        children = response;
      }
      if (search_type === "cell") {
        children = _.filter(children,function(o){return o._id == search_string;});
      }
      var t = (new Date()).getTime();
      self.set({tree_object: {name:"root", children:children}, last_update: t});
    });
  }
});
// # **PertCountModel**

// A Backbone.Model that represents the count of a set of perturbagens.  The data model
// captures both the total count of perturbagens that meet a search criteria and the count
// of each annotation category for the set of perturbagens.

// optional arguments:

// 1.  {string}  **type_string**  the string of pert_types that will be search upon fetching data, defaults to *'["trt_sh","trt_oe"]'*

// `count_model = new PertCountModel({type_string: '["trt_sh","trt_oe"]'})`

Barista.Models.PertCountModel = Backbone.Model.extend({
  // ### defaults
  // describes the model's default parameters

  // 1.  {String}  **type_string**  the string of pert_types that will be search upon fetching data, defaults to *'["trt_sh","trt_oe"]'*
  // 2.  {Number}  **pert\_count**  the number of perturbagens matching an api query, defaults to *0*
  // 3.  {Array}  **pert\_types**  an array of objects representing pert\_type categories to keep track of, defaults to *[{}}]*
  // 4.  {String}  **pert\_type\_field**  a field name over which to look for pert_types.  This runs an aggregated count over the specified field name in the Connectivity Map database, defaults to *'pert_icollection'*
  // 5.  {Date}  **last\_update**  a timestamp of the latest model update, defaults to the current time
  defaults: {
    "type_string": '["trt_cp"]',
    "count": 0,
    "pert_types": [{}],
    "pert_type_field": "pert_icollection",
    "last_update": (new Date()).getTime()
  },

  // ### fetch
  // fetches new data from the pert_info api.  the count and pert_types data
  // is replaced with new data coming from the api call
  fetch: function(search_string,search_type){
    // depending on the type of query we are making, set up the q param for the api call.
    // if we are doing a single query, match that query as a regular expression. If we are
    // doing a multi query, match exact names. If we are doing a cell line query, only match
    // cell\_ids
    var pert_info = 'http://api.lincscloud.org/a2/pertinfo?callback=?';
    var params = {};
    if (search_type === "multi") {
      search_string = '["' + search_string.split(/[:, ]/).join('","') + '"]';
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$in":' + search_string + '}}',c:true};
    }
    if (search_type === "single" || search_type === undefined){
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$regex":"^' + search_string + '","$options":"i"}}',c:true};
    }
    if (search_type === "cell") {
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$regex":"","$options":"i"},"cell_id":"' + search_string + '"}', c:true};
    }

    // run the api request
    var self = this;
    var num_perts;
    $.getJSON(pert_info,params,function(perts) {
      if (perts === 0){
        num_perts = 0;
      }else{
        num_perts = perts.count;
      }
      var t = (new Date()).getTime();
      params = _.omit(params,'c');
      params = _.extend(params,{g:self.get('pert_type_field')});
      $.getJSON(pert_info, params, function(pert_types){
        self.set({count: num_perts, pert_types: pert_types, last_update: t});
      });
    });
  }
});

// # **PertDetailModel**

// A Backbone.Model that represents a single perturbagen's description.  The data
// model captures annotation data from compounds or genes.  To do this, the model
// uses CompoundDetailModel and GeneDetailModel under the hood and pulls in their
// attributes depending on how the model's fetch method is called

// `pert_detail_model = new PertDetailModel()`

Barista.Models.PertDetailModel = Backbone.Model.extend({
  // ### defaults
  // describes the model's default parameters.  This an incomplete list of defaults, only those
  // that are common to all perturbagens
  defaults: {
    cell_id: [],
    num_gold: null,
    num_inst: null,
    num_sig: null,
    pert_id: null,
    pert_iname: null,
    pert_type: null,
    sig_id: [],
    sig_id_gold: []
  },

  // ### compound_sub_model
  // a sub-model to be used when the PertDetailModel model needs to fetch Compound annotations
  compound_sub_model: new Barista.Models.CompoundDetailModel(),

  // ### gene_sub_model
  // a sub-model to be used when the PertDetailModel model needs to fetch Gene annotations
  gene_sub_model: new Barista.Models.GeneDetailModel(),

  // ### fetch
  // fetches new data from the pert_info API. depending on the model_type parameter,
  // the method calls the appropriate fetch method for the given sub model type and fills
  // the PertDetailModel's attributes with that of the sub model
  fetch: function(search_string, model_type){
      var self = this;
      var deferred = $.Deferred();
      switch (model_type){
      case "compound":
          this.compound_sub_model.fetch(search_string).then(function(attributes){
              self.clear().set(attributes);
              deferred.resolve();
          });
          break;
      case "gene":
          this.gene_sub_model.fetch(search_string).then(function(attributes){
              self.clear().set(attributes);
              deferred.resolve();
          });
          break;
      }
      return deferred;
  }
});

// # **PertModel**

// A Backbone.Model that represents a single perturbagen
// `pert_model = new PertModel()`
Barista.Models.PertModel = Backbone.Model.extend({
	// ### initialize
	// Overides the base Model's initialize method to set the model's cid to the pert_id of the perturbagen
	initialize: function(attributes, options) {
		this.cid = this.get('pert_id');
		var pert_type = this.get('pert_type');
		switch(pert_type){
			case "trt_cp": this.set({pert_type_label: '<span class="label" style="background-color: #E69F00">SMC</span>'}); break;
			case "trt_oe": this.set({pert_type_label: '<span class="label" style="background-color: #D55E00">OE</span>'}); break;
			case "trt_sh": this.set({pert_type_label: '<span class="label" style="background-color: #56B4E9">KD</span>'}); break;
			default: this.set({pert_type_label: '<span class="label" style="background-color: #BDBDBD">' + pert_type + '</span>'});
		}
  }
});
// # **ScatterPlotModel**
// A Backbone.Model to hold the information needed to make a simple scatter plot.  The model includes a title,
// x and y axis titles, x and y data, and an optional object for metadata on the points in the data.  The meta
// data object should contain attributes for each meta data category and an array of values matching the size
// of the points in the data.  for example:

//		meta_data = {'dose: [1,2,3]', timepoint: ['6H','6H','6H']}

// usage:

//		summly_result = new SummlyResultModel();
Barista.Models.ScatterPlotModel = Backbone.Model.extend({
	// ### defaults
	// set of model defaults

	// 1.  {String}  **title**  the title of the plot. Defaults to *""*
	// 2.  {String}  **x_axis_title**  the title of the x_axis. Defaults to *""*
	// 3.  {String}  **y_axis_title**  the title of the y_axis. Defaults to *""*
	// 4.  {Array}  **x_data**  an array of data for the x_axis. Defaults to *[]*
	// 5.  {Array}  **y_data**  an array of data for the y_axis. Defaults to *[]*
	// 1.  {Object}  **meta_data**  object containing meta data for the points in the plot. Defaults to *{}*
	defaults: {
		title: "",
		x_axis_title: "",
		y_axis_title: "",
		x_data: [],
		y_data: [],
		meta_data: {}
	}
});
// # **SigCountModel**

// A Backbone.Model that represents the count of a set of signatures.  The data model
// captures both the total count of signatures that meet a search criteria and the count
// of each annotation category for the set of signatures.

// optional arguments:

// 1.  {string}  **type_string**  the string of pert_types that will be search upon fetching data, defaults to *'["trt_sh","trt_oe"]'*

// `count_model = new SigCountModel({type_string: '["trt_sh","trt_oe"]'})`

Barista.Models.SigCountModel = Backbone.Model.extend({
  // ### defaults
  // describes the model's default parameters

  // 1.  {String}  **type_string**  the string of pert_types that will be search upon fetching data, defaults to *'["trt_sh","trt_oe"]'*
  // 2.  {Number}  **sig\_count**  the number of perturbagens matching an api query, defaults to *0*
  // 3.  {Array}  **sig\_types**  an array of objects representing sig\_type categories to keep track of, defaults to *[{}}]*
  // 4.  {String}  **sig\_type\_field**  a field name over which to look for pert_types.  This runs an aggregated count over the specified field name in the Connectivity Map database, defaults to *'pert_icollection'*
  // 5.  {Date}  **last\_update**  a timestamp of the latest model update, defaults to the current time
  defaults: {
    "type_string": '["trt_sh","trt_oe","trt_oe.mut"]',
    "count": 0,
    "pert_types": [{}],
    "pert_type_field": "pert_icollection",
    "last_update": (new Date()).getTime()
  },

  // ### fetch
  // fetches new data from the sig_info api.  the count and sig_types data
  // is replaced with new data coming from the api call
  fetch: function(search_string,search_type){
    // depending on the type of query we are making, set up the q param for the api call.
    // if we are doing a single query, match that query as a regular expression. If we are
    // doing a multi query, match exact names. If we are doing a cell line query, only match
    // cell\_ids
    var sig_info = 'http://api.lincscloud.org/a2/siginfo?callback=?';
    var params = {};
    if (search_type === "multi") {
      search_string = '["' + search_string.split(/[:, ]/).join('","') + '"]';
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$in":' + search_string + '}}',c:true};
    }
    if (search_type === "single" || search_type === undefined){
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$regex":"^' + search_string + '","$options":"i"}}',c:true};
    }
    if (search_type === "cell") {
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$regex":"","$options":"i"},"cell_id":"' + search_string + '"}', c:true};
    }

    // run the api request
    var self = this;
    var num_perts;
    $.getJSON(sig_info,params,function(perts) {
      if (perts === 0){
        num_perts = 0;
      }else{
        num_perts = perts.count;
      }
      var t = (new Date()).getTime();
      params = _.omit(params,'c');
      params = _.extend(params,{g:self.get('pert_type_field')});
      $.getJSON(sig_info, params, function(pert_types){
        self.set({count: num_perts, pert_types: pert_types, last_update: t});
      });
    });
  }
});
// # **SignatureModel**

// A Backbone.Model that represents a single signature
// `pert_model = new SignatureModel()`
Barista.Models.SignatureModel = Backbone.Model.extend({
	// ### initialize
	// Overides the base Model's initialize method to set the model's cid to the sig_id of the perturbagen
	initialize: function(attributes, options) {
		// set the unique collection identifier to match the sig_id
		this.cid = this.get('sig_id');
		
		// generate an html label for pert_type
		var pert_type = this.get('pert_type');
		switch(pert_type){
			case "trt_cp": this.set({pert_type_label: '<span class="label" style="background-color: #E69F00">SMC</span>'}); break;
			case "trt_oe": this.set({pert_type_label: '<span class="label" style="background-color: #D55E00">OE</span>'}); break;
			case "trt_sh": this.set({pert_type_label: '<span class="label" style="background-color: #56B4E9">KD</span>'}); break;
			this.set({pert_type_label: '<span class="label" style="background-color: #BDBDBD">' + pert_type + '</span>'});
		}

		// generate an html label for is_gold
		var is_gold = this.get('is_gold');
		if (is_gold){
			this.set({is_gold_label: '<span class="label" style="background-color: #F0E442; color:gray">Gold</span>'});
		}else{
			this.set({is_gold_label: '<span class="label">Not Gold</span>'});
		}
  }
});
// # **SummlyResultModel**

// A Backbone.Model that represents the a single CMap Summly result. A single
// result is composed of the connection between two pert_inames (a query and a target), 
// the component data that went into computing the summly result, and the statistics 
// of the summly computation

//		summly_result = new SummlyResultModel();
Barista.Models.SummlyResultModel = Backbone.Model.extend({
	// ### defaults
	// set up defaults for model values

	// 1.  {String}  **query**  the query perturbagen (pert_iname), defaults to *""*
	// 2.  {String}  **target**  the target perturbagen (pert_iname), defaults to *""*
	// 3.  {Number}  **summly_score**   summarized connectivity score across cell types, defaults to *-666*
	// 4.  {Number}  **summly_rank**  summarized percent rank across cell types, defaults to *-666*
	// 5.  {Number}  **specificity**  fraction of background queries that score/rank higher than the observed connection, defaults to *-666*
	// 6.  {Object}  **cell_line_scores**  the connectivity map scores in each cell line for the target perturbagen , defaults to *{}*
	defaults: {
		query: "",
		target: "",
		summly_score: -666,
		summly_rank: -666,
		specificity: -666,
		cell_line_scores: {}
	},

	// ### initialize
	// overides the base model's initialize method to set the model's cid to 
	// the summly_id
	initialize: function(attributes,options){
		this.cid = this.get('target');
		var pert_type = this.get('pert_type');
		switch(pert_type){
			case "trt_cp": this.set({pert_type_label: '<span class="label" style="background-color: #E69F00">SMC</span>'}); break;
			case "trt_oe": this.set({pert_type_label: '<span class="label" style="background-color: #D55E00">OE</span>'}); break;
			case "trt_sh": this.set({pert_type_label: '<span class="label" style="background-color: #56B4E9">KD</span>'}); break;
			default: this.set({pert_type_label: '<span class="label">' + pert_type + '</span>'});
		}
	}
});
// # **TickModel**

// A Backbone.Model that represents the data required to build a CMapTickView.  The model contains
// a data object that has keys for each row to display in the view and array values for each tick
// to display in each row. An example data object might look like this:

//			{PC3: [.23,-.28], MCF7: [-0.6]}

// example usage

//			tick_model = new TickModel();
Barista.Models.TickModel = Backbone.Model.extend({
	// ### defaults
	// set up defaults for model values

	// 1.  {String}  **title**  the title to use in the plot, defaults to *""*
	// 2.  {Object}  **data_object**  the data object to use when plotting. defualts to *{}*
	defaults: {
		title: "",
		data_object: {}
	}
});
// # **AnalysisHistoryCollection**
// A Backbone.Collection that represents a set of analysis history objects.  This collection is suitable for
// internal use in GridView.

// optional arguments:

// 1.  {Backbone.Model}  **model**  the model used for the collection objects. defaults to *PertModel*
// 2.  {String}  **url**  the url from which model data is fetched. defaults  to *'http://api.lincscloud.org/a2/pertinfo?callback=?'*
// 3.  {String}  **skip**  the skip parameter used in api calls when the collection is updated. defaults to *0*
// 4.  {Boolean}  **isLoading**  indicates wether or not the collection is in the middle of a fetch operation. defaults to *false*

Barista.Collections.AnalysisHistoryCollection = Backbone.Collection.extend({
    // #### model
    // the model used for the collection objects.
    model: Barista.Models.AnalysisHistoryModel,

    // #### url
    // the url from which model data is fetched
    url: 'http://api.lincscloud.org/compute_status?callback=?',

    // #### skip
    // the skip parameter used in api calls when the collection is updated.
    skip: 0,

    // #### isLoading
    // indicates wether or not the collection is in the middle of a fetch operation.
    isLoading: false,

    // ### maxCount
    // the maximum size of the collection. defaults to Infinity
    maxCount: Infinity,

    // ### user_id
    // the user_id to search jobs for. Forcing this to be set prevents us from searching other users jobs
    user: undefined,

    // ## getData
    // `AnalysisHistoryCollection.getData(search_string,search_type,limit)`

    // Gets additional data from the specified url and stores them as models in the collection

    // arguments
    //
    // 1.  {string}  **search\_string**  the string on which a regex search into the api at the collections url will be performed, defaults to *""*
    // 2.  {string}  **search\_type**  the type of search that will be performed, defaults to *"single"*
    // 3.  {number}  **limit**  the number of models to be fetched, defaults to *30*

    getData: function(search_string,search_type,limit){
        var self = this;
        // set **isLoading** to true so we don't constantly make api calls before the data comes back
        this.isLoading = true;

        // store the value of **search\_string**, **search\_type**, and **limit** on the collection object
        this.search_string = (search_string !== undefined) ? search_string : '';
        this.search_type = (search_type !== undefined) ? search_type : '';
        this.limit = (limit !== undefined) ? limit : 30;

        // set up the query parameter for user_id
        var user_q = "";
        if (self.user){
            user_q = '"user_id":"' + self.user + '",';
        }
        switch (search_type){
        case "job_id":
            this.q_param = '{' + user_q + '"job_id":{"$regex":"' + search_string + '", "$options":"i"}}';
            break;
        case "status":
            this.q_param = '{' + user_q + '"status":{"$regex":"' + search_string + '", "$options":"i"}}';
            break;
        case "tool_id":
            this.q_param = '{' + user_q + '"tool_id":{"$regex":"' + search_string + '", "$options":"i"}}';
            break;
        case "job_name":
            this.q_param = '{' + user_q + '"params.rpt":"' + search_string + '"}';
            break;
        case "user_id":
            this.q_param = '{' + user_q + '"user_id":{"$regex":"' + search_string + '", "$options":"i"}}';
            break;
        default:
            this.q_param = '{' + user_q + '"job_id":{"$regex":"' + search_string + '", "$options":"i"}}';
        }


        // build a parameter object for the api call
        var params = {q: this.q_param,
            l: this.limit,
            sk: this.skip,
            s: '{"_id":-1}'};

        // make the api call and store the results as individual models in the collection.
        // we don't remove old models in this case as we want to support continuous building
        // of the model list from a remote api.  On success, set **isLoading** back to false
        // and resolve a deferred that we set up as a return value
        var def = $.Deferred();
        $.getJSON(this.url, params, function(res){
            self.set(res,{remove: false});
            self.isLoading = false;
            def.resolve();
        });

        // make a second api call to find the maximum number of items in the collection
        // and set that as an attribute on it
        if (this.maxCount == Infinity){
            params = _.omit(params,['l','sk','s']);
            params = _.extend(params,{c: true});
            $.getJSON(this.url,params,function(res){
                self.maxCount = res.count;
            });
        }

        return def;
    }
});

// # **CellCollection**
// A Backbone.Collection that represents a set of cell types.  This collection is suitable for
// internal use in GridView.

// optional arguments:

// 1.  {Backbone.Model}  **model**  the model used for the collection objects. defaults to *PertModel*
// 2.  {String}  **url**  the url from which model data is fetched. defaults  to *'http://api.lincscloud.org/a2/pertinfo?callback=?'*
// 3.  {String}  **skip**  the skip parameter used in api calls when the collection is updated. defaults to *0*
// 4.  {Boolean}  **isLoading**  indicates wether or not the collection is in the middle of a fetch operation. defaults to *false*

// `pert_collection = new CellCollection({model: PertModel,
                                          // url: 'http://api.lincscloud.org/a2/pertinfo?callback=?',
                                          // skip: 0,
                                          // isLoading: false});`

Barista.Collections.CellCollection = Backbone.Collection.extend({
    // #### model
    // the model used for the collection objects.
    model: Barista.Models.CellModel,

    // #### url
    // the url from which model data is fetched
    url: 'http://api.lincscloud.org/a2/cellinfo?callback=?',

    // #### skip
    // the skip parameter used in api calls when the collection is updated.
    skip: 0,

    // #### isLoading
    // indicates wether or not the collection is in the middle of a fetch operation.
    isLoading: false,

    // ## getData
    // `PertCollection.getData(search_string,search_type,limit)`

    // Gets additional data from the specified url and stores them as models in the collection

    // arguments
    //
    // 1.  {string}  **search\_string**  the string on which a regex search into the api at the collections url will be performed, defaults to *""*
    // 2.  {string}  **search\_column**  the column to query the search_string against, defaults to "cell_id"
    // 3.  {string}  **search\_type**  the type of search that will be performed, defaults to *"single"*
    // 4.  {number}  **limit**  the number of models to be fetched, defaults to *30*

    getData: function(search_string,search_column,limit){
        var self = this;
        // set **isLoading** to true so we don't constantly make api calls before the data comes back
        this.isLoading = true;

        this.search_string = (search_string !== undefined) ? search_string : '';
        this.search_column = (search_column !== undefined) ? search_column : 'cell_id';
        //TODO big hack to adapt to GridView implementation
        if (this.search_column == 'single') {
          this.search_column = 'cell_id';
        }
        // this.search_type = (search_type !== undefined) ? search_type : '';
        this.limit = (limit !== undefined) ? limit : 30;

        if (this.search_column == 'mutations'){
            this.q_param = '{"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"mutations":"' + this.search_string + '"}';
        }else{
            this.q_param = '{"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"' + this.search_column + '":' + '{"$regex":"^' + this.search_string + '","$options":"i"}}';
        }

        // build a parameter object for the api call
        // TODO-remove: alert(this.q_param);
        var params = {q: this.q_param,
            l: this.limit,
            // s: this.s_param, // no sorting yet
            sk: this.skip};

        $.getJSON(this.url, params, function(res){
            self.set(res,{remove: false});
            self.isLoading = false;
            self.trigger("fetch");
        });
    }
});

// # **GenericJSONCollection**
// A Backbone.Collection that represents and arbitrary set of objects stored
// in a JSON file. The JSON file is assumed to contain a top level array
// containing objects.  Each object in the array is modeled as a base
// Backbone.Model inside of the collection

// optional arguments:

// 1.  {Backbone.Model}  **model**  the model used for the collection objects. defaults to *PertModel*
// 2.  {String}  **url**  the url from which model data is fetched. defaults  to *'data.json'*
// 3.  {String}  **skip**  the skip parameter used in method calls when the collection is updated. defaults to *0*
// 4.  {Boolean}  **isLoading**  indicates wether or not the collection is in the middle of a fetch operation. defaults to *false*

//		pert_collection = new PertCollection({model: PertModel,
//											url: 'http://api.lincscloud.org/a2/pertinfo?callback=?',
//											skip: 0,
//											isLoading: false});
Barista.Collections.GenericJSONCollection = Backbone.Collection.extend({
	// ### model
	// the model used for collection objects
	model: Barista.Models.PertModel,

	// #### url
    // the url from which model data is fetched
    url: 'data.json',

    // #### skip
    // the skip parameter used in api calls when the collection is updated. 
    skip: 0,

    // #### isLoading
    // indicates wether or not the collection is in the middle of a fetch operation. 
    isLoading: false,

    // ### maxCount
    // the maximum size of the collection. defaults to Infinity
    maxCount: Infinity,

    // ## getData
    // `GenericJSONCollection.getData(search_string,search_type,limit)`

    // Gets additional data from the specified url and stores them as models in the collection

    // arguments
    // 
    // 1.  {string}  **search\_string**  the string on which a regex search into the api at the collections url will be performed, defaults to *""*
    // 2.  {string}  **search\_type**  the type of search that will be performed, defaults to *"single"*
    // 3.  {number}  **limit**  the number of models to be fetched, defaults to *30*
    getData: function(search_string,search_type,limit){
        var self = this;
        // set **isLoading** to true so we don't constantly make api calls before the data comes back
        this.isLoading = true;

        // store the value of **search\_string**, **search\_type**, and **limit** on the collection object
        this.search_string = (search_string !== undefined) ? search_string : '';
        this.search_type = (search_type !== undefined) ? search_type : '';
        this.limit = (limit !== undefined) ? limit : 30;

        // fetch data from the given url.  If the url attribute is a string, fetch data via an ajax
        // request. Read each returned item in the response into a new PertModel.  If it is an object, 
        // assume it is an array of data and read each array item into a new PertModel
        if (typeof(this.url) == 'object'){
            this.url.forEach(function(o){self.add(new Barista.Models.PertModel(o));});
            // set the collection's maxCount attribute to the length of the collection
            this.maxCount = this.models.length;
        }else{
            $.getJSON(this.url,function(res){
                res.forEach(function(o){
                    self.add(new PertModel(o));
                });
                // set the collection's maxCount attribute to the length of the collection
                this.maxCount = this.models.length;
            });
        }
	}
});
// # **PertCollection**
// A Backbone.Collection that represents a set of perturbagens.  This collection is suitable for
// internal use in GridView.

// optional arguments:

// 1.  {Backbone.Model}  **model**  the model used for the collection objects. defaults to *PertModel*
// 2.  {String}  **url**  the url from which model data is fetched. defaults  to *'http://api.lincscloud.org/a2/pertinfo?callback=?'*
// 3.  {String}  **skip**  the skip parameter used in api calls when the collection is updated. defaults to *0*
// 4.  {Boolean}  **isLoading**  indicates wether or not the collection is in the middle of a fetch operation. defaults to *false*

// `pert_collection = new PertCollection({model: PertModel,
                                          // url: 'http://api.lincscloud.org/a2/pertinfo?callback=?',
                                          // skip: 0,
                                          // isLoading: false});`

Barista.Collections.PertCollection = Backbone.Collection.extend({
    // #### model
    // the model used for the collection objects.
    model: Barista.Models.PertModel,

    // #### url
    // the url from which model data is fetched
    url: 'http://api.lincscloud.org/a2/pertinfo?callback=?',

    // #### skip
    // the skip parameter used in api calls when the collection is updated.
    skip: 0,

    // #### isLoading
    // indicates wether or not the collection is in the middle of a fetch operation.
    isLoading: false,

    // ### maxCount
    // the maximum size of the collection. defaults to Infinity
    maxCount: Infinity,

    // ## getData
    // `PertCollection.getData(search_string,search_type,limit)`

    // Gets additional data from the specified url and stores them as models in the collection

    // arguments
    //
    // 1.  {string}  **search\_string**  the string on which a regex search into the api at the collections url will be performed, defaults to *""*
    // 2.  {string}  **search\_type**  the type of search that will be performed, defaults to *"single"*
    // 3.  {number}  **limit**  the number of models to be fetched, defaults to *30*

    getData: function(search_string,search_type,limit){
        var self = this;
        // set **isLoading** to true so we don't constantly make api calls before the data comes back
        this.isLoading = true;

        // store the value of **search\_string**, **search\_type**, and **limit** on the collection object
        this.search_string = (search_string !== undefined) ? search_string : '';
        this.search_type = (search_type !== undefined) ? search_type : '';
        this.limit = (limit !== undefined) ? limit : 30;

        // depending on the type of query we are making, set up the q param for the api call.
        // if we are doing a single query, match that query as a regular expression. If we are
        // doing a multi query, match exact names. If we are doing a cell line query, only match
        // cell\_ids
        if (search_type === "single" || search_type === undefined){
            this.q_param = '{"pert_iname":{"$regex":"^' + search_string + '","$options":"i"},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}';
        }
        if (search_type === "multi"){
            search_string = '["' + search_string.split(":").join('","') + '"]';
            this.q_param = '{"pert_iname":{"$in":"' + search_string + '"},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}';
        }
        if (search_type === "cell"){
            this.q_param = '{"cell_id":"' + search_string + '"}';
        }

        // set up the sorting paramter for the api call
        this.s_param = '{"pert_iname":1}';

        // set up a filtering parameter for the api call
        this.f_param = '{"pert_iname":1,"pert_type":1,"pert_id":1,"num_sig":1}';

        // build a parameter object for the api call
        var params = {q: this.q_param,
            l: this.limit,
            s: this.s_param,
            f: this.f_param,
            sk: this.skip};

        // make the api call and store the results as individual models in the collection.
        // we don't remove old models in this case as we want to support continuous building
        // of the model list from a remote api.  On success, set **isLoading** back to false
		$.getJSON(this.url, params, function(res){
            self.set(res,{remove: false});
            self.isLoading = false;
        });

        // make a second api call to find the maximum number of items in the collection
        // and set that as an attribute on it
        if (this.maxCount == Infinity){
            params = _.omit(params,['l','s','f','sk']);
            params = _.extend(params,{c: true});
            $.getJSON(this.url,params,function(res){
                self.maxCount = res.count;
            });
        }
    }
});

// # **SignatureCollection**
// A Backbone.Collection that represents a set of signatures.  This collection is suitable for 
// internal use in GridView.

// optional arguments:

// 1.  {Backbone.Model}  **model**  the model used for the collection objects. defaults to *PertModel*
// 2.  {String}  **url**  the url from which model data is fetched. defaults  to *'http://api.lincscloud.org/a2/siginfo?callback=?'*
// 3.  {String}  **skip**  the skip parameter used in api calls when the collection is updated. defaults to *0*
// 4.  {Boolean}  **isLoading**  indicates wether or not the collection is in the middle of a fetch operation. defaults to *false*

// `pert_collection = new SignatureCollection({model: PertModel,
                                          // url: 'http://api.lincscloud.org/a2/siginfo?callback=?',
                                          // skip: 0,
                                          // isLoading: false});`

Barista.Collections.SignatureCollection = Backbone.Collection.extend({
    // #### model
    // the model used for the collection objects. 
    model: Barista.Models.SignatureModel,

    // #### url
    // the url from which model data is fetched
    url: 'http://api.lincscloud.org/a2/siginfo?callback=?',

    // #### skip
    // the skip parameter used in api calls when the collection is updated. 
    skip: 0,

    // #### isLoading
    // indicates wether or not the collection is in the middle of a fetch operation. 
    isLoading: false,

    // ### maxCount
    // the maximum size of the collection. defaults to Infinity
    maxCount: Infinity,

    // ### gold_only
    // boolean flag telling the collection to only include gold Connectivity Map signatures
    gold_only: true,

    // ### getData
    // `SignatureCollection.getData(search_string,search_type,limit)`

    // Gets additional data from the specified url and stores them as models in the collection

    // arguments
    // 
    // 1.  {string}  **search\_string**  the string on which a regex search into the api at the collections url will be performed, defaults to *""*
    // 2.  {string}  **search\_type**  the type of search that will be performed, defaults to *"single"*
    // 3.  {number}  **limit**  the number of models to be fetched, defaults to *30*

    getData: function(search_string,search_type,limit){
        var self = this;
        // set **isLoading** to true so we don't constantly make api calls before the data comes back
        this.isLoading = true;

        // store the value of **search\_string**, **search\_type**, and **limit** on the collection object
        this.search_string = (search_string !== undefined) ? search_string : "";
        this.search_type = (search_type !== undefined) ? search_type : "";
        this.limit = (limit !== undefined) ? limit : 30;

        // depending on the type of query we are making, set up the q param for the api call.
        // if we are doing a single query, match that query as a regular expression. If we are
        // doing a multi query, match exact names. If we are doing a cell line query, only match
        // cell\_ids
        if (search_type === "single" || search_type === ""){
            if (this.gold_only){
                this.q_param = '{"pert_id":"' + search_string + '","is_gold":1}';
            }else{
                this.q_param = '{"pert_id":"' + search_string + '"}';
            }
        }
        if (search_type === "multi"){
            search_string = '["' + search_string.split(":").join('","') + '"]';
            if (this.gold_only){
                this.q_param = '{"pert_id":{"$in":"' + search_string + '"},"is_gold":1,"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}';
            }else{
                this.q_param = '{"pert_id":{"$in":"' + search_string + '"},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}';
            }
        }
        if (search_type === "cell"){
            if (this.gold_only){
                this.q_param = '{"cell_id":"' + search_string + '","is_gold":1}';
            }else{
                this.q_param = '{"cell_id":"' + search_string + '"}';
            }
        }

        // set up the sorting paramter for the api call
        this.s_param = '{"pert_id":1}';

        // set up a filtering parameter for the api call
        this.f_param = '{"pert_id":1,"pert_type":1,"pert_iname":1,"pert_itime":1,"pert_idose":1,"cell_id":1,"sig_id":1,"is_gold":1,"distil_ss":1,"distil_cc_q75":1,"ngenes_modulated_dn_lm":1,"ngenes_modulated_up_lm":1}';

        // build a parameter object for the api call
        var params = {q: this.q_param,
            l: this.limit,
            s: this.s_param,
            f: this.f_param,
            sk: this.skip};

        // make the api call and store the results as individual models in the collection.
        // we don't remove old models in this case as we want to support continuous building
        // of the model list from a remote api.  On success, set **isLoading** back to false
		var getData_promise = $.getJSON(this.url, params, function(res){
            self.set(res,{remove: false});
            self.isLoading = false;
        });

        // make a second api call to find the maximum number of items in the collection
        // and set that as an attribute on it
        if (this.maxCount == Infinity){
            params = _.omit(params,['l','s','f','sk']);
            params = _.extend(params,{c: true});
            $.getJSON(this.url,params,function(res){
                self.maxCount = res.count;
            });
        }

        // return the getData_promise for use with downstream functions if we want
        return getData_promise;
    }
});
// # **SummlyResultCollection**
// A Backbone.Collection that represents a set of CMap Summly results.  This collection is suitable for
// internal use in GridView.

// optional arguments:

// 1.  {Backbone.Model}  **model**  the model used for the collection objects. defaults to *SummlyResultModel*
// 2.  {String}  **url**  the url from which model data is fetched. defaults  to *'http://api.lincscloud.org/a2/summlyinfo?callback=?'*
// 3.  {String}  **skip**  the skip parameter used in api calls when the collection is updated. defaults to *0*
// 4.  {Boolean}  **isLoading**  indicates wether or not the collection is in the middle of a fetch operation. defaults to *false*

//		pert_collection = new PertCollection({model: PertModel,
//											url: 'http://api.lincscloud.org/a2/pertinfo?callback=?',
//											skip: 0,
//											isLoading: false});

Barista.Collections.SummlyResultCollection = Backbone.Collection.extend({
	// ### model
	// the model used for collection objects
	model: Barista.Models.SummlyResultModel,

	// #### url
    // the url from which model data is fetched
    url: 'http://api.lincscloud.org/a2/pertinfo?callback=?',

    // #### skip
    // the skip parameter used in api calls when the collection is updated.
    skip: 0,

    // #### isLoading
    // indicates wether or not the collection is in the middle of a fetch operation.
    isLoading: false,

    // ### maxCount
    // the maximum size of the collection. defaults to Infinity
    maxCount: Infinity,

    // ## getDataMock
    //			PertCollection.getDataMock(limit);

    // Generates additional fake data objects and stores them as models in the collection

    // arguments
    //
    // 1.  {number}  **limit**  the number of models to be fetched, defaults to *30*
    getData: function(search_string,search_type,limit){
		var self = this;
		// set **isLoading** to true so we don't constantly make api calls before the data comes back
		this.isLoading = true;

		// store the value of **search\_string**, **search\_type**, and **limit** on the collection object
        this.search_string = search_string;
        this.search_type = search_type;
        this.limit = (limit !== undefined) ? limit : 30;

		// depending on the type of query we are making, set up the q param for the api call.
        // if we are doing a single query, match that query as a regular expression. If we are
        // doing a multi query, match exact names. If we are doing a cell line query, only match
        // cell\_ids
        if (search_type === "single" || search_type === undefined){
            this.q_param = '{"pert_iname":{"$regex":"' + "" + '","$options":"i"}}';
        }
        if (search_type === "multi"){
            search_string = '["' + search_string.split(":").join('","') + '"]';
            this.q_param = '{"pert_iname":{"$in":"' + search_string + '"}}';
        }

		// build a parameter object for the api call
        var params = {q: this.q_param,
            l: this.limit,
            s: '{"num_gold":1}',
            sk: Math.round(Math.random() * (40000 - 30))};

		// make the api call and store the results as individual models in the collection.
        // we don't remove old models in this case as we want to support continuous building
        // of the model list from a remote api.  On success, set **isLoading** back to false
		$.getJSON(this.url,params,function(res){
			var data = [];
			var cell_lines = ["ASC","HA1E","HCC515","NEU","NPC","PHH","SKL",
							"MCF7","HEPG2","VCAP","A549","A375","HT29","PC3"];
			res.forEach(function(o){
				var random_lines = cell_lines.slice(0, Math.round(Math.random()*14) + 1);
				var random_line_scores = {};
				random_lines.forEach(function(line){
					random_line_scores[line] = [Math.random()*2 - 1];
				});
				data.push({query: search_string,
							target: o.pert_iname,
							pert_type: o.pert_type,
							summly_score: Math.random(),
							summly_rank: Math.random(),
							specificity: Math.random(),
							cell_line_scores: random_line_scores});
			});
			self.add(data);
			self.isLoading = false;
		});

        // make a second api call to find the maximum number of items in the collection
        // and set that as an attribute on it
        if (this.maxCount < Infinity){
            params = _.omit(params,['l','s','f','sk']);
            params = _.extend(params,{c: true});
            $.getJSON(this.url,params,function(res){
                self.maxCount = res.count;
            });
        }
    }
});

// # **BaristaBaseView**
// A Backbone.View the serves as the base view for other views in the barista library.  BaristaBaseView provides common
// functionality for views including standard initialization, redraw, render, template compilation, and png export functions.
// This view by itself will construct a single panel with a png export option, but it is meant to be used as the base view
// that more complex views extend

// basic use:

//		base_view = new BaristaBaseView();

// optional arguments:

// 1.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 2.  {string}  **fg\_color**  the hex color code to use as the foreground color of the view, defaults to *#1b9e77*
// 3.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"col-lg-12"*
// 4.  {Number}  **plot_height**  the height of the plot in pixels, defaults to *120*

//		base_view = new BaristaBaseView({el: $("target_selector",
//									bg_color:"#ffffff",
//									fg_color: "#1b9e77",
//									span_class: "col-lg-12",
//									plot_height: 120});

// to extend BaristaBaseView, use

//		extended_view = BaristaBaseView.extend({
//										...
//										});
Barista.Views.BaristaBaseView = Backbone.View.extend({
	// ### initialize
	// initialize the view.  Views that extend BaristaBaseView should impliment code overiding this method.
	// If extended BaristaBaseViews want to use the built in base_initialize method of BaristaBaseView, they should
	// call it in their redraw method.  As an example:

	//		initialize: function(){
	//					this.base_initialize();
	//					//your code here
	//					}
	//

	initialize: function(){
		this.base_initialize();
	},

	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "BaristaBaseView",

	// ### model
	// default model to Backbone.Model.  This default is only provided to make the view
	// functional as a un-extended standalone.  An appropriate data model should be
	// supplied for all views that extend BaristaBaseView
	model: new Backbone.Model(),

	// ### base_initialize
	// overide the default Backbone.View initialize method to handle optional arguments, compile the view
	// template, bind model changes to view updates, and render the view.  This method is provided so it
	// can be used in view that extend BaristaBaseView
	base_initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#ffffff";
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : "#1b9e77";

		// set up the default height for the plot
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 120;

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "col-lg-12";

		// bind render to model changes
		this.listenTo(this.model,'change', this.update);

		// compile the default template for the view
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).outerWidth();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// make sure that the top level div target is set to hide overflow content
		$("#" + this.div_string).css("overflow","hidden");

		// render the vis
		this.render();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.render();} );

		return this;
	},

	// ### compile_template
	// use Handlebars to compile the template for the view
	compile_template: function(){
		var self = this;
		this.div_string = 'barista_view' + new Date().getTime();
		this.compiled_template = BaristaTemplates.d3_target;
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	// ### render
	// completely render the view. Updates both static and dynamic content in the view.  Views
	// that extend BaristaBaseView should impliment draw code overiding this method.  If extended
	// BaristaBaseViews want to use the built in base_render method of BaristaBaseView, they should
	// call it in their render method.  As an example:

	//		render: function(){
	//					this.base_render();
	//					//your code here
	//					}
	//

	render: function(){
		this.base_render();
		return this;
	},

	// ### base_render
	// completely redraw the view. Updates both static and dynamic content in the view.
	// This method is provided so it can be used in view that extend BaristaBaseView
	base_render: function(){
		// stuff this into a variable for later use
		var self = this;

		// check to see if the container is visible, if not, make it visible, but transparent so we draw it with
		// the proper dimensions
		if (this.$el.is(":hidden")){
			this.$el.animate({opacity:0},1);
			this.$el.show();
		}

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		this.vis.selectAll('.controls_layer').data([]).exit().remove();
		this.controls_layer = this.vis.append("g").attr("class", "controls_layer");

		// set up the panel's width and height
		this.width = $("#" + this.div_string).outerWidth();
		this.height = $("#" + this.div_string).outerHeight();

		// rescale the width of the vis
		this.vis.transition().attr("width",this.width);
		this.vis.transition().attr("height",this.height);

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// add a png export overlay
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",10)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});

		return this;
	},

	// ### update
	// update the dynamic potions of the view
	update: function(){
		return this;
	},

	// ### savePng
	// save the current state of the view into a png image
	save_png: function(){
		// do any pre save work that the child class may require
		this.save_png_pre();

		//set the animate the div containing the view by applying and then removing
		// css classes that defined the transitions we want
		var $div = $("#" + this.div_string);
		$div.addClass("barista-base-view");
		$div.toggleClass("exporting");
		setTimeout(function(){$div.toggleClass("exporting");},500);

		// build a canvas element to store the image temporarily while we save it
		var width = this.width;
		var height = this.height;
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.vis.selectAll(".no_png_export");
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.vis.node().parentNode.innerHTML;
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = this.name + new Date().getTime() + ".png";
		if (canvas.toBlob){
			canvas.toBlob(function(blob){
				saveAs(blob,filename);
				});
		}
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);

		// do any post save work that the child class may require
		this.save_png_post();
	},

	// ### save_png_pre
	// dummy method that should be overiden if there is any work to do before
	// saving the png image of the view.  For example, removing elements that
	// will not render properly could be done before saving the image.  This
	// function is called as the first step of *save_png*
	save_png_pre: function(){},

	// ### save_png_post
	// dummy method that should be overiden if there is any work to do after
	// saving the png image of the view.  For example, restoring elements that
	// were removed before saving could be done after saving the image.  This
	// function is called as the last step of *save_png*
	save_png_post: function(){},


	// ### hide
	// hides the view by dimming the opacity and hiding it in the DOM

	// arguments

	// 1.  {number}  **duration**  the time in ms for the hide animation. defualts to *1*

	//		pert_detail_view.hide(duration);
	hide: function(duration){
		duration = (duration !== undefined) ? duration : 1;
		var self = this;
		this.$el.animate({opacity:0},duration);
		setTimeout(function(){self.$el.hide()},duration);
	},

	// ### show
	// shows the view by brightening the opacity and showing it in the DOM

	// arguments

	// 1.  {number}  **duration**  the time in ms for the show animation. defualts to *1*

	//		pert_detail_view.show(duration);
	show: function(duration){
		duration = (duration !== undefined) ? duration : 1;
		this.$el.show();
		this.$el.animate({opacity:1},duration);
	}
});

// # **BarPlotView**
// A Backbone.View that displays a scatter plot.  the view's model is assumed to have the same defaults
// as specified in **BarPlotModel**

// basic use:

//		bar_plot_view = new BarPlotView();

// optional arguments:

// 1.  {String}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 2.  {String}  **fg\_color**  the hex color code to use as the foreground color of the view, defaults to *#1b9e77*
// 3.  {String}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"span12"*
// 4.  {Array}  **range**  a two element array specifying the plotting bounds of the plot, defaults to *[min(data),max(data)]*
// 5.  {Bool}  **log**  if set to true, plots the data on a log scale, defaults to *false*
// 6. {Number} **min_lock** if set, locks the minimum of the range at the given value. Ignored if range is set. defaults to *undefined*
// 7. {Number} **max_lock** if set, locks the maximum of the range at the given value. Ignored if range is set. defaults to *undefined*
// 8. {Bool} **min_expand** if set, allows the minimum of the range to expand if data is found below it. defaults to *false*
// 9. {Bool} **max_expand** if set, allows the maximum of the range to expand if data is found above it. defaults to *false*
// 10. {String} **orientation** sets the orientation of the bar plot. options are 'horizontal' or 'vertical'. defaults to *'vertical'*
// 11.  {Number}  **plot_height**  the height of the plot in pixels, defaults to *120*

//		bar_plot_view = new BarPlotView({el: $("target_selector",
//									bg_color:"#ffffff", 
//									fg_color: "#1b9e77",
//									span_class: "span4",
//									scale_by: undefined,
//									range: undefined,
//									log: false,
//									min_lock: undefined,
//									max_lock: undefined,
//									min_expand: false,
//									max_expand: false,
//									plot_height: 120});

Barista.Views.BarPlotView = Barista.Views.BaristaBaseView.extend({
	// ### model
	// set up the view's default model
	model: new Barista.Models.BarPlotModel(),

	// ### initialize
	// overide the default Backbone.View initialize method to handle optional arguments, compile the view
	// template, bind model changes to view updates, and render the view
	initialize: function(){
		// set up x and y range and determine if are going to draw the axes dynamically
		this.range = (this.options.range !== undefined) ? this.options.x_range : undefined;
		this.dynamic_range = (this.range === undefined) ? true : false;

		// set up axis expansion and lock features
		this.min_lock = (this.options.min_lock !== undefined) ? this.options.min_lock : undefined;
		this.max_lock = (this.options.max_lock !== undefined) ? this.options.max_lock : undefined;

		this.min_expand = (this.options.min_expand !== undefined) ? this.options.min_expand : undefined;
		this.max_expand = (this.options.max_expand !== undefined) ? this.options.max_expand : undefined;

		// set up log flag
		this.log = (this.options.log !== undefined) ? this.options.log : false;

		// set up the margin
		this.margin = (this.options.margin !== undefined) ? this.options.margin : 50;

		// set up the orientation
		this.orientation = (this.options.orientation !== undefined) ? this.options.orientation : 'vertical';

		// set up x and y ranges
		this.set_ranges();

		// set up x and y scaling
		this.set_scales();		

		// run BaristaBaseView's base_initialize method to handle boilerplate view construction
		// and initial view rendering
		this.base_initialize();

		// build Axes
		this.build_axes();

	},

	// ### redraw
	// completely redraw the view. Updates both static and dynamic content in the view.
	render: function(){
		this.base_render();
		this.init_plot();
		this.update();
	},

	// ### init_plot
	// initialize the static parts of the view's panel
	init_plot: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up x and y ranges
		this.set_ranges();

		// set up x and y scaling
		this.set_scales();		

		// build Axes
		this.build_axes();

		// style the axis
		this.style_axes();

		// render the bar data
		if (this.orientation === 'horizontal'){
			this.render_horizontal_bars();
		}else{
			this.render_vertical_bars();
		}

		// plot the title
		this.bg_layer.selectAll('.title').data([]).exit().remove();
		this.bg_layer.selectAll('.title').data([1]).enter().append('text')
			.attr("class","title title")
			.attr("x",this.width/2)
			.attr("y",this.margin/2)
			.style("text-anchor","middle")
			.text(this.model.get('title'));
	},

	// ### update
	// update the dynamic potions of the view
	update: function(){
		var self = this;
		
		// get model data
		this.data = this.model.get('data');
		
		// set up x and y ranges
		this.set_ranges();

		// set up x and y scaling
		this.set_scales();

		// build Axes
		this.build_axes();

		// update the bar data
		if (this.orientation === 'horizontal'){
			this.update_horizontal_bars();
		}else{
			this.update_vertical_bars();
		}
	},

	// ### set_ranges
	// utility function used to get the x and y ranges used in the plot
	set_ranges: function(){
		var data,min,max;
		// calculate the range. If we need to caluclate it dynamically, check the lock and expand
		// parameters for the axis
		if (this.dynamic_range === true){
			data = this.model.get('data');

			// if the data is of length larger than 1, calculate the range, otherwise set the range to [0,0]
			if (data.length > 0 ){
				// check the min lock and expand flags and report the min of the range accordingly
				if (this.min_lock === undefined){
					min = _.min(data);
				}else{
					if (this.min_expand){
						data_min = _.min(data);
						min = (this.min_lock > data_min) ? data_min : this.min_lock;
					}else{
						min = this.min_lock;
					}
				}

				// check the max lock and expand flags and report the max of the range accordingly
				if (this.max_lock === undefined){
					max = _.max(data);
				}else{
					if (this.max_expand){
						data_max = _.max(data);
						max = (this.max_lock < data_max) ? data_max : this.max_lock;
					}else{
						max = this.max_lock;
					}
				}
				this.range = [min,max];
			}else{
				this.range = [0,0];
			}
		}
	},

	// ### set_scales
	// utility function used to get the x and y scales used in the plot
	set_scales: function(){
		if (this.log){
			this.x_scale=d3.scale.log().domain([this.range[0],this.range[1]]).range([this.margin, this.width - this.margin]);
		}else{
			this.x_scale=d3.scale.linear().domain([this.range[0],this.range[1]]).range([this.margin, this.width - this.margin]);
		}
		if (this.log){
			this.y_scale=d3.scale.log().domain([this.range[1],this.range[0]]).range([this.margin, this.height - this.margin]);
		}else{
			this.y_scale=d3.scale.linear().domain([this.range[1],this.range[0]]).range([this.margin, this.height - this.margin]);
		}
	},

	// ### build_axes
	// utility function used to build x and y axes
	build_axes: function(){
		var self = this;

		this.xAxis = d3.svg.axis()
			.scale(this.x_scale)
			.orient("bottom");
		this.yAxis = d3.svg.axis()
			.scale(this.y_scale)
			.orient("left");

		// plot the appropriate axis depending on the orientation of the plot
		this.bg_layer.selectAll('.axis').data([]).exit().remove();
		if (this.orientation === 'horizontal'){
				self.bg_layer.append("g")
					.attr("class", "axis x-axis")
					.attr("transform", "translate(0," + (self.height - self.margin) + ")")
					.call(self.xAxis);
		}else{
			self.bg_layer.append("g")
				.attr("class", "axis y-axis")
				.attr("transform", "translate(" + self.margin + ",0)")
				.call(self.yAxis);
		}
	},

	// ### style axes
	// utility function to apply custom styles to axis components
	style_axes: function(){
		this.vis.selectAll('.axis').selectAll("path")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("line")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("text")
			.style("font-family","sans-serif")
			.style("font-size","11px");
	},

	// ### render_vertical_bars
	// draws bars in vertical mode
	render_vertical_bars: function(){
		var self = this;
		// get the model's data
		this.data = this.model.get('data');

		// figure out how wide each bar will be
		this.x_domain = this.x_scale.range();
		this.bar_width = (this.x_domain[1] - this.x_domain[0]) / this.data.length;

		// plot the data points
		this.bg_layer.selectAll('.data_bar').data([]).exit().remove();
		this.bg_layer.selectAll('.data_bar').data(this.data).enter().append('rect')
			.attr("class","data_bar")
			.attr("x",function(d,i){return self.bar_width*i + self.margin;})
			.attr("y",this.y_scale(this.range[0]))
			.attr("width",this.bar_width)
			.attr("height",0)
			.attr("opacity",0)
			.attr("stroke","white")
			.attr("fill",this.fg_color);

		// plot the x axis title
		this.bg_layer.selectAll('.x_axis_label').data([]).exit().remove();
		this.bg_layer.selectAll('.x_axis_label').data([1]).enter().append('text')
			.attr("class","x_axis_label axis_label")
			.attr("x",this.width/2)
			.attr("y",this.height-10)
			.style("text-anchor","middle")
			.text(this.model.get('axis_title'));

		// plot the labels if they are there
		var labels = this.model.get('data_labels');
		if (labels.length > 0){
			this.bg_layer.selectAll('.bar_label').data([]).exit().remove();
			this.bg_layer.selectAll('.bar_label').data(labels).enter().append('text')
				.attr('class','bar_label')
				.attr("x",function(d,i){return self.bar_width*i + self.margin + self.bar_width/2;})
				.attr('y',this.height - this.margin)
				.attr('dy','1em')
				.attr('opacity',0)
				.style("text-anchor","middle")
				.text(function(d){return d;});
		}

		// style the axis
		this.style_axes();
	},

	// ### render_horizontal_bars
	// draws bars in horizontal mode
	render_horizontal_bars: function(){
		var self = this;
		// get the model's data
		this.data = this.model.get('data');

		// figure out how tall each bar will be
		this.y_domain = this.y_scale.range();
		this.bar_height = (this.y_domain[1] - this.y_domain[0]) / this.data.length;

		// plot the data points
		this.bg_layer.selectAll('.data_bar').data([]).exit().remove();
		this.bg_layer.selectAll('.data_bar').data(this.data).enter().append('rect')
			.attr("class","data_bar")
			.attr("y",function(d,i){return self.bar_height*i;})
			.attr("x",this.margin + 2)
			.attr("height",this.bar_height)
			.attr("width",0)
			.attr("opacity",0)
			.attr("stroke","white")
			.attr("fill",this.fg_color);

		// plot the x axis title
		this.bg_layer.selectAll('.x_axis_label').data([]).exit().remove();
		this.bg_layer.selectAll('.x_axis_label').data([1]).enter().append('text')
			.attr("class","x_axis_label axis_label")
			.attr("x",this.width/2)
			.attr("y",this.height-10)
			.style("text-anchor","middle")
			.text(this.model.get('axis_title'));
	},

	// ### update_vertical_bars
	// updates the data in the bars in vertical orientation
	update_vertical_bars: function(){
		var self = this;
		// build Axes
		this.build_axes();

		// figure out how wide each bar will be
		this.x_domain = this.x_scale.range();
		this.bar_width = (this.x_domain[1] - this.x_domain[0]) / this.data.length;

		// plot new data points
		var bar_selection = this.bg_layer.selectAll('.data_bar').data(this.data);
		bar_selection.enter().append('rect')
			.attr("class","data_bar")
			.attr("x",function(d,i){return self.bar_width*i + self.margin;})
			.attr("y",this.y_scale(this.range[0]))
			.attr("width",this.bar_width)
			.attr("height",0)
			.attr("opacity",0)
			.attr("stroke","white")
			.attr("fill",this.fg_color);

		// transition points
		bar_selection.transition().duration(500)
			.attr("x",function(d,i){return self.bar_width*i + self.margin;})
			.attr("y",this.y_scale)
			.attr("width",this.bar_width)
			.attr("height",function(d){return self.y_scale(self.range[0]) - self.y_scale(d)})
			.attr("opacity",1);

		// remove excess points 
		bar_selection.exit().remove();

		// update the labels if they are there
		var labels = this.model.get('data_labels');
		if (labels.length > 0){
			var bar_label_selection = this.bg_layer.selectAll('.bar_label').data(labels);
			bar_label_selection.enter().append('text')
				.attr('class','bar_label')
				.attr("x",function(d,i){return self.bar_width*i + self.margin + self.bar_width/2;})
				.attr('y',this.height - this.margin)
				.attr('dy','1em')
				.attr('opacity',0)
				.style("text-anchor","middle")
				.text(function(d){return d;});

			bar_label_selection.transition().duration(500)
				.attr("x",function(d,i){return self.bar_width*i + self.margin + self.bar_width/2;})
				.attr('y',this.height - this.margin)
				.attr('dy','1em')
				.attr('opacity',1);

			bar_label_selection.exit().remove();
		}else{
			this.bg_layer.selectAll('.bar_label').data([]).exit().remove();
		}

		// transition the axes
		this.vis.selectAll('.y-axis').transition().duration(500).call(this.yAxis);
		this.style_axes();
	},

	// ### update_horizontal_bars
	// updates the data in the bars in vertical orientation
	update_horizontal_bars: function(){
		var self = this;
		// figure out how tall each bar will be
		this.y_domain = this.y_scale.range();
		this.bar_height = (this.y_domain[1] - this.y_domain[0]) / this.data.length;

		// plot new data points
		var bar_selection = this.bg_layer.selectAll('.data_bar').data(this.data);
		bar_selection.enter().append('rect')
			.attr("class","data_bar")
			.attr("y",function(d,i){return self.bar_height*i;})
			.attr("x",this.margin + 2)
			.attr("height",this.bar_height)
			.attr("width",0)
			.attr("opacity",0)
			.attr("stroke","white")
			.attr("fill",this.fg_color);

		// transition points
		bar_selection.transition().duration(500)
			.attr("width",this.x_scale)
			.attr("opacity",1);

		// remove excess points 
		bar_selection.exit().remove();

		// transition the axes
		this.vis.selectAll('.x-axis').transition().duration(500).call(this.xAxis);
		this.style_axes();
	}
});
// # **BaristaCardView**
// A Backbone View that displays a card of information wrapped in link.
// The view is meant to be a top level entry point to other pages

// basic use:

//		card_view = new BaristaCardView();

// optional arguments:

// 1.  {string}  **url**  the link to navigate to if the card is clicked, defaults to *""*
// 2.  {string}  **title**  the title of the card. defaults to *"title"*
// 3.  {string}  **subtitle**  the subtitle of the card. defaults to *"subtitle"*
// 2.  {string}  **image**  the link to an image to show as the cards main content. defaults to *""*
// 4.  {string}  **fg\_color**  the hex color code to use as the foreground color of the view, defaults to *#1b9e77*
// 5.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"col-lg-12"*

//		card_view = new BaristaCardView({el: $("target_selector",
//									url:"",
//									title:"",
//									subtitle:"",
//									fg_color: "#1b9e77",
//									image:"",
//									span_class: "col-lg-12"});
Barista.Views.BaristaCardView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "BaristaCardView",

	// ## model
	// supply a base model for the view.  Overide this if you need to use it for dynamic content
	model: new Backbone.Model(),

	// ## initialize
	// overide the view's default initialize method in order to catch options and 
	// render a custom template
	initialize: function(){
		// set up color options.  default if not specified
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : "#1b9e77";

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "col-lg-12";

		// set up the url
		this.url = (this.options.url !== undefined) ? this.options.url : "";

		// set up the title
		this.title = (this.options.title !== undefined) ? this.options.title : "Title";

		// set up the subtitle
		this.subtitle = (this.options.subtitle !== undefined) ? this.options.subtitle : "subtitle";

		// set up the image
		this.image = (this.options.image !== undefined) ? this.options.image : "";

		// bind render to model changes
		this.listenTo(this.model,'change', this.update);

		// compile the default template for the view
		this.compile_template();
	},

	// ### compile_template
	// use Handlebars to compile the template for the view
	compile_template: function(){
		var self = this;
		this.div_string = 'barista_view' + new Date().getTime();;
		this.$el.append(BaristaTemplates.CMapCard({div_string: this.div_string,
												span_class: this.span_class,
												url: this.url,
												title: this.title,
												subtitle: this.subtitle,
												image: this.image,
												fg_color: this.fg_color}));
	}
});
// # **BubbleView**
// A Backbone.View that displays a single level tree of data as a bubble plot.  The view should be bound to a
// model such as a **PertCellBreakdownModel** that captures tree data in a *tree_object* attribute.

// basic use:

//		bubble_view = new BubbleView({el: $("target_selector")});

// optional arguments:

// 3.  {string}  **fg\_color**  the hex color code to use as the foreground color of the view, defaults to *#1b9e77*
// 4.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"span4"*

//		bubble_view = new BubbleView({el: $("target_selector"),
//									fg_color: "#1b9e77",
//									span_class: "span4"});

Barista.Views.BubbleView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "BubbleView",

	// ### model
	// set up the view's default model
	model: new Barista.Models.PertCellBreakdownModel(),

	// ### initialize
	// overide the default Backbone.View initialize method to handle optional arguments, compile the view
	// template, bind model changes to view updates, and render the view
	initialize: function(){
		// set up color options.  default if not specified
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : "#1b9e77";

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "span4";

		// set up the plot height
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 120;

		// set up the bubble minimum and maximum scale values
		this.min_val = (this.options.min_val !== undefined) ? this.options.min_val : undefined;
		this.max_val = (this.options.max_val !== undefined) ? this.options.max_val : undefined;

		// set up splitting categories
		this.v_split = (this.options.v_split !== undefined) ? this.options.v_split : undefined;
		this.h_split = (this.options.h_split !== undefined) ? this.options.h_split : undefined;

		// bind render to model changes
		this.listenTo(this.model,'change', this.update);

		// compile the default template for the view
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).outerWidth();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// render the vis
		this.render();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.render();} );
	},

	// ### compile_template
	// use Handlebars to compile the template for the view
	compile_template: function(){
		this.div_string = 'd3_target' + new Date().getTime();;
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	// ### render
	// draw the view from scratch
	render: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the panel's width and height
		this.width = $("#" + this.div_string).outerWidth();
		this.height = $("#" + this.div_string).outerHeight();
		this.v_center = this.height / 2;
		this.h_center = this.width / 2;

		// rescale the width of the vis
		this.vis.transition().duration(1).attr("width",this.width);

		// grab the data from the model
		this.data = this.model.get('tree_object').children;

		// set up some data scaling
		var max_count, min_count;
		if (this.max_val !== undefined){
			max_count = this.max_val;
		}else{
			max_count = _.max(_.pluck(this.data,'count'));
		}
		if (this.min_val !== undefined){
			min_count = this.min_val;
		}else{
			min_count = _.min(_.pluck(this.data,'count'));
		}
		this.data_scale = d3.scale.linear().domain([min_count,max_count])
						.range([5,30]);

		// define the force directed graph layout
		this.force = d3.layout.force()
						.nodes(this.data)
						.gravity(0.1)
						.friction(0.9)
						.size([this.width, this.height])
						.on("tick",function(e){tick(e);})
						.charge(function(d){return -Math.pow(self.data_scale(d.count),2)/8;})
						.start();

		// draw the initial layout
		this.vis.selectAll("circle").data(this.force.nodes()).exit().remove();
		this.vis.selectAll("circle").data(this.force.nodes())
				.enter().append("circle")
				.attr("class",this.div_string + "_circle")
				.attr("fill",this.fg_color)
				.attr("v_category",function(d){
					if (self.v_split !== undefined){
						return d[self.v_split];
					}else{
						return null;
					}
				})
				.attr("cx", Math.random() * 300)
				.attr("cy", Math.random() * 300)
				.attr("stroke","white")
				.attr("_id",function(d){return d._id;})
				.attr("r",function(d){return Math.sqrt(self.data_scale(d.count)/Math.PI);});

		// specify the nodes selection so we don't have to repeat the selection on each tick
        this.nodes = this.vis.selectAll("circle");
        this.nodes.call(this.force.drag());

		// reset a damening variable for simulation
		this.damp = 0.1;

		// tick function for use in the force class
		function tick(e){
			self.vertical_split(e.alpha);
			self.nodes.attr("cx", function(d) {return d.x;})
                .attr("cy", function(d) {return d.y;})
                // .attr("r",function(d){return self.data_scale(d.count);});

        }
	},

	// ### vertical_split
	// push bubbles vertically based on an attribute property
	vertical_split: function(alpha){
		var self = this;
		bubble_selection = this.vis.selectAll('circle');
		bubble_selection
			.attr("cy",function(d){
					if (d[self.v_split] == 'up'){
						d.y = d.y + (self.v_center - 10 - d.y) * (self.damp + 0.02) * alpha * 1.1;
					}else{
						d.y = d.y + (self.v_center + 10 - d.y) * (self.damp + 0.02) * alpha * 1.1;
					}
					return(d.y);
			});
	},

	// ### update
	// update the plot with new data
	update: function(){
		// stuff this into a variable for later use
		var self = this;

		// grab the data from the model
		var new_data = this.model.get('tree_object').children;

		// grab the current nodes
		var nodes = this.force.nodes();

		// update the nodes in this.force
		if (this.force.nodes().length <= new_data.length){
			this.force.nodes().forEach(function(o,i){
				_.extend(o,new_data[i]);
				_.extend(o,{x:nodes[i]['x'],y:nodes[i]['y']});
			});
			if (this.force.nodes().length < new_data.length){
				this.force.nodes(this.force.nodes().concat(new_data.slice(this.force.nodes().length,new_data.length)));
			}
		}else{
			this.force.nodes(this.force.nodes().slice(0,new_data.length));
			this.force.nodes().forEach(function(o,i){
				_.extend(o,new_data[i]);
				_.extend(o,{x:nodes[i]['x'],y:nodes[i]['y']});
			});
		}

		// draw the initial layout for new bubbles
		bubble_selection = this.vis.selectAll("circle").data(this.force.nodes());
		bubble_selection.enter()
				.append("circle")
				.attr("class",this.div_string + "_circle")
				.attr("fill",this.fg_color)
				.attr("cx", function(d){return d.x;})
				.attr("cy", function(d){return d.y;})
				.attr("stroke","white")
				.attr("v_category",function(d){
					if (self.v_split !== undefined){
						return d[self.v_split];
					}else{
						return null;
					}
				})
				.attr("_id",function(d){return d._id;})
				.attr("r",0);

		// transition bubbles
		bubble_selection.transition().duration(500)
				.attr("r",function(d){return self.data_scale(d.count);});

		// remove bubbles with no data
		bubble_selection.exit().remove();

		// start the simulation again
		this.force.start();

		// specify the nodes selection so we don't have to repeat the selection on each tick
        this.nodes = this.vis.selectAll("circle");
        this.nodes.call(this.force.drag());

        // tick function for use in the force class
		function tick(e){
			self.vertical_split(e.alpha);
			self.nodes.attr("cx", function(d) {return d.x;})
                .attr("cy", function(d) {return d.y;})
                .attr("r",function(d){return self.data_scale(d.count);});

        }

	}
});

// # **CMapFooterView**

// A view that provides the standard Connectivity map page footer for apps built on apps.lincscloud.org
// the view provides standard copyright text and customizable organization name,
// terms and conditions link, and organization logo/link
// basic use:

//		header = new CMapHeaderView({el:"header_target"});

// optional arguments:

// 1.  {string}  **organization**  the name of the organization that claims copyright. Defaults to *Broad Institute*
// 2.  {string}  **terms_url**  The url on which to find terms and conditions. Defaults to *http://lincscloud.org/terms-and-conditions/*
// 3.  {Array}  **logo**  The urls to organization logos to use. Defaults to *['http://coreyflynn.github.io/Bellhop/img/broad_logo_small.png','http://coreyflynn.github.io/Bellhop/img/cmap_logo_small.png']*
// 4.  {Array}  **logo_url**  The urls to organization links to use. Defaults to *['http://www.broadinstitute.org/','http://lincscloud.org/']*
// 5.  {string}  **template**  The path to a handlebars template to use. Defaults to *templates/CMapFooter.handlebars*

//		header = new CMapFooterView({el:"footer_target",
//									organization: "Broad Institute",
//									terms_url: "http://lincscloud.org/terms-and-conditions/",
// 									logo: ['../img/broad_logo_small.png','../img/cmap_logo_small.png'],
// 									logo_url: ['http://www.broadinstitute.org/','http://lincscloud.org/'],
//									template: "../templates/CMapFooter.handlebars"});
Barista.Views.CMapFooterView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "CMapFooterView",

	// ### initialize
	// overide the default Backbone.View initialize function to compile a built in template and then render the view
	initialize: function(){
		// store passed parameters as attributes of the view
		this.organization = (this.options.organization !== undefined) ? this.options.organization : "Broad Institute";
		this.terms_url = (this.options.terms_url !== undefined) ? this.options.terms_url : "http://lincscloud.org/terms-and-conditions/";
		this.logo = (this.options.logo !== undefined) ? this.options.logo : ['http://coreyflynn.github.io/Bellhop/img/broad_logo_small_text.png','http://coreyflynn.github.io/Bellhop/img/CMap-logox.png','http://coreyflynn.github.io/Bellhop/img/skunkworks-logo.png','http://coreyflynn.github.io/Bellhop/img/NIH_LINCS_logo.gif'];
		this.logo_url = (this.options.logo_url !== undefined) ? this.options.logo_url : ['http://www.broadinstitute.org/','http://lincscloud.org/','http://www.broadinstitute.org/vis','http://www.lincsproject.org/'];
		this.template = (this.options.template !== undefined) ? this.options.template : "templates/CMapFooter.handlebars";

		// compile the default template for the view
		this.compile_template();

		// render the template
		this.render();
	},

	// ### compile_template
	// use Handlebars to compile the specified template for the view
	compile_template: function(){
		// grab the template
		this.compiled_template = BaristaTemplates.CMapFooter;

		// package logos and log_urls into a set of object to iterate over
		var logo_objects = []
		for (var i=0; i < this.logo.length; i++){
			logo_objects.push({logo: this.logo[i], url: this.logo_url[i]});
		}
		this.$el.append(this.compiled_template({organization: this.organization,
										terms_url: this.terms_url,
										logo_objects: logo_objects,
										year: new Date().getFullYear()}));
	}
});

// # **CMapHeaderView**

// A view the provides the standard Connectivity map page header for apps built on apps.lincscloud.org
// the header provides links in the view to navigate back to apps.lincscloud.org as well as links for
// sharing, settings, and information.  The view accepts as parameters a page title, subtitle, and handlebars template
// basic use:

//		header = new CMapHeaderView({el:"header_target"});

// optional arguments:

// 1.  {string}  **title**  The title of the page. Defaults to *Title*
// 2.  {string}  **subtitle**  The title of the page. Defaults to *Sub Title*
// 3.  {string}  **template**  The path to a handlebars template to use. Defaults to *templates/CMapHeader.handlebars*

//		header = new CMapHeaderView({el:"header_target",
//									title: "",
//									subtitle: "",
//									template: "templates/CMapHeader.handlebars"});
Barista.Views.CMapHeaderView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "CMapHeaderView",

	// ### initialize
	// overide the default Backbone.View initialize function to compile a built in template and then render the view
	initialize: function(){
		// store passed parameters as attributes of the view
		this.title = (this.options.title !== undefined) ? this.options.title : "";
		this.subtitle = (this.options.subtitle !== undefined) ? this.options.subtitle : "";
		this.user = (this.options.user !== undefined) ? this.options.user : Barista.Utils.cookie("user_id");
		this.support_link = (this.options.support_link !== undefined) ? this.options.support_link : "http://support.lincscloud.org";

		// compile the default template for the view
		this.compile_template();

		// render the template
		this.render();
	},

	// ### compile_template
	// use Handlebars to compile the specified template for the view
	compile_template: function(){
		var self = this;
		// grab the template
		this.compiled_template = BaristaTemplates.CMapHeader;
		this.$el.append(this.compiled_template({title: this.title,
										subtitle: this.subtitle,
										user: this.user,
										support_link: this.support_link,
										tour: this.tour
									}));
	}
});

/**
A Backbone.View that exposes a custom search bar.  The search bar provides autocomplete
functionality for Connectivity Map pert\_inames and cell\_ids.  When the user types in the
search view's input, a "search:DidType" event is fired.

@class PertSearchBar
@constructor
@extends Backbone.View
**/
Barista.Views.CellSearchBar = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "CellSearchBar",

	initialize: function(){
		var self = this;

		/**
		determines whether or not the search view will match cell lines for autocomplete

		@property match_cell_lines
		@default true
		@type Boolean
		**/
		// determine whether or not we will match cell line strings in the autocomplete
		this.match_cell_lines = (this.options.match_cell_lines !== undefined) ? this.options.match_cell_lines : true;

		// custom placeholder if specified
		this.placeholder = (this.options.placeholder !== undefined) ? this.options.placeholder : "search cell lines";

		// grab cell_ids and store them as an atribute of the view
		var cellinfo = 'http://api.lincscloud.org/a2/cellinfo?callback=?';
		var params = {q:'{"cell_id":{"$regex":""}}',d:"cell_id"};
		$.getJSON(cellinfo,params,function(res){
			self.cell_lines = res;
			self.render();

			// once the view is rendered, bind a change event to trigger a "search:DidType" event from the view
			var change_callback = function () {
				var val  = $("#search",self.el).val();
				var type = "";
				if (self.cell_lines.indexOf(val) != -1 && self.match_cell_lines){
					type = "cell";
				}

				/**
				Fired when the text in the view's search box changes

				@event search:DidType
				@param {Object} [msg={val:"",type:""}] an object containing the message of the event
				@param {String} [msg.val=""] the string val of the views search bar at the time of the event
				@param {String} [msg.type=""] the type of message being passed, either "" or "cell". "cell" is passed, if the string matches a cell line and match\_cell\_lines is set
				**/
				self.trigger("search:DidType",{val: val,search_column: undefined});
			};

			$("#search",self.el).bind('input propertychange change', _.throttle(change_callback,500));

			// bind a search:DidType event to the typeahead events coming out of typeahead.js
			$(".typeahead",self.el).bind('typeahead:selected typeahead:autocompleted', function (obj,datum) {
				var val = datum.value;
				var search_column = datum.search_column;
				self.trigger("search:DidType",{val: val,search_column: search_column});
			});
		});

	},


	/**
    Gets the current text entered in the view's search bar

    @method get_val
    **/
	get_val: function(){
		return $("#search",this.el).val();
	},

	/**
    fills the view's search bar with a random pert_iname and triggers a "search:DidType" event

    @method random_val
    **/
	random_val: function(){
		var self = this;
		var cellinfo = 'http://api.lincscloud.org/a2/cellinfo?callback=?';

		var skip = Math.round(Math.random()*40);
		var params = {q:'{"lincs_status":{"$in":["core_cline","core_pline","DIVR"]}}', l:1, sk:skip};
		$.getJSON(cellinfo,params,function(res){
			var val = res[0].cell_id;
			$("#search",this.el).val(val);
			self.trigger("search:DidType",{val: val,search_column: 'cell_id'});
		});
	},

	set_val: function(new_val){
		$("#search",this.el).val(new_val);
		this.trigger("search:DidType",{val: new_val,search_column: undefined }); //TODO need to find search column info
	},

	/**
    renders the view

    @method render
    **/
	render: function(){
		var self = this;

		// load the template into the view's el tag
		this.$el.append(BaristaTemplates.CMapPertSearchBar({placeholder: this.placeholder}));

		// hook up the typeahead with backing datasets
		$('#search',this.$el).typeahead([Barista.Datasets.CellID,
										 Barista.Datasets.CellLineage,
										 Barista.Datasets.CellHistology,
										 Barista.Datasets.CellMutation]);
	}
});

// # **CompoundDetailView**

// A Backbone.View that shows information about a small molecule compound.  This view is
// frequently paired with a CompoundDetailModel.

//		pert_detail_view = new CompoundDetailView({el: $("target_selector")});

// optional arguments:

// 1.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 2.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"col-lg-12"*

//		pert_detail_view = new CompoundDetailView({el: $("target_selector"),
// 												model: CompoundDetailModel,
// 												bg_color: "#ffffff",
// 												span_class: "col-lg-12"});
Barista.Views.CompoundDetailView = Barista.Views.BaristaBaseView.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "CompoundDetailView",

	// ### model
	// set up the view's default model
	model: new Barista.Models.CompoundDetailModel(),

	// ### initialize
	// overide the defualt Backbone.View initialize method to bind the view to model changes, bind
	// window resize events to view re-draws, compile the template, and render the view
	initialize: function(){
		// set up the plot height
		this.options.plot_height = 260;

		// set up the open and closed state heights
		this.open_height = this.options.plot_height;
		this.closed_height = this.options.plot_height;
		this.panel_open = false;

		// initialize the view using the base view's built in method
		this.base_initialize();
	},

	// ### render
	// completely render the view. Updates both static and dynamic content in the view.
	render: function(){
		// keep track of our scope at this level
		var self = this;

		// render the base view components
		this.base_render();

		// draw compound structure if there is one
		if (this.model.get("structure_url")){
			this.fg_layer.selectAll('.index_text_icon').data([]).exit().remove();
			this.fg_layer.selectAll('.index_text_icon').data([1])
								.enter().append("svg:image")
								.attr("class","index_text_icon")
								.attr("xlink:href", this.model.get("structure_url"))
								.attr("x",10)
								.attr("y",100)
								.attr("height",150)
								.attr("width",300)
								.style("cursor","pointer")
								.on("click", function(){window.location = self.model.get('structure_url')});
		}

		// draw the static index reagent text
		this.fg_layer.selectAll('.index_text').data([]).exit().remove();
		this.fg_layer.selectAll('.index_text').data([1])
							.enter().append("text")
							.attr("class","index_text")
							.attr("x",10)
							.attr("y",30)
							.attr("fill","#E69F00")
							.attr("font-family","Helvetica Neue")
							.attr("font-size","20pt")
							.text('Small Molecule Compound');

		// (re)draw the pert_iname text
		this.fg_layer.selectAll('.pert_iname_text').data([]).exit().remove();
		this.fg_layer.selectAll('.pert_iname_text').data([1])
							.enter().append("text")
							.attr("class","pert_iname_text")
							.attr("x",10)
							.attr("y",75)
							.attr("font-family","Helvetica Neue")
							.attr("font-weight","bold")
							.attr("font-size","36pt")
							.text(this.model.get('pert_iname'));

		// (re)draw the pert_id text
		this.fg_layer.selectAll('.pert_id_text').data([]).exit().remove();
		this.fg_layer.selectAll('.pert_id_text').data([1])
							.enter()
							.append("text")
							.attr("class","pert_id_text")
							.attr("x",10)
							.attr("y",100)
							.attr("font-family","Helvetica Neue")
							.attr("font-size","14pt")
							.text(this.model.get('pert_id'));

		// render additional labels
		this.label_y_position = 100;

		// (re)draw the in_summly annotation
		this.render_label_and_value('collection', 'Collection', 'pert_icollection', false, 320);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('num_sig', 'Signatures', 'num_sig', false, 320);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('gold_sig', 'Gold Signatures', 'num_gold', false, 320);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('num_inst', 'Experiments', 'num_inst', false, 320);

		// (re)draw the in_summly annotation
		this.render_label_and_value('summly', 'In Summly', 'in_summly', false, 320);


		// set the y position to be below the fold
		this.label_y_position = 260;

		// (re)draw the weight label and weight
		this.render_label_and_value('weight', 'Weight', 'molecular_wt');

		// (re)draw the formula and label
		this.render_label_and_value('formula', 'Formula', Barista.NumbersToSubscript(this.model.get('molecular_formula')),true);

		// (re)draw the logp and label
		this.render_label_and_value('logp', 'LogP', 'logp');

		// (re)draw the formula and label
		this.render_label_and_value('vendor', 'Vendor', 'pert_vendor');

		// (re)draw the pubchem_cid and label
		this.render_label_and_value('pubchem_cid', 'PubChem CID', 'pubchem_cid', false, 10, "http://pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?cid=" + self.model.get('pubchem_cid'));

		// (re)draw the InChIKey label and InChIKey
		this.render_label_and_value('inchi_key', 'InChIKey', this.model.get("inchi_key").split("InChIKey=")[1], true);

		// (re)draw the InChI string
		// this.render_label_and_value('inchi_string', 'InChI String', this.model.get("inchi_string").split("InChI=")[1], true);

		// (re)draw the SMILES
		this.render_label_and_value('smiles', 'SMILES', 'canonical_smiles');

		// draw alternate names
		this.label_y_position += 20;
		if (this.model.get('alt_name')){
			this.render_label_and_value('alt_name_label', 'Alternate Names', '', true);
			this.label_y_position += 5;
			this.draw_tags('alt_name', 'Alternate Names', this.model.get('alt_name'), 'white', '#BDBDBD');
		}

		// draw the cell lines that the compound has been profiled in
		if (this.model.get('cell_id')){
			this.render_label_and_value('cell_id_label', 'Cell Lines', '', true);
			this.label_y_position += 5;
			this.draw_tags('cell_id', 'Cell Lines', this.model.get('cell_id'), 'white', '#CC79A7');
		}

		// draw the signatures for the compound
		if (this.model.get('sig_id')){
			this.render_label_and_value('sig_id_label', 'Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('sig_id', 'Signature IDs', this.model.get('sig_id'), 'white', '#BDBDBD');
		}

		// draw the gold signatures for the compound
		if (this.model.get('sig_id_gold')){
			this.render_label_and_value('gold_sig_id_label', 'Gold Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('gold_sig_id', 'Gold Signature IDs', this.model.get('sig_id_gold'), 'white', '#BDBDBD');
		}

		// (re)draw the pert_summary or clear it if there pert_summary is null
		if (this.model.get('pert_summary')){
			this.render_summary({summary_string: this.model.get('pert_summary'),
								 top: 45,
								 bottom: 100,
								 left: this.fg_layer.selectAll('.pert_iname_text').node().getComputedTextLength() + 30});
		}else{
			this.clear_summary();
		}

		// add a png export overlay
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",10)
			.attr("y",this.height - 20)
			.attr("opacity",0.25)
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});

		// check to see if there is a pubchem id and draw a link for it if there
		// is one
		this.controls_layer.selectAll("." + this.div_string + "pubchem_link").data([]).exit().remove();
		if (this.model.get('pubchem_cid')){
			this.controls_layer.selectAll("." + this.div_string + "pubchem_link").data([1]).enter().append("text")
				.attr("class", this.div_string + "pubchem_link no_png_export")
				.attr("x",this.width - 10)
				.attr("y",this.height - 20)
				.attr("opacity",0.25)
				.attr("text-anchor","end")
				.style("cursor","pointer")
				.text("PubChem")
				.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
				.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
				.on("click", function(){window.location = "http://pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?cid=" + self.model.get('pubchem_cid')});
		}

		// check to see if there is a wikipedia url and draw a link for it if there
		// is one
		this.controls_layer.selectAll("." + this.div_string + "wiki_link").data([]).exit().remove();
		if (this.model.get('wiki_url')){
			this.controls_layer.selectAll("." + this.div_string + "wiki_link").data([1]).enter().append("text")
				.attr("class", this.div_string + "wiki_link no_png_export")
				.attr("x",this.width - 80)
				.attr("y",this.height - 20)
				.attr("opacity",0.25)
				.attr("text-anchor","end")
				.style("cursor","pointer")
				.text("Wiki")
				.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
				.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
				.on("click", function(){window.location = self.model.get('wiki_url')});
		}

		// render an image that will to indicate that the user can click the content to unfold the panel
		this.cevron_image_link = (this.panel_open) ? 'http://coreyflynn.github.io/Bellhop/img/up_arrow_select.png' : 'http://coreyflynn.github.io/Bellhop/img/down_arrow_select.png';

		this.controls_layer.selectAll('.cevron_icon').data([]).exit().remove();
		this.controls_layer.selectAll('.cevron_icon').data([1])
			.enter().append("svg:image")
			.attr("class","cevron_icon")
			.attr("xlink:href", this.cevron_image_link)
			.attr("x",this.width/2 - 9)
			.attr("y",function(){
				if (self.panel_open){
					return self.height - 15;
				}else{
					return self.height - 20;
				}
			})
			.attr("height",20)
			.attr("width", 18)
			.attr("transform", "rotate(0)")
			.style("cursor","pointer")
			.on("click", function(){self.toggle_panel_state()});

		// render a button to allow the user to expand the view to show its full content
		this.controls_layer.selectAll("." + this.div_string + "more_button").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "more_button").data([1]).enter()
			.append("rect")
			.attr("x",0)
			.attr("y",this.height - 15)
			.attr("class",this.div_string + "more_button")
			.attr("height",15)
			.attr("width",this.width)
			.attr("opacity",0)
			.style("cursor","pointer")
			.attr("fill","#BDBDBD")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",0.25);})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0);})
			.on("click", function(){self.toggle_panel_state()})

		return this;
	},

	// ### update
	// update the dynamic potions of the view
	update: function(){
		this.render();
		return this;
	},

	// ### render_label_and_value
	// utility function to draw a standard label and value for that label under
	// the main pert_iname and pert_id text.  If pass_model_field_as_text is true,
	// pass the value in model_field as text instead of serching for it in the model
	render_label_and_value: function(class_name_base, label_text, model_field, pass_model_field_as_text, x_pos_base, value_link){
		// set up a local variable to keep our scope straight
		var self = this;

		// make sure that we have a label_y_position set
		this.label_y_position = (this.label_y_position !== undefined) ? this.label_y_position: 100;
		this.label_y_position += 25;

		// make sure that there is a base position for the x_label set
		var x_pos_base = (x_pos_base !== undefined) ? x_pos_base: 10;

		// update the open_height to the total height of all that we have drawn
		this.open_height = (this.options.plot_height > this.label_y_position + 40) ? this.options.plot_height : this.label_y_position + 40;

		// (re)draw the label
		this.fg_layer.selectAll('.' + class_name_base + '_label_text').data([]).exit().remove();
		this.fg_layer.selectAll('.' + class_name_base + '_label_text').data([1])
							.enter()
							.append("text")
							.attr("class",class_name_base + '_label_text')
							.attr("x",x_pos_base)
							.attr("y",this.label_y_position)
							.attr("font-family","Helvetica Neue")
							.attr("font-size","14pt")
							.text(label_text + ':');

		// (re)draw the text
		this.fg_layer.selectAll('.' + class_name_base + '_text').data([]).exit().remove();
		var model_text = '';
		if (pass_model_field_as_text){
			model_text = model_field;
		}else{
			model_text = this.model.get(model_field);
		}
		var x_pos = x_pos_base + this.fg_layer.selectAll('.' + class_name_base + '_label_text').node().getComputedTextLength() + 10;

		// if there is a value link supplied, use it as a link on the text, otherwise, render plain text
		if (value_link){
			this.fg_layer.selectAll('.' + class_name_base + '_text').data([1])
								.enter()
								.append("text")
								.attr("class",class_name_base + '_text')
								.attr("x",x_pos)
								.attr("y",this.label_y_position)
								.attr("font-family","Helvetica Neue")
								.attr("font-size","14pt")
								.attr("fill","#BDBDBD")
								.style("cursor","pointer")
								.on("mouseover",function(){d3.select(this).transition().duration(500).attr("fill","#56B4E9");})
								.on("mouseout",function(){d3.select(this).transition().duration(500).attr("fill","#BDBDBD");})
								.on("click", function(){window.location = value_link})
								.text(model_text);
		}else{
			this.fg_layer.selectAll('.' + class_name_base + '_text').data([1])
								.enter()
								.append("text")
								.attr("class",class_name_base + '_text')
								.attr("x",x_pos)
								.attr("y",this.label_y_position)
								.attr("font-family","Helvetica Neue")
								.attr("font-size","14pt")
								.attr("fill","#BDBDBD")
								.text(model_text);
		}
	},

	// ### render_summary
	// utility function to break a long summary string into a multiline
	// and draw it at the desired location

	// options

	// 1.  {string}  **summary_string**  the string to be displayed, defaults to *""*
	// 2.  {right}  **right**  the x position to place the **right** edge of text, defaults to *this.width*
	// 3.  {left}  **left**  the x position to place the **left** edge of text, defaults to *this.width - 500*
	// 4.  {top}  **top**  the y position to place the **top** edge of text, defaults to *0*
	// 5.  {bottom}  **bottom**  the y position to place the **bottom** edge of text, defaults to *100*
	render_summary: function(options){
		var self = this;

		// default arguments if they are not present
		summary_string = this.model.get("pert_summary");
		top_edge = (options.top !== undefined) ? options.top : 0;
		bottom_edge = (options.bottom !== undefined) ? options.bottom : 100;
		right_edge = (options.right !== undefined) ? options.right : this.width;
		left_edge = (options.left !== undefined) ? options.left : this.width - 500;

		// clear existing summary
		this.clear_summary();

		// compute the number of lines we have room for
		this.line_height = 15;
		this.num_lines_allowed = Math.floor((bottom_edge - top_edge) / this.line_height);

		// compute the number of characters per line we will allow and how
		// many lines the summary would need if we rendered all of it
		this.line_width = right_edge - left_edge;
		this.num_char = Math.floor(this.line_width / 13 / .75);
		this.num_char = (this.num_char > 60) ? 60 : this.num_char;
		this.num_lines = Math.ceil(summary_string.length / this.num_char);

		// compute the line splits to display in the wiki summary
		this.lines = [];
		for (var i=0; i<this.num_lines; i++){
			if (i < this.num_lines_allowed - 1){
				var l = (summary_string.slice(i*this.num_char,(i+1)*this.num_char).slice(-1) != " " && summary_string.slice(i*this.num_char,(i+1)*this.num_char).slice(this.num_char-1,this.num_char) != "") ? summary_string.slice(i*this.num_char,(i+1)*this.num_char)  + '-': summary_string.slice(i*this.num_char,(i+1)*this.num_char);
				this.lines.push(l);
			}else{
				var l = summary_string.slice(i*this.num_char,(i+1)*this.num_char - 3) + '...';
				this.lines.push(l);
				break;
			}
		}

		// draw lines
		self.fg_layer.selectAll('.' + self.div_string + 'summary_text' + i).data(this.lines)
				.enter()
				.append("text")
				.attr("class",self.div_string + "summary_text")
				.attr("x",left_edge)
				.attr("y",function(d,i){return top_edge + 13 + i*15;})
				.attr("font-family","Helvetica Neue")
				.attr("font-size","13pt")
				.attr("fill","#BDBDBD")
				// .attr("text-anchor", "middle")
				.text(function(d){return d;});
	},

	// ### toggle_panel_state
	// utility to open or close the view
	toggle_panel_state: function(){
		var self = this;
		var h;
		if (this.panel_open){
			h = this.options.plot_height;
			$("#" + this.div_string).animate({height:h},500);
			this.panel_open = false;
			this.controls_layer.selectAll(".cevron_icon").attr("xlink:href", 'http://coreyflynn.github.io/Bellhop/img/down_arrow_select.png')
			this.controls_layer.selectAll('.cevron_icon').transition().duration(500).attr("y",h - 20);
		}else{
			h = this.open_height
			$("#" + this.div_string).animate({height:h},500);
			this.panel_open = true;
			this.controls_layer.selectAll(".cevron_icon").attr("xlink:href", 'http://coreyflynn.github.io/Bellhop/img/up_arrow_select.png')
			this.controls_layer.selectAll('.cevron_icon').transition().duration(500).attr("y",h - 15);
		}
		this.controls_layer.selectAll("." + this.div_string + "more_button").transition().duration(500).attr("y",h - 15);
		this.controls_layer.selectAll("." + this.div_string + "wiki_link").transition().duration(500).attr("y",h - 20);
		this.controls_layer.selectAll("." + this.div_string + "pubchem_link").transition().duration(500).attr("y",h - 20);
		this.controls_layer.selectAll("." + this.div_string + "png_export").transition().duration(500).attr("y",h - 20);
		this.vis.transition().duration(500).attr("height",h);
	},

	// ### draw tags
	// utility function to draw tags given an array.
	draw_tags: function(class_name_base, label_text, data, fg_color, tag_color){
		var x_offsets = [10];
		var row_number = 0;
		var y_offsets = [];
		var lengths = [];
		var tags = [];
		var self = this;
		var EmSize = Barista.getEmSizeInPixels(this.div_string);

		// draw the foreground text of all the tags
		this.fg_layer.selectAll('.' + class_name_base + 'tag_list_text').data([]).exit().remove();
		this.fg_layer.selectAll('.' + class_name_base + 'tag_list_text').data(data).enter().append('text')
			.attr("class", class_name_base + "tag_list_text")
			.text(function(d){return d;})
			.attr("x",function(d,i){
				lengths.push(this.getComputedTextLength() + 15);
				var current_x_offset = x_offsets[i];
				if (current_x_offset + lengths[i] > self.width){
					x_offsets[i] = 5;
					x_offsets.push(lengths[i] + x_offsets[i]);
					row_number += 1;
				}else{
					x_offsets.push(lengths[i] + x_offsets[i]);
				}
				y_offsets.push((row_number * 1.5 + 1));
				return x_offsets[i];
			})
			.attr("y",function(d,i){return self.label_y_position + y_offsets[i] * EmSize;})
			.attr("opacity",1)
			.attr("fill",fg_color)

		// draw the background of all the tags
		this.bg_layer.selectAll('.' + class_name_base + 'tag_list_rect').data([]).exit().remove();
		this.bg_layer.selectAll('.' + class_name_base + 'tag_list_rect').data(data).enter().append('rect')
			.attr("class", class_name_base + "tag_list_rect")
			.attr("x",function(d,i){return x_offsets[i] - 5;})
			.attr("y",function(d,i){return self.label_y_position + (y_offsets[i] - 1) * EmSize;})
			.attr("rx",4)
			.attr("ry",4)
			.attr('width',function(d,i){return lengths[i] - 4;})
			.attr('height','1.2em')
			.attr("opacity",1)
			.attr("fill",tag_color);

		// update the label_y_position
		this.label_y_position += 10 + y_offsets.slice(-1)[0] * EmSize;

		// update the open_height to the total height of all that we have drawn
		this.open_height = (this.options.plot_height > this.label_y_position + 40) ? this.options.plot_height : this.label_y_position + 40;

		return this
	},

	// ### clear_summary
	// utility function to clear the pert summary
	clear_summary: function(){
		this.fg_layer.selectAll('.summary_text').data([]).exit().remove();
	},


	// ### save_png_pre
	// overide the base views save_png_pre method to clear out the image so we
	// can render the png properly
	save_png_pre: function(){
		// remove the static index reagent icon
		this.fg_layer.selectAll('.index_text_icon').data([]).exit().remove();

		// scoot the inde text to the left
		this.fg_layer.selectAll('.index_text')
			.attr('x',10)
	},

	// ### save_png_post
	// overide the base views save_png_post method to restore the image after
	// saving
	save_png_post: function(){
		// draw the static index reagent icon
		this.fg_layer.selectAll('.index_text_icon').data([]).exit().remove();
		this.fg_layer.selectAll('.index_text_icon').data([1])
							.enter().append("svg:image")
							.attr("class","index_text_icon")
			                .attr("xlink:href", "http://coreyflynn.github.io/Bellhop/img/CP.png")
							.attr("x",10)
							.attr("y",0)
							.attr("height",40)
							.attr("width",40);

		// scoot the inde text to the right
		this.fg_layer.selectAll('.index_text')
			.attr('x',60)
	}
});

/**
A Backbone.View that exposes a custom search bar.  The search bar provides autocomplete
functionality for Connectivity Map pert\_inames and cell\_ids.  When the user types in the
search view's input, a "search:DidType" event is fired.

@class PertSearchBar
@constructor
@extends Backbone.View
**/
Barista.Views.CompoundSearchBar = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "CompoundSearchBar",

	initialize: function(){
		var self = this;
		this.render();

		// once the view is rendered, bind a change event to trigger a "search:DidType" event from the view
		var change_callback = function () {
			var val  = $("#search",self.el).val();
			var type = "";
			/**
			Fired when the text in the view's search box changes

			@event search:DidType
			@param {Object} [msg={val:"",type:""}] an object containing the message of the event
			@param {String} [msg.val=""] the string val of the views search bar at the time of the event
			@param {String} [msg.type=""] the type of message being passed, either "" or "cell". "cell" is passed, if the string matches a cell line and match\_cell\_lines is set
			**/
			self.trigger("search:DidType",{val: val,type: type});
		};

		$("#search",self.el).bind('input propertychange change', _.throttle(change_callback,500));

		// bind a search:DidType event to the typeahead events coming out of typeahead.js
		$(".typeahead",self.el).bind('typeahead:selected typeahead:autocompleted', function (obj,datum) {
			var val = datum.value;
			var type = "single";
			self.trigger("search:DidType",{val: val,type: type});
		});

	},


	/**
    Gets the current text entered in the view's search bar
    
    @method get_val
    **/
	get_val: function(){
		return $("#search",this.el).val();
	},

	/**
    fills the view's search bar with a random pert_iname and triggers a "search:DidType" event
    
    @method random_val
    **/
	random_val: function(){
		var self = this;
		skip = Math.round(Math.random()*40000);
		var pertinfo = 'http://api.lincscloud.org/a2/pertinfo?callback=?';
		params = {q: '{"pert_type":"trt_cp"}',
					f:'{"pert_iname":1}',
										l:1,
										sk:skip};
		$.getJSON(pertinfo,params,function(res){
			var val = res[0].pert_iname;
			$("#search",this.el).val(val);
			self.trigger("search:DidType",{val: val,type: 'single'});
		});
	},

	set_val: function(new_val){
		$("#search",this.el).val(new_val);
		this.trigger("search:DidType",{val: new_val,type: 'single'});
	},

	/**
    renders the view
    
    @method render
    **/
	render: function(){
		var self = this;
		// load the template into the view's el tag
		this.$el.append(BaristaTemplates.CMapPertSearchBar());

		$('#search',this.$el).typeahead([{
			// only return 4 items at a time in the autocomplete dropdown
			limit: 2,

			// provide a name for the default typeahead data source
			name: 'Reagents',

			// the template to render for all results
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use pertinfo with custom query params
				url: ['http://api.lincscloud.org/a2/pertinfo?',
					  'q={"pert_iname":{"$regex":"%QUERY", "$options":"i"}, "pert_type":"trt_cp"}',
					  '&f={"pert_iname":1,"pert_type":1}',
					  '&l=100',
					  '&s={"pert_iname":1}'].join(''),
				
				dataType: 'jsonp',

				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its pert_iname and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.pert_iname);
						object_map[element.pert_iname] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						};
						if (object_map[item].pert_type === 'trt_cp' ){
							_.extend(datum,{
								type: 'Chemical Reagent',
								color: '#E69F00',
							});
							datum_list.push(datum);
							return datum_list;
						}else{
							_.extend(datum,{
								type: object_map[item].pert_type,
								color: '#999',
							});
							datum_list.push(datum);
							return datum_list;
						}
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}

			}
		}]);
	}
});
Barista.Views.FlatTreeMapView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "FlatTreeMapView",

		model: new Barista.Models.PertCellBreakdownModel(),

		initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#d9d9d9";
		this.well_color = (this.options.well_color !== undefined) ? this.options.well_color : "#bdbdbd";
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : "#1b9e77";

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "span4";

		// set up the default height for the plot
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 300;

		// allow for construction inside of a shadow DOM
		this.shadow_el = (this.options.shadow_el !== undefined) ? this.options.shadow_el : null;
		this.shadow_root = (this.options.shadow_root !== undefined) ? this.options.shadow_root : null;

		// bind render to model changes
		this.listenTo(this.model,'change', this.update_vis);

		// compile the default template for the view
		this.compile_template();

		// set up a $div selector that can find the target div even if it is in a
		// shadow DOM
		if (this.shadow_el && this.shadow_root){
			this.$div = $(this.shadow_root).children(this.shadow_el).children("#" + this.div_string);
		}else{
			this.$div = $("#" + this.div_string);
		}

		// define the location where d3 will build its plot
		this.width = this.$div.width();
		this.height = this.$div.outerHeight();
		this.top_svg = d3.select(this.$div[0]).append("svg")
						.attr("width",this.width)
						.attr("height",this.height)
		this.vis = this.top_svg.append("g");
		// this.vis_overlay = this.top_svg.append("g");

		// render the vis
		this.render();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.render();} );
	},

	compile_template: function(){
		this.div_string = 'd3_target' + new Date().getTime();
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	render: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the panel's width and height
		this.width = this.$div.width();
		this.height = this.$div.outerHeight();

		// rescale the width of the vis
		this.top_svg.transition().duration(1).attr("width",this.width);

		// define the treemap layout
		this.treemap = d3.layout.treemap()
						.size([this.width,this.height])
						.sticky(false)
						.round(true)
						.sort(function(a,b) { return a.count - b.count; })
						.value(function(d) {return d.count;});

		// grab the data from the model and plot the state of the treemap
		this.data = this.model.get('tree_object');

		// if there are no cildren in the tree_object, dim the view
		if (this.data.children[0] === undefined){
			this.top_svg.transition().duration(1).attr("opacity",0);
		}else{
			this.top_svg.transition().duration(500).attr("opacity",1);
		}

		// set up an alpha scaling
		this.min_count = _.min(_.pluck(this.data.children,'count'));
		this.max_count = _.max(_.pluck(this.data.children,'count'));
		this.opacity_map = d3.scale.linear()
							.domain([this.min_count,this.max_count,this.max_count+1])
							.range([1,1,0]);

		this.vis.data([this.data]).selectAll("rect").data([]).exit().remove();
		this.vis.data([this.data]).selectAll("rect").data(this.treemap.nodes)
			.enter().append("rect")
			.attr("class",this.div_string + "_cell")
			.attr("fill",this.fg_color)
			.attr("opacity",function(d){return self.opacity_map(d.value);})
			.attr("x", function(d) {return d.x;})
			.attr("y", function(d) {return d.y;})
			.attr("_id", function(d) {return d._id;})
			.attr("count", function(d) {return d.count;})
			.attr("width", function(d) {return d.dx;})
			.attr("height", function(d) {return d.dy;})
			.attr("stroke", "white")
			.attr("stroke-width", 2);
		this.draw_text();
		this.add_tooltips();

		// add a png export overlay
		this.top_svg.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.top_svg.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export")
			.attr("x",10)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1);})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25);})
			.on("click",function(){self.savePng();});
	},

	update_vis: function(){
		var self = this;
		// grab the data from the model and plot the state of the treemap
		this.data = this.model.get('tree_object');

		// if there are no children in the tree_object, dim the view
		if (this.data.children[0] === undefined){
			this.top_svg.transition().duration(1).attr("opacity",0);
		}else{
			this.top_svg.transition().duration(500).attr("opacity",1);
		}

		// set up an alpha scaling
		this.min_count = _.min(_.pluck(this.data.children,'count'));
		this.max_count = _.max(_.pluck(this.data.children,'count'));
		this.opacity_map = d3.scale.linear().domain([this.min_count,this.max_count,this.max_count+1])
						.range([1,1,0]);

		//add new data if it is there
		this.vis.data([this.data]).selectAll("rect").data(this.treemap.nodes)
			.enter().append("rect")
			.attr("class",this.div_string + "_cell")
			.attr("fill",this.fg_color)
			.attr("opacity",function(d){return self.opacity_map(d.value);})
			.attr("x", function(d) {return d.x;})
			.attr("y", function(d) {return d.y;})
			.attr("_id", function(d) {return d._id;})
			.attr("count", function(d) {return d.count;})
			.attr("width", function(d) {return d.dx;})
			.attr("height", function(d) {return d.dy;})
			.attr("stroke", "white")
			.attr("stroke-width", 2);

		// transition elements
		this.vis.data([this.data]).selectAll("rect")
			.transition().ease("cubic out").duration(500)
			.attr("opacity",function(d){return self.opacity_map(d.value);})
			.attr("x", function(d) {return d.x;})
			.attr("y", function(d) {return d.y;})
			.attr("_id", function(d) {return d._id;})
			.attr("count", function(d) {return d.count;})
			.attr("width", function(d) {return d.dx;})
			.attr("height", function(d) {return d.dy;});

		// exit old elements
		this.vis.data([this.data]).selectAll("rect").data(this.treemap.nodes).exit().remove();

		// // add tooltips
		// this.add_tooltips();

		// draw_text on the elements that have room for it
		this.clear_text();
		setTimeout(function(){ self.draw_text(); self.add_tooltips();},500);
	},

	add_tooltips: function(){
		// make a selection of all cells in the treemap
		var cell_selection = $('.' + this.div_string + '_cell');

		// remove existing tooltips so we don confuse the labels
		cell_selection.each(function(){
			$(this).tooltip('destroy');
		});

		// add new tooltips if there is more than just the base cell in
		// in the treemap (i.e. it is a non-empty dataset)
		if (cell_selection.length > 1){
			cell_selection.each(function(){
				$(this).tooltip({
					placement: 'top',
					container: 'body',
					trigger: 'hover focus',
					title: $(this).attr('_id') + ' : ' + Math.round($(this).attr('count'))
				});
			});
		}
	},

	clear_text: function(){
		this.vis.data([this.data]).selectAll("text.name").data([]).exit().remove();
		this.vis.data([this.data]).selectAll("text.count").data([]).exit().remove();
	},

	draw_text: function(){
		this.vis.data([this.data]).selectAll("text.name").data([]).exit().remove();
		this.vis.data([this.data]).selectAll("text.name").data(this.treemap.nodes)
			.enter().append("text")
			.attr("class","name")
			.text(function(d) {
				if (d.dy < 20 || d.dx < 80){
					return null;
				}else{
					return d.children ? null : d._id;
				}
			})
			.attr("text-anchor", "middle")
			.attr("x", function(d) {return d.x + d.dx/2;})
			.attr("y", function(d) {return d.y + d.dy/2;})
			.attr("font-family","'Helvetica Neue',Helvetica,Arial,sans-serif")
			.attr("font-weight","normal")
			.attr("font-size","12pt")
			.attr("fill","white")
			.attr("opacity",0)
			.style("pointer-events","none")
			.transition().duration(500).attr("opacity",1);

		this.vis.data([this.data]).selectAll("text.count").data([]).exit().remove();
		this.vis.data([this.data]).selectAll("text.count").data(this.treemap.nodes)
			.enter().append("text")
			.attr("class","name")
			.text(function(d) {
				if (d.dy < 40 || d.dx < 80){
					return null;
				}else{
					return d.children ? null : Barista.numberWithCommas(d.count);
				}
			})
			.attr("text-anchor", "middle")
			.attr("x", function(d) {return d.x + d.dx/2;})
			.attr("y", function(d) {return d.y + d.dy/2 + 20;})
			.attr("font-family","'Helvetica Neue',Helvetica,Arial,sans-serif")
			.attr("font-weight","normal")
			.attr("font-size","12pt")
			.attr("fill","black")
			.attr("opacity",0)
			.style("pointer-events","none")
			.transition().duration(500).attr("opacity",1);
	},

	savePng: function(){
		//set the animate the div containing the view by applying and then removing
		// css classes that defined the transitions we want
		var $div = this.$div;
		$div.addClass("barista-base-view");
		$div.toggleClass("exporting");
		setTimeout(function(){$div.toggleClass("exporting");},500);

		// build a canvas element to store the image temporarily while we save it
		var width = this.top_svg.attr("width");
		var height = this.top_svg.attr("height");
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.top_svg.selectAll("." + this.div_string + "png_export").data([1]);
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.top_svg.node().parentNode.innerHTML;
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = "cmapTreeMap" + new Date().getTime() + ".png";
		if (canvas.toBlob){canvas.toBlob(function(blob){saveAs(blob,filename);})};
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);
	}
});

Barista.Views.GridView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "GridView",

	initialize: function(){
		var self = this;
		// default search value
		this.search_val = "";
		this.search_type = "single";

		// set up grid options
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "col_lg_12";
		this.legend = (this.options.legend !== undefined) ? this.options.legend : undefined;
		this.no_download = (this.options.no_download !== undefined) ? this.options.no_download : undefined;
		this.no_slice = (this.options.no_slice !== undefined) ? this.options.no_slice : undefined;
		this.no_legend = (this.options.no_legend !== undefined) ? this.options.no_legend : undefined;
		this.limit = (this.options.limit !== undefined) ? this.options.limit : 30;



		// set up a default collection and column definition for the grid to operate on
		this.collection = (this.options.collection !== undefined) ? this.options.collection : new Barista.Collections.PertCollection();
		this.columns = (this.options.columns !== undefined) ? this.options.columns : [{name: "pert_iname", label: "Reagent Name", cell: "string", editable: false},
																						{name: "pert_type_label", label: "Pert Type", cell: Barista.HTMLCell, editable: false},
																						{name: "num_inst", label: "Experiments", cell: "integer", editable: false}];

		// build the template
		this.compile_template();

		// build the grid on the template using a clickable row.  If a row is clicked, a grid:RowClick event
		// is fired with the row's model as the passed data.
		// build the clickable row
		var ClickableRow = Backgrid.Row.extend({
			events: {
				"click": "onClick"
			},
			onClick: function () {
				Backbone.trigger("grid:RowClick", this.model);
				$(".cmap-active-grid-row").removeClass("cmap-active-grid-row");
				this.$el.addClass("cmap-active-grid-row");
			},
			render: function () {
				// replicate Backgrid.Row's native render method
				this.$el.empty();
				var fragment = document.createDocumentFragment();
				for (var i = 0; i < this.cells.length; i++) {
					fragment.appendChild(this.cells[i].render().el);
				}
				this.el.appendChild(fragment);
				this.delegateEvents();

				// if the row's model is active, highlight it
				if (this.model.get('active_row')){
					this.$el.addClass("cmap-active-grid-row");
				}

				return this;
			}
		});

		// build the grid
		this.grid = new Backgrid.Grid({
			row: ClickableRow,
			columns: this.columns,
			collection: this.collection
		});
		$("#" + this.div_string).append(this.grid.render().$el);

		// add a button to scroll to the top of the grid once it is scroll down
		this.add_scroll_to_top_button();

		//bind the table to a function to check for scroll boundaries
		$("#" + this.div_string,this.el).scroll(function(){self.checkscroll();});

		// bind the download text to a function to download the data in the table
		$("#" + this.div_string + "_download",this.el).click(function(){self.download_table();});

		// bind the download text to a function to slice the data in the table out of the
		// Connectivity Map database.
		self.change_slice_button_state("slice");
	},

	checkscroll: _.debounce(function(){
		if ($("#" + this.div_string).scrollTop() > 30) {
			this.show_scroll_to_top_button();
		}else{
			this.hide_scroll_to_top_button();
		}

		var triggerPoint = 100;
		var pos = $("#" + this.div_string).scrollTop() + $("#" + this.div_string).height() + triggerPoint;
		if (!this.collection.isLoading && pos > $("#" + this.div_string)[0].scrollHeight){
			this.collection.skip += this.limit;
			this.update_collection(this.search_val,this.search_type,this.limit);
		}
	},100),

	// ### add_scroll_to_top_button
	// adds a UI control to scroll the top of the grid
	add_scroll_to_top_button: function(){
		var self = this;
		this.scroll_to_top_button_id = this.div_string + 'scroll_button';
		this.$el.append('<button id="' + this.scroll_to_top_button_id + '" class="cmap_grid_to_top_button">Scroll to Top</button>');
		$("#" + this.scroll_to_top_button_id).click(function(){self.scroll_to_top();});
		this.hide_scroll_to_top_button();
	},

	// ### scroll_to_top
	// scrolls the grid to the top of its container
	// argurments:

	// 1.  {number}  **duration**  the duration of the scroll animation in ms, defaults to *500*
	scroll_to_top: function(duration){
		duration = (duration !== undefined) ? duration : 500;
		$("#" + this.div_string).animate({scrollTop:0},duration);
		this.hide_scroll_to_top_button();
	},

	// ### show_scroll_to_top_button
	// shows the scroll to top button
	// argurments:

	// 1.  {number}  **duration**  the duration of the scroll animation in ms, defaults to *500*
	show_scroll_to_top_button: function(duration){
		duration = (duration !== undefined) ? duration : 500;
		$("#" + this.scroll_to_top_button_id).clearQueue();
		$("#" + this.scroll_to_top_button_id).animate({opacity:1},duration);
	},

	// ### hide_scroll_to_top_button
	// hides the scroll to top button
	// argurments:

	// 1.  {number}  **duration**  the duration of the scroll animation in ms, defaults to *500*
	hide_scroll_to_top_button: function(duration){
		var self= this;
		duration = (duration !== undefined) ? duration : 500;
		$("#" + this.scroll_to_top_button_id).clearQueue();
		$("#" + this.scroll_to_top_button_id).animate({opacity:0},duration);
	},

	replace_collection: function(search_val,search_type,limit){
		var getData_promise;
		var self = this;
		this.search_val = (search_val !== undefined) ? search_val : this.search_val;
		this.search_type = (search_type !== undefined) ? search_type : this.search_type;
		this.limit = (limit !== undefined) ? limit : this.limit;
		$("#" + this.div_string).show();
		$("#" + this.div_string).animate({opacity:1},500);
		this.collection.reset();
		this.collection.skip = 0;
		self.collection.maxCount = Infinity;
		getData_promise =  this.collection.getData(this.search_val,this.search_type,this.limit);
		this.listenToOnce(this.collection,"add", function(){
			this.trigger("grid:ReplaceCollection");
			this.trigger("grid:Add");
			this.resize_div();
			// reset the slice all data button and reject the slice
			// deferred if it is present
			self.change_slice_button_state("slice");
			if (self.slice_defer){
				self.slice_defer.reject();
			}
		});
		return getData_promise;
	},

	update_collection: function(search_val,search_type,limit){
		var getData_promise;
		if (this.collection.models.length < this.collection.maxCount){
			var self = this;
			this.search_val = (search_val !== undefined) ? search_val : this.search_val;
			this.search_type = (search_type !== undefined) ? search_type : this.search_type;
			this.limit = (limit !== undefined) ? limit : this.limit;
			$("#" + this.div_string).show();
			$("#" + this.div_string).animate({opacity:1},500);
			getData_promise = this.collection.getData(this.search_val,this.search_type,this.limit);
			this.resize_div();
			this.listenToOnce(this.collection,"add", function(){
				this.trigger("grid:UpdateCollection");
				this.trigger("grid:Add");
			});
			return getData_promise;
		}
	},

	clear_collection: function(){
		var self = this;
		this.collection.skip = 0;
		$("#" + this.div_string).animate({opacity:0},500);
		window.setTimeout(function(){
			self.collection.reset();
			self.collection.maxCount = Infinity;
			$("#" + this.div_string).hide();

			// reset the slice all data button and reject the slice
			// deferred if it is present
			self.change_slice_button_state("slice");
			if (self.slice_defer){
				self.slice_defer.reject();
			}

		},500);
	},

	resize_div: function(){
		var self = this;
		var container_height =  $("#" + this.div_string).height();
		setTimeout(function(){
			var data_height = self.collection.length * 30 + 40;
			var target_height = (data_height > 300) ? 300 : data_height;

			$("#" + self.div_string).stop();
			$("#" + self.div_string).animate({height:target_height},500);
		},500);
	},

	compile_template: function(){
		this.div_string = 'backgrid_target' + new Date().getTime();;
		this.$el.append(BaristaTemplates.CMapBaseGrid({div_string: this.div_string,
													   span_class: this.span_class,
													   legend: this.legend,
													   no_download: this.no_download,
													   no_slice: this.no_slice,
													   no_legend: this.no_legend,
													}));
	},

	slice_all_table_data: function(){
		var self = this;
		// change the button state to progress
		this.change_slice_button_state("progress");

		// create a Deferred on the object to handle interaction with the slicing
		// operation.  This allows us to resolve the Deffered later in another
		// method before the ajax call returns if we need to
		this.slice_defer = $.Deferred();

		// If the Deferred resolves successfully, leave the button alone and let other the ajax call
		// below manipulate it.  If it is rejected, set the button back up to its original state.
		this.slice_defer.fail(function() {
				self.change_slice_button_state("slice");
			}
		);

		// grab the API 'q' query parameter from the grid's collection and send it
		// to sig_slice API.  if the slice job completes, check the return for a
		// file_url attribute and change the link in the slice button to expose the
		// link.  If it does not exist, the slice failed and we display a failure
		// message asking the user to try again
		sig_slice = 'http://prefix:8080/a2/sigslice?callback=?';
		$.ajax({
			dataType: 'json',
			url: sig_slice,
			data: {q: self.collection.q_param,l: 1000},
			success: function(res){
				if (res.file_url){
					self.change_slice_button_state("link",res.file_url);
				}else{
					self.change_slice_button_state("fail");
				}
			},
			error: function(){
				self.change_slice_button_state("fail");
			}
		});

		// if 60s pass, we assume that is too long and we
		// update the button with an error message and
		// resolve the deferred to indicate we finished the
		// ajax call normally.  This is a hack to emulate a 404 error in jsonp
		this.slice_timeout = setTimeout(function(){
			self.change_slice_button_state("fail");
		},60000);
	},

	change_slice_button_state: function (state,link){
		var self = this;
		// unbind an handlers on the button
		$("#" + self.div_string + "_slice",self.el).unbind();

		// handle the re-binding of handlers and update the button text and icon
		switch (state){
			case "slice":
				// update the slice button to show an available data slice
				$("#" + self.div_string + "_slice",self.el).html('<font color="#0072B2"><i class="icon-cogs"></i> slice all data</font>');

				// rebind the click event and clear a timeout if present
				$("#" + this.div_string + "_slice",this.el).click(function(){self.slice_all_table_data();});
				clearTimeout(self.slice_timeout);
				break;

			case "progress":
				// indicate that we are making a data slice
				$("#" + this.div_string + "_slice",this.el).html('<font color="#0072B2"><i class="icon-cog icon-spin"></i> slicing</font>');

				// unbind all handlers so that we can't click the while while we are slicing
				$("#" + this.div_string + "_slice",this.el).unbind();
				break;

			case "link":
				// construct an html string to expose the link
				var html_string = ['<a href="',
								   link,
								   '" class="cmap-link">',
								   '<font color="#0072B2"><i class="icon-download"></i> download slice</font></a>'].join('');

				// update the button and resolve the deferred to
				// indicate we finished the ajax call normally
				$("#" + self.div_string + "_slice",self.el).html(html_string);
				self.slice_defer.resolve();
				clearTimeout(self.slice_timeout);
				break;

			case "fail":
				// update the button with an error message,
				// resolve the deferred and clear the Timeout
				$("#" + self.div_string + "_slice",self.el).html('<font color="#D55E00"><i class="icon-exclamation"></i> slice failed. try again?</font>');
				$("#" + self.div_string + "_slice",self.el).click(function(){self.slice_all_table_data();});
				self.slice_defer.resolve();
				clearTimeout(self.slice_timeout);
				break;
		}

	},

	download_table: function(){
		var self = this;
		// indicate we are downloading something
		$("#" + this.div_string + "_download",this.el).html('<font color="#0072B2"><i class="icon-refresh icon-spin"></i> exporting</font>');

		// set up api call parameters
		var url = this.collection.url;
		var params = {q: this.collection.q_param,
            l:0,
            s:this.collection.s_param};

        // grab column header names
        var headers = _.pluck(this.columns,'label').join('\t');

        // grab column data names
        var names = _.pluck(this.columns,'name');

        // make a JSON API call to grab data for the table
		$.getJSON(url,params,function(res){
			var lines = [headers];
			res.forEach(function(r){
				var line_data = [];
				// for each data name in the table, grab the data. translate html
				// content to plain text where required
				names.forEach(function(n){
					switch (n){
					case "pert_type_label":
						line_data.push(Barista.CMapPertTypeAlias(r["pert_type"]).acronym);
						break;
					case "view_result_link":
						line_data.push(r["standard_result"]);
						break;
					case "rpt":
						line_data.push(r.params.rpt);
						break;
					case "tool_id":
						line_data.push(r.params.tool_id);
						break;
					case "date":
						line_data.push(String(new Date(parseInt(r["_id"].substring(0,8), 16)*1000)));
						break
					default:
						line_data.push(String(r[n]));
					}
				});
				line_string = line_data.join('\t');
				lines.push(line_string);
			});
			var lines_string = lines.join("\n");
			var blob = new Blob([lines_string], {type: "text/plain;charset=utf-8"});
			var timestamp = new Date().getTime();
			saveAs(blob, "CMapTable" + timestamp + ".txt");
			$("#" + self.div_string + "_download",self.el).html('<font color="#0072B2"><i class="icon-share"></i> export table</font>');
		});
	},

	// ### hide
	// hides the view by dimming the opacity and hiding it in the DOM

	// arguments

	// 1.  {number}  **duration**  the time in ms for the hide animation. defualts to *500*

	//		pert_detail_view.hide(duration);
	hide: function(duration){
		var self = this;
		this.$el.animate({opacity:0},duration);
		setTimeout(function(){self.$el.hide();},duration);
	},

	// ### show
	// shows the view by brightening the opacity and showing it in the DOM

	// arguments

	// 1.  {number}  **duration**  the time in ms for the show animation. defualts to *500*

	//		pert_detail_view.show(duration);
	show: function(duration){
		this.$el.show();
		this.$el.animate({opacity:1},duration);
	}
});

// # **HTMLCellView**

// a Backgrid extension that supports display of html content in Backgrid tables.  HTMLCellView defines
// both a Backgrid.Cell subclass (**HTMLCell**) and Backgrid.CellFormatter subclass (**HTMLFormatter**) to
// use with it.  These two components are used together to integrate with Backgrid's existing cell definitions

// in order to use **HTMLCell** and **HTMLFormatter**, specify the cell parameter of a Backgrid column definition
// as **HTMLCell**.  As an example:

//     // set up a default collection and column definition for the grid to operate on
//     this.collection = new PertCollection();
//     this.columns = [{name: "pert_type_label", label: "Pert Type", cell: HTMLCell, editable: false}];
// 
//     // build the template
//     this.compile_template();
// 
//     // build the grid on the template
//     this.grid = new Backgrid.Grid({
//       columns: this.columns,
//       collection: this.collection
//     });


// ## HTMLFormatter
// A formatter that extends Backgrid.CellFormatter to return exactly the raw input value as opposed
// to the string version of the rawinput 
Barista.HTMLFormatter = Backgrid.HTMLFormatter = function () {};
Barista.HTMLFormatter.prototype = new Backgrid.CellFormatter();
_.extend(Barista.HTMLFormatter.prototype, {
  fromRaw: function (rawValue) {
    if (_.isUndefined(rawValue) || _.isNull(rawValue)) return '';
    return rawValue;
  }
});

// ## HTMLCell
// An extension of Backgrid.Cell to render raw html content into the target element of the cell
Barista.HTMLCell = Backgrid.HTMLCell = Backgrid.Cell.extend({
  className: "html-cell",
  formatter: new Barista.HTMLFormatter(),
  render: function () {
    this.$el.html(this.formatter.fromRaw(this.model.get(this.column.get("name"))));
    return this;
  }
});
// # **HeatmapView**

// A Backbone.View that displays a simple heatmap.  The view is normally paired with 
// a *HeatmapModel*, but works with any model that provides *data*, *rid*, *cid*, and
// *title* attributes.

// optional arguments:

// 1.  {string}  **template**  The handlebars template to use. Defaults to *BaristaTemplates.d3_target*
// 2.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 3.  {string}  **low\_color**  the hex color code to use as lowest value color in the heatmap, defaults to *#0000ff*
// 4.  {string}  **high\_color**  the hex color code to use as highest value color in the heatmap, defaults to *#ff0000*
// 5.  {d3.scale}  **color_scale**  custom color scale to use in the heatmap.  If supplied, low\_color and high\_color are ignored, defaults to *undefined*
// 6.  {d3.scale}  **annot_color_scale**  custom color scale to use in the heatmap annotations. defaults to *undefined* and causes the annotations to be rendered with a standard color scale
// 7.  {Number}  **plot_height**  the height of the heatmap to generate in pixels, defaults to *300*
// 8.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"span12"*

// example usage:

//		heatmap_view = new HeatmapView({el: $("target_selector"),
//												model: new HeatmapModel(),
//												template: BaristaTemplates.d3_target,
//												bg_color: "#ffffff",
//												low_color: "#0000ff",
//												high_color: "#ff0000",
//												color_scale: undefined,
//												annot_color_scale: undefined,
//												plot_height: 300,
//												span_class: "span12"
//												});

Barista.Views.HeatmapView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "HeatMapView",

	// ### model
	// set up the view's default model
	model: new Barista.Models.HeatmapModel(),

	// ### initialize
	// overide the defualt Backbone.View initialize method to bind the view to model changes, bind
	// window resize events to view re-draws, compile the template, and render the view
	initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#ffffff";
		this.low_color = (this.options.low_color !== undefined) ? this.options.low_color : "#0000ff";
		this.high_color = (this.options.high_color !== undefined) ? this.options.high_color : "#ff0000";
		this.color_scale = (this.options.color_scale !== undefined) ? this.options.color_scale : undefined;
		this.annot_color_scale = (this.options.annot_color_scale !== undefined) ? this.options.annot_color_scale : undefined;

		// set up the defualt plot height
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 300;
		// set up the default template
		this.template = (this.options.template !== undefined) ? this.options.template : BaristaTemplates.d3_target;

		// set up the default span class
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "#span12";

		// bind render to model changes
		this.listenTo(this.model,'change', this.render);

		// compile the default template for the view and draw it for the first time
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// render the view for the first time
		this.redraw();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.redraw();} );
	},

	// ### compile_template
	// use Handlebars to compile the template for the view
	compile_template: function(){
		var self = this;
		this.div_string = 'd3_target' + new Date().getTime();;
		this.$el.append(this.template({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	// ### redraw
	// completely redraw the view. Updates both static and dynamic content in the view.
	redraw: function(){
		this.init_panel();
		this.render();
	},

	// ### init_panel
	// initialize the static parts of the view's panel
	init_panel: function(){
		// stuff this into a variable for later use
		var self = this;

		// check to see if the container is visible, if not, make it visible, but transparent so we draw it with
		// the proper dimensions
		if (this.$el.is(":hidden")){
			this.$el.animate({opacity:0},1);
			this.$el.show();
		}

		// set up the margin
		this.margin = 50;

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		// set up the panel's width and height
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();

		// rescale the width of the vis
		this.vis.transition().attr("width",this.width);
		this.vis.transition().attr("height",this.height);

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// determine the height and width of cells in the heatmap
		if (this.height < this.width){
			this.cell_height = (this.height - this.margin*2) / this.model.get('data').length;
			this.cell_width = (this.height - this.margin*2) / this.model.get('data')[0].length;
		}else{
			this.cell_height = (this.width - this.margin*2) / this.model.get('data').length;
			this.cell_width = (this.width - this.margin*2) / this.model.get('data')[0].length;
		}

		// determine the plot offset to center the plot in its container
		this.x_center = this.width / 2;
		this.x_offset = this.x_center - (this.cell_width * this.model.get('data')[0].length / 2);

		// map the data into a flattened array of objects with array indices and value as attributes
		this.unraveled_data = this.unravel_data(this.model.get('data'));

		// set up the color scale
		if (this.color_scale === undefined){
			var values = _.pluck(this.unraveled_data,'value');
			data_min = _.min(values);
			data_max = _.max(values);
			this.color = d3.scale.linear().domain([data_min,data_max]).range([this.low_color, this.high_color]);
		}else{
			this.color = this.color_scale;
		}

		// set up the annotation color scale
		if (this.annot_color_scale === undefined){
			var values = _.uniq(this.model.get('annots'))
			this.annot_color = d3.scale.category10().domain(values)
		}else{
			this.annot_color = this.annot_color_scale;
		}

		// draw the heatmap cells
		this.fg_layer.selectAll('.heatmap_cell').data([]).exit().remove();
		this.fg_layer.selectAll('.heatmap_cell').data(this.unraveled_data).enter().append('rect')
			.attr('class','heatmap_cell')
			.attr('x',function(d){return self.cell_width*d.i + self.x_offset;})
			.attr('y',function(d){return self.cell_height*d.j + self.margin;})
			.attr('width',this.cell_width)
			.attr('height',this.cell_height)
			.attr('value',function(d){return d.value;})
			.attr('stroke','white')
			.attr('stroke-width',1)
			.attr('fill',function(d){return self.color(d.value);});

		// draw the row labels
		this.fg_layer.selectAll('.heatmap_rid').data([]).exit().remove();
		this.fg_layer.selectAll('.heatmap_rid').data(this.model.get('rid')).enter().append('text')
			.attr('class','heatmap_rid')
			.attr('x',this.x_offset)
			.attr('y',function(d,i){return self.cell_height*i + self.cell_height/2 + self.margin;})
			.attr('text-anchor','end')
			.attr('dx','-.2em')
			.text(function(d){return d;});

		// draw the column labels
		this.fg_layer.selectAll('.heatmap_cid').data([]).exit().remove();
		this.fg_layer.selectAll('.heatmap_cid').data(this.model.get('cid')).enter().append('text')
			.attr('class','heatmap_cid')
			.attr('y',this.margin)
			.attr('x',function(d,i){return self.cell_width*i + self.cell_width/2 + self.x_offset;})
			.attr('text-anchor','middle')
			.attr('dy','-.2em')
			.text(function(d){return d;});

		// draw the annotation categories if they are present
		if (this.model.get('annots') !== undefined){
			this.fg_layer.selectAll('.heatmap_annots').data([]).exit().remove();
			this.fg_layer.selectAll('.heatmap_annots').data(this.model.get('annots')).enter().append('rect')
				.attr('class','heatmap_annots')
				.attr('x',function(d,i){return self.cell_width*i + self.x_offset;})
				.attr('y',function(d){return self.cell_height*(self.model.get('data').length) + self.cell_height/4 + self.margin;})
				.attr('width',this.cell_width)
				.attr('height',this.cell_height/4)
				.attr('value',function(d){return d;})
				.attr('stroke','white')
				.attr('stroke-width',1)
				.attr('fill',function(d){return self.annot_color(d);});

			if (this.model.get('annots_label') !== undefined){
				// draw the annot label if it is there
				this.fg_layer.selectAll('.heatmap_annots_label').data([]).exit().remove();
				this.fg_layer.selectAll('.heatmap_annots_label').data([this.model.get('annots_label')]).append('text')
					.attr('class','heatmap_annots_label')
					.attr('x',this.x_offset)
					.attr('y',function(d){return self.cell_height*(self.model.get('data').length) + self.cell_height/2 + self.margin;})
					.attr('opacity',1)
					.attr('text-anchor','end')
					.attr('dx','-.2em')
					.text(function(d){return d;});
			}
		}

		// set up the y scale
		this.set_scale();

		// build Axis
		this.build_axis();

		// add an axis
		this.fg_layer.append("g")
			.attr("class", "axis y-axis")
			.attr("transform", "translate(" + (this.width - this.margin/2) + ",0)")
			.call(this.yAxis);

		// style the axis
		this.style_axes();

		// add the cells for the look up table
		this.add_lookup_table();

		// add a png export overlay
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",this.x_offset)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.attr('text-anchor','end')
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});
	},

	// ### add look up table
	// adds a simple color lookup table based on the heatmap's color_scale
	add_lookup_table: function(){
		var self, data, scale_range, scale_domain, scale_unit, domain_unit;
		self = this;
		data = d3.range(50);
		scale_range = this.y_scale.range();
		scale_domain = this.y_scale.domain();
		scale_unit = (scale_range[1] - scale_range[0]) / data.length;
		domain_unit = (scale_domain[0] - scale_domain[1]) / data.length;

		this.fg_layer.selectAll('.lut_cell').data(data).enter().append('rect')
			.attr('class','lut_cell')
			.attr('x',self.width - self.margin/2 - 10)
			.attr('y',function(d,i){return i*scale_unit + self.margin;})
			.attr('width',10)
			.attr('height',scale_unit)
			.attr('fill',function(d,i){return self.color(scale_domain[0] - i*domain_unit);});

	},

	// ### set_scale
	// utility function used to get the y scale used in the plot
	set_scale: function(){
			var domain, range_min, range_max, range;
			// get the current data domain from this.color
			domain = this.color.domain();

			// calculate the range for the scale
			range_min = this.margin;
			range_max = this.height - this.margin;
			range = [range_min,range_max];

			// set the y_scale
			this.y_scale=d3.scale.linear().domain([domain[domain.length-1],domain[0]]).range(range);
	},

	// ### build_axis
	// utility function used to build y axis for the look up table
	build_axis: function(){
		this.yAxis = d3.svg.axis()
			.scale(this.y_scale)
			.orient("right");
	},

	// ### style axes
	// utility function to apply custom styles to axis components
	style_axes: function(){
		this.vis.selectAll('.axis').selectAll("path")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("line")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("text")
			.style("font-family","sans-serif")
			.style("font-size","11px");
	},

	// ### render
	// update the dynamic potions of the view
	render: function(){
		var self = this;
		// determine the height and width of cells in the heatmap
		if (this.height < this.width){
			this.cell_height = (this.height - this.margin*2) / this.model.get('data').length;
			this.cell_width = (this.height - this.margin*2) / this.model.get('data')[0].length;
		}else{
			this.cell_height = (this.width - this.margin*2) / this.model.get('data').length;
			this.cell_width = (this.width - this.margin*2) / this.model.get('data')[0].length;
		}

		// determine the plot offset to center the plot in its container
		this.x_center = this.width / 2;
		this.x_offset = this.x_center - (this.cell_width * this.model.get('data')[0].length / 2);

		// map the data into a flattened array of objects with array indices and value as attributes
		this.unraveled_data = this.unravel_data(this.model.get('data'));

		// set up the color scale
		if (this.color_scale === undefined){
			var values = _.pluck(this.unraveled_data,'value');
			data_min = _.min(values);
			data_max = _.max(values);
			this.color = d3.scale.linear().domain([data_min,data_max]).range([this.low_color, this.high_color]);
		}else{
			this.color = this.color_scale;
		}

		// set up the annotation color scale
		if (this.annot_color_scale === undefined){
			var values = _.uniq(this.model.get('annots'))
			this.annot_color = d3.scale.category10().domain(values)
		}else{
			this.annot_color = this.annot_color_scale;
		}

		// draw the heatmap cells
		var cell_selection = this.fg_layer.selectAll('.heatmap_cell').data(this.unraveled_data);
		cell_selection.enter().append('rect')
			.attr('class','heatmap_cell')
			.attr('x',this.x_center)
			.attr('y',(this.height - this.margin)/2)
			.attr('width',0)
			.attr('height',0)
			.attr('opacity',0)
			.attr('value',function(d){return d.value;})
			.attr('stroke','white')
			.attr('stroke-width',1)
			.attr('fill',function(d){return self.color(d.value);});

		cell_selection.transition().duration(500)
			.attr('x',function(d){return self.cell_width*d.i + self.x_offset;})
			.attr('y',function(d){return self.cell_height*d.j + self.margin;})
			.attr('width',this.cell_width)
			.attr('height',this.cell_height)
			.attr('opacity',1)
			.attr('fill',function(d){return self.color(d.value);});

		cell_selection.exit().remove();

		// draw the row labels
		rid_selection = this.fg_layer.selectAll('.heatmap_rid').data(this.model.get('rid'));
		rid_selection.enter().append('text')
			.attr('class','heatmap_rid')
			.attr('x',this.x_offset)
			.attr('y',(this.height - this.margin)/2)
			.attr('opacity',0)
			.attr('text-anchor','end')
			.attr('dx','-.2em')
			.text(function(d){return d;});

		rid_selection.transition().duration(500)
			.attr('opacity',1)
			.attr('y',function(d,i){return self.cell_height*i + self.cell_height/2 + self.margin;})
			.text(function(d){return d;});

		rid_selection.exit().remove();

		// draw the column labels
		cid_selection = this.fg_layer.selectAll('.heatmap_cid').data(this.model.get('cid'));
		cid_selection.enter().append('text')
			.attr('class','heatmap_cid')
			.attr('y',this.margin)
			.attr('x',this.x_center)
			.attr('opacity',0)
			.attr('text-anchor','middle')
			.attr('dy','-.2em')
			.text(function(d){return d;});

		cid_selection.transition().duration(500)
			.attr('opacity',1)
			.attr('x',function(d,i){return self.cell_width*i + self.cell_width/2 + self.x_offset;})
			.text(function(d){return d;});

		cid_selection.exit().remove();

		// draw the annotation categories if they are present
		if (this.model.get('annots') !== undefined){
			var label_selection = this.fg_layer.selectAll('.heatmap_annots').data(this.model.get('annots'));
			label_selection.enter().append('rect')
				.attr('class','heatmap_annots')
				.attr('x',this.x_center)
				.attr('y',(this.height - this.margin)/2)
				.attr('width',0)
				.attr('height',0)
				.attr('opacity',0)
				.attr('value',function(d){return d;})
				.attr('stroke','white')
				.attr('stroke-width',1)
				.attr('fill',function(d){return self.annot_color(d);});

			label_selection.transition().duration(500)
				.attr('x',function(d,i){return self.cell_width*i + self.x_offset;})
				.attr('y',function(d){return self.cell_height*(self.model.get('data').length) + self.cell_height/4 + self.margin;})
				.attr('width',this.cell_width)
				.attr('height',this.cell_height/4)
				.attr('opacity',1)
				.attr('fill',function(d){return self.annot_color(d);});

			label_selection.exit().remove();

			if (this.model.get('annots_label') !== undefined){
				// draw the annot label if it is there
				label_text_selection = this.fg_layer.selectAll('.heatmap_annots_label').data([this.model.get('annots_label')]);
				label_text_selection.enter().append('text')
					.attr('class','heatmap_annots_label')
					.attr('x',this.x_offset)
					.attr('y',(this.height - this.margin)/2)
					.attr('opacity',0)
					.attr('text-anchor','end')
					.attr('dx','-.2em')
					.text(function(d){return d;});

				label_text_selection.transition().duration(500)
					.attr('opacity',1)
					.attr('y',function(d){return self.cell_height*(self.model.get('data').length) + self.cell_height/2 + self.margin;})
					.text(function(d){return d;});

				label_text_selection.exit().remove();
			}
		}
	},

	// ### unravel_data
	// internal utility function to express 2D array data as a flat data array of objects with array
	// coordinates and data value as attributes.
	unravel_data: function(data){
		unraveled_data = [];
		data.forEach(function(i_e,i){
			i_e.forEach(function(j_e,j){
				unraveled_data.push({i:j, j:i, value:j_e});
			});
		});
		return unraveled_data;
	},

	// ### savePng
	// save the current state of the view into a png image
	save_png: function(){
		// build a canvas element to store the image temporarily while we save it
		var width = this.width;
		var height = this.height;
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.vis.selectAll(".no_png_export");
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.vis.node().parentNode.innerHTML;
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = "cmapHeatmapView" + new Date().getTime() + ".png";
		if (canvas.toBlob){canvas.toBlob(function(blob){saveAs(blob,filename);});}
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);
	}
});
// # **LDMapView**

// A Backbone.View that displays a simple LDMap.  The view is normally paired with 
// a *HeatMapModel*, but works with any model that provides *data*,*cid*, and
// *title* attributes.

// optional arguments:

// 1.  {string}  **template**  The handlebars template to use. Defaults to *BaristaTemplates.d3_target*
// 2.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 3.  {string}  **low\_color**  the hex color code to use as lowest value color in the LDMap, defaults to *#0000ff*
// 4.  {string}  **high\_color**  the hex color code to use as highest value color in the LDMap, defaults to *#ff0000*
// 5.  {d3.scale}  **color_scale**  custom color scale to use in the LDMap.  If supplied, low\_color and high\_color are ignored, defaults to *undefined*
// 6.  {Number}  **plot_height**  the height of the LDMap to generate in pixels, defaults to *300*
// 7.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"span12"*

// example usage:

//		LDMap_view = new LDMapView({el: $("target_selector"),
//												model: new HeatmapModel(),
//												template: BaristaTemplates.d3_target,
//												bg_color: "#ffffff",
//												low_color: "#0000ff",
//												high_color: "#ff0000",
//												color_scale: undefined,
//												plot_height: 300,
//												span_class: "span12"
//												});

Barista.Views.LDMapView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "LDMapView",

	// ### model
	// set up the view's default model
	model: new Barista.Models.HeatmapModel(),

	// ### initialize
	// overide the defualt Backbone.View initialize method to bind the view to model changes, bind
	// window resize events to view re-draws, compile the template, and render the view
	initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#ffffff";
		this.low_color = (this.options.low_color !== undefined) ? this.options.low_color : "#0000ff";
		this.high_color = (this.options.high_color !== undefined) ? this.options.high_color : "#ff0000";
		this.color_scale = (this.options.color_scale !== undefined) ? this.options.color_scale : undefined;

		// set up the defualt plot height
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 300;
		// set up the default template
		this.template = (this.options.template !== undefined) ? this.options.template : BaristaTemplates.d3_target;

		// set up the default span class
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "#span12";

		// bind render to model changes
		this.listenTo(this.model,'change', this.render);

		// compile the default template for the view and draw it for the first time
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// render the view for the first time
		this.redraw();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.redraw();} );
	},

	// ### compile_template
	// use Handlebars to compile the template for the view
	compile_template: function(){
		var self = this;
		this.div_string = 'd3_target' + new Date().getTime();;
		this.$el.append(this.template({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	// ### redraw
	// completely redraw the view. Updates both static and dynamic content in the view.
	redraw: function(){
		this.init_panel();
		this.render();
	},

	// ### init_panel
	// initialize the static parts of the view's panel
	init_panel: function(){
		// stuff this into a variable for later use
		var self = this;

		// check to see if the container is visible, if not, make it visible, but transparent so we draw it with
		// the proper dimensions
		if (this.$el.is(":hidden")){
			this.$el.animate({opacity:0},1);
			this.$el.show();
		}

		// set up the margin
		this.margin = 50;

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.ld_cell_layer').data([]).exit().remove();
		this.ld_cell_layer = this.vis.append("g").attr("class", "ld_cell_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		// set up the panel's width and height
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();

		// rescale the width of the vis
		this.vis.transition().attr("width",this.width);
		this.vis.transition().attr("height",this.height);

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// determine the height and width of cells in the heatmap
		if (this.height < this.width){
			this.cell_height = (this.height - this.margin) / this.model.get('data').length;
			this.cell_width = (this.height - this.margin) / this.model.get('data')[0].length;
		}else{
			this.cell_height = (this.width - this.margin) / this.model.get('data').length;
			this.cell_width = (this.width - this.margin) / this.model.get('data')[0].length;
		}

		// determine the plot offset to center the plot in its container
		this.x_center = this.width / 2;
		this.x_offset = this.x_center - (this.cell_width * this.model.get('data')[0].length / 2);

		// map the data into a flattened array of objects with array indices and value as attributes
		this.unraveled_data = this.unravel_data(this.model.get('data'));

		// set up the color scale
		if (this.color_scale === undefined){
			var values = _.pluck(this.unraveled_data,'value');
			data_min = _.min(values);
			data_max = _.max(values);
			this.color = d3.scale.linear().domain([data_min,data_max]).range([this.low_color, this.high_color]);
		}else{
			this.color = this.color_scale;
		}

		// draw the LDMap cells
		this.ld_cell_layer.selectAll('.heatmap_cell').data([]).exit().remove();
		this.ld_cell_layer.selectAll('.heatmap_cell').data(this.unraveled_data).enter().append('rect')
			.attr('class','heatmap_cell')
			.attr('x',function(d){return self.cell_width*d.i + self.x_offset;})
			.attr('y',function(d){return self.cell_height*d.j + self.margin;})
			.attr('transform',function(d){
				var x = self.cell_width + self.x_offset;
				var y = self.cell_height + self.margin;
				return 'rotate(45,' + x + ',' + y + ')';
			})
			.attr('width',this.cell_width)
			.attr('height',this.cell_height)
			.attr('value',function(d){return d.value;})
			.attr('stroke','white')
			.attr('stroke-width',1)
			.attr('fill',function(d){return self.color(d.value);});

		// draw the row labels
		this.fg_layer.selectAll('.heatmap_rid').data([]).exit().remove();
		this.fg_layer.selectAll('.heatmap_rid').data(this.model.get('rid')).enter().append('text')
			.attr('class','heatmap_rid')
			.attr('x',this.x_offset)
			.attr('y',function(d,i){return self.diamond_height*i + self.diamond_height/2 + self.margin;})
			.attr('text-anchor','end')
			.attr('dx','-.2em')
			.text(function(d){return d;});

		// add a png export overlay
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",this.x_offset)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.attr('text-anchor','end')
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});
	},

	// ### render
	// update the dynamic potions of the view
	render: function(){
		var self = this;
		// determine the height and width of cells in the heatmap
		var usable_height = this.height - this.margin;
		this.diamond_height = usable_height / this.model.get('data').length;
		this.cell_height = this.cell_width = Math.sqrt(Math.pow(this.diamond_height,2) / 2);

		// determine the plot offset to center the plot in its container
		this.x_center = this.width / 2;
		this.x_offset = this.x_center - (this.cell_width * this.model.get('data')[0].length / 2);

		// map the data into a flattened array of objects with array indices and value as attributes
		this.unraveled_data = this.unravel_data(this.model.get('data'));

		// set up the color scale
		if (this.color_scale === undefined){
			var values = _.pluck(this.unraveled_data,'value');
			data_min = _.min(values);
			data_max = _.max(values);
			this.color = d3.scale.linear().domain([data_min,data_max]).range([this.low_color, this.high_color]);
		}else{
			this.color = this.color_scale;
		}

		// draw the heatmap cells
		var cell_selection = this.ld_cell_layer.selectAll('.heatmap_cell').data(this.unraveled_data);
		cell_selection.enter().append('rect')
			.attr('class','heatmap_cell')
			.attr('x',this.x_center)
			.attr('y',(this.height - this.margin)/2)
			.attr('width',0)
			.attr('height',0)
			.attr('opacity',0)
			.attr('value',function(d){return d.value;})
			.attr('stroke','white')
			.attr('stroke-width',1)
			.attr('fill',function(d){return self.color(d.value);});

		cell_selection.transition().duration(500)
			.attr('x',function(d){return self.cell_width*d.i + self.x_offset;})
			.attr('y',function(d){return self.cell_height*d.j + self.margin;})
			.attr('transform',function(d){
				var x = self.cell_width + self.x_offset;
				var y = self.cell_height + self.margin;
				return 'rotate(45,' + x + ',' + y + ')';
			})
			.attr('width',this.cell_width)
			.attr('height',this.cell_height)
			.attr('opacity',1)
			.attr('fill',function(d){return self.color(d.value);});

		cell_selection.exit().remove();

		// draw the row labels
		rid_selection = this.fg_layer.selectAll('.heatmap_rid').data(this.model.get('rid'));
		rid_selection.enter().append('text')
			.attr('class','heatmap_rid')
			.attr('x',this.x_offset)
			.attr('y',(this.height - this.margin)/2)
			.attr('opacity',0)
			.attr('text-anchor','end')
			.attr('dy','-.5em')
			.text(function(d){return d;});

		rid_selection.transition().duration(500)
			.attr('opacity',1)
			.attr('x',this.cell_width + this.x_offset)
			.attr('y',function(d,i){return self.diamond_height*i + self.diamond_height/2 + self.margin;})
			.text(function(d){return d;});

		rid_selection.exit().remove();
	},

	// ### unravel_data
	// internal utility function to express 2D array data as a flat data array of objects with array
	// coordinates and data value as attributes.
	unravel_data: function(data){
		unraveled_data = [];
		data.forEach(function(i_e,i){
			i_e.forEach(function(j_e,j){
				if (i < j){
					unraveled_data.push({i:j, j:i, value:j_e});
				}
			});
		});
		return unraveled_data;
	},

	// ### savePng
	// save the current state of the view into a png image
	save_png: function(){
		// build a canvas element to store the image temporarily while we save it
		var width = this.width;
		var height = this.height;
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.vis.selectAll(".no_png_export");
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.vis.node().parentNode.innerHTML;
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = "cmapHeatmapView" + new Date().getTime() + ".png";
		if (canvas.toBlob){canvas.toBlob(function(blob){saveAs(blob,filename);});}
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);
	}
});
// # **PertCountView**

// A Backbone.View that shows that number of perturbagens matching a given query.  Optionally, sub-category
// counts are give for the type of perturbagen queried for.  This view is frequently paired with a
// **PertCountModel** or **CellCountModel**

// basic use:

//		count_view = new PertCountView();

// optional arguments:

// 1.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 2.  {string}  **well\_color**  the hex color code to use as the backgound of the wells, defaults to *#bdbdbd*
// 3.  {string}  **fg\_color**  the hex color code to use as the foreground color of the view, defaults to *#1b9e77*
// 4.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"col-lg-4"*
// 5.  {string}  **static\_text**  the static text header to use in the view, defaults to *"Reagents"*
// 6.  {array}  **categories**  an array of objects to use as categories to display, defaults to *[]*

//		count_view = new PertCountView({bg_color:"#ffffff",
//									well_color: "#bdbdbd",
//									fg_color: "#1b9e77",
//									span_class: "span4",
//									static_text: "Reagents",
//									categories: []});


Barista.Views.PertCountView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "PertCountView",

	// ### model
	// set up the view's default model
	model: new Barista.Models.PertCountModel(),

	// ### initialize
	// overide the default Backbone.View initialize method to handle optional arguments, compile the view
	// template, bind model changes to view updates, and render the view
	initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#ffffff";
		this.well_color = (this.options.well_color !== undefined) ? this.options.well_color : "#bdbdbd";
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : "#1b9e77";

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "col-lg-4";

		// set up static text, default if not specified
		this.static_text = (this.options.static_text !== undefined) ? this.options.static_text : "Reagents";

		// set up the default plot height
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 120;

		// allow for construction inside of a shadow DOM
		this.shadow_el = (this.options.shadow_el !== undefined) ? this.options.shadow_el : null;
		this.shadow_root = (this.options.shadow_root !== undefined) ? this.options.shadow_root : null;

		// set up default categories to display
		this.categories = (this.options.categories !== undefined) ? this.options.categories : [];
		this.category_ids = _.pluck(this.categories,'_id');

		// get categories from model and determine the maximum category count
		// this.categories = this.model.get('pert_types');
		this.max_category_count = _.max(_.pluck(this.categories,'count'));

		// bind render to model changes
		this.listenTo(this.model,'change', this.render);

		// compile the default template for the view
		this.compile_template();

		// set up a $div selector that can find the target div even if it is in a
		// shadow DOM
		if (this.shadow_el && this.shadow_root){
			this.$div = $(this.shadow_root).children(this.shadow_el).children("#" + this.div_string);
		}else{
			this.$div = $("#" + this.div_string);
		}

		// define the location where d3 will build its plot
		this.width = this.$div.width();
		this.height = this.$div.outerHeight();
		this.vis = d3.select(this.$div[0]).append("svg")
						.attr("width",this.width)
						.attr("height",this.height)

		// render the vis
		this.redraw();

		// bind window resize events to redraw.
		var self = this;
		$(window).resize(function() {self.redraw();} );
	},

	// ### compile_template
	// use Handlebars to compile the template for the view
	compile_template: function(){
		this.div_string = 'd3_target' + new Date().getTime();
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	// ### redraw
	// completely redraw the view.
	redraw: function(){
		this.init_panel();
		this.render();
	},

	// ### init_panel
	// initialize the static parts of the view's panel
	init_panel: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the panel's width and height
		this.width = this.$div.width();
		this.height = this.$div.outerHeight();

		// rescale the width of the vis
		this.vis.transition().duration(1).attr("width",this.width);

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		this.vis.selectAll('.controls_layer').data([]).exit().remove();
		this.controls_layer = this.vis.append("g").attr("class", "controls_layer");

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// draw the static Text
		this.fg_layer.selectAll('.static_text').data([]).exit().remove();
		this.fg_layer.selectAll('.static_text').data([1])
							.enter().append("text")
							.attr("class","static_text")
							.attr("x",10)
							.attr("y",14)
							.attr("font-family","'Helvetica Neue',Helvetica,Arial,sans-serif")
							.attr("font-weight","bold")
							.attr("font-size","13pt")
							.attr("fill",this.fg_color)
							.text(this.static_text.toUpperCase());
		// draw the pert count info
		var count = this.model.get('count');
		if (count === undefined){
			count = 0;
		}
		var count_text = this.fg_layer.selectAll('.count').data([]).exit().remove();
		count_text = this.fg_layer.selectAll('.count').data([1])
							.enter().append("text")
							.attr("class","count")
							.attr("x",10)
							.attr("y",55)
							.attr("font-family","'Helvetica Neue',Helvetica,Arial,sans-serif")
							.attr("font-weight","bold")
							.attr("font-size","36pt")
							.text(count);

		// for each sub-category, draw a bar graph well
		this.category_rect_selection = this.fg_layer.selectAll('.category_rect_well');
		this.category_rect_selection.data([]).exit().remove();
		this.category_rect_selection.data(this.categories).enter().append('rect')
			.attr("class","category_rect_well")
			.attr("x",10)
			.attr("y",function(d,i){return i*35 + 80;})
			.attr("height",10)
			.attr("width",function(d){return (self.width - 20);})
			.attr("fill",this.well_color);

		// for each sub-category, draw a bar graph
		this.category_rect_selection = this.fg_layer.selectAll('.category_rect');
		this.category_rect_selection.data([]).exit().remove();
		this.category_rect_selection.data(this.categories).enter().append('rect')
			.attr("class","category_rect")
			.attr("x",10)
			.attr("y",function(d,i){return i*35 + 80;})
			.attr("height",10)
			.attr("width",function(d){return (self.width - 20) * (d.count / self.max_category_count);})
			.attr("fill",this.fg_color);

		// for each sub-category, add a name
		this.fg_layer.selectAll('.category_name').data([]).exit().remove();
		this.fg_layer.selectAll('.category_name').data(this.categories).enter().append("text")
			.attr("class","category_name")
			.attr("x",10)
			.attr("y",function(d,i){return i*35 + 105;})
			.attr("font-family","'Helvetica Neue',Helvetica,Arial,sans-serif")
			.attr("font-weight","normal")
			.attr("font-size","12pt")
			.text(function(d){return Barista.CMapPertTypeAlias(d._id).name;});

		// for each sub-category, add a value
		this.fg_layer.selectAll('.category_value').data([]).exit().remove();
		this.fg_layer.selectAll('.category_value').data(this.categories).enter().append("text")
			.attr("class","category_value")
			.attr("x",this.width - 10)
			.attr("y",function(d,i){return i*35 + 105;})
			.attr("font-family","'Helvetica Neue',Helvetica,Arial,sans-serif")
			.attr("font-weight","normal")
			.attr("font-size","12pt")
			.attr("text-anchor","end")
			.text("xhtml:div")
			.text(function(d){return d.count.toFixed(0);});

		// add a png export overlay
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",10)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});
	},

	render: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the panel's width and height
		this.width = this.$div.width();
		this.height = this.$div.outerHeight();

		// draw the pert count info
		var count = this.model.get('count');
		if (count === undefined){
			count = 0;
		}
		this.vis.selectAll('.count').data([1])
			.transition().duration(500)
			.tween("text", function() {
			    var i = d3.interpolate(this.textContent.replace(",",""), count);
			    return function(t) {
			      this.textContent = Barista.numberWithCommas(Math.round(i(t)))	;
			    };
			});

		// transition the updated bars
		count = this.model.get('count');
		this.pert_types = this.model.get("pert_types");
		this.pert_types = _.filter(this.pert_types,function(o){return self.category_ids.indexOf(o._id) != -1;});
		var category_counts = _.pluck(this.pert_types,'count');
		var category_sum = _.reduce(category_counts, function(memo, num){ return memo + num; }, 0);
		this.pert_types.push({_id:'other', count:count - category_sum});
		this.categories.forEach(function(e,i,l){
			var ids = _.pluck(self.pert_types,'_id');
			var index = ids.indexOf(e._id);
			if (index != -1){
				self.categories[i].count = self.pert_types[index].count;
			}else{
				self.categories[i].count = 0.00001;
			}
		});
		this.max_category_count = _.max(_.pluck(this.categories,'count'));
		this.max_category_count = (this.max_category_count < 1) ? 1 : this.max_category_count;
		var category_update_selection = this.fg_layer.selectAll('.category_rect').data(this.categories);
		category_update_selection.transition().duration(500)
			.attr("width",function(d){return (self.width - 20) * (d.count / self.max_category_count);});

		// transition the updated category labels
		this.fg_layer.selectAll('.category_value').data(this.categories)
			.transition().duration(500)
			.tween("text", function(d,i) {
				var count = d.count.toFixed(0);
			    var i = d3.interpolate(this.textContent.replace(",",""), count);
			    return function(t) {
			      this.textContent = Barista.numberWithCommas(Math.round(i(t)));
			    };
			});
	},

	// ### savePng
	// save the current state of the view into a png image
	save_png: function(){
		//set the animate the div containing the view by applying and then removing
		// css classes that defined the transitions we want
		var $div = this.$div;
		$div.addClass("barista-base-view");
		$div.toggleClass("exporting");
		setTimeout(function(){$div.toggleClass("exporting");},500);

		// build a canvas element to store the image temporarily while we save it
		var width = this.width;
		var height = this.height;
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.vis.selectAll(".no_png_export");
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.vis.node().parentNode.innerHTML;
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = "BaristaPertCountView" + new Date().getTime() + ".png";
		if (canvas.toBlob){
			canvas.toBlob(function(blob){
				saveAs(blob,filename);
				});
		}
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);
	}
});

// # **PertDetailView**

// A Backbone.View that shows information about a small molecule compound or gene.  This view is
// frequently paired with a PertDetailModel.

//		pert_detail_view = new PertDetailView({el: $("target_selector")});

// optional arguments:

// 1.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 2.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"col-lg-12"*

//		pert_detail_view = new PertDetailView({el: $("target_selector"),
// 												model: PertDetailModel,
// 												bg_color: "#ffffff",
// 												span_class: "col-lg-12"});
Barista.Views.PertDetailView = Barista.Views.BaristaBaseView.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "PertDetailView",

	// ### model
	// set up the view's default model
	model: new Barista.Models.PertDetailModel(),

	// ### initialize
	// overide the defualt Backbone.View initialize method to bind the view to model changes, bind
	// window resize events to view re-draws, compile the template, and render the view
	initialize: function(){
		var self = this;
		// set up the plot height
		this.options.plot_height = 260;

		// set up the open and closed state heights
		this.open_height = this.options.plot_height;
		this.closed_height = this.options.plot_height;
		this.panel_open = false;

		//populate the model with an initial compound and then render the view
		this.model.fetch("war","compound").then(function(){
			console.log(self.model.attibutes);
			self.base_initialize();
		});

	},

	// ### render
	// completely render the view. Updates both static and dynamic content in the view.
	render: function(){
		// keep track of our scope at this level
		var self = this;

		// render the base view components
		this.base_render();

		// (re)draw the pert_iname text
		this.fg_layer.selectAll('.pert_iname_text').data([]).exit().remove();
		this.fg_layer.selectAll('.pert_iname_text').data([1])
							.enter().append("text")
							.attr("class","pert_iname_text")
							.attr("x",10)
							.attr("y",75)
							.attr("font-family","Helvetica Neue")
							.attr("font-weight","bold")
							.attr("font-size","36pt")
							.text(this.model.get('pert_iname'));

		// (re)draw the pert_summary or clear it if there pert_summary is null
		if (this.model.get('pert_summary')){
			this.render_summary({summary_string: this.model.get('pert_summary'),
								top: 45,
								bottom: 100,
								left: this.fg_layer.selectAll('.pert_iname_text').node().getComputedTextLength() + 30});
		}else{
			this.clear_summary();
		}

		// add a png export overlay
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",10)
			.attr("y",this.height - 20)
			.attr("opacity",0.25)
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});

		// render an image that will to indicate that the user can click the content to unfold the panel
		this.cevron_image_link = (this.panel_open) ? 'http://coreyflynn.github.io/Bellhop/img/up_arrow_select.png' : 'http://coreyflynn.github.io/Bellhop/img/down_arrow_select.png';

		this.controls_layer.selectAll('.cevron_icon').data([]).exit().remove();
		this.controls_layer.selectAll('.cevron_icon').data([1])
			.enter().append("svg:image")
			.attr("class","cevron_icon")
			.attr("xlink:href", this.cevron_image_link)
			.attr("x",this.width/2 - 9)
			.attr("y",function(){
				if (self.panel_open){
					return self.height - 15;
				}else{
					return self.height - 20;
				}
			})
			.attr("height",20)
			.attr("width", 18)
			.attr("transform", "rotate(0)")
			.style("cursor","pointer")
			.on("click", function(){self.toggle_panel_state()});

		// render a button to allow the user to expand the view to show its full content
		this.controls_layer.selectAll("." + this.div_string + "more_button").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "more_button").data([1]).enter()
			.append("rect")
			.attr("x",0)
			.attr("y",this.height - 15)
			.attr("class",this.div_string + "more_button")
			.attr("height",15)
			.attr("width",this.width)
			.attr("opacity",0)
			.style("cursor","pointer")
			.attr("fill","#BDBDBD")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",0.25);})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0);})
			.on("click", function(){self.toggle_panel_state()})

		// render the compound or gene specfic portion of the view
		switch (this.model.get("pert_type")){
		case "trt_cp":
			this.render_compound();
			break;
		case "gene":
			this.render_gene();
			break;
		};

		return this;
	},

	// ### render_compound
	// utility to render the compound specific parts of the view
	render_compound: function(){
		this.clear_label_and_text();
		var self = this;
		// (re)draw the pert_id text
		this.fg_layer.selectAll('.pert_id_text').data([]).exit().remove();
		this.fg_layer.selectAll('.pert_id_text').data([1])
							.enter()
							.append("text")
							.attr("class","pert_id_text")
							.attr("x",10)
							.attr("y",100)
							.attr("font-family","Helvetica Neue")
							.attr("font-size","14pt")
							.text(this.model.get('pert_id'));

		// draw compound structure if there is one
		if (this.model.get("structure_url")){
			this.fg_layer.selectAll('.index_text_icon').data([]).exit().remove();
			this.fg_layer.selectAll('.index_text_icon').data([1])
								.enter().append("svg:image")
								.attr("class","index_text_icon")
								.attr("xlink:href", this.model.get("structure_url"))
								.attr("x",10)
								.attr("y",100)
								.attr("height",150)
								.attr("width",300)
								.style("cursor","pointer")
								.on("click", function(){window.location = self.model.get('structure_url')});
		}

		// draw the static index reagent text
		this.fg_layer.selectAll('.index_text').data([]).exit().remove();
		this.fg_layer.selectAll('.index_text').data([1])
							.enter().append("text")
							.attr("class","index_text")
							.attr("x",10)
							.attr("y",30)
							.attr("fill","#E69F00")
							.attr("font-family","Helvetica Neue")
							.attr("font-size","20pt")
							.text('Small Molecule Compound');

		// render additional labels
		this.label_y_position = 100;

		// (re)draw the in_summly annotation
		this.render_label_and_value('collection', 'Collection', 'pert_icollection', false, 320);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('num_sig', 'Signatures', 'num_sig', false, 320);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('gold_sig', 'Gold Signatures', 'num_gold', false, 320);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('num_inst', 'Experiments', 'num_inst', false, 320);

		// (re)draw the in_summly annotation
		this.render_label_and_value('summly', 'In Summly', 'in_summly', false, 320);


		// set the y position to be below the fold
		this.label_y_position = 260;

		// (re)draw the weight label and weight
		this.render_label_and_value('weight', 'Weight', 'molecular_wt');

		// (re)draw the formula and label
		this.render_label_and_value('formula', 'Formula', Barista.NumbersToSubscript(this.model.get('molecular_formula')),true);

		// (re)draw the logp and label
		this.render_label_and_value('logp', 'LogP', 'logp');

		// (re)draw the formula and label
		this.render_label_and_value('vendor', 'Vendor', 'pert_vendor');

		// (re)draw the pubchem_cid and label
		this.render_label_and_value('pubchem_cid', 'PubChem CID', 'pubchem_cid', false, 10, "http://pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?cid=" + self.model.get('pubchem_cid'));

		// (re)draw the InChIKey label and InChIKey
		if(this.model.get("inchi_key")){
			this.render_label_and_value('inchi_key', 'InChIKey', this.model.get("inchi_key").split("InChIKey=")[1], true);
		}

		// (re)draw the InChI string
		// this.render_label_and_value('inchi_string', 'InChI String', this.model.get("inchi_string").split("InChI=")[1], true);

		// (re)draw the SMILES
		this.render_label_and_value('smiles', 'SMILES', 'canonical_smiles');

		// draw alternate names
		this.label_y_position += 20;
		if (this.model.get('alt_name')){
			this.render_label_and_value('alt_name_label', 'Alternate Names', '', true);
			this.label_y_position += 5;
			this.draw_tags('alt_name', 'Alternate Names', this.model.get('alt_name'), 'white', '#BDBDBD');
		}

		// draw the cell lines that the compound has been profiled in
		if (this.model.get('cell_id')){
			this.render_label_and_value('cell_id_label', 'Cell Lines', '', true);
			this.label_y_position += 5;
			this.draw_tags('cell_id', 'Cell Lines', this.model.get('cell_id'), 'white', '#CC79A7');
		}

		// draw the signatures for the compound
		if (this.model.get('sig_id')){
			this.render_label_and_value('sig_id_label', 'Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('sig_id', 'Signature IDs', this.model.get('sig_id'), 'white', '#BDBDBD');
		}

		// draw the gold signatures for the compound
		if (this.model.get('sig_id_gold')){
			this.render_label_and_value('gold_sig_id_label', 'Gold Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('gold_sig_id', 'Gold Signature IDs', this.model.get('sig_id_gold'), 'white', '#BDBDBD');
		}

		// check to see if there is a pubchem id and draw a link for it if there
		// is one
		this.controls_layer.selectAll("." + this.div_string + "pubchem_link").data([]).exit().remove();
		if (this.model.get('pubchem_cid')){
			this.controls_layer.selectAll("." + this.div_string + "pubchem_link").data([1]).enter().append("text")
				.attr("class", this.div_string + "pubchem_link no_png_export")
				.attr("x",this.width - 10)
				.attr("y",this.height - 20)
				.attr("opacity",0.25)
				.attr("text-anchor","end")
				.style("cursor","pointer")
				.text("PubChem")
				.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
				.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
				.on("click", function(){window.location = "http://pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?cid=" + self.model.get('pubchem_cid')});
		}

		// check to see if there is a wikipedia url and draw a link for it if there
		// is one
		this.controls_layer.selectAll("." + this.div_string + "wiki_link").data([]).exit().remove();
		if (this.model.get('wiki_url')){
			this.controls_layer.selectAll("." + this.div_string + "wiki_link").data([1]).enter().append("text")
				.attr("class", this.div_string + "wiki_link no_png_export")
				.attr("x",this.width - 80)
				.attr("y",this.height - 20)
				.attr("opacity",0.25)
				.attr("text-anchor","end")
				.style("cursor","pointer")
				.text("Wiki")
				.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
				.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
				.on("click", function(){window.location = self.model.get('wiki_url')});
		}
	},

	// ### render_gene
	// utility to render the gene specific parts of the view
	render_gene: function(){
		this.clear_label_and_text();
		var self = this;
		// draw the static index reagent text
		this.fg_layer.selectAll('.index_text').data([]).exit().remove();
		this.fg_layer.selectAll('.index_text').data([1])
							.enter().append("text")
							.attr("class","index_text")
							.attr("x",10)
							.attr("y",30)
							.attr("fill","#0072B2")
							.attr("font-family","Helvetica Neue")
							.attr("font-size","20pt")
							.text('Gene');

		// (re)draw the static knockdown text
		this.fg_layer.selectAll('.pert_id_text').data([]).exit().remove();
		var static_text_enter = this.fg_layer.selectAll('.pert_id_text').data([1]).enter();
		if (this.model.get("has_kd")){
			this.fg_layer.selectAll('.kd_pert_id_text').data([]).exit().remove();
			this.fg_layer.selectAll('.kd_pert_id_text').data([1])
								.enter()
								.append("text")
								.attr("class","kd_pert_id_text pert_id_text")
								.attr("x",10)
								.attr("y",100)
								.attr("fill","#56B4E8")
								.attr("font-family","Helvetica Neue")
								.attr("font-size","14pt")
								.text("Knockdown");
		}

		// (re)draw the static overexpression text
		if (this.model.get("has_oe")){
			this.fg_layer.selectAll('.oe_pert_id_text').data([]).exit().remove();
			this.fg_layer.selectAll('.oe_pert_id_text').data([1])
								.enter()
								.append("text")
								.attr("class","oe_pert_id_text pert_id_text")
								.attr("x",350)
								.attr("y",100)
								.attr("fill","#D55E00")
								.attr("font-family","Helvetica Neue")
								.attr("font-size","14pt")
								.text("Over Expression");
		}

		// render additional labels
		this.label_y_position = 100;

		// (re)draw the pert_id annotation
		this.render_label_and_value('trt_sh_pert_id', 'ID', 'trt_sh_pert_id');
		this.render_label_and_value('trt_oe_pert_id', 'ID', 'trt_oe_pert_id', false, 350, null,false);

		// (re)draw the signatures annotation
		this.render_label_and_value('trt_sh_num_sig', 'Signatures', 'trt_sh_num_sig');
		this.render_label_and_value('trt_oe_num_sig', 'Signatures', 'trt_oe_num_sig', false, 350, null,false);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('trt_sh_num_gold', 'Gold Signatures', 'trt_sh_num_gold');
		this.render_label_and_value('trt_oe_num_gold', 'Gold Signatures', 'trt_oe_num_gold', false, 350, null,false);

		// (re)draw the experiments annotation
		this.render_label_and_value('trt_sh_num_inst', 'Experiments', 'trt_sh_num_inst');
		this.render_label_and_value('trt_oe_num_inst', 'Experiments', 'trt_oe_num_inst', false, 350, null,false);


		// set the y position to be below the fold
		this.label_y_position = 260;

		// (re)draw the vector_id annotation
		this.render_label_and_value('trt_sh_vector_id', 'Knockdown Vector', 'trt_sh_vector_id');

		// (re)draw the target region annotation
		this.render_label_and_value('trt_sh_target_region', 'Knockdown Target Region', 'trt_sh_target_region');

		// (re)draw the 6 base seed annotation
		this.render_label_and_value('trt_sh_seed_seq6', 'Knockdown 6 Base Seed Sequence', 'trt_sh_seed_seq6');

		// (re)draw the 7 base seed annotation
		this.render_label_and_value('trt_sh_seed_seq7', 'Knockdown 7 Base Seed Sequence', 'trt_sh_seed_seq7');

		// (re)draw the target sequence annotation
		this.render_label_and_value('trt_sh_target_seq', 'Knockdown Target Sequence', 'trt_sh_target_seq');

		// (re)draw the oligo sequence annotation
		this.render_label_and_value('trt_sh_oligo_seq', 'Knockdown Oligo Sequence', 'trt_sh_oligo_seq');

		// draw the cell lines that the knockdown has been profiled in
		this.label_y_position += 20;
		if (this.model.get('trt_sh_cell_id')){
			this.render_label_and_value('trt_sh_cell_id_label', 'Knockdown Cell Lines', '', true);
			this.label_y_position += 5;
			this.draw_tags('trt_sh_cell_id', 'Cell Lines', this.model.get('trt_sh_cell_id'), 'white', '#CC79A7');
		}

		// draw the signatures for the knockknockdown
		if (this.model.get('trt_sh_sig_id')){
			this.render_label_and_value('trt_sh_sig_id_label', 'Knockdown Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('trt_sh_sig_id', 'Signature IDs', this.model.get('trt_sh_sig_id'), 'white', '#BDBDBD');
		}

		// draw the gold signatures for the knockdown
		if (this.model.get('trt_sh_sig_id_gold')){
			this.render_label_and_value('trt_sh_sig_id_gold_label', 'Gold Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('trt_sh_sig_id_gold', 'Knockdown Gold Signature IDs', this.model.get('trt_sh_sig_id_gold'), 'white', '#BDBDBD');
		}

		// draw the cell lines that the over expression has been profiled in
		this.label_y_position += 20;
		if (this.model.get('trt_oe_cell_id')){
			this.render_label_and_value('trt_oe_cell_id_label', 'Over Expression Cell Lines', '', true);
			this.label_y_position += 5;
			this.draw_tags('trt_oe_cell_id', 'Cell Lines', this.model.get('trt_oe_cell_id'), 'white', '#CC79A7');
		}

		// draw the signatures for the over expression
		if (this.model.get('trt_oe_sig_id')){
			this.render_label_and_value('trt_oe_sig_id_label', 'Over Expression Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('trt_oe_sig_id', 'Signature IDs', this.model.get('trt_oe_sig_id'), 'white', '#BDBDBD');
		}

		// draw the gold signatures for the over expression
		if (this.model.get('trt_oe_sig_id_gold')){
			this.render_label_and_value('trt_oe_sig_id_gold_label', 'Gold Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('trt_oe_sig_id_gold', 'Over Expression Gold Signature IDs', this.model.get('trt_oe_sig_id_gold'), 'white', '#BDBDBD');
		}


		return this;
	},

	// ### update
	// update the dynamic potions of the view
	update: function(){
		this.render();
		return this;
	},

	// ### render_label_and_value
	// utility function to draw a standard label and value for that label under
	// the main pert_iname and pert_id text.  If pass_model_field_as_text is true,
	// pass the value in model_field as text instead of serching for it in the model
	render_label_and_value: function(class_name_base, label_text, model_field, pass_model_field_as_text, x_pos_base, value_link,increment_y){
		// set up a local variable to keep our scope straight
		var self = this;

		// make sure that we have a label_y_position set
		this.label_y_position = (this.label_y_position !== undefined) ? this.label_y_position: 100;
		if (increment_y === undefined){
			increment_y = true;
		}
		if (increment_y){
			this.label_y_position += 25;
		}


		// make sure that there is a base position for the x_label set
		var x_pos_base = (x_pos_base !== undefined) ? x_pos_base: 10;

		// update the open_height to the total height of all that we have drawn
		this.open_height = (this.options.plot_height > this.label_y_position + 40) ? this.options.plot_height : this.label_y_position + 40;

		// (re)draw the label
		this.fg_layer.selectAll('.' + class_name_base + '_label_text').data([]).exit().remove();
		this.fg_layer.selectAll('.' + class_name_base + '_label_text').data([1])
							.enter()
							.append("text")
							.attr("class",class_name_base + '_label_text label_and_text')
							.attr("x",x_pos_base)
							.attr("y",this.label_y_position)
							.attr("font-family","Helvetica Neue")
							.attr("font-size","14pt")
							.text(label_text + ':');

		// (re)draw the text
		this.fg_layer.selectAll('.' + class_name_base + '_text').data([]).exit().remove();
		var model_text = '';
		if (pass_model_field_as_text){
			model_text = model_field;
		}else{
			model_text = this.model.get(model_field);
		}
		var x_pos = x_pos_base + this.fg_layer.selectAll('.' + class_name_base + '_label_text').node().getComputedTextLength() + 10;

		// if there is a value link supplied, use it as a link on the text, otherwise, render plain text
		if (value_link){
			this.fg_layer.selectAll('.' + class_name_base + '_text').data([1])
								.enter()
								.append("text")
								.attr("class",class_name_base + '_text label_and_text')
								.attr("x",x_pos)
								.attr("y",this.label_y_position)
								.attr("font-family","Helvetica Neue")
								.attr("font-size","14pt")
								.attr("fill","#BDBDBD")
								.style("cursor","pointer")
								.on("mouseover",function(){d3.select(this).transition().duration(500).attr("fill","#56B4E9");})
								.on("mouseout",function(){d3.select(this).transition().duration(500).attr("fill","#BDBDBD");})
								.on("click", function(){window.location = value_link})
								.text(model_text);
		}else{
			this.fg_layer.selectAll('.' + class_name_base + '_text').data([1])
								.enter()
								.append("text")
								.attr("class",class_name_base + '_text label_and_text')
								.attr("x",x_pos)
								.attr("y",this.label_y_position)
								.attr("font-family","Helvetica Neue")
								.attr("font-size","14pt")
								.attr("fill","#BDBDBD")
								.text(model_text);
		}
	},

	// ### render_summary
	// utility function to break a long summary string into a multiline
	// and draw it at the desired location

	// options

	// 1.  {string}  **summary_string**  the string to be displayed, defaults to *""*
	// 2.  {right}  **right**  the x position to place the **right** edge of text, defaults to *this.width*
	// 3.  {left}  **left**  the x position to place the **left** edge of text, defaults to *this.width - 500*
	// 4.  {top}  **top**  the y position to place the **top** edge of text, defaults to *0*
	// 5.  {bottom}  **bottom**  the y position to place the **bottom** edge of text, defaults to *100*
	render_summary: function(options){
		var self = this;

		// default arguments if they are not present
		summary_string = this.model.get("pert_summary");
		top_edge = (options.top !== undefined) ? options.top : 0;
		bottom_edge = (options.bottom !== undefined) ? options.bottom : 100;
		right_edge = (options.right !== undefined) ? options.right : this.width;
		left_edge = (options.left !== undefined) ? options.left : this.width - 500;

		// clear existing summary
		this.clear_summary();

		// compute the number of lines we have room for
		this.line_height = 15;
		this.num_lines_allowed = Math.floor((bottom_edge - top_edge) / this.line_height);

		// compute the number of characters per line we will allow and how
		// many lines the summary would need if we rendered all of it
		this.line_width = right_edge - left_edge;
		this.num_char = Math.floor(this.line_width / 13 / .75);
		this.num_char = (this.num_char > 60) ? 60 : this.num_char;
		this.num_lines = Math.ceil(summary_string.length / this.num_char);

		// compute the line splits to display in the summary
		this.lines = [];
		for (var i=0; i<this.num_lines; i++){
			if (i < this.num_lines_allowed - 1){
				var l = (summary_string.slice(i*this.num_char,(i+1)*this.num_char).slice(-1) != " " && summary_string.slice(i*this.num_char,(i+1)*this.num_char).slice(this.num_char-1,this.num_char) != "") ? summary_string.slice(i*this.num_char,(i+1)*this.num_char)  + '-': summary_string.slice(i*this.num_char,(i+1)*this.num_char);
				this.lines.push(l);
			}else{
				var l = summary_string.slice(i*this.num_char,(i+1)*this.num_char - 3) + '...';
				this.lines.push(l);
				break;
			}
		}

		// draw lines
		self.fg_layer.selectAll('.' + self.div_string + 'summary_text' + i).data(this.lines)
				.enter()
				.append("text")
				.attr("class",self.div_string + "summary_text")
				.attr("x",left_edge)
				.attr("y",function(d,i){return top_edge + 13 + i*15;})
				.attr("font-family","Helvetica Neue")
				.attr("font-size","13pt")
				.attr("fill","#BDBDBD")
				// .attr("text-anchor", "middle")
				.text(function(d){return d;});
	},

	// ### toggle_panel_state
	// utility to open or close the view
	toggle_panel_state: function(){
		var self = this;
		var h;
		if (this.panel_open){
			h = this.options.plot_height;
			$("#" + this.div_string).animate({height:h},500);
			this.panel_open = false;
			this.controls_layer.selectAll(".cevron_icon").attr("xlink:href", 'http://coreyflynn.github.io/Bellhop/img/down_arrow_select.png')
			this.controls_layer.selectAll('.cevron_icon').transition().duration(500).attr("y",h - 20);
		}else{
			h = this.open_height
			$("#" + this.div_string).animate({height:h},500);
			this.panel_open = true;
			this.controls_layer.selectAll(".cevron_icon").attr("xlink:href", 'http://coreyflynn.github.io/Bellhop/img/up_arrow_select.png')
			this.controls_layer.selectAll('.cevron_icon').transition().duration(500).attr("y",h - 15);
		}
		this.controls_layer.selectAll("." + this.div_string + "more_button").transition().duration(500).attr("y",h - 15);
		this.controls_layer.selectAll("." + this.div_string + "wiki_link").transition().duration(500).attr("y",h - 20);
		this.controls_layer.selectAll("." + this.div_string + "pubchem_link").transition().duration(500).attr("y",h - 20);
		this.controls_layer.selectAll("." + this.div_string + "png_export").transition().duration(500).attr("y",h - 20);
		this.vis.transition().duration(500).attr("height",h);
	},

	// ### draw tags
	// utility function to draw tags given an array.
	draw_tags: function(class_name_base, label_text, data, fg_color, tag_color){
		var x_offsets = [10];
		var row_number = 0;
		var y_offsets = [];
		var lengths = [];
		var tags = [];
		var self = this;
		var EmSize = Barista.getEmSizeInPixels(this.div_string);

		// draw the foreground text of all the tags
		this.fg_layer.selectAll('.' + class_name_base + 'tag_list_text').data([]).exit().remove();
		this.fg_layer.selectAll('.' + class_name_base + 'tag_list_text').data(data).enter().append('text')
			.attr("class", class_name_base + "tag_list_text")
			.text(function(d){return d;})
			.attr("x",function(d,i){
				lengths.push(this.getComputedTextLength() + 15);
				var current_x_offset = x_offsets[i];
				if (current_x_offset + lengths[i] > self.width){
					x_offsets[i] = 5;
					x_offsets.push(lengths[i] + x_offsets[i]);
					row_number += 1;
				}else{
					x_offsets.push(lengths[i] + x_offsets[i]);
				}
				y_offsets.push((row_number * 1.5 + 1));
				return x_offsets[i];
			})
			.attr("y",function(d,i){return self.label_y_position + y_offsets[i] * EmSize;})
			.attr("opacity",1)
			.attr("fill",fg_color)

		// draw the background of all the tags
		this.bg_layer.selectAll('.' + class_name_base + 'tag_list_rect').data([]).exit().remove();
		this.bg_layer.selectAll('.' + class_name_base + 'tag_list_rect').data(data).enter().append('rect')
			.attr("class", class_name_base + "tag_list_rect")
			.attr("x",function(d,i){return x_offsets[i] - 5;})
			.attr("y",function(d,i){return self.label_y_position + (y_offsets[i] - 1) * EmSize;})
			.attr("rx",4)
			.attr("ry",4)
			.attr('width',function(d,i){return lengths[i] - 4;})
			.attr('height','1.2em')
			.attr("opacity",1)
			.attr("fill",tag_color);

		// update the label_y_position
		this.label_y_position += 10 + y_offsets.slice(-1)[0] * EmSize;

		// update the open_height to the total height of all that we have drawn
		this.open_height = (this.options.plot_height > this.label_y_position + 40) ? this.options.plot_height : this.label_y_position + 40;

		return this
	},

	// ### clear_summary
	// utility function to clear the pert summary
	clear_summary: function(){
		this.fg_layer.selectAll('.summary_text').data([]).exit().remove();
	},

	// ### clear_label_and_text
	// utility function to clear all of the labels and text generated with the
	// render_label_and_value function
	clear_label_and_text: function(){
		this.fg_layer.selectAll('.label_and_text').data([]).exit().remove();
	}
});

/**
A Backbone.View that exposes a custom search bar.  The search bar provides autocomplete
functionality for Connectivity Map pert\_inames and cell\_ids.  When the user types in the
search view's input, a "search:DidType" event is fired.

@class PertSearchBar
@constructor
@extends Backbone.View
**/
Barista.Views.PertSearchBar = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "PertSearchBar",

	initialize: function(){
		var self = this;


		/**
		determines wether or not the search view will match cell lines for autocomplete

		@property match_cell_lines
		@default true
		@type Boolean
		**/

		// set up custom Datasets if they are passed in the constructor
		this.datasets = (this.options.datasets !== undefined) ? this.options.datasets : [Barista.Datasets.CellID,Barista.Datasets.PertIName];

		// determine wether or not we will match cell line strings in the autocomplete
		this.match_cell_lines = (this.options.match_cell_lines !== undefined) ? this.options.match_cell_lines : true;

		// custom placeholder
		this.placeholder = (this.options.placeholder !== undefined) ? this.options.placeholder : 'search gene, compound or cell type name';

		// grab cell_ids and store them as an atribute of the view
		var cellinfo = 'http://api.lincscloud.org/a2/cellinfo?callback=?';
		var params = {q:'{"cell_id":{"$regex":""}}',d:"cell_id"};
		$.getJSON(cellinfo,params,function(res){
			self.cell_lines = res;
			self.render();

			// once the view is rendered, bind a change event to trigger a "search:DidType" event from the view
			var change_callback = function () {
				// get the value from the search bar. If the first character is '*',
				// replace it with '.*' so we use the wildcard as expected in API
				// saerches
				var val  = $("#search",self.el).val();
				val = (val[0] === '*') ? val.replace('*','.*') : val;

				var type = "";
				if (self.cell_lines.indexOf(val) != -1 && self.match_cell_lines){
					type = "cell";
				}

				/**
				Fired when the text in the view's search box changes

				@event search:DidType
				@param {Object} [msg={val:"",type:""}] an object containing the message of the event
				@param {String} [msg.val=""] the string val of the views search bar at the time of the event
				@param {String} [msg.type=""] the type of message being passed, either "" or "cell". "cell" is passed, if the string matches a cell line and match\_cell\_lines is set
				**/
				self.trigger("search:DidType",{val: val,type: type});
			};

			$("#search",self.el).bind('input propertychange change', _.throttle(change_callback,250));

			// bind a search:DidType event to the typeahead events coming out of typeahead.js
			$(".typeahead",self.el).bind('typeahead:selected typeahead:autocompleted', function (obj,datum) {
				var val = datum.value;
				self.trigger("search:DidType",{val: val,type: datum.type});
			});
		});

	},


	/**
    Gets the current text entered in the view's search bar

    @method get_val
    **/
	get_val: function(){
		return $("#search",this.el).val();
	},

	/**
    fills the view's search bar with a random pert_iname and triggers a "search:DidType" event

    @method random_val
    **/
	random_val: function(){
		var self = this;
		skip = Math.round(Math.random()*40000);
		var pertinfo = 'http://api.lincscloud.org/a2/pertinfo?callback=?';
		params = {q: '{"pert_type":{"$in":["trt_cp","trt_sh"]}}',
					f:'{"pert_iname":1}',
										l:1,
										sk:skip};
		$.getJSON(pertinfo,params,function(res){
			var val = res[0].pert_iname;
			$("#search",this.el).val(val);
			self.trigger("search:DidType",{val: val,type: 'single'});
		});
	},

	set_val: function(new_val){
		$("#search",this.el).val(new_val);
		this.trigger("search:DidType",{val: new_val,type: 'single'});
	},

	/**
    renders the view

    @method render
    **/
	render: function(){
		var self = this;
		// load the template into the view's el tag
		this.$el.append(BaristaTemplates.CMapPertSearchBar({placeholder: self.placeholder}));

		$('#search',this.$el).typeahead(self.datasets);
	}
});

// # **PlatformSummaryView**

// A Backbone.View that shows a quick view card used to display the available data on lincscloud.org
// for a given platform. The widget displays a count of the available experiments on the platform, 
// a description of the platform, a widget to extract a listing of the data available, and a link 
// to a platform specific app for viewing the contents of the available data on that platform.  
// This view is frequently paired with a **PlatformSummaryModel**

// basic use:

//		platform_summary_view = new PlatformSummaryView();

// optional arguments:

// ...

//		platform_summary_view = new PlatformSummaryView({ 
//									... });


Barista.Views.PlatformSummaryView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "PlatformSummaryView",

	// ### model
	// set up the view's default model
	model: new Barista.Models.GenericCountModel(),

	// ### initialize
	// overide the default Backbone.View initialize method to handle optional arguments, compile the view
	// template, bind model changes to view updates, and render the view
	initialize: function(){
		// set up color and font defaults
		this.white_color = "#ffffff";
		this.black_color = "#000000";
		this.orange_color = "#e69f00";
		this.sky_blue_color = "#56b4e9";
		this.bluish_green_color = "#009e73";
		this.yellow_color = "#f0e442";
		this.blue_color = "#0072b2";
		this.vermillion_color = "#d55e00";
		this.reddish_purple_color = "#cc79a7";
		this.opaque_opacity = 1;
		this.semi_opacity = 0.25;
	  this.text_font_family = "'Helvetica Neue',Helvetica,Arial,sans-serif";
	  this.brand_font_family = "'Memphis LT Std',Times,serif";
	  this.navigation_font_family = "Tahoma,Verdana,sans-serif";
	  this.bold_font_weight = "bold";
	  this.medium_font_weight = "medium";
	  this.regular_font_weight = "normal";
	  this.lowercase_font_transform = "lowercase";
	  this.uppercase_font_transform = "uppercase";
	  this.sentence_font_transform = "none";
	  this.normal_letter_spacing = "normal";
	  this.wide_letter_spacing = "2pt";
	  this.fonts_default = {
  	  brand: {
  	  	family: this.brand_font_family,
  	  	weight: this.bold_font_weight,
  	  	size: "13pt",
  	  	transform: this.uppercase_font_transform,
  	  	spacing: this.wide_letter_spacing,
  	  	color: this.black_color
  	  },
  	  control: {
  	  	family: this.text_font_family,
  	  	weight: this.regular_font_weight,
  	  	size: "12pt",
  		  transform: this.lowercase_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.sky_blue_color
  	  },
  	  count: {
  	  	family: this.text_font_family,
  	  	weight: this.bold_font_weight,
  	  	size: "36pt",
  		  transform: this.sentence_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.black_color
  	  },
  	  header: {
  	  	family: this.text_font_family,
  	  	weight: this.bold_font_weight,
  	  	size: "13pt",
  	  	transform: this.uppercase_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.black_color
  	  },
  	  navigation: {
  	  	family: this.navigation_font_family,
  	  	weight: this.regular_font_weight,
  	  	size: "9pt",
  	  	transform: this.sentence_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.black_color
  	  },
  	  paragraph: {
  	  	family: this.text_font_family,
  	  	weight: this.regular_font_weight,
  	  	size: "12pt",
  		  transform: this.sentence_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.black_color
  	  },
  	  subhead: {
  	  	family: this.text_font_family,
  	  	weight: this.medium_font_weight,
  	  	size: "14pt",
  		  transform: this.sentence_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.black_color
  	  },
  	  title: {
  	  	family: this.text_font_family,
  	  	weight: this.bold_font_weight,
  	  	size: "36pt",
  		  transform: this.sentence_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.black_color
  	  }
	  };

		// set up color and font appearance options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : this.white_color;
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : this.orange_color;
		this.fonts = this.fonts_default;

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "col-lg-4";

		// set up static banner text, default if not specified
		this.banner_text = (this.options.banner_text !== undefined) ? this.options.banner_text : "Platform";

		// set up static description text, default if not specified
		this.description_text = (this.options.description_text !== undefined) ? this.options.description_text : "Platform description";

		// set up static experiments text, default if not specified
		this.experiments_text = (this.options.experiments_text !== undefined) ? this.options.experiments_text : "Experiments";

		// set up the default plot height
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 305;

		// set up the platform icon
		this.platform_icon = (this.options.platform_icon !== undefined) ? this.options.platform_icon : 'http://coreyflynn.github.io/Bellhop/img/cmap_logo_small.png';

		// set up static export table, default if not specified
		this.export_text = (this.options.export_text !== undefined) ? this.options.export_text : "download table";
		this.exporting_text = (this.options.exporting_text !== undefined) ? this.options.exporting_text : "Exporting";

		// set up static view details, default if not specified
		this.details_text = (this.options.details_text !== undefined) ? this.options.details_text : "view details";
		this.details_url = (this.options.details_url !== undefined) ? this.options.details_url : "http://apps.lincscloud.org";
		this.details_target = (this.options.details_target !== undefined) ? this.options.details_target : "_self";

		// set up default categories to display
		this.categories = (this.options.categories !== undefined) ? this.options.categories : [];
		this.category_ids = _.pluck(this.categories,'_id');

		// get categories from model and determine the maximum category count
		// this.categories = this.model.get('platform_types');
		this.max_category_count = _.max(_.pluck(this.categories,'count'));
		
		// bind render to model changes
		this.listenTo(this.model,'change', this.render);

		// compile the default template for the view
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// render the vis
		this.redraw();

		// bind window resize events to redraw.
		var self = this;
		$(window).resize(function() {self.redraw();} );
	},

	// ### compile_template
	// use Handlebars to compile the template for the view
	compile_template: function(){
		this.div_string = 'd3_target' + new Date().getTime();
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	// ### redraw
	// completely redraw the view.
	redraw: function(){
		this.init_panel();
		this.render();
	},
	
	apply_font: function(font, target) {
		return target.attr("font-family", font.family)
			.attr("font-weight", font.weight)
			.attr("font-size", font.size)
			.attr("style", "text-transform: " + font.transform +";")
			.attr("letter-spacing", font.spacing)
			.attr("fill", font.color);
	},
	
	font_to_css_style: function(font) {
		return "font:"+ font.weight +" " + font.size + " " + font.family + "; "
			+ "color:" + font.color + "; " 
			+ "text-transform:" + font.transform + "; " 
			+ "letter-spacing:" + font.spacing + "; ";
	},

	// ### init_panel
	// initialize the static parts of the view's panel
	init_panel: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the panel's width and height
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();
		
		// set up component row positioning
		this.hrule0 = 60;
		this.hrule1 = this.hrule0 + 30;
		this.hrule2 = this.hrule1 + 30;
		this.hrule3 = this.hrule2 + 120;
		this.hrule4 = this.hrule3 + 30;
		this.hrule5 = this.hrule4 + 25;

		// rescale the width of the vis
		this.vis.transition().duration(1).attr("width",this.width);

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		this.vis.selectAll('.controls_layer').data([]).exit().remove();
		this.controls_layer = this.vis.append("g").attr("class", "controls_layer");

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// draw the banner
		this.fg_layer.selectAll('.banner').data([]).exit().remove();
		var banner = this.fg_layer.append("g").attr("class", "banner");
		banner.selectAll('.banner_rect').data([]).exit().remove();
		banner.append("rect").attr("class", "banner_rect")
			.attr("width", this.width)
			.attr("height", this.hrule1)
			.attr("fill", this.fg_color);
		banner.selectAll('.banner_text').data([]).exit().remove();
		var bt = this.apply_font(this.fonts.title, banner.selectAll('.banner_text').data([1])
							.enter().append("text")
							.attr("class","banner_text")
							.attr("y",this.hrule0)
							.text(this.banner_text));
    // center the banner text
		bt.each(function() {
			var text_width = this.getBBox().width;
			var start_pos = (self.width - text_width) / 2;
			bt.attr("x", start_pos);
		});

		// draw the description text
		this.render_description({
			description_string: this.description_text,
			left: 150,
			top: this.hrule2,
			bottom: this.height,
			node_class: 'description_text'
		});
		
		// draw the generic count info
		var count = this.model.get('count');
		if (count === undefined){
			count = 0;
		}
		var count_text = this.fg_layer.selectAll('.count').data([]).exit().remove();
		count_text = this.apply_font(this.fonts.count, this.fg_layer.selectAll('.count').data([1])
							.enter().append("text")
							.attr("class","count")
							.attr("x",40)
							.attr("y",this.hrule3)
							.text(count));
		
		// draw the experiments text
		this.fg_layer.selectAll('.experiments_text').data([]).exit().remove();
		this.apply_font(this.fonts.header, this.fg_layer.selectAll('.experiments_text').data([1])
							.enter().append("text")
							.attr("class","experiments_text")
							.attr("x",40)
							.attr("y",this.hrule4)
							.text(this.experiments_text));

		// draw the static platform icon
		this.fg_layer.selectAll('.platform_icon').data([]).exit().remove();
		this.fg_layer.selectAll('.platform_icon').data([1])
							.enter().append("svg:image")
							.attr("class","platform_icon")
			        .attr("xlink:href", this.platform_icon)
							.attr("x",40)
							.attr("y",this.hrule2)
							.attr("height",60)
							.attr("width",60);

		// add a png export overlay
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
		.attr("class", this.div_string + "png_export no_png_export")
		.attr("x",40)
		.attr("y",this.hrule5)
		.attr("opacity",self.semi_opacity)
		.style("cursor","pointer")
		.text("png")
		.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",self.opaque_opacity).attr("fill",self.sky_blue_color);})
		.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",self.semi_opacity).attr("fill",self.black_color);})
		.on("click",function(){self.save_png();});

		// css inline styling, this value can have single quotes in it, so use double-quotes to apply it
		this.control_css_style = "text-decoration:none; "+this.font_to_css_style(this.fonts.control);
		
		// determine control positioning based on display size
		this.details_x = this.width - 135;
		this.details_y = this.hrule4 - 15; // 15 is a hack adjusting for line height
		this.export_x = this.width - 270;
		this.export_y = this.details_y;
		if (this.export_x < 180) {
			// move the export above the details
			this.export_x = this.details_x;
			this.export_y = this.details_y - 30;
		}
		
		// add the export table control
		this.render_export_control(this.export_text, "icon-download", function(){self.download_table();});

		// add the view details control
		this.controls_layer.selectAll('.details_text').data([]).exit().remove();
		this.controls_layer.selectAll('.details_text').data([1])
							.enter().append("foreignObject")
							.attr("class","details_text")
							.attr("width", 110)
							.attr("height", 110)
							.attr("x", this.details_x)
							.attr("y", this.details_y)
							.style("cursor","pointer")
							.append("xhtml:body")
							.style("background-color", this.bg_color)
							.html("<a href='"+this.details_url+"' target='"+this.details_target+"' style=\"" + this.control_css_style + "\"><i class='icon-chevron-sign-right'></i> "+this.details_text+"</a>");
	},
	
	render_export_control: function(message, icon_class, handler) {
		this.controls_layer.selectAll('.export_text').data([]).exit().remove();
		return this.controls_layer.selectAll('.export_text').data([1])
							.enter().append("foreignObject")
							.attr("class","export_text")
							.attr("width", 130)
							.attr("height", 100)
							.attr("x", this.export_x)
							.attr("y", this.export_y)
							.style("cursor","pointer")
							.on("click",handler)
							.append("xhtml:body")
							.style("background-color", this.bg_color)
							.html("<span style=\"" + this.control_css_style + "\"><i class='" + icon_class + "' style='margin-right:2px;'></i>" + message + "</span>");
	},

	// ### download_table
	// download the backing data that matches the current model state.
	download_table: function() {
		var self = this;

		// indicate that we are downloading something
		this.render_export_control(this.exporting_text, "icon-refresh icon-spin", null);
		

		// set up api call parameters
		var url = this.model.get("url");
		var params = {q: '{"' + this.model.get("search_field") + '":{"$regex":"' + this.model.get("search_string") + '","$options":"i"}}',
            l:0};

        // make a JSON API call to grab data for the table
		$.getJSON(url,params,function(res){
			// get the headers for the table we are going to write out
			var headers = _.keys(res[0]);

			// We are going to write a one line in the table for each object returned by the API
			// call.  Start by putting the headers in and then write each object to the table
			var lines = [headers.join('\t')];
			res.forEach(function(r){
				var line_data = [];
				// for each data name in the table, grab the data. translate html
				// content to plain text where required
				headers.forEach(function(h){
						line_data.push(String(r[h]));
				});
				line_string = line_data.join('\t');
				lines.push(line_string);
			});
			var lines_string = lines.join("\n");
			var blob = new Blob([lines_string], {type: "text/plain;charset=utf-8"});
			var timestamp = new Date().getTime();
			saveAs(blob, "CMapTable" + timestamp + ".txt");

			// indicate that we are done
			self.render_export_control(self.export_text, "icon-download", function(){self.download_table();});
		});
	},
	
	render: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the panel's width and height
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();

		// draw the pert count info
		var count = this.model.get('count');
		if (count === undefined){
			count = 0;
		}
		this.vis.selectAll('.count').data([1])
			.transition().duration(500)
			.tween("text", function() {
			    var i = d3.interpolate(this.textContent.replace(",",""), count);
			    return function(t) {
			      this.textContent = Barista.numberWithCommas(Math.round(i(t)))	;
			    };
			});

	},

	// ### render_description
	// utility function to break a long description string into a multiline
	// and draw it at the desired location

	// options

	// 1.  {string}  **description_string**  the string to be displayed, defaults to *""*
	// 2.  {right}  **right**  the x position to place the **right** edge of text, defaults to *this.width*
	// 3.  {left}  **left**  the x position to place the **left** edge of text, defaults to *this.width - 500*
	// 4.  {top}  **top**  the y position to place the **top** edge of text, defaults to *0*
	// 5.  {bottom}  **bottom**  the y position to place the **bottom** edge of text, defaults to *100*
	// 6.  {node_class}  **node_class**  the class used for locating the text node within fg_layer, defaults to *""*
	render_description: function(options){
		var self = this;

		// default arguments if they are not present
		description_string = (options.description_string !== undefined) ? options.description_string : "";
		top_edge = (options.top !== undefined) ? options.top : 0;
		bottom_edge = (options.bottom !== undefined) ? options.bottom : 100;
		right_edge = (options.right !== undefined) ? options.right : this.width;
		left_edge = (options.left !== undefined) ? options.left : this.width - 500;
		node_class = (options.node_class != undefined) ? options.node_class : "";
    node_class_selector = '.' + node_class;
    
		// clear existing description
		this.fg_layer.selectAll(node_class_selector).data([]).exit().remove();

		// compute the number of lines we have room for
		this.line_height = 15;
		// if the layout is small we can't have more than 5 lines or descriptions collide with the count
		this.num_lines_allowed = Math.min(5, Math.floor((bottom_edge - top_edge) / this.line_height));

		// compute the number of characters per line we will allow and how
		// many lines the description would need if we rendered all of it
		this.line_width = right_edge - left_edge;
		// 12 pt font
		this.num_char = Math.floor(this.line_width / 12 / .65);
		this.num_lines = Math.ceil(description_string.length / this.num_char);

		// compute the line splits to display in the description
		this.lines = [];
		for (var i=0; i<this.num_lines; i++){
			if (i < this.num_lines_allowed - 1){
				var l = (description_string.slice(i*this.num_char,(i+1)*this.num_char).slice(-1) != " " && description_string.slice(i*this.num_char,(i+1)*this.num_char).slice(this.num_char-1,this.num_char) != "") ? description_string.slice(i*this.num_char,(i+1)*this.num_char)  + '-': description_string.slice(i*this.num_char,(i+1)*this.num_char);
				this.lines.push(l);
			} else {
				var l = description_string.slice(i*this.num_char,(i+1)*this.num_char - 3) + '...';
				this.lines.push(l);
				// note: the class that had the original line-splitting code does not have this break, and that may be a bug
				break;
			}
		}

		// draw lines
		this.apply_font(this.fonts.paragraph, self.fg_layer.selectAll(node_class_selector).data(this.lines)
				.enter()
				.append("text")
				.attr("class",node_class)
				.attr("x",left_edge)
				.attr("y",function(d,i){return top_edge + 13 + i*15;})
				// .attr("text-anchor", "middle")
				.text(function(d){return d;}));
	},
	
	// ### savePng
	// save the current state of the view into a png image
	save_png: function(){
		// build a canvas element to store the image temporarily while we save it
		var width = this.width;
		var height = this.height;
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.vis.selectAll(".no_png_export");
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// temporarily fix content to work around canvg rendering problems
		this.fg_layer.selectAll('.platform_icon').data([]).exit().remove();
		this.render_description({
			description_string: this.description_text,
			left: 40,
			top: this.hrule2,
			bottom: this.height,
			node_class: 'description_text'
		});
		
		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.vis.node().parentNode.innerHTML;
		
		// restore content
		this.fg_layer.selectAll('.platform_icon').data([1])
			.enter().append("svg:image")
			.attr("class","platform_icon")
	    .attr("xlink:href", this.platform_icon)
			.attr("x",40)
			.attr("y",this.hrule2)
			.attr("height",60)
			.attr("width",60);
		this.render_description({
			description_string: this.description_text,
			left: 150,
			top: this.hrule2,
			bottom: this.height,
			node_class: 'description_text'
		});

		// render to the canvas
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = "BaristaPlatformSummaryView" + new Date().getTime() + ".png";
		if (canvas.toBlob){
			canvas.toBlob(function(blob){
				saveAs(blob,filename);
				});
		}
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);
	}
});

// # **ScatterPlotView**
// A Backbone.View that displays a scatter plot.  the view's model is assumed to have the same defaults
// as specified in **ScatterPlotModel**

// basic use:

//		scatter_plot_view = new ScatterPlotView();

// optional arguments:

// 1.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 2.  {string}  **fg\_color**  the hex color code to use as the foreground color of the view, defaults to *#1b9e77*
// 3.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"span12"*
// 4.  {string}  **scale_by**  an attribute in the model's meta data object to scale points by, defaults to *undefined*
// 5.  {Array}  **x_range**  a two element array specifying the x plotting bounds of the plot, defaults to *[min(x_data),max(x_data)]*
// 6.  {Array}  **y_range**  a two element array specifying the y plotting bounds of the plot, defaults to *[min(y_data),max(y_data)]*
// 7.  {Bool}  **x_log**  if set to true, plots the x axis on a log scale, defaults to *false*
// 8.  {Bool}  **y_log**  if set to true, plots the y axis on a log scale, defaults to *false*
// 9. {Number} **x_min_lock** if set, locks the minimum of the x_range at the given value. Ignored if x_range is set. defaults to *undefined*
// 10. {Number} **y_min_lock** if set, locks the minimum of the y_range at the given value. Ignored if y_range is set. defaults to *undefined*
// 11. {Number} **x_max_lock** if set, locks the maximum of the x_range at the given value. Ignored if x_range is set. defaults to *undefined*
// 12. {Number} **y_max_lock** if set, locks the maximum of the y_range at the given value. Ignored if y_range is set. defaults to *undefined*
// 13. {Bool} **x_min_expand** if set, allows the minimum of the x_range to expand if data is found below it. defaults to *false*
// 14. {Bool} **y_min_expand** if set, allows the minimum of the y_range to expand if data is found below it. defaults to *false*
// 15. {Bool} **x_max_expand** if set, allows the maximum of the x_range to expand if data is found above it. defaults to *false*
// 16. {Bool} **y_max_expand** if set, allows the maximum of the y_range to expand if data is found above it. defaults to *false*
// 17.  {Number}  **plot_height**  the height of the plot in pixels, defaults to *120*

//		scatter_plot_view = new ScatterPlotView({el: $("target_selector",
//									bg_color:"#ffffff", 
//									fg_color: "#1b9e77",
//									span_class: "span4",
//									scale_by: undefined,
//									x_range: undefined,
//									y_range: undefined,
//									x_log: false,
//									y_log: false,
//									x_min_lock: undefined,
//									y_min_lock: undefined,
//									x_max_lock: undefined,
//									y_max_lock: undefined,
//									x_min_expand: false,
//									y_min_expand: false,
//									x_max_expand: false,
//									y_max_expand: false,
//									plot_height: 120});

Barista.Views.ScatterPlotView = Barista.Views.BaristaBaseView.extend({
	// ### model
	// set up the view's default model
	model: new Barista.Models.ScatterPlotModel(),

	// ### initialize
	// overide the default Backbone.View initialize method to handle optional arguments, compile the view
	// template, bind model changes to view updates, and render the view
	initialize: function(){
		// set up x and y range and determine if are going to draw the axes dynamically
		this.x_range = (this.options.x_range !== undefined) ? this.options.x_range : undefined;
		this.y_range = (this.options.y_range !== undefined) ? this.options.y_range : undefined;
		this.dynamic_x_range = (this.x_range === undefined) ? true : false;
		this.dynamic_y_range = (this.y_range === undefined) ? true : false;

		// set up axis expansion and lock features
		this.x_min_lock = (this.options.x_min_lock !== undefined) ? this.options.x_min_lock : undefined;
		this.y_min_lock = (this.options.y_min_lock !== undefined) ? this.options.y_min_lock : undefined;
		this.x_max_lock = (this.options.x_max_lock !== undefined) ? this.options.x_max_lock : undefined;
		this.y_max_lock = (this.options.y_max_lock !== undefined) ? this.options.y_max_lock : undefined;

		this.x_min_expand = (this.options.x_min_expand !== undefined) ? this.options.x_min_expand : undefined;
		this.y_min_expand = (this.options.y_min_expand !== undefined) ? this.options.y_min_expand : undefined;
		this.x_max_expand = (this.options.x_max_expand !== undefined) ? this.options.x_max_expand : undefined;
		this.y_max_expand = (this.options.y_max_expand !== undefined) ? this.options.y_max_expand : undefined;

		// set up x and y log flags
		this.x_log = (this.options.x_log !== undefined) ? this.options.x_log : false;
		this.y_log = (this.options.y_log !== undefined) ? this.options.y_log : false;

		// set up the scale_by parameter
		this.scale_by = (this.options.scale_by !== undefined) ? this.options.scale_by : undefined;

		// set up the margin
		this.margin = 50;

		// set up x and y ranges
		this.set_ranges();

		// set up x and y scaling
		this.set_scales();		

		// build Axes
		this.build_axes();

		// run BaristaBaseView's base_initialize method to handle boilerplate view construction
		// and initial view rendering
		this.base_initialize();
	},

	// ### redraw
	// completely redraw the view. Updates both static and dynamic content in the view.
	render: function(){
		this.base_render();
		this.init_plot();
		this.update();
	},

	// ### init_plot
	// initialize the static parts of the view's panel
	init_plot: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up x and y ranges
		this.set_ranges();

		// set up x and y scaling
		this.set_scales();		

		// build Axes
		this.build_axes();

		// plot the axes
		this.bg_layer.selectAll('.axis').data([]).exit().remove();
		this.bg_layer.append("g")
			.attr("class", "axis x-axis")
			.attr("transform", "translate(0," + (this.height - this.margin) + ")")
			.call(this.xAxis);

		this.bg_layer.append("g")
			.attr("class", "axis y-axis")
			.attr("transform", "translate(" + this.margin + ",0)")
			.call(this.yAxis);

		// style the axes
		this.vis.selectAll('.axis').selectAll("path")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("line")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("text")
			.style("font-family","sans-serif")
			.style("font-size","11px");

		// build a scaling function
		this.set_scaling_function();

		// plot the data points
		this.x_data = this.model.get('x_data');
		this.y_data = this.model.get('y_data');
		this.bg_layer.selectAll('.data_point').data([]).exit().remove();
		this.bg_layer.selectAll('.data_point').data(this.x_data).enter().append('circle')
			.attr("class","data_point")
			.attr("cx",this.x_scale(0))
			.attr("cy",this.y_scale(0))
			.attr("opacity",0.5)
			.attr("r",0)
			.attr("fill",this.fg_color);

		// plot the x axis title
		this.bg_layer.selectAll('.x_axis_label').data([]).exit().remove();
		this.bg_layer.selectAll('.x_axis_label').data([1]).enter().append('text')
			.attr("class","x_axis_label axis_label")
			.attr("x",this.width/2)
			.attr("y",this.height-10)
			.style("text-anchor","middle")
			.text(this.model.get('x_axis_title'));

		// plot the y axis label
		this.bg_layer.selectAll('.y_axis_label').data([]).exit().remove();
		this.bg_layer.selectAll('.y_axis_label').data([1]).enter().append('text')
			.attr("class","y_axis_label axis_label")
			// .attr("transform", "rotate(-90)")
			.attr("y", this.margin)
			.attr("x", this.margin + 2)
			.attr("dy","1em")
			.style("text-anchor","left")
			.text(this.model.get('y_axis_title'));

		// plot the title
		this.bg_layer.selectAll('.title').data([]).exit().remove();
		this.bg_layer.selectAll('.title').data([1]).enter().append('text')
			.attr("class","title title")
			.attr("x",this.width/2)
			.attr("y",this.margin/2)
			.style("text-anchor","middle")
			.text(this.model.get('title'));
	},

	// ### update
	// update the dynamic potions of the view
	update: function(){
	var self = this;
	
	// get model data
	this.x_data = this.model.get('x_data');
	this.y_data = this.model.get('y_data');
	
	// set up x and y ranges
	this.set_ranges();

	// set up x and y scaling
	this.set_scales();

	// build Axes
	this.build_axes();

	// build a scaling function
	this.set_scaling_function();

	// plot the data points, appending where required
	this.points_selection = this.bg_layer.selectAll('.data_point').data(this.x_data);
	this.points_selection.enter().append('circle')
		.attr("class","data_point")
		.attr("cx",this.x_scale(0))
		.attr("cy",this.y_scale(0))
		.attr("opacity",0.5)
		.attr("r",0)
		.attr("fill",this.fg_color);

	// transition points
	this.points_selection.transition().duration(500)
		.attr("cx",this.x_scale)
		.attr("cy",function(d,i){return self.y_scale(self.y_data[i]);})
		.attr("r",function(d,i){
		if (self.scale_by === undefined){
			return 10;
		}else{
			return self.dot_scaler(self.scale_data[i]);
		}});

	// remove excess points 
	this.points_selection.exit().remove();

	// transition the axes
	this.vis.selectAll('.x-axis').transition().duration(500).call(this.xAxis);
	this.vis.selectAll('.y-axis').transition().duration(500).call(this.yAxis);
	this.style_axes();
	},

	// ### set_ranges
	// utility function used to get the x and y ranges used in the plot
	set_ranges: function(){
		var x_data,y_data,min,max;
		// calculate the x_range. If we need to caluclate it dynamically, check the lock and expand
		// parameters for the axis
		if (this.dynamic_x_range === true){
			x_data = this.model.get('x_data');

			// if the data is of length larger than 1, calculate the range, otherwise set the range to [0,0]
			if (x_data.length > 0 ){
				// check the min lock and expand flags and report the min of the range accordingly
				if (this.x_min_lock === undefined){
					min = _.min(x_data);
				}else{
					if (this.x_min_expand){
						data_min = _.min(x_data);
						min = (this.x_min_lock > data_min) ? data_min : this.x_min_lock;
					}else{
						min = this.x_min_lock;
					}
				}

				// check the max lock and expand flags and report the max of the range accordingly
				if (this.x_max_lock === undefined){
					max = _.max(x_data);
				}else{
					if (this.x_max_expand){
						data_max = _.max(x_data);
						max = (this.x_max_lock < data_max) ? data_max : this.x_max_lock;
					}else{
						max = this.x_max_lock;
					}
				}
				this.x_range = [min,max];
			}else{
				this.x_range = [0,0];
			}
		}

		// calculate the y_range. If we need to caluclate it dynamically, check the lock and expand
		// parameters for the axis
		if (this.dynamic_y_range === true){
			y_data = this.model.get('y_data');

			// if the data is of length larger than 1, calculate the range, otherwise set the range to [0,0]
			if (y_data.length > 0 ){
				// check the min lock and expand flags and report the min of the range accordingly
				if (this.y_min_lock === undefined){
					min = _.min(y_data);
				}else{
					if (this.y_min_expand){
						data_min = _.min(y_data);
						min = (this.y_min_lock > data_min) ? data_min : this.y_min_lock;
					}else{
						min = this.y_min_lock;
					}
				}

				// check the max lock and expand flags and report the max of the range accordingly
				if (this.y_max_lock === undefined){
					max = _.max(y_data);
				}else{
					if (this.y_max_expand){
						data_max = _.max(y_data);
						max = (this.y_max_lock < data_max) ? data_max : this.y_max_lock;
					}else{
						max = this.y_max_lock;
					}
				}
				this.y_range = [min,max];
			}else{
				this.y_range = [0,0];
			}
		}
	},

	// ### set_scales
	// utility function used to get the x and y scales used in the plot
	set_scales: function(){
		if (this.x_log){
			this.x_scale=d3.scale.log().domain([this.x_range[0],this.x_range[1]]).range([this.margin, this.width - this.margin]);
		}else{
			this.x_scale=d3.scale.linear().domain([this.x_range[0],this.x_range[1]]).range([this.margin, this.width - this.margin]);
		}
		if (this.y_log){
			this.y_scale=d3.scale.log().domain([this.y_range[1],this.y_range[0]]).range([this.margin, this.height - this.margin]);
		}else{
			this.y_scale=d3.scale.linear().domain([this.y_range[1],this.y_range[0]]).range([this.margin, this.height - this.margin]);
		}
	},

	// ### build_axes
	// utility function used to build x and y axes
	build_axes: function(){
		this.xAxis = d3.svg.axis()
			.scale(this.x_scale)
			.orient("bottom");
		this.yAxis = d3.svg.axis()
			.scale(this.y_scale)
			.orient("left");
	},

	// ### set_scaling_function
	// utility function to compute a radius scaling funciton to use in plots
	set_scaling_function: function(){
		var self = this;
		if (this.scale_by !== undefined){
			this.scale_data = this.model.get('meta_data')[this.scale_by];
			var size_min = Math.sqrt(_.min(this.scale_data)/Math.PI);
			var size_max = Math.sqrt(_.max(this.scale_data)/Math.PI);
			this.size_scale=d3.scale.linear().domain([size_min,size_max]).range([5, 20]);
			this.dot_scaler = function(val){
				r = Math.sqrt(val/Math.PI);
				return self.size_scale(r);
			};
		}
	},

	// ### style axes
	// utility function to apply custom styles to axis components
	style_axes: function(){
		this.vis.selectAll('.axis').selectAll("path")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("line")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("text")
			.style("font-family","sans-serif")
			.style("font-size","11px");
	}
});
// **TagListView**
// A Backbone.View that displays a list of objects in a collection as tags.  The tags are drawn
// as rounded rectangles with text inside.  The text corresponds to the cid attributes in the
// collection by defaul, but can be customized to display other fields if required

// basic use

//		tag_list_view = new TagListView();

// optional arguments

// 1.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 2.  {string}  **fg\_color**  the hex color code to use as the foreground color of the view, defaults to *white*
// 3.  {string}  **tag\_color**  the hex color code to use as the tag color of the view, defaults to *gray*
// 4.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"col-lg-12"*
// 5.  {Number}  **plot_height**  the height of the plot in pixels, defaults to *120*
// 6.  {string}  **display_field**  the model attribute to display for each model in the view's colleciton.  defualts to *'cid'*

//		tag_list_view = new TagListView({el: $("target_selector",
//									bg_color:"#ffffff", 
//									fg_color: "white",
//									tag_color: "gray",
//									span_class: "col-lg-12",
//									plot_height: 120,
//									display_attribute: "cid"});

Barista.Views.TagListView = Barista.Views.BaristaBaseView.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "TagListView",

	// ### model
	// set of the default model for the view
	model: new Backbone.Model(),

	// ### collection
	// set up a default collection for the view to work with
	collection: new Backbone.Collection(),

	// ### initialize
	// overide the default Backbone.View initialize method to handle optional arguments, compile the view
	// template, bind model changes to view updates, and render the view
	initialize: function(){
		// initialize the base view
		this.base_initialize();
		
		// set up a display attribute 
		this.display_attribute = (this.options.display_attribute !== undefined) ? this.options.display_attribute : 'cid';

		// set up a tag color to use 
		this.tag_color = (this.options.tag_color !== undefined) ? this.options.tag_color : 'black';

		// look for custom listeners
		this.listener = (this.options.listener !== undefined) ? this.options.listener : undefined;

		// clear built in listeners
		this.stopListening();

		// add listeners for the collection and trigger an update when it changes
		if (this.listener !== undefined){
			this.listenTo(this.collection,this.listener, this.update);
		}else{
			this.listenTo(this.collection,'add', this.update);
			this.listenTo(this.collection,'remove', this.update);
			this.listenTo(this.collection,'reset', this.update);
			this.listenTo(this.collection,'sort', this.update);
		}
	},

	// ### render
	// completely render the view. Updates both static and dynamic content in the view.
	render: function(){
		var self = this;
		// call BaristaBaseView's render function first so we can layer on top of it
		this.base_render();

		// add a text element for each unique item in the collection
		this.x_offsets = [5];
		this.row_number = 0;
		this.y_offsets = [];
		this.lengths = [];
		this.tags = [];
		this.collection.models.forEach(function(model){
			self.tags.push(model.get(self.display_attribute));
		});
		this.tags = _.unique(this.tags);
		this.draw_tags();

		return this;
	},

	// ### update
	// update the dynamic potions of the view
	update: function(){
		var self = this;
		// call BaristaBaseView's render function first so we can layer on top of it
		this.base_render();
		
		// add a text element for each unique item in the collection
		this.x_offsets = [5];
		this.row_number = 0;
		this.y_offsets = [];
		this.lengths = [];
		this.tags = [];
		this.collection.models.forEach(function(model){
			self.tags.push(model.get(self.display_attribute));
		});
		this.tags = _.unique(this.tags);
		this.draw_tags();
		
		return this;
	},

	// ### fit_height
	// fits the view height to the height taken by the tags displayed
	fit_height: function(){
		// set the view's height attribute based on the number of rows in the
		// vis
		var EmSize = Barista.getEmSizeInPixels(this.div_string);
		this.height = (this.row_number * 1.5 + 3.5) * EmSize;

		// rescale the height of the vis
		$("#" + this.div_string).animate({height:this.height},500);
		this.vis.transition().attr("height",this.height);
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([1])
			.transition(500)
			.attr("y",this.height - 10);
		
	},

	// ### draw tags
	// utility function to draw tags diven a data set.  
	draw_tags: function(){
		var self = this;
		// draw the foreground text of all the tags
		this.fg_layer.selectAll('.tag_list_text').data([]).exit().remove();
		this.fg_layer.selectAll('.tag_list_text').data(this.tags).enter().append('text')
			.attr("class","tag_list_text")
			.text(function(d){return d;})
			.attr("x",function(d,i){
				self.lengths.push(this.getComputedTextLength() + 15);
				var current_x_offset = self.x_offsets[i];
				if (current_x_offset + self.lengths[i] > self.width){
					self.x_offsets[i] = 5;
					self.x_offsets.push(self.lengths[i] + self.x_offsets[i]);
					self.row_number += 1;
				}else{
					self.x_offsets.push(self.lengths[i] + self.x_offsets[i]);
				}
				self.y_offsets.push((self.row_number * 1.5 + 1));
				return self.x_offsets[i];
			})
			.attr("y",function(d,i){return self.y_offsets[i] + 'em';})
			.attr("opacity",1)
			.attr("fill",this.fg_color)
			.style("cursor","pointer")
			.on("click",function(d){self.trigger("TagListView:DidSelect",{val: d});});

		// draw the background of all the tags
		this.bg_layer.selectAll('.tag_list_rect').data([]).exit().remove();
		this.bg_layer.selectAll('.tag_list_rect').data(this.tags).enter().append('rect')
			.attr("class","tag_list_rect")
			.attr("x",function(d,i){return self.x_offsets[i] - 5;})
			.attr("y",function(d,i){return (self.y_offsets[i] - 1) + 'em';})
			.attr("rx",4)
			.attr("ry",4)
			.attr('width',function(d,i){return self.lengths[i] - 4;})
			.attr('height','1.2em')
			.attr("opacity",1)
			.attr("fill",this.tag_color);
		this.fit_height();

		return this
	}
});


// # **TickView**

// A Backbone.View that displays a Connectivity Map tick view.  The view is must be paired with a CMapTickModel that
// describes the rows to display in the tick view and the scores of the ticks to show for each row.  An 
// example input data object from a CMapTickModel might looks like this:

//			{PC3: [.23,-.28], MCF7: [-0.6]}

// The view will render a row for each key in the data object and a tick for each entry in the array values
// for each row.  The view also renders a title based on the model's title attribute

// optional arguments:

// 1.  {string}  **template**  The path to a handlebars template to use. Defaults to *../templates/d3_target.handlebars*
// 2.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#bdbdbd*
// 3.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"span12"*

// example usage:

//		tick_view = new TickView({el: $("target_selector"),
//												model: new CMapTickModel({data:{PC3: [.23,-.28], MCF7: [-0.6]}, title: "example data"}),
//												template: "../templates/d3_target.handlebars",
//												bg_color: "#bdbdbd",
//												span_class: "span12"
//												});

Barista.Views.TickView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "TickView",

	// ### model
	// set up the view's default model
	model: new Barista.Models.TickModel(),

	// ### initialize
	// overide the defualt Backbone.View initialize method to bind the view to model changes, bind
	// window resize events to view re-draws, compile the template, and render the view
	initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#eeeeee";
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "#span12";
		this.template = (this.options.template !== undefined) ? this.options.template : "../templates/d3_target.handlebars";

		// bind render to model changes
		this.listenTo(this.model,'change', this.redraw);

		// compile the default template for the view and draw it for the first time
		this.compile_template_and_draw();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.redraw();} );
	},

	// ### compile_template_and_draw
	// use Handlebars to compile the template for the view and draw it for the first time

	//		tick_view.compile_template_and_draw();
	compile_template_and_draw: function(){
		var self = this;
		this.isCompiling = true;
		this.div_string = 'd3_target' + new Date().getTime();;
		this.compiled_template = BaristaTemplates.d3_target;
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class}));

		// define the location where d3 will build its plot
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		this.isCompiling = false;
		// draw the plot for the first time
		this.redraw();
	},

	// ### redraw
	// perform a full redraw of the view, including wiping out all d3 drawn components in the view and 
	// initializing them again from scratch.

	//		tick_view.redraw();
	redraw: function(){
		var self = this;
		// set up the panel's width and height via animation
		this.width = $("#" + this.div_string).width();
		$("#" + this.div_string).animate({height:_.keys(this.model.get('data_object')).length*18 + 50},500);

		// once the height is determined, render the view
		setTimeout(function(){
			self.height = $("#" + self.div_string).outerHeight();
			self.init_view();
			self.render();
		},501);
	},

	// ### init_view
	// set up the view from scratch.  Draw a background panel and place all dynamic content on that panel
	// with defualt values

	//		tick_view.init_view();
	init_view: function(){
		// stuff "this" into a variable for use inside of scoped funcitons
		var self = this;

		// check to see if the container is visible, if not, make it visible, but transparent so we draw it with
		// the proper dimensions
		if (this.$el.is(":hidden")){
			this.$el.animate({opacity:0},1);
			this.$el.show();
		}

		// rescale the width of the vis
		this.vis.attr("width",this.width);

		// rescale the height of the vis
		this.vis.attr("height",this.height);

		// set up scaling and margin parameters for the vis
		this.margin = 25;
		this.well_offset = 80;
		this.x_scale=d3.scale.linear().domain([-1,1]).range([this.well_offset + this.margin, this.width - this.margin]);

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// build an xAxis
		var xAxis = d3.svg.axis()
			.scale(this.x_scale)
			.orient("bottom");

		// plot the x axis
		this.vis.selectAll('.axis').data([]).exit().remove();
		this.vis.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(0," + (this.height - this.margin) + ")")
			.call(xAxis);

		// style the axis
		this.vis.select('.axis').selectAll("path")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.select('.axis').selectAll("line")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.select('.axis').selectAll("text")
			.style("font-family","sans-serif")
			.style("font-size","11px");

		// grab data from the model and sort it according to the values in the object
		var data_array = _.pairs(this.model.get('data_object'));
		data_array = data_array.sort(function(a,b){
			if (Barista.arrayAverage(a[1]) < Barista.arrayAverage(b[1])) return 1;
			if (Barista.arrayAverage(a[1]) > Barista.arrayAverage(b[1])) return -1;
			return 0;
		});
		var keys = [];
		var values = [];
		data_array.forEach(function(category){
			keys.push(category[0]);
			values.push(category[1]);
		});

		// draw the static index reagent text
		this.fg_layer.selectAll('.title_text').data([]).exit().remove();
		this.fg_layer.selectAll('.title_text').data([1])
							.enter().append("text")
							.attr("class","title_text")
							.attr("x",this.width/2)
							.attr("y",17)
							.attr("fill","#56B4E9")
							.attr("font-family","Helvetica Neue")
							.attr("font-size","14pt")
							.attr("text-anchor","middle")
							.text(this.model.get('title'));

		// draw the static category wells
		this.fg_layer.selectAll('.category_well').data([]).exit().remove();
		this.fg_layer.selectAll('.category_well').data(keys)
							.enter().append("rect")
							.attr("class","category_well")
							.attr("x",this.margin + this.well_offset)
							.attr("y",function(d,i){return 18*i + 23;})
							.attr("height",17)
							.attr("width",this.width - this.margin*2 - this.well_offset)
							.attr("fill", function(d,i){
								if (i%2 == 0){
									return "#bdbdbd";
								}else{
									return "#999999";
								}
							});
		// draw the ticks
		values.forEach(function(value_array,i){
			tick_class = keys[i] + 'tick'
			self.fg_layer.selectAll('.' + tick_class).data([]).exit().remove();
			self.fg_layer.selectAll('.' + tick_class).data(value_array)
								.enter().append("rect")
								.attr("class","tick " + tick_class)
								.attr("x",self.x_scale)
								.attr("y",18*i + 23)
								.attr("height",17)
								.attr("width",3)
								.attr("fill", "#ff0000");
		});

		

		// add a png export overlay
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",10)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});
	},

	// ### render
	// render the dynamic content of the view based on the current state of the view's data model

	//		tick_view.render();
	render: function(){
		// grab data from the model and sort it according to the values in the object
		var data_array = _.pairs(this.model.get('data_object'));
		data_array = data_array.sort(function(a,b){
			if (Barista.arrayAverage(a[1]) < Barista.arrayAverage(b[1])) return 1;
			if (Barista.arrayAverage(a[1]) > Barista.arrayAverage(b[1])) return -1;
			return 0;
		});
		var keys = [];
		var values = [];
		data_array.forEach(function(category){
			keys.push(category[0]);
			values.push(category[1]);
		});

		// draw the static category text
		this.fg_layer.selectAll('.category_text').data([]).exit().remove();
		this.category_text_selection = this.fg_layer.selectAll('.category_text').data(keys);
		this.category_text_selection.enter().append("text")
							.attr("class","category_text")
							.attr("x",this.margin)
							.attr("y",function(d,i){return 18*i + 40;})
							.attr("font-family","Helvetica Neue")
							.attr("font-size","14pt")
							.text(function(d){return d;});

		this.category_text_selection.exit().remove();

	},

	// ### hide
	// hides the view by dimming the opacity and hiding it in the DOM

	// arguments

	// 1.  {number}  **duration**  the time in ms for the hide animation. defualts to *1*

	//		pert_detail_view.hide(duration);
	hide: function(duration){
		duration = (duration !== undefined) ? duration : 1;
		var self = this;
		this.$el.animate({opacity:0},duration);
		var check_interval = setInterval(check_for_compiled_template(),1);
		function check_for_compiled_template(){
			if (!self.isCompiling){
				clearInterval(check_interval);
				self.width = $("#" + self.div_string).width();
				setTimeout(function(){self.$el.hide();},duration);
			}
		}
	},

	// ### show
	// shows the view by brightening the opacity and showing it in the DOM

	// arguments

	// 1.  {number}  **duration**  the time in ms for the show animation. defualts to *1*

	//		pert_detail_view.show(duration);
	show: function(duration){
		duration = (duration !== undefined) ? duration : 1;
		this.$el.show();
		this.$el.animate({opacity:1},duration);
	},

	// ### savePng
	// save the current state of the view into a png image

	//		tick_view.save_png();
	save_png: function(){
		// build a canvas element to store the image temporarily while we save it
		var width = this.vis.attr("width");
		var height = this.vis.attr("height");
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.vis.selectAll(".no_png_export");
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.vis.node().parentNode.innerHTML;
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = "cmapTickView" + new Date().getTime() + ".png";
		if (canvas.toBlob){canvas.toBlob(function(blob){saveAs(blob,filename);})};
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);
	}

});

// # **ViolinPlotView**
// A Backbone.View that displays a single scatter plot.  the view's model is assumed to have the same defaults
// as specified in **ScatterPlotModel**

// basic use:

//		violin_plot_view = new ViolinPlotView();

// optional arguments:

// 1.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 2.  {string}  **fg\_color**  the hex color code to use as the foreground color of the view, defaults to *#1b9e77*
// 3.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"span12"*
// 4.  {Array}  **x_range**  a two element array specifying the x plotting bounds of the plot, defaults to *[min(x_data),max(x_data)]*
// 5.  {Array}  **y_range**  a two element array specifying the y plotting bounds of the plot, defaults to *[min(y_data),max(y_data)]*
// 6.  {Bool}  **x_log**  if set to true, plots the x axis on a log scale, defaults to *false*
// 7.  {Bool}  **y_log**  if set to true, plots the y axis on a log scale, defaults to *false*
// 8.  {Number}  **plot_height**  the height of the plot in pixels, defaults to *120*

//		violin_plot_view = new ViolinPlotView({el: $("target_selector",
//									bg_color:"#ffffff", 
//									fg_color: "#1b9e77",
//									span_class: "span4",
//									scale_by: undefined,
//									x_range: undefined,
//									y_range: undefined,
//									x_log: false,
//									y_log: false,
//									plot_height: 120});
Barista.Views.ViolinPlotView = Barista.Views.BaristaBaseView.extend({
	// ### model
	// set up the view's default model
	model: new Barista.Models.ScatterPlotModel(),

	// ### initialize
	// overide the default Backbone.View initialize method to handle optional arguments, compile the view
	// template, bind model changes to view updates, and render the view
	initialize: function(){
		// set up x and y range
		this.x_range = (this.options.x_range !== undefined) ? this.options.x_range : undefined;
		this.y_range = (this.options.y_range !== undefined) ? this.options.y_range : undefined;

		// set up x and y log flags
		this.x_log = (this.options.x_log !== undefined) ? this.options.x_log : false;
		this.y_log = (this.options.y_log !== undefined) ? this.options.y_log : false;

		// set up the scale_by parameter
		this.scale_by = (this.options.scale_by !== undefined) ? this.options.scale_by : undefined;

		// run BaristaBaseView's base_initialize method to handle boilerplate view construction
		// and initial view rendering
		this.base_initialize();

		// set up the default height for the plot
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : undefined;

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "span12";

		// bind render to model changes
		this.listenTo(this.model,'change', this.update);

		// compile the default template for the view
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// render the vis
		this.render();

		// bind window resize events to render
		var self = this;
		$(window).resize(function() {self.render();} );
	},

	// ### compile_template
	// use Handlebars to compile the template for the view
	compile_template: function(){
		var self = this;
		this.div_string = 'd3_target' + new Date().getTime();;
		this.compiled_template = BaristaTemplates.d3_target;
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	// ### render
	// completely render the view. Updates both static and dynamic content in the view.
	render: function(){
		this.base_render();
		this.init_plot();
		this.update();
	},

	// ### init_plot
	// initialize the static parts of the view's panel
	init_plot: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the margin
		this.margin = 50;

		// set up x and y ranges
		if (this.x_range === undefined){
			this.x_range = [_.min(this.model.get('x_data')),_.max(this.model.get('x_data'))];
		}
		if (this.y_range === undefined){
			this.y_range = [_.min(this.model.get('y_data')),_.max(this.model.get('y_data'))];
		}

		// set up scaling
		if (this.x_log){
			this.x_scale=d3.scale.log().domain([this.x_range[0],this.x_range[1]]).range([this.margin, this.width - this.margin]);
		}else{
			this.x_scale=d3.scale.linear().domain([this.x_range[0],this.x_range[1]]).range([this.margin, this.width - this.margin]);
		}
		if (this.y_log){
			this.y_scale=d3.scale.log().domain([this.y_range[1],this.y_range[0]]).range([this.margin, this.height - this.margin]);
		}else{
			this.y_scale=d3.scale.linear().domain([this.y_range[1],this.y_range[0]]).range([this.margin, this.height - this.margin]);
		}

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		// set up the panel's width and height
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();

		// rescale the width of the vis
		this.vis.transition().attr("width",this.width);
		this.vis.transition().attr("height",this.height);

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// build an Axes
		var xAxis = d3.svg.axis()
			.scale(this.x_scale)
			.orient("bottom");
		var yAxis = d3.svg.axis()
			.scale(this.y_scale)
			.orient("left");

		// plot the axes
		this.bg_layer.selectAll('.axis').data([]).exit().remove();
		this.bg_layer.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(0," + (this.height - this.margin) + ")")
			.call(xAxis);

		// style the axes
		this.vis.selectAll('.axis').selectAll("path")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("line")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("text")
			.style("font-family","sans-serif")
			.style("font-size","11px");

		// define an area generator for use in plotting data
		this.upper_area_generator = d3.svg.area()
			.x(function(d) { return self.x_scale(d.x); })
			.y0(this.y_scale(0))
			.y1(function(d) { return self.y_scale(d.y); })
			.interpolate('basis');
		this.lower_area_generator = d3.svg.area()
			.x(function(d) { return self.x_scale(d.x); })
			.y0(this.y_scale(0))
			.y1(function(d) { return self.y_scale(d.y * -1); })
			.interpolate('basis');

		// grab data from the model and package it such that we can iterate over it
		// and generate an area. The packaged data will be sorted by the x_data attribute
		this.x_data = this.model.get('x_data');
		this.y_data = this.model.get('y_data');
		this.path_data = [];
		this.x_data.forEach(function(x,i){ self.path_data.push({x: x, y: self.y_data[i]});});
		this.path_data.sort(this.path_data_sorter);

		// plot the data
		this.bg_layer.selectAll('.upper_violin').data([]).exit().remove();
		this.bg_layer.selectAll('.upper_violin').data([1]).enter().append('path')
			.attr("class","upper_violin")
			.attr("opacity",0.5)
			.attr("fill",this.fg_color)
			.attr('d',this.upper_area_generator(this.path_data));
		this.bg_layer.selectAll('.lower_violin').data([]).exit().remove();
		this.bg_layer.selectAll('.lower_violin').data([1]).enter().append('path')
			.attr("class","lower_violin")
			.attr("opacity",0.5)
			.attr("fill",this.fg_color)
			.attr('d',this.lower_area_generator(this.path_data));


		// plot the x axis title
		this.bg_layer.selectAll('.x_axis_label').data([]).exit().remove();
		this.bg_layer.selectAll('.x_axis_label').data([1]).enter().append('text')
			.attr("class","x_axis_label axis_label")
			.attr("x",this.width/2)
			.attr("y",this.height-10)
			.style("text-anchor","middle")
			.text(this.model.get('x_axis_title'));

		// plot the title
		this.bg_layer.selectAll('.title').data([]).exit().remove();
		this.bg_layer.selectAll('.title').data([1]).enter().append('text')
			.attr("class","title title")
			.attr("x",this.width/2)
			.attr("y",this.margin/2)
			.style("text-anchor","middle")
			.text(this.model.get('title'));

	},

	// ### update
	// update the dynamic potions of the view
	update: function(){
		var self = this;
		// grab data from the model and package it such that we can iterate over it
		// and generate an area. The packaged data will be sorted by the x_data attribute
		this.x_data = this.model.get('x_data');
		this.y_data = this.model.get('y_data');
		this.path_data = [];
		this.x_data.forEach(function(x,i){ self.path_data.push({x: x, y: self.y_data[i]});});
		this.path_data.sort(this.path_data_sorter);

		// transition the data
		var upper = this.bg_layer.selectAll('.upper_violin');
		upper.transition().duration(500).attr('d',this.upper_area_generator(this.path_data));

		var lower = this.bg_layer.selectAll('.lower_violin');
		lower.transition().duration(500).attr('d',this.lower_area_generator(this.path_data));
	},

	// ### path data sorter
	// internal method used to sort path_data list elements by the x attribute
	path_data_sorter: function(a,b) {
		if (a.x < b.x){
			return -1;
		}else{
			return 1;
		}
	}
});

/**
Tile constructor
@param {object} [options={}] options object to set properties
@classdesc A Tile that displays simple information and serves as a front door to the an underlying app.  The 
tile is composted of a square div element that can be small, medium, or wide.  The height of the tile is 150px
for small and 300px for large tiles.  The width is expressed as bootstrap span units of 3(small), 6(medium), or
12(wide).  This base class provides mechanisms for injecting html into the DOM and showing or hiding the tile as
well as default styling
@class Tile
@constructor
@param {string}  [options.div_target] the div id into which to inject html, defaults to "body"
@param {string}  [options.div_id] the div id for generated html, defaults to "Tile" plus a random number
@param {string}  [options.style]  inline style specification, defaults to "#bdbdbd"
@param {string}  [options.color]  the background color of the tile, defuaults to 
@param {string}  [options.tile_type]  tile type, can be "small", "medium", or "wide", defaults to "medium"
@param {bool}  [options.display]  true to render the tile on object creation, false not to, defaults to true

**/
function Tile(options){
	options = (options !== undefined) ? options : {};
	this.div_target = (options.div_target !== undefined) ? options.div_target : "body";
	this.div_id = (options.div_id !== undefined) ? options.div_id : "Tile" + Math.floor(Math.random()*1000000000);
	this.link = (options.link !== undefined) ? options.link : "";
	this.style = (options.style !== undefined) ? options.style : "";
	this.color = (options.color !== undefined) ? options.color : "#bdbdbd";
	this.tile_type = (options.tile_type !== undefined) ? options.tile_type : "medium";
	this.display = (options.display !== undefined) ? options.display : true;

	// initialize the tile
	this.init_state = false;
	if (this.display){
		this.init();
	}
}

/**
Initializes Tile by building the appropriate html and injecting it into the DOM
@memberof Tile
@method init 
**/
Tile.prototype.init = function() {
	// build the html to inject into the DOM
	this.build_html();

	// inject the html into the target div
	this.inject();

	//draw the background of the tile
	this.draw_bg();

	// set the initialization flag to true
	this.init_state = true;

	// bind the tile to redraw when the window resizes
	var self = this;
	$(window).resize(function() {self.draw_bg();} );
};

/**
Builds the html for the tile based on the tile_type given in the constructor
@memberof Tile
@method build_html 
**/
Tile.prototype.build_html = function() {
	if (this.tile_type == "small"){
		this.html = '<div id="' + this.div_id + '" class="span3" style="height:150px ' + this.style + '"></div>';
	}
	if (this.tile_type == "medium"){
		this.html = '<div id="' + this.div_id + '" class="span6" style="height:300px ' + this.style + '"></div>';
	}
	if (this.tile_type == "wide"){
		this.html = '<div id="' + this.div_id + '" class="span12" style="height:300px ' + this.style + '"></div>';
	}
};

/**
Injects the Tile's html into the DOM at the target id given in the constructor
@memberof Tile
@method inject
**/
Tile.prototype.inject = function() {
	$(this.div_target).append(this.html);
};

/**
draws the tiles background using d3.js
@memberof Tile
@method draw_bg 
**/
Tile.prototype.draw_bg = function() {
	// get the correct height and width to draw
	this.width = $("#" + this.div_id).outerWidth();
	if (this.tile_type == "small"){
		this.height = 150;
	}else{
		this.height = 300;
	}

	// set up a top level svg selection if the tile needs to be initialized
	if (!this.init_state){
		this.svg=d3.select("#" + this.div_id).append("svg")
			.attr("class",this.div_id + "_tile_svg")
			.attr("width",this.width)
			.attr("height",this.height);

		// add a group to drawing elements
		this.svg.append("g").attr("class", "draw_layer");

		// add a group to link elements
		this.svg.append("g").attr("class", "link_layer");

		// add the link
		this.link_selection = this.svg.select('.link_layer').selectAll("rect.link_rect").data([1]);
		this.link_selection.enter().append("a")
			.attr("xlink:href",this.link)
			.append("rect")
			.attr("x",0)
			.attr("y",0)
			.attr("rx",20)
			.attr("ry",20)
			.attr("class","link_rect")
			.attr("height", this.height)
			.attr("width", this.width)
			.attr("fill", this.color)
			.attr("opacity",0);
	}

	// (re)draw the background
	this.svg.select('.draw_layer').selectAll("rect.bg").data([]).exit().remove();
	this.svg.select('.draw_layer').selectAll("rect.bg").data([1])
			.enter().append("rect")
			.attr("x",0)
			.attr("y",0)
			.attr("rx",20)
			.attr("ry",20)
			.attr("class","bg")
			.attr("height", this.height)
			.attr("width", this.width)
			.attr("fill", this.color);
};

/**
hides the tile
@param {object} [duration=0] the duration of a fade out animation applied before hiding the tile
@memberof Tile
@method hide 
**/
Tile.prototype.hide = function(duration) {
	duration = (duration !== undefined) ? duration : 0;
	$("#" + this.div_id).animate({opacity:0,width:0,height:0},duration);
	var self = this;
	setTimeout(function(){$("#" + self.div_id).hide();},duration);
};

/**
shows the tile
@param {object} [duration=0] the duration of a fade out animation applied after showing the tile
@memberof Tile
@method show 
**/
Tile.prototype.show = function(duration) {
	duration = (duration !== undefined) ? duration : 0;
	$("#" + this.div_id).show();
	$("#" + this.div_id).animate({opacity:1,width:this.width,height:this.height},duration);
};

/**
ImageTile constructor
@param {object} [options={}] options object to set properties
@classdesc A Tile that extends the base Tile to add an image in the center of the tile
@class ImageTile
@constructor
@extends Tile
@param {string}  [options.image] the url to use as the image,defaults to "../Bellhop/img.two_circles.png"
@param {string}  [options.div_target] the div id into which to inject html, defaults to "body"
@param {string}  [options.div_id] the div id for generated html, defaults to "Tile" plus a random number
@param {string}  [options.style] inline style specification, defaults to "#f0f0f0"
@param {string}  [options.color] the background color of the tile, defuaults to 
@param {string}  [options.tile_type] tile type, can be "small", "medium", or "wide", defaults to "medium"

**/
function ImageTile(options){
	this.image = (options.image !== undefined) ? options.image : "../Bellhop/img/CMap_Logo_gray.png";
	Tile.apply(this,arguments);
	var self = this;
	$(window).resize(function() {self.draw();} );
	this.draw();
}
ImageTile.prototype = new Tile({display:false});
ImageTile.prototype.constructor = ImageTile;

/**
top level draw wrapper around draw\_bg and draw\_image
@memberof ImageTile
@method draw 
**/
ImageTile.prototype.draw = function() {
	this.draw_bg();
	this.draw_image();
};

/**
draws the tile's image using d3.js
@memberof ImageTile
@method draw_image 
**/
ImageTile.prototype.draw_image = function() {
	// get the correct height and width to draw
	this.width = $("#" + this.div_id).outerWidth();
	if (this.tile_type == "small"){
		this.height = 150;
	}else{
		this.height = 300;
	}

	// set up a top level svg selection if the tile needs to be initialized
	if (!this.init_state){
		this.svg=d3.select("#" + this.div_id).append("svg")
			.attr("class",this.div_id + "_tile_svg")
			.attr("width",this.width)
			.attr("height",this.height);
	}

	// (re)draw the image
	this.image_size = this.height - 50;
	this.svg.select('.draw_layer').selectAll("image." + this.div_id).data([]).exit().remove();
	this.image_selection = this.svg.select('.draw_layer').selectAll("image." + this.div_id).data([1])
		.enter().append("image")
		.attr("xlink:href",this.image)
		.attr("class",this.div_id)
		.attr("x",this.width/2 - this.image_size/2)
		.attr("y",this.height/2 - this.image_size/2)
		.attr("height",this.image_size)
		.attr("width",this.image_size);
};

/**
AnimatedImageTextTile constructor
@param {object} [options={}] options object to set properties
@classdesc A Tile that extends the base Tile to add an image in the center of the tile
@class AnimatedImageTile
@constructor
@extends Tile
@param {string}  [options.image] the url to use as the image,defaults to "../Bellhop/img.two_circles.png"
@param {string}  [options.div_target] the div id into which to inject html, defaults to "body"
@param {string}  [options.div_id] the div id for generated html, defaults to "Tile" plus a random number
@param {string}  [options.style] inline style specification, defaults to "#f0f0f0"
@param {string}  [options.color] the background color of the tile, defuaults to 
@param {string}  [options.tile_type] tile type, can be "small", "medium", or "wide", defaults to "medium"

**/
function AnimatedImageTile(options){
	this.image = (options.image !== undefined) ? options.image : "../Bellhop/img/CMap_Logo_gray.png";
	Tile.apply(this,arguments);
	var self = this;
	$(window).resize(function() {self.draw();} );
	this.draw();
	this.start_animation();
}
AnimatedImageTile.prototype = new ImageTile({display:false});
AnimatedImageTile.prototype.constructor = AnimatedImageTile;

/**
top level draw wrapper around draw\_bg and draw\_image
@memberof AnimatedImageTile
@method draw 
**/
AnimatedImageTile.prototype.draw = function() {
	this.draw_bg();
	this.draw_image();
};

/**
starts periodic animation of the Image on the Tile
@memberof AnimatedImageTile
@method start_animation 
@param {int}  [duration=2000] duration the length of the animation in milliseconds
@param {int}  [frequency= 10000 to 20000] frequency the frequency of the animation in milliseconds
**/
AnimatedImageTile.prototype.start_animation = function(duration,frequency) {
	duration = (duration !== undefined) ? duration : 2000;
	frequency = (frequency !== undefined) ? frequency : 10000 + Math.random() * 10000;
	var self = this;
	setInterval(function(){
		self.image_selection.transition().duration(duration/2)
			.attr("y",-self.image_size - 10)
			.transition().duration(1)
			.attr("y",self.height + self.image_size + 10)
			.transition().duration(duration/2)
			.attr("y",self.height/2 - self.image_size/2);
	},frequency);
};


/**
ImageTextTile constructor
@param {object} [options={}] options object to set properties
@classdesc A Tile that extends ImageTile to add text 
@class ImageTextTile
@constructor
@extends ImageTile
@param {string}  [options.image] the url to use as the image,defaults to "../Bellhop/img.two_circles.png"
@param {string}  [options.div_target] the div id into which to inject html, defaults to "body"
@param {string}  [options.div_id] the div id for generated html, defaults to "Tile" plus a random number
@param {string}  [options.text] the text to display on the panel, defaults to "Title"
@param {string}  [options.style] inline style specification, defaults to "#f0f0f0"
@param {string}  [options.color] the background color of the tile, defuaults to 
@param {string}  [options.tile_type] tile type, can be "small", "medium", or "wide", defaults to "medium"

**/
function ImageTextTile(options){
	this.title = (options.title !== undefined) ? options.title : "Title";
	ImageTile.apply(this,arguments);
	var self = this;
	$(window).resize(function() {self.draw();} );
	this.draw();
}
ImageTextTile.prototype = new ImageTile({display:false});
ImageTextTile.prototype.constructor = ImageTextTile;

/**
top level draw wrapper around draw\_bg and draw\_image and draw\_text
@memberof ImageTextTile
@method draw 
**/
ImageTextTile.prototype.draw = function() {
	this.draw_bg();
	this.draw_image();
	this.draw_text();
};

/**
draws the tile's text using d3.js
@memberof ImageTextTile
@method draw_text 
**/
ImageTextTile.prototype.draw_text = function() {
	// get the correct height and width to draw
	this.width = $("#" + this.div_id).outerWidth();
	if (this.tile_type == "small"){
		this.height = 150;
	}else{
		this.height = 300;
	}

	// set up a top level svg selection if the tile needs to be initialized
	if (!this.init_state){
		this.svg=d3.select("#" + this.div_id).append("svg")
			.attr("class",this.div_id + "_tile_svg")
			.attr("width",this.width)
			.attr("height",this.height);
	}

	// (re)draw the text
	if (this.tile_type == "wide" || this.tile_type == "medium"){
		var x,y,height,width,html;
		if (this.tile_type == "wide"){
			x = this.width/3*2;
			y = this.height/10*5;
			height = this.height/10 * 5;
			width = this.width/3 - 20;
			html = '<h2>' + this.title + '</h2>';
		}
		if (this.tile_type == "medium"){
			x = 20;
			y = this.height/10*8.5;
			height = this.height/10 * 1.5;
			width = this.width - 40;
			html = '<h3>' + this.title + '</h3>';
		}
		this.svg.select('.draw_layer').selectAll('.tile_text').data([]).exit().remove();
		this.svg.select('.draw_layer').selectAll('.tile_text').data([this.title])
			.enter().append("foreignObject")
			.attr("class","tile_text")
			.attr("x",x)
			.attr("y",y)
			.attr("height",height)
			.attr("width",width)
			.append("xhtml:div")
			.style("background-color",this.color)
			.html(html);
	}

};

/**
AnimatedImageTextTile constructor
@param {object} [options={}] options object to set properties
@classdesc A Tile that extends ImageTile to add text that animates on mouseover
@class AnimatedImageTextTile
@constructor
@extends ImageTile
@param {string}  [options.image] the url to use as the image,defaults to "../Bellhop/img.two_circles.png"
@param {string}  [options.div_target] the div id into which to inject html, defaults to "body"
@param {string}  [options.div_id] the div id for generated html, defaults to "Tile" plus a random number
@param {string}  [options.text] the text to display on the panel, defaults to "Title"
@param {string}  [options.style] inline style specification, defaults to "#f0f0f0"
@param {string}  [options.color] the background color of the tile, defuaults to 
@param {string}  [options.tile_type] tile type, can be "small", "medium", or "wide", defaults to "medium"

**/
function AnimatedImageTextTile(options){
	this.title = (options.title !== undefined) ? options.title : "Title";
	ImageTile.apply(this,arguments);
	var self = this;
	$(window).resize(function() {self.draw();} );
	this.draw();
	this.TextIsAnimatingIn = false;
	this.TextIsAnimatingOut = false;
}
AnimatedImageTextTile.prototype = new ImageTile({display:false});
AnimatedImageTextTile.prototype.constructor = AnimatedImageTextTile;

/**
top level draw wrapper around draw\_bg and draw\_image and draw\_text
@memberof AnimatedImageTextTile
@method draw 
**/
AnimatedImageTextTile.prototype.draw = function() {
	this.draw_bg();
	this.draw_image();
	this.draw_text();
	//add callbacks to expose the display of the animated text
	var self = this;
	this.link_selection.on('mouseover',function(){self.show_text();});
	this.link_selection.on('mouseout',function(){self.hide_text();});
};

/**
show the text in the Tile
@memberof AnimatedImageTextTile
@method show_text
**/
AnimatedImageTextTile.prototype.show_text = function() {
	if (!this.TextIsAnimating){
		$("#" + this.div_id + "_tile_text").animate({opacity:1},500);
	}
	this.TextIsAnimating = true;
	var self = this;
	setTimeout(function(){self.TextIsAnimatingIn = false;},500);
};

/**
hide the text in the Tile
@memberof AnimatedImageTextTile
@method hide_text 
**/
AnimatedImageTextTile.prototype.hide_text = function() {
	if (!this.TextIsAnimating){
		$("#" + this.div_id + "_tile_text").animate({opacity:0},500);
	}
	this.TextIsAnimating = true;
	var self = this;
	setTimeout(function(){self.TextIsAnimatingOut = false;},500);
};

/**
draws the tile's text using d3.js
@memberof AnimatedImageTextTile
@method draw_text 
**/
AnimatedImageTextTile.prototype.draw_text = function() {
	// get the correct height and width to draw
	this.width = $("#" + this.div_id).outerWidth();
	if (this.tile_type == "small"){
		this.height = 150;
	}else{
		this.height = 300;
	}

	// set up a top level svg selection if the tile needs to be initialized
	if (!this.init_state){
		this.svg=d3.select("#" + this.div_id).append("svg")
			.attr("class",this.div_id + "_tile_svg")
			.attr("width",this.width)
			.attr("height",this.height);
	}

	// (re)draw the text
	var x,y,height,width,html;
	x = 0;
	y = 20;
	height = this.height - 40;
	width = this.width;
	if (this.tile_type == "wide"){
		html = '<h2>' + this.title + '</h2>';
	}
	if (this.tile_type == "medium" || this.tile_type == "small"){
		html = '<h3>' + this.title + '</h3>';
	}
	this.svg.select('.draw_layer').selectAll('.tile_text').data([]).exit().remove();
	this.svg.select('.draw_layer').selectAll('.tile_text').data([this.title])
		.enter().append("foreignObject")
		.attr("class","tile_text")
		.attr("x",x)
		.attr("y",y)
		.attr("height",height)
		.attr("width",width)
		.style("pointer-events","none")
		.append("xhtml:div")
		.attr("id",this.div_id + "_tile_text")
		.style("opacity",0)
		.style("background-color","#ffffff")
		.html(html);

};

/**
FullAnimatedImageTextTile constructor
@param {object} [options={}] options object to set properties
@classdesc A Tile that extends AnimatedImageTile to add text that animates on mouseover
@class FullAnimatedImageTextTile
@constructor
@extends ImageTile
@param {string}  [options.image] the url to use as the image,defaults to "../Bellhop/img.two_circles.png"
@param {string}  [options.div_target] the div id into which to inject html, defaults to "body"
@param {string}  [options.div_id] the div id for generated html, defaults to "Tile" plus a random number
@param {string}  [options.text] the text to display on the panel, defaults to "Title"
@param {string}  [options.style] inline style specification, defaults to "#f0f0f0"
@param {string}  [options.color] the background color of the tile, defuaults to 
@param {string}  [options.tile_type] tile type, can be "small", "medium", or "wide", defaults to "medium"

**/
function FullAnimatedImageTextTile(options){
	this.title = (options.title !== undefined) ? options.title : "Title";
	ImageTile.apply(this,arguments);
	var self = this;
	$(window).resize(function() {self.draw();} );
	this.draw();
	this.start_animation();
	this.TextIsAnimatingIn = false;
	this.TextIsAnimatingOut = false;
}
FullAnimatedImageTextTile.prototype = new AnimatedImageTile({display:false});
FullAnimatedImageTextTile.prototype.constructor = FullAnimatedImageTextTile;

/**
top level draw wrapper around draw\_bg and draw\_image and draw\_text
@memberof FullAnimatedImageTextTile
@method draw 
**/
FullAnimatedImageTextTile.prototype.draw = function() {
	this.draw_bg();
	this.draw_image();
	this.draw_text();
	//add callbacks to expose the display of the animated text
	var self = this;
	this.link_selection.on('mouseover',function(){self.show_text();});
	this.link_selection.on('mouseout',function(){self.hide_text();});
};

/**
show the text in the Tile
@memberof FullAnimatedImageTextTile
@method show_text
**/
FullAnimatedImageTextTile.prototype.show_text = function() {
	if (!this.TextIsAnimatingIn){
		$("#" + this.div_id + "_tile_text").animate({opacity:1},500);
	}
	this.TextIsAnimating = true;
	var self = this;
	setTimeout(function(){self.TextIsAnimatingIn = false;},500);
};

/**
hide the text in the Tile
@memberof FullAnimatedImageTextTile
@method hide_text 
**/
FullAnimatedImageTextTile.prototype.hide_text = function() {
	if (!this.TextIsAnimatingOut){
		$("#" + this.div_id + "_tile_text").animate({opacity:0},500);
	}
	this.TextIsAnimating = true;
	var self = this;
	setTimeout(function(){self.TextIsAnimatingOut = false;},500);
};

/**
draws the tile's text using d3.js
@memberof FullAnimatedImageTextTile
@method draw_text 
**/
FullAnimatedImageTextTile.prototype.draw_text = function() {
	// get the correct height and width to draw
	this.width = $("#" + this.div_id).outerWidth();
	if (this.tile_type == "small"){
		this.height = 150;
	}else{
		this.height = 300;
	}

	// set up a top level svg selection if the tile needs to be initialized
	if (!this.init_state){
		this.svg=d3.select("#" + this.div_id).append("svg")
			.attr("class",this.div_id + "_tile_svg")
			.attr("width",this.width)
			.attr("height",this.height);
	}

	// (re)draw the text
	var x,y,height,width,html;
	x = 0;
	y = 20;
	height = this.height - 40;
	width = this.width;
	if (this.tile_type == "wide"){
		html = '<h2>' + this.title + '</h2>';
	}
	if (this.tile_type == "medium" || this.tile_type == "small"){
		html = '<h3>' + this.title + '</h3>';
	}
	this.svg.select('.draw_layer').selectAll('.tile_text').data([]).exit().remove();
	this.svg.select('.draw_layer').selectAll('.tile_text').data([this.title])
		.enter().append("foreignObject")
		.attr("class","tile_text")
		.attr("x",x)
		.attr("y",y)
		.attr("height",height)
		.attr("width",width)
		.style("pointer-events","none")
		.append("xhtml:body")
		.attr("id",this.div_id + "_tile_text")
		.attr("height",height)
		.attr("width",width)
		.style("background-color","#ffffff")
		.style("opacity",0)
		.html(html);

};


//wrap all of our afterword code so we keep the global namespace clean.  All 'global' variables
//will be exposed in the Barista object
(function (){

    //set the user_key from a local file called barista_config if it is present
    Barista.setUserKey('barista_config.json');

    //find all of the barista_target div elements on the page
    var all_divs = $('div');
    var barista_targets = [];
    Barista.generatedViews = {};
    all_divs.each(function () {
        var data_attrs = $(this).data();
        if (_.keys(data_attrs).indexOf('baristaView') !== -1){
            barista_targets.push(this);
        }
    });

    //for each barista target element, instantiate the view and attempt to call the
    //fetch method of its model. For some views this will not work, but many will. 
    //The idea is that we want to populate the views with data when we can on page load
    //since the user is not instantiating the view via javascript.  For each target
    //Element we will also try to bind it to any views that it asks to be bound to. The 
    //binding is assumed to be a binding between the any events coming out of the source view.
    //the event's 'val' attribute is fed to the view's model.fetch method
    barista_targets.forEach(function(target){
        //grab the view type and make sure it has a unique view name
        var view_num = 0;
        var view_type = $(target).data().baristaView;
        var view_name;
        if ($(target).attr('id')){
            view_name = $(target).attr('id');
        }else{
            view_name = view_type;
        }
        while (_.keys(Barista.generatedViews).indexOf(view_name) !== -1){
            view_num += 1;
            view_name = view_type + view_num;
        }

        //    instantiate the view and register it to the generatedViews object in 
        //    Barista
        var view_params = _.extend({el: target},$(target).data());
        Barista.generatedViews[view_name] = new Barista.Views[view_type](view_params);

        //    try to call the view's fetch method and ignore errors that come up since
        //    we expect them for views that don't have models supporting a fetch 
        //    operation
        try {
            Barista.generatedViews[view_name].model.fetch('');
        }catch(err){
        }

        //    try to bind views that are specified
        if (_.keys($(target).data()).indexOf('bind') !== -1){
            var bind_target = $(target).data().bind;
            Barista.generatedViews[view_name].listenTo(Barista.generatedViews[bind_target],'all',function(event_name, e){
                Barista.generatedViews[view_name].model.fetch(e.val);
            });
        }
    });
}());