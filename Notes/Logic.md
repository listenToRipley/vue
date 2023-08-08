# Logical

They are known as [directive](./Directives.md) in Vue.

## Conditionals

### If

`v-if` provides the functional check against what is possible.

It is important to note that `v-else` should be next to `v-if`, or it will not work.

#### v-if vs. v-show

It will thoroughly remove the element and only display it when the case is supported.

The show will still have the element within the html but hidden.

The use case with depend on how accessible the associated content should be.

### Looping

#### v-for

This creates a "forEach" loop. You will provide the array and then shorthand for it.

Just like "forEach", you must include a key. If you are using a key from the associated array, make sure you "bind" the value by placing a `:` in front of the word `key`, eg, `:key="array.id"`
