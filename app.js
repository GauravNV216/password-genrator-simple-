
function myFun(){
    var a,b,c;
    var x = document.getElementById("capital");
    var y = document.getElementById("numb");
    if(x.checked)
    {
     c = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
     d = c.toUpperCase();
    }
    else
    {
        d = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    }
    if(y.checked)
    {
      a = Math.floor(Math.random()*100000 +1)
    }
    else{
      a = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    }
    var b = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    document.getElementById("demo").innerHTML = a + b + d ;
}
myFun();