
var app = angular.module("app1",[])
app.controller("controlador1",function($scope,$http,$sce)
{
    $scope.trustScr = function(src)
    {
        return $sce.trustAsResourceUrl(src);
    }

    var header_config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };

    var form_data =
    ({
        correo:$scope.correo,
        nombre:$scope.usuario,
        password:$scope.contrasena,
        rut:$scope.rutificador,
        telefono:$scope.celular
    });
    $scope.inicio = function()
    {
        $http({
            method : 'POST',
            url : $scope.trustScr("http://localhost:8080/usuarios/agregarUsuarioVendedor"),
            data : JSON.stringify(form_data),
            config : header_config
        }).then(function(data){
          console.log(data)       
            },function(error){
                console.log(error)
            });
        
        }
});