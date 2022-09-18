"use strict";
(() => {
var exports = {};
exports.id = 330;
exports.ids = [330];
exports.modules = {

/***/ 234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "jsdom"
const external_jsdom_namespaceObject = require("jsdom");
;// CONCATENATED MODULE: external "firebase-admin"
const external_firebase_admin_namespaceObject = require("firebase-admin");
;// CONCATENATED MODULE: external "markdown-it"
const external_markdown_it_namespaceObject = require("markdown-it");
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/getProfile.ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



async function handler(req, res) {
    const storage = external_firebase_admin_namespaceObject.storage();
    const downloadText = await storage.bucket().file("admin/profile.md").download();
    const htmlString = new (external_markdown_it_default())({
        html: true,
        linkify: true,
        breaks: true,
        typographer: true
    }).render(downloadText[0].toString("utf-8"));
    // const htmlString = "<p>text</p>";
    const tokenListDL = await storage.bucket().file("admin/token.json").download();
    const tokenList = JSON.parse(tokenListDL[0].toString("utf-8"));
    const dom = new external_jsdom_namespaceObject.JSDOM(htmlString);
    const level = String(req.query.token) in tokenList ? tokenList[String(req.query.token)] : 0;
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
    res.status(200).json({
        __html: dom.window.document.body.innerHTML
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(234));
module.exports = __webpack_exports__;

})();