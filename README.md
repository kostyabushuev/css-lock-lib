# CSS-LOCK-lib

#### Description

It is small scss-mixins library for more adaptive. If you don't kwo what's css-lock, you can read article by Florens Verschelde [The math of CSS locks](https://fvsch.com/code/css-locks/). At the moment the library works only with unit `vw`.

#### Get started!

For use the scss-mixins you can download the scss folder and include in your project main mixin is called `@import '_css-lock.scss'`

EXAMPLE:

You want to change your font-size from 72px to 18px on screens from 1000px to 320px. You must do next.

Your SaSS-code:

```scss
@import '_css-lock.scss';

.item {
	@include cssLock('font-size', 320, 1000, (18 72));
}
```
Your compiled css-code:

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
