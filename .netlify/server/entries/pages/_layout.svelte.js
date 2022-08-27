var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Layout
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../chunks/index.js");
var import_imagesloaded = require("imagesloaded");
var import_lodash = __toESM(require("lodash.debounce"));
var import_stores = require("../../chunks/stores.js");
const LocomotiveScrollProvider = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { watch } = $$props;
  let { location } = $$props;
  let { onLocationChange } = $$props;
  let { options } = $$props;
  let { imageTarget } = $$props;
  let scrollInstance;
  (0, import_chunks.s)("locomotiveScroll", { getScroll: () => scrollInstance });
  let viewport;
  const basicChange = (0, import_lodash.default)(
    (e) => {
    },
    300
  );
  if (!watch) {
    console.warn("svelte-locomotive-scroll: you did not add any props to watch. Scroll may have weird behaviours should the instance not be updated on i.e. route changes");
  }
  (0, import_chunks.o)(() => {
    scrollInstance == null ? void 0 : scrollInstance.destroy();
  });
  if ($$props.watch === void 0 && $$bindings.watch && watch !== void 0)
    $$bindings.watch(watch);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.onLocationChange === void 0 && $$bindings.onLocationChange && onLocationChange !== void 0)
    $$bindings.onLocationChange(onLocationChange);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.imageTarget === void 0 && $$bindings.imageTarget && imageTarget !== void 0)
    $$bindings.imageTarget(imageTarget);
  {
    basicChange();
  }
  return `<div data-scroll-container${(0, import_chunks.b)("this", viewport, 0)}>${``}</div>`;
});
const locomotiveScroll = "";
const app = "";
const Layout = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_chunks.d)(import_stores.p, (value) => $page = value);
  $$unsubscribe_page();
  return `${(0, import_chunks.v)(LocomotiveScrollProvider, "LocomotiveScrollProvider").$$render(
    $$result,
    {
      options: {
        smooth: true,
        smoothMobile: false,
        getDirection: true,
        getSpeed: true,
        inertia: 0.5
      },
      watch: $page,
      location: $page.url,
      onLocationChange: (scroll) => scroll.scrollTo(0, { duration: 2, disableLerp: false }),
      imageTarget: ".grid-item-media"
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
