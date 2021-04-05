
//1) Navigate DOM and get nodes..

/*
function highlightSelected(){
    alert('highlightSelected');

    let node =document.getElementById("");
    highlightSingleNode(node);

    //let resultNodeSet =document.getElementsByName("");
    // let resultNodeSet =document.getElementsByTagName("");
    // let resultNodeSet =document.getElementsByClassName("");
    //highlightNodeSet(resultNodeSet);

}

function highlightSingleNode(node){   
    if(node){
        node.style.backgroundColor = "yellow";
    }   
}  


function highlightNodeSet(resultNodeSet){
    for (node of resultNodeSet){
        node.style.backgroundColor = "yellow";
    }
}
*/



//2) Change DOM in memory

function addNewNodes(){
    const contentDivNode =document.getElementsByClassName('content')[0];

    //2.1) innerHTML property
    //contentDivNode.innerHTML=createNestedDivElementsAsHtmlString('test with inner html');
    
    //2.2) Standard DOM api
    contentDivNode.appendChild(createNestedDivElements('test with inner html'))
}


 //2.1) innerHTML property
function createNestedDivElementsAsHtmlString(sometext){
 
    return `
      <div id="myMainDiv" class="parent">
        <div class="internalDiv">
              ${sometext}
        </div> 
      </div>
    `
  }
  

//2.2) Standard DOM api
function createNestedDivElementsWithDomApi(sometext){
  
    let mainDiv =document.createElement('div');
    mainDiv.classList.add("parent")
    mainDiv.setAttribute("id", "myMainDiv");
  
    let internalDiv =document.createElement('div');
    internalDiv.classList.add("internalDiv")
    internalDiv.textContent=sometext;
    
    mainDiv.appendChild(internalDiv);
    return mainDiv;
  }