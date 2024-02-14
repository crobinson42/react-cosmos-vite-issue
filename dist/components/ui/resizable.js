"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizableHandle = exports.ResizablePanel = exports.ResizablePanelGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const ResizablePrimitive = __importStar(require("react-resizable-panels"));
const cn_1 = require("@/utils/cn");
const ResizablePanelGroup = ({ className, ...props }) => ((0, jsx_runtime_1.jsx)(ResizablePrimitive.PanelGroup, { className: (0, cn_1.cn)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className), ...props }));
exports.ResizablePanelGroup = ResizablePanelGroup;
const ResizablePanel = ResizablePrimitive.Panel;
exports.ResizablePanel = ResizablePanel;
const ResizableHandle = ({ withHandle, className, ...props }) => ((0, jsx_runtime_1.jsx)(ResizablePrimitive.PanelResizeHandle, { className: (0, cn_1.cn)("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90", className), ...props, children: withHandle && ((0, jsx_runtime_1.jsx)("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: (0, jsx_runtime_1.jsx)(lucide_react_1.GripVertical, { className: "h-2.5 w-2.5" }) })) }));
exports.ResizableHandle = ResizableHandle;
