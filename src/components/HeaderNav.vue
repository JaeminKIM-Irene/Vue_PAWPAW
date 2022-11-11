<template>
    <div class="headerContent">
        <router-link to="/" class="headerLogo">
            <img src='../images/logoS.png' alt="" class="logoS" />
        </router-link>
        <div class="headerLinks">
            <router-link to="/" exact class="headerLink">Home</router-link>
            <router-link to="/about" class="headerLink">About</router-link>
            <router-link to="/notice" class="headerLink">Notice</router-link>
            <router-link to="/event" class="headerLink">Event</router-link>
            <router-link to="/contact" class="headerLink">Contact</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .headerContent {
        height: 8.5vw;
        width: 100%;
        font-size: 1.2vw;
        position: fixed;
        z-index: 99;
        background-color: white;
    }

    .logoS {
        width: 7.5%;
        margin-left: 3.5vw;
        margin-top: 1vw;
        float: left;
        cursor: pointer;
    }

    .headerLinks {
        height: 100%;
        width: 38%;
        float: right;
        margin-right: 2.5vw;
        text-align: center;
    }

    .headerLink {
        width: 20%;
        float: left;
        position: relative;
        top: 50%;
        transform: translate(-2%,-50%);
        cursor: pointer;
        color: black;
        text-decoration: none;
    }

    .route-active{
        text-decoration: underline;
        text-underline-position: under;
        text-decoration-thickness: 2px;
    }

    .headerLink:hover {
        font-family: 'LexendB';
        font-size: 1.2vw;
    }
</style>