module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/lib/items.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getItems",
    ()=>getItems,
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
const globalForPrisma = /*TURBOPACK member replacement*/ __turbopack_context__.g;
const prisma = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]();
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
"[project]/app/actions/order.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00ea844940f1a85356e85d097e710e1aa1761aa46a":"getOrders","40976b85472064e65d8389602515c9be77f3d05d79":"deleteOrder","40a0920276f6df347f647986162d0ad591bc9fb074":"getOrder","60f38d9e8bd0f63401948e4a49c31fca27a67c04ec":"saveOrder"},"",""] */ __turbopack_context__.s([
    "deleteOrder",
    ()=>deleteOrder,
    "getOrder",
    ()=>getOrder,
    "getOrders",
    ()=>getOrders,
    "saveOrder",
    ()=>saveOrder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$items$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/items.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
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
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$items$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
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
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$items$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].order.create({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$items$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
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
        const orders = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$items$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].order.findMany({
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
        const order = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$items$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].order.findUnique({
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    saveOrder,
    deleteOrder,
    getOrders,
    getOrder
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveOrder, "60f38d9e8bd0f63401948e4a49c31fca27a67c04ec", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteOrder, "40976b85472064e65d8389602515c9be77f3d05d79", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOrders, "00ea844940f1a85356e85d097e710e1aa1761aa46a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOrder, "40a0920276f6df347f647986162d0ad591bc9fb074", null);
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[project]/app/actions/items.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40ae216c821aa6abb0e752848f3c6f20c22941eedf":"addItem"},"",""] */ __turbopack_context__.s([
    "addItem",
    ()=>addItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$items$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/items.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function addItem(formData) {
    const name = formData.get('name');
    const tamilName = formData.get('tamilName');
    const image = formData.get('image');
    if (!name) return;
    let imagePath = null;
    if (image && image.size > 0) {
        try {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);
            // Create safe filename
            const safeName = name.toLowerCase().replace(/[^a-z0-9]/g, '_');
            const extension = image.name.split('.').pop() || 'jpg';
            const filename = `${safeName}_${Date.now()}.${extension}`;
            // Save to public/images/products
            const uploadDir = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), 'public', 'images', 'products');
            const filePath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(uploadDir, filename);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"])(filePath, buffer);
            imagePath = `/images/products/${filename}`;
        } catch (error) {
            console.error("Error saving image:", error);
        // Continue creating item without image if upload fails? 
        // Or throw? Let's log and continue for now.
        }
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$items$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].item.create({
            data: {
                name,
                tamilName: tamilName || null,
                imagePath: imagePath
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/select');
    } catch (e) {
        console.error("Failed to add item:", e);
        return {
            error: "Failed to add item"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    addItem
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addItem, "40ae216c821aa6abb0e752848f3c6f20c22941eedf", null);
}),
"[project]/.next-internal/server/app/select/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/order.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/items.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/order.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$items$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/items.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/select/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/order.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/items.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00ea844940f1a85356e85d097e710e1aa1761aa46a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrders"],
    "40976b85472064e65d8389602515c9be77f3d05d79",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteOrder"],
    "40a0920276f6df347f647986162d0ad591bc9fb074",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrder"],
    "40ae216c821aa6abb0e752848f3c6f20c22941eedf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$items$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addItem"],
    "60f38d9e8bd0f63401948e4a49c31fca27a67c04ec",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveOrder"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$select$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$order$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$items$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/select/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/order.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/actions/items.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$order$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/order.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$items$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/items.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ad18d9ce._.js.map