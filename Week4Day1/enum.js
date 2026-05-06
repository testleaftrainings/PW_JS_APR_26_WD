"use strict";
//numeric enum
var browserstatus;
(function (browserstatus) {
    browserstatus[browserstatus["open"] = 0] = "open";
    browserstatus[browserstatus["closed"] = 1] = "closed";
    browserstatus[browserstatus["incognito"] = 30] = "incognito";
    browserstatus[browserstatus["crash"] = 31] = "crash";
})(browserstatus || (browserstatus = {}));
console.log(browserstatus.open);
console.log(browserstatus);
//string enum
var Testresults1;
(function (Testresults1) {
    Testresults1["pass"] = "Test passed";
    Testresults1["fail"] = "Test failed";
    Testresults1["skip"] = "Test skipped";
})(Testresults1 || (Testresults1 = {}));
console.log(Testresults1.fail);
function logTestResults1(result) {
    console.log(`the test result is ${result}`);
}
logTestResults1(Testresults1.skip);
logTestResults1(Testresults1.pass);
// Heterogeneous enum
var Testresult2;
(function (Testresult2) {
    Testresult2[Testresult2["pass1"] = 0] = "pass1";
    Testresult2["fail1"] = "Test Failed";
    Testresult2["skip1"] = "Test case";
    Testresult2[Testresult2["closed"] = 0.7] = "closed";
    Testresult2[Testresult2["step"] = 1.7] = "step";
})(Testresult2 || (Testresult2 = {}));
function logtestResults2(result1) {
    console.log(`The test result is ${result1}`);
}
logtestResults2(Testresult2.pass1);
logtestResults2(Testresult2.step);
