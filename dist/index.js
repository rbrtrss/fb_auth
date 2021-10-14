"use strict";

var _server = _interopRequireDefault(require("./services/server"));

var _db = _interopRequireDefault(require("./services/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = process.env.PORT || 8080;

_server.default.listen(PORT, () => {
  console.log(`Server UP in port: ${PORT}`);
});