"use strict";

var _server = _interopRequireDefault(require("./services/server"));

var _db = _interopRequireDefault(require("./services/db"));

var _inputs = require("./services/inputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_server.default.listen(_inputs.PORT, () => {
  console.log(`Server UP in port: ${_inputs.PORT}`);
});