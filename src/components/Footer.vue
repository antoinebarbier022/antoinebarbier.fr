<template>
    <footer>
        <nav>
            <a>antoinebarbier022@gmail.com</a>
            <a>Linkedin</a>
            <SocialButtons/>
        </nav>
    </footer>
</template>

<script>
    import SocialButtons from './buttons/bloc-social-buttons.vue'
    export default {
        name: 'Footer',
        components:{
            SocialButtons
        }
    }
</script>

<style scoped>
    footer{
        height:200px;
    }

    footer nav{
        display:flex;
            flex-direction: column;
    }

</style>