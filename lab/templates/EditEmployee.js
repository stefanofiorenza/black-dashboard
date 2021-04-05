let editEmployeeState={}

function editEmployeePage(){

  return `<div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header">
                  <h4 class="title">Edit Employee</h4>
                </div>
                <div class="card-body">
                  <form>
  
                    <div class="row">
                      <div class="col-md-2 pr-md-1">&nbsp;</div>
                      <div class="col-md-8 pr-md-1">
                        <div class="form-group">
                          <label>Full Name</label>
                          <input type="text" class="form-control" placeholder="fullName" value="Enter Full Name">
                        </div>
                        <div class="col-md-2 pr-md-1">&nbsp;</div>
                      </div>                   
                    </div>
  
                    <div class="row">
                      <div class="col-md-2 pr-md-1">&nbsp;</div>
                      <div class="col-md-8 pr-md-1">
                        <div class="form-group">
                          <label>Country</label>
                          <input type="text" class="form-control" placeholder="country" value="Enter Country ..">
                        </div>
                        <div class="col-md-2 pr-md-1">&nbsp;</div>
                      </div>                   
                    </div>
  
                    <div class="row">
                      <div class="col-md-2 pr-md-1">&nbsp;</div>
                      <div class="col-md-8 pr-md-1">
                        <div class="form-group">
                          <label>City</label>
                          <input type="text" class="form-control" placeholder="city" value="Enter City ..">
                        </div>
                        <div class="col-md-2 pr-md-1">&nbsp;</div>
                      </div>                   
                    </div>
                    
                    <div class="row">
                      <div class="col-md-2 pr-md-1">&nbsp;</div>
                      <div class="col-md-8 pr-md-1">
                        <div class="form-group">
                          <label>Salary</label>
                          <input type="text" class="form-control" placeholder="salary" value="Enter Salary..">
                        </div>
                        <div class="col-md-2 pr-md-1">&nbsp;</div>
                      </div>                   
                    </div>
                  
  
                    <div class="row">
                      <div class="col-md-2 pr-md-1">&nbsp;</div>
                      <div class="col-md-8 pr-md-1">
                        <div class="form-group">
                          <button class="btn btn-fill btn-primary">Save</button>
                          <button class="btn btn-fill btn-primary">Cancel</button>
                        </div>
                        <div class="col-md-2 pr-md-1">&nbsp;</div>
                      </div>                   
                    </div>
  
  
                </div>
                <div class="card-footer">
                  
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-user">
                <div class="card-body">
                  <p class="card-text">
                    <div class="author">
                      <div class="block block-one"></div>
                      <div class="block block-two"></div>
                      <div class="block block-three"></div>
                      <div class="block block-four"></div>
                      <a href="javascript:void(0)">
                        <img class="avatar" src="../../assets/img/emilyz.jpg" alt="...">
                        <h5 class="title">Mike Andrew</h5>
                      </a>
                      <p class="description">
                        Ceo/Co-Founder
                      </p>
                    </div>
                  </p>
                  <div class="card-description">
                    Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                  </div>
                </div>
                <div class="card-footer">
                  <div class="button-container">
                    <button href="javascript:void(0)" class="btn btn-icon btn-round btn-facebook">
                      <i class="fab fa-facebook"></i>
                    </button>
                    <button href="javascript:void(0)" class="btn btn-icon btn-round btn-twitter">
                      <i class="fab fa-twitter"></i>
                    </button>
                    <button href="javascript:void(0)" class="btn btn-icon btn-round btn-google">
                      <i class="fab fa-google-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
  }
  
  function updateEmployee(){
    alert("In editEmployee");
  }