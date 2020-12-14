var app = new Vue({
  el: '#app',
  data: {
    task: {
      title: "",
      todo: ""
    },
    tasks: []
  },
  methods: {
    addTodo: function(event){
      // alert();
      var todo = {
        title: this.task.title,
        todo: this.task.todo
      };
      this.tasks.push(todo)
    }
  },





})
