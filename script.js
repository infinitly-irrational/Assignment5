let colNum=1;
let rowNum=1;
const addRow = () => {
    let start = document.getElementById("column"+colNum+"_"+"row"+rowNum);
    for(let i=1;i<=colNum;i++){
      let newDiv=document.createElement('div');
      newDiv.id="column"+i+"_"+"row"+(rowNum+1);
      if(i===1){
        newDiv.style.clear="left";
      }
      start.parentNode.insertBefore(newDiv, start.nextSibling);
      start=newDiv;
    }
    rowNum++;
}
const addColumn = () => {
  for(let i=1;i<=rowNum;i++){
    let curr=document.getElementById("column"+colNum+"_"+"row"+i);
    let newDiv=document.createElement('div');
    newDiv.id="column"+(colNum+1)+"_"+"row"+i;
    curr.parentNode.insertBefore(newDiv, curr.nextSibling);
  }
  colNum++;
}

const removeColumn = () => {
  for(let i=1;i<=rowNum;i++){
    let curr=document.getElementById("column"+colNum+"_"+"row"+i);
    curr.parentNode.removeChild(curr);
  }
  colNum--;
}

const removeRow = () => {
  for(let i=1;i<=colNum;i++){
    let curr=document.getElementById("column"+i+"_"+"row"+rowNum);
    curr.parentNode.removeChild(curr);
  }
  rowNum--;
}
<<<<<<< HEAD
/*
=======

>>>>>>> e69c581fc2aae2fb01a68666b01735b9f7f9b009
const clearAllCells = () => {

  let color = "white";
  
  document.querySelector("button").addEventListener("click", function(){
    document.querySelector("div").style.background = color;
  })
}
<<<<<<< HEAD
*/
=======
>>>>>>> e69c581fc2aae2fb01a68666b01735b9f7f9b009

const fillAll = () => {
  for(let j=1;j<=rowNum;j++){
    for(let i=1;i<=colNum;i++){
      document.getElementById("column"+i+"_"+"row"+j).style.backgroundColor = color;
    }
  }
}

const clearColor = () => {
  for(let j=1;j<=rowNum;j++){
    for(let i=1;i<=colNum;i++){
      document.getElementById("column"+i+"_"+"row"+j).style.backgroundColor = "white";
    }
  }
}


  const fillAllUncolored = () => {
    for(let j=1;j<=rowNum;j++){
      for(let i=1;i<=colNum;i++){
        if(document.getElementById("column"+i+"_"+"row"+j).style.backgroundColor = "White"){
          document.getElementById("column"+i+"_"+"row"+j).style.backgroundColor = color;
        }
      }
    }
<<<<<<< HEAD
}
=======
}

>>>>>>> e69c581fc2aae2fb01a68666b01735b9f7f9b009
