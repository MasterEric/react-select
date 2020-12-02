'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('@babel/runtime/helpers/objectWithoutProperties');
require('@babel/runtime/helpers/extends');
require('@babel/runtime/helpers/slicedToArray');
require('@babel/runtime/helpers/toConsumableArray');
require('../../dist/index-abf47a7f.browser.cjs.js');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/assertThisInitialized');
require('@babel/runtime/helpers/inherits');
require('react');
require('memoize-one');
require('@babel/runtime/helpers/defineProperty');
require('@emotion/core');
require('react-dom');
require('@babel/runtime/helpers/typeof');
var base_dist_reactSelect = require('../../dist/Select-f4f89db0.browser.cjs.js');
require('@emotion/css');
require('@babel/runtime/helpers/taggedTemplateLiteral');
require('react-input-autosize-oss');
var stateManager = require('../../dist/stateManager-fc240f96.browser.cjs.js');
var async_dist_reactSelect = require('../../async/dist/react-select.browser.cjs.js');
var creatable_dist_reactSelect = require('../../creatable/dist/react-select.browser.cjs.js');

var SelectCreatable = creatable_dist_reactSelect.makeCreatableSelect(base_dist_reactSelect.Select);
var SelectCreatableState = stateManager.manageState(SelectCreatable);
var AsyncCreatable = async_dist_reactSelect.makeAsyncSelect(SelectCreatableState);

exports.default = AsyncCreatable;
