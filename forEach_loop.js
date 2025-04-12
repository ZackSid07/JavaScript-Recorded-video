let arr = ['jiga', 'riga','lugis','siga','miga']

arr.forEach(function(item){
    console.log(item);
    
})


// function with arro function


console.log("function with arro function");



arr.forEach((item)=>{
    console.log(item);
    
})


let num = [1 ,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,1920]

num.forEach(function(item){
    if(item % 2 == 0)
    console.log("this are the even:" , item);
if(item %2 != 0){
    console.log("these numbers are odd: ", item);  
}
    
})