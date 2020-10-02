<template>
    <div class="bloc-content" :class="text ? (showContent ? '' : 'effectHover'): ''" @click="displayContent">
        <div class="infos-timeline">
            <p class="date" v-if="date">{{date}}</p>
            <div class="content-title">
                <p class="title" v-if="title" >{{title}}</p>
                <p class="subtitle" v-if="subtitle" >{{subtitle}}</p>
            </div>
        </div>
        <div class="content" v-if="showContent">
            <slot></slot>
        </div>
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
        width:calc(100% - 20px);
        height:100%;
        background-color: rgba(255, 255, 255, 0.08);
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
        padding: 10px;
        margin-bottom:20px;
        border-radius: 5px;
        transition: height 2s;
    }

    .effectHover:hover{
        background-color: rgba(255, 255, 255, 0.1);
        cursor:pointer;
    }

    .content-title{
        margin-left:30px;
    }

    .bloc-content:before {
        content: "";
        position: absolute;
        right:100%;
        margin-top:10px;
        margin-right: -7px;
        border-radius: 50%;
        padding: 0px;
        height: 1em;
        width: 1em;
        background-image:linear-gradient(to bottom, rgb(233, 233, 233), rgb(202, 202, 202));
        text-align: center;
        line-height: 1em;
        color: white;
        font-size: 1em;
        cursor: pointer;
  }

  .bloc-content{
    /* Pour ne pas copier-coller */
    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    user-select: none;          /* Likely future */  
  }

  .infos-timeline{
      display:flex;
        justify-content: space-between;
        
  }

.title{
    text-align: right;
    font-weight: 700;
    font-variant: small-caps;
}
.subtitle{
    text-align: right;
    color:#b3b3b3;
    font-weight: 500;
}
.date{
    min-width:120px;
    text-align: left;
    font-weight: 700;
  font-family: 'La-Belle-Aurore';
  font-size:1.2rem;
}

.content{
    height: auto;
    text-align: left;
    margin-top:20px;
    padding:20px;
}

@media (max-width: 600px){
    .infos-timeline{
      display:flex;
        flex-direction: column;
        
  }
    .title, .subtitle{
        text-align: left;
    }
}




</style>