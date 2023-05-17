# Section 2 - Notes

You can use `:` in front an attribute to bind it in place.

## Directives

Instructions for Vue to do specific actions placed on an HTML element.

You provide the v-directiveName after the opening tag element.

Vue [comes with a number of these built in options](https://vuejs.org/api/built-in-directives.html)

Some directive will even allow you to use JavaScript methods on them.

### v-if vs. v-show

If will completely remove the element and only display it when the case is supported.

Show will still have the element with in the html, but hidden.

The use case with depend on how accessible the associated content should be.

### v-model

This will provide state for two-way binding. This should be associated with a specific variable so that state will sync.

### v-for

This creates a "forEach" loop, you will provide the array and then shorthand for it.

Just like "forEach", you must include a key. If you are using a key from the associated array, make sure you "bind" the value by placing a `:` in front of the word `key`, eg `:key="array.id"`

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
