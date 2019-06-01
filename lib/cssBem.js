'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var cssBem = function cssBem(block) {
  var delim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { element: '__', modifier: '_' };

  var modifier = function modifier(modified, modifiers) {
    return '' + modified + delim.modifier + modifiers.join(delim.modifier);
  };

  return function () {
    for (var _len = arguments.length, classes = Array(_len), _key = 0; _key < _len; _key++) {
      classes[_key] = arguments[_key];
    }

    var element = '';

    return classes.length ? classes.reduce(function (classesList, item) {
      if (!element) {
        if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) == 'object') {
          classesList.push(block);
        } else {
          element = item;
        }
      }
      var blockElement = '' + block + delim.element + element;

      return classesList.concat(typeof item == 'string' && blockElement || Object.keys(item).reduce(function (elem, key) {
        return elem.concat(item[key] && modifier(element ? blockElement : block, [key, item[key]].filter(function (el) {
          return el !== true;
        })) || []);
      }, []).join(' '));
    }, []).join(' ') : block;
  };
};

exports.default = cssBem;