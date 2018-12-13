---
title: How CSS colors are analyzed
page: doc
---

Colors can appear in many places and in many forms in CSS.

## Where colors appear

Here is a list of properties that often contain colors. Please note that this is not a complete list, but merely an indication of properties that might yield some kind of color.

1. color

1. background

1. background-color

1. box-shadow

1. text-shadow

1. ...

## How colors may appear

There are a couple of different ways to define colors in CSS.

1. Hexadecimal: `#bada55`, `#fff`, `#aaaa`, `#abababab`

1. RGB: `rgb(0, 0, 0)`, `rgb(255, 0, 0)`

1. RGBA: `rgba(255, 255, 255, 0.5)`, `rgba(0, 0, 0, .5)`

1. HSL: `hsl(270, 50%, 10%)`

1. HSLA: `hsla(270, 50%, 10%, 0.5)`

1. Color keywords: `green`, `aqua`, `deepskyblue`

### CSS Keywords

Keywords are not included in the analysis of colors, since they provide little to no value in your dashboard. The color keywords are:

1. transparent

1. inherit

1. auto

1. unset

1. none

1. revert

[Source](https://github.com/projectwallace/css-analyzer/blob/349edb4a371cb017f052b3ba00eb7374e9231332/src/utils/css.js#L1-L8)
