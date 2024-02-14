"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeleton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const cn_1 = require("@/utils/cn");
function Skeleton({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, cn_1.cn)("animate-pulse rounded-md bg-muted", className), ...props }));
}
exports.Skeleton = Skeleton;
