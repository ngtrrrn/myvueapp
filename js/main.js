(function() {
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
    computed: {
      remaining: function() {
        var items = this.todos.filter(function (todo) {
          return !todo.isDone;
        });
        return items;
      }
    },
    watch: {
      // todos: function() {
      //   localStorage.setItem('todos', JSON.stringify(this.todos));
      //   alert('Data saved.');
      todos: {
        handler: function() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        deep: true
      }
    },
    mounted: function() {
      this.todos = JSON.parse(localStorage.getItem('todos') || []);
    },
    methods: {
      addItem: function(e) {
        // e.preventDefault();
        var item = {
          title: this.newItem,
          isDone: false
        };
        this.todos.push(item);
        this.newItem = "";
      },
      deleteItem: function(index) {
        if (confirm("Are you sure?")) {
          this.todos.splice(index, 1);
        }
      },
      purge: function (index) {
        if (!confirm("delete finished?")) {
          return;
        }
        this.todos = this.remaining;
      }
    }
  });
})();
