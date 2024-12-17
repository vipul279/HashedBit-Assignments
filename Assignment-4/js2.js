function createDiv(width,height,text){
    const insidediv=document.getElementById('container');
    insidediv.innerHTML+=`<div style="width:${width}px;height:${height}px;">${text}</div>`;
}