<template>
    <div class="login-box">
        <div class="login-logo">
            <NuxtLink to="sign-in"><b>Admin</b>LTE</NuxtLink>
        </div>
        <slot />
    </div>
</template>
<script setup lang="ts">
    const nuxtApp = useNuxtApp();

    useHead({
        link: [
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
            },
            {
                rel: "stylesheet",
                href: "/plugins/fontawesome-free/css/all.min.css"
            },
            {
                rel: "stylesheet",
                href: "/plugins/icheck-bootstrap/icheck-bootstrap.min.css"
            },
            {
                rel: "stylesheet",
                href: "/dist/css/adminlte.min.css"
            }
        ],
        script: [
            { src: "/plugins/jquery/jquery.min.js", body: true },
            { src: "/plugins/bootstrap/js/bootstrap.bundle.min.js", body: true },
            { src: "/dist/js/adminlte.min.js", body: true }
        ],
        bodyAttrs: {
            class: "hold-transition login-page"
        }
    })
</script>