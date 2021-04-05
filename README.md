<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
</head>
<body>
    <header class="bg-primary">
        MADE BY GAURAV
    </header>
    <div class="container" style="position:relative;top:50px;">
    <div class="pss shadow p-3 mb-5 bg-body rounded">
        <h1 style="font-family: 'Montserrat', sans-serif;">PassWord Genrator</h1>
        <div class="inps ">
        <input type="checkbox" class="form-check-input" name="caps" id="capital">
        <label for="capital">include captial letters</label></div>
        <div class="inps">
        <input type="checkbox" class="form-check-input" name="nums" id="numb">
        <label for="numb">include numbers</label></div>
        
          <div class="inps">
            <button onclick="myFun()" class="btn btn-primary">Genrate PassWord</button><br><br>
            <div id="demo" >
   
            </div>
            <div id="very-weak">
            <label class="form-check-label" for="flexCheckDefault">
                PassWord strength: Weak
              </label>
            <div  class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 25%"></div>
             </div></div>
             <div id="ok">
                <labelclass="form-check-label" for="flexCheckDefault">
                 PassWord strength: ok
                </label>
             <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 70%"></div>
             </div>
            </div>
            <div id="strong">
                <labelclass="form-check-label" for="flexCheckDefault">
                 PassWord strength: Strong
                </label>
             <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 90%"></div>
             </div>
            </div>
        </div>
  
 
</div>
</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script>
        $(Document).ready(function(){
         $('#very-weak').hide();
         $('#ok').hide();
         $('#strong').hide();
         $('#demo').hide();
        });
    function myFun(){
    var a,b,c;
    var x = document.getElementById("capital");
    var y = document.getElementById("numb");
    if(x.checked)
    {
     c = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
     $('#demo').show();
     d = c.toUpperCase();
     $('#ok').show();
     $('#very-weak').hide();
     $('#strong').hide();
     $('#demo').hide()
    }
    else
    {
        d = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        $('#demo').show();
        $('#very-weak').show();
         $('#ok').hide();
         $('#strong').hide();
         $('#demo').hide();
    }
    if(y.checked)
    {
      a = Math.floor(Math.random()*100000 +1);
      $('#demo').show();
      $('#ok').show();
     $('#very-weak').hide();
     $('#strong').hide();
     
    }
    else{
      a = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
      $('#demo').show();
    //   $('#very-weak').show();
    //   $('#ok').hide();
    //   $('#strong').hide();
    //   $('#demo').hide();
    }
    if(x.checked == true && y.checked == true)
    {   $('#demo').show();
        $('#very-weak').hide();
         $('#ok').hide();
         $('#strong').show();
        
    }
    var b = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    document.getElementById("demo").innerHTML = a + b + d ;
}
myFun();
    </script>
</body>
</html>
