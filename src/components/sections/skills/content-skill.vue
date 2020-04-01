<template>
    <div class="content-skill">
        <div class="icon-skill" ><i :class="icon"></i></div> <!--icon de font awesome-->
        <div class="description-skill">
            <div class="title-skill"><strong>{{title}}</strong></div>
            <div class="text-skill">
                {{text}}
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "content-skill",
        props:{
            title:String,
            icon:String,
            text:String
        }
    }
</script>

<style scoped>

    .content-skill{
        display:flex;
            justify-content: space-between;
        width:400px;
        padding:20px;
    }
    .icon-skill{
        width:auto;
        margin-right:10px;
    }

    .description-skill{
        width:330px;
        text-align:left;
    }

    @media (max-width: 980px) {
        .content-skill{
            width:90%;
        }
        .description-skill{
            width:85%;
        }
    }

    @media (max-width: 580px) {
        .icon-skill{
            margin:auto;
        }
        .content-skill{
            flex-direction: column;
            justify-items: center;
            width:100%;
            padding:20px 0px 20px 0px;
        }
        .description-skill{
            width:100%;
            text-align:center;
        }
    }

</style>>

