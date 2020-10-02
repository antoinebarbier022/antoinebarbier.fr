<template>
    <div class="container-timeline">
        <div class="timeline">
            <div v-for="content in timeline" :key="content.title">
                <Content :title="content.title" :subtitle="content.subtitle" :date="content.date" :text="content.text">
                    <div v-html="content.text"></div>
                </Content>
            </div>
        </div>
    </div>
</template>

<script>
import Content from './Content-timeline.vue'

    export default {
        name:"Timeline",
        components:{
            Content
        },
            data(){
                return{
                    timeline:
                        [
                            {
                                title:"Facultés des Sciences - Université de Montpellier"
                                ,subtitle:"Master 1 AIGLE"
                                ,date:"2020 - 2021"
                                ,text:`

                                        <p>Parcours Master Architectures et Ingénieurie du Logiciel et du Web (AIGLE)</p>
                                        <p><i>Année en cours ...</i></p><br>
                                        `
                            },
                            {
                                title:"UQAC - Université du Québec à Chicoutimi"
                                ,subtitle:"Échange universitaire"
                                ,date:"2019 - 2020"
                                ,text:`
                                        <p><i>Les cours que j'ai étudié durant cet année au Quèbec ...</i></p><br>
                                        
                                        <p>
                                            <strong>Semestre d'hiver (2020):</strong>
                                            <br>
                                        </p>
                                        <ul>
                                            <li>Algorithmique</li>
                                            <li>Technologie Web Avancées</li>
                                            <li>Réseaux d'ordinateurs</li>
                                            <li>Modélisation et développement objet</li>
                                            <li>Projet individuelle</li>
                                        </ul>
                                        <p>
                                            <strong>Semestre d'automne (2019):</strong>
                                            <br>
                                        </p>
                                        <ul>
                                            <li>Informatique théorique</li>
                                            <li>Base de données avancées</li>
                                            <li>Système d'exploitation</li>
                                            <li>English Skill II</li>
                                        </ul>`
                            },{
                                title:"Facultés des Sciences - Université de Montpellier"
                                ,subtitle:"Licence informatique"
                                ,date:"2017 - 2020"
                                ,text:`<strong>2ème année : </strong>
                                            <ul>
                                                <strong>Semestre 4 : </strong>
                                                <ul>
                                                    <li>Algorithmique et complexité </li>
                                                    <li>Programmation applicative : (scheme)</li>
                                                    <li>Logique 1</li>
                                                    <li>Technique de communication et conduite de projet</li>
                                                    <li>Projet informatique</li>
                                                    <li>Modélisation et programmation par objet 1 : (Java et UML)</li>
                                                    <li>Anglais</li>
                                                </ul>
                                                <br>
                                                <strong>Semestre 3 : </strong>
                                                <ul>
                                                    <li>Statistique descriptive et probabilités</li>
                                                    <li>Algorithmes et structure des données linéaires</li>
                                                    <li>Système d'information et base de données 1</li>
                                                    <li>Système d'exploitation</li>
                                                    <li>Programmation impérative avancée</li>
                                                    <li>Introduction au Management des entreprise et simulation de gestion</li>
                                                    <li>Anglais</li>
                                                </ul>
                                           </ul>
                                           

                                            <p><strong>1ère année : </strong></p>
                                            <ul>
                                                <strong>Semestre 2 : </strong>
                                                <ul>
                                                    <li>Modèles de Calcul </li>
                                                    <li>Combinatoire aux graphes </li>
                                                    <li>Programmation impérative </li>
                                                    <li>Architecture des ordinateurs </li>
                                                    <li>Projet personnel de l'étudiant</li>
                                                    <li> Anglais </li>
                                                </ul>
                                                <br>
                                                <strong>Semestre 1 : </strong>
                                                <ul>
                                                    <li>Physique général</li>
                                                    <li>Algèbre et Analyse 1</li>
                                                    <li>Calculus </li>
                                                    <li>Du binaire au web </li>
                                                    <li>Introduction à l'algorithmique et à la programmation </li>
                                                </ul>
                                            </ul>
                                        `
                            },{
                                title:"Lycée Docteur Lacroix - Narbonne"
                                ,subtitle:"Bac S - Spécialité Informatique"
                                ,date:"2014 - 2017"
                                ,text:`<p>Baccalauréat Scientifique avec spécialité Informatique</p><p> 
                         Mention Assez Bien</p>`
                            },{
                                title:"Collège Joseph Anglade - Lézignan-Corbières"
                                ,subtitle:"Brevet des collèges Mention Bien"
                                ,date:"2010 - 2014"
                                ,text:``
                            }
                        ]
                }
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
        border-left: 5px solid rgba(255, 255, 255, 0.692);
        /*border-image:linear-gradient(to bottom, rgb(0, 0, 0));
        border-image-slice: 1;*/
        padding:20px;
    }


</style>