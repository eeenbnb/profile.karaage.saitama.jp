"use strict";
(() => {
var exports = {};
exports.id = 81;
exports.ids = [81];
exports.modules = {

/***/ 784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index2),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "jsdom"
const external_jsdom_namespaceObject = require("jsdom");
;// CONCATENATED MODULE: external "firebase-admin"
const external_firebase_admin_namespaceObject = require("firebase-admin");
;// CONCATENATED MODULE: external "markdown-it"
const external_markdown_it_namespaceObject = require("markdown-it");
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/index2.tsx




const Home = ({ __html  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        dangerouslySetInnerHTML: {
            __html
        }
    });
const getServerSideProps = async ({ query  })=>{
    const storage = external_firebase_admin_namespaceObject.storage();
    const downloadText = await storage.bucket().file("admin/profile.md").download();
    const htmlString = new (external_markdown_it_default())({
        html: true,
        linkify: true,
        breaks: true,
        typographer: true
    }).render(downloadText[0].toString("utf-8"));
    const dom = new external_jsdom_namespaceObject.JSDOM(htmlString);
    const level = 0;
    const levels = Array(10 - level).fill(0).map((_, i)=>level + 1 + i);
    levels.forEach((l)=>{
        const item = Array.from(dom.window.document.body.querySelectorAll(`.level${l}`));
        item.forEach((v)=>{
            if (v.textContent) {
                v.textContent = "■".repeat(v.textContent.length);
                console.log(v.textContent);
            }
        });
    });
    return {
        props: {
            __html: dom.window.document.body.innerHTML
        }
    };
};
/* harmony default export */ const index2 = (Home);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(784));
module.exports = __webpack_exports__;

})();