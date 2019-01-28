<<<<<<< HEAD

//PROBAR SI FUNCIONA, SI NO HAY QUE BORRAR LO DE ARRIBA Y PROBAR OTRA VEZ
var app = angular.module('Login',[]);
app.controller('controlador2',function($scope,$http,$sce)
{
=======
var app = angular.module('LoginApp',[]);
app.controller('ctrlLogin',function($scope,$http,$window,$sce)
{    
>>>>>>> b2437bec8924c3489c586644037d3bb343120c3b
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
    $scope.mostrarError = false;
    $scope.iniciarSesion = function(){
        if($scope.modelRut=="" || $scope.modelPass==""){
            $scope.mostrarError=true;
            $scope.mensaje = "Ingrese datos";
        }
        else{
            var user=({ 
                rut:$scope.modelRut, 
                password:$scope.modelPass 
            });
            console.log(JSON.stringify(user));
            $http({
                method : 'POST', 
                url : "http://localhost:8080/usuarios/loginNormal",
                data : JSON.stringify(user),
                config : header_config
                }).then(function(respuesta)
                {
                if(respuesta.data){
                    var rol = respuesta.data.rol;
                    if(rol.idRol==="ADMINISTRADOR"){
                        $window.sessionStorage["rutAdmin"]=$scope.modelRut;
                        window.location.href="pantAdm.html";
                    }
                    else{
                        $window.sessionStorage["rutVendedor"]=$scope.modelRut;
                        window.location.href="pantAdm.html";
                    }
                
                }else{
                    $scope.mostrarError=true;
                    $scope.mensaje="Rut o clave incorrectos";
                }
            });
        
        }
    };
});