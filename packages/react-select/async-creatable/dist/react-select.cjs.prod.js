"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), require("@babel/runtime/helpers/objectWithoutProperties"), require("@babel/runtime/helpers/extends"), 
require("@babel/runtime/helpers/slicedToArray"), require("@babel/runtime/helpers/toConsumableArray"), 
require("../../dist/index-e90bf6a9.cjs.prod.js"), require("@babel/runtime/helpers/classCallCheck"), 
require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/assertThisInitialized"), 
require("@babel/runtime/helpers/inherits"), require("react"), require("memoize-one"), 
require("@babel/runtime/helpers/defineProperty"), require("@emotion/core"), require("react-dom"), 
require("@babel/runtime/helpers/typeof");

var base_dist_reactSelect = require("../../dist/Select-c3380626.cjs.prod.js");

require("@emotion/css"), require("@babel/runtime/helpers/taggedTemplateLiteral"), 
require("react-input-autosize-oss");

var stateManager = require("../../dist/stateManager-b3588148.cjs.prod.js"), async_dist_reactSelect = require("../../async/dist/react-select.cjs.prod.js"), creatable_dist_reactSelect = require("../../creatable/dist/react-select.cjs.prod.js"), SelectCreatable = creatable_dist_reactSelect.makeCreatableSelect(base_dist_reactSelect.Select), SelectCreatableState = stateManager.manageState(SelectCreatable), AsyncCreatable = async_dist_reactSelect.makeAsyncSelect(SelectCreatableState);

exports.default = AsyncCreatable;
