toDo.controller('toDoCtrl',
  ['$scope',
  function($scope){

    $scope.item = { text: "Get groceries from the store",
                    dueDate: new Date(),
                    completed: false };



  }]);