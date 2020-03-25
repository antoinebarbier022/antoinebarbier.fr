<template>
    <div class="container-timeline">
        <div class="timeline">
            <Content    title="UQAC - Université du Québec à Chicoutimi"
                        subtitle="Échange universitaire"
                        date="2019 - 2020"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum."/>

            <Content    title="Facultés des Sciences - Université de Montpellier"
                        subtitle="Licence informatique"
                        date="2017 - 2020"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum."/>

            <Content    title="Lycée Docteur Lacroix - Narbonne"
                        subtitle="Bac S - Spécialité Informatique"
                        date="2014 - 2017"
                        text="Baccalauréat Scientifique avec spécialité Informatique - Mention Assez Bien"/>

            <Content    title="Collège Joseph Anglade - Lézignan-Corbières"
                        date="2010 - 2014"/>
        </div>
    </div>
</template>

<script>
import Content from './Content-timeline.vue'

    export default {
        name:"Timeline",
        components:{
            Content
        }
    }
</script>

<style scoped>
    .container-timeline{
        width:100%;
        min-height: 100px;
        max-height:100%;
        margin:auto;
    }
    .timeline{
        position:relative;
        width: calc(100% -40px); /* moins le padding pour bien centrer le bloc entier avec le titre */
        height: 100%;
        border-left: 5px solid rgba(255, 255, 255, 0.582);
        /*border-image:linear-gradient(to bottom, rgb(0, 0, 0));
        border-image-slice: 1;*/
        padding:20px;
    }




</style>