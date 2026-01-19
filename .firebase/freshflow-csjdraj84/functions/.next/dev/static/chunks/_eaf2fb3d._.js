(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/ItemCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ItemCard",
    ()=>ItemCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
function ItemCard({ name, tamilName, imageUrl, selected, onToggle, index, quantity = 0, onIncrement, onDecrement }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onToggle,
        className: `
        relative group cursor-pointer rounded-2xl p-4 transition-all duration-300
        border-2 flex flex-col items-center gap-3
        ${selected ? 'bg-green-50/50 border-green-500 shadow-lg scale-[1.02]' : 'bg-white border-transparent hover:border-gray-200 hover:shadow-md'}
      `,
        children: [
            index !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2 left-2 bg-gray-100 text-gray-500 text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full z-10",
                children: index
            }, void 0, false, {
                fileName: "[project]/components/ui/ItemCard.tsx",
                lineNumber: 31,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-32 h-32 mb-2 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden",
                children: imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: imageUrl,
                    alt: name,
                    fill: true,
                    className: "object-contain mix-blend-multiply p-2",
                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                }, void 0, false, {
                    fileName: "[project]/components/ui/ItemCard.tsx",
                    lineNumber: 37,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-bold text-gray-800 line-clamp-2 leading-tight mb-1",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/components/ui/ItemCard.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this),
                    tamilName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-medium text-gray-500 font-tamil",
                        children: tamilName
                    }, void 0, false, {
                        fileName: "[project]/components/ui/ItemCard.tsx",
                        lineNumber: 54,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/ItemCard.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
        absolute top-3 right-3 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
        ${selected ? 'bg-green-500 border-green-500' : 'border-gray-300 bg-white'}
      `,
                children: selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-4 h-4 text-white",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            selected && onIncrement && onDecrement && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 -translate-x-1/2 bg-white shadow-xl border border-gray-100 rounded-full flex items-center p-1.5 gap-3 animate-in slide-in-from-bottom-2 duration-200 z-10",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onDecrement,
                        className: "w-8 h-8 flex items-center justify-center bg-gray-50 hover:bg-red-50 hover:text-red-500 rounded-full text-gray-600 font-bold transition-colors",
                        title: "Decrease",
                        children: "-"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/ItemCard.tsx",
                        lineNumber: 77,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-lg text-gray-800 w-6 text-center tabular-nums",
                        children: quantity
                    }, void 0, false, {
                        fileName: "[project]/components/ui/ItemCard.tsx",
                        lineNumber: 84,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c = ItemCard;
var _c;
__turbopack_context__.k.register(_c, "ItemCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:ddda4c [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addItem",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40ae216c821aa6abb0e752848f3c6f20c22941eedf":"addItem"},"app/actions/items.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40ae216c821aa6abb0e752848f3c6f20c22941eedf", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addItem");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaXRlbXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL2l0ZW1zJztcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5cbmltcG9ydCB7IHdyaXRlRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEl0ZW0oZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldCgnbmFtZScpIGFzIHN0cmluZztcbiAgICBjb25zdCB0YW1pbE5hbWUgPSBmb3JtRGF0YS5nZXQoJ3RhbWlsTmFtZScpIGFzIHN0cmluZztcbiAgICBjb25zdCBpbWFnZSA9IGZvcm1EYXRhLmdldCgnaW1hZ2UnKSBhcyBGaWxlO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm47XG5cbiAgICBsZXQgaW1hZ2VQYXRoID0gbnVsbDtcblxuICAgIGlmIChpbWFnZSAmJiBpbWFnZS5zaXplID4gMCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYnl0ZXMgPSBhd2FpdCBpbWFnZS5hcnJheUJ1ZmZlcigpO1xuICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYnl0ZXMpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgc2FmZSBmaWxlbmFtZVxuICAgICAgICAgICAgY29uc3Qgc2FmZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXowLTldL2csICdfJyk7XG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBpbWFnZS5uYW1lLnNwbGl0KCcuJykucG9wKCkgfHwgJ2pwZyc7XG4gICAgICAgICAgICBjb25zdCBmaWxlbmFtZSA9IGAke3NhZmVOYW1lfV8ke0RhdGUubm93KCl9LiR7ZXh0ZW5zaW9ufWA7XG5cbiAgICAgICAgICAgIC8vIFNhdmUgdG8gcHVibGljL2ltYWdlcy9wcm9kdWN0c1xuICAgICAgICAgICAgY29uc3QgdXBsb2FkRGlyID0gam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljJywgJ2ltYWdlcycsICdwcm9kdWN0cycpO1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBqb2luKHVwbG9hZERpciwgZmlsZW5hbWUpO1xuXG4gICAgICAgICAgICBhd2FpdCB3cml0ZUZpbGUoZmlsZVBhdGgsIGJ1ZmZlcik7XG4gICAgICAgICAgICBpbWFnZVBhdGggPSBgL2ltYWdlcy9wcm9kdWN0cy8ke2ZpbGVuYW1lfWA7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2F2aW5nIGltYWdlOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAvLyBDb250aW51ZSBjcmVhdGluZyBpdGVtIHdpdGhvdXQgaW1hZ2UgaWYgdXBsb2FkIGZhaWxzPyBcbiAgICAgICAgICAgIC8vIE9yIHRocm93PyBMZXQncyBsb2cgYW5kIGNvbnRpbnVlIGZvciBub3cuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBwcmlzbWEuaXRlbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgdGFtaWxOYW1lOiB0YW1pbE5hbWUgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGg6IGltYWdlUGF0aFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9zZWxlY3QnKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gYWRkIGl0ZW06XCIsIGUpO1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gYWRkIGl0ZW1cIiB9O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiZ1JBUXNCLG9MQUFBIn0=
}),
"[project]/components/ManualEntryForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ManualEntryForm",
    ()=>ManualEntryForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$ddda4c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:ddda4c [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ManualEntryForm({ onClose }) {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function handleSubmit(formData) {
        setLoading(true);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$ddda4c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addItem"])(formData);
        setLoading(false);
        onClose();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl w-full max-w-md p-6 shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold mb-4",
                    children: "Add New Item"
                }, void 0, false, {
                    fileName: "[project]/components/ManualEntryForm.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    action: handleSubmit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Item Name (English)"
                                }, void 0, false, {
                                    fileName: "[project]/components/ManualEntryForm.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Tamil Name (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/components/ManualEntryForm.tsx",
                                    lineNumber: 31,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Item Image (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/components/ManualEntryForm.tsx",
                                    lineNumber: 40,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    name: "image",
                                    accept: "image/*",
                                    className: "mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                                }, void 0, false, {
                                    fileName: "[project]/components/ManualEntryForm.tsx",
                                    lineNumber: 41,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ManualEntryForm.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 justify-end mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/ManualEntryForm.tsx",
                                    lineNumber: 55,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading,
                                    className: "px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 disabled:opacity-50",
                                    children: loading ? 'Adding...' : 'Add Item'
                                }, void 0, false, {
                                    fileName: "[project]/components/ManualEntryForm.tsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ManualEntryForm.tsx",
                            lineNumber: 54,
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
_s(ManualEntryForm, "/Rjh5rPqCCqf0XYnTUk9ZNavw3Q=");
_c = ManualEntryForm;
var _c;
__turbopack_context__.k.register(_c, "ManualEntryForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:a1a282 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveOrder",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60f38d9e8bd0f63401948e4a49c31fca27a67c04ec":"saveOrder"},"app/actions/order.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60f38d9e8bd0f63401948e4a49c31fca27a67c04ec", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "saveOrder");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vb3JkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IEdyb2NlcnlJdGVtLCBwcmlzbWEgfSBmcm9tICdAL2xpYi9pdGVtcyc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuXG5jb25zdCBPUkRFUl9GSUxFID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhL2N1cnJlbnQtb3JkZXIuanNvbicpO1xuXG4vLyBUeXBlIGZvciB0aGUgdHJhbnNmb3JtZWQgb3JkZXIgcmV0dXJuZWQgYnkgZ2V0T3JkZXJcbmV4cG9ydCBpbnRlcmZhY2UgT3JkZXJXaXRoR3JvY2VyeUl0ZW1zIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHRvdGFsSXRlbXM6IG51bWJlcjtcbiAgICBjcmVhdGVkQXQ6IERhdGU7XG4gICAgdXBkYXRlZEF0OiBEYXRlO1xuICAgIGl0ZW1zOiBHcm9jZXJ5SXRlbVtdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU9yZGVyKGl0ZW1zOiBHcm9jZXJ5SXRlbVtdLCBvcmRlcklkPzogbnVtYmVyKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gMS4gU2F2ZSB0byBKU09OIChMZWdhY3kgc3VwcG9ydClcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhPUkRFUl9GSUxFLCBKU09OLnN0cmluZ2lmeShpdGVtcywgbnVsbCwgMikpO1xuXG4gICAgICAgIC8vIDIuIFNhdmUgdG8gRGF0YWJhc2VcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChvcmRlcklkKSB7XG4gICAgICAgICAgICAgICAgLy8gVVBEQVRFIGV4aXN0aW5nIG9yZGVyXG4gICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRvdGFsIGl0ZW1zXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHR4Lm9yZGVyLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogb3JkZXJJZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0b3RhbEl0ZW1zOiBpdGVtcy5yZWR1Y2UoKHN1bSwgaSkgPT4gc3VtICsgKGkucXVhbnRpdHkgfHwgMSksIDApIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRGVsZXRlIGV4aXN0aW5nIGl0ZW1zXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHR4Lm9yZGVySXRlbS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IG9yZGVySWQ6IG9yZGVySWQgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBSZS1jcmVhdGUgaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0eC5vcmRlckl0ZW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVySWQ6IG9yZGVySWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JZDogaXRlbS5pZCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5IHx8IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBDUkVBVEUgbmV3IG9yZGVyXG4gICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLm9yZGVyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsSXRlbXM6IGl0ZW1zLnJlZHVjZSgoc3VtLCBpKSA9PiBzdW0gKyAoaS5xdWFudGl0eSB8fCAxKSwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZTogaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlkOiBpdGVtLmlkISxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgfHwgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgb3JkZXI6XCIsIGUpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gc2F2ZScgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVPcmRlcihvcmRlcklkOiBudW1iZXIpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBEZWxldGUgT3JkZXJJdGVtcyBmaXJzdCwgdGhlbiBPcmRlciAodG8gc2F0aXNmeSBmb3JlaWduIGtleSBjb25zdHJhaW50KVxuICAgICAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgdHgub3JkZXJJdGVtLmRlbGV0ZU1hbnkoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IG9yZGVySWQ6IG9yZGVySWQgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhd2FpdCB0eC5vcmRlci5kZWxldGUoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBvcmRlcklkIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGRlbGV0ZSBvcmRlcjpcIiwgZSk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUnIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJzKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG9yZGVycyA9IGF3YWl0IHByaXNtYS5vcmRlci5maW5kTWFueSh7XG4gICAgICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2Rlc2MnIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNYXAgUHJpc21hIHJlc3VsdCB0byBPcmRlciBpbnRlcmZhY2UgKGhhbmRsaW5nIG51bGxzIGFuZCBmaWVsZCBtYXBwaW5nKVxuICAgICAgICByZXR1cm4gb3JkZXJzLm1hcChvcmRlciA9PiAoe1xuICAgICAgICAgICAgLi4ub3JkZXIsXG4gICAgICAgICAgICBpdGVtczogb3JkZXIuaXRlbXMubWFwKG9pID0+ICh7XG4gICAgICAgICAgICAgICAgaWQ6IG9pLmlkLFxuICAgICAgICAgICAgICAgIG9yZGVySWQ6IG9pLm9yZGVySWQsXG4gICAgICAgICAgICAgICAgaXRlbUlkOiBvaS5pdGVtSWQsXG4gICAgICAgICAgICAgICAgaXRlbU5hbWU6IG9pLml0ZW1OYW1lLFxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiBvaS5xdWFudGl0eSxcbiAgICAgICAgICAgICAgICBpdGVtOiBvaS5pdGVtID8ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBvaS5pdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBvaS5pdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICB0YW1pbE5hbWU6IG9pLml0ZW0udGFtaWxOYW1lIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IG9pLml0ZW0uaW1hZ2VQYXRoIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBvaS5pdGVtLmNyZWF0ZWRBdFxuICAgICAgICAgICAgICAgIH0gOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9KSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIG9yZGVyczpcIiwgZSk7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPcmRlcihpZDogbnVtYmVyKTogUHJvbWlzZTxPcmRlcldpdGhHcm9jZXJ5SXRlbXMgfCBudWxsPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgb3JkZXIgPSBhd2FpdCBwcmlzbWEub3JkZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgICAgICAgaW5jbHVkZTogeyBpdGVtczogeyBpbmNsdWRlOiB7IGl0ZW06IHRydWUgfSB9IH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFvcmRlcikgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBvcmRlci5pZCxcbiAgICAgICAgICAgIHRvdGFsSXRlbXM6IG9yZGVyLnRvdGFsSXRlbXMsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG9yZGVyLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogb3JkZXIudXBkYXRlZEF0LFxuICAgICAgICAgICAgaXRlbXM6IG9yZGVyLml0ZW1zLm1hcCgob2kpID0+ICh7XG4gICAgICAgICAgICAgICAgaWQ6IG9pLml0ZW0uaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogb2kuaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIHRhbWlsTmFtZTogb2kuaXRlbS50YW1pbE5hbWUgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiBvaS5pdGVtLmltYWdlUGF0aCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IG9pLnF1YW50aXR5XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggb3JkZXI6XCIsIGUpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtSQWtCc0Isc0xBQUEifQ==
}),
"[project]/components/SelectionGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SelectionGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ItemCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ItemCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ManualEntryForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ManualEntryForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$a1a282__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:a1a282 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SelectionGrid({ initialItems, initialOrder }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Initialize from order if present
    const [selectedItems, setSelectedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SelectionGrid.useState": ()=>{
            if (initialOrder?.items) {
                const initial = {};
                initialOrder.items.forEach({
                    "SelectionGrid.useState": (orderItem)=>{
                        // Use 'name' as it is the standard property in GroceryItem
                        const itemName = orderItem.name;
                        if (itemName && orderItem.quantity) {
                            initial[itemName] = orderItem.quantity;
                        }
                    }
                }["SelectionGrid.useState"]);
                return initial;
            }
            return {};
        }
    }["SelectionGrid.useState"]);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('name');
    const [filterBy, setFilterBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [showManualForm, setShowManualForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOrdering, setIsOrdering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('grid');
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$a1a282__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveOrder"])(itemsToOrder, initialOrder?.id);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full pb-32",
        children: [
            showManualForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ManualEntryForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ManualEntryForm"], {
                onClose: ()=>setShowManualForm(false)
            }, void 0, false, {
                fileName: "[project]/components/SelectionGrid.tsx",
                lineNumber: 97,
                columnNumber: 32
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 bg-white/90 backdrop-blur-md p-4 z-10 shadow-sm rounded-xl mb-6 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-800",
                                        children: "Select Items"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SelectionGrid.tsx",
                                        lineNumber: 102,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500",
                                        children: [
                                            selectedCount,
                                            " items selected"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SelectionGrid.tsx",
                                        lineNumber: 103,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SelectionGrid.tsx",
                                lineNumber: 101,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2",
                                disabled: selectedCount === 0 || isOrdering,
                                onClick: handleReview,
                                children: isOrdering ? 'Saving...' : initialOrder ? 'Update Order' : 'Place Order'
                            }, void 0, false, {
                                fileName: "[project]/components/SelectionGrid.tsx",
                                lineNumber: 105,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SelectionGrid.tsx",
                        lineNumber: 100,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 items-center flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1 min-w-[200px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search...",
                                        value: search,
                                        onChange: (e)=>setSearch(e.target.value),
                                        className: "w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SelectionGrid.tsx",
                                        lineNumber: 116,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute left-3 top-3.5 text-gray-400",
                                        children: "🔍"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SelectionGrid.tsx",
                                        lineNumber: 123,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SelectionGrid.tsx",
                                lineNumber: 115,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50 p-1 rounded-xl border border-gray-200 flex",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setViewMode('grid'),
                                                className: `p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow text-green-700' : 'text-gray-400 hover:text-gray-600'}`,
                                                title: "Grid View",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SelectionGrid.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SelectionGrid.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SelectionGrid.tsx",
                                                lineNumber: 128,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setViewMode('list'),
                                                className: `p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white shadow text-green-700' : 'text-gray-400 hover:text-gray-600'}`,
                                                title: "List View",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M4 6h16M4 12h16M4 18h16"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SelectionGrid.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SelectionGrid.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SelectionGrid.tsx",
                                                lineNumber: 137,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SelectionGrid.tsx",
                                        lineNumber: 127,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: sortBy,
                                        onChange: (e)=>setSortBy(e.target.value),
                                        className: "bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "newest",
                                                children: "Newest"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SelectionGrid.tsx",
                                                lineNumber: 153,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "name",
                                                children: "A-Z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SelectionGrid.tsx",
                                                lineNumber: 154,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SelectionGrid.tsx",
                                        lineNumber: 148,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50 p-1 rounded-xl border border-gray-200 flex",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setFilterBy('all'),
                                                className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterBy === 'all' ? 'bg-white shadow text-green-700' : 'text-gray-500 hover:text-gray-700'}`,
                                                children: "All"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SelectionGrid.tsx",
                                                lineNumber: 158,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setFilterBy('selected'),
                                                className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterBy === 'selected' ? 'bg-white shadow text-green-700' : 'text-gray-500 hover:text-gray-700'}`,
                                                children: "Selected"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SelectionGrid.tsx",
                                                lineNumber: 164,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SelectionGrid.tsx",
                                        lineNumber: 157,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SelectionGrid.tsx",
                                lineNumber: 126,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SelectionGrid.tsx",
                        lineNumber: 114,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SelectionGrid.tsx",
                lineNumber: 99,
                columnNumber: 13
            }, this),
            filteredItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 mb-4",
                        children: "No items matched."
                    }, void 0, false, {
                        fileName: "[project]/components/SelectionGrid.tsx",
                        lineNumber: 177,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowManualForm(true),
                        className: "text-green-600 font-bold hover:underline",
                        children: "Add it manually?"
                    }, void 0, false, {
                        fileName: "[project]/components/SelectionGrid.tsx",
                        lineNumber: 178,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SelectionGrid.tsx",
                lineNumber: 176,
                columnNumber: 17
            }, this) : viewMode === 'grid' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                children: filteredItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ItemCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemCard"], {
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
                        lineNumber: 189,
                        columnNumber: 29
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/SelectionGrid.tsx",
                lineNumber: 187,
                columnNumber: 21
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: filteredItems.map((item)=>{
                    const isSelected = !!selectedItems[item.name];
                    const quantity = selectedItems[item.name] || 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>toggleItem(item.name),
                        className: `flex items-center gap-4 p-3 rounded-xl border transition-all cursor-pointer ${isSelected ? 'bg-green-50 border-green-200 shadow-sm' : 'bg-white border-gray-100 hover:border-green-200 hover:bg-gray-50'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 bg-gray-100 rounded-lg overflow-hidden shrink-0 border border-gray-200",
                                children: item.imageUrl ? // eslint-disable-next-line @next/next/no-img-element
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.imageUrl,
                                    alt: item.name,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/components/SelectionGrid.tsx",
                                    lineNumber: 221,
                                    columnNumber: 45
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full flex items-center justify-center text-xl",
                                    children: "📦"
                                }, void 0, false, {
                                    fileName: "[project]/components/SelectionGrid.tsx",
                                    lineNumber: 223,
                                    columnNumber: 45
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/SelectionGrid.tsx",
                                lineNumber: 218,
                                columnNumber: 37
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `font-bold text-sm truncate ${isSelected ? 'text-green-800' : 'text-gray-800'}`,
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/SelectionGrid.tsx",
                                        lineNumber: 228,
                                        columnNumber: 41
                                    }, this),
                                    item.tamilName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 truncate",
                                        children: item.tamilName
                                    }, void 0, false, {
                                        fileName: "[project]/components/SelectionGrid.tsx",
                                        lineNumber: 232,
                                        columnNumber: 45
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SelectionGrid.tsx",
                                lineNumber: 227,
                                columnNumber: 37
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 shrink-0",
                                onClick: (e)=>e.stopPropagation(),
                                children: isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center bg-white rounded-lg border border-green-200 shadow-sm overflow-hidden h-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>updateQuantity(item.name, -1),
                                            className: "w-8 h-full flex items-center justify-center hover:bg-green-50 text-green-700 transition-colors",
                                            children: "-"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SelectionGrid.tsx",
                                            lineNumber: 239,
                                            columnNumber: 49
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-8 h-full flex items-center justify-center font-bold text-green-700 text-sm border-x border-green-100",
                                            children: quantity
                                        }, void 0, false, {
                                            fileName: "[project]/components/SelectionGrid.tsx",
                                            lineNumber: 245,
                                            columnNumber: 49
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>updateQuantity(item.name, 1),
                                            className: "w-8 h-full flex items-center justify-center hover:bg-green-50 text-green-700 transition-colors",
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SelectionGrid.tsx",
                                            lineNumber: 248,
                                            columnNumber: 49
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SelectionGrid.tsx",
                                    lineNumber: 238,
                                    columnNumber: 45
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-transparent hover:border-green-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full bg-green-500 opacity-0 transition-opacity"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SelectionGrid.tsx",
                                        lineNumber: 257,
                                        columnNumber: 49
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/SelectionGrid.tsx",
                                    lineNumber: 256,
                                    columnNumber: 45
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/SelectionGrid.tsx",
                                lineNumber: 236,
                                columnNumber: 37
                            }, this)
                        ]
                    }, item.name, true, {
                        fileName: "[project]/components/SelectionGrid.tsx",
                        lineNumber: 210,
                        columnNumber: 33
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/SelectionGrid.tsx",
                lineNumber: 204,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowManualForm(true),
                className: "fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-105",
                title: "Add new item",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-3xl font-light mb-1",
                    children: "+"
                }, void 0, false, {
                    fileName: "[project]/components/SelectionGrid.tsx",
                    lineNumber: 274,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/SelectionGrid.tsx",
                lineNumber: 269,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SelectionGrid.tsx",
        lineNumber: 96,
        columnNumber: 9
    }, this);
}
_s(SelectionGrid, "qqvDf4zJ6ThbogDRGLciWt/J+gA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SelectionGrid;
var _c;
__turbopack_context__.k.register(_c, "SelectionGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_eaf2fb3d._.js.map