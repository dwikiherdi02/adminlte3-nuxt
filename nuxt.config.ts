// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    app: { 
        head: {
            htmlAttrs: {
                lang: "en"
            },
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" }
            ],
            title: "Nuxt Learning",
            /* link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
                },
                {
                    rel: "stylesheet",
                    href: "plugins/fontawesome-free/css/all.min.css"
                },
                {
                    rel: "stylesheet",
                    href: "plugins/icheck-bootstrap/icheck-bootstrap.min.css"
                },
                {
                    rel: "stylesheet",
                    href: "dist/css/adminlte.min.css"
                }
            ],
            script: [
                { src: "plugins/jquery/jquery.min.js", body: true },
                { src: "plugins/bootstrap/js/bootstrap.bundle.min.js", body: true },
                { src: "dist/js/adminlte.min.js", body: true }
            ] */
        }
    }
})
