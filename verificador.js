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
app.controller("controlador1",function($scope,$http,$sce)
{
    $scope.trustScr = function(src)
    {
        return $sce.trustAsResourceUrl(src);
    }
    var usuario =
    {
        "correo":$scope.correo,
        "nombre":$scope.usuario,
        "password":$scope.contrasena,
        "rut":$scope.rutificador,
        "telefono":$scope.celular,
    };
    $scope.inicio = function()
    {
        $http.post($scope.trustScr("http://localhost:8080/usuarios/agregarUsuarioVendedor"),usuario) //coso
        .then(function(data)
        {
            console.log(data)
            {
                $scope.usuario = data.data;
            }
        });
    }
});