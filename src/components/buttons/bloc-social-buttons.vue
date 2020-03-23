<template>
    <div class="menu">
        <a href="https://www.facebook.com/Mouflaquettes/" target="_blank" title="Facebook" class="link icon facebook"></a>
        <a href="https://twitter.com/mouflaquettes" target="_blank" title="Twitter" class="link icon twitter"></a>
        <a href="https://www.instagram.com/Mouflaquettes/" target="_blank" title="Instagram" class="link icon instagram"></a>
        <SocialButton name="test"/>
        <SocialButton name="test"/>
        <SocialButton name="test"/>
    </div>
</template>

<script>
import SocialButton from './social-button.vue'
    export default {
        name:"bloc-social-button",
        components:{
            SocialButton
        }
    }
</script>

<style scoped>

.menu, .link{
    padding:0;
    margin:0;
    display: flex;
        align-items: center;
    height:60px; /* même hauteur que le header */ 
    background: black;

}

.menu .link{
    flex-direction: row-reverse;
    margin-left:40px;
    cursor:pointer;
    font-weight: 700;
    font-size: 18px;
}

.icon{
    width:40px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: auto 25px;
    background-position: center;
}

.facebook{
    background-image: url('~@/assets/reseaux-sociaux/facebook@3x.png');
}
.twitter{
    background-image: url('~@/assets/reseaux-sociaux/twitter@3x.png');
}
.instagram{
    background-image: url('~@/assets/reseaux-sociaux/instagram@3x.png');
}

.icon:hover, .link:hover{
    opacity: 0.8;
}

</style>