let searchEmployeesState=[]

function searchEmployeesPage(){

  searchEmployeesState=loadEmployees();
  let tableData=createRowsFromData(searchEmployeesState);


return `   <div class="row">
          <div class="col-md-12">
            <div class="card ">
              <div class="card-header">
                <h4 class="card-title"> Employees</h4>
              </div>
              <div class="card-body">

                <div class="row">
                  <div class="col-md-8 ">
                    <div class="form-group">
                      <label>Search Employees</label>
                      <input type="text" class="form-control" disabled="" placeholder="queryEmployees" value="" />                                                         
                    </div>
                   </div>   
                   <div class="col-md-4 pr-md-3">
                    <div class="form-group">
                      <label>&nbsp;</label>
                      <button class="btn btn-fill btn-primary" style="margin-top: 22px;">Search</button>                                                          
                    </div>
                   </div>
                                    
                                        
                </div>


                <div class="row">
                  <div class="col-md-12 ">

                <!-- <div class="table-responsive">  to enable responsive table when data are loaded-->
                  <div ></div>
                  <table class="table tablesorter " id="employeeTable"> 
                      <thead class=" text-primary">
                        <tr>
                          <th>
                            Name
                          </th>
                          <th>
                            Country
                          </th>
                          <th>
                            City
                          </th>
                          <th class="text-center">
                            Salary
                          </th>   
                          <th class="text-center">
                            &nbsp;
                          </th>                     
                        </tr>
                      </thead>
                      <tbody>
                        ${tableData}
                      </tbody>
                  </table>                  
                </div>

              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
    `
}

/*
function searchEmployees(){
  alert("In searchEmployees");
}*/

function deleteEmployee(index){
  alert("In deleteEmployee");
}

function createRowsFromData(data){

  let tableDataAsString ='';

  for (employee of data){
    tableDataAsString+=createRowFromData(employee)
  } 
  return tableDataAsString;
}

function createRowFromData(employee){

  if (employee){
      return `
      <tr>
        <td>
        ${employee.fullName}
        </td>
        <td>
        ${employee.country}
        </td>
        <td>
        ${employee.city}
        </td>
        <td class="text-center">
        ${employee.salary}
        </td>
        <td class="text-center">
          <button href="javascript:void(0)" class="btn btn-icon btn-round ">
            <i class="tim-icons icon-pencil"></i>
          </button>
          <button href="javascript:void(0)" class="btn btn-icon btn-round " >
            <i class="tim-icons icon-trash-simple"></i>
          </button>
        </td>
      </tr>`
  }
   
}
