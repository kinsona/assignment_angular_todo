toDo.controller('toDoCtrl',
  ['$scope', '$window',
  function($scope, $window){

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


    $scope.items =  [{
                      text: "Get groceries from the store",
                      dueDate: new Date(),
                      completed: false
                    },
                    {
                      text: "Vacuum living room",
                      dueDate: new Date(),
                      completed: false
                    },
                    {
                      text: "Cure hip displasia in dogs",
                      dueDate: new Date(),
                      completed: false
                    },
                    {
                      text: "Pay rent",
                      dueDate: new Date(),
                      completed: false
                    }];

    $scope.submitToDo = function() {
      if ($scope.newForm.$valid) {
        $scope.items.push($scope.newToDo);
        $scope.newToDo = {};
        $scope.newForm.$setPristine();
      };
    };


    $scope.destroy = function(item) {
      var index = $scope.items.indexOf(item);
      $scope.items.splice(index, 1);
    };


    $scope.clearCompleted = function() {
      // sort Completed to front;
      $scope.items.sort(function(a, b) { return b.completed } );

      var numberCompleted = $scope.countCompleted();
      $scope.items.splice(0, numberCompleted);
    }


    $scope.countCompleted = function() {
      var count = 0;
      for(i=0; i<$scope.items.length; i++) {
        if (!$scope.items[i].completed) {
          count = i;
          break;
        };
      };
      return count;
    };


    $scope.toggleCompleted = function() {
      $scope.completedFilter.active ^= true;
    }


  }]);