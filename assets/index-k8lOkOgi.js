(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))_(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&_(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function _(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();var D,a,de,w,ne,ve,K,me,T={},ye=[],Ee=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,R=Array.isArray;function P(e,t){for(var n in t)e[n]=t[n];return e}function ge(e){var t=e.parentNode;t&&t.removeChild(e)}function C(e,t,n){var _,o,r,u={};for(r in t)r=="key"?_=t[r]:r=="ref"?o=t[r]:u[r]=t[r];if(arguments.length>2&&(u.children=arguments.length>3?D.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)u[r]===void 0&&(u[r]=e.defaultProps[r]);return H(e,u,_,o,null)}function H(e,t,n,_,o){var r={type:e,props:t,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++de,__i:-1,__u:0};return o==null&&a.vnode!=null&&a.vnode(r),r}function j(e){return e.children}function U(e,t){this.props=e,this.context=t}function E(e,t){if(t==null)return e.__?E(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?E(e):null}function be(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return be(e)}}function z(e){(!e.__d&&(e.__d=!0)&&w.push(e)&&!F.__r++||ne!==a.debounceRendering)&&((ne=a.debounceRendering)||ve)(F)}function F(){var e,t,n,_,o,r,u,l,s;for(w.sort(K);e=w.shift();)e.__d&&(t=w.length,_=void 0,r=(o=(n=e).__v).__e,l=[],s=[],(u=n.__P)&&((_=P({},o)).__v=o.__v+1,a.vnode&&a.vnode(_),Y(u,_,o,n.__n,u.ownerSVGElement!==void 0,32&o.__u?[r]:null,l,r??E(o),!!(32&o.__u),s),_.__.__k[_.__i]=_,Pe(l,_,s),_.__e!=r&&be(_)),w.length>t&&w.sort(K));F.__r=0}function ke(e,t,n,_,o,r,u,l,s,c,p){var i,m,f,d,g,v=_&&_.__k||ye,h=t.length;for(n.__d=s,Ae(n,t,v),s=n.__d,i=0;i<h;i++)(f=n.__k[i])!=null&&typeof f!="boolean"&&typeof f!="function"&&(m=f.__i===-1?T:v[f.__i]||T,f.__i=i,Y(e,f,m,o,r,u,l,s,c,p),d=f.__e,f.ref&&m.ref!=f.ref&&(m.ref&&Z(m.ref,null,f),p.push(f.ref,f.__c||d,f)),g==null&&d!=null&&(g=d),65536&f.__u||m.__k===f.__k?s=$e(f,s,e):typeof f.type=="function"&&f.__d!==void 0?s=f.__d:d&&(s=d.nextSibling),f.__d=void 0,f.__u&=-196609);n.__d=s,n.__e=g}function Ae(e,t,n){var _,o,r,u,l,s=t.length,c=n.length,p=c,i=0;for(e.__k=[],_=0;_<s;_++)(o=e.__k[_]=(o=t[_])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?H(null,o,null,null,o):R(o)?H(j,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?H(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,l=He(o,n,u=_+i,p),o.__i=l,r=null,l!==-1&&(p--,(r=n[l])&&(r.__u|=131072)),r==null||r.__v===null?(l==-1&&i--,typeof o.type!="function"&&(o.__u|=65536)):l!==u&&(l===u+1?i++:l>u?p>s-u?i+=l-u:i--:i=l<u&&l==u-1?l-u:0,l!==_+i&&(o.__u|=65536))):(r=n[_])&&r.key==null&&r.__e&&(r.__e==e.__d&&(e.__d=E(r)),J(r,r,!1),n[_]=null,p--);if(p)for(_=0;_<c;_++)(r=n[_])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=E(r)),J(r,r))}function $e(e,t,n){var _,o;if(typeof e.type=="function"){for(_=e.__k,o=0;_&&o<_.length;o++)_[o]&&(_[o].__=e,t=$e(_[o],t,n));return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function G(e,t){return t=t||[],e==null||typeof e=="boolean"||(R(e)?e.some(function(n){G(n,t)}):t.push(e)),t}function He(e,t,n,_){var o=e.key,r=e.type,u=n-1,l=n+1,s=t[n];if(s===null||s&&o==s.key&&r===s.type)return n;if(_>(s!=null&&!(131072&s.__u)?1:0))for(;u>=0||l<t.length;){if(u>=0){if((s=t[u])&&!(131072&s.__u)&&o==s.key&&r===s.type)return u;u--}if(l<t.length){if((s=t[l])&&!(131072&s.__u)&&o==s.key&&r===s.type)return l;l++}}return-1}function oe(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ee.test(t)?n:n+"px"}function O(e,t,n,_,o){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof _=="string"&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||oe(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||oe(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?_?n.u=_.u:(n.u=Date.now(),e.addEventListener(t,r?re:_e,r)):e.removeEventListener(t,r?re:_e,r);else{if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function _e(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(a.event?a.event(e):e)}function re(e){return this.l[e.type+!0](a.event?a.event(e):e)}function Y(e,t,n,_,o,r,u,l,s,c){var p,i,m,f,d,g,v,h,y,x,L,A,te,N,q,k=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),r=[l=t.__e=n.__e]),(p=a.__b)&&p(t);e:if(typeof k=="function")try{if(h=t.props,y=(p=k.contextType)&&_[p.__c],x=p?y?y.props.value:p.__:_,n.__c?v=(i=t.__c=n.__c).__=i.__E:("prototype"in k&&k.prototype.render?t.__c=i=new k(h,x):(t.__c=i=new U(h,x),i.constructor=k,i.render=Te),y&&y.sub(i),i.props=h,i.state||(i.state={}),i.context=x,i.__n=_,m=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),k.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=P({},i.__s)),P(i.__s,k.getDerivedStateFromProps(h,i.__s))),f=i.props,d=i.state,i.__v=t,m)k.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(k.getDerivedStateFromProps==null&&h!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(h,x),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(h,i.__s,x)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(i.props=h,i.state=i.__s,i.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(M){M&&(M.__=t)}),L=0;L<i._sb.length;L++)i.__h.push(i._sb[L]);i._sb=[],i.__h.length&&u.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(h,i.__s,x),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,d,g)})}if(i.context=x,i.props=h,i.__P=e,i.__e=!1,A=a.__r,te=0,"prototype"in k&&k.prototype.render){for(i.state=i.__s,i.__d=!1,A&&A(t),p=i.render(i.props,i.state,i.context),N=0;N<i._sb.length;N++)i.__h.push(i._sb[N]);i._sb=[]}else do i.__d=!1,A&&A(t),p=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++te<25);i.state=i.__s,i.getChildContext!=null&&(_=P(P({},_),i.getChildContext())),m||i.getSnapshotBeforeUpdate==null||(g=i.getSnapshotBeforeUpdate(f,d)),ke(e,R(q=p!=null&&p.type===j&&p.key==null?p.props.children:p)?q:[q],t,n,_,o,r,u,l,s,c),i.base=t.__e,t.__u&=-161,i.__h.length&&u.push(i),v&&(i.__E=i.__=null)}catch(M){t.__v=null,s||r!=null?(t.__e=l,t.__u|=s?160:32,r[r.indexOf(l)]=null):(t.__e=n.__e,t.__k=n.__k),a.__e(M,t,n)}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Ue(n.__e,t,n,_,o,r,u,s,c);(p=a.diffed)&&p(t)}function Pe(e,t,n){t.__d=void 0;for(var _=0;_<n.length;_++)Z(n[_],n[++_],n[++_]);a.__c&&a.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(r){r.call(o)})}catch(r){a.__e(r,o.__v)}})}function Ue(e,t,n,_,o,r,u,l,s){var c,p,i,m,f,d,g,v=n.props,h=t.props,y=t.type;if(y==="svg"&&(o=!0),r!=null){for(c=0;c<r.length;c++)if((f=r[c])&&"setAttribute"in f==!!y&&(y?f.localName===y:f.nodeType===3)){e=f,r[c]=null;break}}if(e==null){if(y===null)return document.createTextNode(h);e=o?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,h.is&&h),r=null,l=!1}if(y===null)v===h||l&&e.data===h||(e.data=h);else{if(r=r&&D.call(e.childNodes),v=n.props||T,!l&&r!=null)for(v={},c=0;c<e.attributes.length;c++)v[(f=e.attributes[c]).name]=f.value;for(c in v)f=v[c],c=="children"||(c=="dangerouslySetInnerHTML"?i=f:c==="key"||c in h||O(e,c,null,f,o));for(c in h)f=h[c],c=="children"?m=f:c=="dangerouslySetInnerHTML"?p=f:c=="value"?d=f:c=="checked"?g=f:c==="key"||l&&typeof f!="function"||v[c]===f||O(e,c,f,v[c],o);if(p)l||i&&(p.__html===i.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(i&&(e.innerHTML=""),ke(e,R(m)?m:[m],t,n,_,o&&y!=="foreignObject",r,u,r?r[0]:n.__k&&E(n,0),l,s),r!=null)for(c=r.length;c--;)r[c]!=null&&ge(r[c]);l||(c="value",d!==void 0&&(d!==e[c]||y==="progress"&&!d||y==="option"&&d!==v[c])&&O(e,c,d,v[c],!1),c="checked",g!==void 0&&g!==e[c]&&O(e,c,g,v[c],!1))}return e}function Z(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(_){a.__e(_,n)}}function J(e,t,n){var _,o;if(a.unmount&&a.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||Z(_,null,t)),(_=e.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(r){a.__e(r,t)}_.base=_.__P=null,e.__c=void 0}if(_=e.__k)for(o=0;o<_.length;o++)_[o]&&J(_[o],t,n||typeof e.type!="function");n||e.__e==null||ge(e.__e),e.__=e.__e=e.__d=void 0}function Te(e,t,n){return this.constructor(e,n)}function De(e,t,n){var _,o,r,u;a.__&&a.__(e,t),o=(_=typeof n=="function")?null:n&&n.__k||t.__k,r=[],u=[],Y(t,e=(!_&&n||t).__k=C(j,null,[e]),o||T,T,t.ownerSVGElement!==void 0,!_&&n?[n]:o?null:t.firstChild?D.call(t.childNodes):null,r,!_&&n?n:o?o.__e:t.firstChild,_,u),Pe(r,e,u)}function Le(e,t,n){var _,o,r,u,l=P({},e.props);for(r in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),t)r=="key"?_=t[r]:r=="ref"?o=t[r]:l[r]=t[r]===void 0&&u!==void 0?u[r]:t[r];return arguments.length>2&&(l.children=arguments.length>3?D.call(arguments,2):n),H(e.type,l,_||e.key,o||e.ref,null)}function Ne(e,t){var n={__c:t="__cC"+me++,__:e,Consumer:function(_,o){return _.children(o)},Provider:function(_){var o,r;return this.getChildContext||(o=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(u){this.props.value!==u.value&&o.some(function(l){l.__e=!0,z(l)})},this.sub=function(u){o.push(u);var l=u.componentWillUnmount;u.componentWillUnmount=function(){o.splice(o.indexOf(u),1),l&&l.call(u)}}),_.children}};return n.Provider.__=n.Consumer.contextType=n}D=ye.slice,a={__e:function(e,t,n,_){for(var o,r,u;t=t.__;)if((o=t.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(e)),u=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,_||{}),u=o.__d),u)return o.__E=o}catch(l){e=l}throw e}},de=0,U.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof e=="function"&&(e=e(P({},n),this.props)),e&&P(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),z(this))},U.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),z(this))},U.prototype.render=j,w=[],ve=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,K=function(e,t){return e.__v.__b-t.__v.__b},F.__r=0,me=0;var $,B,ie,xe=[],V=[],ue=a.__b,le=a.__r,ce=a.diffed,fe=a.__c,se=a.unmount;function Me(){for(var e;e=xe.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(W),e.__H.__h.forEach(Q),e.__H.__h=[]}catch(t){e.__H.__h=[],a.__e(t,e.__v)}}a.__b=function(e){$=null,ue&&ue(e)},a.__r=function(e){le&&le(e);var t=($=e.__c).__H;t&&(B===$?(t.__h=[],$.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=V,n.__N=n.i=void 0})):(t.__h.forEach(W),t.__h.forEach(Q),t.__h=[])),B=$},a.diffed=function(e){ce&&ce(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(xe.push(t)!==1&&ie===a.requestAnimationFrame||((ie=a.requestAnimationFrame)||Oe)(Me)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==V&&(n.__=n.__V),n.i=void 0,n.__V=V})),B=$=null},a.__c=function(e,t){t.some(function(n){try{n.__h.forEach(W),n.__h=n.__h.filter(function(_){return!_.__||Q(_)})}catch(_){t.some(function(o){o.__h&&(o.__h=[])}),t=[],a.__e(_,n.__v)}}),fe&&fe(e,t)},a.unmount=function(e){se&&se(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(_){try{W(_)}catch(o){t=o}}),n.__H=void 0,t&&a.__e(t,n.__v))};var ae=typeof requestAnimationFrame=="function";function Oe(e){var t,n=function(){clearTimeout(_),ae&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);ae&&(t=requestAnimationFrame(n))}function W(e){var t=$,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),$=t}function Q(e){var t=$;e.__c=e.__(),$=t}var Ie={};function I(e,t){for(var n in t)e[n]=t[n];return e}function We(e,t,n){var _,o=/(?:\?([^#]*))?(#.*)?$/,r=e.match(o),u={};if(r&&r[1])for(var l=r[1].split("&"),s=0;s<l.length;s++){var c=l[s].split("=");u[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}e=X(e.replace(o,"")),t=X(t||"");for(var p=Math.max(e.length,t.length),i=0;i<p;i++)if(t[i]&&t[i].charAt(0)===":"){var m=t[i].replace(/(^:|[+*?]+$)/g,""),f=(t[i].match(/[+*?]+$/)||Ie)[0]||"",d=~f.indexOf("+"),g=~f.indexOf("*"),v=e[i]||"";if(!v&&!g&&(f.indexOf("?")<0||d)){_=!1;break}if(u[m]=decodeURIComponent(v),d||g){u[m]=e.slice(i).map(decodeURIComponent).join("/");break}}else if(t[i]!==e[i]){_=!1;break}return(n.default===!0||_!==!1)&&u}function Fe(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function Re(e,t){return e.index=t,e.rank=function(n){return n.props.default?0:X(n.props.path).map(je).join("")}(e),e.props}function X(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function je(e){return e.charAt(0)==":"?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var qe={},S=[],pe=[],b=null,Ce={url:ee()},Be=Ne(Ce);function ee(){var e;return""+((e=b&&b.location?b.location:b&&b.getCurrentLocation?b.getCurrentLocation():typeof location<"u"?location:qe).pathname||"")+(e.search||"")}function Ve(e,t){return t===void 0&&(t=!1),typeof e!="string"&&e.url&&(t=e.replace,e=e.url),function(n){for(var _=S.length;_--;)if(S[_].canRoute(n))return!0;return!1}(e)&&function(n,_){_===void 0&&(_="push"),b&&b[_]?b[_](n):typeof history<"u"&&history[_+"State"]&&history[_+"State"](null,null,n)}(e,t?"replace":"push"),we(e)}function we(e){for(var t=!1,n=0;n<S.length;n++)S[n].routeTo(e)&&(t=!0);return t}function Ke(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return Ve(t)}}function ze(e){return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),!1}function Ge(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button)){var t=e.target;do if(t.localName==="a"&&t.getAttribute("href")){if(t.hasAttribute("data-native")||t.hasAttribute("native"))return;if(Ke(t))return ze(e)}while(t=t.parentNode)}}var he=!1;function Se(e){e.history&&(b=e.history),this.state={url:e.url||ee()}}I(Se.prototype=new U,{shouldComponentUpdate:function(e){return e.static!==!0||e.url!==this.props.url||e.onChange!==this.props.onChange},canRoute:function(e){var t=G(this.props.children);return this.g(t,e)!==void 0},routeTo:function(e){this.setState({url:e});var t=this.canRoute(e);return this.p||this.forceUpdate(),t},componentWillMount:function(){this.p=!0},componentDidMount:function(){var e=this;he||(he=!0,b||addEventListener("popstate",function(){we(ee())}),addEventListener("click",Ge)),S.push(this),b&&(this.u=b.listen(function(t){var n=t.location||t;e.routeTo(""+(n.pathname||"")+(n.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),S.splice(S.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(e,t){e=e.filter(Re).sort(Fe);for(var n=0;n<e.length;n++){var _=e[n],o=We(t,_.props.path,_.props);if(o)return[_,o]}},render:function(e,t){var n,_,o=e.onChange,r=t.url,u=this.c,l=this.g(G(e.children),r);if(l&&(_=Le(l[0],I(I({url:r,matches:n=l[1]},n),{key:void 0,ref:void 0}))),r!==(u&&u.url)){I(Ce,u=this.c={url:r,previous:u&&u.url,current:_,path:_?_.props.path:null,matches:n}),u.router=this,u.active=_?[_]:[];for(var s=pe.length;s--;)pe[s]({});typeof o=="function"&&o(u)}return C(Be.Provider,{value:u},_)}});function Je(){return C("h1",null,"Home Page")}function Qe({matches:e}){return C("h1",null,`Blog Post: ${e.id}`)}function Xe(){return C(Se,null,C(Je,{path:"/"}),C(Qe,{path:"/blog/:id",matches:{id:"default"}}))}De(C(Xe,null),document.getElementById("app"));