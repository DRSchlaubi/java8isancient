(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{256:function(e,t,o){var content=o(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(83).default)("1b7833da",content,!0,{sourceMap:!1})},257:function(e,t,o){"use strict";o(256)},258:function(e,t,o){var r=o(82)(!1);r.push([e.i,".age-text{font-weight:bolder;font-size:xx-large}body{--text-color:#222;--bkg-color:#fff}body.dark-theme{--text-color:#eee;--bkg-color:#121212}@media (color-index:48){body{--text-color:#eee;--bkg-color:#121212}body.light-theme{--text-color:#222;--bkg-color:#fff}}@media (prefers-color-scheme:dark){body{--text-color:#eee;--bkg-color:#121212}body.light-theme{--text-color:#222;--bkg-color:#fff}}",""]),e.exports=r},259:function(e,t,o){"use strict";o.r(t);o(25);var r=o(3),n=o(1),c=(o(170),n.a.extend({data:function(){return{difference:null}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o,r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("http://worldtimeapi.org/api/ip");case 2:o=t.sent,r=e.$moment(1e3*o.unixtime),n=e.$moment(13950972e5),e.$data.difference=e.$moment.preciseDiff(r,n,!0);case 6:case"end":return t.stop()}}),t)})))()}})),l=(o(257),o(46)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex flex-col justify-center items-center h-full"},[e.difference?o("p",{staticClass:"age-text"},[e._v("\n    "+e._s(e.$t("java_is_old",{specifier:e.$tc("time.years",e.difference.years)+", "+e.$tc("time.months",e.difference.months)+" "+e.$t("and")+" "+e.$tc("time.days",e.difference.days)}))+"\n  ")]):o("p",{staticClass:"age-text"},[e._v("\n    "+e._s(e.$t("java_is_old",{specifier:e.$t("loading")}))+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports}}]);