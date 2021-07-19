const { description } = require("../../package");

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: "jsDocs.uz - α",
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ["meta", { name: "theme-color", content: "#FFDE59" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        ],
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: "",
        editLinks: false,
        docsDir: "",
        editLinkText: "",
        lastUpdated: false,
        nav: [{
                text: "Docs",
                link: "/docs/",
            }, {
                text: "Loyiha haqida",
                link: "/about/",
            },
            {
                text: "Telegram",
                link: "https://t.me/jsdocs_uz",
            },
            {
                text: "Hissa qo'shing",
                link: "https://github.com/jsdocs-uz/jsdocs.uz",
            },
        ],
        sidebar: {
            "/docs/": [{
                title: "Mundarija",
                collapsable: false,
                children: ["", "manuals", "browser", "hello-world", "code-structure", "use-strict"],
            }, ],
            "/about/": [{
                title: "Loyiha haqida",
                collapsable: false,
                children: ["", "contribute", "pull"],
            }, ],
        },
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
