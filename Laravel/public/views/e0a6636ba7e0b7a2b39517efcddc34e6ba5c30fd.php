<script src="<?php echo e(asset('js/angular.min.js')); ?>"></script>
<script src="<?php echo e(asset('js/mainApp.js')); ?>"></script>
<body ng-app="myApp" ng-controller="myCtrl">

<h1 id='element+"{{ x }}"+' ng-repeat="x in records">{{x}}</h1>
<?php /**PATH C:\xampp\htdocs\Projects\Laravel\resources\views/main.blade.php ENDPATH**/ ?>