var app = angular.module('ventas',[])
app.controller("controlador2",function($scope,$http,$sce){
    
    $scope.trustScr = function(src)
    {
        return $sce.trustAsResourceUrl(src);
    }
    var header_config =
    {
        headers:
        {
            'Content-Type' : 'application/json'
        }
    };

    $scope.eliminarFila=function(){
        $(document).on('click', function (event) {
            event.preventDefault();
            $(this).closest('tr').remove();
        });

    };

    $scope.agregar=function(){

        var producto =
            ({
                nombre:$scope.agregarProducto
            });
    console.log("veamos");

    $http({
        method: 'POST',
        url:"http://localhost:8080/venta/buscarProducto",
        data: form_data
    })  .then(function(respuesta){
        console.log(respuesta.data);
    }, function(error){
        console.log(error);
    });
};

    });

 