<template>
    <section id="presentation">
        <div class="container">
            <figure>
                <img class="photo-profil" src="@/assets/iconAntoine.jpeg" alt="image de profile">
            </figure>
            <div class="content-presentation">
                <div class="profil-infos">
                    <p>Antoine barbier</p>
                    <p>{{age()}} ans</p>
                    <p>Étudiant en M1 AIGLE (informatique)</p>
                </div>
                <p class="profil-description">
                    Je m'appelle Antoine Barbier
                    et je suis actuellement étudiant à la Faculté des Sciences de Montpellier en Master 1 - AIGLE (Architectures et Ingénieurie du Logiciel et du Web). 
                    <br>En 2019 j'ai eu l'opportunité de partir étudier au Canada à l'<b>UQAC</b> (Université du Québec de Chicoutimi) dans le cadre d'un échange universitaire. 
                </p>
            </div>
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
        /*min-height:calc(100vh - 290px);*/
        margin-top:40px;
        margin-bottom:100px;
    }
    figure{
        margin-left:0;
        margin-right:0;
    }

    figure .photo-profil{
        width: 300px;
        height: 300px;
        /*filter: hue-rotate(225deg);*/
        border: 2px solid rgba(255,255,255,0.70);
        border-radius: 100%;
        box-shadow: 0 0 15px rgba(21,8,15,0.80); 
    }

    .profil-infos{
        margin:40px;
        max-width:400px;
        min-width:200px;
        margin:auto;
        padding-bottom:25px;
        
    }



    .profil-infos > p{
        color:white;
        background-color: rgba(255, 255, 255, 0.08);
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
        padding:4px;
        border-radius:5px;
        margin-bottom:10px;
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
        text-align: center;
        margin:20px;
    }

    h3{
        display:block;
        padding-top:5px;
        padding-bottom:5px;
        padding-right:40px;
        padding-left:40px;
        margin:auto;
        /*border:1px solid rgba(255, 255, 255, 0.5);*/
        box-shadow: inset 0px 0px 10px rgba(255, 255, 255, 0.041);
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.061);
        opacity: 95%;
    }

    @media (max-width: 400px) {
        figure .photo-profil{
            width:200px;
            height:200px;
        }

    }

</style>