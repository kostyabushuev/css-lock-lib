# CSS-LOCK-lib

### Description

It is small scss-mixins library for more adaptive. If you don't know what's css-lock, you can read article by Florens Verschelde [The math of CSS locks](https://fvsch.com/code/css-locks/). At the moment the library works with `vw` and `vh`. [**LIVE EXAMPLE**](https://kostyabushuev.github.io/css-lock/)

### Get started!

For use the scss-mixins you can download the scss folder and include in your project main mixin is called `@import '_css-lock.scss'`

EXAMPLE:

You want to change your font-size from 72px to 18px on screens from 1000px to 320px. You must do next.

**SCSS:**

```scss
@import '_css-lock.scss';

.item {
 @include cssLock('font-size', 320, 1000, (18 72));
}
```
**CSS:**

```css
.item {
 font-size: calc(7.94118vw + -7.41176px);
}
```

## Docs

Main ScSS mixins looks like as:

```scss
/**
* @param $property - css property
* @param $minW - min width of screen
* @param $maxW - max width of screen
* @param $minV - min value
* @param $maxV - max value
* */

@include cssLock('$property', $minW, $maxW, ($minV $maxV));

Also, you can use some values, for example, margin or padding:

@include cssLock('$property', $minW, $maxW, ($minV $maxV) ($minV $maxV) ($minV $maxV) ($minV $maxV));
```
You can use only css-property `($property)` which are calculated in pixels. List of the property:
* margin
* padding
* font-size
* line-height
* top
* bottom
* left
* right
* width / height
* max-width / max-height
* min-width / min-height

### Value is auto

The mixins supports to use value auto. For example

**SCSS:**

```scss
@import '_css-lock.scss';

.item {
 @include cssLock('maring-left', 320, 1000, (auto auto));
}
```
**CSS:**

```css
.item {
 maring-left: auto;
}
```

### Value is const
The mixins supports to use const. For example

**SCSS:**

```scss
@import '_css-lock.scss';

.item {
 @include cssLock('margin', 320, 1000, (30 30), (auto auto), (10 25));
}
```
**CSS:**

```css
.item {
 margin: 30px auto calc(2.2vw + 2.9px);
}
```

### For lovers Emmet

If you use plugin emmet you like write, for example, `fz` --> put `Tab` --> and get `font-size`. The sass-mixins has shortened property values for more speed development.

Example:

**SCSS:**

```scss
@import '_css-lock.scss';

.item {
 @include cssLock('m', 320, 1000, (30 30), (auto auto));
}
```
**CSS:**

```css
.item {
 margin: 30px auto;
}
```

| Write         | Get              |
| :-----------: | :-------------:  |
| `m`           | `margin`         |
| `mr`          | `margin-right`   |
| `ml`          | `margin-left`    |
| `mt`          | `margin-top`     |
| `mb`          | `margin-bottom`  |
| `p`           | `padding`        |
| `pr`          | `padding-right`  |
| `pl`          | `padding-left`   |
| `pt`          | `padding-top`    |
| `pb`          | `padding-bottom` |
| `fz`          | `font-size`      |
| `lh`          | `line-height`    |
| `w`           | `width`          |
| `mw`          | `min-width`      |
| `maxw`        | `max-width`      |
| `h`           | `height`         |
| `mh`          | `min-height`     |
| `mah`         | `max-height`     |
| `t`           | `top`            |
| `b`           | `bottom`         |
| `l`           | `left`           |
| `r`           | `right`          |

Update
