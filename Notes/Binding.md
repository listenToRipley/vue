# Binding

You can use `:` before an attribute to bind it.

## v-bind

`:` used before attributes to bind data to a specific variable.

## Class Binding

A subset of "attribute binding." This should use `v-bind:class=""` and can use a ternary operator.

Classes are special by providing the class name with an associated variable to turn it off and on. This will bind specific classes based on provided variables' truthy or false quality. You can track multiple items through this syntax.

You can also provide static classes in addition to bound classes. You will not encounter an error if you provide just 'class' without the following:

Though you can create a static class list that will always apply those classes. `:class['list,' 'static,' 'class,' 'names'].`

Or create it into ternary operands within the list:

```vue

:class="[
    variable.key ? 'some classes' : 'different ones,' 
    variable.keyName ? 'another class' : 'alternative.' 
]"

```

You could also nest object syntax into the array to make this shorter.

## Two Way

With the use of v-bind and v-on, you can can

### v-model

This will provide a state for two-way binding. This should be associated with a specific variable so the state will sync.

[**V-model**](https://vuejs.org/guide/components/v-model.html) is a way to bind information input, keeping data in sync.

V-model can take modifiers, such as blurring text, trimming the white space, and changing strings of numbers to numbers.

Suppose you are using input such as radio buttons or selects. In that case, they are bound through the value provided, not the label content.

You can also use this to bind data from a series by creating an array and binding through a checkbox option.

## Emit

Show backward binding from child to parent—a way to track state and provide information between elements.

This will often use another directive, `v-on` which the provided emitter name back on the parent element to determine what you are working on.

## Styling

### Scoped

If you us `scope` inside of a co-location application, this will make the styling exist inside only the application.
