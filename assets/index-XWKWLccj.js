(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();var A,d,K,P,j,J,W,C={},Q=[],ne=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,I=Array.isArray;function w(e,_){for(var t in _)e[t]=_[t];return e}function X(e){var _=e.parentNode;_&&_.removeChild(e)}function Y(e,_,t){var l,n,r,i={};for(r in _)r=="key"?l=_[r]:r=="ref"?n=_[r]:i[r]=_[r];if(arguments.length>2&&(i.children=arguments.length>3?A.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)i[r]===void 0&&(i[r]=e.defaultProps[r]);return M(e,i,l,n,null)}function M(e,_,t,l,n){var r={type:e,props:_,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n??++K,__i:-1,__u:0};return n==null&&d.vnode!=null&&d.vnode(r),r}function H(e){return e.children}function N(e,_){this.props=e,this.context=_}function S(e,_){if(_==null)return e.__?S(e.__,e.__i+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?S(e):null}function Z(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return Z(e)}}function q(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!U.__r++||j!==d.debounceRendering)&&((j=d.debounceRendering)||J)(U)}function U(){var e,_,t,l,n,r,i,f,u;for(P.sort(W);e=P.shift();)e.__d&&(_=P.length,l=void 0,r=(n=(t=e).__v).__e,f=[],u=[],(i=t.__P)&&((l=w({},n)).__v=n.__v+1,d.vnode&&d.vnode(l),$(i,l,n,t.__n,i.ownerSVGElement!==void 0,32&n.__u?[r]:null,f,r??S(n),!!(32&n.__u),u),l.__.__k[l.__i]=l,te(f,l,u),l.__e!=r&&Z(l)),P.length>_&&P.sort(W));U.__r=0}function ee(e,_,t,l,n,r,i,f,u,s,p){var o,m,c,h,b,y=l&&l.__k||Q,a=_.length;for(t.__d=u,oe(t,_,y),u=t.__d,o=0;o<a;o++)(c=t.__k[o])!=null&&typeof c!="boolean"&&typeof c!="function"&&(m=c.__i===-1?C:y[c.__i]||C,c.__i=o,$(e,c,m,n,r,i,f,u,s,p),h=c.__e,c.ref&&m.ref!=c.ref&&(m.ref&&B(m.ref,null,c),p.push(c.ref,c.__c||h,c)),b==null&&h!=null&&(b=h),65536&c.__u||m.__k===c.__k?u=_e(c,u,e):typeof c.type=="function"&&c.__d!==void 0?u=c.__d:h&&(u=h.nextSibling),c.__d=void 0,c.__u&=-196609);t.__d=u,t.__e=b}function oe(e,_,t){var l,n,r,i,f,u=_.length,s=t.length,p=s,o=0;for(e.__k=[],l=0;l<u;l++)(n=e.__k[l]=(n=_[l])==null||typeof n=="boolean"||typeof n=="function"?null:typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?M(null,n,null,null,n):I(n)?M(H,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?M(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n)!=null?(n.__=e,n.__b=e.__b+1,f=re(n,t,i=l+o,p),n.__i=f,r=null,f!==-1&&(p--,(r=t[f])&&(r.__u|=131072)),r==null||r.__v===null?(f==-1&&o--,typeof n.type!="function"&&(n.__u|=65536)):f!==i&&(f===i+1?o++:f>i?p>u-i?o+=f-i:o--:o=f<i&&f==i-1?f-i:0,f!==l+o&&(n.__u|=65536))):(r=t[l])&&r.key==null&&r.__e&&(r.__e==e.__d&&(e.__d=S(r)),F(r,r,!1),t[l]=null,p--);if(p)for(l=0;l<s;l++)(r=t[l])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=S(r)),F(r,r))}function _e(e,_,t){var l,n;if(typeof e.type=="function"){for(l=e.__k,n=0;l&&n<l.length;n++)l[n]&&(l[n].__=e,_=_e(l[n],_,t));return _}return e.__e!=_&&(t.insertBefore(e.__e,_||null),_=e.__e),_&&_.nextSibling}function re(e,_,t,l){var n=e.key,r=e.type,i=t-1,f=t+1,u=_[t];if(u===null||u&&n==u.key&&r===u.type)return t;if(l>(u!=null&&!(131072&u.__u)?1:0))for(;i>=0||f<_.length;){if(i>=0){if((u=_[i])&&!(131072&u.__u)&&n==u.key&&r===u.type)return i;i--}if(f<_.length){if((u=_[f])&&!(131072&u.__u)&&n==u.key&&r===u.type)return f;f++}}return-1}function z(e,_,t){_[0]==="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||ne.test(_)?t:t+"px"}function T(e,_,t,l,n){var r;e:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof l=="string"&&(e.style.cssText=l=""),l)for(_ in l)t&&_ in t||z(e.style,_,"");if(t)for(_ in t)l&&t[_]===l[_]||z(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")r=_!==(_=_.replace(/(PointerCapture)$|Capture$/,"$1")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+r]=t,t?l?t.u=l.u:(t.u=Date.now(),e.addEventListener(_,r?V:G,r)):e.removeEventListener(_,r?V:G,r);else{if(n)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!=="width"&&_!=="height"&&_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_!=="rowSpan"&&_!=="colSpan"&&_!=="role"&&_ in e)try{e[_]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&_[4]!=="-"?e.removeAttribute(_):e.setAttribute(_,t))}}function G(e){var _=this.l[e.type+!1];if(e.t){if(e.t<=_.u)return}else e.t=Date.now();return _(d.event?d.event(e):e)}function V(e){return this.l[e.type+!0](d.event?d.event(e):e)}function $(e,_,t,l,n,r,i,f,u,s){var p,o,m,c,h,b,y,a,v,k,D,x,R,L,O,g=_.type;if(_.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),r=[f=_.__e=t.__e]),(p=d.__b)&&p(_);e:if(typeof g=="function")try{if(a=_.props,v=(p=g.contextType)&&l[p.__c],k=p?v?v.props.value:p.__:l,t.__c?y=(o=_.__c=t.__c).__=o.__E:("prototype"in g&&g.prototype.render?_.__c=o=new g(a,k):(_.__c=o=new N(a,k),o.constructor=g,o.render=ie),v&&v.sub(o),o.props=a,o.state||(o.state={}),o.context=k,o.__n=l,m=o.__d=!0,o.__h=[],o._sb=[]),o.__s==null&&(o.__s=o.state),g.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=w({},o.__s)),w(o.__s,g.getDerivedStateFromProps(a,o.__s))),c=o.props,h=o.state,o.__v=_,m)g.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(g.getDerivedStateFromProps==null&&a!==c&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(a,k),!o.__e&&(o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(a,o.__s,k)===!1||_.__v===t.__v)){for(_.__v!==t.__v&&(o.props=a,o.state=o.__s,o.__d=!1),_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(E){E&&(E.__=_)}),D=0;D<o._sb.length;D++)o.__h.push(o._sb[D]);o._sb=[],o.__h.length&&i.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(a,o.__s,k),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(c,h,b)})}if(o.context=k,o.props=a,o.__P=e,o.__e=!1,x=d.__r,R=0,"prototype"in g&&g.prototype.render){for(o.state=o.__s,o.__d=!1,x&&x(_),p=o.render(o.props,o.state,o.context),L=0;L<o._sb.length;L++)o.__h.push(o._sb[L]);o._sb=[]}else do o.__d=!1,x&&x(_),p=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++R<25);o.state=o.__s,o.getChildContext!=null&&(l=w(w({},l),o.getChildContext())),m||o.getSnapshotBeforeUpdate==null||(b=o.getSnapshotBeforeUpdate(c,h)),ee(e,I(O=p!=null&&p.type===H&&p.key==null?p.props.children:p)?O:[O],_,t,l,n,r,i,f,u,s),o.base=_.__e,_.__u&=-161,o.__h.length&&i.push(o),y&&(o.__E=o.__=null)}catch(E){_.__v=null,u||r!=null?(_.__e=f,_.__u|=u?160:32,r[r.indexOf(f)]=null):(_.__e=t.__e,_.__k=t.__k),d.__e(E,_,t)}else r==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=le(t.__e,_,t,l,n,r,i,u,s);(p=d.diffed)&&p(_)}function te(e,_,t){_.__d=void 0;for(var l=0;l<t.length;l++)B(t[l],t[++l],t[++l]);d.__c&&d.__c(_,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){d.__e(r,n.__v)}})}function le(e,_,t,l,n,r,i,f,u){var s,p,o,m,c,h,b,y=t.props,a=_.props,v=_.type;if(v==="svg"&&(n=!0),r!=null){for(s=0;s<r.length;s++)if((c=r[s])&&"setAttribute"in c==!!v&&(v?c.localName===v:c.nodeType===3)){e=c,r[s]=null;break}}if(e==null){if(v===null)return document.createTextNode(a);e=n?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,a.is&&a),r=null,f=!1}if(v===null)y===a||f&&e.data===a||(e.data=a);else{if(r=r&&A.call(e.childNodes),y=t.props||C,!f&&r!=null)for(y={},s=0;s<e.attributes.length;s++)y[(c=e.attributes[s]).name]=c.value;for(s in y)c=y[s],s=="children"||(s=="dangerouslySetInnerHTML"?o=c:s==="key"||s in a||T(e,s,null,c,n));for(s in a)c=a[s],s=="children"?m=c:s=="dangerouslySetInnerHTML"?p=c:s=="value"?h=c:s=="checked"?b=c:s==="key"||f&&typeof c!="function"||y[s]===c||T(e,s,c,y[s],n);if(p)f||o&&(p.__html===o.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),_.__k=[];else if(o&&(e.innerHTML=""),ee(e,I(m)?m:[m],_,t,l,n&&v!=="foreignObject",r,i,r?r[0]:t.__k&&S(t,0),f,u),r!=null)for(s=r.length;s--;)r[s]!=null&&X(r[s]);f||(s="value",h!==void 0&&(h!==e[s]||v==="progress"&&!h||v==="option"&&h!==y[s])&&T(e,s,h,y[s],!1),s="checked",b!==void 0&&b!==e[s]&&T(e,s,b,y[s],!1))}return e}function B(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(l){d.__e(l,t)}}function F(e,_,t){var l,n;if(d.unmount&&d.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||B(l,null,_)),(l=e.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(r){d.__e(r,_)}l.base=l.__P=null,e.__c=void 0}if(l=e.__k)for(n=0;n<l.length;n++)l[n]&&F(l[n],_,t||typeof e.type!="function");t||e.__e==null||X(e.__e),e.__=e.__e=e.__d=void 0}function ie(e,_,t){return this.constructor(e,t)}function se(e,_,t){var l,n,r,i;d.__&&d.__(e,_),n=(l=typeof t=="function")?null:t&&t.__k||_.__k,r=[],i=[],$(_,e=(!l&&t||_).__k=Y(H,null,[e]),n||C,C,_.ownerSVGElement!==void 0,!l&&t?[t]:n?null:_.firstChild?A.call(_.childNodes):null,r,!l&&t?t:n?n.__e:_.firstChild,l,i),te(r,e,i)}A=Q.slice,d={__e:function(e,_,t,l){for(var n,r,i;_=_.__;)if((n=_.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e,l||{}),i=n.__d),i)return n.__E=n}catch(f){e=f}throw e}},K=0,N.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof e=="function"&&(e=e(w({},t),this.props)),e&&w(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),q(this))},N.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),q(this))},N.prototype.render=H,P=[],J=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,W=function(e,_){return e.__v.__b-_.__v.__b},U.__r=0;(()=>{const e=document.getElementById("app");if(!e)return;const _=Y("h1",null,"Hello World");se(_,e)})();
