toDo.controller('toDoCtrl',
  ['$scope', '$window',
  function($scope, $window){

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


  }]);