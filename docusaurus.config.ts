import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Shown in the footer and, via <SupportLink />, in the docs pages.
const contactEmail = 'info@cloudavocado.com';

const config: Config = {
  title: 'CloudAvocado Docs',
  tagline: 'Guides and reference for CloudAvocado',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.cloudavocado.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CloudAvocado', // Usually your GitHub org/user name.
  projectName: 'CloudAvocado/docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  customFields: {
    contactEmail,
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    './plugins/fetch-aws-policy.ts',
    [
      // GitHub Pages can't send server-side 301s, so old URLs get a page that redirects to the new one.
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: '/docs/security/aws-policy', to: '/cloud-setup/aws-iam-policy' },
          { from: '/docs/category/security', to: '/category/cloud-setup' },
        ],
        // The docs used to live under /docs. Keep every old URL working.
        createRedirects(existingPath: string) {
          if (existingPath === '/') {
            return ['/docs', '/docs/welcome'];
          }
          if (existingPath.endsWith('.html')) {
            return []; // Skip the 404 page.
          }
          return [`/docs${existingPath}`];
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          // Serve the docs at the site root, with the welcome page as the homepage.
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/CloudAvocado/docs/tree/gh-pages/',
        },
        // The blog lives on cloudavocado.com; the navbar links there.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'CloudAvocado',
      logo: {
        alt: 'CloudAvocado Docs Logo',
        src: 'img/logo-icon.png',
      },
      items: [
        {
          label: 'Blog',
          href: 'https://cloudavocado.com/blog',
          position: 'left',
        },
        {
          label: 'Open CloudAvocado',
          href: 'https://app.cloudavocado.com',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Blog',
              href: 'https://cloudavocado.com/blog',
            }
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/company/cloudavocado',
            }
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              // Plain HTML, so the mailto link doesn't get the "opens in new tab" icon.
              html: `<a class="footer__link-item" href="mailto:${contactEmail}">${contactEmail}</a>`,
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CloudAvocado, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
