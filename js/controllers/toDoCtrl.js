toDo.controller('toDoCtrl',
  ['$scope', '$window', 'toDoService',
  function($scope, $window, toDoService){

    $scope.completedFilter = {
      active: false,
      prompt: function() {
        if (this.active) {
          return 'Show';
        } else {
          return 'Hide'
        }
      }
    };


    $scope.items =  toDoService.getItems();


    $scope.submitToDo = function() {
      if ($scope.newForm.$valid) {
        toDoService.saveNew($scope.newToDo);
        $scope.newToDo = {};
        $scope.newForm.$setPristine();
      }
    };


    $scope.destroy = function(item) {
      toDoService.destroy(item);
    };


    $scope.clearCompleted = function() {
      toDoService.destroyCompleted();
    };


    $scope.toggleCompleted = function() {
      $scope.completedFilter.active ^= true;
    }


  }]);