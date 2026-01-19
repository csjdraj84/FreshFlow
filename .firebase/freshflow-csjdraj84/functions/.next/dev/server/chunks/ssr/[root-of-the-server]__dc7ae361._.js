module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/Development/App/lib/items.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getItems",
    ()=>getItems,
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$Development$2f$App$2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/Development/App/node_modules/@prisma/client)");
;
const globalForPrisma = /*TURBOPACK member replacement*/ __turbopack_context__.g;
const prisma = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$Development$2f$App$2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
async function getItems() {
    try {
        const items = await prisma.item.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return items.map((item)=>({
                ...item,
                tamilName: item.tamilName || undefined,
                imageUrl: item.imagePath || undefined // Mapped to local path
            }));
    } catch (error) {
        console.error('Error reading items from DB:', error);
        return [];
    }
} // Helper to save not needed for DB as we use Actions, 
 // but kept signature if needed for scripts, though scripts should use prisma directly.
}),
"[project]/Development/App/app/actions/order.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"007fa694730b3fd0d5716e5ee1edade58b1092a9de":"getOrders","4010a2147147757847e35a1f739b01b270ce90af51":"getOrder","40d53fdf4111d5ab7dfa780dc64b41f0f7f54360c1":"deleteOrder","60d2a912b15eb3e68abff7c854ebd52c4c9f66679f":"saveOrder"},"",""] */ __turbopack_context__.s([
    "deleteOrder",
    ()=>deleteOrder,
    "getOrder",
    ()=>getOrder,
    "getOrders",
    ()=>getOrders,
    "saveOrder",
    ()=>saveOrder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/App/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$lib$2f$items$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/App/lib/items.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/App/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/App/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const ORDER_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'data/current-order.json');
async function saveOrder(items, orderId) {
    try {
        // 1. Save to JSON (Legacy support)
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(ORDER_FILE, JSON.stringify(items, null, 2));
        // 2. Save to Database
        if (items.length > 0) {
            if (orderId) {
                // UPDATE existing order
                await __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$lib$2f$items$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
                    // Update total items
                    await tx.order.update({
                        where: {
                            id: orderId
                        },
                        data: {
                            totalItems: items.reduce((sum, i)=>sum + (i.quantity || 1), 0)
                        }
                    });
                    // Delete existing items
                    await tx.orderItem.deleteMany({
                        where: {
                            orderId: orderId
                        }
                    });
                    // Re-create items
                    for (const item of items){
                        await tx.orderItem.create({
                            data: {
                                orderId: orderId,
                                itemId: item.id,
                                itemName: item.name,
                                quantity: item.quantity || 1
                            }
                        });
                    }
                });
            } else {
                // CREATE new order
                await __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$lib$2f$items$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].order.create({
                    data: {
                        totalItems: items.reduce((sum, i)=>sum + (i.quantity || 1), 0),
                        items: {
                            create: items.map((item)=>({
                                    itemId: item.id,
                                    itemName: item.name,
                                    quantity: item.quantity || 1
                                }))
                        }
                    }
                });
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
        return {
            success: true
        };
    } catch (e) {
        console.error("Failed to save order:", e);
        return {
            success: false,
            error: 'Failed to save'
        };
    }
}
async function deleteOrder(orderId) {
    try {
        // Delete OrderItems first, then Order (to satisfy foreign key constraint)
        await __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$lib$2f$items$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            await tx.orderItem.deleteMany({
                where: {
                    orderId: orderId
                }
            });
            await tx.order.delete({
                where: {
                    id: orderId
                }
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
        return {
            success: true
        };
    } catch (e) {
        console.error("Failed to delete order:", e);
        return {
            success: false,
            error: 'Failed to delete'
        };
    }
}
async function getOrders() {
    try {
        const orders = await __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$lib$2f$items$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].order.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                items: {
                    include: {
                        item: true
                    }
                }
            }
        });
        // Map Prisma result to Order interface (handling nulls and field mapping)
        return orders.map((order)=>({
                ...order,
                items: order.items.map((oi)=>({
                        id: oi.id,
                        orderId: oi.orderId,
                        itemId: oi.itemId,
                        itemName: oi.itemName,
                        quantity: oi.quantity,
                        item: oi.item ? {
                            name: oi.item.name,
                            id: oi.item.id,
                            tamilName: oi.item.tamilName || undefined,
                            imageUrl: oi.item.imagePath || undefined,
                            createdAt: oi.item.createdAt
                        } : undefined
                    }))
            }));
    } catch (e) {
        console.error("Failed to fetch orders:", e);
        return [];
    }
}
async function getOrder(id) {
    try {
        const order = await __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$lib$2f$items$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].order.findUnique({
            where: {
                id
            },
            include: {
                items: {
                    include: {
                        item: true
                    }
                }
            }
        });
        if (!order) return null;
        return {
            id: order.id,
            totalItems: order.totalItems,
            createdAt: order.createdAt,
            updatedAt: order.updatedAt,
            items: order.items.map((oi)=>({
                    id: oi.item.id,
                    name: oi.item.name,
                    tamilName: oi.item.tamilName || undefined,
                    imageUrl: oi.item.imagePath || undefined,
                    quantity: oi.quantity
                }))
        };
    } catch (e) {
        console.error("Failed to fetch order:", e);
        return null;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    saveOrder,
    deleteOrder,
    getOrders,
    getOrder
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveOrder, "60d2a912b15eb3e68abff7c854ebd52c4c9f66679f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteOrder, "40d53fdf4111d5ab7dfa780dc64b41f0f7f54360c1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOrders, "007fa694730b3fd0d5716e5ee1edade58b1092a9de", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOrder, "4010a2147147757847e35a1f739b01b270ce90af51", null);
}),
"[project]/Development/App/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Development/App/app/actions/order.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$app$2f$actions$2f$order$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/App/app/actions/order.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
}),
"[project]/Development/App/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Development/App/app/actions/order.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "007fa694730b3fd0d5716e5ee1edade58b1092a9de",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$app$2f$actions$2f$order$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrders"],
    "4010a2147147757847e35a1f739b01b270ce90af51",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$app$2f$actions$2f$order$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrder"],
    "40d53fdf4111d5ab7dfa780dc64b41f0f7f54360c1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$app$2f$actions$2f$order$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteOrder"],
    "60d2a912b15eb3e68abff7c854ebd52c4c9f66679f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$app$2f$actions$2f$order$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveOrder"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Development$2f$App$2f$app$2f$actions$2f$order$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Development/App/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/Development/App/app/actions/order.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$App$2f$app$2f$actions$2f$order$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/App/app/actions/order.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dc7ae361._.js.map