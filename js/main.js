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
      if(this.task.title == '' || this.task.todo == '')  return;
      var todo = {
        title: this.task.title,
        todo: this.task.todo,
        isDone: false
      };
      this.tasks.push(todo)
      this.task.title = '';
      this.task.todo = '';
    },
    deleteTodo: function(index){
      this.tasks.splice(index, 1)
    }
  },





})
