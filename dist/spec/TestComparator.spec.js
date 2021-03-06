"use strict";
/**
* @license
* Copyright Larry Diamond 2017 All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/larrydiamond/typescriptcollectionsframework/LICENSE
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Collections_1 = require("../src/Collections");
describe("Test Comparator", function () {
    it("get the string comparator", function () {
        var x = Collections_1.Collections.getStringComparator();
        expect(x.compare("x", "X") === 0);
    });
});
