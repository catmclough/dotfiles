var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{z:()=>fs});const o=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===o.trustedTypes&&(o.trustedTypes={createPolicy:(e,t)=>t});const n={configurable:!1,enumerable:!1,writable:!1};void 0===o.FAST&&Reflect.defineProperty(o,"FAST",Object.assign({value:Object.create(null)},n));const r=o.FAST;if(void 0===r.getById){const e=Object.create(null);Reflect.defineProperty(r,"getById",Object.assign({value(t,o){let n=e[t];return void 0===n&&(n=o?e[t]=o():null),n}},n))}const s=Object.freeze([]);function i(){const e=new WeakMap;return function(t){let o=e.get(t);if(void 0===o){let n=Reflect.getPrototypeOf(t);for(;void 0===o&&null!==n;)o=e.get(n),n=Reflect.getPrototypeOf(n);o=void 0===o?[]:o.slice(0),e.set(t,o)}return o}}const a=o.FAST.getById(1,(()=>{const e=[],t=[];function n(){if(t.length)throw t.shift()}function r(e){try{e.call()}catch(e){t.push(e),setTimeout(n,0)}}function s(){let t=0;for(;t<e.length;)if(r(e[t]),t++,t>1024){for(let o=0,n=e.length-t;o<n;o++)e[o]=e[o+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&o.requestAnimationFrame(s),e.push(t)},process:s})})),c=o.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let l=c;const h=`fast-${Math.random().toString(36).substring(2,8)}`,d=`${h}{`,u=`}${h}`,f=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(l!==c)throw new Error("The HTML policy can only be set once.");l=e},createHTML:e=>l.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(h),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${h}:`,"")),createInterpolationPlaceholder:e=>`${d}${e}${u}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${h}:${e}--\x3e`,queueUpdate:a.enqueue,processUpdates:a.process,nextUpdate:()=>new Promise(a.enqueue),setAttribute(e,t,o){null==o?e.removeAttribute(t):e.setAttribute(t,o)},setBooleanAttribute(e,t,o){o?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class b{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else{-1===t.indexOf(e)&&t.push(e)}}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const o=t.indexOf(e);-1!==o&&t.splice(o,1)}}notify(e){const t=this.spillover,o=this.source;if(void 0===t){const t=this.sub1,n=this.sub2;void 0!==t&&t.handleChange(o,e),void 0!==n&&n.handleChange(o,e)}else for(let n=0,r=t.length;n<r;++n)t[n].handleChange(o,e)}}class p{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const o=this.subscribers[e];void 0!==o&&o.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var o;if(t){let o=this.subscribers[t];void 0===o&&(this.subscribers[t]=o=new b(this.source)),o.subscribe(e)}else this.sourceSubscribers=null!==(o=this.sourceSubscribers)&&void 0!==o?o:new b(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){const o=this.subscribers[t];void 0!==o&&o.unsubscribe(e)}else null===(o=this.sourceSubscribers)||void 0===o||o.unsubscribe(e)}}const g=r.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,o=f.queueUpdate;let n,r=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function s(e){let o=e.$fastController||t.get(e);return void 0===o&&(Array.isArray(e)?o=r(e):t.set(e,o=new p(e))),o}const a=i();class c{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==n&&n.watch(e,this.name),e[this.field]}setValue(e,t){const o=this.field,n=e[o];if(n!==t){e[o]=t;const r=e[this.callback];"function"==typeof r&&r.call(e,n,t),s(e).notify(this.name)}}}class l extends b{constructor(e,t,o=!1){super(e,t),this.binding=e,this.isVolatileBinding=o,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const o=n;n=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const r=this.binding(e,t);return n=o,r}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const o=this.last,r=s(e),i=null===o?this.first:{};if(i.propertySource=e,i.propertyName=t,i.notifier=r,r.subscribe(this,t),null!==o){if(!this.needsRefresh){let t;n=void 0,t=o.propertySource[o.propertyName],n=this,e===t&&(this.needsRefresh=!0)}o.next=i}this.last=i}handleChange(){this.needsQueue&&(this.needsQueue=!1,o(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){r=e},getNotifier:s,track(e,t){void 0!==n&&n.watch(e,t)},trackVolatile(){void 0!==n&&(n.needsRefresh=!0)},notify(e,t){s(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new c(t)),a(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:a,binding(e,t,o=this.isVolatileBinding(e)){return new l(e,t,o)},isVolatileBinding:t=>e.test(t.toString())})}));function m(e,t){g.defineProperty(e,t)}function v(e,t,o){return Object.assign({},o,{get:function(){return g.trackVolatile(),o.get.apply(this)}})}const y=r.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class w{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return y.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){y.set(e)}}g.defineProperty(w.prototype,"index"),g.defineProperty(w.prototype,"length");const k=Object.seal(new w);class x{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function C(e){return e.map((e=>e instanceof x?C(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function $(e){return e.map((e=>e instanceof x?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}x.create=(()=>{if(f.supportsAdoptedStyleSheets){const e=new Map;return t=>new P(t,e)}return e=>new O(e)})();class P extends x{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=$(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=C(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let o=t.get(e);return void 0===o&&(o=new CSSStyleSheet,o.replaceSync(e),t.set(e,o)),o}))}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){const t=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e))),super.removeStylesFrom(e)}}let S=0;class O extends x{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=$(e),this.styleSheets=C(e),this.styleClass="fast-style-class-"+ ++S}addStylesTo(e){const t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<t.length;n++){const r=document.createElement("style");r.innerHTML=t[n],r.className=o,e.append(r)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let o=0,n=t.length;o<n;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const T=Object.freeze({locate:i()}),D={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e};class A{constructor(e,t,o=t.toLowerCase(),n="reflect",r){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=n,this.converter=r,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===n&&void 0===r&&(this.converter=D)}setValue(e,t){const o=e[this.fieldName],n=this.converter;void 0!==n&&(t=n.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return g.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,o=this.guards;o.has(e)||"fromView"===t||f.queueUpdate((()=>{o.add(e);const n=e[this.fieldName];switch(t){case"reflect":const t=this.converter;f.setAttribute(e,this.attribute,void 0!==t?t.toView(n):n);break;case"boolean":f.setBooleanAttribute(e,this.attribute,n)}o.delete(e)}))}static collect(e,...t){const o=[];t.push(T.locate(e));for(let n=0,r=t.length;n<r;++n){const r=t[n];if(void 0!==r)for(let t=0,n=r.length;t<n;++t){const n=r[t];"string"==typeof n?o.push(new A(e,n)):o.push(new A(e,n.property,n.attribute,n.mode,n.converter))}}return o}}function R(e,t){let o;function n(e,t){arguments.length>1&&(o.property=t),T.locate(e.constructor).push(o)}return arguments.length>1?(o={},void n(e,t)):(o=void 0===e?{}:e,n)}const L={mode:"open"},E={},B=r.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class F{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const o=A.collect(e,t.attributes),n=new Array(o.length),r={},s={};for(let e=0,t=o.length;e<t;++e){const t=o[e];n[e]=t.attribute,r[t.name]=t,s[t.attribute]=t}this.attributes=o,this.observedAttributes=n,this.propertyLookup=r,this.attributeLookup=s,this.shadowOptions=void 0===t.shadowOptions?L:null===t.shadowOptions?void 0:Object.assign(Object.assign({},L),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?E:Object.assign(Object.assign({},E),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?x.create(t.styles):t.styles instanceof x?t.styles:x.create([t.styles])}get isDefined(){return!!B.getByType(this.type)}define(e=customElements){const t=this.type;if(B.register(this)){const e=this.attributes,o=t.prototype;for(let t=0,n=e.length;t<n;++t)g.defineProperty(o,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}F.forType=B.getByType;function _(e,t,o,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,o,i):r(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i}Object.create;Object.create;const M=new WeakMap,I={bubbles:!0,composed:!0,cancelable:!0};function V(e){return e.shadowRoot||M.get(e)||null}class N extends p{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const o=t.shadowOptions;if(void 0!==o){const t=e.attachShadow(o);"closed"===o.mode&&M.set(e,t)}const n=g.getAccessors(e);if(n.length>0){const t=this.boundObservables=Object.create(null);for(let o=0,r=n.length;o<r;++o){const r=n[o].name,s=e[r];void 0!==s&&(delete e[r],t[r]=s)}}}get isConnected(){return g.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,g.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=V(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const o=e.behaviors;e.addStylesTo(t),null!==o&&this.addBehaviors(o)}}removeStyles(e){const t=V(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const o=e.behaviors;e.removeStylesFrom(t),null!==o&&this.removeBehaviors(o)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),o=e.length,n=[];for(let r=0;r<o;++r){const o=e[r];t.has(o)?t.set(o,t.get(o)+1):(t.set(o,1),n.push(o))}if(this._isConnected){const e=this.element;for(let t=0;t<n.length;++t)n[t].bind(e,k)}}removeBehaviors(e,t=!1){const o=this.behaviors;if(null===o)return;const n=e.length,r=[];for(let s=0;s<n;++s){const n=e[s];if(o.has(n)){const e=o.get(n)-1;0===e||t?o.delete(n)&&r.push(n):o.set(n,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<r.length;++t)r[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,k);const t=this.behaviors;if(null!==t)for(const[o]of t)o.bind(e,k);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[o]of t)o.unbind(e)}}onAttributeChangedCallback(e,t,o){const n=this.definition.attributeLookup[e];void 0!==n&&n.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},I),o)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const o=Object.keys(t);for(let n=0,r=o.length;n<r;++n){const r=o[n];e[r]=t[r]}this.boundObservables=null}const o=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,o=V(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||f.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const o=F.forType(e.constructor);if(void 0===o)throw new Error("Missing FASTElement definition.");return e.$fastController=new N(e,o)}}function j(e){return class extends e{constructor(){super(),N.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}const z=Object.assign(j(HTMLElement),{from:e=>j(e),define:(e,t)=>new F(e,t).define().type});function q(e){return function(t){new F(t,e).define()}}const U=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(o){Reflect.defineMetadata(e,t,o)}},Reflect.defineMetadata=function(e,t,o){let n=U.get(o);void 0===n&&U.set(o,n=new Map),n.set(e,t)},Reflect.getOwnMetadata=function(e,t){const o=U.get(t);if(void 0!==o)return o.get(e)});class H{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,me(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:o,key:n}=this;return this.container=this.key=void 0,o.registerResolver(n,new se(n,e,t))}}function G(e){const t=e.slice(),o=Object.keys(e),n=o.length;let r;for(let s=0;s<n;++s)r=o[s],Pe(r)||(t[r]=e[r]);return t}const W=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new se(e,1,e),transient:e=>new se(e,2,e)}),Q=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:W.singleton})}),Y=new Map;function K(e){return t=>Reflect.getOwnMetadata(e,t)}let Z=null;const J=Object.freeze({createContainer:e=>new pe(null,Object.assign({},Q.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:J.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(fe,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||J.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new pe(e,Object.assign({},Q.default,t,{parentLocator:J.findParentContainer})):Z||(Z=new pe(null,Object.assign({},Q.default,t,{parentLocator:()=>null}))),getDesignParamtypes:K("design:paramtypes"),getAnnotationParamtypes:K("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=Y.get(e);if(void 0===t){const o=e.inject;if(void 0===o){const o=J.getDesignParamtypes(e),n=J.getAnnotationParamtypes(e);if(void 0===o)if(void 0===n){const o=Object.getPrototypeOf(e);t="function"==typeof o&&o!==Function.prototype?G(J.getDependencies(o)):[]}else t=G(n);else if(void 0===n)t=G(o);else{t=G(o);let e,r=n.length;for(let o=0;o<r;++o)e=n[o],void 0!==e&&(t[o]=e);const s=Object.keys(n);let i;r=s.length;for(let e=0;e<r;++e)i=s[e],Pe(i)||(t[i]=n[i])}}else t=G(o);Y.set(e,t)}return t},defineProperty(e,t,o,n=!1){const r=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[r];if(void 0===e){const s=this instanceof HTMLElement?J.findResponsibleContainer(this):J.getOrCreateDOMContainer();if(e=s.get(o),this[r]=e,n&&this instanceof z){const n=this.$fastController,s=()=>{J.findResponsibleContainer(this).get(o)!==this[r]&&(this[r]=e,n.notify(t))};n.subscribe({handleChange:s},"isConnected")}}return e}})},createInterface(e,t){const o="function"==typeof e?e:t,n="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||ke,r="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),s=function(e,t,o){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${s.friendlyName}'`);if(t)J.defineProperty(e,t,s,r);else{J.getOrCreateAnnotationParamTypes(e)[o]=s}};return s.$isInterface=!0,s.friendlyName=n??"(anonymous)",null!=o&&(s.register=function(e,t){return o(new H(e,null!=t?t:s))}),s.toString=function(){return`InterfaceSymbol<${s.friendlyName}>`},s},inject:(...e)=>function(t,o,n){if("number"==typeof n){const o=J.getOrCreateAnnotationParamTypes(t),r=e[0];void 0!==r&&(o[n]=r)}else if(o)J.defineProperty(t,o,e[0]);else{const o=n?J.getOrCreateAnnotationParamTypes(n.value):J.getOrCreateAnnotationParamTypes(t);let r;for(let t=0;t<e.length;++t)r=e[t],void 0!==r&&(o[t]=r)}},transient:e=>(e.register=function(t){return ve.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=te)=>(e.register=function(t){return ve.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),X=J.createInterface("Container");function ee(e){return function(t){const o=function(e,t,n){J.inject(o)(e,t,n)};return o.$isResolver=!0,o.resolve=function(o,n){return e(t,o,n)},o}}J.inject;const te={scoped:!1};oe=(e,t,o,n)=>o.getAll(e,n);var oe;ee(((e,t,o)=>()=>o.get(e))),ee(((e,t,o)=>o.has(e,!0)?o.get(e):void 0));function ne(e,t,o){J.inject(ne)(e,t,o)}ne.$isResolver=!0,ne.resolve=()=>{};ee(((e,t,o)=>{const n=re(e,t),r=new se(e,0,n);return o.registerResolver(e,r),n})),ee(((e,t,o)=>re(e,t)));function re(e,t){return t.getFactory(e).construct(t)}class se{constructor(e,t,o){this.key=e,this.strategy=t,this.state=o,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const o=e.getFactory(this.state);if(null===o)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return o.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,o,n;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(n=null===(o=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===o?void 0:o.call(t,e))&&void 0!==n?n:null;default:return null}}}function ie(e){return this.get(e)}function ae(e,t){return t(e)}class ce{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let o;return o=void 0===t?new this.Type(...this.dependencies.map(ie,e)):new this.Type(...this.dependencies.map(ie,e),...t),null==this.transformers?o:this.transformers.reduce(ae,o)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const le={$isResolver:!0,resolve:(e,t)=>t};function he(e){return"function"==typeof e.register}function de(e){return function(e){return he(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const ue=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),fe="__DI_LOCATE_PARENT__",be=new Map;class pe{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(X,le),e instanceof Node&&e.addEventListener(fe,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,o,n,r,s;const i=this.context;for(let a=0,c=e.length;a<c;++a)if(t=e[a],xe(t))if(he(t))t.register(this,i);else if(void 0!==t.prototype)ve.singleton(t,t).register(this);else for(o=Object.keys(t),r=0,s=o.length;r<s;++r)n=t[o[r]],xe(n)&&(he(n)?n.register(this,i):this.register(n));return--this.registerDepth,this}registerResolver(e,t){ye(e);const o=this.resolvers,n=o.get(e);return null==n?o.set(e,t):n instanceof se&&4===n.strategy?n.state.push(t):o.set(e,new se(e,4,[n,t])),t}registerTransformer(e,t){const o=this.getResolver(e);if(null==o)return!1;if(o.getFactory){const e=o.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(ye(e),void 0!==e.resolve)return e;let o,n=this;for(;null!=n;){if(o=n.resolvers.get(e),null!=o)return o;if(null==n.parent){const o=de(e)?this:n;return t?this.jitRegister(e,o):null}n=n.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(ye(e),e.$isResolver)return e.resolve(this,this);let t,o=this;for(;null!=o;){if(t=o.resolvers.get(e),null!=t)return t.resolve(o,this);if(null==o.parent){const n=de(e)?this:o;return t=this.jitRegister(e,n),t.resolve(o,this)}o=o.parent}throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){ye(e);const o=this;let n,r=o;if(t){let t=s;for(;null!=r;)n=r.resolvers.get(e),null!=n&&(t=t.concat(we(n,r,o))),r=r.parent;return t}for(;null!=r;){if(n=r.resolvers.get(e),null!=n)return we(n,r,o);if(r=r.parent,null==r)return s}return s}getFactory(e){let t=be.get(e);if(void 0===t){if(Ce(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);be.set(e,t=new ce(e,J.getDependencies(e)))}return t}registerFactory(e,t){be.set(e,t)}createChild(e){return new pe(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(ue.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(he(e)){const o=e.register(t);if(!(o instanceof Object)||null==o.resolve){const o=t.resolvers.get(e);if(null!=o)return o;throw new Error("A valid resolver was not returned from the static register method")}return o}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const o=this.config.defaultResolver(e,t);return t.resolvers.set(e,o),o}}}const ge=new WeakMap;function me(e){return function(t,o,n){if(ge.has(n))return ge.get(n);const r=e(t,o,n);return ge.set(n,r),r}}const ve=Object.freeze({instance:(e,t)=>new se(e,0,t),singleton:(e,t)=>new se(e,1,t),transient:(e,t)=>new se(e,2,t),callback:(e,t)=>new se(e,3,t),cachedCallback:(e,t)=>new se(e,3,me(t)),aliasTo:(e,t)=>new se(t,5,e)});function ye(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function we(e,t,o){if(e instanceof se&&4===e.strategy){const n=e.state;let r=n.length;const s=new Array(r);for(;r--;)s[r]=n[r].resolve(t,o);return s}return[e.resolve(t,o)]}const ke="(anonymous)";function xe(e){return"object"==typeof e&&null!==e||"function"==typeof e}const Ce=function(){const e=new WeakMap;let t=!1,o="",n=0;return function(r){return t=e.get(r),void 0===t&&(o=r.toString(),n=o.length,t=n>=29&&n<=100&&125===o.charCodeAt(n-1)&&o.charCodeAt(n-2)<=32&&93===o.charCodeAt(n-3)&&101===o.charCodeAt(n-4)&&100===o.charCodeAt(n-5)&&111===o.charCodeAt(n-6)&&99===o.charCodeAt(n-7)&&32===o.charCodeAt(n-8)&&101===o.charCodeAt(n-9)&&118===o.charCodeAt(n-10)&&105===o.charCodeAt(n-11)&&116===o.charCodeAt(n-12)&&97===o.charCodeAt(n-13)&&110===o.charCodeAt(n-14)&&88===o.charCodeAt(n-15),e.set(r,t)),t}}(),$e={};function Pe(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=$e[e];if(void 0!==t)return t;const o=e.length;if(0===o)return $e[e]=!1;let n=0;for(let t=0;t<o;++t)if(n=e.charCodeAt(t),0===t&&48===n&&o>1||n<48||n>57)return $e[e]=!1;return $e[e]=!0}default:return!1}}function Se(e){return`${e.toLowerCase()}:presentation`}const Oe=new Map,Te=Object.freeze({define(e,t,o){const n=Se(e);void 0===Oe.get(n)?Oe.set(n,t):Oe.set(n,!1),o.register(ve.instance(n,t))},forTag(e,t){const o=Se(e),n=Oe.get(o);if(!1===n){return J.findResponsibleContainer(t).get(o)}return n||null}});class De{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?x.create(t):t instanceof x?t:x.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class Ae extends z{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Te.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new Le(this===Ae?class extends Ae{}:this,e,t)}}function Re(e,t,o){return"function"==typeof e?e(t,o):e}_([m],Ae.prototype,"template",void 0),_([m],Ae.prototype,"styles",void 0);class Le{constructor(e,t,o){this.type=e,this.elementDefinition=t,this.overrideDefinition=o,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const o=this.definition,n=this.overrideDefinition,r=`${o.prefix||t.elementPrefix}-${o.baseName}`;t.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new De(Re(o.template,e,o),Re(o.styles,e,o));e.definePresentation(t);let r=Re(o.shadowOptions,e,o);e.shadowRootMode&&(r?n.shadowOptions||(r.mode=e.shadowRootMode):null!==r&&(r={mode:e.shadowRootMode})),e.defineElement({elementOptions:Re(o.elementOptions,e,o),shadowOptions:r,attributes:Re(o.attributes,e,o)})}})}}class Ee{createCSS(){return""}createBehavior(){}}function Be(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const Fe=document.createElement("div");class _e{setProperty(e,t){f.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){f.queueUpdate((()=>this.target.removeProperty(e)))}}class Me extends _e{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class Ie extends _e{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class Ve{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),g.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),f.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),f.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:o}=this.style;if(o){const e=o.insertRule(":host{}",o.cssRules.length);this.target=o.cssRules[e].style}else this.target=null}}_([m],Ve.prototype,"target",void 0);class Ne{constructor(e){this.target=e.style}setProperty(e,t){f.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){f.queueUpdate((()=>this.target.removeProperty(e)))}}class je{setProperty(e,t){je.properties[e]=t;for(const o of je.roots.values())Ue.getOrCreate(je.normalizeRoot(o)).setProperty(e,t)}removeProperty(e){delete je.properties[e];for(const t of je.roots.values())Ue.getOrCreate(je.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=je;if(!t.has(e)){t.add(e);const o=Ue.getOrCreate(this.normalizeRoot(e));for(const e in je.properties)o.setProperty(e,je.properties[e])}}static unregisterRoot(e){const{roots:t}=je;if(t.has(e)){t.delete(e);const o=Ue.getOrCreate(je.normalizeRoot(e));for(const e in je.properties)o.removeProperty(e)}}static normalizeRoot(e){return e===Fe?document:e}}je.roots=new Set,je.properties={};const ze=new WeakMap,qe=f.supportsAdoptedStyleSheets?class extends _e{constructor(e){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(x.create([t]))}}:Ve,Ue=Object.freeze({getOrCreate(e){if(ze.has(e))return ze.get(e);let t;return e===Fe?t=new je:e instanceof Document?t=f.supportsAdoptedStyleSheets?new Me:new Ie:t=e instanceof z?new qe(e):new Ne(e),ze.set(e,t),t}});class He extends Ee{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=He.uniqueId(),He.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new He({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return He.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=Ke.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof He&&(t=this.alias(t)),Ke.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),Ke.existsFor(e)&&Ke.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Fe,e),this}subscribe(e,t){const o=this.getOrCreateSubscriberSet(t);t&&!Ke.existsFor(t)&&Ke.getOrCreate(t),o.has(e)||o.add(e)}unsubscribe(e,t){const o=this.subscribers.get(t||this);o&&o.has(e)&&o.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}He.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),He.tokensById=new Map;class Ge{constructor(e,t,o){this.source=e,this.token=t,this.node=o,this.dependencies=new Set,this.observer=g.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,k))}}class We{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),g.getNotifier(this).notify(e.id))}get(e){return g.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const Qe=new WeakMap,Ye=new WeakMap;class Ke{constructor(e){this.target=e,this.store=new We,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const o=He.getTokenById(t);if(o&&(o.notify(this.target),He.isCSSDesignToken(o))){const t=this.parent,n=this.isReflecting(o);if(t){const r=t.get(o),s=e.get(o);r===s||n?r===s&&n&&this.stopReflectToCSS(o):this.reflectToCSS(o)}else n||this.reflectToCSS(o)}}},Qe.set(e,this),g.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof z?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Qe.get(e)||new Ke(e)}static existsFor(e){return Qe.has(e)}static findParent(e){if(Fe!==e.target){let t=Be(e.target);for(;null!==t;){if(Qe.has(t))return Qe.get(t);t=Be(t)}return Ke.getOrCreate(Fe)}return null}static findClosestAssignedNode(e,t){let o=t;do{if(o.has(e))return o;o=o.parent?o.parent:o.target!==Fe?Ke.getOrCreate(Fe):null}while(null!==o);return null}get parent(){return Ye.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const o=this.getRaw(e);return void 0!==o?(this.hydrate(e,o),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=Ke.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){He.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),He.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=Ke.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){if(this.parent){Ye.get(this).removeChild(this)}}appendChild(e){e.parent&&Ye.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));Ye.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),g.getNotifier(this.store).subscribe(e);for(const[t,o]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):o)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),g.getNotifier(this.store).unsubscribe(e),e.parent===this&&Ye.delete(e)}contains(e){return function(e,t){let o=t;for(;null!==o;){if(o===e)return!0;o=Be(o)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),Ke.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),Ke.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const o=He.getTokenById(t);o&&this.hydrate(o,this.getRaw(o))}hydrate(e,t){if(!this.has(e)){const o=this.bindingObservers.get(e);He.isDerivedDesignTokenValue(t)?o?o.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(o&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const o=new Ge(t,e,this);return this.bindingObservers.set(e,o),o}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}Ke.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:o}=e;this.add(t,o)}add(e,t){Ue.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(Ke.getOrCreate(t).get(e)))}remove(e,t){Ue.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},_([m],Ke.prototype,"children",void 0);const Ze=Object.freeze({create:function(e){return He.from(e)},notifyConnection:e=>!(!e.isConnected||!Ke.existsFor(e))&&(Ke.getOrCreate(e).bind(),!0),notifyDisconnection:e=>!(e.isConnected||!Ke.existsFor(e))&&(Ke.getOrCreate(e).unbind(),!0),registerRoot(e=Fe){je.registerRoot(e)},unregisterRoot(e=Fe){je.unregisterRoot(e)}}),Je=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Xe=new Map,et=new Map;let tt=null;const ot=J.createInterface((e=>e.cachedCallback((e=>(null===tt&&(tt=new rt(null,e)),tt))))),nt=Object.freeze({tagFor:e=>et.get(e),responsibleFor(e){const t=e.$$designSystem$$;if(t)return t;return J.findResponsibleContainer(e).get(ot)},getOrCreate(e){if(!e)return null===tt&&(tt=J.getOrCreateDOMContainer().get(ot)),tt;const t=e.$$designSystem$$;if(t)return t;const o=J.getOrCreateDOMContainer(e);if(o.has(ot,!1))return o.get(ot);{const t=new rt(e,o);return o.register(ve.instance(ot,t)),t}}});class rt{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Je.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,o=[],n=this.disambiguate,r=this.shadowRootMode,s={elementPrefix:this.prefix,tryDefineElement(e,s,i){const a=function(e,t,o){return"string"==typeof e?{name:e,type:t,callback:o}:e}(e,s,i),{name:c,callback:l,baseClass:h}=a;let{type:d}=a,u=c,f=Xe.get(u),b=!0;for(;f;){const e=n(u,d,f);switch(e){case Je.ignoreDuplicate:return;case Je.definitionCallbackOnly:b=!1,f=void 0;break;default:u=e,f=Xe.get(u)}}b&&((et.has(d)||d===Ae)&&(d=class extends d{}),Xe.set(u,d),et.set(d,u),h&&et.set(h,u)),o.push(new st(t,u,d,r,l,b))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&Ze.registerRoot(this.designTokenRoot)),t.registerWithContext(s,...e);for(const e of o)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class st{constructor(e,t,o,n,r,s){this.container=e,this.name=t,this.type=o,this.shadowRootMode=n,this.callback=r,this.willDefine=s,this.definition=null}definePresentation(e){Te.define(this.name,e,this.container)}defineElement(e){this.definition=new F(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return nt.tagFor(e)}}class it{}_([R({attribute:"aria-atomic"})],it.prototype,"ariaAtomic",void 0),_([R({attribute:"aria-busy"})],it.prototype,"ariaBusy",void 0),_([R({attribute:"aria-controls"})],it.prototype,"ariaControls",void 0),_([R({attribute:"aria-current"})],it.prototype,"ariaCurrent",void 0),_([R({attribute:"aria-describedby"})],it.prototype,"ariaDescribedby",void 0),_([R({attribute:"aria-details"})],it.prototype,"ariaDetails",void 0),_([R({attribute:"aria-disabled"})],it.prototype,"ariaDisabled",void 0),_([R({attribute:"aria-errormessage"})],it.prototype,"ariaErrormessage",void 0),_([R({attribute:"aria-flowto"})],it.prototype,"ariaFlowto",void 0),_([R({attribute:"aria-haspopup"})],it.prototype,"ariaHaspopup",void 0),_([R({attribute:"aria-hidden"})],it.prototype,"ariaHidden",void 0),_([R({attribute:"aria-invalid"})],it.prototype,"ariaInvalid",void 0),_([R({attribute:"aria-keyshortcuts"})],it.prototype,"ariaKeyshortcuts",void 0),_([R({attribute:"aria-label"})],it.prototype,"ariaLabel",void 0),_([R({attribute:"aria-labelledby"})],it.prototype,"ariaLabelledby",void 0),_([R({attribute:"aria-live"})],it.prototype,"ariaLive",void 0),_([R({attribute:"aria-owns"})],it.prototype,"ariaOwns",void 0),_([R({attribute:"aria-relevant"})],it.prototype,"ariaRelevant",void 0),_([R({attribute:"aria-roledescription"})],it.prototype,"ariaRoledescription",void 0);class at{constructor(){this.targetIndex=0}}class ct extends at{constructor(){super(...arguments),this.createPlaceholder=f.createInterpolationPlaceholder}}class lt extends at{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return f.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function ht(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=g.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function dt(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function ut(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function ft(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function bt(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function pt(e){f.setAttribute(this.target,this.targetName,e)}function gt(e){f.setBooleanAttribute(this.target,this.targetName,e)}function mt(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function vt(e){this.target[this.targetName]=e}function yt(e){const t=this.classVersions||Object.create(null),o=this.target;let n=this.version||0;if(null!=e&&e.length){const r=e.split(/\s+/);for(let e=0,s=r.length;e<s;++e){const s=r[e];""!==s&&(t[s]=n,o.classList.add(s))}}if(this.classVersions=t,this.version=n+1,0!==n){n-=1;for(const e in t)t[e]===n&&o.classList.remove(e)}}class wt extends ct{constructor(e){super(),this.binding=e,this.bind=ht,this.unbind=ut,this.updateTarget=pt,this.isBindingVolatile=g.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=vt,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,o)=>f.createHTML(e(t,o))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=gt;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=dt,this.unbind=bt;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=yt)}}targetAtContent(){this.updateTarget=mt,this.unbind=ft}createBehavior(e){return new kt(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class kt{constructor(e,t,o,n,r,s,i){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=n,this.unbind=r,this.updateTarget=s,this.targetName=i}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){w.setEvent(e);const t=this.binding(this.source,this.context);w.setEvent(null),!0!==t&&e.preventDefault()}}let xt=null;class Ct{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){xt=this}static borrow(e){const t=xt||new Ct;return t.directives=e,t.reset(),xt=null,t}}function $t(e){if(1===e.length)return e[0];let t;const o=e.length,n=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),r=new wt(((e,t)=>{let r="";for(let s=0;s<o;++s)r+=n[s](e,t);return r}));return r.targetName=t,r}const Pt=u.length;function St(e,t){const o=t.split(d);if(1===o.length)return null;const n=[];for(let t=0,r=o.length;t<r;++t){const r=o[t],s=r.indexOf(u);let i;if(-1===s)i=r;else{const t=parseInt(r.substring(0,s));n.push(e.directives[t]),i=r.substring(s+Pt)}""!==i&&n.push(i)}return n}function Ot(e,t,o=!1){const n=t.attributes;for(let r=0,s=n.length;r<s;++r){const i=n[r],a=i.value,c=St(e,a);let l=null;null===c?o&&(l=new wt((()=>a)),l.targetName=i.name):l=$t(c),null!==l&&(t.removeAttributeNode(i),r--,s--,e.addFactory(l))}}function Tt(e,t,o){const n=St(e,t.textContent);if(null!==n){let r=t;for(let s=0,i=n.length;s<i;++s){const i=n[s],a=0===s?t:r.parentNode.insertBefore(document.createTextNode(""),r.nextSibling);"string"==typeof i?a.textContent=i:(a.textContent=" ",e.captureContentBinding(i)),r=a,e.targetIndex++,a!==t&&o.nextNode()}e.targetIndex--}}const Dt=document.createRange();class At{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const o=e.parentNode;let n,r=this.firstChild;for(;r!==t;)n=r.nextSibling,o.insertBefore(r,e),r=n;o.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.appendChild(n),n=o;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.removeChild(n),n=o;e.removeChild(t);const r=this.behaviors,s=this.source;for(let e=0,t=r.length;e<t;++e)r[e].unbind(s)}bind(e,t){const o=this.behaviors;if(this.source!==e)if(null!==this.source){const n=this.source;this.source=e,this.context=t;for(let r=0,s=o.length;r<s;++r){const s=o[r];s.unbind(n),s.bind(e,t)}}else{this.source=e,this.context=t;for(let n=0,r=o.length;n<r;++n)o[n].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let o=0,n=e.length;o<n;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Dt.setStartBefore(e[0].firstChild),Dt.setEndAfter(e[e.length-1].lastChild),Dt.deleteContents();for(let t=0,o=e.length;t<o;++t){const o=e[t],n=o.behaviors,r=o.source;for(let e=0,t=n.length;e<t;++e)n[e].unbind(r)}}}}class Rt{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=f.createHTML(t);const o=e.content.firstElementChild;null!==o&&"TEMPLATE"===o.tagName&&(e=o)}else e=t;const o=function(e,t){const o=e.content;document.adoptNode(o);const n=Ct.borrow(t);Ot(n,e,!0);const r=n.behaviorFactories;n.reset();const s=f.createTemplateWalker(o);let i;for(;i=s.nextNode();)switch(n.targetIndex++,i.nodeType){case 1:Ot(n,i);break;case 3:Tt(n,i,s);break;case 8:f.isMarker(i)&&n.addFactory(t[f.extractDirectiveIndexFromMarker(i)])}let a=0;(f.isMarker(o.firstChild)||1===o.childNodes.length&&t.length)&&(o.insertBefore(document.createComment(""),o.firstChild),a=-1);const c=n.behaviorFactories;return n.release(),{fragment:o,viewBehaviorFactories:c,hostBehaviorFactories:r,targetOffset:a}}(e,this.directives);this.fragment=o.fragment,this.viewBehaviorFactories=o.viewBehaviorFactories,this.hostBehaviorFactories=o.hostBehaviorFactories,this.targetOffset=o.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,n=new Array(this.behaviorCount),r=f.createTemplateWalker(t);let s=0,i=this.targetOffset,a=r.nextNode();for(let e=o.length;s<e;++s){const e=o[s],t=e.targetIndex;for(;null!==a;){if(i===t){n[s]=e.createBehavior(a);break}a=r.nextNode(),i++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let o=0,r=t.length;o<r;++o,++s)n[s]=t[o].createBehavior(e)}return new At(t,n)}render(e,t,o){"string"==typeof t&&(t=document.getElementById(t)),void 0===o&&(o=t);const n=this.create(o);return n.bind(e,k),n.appendTo(t),n}}const Lt=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Et(e,...t){const o=[];let n="";for(let r=0,s=e.length-1;r<s;++r){const s=e[r];let i=t[r];if(n+=s,i instanceof Rt){const e=i;i=()=>e}if("function"==typeof i&&(i=new wt(i)),i instanceof ct){const e=Lt.exec(s);null!==e&&(i.targetName=e[2])}i instanceof at?(n+=i.createPlaceholder(o.length),o.push(i)):n+=i}return n+=e[e.length-1],new Rt(n,o)}class Bt{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Ft(e){return new lt("fast-ref",Bt,e)}Et`
    <span part="end" ${Ft("endContainer")}>
        <slot
            name="end"
            ${Ft("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,Et`
    <span part="start" ${Ft("startContainer")}>
        <slot
            name="start"
            ${Ft("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;function _t(e,...t){const o=T.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((o=>{"constructor"!==o&&Object.defineProperty(e.prototype,o,Object.getOwnPropertyDescriptor(t.prototype,o))}));T.locate(t).forEach((e=>o.push(e)))}))}var Mt;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(Mt||(Mt={}));const It="Enter",Vt="form-associated-proxy",Nt="ElementInternals",jt=Nt in window&&"setFormValue"in window[Nt].prototype,zt=new WeakMap;function qt(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return jt}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),o=e?t.concat(Array.from(e)):t;return Object.freeze(o)}return s}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),f.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),f.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!jt)return null;let e=zt.get(this);return e||(e=this.attachInternals(),zt.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,o){this.elementInternals?this.elementInternals.setValidity(e,t,o):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Vt),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Vt)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===It)if(this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return R({mode:"boolean"})(t.prototype,"disabled"),R({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),R({attribute:"current-value"})(t.prototype,"currentValue"),R(t.prototype,"name"),R({mode:"boolean"})(t.prototype,"required"),m(t.prototype,"value"),t}class Ut extends Ae{}class Ht extends(qt(Ut)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Gt extends Ht{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}_([R({mode:"boolean"})],Gt.prototype,"autofocus",void 0),_([R({attribute:"form"})],Gt.prototype,"formId",void 0),_([R],Gt.prototype,"formaction",void 0),_([R],Gt.prototype,"formenctype",void 0),_([R],Gt.prototype,"formmethod",void 0),_([R({mode:"boolean"})],Gt.prototype,"formnovalidate",void 0),_([R],Gt.prototype,"formtarget",void 0),_([R],Gt.prototype,"type",void 0),_([m],Gt.prototype,"defaultSlottedContent",void 0);class Wt{}_([R({attribute:"aria-expanded"})],Wt.prototype,"ariaExpanded",void 0),_([R({attribute:"aria-pressed"})],Wt.prototype,"ariaPressed",void 0),_t(Wt,it),_t(Gt,class{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}},Wt);class Qt{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=g.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(s),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class Yt extends Qt{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Kt(e){return"string"==typeof e&&(e={property:e}),new lt("fast-slotted",Yt,e)}function Zt(e,t){const o=[];let n="";const r=[];for(let s=0,i=e.length-1;s<i;++s){n+=e[s];let i=t[s];if(i instanceof Ee){const e=i.createBehavior();i=i.createCSS(),e&&r.push(e)}i instanceof x||i instanceof CSSStyleSheet?(""!==n.trim()&&(o.push(n),n=""),o.push(i)):n+=i}return n+=e[e.length-1],""!==n.trim()&&o.push(n),{styles:o,behaviors:r}}function Jt(e,...t){const{styles:o,behaviors:n}=Zt(e,t),r=x.create(o);return n.length&&r.withBehaviors(...n),r}const Xt=":host([hidden]){display:none}";let eo;const to=function(){if("boolean"==typeof eo)return eo;if("undefined"==typeof window||!window.document||!window.document.createElement)return eo=!1,eo;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),eo=!0}catch(e){eo=!1}finally{document.head.removeChild(e)}return eo}()?"focus-visible":"focus";function oo(e){const t=getComputedStyle(document.body),o=document.querySelector("body");if(o){const n=o.getAttribute("data-vscode-theme-kind");for(const[r,s]of e){let e=t.getPropertyValue(r).toString();if("vscode-high-contrast"===n)0===e.length&&s.name.includes("background")&&(e="transparent"),"button-icon-hover-background"===s.name&&(e="transparent");else if("vscode-high-contrast-light"===n){if(0===e.length&&s.name.includes("background"))switch(s.name){case"button-primary-hover-background":e="#0F4A85";break;case"button-secondary-hover-background":case"button-icon-hover-background":e="transparent"}}else"contrast-active-border"===s.name&&(e="transparent");s.setValueFor(o,e)}}}const no=new Map;let ro=!1;function so(e,t){const o=Ze.create(e);if(t){if(t.includes("--fake-vscode-token")){t=`${t}-${"id"+Math.random().toString(16).slice(2)}`}no.set(t,o)}return ro||(!function(e){window.addEventListener("load",(()=>{new MutationObserver((()=>{oo(e)})).observe(document.body,{attributes:!0,attributeFilter:["class"]}),oo(e)}))}(no),ro=!0),o}so("background","--vscode-editor-background").withDefault("#1e1e1e");const io=so("border-width").withDefault(1),ao=so("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518"),co=(so("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df"),so("corner-radius").withDefault(0),so("design-unit").withDefault(4)),lo=so("disabled-opacity").withDefault(.4),ho=so("focus-border","--vscode-focusBorder").withDefault("#007fd4"),uo=so("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),fo=(so("font-weight","--vscode-font-weight").withDefault("400"),so("foreground","--vscode-foreground").withDefault("#cccccc")),bo=(so("input-height").withDefault("26"),so("input-min-width").withDefault("100px"),so("type-ramp-base-font-size","--vscode-font-size").withDefault("13px")),po=so("type-ramp-base-line-height").withDefault("normal"),go=(so("type-ramp-minus1-font-size").withDefault("11px"),so("type-ramp-minus1-line-height").withDefault("16px"),so("type-ramp-minus2-font-size").withDefault("9px"),so("type-ramp-minus2-line-height").withDefault("16px"),so("type-ramp-plus1-font-size").withDefault("16px"),so("type-ramp-plus1-line-height").withDefault("24px"),so("scrollbarWidth").withDefault("10px"),so("scrollbarHeight").withDefault("10px"),so("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),so("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),so("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),so("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),so("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),so("button-border","--vscode-button-border").withDefault("transparent")),mo=so("button-icon-background").withDefault("transparent"),vo=so("button-icon-corner-radius").withDefault("5px"),yo=so("button-icon-outline-offset").withDefault(0),wo=so("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),ko=so("button-icon-padding").withDefault("3px"),xo=so("button-primary-background","--vscode-button-background").withDefault("#0e639c"),Co=so("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),$o=so("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),Po=so("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),So=so("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),Oo=so("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),To=so("button-padding-horizontal").withDefault("11px"),Do=so("button-padding-vertical").withDefault("4px"),Ao=(so("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),so("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),so("checkbox-corner-radius").withDefault(3),so("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0"),so("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),so("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),so("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),so("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),so("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),so("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c"),so("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0"),so("dropdown-list-max-height").withDefault("200px"),so("input-background","--vscode-input-background").withDefault("#3c3c3c"),so("input-foreground","--vscode-input-foreground").withDefault("#cccccc"),so("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc"),so("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),so("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),so("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),so("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),so("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),so("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799"),so("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),so("panel-view-border","--vscode-panel-border").withDefault("#80808059"),so("tag-corner-radius").withDefault("2px"),Jt`
	${Ro="inline-flex",`${Xt}:host{display:${Ro}}`} :host {
		outline: none;
		font-family: ${uo};
		font-size: ${bo};
		line-height: ${po};
		color: ${Co};
		background: ${xo};
		border-radius: 2px;
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${Do} ${To};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${io} * 1px) solid ${go};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${$o};
	}
	:host(:active) {
		background: ${xo};
	}
	.control:${to} {
		outline: calc(${io} * 1px) solid ${ho};
		outline-offset: calc(${io} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${lo};
		background: ${xo};
		cursor: ${"not-allowed"};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${co} * 4px);
		height: calc(${co} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`);var Ro;const Lo=Jt`
	:host([appearance='primary']) {
		background: ${xo};
		color: ${Co};
	}
	:host([appearance='primary']:hover) {
		background: ${$o};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${xo};
	}
	:host([appearance='primary']) .control:${to} {
		outline: calc(${io} * 1px) solid ${ho};
		outline-offset: calc(${io} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${xo};
	}
`,Eo=Jt`
	:host([appearance='secondary']) {
		background: ${Po};
		color: ${So};
	}
	:host([appearance='secondary']:hover) {
		background: ${Oo};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${Po};
	}
	:host([appearance='secondary']) .control:${to} {
		outline: calc(${io} * 1px) solid ${ho};
		outline-offset: calc(${io} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${Po};
	}
`,Bo=Jt`
	:host([appearance='icon']) {
		background: ${mo};
		border-radius: ${vo};
		color: ${fo};
	}
	:host([appearance='icon']:hover) {
		background: ${wo};
		outline: 1px dotted ${ao};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${ko};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${wo};
	}
	:host([appearance='icon']) .control:${to} {
		outline: calc(${io} * 1px) solid ${ho};
		outline-offset: ${yo};
	}
	:host([appearance='icon'][disabled]) {
		background: ${mo};
	}
`;class Fo extends Gt{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,o){if("appearance"===e&&"icon"===o){this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")}"aria-label"===e&&(this.ariaLabel=o),"disabled"===e&&(this.disabled=null!==o)}}_([R],Fo.prototype,"appearance",void 0);const _o=Fo.compose({baseName:"button",template:(e,t)=>Et`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Ft("control")}
    >
        ${((e,t)=>Et`
    <span
        part="start"
        ${Ft("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Ft("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`)(0,t)}
        <span class="content" part="content">
            <slot ${Kt("defaultSlottedContent")}></slot>
        </span>
        ${((e,t)=>Et`
    <span
        part="end"
        ${Ft("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Ft("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`)(0,t)}
    </button>
`,styles:(e,t)=>Jt`
	${Ao}
	${Lo}
	${Eo}
	${Bo}
`,shadowOptions:{delegatesFocus:!0}});var Mo=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.Paid=5]="Paid",e))(Mo||{});function Io(e,t){return Vo(e.plan.effective.expiresOn,t)}function Vo(e,t){return null!=e?function(e,t,o){const n=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime());switch(o){case"days":return Math.floor(n/864e5);case"hours":return Math.floor(n/36e5);case"minutes":return Math.floor(n/6e4);case"seconds":return Math.floor(n/1e3);default:return n}}(Date.now(),new Date(e),t):void 0}class No{constructor(e,t=!1){this.method=e,this.overwriteable=t}}class jo extends No{}class zo extends No{}function qo(e,t,o){e.method===t.method&&o(t.params,e)}const Uo=new jo("webview/ready"),Ho=new jo("webview/focus"),Go=new jo("command/execute");new jo("configuration/preview"),new jo("configuration/update"),new zo("configuration/didChange"),new zo("configuration/didPreview"),new zo("webview/didOpenAnchor");const Wo=new jo("home/step/complete"),Qo=new jo("home/section/dismiss"),Yo=new jo("home/status/dismiss"),Ko=new jo("home/banner/dismiss"),Zo=new zo("subscription/didChange"),Jo=new zo("extensionEnabled/didChange"),Xo=new zo("configuration/didChange"),en=new zo("layout/didChange");var tn=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(tn||{}),on=(e=>(e.Off="off",e.Error="error",e.Warn="warn",e.Info="info",e.Debug="debug",e))(on||{});const nn="";const rn=new class{constructor(){this._isDebugging=!1,this.level=0,this._logLevel=on.Off}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=sn(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=sn(this._logLevel),e===on.Off?(this.output?.dispose?.(),this.output=void 0):this.output=this.output??this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??nn}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??nn}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let n;if(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??nn}`,null==n){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??nn}${this.toLoggableParams(!1,o)}\n${String(e)}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??nn}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??nn}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??nn}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??nn}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return nn;const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:nn}};function sn(e){switch(e){case on.Off:return 0;case on.Error:return 1;case on.Warn:return 2;case on.Info:return 3;case on.Debug:return 4;default:return 0}}const an=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};const cn="object"==typeof global&&global&&global.Object===Object&&global;var ln="object"==typeof self&&self&&self.Object===Object&&self;const hn=cn||ln||Function("return this")();const dn=function(){return hn.Date.now()};var un=/\s/;const fn=function(e){for(var t=e.length;t--&&un.test(e.charAt(t)););return t};var bn=/^\s+/;const pn=function(e){return e?e.slice(0,fn(e)+1).replace(bn,""):e};const gn=hn.Symbol;var mn=Object.prototype,vn=mn.hasOwnProperty,yn=mn.toString,wn=gn?gn.toStringTag:void 0;const kn=function(e){var t=vn.call(e,wn),o=e[wn];try{e[wn]=void 0;var n=!0}catch(e){}var r=yn.call(e);return n&&(t?e[wn]=o:delete e[wn]),r};var xn=Object.prototype.toString;const Cn=function(e){return xn.call(e)};var $n="[object Null]",Pn="[object Undefined]",Sn=gn?gn.toStringTag:void 0;const On=function(e){return null==e?void 0===e?Pn:$n:Sn&&Sn in Object(e)?kn(e):Cn(e)};const Tn=function(e){return null!=e&&"object"==typeof e};var Dn="[object Symbol]";const An=function(e){return"symbol"==typeof e||Tn(e)&&On(e)==Dn};var Rn=NaN,Ln=/^[-+]0x[0-9a-f]+$/i,En=/^0b[01]+$/i,Bn=/^0o[0-7]+$/i,Fn=parseInt;const _n=function(e){if("number"==typeof e)return e;if(An(e))return Rn;if(an(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=an(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=pn(e);var o=En.test(e);return o||Bn.test(e)?Fn(e.slice(2),o?2:8):Ln.test(e)?Rn:+e};var Mn="Expected a function",In=Math.max,Vn=Math.min;const Nn=function(e,t,o){var n,r,s,i,a,c,l=0,h=!1,d=!1,u=!0;if("function"!=typeof e)throw new TypeError(Mn);function f(t){var o=n,s=r;return n=r=void 0,l=t,i=e.apply(s,o)}function b(e){var o=e-c;return void 0===c||o>=t||o<0||d&&e-l>=s}function p(){var e=dn();if(b(e))return g(e);a=setTimeout(p,function(e){var o=t-(e-c);return d?Vn(o,s-(e-l)):o}(e))}function g(e){return a=void 0,u&&n?f(e):(n=r=void 0,i)}function m(){var e=dn(),o=b(e);if(n=arguments,r=this,c=e,o){if(void 0===a)return function(e){return l=e,a=setTimeout(p,t),h?f(e):i}(c);if(d)return clearTimeout(a),a=setTimeout(p,t),f(c)}return void 0===a&&(a=setTimeout(p,t)),i}return t=_n(t)||0,an(o)&&(h=!!o.leading,s=(d="maxWait"in o)?In(_n(o.maxWait)||0,t):s,u="trailing"in o?!!o.trailing:u),m.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=c=r=a=void 0},m.flush=function(){return void 0===a?i:g(dn())},m};var jn,zn;function qn(e,t){const o=e+t,n=t<0?o<0?0:o:o>255?255:o;return Math.round(n)}function Un(e,t){return Hn(e,-t)}function Hn(e,t){const o=function(e){const t=sr(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;const[n,r,s,i]=o,a=255*t/100;return`rgba(${qn(n,a)}, ${qn(r,a)}, ${qn(s,a)}, ${i})`}function Gn(e,t){const o=er.from(e);return null==o?e:o.transparent(t/100).toString()}(zn=jn||(jn={})).on=function(e,t,o,n){let r=!1;if("string"==typeof e){const s=function(t){const n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,s,n??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,s,n??!0))}}}const s=function(e){o(e,this)};return e.addEventListener(t,s,n??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,s,n??!1))}}},zn.insertTemplate=function(e,t,o){const n=document.getElementById(e);if(t.replaceChildren(n?.content.cloneNode(!0)),t.className=n.className,null!=o?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(o.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=o?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const n=o.bindings[e];null!=n&&(t.textContent=String(n))}}},zn.resetSlot=function(e){e.replaceChildren(),e.className=""};const Wn=1e-7,Qn=20;function Yn(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class Kn{constructor(e,t,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=Yn(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class Zn{constructor(e,t,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=Yn(Math.max(Math.min(1,t),0),3),this.l=Yn(Math.max(Math.min(1,o),0),3),this.a=Yn(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,r=e.a,s=Math.max(t,o,n),i=Math.min(t,o,n);let a=0,c=0;const l=(i+s)/2,h=s-i;if(h>0){switch(c=Math.min(l<=.5?h/(2*l):h/(2-2*l),1),s){case t:a=(o-n)/h+(o<n?6:0);break;case o:a=(n-t)/h+2;break;case n:a=(t-o)/h+4}a*=60,a=Math.round(a)}return new Zn(a,c,l,r)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:n,a:r}=e;let s,i,a;if(0===o)s=i=a=n;else{const e=n<.5?n*(1+o):n+o-n*o,r=2*n-e;s=Zn._hue2rgb(r,e,t+1/3),i=Zn._hue2rgb(r,e,t),a=Zn._hue2rgb(r,e,t-1/3)}return new Kn(Math.round(255*s),Math.round(255*i),Math.round(255*a),r)}}class Jn{constructor(e,t,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=Yn(Math.max(Math.min(1,t),0),3),this.v=Yn(Math.max(Math.min(1,o),0),3),this.a=Yn(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,r=Math.max(t,o,n),s=r-Math.min(t,o,n),i=0===r?0:s/r;let a;return a=0===s?0:r===t?((o-n)/s%6+6)%6:r===o?(n-t)/s+2:(t-o)/s+4,new Jn(Math.round(60*a),i,r,e.a)}static toRGBA(e){const{h:t,s:o,v:n,a:r}=e,s=n*o,i=s*(1-Math.abs(t/60%2-1)),a=n-s;let[c,l,h]=[0,0,0];return t<60?(c=s,l=i):t<120?(c=i,l=s):t<180?(l=s,h=i):t<240?(l=i,h=s):t<300?(c=i,h=s):t<=360&&(c=s,h=i),c=Math.round(255*(c+a)),l=Math.round(255*(l+a)),h=Math.round(255*(h+a)),new Kn(c,l,h,r)}}const Xn=class{static from(e){return e instanceof Xn?e:sr(e)||Xn.red}static fromCssVariable(e,t){return sr(t.getPropertyValue(e).trim())||Xn.red}static fromHex(e){return ir(e)||Xn.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:Zn.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:Jn.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof Kn)this.rgba=e;else if(e instanceof Zn)this._hsla=e,this.rgba=Zn.toRGBA(e);else{if(!(e instanceof Jn))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=Jn.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&Kn.equals(this.rgba,e.rgba)&&Zn.equals(this.hsla,e.hsla)&&Jn.equals(this.hsva,e.hsva))}getRelativeLuminance(){return Yn(.2126*Xn._relativeLuminanceForComponent(this.rgba.r)+.7152*Xn._relativeLuminanceForComponent(this.rgba.g)+.0722*Xn._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new er(new Kn(0,0,0,e.rgba.a));if(1===t)return new er(new Kn(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let n=Qn;const r=(e,o)=>{const s=e.mix(o,.5),i=s.getRelativeLuminance();return Math.abs(t-i)<Wn||!n--?s:i>t?r(e,s):r(s,o)},s=(o>t?r(er.black,e):r(e,er.white)).rgba;return new er(new Kn(s.r,s.g,s.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Xn(new Zn(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Xn(new Zn(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:n,a:r}=this.rgba;return new Xn(new Kn(t,o,n,r*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Xn(new Kn(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,n=t.a,r=o+n*(1-o);if(r<1e-6)return Xn.transparent;const s=this.rgba.r*o/r+t.r*n*(1-o)/r,i=this.rgba.g*o/r+t.g*n*(1-o)/r,a=this.rgba.b*o/r+t.b*n*(1-o)/r;return new Xn(new Kn(s,i,a,r))}mix(e,t){return function(e,t,o){const n=e.rgba,r=t.rgba;return new er(new Kn(n.r+o*(r.r-n.r),n.g+o*(r.g-n.g),n.b+o*(r.b-n.b),n.a+o*(r.a-n.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:n,a:r}=this.rgba;return new Xn(new Kn(e.rgba.r-r*(e.rgba.r-t),e.rgba.g-r*(e.rgba.g-o),e.rgba.b-r*(e.rgba.b-n),1))}flatten(...e){const t=e.reduceRight(((e,t)=>Xn._flatten(t,e)));return Xn._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new Xn(new Kn(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return nr(e);return tr(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const n=e.getRelativeLuminance(),r=t.getRelativeLuminance();return o=o*(r-n)/r,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const n=e.getRelativeLuminance();return o=o*(n-t.getRelativeLuminance())/n,e.darken(o)}};let er=Xn;function tr(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function or(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function nr(e){return`#${or(e.rgba.r)}${or(e.rgba.g)}${or(e.rgba.b)}`}er.white=new Xn(new Kn(255,255,255,1)),er.black=new Xn(new Kn(0,0,0,1)),er.red=new Xn(new Kn(255,0,0,1)),er.blue=new Xn(new Kn(0,0,255,1)),er.green=new Xn(new Kn(0,255,0,1)),er.cyan=new Xn(new Kn(0,255,255,1)),er.lightgrey=new Xn(new Kn(211,211,211,1)),er.transparent=new Xn(new Kn(0,0,0,0));const rr=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function sr(e){if(0===e.length)return null;if(e.charCodeAt(0)===tn.Hash)return ir(e);const t=rr.exec(e);if(null==t)return null;const o=t[1];let n;switch(o){case"rgb":case"hsl":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new er(new Kn(n[0],n[1],n[2],n[3]));case"hsl":case"hsla":return new er(new Zn(n[0],n[1],n[2],n[3]))}return er.red}function ir(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==tn.Hash)return null;if(7===t){const t=16*ar(e.charCodeAt(1))+ar(e.charCodeAt(2)),o=16*ar(e.charCodeAt(3))+ar(e.charCodeAt(4)),n=16*ar(e.charCodeAt(5))+ar(e.charCodeAt(6));return new er(new Kn(t,o,n,1))}if(9===t){const t=16*ar(e.charCodeAt(1))+ar(e.charCodeAt(2)),o=16*ar(e.charCodeAt(3))+ar(e.charCodeAt(4)),n=16*ar(e.charCodeAt(5))+ar(e.charCodeAt(6)),r=16*ar(e.charCodeAt(7))+ar(e.charCodeAt(8));return new er(new Kn(t,o,n,r/255))}if(4===t){const t=ar(e.charCodeAt(1)),o=ar(e.charCodeAt(2)),n=ar(e.charCodeAt(3));return new er(new Kn(16*t+t,16*o+o,16*n+n))}if(5===t){const t=ar(e.charCodeAt(1)),o=ar(e.charCodeAt(2)),n=ar(e.charCodeAt(3)),r=ar(e.charCodeAt(4));return new er(new Kn(16*t+t,16*o+o,16*n+n,(16*r+r)/255))}return null}function ar(e){switch(e){case tn.Digit0:return 0;case tn.Digit1:return 1;case tn.Digit2:return 2;case tn.Digit3:return 3;case tn.Digit4:return 4;case tn.Digit5:return 5;case tn.Digit6:return 6;case tn.Digit7:return 7;case tn.Digit8:return 8;case tn.Digit9:return 9;case tn.a:case tn.A:return 10;case tn.b:case tn.B:return 11;case tn.c:case tn.C:return 12;case tn.d:case tn.D:return 13;case tn.e:case tn.E:return 14;case tn.f:case tn.F:return 15}return 0}const cr=class{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new fr);const n=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=cr._noop,this._disposed||n()}};return Array.isArray(o)&&o.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new fr);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let lr=cr;lr._noop=function(){};const hr={done:!0,value:void 0},dr=class{constructor(e){this.element=e,this.next=dr.Undefined,this.prev=dr.Undefined}};let ur=dr;ur.Undefined=new dr(void 0);class fr{constructor(){this._first=ur.Undefined,this._last=ur.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===ur.Undefined}clear(){this._first=ur.Undefined,this._last=ur.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new ur(e);if(this._first===ur.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===ur.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===ur.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==ur.Undefined&&e.next!==ur.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===ur.Undefined&&e.next===ur.Undefined?(this._first=ur.Undefined,this._last=ur.Undefined):e.next===ur.Undefined?(this._last=this._last.prev,this._last.next=ur.Undefined):e.prev===ur.Undefined&&(this._first=this._first.next,this._first.prev=ur.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===ur.Undefined?hr:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==ur.Undefined;t=t.next)e.push(t.element);return e}}const br=new lr,pr=br.event;const gr=2**30;let mr=0;function vr(){return mr===gr?mr=1:mr++,`webview:${mr}`}class yr{constructor(e){this.appName=e,this.state=window.bootstrap,window.bootstrap=void 0,rn.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},on.Off),this.log("ctor()"),this._api=acquireVsCodeApi();const t=[];null!=this.onThemeUpdated&&t.push(pr(this.onThemeUpdated,this)),t.push(function(){const e=e=>{const t=document.body,o=window.getComputedStyle(t),n=t.classList.contains("vscode-light")||t.classList.contains("vscode-high-contrast-light"),r=t.classList.contains("vscode-high-contrast")||t.classList.contains("vscode-high-contrast-light"),s=t.style;s.setProperty("--font-family",o.getPropertyValue("--vscode-font-family").trim()),s.setProperty("--font-size",o.getPropertyValue("--vscode-font-size").trim()),s.setProperty("--font-weight",o.getPropertyValue("--vscode-font-weight").trim()),s.setProperty("--editor-font-family",o.getPropertyValue("--vscode-editor-font-family").trim()),s.setProperty("--editor-font-size",o.getPropertyValue("--vscode-editor-font-size").trim()),s.setProperty("--editor-font-weight",o.getPropertyValue("--vscode-editor-font-weight").trim());const i=o.getPropertyValue("--vscode-editor-background").trim();let a=o.getPropertyValue("--vscode-editor-foreground").trim();a||(a=o.getPropertyValue("--vscode-foreground").trim());let c=i;s.setProperty("--color-background",c),s.setProperty("--color-background--lighten-05",Hn(c,5)),s.setProperty("--color-background--darken-05",Un(c,5)),s.setProperty("--color-background--lighten-075",Hn(c,7.5)),s.setProperty("--color-background--darken-075",Un(c,7.5)),s.setProperty("--color-background--lighten-10",Hn(c,10)),s.setProperty("--color-background--darken-10",Un(c,10)),s.setProperty("--color-background--lighten-15",Hn(c,15)),s.setProperty("--color-background--darken-15",Un(c,15)),s.setProperty("--color-background--lighten-30",Hn(c,30)),s.setProperty("--color-background--darken-30",Un(c,30)),s.setProperty("--color-background--lighten-50",Hn(c,50)),s.setProperty("--color-background--darken-50",Un(c,50)),c=o.getPropertyValue("--vscode-button-background").trim(),s.setProperty("--color-button-background",c),s.setProperty("--color-button-background--darken-30",Un(c,30)),s.setProperty("--color-highlight",c),s.setProperty("--color-highlight--75",Gn(c,75)),s.setProperty("--color-highlight--50",Gn(c,50)),s.setProperty("--color-highlight--25",Gn(c,25)),c=o.getPropertyValue("--vscode-button-secondaryBackground").trim(),s.setProperty("--color-button-secondary-background",c),s.setProperty("--color-button-secondary-background--darken-30",Un(c,30)),c=o.getPropertyValue("--vscode-button-foreground").trim(),s.setProperty("--color-button-foreground",c),s.setProperty("--color-foreground",a),s.setProperty("--color-foreground--85",Gn(a,85)),s.setProperty("--color-foreground--75",Gn(a,75)),s.setProperty("--color-foreground--65",Gn(a,65)),s.setProperty("--color-foreground--50",Gn(a,50)),c=o.getPropertyValue("--vscode-focusBorder").trim(),s.setProperty("--color-focus-border",c),c=o.getPropertyValue("--vscode-textLink-foreground").trim(),s.setProperty("--color-link-foreground",c),s.setProperty("--color-link-foreground--darken-20",Un(c,20)),s.setProperty("--color-link-foreground--lighten-20",Hn(c,20)),c=o.getPropertyValue("--vscode-sideBar-background").trim(),s.setProperty("--color-view-background",c||i),c=o.getPropertyValue("--vscode-sideBar-foreground").trim(),s.setProperty("--color-view-foreground",c||a),s.setProperty("--color-view-header-foreground",o.getPropertyValue("--vscode-sideBarSectionHeader-foreground").trim()||c||a),c=o.getPropertyValue("--vscode-editorHoverWidget-background").trim(),s.setProperty("--color-hover-background",c),c=o.getPropertyValue("--vscode-editorHoverWidget-border").trim(),s.setProperty("--color-hover-border",c),c=o.getPropertyValue("--vscode-editorHoverWidget-foreground").trim(),s.setProperty("--color-hover-foreground",c),c=o.getPropertyValue("--vscode-editorHoverWidget-statusBarBackground").trim(),s.setProperty("--color-hover-statusBarBackground",c),c=o.getPropertyValue("--vscode-inputValidation-infoBackground").trim(),s.setProperty("--color-alert-infoHoverBackground",n?Un(c,5):Hn(c,5)),s.setProperty("--color-alert-infoBackground",c),c=o.getPropertyValue("--vscode-inputValidation-warningBackground").trim(),s.setProperty("--color-alert-warningHoverBackground",n?Un(c,5):Hn(c,5)),s.setProperty("--color-alert-warningBackground",c),c=o.getPropertyValue("--vscode-inputValidation-errorBackground").trim(),s.setProperty("--color-alert-errorHoverBackground",n?Un(c,5):Hn(c,5)),s.setProperty("--color-alert-errorBackground",c),c=n?Un(i,5):Hn(i,5),s.setProperty("--color-alert-neutralHoverBackground",n?Un(c,5):Hn(c,5)),s.setProperty("--color-alert-neutralBackground",c),s.setProperty("--color-alert-infoBorder","var(--vscode-inputValidation-infoBorder)"),s.setProperty("--color-alert-warningBorder","var(--vscode-inputValidation-warningBorder)"),s.setProperty("--color-alert-errorBorder","var(--vscode-inputValidation-errorBorder)"),s.setProperty("--color-alert-neutralBorder","var(--vscode-input-foreground)"),s.setProperty("--color-alert-foreground","var(--vscode-input-foreground)"),br.fire({colors:{background:i,foreground:a},computedStyle:o,isLightTheme:n,isHighContrastTheme:r,isInitializing:null==e})};e();const t=new MutationObserver(e);return t.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>t.disconnect()}}()),requestAnimationFrame((()=>{this.log("ctor(): initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(jn.on(window,"message",this.onMessageReceived.bind(this))),this.sendCommand(Uo,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(jn.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=function(e,t,o){const{track:n,...r}={track:!1,...o??{}};if(!0!==n)return Nn(e,t,r);let s=!1;const i=Nn((function(...t){return s=!1,e.apply(this,t)}),t,o),a=function(...e){return s=!0,i.apply(this,e)};return a.pending=function(){return s},a.cancel=function(){return i.cancel.apply(i)},a.flush=function(){return i.flush.apply(i)},a}((e=>{this.sendCommand(Ho,e)}),150);this.bindDisposables.push(jn.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),jn.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){rn.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){const o=vr();this.log(`sendCommand(${o}): name=${e.method}`),this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,o){const n=vr();this.log(`sendCommandWithCompletion(${n}): name=${e.method}`);const r=new Promise(((e,t)=>{let r;const s=[jn.on(window,"message",(t=>{qo(o,t.data,(o=>{t.data.completionId===n&&(s.forEach((e=>e.dispose())),queueMicrotask((()=>e(o))))}))})),{dispose:function(){null!=r&&(clearTimeout(r),r=void 0)}}];r=setTimeout((()=>{r=void 0,s.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${o.method}`))}),6e4)}));return this.postMessage({id:n,method:e.method,params:t,completionId:n}),r}setState(e){this.state=e,null!=e&&this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}var wr=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,xr=(e,t,o,n)=>{for(var r,s=n>1?void 0:n?kr(t,o):t,i=e.length-1;i>=0;i--)(r=e[i])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&wr(t,o,s),s};const Cr=Jt`
	:host {
		font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
		display: inline-block;
		text-decoration: none;
		text-rendering: auto;
		text-align: center;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		color: inherit;
		vertical-align: text-bottom;
		letter-spacing: normal;
	}

	:host([icon='add']):before {
		content: '\\ea60';
	}
	:host([icon='plus']):before {
		content: '\\ea60';
	}
	:host([icon='gist-new']):before {
		content: '\\ea60';
	}
	:host([icon='repo-create']):before {
		content: '\\ea60';
	}
	:host([icon='lightbulb']):before {
		content: '\\ea61';
	}
	:host([icon='light-bulb']):before {
		content: '\\ea61';
	}
	:host([icon='repo']):before {
		content: '\\ea62';
	}
	:host([icon='repo-delete']):before {
		content: '\\ea62';
	}
	:host([icon='gist-fork']):before {
		content: '\\ea63';
	}
	:host([icon='repo-forked']):before {
		content: '\\ea63';
	}
	:host([icon='git-pull-request']):before {
		content: '\\ea64';
	}
	:host([icon='git-pull-request-abandoned']):before {
		content: '\\ea64';
	}
	:host([icon='record-keys']):before {
		content: '\\ea65';
	}
	:host([icon='keyboard']):before {
		content: '\\ea65';
	}
	:host([icon='tag']):before {
		content: '\\ea66';
	}
	:host([icon='tag-add']):before {
		content: '\\ea66';
	}
	:host([icon='tag-remove']):before {
		content: '\\ea66';
	}
	:host([icon='person']):before {
		content: '\\ea67';
	}
	:host([icon='person-follow']):before {
		content: '\\ea67';
	}
	:host([icon='person-outline']):before {
		content: '\\ea67';
	}
	:host([icon='person-filled']):before {
		content: '\\ea67';
	}
	:host([icon='git-branch']):before {
		content: '\\ea68';
	}
	:host([icon='git-branch-create']):before {
		content: '\\ea68';
	}
	:host([icon='git-branch-delete']):before {
		content: '\\ea68';
	}
	:host([icon='source-control']):before {
		content: '\\ea68';
	}
	:host([icon='mirror']):before {
		content: '\\ea69';
	}
	:host([icon='mirror-public']):before {
		content: '\\ea69';
	}
	:host([icon='star']):before {
		content: '\\ea6a';
	}
	:host([icon='star-add']):before {
		content: '\\ea6a';
	}
	:host([icon='star-delete']):before {
		content: '\\ea6a';
	}
	:host([icon='star-empty']):before {
		content: '\\ea6a';
	}
	:host([icon='comment']):before {
		content: '\\ea6b';
	}
	:host([icon='comment-add']):before {
		content: '\\ea6b';
	}
	:host([icon='alert']):before {
		content: '\\ea6c';
	}
	:host([icon='warning']):before {
		content: '\\ea6c';
	}
	:host([icon='search']):before {
		content: '\\ea6d';
	}
	:host([icon='search-save']):before {
		content: '\\ea6d';
	}
	:host([icon='log-out']):before {
		content: '\\ea6e';
	}
	:host([icon='sign-out']):before {
		content: '\\ea6e';
	}
	:host([icon='log-in']):before {
		content: '\\ea6f';
	}
	:host([icon='sign-in']):before {
		content: '\\ea6f';
	}
	:host([icon='eye']):before {
		content: '\\ea70';
	}
	:host([icon='eye-unwatch']):before {
		content: '\\ea70';
	}
	:host([icon='eye-watch']):before {
		content: '\\ea70';
	}
	:host([icon='circle-filled']):before {
		content: '\\ea71';
	}
	:host([icon='primitive-dot']):before {
		content: '\\ea71';
	}
	:host([icon='close-dirty']):before {
		content: '\\ea71';
	}
	:host([icon='debug-breakpoint']):before {
		content: '\\ea71';
	}
	:host([icon='debug-breakpoint-disabled']):before {
		content: '\\ea71';
	}
	:host([icon='debug-hint']):before {
		content: '\\ea71';
	}
	:host([icon='primitive-square']):before {
		content: '\\ea72';
	}
	:host([icon='edit']):before {
		content: '\\ea73';
	}
	:host([icon='pencil']):before {
		content: '\\ea73';
	}
	:host([icon='info']):before {
		content: '\\ea74';
	}
	:host([icon='issue-opened']):before {
		content: '\\ea74';
	}
	:host([icon='gist-private']):before {
		content: '\\ea75';
	}
	:host([icon='git-fork-private']):before {
		content: '\\ea75';
	}
	:host([icon='lock']):before {
		content: '\\ea75';
	}
	:host([icon='mirror-private']):before {
		content: '\\ea75';
	}
	:host([icon='close']):before {
		content: '\\ea76';
	}
	:host([icon='remove-close']):before {
		content: '\\ea76';
	}
	:host([icon='x']):before {
		content: '\\ea76';
	}
	:host([icon='repo-sync']):before {
		content: '\\ea77';
	}
	:host([icon='sync']):before {
		content: '\\ea77';
	}
	:host([icon='clone']):before {
		content: '\\ea78';
	}
	:host([icon='desktop-download']):before {
		content: '\\ea78';
	}
	:host([icon='beaker']):before {
		content: '\\ea79';
	}
	:host([icon='microscope']):before {
		content: '\\ea79';
	}
	:host([icon='vm']):before {
		content: '\\ea7a';
	}
	:host([icon='device-desktop']):before {
		content: '\\ea7a';
	}
	:host([icon='file']):before {
		content: '\\ea7b';
	}
	:host([icon='file-text']):before {
		content: '\\ea7b';
	}
	:host([icon='more']):before {
		content: '\\ea7c';
	}
	:host([icon='ellipsis']):before {
		content: '\\ea7c';
	}
	:host([icon='kebab-horizontal']):before {
		content: '\\ea7c';
	}
	:host([icon='mail-reply']):before {
		content: '\\ea7d';
	}
	:host([icon='reply']):before {
		content: '\\ea7d';
	}
	:host([icon='organization']):before {
		content: '\\ea7e';
	}
	:host([icon='organization-filled']):before {
		content: '\\ea7e';
	}
	:host([icon='organization-outline']):before {
		content: '\\ea7e';
	}
	:host([icon='new-file']):before {
		content: '\\ea7f';
	}
	:host([icon='file-add']):before {
		content: '\\ea7f';
	}
	:host([icon='new-folder']):before {
		content: '\\ea80';
	}
	:host([icon='file-directory-create']):before {
		content: '\\ea80';
	}
	:host([icon='trash']):before {
		content: '\\ea81';
	}
	:host([icon='trashcan']):before {
		content: '\\ea81';
	}
	:host([icon='history']):before {
		content: '\\ea82';
	}
	:host([icon='clock']):before {
		content: '\\ea82';
	}
	:host([icon='folder']):before {
		content: '\\ea83';
	}
	:host([icon='file-directory']):before {
		content: '\\ea83';
	}
	:host([icon='symbol-folder']):before {
		content: '\\ea83';
	}
	:host([icon='logo-github']):before {
		content: '\\ea84';
	}
	:host([icon='mark-github']):before {
		content: '\\ea84';
	}
	:host([icon='github']):before {
		content: '\\ea84';
	}
	:host([icon='terminal']):before {
		content: '\\ea85';
	}
	:host([icon='console']):before {
		content: '\\ea85';
	}
	:host([icon='repl']):before {
		content: '\\ea85';
	}
	:host([icon='zap']):before {
		content: '\\ea86';
	}
	:host([icon='symbol-event']):before {
		content: '\\ea86';
	}
	:host([icon='error']):before {
		content: '\\ea87';
	}
	:host([icon='stop']):before {
		content: '\\ea87';
	}
	:host([icon='variable']):before {
		content: '\\ea88';
	}
	:host([icon='symbol-variable']):before {
		content: '\\ea88';
	}
	:host([icon='array']):before {
		content: '\\ea8a';
	}
	:host([icon='symbol-array']):before {
		content: '\\ea8a';
	}
	:host([icon='symbol-module']):before {
		content: '\\ea8b';
	}
	:host([icon='symbol-package']):before {
		content: '\\ea8b';
	}
	:host([icon='symbol-namespace']):before {
		content: '\\ea8b';
	}
	:host([icon='symbol-object']):before {
		content: '\\ea8b';
	}
	:host([icon='symbol-method']):before {
		content: '\\ea8c';
	}
	:host([icon='symbol-function']):before {
		content: '\\ea8c';
	}
	:host([icon='symbol-constructor']):before {
		content: '\\ea8c';
	}
	:host([icon='symbol-boolean']):before {
		content: '\\ea8f';
	}
	:host([icon='symbol-null']):before {
		content: '\\ea8f';
	}
	:host([icon='symbol-numeric']):before {
		content: '\\ea90';
	}
	:host([icon='symbol-number']):before {
		content: '\\ea90';
	}
	:host([icon='symbol-structure']):before {
		content: '\\ea91';
	}
	:host([icon='symbol-struct']):before {
		content: '\\ea91';
	}
	:host([icon='symbol-parameter']):before {
		content: '\\ea92';
	}
	:host([icon='symbol-type-parameter']):before {
		content: '\\ea92';
	}
	:host([icon='symbol-key']):before {
		content: '\\ea93';
	}
	:host([icon='symbol-text']):before {
		content: '\\ea93';
	}
	:host([icon='symbol-reference']):before {
		content: '\\ea94';
	}
	:host([icon='go-to-file']):before {
		content: '\\ea94';
	}
	:host([icon='symbol-enum']):before {
		content: '\\ea95';
	}
	:host([icon='symbol-value']):before {
		content: '\\ea95';
	}
	:host([icon='symbol-ruler']):before {
		content: '\\ea96';
	}
	:host([icon='symbol-unit']):before {
		content: '\\ea96';
	}
	:host([icon='activate-breakpoints']):before {
		content: '\\ea97';
	}
	:host([icon='archive']):before {
		content: '\\ea98';
	}
	:host([icon='arrow-both']):before {
		content: '\\ea99';
	}
	:host([icon='arrow-down']):before {
		content: '\\ea9a';
	}
	:host([icon='arrow-left']):before {
		content: '\\ea9b';
	}
	:host([icon='arrow-right']):before {
		content: '\\ea9c';
	}
	:host([icon='arrow-small-down']):before {
		content: '\\ea9d';
	}
	:host([icon='arrow-small-left']):before {
		content: '\\ea9e';
	}
	:host([icon='arrow-small-right']):before {
		content: '\\ea9f';
	}
	:host([icon='arrow-small-up']):before {
		content: '\\eaa0';
	}
	:host([icon='arrow-up']):before {
		content: '\\eaa1';
	}
	:host([icon='bell']):before {
		content: '\\eaa2';
	}
	:host([icon='bold']):before {
		content: '\\eaa3';
	}
	:host([icon='book']):before {
		content: '\\eaa4';
	}
	:host([icon='bookmark']):before {
		content: '\\eaa5';
	}
	:host([icon='debug-breakpoint-conditional-unverified']):before {
		content: '\\eaa6';
	}
	:host([icon='debug-breakpoint-conditional']):before {
		content: '\\eaa7';
	}
	:host([icon='debug-breakpoint-conditional-disabled']):before {
		content: '\\eaa7';
	}
	:host([icon='debug-breakpoint-data-unverified']):before {
		content: '\\eaa8';
	}
	:host([icon='debug-breakpoint-data']):before {
		content: '\\eaa9';
	}
	:host([icon='debug-breakpoint-data-disabled']):before {
		content: '\\eaa9';
	}
	:host([icon='debug-breakpoint-log-unverified']):before {
		content: '\\eaaa';
	}
	:host([icon='debug-breakpoint-log']):before {
		content: '\\eaab';
	}
	:host([icon='debug-breakpoint-log-disabled']):before {
		content: '\\eaab';
	}
	:host([icon='briefcase']):before {
		content: '\\eaac';
	}
	:host([icon='broadcast']):before {
		content: '\\eaad';
	}
	:host([icon='browser']):before {
		content: '\\eaae';
	}
	:host([icon='bug']):before {
		content: '\\eaaf';
	}
	:host([icon='calendar']):before {
		content: '\\eab0';
	}
	:host([icon='case-sensitive']):before {
		content: '\\eab1';
	}
	:host([icon='check']):before {
		content: '\\eab2';
	}
	:host([icon='checklist']):before {
		content: '\\eab3';
	}
	:host([icon='chevron-down']):before {
		content: '\\eab4';
	}
	:host([icon='chevron-left']):before {
		content: '\\eab5';
	}
	:host([icon='chevron-right']):before {
		content: '\\eab6';
	}
	:host([icon='chevron-up']):before {
		content: '\\eab7';
	}
	:host([icon='chrome-close']):before {
		content: '\\eab8';
	}
	:host([icon='chrome-maximize']):before {
		content: '\\eab9';
	}
	:host([icon='chrome-minimize']):before {
		content: '\\eaba';
	}
	:host([icon='chrome-restore']):before {
		content: '\\eabb';
	}
	:host([icon='circle-outline']):before {
		content: '\\eabc';
	}
	:host([icon='debug-breakpoint-unverified']):before {
		content: '\\eabc';
	}
	:host([icon='circle-slash']):before {
		content: '\\eabd';
	}
	:host([icon='circuit-board']):before {
		content: '\\eabe';
	}
	:host([icon='clear-all']):before {
		content: '\\eabf';
	}
	:host([icon='clippy']):before {
		content: '\\eac0';
	}
	:host([icon='close-all']):before {
		content: '\\eac1';
	}
	:host([icon='cloud-download']):before {
		content: '\\eac2';
	}
	:host([icon='cloud-upload']):before {
		content: '\\eac3';
	}
	:host([icon='code']):before {
		content: '\\eac4';
	}
	:host([icon='collapse-all']):before {
		content: '\\eac5';
	}
	:host([icon='color-mode']):before {
		content: '\\eac6';
	}
	:host([icon='comment-discussion']):before {
		content: '\\eac7';
	}
	:host([icon='credit-card']):before {
		content: '\\eac9';
	}
	:host([icon='dash']):before {
		content: '\\eacc';
	}
	:host([icon='dashboard']):before {
		content: '\\eacd';
	}
	:host([icon='database']):before {
		content: '\\eace';
	}
	:host([icon='debug-continue']):before {
		content: '\\eacf';
	}
	:host([icon='debug-disconnect']):before {
		content: '\\ead0';
	}
	:host([icon='debug-pause']):before {
		content: '\\ead1';
	}
	:host([icon='debug-restart']):before {
		content: '\\ead2';
	}
	:host([icon='debug-start']):before {
		content: '\\ead3';
	}
	:host([icon='debug-step-into']):before {
		content: '\\ead4';
	}
	:host([icon='debug-step-out']):before {
		content: '\\ead5';
	}
	:host([icon='debug-step-over']):before {
		content: '\\ead6';
	}
	:host([icon='debug-stop']):before {
		content: '\\ead7';
	}
	:host([icon='debug']):before {
		content: '\\ead8';
	}
	:host([icon='device-camera-video']):before {
		content: '\\ead9';
	}
	:host([icon='device-camera']):before {
		content: '\\eada';
	}
	:host([icon='device-mobile']):before {
		content: '\\eadb';
	}
	:host([icon='diff-added']):before {
		content: '\\eadc';
	}
	:host([icon='diff-ignored']):before {
		content: '\\eadd';
	}
	:host([icon='diff-modified']):before {
		content: '\\eade';
	}
	:host([icon='diff-removed']):before {
		content: '\\eadf';
	}
	:host([icon='diff-renamed']):before {
		content: '\\eae0';
	}
	:host([icon='diff']):before {
		content: '\\eae1';
	}
	:host([icon='discard']):before {
		content: '\\eae2';
	}
	:host([icon='editor-layout']):before {
		content: '\\eae3';
	}
	:host([icon='empty-window']):before {
		content: '\\eae4';
	}
	:host([icon='exclude']):before {
		content: '\\eae5';
	}
	:host([icon='extensions']):before {
		content: '\\eae6';
	}
	:host([icon='eye-closed']):before {
		content: '\\eae7';
	}
	:host([icon='file-binary']):before {
		content: '\\eae8';
	}
	:host([icon='file-code']):before {
		content: '\\eae9';
	}
	:host([icon='file-media']):before {
		content: '\\eaea';
	}
	:host([icon='file-pdf']):before {
		content: '\\eaeb';
	}
	:host([icon='file-submodule']):before {
		content: '\\eaec';
	}
	:host([icon='file-symlink-directory']):before {
		content: '\\eaed';
	}
	:host([icon='file-symlink-file']):before {
		content: '\\eaee';
	}
	:host([icon='file-zip']):before {
		content: '\\eaef';
	}
	:host([icon='files']):before {
		content: '\\eaf0';
	}
	:host([icon='filter']):before {
		content: '\\eaf1';
	}
	:host([icon='flame']):before {
		content: '\\eaf2';
	}
	:host([icon='fold-down']):before {
		content: '\\eaf3';
	}
	:host([icon='fold-up']):before {
		content: '\\eaf4';
	}
	:host([icon='fold']):before {
		content: '\\eaf5';
	}
	:host([icon='folder-active']):before {
		content: '\\eaf6';
	}
	:host([icon='folder-opened']):before {
		content: '\\eaf7';
	}
	:host([icon='gear']):before {
		content: '\\eaf8';
	}
	:host([icon='gift']):before {
		content: '\\eaf9';
	}
	:host([icon='gist-secret']):before {
		content: '\\eafa';
	}
	:host([icon='gist']):before {
		content: '\\eafb';
	}
	:host([icon='git-commit']):before {
		content: '\\eafc';
	}
	:host([icon='git-compare']):before {
		content: '\\eafd';
	}
	:host([icon='compare-changes']):before {
		content: '\\eafd';
	}
	:host([icon='git-merge']):before {
		content: '\\eafe';
	}
	:host([icon='github-action']):before {
		content: '\\eaff';
	}
	:host([icon='github-alt']):before {
		content: '\\eb00';
	}
	:host([icon='globe']):before {
		content: '\\eb01';
	}
	:host([icon='grabber']):before {
		content: '\\eb02';
	}
	:host([icon='graph']):before {
		content: '\\eb03';
	}
	:host([icon='gripper']):before {
		content: '\\eb04';
	}
	:host([icon='heart']):before {
		content: '\\eb05';
	}
	:host([icon='home']):before {
		content: '\\eb06';
	}
	:host([icon='horizontal-rule']):before {
		content: '\\eb07';
	}
	:host([icon='hubot']):before {
		content: '\\eb08';
	}
	:host([icon='inbox']):before {
		content: '\\eb09';
	}
	:host([icon='issue-reopened']):before {
		content: '\\eb0b';
	}
	:host([icon='issues']):before {
		content: '\\eb0c';
	}
	:host([icon='italic']):before {
		content: '\\eb0d';
	}
	:host([icon='jersey']):before {
		content: '\\eb0e';
	}
	:host([icon='json']):before {
		content: '\\eb0f';
	}
	:host([icon='kebab-vertical']):before {
		content: '\\eb10';
	}
	:host([icon='key']):before {
		content: '\\eb11';
	}
	:host([icon='law']):before {
		content: '\\eb12';
	}
	:host([icon='lightbulb-autofix']):before {
		content: '\\eb13';
	}
	:host([icon='link-external']):before {
		content: '\\eb14';
	}
	:host([icon='link']):before {
		content: '\\eb15';
	}
	:host([icon='list-ordered']):before {
		content: '\\eb16';
	}
	:host([icon='list-unordered']):before {
		content: '\\eb17';
	}
	:host([icon='live-share']):before {
		content: '\\eb18';
	}
	:host([icon='loading']):before {
		content: '\\eb19';
	}
	:host([icon='location']):before {
		content: '\\eb1a';
	}
	:host([icon='mail-read']):before {
		content: '\\eb1b';
	}
	:host([icon='mail']):before {
		content: '\\eb1c';
	}
	:host([icon='markdown']):before {
		content: '\\eb1d';
	}
	:host([icon='megaphone']):before {
		content: '\\eb1e';
	}
	:host([icon='mention']):before {
		content: '\\eb1f';
	}
	:host([icon='milestone']):before {
		content: '\\eb20';
	}
	:host([icon='mortar-board']):before {
		content: '\\eb21';
	}
	:host([icon='move']):before {
		content: '\\eb22';
	}
	:host([icon='multiple-windows']):before {
		content: '\\eb23';
	}
	:host([icon='mute']):before {
		content: '\\eb24';
	}
	:host([icon='no-newline']):before {
		content: '\\eb25';
	}
	:host([icon='note']):before {
		content: '\\eb26';
	}
	:host([icon='octoface']):before {
		content: '\\eb27';
	}
	:host([icon='open-preview']):before {
		content: '\\eb28';
	}
	:host([icon='package']):before {
		content: '\\eb29';
	}
	:host([icon='paintcan']):before {
		content: '\\eb2a';
	}
	:host([icon='pin']):before {
		content: '\\eb2b';
	}
	:host([icon='play']):before {
		content: '\\eb2c';
	}
	:host([icon='run']):before {
		content: '\\eb2c';
	}
	:host([icon='plug']):before {
		content: '\\eb2d';
	}
	:host([icon='preserve-case']):before {
		content: '\\eb2e';
	}
	:host([icon='preview']):before {
		content: '\\eb2f';
	}
	:host([icon='project']):before {
		content: '\\eb30';
	}
	:host([icon='pulse']):before {
		content: '\\eb31';
	}
	:host([icon='question']):before {
		content: '\\eb32';
	}
	:host([icon='quote']):before {
		content: '\\eb33';
	}
	:host([icon='radio-tower']):before {
		content: '\\eb34';
	}
	:host([icon='reactions']):before {
		content: '\\eb35';
	}
	:host([icon='references']):before {
		content: '\\eb36';
	}
	:host([icon='refresh']):before {
		content: '\\eb37';
	}
	:host([icon='regex']):before {
		content: '\\eb38';
	}
	:host([icon='remote-explorer']):before {
		content: '\\eb39';
	}
	:host([icon='remote']):before {
		content: '\\eb3a';
	}
	:host([icon='remove']):before {
		content: '\\eb3b';
	}
	:host([icon='replace-all']):before {
		content: '\\eb3c';
	}
	:host([icon='replace']):before {
		content: '\\eb3d';
	}
	:host([icon='repo-clone']):before {
		content: '\\eb3e';
	}
	:host([icon='repo-force-push']):before {
		content: '\\eb3f';
	}
	:host([icon='repo-pull']):before {
		content: '\\eb40';
	}
	:host([icon='repo-push']):before {
		content: '\\eb41';
	}
	:host([icon='report']):before {
		content: '\\eb42';
	}
	:host([icon='request-changes']):before {
		content: '\\eb43';
	}
	:host([icon='rocket']):before {
		content: '\\eb44';
	}
	:host([icon='root-folder-opened']):before {
		content: '\\eb45';
	}
	:host([icon='root-folder']):before {
		content: '\\eb46';
	}
	:host([icon='rss']):before {
		content: '\\eb47';
	}
	:host([icon='ruby']):before {
		content: '\\eb48';
	}
	:host([icon='save-all']):before {
		content: '\\eb49';
	}
	:host([icon='save-as']):before {
		content: '\\eb4a';
	}
	:host([icon='save']):before {
		content: '\\eb4b';
	}
	:host([icon='screen-full']):before {
		content: '\\eb4c';
	}
	:host([icon='screen-normal']):before {
		content: '\\eb4d';
	}
	:host([icon='search-stop']):before {
		content: '\\eb4e';
	}
	:host([icon='server']):before {
		content: '\\eb50';
	}
	:host([icon='settings-gear']):before {
		content: '\\eb51';
	}
	:host([icon='settings']):before {
		content: '\\eb52';
	}
	:host([icon='shield']):before {
		content: '\\eb53';
	}
	:host([icon='smiley']):before {
		content: '\\eb54';
	}
	:host([icon='sort-precedence']):before {
		content: '\\eb55';
	}
	:host([icon='split-horizontal']):before {
		content: '\\eb56';
	}
	:host([icon='split-vertical']):before {
		content: '\\eb57';
	}
	:host([icon='squirrel']):before {
		content: '\\eb58';
	}
	:host([icon='star-full']):before {
		content: '\\eb59';
	}
	:host([icon='star-half']):before {
		content: '\\eb5a';
	}
	:host([icon='symbol-class']):before {
		content: '\\eb5b';
	}
	:host([icon='symbol-color']):before {
		content: '\\eb5c';
	}
	:host([icon='symbol-constant']):before {
		content: '\\eb5d';
	}
	:host([icon='symbol-enum-member']):before {
		content: '\\eb5e';
	}
	:host([icon='symbol-field']):before {
		content: '\\eb5f';
	}
	:host([icon='symbol-file']):before {
		content: '\\eb60';
	}
	:host([icon='symbol-interface']):before {
		content: '\\eb61';
	}
	:host([icon='symbol-keyword']):before {
		content: '\\eb62';
	}
	:host([icon='symbol-misc']):before {
		content: '\\eb63';
	}
	:host([icon='symbol-operator']):before {
		content: '\\eb64';
	}
	:host([icon='symbol-property']):before {
		content: '\\eb65';
	}
	:host([icon='wrench']):before {
		content: '\\eb65';
	}
	:host([icon='wrench-subaction']):before {
		content: '\\eb65';
	}
	:host([icon='symbol-snippet']):before {
		content: '\\eb66';
	}
	:host([icon='tasklist']):before {
		content: '\\eb67';
	}
	:host([icon='telescope']):before {
		content: '\\eb68';
	}
	:host([icon='text-size']):before {
		content: '\\eb69';
	}
	:host([icon='three-bars']):before {
		content: '\\eb6a';
	}
	:host([icon='thumbsdown']):before {
		content: '\\eb6b';
	}
	:host([icon='thumbsup']):before {
		content: '\\eb6c';
	}
	:host([icon='tools']):before {
		content: '\\eb6d';
	}
	:host([icon='triangle-down']):before {
		content: '\\eb6e';
	}
	:host([icon='triangle-left']):before {
		content: '\\eb6f';
	}
	:host([icon='triangle-right']):before {
		content: '\\eb70';
	}
	:host([icon='triangle-up']):before {
		content: '\\eb71';
	}
	:host([icon='twitter']):before {
		content: '\\eb72';
	}
	:host([icon='unfold']):before {
		content: '\\eb73';
	}
	:host([icon='unlock']):before {
		content: '\\eb74';
	}
	:host([icon='unmute']):before {
		content: '\\eb75';
	}
	:host([icon='unverified']):before {
		content: '\\eb76';
	}
	:host([icon='verified']):before {
		content: '\\eb77';
	}
	:host([icon='versions']):before {
		content: '\\eb78';
	}
	:host([icon='vm-active']):before {
		content: '\\eb79';
	}
	:host([icon='vm-outline']):before {
		content: '\\eb7a';
	}
	:host([icon='vm-running']):before {
		content: '\\eb7b';
	}
	:host([icon='watch']):before {
		content: '\\eb7c';
	}
	:host([icon='whitespace']):before {
		content: '\\eb7d';
	}
	:host([icon='whole-word']):before {
		content: '\\eb7e';
	}
	:host([icon='window']):before {
		content: '\\eb7f';
	}
	:host([icon='word-wrap']):before {
		content: '\\eb80';
	}
	:host([icon='zoom-in']):before {
		content: '\\eb81';
	}
	:host([icon='zoom-out']):before {
		content: '\\eb82';
	}
	:host([icon='list-filter']):before {
		content: '\\eb83';
	}
	:host([icon='list-flat']):before {
		content: '\\eb84';
	}
	:host([icon='list-selection']):before {
		content: '\\eb85';
	}
	:host([icon='selection']):before {
		content: '\\eb85';
	}
	:host([icon='list-tree']):before {
		content: '\\eb86';
	}
	:host([icon='debug-breakpoint-function-unverified']):before {
		content: '\\eb87';
	}
	:host([icon='debug-breakpoint-function']):before {
		content: '\\eb88';
	}
	:host([icon='debug-breakpoint-function-disabled']):before {
		content: '\\eb88';
	}
	:host([icon='debug-stackframe-active']):before {
		content: '\\eb89';
	}
	:host([icon='debug-stackframe-dot']):before {
		content: '\\eb8a';
	}
	:host([icon='debug-stackframe']):before {
		content: '\\eb8b';
	}
	:host([icon='debug-stackframe-focused']):before {
		content: '\\eb8b';
	}
	:host([icon='debug-breakpoint-unsupported']):before {
		content: '\\eb8c';
	}
	:host([icon='symbol-string']):before {
		content: '\\eb8d';
	}
	:host([icon='debug-reverse-continue']):before {
		content: '\\eb8e';
	}
	:host([icon='debug-step-back']):before {
		content: '\\eb8f';
	}
	:host([icon='debug-restart-frame']):before {
		content: '\\eb90';
	}
	:host([icon='debug-alt']):before {
		content: '\\eb91';
	}
	:host([icon='call-incoming']):before {
		content: '\\eb92';
	}
	:host([icon='call-outgoing']):before {
		content: '\\eb93';
	}
	:host([icon='menu']):before {
		content: '\\eb94';
	}
	:host([icon='expand-all']):before {
		content: '\\eb95';
	}
	:host([icon='feedback']):before {
		content: '\\eb96';
	}
	:host([icon='group-by-ref-type']):before {
		content: '\\eb97';
	}
	:host([icon='ungroup-by-ref-type']):before {
		content: '\\eb98';
	}
	:host([icon='account']):before {
		content: '\\eb99';
	}
	:host([icon='bell-dot']):before {
		content: '\\eb9a';
	}
	:host([icon='debug-console']):before {
		content: '\\eb9b';
	}
	:host([icon='library']):before {
		content: '\\eb9c';
	}
	:host([icon='output']):before {
		content: '\\eb9d';
	}
	:host([icon='run-all']):before {
		content: '\\eb9e';
	}
	:host([icon='sync-ignored']):before {
		content: '\\eb9f';
	}
	:host([icon='pinned']):before {
		content: '\\eba0';
	}
	:host([icon='github-inverted']):before {
		content: '\\eba1';
	}
	:host([icon='server-process']):before {
		content: '\\eba2';
	}
	:host([icon='server-environment']):before {
		content: '\\eba3';
	}
	:host([icon='pass']):before {
		content: '\\eba4';
	}
	:host([icon='issue-closed']):before {
		content: '\\eba4';
	}
	:host([icon='stop-circle']):before {
		content: '\\eba5';
	}
	:host([icon='play-circle']):before {
		content: '\\eba6';
	}
	:host([icon='record']):before {
		content: '\\eba7';
	}
	:host([icon='debug-alt-small']):before {
		content: '\\eba8';
	}
	:host([icon='vm-connect']):before {
		content: '\\eba9';
	}
	:host([icon='cloud']):before {
		content: '\\ebaa';
	}
	:host([icon='merge']):before {
		content: '\\ebab';
	}
	:host([icon='export']):before {
		content: '\\ebac';
	}
	:host([icon='graph-left']):before {
		content: '\\ebad';
	}
	:host([icon='magnet']):before {
		content: '\\ebae';
	}
	:host([icon='notebook']):before {
		content: '\\ebaf';
	}
	:host([icon='redo']):before {
		content: '\\ebb0';
	}
	:host([icon='check-all']):before {
		content: '\\ebb1';
	}
	:host([icon='pinned-dirty']):before {
		content: '\\ebb2';
	}
	:host([icon='pass-filled']):before {
		content: '\\ebb3';
	}
	:host([icon='circle-large-filled']):before {
		content: '\\ebb4';
	}
	:host([icon='circle-large-outline']):before {
		content: '\\ebb5';
	}
	:host([icon='combine']):before {
		content: '\\ebb6';
	}
	:host([icon='gather']):before {
		content: '\\ebb6';
	}
	:host([icon='table']):before {
		content: '\\ebb7';
	}
	:host([icon='variable-group']):before {
		content: '\\ebb8';
	}
	:host([icon='type-hierarchy']):before {
		content: '\\ebb9';
	}
	:host([icon='type-hierarchy-sub']):before {
		content: '\\ebba';
	}
	:host([icon='type-hierarchy-super']):before {
		content: '\\ebbb';
	}
	:host([icon='git-pull-request-create']):before {
		content: '\\ebbc';
	}
	:host([icon='run-above']):before {
		content: '\\ebbd';
	}
	:host([icon='run-below']):before {
		content: '\\ebbe';
	}
	:host([icon='notebook-template']):before {
		content: '\\ebbf';
	}
	:host([icon='debug-rerun']):before {
		content: '\\ebc0';
	}
	:host([icon='workspace-trusted']):before {
		content: '\\ebc1';
	}
	:host([icon='workspace-untrusted']):before {
		content: '\\ebc2';
	}
	:host([icon='workspace-unknown']):before {
		content: '\\ebc3';
	}
	:host([icon='terminal-cmd']):before {
		content: '\\ebc4';
	}
	:host([icon='terminal-debian']):before {
		content: '\\ebc5';
	}
	:host([icon='terminal-linux']):before {
		content: '\\ebc6';
	}
	:host([icon='terminal-powershell']):before {
		content: '\\ebc7';
	}
	:host([icon='terminal-tmux']):before {
		content: '\\ebc8';
	}
	:host([icon='terminal-ubuntu']):before {
		content: '\\ebc9';
	}
	:host([icon='terminal-bash']):before {
		content: '\\ebca';
	}
	:host([icon='arrow-swap']):before {
		content: '\\ebcb';
	}
	:host([icon='copy']):before {
		content: '\\ebcc';
	}
	:host([icon='person-add']):before {
		content: '\\ebcd';
	}
	:host([icon='filter-filled']):before {
		content: '\\ebce';
	}
	:host([icon='wand']):before {
		content: '\\ebcf';
	}
	:host([icon='debug-line-by-line']):before {
		content: '\\ebd0';
	}
	:host([icon='inspect']):before {
		content: '\\ebd1';
	}
	:host([icon='layers']):before {
		content: '\\ebd2';
	}
	:host([icon='layers-dot']):before {
		content: '\\ebd3';
	}
	:host([icon='layers-active']):before {
		content: '\\ebd4';
	}
	:host([icon='compass']):before {
		content: '\\ebd5';
	}
	:host([icon='compass-dot']):before {
		content: '\\ebd6';
	}
	:host([icon='compass-active']):before {
		content: '\\ebd7';
	}
	:host([icon='azure']):before {
		content: '\\ebd8';
	}
	:host([icon='issue-draft']):before {
		content: '\\ebd9';
	}
	:host([icon='git-pull-request-closed']):before {
		content: '\\ebda';
	}
	:host([icon='git-pull-request-draft']):before {
		content: '\\ebdb';
	}
	:host([icon='debug-all']):before {
		content: '\\ebdc';
	}
	:host([icon='debug-coverage']):before {
		content: '\\ebdd';
	}
	:host([icon='run-errors']):before {
		content: '\\ebde';
	}
	:host([icon='folder-library']):before {
		content: '\\ebdf';
	}
	:host([icon='debug-continue-small']):before {
		content: '\\ebe0';
	}
	:host([icon='beaker-stop']):before {
		content: '\\ebe1';
	}
	:host([icon='graph-line']):before {
		content: '\\ebe2';
	}
	:host([icon='graph-scatter']):before {
		content: '\\ebe3';
	}
	:host([icon='pie-chart']):before {
		content: '\\ebe4';
	}
	:host([icon='bracket']):before {
		content: '\\eb0f';
	}
	:host([icon='bracket-dot']):before {
		content: '\\ebe5';
	}
	:host([icon='bracket-error']):before {
		content: '\\ebe6';
	}
	:host([icon='lock-small']):before {
		content: '\\ebe7';
	}
	:host([icon='azure-devops']):before {
		content: '\\ebe8';
	}
	:host([icon='verified-filled']):before {
		content: '\\ebe9';
	}
	:host([icon='newline']):before {
		content: '\\ebea';
	}
	:host([icon='layout']):before {
		content: '\\ebeb';
	}
	:host([icon='layout-activitybar-left']):before {
		content: '\\ebec';
	}
	:host([icon='layout-activitybar-right']):before {
		content: '\\ebed';
	}
	:host([icon='layout-panel-left']):before {
		content: '\\ebee';
	}
	:host([icon='layout-panel-center']):before {
		content: '\\ebef';
	}
	:host([icon='layout-panel-justify']):before {
		content: '\\ebf0';
	}
	:host([icon='layout-panel-right']):before {
		content: '\\ebf1';
	}
	:host([icon='layout-panel']):before {
		content: '\\ebf2';
	}
	:host([icon='layout-sidebar-left']):before {
		content: '\\ebf3';
	}
	:host([icon='layout-sidebar-right']):before {
		content: '\\ebf4';
	}
	:host([icon='layout-statusbar']):before {
		content: '\\ebf5';
	}
	:host([icon='layout-menubar']):before {
		content: '\\ebf6';
	}
	:host([icon='layout-centered']):before {
		content: '\\ebf7';
	}
	:host([icon='target']):before {
		content: '\\ebf8';
	}
	:host([icon='gl-pinned-filled']):before {
		font-family: 'glicons';
		content: '\\f11c';
		/* TODO: see relative positioning needed in every use-case */
		position: relative;
		left: 1px;
	}
	:host([icon='gl-graph']):before {
		font-family: 'glicons';
		content: '\\f102';
	}
	:host([icon='gl-list-auto']):before {
		font-family: 'glicons';
		content: '\\f11a';
	}
	:host([icon='gl-clock']):before {
		font-family: 'glicons';
		content: '\\f11d';
	}

	@keyframes codicon-spin {
		100% {
			transform: rotate(360deg);
		}
	}

	:host([modifier='spin']) {
		/* Use steps to throttle FPS to reduce CPU usage */
		animation: codicon-spin 1.5s steps(30) infinite;
	}
	:host([icon='loading'][modifier='spin']) {
		/* Use steps to throttle FPS to reduce CPU usage */
		animation: codicon-spin 1.5s steps(30) infinite;

		/* custom speed & easing for loading icon */
		animation-duration: 1s !important;
		animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
	}
`;let $r=class extends z{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}sizeChanged(){this.style.setProperty("--code-icon-size",`${this.size}px`)}};function Pr(e,t){const o="function"==typeof t?t:()=>t;return(t,n)=>e(t,n)?o(t,n):null}function Sr(...e){return e.some((e=>(e?.length??0)>0))}xr([R],$r.prototype,"icon",2),xr([R],$r.prototype,"modifier",2),xr([R],$r.prototype,"size",2),$r=xr([q({name:"code-icon",styles:Cr})],$r);const Or=Jt`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`;var Tr=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,Ar=(e,t,o,n)=>{for(var r,s=n>1?void 0:n?Dr(t,o):t,i=e.length-1;i>=0;i--)(r=e[i])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&Tr(t,o,s),s};const Rr=Et`
	<template>
		<div class="top" ?hidden="${e=>!e.hasTopNodes}">
			<slot ${Kt("typeNodes")} name="type"></slot>
			<slot ${Kt("actionsNodes")} name="actions"></slot>
		</div>
		<div class="heading" ?hidden="${e=>!e.hasHeadingNodes}">
			<slot ${Kt("headingNodes")} name="heading"></slot>
		</div>
		<div class="content"><slot></slot></div>
		${Pr((e=>e.caret),Et`<span class="caret"></span>`)}
	</template>
`,Lr=Jt`
	${Or}

	:host {
		position: absolute;
		width: var(--popover-width, 100%);
		max-width: var(--popover-max-width, 30rem);
		padding: 1.2rem 1.2rem 1.2rem;
		/* update with a standardized z-index */
		z-index: 10;

		background-color: var(--popover-bg);

		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	:host([caret]:not([placement~='bottom'])) {
		transform: translateY(0.8rem);
	}

	:host([caret][placement~='bottom']) {
		transform: translateY(-0.8rem);
	}

	.top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		opacity: 0.5;
		margin-top: -0.4rem;
	}

	.heading {
		font-weight: 600;
	}

	.caret {
		position: absolute;
		width: 0;
		height: 0;
		border-left: 0.8rem solid transparent;
		border-right: 0.8rem solid transparent;
		border-bottom: 0.8rem solid var(--popover-bg);
	}

	:host(:not([placement~='bottom'])) .caret {
		bottom: 100%;
	}

	:host([placement~='bottom']) .caret {
		top: 100%;
		transform: rotate(180deg);
	}

	:host(:not([placement~='end'])) .caret {
		left: 1.2rem;
	}

	:host([placement~='end']) .caret {
		right: 1.2rem;
	}
`;let Er=class extends z{constructor(){super(...arguments),this.open=!1,this.caret=!0}get hasTopNodes(){return Sr(this.typeNodes,this.actionsNodes)}get hasHeadingNodes(){return Sr(this.headingNodes)}};Ar([R({mode:"boolean"})],Er.prototype,"open",2),Ar([R({mode:"boolean"})],Er.prototype,"caret",2),Ar([R],Er.prototype,"placement",2),Ar([m],Er.prototype,"typeNodes",2),Ar([m],Er.prototype,"actionsNodes",2),Ar([m],Er.prototype,"headingNodes",2),Ar([v],Er.prototype,"hasTopNodes",1),Ar([v],Er.prototype,"hasHeadingNodes",1),Er=Ar([q({name:"pop-over",template:Rr,styles:Lr})],Er);const Br={toView:function(e){return e.toString()},fromView:function(e){return parseInt(e,10)}};var Fr=Object.defineProperty,_r=Object.getOwnPropertyDescriptor,Mr=(e,t,o,n)=>{for(var r,s=n>1?void 0:n?_r(t,o):t,i=e.length-1;i>=0;i--)(r=e[i])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&Fr(t,o,s),s};const Ir=Et`<template role="region">
	${Pr((e=>!1===e.noHeading),Et`<header>
			<div class="heading" role="heading" aria-level="${e=>e.headingLevel}">
				<slot name="heading"></slot>
				<small class="description"><slot name="description"></slot></small>
			</div>
			${Pr((e=>e.dismissable),Et`<button
					class="dismiss"
					type="button"
					@click="${(e,t)=>e.handleDismiss(t.event)}"
					title="dismiss"
					aria-label="dismiss"
				>
					<code-icon icon="close"></code-icon>
				</button>`)}
		</header>`)}
	<div class="content"><slot></slot></div>
</template>`,Vr=Jt`
	* {
		box-sizing: border-box;
	}

	:host {
		display: block;
		padding: 1.2rem;
		background-color: var(--card-background);
		margin-bottom: 1rem;
		border-radius: 0.4rem;
		background-repeat: no-repeat;
		background-size: cover;
		transition: aspect-ratio linear 100ms, background-color linear 100ms;
	}

	:host(:hover) {
		background-color: var(--card-hover-background);
	}

	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 0.4rem;
		margin-bottom: 1rem;
	}

	.dismiss {
		width: 2rem;
		height: 2rem;
		padding: 0;
		font-size: var(--vscode-editor-font-size);
		line-height: 2rem;
		font-family: inherit;
		border: none;
		color: inherit;
		background: none;
		text-align: left;
		cursor: pointer;
		opacity: 0.5;
		flex: none;
		text-align: center;
	}

	.dismiss:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: 0.2rem;
	}

	.heading {
		text-transform: uppercase;
	}

	.description {
		margin-left: 0.2rem;
		text-transform: none;
		/* color needs to come from some sort property */
		color: #b68cd8;
	}
`;let Nr=class extends z{constructor(){super(...arguments),this.noHeading=!1,this.headingLevel=2,this.dismissable=!1,this.expanded=!0}handleDismiss(e){this.$emit("dismiss")}};Mr([R({attribute:"no-heading",mode:"boolean"})],Nr.prototype,"noHeading",2),Mr([R({attribute:"heading-level",converter:Br})],Nr.prototype,"headingLevel",2),Mr([R({mode:"boolean"})],Nr.prototype,"dismissable",2),Mr([R({mode:"boolean"})],Nr.prototype,"expanded",2),Nr=Mr([q({name:"card-section",template:Ir,styles:Vr})],Nr);const{fromCharCode:jr}=String;new TextEncoder;new Intl.Collator(void 0,{sensitivity:"accent"});new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}).compare;Object.getPrototypeOf((async function(){})).constructor;function zr(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const n=1===t?e:o.plural??`${e}s`;return o.only?n:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${n}`}var qr=Object.defineProperty,Ur=Object.getOwnPropertyDescriptor,Hr=(e,t,o,n)=>{for(var r,s=n>1?void 0:n?Ur(t,o):t,i=e.length-1;i>=0;i--)(r=e[i])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&qr(t,o,s),s};const Gr=Et`
	<div class="header-card__media"><img class="header-card__image" src="${e=>e.image}" alt="GitLens Logo" /></div>
	<h1 class="header-card__title${e=>""===e.name?" logo":""}">
		${Pr((e=>""===e.name),Et`Git<span class="brand">Lens</span> 13`)}
		${Pr((e=>""!==e.name),Et`${e=>e.name}`)}
	</h1>
	<p class="header-card__account">
		<span class="status">
			<span ${Ft("statusNode")} tabindex="-1" class="status-label"
				><span class="repo-access${e=>e.isPro?" is-pro":""}">✨</span>${e=>`${e.planName}${e.daysLeft}`}</span
			>
			<pop-over class="${e=>e.pinStatus?"is-pinned":null}">
				${Pr((e=>e.pinStatus),Et`
						<span slot="type">${e=>e.planName}</span>
						<a
							href="#"
							class="action is-icon"
							slot="actions"
							@click="${(e,t)=>e.dismissStatus(t.event)}"
							title="Dismiss"
							aria-label="Dismiss"
							><code-icon icon="close"></code-icon
						></a>
					`)}
				${e=>e.isPro?"You have access to all GitLens and GitLens+ features on any repo.":"You have access to GitLens+ features on local & public repos, and all other GitLens features on any repo."}
				<br /><br />
				✨ indicates GitLens+ features, <a class="link-inline" href="command:gitlens.plus.learn">learn more</a>
			</pop-over>
		</span>
		<span class="account-actions">
			${Pr((e=>!e.hasAccount),Et`<a class="action" href="command:gitlens.plus.loginOrSignUp">Sign In</a>`)}
			${Pr((e=>e.hasAccount),Et`
					<a
						class="action is-icon"
						href="command:gitlens.plus.manage"
						aria-label="Manage Account"
						title="Manage Account"
						><code-icon icon="account"></code-icon></a
					>&nbsp;<a
						class="action is-icon"
						href="command:gitlens.plus.logout"
						aria-label="Sign Out"
						title="Sign Out"
						><code-icon icon="sign-out"></code-icon
					></a>
				`)}
		</span>
	</p>
	<div
		class="progress header-card__progress"
		role="progressbar"
		aria-valuemax="${e=>e.progressMax}"
		aria-valuenow="${e=>e.progressNow}"
		aria-label="${e=>e.progressNow} of ${e=>e.progressMax} steps completed"
	>
		<div ${Ft("progressNode")} class="progress__indicator"></div>
	</div>
	<span class="actions">
		${Pr((e=>e.state===Mo.FreePreviewTrialExpired),Et`<a class="action is-primary" href="command:gitlens.plus.loginOrSignUp"
				>Extend Pro Trial</a
			>`)}
		${Pr((e=>e.state===Mo.FreeInPreviewTrial||e.state===Mo.FreePlusInTrial||e.state===Mo.FreePlusTrialExpired),Et`<a class="action is-primary" href="command:gitlens.plus.purchase">Upgrade to Pro</a>`)}
		${Pr((e=>e.state===Mo.VerificationRequired),Et`
				<a
					class="action is-primary"
					href="command:gitlens.plus.resendVerification"
					title="Resend Verification Email"
					aria-label="Resend Verification Email"
					>Verify</a
				>&nbsp;<a
					class="action"
					href="command:gitlens.plus.validate"
					title="Refresh Verification Status"
					aria-label="Refresh Verification Status"
					>Refresh</a
				>
			`)}
	</span>
`,Wr=Jt`
	* {
		box-sizing: border-box;
	}

	:host {
		position: relative;
		display: grid;
		/*
		padding: 1rem 1rem 1.2rem;
		background-color: var(--card-background);
		border-radius: 0.4rem;
		*/
		padding: 1rem 0 1.2rem;
		gap: 0 0.8rem;
		grid-template-columns: 3.4rem auto;
		grid-auto-flow: column;
	}

	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		outline-color: var(--focus-border);
	}
	a:hover {
		text-decoration: underline;
	}

	.header-card__media {
		grid-column: 1;
		grid-row: 1 / span 2;
		display: flex;
		align-items: center;
	}

	.header-card__image {
		width: 100%;
		aspect-ratio: 1 / 1;
		border-radius: 50%;
	}

	.header-card__title {
		font-size: var(--vscode-font-size);
		font-weight: 600;
		margin: 0;
	}

	.header-card__title.logo {
		font-family: 'Segoe UI Semibold', var(--font-family);
		font-size: 1.5rem;
	}

	.header-card__account {
		position: relative;
		margin: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 0 0.4rem;
	}

	.progress {
		width: 100%;
		overflow: hidden;
	}

	:host-context(.vscode-high-contrast) .progress,
	:host-context(.vscode-dark) .progress {
		background-color: var(--color-background--lighten-15);
	}

	:host-context(.vscode-high-contrast-light) .progress,
	:host-context(.vscode-light) .progress {
		background-color: var(--color-background--darken-15);
	}

	.progress__indicator {
		height: 4px;
		background-color: var(--vscode-progressBar-background);
	}

	.header-card__progress {
		position: absolute;
		bottom: 0;
		left: 0;
		/*
		border-bottom-left-radius: 0.4rem;
		border-bottom-right-radius: 0.4rem;
		*/
	}

	.brand {
		color: var(--gitlens-brand-color-2);
	}
	.status {
		color: var(--color-foreground--65);
	}

	.status-label {
		cursor: help;
	}

	.status pop-over {
		top: 1.6em;
		left: 0;
	}
	.status-label:not(:hover) + pop-over:not(.is-pinned) {
		display: none;
	}

	.repo-access {
		font-size: 1.1em;
		margin-right: 0.2rem;
	}
	.repo-access:not(.is-pro) {
		filter: grayscale(1) brightness(0.7);
	}

	.actions {
		position: absolute;
		right: 0.1rem;
		top: 0.1rem;
	}

	.action {
		display: inline-block;
		padding: 0.2rem 0.6rem;
		border-radius: 0.3rem;
		color: var(--color-foreground--75);
	}
	:host-context(.vscode-high-contrast) .action.is-primary,
	:host-context(.vscode-dark) .action.is-primary {
		border: 1px solid var(--color-background--lighten-15);
	}

	:host-context(.vscode-high-contrast-light) .action.is-primary,
	:host-context(.vscode-light) .action.is-primary {
		border: 1px solid var(--color-background--darken-15);
	}

	.action.is-icon {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 2.2rem;
		height: 2.2rem;
		padding: 0;
	}
	.action:hover {
		text-decoration: none;
		color: var(--color-foreground);
	}

	:host-context(.vscode-high-contrast) .action:hover,
	:host-context(.vscode-dark) .action:hover {
		background-color: var(--color-background--lighten-10);
	}

	:host-context(.vscode-high-contrast-light) .action:hover,
	:host-context(.vscode-light) .action:hover {
		background-color: var(--color-background--darken-10);
	}

	pop-over .action {
		margin-right: -0.2rem;
	}

	.link-inline {
		color: inherit;
		text-decoration: underline;
	}
	.link-inline:hover {
		color: var(--vscode-textLink-foreground);
	}
`;let Qr=class extends z{constructor(){super(...arguments),this.image="",this.name="",this.days=0,this.steps=4,this.completed=0,this.state=Mo.Free,this.plan="",this.pinStatus=!0}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),t!==o&&null!=this.progressNode&&this.updateProgressWidth()}get daysRemaining(){return this.days<1?"<1 day":zr("day",this.days)}get progressNow(){return this.completed+1}get progressMax(){return this.steps+1}get progress(){return this.progressNow/this.progressMax*100+"%"}get planName(){switch(this.state){case Mo.Free:case Mo.FreePreviewTrialExpired:case Mo.FreePlusTrialExpired:return"GitLens Free";case Mo.FreeInPreviewTrial:case Mo.FreePlusInTrial:return"GitLens Pro (Trial)";case Mo.VerificationRequired:return`${this.plan} (Unverified)`;default:return this.plan}}get daysLeft(){switch(this.state){case Mo.FreeInPreviewTrial:case Mo.FreePlusInTrial:return`, ${this.daysRemaining} left`;default:return""}}get hasAccount(){switch(this.state){case Mo.Free:case Mo.FreePreviewTrialExpired:case Mo.FreeInPreviewTrial:return!1}return!0}get isPro(){switch(this.state){case Mo.Free:case Mo.FreePreviewTrialExpired:case Mo.FreePlusTrialExpired:case Mo.VerificationRequired:return!1}return!0}updateProgressWidth(){this.progressNode.style.width=this.progress}dismissStatus(e){this.pinStatus=!1,this.$emit("dismiss-status"),window.requestAnimationFrame((()=>{this.statusNode?.focus()}))}};Hr([R],Qr.prototype,"image",2),Hr([R],Qr.prototype,"name",2),Hr([R({converter:Br})],Qr.prototype,"days",2),Hr([R({converter:Br})],Qr.prototype,"steps",2),Hr([R({converter:Br})],Qr.prototype,"completed",2),Hr([R({converter:Br})],Qr.prototype,"state",2),Hr([R],Qr.prototype,"plan",2),Hr([R({attribute:"pin-status",mode:"boolean"})],Qr.prototype,"pinStatus",2),Hr([v],Qr.prototype,"progress",1),Hr([v],Qr.prototype,"planName",1),Hr([v],Qr.prototype,"daysLeft",1),Qr=Hr([q({name:"header-card",template:Gr,styles:Wr})],Qr);var Yr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,Zr=(e,t,o,n)=>{for(var r,s=n>1?void 0:n?Kr(t,o):t,i=e.length-1;i>=0;i--)(r=e[i])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&Yr(t,o,s),s};const Jr=Et`
	${Pr((e=>e.state===Mo.Free),Et`
			<h3>
				<a title="Learn more about GitLens+ features" href="command:gitlens.plus.learn"
					>Powerful, additional features</a
				>
				that enhance your GitLens experience.
			</h3>

			<p class="mb-1">
				<vscode-button @click="${e=>e.fireAction("command:gitlens.plus.startPreviewTrial")}"
					>Try GitLens+ features on private repos</vscode-button
				>
			</p>
		`)}
	${Pr((e=>e.state===Mo.Paid),Et`
			<h3>Welcome to ${e=>e.planName}!</h3>
			<p class="mb-0">
				You have access to
				<a title="Learn more about GitLens+ features" href="command:gitlens.plus.learn">GitLens+ features</a>
				on any repo.
			</p>
		`)}
	${Pr((e=>e.state===Mo.FreeInPreviewTrial),Et`
			<h3>GitLens Pro Trial</h3>
			<p>
				You have ${e=>e.daysRemaining} left in your 3-day GitLens Pro trial. Don't worry if you need more
				time, you can extend your trial for an additional free 7-days of
				<a title="Learn more about GitLens+ features" href="command:gitlens.plus.learn">GitLens+ features</a> on
				private repos.
			</p>
			<p class="mb-1">
				<vscode-button @click="${e=>e.fireAction("command:gitlens.plus.purchase")}"
					>Upgrade to Pro</vscode-button
				>
			</p>
		`)}
	${Pr((e=>e.state===Mo.FreePlusInTrial),Et`
			<h3>GitLens Pro Trial</h3>
			<p class="mb-1">
				You have ${e=>e.daysRemaining} left in your GitLens Pro trial. Once your trial ends, you'll continue
				to have access to
				<a title="Learn more about GitLens+ features" href="command:gitlens.plus.learn">GitLens+ features</a> on
				local and public repos, while upgrading to GitLens Pro gives you access on private repos.
			</p>
		`)}
	${Pr((e=>e.state===Mo.FreePreviewTrialExpired),Et`
			<h3>Extend Your GitLens Pro Trial</h3>
			<p>
				Your free 3-day GitLens Pro trial has ended, extend your trial to get an additional free 7-days of
				GitLens+ features on private repos.
			</p>
			<p class="mb-1">
				<vscode-button @click="${e=>e.fireAction("command:gitlens.plus.loginOrSignUp")}"
					>Extend Pro Trial</vscode-button
				>
			</p>
		`)}
	${Pr((e=>e.state===Mo.FreePlusTrialExpired),Et`
			<h3>GitLens Pro Trial Expired</h3>
			<p>
				Your GitLens Pro trial has ended, please upgrade to GitLens Pro to continue to use GitLens+ features on
				private repos.
			</p>
			<p class="mb-1">
				<vscode-button @click="${e=>e.fireAction("command:gitlens.plus.purchase")}"
					>Upgrade to Pro</vscode-button
				>
			</p>
		`)}
	${Pr((e=>e.state===Mo.VerificationRequired),Et`
			<h3>Please verify your email</h3>
			<p class="alert__message">
				Before you can also use GitLens+ features on private repos, please verify your email address.
			</p>
			<p class="mb-1">
				<vscode-button @click="${e=>e.fireAction("command:gitlens.plus.resendVerification")}"
					>Resend Verification Email</vscode-button
				>
			</p>
			<p class="mb-1">
				<vscode-button @click="${e=>e.fireAction("command:gitlens.plus.validate")}"
					>Refresh Verification Status</vscode-button
				>
			</p>
		`)}
	${Pr((e=>[Mo.Free,Mo.FreePreviewTrialExpired,Mo.FreePlusTrialExpired].includes(e.state)),Et`
			<p class="mb-0">
				${Pr((e=>e.plus),Et`<a class="minimal" href="command:gitlens.plus.hide">Hide GitLens+ features</a>`)}
				${Pr((e=>!e.plus),Et`<a href="command:gitlens.plus.restore">Restore GitLens+ features</a>`)}
			</p>
		`)}
`,Xr=Jt`
	* {
		box-sizing: border-box;
	}

	:host {
		display: block;
		text-align: center;
	}

	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		outline-color: var(--focus-border);
	}
	a:hover {
		text-decoration: underline;
	}

	h3,
	p {
		margin-top: 0;
	}

	h3 a {
		color: inherit;
		text-decoration: underline;
		text-decoration-color: var(--color-foreground--50);
	}

	h3 a:hover {
		text-decoration-color: inherit;
	}

	.mb-1 {
		margin-bottom: 0.4rem;
	}
	.mb-0 {
		margin-bottom: 0;
	}

	.minimal {
		color: var(--color-foreground--50);
		font-size: 1rem;
		position: relative;
		top: -0.2rem;
	}
`;let es=class extends z{constructor(){super(...arguments),this.days=0,this.state=Mo.Free,this.plan="",this.visibility="public",this.plus=!0}get daysRemaining(){return this.days<1?"less than one day":zr("day",this.days)}get isFree(){return["local","public"].includes(this.visibility)}get planName(){switch(this.state){case Mo.Free:case Mo.FreePreviewTrialExpired:case Mo.FreePlusTrialExpired:return"GitLens Free";case Mo.FreeInPreviewTrial:case Mo.FreePlusInTrial:return"GitLens Pro (Trial)";case Mo.VerificationRequired:return`${this.plan} (Unverified)`;default:return this.plan}}fireAction(e){this.$emit("action",e)}};Zr([R({converter:Br})],es.prototype,"days",2),Zr([R({converter:Br})],es.prototype,"state",2),Zr([R],es.prototype,"plan",2),Zr([R],es.prototype,"visibility",2),Zr([R({mode:"boolean"})],es.prototype,"plus",2),Zr([v],es.prototype,"planName",1),es=Zr([q({name:"plus-banner",template:Jr,styles:Xr})],es);var ts=Object.defineProperty,os=Object.getOwnPropertyDescriptor,ns=(e,t,o,n)=>{for(var r,s=n>1?void 0:n?os(t,o):t,i=e.length-1;i>=0;i--)(r=e[i])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&ts(t,o,s),s};const rs=Et`
	<div class="icon"><code-icon icon="info"></code-icon></div>
	<div class="content">
		${Pr((e=>e.state===Mo.Free),Et`
				<p class="mb-1">
					<a title="Learn more about GitLens+ features" href="command:gitlens.plus.learn"
						>GitLens+ features</a
					>
					are free for local and public repos, no account required, while upgrading to GitLens Pro gives you
					access on private repos.
				</p>
				<p class="mb-0">All other GitLens features can always be used on any repo.</p>
			`)}
		${Pr((e=>e.state!==Mo.Free),Et` <p class="mb-0">All other GitLens features can always be used on any repo</p> `)}
	</div>
`,ss=Jt`
	* {
		box-sizing: border-box;
	}

	:host {
		display: flex;
		flex-direction: row;
		padding: 0.8rem 1.2rem;
		background-color: var(--color-alert-neutralBackground);
		border-left: 0.3rem solid var(--color-foreground--50);
		color: var(--color-alert-foreground);
	}

	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		outline-color: var(--focus-border);
	}
	a:hover {
		text-decoration: underline;
	}

	p {
		margin-top: 0;
	}

	.icon {
		display: none;
		flex: none;
		margin-right: 0.4rem;
	}

	.icon code-icon {
		font-size: 2.4rem;
		margin-top: 0.2rem;
	}

	.content {
		font-size: 1.2rem;
		line-height: 1.2;
		text-align: left;
	}

	.mb-1 {
		margin-bottom: 0.8rem;
	}
	.mb-0 {
		margin-bottom: 0;
	}
`;let is=class extends z{constructor(){super(...arguments),this.days=0,this.state=Mo.Free,this.plan="",this.visibility="public"}get daysRemaining(){return this.days<1?"less than one day":zr("day",this.days)}get isFree(){return["local","public"].includes(this.visibility)}get planName(){switch(this.state){case Mo.Free:case Mo.FreePreviewTrialExpired:case Mo.FreePlusTrialExpired:return"GitLens Free";case Mo.FreeInPreviewTrial:case Mo.FreePlusInTrial:return"GitLens Pro (Trial)";case Mo.VerificationRequired:return`${this.plan} (Unverified)`;default:return this.plan}}fireAction(e){this.$emit("action",e)}};ns([R({converter:Br})],is.prototype,"days",2),ns([R({converter:Br})],is.prototype,"state",2),ns([R],is.prototype,"plan",2),ns([R],is.prototype,"visibility",2),ns([v],is.prototype,"planName",1),is=ns([q({name:"plus-content",template:rs,styles:ss})],is);var as=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,ls=(e,t,o,n)=>{for(var r,s=n>1?void 0:n?cs(t,o):t,i=e.length-1;i>=0;i--)(r=e[i])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&as(t,o,s),s};const hs=Et`<template role="region">
	<header class="heading" role="heading" aria-level="${e=>e.headingLevel}">
		<button
			id="button"
			class="button"
			type="button"
			aria-expanded="${e=>!e.completed}"
			aria-controls="content"
			@click="${(e,t)=>e.handleClick(t.event)}"
		>
			<slot name="heading"></slot>
			<span class="description"><slot name="description"></slot></span>
		</button>
	</header>
	<div class="content${e=>e.completed?" is-hidden":""}" id="content" aria-labelledby="button">
		<slot></slot>
	</div>
	<span class="checkline">
		<span
			class="checkbox"
			title="${e=>e.completed?"Uncheck step":"Check step"}"
			@click="${(e,t)=>e.handleClick(t.event)}"
			><code-icon
				class="check-icon"
				icon="${e=>e.completed?"pass-filled":"circle-large-outline"}"
			></code-icon
			><code-icon class="check-hover-icon" icon="${e=>e.completed?"pass-filled":"pass"}"></code-icon
		></span>
	</span>
</template>`,ds=Jt`
	* {
		box-sizing: border-box;
	}

	:host {
		display: grid;
		gap: 0 0.8rem;
		grid-template-columns: 16px auto;
		grid-auto-flow: column;
		margin-bottom: 2.4rem;
	}

	.button {
		width: 100%;
		padding: 0.1rem 0 0 0;
		font-size: var(--vscode-editor-font-size);
		line-height: 1.6rem;
		font-family: inherit;
		border: none;
		color: inherit;
		background: none;
		text-align: left;
		text-transform: uppercase;
		cursor: pointer;
	}

	.button:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: 0.2rem;
	}

	.checkline {
		position: relative;
		grid-column: 1;
		grid-row: 1 / span 2;
		color: var(--vscode-textLink-foreground);
	}

	:host(:not(:last-of-type)) .checkline:after {
		content: '';
		position: absolute;
		border-left: 0.1rem solid currentColor;
		width: 0;
		top: 1.6rem;
		bottom: -2.4rem;
		left: 50%;
		transform: translateX(-50%);
		opacity: 0.3;
	}

	.checkbox {
		cursor: pointer;
	}
	.checkbox code-icon {
		pointer-events: none;
	}

	.heading:hover ~ .checkline .check-icon,
	.checkbox:hover .check-icon {
		display: none;
	}

	.check-hover-icon {
		display: none;
	}
	.heading:hover ~ .checkline .check-hover-icon,
	.checkbox:hover .check-hover-icon {
		display: unset;
	}

	.content {
		margin-top: 1rem;
	}

	.content.is-hidden {
		display: none;
	}

	.description {
		margin-left: 0.6rem;
		text-transform: none;
		opacity: 0.5;
	}
`;let us=class extends z{constructor(){super(...arguments),this.headingLevel=2,this.completed=!1}handleClick(e){this.completed=!this.completed,this.$emit("complete",this.completed)}};ls([R({attribute:"heading-level",converter:Br})],us.prototype,"headingLevel",2),ls([R({mode:"boolean"})],us.prototype,"completed",2),us=ls([q({name:"stepped-section",template:hs,styles:ds})],us);class fs extends yr{constructor(){super("HomeApp")}onInitialize(){var e;nt.getOrCreate(e).withPrefix("vscode").register(_o()),this.$steps=[...document.querySelectorAll("stepped-section[id]")],this.$cards=[...document.querySelectorAll("card-section[id]")],this.updateState()}onBind(){const e=super.onBind?.()??[];return e.push(jn.on("[data-action]","click",((e,t)=>this.onDataActionClicked(e,t)))),e.push(jn.on("plus-banner","action",((e,t)=>this.onPlusActionClicked(e,t)))),e.push(jn.on("stepped-section","complete",((e,t)=>this.onStepComplete(e,t)))),e.push(jn.on("card-section","dismiss",((e,t)=>this.onCardDismissed(e,t)))),e.push(jn.on("header-card","dismiss-status",((e,t)=>this.onStatusDismissed(e,t)))),e.push(jn.on("[data-banner-dismiss]","click",((e,t)=>this.onBannerDismissed(e,t)))),e}onMessageReceived(e){const t=e.data;switch(t.method){case Zo.method:this.log(`onMessageReceived(${t.id}): name=${t.method}`),qo(Zo,t,(e=>{this.state.subscription=e.subscription,this.state.completedActions=e.completedActions,this.state.avatar=e.avatar,this.state.pinStatus=e.pinStatus,this.updateState()}));break;case Jo.method:this.log(`onMessageReceived(${t.id}): name=${t.method}`),qo(Jo,t,(e=>{this.state.extensionEnabled=e.extensionEnabled,this.updateNoRepo()}));break;case Xo.method:this.log(`onMessageReceived(${t.id}): name=${t.method}`),qo(Xo,t,(e=>{this.state.plusEnabled=e.plusEnabled,this.updatePlusContent()}));break;case en.method:this.log(`onMessageReceived(${t.id}): name=${t.method}`),qo(en,t,(e=>{this.state.layout=e.layout,this.updateLayout()}));break;default:super.onMessageReceived?.(e)}}onStepComplete(e,t){const o=t.id,n=e.detail??!1;this.state.completedSteps=bs(this.state.completedSteps,o,n),this.sendCommand(Wo,{id:o,completed:n}),this.updateState()}onCardDismissed(e,t){const o=t.id;this.state.dismissedSections=bs(this.state.dismissedSections,o),this.sendCommand(Qo,{id:o}),this.updateState()}onStatusDismissed(e,t){this.state.pinStatus=!1,this.sendCommand(Yo,void 0),this.updateHeader()}onBannerDismissed(e,t){const o=t.getAttribute("data-banner-dismiss");null==o||this.state.dismissedBanners?.includes(o)||(this.state.dismissedBanners=this.state.dismissedBanners??[],this.state.dismissedBanners.push(o),this.sendCommand(Ko,{id:o}),this.updateBanners())}onDataActionClicked(e,t){const o=t.dataset.action;this.onActionClickedCore(o)}onPlusActionClicked(e,t){this.onActionClickedCore(e.detail)}onActionClickedCore(e){e?.startsWith("command:")&&this.sendCommand(Go,{command:e.slice(8)})}getDaysRemaining(){return[Mo.FreeInPreviewTrial,Mo.FreePlusInTrial].includes(this.state.subscription.state)?Io(this.state.subscription,"days")??0:0}forceShowPlus(){return[Mo.FreePreviewTrialExpired,Mo.FreePlusTrialExpired,Mo.VerificationRequired].includes(this.state.subscription.state)}updateHeader(e=this.getDaysRemaining(),t=this.forceShowPlus()){const{subscription:o,completedSteps:n,avatar:r,pinStatus:s}=this.state,i=document.getElementById("header-card");if(i){r&&i.setAttribute("image",r),i.setAttribute("name",o.account?.name??"");const a=this.$steps?.length??0;let c=n?.length??0;if(a>0&&c>0){const e=this.$steps.map((e=>e.id)),o=n.filter((t=>e.includes(t)));c=o.length,t&&o.includes("plus")&&(c-=1)}i.setAttribute("steps",a.toString()),i.setAttribute("completed",c.toString()),i.setAttribute("state",o.state.toString()),i.setAttribute("plan",o.plan.effective.name),i.setAttribute("days",e.toString()),i.pinStatus=s}}updateBanners(){const e=[...document.querySelectorAll("[data-banner]")];if(!e.length)return;const{dismissedBanners:t}=this.state;e.forEach((e=>{const o=e.getAttribute("data-banner");null!==o&&t?.includes(o)?e.setAttribute("hidden","true"):e.removeAttribute("hidden")}))}updateNoRepo(){const{extensionEnabled:e}=this.state,t=document.getElementById("no-repo");t&&t.setAttribute("aria-hidden",e?"true":"false")}updateLayout(){const{layout:e}=this.state;[...document.querySelectorAll("[data-gitlens-layout]")].forEach((t=>{const o=t.getAttribute("data-gitlens-layout");t.classList.toggle("is-active",o===e)}))}updatePlusContent(e=this.getDaysRemaining()){const{subscription:t,visibility:o,plusEnabled:n}=this.state;let r=document.getElementById("plus-banner");r&&(r.setAttribute("days",e.toString()),r.setAttribute("state",t.state.toString()),r.setAttribute("visibility",o),r.setAttribute("plan",t.plan.effective.name),r.setAttribute("plus",n.toString())),r=document.getElementById("plus-content"),r&&(r.setAttribute("days",e.toString()),r.setAttribute("state",t.state.toString()),r.setAttribute("visibility",o),r.setAttribute("plan",t.plan.effective.name))}updateSteps(e=this.forceShowPlus()){null!=this.$steps&&0!==this.$steps.length&&null!=this.state.completedSteps&&0!==this.state.completedSteps.length&&this.$steps.forEach((t=>{t.setAttribute("completed","plus"===t.id&&e||!0!==this.state.completedSteps?.includes(t.id)?"false":"true")}))}updateSections(){null!=this.$cards&&0!==this.$cards.length&&null!=this.state.dismissedSections&&0!==this.state.dismissedSections.length&&this.state.dismissedSections.forEach((e=>{const t=this.$cards.findIndex((t=>t.id===e));t>-1&&(this.$cards[t].remove(),this.$cards.splice(t,1))}))}updateState(){const{completedSteps:e,dismissedSections:t}=this.state;this.updateNoRepo(),this.updateLayout();const o=e?.length||t?.length;document.getElementById("restore-welcome")?.classList.toggle("hide",!o);const n=this.forceShowPlus(),r=this.getDaysRemaining();this.updateHeader(r,n),this.updatePlusContent(r),this.updateSteps(n),this.updateSections(),this.updateBanners()}}function bs(e=[],t,o=!0){const n=e.includes(t);return!n&&o?e.push(t):n&&!o&&e.splice(e.indexOf(t),1),e}new fs;var ps=t.z;export{ps as HomeApp};