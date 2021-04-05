


// simulate access to rest api 
// similar to response for request to external system such as https://jsonplaceholder.typicode.com/todos

let mockData =[{"fullName":"Tawnya Daudray","country":"Poland","city":"Suchedniów","salary":2374.84},
{"fullName":"Candice Dunster","country":"Bulgaria","city":"Slavyanovo","salary":3676.5},
{"fullName":"Dunc MacIver","country":"Indonesia","city":"Oesapa","salary":2848.46},
{"fullName":"Antons Siney","country":"China","city":"Mentougou","salary":2159.55},
{"fullName":"Amber Dearl","country":"France","city":"Paris 17","salary":2490.78},
{"fullName":"Rabbi Geraldini","country":"Japan","city":"Hirosaki","salary":2855.4},
{"fullName":"Shantee Stocks","country":"China","city":"Yangdian","salary":2877.61},
{"fullName":"Rodney Benny","country":"Canada","city":"Carleton-sur-Mer","salary":3656.01},
{"fullName":"Leena Styant","country":"France","city":"Rungis","salary":3903.17},
{"fullName":"Cull Quesne","country":"Italy","city":"Padova","salary":3288.73},
{"fullName":"Gabbey Alessandone","country":"Poland","city":"Lubin","salary":3952.63},
{"fullName":"Cele Kuscha","country":"Sweden","city":"Göteborg","salary":2789.49},
{"fullName":"Sergei Rabbage","country":"Indonesia","city":"Waru","salary":3754.31},
{"fullName":"Tricia Sinden","country":"China","city":"Zhonghekou","salary":2480.1},
{"fullName":"Trixi Bartlet","country":"Poland","city":"Dubiecko","salary":3291.91},
{"fullName":"Jefferson Lung","country":"France","city":"Le Teil","salary":2021.24},
{"fullName":"Edd Gronowe","country":"Japan","city":"Kitakami","salary":2556.71},
{"fullName":"Anya Dashper","country":"China","city":"Xujiadian","salary":2670.57},
{"fullName":"Merrielle Chateau","country":"France","city":"Châteauroux","salary":2201.02},
{"fullName":"Ernaline Rudsdell","country":"Norway","city":"Trondheim","salary":2130.15}];


//functions to change loaded data 


function loadEmployee(index){
   return mockData[index];
}


function createEmployee(employee){
    mockData.push(employee)
}

function updateEmployee(position, employee){
    mockData[position]=employee;
}

function deleteEmployee(position){
    //https://love2dev.com/blog/javascript-remove-from-array/
    mockData =mockData.splice(position,1);
}

function loadEmployees(){
    return mockData;
}