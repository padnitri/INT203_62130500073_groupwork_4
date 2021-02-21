const app = Vue.createApp({
    data() {
        return {
            searchQuery: null,
            msg: 'Hello World!',
            show: false,

            toggle() {
                this.show = !this.show
            },

            lists: [
                { name: "Chiling People", image: './images/people_chiling.jpg', isFav: false, done: false,isHidden: false },
                { name: "Dark Room", image: './images/room.jpg', isFav: false, done: false,isHidden: false },
                { name: "Lonely Woman", image: './images/woman.jpg', isFav: false, done: false,isHidden: false }
            ],
            keyword: '',
            favCount: 0,
            isFound: true,
            isShowSearchBox: false,
            isShowImg : false,

            currentImg: './images/people_chiling.jpg'
        }
    },
    methods: {
        // toggleDone(index){
        //     this.lists[index].done = !this.lists[index].done
        // },

        showSearchBox() {
            this.isShowSearchBox = !this.isShowSearchBox;
        },
        Search() {
            if (this.keyword) {
                for (let i = 0; i < this.lists.length; i++) {

                    if (this.lists[i].name === this.keyword) {
                        this.lists[i].isHidden = false;
                    } else {
                        this.lists[i].isHidden = true;
                    }
                }
                if (this.lists.every(element => element.isHidden)) this.isFound = false;
                this.keyword ='';


            }
        },
        Cancel() {
            this.isShowSearchBox = !this.isShowSearchBox;
            for (const element of this.lists) {
                element.isHidden = false
            }
            this.isFound = true
        },
        Close() {
            this.isShowImg = false;
        },
        handleClickImg(index) {
            this.currentImg = this.lists[index].image;
            this.isShowImg = true;
        },
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
        },
        filteredSearch(search) {
            return this.lists.filter(list => search === this.lists.name)
        }
    }
})

app.mount('#app')