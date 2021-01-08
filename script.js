let colNum=0;
let rowNum=0;
let color="white";
const addRow = () => {
    if(colNum===0 && rowNum===0){
      colNum=1;
      rowNum=1;
      let initial = document.createElement("div");
      initial.id="column1_row1";
      document.getElementById("grids").appendChild(initial);
    }
    else{
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
}
const addColumn = () => {
  if(colNum===0 && rowNum===0){
    colNum=1;
    rowNum=1;
    let initial = document.createElement("div");
    initial.id="column1_row1";
    document.getElementById("grids").appendChild(initial);
  }else{
  for(let i=1;i<=rowNum;i++){
    let curr=document.getElementById("column"+colNum+"_"+"row"+i);
    let newDiv=document.createElement('div');
    newDiv.id="column"+(colNum+1)+"_"+"row"+i;
    curr.parentNode.insertBefore(newDiv, curr.nextSibling);
  }
  colNum++;
  }
}

const removeColumn = () => {
  if(rowNum!==0 && colNum!==0){
  for(let i=1;i<=rowNum;i++){
    let curr=document.getElementById("column"+colNum+"_"+"row"+i);
    curr.parentNode.removeChild(curr);
  }
  colNum--;
  if(colNum===0){
    rowNum=0;
  }
 }
}

const removeRow = () => {
  if(rowNum!==0 && colNum!==0){
  for(let i=1;i<=colNum;i++){
    let curr=document.getElementById("column"+i+"_"+"row"+rowNum);
    curr.parentNode.removeChild(curr);
  }
  rowNum--;
  if(rowNum===0){
    colNum=0;
  }
 }
}

document.getElementById("form").addEventListener("submit", function(event) {
  color = document.getElementById("colors").value;
  document.getElementById("colorField").innerHTML="Current Color: "+color;
  event.preventDefault();
});

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
}
