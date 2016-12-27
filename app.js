(function(){
'use strict';

  angular.module('LunchCheck',[])

    .controller('LunchCheckController',function($scope){
<<<<<<< HEAD
$scope.name = "";

=======
        $scope.name = "";
>>>>>>> e03e9c7c24dcdb20c3a55f5e99a0fb6f96484fc6
        $scope.showMessage = function(name){
              var stringToSplit = name;
               var arrayOfString = stringToSplit.split(",");
               var arrayCount = arrayOfString.length;
               if(arrayOfString == '')
               arrayCount = 0;

              if(!arrayCount){
              $scope.Message = "please enter the data first";
              }
              else
              {
                  if(arrayCount <= 3) {
                  $scope.Message = "Enjoy";
                 }
                 else {
                  
                   $scope.Message = "Too Much";
                 }
              }
        return $scope.Message;
      };

    });

})();
