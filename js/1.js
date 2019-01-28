
//PROBAR SI FUNCIONA, SI NO HAY QUE BORRAR LO DE ARRIBA Y PROBAR OTRA VEZ
var app = angular.module('Login',[]);
app.controller('controlador2',function($scope,$http,$sce)
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
    
    $scope.enviar=function(){
        var ingresar=
        ({
            rut : $scope.ruti,
            contrasena: $scope.contra

    });
    console.log("Hasta aqui va bien");
    $http({
        method: 'POST',
        url:$scope.trustScr("http://localhost:8080/usuarios/login"),
        data: JSON.stringify(ingresar),
        config: header_config
    })   .then(function(data){
        console.log(data);
    }, function(error){
        console.log(error);
    });

    };

})