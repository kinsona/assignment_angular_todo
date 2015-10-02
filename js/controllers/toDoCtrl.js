toDo.controller('toDoCtrl',
  ['$scope',
  function($scope){

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



  }]);