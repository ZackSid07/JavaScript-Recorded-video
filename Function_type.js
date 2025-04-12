/**
 * has parameter and has return
 * has parameter and no return
 * no paameter and has retun
 * no parameter and no rturn
 */

//has parameter and has return
function add(a , b){
    res = a + b
    return res
}

console.log(add(2,3));


//has parameter and no return
function add(a , b){
    res = a + b
    console.log(res);
    
}

add(10 , 10)


//no paameter and has retun
function add(){
    res = 10 + 70
    return res
}

console.log(add());


//no parameter and no rturn{

function hello(){
   console.log("hello");
   
}

hello();

