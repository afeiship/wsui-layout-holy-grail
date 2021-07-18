# wsui-layout-holy-grail
> Holy Grail Layout solved by flexbox.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm i @jswork/wsui-layout-holy-grail
```

## usage
```scss
// use sass
@import '~@jswork/wsui-layout-holy-grail/dist/index.scss';
// use css
@import '~@jswork/wsui-layout-holy-grail/dist/style.css';
```

```html
<!-- .wsui-layout-holy-grail > .hg-body > {.hg-content + .hg-sidebar + .hg-sidebar } -->
<section class="wsui-layout-holy-grail">
  <!-- Header -->
  <header>
    <p>Header</p>
  </header>

  <article class="hg-body">
    <div class="hg-content">
      <p>Main content of the page</p>
    </div>
    <div class="hg-sidebar-1 hg-sidebar">
      <p>Sidebar 1</p>
    </div>
    <div class="hg-sidebar-2 hg-sidebar">
      <p>Sidebar 2</p>
    </div>
  </article>

  <!-- Footer -->
  <footer>
    <p>Footer</p>
  </footer>
</section>
```

## preview
- https://afeiship.github.io/wsui-layout-holy-grail/

## license
Code released under [the MIT license](https://github.com/afeiship/wsui-layout-holy-grail/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/wsui-layout-holy-grail
[version-url]: https://npmjs.org/package/@jswork/wsui-layout-holy-grail

[license-image]: https://img.shields.io/npm/l/@jswork/wsui-layout-holy-grail
[license-url]: https://github.com/afeiship/wsui-layout-holy-grail/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/wsui-layout-holy-grail
[size-url]: https://github.com/afeiship/wsui-layout-holy-grail/blob/master/dist/wsui-layout-holy-grail.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/wsui-layout-holy-grail
[download-url]: https://www.npmjs.com/package/@jswork/wsui-layout-holy-grail

