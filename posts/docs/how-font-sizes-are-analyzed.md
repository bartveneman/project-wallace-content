---
title: How font-sizes are analyzed
---

Finding font-sizes in some CSS can be done in 2 ways:

## Where do font-sizes come from?

1. The `font-size` property. This one is straightforward and can be read as-is.

1. Derived from the `font` property. It involves some complicated trickery, but eventually the font-size is a required part of the font property ([see MDN for details](https://developer.mozilla.org/en-US/docs/Web/CSS/font#Syntax)).

## What kind of font-sizes exist?

As far as Project Wallace is concerned, the following types are font-sizes that make sense to show in our analysis:

1. Keywords: `small`, `large`, `medium` etc.

1. Sizes with units: `12px`, `2em`, `100%`, `1.2rem`, `19pt`, etc.

1. Sizes with calc(): `calc(3vw + 1em)`, `calc(2px + 3rem)`
