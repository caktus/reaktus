const ignore = [
  '**/__tests__/**',
  '**/*.test.{js,jsx,ts,tsx}',
  '**/*.styled.{js,jsx,ts,tsx}',
]

module.exports = [
  {
    content: 'docs/introduction.md'
  },
  // {
  //   name: 'Documentation',
  //   sections: [
  //     {
  //       name: 'Installation',
  //       content: 'docs/installation.md',
  //     },
  //     {
  //       name: 'Configuration',
  //       content: 'docs/configuration.md'
  //     },
  //     {
  //       name: 'Live Demo',
  //       external: true,
  //       href: 'https://www.google.com'
  //     }
  //   ]
  // },
  {
    name: 'UI Components',
    content: 'docs/ui.md',
    sections: [
      {
        name: 'Elements',
        components: 'src/components/elements/**/*.{js,jsx}',
        ignore: ignore
      },
      {
        name: 'Modals',
        components: 'src/components/modals/**/*.{js,jsx}',
        ignore: ignore
      },
      {
        name: 'Collections',
        components: 'src/components/collections/**/*.{js,jsx}',
        ignore: ignore
      }
    ],
    exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
    usageMode: 'collapse' // 'hide' | 'collapse' | 'expand'
  },
  {
    name: 'Hooks',
    content: 'docs/hooks.md',
    components: 'src/hooks/**/*.{js,jsx}',
    ignore: ignore
  }
]