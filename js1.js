function addition(){
  	var a =document.getElementById('iodisa').value;
  	var b =document.getElementById('iodisb').value;
  	a=parseFloat(a);
  	b=parseFloat(b);
  	var c= a + b ;
  	c=c.toFixed(3)

  	document.getElementById('iodiso').value=c;

  	return(c);


  } 
  function subtraction(){
  	var a =document.getElementById('iodisa').value;
  	var b =document.getElementById('iodisb').value;
  	a=parseFloat(a);
  	b=parseFloat(b);
  	var c= a - b ;
  	c=c.toFixed(3)

  	document.getElementById('iodiso').innerHTML=c;

  	return(c);

  }
  function mul(){
    var a =document.getElementById('iodisa').value;
  	var b =document.getElementById('iodisb').value;
  	a=parseFloat(a);
  	b=parseFloat(b);
  	var c= a * b ;
  	c=c.toFixed(3)

  	document.getElementById('iodiso').innerHTML=c;

  	return(c);


  }
  function division(){
    var a =document.getElementById('iodisa').value;
  	var b =document.getElementById('iodisb').value;
  	a=parseFloat(a);
  	b=parseFloat(b);
  	var c= a / b ;
  	c=c.toFixed(3)

  	document.getElementById('iodiso').innerHTML=c;

  	return(c);

  }
  function sqroot(){
    var a =document.getElementById('iodisa').value;
  	
  	a=parseFloat(a);
  	
  	var c=Math.sqrt(a);
  	c=c.toFixed(3)

  	document.getElementById('iodiso').innerHTML=c;

  	return(c);


  }
  function percen(){
    var a =document.getElementById('iodisa').value;
  	var b =document.getElementById('iodisb').value;
  	a=parseFloat(a);
  	b=parseFloat(b);
  	var c= (a * b)/100  ;
  	c=c.toFixed(3)

  	document.getElementById('iodiso').innerHTML=c;

  	return(c);
  }
   function abslote(){
    var a =document.getElementById('iodisa').value;
  	var b =document.getElementById('iodisb').value;
  	a=parseFloat(a);
  	
  	var c=Math.abs(a) ;
  	c=c.toFixed(3)

  	document.getElementById('iodiso').innerHTML=c;

  	return(c);


  }
  function grn1(){
    
    var x = Math.floor((Math.random() * 1000) + 1);
    document.getElementById('ran1').value=x;
    console.log(x);
    return x;
  }
  function grn2(){
    
    var y = Math.floor((Math.random() * 1000) + 1);
    document.getElementById('ran2').value=y;
    console.log(y);
    return y;
  }
  function checkwin(){
    /*alert('random numbers are to be created')
    var x = Math.floor((Math.random() * 1000) + 1);*/
    var x=document.getElementById('ran1').value;
    console.log(x);
    console.log(typeof(x));
    /*var y = Math.floor((Math.random() * 1000) + 1);*/
    var y=document.getElementById('ran2').value;
        
    console.log(y);
    console.log(typeof(y));
    y=y%9;
    x=x%9;
    console.log(x);
    console.log(typeof(x));
    console.log(y);
    console.log(typeof(y));
    y=y%3;
    x=x%3;
    console.log(x);
    console.log(typeof(x));
    console.log(y);
    console.log(typeof(y));
    if(y===x){
      alert('it is a TIE')

      return "TIE"
    }
    else if((y==1&&x==0)||(x==1&&y==0)){
      alert('HUMAN survived')
      return "Human"
    }
    else if ((y==2&&x==1)||(x==2&&y==1)){
            alert('Cockroach survived')
            return "Cockroach"

    }
    else{
      alert('Human dies and Nuclear bomb wins')
      return "Nuclear bomb"
    }







  }

  function getRandomexval(){
    var money=document.getElementById('from').value
    if (money==='USD'){
    fetch('https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=ecd96f38ab9cbbe978b7')
    .then( response => {
      console.log(response);
      return response.json();

    })
    .then( response1 => {
      console.log(response1);
      document.getElementById('currresult1').value=parseFloat(response1.USD_INR)
    });
  var m3 = document.getElementById('currresult1').value;
  var m1= parseFloat(document.getElementById('curr1').value);
  var m2=m1*m3;
  console.log(m2);
  m2=m2.toFixed(3);
  document.getElementById('currresult').value=m2;
  console.log(m2);
     return m2;              }
  else{
    fetch('https://free.currconv.com/api/v7/convert?q=INR_USD&compact=ultra&apiKey=ecd96f38ab9cbbe978b7')
    .then( response => {
      console.log(response);
      return response.json();

    })
    .then( response1 => {
      console.log(response1);
      document.getElementById('currresult1').value=parseFloat(response1.INR_USD)
    });
  var m3 = document.getElementById('currresult1').value;
  var m1= parseFloat(document.getElementById('curr1').value);
  var m2=m1*m3;
  console.log(m2);
  m2=m2.toFixed(3);
  document.getElementById('currresult').value=m2;
  console.log(m2);
    return m2;}

  }
function validate(){
    var name=document.getElementById('fname').value
        var email=document.getElementById('email').value
        var phono=document.getElementById('phoNo').value

          if(name=="" || email=="" || phone=="" ){

              alert('NO blank values')
              var al=true
          }

          var nam=/^(\D+)([a-zA-Z\D]+)(\D)$/g;
          var emai=/^([a-zA-Z0-9\.]+)@([a-zA-Z0-9]+).([a-z]{2,20})(\.[a-z]{2,10})?$/;
          var phone=/[0-9]{10}/;
          if(nam.test(name)){
            var n=true;
          }
          else{
            alert('invalid name');
            var n=false;
          }
          if(emai.test(email)){
            var e=true;
          }
          else{
            alert('invalid email');
            var e=false;
          }
          if(phone.test(phono)){
            var p=true;
          }
          else{
            alert('invalid phoneno.');
            var p=false;
          }
          if(al&&e&&n&&p){
            return true;

          }
          else{
            return false;
            alert('can not submit')
          }


  }
  
  function checkpali(){
    var wo=document.getElementById('palip').value
    wo=wo.toLowerCase();
    var rewo="";
    for(var i=wo.length ;i>=0 ;i--){

      rewo=rewo+wo.charAt(i);
    }
    console.log(rewo);
    
    if(wo===rewo){
             if (wo==""){
      alert('ENTER a word to check');}
      else{alert('THIS IS A PALINDROME');
      return true;}
    }
    else{
      alert('THIS IS NOT A PALINDROME');
      return false;
    }
  }
  function checkanag(){
      var wo1=document.getElementById('pana1').value.toLowerCase().split(' ').join('');
      var wo2=document.getElementById('pana2').value.toLowerCase().split(' ').join('');
      console.log(wo1);
      console.log(typeof(wo1));
      wo1=wo1.split('').sort();
      wo2=wo2.split('').sort();
      console.log(wo1);
      console.log(typeof(wo1));
      console.log(wo2);
      console.log(typeof(wo2));
      
      
      if(wo1===wo2){
        
                alert('IT IS AN ANAGRAM');
                     return true;
      }
      else {
        
        alert('IT IS NOT AN ANAGRAM');
        return false;}
      


    }
