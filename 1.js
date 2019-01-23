//verificar usuario por rut y clave
/*formacliente(rut)
{
    rut.value=rut.value.replace(/[.-]/g,'').replace(/^(\d{1,2})(d\{3})(d\3)(\w{1})$/,'$1.$2.$3-$4')
}*/
function validar() {
    var rut=document.getElementById("RUT").value;
    var clave=document.getElementById("pwd").value;
    if(rut === "" || clave === "")
    {
        alert('todos los campos son obligatorios');
        return false
    }
    if (isNaN(rut))
    {
        alert('rut invalido')
        return false
    }
    if (rut === "123456789" && clave === "123456")
    {
        alert("sesion iniciada");    
    }
    else
    {
        alert("rut y contraseña invalidos");
        return false;
    }
}