webpackJsonp([0],{

/***/ "HZ6N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked__ = __webpack_require__("EFqf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_marked__);
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['markdown', 'enableHtml'],
  name: 'ResumeEditor',
  computed: {
    result: function () {
      return this.enableHtml ? __WEBPACK_IMPORTED_MODULE_0_marked___default()(this.markdown) : this.markdown;
    }
  },
  methods: {
    goBottom: function () {
      this.$refs.container.scrollTop = 100000;
    },
    goTop: function () {
      this.$refs.container.scrollTop = 0;
    }
  }
});

/***/ }),

/***/ "IFz1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09d43eef_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("urVx");
function injectStyle (ssrContext) {
  __webpack_require__("eImU")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09d43eef_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "MPzD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "Q6AB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Uhku":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__StyleEditor__ = __webpack_require__("iWpO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResumeEditor__ = __webpack_require__("rRep");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_reset_css__ = __webpack_require__("MPzD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_reset_css__);
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    StyleEditor: __WEBPACK_IMPORTED_MODULE_0__StyleEditor__["a" /* default */],
    ResumeEditor: __WEBPACK_IMPORTED_MODULE_1__ResumeEditor__["a" /* default */]
  },
  data() {
    return {
      interval: 10,
      currentStyle: "",
      enableHtml: false,
      // 样式描述文本
      fullStyle: [`
/*
 * 大家好，我是杨玉峰
 * 现在是找工作的好季节，好多公司都在招聘，你是不是也在准备简历呀。
 * 说做就做，我也来写一份简历！
 */
/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
  -webkit-transition: all .3s;
  -moz-transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222); 
  background:rgb(0,43,54);
}
/* 文字离边框太近了 */
.styleEditor {
	padding: .5em;
	border: 1px solid;
	margin: .5em;
	overflow: auto;
	width: 45vw; 
	height: 90vh;
}
/* 代码高亮 */
.token.comment{
	color:#a9a1a1;
}
.token.selector{
	color: rgb(90, 101, 11); 
}
.token.property{
	color: rgb(187,137,0); 
}
.token.punctuation{
	color: yellow; 
}
.token.function{
	color: rgb(42,161,152); 
}
.styleEditor pre{
	color: #504949;
}

/* 加点 3D 效果呗 */
html{
    perspective: 1000px;
}
.styleEditor {
    position: fixed; 
    left: 0; 
    top: 0;
    -webkit-transition: none;
    transition: none;
    -webkit-transform: rotateY(10deg) translateZ(-100px) ;
    transform: rotateY(10deg) translateZ(-100px) ;
}

/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
    position: fixed; right: 0; top: 0;
    padding: .5em;  margin: .5em;
    width: 48vw; height: 90vh;
    border: 1px solid;
    background: white; color: #222;
    overflow: auto;
}
/* 好了，我开始写简历了 */`, `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */`, `/* 再对 HTML 加点样式 */
.resumeEditor{
    padding: 2em;
}
.resumeEditor h2{
    display: inline-block;
    border-bottom: 1px solid;
    margin: 1em 0 .5em;
}
.resumeEditor table{
	width:500px;
}
.resumeEditor table tr th,
.resumeEditor table tr td{
	border:1px solid;	
	text-align:center;
	height:50px;
	line-height:50px;
}

.resumeEditor ul,.resumeEditor ol{
    list-style: none;
}
.resumeEditor ul> li::before{
    content: '•';
    margin-right: .5em;
}
.resumeEditor ol {
    counter-reset: section;
}
.resumeEditor ol li::before {
    counter-increment: section;
    content: counters(section, ".") " ";
    margin-right: .5em;
}
.resumeEditor blockquote {
    margin: 1em;
    padding: .5em;
    background: #ddd;
}
`],
      currentMarkdown: "",
      fullMarkdown: `
# 杨玉峰

## 个人信息

出生日期 | 联系方式 | 所在地 | 职位
---|--- |--- 
1996.04.23| 18612983734 | 中国北京 | 前端开发工程师

## 工作经历

2017-2018：【武汉三新文化传媒有限公司】书目管理，学校图书馆业务

2018-至今：【北京开维创科技有限公司】大数据可视化

## 专业技能

1.熟悉 W3C 标准， HTML5 和 CSS3 新特性。熟练掌握 Javascript 的 DOM,BOM,AJAX,JSON,跨域等核心技术。

2.熟悉 javascript，jQuery，jquery mobile， BootStrap，VueJs 等框架，能够实现网页的动态效果与页面交互。

3.熟练处理浏览器兼容性问题，掌握网站性能优化技巧。

4.熟悉移动端适配、响应式和自适应的页面设计，能够独立开发移动端页面。

5.熟悉 webpack，grunt 等自动化构建工具。熟悉 less，sass，stylus 等 css 预处理，有使用经验。

6.熟练使用 NodeJs（npm）快速构建 WEB（Express）服务器，快速搭建项目。初步了解 react，angular。

7.了解 Es6 新标准, Http 协议，面向对象和组件化的开发思想。

8.熟练使用 Photoshop，熟悉 Webstorm，H-builder，Notepad++，Dreamweaver 等网页制作软件。了解 Git，SVN 版本控制工具。

9.了解 PHP 和 MySQL，会常规的CRUD。

## 教育背景

2014.9-2017.7 武汉软件工程职业学院 计算机应用技术

## 个人评价

1.热爱编程，学习能力强，有较强的求知欲。经常去 GitHub,CSDN 等社区，对于新的框架可以的快速入手。

2.有较强的分析和解决问题的能力，做事有目标性。遇到问题沉着冷静分析，做事前做好计划，遇到问题能够快速定位解决。对于个人的
职业发展同样如此，计划在 3-5 年做到由前端到后台的进军，成为一个全栈工程师。

## 我的主页

[github](https://github.com/bigBonjour)

[我的博客](https://segmentfault.com/u/yangyufeng)
`
    };
  },
  created() {
    this.makeResume();
  },
  methods: {
    makeResume: async function () {
      //写第一段css代码
      await this.progressivelyShowStyle(0);
      //写简历
      await this.progressivelyShowResume();
      //写第二段css代码
      await this.progressivelyShowStyle(1);
      //用markdown展示简历
      await this.showResumeHtml();
      //写第三段css代码(给简历加样式)
      await this.progressivelyShowStyle(2);
    },
    //逐步显示style样式
    //有顺序的完成  同步回调
    //写css代码
    progressivelyShowStyle(n) {
      return new Promise((resolve, reject) => {
        //书写速度
        let interval = this.interval;
        //显示代码
        let showStyle = async function () {
          //书写第n个样式代码段
          let style = this.fullStyle[n];
          if (!style) {
            return;
          }
          //计算前 n 个 style 的字符总数
          let length = this.fullStyle.filter((_, index) => index <= n).map(item => item.length).reduce((p, c) => p + c, 0);
          let prefixLength = length - style.length;
          if (this.currentStyle.length < length) {
            let l = this.currentStyle.length - prefixLength;
            let char = style.substring(l, l + 1) || " ";
            this.currentStyle += char;
            if (style.substring(l - 1, l) === "\n" && this.$refs.styleEditor) {
              this.$nextTick(() => {
                this.$refs.styleEditor.goBottom();
              });
            }
            setTimeout(showStyle, interval);
          } else {
            resolve();
          }
        }.bind(this);
        showStyle();
      });
    },
    progressivelyShowResume() {
      return new Promise((resovle, reject) => {
        //markdown的代码长度
        let length = this.fullMarkdown.length;
        //书写速度
        let interval = this.interval;
        let showResume = () => {
          let currMarkLen = this.currentMarkdown.length;
          if (currMarkLen < length) {
            this.currentMarkdown = this.fullMarkdown.substring(0, currMarkLen + 1);
            let char = this.currentMarkdown[currMarkLen];
            if (char === "\n" && this.$refs.resumeEditor) {
              console.log(char);
              this.$nextTick(() => {
                this.$refs.resumeEditor.goBottom();
              });
            }
            setTimeout(showResume, interval);
          } else {
            resovle();
          }
        };
        showResume();
      });
    },
    showResumeHtml() {
      return new Promise((resovle, reject) => {
        this.enableHtml = true;
        resovle();
      });
    }
  }
});

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Main__ = __webpack_require__("s6+2");



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
	routes: [{
		path: '/',
		component: __WEBPACK_IMPORTED_MODULE_2__components_Main__["a" /* default */]
	}]
}));

