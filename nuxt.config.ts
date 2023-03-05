// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss', '@nuxt/image-edge'],

    apollo: {
        clients: {
          default: {
            httpEndpoint: 'https://cmsathenaplus.herokuapp.com/graphql'
          }
        },
      },

      image: {
        domains: ['rickandmortyapi.com/']
      }
})


// https://cmsathenaplus.herokuapp.com/graphql

// Rick https://rickandmortyapi.com/graphql
// Baroshem nuxt-apollo-tailwind Public https://github.com/Baroshem/nuxt-apollo-tailwind
