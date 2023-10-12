// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Anthony's ResumeAPI",
  tagline: "Showcasing My Backend Skills - Your Gateway to My Resume",
  favicon: 'img/cv.png',

  // Set the production url of your site here
  url: 'https://anthonywonjoon.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/resumeapi-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'anthonywonjoon', // Usually your GitHub org/user name.
  projectName: 'resumeapi-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        /**
         * Tutorial/Docs Preset
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            //editUrl:
            //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          },
         **/
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./sidebars.js'),
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/resumeapi-social-card.png',
      navbar: {
        title: 'ResumeAPI',
        logo: {
          alt: 'ResumeAPI Docs Logo',
          src: 'img/cv.png',
        },
        items: [
          /**
           * Tutorial/Docs Navbar
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
            **/
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/api', label: 'API', position: 'left'},
          {
            href: 'https://github.com/anthonywonjoon',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'API',
                to: '/api',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Email',
                href: 'mailto:a.wonjoonlee@gmail.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/anthonywonjoon',
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
                label: 'GitHub',
                href: 'https://github.com/anthonywonjoon',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Anthony's Resume API. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
