# Computed Property

This is derived data - meaning that this information exists based on a subset of data. This is information that changes based on another state or changing state of data. The information will be reactive if the existing data is changed/updated.

These will be functions that take no arguments since it depends on existing data.

Computed properties allow you to update a value based on another value, so if the value ever changes, it will update accordingly.

Can perform translations or calculations based on data provided while staying in sync. *This should only alter the presentation level, not the data itself.* **If you need to modify the data, use a method.**

You can see this by providing `computed` as an object within the "createApp". Then we would create functions inside this section.

You must provide a return statement for these functions.

You can access elements from computed just like data.
