<template>
    <div class="main">
        <Presentation/>
        <Parcours/>
        <Skills/>
        <Hobbies/>
    </div>
</template>

<script>
    import Presentation from './sections/Presentation.vue'
    import Parcours from './sections/Parcours.vue'
    import Skills from './sections/Skills.vue'
    import Hobbies from './sections/Hobbies.vue'

    export default {
        name: 'Main',
        components:{
            Presentation,
            Parcours,
            Skills,
            Hobbies
        }
        
    }
</script>

<style scoped>
    .main{
        min-height: calc(100% - 200px);
    }
</style>