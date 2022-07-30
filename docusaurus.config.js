// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hướng dẫn sử dụng Pisale',
  tagline: 'Bán hàng thông minh',
  url: 'https://pisale.osd.vn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favi.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'osdvn', // Usually your GitHub org/user name.
  projectName: 'pisale-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["vi"],
        // ```
      },
    ],
    require.resolve('docusaurus-plugin-image-zoom')
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/osdvn/pisale-docs/tree/main/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/osdvn/pisale-docs/tree/main/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'Docs',
          src: 'img/pisale.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Hướng dẫn sử dụng',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://osd.vn',
            label: 'OSD.VN',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Hướng dẫn sử dụng',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Hỗ trợ',
            items: [
              {
                label: 'Báo lỗi',
                href: 'https://github.com/osdvn/pisale-docs/issues',
              },
		{
		label: 'Liên hệ',
		href: 'https://osd.vn/information/contact',
              },
		{
                label: 'Zalo',
                href: 'https://zalo.me/osd.vn',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Cộng đồng F1',
                href: 'https://f1.edu.vn',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}, made with 🌶 by OSD.VN.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
