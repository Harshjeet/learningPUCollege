(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoursePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/lgs/Learners_PU_College/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/lgs/Learners_PU_College/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/lgs/Learners_PU_College/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/lgs/Learners_PU_College/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/lgs/Learners_PU_College/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/lgs/Learners_PU_College/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/context/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function CoursePage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(86);
    if ($[0] !== "1d99598a5efa28dc9a1d981c264693991e08feb605473cb453f67eba6f1e1ca8") {
        for(let $i = 0; $i < 86; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1d99598a5efa28dc9a1d981c264693991e08feb605473cb453f67eba6f1e1ca8";
    }
    const { params } = t0;
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== t) {
        t1 = ({
            "CoursePage[getCourseData]": (slug_0)=>{
                const data = {
                    "neet": {
                        title: t("neet-title"),
                        subtitle: t("neet-subtitle"),
                        image: "/resources/neet-prep.jpg",
                        description: t("neet-desc"),
                        highlights: [
                            t("neet-h1"),
                            t("neet-h2"),
                            t("neet-h3"),
                            t("neet-h4"),
                            t("neet-h5"),
                            t("neet-h6")
                        ],
                        successMetrics: [
                            "92% " + t("stat-success") + " in 2023",
                            "Average score improvement: 35%",
                            "15 students in top 1000 ranks",
                            "AIIMS admissions: 8 students"
                        ],
                        fee: "\u20B91,50,000 (Installment options available)",
                        includes: "Study materials, online resources, test series, lab access",
                        duration: t("years-2"),
                        successRate: "92%",
                        category: t("stream-medical"),
                        categoryColor: "bg-green-100 text-green-800"
                    },
                    "iit-jee": {
                        title: t("iit-jee-title"),
                        subtitle: t("iit-jee-subtitle"),
                        image: "/resources/iit-jee-study.jpg",
                        description: t("iit-jee-desc"),
                        highlights: [
                            "Advanced Mathematics, Physics, Chemistry",
                            "IIT alumni as faculty members",
                            "Problem-solving intensive sessions",
                            "Regular competitive assessments",
                            "Previous years question paper analysis",
                            "Time management strategies"
                        ],
                        successMetrics: [
                            "89% " + t("stat-success") + " in 2023",
                            "12 students in top 1000 ranks",
                            "Average score improvement: 40%",
                            "IIT admissions: 28 students"
                        ],
                        fee: "\u20B91,75,000 (Installment options available)",
                        includes: "Study materials, online resources, test series, doubt sessions",
                        duration: t("years-2"),
                        successRate: "89%",
                        category: t("stream-engineering"),
                        categoryColor: "bg-blue-100 text-blue-800"
                    },
                    "cet": {
                        title: t("cet-title"),
                        subtitle: t("cet-subtitle"),
                        image: "/resources/sat-classroom.jpg",
                        description: t("cet-desc"),
                        highlights: [
                            "State-specific curriculum coverage",
                            "Expert faculty with CET experience",
                            "Pattern-based mock tests",
                            "Time management strategies",
                            "Focus on speed and accuracy",
                            "Regular parent-teacher meetings"
                        ],
                        successMetrics: [
                            "94% " + t("stat-success") + " in 2023",
                            "45 students in top 1000 ranks",
                            "Average score improvement: 38%",
                            "Engineering admissions: 156 students"
                        ],
                        fee: "\u20B91,25,000 (Installment options available)",
                        includes: "Study materials, online resources, test series",
                        duration: t("years-1-2"),
                        successRate: "94%",
                        category: t("stream-state"),
                        categoryColor: "bg-purple-100 text-purple-800"
                    },
                    "sat": {
                        title: t("sat-title"),
                        subtitle: t("sat-subtitle"),
                        image: "/resources/sat-classroom.jpg",
                        description: t("sat-desc"),
                        highlights: [
                            "Evidence-based Reading and Writing",
                            "Advanced Math concepts",
                            "Essay writing strategies",
                            "Test-taking techniques",
                            "Vocabulary building",
                            "Full-length practice tests"
                        ],
                        successMetrics: [
                            "96% " + t("stat-success") + " in 2023",
                            "5 perfect scores (1600/1600)",
                            "Average score improvement: 200+ points",
                            "Ivy League admissions: 12 students"
                        ],
                        fee: "\u20B980,000 (Flexible scheduling available)",
                        includes: "Study materials, online resources, practice tests, counseling",
                        duration: t("months-6-12"),
                        successRate: "96%",
                        category: t("stream-international"),
                        categoryColor: "bg-red-100 text-red-800"
                    }
                };
                return data[slug_0];
            }
        })["CoursePage[getCourseData]"];
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const getCourseData = t1;
    let course;
    let t10;
    let t11;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[3] !== getCourseData || $[4] !== slug || $[5] !== t) {
        course = getCourseData(slug);
        if (!course) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
        }
        t10 = "bg-white min-h-screen";
        const t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: course.image,
                alt: course.title,
                fill: true,
                className: "object-cover"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                lineNumber: 114,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 114,
            columnNumber: 17
        }, this);
        let t13;
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                    lineNumber: 117,
                    columnNumber: 92
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                lineNumber: 117,
                columnNumber: 13
            }, this);
            $[17] = t13;
        } else {
            t13 = $[17];
        }
        const t14 = t("back-to-streams");
        let t15;
        if ($[18] !== t14) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/#streams",
                className: "text-blue-200 hover:text-white transition-colors flex items-center gap-2",
                children: [
                    t13,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                lineNumber: 125,
                columnNumber: 13
            }, this);
            $[18] = t14;
            $[19] = t15;
        } else {
            t15 = $[19];
        }
        let t16;
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 text-emerald-400",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                    lineNumber: 133,
                    columnNumber: 109
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                lineNumber: 133,
                columnNumber: 13
            }, this);
            $[20] = t16;
        } else {
            t16 = $[20];
        }
        const t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        t("duration"),
                        ": ",
                        course.duration
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                    lineNumber: 138,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 138,
            columnNumber: 17
        }, this);
        let t18;
        if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 text-emerald-400",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                    lineNumber: 141,
                    columnNumber: 109
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                lineNumber: 141,
                columnNumber: 13
            }, this);
            $[21] = t18;
        } else {
            t18 = $[21];
        }
        const t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        t("stat-success"),
                        ": ",
                        course.successRate
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                    lineNumber: 146,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 146,
            columnNumber: 17
        }, this);
        let t20;
        if ($[22] !== t17 || $[23] !== t19) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-6 text-sm",
                children: [
                    t17,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                lineNumber: 149,
                columnNumber: 13
            }, this);
            $[22] = t17;
            $[23] = t19;
            $[24] = t20;
        } else {
            t20 = $[24];
        }
        const t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 mb-6",
                    children: [
                        t15,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `px-3 py-1 rounded-full text-sm font-medium ${course.categoryColor.replace("bg-", "bg-opacity-20 bg-").replace("text-", "text-white ")} border border-white/20`,
                            children: course.category
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                            lineNumber: 156,
                            columnNumber: 95
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                    lineNumber: 156,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "font-display text-5xl font-bold mb-6",
                    children: course.title
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                    lineNumber: 156,
                    columnNumber: 303
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-blue-100 mb-8",
                    children: course.description
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                    lineNumber: 156,
                    columnNumber: 375
                }, this),
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 156,
            columnNumber: 17
        }, this);
        let t22;
        if ($[25] !== t21) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: t21
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                lineNumber: 159,
                columnNumber: 13
            }, this);
            $[25] = t21;
            $[26] = t22;
        } else {
            t22 = $[26];
        }
        if ($[27] !== t12 || $[28] !== t22) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden",
                children: [
                    t12,
                    t22
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                lineNumber: 166,
                columnNumber: 13
            }, this);
            $[27] = t12;
            $[28] = t22;
            $[29] = t11;
        } else {
            t11 = $[29];
        }
        t9 = "py-20";
        t8 = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
        t7 = "grid lg:grid-cols-3 gap-12";
        t5 = "lg:col-span-2 space-y-12";
        const t23 = t("program-highlights");
        let t24;
        if ($[30] !== t23) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-display text-3xl font-bold text-blue-900 mb-6",
                children: t23
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                lineNumber: 180,
                columnNumber: 13
            }, this);
            $[30] = t23;
            $[31] = t24;
        } else {
            t24 = $[31];
        }
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid sm:grid-cols-2 gap-4",
                    children: course.highlights.map(_CoursePageCourseHighlightsMap)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                    lineNumber: 186,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 186,
            columnNumber: 10
        }, this);
        const t25 = t("success-metrics");
        if ($[32] !== t25) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-display text-3xl font-bold text-blue-900 mb-6",
                children: t25
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                lineNumber: 189,
                columnNumber: 12
            }, this);
            $[32] = t25;
            $[33] = t4;
        } else {
            t4 = $[33];
        }
        t2 = "grid sm:grid-cols-2 gap-6";
        t3 = course.successMetrics.map(_CoursePageCourseSuccessMetricsMap);
        $[3] = getCourseData;
        $[4] = slug;
        $[5] = t;
        $[6] = course;
        $[7] = t10;
        $[8] = t11;
        $[9] = t2;
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
        $[14] = t7;
        $[15] = t8;
        $[16] = t9;
    } else {
        course = $[6];
        t10 = $[7];
        t11 = $[8];
        t2 = $[9];
        t3 = $[10];
        t4 = $[11];
        t5 = $[12];
        t6 = $[13];
        t7 = $[14];
        t8 = $[15];
        t9 = $[16];
    }
    let t12;
    if ($[34] !== t2 || $[35] !== t3) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[34] = t2;
        $[35] = t3;
        $[36] = t12;
    } else {
        t12 = $[36];
    }
    let t13;
    if ($[37] !== t12 || $[38] !== t4) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[37] = t12;
        $[38] = t4;
        $[39] = t13;
    } else {
        t13 = $[39];
    }
    let t14;
    if ($[40] !== t13 || $[41] !== t5 || $[42] !== t6) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[40] = t13;
        $[41] = t5;
        $[42] = t6;
        $[43] = t14;
    } else {
        t14 = $[43];
    }
    const t15 = t("course-details");
    let t16;
    if ($[44] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-display text-xl font-bold text-blue-900 mb-6",
            children: t15
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[44] = t15;
        $[45] = t16;
    } else {
        t16 = $[45];
    }
    const t17 = t("annual-fee");
    let t18;
    if ($[46] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500 mb-1",
            children: t17
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[46] = t17;
        $[47] = t18;
    } else {
        t18 = $[47];
    }
    let t19;
    if ($[48] !== course.fee) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-blue-900",
            children: course.fee
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[48] = course.fee;
        $[49] = t19;
    } else {
        t19 = $[49];
    }
    let t20;
    if ($[50] !== t18 || $[51] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[50] = t18;
        $[51] = t19;
        $[52] = t20;
    } else {
        t20 = $[52];
    }
    const t21 = t("course-inclusions");
    let t22;
    if ($[53] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500 mb-1",
            children: t21
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 290,
            columnNumber: 11
        }, this);
        $[53] = t21;
        $[54] = t22;
    } else {
        t22 = $[54];
    }
    let t23;
    if ($[55] !== course.includes) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-700",
            children: course.includes
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[55] = course.includes;
        $[56] = t23;
    } else {
        t23 = $[56];
    }
    let t24;
    if ($[57] !== t22 || $[58] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[57] = t22;
        $[58] = t23;
        $[59] = t24;
    } else {
        t24 = $[59];
    }
    let t25;
    if ($[60] !== t20 || $[61] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 mb-8",
            children: [
                t20,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[60] = t20;
        $[61] = t24;
        $[62] = t25;
    } else {
        t25 = $[62];
    }
    const t26 = t("enroll-now");
    let t27;
    if ($[63] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/connect",
            className: "block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4",
            children: t26
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 325,
            columnNumber: 11
        }, this);
        $[63] = t26;
        $[64] = t27;
    } else {
        t27 = $[64];
    }
    const t28 = t("download-brochure");
    let t29;
    if ($[65] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/connect",
            className: "block w-full border-2 border-blue-600 text-blue-600 text-center py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors",
            children: t28
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[65] = t28;
        $[66] = t29;
    } else {
        t29 = $[66];
    }
    let t30;
    if ($[67] !== t16 || $[68] !== t25 || $[69] !== t27 || $[70] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24",
                children: [
                    t16,
                    t25,
                    t27,
                    t29
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                lineNumber: 342,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[67] = t16;
        $[68] = t25;
        $[69] = t27;
        $[70] = t29;
        $[71] = t30;
    } else {
        t30 = $[71];
    }
    let t31;
    if ($[72] !== t14 || $[73] !== t30 || $[74] !== t7) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t14,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[72] = t14;
        $[73] = t30;
        $[74] = t7;
        $[75] = t31;
    } else {
        t31 = $[75];
    }
    let t32;
    if ($[76] !== t31 || $[77] !== t8) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: t31
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 363,
            columnNumber: 11
        }, this);
        $[76] = t31;
        $[77] = t8;
        $[78] = t32;
    } else {
        t32 = $[78];
    }
    let t33;
    if ($[79] !== t32 || $[80] !== t9) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t9,
            children: t32
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 372,
            columnNumber: 11
        }, this);
        $[79] = t32;
        $[80] = t9;
        $[81] = t33;
    } else {
        t33 = $[81];
    }
    let t34;
    if ($[82] !== t10 || $[83] !== t11 || $[84] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 381,
            columnNumber: 11
        }, this);
        $[82] = t10;
        $[83] = t11;
        $[84] = t33;
        $[85] = t34;
    } else {
        t34 = $[85];
    }
    return t34;
}
_s(CoursePage, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = CoursePage;
function _CoursePageCourseSuccessMetricsMap(metric, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-6 h-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                            lineNumber: 392,
                            columnNumber: 357
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                        lineNumber: 392,
                        columnNumber: 278
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                    lineNumber: 392,
                    columnNumber: 173
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-800 font-medium",
                    children: metric
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                    lineNumber: 392,
                    columnNumber: 639
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
            lineNumber: 392,
            columnNumber: 132
        }, this)
    }, index_0, false, {
        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
        lineNumber: 392,
        columnNumber: 10
    }, this);
}
function _CoursePageCourseHighlightsMap(highlight, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start gap-3 bg-blue-50 p-4 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6 text-blue-600 flex-shrink-0",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M5 13l4 4L19 7"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                    lineNumber: 395,
                    columnNumber: 195
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                lineNumber: 395,
                columnNumber: 88
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-700",
                children: highlight
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
                lineNumber: 395,
                columnNumber: 289
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/[slug]/page.tsx",
        lineNumber: 395,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CoursePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/lgs/Learners_PU_College/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/lgs/Learners_PU_College/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=OneDrive_Desktop_lgs_Learners_PU_College_dd09aedf._.js.map