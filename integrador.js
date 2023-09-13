alert("Bienvenidos a la polleria Corralito")
presupuesto=parseInt(prompt("cuanto dinero tiene"))
entrada=parseInt(prompt("ingrese el valor de la entrada"))
segundo=parseInt(prompt("ingrese el valor del segundo"))
postre=parseInt(prompt("ingrese el valor del postre"))
total=entrada+segundo+postre
IGV=total+total*18/100
vuelto=presupuesto-IGV
console.log("El valor de la entrada es: ",entrada)
console.log("El valor del segundo es: ",segundo)
console.log("El valor del postre es: ",postre)
console.log("El total es: ",total)
console.log("El total con IGV es: ",IGV)
console.log("Su vuelto es de: ",vuelto)