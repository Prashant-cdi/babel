"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var timer = function timer() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Promise resolved after 5 seconds");
    }, 5000);
  });
};

var out = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var msg;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return timer();

          case 2:
            msg = _context.sent;
            console.log(msg);
            console.log("hello after await");

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function out() {
    return _ref.apply(this, arguments);
  };
}();

out();
