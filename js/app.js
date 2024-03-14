const app = Vue.createApp({
    // data: all the data for the app, must return an object
    data: function() {
        return {
            newItem: {
                ID: 1,
                Title: '',
                Genre: '',
                Year: 1,
                Watched: false,
                Rating: 1,
            },
            movieList: [
                {ID: 1, Title: 'Dune', Genre: 'Action', Watched: false, Year: 2021},
                {ID: 2, Title: 'Oppenheimer', Genre: 'Drama', Watched: false, Year: 2023},
                {ID: 3, Title: 'The Shawshank Redemption', Genre: 'Drama', Watched: false, Year: 1994},
                {ID: 4, Title: 'The Matrix', Genre: 'Sci Fi', Watched: true, Year: 1999}
            ],
        }
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        addToWatched: function(item){

        }
    },

    // computed: values that are updated and cached if dependencies change
    computed: {

    },

    //mounted:  called after the instance has been mounted,
    mounted: function () {

    },

    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {

    }
});
