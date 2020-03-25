<template>
    <section id="presentation">
        <figure>
            <img class="photo-profil" src="@/assets/iconAntoine.png" alt="image de profile">
        </figure>
        <div class="content-presentation">
            <div class="profil-infos">
                <p>Antoine barbier</p>
                <p>{{age()}} ans</p>
                <p>Étudiant en L3 informatique</p>
            </div>
            <p class="profil-description">
                Je m'appelle Antoine Barbier
                et je suis étudiant à la Faculté des Sciences de Montpellier en Licence informatique. 
                <br>En 2019, j'ai eu l'opportunité de partir étudié au Canada à l'<b>UQAC</b> (Université du Quèbec de Chicoutimi) dans le cadre d'un échange universitaire. 
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Presentation',
        methods:{
            age(){
                var moment = require('moment');
                return moment().diff(moment('19990201', 'YYYYMMDD'), 'years');
            }
        }
    }
</script>

<style scoped>
    #presentation{
        min-height:100px;
        margin-top:40px;
        margin-bottom:60px;
    }

    figure .photo-profil{
        width: 300px;
        height: 300px;
        max-width: 300px;
        max-height: 300px;
        filter: hue-rotate(225deg);

        border: 2px solid rgba(255,255,255,0.70);
        border-radius: 100%;
        box-shadow: 0 0 15px rgba(21,8,15,0.80);
        
    }
/*
    .profil-infos{
        position: relative;
            top:-80px;
        width:400px;
        margin:auto;
        padding:10px;
        background-color: rgba(16, 25, 44);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.39);
        border-radius:10px;
    }*/
    .profil-infos > p{
        font-size:1.2rem;
    }
    .profil-description{
        text-align: left;
        margin:20px;
    }

</style>