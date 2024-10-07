let mainContainner=document.getElementById('mainContainer');
let redColor=document.getElementById('red');
let blueColor=document.getElementById('blue');
let greenColor=document.getElementById('green');
let yellowColor=document.getElementById('yellow');
let spanEle=document.getElementById('spanEle');

function changeColor(color){
    mainContainer.style.backgroundColor=color;
    mainContainer.style.color='#ffffff';

    blueColor.style.backgroundColor=color==='#0000ff' ? '#ffffff' : '#0000ff';
    greenColor.style.backgroundColor=color==='#00ff00' ? '#ffffff' : '#00ff00';
    yellowColor.style.backgroundColor=color==='#ffff00' ? '#ffffff' : '#ffff00';
    redColor.style.backgroundColor=color==='#ff0000' ? '#ffffff' : '#ff0000';
    spanEle.textContent=color;
}

redColor.addEventListener('click',function(){
    changeColor('#ff0000');
});

blueColor.addEventListener('click',function(){
    changeColor('#0000ff');
});

greenColor.addEventListener('click',function(){
    changeColor('#00ff00');
});

yellowColor.addEventListener('click',function(){
    changeColor('#ffff00');
}
);