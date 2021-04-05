
//those functions depend on template .js files

function routeToCreateEmployee () {

    //1) identify content node with selector
    let mainDiv =document.getElementById("contentDiv");

    //2) Update .content node with template contents
    mainDiv.innerHTML=createEmployeePage();
}

function routeToEditEmployee () {
    //1) identify content node with selector
    let mainDiv =document.getElementById("contentDiv");

    //2) Update .content node with template contents
    mainDiv.innerHTML=editEmployeePage();
}

function routeToSearchEmployees () {
    //1) identify content node with selector
    let mainDiv =document.getElementById("contentDiv");

    //2) Update .content node with template contents
    mainDiv.innerHTML=searchEmployeesPage();
}


function routeToEditForm () {

    //1) identify content node with selector
    let mainDiv =document.getElementById("contentDiv");

    //2) load data from remote...
    let employee =loadEmployee(0)

    //3) Update .content node with template contents
    mainDiv.innerHTML=editFormComponent(employee);
}