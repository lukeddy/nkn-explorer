(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{301:function(t,e,_){var content=_(342);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,_(7).default)("530ce21e",content,!0,{sourceMap:!1})},322:function(t,e,_){"use strict";_(315);var r=_(0),l={components:{Arrow:Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},this.$listeners),[e("path",{attrs:{d:"M19 11H7.14l3.63-4.36a1.001 1.001 0 00-1.54-1.28l-5 6a1.198 1.198 0 00-.09.15c0 .05 0 .08-.07.13A1 1 0 004 12a1 1 0 00.07.36c0 .05 0 .08.07.13.026.052.056.102.09.15l5 6A1 1 0 0010 19a1 1 0 00.77-1.64L7.14 13H19a1 1 0 100-2z",fill:"#A7B4CC",opacity:".5"}})])}),[],!1,null,null,null).exports},props:{page:{type:Number,default:0},type:{type:String,default:""}},data:function(){return{}},mounted:function(){},methods:{}},n=(_(341),Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"pagination",class:null===this.page?"pagination_disabled":"pagination_enabled",attrs:{disabled:null===this.page}},[e("Arrow",{staticClass:"pagination__arrow",class:"prev"==this.type?"pagination__arrow_type_prev":"pagination__arrow_type_next"})],1)}),[],!1,null,null,null));e.a=n.exports},341:function(t,e,_){"use strict";var r=_(301);_.n(r).a},342:function(t,e,_){(t.exports=_(6)(!1)).push([t.i,"@keyframes Spin{to{transform:rotate(1turn)}}@-webkit-keyframes Spin{to{transform:rotate(1turn)}}@-webkit-keyframes typing{0%{width:0}80%{width:100%}}@keyframes typing{0%{width:0}80%{width:100%}}@-webkit-keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}h1{font-size:1.875rem}h1,h2{font-weight:700}h2{font-size:1.5rem}h3{font-size:1.3125rem}h3,h4{font-weight:700}h4{font-size:1.125rem}h5{font-size:1rem}h5,h6{font-weight:700}h6{font-size:.75rem}.pagination{padding:12px;border-radius:5px;border:1px solid #d4d9e7;box-sizing:border-box;background:#fff;outline:none;cursor:pointer;transition:.4s cubic-bezier(.25,.8,.25,1)}.pagination:not(:last-child){margin-right:8px}.pagination:hover{border-color:#1791f2}.pagination:hover .pagination__arrow path{fill:#1791f2}.pagination:focus{border-color:#095a9a}.pagination:focus .pagination__arrow path{fill:#095a9a}.pagination_disabled{border:1px solid #f6f7fa!important;cursor:not-allowed}.pagination_disabled .pagination__arrow path{fill:#a7b4cc!important;opacity:.5}.pagination__arrow path{transition:.4s cubic-bezier(.25,.8,.25,1);opacity:1}.pagination__arrow_type_next{transform:rotate(180deg)}",""])},419:function(t,e,_){var content=_(508);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,_(7).default)("433392f1",content,!0,{sourceMap:!1})},424:function(t,e,_){var content=_(518);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,_(7).default)("5d5bebd8",content,!0,{sourceMap:!1})},479:function(t,e,_){"use strict";function r(t,e,_){return e in t?Object.defineProperty(t,e,{value:_,enumerable:!0,configurable:!0,writable:!0}):t[e]=_,t}function l(t){for(var e=1;e<arguments.length;e++){var _=null!=arguments[e]?arguments[e]:{},l=Object.keys(_);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(_).filter((function(t){return Object.getOwnPropertyDescriptor(_,t).enumerable})))),l.forEach((function(e){r(t,e,_[e])}))}return t}var n=function(t,e,_){Object.defineProperty(t,e,{configurable:!0,get:function(){return _},set:function(t){console.warn("tried to set frozen property ".concat(e," with ").concat(t))}})},o=function(t,e){var _=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object.defineProperty(t,e,{configurable:!0,writable:!0,value:_})},component={abstract:!0,name:"Fragment",props:{name:{type:String,default:function(){return Math.floor(Date.now()*Math.random()).toString(16)}}},mounted:function(){var t=this.$el,e=t.parentNode,_=document.createComment("fragment#".concat(this.name,"#head")),r=document.createComment("fragment#".concat(this.name,"#tail"));e.insertBefore(_,t),e.insertBefore(r,t),t.appendChild=function(_){e.insertBefore(_,r),n(_,"parentNode",t)},t.insertBefore=function(_,r){e.insertBefore(_,r),n(_,"parentNode",t)},t.removeChild=function(t){e.removeChild(t),o(t,"parentNode")},Array.from(t.childNodes).forEach((function(e){return t.appendChild(e)})),e.removeChild(t),n(t,"parentNode",e),n(t,"nextSibling",r.nextSibling);var l=e.insertBefore;e.insertBefore=function(r,i){l.call(e,r,i!==t?i:_)};var i=e.removeChild;e.removeChild=function(a){if(a===t){for(;_.nextSibling!==r;)t.removeChild(_.nextSibling);e.removeChild(_),e.removeChild(r),o(t,"parentNode"),e.insertBefore=l,e.removeChild=i}else i.call(e,a)}},render:function(t){var e=this,_=this.$slots.default;return _&&_.length&&_.forEach((function(t){return t.data=l({},t.data,{attrs:l({fragment:e.name},(t.data||{}).attrs)})})),t("div",{attrs:{fragment:this.name}},_)}};var d=component,c=_(13),v=_(323),x=_(397),m=_(0),h=Object(m.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},this.$listeners),[e("path",{attrs:{d:"M13.36 5.23a.999.999 0 00-.13 1.41L16.86 11H5a1 1 0 000 2h11.86l-3.63 4.36a1 1 0 101.54 1.28l5-6 .09-.15.07-.13a1 1 0 000-.72l-.07-.13-.09-.15-5-6a1 1 0 00-1.41-.13z",fill:"#BDBDBD"}})])}),[],!1,null,null,null).exports,f={components:{TransactionTypeTitle:v.a,Fragment:d,ArrowRight:h,NodeTracing:x.a},props:{tx:{type:Object,default:function(){return{}}}},data:function(){return{isOpen:!1,txPayload:null}},computed:Object(c.b)({currentPrice:"price/getCurrentPrice"}),mounted:function(){},methods:{toggle:function(){null===this.txPayload&&this.getTxPayload(),this.isOpen=!this.isOpen},getTxPayload:function(){var t=this;this.$axios.$get("transactions/".concat(this.tx.id,"/payload")).then((function(e){t.txPayload=e}))}}},k=(_(517),Object(m.a)(f,(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("Fragment",[_("tr",{staticClass:"table__row desktop-tx",on:{click:function(e){return t.toggle()}}},[_("td",{staticClass:"table__item"},[_("TransactionTypeTitle",{attrs:{type:t.tx.txType}})],1),t._v(" "),_("td",{staticClass:"table__item"},[t._v(t._s(t.$moment(t.tx.created_at+"Z").fromNow()))]),t._v(" "),_("td",{staticClass:"table__item"},[_("nuxt-link",{staticClass:"card__link text_wrap_none",attrs:{to:t.localePath({name:"transactions-id",params:{id:t.tx.hash}})}},[t._v(t._s(t.tx.hash))])],1),t._v(" "),_("td",{staticClass:"table__item"},[_("span",{staticClass:"fe fe-chevron-down desktop-tx__toggle",class:t.isOpen?"desktop-tx__toggle_active":null})])]),t._v(" "),_("tr",{staticClass:"table__row desktop-tx__body",class:t.isOpen&&t.txPayload?"desktop-tx__body_open":null},[_("td",{staticClass:"desktop-tx__wrapper",attrs:{colspan:"4"}},["COINBASE_TYPE"===t.tx.txType&&t.txPayload?[_("div",{staticClass:"desktop-tx__content"},[_("div",{staticClass:"desktop-tx__item text_align_right"},[_("h4",[t._v("+ "+t._s(t._f("commaNumber")(t._f("nknValue")(t.txPayload.amount)))+" NKN")])]),t._v(" "),_("div",{staticClass:"desktop-tx__item text_align_center"},[_("ArrowRight",{staticClass:"desktop-tx__icon"})],1),t._v(" "),_("div",{staticClass:"desktop-tx__item text_align_left"},[_("nuxt-link",{staticClass:"text_link text_size_md",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.txPayload.recipientWallet}})}},[t._v(t._s(t.txPayload.recipientWallet))])],1)])]:t._e(),t._v(" "),"TRANSFER_ASSET_TYPE"===t.tx.txType&&t.txPayload?[_("div",{staticClass:"desktop-tx__content"},[_("div",{staticClass:"desktop-tx__item text_align_center"},[_("div",{staticClass:"desktop-tx__title"},[t._v(t._s(t.$t("from")))]),t._v(" "),_("nuxt-link",{staticClass:"text_link text_size_md",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.txPayload.senderWallet}})}},[t._v(t._s(t.txPayload.senderWallet))])],1),t._v(" "),_("div",{staticClass:"desktop-tx__item text_align_center"},[_("div",{staticClass:"desktop-tx__title"},[_("ArrowRight",{staticClass:"desktop-tx__icon"})],1),t._v(" "),_("h4",[t._v("+ "+t._s(t._f("commaNumber")(t._f("nknValue")(t.txPayload.amount)))+" NKN")]),t._v(" "),_("div",{staticClass:"desktop-tx__price"},[t._v("$"+t._s(t._f("commaNumber")((this.$options.filters.nknValue(t.txPayload.amount)*t.currentPrice).toFixed(2))))])]),t._v(" "),_("div",{staticClass:"desktop-tx__item text_align_left"},[_("div",{staticClass:"desktop-tx__title"},[t._v(t._s(t.$t("to_send")))]),t._v(" "),_("nuxt-link",{staticClass:"text_link text_size_md",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.txPayload.recipientWallet}})}},[t._v(t._s(t.txPayload.recipientWallet))])],1)])]:t._e(),t._v(" "),"SIG_CHAIN_TXN_TYPE"===t.tx.txType&&t.txPayload?[_("div",{staticClass:"desktop-tx__content"},[_("NodeTracing",{staticClass:"desktop-tx__sigchain",attrs:{sigchain:t.txPayload.sigchain,showChain:!0}})],1)]:t._e(),t._v(" "),"SUBSCRIBE_TYPE"===t.tx.txType&&t.txPayload?[_("div",{staticClass:"desktop-tx__content"},[_("div",{staticClass:"desktop-tx__item text_align_left"},[_("div",{staticClass:"desktop-tx__title"},[t._v(t._s(t.$t("identifier")))]),t._v(" "),_("div",[t._v(t._s(t._f("hexConverter")(t.txPayload.identifier)))])]),t._v(" "),_("div",{staticClass:"desktop-tx__item text_align_left"},[_("div",{staticClass:"desktop-tx__title"},[t._v(t._s(t.$t("topic")))]),t._v(" "),_("div",[t._v(t._s(t._f("hexConverter")(t.txPayload.topic)))])]),t._v(" "),_("div",{staticClass:"desktop-tx__item text_align_left"},[_("div",{staticClass:"desktop-tx__title"},[t._v(t._s(t.$t("bucket")))]),t._v(" "),_("div",[t._v(t._s(t.txPayload.bucket))])]),t._v(" "),t.txPayload.meta.length>0?_("div",{staticClass:"desktop-tx__item text_align_left"},[_("div",{staticClass:"desktop-tx__title"},[t._v(t._s(t.$t("meta")))]),t._v(" "),_("div",[t._v(t._s(t.txPayload.meta))])]):t._e(),t._v(" "),_("div",{staticClass:"desktop-tx__item text_align_left"},[_("div",{staticClass:"desktop-tx__title"},[t._v(t._s(t.$t("duration")))]),t._v(" "),_("div",[t._v(t._s(t.txPayload.duration)+" "+t._s(t.$t("blocks")))])]),t._v(" "),_("div",{staticClass:"desktop-tx__item text_align_right"},[_("div",{staticClass:"desktop-tx__title"},[t._v(t._s(t.$t("subscriber")))]),t._v(" "),_("div",[t._v(t._s(t.txPayload.subscriber))])])])]:t._e(),t._v(" "),"REGISTER_NAME_TYPE"===t.tx.txType&&t.txPayload?[_("div",{staticClass:"desktop-tx__content"},[_("div",{staticClass:"desktop-tx__item text_align_center"},[_("div",{staticClass:"desktop-tx__title"},[t._v(t._s(t.$t("registrant")))]),t._v(" "),_("nuxt-link",{staticClass:"text_link text_wrap_none",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.txPayload.registrantWallet}})}},[t._v(t._s(t.txPayload.registrantWallet))])],1),t._v(" "),_("div",{staticClass:"desktop-tx__item text_align_center"},[_("div",{staticClass:"desktop-tx__title"},[t._v(t._s(t.$t("registeredName")))]),t._v("\n            "+t._s(t._f("hexConverter")(t.txPayload.name))+"\n          ")])])]:t._e(),t._v(" "),"DELETE_NAME_TYPE"===t.tx.txType&&t.txPayload?[_("div",{staticClass:"desktop-tx__content"},[_("div",{staticClass:"desktop-tx__item text_align_center"},[_("div",{staticClass:"desktop-tx__title"},[t._v(t._s(t.$t("registrant")))]),t._v(" "),_("nuxt-link",{staticClass:"text_link text_wrap_none",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.txPayload.registrantWallet}})}},[t._v(t._s(t.txPayload.registrantWallet))])],1),t._v(" "),_("div",{staticClass:"desktop-tx__item text_align_center"},[_("div",{staticClass:"desktop-tx__title"},[t._v(t._s(t.$t("deletedName")))]),t._v("\n            "+t._s(t._f("hexConverter")(t.txPayload.name))+"\n          ")])])]:t._e(),t._v(" "),"GENERATE_ID_TYPE"===t.tx.txType&&t.txPayload?[_("div",{staticClass:"desktop-tx__content"},[_("div",{staticClass:"desktop-tx__item text_align_center"},[_("div",{staticClass:"desktop-tx__title"},[t._v(t._s(t.$t("publicKey")))]),t._v("\n            "+t._s(t.txPayload.public_key)+"\n          ")]),t._v(" "),_("div",{staticClass:"desktop-tx__item text_align_center"},[_("div",{staticClass:"desktop-tx__title"},[t._v(t._s(t.$t("registrationFee")))]),t._v("\n            "+t._s(t._f("commaNumber")(t._f("nknValue")(t.txPayload.registration_fee)))+" NKN\n          ")])])]:t._e()],2)])])}),[],!1,null,null,null));e.a=k.exports},480:function(t,e,_){"use strict";var r=_(13),l=_(304),n=_(323),o=_(397),d={components:{Card:l.a,TransactionTypeTitle:n.a,NodeTracing:o.a},props:{tx:{type:Object,default:function(){return{}}}},data:function(){return{isOpen:!1,txPayload:null}},computed:Object(r.b)({currentPrice:"price/getCurrentPrice"}),mounted:function(){},methods:{toggle:function(){null===this.txPayload&&this.getTxPayload(),this.isOpen=!this.isOpen},getTxPayload:function(){var t=this;this.$axios.$get("transactions/".concat(this.tx.id,"/payload")).then((function(e){t.txPayload=e}))}}},c=(_(507),_(0)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("Card",[_("div",{staticClass:"single-block-tx-card__header",on:{click:function(e){return t.toggle()}}},[_("TransactionTypeTitle",{attrs:{type:t.tx.txType}}),t._v(" "),_("span",{staticClass:"single-block-tx-card__toggle fe fe-chevron-down",class:t.isOpen?"single-block-tx-card__toggle_active":null})],1),t._v(" "),t.isOpen?t._e():_("nuxt-link",{staticClass:"card__link text_size_xs text_wrap_none",attrs:{to:t.localePath({name:"transactions-id",params:{id:t.tx.hash}})}},[_("span",{staticClass:"text_color_default"},[t._v(t._s(t.$t("hash"))+":")]),t._v("\n    "+t._s(t.tx.hash)+"\n  ")]),t._v(" "),_("div",{staticClass:"single-block-tx-card__body",class:t.isOpen?"single-block-tx-card__body_open":null},["COINBASE_TYPE"===t.tx.txType&&t.txPayload?[_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("hash")))]),t._v(" "),_("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"transactions-id",params:{id:t.tx.hash}})}},[t._v(t._s(t.tx.hash))])],1),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("block")))]),t._v(" "),_("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"blocks-id",params:{id:t.tx.block_height}})}},[t._v(t._s(t._f("commaNumber")(t.tx.block_height)))])],1),t._v(" "),_("div",{staticClass:"card__divider"}),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("miner")))]),t._v(" "),_("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.txPayload.recipientWallet}})}},[t._v(t._s(t.txPayload.recipientWallet))]),t._v(" "),_("div",{staticClass:"card__text card__subitem"},[t._v("+ "+t._s(t._f("commaNumber")(t._f("nknValue")(t.txPayload.amount)))+" NKN")])],1)]:t._e(),t._v(" "),"TRANSFER_ASSET_TYPE"===t.tx.txType&&t.txPayload?[_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("hash")))]),t._v(" "),_("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"transactions-id",params:{id:t.tx.hash}})}},[t._v(t._s(t.tx.hash))])],1),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("block")))]),t._v(" "),_("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"blocks-id",params:{id:t.tx.block_height}})}},[t._v(t._s(t._f("commaNumber")(t.tx.block_height)))])],1),t._v(" "),_("div",{staticClass:"card__divider"}),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("from")))]),t._v(" "),_("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.txPayload.senderWallet}})}},[t._v(t._s(t.txPayload.senderWallet))])],1),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("amount")))]),t._v(" "),_("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t._f("commaNumber")(t._f("nknValue")(t.txPayload.amount)))+" NKN")]),t._v(" "),_("div",{staticClass:"card__text card__subitem text_size_xs text_color_grey-light"},[t._v("$"+t._s(t._f("commaNumber")((this.$options.filters.nknValue(t.txPayload.amount)*t.currentPrice).toFixed(2))))])]),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("to_send")))]),t._v(" "),_("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.txPayload.recipientWallet}})}},[t._v(t._s(t.txPayload.recipientWallet))])],1)]:t._e(),t._v(" "),"SIG_CHAIN_TXN_TYPE"===t.tx.txType&&t.txPayload?[_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("hash")))]),t._v(" "),_("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"transactions-id",params:{id:t.tx.hash}})}},[t._v(t._s(t.tx.hash))])],1),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("block")))]),t._v(" "),_("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"blocks-id",params:{id:t.tx.block_height}})}},[t._v(t._s(t._f("commaNumber")(t.tx.block_height)))])],1),t._v(" "),_("div",{staticClass:"card__divider"}),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("dataSize")))]),t._v(" "),_("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t.txPayload.sigchain.dataSize)+" "+t._s(t.$t("bytes")))])]),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("dataHash")))]),t._v(" "),_("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t.txPayload.sigchain.dataHash))])]),t._v(" "),_("div",{staticClass:"card__item"},[_("NodeTracing",{attrs:{sigchain:t.txPayload.sigchain}})],1)]:t._e(),t._v(" "),"SUBSCRIBE_TYPE"===t.tx.txType&&t.txPayload?[_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("hash")))]),t._v(" "),_("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"transactions-id",params:{id:t.tx.hash}})}},[t._v(t._s(t.tx.hash))])],1),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("block")))]),t._v(" "),_("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"blocks-id",params:{id:t.tx.block_height}})}},[t._v(t._s(t._f("commaNumber")(t.tx.block_height)))])],1),t._v(" "),_("div",{staticClass:"card__divider"}),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("subscriber")))]),t._v(" "),_("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t.txPayload.subscriber))])]),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("identifier")))]),t._v(" "),_("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t._f("hexConverter")(t.txPayload.identifier)))])]),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("topic")))]),t._v(" "),_("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t._f("hexConverter")(t.txPayload.topic)))])]),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("bucket")))]),t._v(" "),_("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t.txPayload.bucket))])]),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("duration")))]),t._v(" "),_("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t.txPayload.duration)+" "+t._s(t.$t("blocks")))])]),t._v(" "),t.txPayload.meta.length>0?_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("meta")))]),t._v(" "),_("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t.txPayload.meta))])]):t._e()]:t._e(),t._v(" "),"REGISTER_NAME_TYPE"===t.tx.txType&&t.txPayload?[_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("hash")))]),t._v(" "),_("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"transactions-id",params:{id:t.tx.hash}})}},[t._v(t._s(t.tx.hash))])],1),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("block")))]),t._v(" "),_("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"blocks-id",params:{id:t.tx.block_height}})}},[t._v(t._s(t._f("commaNumber")(t.tx.block_height)))])],1),t._v(" "),_("div",{staticClass:"card__divider"}),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("registeredName")))]),t._v(" "),_("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t._f("hexConverter")(t.txPayload.name)))])]),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("registrant")))]),t._v(" "),_("div",{staticClass:"card__text text_size_md"},[_("nuxt-link",{staticClass:"text_link text_wrap_none",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.txPayload.registrantWallet}})}},[t._v(t._s(t.txPayload.registrantWallet))])],1)])]:t._e(),t._v(" "),"DELETE_NAME_TYPE"===t.tx.txType&&t.txPayload?[_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("hash")))]),t._v(" "),_("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"transactions-id",params:{id:t.tx.hash}})}},[t._v(t._s(t.tx.hash))])],1),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("block")))]),t._v(" "),_("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"blocks-id",params:{id:t.tx.block_height}})}},[t._v(t._s(t._f("commaNumber")(t.tx.block_height)))])],1),t._v(" "),_("div",{staticClass:"card__divider"}),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("deletedName")))]),t._v(" "),_("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t._f("hexConverter")(t.txPayload.name)))])]),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("registrant")))]),t._v(" "),_("div",{staticClass:"card__text text_size_md"},[_("nuxt-link",{staticClass:"text_link text_wrap_none",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.txPayload.registrantWallet}})}},[t._v(t._s(t.txPayload.registrantWallet))])],1)])]:t._e(),t._v(" "),"GENERATE_ID_TYPE"===t.tx.txType&&t.txPayload?[_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("hash")))]),t._v(" "),_("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"transactions-id",params:{id:t.tx.hash}})}},[t._v(t._s(t.tx.hash))])],1),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("block")))]),t._v(" "),_("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"blocks-id",params:{id:t.tx.block_height}})}},[t._v(t._s(t._f("commaNumber")(t.tx.block_height)))])],1),t._v(" "),_("div",{staticClass:"card__divider"}),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("publicKey")))]),t._v(" "),_("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t.txPayload.public_key))])]),t._v(" "),_("div",{staticClass:"card__item"},[_("div",{staticClass:"card__title"},[t._v(t._s(t.$t("registrationFee")))]),t._v(" "),_("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t._f("commaNumber")(t._f("nknValue")(t.txPayload.registration_fee)))+" NKN")])])]:t._e()],2)],1)}),[],!1,null,null,null);e.a=component.exports},507:function(t,e,_){"use strict";var r=_(419);_.n(r).a},508:function(t,e,_){(t.exports=_(6)(!1)).push([t.i,"@keyframes Spin{to{transform:rotate(1turn)}}@-webkit-keyframes Spin{to{transform:rotate(1turn)}}@-webkit-keyframes typing{0%{width:0}80%{width:100%}}@keyframes typing{0%{width:0}80%{width:100%}}@-webkit-keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}h1{font-size:1.875rem}h1,h2{font-weight:700}h2{font-size:1.5rem}h3{font-size:1.3125rem}h3,h4{font-weight:700}h4{font-size:1.125rem}h5{font-size:1rem}h5,h6{font-weight:700}h6{font-size:.75rem}.single-block-tx-card__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;cursor:pointer;transition:.4s cubic-bezier(.25,.8,.25,1)}.single-block-tx-card__header:hover{color:#1791f2}.single-block-tx-card__toggle{transition:.4s cubic-bezier(.25,.8,.25,1)}.single-block-tx-card__toggle_active{transform:scaleY(-1)}.single-block-tx-card__body{max-height:0;transition:.4s cubic-bezier(.25,.8,.25,1),margin 0s,max-height .15s cubic-bezier(.25,.8,.25,1);transform:translateY(-30px);overflow:hidden;opacity:0}.single-block-tx-card__body_open{margin-top:24px;max-height:1000px;opacity:1;transform:translateY(0);transition:.4s cubic-bezier(.25,.8,.25,1),margin 0s}",""])},517:function(t,e,_){"use strict";var r=_(424);_.n(r).a},518:function(t,e,_){(t.exports=_(6)(!1)).push([t.i,"@keyframes Spin{to{transform:rotate(1turn)}}@-webkit-keyframes Spin{to{transform:rotate(1turn)}}@-webkit-keyframes typing{0%{width:0}80%{width:100%}}@keyframes typing{0%{width:0}80%{width:100%}}@-webkit-keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}h1{font-size:1.875rem}h1,h2{font-weight:700}h2{font-size:1.5rem}h3{font-size:1.3125rem}h3,h4{font-weight:700}h4{font-size:1.125rem}h5{font-size:1rem}h5,h6{font-weight:700}h6{font-size:.75rem}.desktop-tx{cursor:pointer}.desktop-tx__toggle{transition:.4s cubic-bezier(.25,.8,.25,1);display:block}.desktop-tx__toggle_active{transform:scaleY(-1);color:#1791f2}.desktop-tx__toggle:hover{color:#1791f2}.desktop-tx__table{width:100%}.desktop-tx__wrapper{border-radius:5px}.desktop-tx__body{display:none;max-height:0;transition:.4s cubic-bezier(.25,.8,.25,1),max-height .15s cubic-bezier(.25,.8,.25,1);transform:translateY(-30px);overflow:hidden;opacity:0}.desktop-tx__body_open{display:table-row;max-height:1000px;opacity:1;transform:translateY(0);transition:.4s cubic-bezier(.25,.8,.25,1),margin 0s}.desktop-tx__icon{display:block;margin:0 auto}.desktop-tx__content{display:flex;padding:32px;align-items:center}.desktop-tx__item{flex:1}.desktop-tx__title{font-size:.875rem;font-weight:700;color:#bdbdbd;margin-bottom:32px}.desktop-tx__price{font-size:1.125rem;color:#bdbdbd;margin-top:8px}.desktop-tx__sigchain{width:100%}",""])}}]);