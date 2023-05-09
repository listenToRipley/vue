# Section 3 - Quiz

## Components

Small element, accessible as long as they are imported into the related component

## Props

Pass state from one element to another.

## Watch

Provides a way to consistently check if input/state has changes and provide rendering accordingly.

Watch takes in two params. The first is a function the returns the value that you want to "listen to", so is if it changes and the second is a call back handler that we will use when the value of the element we want to change.

## Emit

Show backwards binding, from child to parent. A way to track state and provide information between elements.

## Routes

[Official docs](https://router.vuejs.org/installation.html)

This application uses [vue-router](https://www.npmjs.com/package/vue-router)

Router provided to the main doc, from an index file where rules are laid out.

Then the component itself is added to App.vue via RouterView.

To prevent a complete page refresh on different components, then you will need to use RouterLink for any anchor links within the application.

## Compute

Allows you to update a value that is based on another value, so if the value ever changes, it will update accordingly.

## Starting Notes

The notes this file came with on install

This template should help get you started developing with Vue 3 in Vite.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```
