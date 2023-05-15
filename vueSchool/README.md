# Vue School

Taking tutorial through [Vue School](https://vueschool.io/lessons/).

## Notes

### Data

Content that is directly referenced within the application can be stored in a data variable inside of `Vue.create({})`

### Directives

These are processes that can be applied to elements.

#### v-model

[**V-model**](https://vuejs.org/guide/components/v-model.html) is a way to bind information input, keeping data in sync.

V-model can take modifiers, such blurring text, trimming the white space and changes strings of numbers to numbers.

If you are using input such a radio buttons or selects, then they are bound through the value provided, not the label content.

You can also use this to bind data from a series through creating an array and binding through a checkbox option.

#### Events

[**v-on**](https://vuejs.org/api/built-in-directives.html#v-on)
 allow for event triggering.

 You can use a shorthand `@` to replace with v-on.

#### Modifiers

These are additional actions that can be taken on a directives This is indicated by a period or colon between the directive and the modifier. Different v-items will have different actionable items.

There are key specific modifies that allow for us to target specific key events.

### Methods

Functions that are used inside of an application will be stored inside of `Vue.create({}` inside of a methods object.

It's important to note that you won't have direct access to the data, you will need to bind the information by using `this`.

When you reference the function, you will not be required to instantiate it.