var app = new Vue({
    el: '#app',
    data: {
        newItem: '',
        todos: []
    },
    methods: {
        addItem: function() {
            if (this.newItem == '') return; //もし未入力なら処理を終了させる
            var todo = {
                item: this.newItem,
                isDone: false
            };
            this.todos.push(todo);
            this.newItem = '';
        }
    }
})