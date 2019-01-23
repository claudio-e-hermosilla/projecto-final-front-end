function vereficarcampos()
{    
    var nombre =document.getElementById("user").value;
    var clave =document.getElementById("password").value;
    var rut =document.getElementById("rut").value;
    var fono =document.getElementById("fono").value;

    if(nombre === "" || clave === "" || rut === "" || fono ==="")
    {
        alert("todos los campos son obligatorios");
        return false;
    }
    if (clave.length>10)
    {
        alert("tamaño maximo de la contraseña es 10");
        return false;
    }
}