<template>
    <footer id="footer">
        <nav>
            
            <div class="social-buttons">
                <!--<SocialButton class="social-button" name="instagram" img="instagram@3x.png" url="https://www.instagram.com" />
                <SocialButton class="social-button" name="facebook" img="facebook@3x.png" url="https://www.facebook.com" />
                <SocialButton class="social-button" name="twitter" img="twitter@3x.png" url="https://www.twitter.com" />
            -->
            <a class="link-linkedin" target="_blank" href="https://www.linkedin.com/in/antoine-barbier-022"></a>
            </div>
            <a class="email" href="mailto:antoinebarbier022@gmail.com">antoinebarbier022@gmail.com</a>
        </nav>
    </footer>
</template>

<script>
    //import SocialButton from './buttons/social-button.vue'
    export default {
        name: 'Footer',
        components:{
            //SocialButton
        }
    }
</script>

<style scoped>
    footer{
        height:140px;
        background-color:  rgba(0, 0, 0, 0.411);
        color:white;
    }

    a{
        font-size: 1.1rem;
        color:white;
    }

    .link-linkedin{
        display:flex;
            justify-content: center;
            align-items: center;

    }
    a.link-linkedin{
        display:block;
        width:120px;
        height:50px;
        background-image: url('~@/assets/reseaux-sociaux/linkedin.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    footer nav{
        display:flex;
            flex-direction: column;
        padding-bottom:20px;
    }
    .social-buttons{
        display:flex;
            flex-direction: row;
            justify-content: center;
        margin:20px;
    }

    .social-button{
        margin:0px 20px 0px 20px;
    }
</style>