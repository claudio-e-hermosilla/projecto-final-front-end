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
var app = angular.module("app1",[])
app.controller("controlador1",function($scope,$http)
{
    var usuario =
    {
        "correo":$scope.correo,
        "nombre":$scope.usuario,
        "password":$scope.contrasena,
        "rol":1,
        "rut":$scope.rutificador,

        "sucursal":{
            "comuna":"",
            "direccion":"",
            "idsucursal":0,
            "nombre":"",
            "ubicacion":"",
        },
        "telefono":$scope.celular,
    };
    $scope.inicio = function()
    {
        $http.post("http://localhost:8080/usuarios/agregarUsuarioVendedor",usuario)
        .then(function(data)
        {
            console.log(data)
            {
                $scope.usuario = data.data;
            }
        });
    }
});