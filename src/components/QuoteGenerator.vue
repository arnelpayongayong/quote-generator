<template>
    <div class="main">
        <div class="item">
            <p>
                "{{quote.quoteText}}"
            </p>
        </div>

        <div class="item" id="author-section">
            <div  id="author">
                <label>{{quote.quoteAuthor}}</label>
            </div>
        </div>
    </div>
</template>
<script>
import {bus} from '../main';

export default {
    data(){
        return{
            quote : {}
        }
    },
    mounted(){
        bus.$on('sample',(data)=> {
            this.quote= data.quote;
            console.log(this.quote);
        })
    }
}
</script>
<style>
.main {
    display: flex;
    height: 90vh;
    width: 50%;
    margin-left: 25%;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    

    font-family: 'Raleway';
}
div > p {
    font-size: 50px;
}
.item {
    margin-top : 100px
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

}
</style>