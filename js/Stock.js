var app = angular.module("stock1",[])
app.controler("importar1",function($scope,$html,$sce)
{
    $scope.trustScr = function(src)
    {
        return $sce.trustAsresourceUrl(src)
    }
    var header_config =
    {
        headers:
        {
            'Content-Type' : 'application/json'
        }
    };
    $scope.enviar= function()
    {
        var archivo =
    ({
        stringdelcristopher:$scope.informacion
    });
    console.log(JSON.stringify(usuario));
    $http(
        {
        method :'POST',
        url : $scope.trustScr("http://localhost:8080/usuarios/agregarUsuarioVendedor"),
        data : JSON.stringify(usuario),
        config : header_config
        }).then(function(data)
        {
      console.log(data)
    },function(error)
        {
            console.log(error)
        });        
    }
}); 