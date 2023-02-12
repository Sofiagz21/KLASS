(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9090);
;// CONCATENATED MODULE: external "antd/dist/antd.min.js"
const antd_min_js_namespaceObject = require("antd/dist/antd.min.js");
// EXTERNAL MODULE: ./node_modules/antd/dist/reset.css
var dist_reset = __webpack_require__(9107);
// EXTERNAL MODULE: ./public/css/styles.css
var styles = __webpack_require__(8163);
;// CONCATENATED MODULE: external "antd"
const external_antd_namespaceObject = require("antd");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "@ant-design/icons"
const icons_namespaceObject = require("@ant-design/icons");
;// CONCATENATED MODULE: ./components/TopNav.js
/* navbar*/ 



const { Item  } = external_antd_namespaceObject.Menu; //Menu.Item
const TopNav = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_namespaceObject.Menu, {
        mode: "horizontal",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.AppstoreOutlined, {}),
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    legacyBehavior: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "app"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.LoginOutlined, {}),
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/login",
                    legacyBehavior: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Login"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.UserAddOutlined, {}),
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/register",
                    legacyBehavior: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Register"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_TopNav = (TopNav);

;// CONCATENATED MODULE: ./components/Wave.js

const Wave = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {});
};
/* harmony default export */ const components_Wave = (Wave);

;// CONCATENATED MODULE: ./pages/_app.js





 //NAVBAR
 // Wave
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Wave, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_TopNav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            ";"
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8163:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,873], () => (__webpack_exec__(7342)));
module.exports = __webpack_exports__;

})();