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

 You can use a shorthand `@` to replace with v-on. You don't need the colon at this point either.

 the `@click` even is not restricted to things like buttons. It can actually be used on most elements.

#### Conditional

There is a `v-if`, which can toggle the existence of the element on the page.

There is `v-else`

#### Binding

`v-bind`

`:` used before attributes to bind data to a specific variable.

##### Classes

Class are special, by providing the class name with an associated variable to turn it off and on. This will bind specific classes based on provided variables truthy or falsely quality. You can track multiple items through this syntax.

You can also provide static classes in addition to bound classes. You will not encounter an error if you provide just 'class' without the :

Though you can create a static class list that will always apply those classes. `:class['list', 'static', 'class', 'names']`

Or create is into ternary operands within the list:

```vue

:class="[
    variable.key ? 'some classes' : 'different ones', 
    variable.keyName ? 'another class' : 'alternative' 
]"

```

You could also nest object syntax into the array to make this shorter.

#### Computed

Can perform translations or calculates based on data provided while staying in sync. This should only alter on the presentation level, not the data itself. If you need to alter the data, then you should use a method.

You can see this by provided `computed` as an object within the "createApp". Then we would create functions inside of this section.

You must provide a return statement to these functions.

You can access elements from computed just like data.

#### Modifiers

These are additional actions that can be taken on a directives This is indicated by a period or colon between the directive and the modifier. Different v-items will have different actionable items.

There are key specific modifies that allow for us to target specific key events.

### Methods

Functions that are used inside of an application will be stored inside of `Vue.create({}` inside of a methods object.

It's important to note that you won't have direct access to the data, you will need to bind the information by using `this`. This also means you can't use arrow functions.

When you reference the function, you will not be required to instantiate it.
