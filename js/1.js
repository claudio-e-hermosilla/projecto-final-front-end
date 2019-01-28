//function validar() {
//    var rut=document.getElementById("RUT").value;
//    var clave=document.getElementById("pwd").value;
//    if(rut === "" || clave === "")
//    {
//        alert('todos los campos son obligatorios');
//        return false
//    }
//    if (isNaN(rut))
//    {
//        alert('rut invalido')
//        return false
//    }
//    if (rut === "123456789" && clave === "123456")
//    {
//        alert("sesion iniciada");    
//    }
//    else
//    {
//        alert("rut y contraseña invalidos");
//        return false;
//    }
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
    if($scope.rut == "" || $scope.clave =="")
    {
        alert("todos los campos son obligatorios");
    }
    else
    {
        console.log(JSON.stringify(archivo));
        $http(
            {
            method :'POST',
            url : $scope.trustScr("http://localhost:8080/usuarios/agregarUsuarioVendedor"),
            data : JSON.stringify(archivo),
            config : header_config
            }).then(function(data)
            {
          console.log(data)
        },function(error)
            {
                console.log(error)
            });        
        }
        if(data == true)
        {
            alert("sesion iniciada")
        }
        if (data == false)
        {
            alert("contraseña y/o usuarioinvalidos")  
        }
    });
}