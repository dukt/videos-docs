module.exports = {
    title: 'Videos Documentation',
    description: 'Videos Documentation',
    base: '/docs/videos/v3/',
    plugins: {
        '@vuepress/google-analytics': {
            'ga': 'UA-1547168-20'
        },
        'sitemap': {
            hostname: 'https://dukt.net/docs/videos/v3/'
        },
    },
    theme: 'default-prefers-color-scheme',
    themeConfig: {
        docsRepo: 'dukt/videos-docs',
        docsDir: 'docs',
        docsBranch: 'v3',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
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
                    title: 'Fields',
                    collapsable: false,
                    children: [
                        'video-field',
                    ]
                },
                {
                    title: 'Templates',
                    collapsable: false,
                    children: [
                        'twig-filters',
                        'twig-variables',
                        'full-video-example',
                    ]
                },
                {
                    title: 'Models',
                    collapsable: false,
                    children: [
                        'video-model',
                        'video-author-model',
                        'video-size-model',
                        'video-statistic-model',
                        'video-thumbnail-model',
                        'failed-video-model',
                        'video-embed-model',
                        'failed-video-embed-model',
                    ]
                },
            ],
        }
    }
}
