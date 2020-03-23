<template>
    <footer>
        <nav>
            <div class="social-buttons">
                <SocialButton class="social-button" name="Instagram" img="instagram@3x.png" url="www.instagram.com" />
                <SocialButton class="social-button" name="Facebook" img="facebook@3x.png" url="www.facebook.com" />
                <SocialButton class="social-button" name="Twitter" img="twitter@3x.png" url="www.twitter.com" />
            </div>
            <a>antoinebarbier022@gmail.com</a>
            <a>Linkedin</a>
        </nav>
    </footer>
</template>

<script>
    import SocialButton from './buttons/social-button.vue'
    export default {
        name: 'Footer',
        components:{
            SocialButton
        }
    }
</script>

<style scoped>
    footer{
        height:100px;
    }

    footer nav{
        display:flex;
            flex-direction: column;
    }
    .social-buttons{
        display:flex;
            flex-direction: row;
            justify-content: center;
    }
    .social-button{
        margin:0px 20px 0px 20px;
    }
</style>