var app = angular.module("ventas",[])
app.controller("controlador1",function($scope,$http,$sce)
{
    $scope.trustScr = function(src) //resuelve problema de mandar un JSON y la url es segura//
    {
        return $sce.trustAsResourceUrl(src);
    }
    var header_confing=
    {
       headers:{
           'Content-Type': 'application/json'
       }
    }

   
   $scope.agregar=function(){
        var form_data = ({
        id : $scope.id
    })
    $http({
        method: 'POST',
        url:$scope.trustScr("http://localhost:8080/venta/buscarProducto"),
        data: JSON.stringify(form_data),
        config: header_confing
    })   .then(function(respuesta){
        console.log(respuesta.data);
    }, function(error){
        console.log(error);
    });

    }




})
 