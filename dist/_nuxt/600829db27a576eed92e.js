(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{329:function(t,e,r){var content=r(403);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("346e136a",content,!0,{sourceMap:!1})},402:function(t,e,r){"use strict";var _=r(329);r.n(_).a},403:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,"@keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes typing{0%{width:0}80%{width:100%}}@keyframes typing{0%{width:0}80%{width:100%}}@-webkit-keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}h1{font-size:1.875rem}h1,h2{font-weight:700}h2{font-size:1.5rem}h3{font-size:1.3125rem}h3,h4{font-weight:700}h4{font-size:1.125rem}h5{font-size:1rem}h5,h6{font-weight:700}h6{font-size:.75rem}.single-block-tx-card__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;cursor:pointer;transition:.4s cubic-bezier(.25,.8,.25,1)}.single-block-tx-card__header:hover{color:#1791f2}.single-block-tx-card__toggle{transition:.4s cubic-bezier(.25,.8,.25,1)}.single-block-tx-card__toggle_active{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.single-block-tx-card__body{max-height:0;transition:.4s cubic-bezier(.25,.8,.25,1),margin 0s,max-height .15s cubic-bezier(.25,.8,.25,1);-webkit-transform:translateY(-30px);transform:translateY(-30px);overflow:hidden;opacity:0}.single-block-tx-card__body_open{margin-top:24px;max-height:1000px;opacity:1;-webkit-transform:translateY(0);transform:translateY(0);transition:.4s cubic-bezier(.25,.8,.25,1),margin 0s}",""])},408:function(t,e,r){var content=r(497);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("56b05f05",content,!0,{sourceMap:!1})},409:function(t,e,r){var content=r(499);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("24d80f4c",content,!0,{sourceMap:!1})},410:function(t,e,r){var content=r(501);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("0e1b1f82",content,!0,{sourceMap:!1})},450:function(t,e,r){"use strict";var _=r(297),c=r(325),l=r(448),n=r(10),o={components:{Card:_.a,TransactionTypeTitle:c.a,NodeTracing:l.a},props:{tx:{type:Object,default:function(){return{}}}},data:function(){return{isOpen:!1,txPayload:null}},computed:Object(n.b)({currentPrice:"price/getCurrentPrice"}),mounted:function(){},methods:{toggle:function(){null===this.txPayload&&this.getTxPayload(),this.isOpen=!this.isOpen},getTxPayload:function(){var t=this;this.$axios.$get("transactions/".concat(this.tx.id,"/payload")).then(function(e){t.txPayload=e})}}},d=(r(402),r(0)),component=Object(d.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Card",[r("div",{staticClass:"single-block-tx-card__header",on:{click:function(e){return t.toggle()}}},[r("TransactionTypeTitle",{attrs:{type:t.tx.txType}}),t._v(" "),r("span",{staticClass:"single-block-tx-card__toggle fe fe-chevron-down",class:t.isOpen?"single-block-tx-card__toggle_active":null})],1),t._v(" "),t.isOpen?t._e():r("nuxt-link",{staticClass:"card__link text_size_xs text_wrap_none",attrs:{to:t.localePath({name:"transactions-id",params:{id:t.tx.hash}})}},[r("span",{staticClass:"text_color_default"},[t._v(t._s(t.$t("hash"))+":")]),t._v("\n    "+t._s(t.tx.hash)+"\n  ")]),t._v(" "),r("div",{staticClass:"single-block-tx-card__body",class:t.isOpen?"single-block-tx-card__body_open":null},["CoinbaseType"===t.tx.txType&&t.txPayload?[r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("hash")))]),t._v(" "),r("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"transactions-id",params:{id:t.tx.hash}})}},[t._v(t._s(t.tx.hash))])],1),t._v(" "),r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("block")))]),t._v(" "),r("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"blocks-id",params:{id:t.tx.block_height}})}},[t._v(t._s(t._f("commaNumber")(t.tx.block_height)))])],1),t._v(" "),r("div",{staticClass:"card__divider"}),t._v(" "),r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("miner")))]),t._v(" "),r("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.txPayload.recipientWallet}})}},[t._v(t._s(t.txPayload.recipientWallet))]),t._v(" "),r("div",{staticClass:"card__text card__subitem"},[t._v("+ "+t._s(t._f("commaNumber")(t._f("nknValue")(t.txPayload.amount)))+" NKN")])],1)]:t._e(),t._v(" "),"TransferAssetType"===t.tx.txType&&t.txPayload?[r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("hash")))]),t._v(" "),r("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"transactions-id",params:{id:t.tx.hash}})}},[t._v(t._s(t.tx.hash))])],1),t._v(" "),r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("block")))]),t._v(" "),r("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"blocks-id",params:{id:t.tx.block_height}})}},[t._v(t._s(t._f("commaNumber")(t.tx.block_height)))])],1),t._v(" "),r("div",{staticClass:"card__divider"}),t._v(" "),r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("from")))]),t._v(" "),r("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.txPayload.senderWallet}})}},[t._v(t._s(t.txPayload.senderWallet))])],1),t._v(" "),r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("amount")))]),t._v(" "),r("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t._f("commaNumber")(t._f("nknValue")(t.txPayload.amount)))+" NKN")]),t._v(" "),r("div",{staticClass:"card__text card__subitem text_size_xs text_color_grey-light"},[t._v("$"+t._s(t._f("commaNumber")((this.$options.filters.nknValue(t.txPayload.amount)*t.currentPrice).toFixed(2))))])]),t._v(" "),r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("to")))]),t._v(" "),r("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.txPayload.recipientWallet}})}},[t._v(t._s(t.txPayload.recipientWallet))])],1)]:t._e(),t._v(" "),"CommitType"===t.tx.txType&&t.txPayload?[r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("hash")))]),t._v(" "),r("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"transactions-id",params:{id:t.tx.hash}})}},[t._v(t._s(t.tx.hash))])],1),t._v(" "),r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("block")))]),t._v(" "),r("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"blocks-id",params:{id:t.tx.block_height}})}},[t._v(t._s(t._f("commaNumber")(t.tx.block_height)))])],1),t._v(" "),r("div",{staticClass:"card__divider"}),t._v(" "),r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("dataSize")))]),t._v(" "),r("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t.txPayload.sigchain.dataSize)+" "+t._s(t.$t("bytes")))])]),t._v(" "),r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("dataHash")))]),t._v(" "),r("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t.txPayload.sigchain.dataHash))])]),t._v(" "),r("div",{staticClass:"card__item"},[r("NodeTracing",{attrs:{sigchain:t.txPayload.sigchain}})],1)]:t._e(),t._v(" "),"RegisterNameType"===t.tx.txType&&t.txPayload?[r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("hash")))]),t._v(" "),r("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"transactions-id",params:{id:t.tx.hash}})}},[t._v(t._s(t.tx.hash))])],1),t._v(" "),r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("block")))]),t._v(" "),r("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"blocks-id",params:{id:t.tx.block_height}})}},[t._v(t._s(t._f("commaNumber")(t.tx.block_height)))])],1),t._v(" "),r("div",{staticClass:"card__divider"}),t._v(" "),r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("registeredName")))]),t._v(" "),r("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t.txPayload.name))])]),t._v(" "),r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("registrant")))]),t._v(" "),r("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t.txPayload.registrant))])])]:t._e(),t._v(" "),"DeleteNameType"===t.tx.txType&&t.txPayload?[r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("hash")))]),t._v(" "),r("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"transactions-id",params:{id:t.tx.hash}})}},[t._v(t._s(t.tx.hash))])],1),t._v(" "),r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("block")))]),t._v(" "),r("nuxt-link",{staticClass:"card__link text_size_md",attrs:{to:t.localePath({name:"blocks-id",params:{id:t.tx.block_height}})}},[t._v(t._s(t._f("commaNumber")(t.tx.block_height)))])],1),t._v(" "),r("div",{staticClass:"card__divider"}),t._v(" "),r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("deletedName")))]),t._v(" "),r("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t.txPayload.name))])]),t._v(" "),r("div",{staticClass:"card__item"},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("registrant")))]),t._v(" "),r("div",{staticClass:"card__text text_size_md"},[t._v(t._s(t.txPayload.registrant))])])]:t._e()],2)],1)},[],!1,null,null,null);e.a=component.exports},496:function(t,e,r){"use strict";var _=r(408);r.n(_).a},497:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,"@keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes typing{0%{width:0}80%{width:100%}}@keyframes typing{0%{width:0}80%{width:100%}}@-webkit-keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}h1{font-size:1.875rem}h1,h2{font-weight:700}h2{font-size:1.5rem}h3{font-size:1.3125rem}h3,h4{font-weight:700}h4{font-size:1.125rem}h5{font-size:1rem}h5,h6{font-weight:700}h6{font-size:.75rem}",""])},498:function(t,e,r){"use strict";var _=r(409);r.n(_).a},499:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,"@keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes typing{0%{width:0}80%{width:100%}}@keyframes typing{0%{width:0}80%{width:100%}}@-webkit-keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}h1{font-size:1.875rem}h1,h2{font-weight:700}h2{font-size:1.5rem}h3{font-size:1.3125rem}h3,h4{font-weight:700}h4{font-size:1.125rem}h5{font-size:1rem}h5,h6{font-weight:700}h6{font-size:.75rem}",""])},500:function(t,e,r){"use strict";var _=r(410);r.n(_).a},501:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,"@keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes typing{0%{width:0}80%{width:100%}}@keyframes typing{0%{width:0}80%{width:100%}}@-webkit-keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}h1{font-size:1.875rem}h1,h2{font-weight:700}h2{font-size:1.5rem}h3{font-size:1.3125rem}h3,h4{font-weight:700}h4{font-size:1.125rem}h5{font-size:1rem}h5,h6{font-weight:700}h6{font-size:.75rem}",""])},595:function(t,e,r){"use strict";r.r(e);var _=r(449),c=r(297),l=r(309),n={components:{Card:c.a,CardContainer:l.a},props:{block:{type:Object,default:function(){return{}}}},data:function(){return{}},mounted:function(){},methods:{}},o=(r(496),r(0)),d=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CardContainer",[r("Card",{attrs:{width:"half"}},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("height")))]),t._v(" "),r("div",{staticClass:"card__text"},[t._v(t._s(t._f("commaNumber")(t.block.header.height)))])]),t._v(" "),r("Card",{attrs:{width:"half"}},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("transactions")))]),t._v(" "),r("div",{staticClass:"card__text"},[t._v(t._s(t.block.transactions_count))])]),t._v(" "),r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("size")))]),t._v(" "),r("div",{staticClass:"card__text"},[t._v(t._s(t.block.size)+" "+t._s(t.$t("bytes")))])]),t._v(" "),r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("timestamp")))]),t._v(" "),r("div",{staticClass:"card__text"},[t._v(t._s(t.block.header.timestamp))])]),t._v(" "),r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("signer")))]),t._v(" "),r("div",{staticClass:"card__text"},[t._v(t._s(t.block.header.signer))])]),t._v(" "),r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("rewardedAddress")))]),t._v(" "),null!=t.block.header.benificiaryWallet?r("nuxt-link",{staticClass:"card__link",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.block.header.benificiaryWallet}})}},[t._v(t._s(t.block.header.benificiaryWallet))]):r("nuxt-link",{staticClass:"card__link",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.block.header.wallet}})}},[t._v(t._s(t.block.header.wallet))])],1),t._v(" "),r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("hash")))]),t._v(" "),r("div",{staticClass:"card__text"},[t._v(t._s(t.block.hash))])]),t._v(" "),r("Card",[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("transactionRoot")))]),t._v(" "),r("div",{staticClass:"card__text"},[t._v(t._s(t.block.header.transactionsRoot))])])],1)},[],!1,null,null,null).exports,v=(r(310),r(450)),h=r(316),m={components:{CardContainer:l.a,SingleBlockTxCard:v.a,CardLoader:h.a},props:{blockId:{type:Number,default:0}},data:function(){return{transactions:[],loading:!0}},mounted:function(){this.getBlockTransactions()},methods:{getBlockTransactions:function(){var t=this;this.$axios.$get("blocks/".concat(this.blockId,"/transactions")).then(function(e){t.transactions=e,t.loading=!1})}}},k=(r(498),Object(o.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.loading?e("CardLoader",{attrs:{count:5}}):this._e(),this._v(" "),e("CardContainer",{attrs:{else:""}},this._l(this.transactions,function(t){return e("SingleBlockTxCard",{key:t.id,attrs:{tx:t}})}),1)],1)},[],!1,null,null,null).exports),f=r(451),x=r(346),C=r(347),y=r(453),w=r(452),$={components:{DesktopCard:y.a,DesktopCardContainer:w.a},props:{block:{type:Object,default:function(){return{}}}},data:function(){return{}},mounted:function(){},methods:{}},z=(r(500),Object(o.a)($,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"desktop-heading"},[t._v(t._s(t.$t("generalInfo")))]),t._v(" "),r("DesktopCardContainer",[r("DesktopCard",{attrs:{width:"quarter"}},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("height")))]),t._v(" "),r("div",{staticClass:"desktop-card__item"},[t._v(t._s(t.block.header.height||t.commaNumber))])]),t._v(" "),r("DesktopCard",{attrs:{width:"quarter"}},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("transactions")))]),t._v(" "),r("div",{staticClass:"desktop-card__item"},[t._v(t._s(t.block.transactions_count))])]),t._v(" "),r("DesktopCard",{attrs:{width:"quarter"}},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("size")))]),t._v(" "),r("div",{staticClass:"desktop-card__item"},[t._v(t._s(t.block.size)+" "+t._s(t.$t("bytes")))])]),t._v(" "),r("DesktopCard",{attrs:{width:"quarter"}},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("timestamp")))]),t._v(" "),r("div",{staticClass:"desktop-card__item"},[t._v(t._s(t.block.header.created_at))])]),t._v(" "),r("DesktopCard",{attrs:{width:"half"}},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("rewardedAddress")))]),t._v(" "),r("div",{staticClass:"desktop-card__item"},[null!=t.block.header.benificiaryWallet?r("nuxt-link",{staticClass:"text_link",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.block.header.benificiaryWallet}})}},[t._v(t._s(t.block.header.benificiaryWallet))]):r("nuxt-link",{staticClass:"text_link",attrs:{to:t.localePath({name:"addresses-id",params:{id:t.block.header.wallet}})}},[t._v(t._s(t.block.header.wallet))])],1)]),t._v(" "),r("DesktopCard",{attrs:{width:"half"}},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("signer")))]),t._v(" "),r("div",{staticClass:"desktop-card__item"},[t._v(t._s(t.block.header.signer))])]),t._v(" "),r("DesktopCard",{attrs:{width:"half"}},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("hash")))]),t._v(" "),r("div",{staticClass:"desktop-card__item"},[t._v(t._s(t.block.hash))])]),t._v(" "),r("DesktopCard",{attrs:{width:"half"}},[r("div",{staticClass:"card__title"},[t._v(t._s(t.$t("transactionRoot")))]),t._v(" "),r("div",{staticClass:"desktop-card__item"},[t._v(t._s(t.block.header.transactionsRoot))])])],1)],1)},[],!1,null,null,null).exports),P=r(104),T={components:{GetBack:_.a,SingleBlockInfo:d,CardSwitch:f.a,SingleBlockTransactions:k,CardLoader:h.a,Block:P.a,DesktopWrapper:C.a,TableLoader:x.a,DesktopBlockInfo:z},data:function(){return{loading:!0,block:{},activeGeneral:!0,activeTx:!1}},mounted:function(){this.getBlock()},methods:{toggleSwitch:function(t){switch(t){case"activeGeneral":this.activeGeneral=!0,this.activeTx=!1;break;case"activeTx":this.activeTx=!0,this.activeGeneral=!1}},getBlock:function(){var t=this,e=this.$route.params.id;this.$axios.$get("blocks/".concat(e)).then(function(e){t.block=e,t.loading=!1})}}},N=Object(o.a)(T,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section"},[r("div",{staticClass:"single-page-header"},[r("div",{staticClass:"single-page-header__wrapper"},[r("GetBack",{attrs:{text:t.$t("allBlocks"),route:"blocks"}}),t._v(" "),r("Block",{staticClass:"single-page-header__icon single-page-header__icon_block"}),t._v(" "),r("div",{staticClass:"single-page-header__info"},[r("h6",{staticClass:"single-page-header__subtitle text_color_grey-light text_transform_uppercase"},[t._v(t._s(t.$t("block")))]),t._v(" "),r("h1",{staticClass:"single-page-header__title"},[t.loading?r("span",[t._v(t._s(t.$t("loading")))]):r("span",[t._v(t._s(t._f("commaNumber")(t.block.header.height)))])]),t._v(" "),r("span",{staticClass:"text_opacity_75"},[t.loading?r("span",[t._v(t._s(t.$t("loading")))]):r("span",[t._v("\n            "+t._s(t.$t("created"))+"\n            "+t._s(t.$moment(t.block.header.timestamp+"Z").fromNow())+"\n          ")])]),t._v(" "),t.loading?t._e():r("div",{staticClass:"single-page-header__hash"},[t._v(t._s(t.block.header.hash))])]),t._v(" "),r("div",{staticClass:"single-page-header__switches"},[r("CardSwitch",{attrs:{active:t.activeGeneral},nativeOn:{click:function(e){return t.toggleSwitch("activeGeneral")}}},[t._v(t._s(t.$t("generalInfo")))]),t._v(" "),r("CardSwitch",{attrs:{active:t.activeTx},nativeOn:{click:function(e){return t.toggleSwitch("activeTx")}}},[t._v(t._s(t.$t("transactions")))])],1)],1)]),t._v(" "),r("mq-layout",{attrs:{mq:["sm","md"]}},[t.loading?r("CardLoader",{attrs:{count:5}}):[t.activeGeneral?r("SingleBlockInfo",{attrs:{block:t.block}}):t._e(),t._v(" "),t.activeTx?r("SingleBlockTransactions",{attrs:{blockId:t.block.id}}):t._e()]],2),t._v(" "),r("mq-layout",{attrs:{mq:"lg"}},[r("DesktopWrapper",[t.loading?r("TableLoader",{attrs:{count:5}}):r("DesktopBlockInfo",{attrs:{block:t.block}})],1)],1)],1)},[],!1,null,null,null);e.default=N.exports}}]);