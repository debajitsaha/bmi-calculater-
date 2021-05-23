function display()
{
    var n=document.getElementById("w").value
    var m=document.getElementById("h").value
    l=n/100
bmi=m/(l*l)
if(bmi<18.5)
{document.getElementById("result").innerHTML= "<b>"+"Underweight"+"<b>";
}
else if(bmi>=18.5&&bmi<=24.9)
{
    document.getElementById("result").innerHTML= "<b>"+"Normal Weight"+"<b>";
}
else if(bmi>=25&&bmi<29.9)
{document.getElementById("result").innerHTML= "<b>"+"Underweight"+"<b>"
}
else if(bmi>=30.0&&bmi<=34.9)
{document.getElementById("result").innerHTML= "<b>"+"Obese class I"+"<b>"
}
else if(bmi>=35&&bmi<=39.9)
{
    document.getElementById("result").innerHTML= "<b>"+"Obese class II"+"<b>"
}
else{document.getElementById("result").innerHTML= "<b>"+"Obese class III"+"<b>"}
}