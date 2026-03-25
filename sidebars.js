const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Overview',
      collapsible: false,
      collapsed: false,
      className: 'sidebar-title-orange',
      items: [
        {
          type: 'doc',
          id: 'casinos/duel/dashboard',
          label: 'Dashboard',
          customProps: {
            icon: 'dashboard',
          },
        },
        {
          type: 'doc',
          id: 'casinos/duel/exec-summary',
          label: 'Executive Summary',
          customProps: {
            icon: 'summary',
          },
        },
      ],
    },
    {
      type: 'category',
      label: 'Game Audits',
      collapsible: false,
      collapsed: false,
      className: 'sidebar-title-orange',
      items: [
        // {
        //   type: 'doc',
        //   id: 'casinos/duel/games/dice/overview',
        //   label: 'Dice',
        //   customProps: {
        //     icon: 'dice',
        //   },
        // },
        {
          type: 'doc',
          id: 'casinos/duel/games/plinko/overview',
          label: 'Plinko',
          customProps: {
            icon: 'plinko',
          },
        },
      ],
     },
  ],
};

export default sidebars;
