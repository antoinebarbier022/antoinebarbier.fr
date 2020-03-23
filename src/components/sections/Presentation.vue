<template>
    <section id="presentation">
        <h2>Presentation</h2>
        <figure>
            <img class="photo-profil" src="#" alt="image de profile">
        </figure>
        <div class="content-presentation">
            <p>Antoine barbier</p>
            <p>01/02/1999 - 21 ans</p>
            <p>Étudiant en L3 informatique à la Faculté Des Sciences de Montpellier</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Presentation'
    }
</script>

<style scoped>
    #presentation{
        min-height:100px;
    }

    figure .photo-profil{
        width: 200px;
        height: 200px;
        max-width: 200px;
        max-height: 200px;

        border: 2px solid rgba(255,255,255,0.70);
        border-radius: 100%;
        box-shadow: 0 0 15px rgba(21,8,15,0.80);
    }

</style>