        columnas[3].textContent=(cantidad*importe).toFixed(2);
 
        total+=cantidad*importe;
    
    // mostramos la suma total
    var filas=document.querySelectorAll("#miTabla tfoot tr td");
    filas[1].textContent=total.toFixed(2);
