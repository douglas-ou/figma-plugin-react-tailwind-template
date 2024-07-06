# figma-plugin-react-tailwind-template
Quick start your Figma plugin with React and Tailwind CSS

This template contains the react example as shown on [Figma Docs](https://www.figma.com/plugin-docs/intro/), with some structural changes and extra tooling.

## Quickstart

- Run `yarn` to install dependencies.
- Run `yarn build:watch` to start webpack in watch mode.
- Open `Figma` -> `Plugins` -> `Development` -> `Import plugin from manifest...` and choose `manifest.json` file from this repo.

⭐ To change the UI of your plugin (the react code), start editing [App.tsx](./src/app/components/App.tsx).  
⭐ To interact with the Figma API edit [index.ts](./src/plugin/index.ts).  
⭐ Read more on the [Figma API Overview](https://www.figma.com/plugin-docs/api/api-overview/).

## Toolings

This repo is using:

- React + Webpack
- Tailwind CSS
- TypeScript
- Prettier precommit hook

## Tailwind CSS Configuration

- **Preflight Off**: Tailwind's preflight (base styles) is turned off.

- **VSCode Integration**: For an enhanced development experience, it's recommended to install the Tailwind CSS IntelliSense extension in Visual Studio Code. This extension provides:
  - Intelligent CSS class name completion
  - Hover previews
  - Linting
  - Syntax highlighting

  To install, search for "Tailwind CSS IntelliSense" in the VSCode extensions marketplace.

For more information on using Tailwind CSS, refer to the [official Tailwind CSS documentation](https://tailwindcss.com/docs).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).