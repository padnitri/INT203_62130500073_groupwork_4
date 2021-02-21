const app = Vue.createApp({
    data() {
        return {
            msg: 'Hello World!',
            show: false,

            toggle(){
                this.show = !this.show
            },
            
            lists: [
                { name: "Chiling People", image: './images/people_chiling.jpg', isFav: false, done: false },
                { name: "Dark Room", image: './images/room.jpg', isFav: false, done: false },
                { name: "Lonely Woman", image: './images/woman.jpg', isFav: false, done: false }
            ],
            inputSearch: '',
            

            favCount: 0,
        }
    },
    methods: {
        // addNewTask() {
        //     if (this.inputTask) {
        //         let newTask = { title: this.inputTask, done: false }
        //         this.tasks.push(newTask)
        //         this.inputTask = ''
        //     }
        // },



        searching() {
            if (this.inputSearch){
                let searchResult;
                let search = this.inputSearch
                if (search == this.lists.name){
                    return searchResult = true;
                }
            }


        }
        ,
        // toggleDone(index){
        //     this.lists[index].done = !this.lists[index].done
        // },
        updateFav(index) {

            this.lists[index].isFav = !this.lists[index].isFav
            if (this.lists[index].isFav) {
                this.favCount += 1
            } else {
                this.favCount -= 1
            }

        }
    },
    computed: {
        calculate() {
            return this.lists.length
        }
    }
})

app.mount('#app')