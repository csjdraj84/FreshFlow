module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/ui/ItemCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ItemCard",
    ()=>ItemCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
function ItemCard({ name, tamilName, imageUrl, selected, onToggle, index, quantity = 0, onIncrement, onDecrement }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onToggle,
        className: `
        relative group cursor-pointer rounded-2xl p-4 transition-all duration-300
        border-2 flex flex-col items-center gap-3
        ${selected ? 'bg-green-50/50 border-green-500 shadow-lg scale-[1.02]' : 'bg-white border-transparent hover:border-gray-200 hover:shadow-md'}
      `,
        children: [
            index !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2 left-2 bg-gray-100 text-gray-500 text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full z-10",
                children: index
            }, void 0, false, {
                fileName: "[project]/components/ui/ItemCard.tsx",
                lineNumber: 31,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-32 h-32 mb-2 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden",
                children: imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: imageUrl,
                    alt: name,
                    fill: true,
                    className: "object-contain mix-blend-multiply p-2",
                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                }, void 0, false, {
                    fileName: "[project]/components/ui/ItemCard.tsx",
                    lineNumber: 37,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-4xl",
                    children: "🍎"
                }, void 0, false, {
                    fileName: "[project]/components/ui/ItemCard.tsx",
                    lineNumber: 45,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/ItemCard.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center w-full",
                children: [
                    tamilName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-gray-800 font-tamil mb-1",
                        children: tamilName
                    }, void 0, false, {
                        fileName: "[project]/components/ui/ItemCard.tsx",
                        lineNumber: 51,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-gray-500 line-clamp-2 leading-tight",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/components/ui/ItemCard.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/ItemCard.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
        absolute top-3 right-3 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
        ${selected ? 'bg-green-500 border-green-500' : 'border-gray-300 bg-white'}
      `,
                children: selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-4 h-4 text-white",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "3",
                        d: "M5 13l4 4L19 7"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/ItemCard.tsx",
                        lineNumber: 66,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/ItemCard.tsx",
                    lineNumber: 65,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/ItemCard.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            selected && onIncrement && onDecrement && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 -translate-x-1/2 bg-white shadow-xl border border-gray-100 rounded-full flex items-center p-1.5 gap-3 animate-in slide-in-from-bottom-2 duration-200 z-10",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onDecrement,
                        className: "w-8 h-8 flex items-center justify-center bg-gray-50 hover:bg-red-50 hover:text-red-500 rounded-full text-gray-600 font-bold transition-colors",
                        title: "Decrease",
                        children: "-"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/ItemCard.tsx",
                        lineNumber: 77,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-lg text-gray-800 w-6 text-center tabular-nums",
                        children: quantity
                    }, void 0, false, {
                        fileName: "[project]/components/ui/ItemCard.tsx",
                        lineNumber: 84,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onIncrement,
                        className: "w-8 h-8 flex items-center justify-center bg-green-600 hover:bg-green-700 rounded-full text-white font-bold transition-colors shadow-sm",
                        title: "Increase",
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/ItemCard.tsx",
                        lineNumber: 85,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/ItemCard.tsx",
                lineNumber: 73,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/ItemCard.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/actions/data:a3e0e8 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addItem",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40ae216c821aa6abb0e752848f3c6f20c22941eedf":"addItem"},"app/actions/items.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40ae216c821aa6abb0e752848f3c6f20c22941eedf", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addItem");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaXRlbXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL2l0ZW1zJztcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRJdGVtKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoJ25hbWUnKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgdGFtaWxOYW1lID0gZm9ybURhdGEuZ2V0KCd0YW1pbE5hbWUnKSBhcyBzdHJpbmc7XG5cbiAgICBpZiAoIW5hbWUpIHJldHVybjtcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHByaXNtYS5pdGVtLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB0YW1pbE5hbWU6IHRhbWlsTmFtZSB8fCBudWxsLFxuICAgICAgICAgICAgICAgIGltYWdlUGF0aDogbnVsbCAvLyBObyBpbWFnZSBmb3IgbWFudWFsIGVudHJ5IHlldFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9zZWxlY3QnKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gYWRkIGl0ZW06XCIsIGUpO1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gYWRkIGl0ZW1cIiB9O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiZ1JBS3NCLG9MQUFBIn0=
}),
"[project]/components/ManualEntryForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ManualEntryForm",
    ()=>ManualEntryForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$a3e0e8__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:a3e0e8 [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
function ManualEntryForm({ onClose }) {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    async function handleSubmit(formData) {
        setLoading(true);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$a3e0e8__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addItem"])(formData);
        setLoading(false);
        onClose();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl w-full max-w-md p-6 shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold mb-4",
                    children: "Add New Item"
                }, void 0, false, {
                    fileName: "[project]/components/ManualEntryForm.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    action: handleSubmit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Item Name (English)"
                                }, void 0, false, {
                                    fileName: "[project]/components/ManualEntryForm.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    name: "name",
                                    required: true,
                                    className: "mt-1 block w-full rounded-lg border-2 border-gray-200 px-3 py-2 text-gray-900 focus:border-green-500 focus:outline-none",
                                    placeholder: "e.g., Bananas"
                                }, void 0, false, {
                                    fileName: "[project]/components/ManualEntryForm.tsx",
                                    lineNumber: 23,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ManualEntryForm.tsx",
                            lineNumber: 21,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Tamil Name (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/components/ManualEntryForm.tsx",
                                    lineNumber: 31,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    name: "tamilName",
                                    className: "mt-1 block w-full rounded-lg border-2 border-gray-200 px-3 py-2 text-gray-900 focus:border-green-500 focus:outline-none",
                                    placeholder: "e.g., வாழைப்பழம்"
                                }, void 0, false, {
                                    fileName: "[project]/components/ManualEntryForm.tsx",
                                    lineNumber: 32,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ManualEntryForm.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 justify-end mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/ManualEntryForm.tsx",
                                    lineNumber: 40,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading,
                                    className: "px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 disabled:opacity-50",
                                    children: loading ? 'Adding...' : 'Add Item'
                                }, void 0, false, {
                                    fileName: "[project]/components/ManualEntryForm.tsx",
                                    lineNumber: 47,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ManualEntryForm.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ManualEntryForm.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ManualEntryForm.tsx",
            lineNumber: 18,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ManualEntryForm.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/actions/data:6607c4 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveOrder",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60f38d9e8bd0f63401948e4a49c31fca27a67c04ec":"saveOrder"},"app/actions/order.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60f38d9e8bd0f63401948e4a49c31fca27a67c04ec", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "saveOrder");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vb3JkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IEdyb2NlcnlJdGVtLCBwcmlzbWEgfSBmcm9tICdAL2xpYi9pdGVtcyc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuXG5jb25zdCBPUkRFUl9GSUxFID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhL2N1cnJlbnQtb3JkZXIuanNvbicpO1xuXG4vLyBUeXBlIGZvciB0aGUgdHJhbnNmb3JtZWQgb3JkZXIgcmV0dXJuZWQgYnkgZ2V0T3JkZXJcbmV4cG9ydCBpbnRlcmZhY2UgT3JkZXJXaXRoR3JvY2VyeUl0ZW1zIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHRvdGFsSXRlbXM6IG51bWJlcjtcbiAgICBjcmVhdGVkQXQ6IERhdGU7XG4gICAgdXBkYXRlZEF0OiBEYXRlO1xuICAgIGl0ZW1zOiBHcm9jZXJ5SXRlbVtdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU9yZGVyKGl0ZW1zOiBHcm9jZXJ5SXRlbVtdLCBvcmRlcklkPzogbnVtYmVyKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gMS4gU2F2ZSB0byBKU09OIChMZWdhY3kgc3VwcG9ydClcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhPUkRFUl9GSUxFLCBKU09OLnN0cmluZ2lmeShpdGVtcywgbnVsbCwgMikpO1xuXG4gICAgICAgIC8vIDIuIFNhdmUgdG8gRGF0YWJhc2VcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChvcmRlcklkKSB7XG4gICAgICAgICAgICAgICAgLy8gVVBEQVRFIGV4aXN0aW5nIG9yZGVyXG4gICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRvdGFsIGl0ZW1zXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHR4Lm9yZGVyLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogb3JkZXJJZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0b3RhbEl0ZW1zOiBpdGVtcy5yZWR1Y2UoKHN1bSwgaSkgPT4gc3VtICsgKGkucXVhbnRpdHkgfHwgMSksIDApIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRGVsZXRlIGV4aXN0aW5nIGl0ZW1zXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHR4Lm9yZGVySXRlbS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IG9yZGVySWQ6IG9yZGVySWQgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBSZS1jcmVhdGUgaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0eC5vcmRlckl0ZW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVySWQ6IG9yZGVySWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JZDogaXRlbS5pZCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5IHx8IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBDUkVBVEUgbmV3IG9yZGVyXG4gICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLm9yZGVyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsSXRlbXM6IGl0ZW1zLnJlZHVjZSgoc3VtLCBpKSA9PiBzdW0gKyAoaS5xdWFudGl0eSB8fCAxKSwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZTogaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlkOiBpdGVtLmlkISxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgfHwgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgb3JkZXI6XCIsIGUpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gc2F2ZScgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVPcmRlcihvcmRlcklkOiBudW1iZXIpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBEZWxldGUgT3JkZXJJdGVtcyBmaXJzdCwgdGhlbiBPcmRlciAodG8gc2F0aXNmeSBmb3JlaWduIGtleSBjb25zdHJhaW50KVxuICAgICAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgdHgub3JkZXJJdGVtLmRlbGV0ZU1hbnkoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IG9yZGVySWQ6IG9yZGVySWQgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhd2FpdCB0eC5vcmRlci5kZWxldGUoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBvcmRlcklkIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGRlbGV0ZSBvcmRlcjpcIiwgZSk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUnIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJzKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG9yZGVycyA9IGF3YWl0IHByaXNtYS5vcmRlci5maW5kTWFueSh7XG4gICAgICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2Rlc2MnIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvcmRlcnM7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIG9yZGVyczpcIiwgZSk7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPcmRlcihpZDogbnVtYmVyKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgb3JkZXIgPSBhd2FpdCBwcmlzbWEub3JkZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgICAgICAgaW5jbHVkZTogeyBpdGVtczogeyBpbmNsdWRlOiB7IGl0ZW06IHRydWUgfSB9IH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFvcmRlcikgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBvcmRlci5pZCxcbiAgICAgICAgICAgIHRvdGFsSXRlbXM6IG9yZGVyLnRvdGFsSXRlbXMsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG9yZGVyLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogb3JkZXIudXBkYXRlZEF0LFxuICAgICAgICAgICAgaXRlbXM6IG9yZGVyLml0ZW1zLm1hcCgob2k6IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgICBpZDogb2kuaXRlbS5pZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBvaS5pdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgdGFtaWxOYW1lOiBvaS5pdGVtLnRhbWlsTmFtZSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IG9pLml0ZW0uaW1hZ2VQYXRoIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogb2kucXVhbnRpdHlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBvcmRlcjpcIiwgZSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoia1JBa0JzQixzTEFBQSJ9
}),
"[project]/components/SelectionGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SelectionGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ItemCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ItemCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ManualEntryForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ManualEntryForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$6607c4__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:6607c4 [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
;
function SelectionGrid({ initialItems, initialOrder }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Debug logging
    console.log('SelectionGrid initialOrder:', initialOrder);
    // Initialize from order if present
    const [selectedItems, setSelectedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        console.log('=== INITIALIZING SELECTED ITEMS ===');
        console.log('initialOrder:', initialOrder);
        if (initialOrder?.items) {
            console.log('initialOrder.items:', initialOrder.items);
            const initial = {};
            initialOrder.items.forEach((orderItem)=>{
                console.log('Processing orderItem:', orderItem);
                console.log('orderItem.itemName:', orderItem.itemName);
                console.log('orderItem.name:', orderItem.name);
                console.log('orderItem.quantity:', orderItem.quantity);
                // Use 'name' instead of 'itemName' since getOrder maps to GroceryItem structure
                const itemName = orderItem.name || orderItem.itemName;
                initial[itemName] = orderItem.quantity;
            });
            console.log('Final initial selected items:', initial);
            return initial;
        }
        console.log('No initialOrder, returning empty object');
        return {};
    });
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('name');
    const [filterBy, setFilterBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [showManualForm, setShowManualForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOrdering, setIsOrdering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleItem = (name)=>{
        const next = {
            ...selectedItems
        };
        if (next[name]) {
            delete next[name];
        } else {
            next[name] = 1;
        }
        setSelectedItems(next);
    };
    const updateQuantity = (name, delta)=>{
        const next = {
            ...selectedItems
        };
        const currentQty = next[name] || 0;
        const newQty = currentQty + delta;
        if (newQty <= 0) {
            delete next[name];
        } else {
            next[name] = newQty;
        }
        setSelectedItems(next);
    };
    const handleReview = async ()=>{
        setIsOrdering(true);
        const itemsToOrder = initialItems.filter((i)=>selectedItems[i.name]).map((i)=>({
                ...i,
                quantity: selectedItems[i.name]
            }));
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$6607c4__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveOrder"])(itemsToOrder, initialOrder?.id);
        router.push('/');
        ; // Redirect to landing page
        setIsOrdering(false);
    };
    const filteredItems = initialItems.filter((item)=>{
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.tamilName && item.tamilName.includes(search);
        const matchesFilter = filterBy === 'all' || filterBy === 'selected' && !!selectedItems[item.name];
        return matchesSearch && matchesFilter;
    }).sort((a, b)=>{
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        }
        // Assuming initialItems are already sorted by created desc (default from DB) or reverse it
        // If 'newest', we rely on array order if data came sorted, or sort by id if available
        // Let's assume passed items are Newest First.
        return 0;
    });
    const selectedCount = Object.keys(selectedItems).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full pb-32",
        children: [
            showManualForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ManualEntryForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ManualEntryForm"], {
                onClose: ()=>setShowManualForm(false)
            }, void 0, false, {
                fileName: "[project]/components/SelectionGrid.tsx",
                lineNumber: 107,
                columnNumber: 32
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 bg-white/90 backdrop-blur-md p-4 z-10 shadow-sm rounded-xl mb-6 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-800",
                                        children: "Select Items"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SelectionGrid.tsx",
                                        lineNumber: 112,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500",
                                        children: [
                                            selectedCount,
                                            " items selected"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SelectionGrid.tsx",
                                        lineNumber: 113,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SelectionGrid.tsx",
                                lineNumber: 111,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2",
                                disabled: selectedCount === 0 || isOrdering,
                                onClick: handleReview,
                                children: isOrdering ? 'Saving...' : initialOrder ? 'Update Order' : 'Place Order'
                            }, void 0, false, {
                                fileName: "[project]/components/SelectionGrid.tsx",
                                lineNumber: 115,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SelectionGrid.tsx",
                        lineNumber: 110,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search...",
                                        value: search,
                                        onChange: (e)=>setSearch(e.target.value),
                                        className: "w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SelectionGrid.tsx",
                                        lineNumber: 126,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute left-3 top-3.5 text-gray-400",
                                        children: "🔍"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SelectionGrid.tsx",
                                        lineNumber: 133,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SelectionGrid.tsx",
                                lineNumber: 125,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: sortBy,
                                onChange: (e)=>setSortBy(e.target.value),
                                className: "bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "newest",
                                        children: "Newest"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SelectionGrid.tsx",
                                        lineNumber: 141,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "name",
                                        children: "A-Z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SelectionGrid.tsx",
                                        lineNumber: 142,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SelectionGrid.tsx",
                                lineNumber: 136,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 p-1 rounded-xl border border-gray-200 flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilterBy('all'),
                                        className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterBy === 'all' ? 'bg-white shadow text-green-700' : 'text-gray-500 hover:text-gray-700'}`,
                                        children: "All"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SelectionGrid.tsx",
                                        lineNumber: 146,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilterBy('selected'),
                                        className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterBy === 'selected' ? 'bg-white shadow text-green-700' : 'text-gray-500 hover:text-gray-700'}`,
                                        children: "Selected"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SelectionGrid.tsx",
                                        lineNumber: 152,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SelectionGrid.tsx",
                                lineNumber: 145,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SelectionGrid.tsx",
                        lineNumber: 124,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SelectionGrid.tsx",
                lineNumber: 109,
                columnNumber: 13
            }, this),
            filteredItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 mb-4",
                        children: "No items matched."
                    }, void 0, false, {
                        fileName: "[project]/components/SelectionGrid.tsx",
                        lineNumber: 164,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowManualForm(true),
                        className: "text-green-600 font-bold hover:underline",
                        children: "Add it manually?"
                    }, void 0, false, {
                        fileName: "[project]/components/SelectionGrid.tsx",
                        lineNumber: 165,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SelectionGrid.tsx",
                lineNumber: 163,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                children: filteredItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ItemCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemCard"], {
                        index: index + 1,
                        name: item.name,
                        tamilName: item.tamilName,
                        imageUrl: item.imageUrl,
                        selected: !!selectedItems[item.name],
                        quantity: selectedItems[item.name] || 0,
                        onToggle: ()=>toggleItem(item.name),
                        onIncrement: (e)=>{
                            e.stopPropagation();
                            updateQuantity(item.name, 1);
                        },
                        onDecrement: (e)=>{
                            e.stopPropagation();
                            updateQuantity(item.name, -1);
                        }
                    }, item.name, false, {
                        fileName: "[project]/components/SelectionGrid.tsx",
                        lineNumber: 175,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/SelectionGrid.tsx",
                lineNumber: 173,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowManualForm(true),
                className: "fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-105",
                title: "Add new item",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-3xl font-light mb-1",
                    children: "+"
                }, void 0, false, {
                    fileName: "[project]/components/SelectionGrid.tsx",
                    lineNumber: 197,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/SelectionGrid.tsx",
                lineNumber: 192,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SelectionGrid.tsx",
        lineNumber: 106,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__249d8ac4._.js.map