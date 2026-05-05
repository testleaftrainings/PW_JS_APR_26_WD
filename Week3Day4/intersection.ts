//intersection --> &

type admin ={
    adminName : string,
    privilege : string
}

type employee ={
    name : string,
    empid : number,
    date : string

}

//type name= string

type qa = admin & employee

const QAprofile : qa ={
    adminName : 'Testleaf',
    privilege : 'server',
    name : "yuvarani",
    empid : 1001,
    date : '05/05/26'
    //name :'Qeagle'
    

}

console.log(QAprofile.adminName);
console.log(QAprofile);

