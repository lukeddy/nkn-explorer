(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{293:function(t,e,r){var content=r(329);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("3dcc3b0e",content,!0,{sourceMap:!1})},296:function(t,e,r){"use strict";var n={components:{},props:{},data:function(){return{}},mounted:function(){},methods:{}},o=(r(351),r(0)),component=Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"card-container"},[this._t("default")],2)},[],!1,null,null,null);e.a=component.exports},297:function(t,e,r){"use strict";var n={components:{},props:{width:{type:String,default:"full"},border:{type:Boolean,default:!1}},data:function(){return{}},mounted:function(){},methods:{}},o=(r(328),r(0)),component=Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"card",class:[this.width?"card_width_"+this.width:null,this.border?"card_border":null]},[this._t("default")],2)},[],!1,null,null,null);e.a=component.exports},299:function(t,e,r){"use strict";var n=r(7),o=r(24),c=r(29),l=r(148),d=r(74),_=r(17),f=r(75).f,h=r(105).f,v=r(18).f,m=r(330).trim,y=n.Number,x=y,w=y.prototype,C="Number"==c(r(104)(w)),k="trim"in String.prototype,$=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=k?e.trim():m(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,_=l.length;i<_;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof y&&(C?_(function(){w.valueOf.call(r)}):"Number"!=c(r))?l(new x($(e)),r,y):$(e)};for(var z,T=r(14)?f(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;T.length>N;N++)o(x,z=T[N])&&!o(y,z)&&v(y,z,h(x,z));y.prototype=w,w.constructor=y,r(19)(n,"Number",y)}},303:function(t,e,r){var content=r(352);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("3d1020e3",content,!0,{sourceMap:!1})},307:function(t,e,r){"use strict";r(299);var n=r(296),o={components:{ContentLoader:r(320).a,CardContainer:n.a},props:{count:{type:Number,default:1},container:{type:Boolean,default:!0}},data:function(){return{}},mounted:function(){},methods:{}},c=r(0),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.container?null:"card_width_full"},[t.container?r("CardContainer",t._l(t.count,function(i){return r("ContentLoader",{key:i,staticClass:"card_width_full",attrs:{primaryColor:"#fff",secondaryColor:"#BDBDBD",speed:1,height:112,width:1400}},[r("rect",{attrs:{x:"83",y:"22",rx:"4",ry:"4",width:"117",height:"6"}}),t._v(" "),r("rect",{attrs:{x:"83",y:"41",rx:"3",ry:"3",width:"85",height:"6"}}),t._v(" "),r("rect",{attrs:{x:"19",y:"78.67",rx:"3",ry:"3",width:"1288",height:"6.3"}}),t._v(" "),r("rect",{attrs:{x:"19",y:"95.67",rx:"3",ry:"3",width:"1136.2",height:"6.3"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"120",rx:"3",ry:"3",width:"201",height:"6"}}),t._v(" "),r("rect",{attrs:{x:"17.84",y:"19.67",rx:"0",ry:"0",width:"51.81",height:"47"}}),t._v(" "),r("rect",{attrs:{x:"218",y:"22",rx:"3",ry:"3",width:"85",height:"6"}})])}),1):t._l(t.count,function(i){return r("ContentLoader",{key:i,staticClass:"card_width_full",attrs:{primaryColor:"#fff",secondaryColor:"#BDBDBD",speed:1,height:112,width:1400}},[r("rect",{attrs:{x:"83",y:"22",rx:"4",ry:"4",width:"117",height:"6"}}),t._v(" "),r("rect",{attrs:{x:"83",y:"41",rx:"3",ry:"3",width:"85",height:"6"}}),t._v(" "),r("rect",{attrs:{x:"19",y:"78.67",rx:"3",ry:"3",width:"1288",height:"6.3"}}),t._v(" "),r("rect",{attrs:{x:"19",y:"95.67",rx:"3",ry:"3",width:"1136.2",height:"6.3"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"120",rx:"3",ry:"3",width:"201",height:"6"}}),t._v(" "),r("rect",{attrs:{x:"17.84",y:"19.67",rx:"0",ry:"0",width:"51.81",height:"47"}}),t._v(" "),r("rect",{attrs:{x:"218",y:"22",rx:"3",ry:"3",width:"85",height:"6"}})])})],2)},[],!1,null,null,null);e.a=component.exports},320:function(t,e,r){"use strict";r.d(e,"a",function(){return l});var n=r(353),o=r.n(n),c=function(){return Math.random().toString(36).substring(2)},l={name:"ContentLoader",functional:!0,props:{width:{type:Number,default:400},height:{type:Number,default:130},speed:{type:Number,default:2},preserveAspectRatio:{type:String,default:"xMidYMid meet"},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},render:function(t,e){var r=e.props,data=e.data,n=e.children,l=r.uniqueKey?"".concat(r.uniqueKey,"-idClip"):c(),d=r.uniqueKey?"".concat(r.uniqueKey,"-idGradient"):c();return t("svg",o()([data,{attrs:{viewBox:"0 0 ".concat(r.width," ").concat(r.height),version:"1.1",preserveAspectRatio:r.preserveAspectRatio}}]),[t("rect",{style:{fill:"url(#".concat(d,")")},attrs:{"clip-path":"url(#".concat(l,")"),x:"0",y:"0",width:r.width,height:r.height}}),t("defs",[t("clipPath",{attrs:{id:l}},[n||t("rect",{attrs:{x:"0",y:"0",rx:"5",ry:"5",width:r.width,height:r.height}})]),t("linearGradient",{attrs:{id:d}},[t("stop",{attrs:{offset:"0%","stop-color":r.primaryColor}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-2; 1",dur:"".concat(r.speed,"s"),repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"50%","stop-color":r.secondaryColor}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-1.5; 1.5",dur:"".concat(r.speed,"s"),repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"100%","stop-color":r.primaryColor}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-1; 2",dur:"".concat(r.speed,"s"),repeatCount:"indefinite"}}):null])])])])}}},328:function(t,e,r){"use strict";var n=r(293);r.n(n).a},329:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,"@keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes typing{0%{width:0}80%{width:100%}}@keyframes typing{0%{width:0}80%{width:100%}}@-webkit-keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}h1{font-size:1.875rem}h1,h2{font-weight:700}h2{font-size:1.5rem}h3{font-size:1.3125rem}h3,h4{font-weight:700}h4{font-size:1.125rem}h5{font-size:1rem}h5,h6{font-weight:700}h6{font-size:.75rem}.card{padding:16px;background:#fff;border-radius:5px;box-sizing:border-box}.card_width_full{grid-column:span 2}.card_width_half{grid-column:span 1}.card_border{border:1px solid #e0e0e0}",""])},330:function(t,e,r){var n=r(11),o=r(28),c=r(17),l=r(331),d="["+l+"]",_=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),h=function(t,e,r){var o={},d=c(function(){return!!l[t]()||"​"!="​"[t]()}),_=o[t]=d?e(v):l[t];r&&(o[r]=_),n(n.P+n.F*d,"String",o)},v=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(_,"")),2&e&&(t=t.replace(f,"")),t};t.exports=h},331:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},332:function(t,e,r){var content=r(407);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("310fefaf",content,!0,{sourceMap:!1})},333:function(t,e,r){var content=r(410);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("1b826ad2",content,!0,{sourceMap:!1})},334:function(t,e,r){var content=r(413);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("373c4a8c",content,!0,{sourceMap:!1})},351:function(t,e,r){"use strict";var n=r(303);r.n(n).a},352:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,"@keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes typing{0%{width:0}80%{width:100%}}@keyframes typing{0%{width:0}80%{width:100%}}@-webkit-keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}h1{font-size:1.875rem}h1,h2{font-weight:700}h2{font-size:1.5rem}h3{font-size:1.3125rem}h3,h4{font-weight:700}h4{font-size:1.125rem}h5{font-size:1rem}h5,h6{font-weight:700}h6{font-size:.75rem}.card-container{display:grid;grid-gap:8px;grid-template-columns:repeat(2,1fr);padding:16px}",""])},353:function(t,e){var r=/^(attrs|props|on|nativeOn|class|style|hook)$/;function n(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}}t.exports=function(t){return t.reduce(function(a,b){var t,e,o,c,l;for(o in b)if(t=a[o],e=b[o],t&&r.test(o))if("class"===o&&("string"==typeof t&&(l=t,a[o]=t={},t[l]=!0),"string"==typeof e&&(l=e,b[o]=e={},e[l]=!0)),"on"===o||"nativeOn"===o||"hook"===o)for(c in e)t[c]=n(t[c],e[c]);else if(Array.isArray(t))a[o]=t.concat(e);else if(Array.isArray(e))a[o]=[t].concat(e);else for(c in e)t[c]=e[c];else a[o]=b[o];return a},{})}},395:function(t,e,r){"use strict";var n=r(0),o={components:{Back:Object(n.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{width:"7",height:"15",viewBox:"0 0 7 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},this.$listeners),[e("path",{attrs:{d:"M5.837 14.001a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1.001 1.001 0 0 1 1.54 1.28l-4.47 5.36 4.32 5.36a1 1 0 0 1-.78 1.64z",fill:"#BDBDBD"}})])},[],!1,null,null,null).exports},props:{text:{type:String,default:"Back"},route:{type:String,default:"index"}},data:function(){return{}},mounted:function(){},methods:{}},c=(r(406),Object(n.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"get-back",attrs:{to:this.localePath(this.route)}},[e("Back",{staticClass:"get-back__icon"}),this._v("\n  "+this._s(this.text)+"\n")],1)},[],!1,null,null,null));e.a=c.exports},396:function(t,e,r){"use strict";var n={components:{},props:{active:{type:Boolean,default:!1}},data:function(){return{}},mounted:function(){},methods:{}},o=(r(412),r(0)),component=Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"card-switch",class:this.active?"card-switch_active":null},[this._t("default")],2)},[],!1,null,null,null);e.a=component.exports},406:function(t,e,r){"use strict";var n=r(332);r.n(n).a},407:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,"@keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes typing{0%{width:0}80%{width:100%}}@keyframes typing{0%{width:0}80%{width:100%}}@-webkit-keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}h1{font-size:1.875rem}h1,h2{font-weight:700}h2{font-size:1.5rem}h3{font-size:1.3125rem}h3,h4{font-weight:700}h4{font-size:1.125rem}h5{font-size:1rem}h5,h6{font-weight:700}h6{font-size:.75rem}.get-back{display:inline-flex;align-items:center;font-weight:700;color:#bdbdbd}.get-back,.get-back__icon{transition:.4s cubic-bezier(.25,.8,.25,1)}.get-back__icon{margin-right:12px}.get-back__icon path{transition:.4s cubic-bezier(.25,.8,.25,1)}.get-back:hover{color:#1791f2}.get-back:hover .get-back__icon{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.get-back:hover .get-back__icon path{fill:#1791f2}",""])},409:function(t,e,r){"use strict";var n=r(333);r.n(n).a},410:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,'@keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes typing{0%{width:0}80%{width:100%}}@keyframes typing{0%{width:0}80%{width:100%}}@-webkit-keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}h1{font-size:1.875rem}h1,h2{font-weight:700}h2{font-size:1.5rem}h3{font-size:1.3125rem}h3,h4{font-weight:700}h4{font-size:1.125rem}h5{font-size:1rem}h5,h6{font-weight:700}h6{font-size:.75rem}.node-tracing{background:#fff}.node-tracing_spacing{padding:24px 16px}.node-tracing__item{border-radius:5px;padding:12px;position:relative;margin-bottom:16px}.node-tracing__item:not(:last-child):after{content:"";display:block;height:16px;width:1px;background-color:#e0e0e0;position:absolute;bottom:-16px;left:28px}.node-tracing__item_type_send{background:linear-gradient(97.76deg,#0a58e5 4.48%,#4abdff 97.21%)}.node-tracing__item_type_send .node-tracing__heading{color:#fff}.node-tracing__item_type_send .node-tracing__label{color:#1791f2;background-color:#dceffd}.node-tracing__item_type_recieve{background:linear-gradient(101.83deg,#07c881 -5.03%,#58daaa 106.01%)}.node-tracing__item_type_recieve .node-tracing__heading{color:#fff}.node-tracing__item_type_recieve .node-tracing__label{color:#27ae60;background-color:#eaf8f0}.node-tracing__item_type_relay{border:1px solid #e0e0e0}.node-tracing__item_type_relay:after{bottom:-17px!important;left:27px!important}.node-tracing__item_type_relay .node-tracing__label{color:#bb6bd9;background-color:#f5e9f9}.node-tracing__title{display:flex;align-items:center;justify-content:space-between}.node-tracing__icon{margin-right:8px}.node-tracing__header{display:flex;justify-content:space-between;align-items:center}.node-tracing__heading{font-weight:700;font-size:.8125rem;position:relative}.node-tracing__label{padding:8px;font-size:10px;font-weight:700;letter-spacing:.06em;border-radius:4px;text-transform:uppercase}.node-tracing__pk{color:#fff}.node-tracing__addr,.node-tracing__pk{margin-top:12px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:.75rem}.node-tracing__full{display:flex;align-items:center;justify-content:space-between;margin-bottom:24px}.node-tracing__flag{position:absolute;top:-23px;left:42px;border-radius:26px}',""])},412:function(t,e,r){"use strict";var n=r(334);r.n(n).a},413:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,"@keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes typing{0%{width:0}80%{width:100%}}@keyframes typing{0%{width:0}80%{width:100%}}@-webkit-keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}h1{font-size:1.875rem}h1,h2{font-weight:700}h2{font-size:1.5rem}h3{font-size:1.3125rem}h3,h4{font-weight:700}h4{font-size:1.125rem}h5{font-size:1rem}h5,h6{font-weight:700}h6{font-size:.75rem}.card-switch{outline:none;border:none;transition:.4s cubic-bezier(.25,.8,.25,1);padding:12px;font-weight:700;color:#bdbdbd;border-radius:5px;background-color:#fff;cursor:pointer;font-size:16px}.card-switch:hover{color:#1791f2}.card-switch_active{background-color:#f1f2f8;color:#1791f2}",""])},416:function(t,e,r){var content=r(487);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("05b45b36",content,!0,{sourceMap:!1})},417:function(t,e,r){var content=r(489);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("37adda34",content,!0,{sourceMap:!1})},452:function(t,e,r){"use strict";var n=r(30),o=r(0),c=Object(o.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},this.$listeners),[e("path",{attrs:{d:"M18 8.35a1 1 0 0 0-.61-.86l-2.15-.92 2.26-1.3a1 1 0 0 0 .5-.92 1 1 0 0 0-.61-.86l-8-3.41a1 1 0 0 0-.78 0l-8 3.41a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l2.26 1.3-2.15.92a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l2.26 1.3-2.15.92a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l8 4.6a1 1 0 0 0 1 0l8-4.6a1 1 0 0 0 .5-.92.999.999 0 0 0-.61-.86l-2.15-.92 2.26-1.3a1 1 0 0 0 .5-.92zM9 2.09l5.76 2.45L9 7.85 3.24 4.54 9 2.09zm-.5 7.78a1 1 0 0 0 1 0l3.57-2 1.69.72L9 11.85 3.24 8.54l1.69-.72L8.5 9.87zm6.26 2.67L9 15.85l-5.76-3.31 1.69-.72 3.57 2.05a1 1 0 0 0 1 0l3.57-2.05 1.69.72z",fill:"#fff"}})])},[],!1,null,null,null).exports,l=Object(o.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},this.$listeners),[e("path",{attrs:{d:"M5.5 18a1 1 0 0 1-.64-.24A8.81 8.81 0 0 1 1.5 11a8.81 8.81 0 0 1 3.36-6.76 1 1 0 1 1 1.28 1.52A6.9 6.9 0 0 0 3.5 11a6.9 6.9 0 0 0 2.64 5.24 1 1 0 0 1 .13 1.4 1 1 0 0 1-.77.36zM12 7a4.09 4.09 0 0 1 1 .14V3a1 1 0 0 0-2 0v4.14A4.09 4.09 0 0 1 12 7zM12 15a4.09 4.09 0 0 1-1-.14V20a1 1 0 0 0 2 0v-5.14a4.09 4.09 0 0 1-1 .14zM16 16a1 1 0 0 1-.77-.36 1 1 0 0 1 .13-1.4A4.28 4.28 0 0 0 17 11a4.28 4.28 0 0 0-1.64-3.24 1 1 0 1 1 1.28-1.52A6.2 6.2 0 0 1 19 11a6.198 6.198 0 0 1-2.36 4.76A1 1 0 0 1 16 16z",fill:"#BDBDBD"}}),e("path",{attrs:{d:"M8 16a1 1 0 0 1-.64-.24A6.2 6.2 0 0 1 5 11a6.2 6.2 0 0 1 2.36-4.76 1 1 0 1 1 1.28 1.52A4.28 4.28 0 0 0 7 11a4.28 4.28 0 0 0 1.64 3.24 1 1 0 0 1 .13 1.4A1 1 0 0 1 8 16zM18.5 18a1 1 0 0 1-.77-.36 1 1 0 0 1 .13-1.4A6.9 6.9 0 0 0 20.5 11a6.9 6.9 0 0 0-2.64-5.24 1 1 0 1 1 1.28-1.52A8.81 8.81 0 0 1 22.5 11a8.81 8.81 0 0 1-3.36 6.76 1 1 0 0 1-.64.24zM12 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2z",fill:"#BDBDBD"}})])},[],!1,null,null,null).exports,d=r(107),_={components:{Client:c,Relay:l,Button:n.a,CountryFlag:d.a},props:{sigchain:{type:Object,default:function(){return[]}},spacing:{type:Boolean,default:!1},showChain:{type:Boolean,default:!1}},data:function(){return{miners:0,fullChain:!1,senderWallet:"",recieverWallet:""}},mounted:function(){var t=this.sigchain,e=t.sigchain_elems;this.senderWallet=t.srcPubkey,this.recieverWallet=t.destPubkey,this.miners=e.filter(function(i){return 0!=i.mining})},methods:{toggleChain:function(){this.fullChain=!this.fullChain}}},f=(r(409),Object(o.a)(_,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"node-tracing",class:t.spacing?"node-tracing_spacing":null},[t.showChain?r("div",{staticClass:"node-tracing__full"},[r("h3",[t._v(t._s(t.$t("relayedData")))]),t._v(" "),r("Button",{attrs:{type:"button",theme:"ghost"},nativeOn:{click:function(e){return t.toggleChain(e)}}},[t.fullChain?r("span",[t._v(t._s(t.$t("overview")))]):r("span",[t._v(t._s(t.$t("showChain")))])])],1):t._e(),t._v(" "),r("div",{staticClass:"node-tracing__item node-tracing__item_type_send"},[r("div",{staticClass:"node-tracing__header"},[r("div",{staticClass:"node-tracing__title"},[r("Client",{staticClass:"node-tracing__icon"}),t._v(" "),r("span",{staticClass:"node-tracing__heading"},[t._v(t._s(t.$t("client")))])],1),t._v(" "),r("div",{staticClass:"node-tracing__label"},[t._v(t._s(t.$t("sentData")))])]),t._v(" "),r("div",{staticClass:"node-tracing__pk"},[t._v(t._s(t.sigchain.srcPubkey))])]),t._v(" "),t.fullChain?t._l(t.miners,function(e){return r("div",{key:e.signature,staticClass:"node-tracing__item node-tracing__item_type_relay"},[r("div",{staticClass:"node-tracing__header"},[r("div",{staticClass:"node-tracing__title"},[r("Relay",{staticClass:"node-tracing__icon"}),t._v(" "),r("div",{staticClass:"node-tracing__heading"},[t._v("\n            "+t._s(t.$t("node"))+"\n            "),null!=e.country_code2?r("CountryFlag",{staticClass:"node-tracing__flag",attrs:{country:e.country_code2,size:"normal"}}):t._e()],1)],1),t._v(" "),r("div",{staticClass:"node-tracing__label"},[t._v(t._s(t.$t("relayData")))])]),t._v(" "),r("div",{staticClass:"node-tracing__addr"},[t._v(t._s(t.$t("nodePublicKey"))+": "+t._s(e.pubkey))]),t._v(" "),r("div",{staticClass:"node-tracing__addr"},[t._v("\n        "+t._s(t.$t("nodeWalletAddress"))+":\n        "),r("nuxt-link",{staticClass:"node-tracing__addr text_link",attrs:{to:t.localePath({name:"addresses-id",params:{id:e.wallet}})}},[t._v(t._s(e.wallet))])],1)])}):r("div",{staticClass:"node-tracing__item node-tracing__item_type_relay"},[r("div",{staticClass:"node-tracing__header"},[r("div",{staticClass:"node-tracing__title"},[r("Relay",{staticClass:"node-tracing__icon"}),t._v(" "),r("span",{staticClass:"node-tracing__heading"},[t._v(t._s(t.$t("relayNodes")))])],1),t._v(" "),r("div",{staticClass:"node-tracing__label"},[t._v(t._s(t.miners.length)+" "+t._s(t.$t("relayingData")))])])]),t._v(" "),r("div",{staticClass:"node-tracing__item node-tracing__item_type_recieve"},[r("div",{staticClass:"node-tracing__header"},[r("div",{staticClass:"node-tracing__title"},[r("Client",{staticClass:"node-tracing__icon"}),t._v(" "),r("span",{staticClass:"node-tracing__heading"},[t._v(t._s(t.$t("client")))])],1),t._v(" "),r("div",{staticClass:"node-tracing__label"},[t._v(t._s(t.$t("recievedData")))])]),t._v(" "),r("div",{staticClass:"node-tracing__pk"},[t._v(t._s(t.sigchain.destPubkey))])])],2)},[],!1,null,null,null));e.a=f.exports},486:function(t,e,r){"use strict";var n=r(416);r.n(n).a},487:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,"@keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes typing{0%{width:0}80%{width:100%}}@keyframes typing{0%{width:0}80%{width:100%}}@-webkit-keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}h1{font-size:1.875rem}h1,h2{font-weight:700}h2{font-size:1.5rem}h3{font-size:1.3125rem}h3,h4{font-weight:700}h4{font-size:1.125rem}h5{font-size:1rem}h5,h6{font-weight:700}h6{font-size:.75rem}",""])},488:function(t,e,r){"use strict";var n=r(417);r.n(n).a},489:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,"@keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes typing{0%{width:0}80%{width:100%}}@keyframes typing{0%{width:0}80%{width:100%}}@-webkit-keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}h1{font-size:1.875rem}h1,h2{font-weight:700}h2{font-size:1.5rem}h3{font-size:1.3125rem}h3,h4{font-weight:700}h4{font-size:1.125rem}h5{font-size:1rem}h5,h6{font-weight:700}h6{font-size:.75rem}",""])},581:function(t,e,r){"use strict";r.r(e);var n=r(395),o=r(297),c=r(296),l={components:{Card:o.a,CardContainer:c.a},props:{tx:{type:Object,default:function(){return{}}}},data:function(){return{}},mounted:function(){},methods:{}},d=(r(486),r(0)),_=Object(d.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CardContainer",[r("Card",{attrs:{width:"half"}},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("fee")))]),t._v(" "),r("div",{staticClass:"card__text"},[t._v(t._s(t.tx.fee))])]),t._v(" "),r("Card",{attrs:{width:"half"}},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("nonce")))]),t._v(" "),r("div",{staticClass:"card__text"},[t._v(t._s(t.tx.nonce))])]),t._v(" "),r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("blockHeight")))]),t._v(" "),r("nuxt-link",{staticClass:"card__link",attrs:{to:t.localePath({name:"blocks-id",params:{id:t.tx.block_height}})}},[t._v(t._s(t._f("commaNumber")(t.tx.block_height)))])],1),t._v(" "),t.tx.attributes?r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("attributes")))]),t._v(" "),r("div",{staticClass:"card__text"},[t._v(t._s(t.tx.attributes))])]):t._e(),t._v(" "),r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("hash")))]),t._v(" "),r("div",{staticClass:"card__text"},[t._v(t._s(t.tx.hash))])])],1)},[],!1,null,null,null).exports,f=r(452),h=r(307),v=r(10),m={components:{Card:o.a,CardContainer:c.a,CardLoader:h.a,NodeTracing:f.a},props:{tx:{type:Object,default:function(){return{}}}},data:function(){return{loading:!0,txPayload:null}},computed:Object(v.b)({currentPrice:"price/getCurrentPrice"}),mounted:function(){this.getTxPayload()},methods:{getTxPayload:function(){var t=this;this.$axios.$get("transactions/".concat(this.tx.id,"/payload")).then(function(e){t.txPayload=e,t.loading=!1})}}},y=(r(488),Object(d.a)(m,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.loading?r("CardLoader",{attrs:{count:5}}):t._e(),t._v(" "),"CoinbaseType"!==t.tx.txType||t.loading?t._e():r("CardContainer",[r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("miner")))]),t._v(" "),r("nuxt-link",{staticClass:"card__link",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.txPayload.recipientWallet}})}},[t._v(t._s(t.txPayload.recipientWallet))])],1),t._v(" "),r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("amount")))]),t._v(" "),r("div",{staticClass:"card__text"},[t._v("+ "+t._s(t._f("commaNumber")(t._f("nknValue")(t.txPayload.amount)))+" NKN")]),t._v(" "),r("div",{staticClass:"card__text card__subitem text_size_xs text_color_grey-light"},[t._v("$"+t._s(t._f("commaNumber")((this.$options.filters.nknValue(t.txPayload.amount)*t.currentPrice).toFixed(2))))])])],1),t._v(" "),"TransferAssetType"!==t.tx.txType||t.loading?t._e():r("CardContainer",[r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("from")))]),t._v(" "),r("nuxt-link",{staticClass:"card__link",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.txPayload.senderWallet}})}},[t._v(t._s(t.txPayload.senderWallet))])],1),t._v(" "),r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("amount")))]),t._v(" "),r("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t._f("commaNumber")(t._f("nknValue")(t.txPayload.amount)))+" NKN")]),t._v(" "),r("div",{staticClass:"card__text card__subitem text_size_xs text_color_grey-light"},[t._v("$"+t._s(t._f("commaNumber")((this.$options.filters.nknValue(t.txPayload.amount)*t.currentPrice).toFixed(2))))])]),t._v(" "),r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("to")))]),t._v(" "),r("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.txPayload.recipientWallet}})}},[t._v(t._s(t.txPayload.recipientWallet))])],1)],1),t._v(" "),"CommitType"!==t.tx.txType||t.loading?t._e():[r("CardContainer",[r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("dataSize")))]),t._v(" "),r("div",{staticClass:"card__text"},[t._v(t._s(t.txPayload.sigchain.dataSize)+" "+t._s(t.$t("bytes")))])]),t._v(" "),r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("dataHash")))]),t._v(" "),r("div",{staticClass:"card__text"},[t._v(t._s(t.txPayload.sigchain.dataHash))])])],1),t._v(" "),r("NodeTracing",{attrs:{sigchain:t.txPayload.sigchain,spacing:!0,showChain:!0}})],t._v(" "),"RegisterNameType"!==t.tx.txType||t.loading?t._e():r("CardContainer",[r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("registeredName")))]),t._v(" "),r("div",{staticClass:"card__text"},[t._v(t._s(t.txPayload.name))])]),t._v(" "),r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("registrant")))]),t._v(" "),r("div",{staticClass:"card__text"},[t._v(t._s(t.txPayload.registrant))])])],1),t._v(" "),"DeleteNameType"!==t.tx.txType||t.loading?t._e():r("CardContainer",[r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("deletedName")))]),t._v(" "),r("div",{staticClass:"card__text"},[t._v(t._s(t.txPayload.name))])]),t._v(" "),r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("registrant")))]),t._v(" "),r("div",{staticClass:"card__text"},[t._v(t._s(t.txPayload.registrant))])])],1)],2)},[],!1,null,null,null).exports),x=r(396),w=r(138),C={components:{GetBack:n.a,SingleTransactionInfo:_,SingleTransactionPayload:y,CardSwitch:x.a,CardLoader:h.a,Transaction:w.a},data:function(){return{loading:!0,tx:null,activeGeneral:!0,activePayload:!1}},mounted:function(){this.getTx()},methods:{toggleSwitch:function(t){switch(t){case"activeGeneral":this.activeGeneral=!0,this.activePayload=!1;break;case"activePayload":this.activePayload=!0,this.activeGeneral=!1}},getTx:function(){var t=this,e=this.$route.params.id;this.$axios.$get("transactions/".concat(e)).then(function(e){t.tx=e,t.loading=!1})}}},k=Object(d.a)(C,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section"},[r("div",{staticClass:"single-page-header"},[r("div",{staticClass:"single-page-header__wrapper"},[r("GetBack",{attrs:{text:t.$t("allTransactions"),route:"/transactions"}}),t._v(" "),t.loading?t._e():r("Transaction",{staticClass:"single-page-header__icon",class:"single-page-header__icon_"+("CoinbaseType"==t.tx.txType?"mining":"TransferAssetType"==t.tx.txType?"transfer":"CommitType"==t.tx.txType?"sigchain":"SubscribeType"==t.tx.txType?"sigchain":"RegisterNameType"==t.tx.txType?"wallet-name-registration":"TransferNameType"==t.tx.txType?"wallet-name-transfer":"DeleteNameType"==t.tx.txType?"wallet-name-deletion":null)}),t._v(" "),r("div",{staticClass:"single-page-header__info"},[r("h6",{staticClass:"single-page-header__subtitle text_color_grey-light text_transform_uppercase"},[t._v(t._s(t.$t("transaction")))]),t._v(" "),r("h1",{staticClass:"single-page-header__title"},[t.loading?r("span",[t._v(t._s(t.$t("loading")))]):"CoinbaseType"==t.tx.txType?r("span",[t._v(t._s(t.$t("miningReward")))]):"TransferAssetType"==t.tx.txType?r("span",[t._v(t._s(t.$t("transfer")))]):"CommitType"==t.tx.txType?r("span",[t._v(t._s(t.$t("signatureChain")))]):"SubscribeType"==t.tx.txType?r("span",[t._v(t._s(t.$t("subscription")))]):"RegisterNameType"==t.tx.txType?r("span",[t._v(t._s(t.$t("walletNameRegistration")))]):"TransferNameType"==t.tx.txType?r("span",[t._v(t._s(t.$t("walletNameTransfer")))]):"DeleteNameType"==t.tx.txType?r("span",[t._v(t._s(t.$t("walletNameDeletion")))]):t._e()]),t._v(" "),r("span",{staticClass:"text_opacity_75"},[t.loading?r("span",[t._v(t._s(t.$t("loading")))]):r("span",[t._v("\n            "+t._s(t.$t("created"))+"\n            "+t._s(t.$moment(t.tx.created_at+"Z").fromNow())+"\n          ")])]),t._v(" "),t.loading?t._e():r("div",{staticClass:"single-page-header__hash"},[t._v(t._s(t.tx.hash))])]),t._v(" "),r("div",{staticClass:"single-page-header__switches"},[r("CardSwitch",{attrs:{active:t.activeGeneral},nativeOn:{click:function(e){return t.toggleSwitch("activeGeneral")}}},[t._v(t._s(t.$t("generalInfo")))]),t._v(" "),r("CardSwitch",{attrs:{active:t.activePayload},nativeOn:{click:function(e){return t.toggleSwitch("activePayload")}}},[t._v(t._s(t.$t("payload")))])],1)],1)]),t._v(" "),t.loading?r("CardLoader",{attrs:{count:5}}):r("div",[t.activeGeneral?r("SingleTransactionInfo",{attrs:{tx:t.tx}}):t._e(),t._v(" "),t.activePayload?r("SingleTransactionPayload",{attrs:{tx:t.tx}}):t._e()],1)],1)},[],!1,null,null,null);e.default=k.exports}}]);