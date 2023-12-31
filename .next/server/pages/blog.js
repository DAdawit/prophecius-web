"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195,51];
exports.modules = {

/***/ 4674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _data_sections_popular_posts_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4915);
/* harmony import */ var _library_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3265);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_svg_icons_Arrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4002);





const PopularPostsSection = ({ posts  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "mil-soft-bg",
            id: "blog",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mil-p-120-60",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row align-items-center mil-mb-30",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-6 mil-mb-30",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "mil-up",
                                    children: _data_sections_popular_posts_json__WEBPACK_IMPORTED_MODULE_1__/* .title */ .TN
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-6 mil-mb-30",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mil-adaptive-right mil-up",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: _data_sections_popular_posts_json__WEBPACK_IMPORTED_MODULE_1__/* .button.link */ .LI.p,
                                        className: "mil-link mil-dark mil-arrow-place",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: _data_sections_popular_posts_json__WEBPACK_IMPORTED_MODULE_1__/* .button.label */ .LI.P
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_svg_icons_Arrow__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: posts.slice(0, _data_sections_popular_posts_json__WEBPACK_IMPORTED_MODULE_1__/* .numOfItems */ .jX).map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: `/blog/${item.id}`,
                                    className: "mil-blog-card mil-mb-60",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mil-cover-frame mil-up",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: item.image,
                                                alt: item.title
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mil-post-descr",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mil-labels mil-up mil-mb-30",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mil-label mil-upper mil-accent",
                                                            children: item.category
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mil-label mil-upper",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_library_date__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                                dateString: item.date
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "mil-up mil-mb-30",
                                                    children: item.title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mil-post-text mil-up mil-mb-30",
                                                    children: item.short
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mil-link mil-dark mil-arrow-place mil-up",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Read more"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_svg_icons_Arrow__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, `blog-post-${key}`))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularPostsSection);


/***/ }),

/***/ 2243:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _blog_page_page___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6699);
/* harmony import */ var _components_PaginatedBlog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9925);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(520);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_PageBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(163);
/* harmony import */ var _components_sections_PopularPosts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4674);
/* harmony import */ var _components_sections_Subscribe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3987);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(435);
/* harmony import */ var _library_categories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7357);
/* harmony import */ var _library_posts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(745);
/* harmony import */ var _data_sections_popular_posts_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_blog_page_page___WEBPACK_IMPORTED_MODULE_1__, _library_categories__WEBPACK_IMPORTED_MODULE_9__, _library_posts__WEBPACK_IMPORTED_MODULE_10__]);
([_blog_page_page___WEBPACK_IMPORTED_MODULE_1__, _library_categories__WEBPACK_IMPORTED_MODULE_9__, _library_posts__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Blog = ({ posts , totalPosts , currentPage , categories , popular  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageBanner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                pageTitle: 'Exploring <span className="mil-thin">the World</span> <br> Through Our <span className="mil-thin">Blog</span>',
                breadTitle: "Blog",
                anchorLabel: "Publications",
                anchorLink: "#blog",
                paddingBottom: 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_PopularPosts__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                posts: popular
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container mil-p-120-120",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row align-items-center mil-mb-30",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 mil-mb-30",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "mil-up",
                                        children: "Categories:"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-8 mil-mb-30",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mil-adaptive-right mil-up",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "mil-category-list",
                                            children: [
                                                categories.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            href: `/blog/category/${item.id}`,
                                                            children: item.title
                                                        })
                                                    }, `categories-item-${key}`)),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        href: "/blog",
                                                        className: "mil-active",
                                                        children: "All categories"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PaginatedBlog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    items: posts
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    currentPage: currentPage,
                                    totalItems: totalPosts,
                                    perPage: _blog_page_page___WEBPACK_IMPORTED_MODULE_1__.PER_PAGE,
                                    renderPageLink: (page)=>`/blog/page/${page}`
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Subscribe__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);
async function getStaticProps() {
    const { posts , total  } = (0,_library_posts__WEBPACK_IMPORTED_MODULE_10__/* .getPaginatedPostsData */ .hM)(_blog_page_page___WEBPACK_IMPORTED_MODULE_1__.PER_PAGE, 1);
    const categoriesData = await (0,_library_categories__WEBPACK_IMPORTED_MODULE_9__/* .getSortedCategoriesData */ .HB)();
    const popularsData = await (0,_library_posts__WEBPACK_IMPORTED_MODULE_10__/* .getFeaturedPostsData */ .Xr)(_data_sections_popular_posts_json__WEBPACK_IMPORTED_MODULE_11__/* .featured */ .GC);
    return {
        props: {
            posts,
            totalPosts: total,
            currentPage: 1,
            categories: categoriesData,
            popular: popularsData
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 4915:
/***/ ((module) => {

module.exports = JSON.parse('{"TN":"Things going on inside Prophecius","GC":["5-steps-to-create-marketing-plan-4","5-steps-to-create-marketing-plan"],"LI":{"p":"/blog/code","P":"View all"},"jX":2}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,806,435,163,289,119,699], () => (__webpack_exec__(2243)));
module.exports = __webpack_exports__;

})();