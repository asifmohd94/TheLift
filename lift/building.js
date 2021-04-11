"use strict";
exports.__esModule = true;
exports.Building = void 0;
var Building = /** @class */ (function () {
    function Building() {
        this.maxFloor = 11;
        this.floorInfo = [
            [1, 4, 3, 2],
            [1, 10, 2],
            [],
            [3, 6, 4, 5, 6],
            [],
            [],
            [0, 0, 0],
            [],
            [4],
            [6, 5, 2],
            []
        ];
    }
    Building.prototype.checking = function (floorInfo) {
        for (var i = 0; i <= this.maxFloor; i++) {
            for (var _i = 0, _a = floorInfo[i]; _i < _a.length; _i++) {
                var j = _a[_i];
                if (j != i)
                    return false;
            }
        }
        return true;
    };
    return Building;
}());
exports.Building = Building;
