module.exports = {
    title: 'Videos Documentation',
    description: 'Videos Documentation',
    base: '/docs/videos/v2/',
    plugins: {
        '@vuepress/google-analytics': {
            'ga': 'UA-1547168-20'
        },
        'sitemap': {
            hostname: 'https://dukt.net/docs/videos/v2/'
        },
    },
    theme: 'default-prefers-color-scheme',
    themeConfig: {
        docsRepo: 'dukt/videos-docs',
        docsDir: 'docs',
        docsBranch: 'v2',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        sidebar: {
            '/': [
                {
                    title: 'Videos plugin for Craft CMS',
                    collapsable: false,
                    children: [
                        '',
                        'requirements',
                        'installation',
                        'connect-youtube',
                        'connect-vimeo',
                        'configuration',
                    ]
                },
                {
                    title: 'Core Concepts',
                    collapsable: false,
                    children: [
                        'video-model',
                    ]
                },
                {
                    title: 'Fields',
                    collapsable: false,
                    children: [
                        'video-field',
                    ]
                },
            ],
        }
    }
}
