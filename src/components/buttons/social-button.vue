<template>
    <div class="social-button">
        <a :href="url" target="_blank" :title="name" :style="{ backgroundImage: `url(${image})`}" class="icon"></a>
    </div>
</template>

<script>
    export default {
        name:"social-button",
        props:{
            name: String,
            url: String,
            img: String
        },
        computed:{
            image: function(){
                return this.img ? require('@/assets/reseaux-sociaux/' + this.img) : require('@/assets/reseaux-sociaux/instagram@3x.png') ; 
            }
        }
    }
</script>

<style scoped>
    a.icon{
        display:block;
        width:40px;
        height: 40px;
        padding:0;
        margin:0;
        cursor:pointer;
        background-repeat: no-repeat;
        background-size: auto 25px;
        background-position: center;
    }

    a.icon:hover{
        /*opacity: 0.8;*/
        background-color:rgba(14, 107, 184, 0.7);
        border-radius: 5px;
    }
</style>