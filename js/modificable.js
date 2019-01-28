var app = angular.module("login",[])
app.controller("consultar",function($scope,$http,$sce)
{
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
    $scope.inicio = function()
    {
        var usuario =
        ({
            rut:$scope.rut,
            password:$scope.password
        });
            console.log(JSON.stringify(usuario));
            $http(
                {
                method :'POST',
                url : $scope.trustScr("http://localhost:8080/usuarios/"),
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
        }
    ); 