var app = new Vue({
    el: '#app',
    data: {
        newItem: '',
        todos: []
    },
    methods: {
        addItem: function() {
            //alert();
            var todo = {
                item: this.newItem
            };
            this.todos.push(todo);
        }
    }
})