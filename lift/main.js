"use strict";
exports.__esModule = true;
var lift_1 = require("./lift");
var building_1 = require("./building");
var build = new building_1.Building();
var lift = new lift_1.Lift();
var getAns = function () {
    while (!build.checking(lift.info)) {
        if (lift.direction) {
            lift.checkFloorUp();
        }
        else {
            lift.checkFloorDown();
        }
        return lift.ans;
    }
};
console.log(getAns());
