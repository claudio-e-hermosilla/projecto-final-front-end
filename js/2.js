$(document).on('ready',functionBotones);
function functionBotones(){
    $("agregarProducto").on('click',newRowTable);

    $("eliminarProducto").on('click','glyphicon-remove',deleteProduct);

}

function funcionEliminarProductos(){
    var a=this.parentNode.parentNode;
    var cantidad=a.getElementsByTagName("td")
    console.log(a);

    $(this).parent().parent().fadeOut("slow",function(){$(this).remove();});
}

function newRowTable(){
    var ID=document.getElementById("idProducto".value);
    var PRODUCTO=document.getElementById("producto".value);
    var CANTIDAD=document.getElementById("cantidad".value);
    var VALOR=document.getElementById("valor".value);
    var total=parseFloat(CANTIDAD)*parseFloat(VALOR);

    var name_table=document.getElementById("tablaProducto");

    var row = name_table.insertRow(0+1);
    var cell1 = row.insertCell(0); 
    var cell2 = row.insertCell(1); 
    var cell3 = row.insertCell(2); 
    var cell4 = row.insertCell(3); 
    var cell5 = row.insertCell(4); 

    cell1.innerHTML = '<p name="id_f[]" class="non-margin">'+ID+'</p>';
    cell2.innerHTML = '<p name="product_p[]" class="non-margin">'+PRODUCTO+'</p>';
    cell3.innerHTML = '<p name="cant_p[]" class="non-margin">'+CANTIDAD+'</p>';
    cell4.innerHTML = '<p name="val_p[]" class="non-margin">'+VALOR+'</p>';
    cell5.innerHTML = '<p name="to_p[]" class="non-margin"'+total+'</p>';

    calculateTotals(total, 1);

}

function calculateTotals(total){
    var t_total=parseFloat(document.getElementByIdById("TOTALTOTAL").innerHTML);
}
//accion1  sumarle al los totales
//accion2  restarle al los totales
if (accion==1){
    document.getElementById("TOTALTOTAL").innerHTML=parseFloat(t_total)+parseFloat(total);
}
else if(accion==2){
    document.getElementById("TOTALTOTAL").innerHTML=parseFloat(t_total)-parseFloat(total);
}
else{
    alert('accion Invalida');
}


//ESTO SI VA, SI LO QUE ESTA ARRIBA NO FUNCIONA, SE BORRA NOMAS
var app = angular.module('ventas',[]);
app.controller('controlador1',function($scope,$http,$sce)
{
    
    $scope.agregar=function(){
        var form_data = ({
            idProducto : $scope.id
    });
    console.log("Hasta aqui va bien");
    $http({
        method: 'POST',
        url:"http://localhost:8080/venta/buscarProducto",
        data: form_data
    })   .then(function(respuesta){
        console.log(respuesta.data);
    }, function(error){
        console.log(error);
    });

    };

})
 