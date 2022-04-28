"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(generatorFunction);

function generatorFunction(a) {
  return regeneratorRuntime.wrap(function generatorFunction$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return a;

        case 2:
          _context.next = 4;
          return a + 1;

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var g = generatorFunction(10);
console.log(g.next());
console.log(g.next());
