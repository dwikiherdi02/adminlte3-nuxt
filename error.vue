<template>
    <NuxtLayout name="blank"> 
        <div id="main">
            <div class="fof">
                <h1 v-if="props.error.statusCode === 404">Page Not Found</h1>
                <h1 v-else>Error {{ props.error.statusCode }}</h1>
                <!-- <h1>Error {{ props.error.statusCode }}</h1> -->
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>
    const props = defineProps({
        error: Object
    })
    
    // navigateTo(`/error-${props.error.statusCode}`, { redirectCode: 301 })
</script>
<style>
    *{
        transition: all 0.6s;
    }

    html {
        height: 100%;
    }

    body{
        font-family: 'Lato', sans-serif;
        color: #888;
        margin: 0;
    }

    #main{
        display: table;
        width: 100%;
        height: 100vh;
        text-align: center;
    }

    .fof{
        display: table-cell;
        vertical-align: middle;
    }

    .fof h1{
        font-size: 50px;
        display: inline-block;
        padding-right: 12px;
        animation: type .5s alternate infinite;
    }

    @keyframes type{
        from{box-shadow: inset -3px 0px 0px #888;}
        to{box-shadow: inset -3px 0px 0px transparent;}
    }
</style>