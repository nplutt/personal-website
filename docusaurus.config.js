// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nick Plutt',
  tagline: 'Solving real problems with simple solutions',
  url: 'https://nickplutt.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/cloud-service.svg',
  organizationName: 'nplutt',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
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
        title: 'Nick Plutt',
        logo: {
          alt: 'My Site Logo',
          src: 'img/cloud-service.svg',
        },
        items: [
          {to: '/docs', label: 'Portfolio', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/nickplutt',
              },
            ],
          },
          {
            items: [
              {
                label: 'Github',
                href: 'https://github.com/nplutt',
              },
            ],
          },
          {
            items: [
              {
                label: 'Email',
                href: 'mailto:nplutt@gmail.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nick Plutt`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
      }
    }),
};
module.exports = config;
