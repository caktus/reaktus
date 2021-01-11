const ignore = [
  '**/__tests__/**',
  '**/*.test.{js,jsx,ts,tsx}',
  '**/*.styled.{js,jsx,ts,tsx}',
]

module.exports = [
  {
    content: "docs/introduction.md",
  },
  {
    name: "Reaktus is Themeable!",
    content: "docs/themeable.md",
  },
  {
    name: "UI Components",
    content: "docs/ui.md",
    sections: [
      {
        name: "Elements",
        components: "src/components/elements/**/*.{js,jsx}",
        ignore: ignore,
      },
      {
        name: "Modals",
        components: "src/components/modals/**/*.{js,jsx}",
        ignore: ignore,
      },
      {
        name: "Collections",
        components: "src/components/collections/**/*.{js,jsx}",
        ignore: ignore,
      },
    ],
    exampleMode: "expand", // 'hide' | 'expand' | 'expand'
    usageMode: "expand", // 'hide' | 'collapse' | 'expand'
  },
  {
    name: "Hooks",
    content: "docs/hooks.md",
    components: "src/hooks/**/*.{js,jsx}",
    ignore: ignore,
  },
];