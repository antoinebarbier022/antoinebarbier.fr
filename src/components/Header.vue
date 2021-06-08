<template>
    <header>
        <h1><a href="/">Antoine Barbier</a></h1>
        <nav class="menu">
            <span class="link-text" v-scroll-to="'#parcours'">  Mes études</span>
            <span class="link-text" v-scroll-to="'#skills'">    Mes Compétences</span>
            <!--<span class="link-text" v-scroll-to="'#hobbies'">   Hobbies</span>-->
            <span class="link-text" v-scroll-to="'#footer'">    Contact</span>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
    header{
        height:auto;
        margin-bottom:50px;
    }
    header nav{
        display:flex;
            flex-direction: row;
            justify-content: center;
    }

    header nav .link-text{
        text-decoration: none;
        padding:10px;
        font-weight: 300;
        text-transform: uppercase;
        cursor:pointer
    }

    h1{
        padding-left:20px;
        padding-right:20px;
    }
    h1 a{
        margin-top:20px;
        margin-bottom:0px;
        font-size: 4.5rem;
        text-shadow: 2px 2px 3px rgba(21,8,15,0.50);
    }

    @media (max-width: 800px){
        h1 a{
            font-size: 4rem;
        }
    }
    @media (max-width: 500px){
        header nav{
            display:none;
        }
    }
    @media (max-width: 400px){
        h1 a{
            font-size: 3rem;
        }
    }


.link-text {
    transition: 1s ease-in-out;
    color:white;
}


.link-text{
    position: relative;
}

.link-text:after{
content: '';
position: absolute;
width: 0; height: 2px;
display: block;
margin-top: 0px;
right: 0;
background: #fff;
transition: width .2s ease;
-webkit-transition: width .2s ease;
}
.link-text:hover:after{
    width: 100%;
    left: 0;
    background: #fff;
}

</style>