/***/ }),

/***/ "eImU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "f35Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs__ = __webpack_require__("OEdS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prismjs__);
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Editor',
  props: ['code'],
  computed: {
    highlightedCode: function () {
      return __WEBPACK_IMPORTED_MODULE_0_prismjs___default.a.highlight(this.code, __WEBPACK_IMPORTED_MODULE_0_prismjs___default.a.languages.css);
    },
    codeInStyleTag: function () {
      return `<style>${this.code}</style>`;
    }
  },
  methods: {
    goBottom() {
      this.$refs.container.scrollTop = 100000;
    }
  }
});

/***/ }),

/***/ "gN6n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticClass:"resumeEditor",class:{htmlMode:_vm.enableHtml}},[(_vm.enableHtml)?_c('div',{domProps:{"innerHTML":_vm._s(_vm.result)}}):_c('pre',[_vm._v(_vm._s(_vm.result))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "iDIJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrap"},[_c('StyleEditor',{ref:"styleEditor",attrs:{"code":_vm.currentStyle}}),_vm._v(" "),_c('ResumeEditor',{ref:"resumeEditor",attrs:{"markdown":_vm.currentMarkdown,"enableHtml":_vm.enableHtml}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "iWpO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_StyleEditor_vue__ = __webpack_require__("f35Q");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0618924a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_StyleEditor_vue__ = __webpack_require__("l9Cq");
function injectStyle (ssrContext) {
  __webpack_require__("yQ5p")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0618924a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_StyleEditor_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0618924a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_StyleEditor_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "l9Cq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticClass:"styleEditor"},[_c('div',{staticClass:"code",domProps:{"innerHTML":_vm._s(_vm.codeInStyleTag)}}),_vm._v(" "),_c('pre',{domProps:{"innerHTML":_vm._s(_vm.highlightedCode)}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "rRep":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ResumeEditor_vue__ = __webpack_require__("HZ6N");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e93bd1a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ResumeEditor_vue__ = __webpack_require__("gN6n");
function injectStyle (ssrContext) {
  __webpack_require__("IFz1")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6e93bd1a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ResumeEditor_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e93bd1a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ResumeEditor_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "s6+2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Main_vue__ = __webpack_require__("Uhku");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f56476f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Main_vue__ = __webpack_require__("iDIJ");
function injectStyle (ssrContext) {
  __webpack_require__("Q6AB")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1f56476f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Main_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f56476f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "urVx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app'
});

/***/ }),

/***/ "yQ5p":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.c5c4571a9445b01411a1.js.map