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

