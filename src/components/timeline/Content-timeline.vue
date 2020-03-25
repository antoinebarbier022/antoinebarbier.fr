<template>
    <div class="bloc-content" :class="text ? 'effectHover': ''" @click="displayContent">
        <p class="title" v-if="title" >{{title}}</p>
        <p class="subtitle" v-if="subtitle" >{{subtitle}}</p>
        <p class="date" v-if="date">{{date}}</p>
        <p class="content" v-if="showContent">{{text}}</p>
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
        background-color: rgba(255, 255, 255, 0.1);
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);

        padding: 10px;
        margin-bottom:20px;
        border-radius: 5px;
        transition: height 2s;
    }

    .effectHover:hover{
        background-color: rgba(255, 255, 255, 0.15);
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
        background-image:linear-gradient(to bottom, rgba(255, 255, 255), rgb(156, 156, 156));
        text-align: center;
        line-height: 1em;
        color: white;
        font-size: 1em;
  }

  .bloc-content{
    /* Pour ne pas copier-coller */
    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    user-select: none;          /* Likely future */  
  }
.title{
    text-align: right;
    font-weight: 700;
    font-variant: small-caps;
}
.subtitle{
    text-align: right;
    color:rgb(224, 224, 224);
    /* color:rgb(109, 109, 109); */
    font-weight: 700;
}
.date{
    text-align: right;
    color:rgb(224, 224, 224);
    font-weight: 700;
    font-style: italic;
}

.content{
    height: auto;
    text-align: left;
    margin-top:20px;
    padding:20px;
}


</style>