<template>
    <section id="skills">
        <div class="container">
        <h2>Mes Compétences</h2>

        <div class="section-skill">
            <h3>Développement Web</h3>
            <div class="grid">
                <ContentSkills title="HTML" icon="fab fa-html5 fa-3x" text="Découvert sur le site openclassroom en 2015."/>
                <ContentSkills title="CSS" icon="fab fa-css3-alt fa-3x" text="Découvert sur le site openclassroom en 2015."/>
                <ContentSkills title="Javascript" icon="fab fa-js-square fa-3x" text="Langage de programmation que j'utilise avec le framework VueJs."/>
                <ContentSkills title="VueJs" icon="fab fa-vuejs fa-3x" text="Framework utilisé pour la conception de mon site web et de www.mouflaquettes.fr"/>
                <ContentSkills title="MySQL, Oracle, MongoDB" icon="fas fa-database fa-3x" text="Utilisation d'Oracle et de MongoDB dans le cadre de mes études, et MySQL pour mes projets."/>
                <ContentSkills title="Angular" icon="fab fa-angular fa-3x" text="Développement d'une plateforme de gestion de stages pour le département informatique de la Faculté des sciences de Montpellier."/>
            </div>
        </div>

        <div class="section-skill">
            <h3>Programmation</h3>
            <div class="grid">
                <ContentSkills title="C/C++" icon="fab fa-cuttlefish fa-3x" text="Langage de programmation utilisé dans la plupart de mes projets dans le cadre de ma licence informatique."/>
                <ContentSkills title="Java" icon="fab fa-java fa-3x" text="Langage de programmation que j'ai étudié tout au long de mes études."/>
                <ContentSkills title="Android" icon="fab fa-android fa-3x" text="Développement d'une application mobile (réseau social dévelopé en Java) avec Android Studio."/>
                <ContentSkills title="Python" icon="fab fa-python fa-3x" text="Conception d'un jeu vidéo de plateforme dans le style Mario Bros avec la librarie Pygame."/>
            </div>
        </div>

        <div class="section-skill">
            <h3>Logiciels</h3>
            <div class="grid">
                <ContentSkills title="Photoshop, Illustrator" icon="fab fa-adobe fa-3x" text="Logiciels que j'utilise dans la création et la retouche d'images."/>
                <ContentSkills title="Lumafusion" icon="fas fa-film fa-3x" text="Logiciel de montage vidéo sur Ipad que j'ai appris à maitriser au fur à mesure de la création de vidéos vacances/souvenir."/>
                <ContentSkills title="Git" icon="fab fa-git-square fa-3x" text="Logiciel de gestion de versions décentralisé que j'utilise dans tous mes projets."/>
                <ContentSkills title="Trello" icon="fab fa-trello fa-3x" text="Outil de gestion de projet en ligne que j'utilise lors des projets de groupe."/>
                <ContentSkills title="Sketch" icon="fab fa-sketch fa-3x" text="Éditeur de graphiques vectoriels qui permet la créations de maquettes d'applications et de sites web."/>
            </div>
        </div>

        <div class="section-skill">
            <h3>Systèmes d'exploitation</h3>
            <div class="grid">
                <ContentSkills title="MacOS" icon="fab fa-apple fa-3x" text="Système d'exploitation que j'utilise quotidiennement."/>
                <ContentSkills title="Ubuntu" icon="fab fa-ubuntu fa-3x" text="Système d'exploitation que j'utilise régulièrement."/>
                <ContentSkills title="Windows" icon="fab fa-windows fa-3x" text="Système d'exploitation que j'utilise occasionnellement."/>
            </div>
        </div>

        <div class="section-skill">
            <h3>Autres</h3>
            <div class="grid">
                <ContentSkills title="Raspberry Pi" icon="fab fa-raspberry-pi fa-3x" text="J'ai un serveur qui hébèrge mes sites web et gère mes appareils dommotique."/>
                <ContentSkills title="Shopify" icon="fab fa-shopify fa-3x" text="J'ai conçu un site web de ventes d'ustensilles de cuisines avec cette plate-forme de conception de site ecommerce."/>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
    import ContentSkills from './skills/content-skill.vue'
    export default {
        name: 'skills',
        components:{
            ContentSkills
        },
    }
</script>

<style scoped>
    #skills{
        width:calc(100% - 40px);
        min-height:600px;
        padding:20px;
    }
    .grid{
        display: grid;
            grid-template-rows: auto;
            grid-template-columns: 1fr 1fr;
            justify-items: center;
        margin:10px;
    }

    @media (max-width: 980px) {
        .grid{
            grid-template-columns: 1fr;
        }
    }

    .section-skill{
        margin-top:10px;
        margin-bottom:50px;
    }

    h3{
        padding-top:5px;
        padding-bottom:5px;
        padding-right:40px;
        padding-left:40px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.06);
    }

</style>