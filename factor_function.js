function createPerson(name , age){
    return{
        name,
        age,
        sayhello(){
            console.log('hello ' + this.name + " your age is : " + this.age);
            
        }
    }
}


let person1 = createPerson('hashi' , 22)
let person2 = createPerson('nashi' , 26)


person1.sayhello();
person2.sayhello();

