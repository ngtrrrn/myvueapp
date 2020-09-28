(function () {
  "use strict";

  // two way data binding (to UI)

  var vm = new Vue({
    el: "#app",
    data: {
      newItem: "",
      todos: [
        // {
        //   title: "task 1",
        //   isDone: false
        // },
        // {
        //   title: "task 2",
        //   isDone: false
        // },
        // {
        //   title: "task 3",
        //   isDone: true
        // }
      ]
    },
    methods: {
      addItem: function (e) {
        // e.preventDefault();
        this.todos.push(this.newItem);
        this.newItem = "";
      },
      deleteItem: function (index) {
        if (confirm("Are you sure?")) {
          this.todos.splice(index, 1);
        }
      }
    }
  });
})();
