webpackJsonp([1,0],[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(9),o=r(a),u=n(5),c=r(u);new o.default({el:"#app",template:"<App/>",components:{App:c.default}})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),o=r(a);t.default={name:"app",components:{Format:o.default}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"format",data:function(){return{text:""}},methods:{updateText:function(e){this.text=e;var t=e.replace(/\n/g," ").replace(/\./g,".\n").replace(/^\s+/gm,"").replace(/\s+$/gm,"");this.$refs.output.value=t},selectAll:function(e){setTimeout(function(){e.target.select()},0)}}}},function(e,t){},function(e,t){},function(e,t,n){var r,a;n(3),r=n(1);var o=n(7);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,e.exports=r},function(e,t,n){var r,a;n(4),r=n(2);var o=n(8);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-3bf2715c",e.exports=r},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{attrs:{id:"app"}},[t("format")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"format"},[t("h1",[e._v("英語論文をGoogle翻訳にかけやすくするやつ")]),e._v(" "),t("p",[e._v('左側に入力したテキストの改行を削除して、"."で改行処理を行います。')]),e._v(" "),t("div",[t("textarea",{attrs:{placeholder:"Input lines"},domProps:{value:e.text},on:{focus:e.selectAll,input:function(t){e.updateText(t.target.value)}}}),e._v(" "),t("textarea",{ref:"output",attrs:{placeholder:"Output lines"},on:{focus:e.selectAll}})])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.be0d7e21c1687f398152.js.map