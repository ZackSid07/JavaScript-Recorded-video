let num = [1,2,3,4,5]

for(let i = 0 ;i < num.length ; i++){
    console.log(num[i]);
    
}


let persons = ['galib', 'nitu', 'setu']

persons.forEach((item, index,arr)=>{
    console.log(item,index);
    

})

num.forEach((item, index,arr)=>{
    console.log(item,index);
    

})

num.forEach((item, index,arr)=>{
    console.log( arr);
    

})

num.forEach(function(item,index,arr){
    console.log(item, index);
    
})