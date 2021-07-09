// .vuepress/config.js

const icon = "https://avatars.githubusercontent.com/u/32671488?s=200&v=4";
module.exports = {
    locales: {
        '/': {
            lang: 'en-US',
            title: 'DeepModeling',
            description: 'Define the future of scientific computing together'
        },
    },
    head: [
        ['link', { rel: 'icon', href: icon }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['link', { rel: 'apple-touch-icon', href: icon }],
        ['meta', { name: 'msapplication-TileImage', content: icon }]
    ],
    themeConfig: {
        editLinks: true,
        logo: icon,
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                navbar: [
                    { text: 'Home', link: '/' },
                    { text: 'Blog', link: '/blog/', target: '_blank' },
                    { text: 'Docs', link: 'https://docs.deepmodeling.org/', target: '_blank' },
                ]
            },
        }
    },
}
