new Vue({
    el: '#main',
    created: function(){
        //this.getBooks();
    },
    data: {
        lists: [],
        bookToSearch: '',
        urlBooks: ''
    },
    methods: {
        getBooks: function(){
            this.$http.get(this.urlBooks).then(function(response){
                this.lists = response.data.items;
            });
        },
        getFormValues () {
            this.bookToSearch = this.$refs.search.value;
            this.urlBooks = 'https://www.googleapis.com/books/v1/volumes?q=' + this.bookToSearch;
            this.getBooks();
        }
    }
});     