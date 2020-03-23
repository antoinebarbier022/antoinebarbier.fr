<template>
    <section id="parcours">
        <h2>Parcours</h2>
        <Timeline/>
    </section>
</template>

<script>
    import Timeline from '../timeline/Timeline.vue'
    export default {
        name: 'Parcours',
        components:{
            Timeline
        }
    }
</script>

<style scoped>
    #parcours{
        min-height:100px;
    }


</style>