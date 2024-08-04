export default ({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content', 'nuxt-icon', "@nuxt/image"],

    content: {
        highlight: {
            theme: 'nord',
            preload: ['js', 'css', 'html', 'md', 'ts', 'tsx', 'vue', 'python', 'ruby', 'java'],
        }
    },

    compatibilityDate: '2024-08-04'
});