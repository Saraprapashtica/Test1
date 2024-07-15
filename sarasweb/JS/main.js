console.log("hellooo")




document.write("   <h2>hello im sara</h2>")


document.write("<h1>Hey, Now I am here</h1>")







//3 lloje keywords per me deklaru ni variable

//var,let,const

//syntax

//var emri = vlera

var name = 'Sara'
var surname = 'Prapashtica'
var present = true

document.writeln(name)
document.writeln('<br>')

document.writeln(surname)
document.writeln('<br>')

document.writeln(present)
document.writeln('<br>')

//Java script data types

//string: fjal , tekst ,"hello" , "summer is ending soon"


var f1 = "hello"
var f2 = "pershendetje"
let f3 ="summer is ending soon.  "

document.write(f1 , typeof f1)

document.writeln('<br>')

document.write(f2 , typeof f1)

document.writeln('<br>')

document.write(f3 , typeof f3)



//numbers
var numri1 = 10
var numri2 = 20
var result = numri1+numri2

document.writeln('<br>')
document.write(numri1)

document.writeln('<br>')
document.write(numri2)

document.writeln('<br>')
document.write(result)

var num3 = 10
var num4 = 5

document.write(" <br>")

document.write(num3-num4)

//Task 1 : Shumzimin dhe pjestimin
// *-shumzimi /-pjestimi

var num5 = 40
var num6 = 20

document.write(num5*num6)
document.write(" <br>")
document.write(num5/num6)

//conditionals 

//kushtet
// if(conditionals){
//     kodi1
// }

// else if(conditionals2){
//     kodi2
// }
// else{
//     kodi3
// }

var person = "Sara Prapashtica"
var age =25

if(age >= 18){
    document.write(person," Lejohet te hy ne test te vozitjes ")
}
else if(age <18){
    document.write(person," Nuk lejohet te hy ne test ")
}

else{
    document.write("Error 404")
}


var numer = 1
if(numer > 0){
    document.write("numri eshte pozitiv")
}

else if(numer < 0){
    document.write("numri eshe negativ")
}
else{
    document.write("numri eshte 0")
}


