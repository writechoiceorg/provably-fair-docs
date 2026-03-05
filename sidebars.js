// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'html',
      value: `
        <div class="sidebar-brand-container">
          <img src="/img/logodark.png" alt="Logo" class="sidebar-logo-img" />
          
        </div>
      `,
      defaultStyle: true,
      className: 'sidebar-logo-item',
    },
    {
      type: 'link',
      label: 'Documentation',
      href: '/docs/intro',
      className: 'sidebar-icon-docs',
    },
    {
      type: 'link',
      label: 'API Reference',
      href: '#', 
      className: 'sidebar-icon-api',
    },
    {
      type: 'link',
      label: 'Contact Us',
      href: '/contact',
      className: 'sidebar-icon-contact', 
    },    
    {
      type: 'category',
      label: 'Introduction',
      collapsible: false,
      className: 'sidebar-title-orange',
      items: [
        'intro', 
        'tutorial-basics/create-a-document', 
      ],
    },
    {
      type: 'category',
      label: 'SDKs',
      collapsible: false,
      className: 'sidebar-title-orange',
      items: [
        'intro', 
        'tutorial-basics/create-a-document', 
      ],
    },
    
    {
      type: 'category',
      label: 'Dashboard',
      collapsible: false,
      className: 'sidebar-title-orange',
      items: [
        'dashboard', 
        'dice-audit', 
        'executive-summary', 
      ],
    },
  ],
};
export default sidebars;

