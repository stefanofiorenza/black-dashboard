
//Objects
/**
    An Object is a set of connected data (similar to record in DB)
**/

//1) Anonymous with dynamic props
/*
    var employee = new Object();
    employee.fullName="Stefano Fiorenza"; // add property with obJvarname.propName
    employee['country']="Italy"; // add property with obJvarname['propName'] single quote
    employee["city"]="Napoli"; // add property with obJvarname["propName"] also double quote
    employee.getCountryAndCity=function (){ // an object property can be also a function
        return this.country+"."+this.city;
    }  
*/



//2) Object from Prototype function 
/*
    function Employee(fullName, country, city ,salary){
        this.fullName=fullName;
        this.country=country;
        this.city=city;
        this.salary=salary;   
        this.getCountryAndCity=function (){
            return this.country+"."+this.city;
        } 
    }
    var employee = new Employee("Stefano Fiorenza","Italy","Napoli",2000.0);
*/







//3) JSON Notation
/*
var employee = {
    "fullName":"Stefano Fiorenza",
    "country":"Italy",
    "city":"Napoli",
    "salary":2000.0
    getCountryAndCity:function (){
         return this.country+"."+this.city;
    }
};

*/

//4) ES6 class

/*
class Employee {


    constructor(fullName, country, city ,salary){
        this.fullName=fullName;
        this.country=country;
        this.city=city;
        this.salary=salary;    
    }

    getCountryAndCity(){
        return this.country+"."+this.city;
    }
}
var employee = new Employee("Stefano Fiorenza","Italy","Napoli",2000.0);
*/



console.log(employee);
console.log(employee.fullName);
console.log(employee.getCountryAndCity());


/*
function getObjectProps(data){
    let properties =[];

    for (var prop in data) {
        if( data.hasOwnProperty(prop) ) {
          properties.push(prop);
        } 
    }
    return properties;     
}
*/