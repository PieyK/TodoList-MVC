var todoList = {
    todos: [],

    /* displayTodos: function (){
   
    if(this.todos.length === 0){
      console.log("You have no todos in your todolist");
    } 
    else {
    console.log("My Todos: ");
      for(var i = 0; i < this.todos.length; i++){
      if(this.todos[i].completed === true){
      console.log("(x) " + this.todos[i].todoText);
      }
      else{
       console.log("( )" + this.todos[i].todoText); 
      }
        }
      }
    }, */

    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        //this.displayTodos();
    },

    changeTodo: function (position, todoText) {
        this.todos[position].todoText = todoText;
        //this.displayTodos();
    },

    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        //this.displayTodos();
    },

    toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        //this.displayTodos();
    },

    toggleAll: function () {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        //Get the number of completed todos
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }

        }

        //If everything is true, make everything false
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        }
        //Otherwise, make everything true
        else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        //this.displayTodos();

    }

};

/*var displayTodosButton = document.getElementById("displayTodosButton");
displayTodosButton.addEventListener("click", function(){
  todoList.displayTodos();
  });
*/
var handlers = {

    addTodo: function () {
        var todoTextInput = document.getElementById("todoTextInput");
        todoList.addTodo(todoTextInput.value);
        todoTextInput.value = " ";
        view.displayTodos();
    },

    changeTodo: function () {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos();
    },

    deleteTodo: function () {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        view.displayTodos();
    },

    toggleCompleted: function () {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
        view.displayTodos();
    },

    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodos();
    }

};


var view = {

    displayTodos: function () {
        var todoUl = document.querySelector("ul");
        todoUl.innerHTML = "";
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement("li");
            var todo = todoList.todos[i];

            var todoTextCompleted = "";


            if (todo.completed == true) {
                todoTextCompleted = "(x)" + todoList.todos[i].todoText;
            } else {
                todoTextCompleted = "( )" + todoList.todos[i].todoText;
            }


            todoLi.textContent = todoTextCompleted;
            todoUl.appendChild(todoLi);
        }
    }

};
