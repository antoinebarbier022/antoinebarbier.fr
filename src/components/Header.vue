<template>
    <header>
        <h1>Antoine Barbier</h1>
        <nav class="menu">
            <a href="#" >Home</a>
            <a href="#parcours" >Parcours</a>
            <a href="#skills" >Compétences</a>
            <a href="#hobbies" >hobbies</a>
            <a href="#" >Contact</a>
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
        height:100px;
    }
    header nav{
        display:flex;
            flex-direction: row;
            justify-content: center;
    }

    header nav a{
        text-decoration: none;
        padding:10px;
    }

    h1{
        margin:0;
    }

</style>