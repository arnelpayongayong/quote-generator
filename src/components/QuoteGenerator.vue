<template>
    <div class="main">
        <template v-if="!isClicked">
            <div class="item border-left">
                <p>
                    "{{quote.quoteText}}"
                </p>
            </div>

            <div class="item" id="author-section">
                <div  id="author">
                    <label>{{quote.quoteAuthor}}</label>
                </div>

                <div id="author" class="right-icon">
                    <span class="material-icons" style="color:white;font-size:25px" @click="authorQuotes">
                    trending_flat
                    </span>
                </div>
            </div>
        </template>

        <template v-else>
            <div class="item border-left" v-for="quote in quote.quotes" :key=" quote.quotes">
                <p>
                    "{{quote.quoteText}}"
                </p>
            </div>

            <div class="item" id="author-section">
                <div  id="author">
                    <label>{{quote.quotes[0].quoteAuthor}}</label>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import {bus} from '../main';
const axios = require('axios').default;

export default {
    data(){
        return{
            quote : {},
            isClicked : false,
        }
    },
    methods : {
        authorQuotes() {
            axios.get(`https://quote-garden.herokuapp.com/api/v2/authors/${this.quote.quoteAuthor}`).then((response) => {
                this.quote = response.data;
                this.isClicked = true;
            })
        }
    },
    mounted(){
        bus.$on('sample',(data)=> {
            this.quote= data.quote;
            this.isClicked = false;
        })
    }
}
</script>
<style>
.main {
    display: flex;
    height: auto;
    width: 50%;
    margin-left: 25%;
    padding-bottom: 7%;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    

    font-family: 'Raleway';
}
div > p {
    font-size: 25px;
    color: black;
    margin-left: 25px;
}
.item {
    margin-top : 100px
}
.border-left{
    border-left: 3px solid #f39c12;
}
#author-section {
    display: flex;
    background: black;
    color: white;
    height: 150px;
    justify-items: flex-start;
    padding-left: 20px;
}
#author {
    display: flex;
    align-content: flex-start;
    align-items: center;
    width: 100%;

}
.right-icon {
    justify-content: flex-end;
    margin-right: 10px;
}

.material-icons:hover{
    font-size: 250%;
    color: white;
}
</style>