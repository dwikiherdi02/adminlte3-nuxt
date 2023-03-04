<template>
    <div class="wrapper">
        <!-- Navbar -->
        <AdminNavbar />

        <!-- Sidebar -->
        <AdminSidebar />

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <slot />
        </div>

        <footer class="main-footer">
            <div class="float-right d-none d-sm-block">
                <small>Version 1.0.0-nuxt</small>
            </div>
            <small>Copyright &copy; {{ year }} DW. All rights reserved.</small>
        </footer>
    </div>
</template>

<script setup lang="ts">
    const nuxtApp = useNuxtApp();

    const year    = new Date().getFullYear();

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
                href: "/dist/css/adminlte.css"
            }
        ],
        script: [
            { src: "/plugins/jquery/jquery.min.js", body: true },
            { src: "/plugins/bootstrap/js/bootstrap.bundle.min.js", body: true },
            { src: "/dist/js/adminlte.min.js", body: true }
        ],
        bodyAttrs: {
            // class: "hold-transition sidebar-mini"
            // class: "layout-fixed control-sidebar-slide-open"
            class: "hold-transition layout-fixed sidebar-mini"
        }
    })
</script>