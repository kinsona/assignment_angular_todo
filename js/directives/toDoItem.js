toDo.directive('toDoItem', function() {
  return {
    templateUrl: "js/directives/toDoItem.html",
    restrict: 'A',
    scope: {
      item: "=",
      destroy: "&"
    }
  };
});