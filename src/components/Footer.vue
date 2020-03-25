<template>
    <footer id="footer">
        <nav>
            <div class="social-buttons">
                <SocialButton class="social-button" name="instagram" img="instagram@3x.png" url="https://www.instagram.com" />
                <SocialButton class="social-button" name="facebook" img="facebook@3x.png" url="https://www.facebook.com" />
                <SocialButton class="social-button" name="twitter" img="twitter@3x.png" url="https://www.twitter.com" />
            </div>
            <a class="email" href="mailto:antoinebarbier022@gmail.com">antoinebarbier022@gmail.com</a>
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
        height:130px;
        background-color:  rgba(120, 120, 120, 0.1);
        color:white;
    }

    a{
        font-size: 1.1rem;
        color:white;
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