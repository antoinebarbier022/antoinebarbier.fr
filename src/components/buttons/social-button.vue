<template>
    <div class="social-button" :class="name">
        <a  :href="url" target="_blank" 
            :title="name" 
         class="icon"></a>
    </div>
</template>

<script>
    export default {
        name:"social-button",
        props:{
            name: String,
            color:String,
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

    .facebook .icon{ background-image: url('~@/assets/reseaux-sociaux/facebook@3x.png');}
    .facebook:hover{ border-radius: 5px; background-color: rgb(48, 78, 149);}

    .instagram .icon{ background-image: url('~@/assets/reseaux-sociaux/instagram@3x.png');}
    .instagram:hover{ border-radius: 5px; background-image: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);}
    
    .twitter .icon{ background-image: url('~@/assets/reseaux-sociaux/twitter@3x.png');}
    .twitter:hover{ border-radius: 5px; background-color: rgb(74, 161, 235);}
</style>