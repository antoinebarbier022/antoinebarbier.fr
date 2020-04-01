<template>
    <section id="parcours">
        <div class="container">
            <h2>Mes Études</h2>
            <Timeline/>
        </div>
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
        padding-top: 0px;
        padding-bottom: 100px;
        background-color:  rgba(0, 0, 0, 0.411);
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.192);
    }


</style>