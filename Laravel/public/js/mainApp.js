var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {

    var vm = this;
    vm.txtNum = ''; // set default value as empty to avoid error in directive
    vm.txtNumTwo = ''; //set default value as empty to avoid error in directive

    $scope.records = {
        "EUR-Euro": {
            "image_path": 'images/flags/europe.png',
            "symbol": '€',
            "txtNum": ''
        },
        "USD-US-DOLLAR": {
            "image_path": 'images/flags/SUA.png',
            "symbol": '$',
            "txtNum":''
        }

    };
    console.log($scope.inputwsdss1);
    $scope.onlyNumbers = /^\d+$/;
    $scope.changeColor = function () {
        $scope.myColorVariable = "Aqua";
        // console.log(myColorVariable);
        console.log('updated amount');
        console.log($scope.records);
        return $scope.myColorVariable;
    }
    $scope.selectedId = null;
    $scope.setSelected = function ($index) {
        $scope.selectedId = $index;
        console.log($scope.selectedId);
    }
    $scope.convert = function (valoare) {
        console.log('apelez functia de convert');
        console.log(valoare);

    }



});

angular.module('myApp').directive('numOnly', numOnly);

function numOnly() {
    var directive = {
        restrict: 'A',
        scope: {
            ngModel: '=ngModel'
        },
        link: link
    };

    return directive;

    function link(scope, element, attrs) {
        scope.$watch('ngModel', function (newVal, oldVal) {
            var arr = String(newVal).split('');
            if (arr.length === 0) return;
            if (arr.length === 1 && (arr[0] === '-' || arr[0] === '.')) return;
            if (isNaN(newVal)) {
                scope.ngModel = oldVal;
            }
        });
    }
}
