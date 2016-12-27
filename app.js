(function(){
'use strict';

  angular.module('LunchCheck',[])

    .controller('LunchCheckController',function($scope){
        $scope.name = "";
        $scope.showMessage = function(name){
              var stringtosplit = name;
               var arrayofstring = stringtosplit.split(",");
               var arraycount = arrayofstring.length;
               if(arrayofstring == '')
               arraycount = 0;


              if(!arraycount){
                $scope.Message = "please enter the data first";
              }
              else if(arraycount <= 3) {
                 $scope.Message = "Enjoy";
               }
               else {
                 $scope.Message = "Too Much";
               }
        return $scope.Message;
          };
    });

})();
