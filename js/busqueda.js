var app = angular.module('myApp',[]);
app.controller('busqueda', function($scope) {
        $scope.stock= [
            {
                "modelo": "Galaxy J2",
                "marca": "Samsung",
                "codigo": "00123",
                "categoria":"Smartphorne",
                "precio":"49990",
                "stock":"15"
            },
            {
                "modelo": "Moto C",
                "marca": "Motorola",
                "codigo": "00234",
                "categoria":"Smartphorne",
                "precio":"36990",
                "stock":"10"
            },
            {
                "modelo":"Y5",
                "marca": "Huawei",
                "codigo": "00345",
                "categoria":"Smartphorne",
                "precio":"54990",
                "stock":"05"
            },
            {
                "modelo": "K10",
                "marca": "LG",
                "codigo": "00456",
                "categoria":"Smartphorne",
                "precio":"69990",
                "stock":"21"
            },
            {
                "modelo": "Galaxy A4",
                "marca": "Samsung",
                "codigo": "00567",
                "categoria":"Smartphorne",
                "precio":"199990",
                "stock":"20"
            },
              {
                "modelo": "iPhone 6S",
                "marca": "Apple",
                "codigo": "00678",
                "categoria":"Smartphorne",
                "precio":"269990",
                "stock":"11"
            },
              {
                "modelo": "Y7",
                "marca": "Huawei",
                "codigo": "00789",
                "categoria":"Smartphorne",
                "precio":"119990",
                "stock":"15"
            },
              {
                "modelo": "Q6",
                "marca": "LG",
                "codigo": "00891",
                "categoria":"Smartphorne",
                "precio":"99990",
                "stock":"18"
            },
             {
                "modelo": "Xperia XA25.2",
                "marca": "Sony",
                "codigo": "00912",
                "categoria":"Smartphorne",
                "precio":"129990",
                "stock":"21"
            }  
        ]
    });
