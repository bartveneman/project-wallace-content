---
title: How font-families are analyzed
page: doc
---

Finding font-families in some CSS can be done in 2 ways:

## How to find font-families in CSS

1. Get the value from a `font-family` declaration. This is the most common way to declare a font-family and is easy to analyze;

2. Extract the value from a `font` declaration;

## Extracting the font-family from a `font` declaration

Extracting the font-family from a `font` declaration involves a lot of complexity. As you can see in the examples below, there are _many_ ways to write a `font` declaration.

### Examples

```js

/**

 * Font-families

*/

.font-family0 { font-family: "Droid Sans", serif; }

.font-family1 { font-family: sans-serif; }

.font-family2 { font: large 'Noto Sans'; }

.font-family3 { font: normal normal 1em/1 'Source Sans Pro', serif; }

.font-family-spaces {

  font: 1em / 1 serif;

  font: 1em/ 1 serif;

  font: 1em /1 serif;

}

.font-family-keywords {

  font-family: inherit;

  font-family: initial;

  font-family: auto;

}

.font-families-github {

  font-family:"Arial Black", "Arial Bold", Gadget, sans-serif;   font-family:"Brush Script MT", cursive;   font-family:monospace;   font-family:Consolas, "Liberation Mono", Menlo, Courier, monospace;

  /* Some real life examples that caused bugs in the past: */

  font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

  font:11px Consolas, "Liberation Mono", Menlo, Courier, monospace;

  font:normal normal 11px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

}

```

[Source](https://github.com/projectwallace/css-analyzer/blob/349edb4a371cb017f052b3ba00eb7374e9231332/test/analyzer/values/input.css#L87-L110)

## Edge cases

1. The `font-family` declaration inside an `@font-face` rule is actually a descriptor. It will not be counted as a property and it will not appear in the list of unique properties.
