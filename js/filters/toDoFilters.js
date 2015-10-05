toDo.filter('filterOutCompleted', function() {

  return function(allTasks, active) {
    var output = [];

    if (!active) { return allTasks };

    // allTasks.forEach( function...)
    angular.forEach(allTasks, function(task) {
      if (!task.completed) { output.push(task) };
    });

    return output;
  };

})