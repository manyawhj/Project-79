var array=[
"Margherita",
"Farm House",
"Mexican Green Wave",
"Non Veg Supreme",
"CHICKEN FIESTA",
];
function getmenu(){
    var arrayvalue="";
    for (i=0;i<array.length;i++)
    {
    console.log (array[i]);
    arrayvalue=arrayvalue+array[i]+"<br>";
    }
    document.getElementById("display").innerHTML=arrayvalue;
 }
 function addmenu(){
     array.push(document.getElementById("rec"))
     document.getElementById("display").innerHTML=array;
 }



