(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{408:function(t,e,n){var content=n(479);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("394a21e8",content,!0,{sourceMap:!1})},478:function(t,e,n){"use strict";var r=n(408);n.n(r).a},479:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,"@keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes Spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes typing{0%{width:0}80%{width:100%}}@keyframes typing{0%{width:0}80%{width:100%}}@-webkit-keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#0b163c}}h1{font-size:1.875rem}h1,h2{font-weight:700}h2{font-size:1.5rem}h3{font-size:1.3125rem}h3,h4{font-weight:700}h4{font-size:1.125rem}h5{font-size:1rem}h5,h6{font-weight:700}h6{font-size:.75rem}.single-address-info__balance{background:linear-gradient(98.23deg,#494b88 4.48%,#9c95dc 97.21%);position:relative;overflow:hidden}.single-address-info__balance *{color:#fff}.single-address-info__logo{position:absolute;right:-20px;top:-15px;height:110px;width:110px}.single-address-info__logo path{opacity:.12;fill:#31325a}",""])},578:function(t,e,n){"use strict";n.r(e);var r=n(395),o=n(297),d=n(296),c=n(35),l={components:{Card:o.a,CardContainer:d.a,Logo:c.a},props:{address:{type:Object,default:function(){return{}}}},data:function(){return{}},mounted:function(){},methods:{}},_=(n(478),n(0)),v=Object(_.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CardContainer",[n("Card",{staticClass:"single-address-info__balance"},[n("div",{staticClass:"card__title"},[t._v(t._s(t.$t("balance")))]),t._v(" "),n("div",{staticClass:"card__text"},[t._v(t._s(t._f("commaNumber")(t.address.balance))+" NKN")]),t._v(" "),n("Logo",{staticClass:"single-address-info__logo"})],1),t._v(" "),n("Card",[n("div",{staticClass:"card__title"},[t._v(t._s(t.$t("firstTransactions")))]),t._v(" "),n("div",{staticClass:"card__text"},[null!=t.address.first_transaction?n("span",[t._v(t._s(t.address.first_transaction))]):n("span",[t._v(t._s(t.$t("never")))])])]),t._v(" "),n("Card",[n("div",{staticClass:"card__title"},[t._v(t._s(t.$t("latestTransaction")))]),t._v(" "),n("div",{staticClass:"card__text"},[null!=t.address.last_transaction?n("span",[t._v(t._s(t.address.last_transaction))]):n("span",[t._v(t._s(t.$t("never")))])])]),t._v(" "),n("Card",[n("div",{staticClass:"card__title"},[t._v(t._s(t.$t("totalTransactions")))]),t._v(" "),n("div",{staticClass:"card__text"},[t._v(t._s(t.address.count_transactions))])])],1)},[],!1,null,null,null).exports,f=n(460),h=n(307),C=n(394),m={components:{CardContainer:d.a,SingleBlockTxCard:f.a,CardLoader:h.a,Pagination:C.a},props:{address:{type:Object,default:function(){return{}}}},data:function(){return{transactions:[],loading:!0,nextPage:null,prevPage:null,current_page:1,from:0,to:0}},mounted:function(){this.getAddressTransactions(this.current_page)},methods:{getAddressTransactions:function(t){var e=this;if(null===t)return!1;e.loading=!0,e.nextPage=null,e.prevPage=null,this.$axios.$get("addresses/".concat(this.address.address,"/transactions?page=").concat(t)).then(function(t){var data=t.data,n=t.current_page,r=t.prev_page_url,o=t.next_page_url,d=t.from,c=t.to;e.transactions=data,e.from=d,e.to=c,e.currentPage=n,e.prevPage=null!=r?e.currentPage-1:null,e.nextPage=null!=o?e.currentPage+1:null,e.loading=!1})}}},w=Object(_.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("CardLoader",{attrs:{count:10}}):n("CardContainer",t._l(t.transactions,function(t){return n("SingleBlockTxCard",{key:t.id,attrs:{tx:t}})}),1),t._v(" "),t.transactions.length>0?n("div",{staticClass:"page-navigation"},[n("div",{staticClass:"page-navigation__info"},[t._v(t._s(t.$t("showing"))+" "+t._s(t.from)+" "+t._s(t.$t("to"))+" "+t._s(t.to)+" "+t._s(t.$t("of"))+" "+t._s(t.address.count_transactions))]),t._v(" "),n("div",{staticClass:"page-navigation__pagination"},[n("Pagination",{attrs:{page:t.prevPage,type:"prev"},nativeOn:{click:function(e){return t.getAddressTransactions(t.prevPage)}}}),t._v(" "),n("Pagination",{attrs:{page:t.nextPage,type:"next"},nativeOn:{click:function(e){return t.getAddressTransactions(t.nextPage)}}})],1)]):t._e()],1)},[],!1,null,null,null).exports,x=n(396),k=Object(_.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},this.$listeners),[e("path",{attrs:{d:"M12 14H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2zM8 7.333A.667.667 0 0 0 7.333 8v4a.667.667 0 0 0 .667.667h4a.667.667 0 0 0 .667-.667V8A.667.667 0 0 0 12 7.333H8z",fill:"#BDBDBD"}}),e("path",{attrs:{d:"M6.487 10H3.78A1.787 1.787 0 0 1 2 8.22V3.78A1.787 1.787 0 0 1 3.78 2h4.44A1.787 1.787 0 0 1 10 3.78v2.487H8.667V3.78a.447.447 0 0 0-.447-.447H3.78a.447.447 0 0 0-.447.447v4.44a.447.447 0 0 0 .447.447h2.707V10z",fill:"#BDBDBD"}})])},[],!1,null,null,null).exports,$={components:{GetBack:r.a,SingleAddressInfo:v,CardSwitch:x.a,SingleAddressTransactions:w,Copy:k,CardLoader:h.a},data:function(){return{address:{},loading:!0,activeGeneral:!0,activeTx:!1}},mounted:function(){this.getAddress()},methods:{toggleSwitch:function(t){switch(t){case"activeGeneral":this.activeGeneral=!0,this.activeTx=!1;break;case"activeTx":this.activeTx=!0,this.activeGeneral=!1}},getAddress:function(){var t=this,e=this.$route.params.id;this.$axios.$get("addresses/".concat(e)).then(function(e){t.address=e,t.loading=!1})}}},y=Object(_.a)($,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"single-page-header"},[n("div",{staticClass:"single-page-header__wrapper"},[n("GetBack",{attrs:{text:t.$t("allAddresses"),route:"/addresses"}}),t._v(" "),n("div",{staticClass:"single-page-header__info"},[n("h1",{staticClass:"single-page-header__title"},[t._v(t._s(t.$t("addressDetails")))]),t._v(" "),n("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.$route.params.id,expression:"$route.params.id",arg:"copy"}],staticClass:"single-page-header__address"},[t._v("\n          "+t._s(t.$route.params.id)+"\n          "),n("Copy",{staticClass:"single-page-header__address-copy"})],1)]),t._v(" "),n("div",{staticClass:"single-page-header__switches"},[n("CardSwitch",{attrs:{active:t.activeGeneral},nativeOn:{click:function(e){return t.toggleSwitch("activeGeneral")}}},[t._v(t._s(t.$t("generalInfo")))]),t._v(" "),n("CardSwitch",{attrs:{active:t.activeTx},nativeOn:{click:function(e){return t.toggleSwitch("activeTx")}}},[t._v(t._s(t.$t("transactions")))])],1)],1)]),t._v(" "),t.loading?n("CardLoader",{attrs:{count:5}}):[t.activeGeneral?n("SingleAddressInfo",{attrs:{address:t.address}}):t._e(),t._v(" "),t.activeTx?n("SingleAddressTransactions",{attrs:{address:t.address}}):t._e()]],2)},[],!1,null,null,null);e.default=y.exports}}]);