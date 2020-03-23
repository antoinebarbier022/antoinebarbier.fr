<template>
    <div class="bloc-content" @click="displayContent">
        <p class="title" v-if="title" >{{title}}</p>
        <p class="subtitle" v-if="subtitle" >{{subtitle}}</p>
        <p class="date" v-if="date">{{date}}</p>
        <p class="content" v-if="showContent" >{{text}}</p>
    </div>
</template>

<script>
    export default {
        name:"ContentTimeline",
        props:{
            title:String,
            subtitle:String,
            date:String,
            text:String
        },data(){
            return{
                showContent : false
            }
        },methods:{
            displayContent:function(){
                this.showContent = this.showContent ? false : (this.text ? true : false);
            }
        }
    }
</script>

<style scoped>
    p{
        margin:0;
    }

    .bloc-content{
        width:calc(100% - 30px);
        height:100%;
        background-color: rgba(0, 0, 0, 0.4);
        box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.7);
        padding: 10px;
        margin-bottom:20px;
        border-radius: 2px;
    }

    .bloc-content:hover{
        background-color: rgba(0, 0, 0, 0.5);
        cursor:pointer;
    }
    .bloc-content:before {
        content: "";
        position: absolute;
        right:100%;
        margin-right: -5px;
        border-radius: 50%;
        padding: 0px;
        height: 1em;
        width: 1em;
        background-image:linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 0, 0));
        text-align: center;
        line-height: 1em;
        color: white;
        font-size: 1em;
  }
.title{
    text-align: right;
    font-weight: 700;
}
.subtitle{
    text-align: right;
    color:rgb(109, 109, 109);
    font-weight: 700;
}
.date{
    text-align: right;
    color:rgb(109, 109, 109);
    font-weight: 700;
    font-style: italic;
}

.content{
    text-align: left;
    margin-top:20px;
    padding:20px;
}


</style>