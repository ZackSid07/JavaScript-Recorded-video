let person = {
    name:'galib',
    sayName : function(){
        // console.log("My name is : " + person.name);  
        console.log("My name is : " + this.name);  
    },
}


person.sayName()



let player = {
    gretting:'hello',
    positions:["GK" , "CDM" , "CM" , "RW"],
    sayPos : function(){
        // console.log("My name is : " + person.name);  
        // console.log("My name is : " + this.name);  
        this.positions.forEach(element => {
            console.log(this.greeting + element);
            
            
        });
    },
}

player.sayPos();


