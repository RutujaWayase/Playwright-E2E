// 'var' is function-scoped or globally-scoped and can be re-declared and updated

function varExample(){
    var x=1;
    if(true) {
        var x = 2;
        console.log(x); //2
    }
    console.log(x); //2
}
varExample()

// 'let' is block-scoped and can be updated but not re-declared within the same scope

function varExample2(){
    let y = 1;
    if(true) {
        let y = 2;
        console.log(y); // 2
    }
    console.log(y); // 1
    y = 10;
    console.log(y); // 10
}
varExample2()

// 'const' is block-scoped and cannot be updated or re-declared
function varExample3(){
    const z = 1;
    if(true) {
        const z =2;
        console.log(z); // 2
    }
    //z = 3; // error can not be redeclared/reassigned
    console.log(z); //1
}
varExample3()