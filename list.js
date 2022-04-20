let num1=300,num2=100,num3=200,num4=250,num5=350;
let total = 0
let i=0


document.getElementById("button1").onclick = displaychoco; 
function displaychoco() {
  if(i<5){
  total +=num1
  document.getElementById("demo").innerHTML = "CHOCOLATE...........300";  
  var  box = document.getElementById("box")
  var layer = document.createElement('div')
  layer.id
  layer.style.backgroundColor = 'rgb(121, 69, 26)'

 layer.style.height = " 25px";
 if(i==0)
    {
    layer.style.width= '150px'
    }
    else if(i==1)
    {
    layer.style.width= '130px'    
    }
    else if(i==2)
    {
    layer.style.width= '110px'    
    }
    else if(i==3)
    {
    layer.style.width= '90px'    
    }
    else if(i==4)
    {
    layer.style.width= '70px'
    }
  i++
  layer.style.padding = "5px";
  layer.style.border = " 1px solid blue";
  layer.style.borderRadius="5px";
  layer.style.margin = "auto"
  box.prepend(layer)
}}
document.getElementById("button2").onclick = displaystraw;

function displaystraw() {
  if(i<5){
  total +=num2
  document.getElementById("demo1").innerHTML = "STRAWBERRY.........100";
  var  box = document.getElementById("box")
  var layer = document.createElement('div')
  layer.style.backgroundColor = 'palevioletred'

  layer.style.height = " 25px";
 if(i==0)
    {
    layer.style.width= '150px'
    }
    else if(i==1)
    {
    layer.style.width= '130px'    
    }
    else if(i==2)
    {
    layer.style.width= '110px'    
    }
    else if(i==3)
    {
    layer.style.width= '90px'    
    }
    else if(i==4)
    {
    layer.style.width= '70px'
    }
  i++
  
  
  layer.style.padding = "5px";
  layer.style.border = " 1px solid blue";
  layer.style.borderRadius="5px";
  layer.style.margin = "auto"


  box.prepend(layer) 
}
}


document.getElementById("button3").onclick = displaybutter;

function displaybutter() {
  if(i<5){
  total +=num3
  document.getElementById("demo2").innerHTML = "BUTTERSCOTCH....200";
  var  box = document.getElementById("box")
  var layer = document.createElement('div')
  layer.style.backgroundColor = 'rgba(255, 187, 0, 0.952)'

  layer.style.height = " 25px";
 if(i==0)
    {
    layer.style.width= '150px'
    }
    else if(i==1)
    {
    layer.style.width= '130px'    
    }
    else if(i==2)
    {
    layer.style.width= '110px'    
    }
    else if(i==3)
    {
    layer.style.width= '90px'    
    }
    else if(i==4)
    {
    layer.style.width= '70px'
    }
  i++

  layer.style.padding = "5px";
  layer.style.border = " 1px solid blue";
  layer.style.borderRadius="5px";
  layer.style.margin = "auto"

  box.prepend(layer) 
}
}

document.getElementById("button4").onclick = displayvan;
function displayvan() {
  if(i<5){
  total +=num4
    document.getElementById("demo3").innerHTML = "VANNILLA................250";
    var box= document.getElementById("box")
  var layer = document.createElement('div')
  layer.style.backgroundColor = ' blanchedalmond'

  layer.style.height = " 25px";
 if(i==0)
    {
    layer.style.width= '150px'
    }
    else if(i==1)
    {
    layer.style.width= '130px'    
    }
    else if(i==2)
    {
    layer.style.width= '110px'    
    }
    else if(i==3)
    {
    layer.style.width= '90px'    
    }
    else if(i==4)
    {
    layer.style.width= '70px'
    }
  i++

  
  layer.style.padding = "5px";
  layer.style.border = " 1px solid blue";
  layer.style.borderRadius="5px";
  layer.style.right="60px"
  layer.style.margin = "auto"

  box.prepend(layer) 
}
}

  document.getElementById("button5").onclick = displayred;
function displayred() {
  if(i<5){
  total +=num5
    document.getElementById("demo4").innerHTML = "REDVELVET.............350";
    var  box = document.getElementById("box")
  var layer = document.createElement('div')
  layer.style.backgroundColor = 'red'

  layer.style.height = " 25px";
 if(i==0)
    {
    layer.style.width= '150px'
    }
    else if(i==1)
    {
    layer.style.width= '130px'    
    }
    else if(i==2)
    {
    layer.style.width= '110px'    
    }
    else if(i==3)
    {
    layer.style.width= '90px'    
    }
    else if(i==4)
    {
    layer.style.width= '70px'
    }
  i++

  layer.style.margin = "auto"
  layer.style.padding = "5px";
  layer.style.border = " 1px solid blue";
  layer.style.borderRadius="5px";

  box.prepend(layer) 
}
}

document.getElementById("button6").onclick = displayimg;
function displayimg() {
    document.getElementById("demo5").innerHTML = "TOTAL AMOUNT" + total;
    var img=new Image()
    img.src="https://images.vexels.com/media/users/3/194267/isolated/lists/231a81e767b5455c37cd7e1a2968a0d4-birthday-candles-set.png"
  var layer = document.createElement('div')

  layer.style.margin = "auto"
 layer.style.width = " 80px";
  layer.style.height = " 10px";
  layer.style.padding = "5px";
  layer.style.border = " 1px solid blue";
    img.style.width="100px";
    img.style.margin="auto";
    img.style.position="absolute";
    img.style.top="160px";
    img.style.left="860px"
 
  box.prepend(img) 
}