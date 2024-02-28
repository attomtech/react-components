/** @type { import('@storybook/react-vite').StorybookConfig } */

const config = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework : {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/attomtech-reactjs-design-system'
    }

    return config
  }
}

export const framework = {
  name: "@storybook/react-vite",
  options: {}
};

export const docs = {
  autodocs: true
};

export default config