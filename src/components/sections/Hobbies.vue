<template>
  <div id="hobbies">
    <h2>Mes Passions</h2>
    <div class="bloc-text-media" v-for="event in historique" :key="event.id">
        <div :class="event.media === 'no-media'?'bloc-text bloc-text-no-media' : 'bloc-text' ">
            <p class="text">{{event.text}}</p>
        </div>
        <!-- conditions pour savoir quelle bloc de média afficher-->
        <div class="bloc-media" v-if="event.media === 'image' && event.url" >
            <figure class="bloc-image">
                <!--<img :src="require('@/assets/photos/'+event.url)" alt="image">-->
            </figure>
        </div>
        <div class="bloc-no-media" v-if="event.media === 'no-media'">
            no-media
        </div> 
    </div> 
  </div>
</template>

<script>

    export default {
        name: "Notre-groupe",
            data(){
                return{
                    slogan:"Une moustache, des rouflaquettes, c’est mouflaquettes."
                    ,textPresentation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget scelerisque odio. Curabitur tristique massa maximus libero malesuada volutpat. Morbi nibh dui, interdum id nisl congue, tempor molestie erat. Nunc imperdiet massa non enim mattis, vitae placerat turpis sollicitudin. Nullam sit amet ullamcorper elit. Curabitur vitae quam in augue rutrum euismod tempor condimentum felis. Aliquam nisl turpis, bibendum at pulvinar nec, placerat at neque. Nullam at massa at urna commodo sagittis.

Sed fermentum egestas viverra. Nunc id nulla pretium, rutrum justo aliquet, finibus tortor. Nunc nunc est, malesuada ut turpis id, lacinia tincidunt sapien. Donec cursus lorem justo, eu pellentesque magna commodo vitae. Nullam dictum libero non porttitor congue. Nunc dictum ipsum eu commodo vehicula. Aenean at ullamcorper nibh.`
                    ,historique:
                        [
                            {   id:0,
                                title:"Avril 2018"
                                ,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget scelerisque odio. Curabitur tristique massa maximus libero malesuada volutpat. Morbi nibh dui, interdum id nisl congue, tempor molestie erat. Nunc imperdiet massa non enim mattis, vitae placerat turpis sollicitudin. Nullam sit amet ullamcorper elit. Curabitur vitae quam in augue rutrum euismod tempor condimentum felis. Aliquam nisl turpis, bibendum at pulvinar nec, placerat at neque. Nullam at massa at urna commodo sagittis.`
                                ,media:"image"
                                ,url:"avril2018.jpg"
                            },
                            {   id:1,
                                title:"Juin 2018"
                                ,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget scelerisque odio. Curabitur tristique massa maximus libero malesuada volutpat. Morbi nibh dui, interdum id nisl congue, tempor molestie erat. Nunc imperdiet massa non enim mattis, vitae placerat turpis sollicitudin. Nullam sit amet ullamcorper elit. Curabitur vitae quam in augue rutrum euismod tempor condimentum felis. Aliquam nisl turpis, bibendum at pulvinar nec, placerat at neque. Nullam at massa at urna commodo sagittis.`
                                ,media:"video"
                                ,url:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/388844193&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                            },
                            {   id:2,
                                title:"Août 2018"
                                ,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget scelerisque odio. Curabitur tristique massa maximus libero malesuada volutpat. Morbi nibh dui, interdum id nisl congue, tempor molestie erat. Nunc imperdiet massa non enim mattis, vitae placerat turpis sollicitudin. Nullam sit amet ullamcorper elit. Curabitur vitae quam in augue rutrum euismod tempor condimentum felis. Aliquam nisl turpis, bibendum at pulvinar nec, placerat at neque. Nullam at massa at urna commodo sagittis.`
                                ,media:"image"
                                ,url:"aout2018.jpg"
                            },
                            {   id:3,
                                title:"Décembre 2018"
                                ,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget scelerisque odio. Curabitur tristique massa maximus libero malesuada volutpat. Morbi nibh dui, interdum id nisl congue, tempor molestie erat. Nunc imperdiet massa non enim mattis, vitae placerat turpis sollicitudin. Nullam sit amet ullamcorper elit. Curabitur vitae quam in augue rutrum euismod tempor condimentum felis. Aliquam nisl turpis, bibendum at pulvinar nec, placerat at neque. Nullam at massa at urna commodo sagittis.`
                                ,media:"image"
                                ,url:"disques-decembre2018.jpg"
                            }        
                        ]

                };
            }
    };
</script>

<style scoped>
    h4, h5{
         font-size:1.1rem;
         text-align: left;
    }
    h4{
        text-align: center;
    }
    #hobbies{
        padding:20px;
        margin-bottom:50px;
    }

    /* Css général de l'historique  */
    .bloc-text-media{
        display: grid;
            grid-template-areas: "left right";
            grid-template-columns: calc(50% - 25px) calc(50% - 25px); /* moins le gap de la grid soit 50px en tout */
            align-items: center;
            justify-items: center;
            grid-column-gap: 50px;
        
        width:100%;
        margin-top:100px;
    }


    .bloc-text{
        max-width:100%;
        min-width:50%;
        font-size:1.1rem;
        grid-area: right;
        
    }
    .bloc-media{
        width:100%;
        display:flex;
            justify-content: center;
        min-width:100%;
        max-width:100%;
        grid-area: left;
    }

    .bloc-text-no-media{
        grid-column-start: left;
        grid-column-end: right;
    }

    .bloc-no-media{
        display:none;
    }

    .bloc-text > .text{
        text-align:justify;
    }
    .bloc-media > .bloc-image img{
        width:100%;
        height:auto;
        border-radius:5px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }

     .bloc-media > .bloc-video {
        width:500px;
        height:300px;
        min-height:auto;
    }
    /* permet d'alterner text-image droite-gauche */
    /* mettre odd ou even pour choisir si ça commence par image à droite ou à gauche */
    
    #hobbies :nth-child(odd){
        /*flex-direction: row-reverse;*/
        grid-template-areas: "right left";
    }

    @media (max-width:1080px){
        
        .bloc-text-media{
            display:flex;
            flex-direction: column;
        }
        .bloc-text{
            width:100%;
            padding-bottom:20px;
        }
        /* Mettre texte suivie de l'image en colomne */
        #hobbies :nth-child(odd){
            flex-direction:column;
        }
        #hobbies :nth-child(even){
            flex-direction:column;
        }

        .bloc-media{
            display: flex;
                align-items: center; /* centrer le media*/
            min-width:100%;
            padding-top:20px;
        }
        .bloc-text-media .bloc-text .title{
            text-align: center;
        }
    }
     @media (max-width:560px){
        .bloc-media > .bloc-video {
            width:100%;
            height:300px;
        }
     }


</style>