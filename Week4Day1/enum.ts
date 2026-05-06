//numeric enum

enum browserstatus{
    open,
    closed,
    incognito=30,
    crash
}

console.log(browserstatus.open);
console.log(browserstatus);

//string enum

enum Testresults1{
    pass = 'Test passed',
    fail = "Test failed",
    skip = 'Test skipped'
}

console.log(Testresults1.fail);

function logTestResults1(result:Testresults1) : void{
    console.log(`the test result is ${result}`)
    
}
logTestResults1(Testresults1.skip)
logTestResults1(Testresults1.pass)


// Heterogeneous enum

enum Testresult2{
    pass1,
    fail1 = 'Test Failed',
    skip1 = 'Test case',
    closed = 0.7,
    step
}

function logtestResults2(result1:Testresult2){
    console.log(`The test result is ${result1}`);
    
}

logtestResults2(Testresult2.pass1)
logtestResults2(Testresult2.step)