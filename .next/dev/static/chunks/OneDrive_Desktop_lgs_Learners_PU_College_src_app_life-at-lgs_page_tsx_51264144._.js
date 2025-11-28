(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/lgs/Learners_PU_College/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/lgs/Learners_PU_College/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/lgs/Learners_PU_College/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/lgs/Learners_PU_College/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$animejs$2f$lib$2f$anime$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/lgs/Learners_PU_College/node_modules/animejs/lib/anime.es.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const LifeAtLGS = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(99);
    if ($[0] !== "a31b525afee3891507980a5aa5b9952b12c65d9a5ca738f41ee469b3bd155201") {
        for(let $i = 0; $i < 99; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a31b525afee3891507980a5aa5b9952b12c65d9a5ca738f41ee469b3bd155201";
    }
    const [activeAchievementFilter, setActiveAchievementFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [activeGalleryFilter, setActiveGalleryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [visiblePhotos, setVisiblePhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(8);
    const [selectedFacility, setSelectedFacility] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                id: 1,
                name: "Rahul Sharma",
                category: "academic",
                achievement: "NEET All India Rank 127",
                description: "Secured admission in AIIMS Delhi with 99.8 percentile",
                year: "2023",
                image: "/resources/student-achievers.jpg",
                details: "Rahul's dedication and consistent hard work helped him achieve this remarkable feat. He followed our structured study plan and attended all doubt-clearing sessions."
            },
            {
                id: 2,
                name: "Priya Patel",
                category: "sports",
                achievement: "National Badminton Champion",
                description: "Won gold medal in U-18 National Badminton Championship",
                year: "2023",
                image: "/resources/student-achievers.jpg",
                details: "Priya balanced her academic commitments with rigorous badminton training. Her time management skills and determination led to this national recognition."
            },
            {
                id: 3,
                name: "Amit Kumar",
                category: "cultural",
                achievement: "Inter-school Debate Winner",
                description: "Best speaker award at State Level Debate Competition",
                year: "2023",
                image: "/resources/toastmasters-event.jpg",
                details: "Amit's exceptional oratory skills and critical thinking abilities made him stand out. He is an active member of our Toastmasters club."
            },
            {
                id: 4,
                name: "Sarah Johnson",
                category: "leadership",
                achievement: "Student Council President",
                description: "Led various school initiatives and community service programs",
                year: "2023",
                image: "/resources/faculty-team.jpg",
                details: "Sarah demonstrated exceptional leadership qualities by organizing successful events and leading community outreach programs."
            },
            {
                id: 5,
                name: "Vikram Singh",
                category: "academic",
                achievement: "IIT-JEE Advanced Rank 456",
                description: "Secured admission in IIT Bombay Computer Science",
                year: "2023",
                image: "/resources/iit-jee-study.jpg",
                details: "Vikram's systematic approach to problem-solving and consistent practice helped him achieve this prestigious rank."
            },
            {
                id: 6,
                name: "Neha Gupta",
                category: "cultural",
                achievement: "Classical Dance Performer",
                description: "Performed at National Youth Festival",
                year: "2023",
                image: "/resources/student-achievers.jpg",
                details: "Neha's passion for classical dance and dedication to practice earned her this opportunity to perform at the national level."
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const achievements = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                src: "/resources/neet-prep.jpg",
                category: "academics",
                title: "NEET Preparation Class"
            },
            {
                src: "/resources/iit-jee-study.jpg",
                category: "academics",
                title: "IIT-JEE Study Session"
            },
            {
                src: "/resources/sat-classroom.jpg",
                category: "academics",
                title: "SAT Classroom"
            },
            {
                src: "/resources/science-lab.jpg",
                category: "academics",
                title: "Science Laboratory"
            },
            {
                src: "/resources/student-achievers.jpg",
                category: "events",
                title: "Achievement Ceremony"
            },
            {
                src: "/resources/toastmasters-event.jpg",
                category: "events",
                title: "Toastmasters Event"
            },
            {
                src: "/resources/faculty-team.jpg",
                category: "events",
                title: "Faculty Meeting"
            },
            {
                src: "/resources/library-students.jpg",
                category: "academics",
                title: "Library Study"
            },
            {
                src: "/resources/canteen.jpg",
                category: "events",
                title: "Canteen Time"
            },
            {
                src: "/resources/hostel.jpg",
                category: "events",
                title: "Hostel Life"
            },
            {
                src: "/resources/student-achievers.jpg",
                category: "sports",
                title: "Sports Day"
            },
            {
                src: "/resources/toastmasters-event.jpg",
                category: "cultural",
                title: "Cultural Program"
            }
        ];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const galleryItems = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-64 mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/science-lab.jpg",
                alt: "Laboratories",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 160,
                columnNumber: 53
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 160,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-lg text-blue-900 mb-3",
            children: "Features"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 167,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2 text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "\u2022 Separate Physics, Chemistry & Biology labs"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 175,
                            columnNumber: 59
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Latest equipment and apparatus"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 175,
                            columnNumber: 121
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Digital measurement instruments"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 175,
                            columnNumber: 162
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Safety equipment and first aid"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 175,
                            columnNumber: 204
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Fume hoods and ventilation systems"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 175,
                            columnNumber: 245
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 175,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 175,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-lg text-blue-900 mb-3",
            children: "Capacity"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 176,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            title: "Modern Laboratories",
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            t4,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    t5,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• 40 students per lab session"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 118
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Individual work stations"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 156
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Demonstration area"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 191
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Storage facilities"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 220
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Preparation rooms"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 249
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 78
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                lineNumber: 187,
                                columnNumber: 69
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                        lineNumber: 187,
                        columnNumber: 22
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        };
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-64 mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/sat-classroom.jpg",
                alt: "Classrooms",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 195,
                columnNumber: 53
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 195,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-lg text-blue-900 mb-3",
            children: "Technology"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 202,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t10;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2 text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Interactive whiteboards"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 210,
                            columnNumber: 59
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Multimedia projectors"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 210,
                            columnNumber: 93
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• High-speed internet"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 210,
                            columnNumber: 125
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Audio-visual systems"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 210,
                            columnNumber: 155
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Digital learning resources"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 210,
                            columnNumber: 186
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 210,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 210,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-lg text-blue-900 mb-3",
            children: "Comfort"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t10;
        $[11] = t9;
    } else {
        t10 = $[10];
        t9 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            title: "Smart Classrooms",
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    t7,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            t9,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    t10,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Ergonomic seating"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 222,
                                                columnNumber: 119
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Air conditioning"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 222,
                                                columnNumber: 147
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Natural lighting"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 222,
                                                columnNumber: 174
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Spacious layout"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 222,
                                                columnNumber: 201
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Acoustic design"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 222,
                                                columnNumber: 227
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                        lineNumber: 222,
                                        columnNumber: 79
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                lineNumber: 222,
                                columnNumber: 69
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                        lineNumber: 222,
                        columnNumber: 22
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        };
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-64 mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/library-students.jpg",
                alt: "Library",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 230,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-lg text-blue-900 mb-3",
            children: "Collections"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 237,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    let t15;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2 text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• 50,000+ books"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 245,
                            columnNumber: 61
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "\u2022 National & international journals"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 245,
                            columnNumber: 85
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Digital resources"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 245,
                            columnNumber: 138
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Reference materials"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 245,
                            columnNumber: 166
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• E-book access"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 245,
                            columnNumber: 196
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 245,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-lg text-blue-900 mb-3",
            children: "Facilities"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t14;
        $[16] = t15;
    } else {
        t14 = $[15];
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            title: "Resource Library",
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    t12,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            t14,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    t15,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Reading halls"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 121
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Digital library corner"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 145
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Group study areas"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 178
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Quiet zones"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 206
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Wi-Fi connectivity"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 228
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 81
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                lineNumber: 257,
                                columnNumber: 71
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                        lineNumber: 257,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        };
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-64 mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/student-achievers.jpg",
                alt: "Sports",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 265,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-lg text-blue-900 mb-3",
            children: "Facilities"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    let t20;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2 text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Cricket ground"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 280,
                            columnNumber: 61
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Football field"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 280,
                            columnNumber: 86
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Basketball courts"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 280,
                            columnNumber: 111
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Volleyball courts"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 280,
                            columnNumber: 139
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Athletics track"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 280,
                            columnNumber: 167
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 280,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-lg text-blue-900 mb-3",
            children: "Amenities"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t19;
        $[21] = t20;
    } else {
        t19 = $[20];
        t20 = $[21];
    }
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = {
            title: "Sports Complex",
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    t17,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            t19,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    t20,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Gymnasium"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 292,
                                                columnNumber: 121
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Changing rooms"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 292,
                                                columnNumber: 141
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Equipment storage"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 292,
                                                columnNumber: 166
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• First aid facility"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 292,
                                                columnNumber: 194
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Spectator seating"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 292,
                                                columnNumber: 223
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 81
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                lineNumber: 292,
                                columnNumber: 71
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                        lineNumber: 292,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        };
        $[22] = t21;
    } else {
        t21 = $[22];
    }
    let t22;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-64 mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/canteen.jpg",
                alt: "Canteen",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 300,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t22;
    } else {
        t22 = $[23];
    }
    let t23;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-lg text-blue-900 mb-3",
            children: "Services"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t23;
    } else {
        t23 = $[24];
    }
    let t24;
    let t25;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2 text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Nutritious meals"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 315,
                            columnNumber: 61
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Snacks and beverages"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 315,
                            columnNumber: 88
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Fresh fruit juices"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 315,
                            columnNumber: 119
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Special dietary options"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 315,
                            columnNumber: 148
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Hygienic preparation"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 315,
                            columnNumber: 182
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 315,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-lg text-blue-900 mb-3",
            children: "Facilities"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t24;
        $[26] = t25;
    } else {
        t24 = $[25];
        t25 = $[26];
    }
    let t26;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = {
            title: "Modern Canteen",
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    t22,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            t24,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    t25,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Spacious dining area"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 327,
                                                columnNumber: 121
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Modern kitchen equipment"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 327,
                                                columnNumber: 152
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Clean water supply"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 327,
                                                columnNumber: 187
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Waste management"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 327,
                                                columnNumber: 216
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Comfortable seating"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 327,
                                                columnNumber: 243
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                        lineNumber: 327,
                                        columnNumber: 81
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                lineNumber: 327,
                                columnNumber: 71
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                        lineNumber: 327,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        };
        $[27] = t26;
    } else {
        t26 = $[27];
    }
    let t27;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-64 mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/hostel.jpg",
                alt: "Hostel",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 335,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t27;
    } else {
        t27 = $[28];
    }
    let t28;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-lg text-blue-900 mb-3",
            children: "Accommodation"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t28;
    } else {
        t28 = $[29];
    }
    let t29;
    let t30;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2 text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "\u2022 Separate boys & girls hostels"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 350,
                            columnNumber: 61
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• 2/3/4 sharing rooms"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 350,
                            columnNumber: 110
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Attached bathrooms"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 350,
                            columnNumber: 140
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Study tables and wardrobes"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 350,
                            columnNumber: 169
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Common rooms"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 350,
                            columnNumber: 206
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 350,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 350,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-lg text-blue-900 mb-3",
            children: "Services"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t29;
        $[31] = t30;
    } else {
        t29 = $[30];
        t30 = $[31];
    }
    let t31;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = {
            labs: t6,
            classrooms: t11,
            library: t16,
            sports: t21,
            canteen: t26,
            hostel: {
                title: "Residential Hostel",
                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        t27,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-6",
                            children: [
                                t29,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        t30,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• 24/7 Security"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 123
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Housekeeping"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 147
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Laundry service"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 170
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Medical assistance"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 196
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Wi-Fi connectivity"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 225
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                            lineNumber: 368,
                                            columnNumber: 83
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                    lineNumber: 368,
                                    columnNumber: 73
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 368,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            }
        };
        $[32] = t31;
    } else {
        t31 = $[32];
    }
    const facilities = t31;
    let t32;
    if ($[33] !== activeAchievementFilter) {
        t32 = [
            activeAchievementFilter
        ];
        $[33] = activeAchievementFilter;
        $[34] = t32;
    } else {
        t32 = $[34];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_temp, t32);
    let t33;
    if ($[35] !== activeAchievementFilter) {
        t33 = activeAchievementFilter === "all" ? achievements : achievements.filter((a)=>a.category === activeAchievementFilter);
        $[35] = activeAchievementFilter;
        $[36] = t33;
    } else {
        t33 = $[36];
    }
    const filteredAchievements = t33;
    let t34;
    if ($[37] !== activeGalleryFilter) {
        t34 = activeGalleryFilter === "all" ? galleryItems : galleryItems.filter((item)=>item.category === activeGalleryFilter);
        $[37] = activeGalleryFilter;
        $[38] = t34;
    } else {
        t34 = $[38];
    }
    const filteredGallery = t34;
    let t35;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "pt-24 pb-12 bg-gradient-to-br from-blue-50 to-blue-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-display text-5xl font-bold text-blue-900 mb-6",
                            children: "Life at Learners PU College"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 405,
                            columnNumber: 172
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-600 max-w-3xl mx-auto",
                            children: "Experience a vibrant campus life with world-class facilities, diverse activities, and endless opportunities for personal growth and development."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 405,
                            columnNumber: 271
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 405,
                    columnNumber: 143
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 405,
                columnNumber: 87
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 405,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t35;
    } else {
        t35 = $[39];
    }
    let t36;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display text-4xl font-bold text-blue-900 mb-4",
                    children: "Wall of Fame"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 412,
                    columnNumber: 46
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Celebrating the outstanding achievements of our students across academics, sports, and cultural activities."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 412,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 412,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t36;
    } else {
        t36 = $[40];
    }
    let t37;
    if ($[41] !== activeAchievementFilter) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap justify-center gap-4 mb-12",
            children: [
                "all",
                "academic",
                "sports",
                "cultural",
                "leadership"
            ].map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setActiveAchievementFilter(filter),
                    className: `px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 ${activeAchievementFilter === filter ? "bg-sky-600 border-sky-600 text-white" : "border-sky-600 text-sky-600 hover:bg-sky-50"}`,
                    children: [
                        filter.charAt(0).toUpperCase() + filter.slice(1),
                        " ",
                        filter === "all" ? "Achievements" : ""
                    ]
                }, filter, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 419,
                    columnNumber: 141
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 419,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = activeAchievementFilter;
        $[42] = t37;
    } else {
        t37 = $[42];
    }
    let t38;
    if ($[43] !== filteredAchievements) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: filteredAchievements.map(_temp2)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 427,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = filteredAchievements;
        $[44] = t38;
    } else {
        t38 = $[44];
    }
    let t39;
    if ($[45] !== t37 || $[46] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    t36,
                    t37,
                    t38
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 435,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 435,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t37;
        $[46] = t38;
        $[47] = t39;
    } else {
        t39 = $[47];
    }
    let t40;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display text-4xl font-bold text-blue-900 mb-4",
                    children: "Our Campus Facilities"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 444,
                    columnNumber: 46
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "State-of-the-art infrastructure designed to support holistic learning and development."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 444,
                    columnNumber: 139
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 444,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t40;
    } else {
        t40 = $[48];
    }
    let t41;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = ()=>setSelectedFacility("labs");
        $[49] = t41;
    } else {
        t41 = $[49];
    }
    let t42;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 relative h-48 w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/science-lab.jpg",
                alt: "Laboratories",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 458,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 458,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = t42;
    } else {
        t42 = $[50];
    }
    let t43;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-6 shadow-lg cursor-pointer hover:-translate-y-2 transition-transform duration-300",
            onClick: t41,
            children: [
                t42,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-8 h-8 text-blue-600",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                    lineNumber: 465,
                                    columnNumber: 358
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                lineNumber: 465,
                                columnNumber: 279
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 465,
                            columnNumber: 181
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-display text-xl font-semibold text-blue-900 mb-2",
                            children: "Modern Laboratories"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 465,
                            columnNumber: 428
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-sm",
                            children: "Well-equipped science labs with latest equipment and safety measures."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 465,
                            columnNumber: 522
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 465,
                    columnNumber: 152
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 465,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = t43;
    } else {
        t43 = $[51];
    }
    let t44;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = ()=>setSelectedFacility("classrooms");
        $[52] = t44;
    } else {
        t44 = $[52];
    }
    let t45;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 relative h-48 w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/sat-classroom.jpg",
                alt: "Classrooms",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 479,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 479,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = t45;
    } else {
        t45 = $[53];
    }
    let t46;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-6 shadow-lg cursor-pointer hover:-translate-y-2 transition-transform duration-300",
            onClick: t44,
            children: [
                t45,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-8 h-8 text-green-600",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                    lineNumber: 486,
                                    columnNumber: 360
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                lineNumber: 486,
                                columnNumber: 280
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 486,
                            columnNumber: 181
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-display text-xl font-semibold text-blue-900 mb-2",
                            children: "Smart Classrooms"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 486,
                            columnNumber: 886
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-sm",
                            children: "Digital classrooms with interactive whiteboards and multimedia facilities."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 486,
                            columnNumber: 977
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 486,
                    columnNumber: 152
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 486,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = t46;
    } else {
        t46 = $[54];
    }
    let t47;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = ()=>setSelectedFacility("library");
        $[55] = t47;
    } else {
        t47 = $[55];
    }
    let t48;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 relative h-48 w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/library-students.jpg",
                alt: "Library",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 500,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 500,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t48;
    } else {
        t48 = $[56];
    }
    let t49;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-6 shadow-lg cursor-pointer hover:-translate-y-2 transition-transform duration-300",
            onClick: t47,
            children: [
                t48,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-8 h-8 text-purple-600",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                    lineNumber: 507,
                                    columnNumber: 362
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                lineNumber: 507,
                                columnNumber: 281
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 507,
                            columnNumber: 181
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-display text-xl font-semibold text-blue-900 mb-2",
                            children: "Resource Library"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 507,
                            columnNumber: 621
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-sm",
                            children: "Extensive collection of books, journals, and digital resources."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 507,
                            columnNumber: 712
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 507,
                    columnNumber: 152
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 507,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[57] = t49;
    } else {
        t49 = $[57];
    }
    let t50;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = ()=>setSelectedFacility("sports");
        $[58] = t50;
    } else {
        t50 = $[58];
    }
    let t51;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 relative h-48 w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/student-achievers.jpg",
                alt: "Sports Ground",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 521,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 521,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = t51;
    } else {
        t51 = $[59];
    }
    let t52;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-6 shadow-lg cursor-pointer hover:-translate-y-2 transition-transform duration-300",
            onClick: t50,
            children: [
                t51,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-8 h-8 text-orange-600",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    d: "M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z",
                                    clipRule: "evenodd"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                    lineNumber: 528,
                                    columnNumber: 362
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                lineNumber: 528,
                                columnNumber: 281
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 528,
                            columnNumber: 181
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-display text-xl font-semibold text-blue-900 mb-2",
                            children: "Sports Complex"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 528,
                            columnNumber: 880
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-sm",
                            children: "Multi-sport facilities including cricket, football, basketball, and athletics."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 528,
                            columnNumber: 969
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 528,
                    columnNumber: 152
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 528,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[60] = t52;
    } else {
        t52 = $[60];
    }
    let t53;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = ()=>setSelectedFacility("canteen");
        $[61] = t53;
    } else {
        t53 = $[61];
    }
    let t54;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 relative h-48 w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/canteen.jpg",
                alt: "Canteen",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 542,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 542,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[62] = t54;
    } else {
        t54 = $[62];
    }
    let t55;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-6 shadow-lg cursor-pointer hover:-translate-y-2 transition-transform duration-300",
            onClick: t53,
            children: [
                t54,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-8 h-8 text-red-600",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                    lineNumber: 549,
                                    columnNumber: 356
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                lineNumber: 549,
                                columnNumber: 278
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 549,
                            columnNumber: 181
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-display text-xl font-semibold text-blue-900 mb-2",
                            children: "Modern Canteen"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 549,
                            columnNumber: 576
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-sm",
                            children: "Hygienic food court offering nutritious meals and snacks."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 549,
                            columnNumber: 665
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 549,
                    columnNumber: 152
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 549,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[63] = t55;
    } else {
        t55 = $[63];
    }
    let t56;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t56 = ()=>setSelectedFacility("hostel");
        $[64] = t56;
    } else {
        t56 = $[64];
    }
    let t57;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 relative h-48 w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/hostel.jpg",
                alt: "Hostel",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 563,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 563,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[65] = t57;
    } else {
        t57 = $[65];
    }
    let t58;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20 bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    t40,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: [
                            t43,
                            t46,
                            t49,
                            t52,
                            t55,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl p-6 shadow-lg cursor-pointer hover:-translate-y-2 transition-transform duration-300",
                                onClick: t56,
                                children: [
                                    t57,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-8 h-8 text-indigo-600",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                        lineNumber: 570,
                                                        columnNumber: 544
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                    lineNumber: 570,
                                                    columnNumber: 463
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 570,
                                                columnNumber: 363
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display text-xl font-semibold text-blue-900 mb-2",
                                                children: "Residential Hostel"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 570,
                                                columnNumber: 761
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 text-sm",
                                                children: "Comfortable accommodation with modern amenities and 24/7 security."
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 570,
                                                columnNumber: 854
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                        lineNumber: 570,
                                        columnNumber: 334
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                lineNumber: 570,
                                columnNumber: 193
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                        lineNumber: 570,
                        columnNumber: 110
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 570,
                columnNumber: 49
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 570,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[66] = t58;
    } else {
        t58 = $[66];
    }
    let t59;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display text-4xl font-bold text-blue-900 mb-4",
                    children: "Tours & Excursions"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 577,
                    columnNumber: 46
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Educational tours and excursions that provide real-world learning experiences and exposure."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 577,
                    columnNumber: 140
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 577,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[67] = t59;
    } else {
        t59 = $[67];
    }
    let t60;
    let t61;
    let t62;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-48 mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/science-lab.jpg",
                alt: "Industrial Visit",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 586,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 586,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-display text-xl font-semibold text-blue-900 mb-3",
            children: "Industrial Visits"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 587,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 text-sm mb-4",
            children: "Regular visits to industries, research centers, and manufacturing units to provide practical exposure."
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 588,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[68] = t60;
        $[69] = t61;
        $[70] = t62;
    } else {
        t60 = $[68];
        t61 = $[69];
        t62 = $[70];
    }
    let t63;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-6 shadow-lg",
            children: [
                t60,
                t61,
                t62,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center text-sm text-gray-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                lineNumber: 599,
                                columnNumber: 205
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 599,
                            columnNumber: 135
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Quarterly visits"
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 599,
                    columnNumber: 78
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 599,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[71] = t63;
    } else {
        t63 = $[71];
    }
    let t64;
    let t65;
    let t66;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-48 mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/library-students.jpg",
                alt: "Educational Tour",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 608,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 608,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-display text-xl font-semibold text-blue-900 mb-3",
            children: "Educational Tours"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 609,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 text-sm mb-4",
            children: "National and international educational tours to historical sites, museums, and universities."
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 610,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[72] = t64;
        $[73] = t65;
        $[74] = t66;
    } else {
        t64 = $[72];
        t65 = $[73];
        t66 = $[74];
    }
    let t67;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-6 shadow-lg",
            children: [
                t64,
                t65,
                t66,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center text-sm text-gray-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                lineNumber: 621,
                                columnNumber: 205
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 621,
                            columnNumber: 135
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Annual tours"
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 621,
                    columnNumber: 78
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 621,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[75] = t67;
    } else {
        t67 = $[75];
    }
    let t68;
    let t69;
    let t70;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-48 mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/faculty-team.jpg",
                alt: "Adventure Camp",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 630,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 630,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-display text-xl font-semibold text-blue-900 mb-3",
            children: "Adventure Camps"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 631,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 text-sm mb-4",
            children: "Outdoor adventure camps focusing on team building, leadership, and personality development."
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 632,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[76] = t68;
        $[77] = t69;
        $[78] = t70;
    } else {
        t68 = $[76];
        t69 = $[77];
        t70 = $[78];
    }
    let t71;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20 bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    t59,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: [
                            t63,
                            t67,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl p-6 shadow-lg",
                                children: [
                                    t68,
                                    t69,
                                    t70,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center text-sm text-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 mr-2",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                    lineNumber: 643,
                                                    columnNumber: 372
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                                lineNumber: 643,
                                                columnNumber: 302
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Bi-annual camps"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                        lineNumber: 643,
                                        columnNumber: 245
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                lineNumber: 643,
                                columnNumber: 178
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                        lineNumber: 643,
                        columnNumber: 110
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 643,
                columnNumber: 49
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 643,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[79] = t71;
    } else {
        t71 = $[79];
    }
    let t72;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display text-4xl font-bold text-blue-900 mb-4",
                    children: "Gallery & Media"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 650,
                    columnNumber: 46
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Capturing the memorable moments and achievements that define life at Learners PU College."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 650,
                    columnNumber: 137
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 650,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[80] = t72;
    } else {
        t72 = $[80];
    }
    let t73;
    if ($[81] !== activeGalleryFilter) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap justify-center gap-4 mb-12",
            children: [
                "all",
                "events",
                "sports",
                "academics",
                "cultural"
            ].map((filter_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setActiveGalleryFilter(filter_0),
                    className: `px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 ${activeGalleryFilter === filter_0 ? "bg-sky-600 border-sky-600 text-white" : "border-sky-600 text-sky-600 hover:bg-sky-50"}`,
                    children: [
                        filter_0.charAt(0).toUpperCase() + filter_0.slice(1),
                        " ",
                        filter_0 === "all" ? "Photos" : ""
                    ]
                }, filter_0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 657,
                    columnNumber: 140
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 657,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[81] = activeGalleryFilter;
        $[82] = t73;
    } else {
        t73 = $[82];
    }
    let t74;
    if ($[83] !== filteredGallery || $[84] !== visiblePhotos) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
            children: filteredGallery.slice(0, visiblePhotos).map(_temp3)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 665,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[83] = filteredGallery;
        $[84] = visiblePhotos;
        $[85] = t74;
    } else {
        t74 = $[85];
    }
    let t75;
    if ($[86] !== filteredGallery.length || $[87] !== visiblePhotos) {
        t75 = visiblePhotos < filteredGallery.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mt-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setVisiblePhotos(_temp4),
                className: "bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors duration-300",
                children: "Load More Photos"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 674,
                columnNumber: 88
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 674,
            columnNumber: 53
        }, ("TURBOPACK compile-time value", void 0));
        $[86] = filteredGallery.length;
        $[87] = visiblePhotos;
        $[88] = t75;
    } else {
        t75 = $[88];
    }
    let t76;
    if ($[89] !== t73 || $[90] !== t74 || $[91] !== t75) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    t72,
                    t73,
                    t74,
                    t75
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 683,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 683,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[89] = t73;
        $[90] = t74;
        $[91] = t75;
        $[92] = t76;
    } else {
        t76 = $[92];
    }
    let t77;
    if ($[93] !== selectedFacility) {
        t77 = selectedFacility && facilities[selectedFacility] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4",
            onClick: ()=>setSelectedFacility(null),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto",
                onClick: _temp5,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-2xl font-bold text-blue-900",
                                    children: facilities[selectedFacility].title
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                    lineNumber: 693,
                                    columnNumber: 379
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedFacility(null),
                                    className: "text-gray-500 hover:text-gray-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                            lineNumber: 693,
                                            columnNumber: 657
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                        lineNumber: 693,
                                        columnNumber: 578
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                                    lineNumber: 693,
                                    columnNumber: 482
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 693,
                            columnNumber: 323
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: facilities[selectedFacility].content
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 693,
                            columnNumber: 772
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 693,
                    columnNumber: 302
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 693,
                columnNumber: 201
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 693,
            columnNumber: 63
        }, ("TURBOPACK compile-time value", void 0));
        $[93] = selectedFacility;
        $[94] = t77;
    } else {
        t77 = $[94];
    }
    let t78;
    if ($[95] !== t39 || $[96] !== t76 || $[97] !== t77) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white",
            children: [
                t35,
                t39,
                t58,
                t71,
                t76,
                t77
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
            lineNumber: 701,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[95] = t39;
        $[96] = t76;
        $[97] = t77;
        $[98] = t78;
    } else {
        t78 = $[98];
    }
    return t78;
};
_s(LifeAtLGS, "EdHIpbcoo6EeL9QD0hatzWNmQtI=");
_c = LifeAtLGS;
const __TURBOPACK__default__export__ = LifeAtLGS;
function _temp() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$animejs$2f$lib$2f$anime$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        targets: ".achievement-card",
        translateY: [
            50,
            0
        ],
        opacity: [
            0,
            1
        ],
        delay: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$animejs$2f$lib$2f$anime$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stagger(100),
        easing: "easeOutQuart"
    });
}
function _temp2(item_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "achievement-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-64",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: item_0.image,
                        alt: item_0.name,
                        fill: true,
                        className: "object-cover"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                        lineNumber: 722,
                        columnNumber: 185
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-blue-900",
                        children: item_0.year
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                        lineNumber: 722,
                        columnNumber: 268
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 722,
                columnNumber: 154
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display text-xl font-bold text-blue-900 mb-1",
                        children: item_0.name
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                        lineNumber: 722,
                        columnNumber: 442
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sky-600 font-medium mb-3",
                        children: item_0.achievement
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                        lineNumber: 722,
                        columnNumber: 526
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-sm mb-4",
                        children: item_0.description
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                        lineNumber: 722,
                        columnNumber: 595
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-sm italic",
                            children: [
                                '"',
                                item_0.details,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                            lineNumber: 722,
                            columnNumber: 692
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                        lineNumber: 722,
                        columnNumber: 661
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 722,
                columnNumber: 421
            }, this)
        ]
    }, item_0.id, true, {
        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
        lineNumber: 722,
        columnNumber: 10
    }, this);
}
function _temp3(item_1, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "gallery-item relative h-48 group cursor-pointer overflow-hidden rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: item_1.src,
                alt: item_1.title,
                fill: true,
                className: "object-cover transition-transform duration-500 group-hover:scale-110"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 725,
                columnNumber: 114
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white font-semibold text-center px-4",
                    children: item_1.title
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                    lineNumber: 725,
                    columnNumber: 397
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
                lineNumber: 725,
                columnNumber: 252
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/life-at-lgs/page.tsx",
        lineNumber: 725,
        columnNumber: 10
    }, this);
}
function _temp4(prev) {
    return prev + 4;
}
function _temp5(e) {
    return e.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "LifeAtLGS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_lgs_Learners_PU_College_src_app_life-at-lgs_page_tsx_51264144._.js.map