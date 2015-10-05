toDo.factory('toDoService', function() {

  var obj = {};

  obj._items =  [{
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

  obj.getItems = function() { return this._items };


  obj.saveNew = function(newToDo) {
    this._items.push(newToDo);
  };


  obj.destroy = function(item) {
    var index = this._items.indexOf(item);
    this._items.splice(index, 1);
  };



  obj.destroyCompleted = function() {
    // sort Completed to front;
    this._items.sort(function(a, b) { return b.completed } );

    // removing from back of array is not destructive
    var numberCompleted = this._countCompleted();
    this._items.splice(0, numberCompleted);
  }


  obj._countCompleted = function() {
    var count = 0;
    for(i=0; i<this._items.length; i++) {
      if (!this._items[i].completed) {
        count = i;
        break;
      };
    };
    return count;
  };




  return obj;
});