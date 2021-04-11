"use strict";
exports.__esModule = true;
exports.Lift = void 0;
var building_1 = require("./building");
var Lift = /** @class */ (function () {
    function Lift() {
        this.direction = true;
        this.maxCapacity = 10;
        this.currentFloor = 0;
        this.ans = [];
        this.lift = [];
        this.build = new building_1.Building();
        this.info = this.build.floorInfo;
        this.max = this.build.maxFloor;
    }
    Lift.prototype.isFull = function () {
        if (this.lift.length >= this.maxCapacity) {
            return true;
        }
        else {
            return false;
        }
    };
    Lift.prototype.checkFloorUp = function () {
        if (this.lift.includes(this.currentFloor)) {
            while (this.lift.includes(this.currentFloor)) {
                this.lift.splice(this.lift.indexOf(this.currentFloor), 1);
                this.info[this.currentFloor].push(this.currentFloor);
            }
            this.ans.push(this.currentFloor);
        }
        if (!this.isFull()) {
            for (var _i = 0, _a = this.info[this.currentFloor]; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i > this.currentFloor) {
                    this.info[this.currentFloor].splice(this.info[this.currentFloor].indexOf(i), 1);
                    this.lift.push(i);
                }
            }
            this.ans.push(this.currentFloor);
        }
        if (this.direction && this.currentFloor < this.max) {
            this.currentFloor++;
            if (this.currentFloor == this.max) {
                this.direction = false;
            }
        }
    };
    Lift.prototype.checkFloorDown = function () {
        if (this.lift.includes(this.currentFloor)) {
            while (this.lift.includes(this.currentFloor)) {
                this.lift.splice(this.lift.indexOf(this.currentFloor), 1);
                this.info[this.currentFloor].push(this.currentFloor);
            }
            this.ans.push(this.currentFloor);
        }
        if (!this.isFull) {
            for (var _i = 0, _a = this.info[this.currentFloor]; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i < this.currentFloor) {
                    this.info[this.currentFloor].splice(this.info[this.currentFloor].indexOf(i), 1);
                    this.lift.push(i);
                }
            }
            this.ans.push(this.currentFloor);
            this.currentFloor--;
        }
        if (!this.direction && this.currentFloor > 0) {
            this.currentFloor--;
            if (this.currentFloor == 0) {
                this.direction = true;
            }
        }
    };
    return Lift;
}());
exports.Lift = Lift;
