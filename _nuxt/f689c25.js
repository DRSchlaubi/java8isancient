(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{260:function(e,t,n){var content=n(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(97).default)("1b7833da",content,!0,{sourceMap:!1})},261:function(e,t,n){"use strict";n(260)},262:function(e,t,n){var o=n(96)(!1);o.push([e.i,".age-text{font-weight:bolder;text-align:center;font-size:xx-large}body{color:#121212;background-color:#fff}@media (color-index:48){body{color:#fff;background-color:#121212}}@media (prefers-color-scheme:dark){body{color:#fff;background-color:#121212}}",""]),e.exports=o},267:function(e,t,n){"use strict";n.r(t);var o=n(1),c=(n(182),o.a.extend({data:function(){return{difference:null}},mounted:function(){var e=this.$moment(),t=this.$moment(13950972e5);this.$data.difference=this.$moment.preciseDiff(e,t,!0)}})),r=(n(261),n(58)),component=Object(r.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col justify-center items-center h-full"},[e.difference?n("p",{staticClass:"age-text"},[e._v("\n    "+e._s(e.$t("java_is_old",{specifier:e.$tc("time.years",e.difference.years)+", "+e.$tc("time.months",e.difference.months)+" "+e.$t("and")+" "+e.$tc("time.days",e.difference.days)}))+"\n  ")]):n("p",{staticClass:"age-text"},[e._v("\n    "+e._s(e.$t("java_is_old",{specifier:e.$t("loading")}))+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports}}]);