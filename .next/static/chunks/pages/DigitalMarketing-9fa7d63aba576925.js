(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[456],{7190:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/DigitalMarketing",function(){return r(9588)}])},5677:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return a},default:function(){return u}});let l=r(8754),n=(r(7294),l._(r(8976)));function o(e){return{default:(null==e?void 0:e.default)||e}}function a(e,t){return delete t.webpack,delete t.modules,e(t)}function u(e,t){let r=n.default,l={loading:e=>{let{error:t,isLoading:r,pastDelay:l}=e;return null}};e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l={...l,...e}),l={...l,...t};let u=l.loader,i=()=>null!=u?u().then(o):Promise.resolve(o(()=>null));return(l.loadableGenerated&&(l={...l,...l.loadableGenerated},delete l.loadableGenerated),"boolean"!=typeof l.ssr||l.ssr)?r({...l,loader:i}):(delete l.webpack,delete l.modules,a(r,l))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return o}});let l=r(8754),n=l._(r(7294)),o=n.default.createContext(null)},8976:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let l=r(8754),n=l._(r(7294)),o=r(2254),a=[],u=[],i=!1;function s(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),l=null;function a(){if(!l){let t=new d(e,r);l={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return l.promise()}if(!i){let e=r.webpack?r.webpack():r.modules;e&&u.push(t=>{for(let r of e)if(t.includes(r))return a()})}function s(e,t){!function(){a();let e=n.default.useContext(o.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let u=n.default.useSyncExternalStore(l.subscribe,l.getCurrentValue,l.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:l.retry}),[]),n.default.useMemo(()=>{var t;return u.loading||u.error?n.default.createElement(r.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:l.retry}):u.loaded?n.default.createElement((t=u.loaded)&&t.default?t.default:t,e):null},[e,u])}return s.preload=()=>a(),s.displayName="LoadableComponent",n.default.forwardRef(s)}(s,e)}function f(e,t){let r=[];for(;e.length;){let l=e.pop();r.push(l(t))}return Promise.all(r).then(()=>{if(e.length)return f(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{f(a).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(i=!0,t());f(u,e).then(r,r)})),window.__NEXT_PRELOADREADY=c.preloadReady;let _=c},9588:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return s}});var l=r(5893),n=r(62),o=r(5152),a=r.n(o);let u=a()(()=>Promise.all([r.e(18),r.e(334)]).then(r.bind(r,8405)),{loadableGenerated:{webpack:()=>[8405]},ssr:!1}),i=e=>(0,l.jsx)(n.Z,{noFooter:!0,children:(0,l.jsx)(u,{projects:e.projects})});var s=!0;t.default=i},5152:function(e,t,r){e.exports=r(5677)}},function(e){e.O(0,[802,310,62,774,888,179],function(){return e(e.s=7190)}),_N_E=e.O()}]);