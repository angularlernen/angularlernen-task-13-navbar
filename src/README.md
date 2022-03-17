Navbar with routerLink
======================

### Introduction

Whenever we'd like to switch from one collection to the other, we have to type in the corresponding URL into the URL input of your browser manually.

Wouldn't it be nice to have a navigation bar?

### Task

1. Create a new component `navbar` as part of your `app` module.

2. Use this `navbar` component in your `app.component.html` (probably somewhere above the `router-outlet`).

### HOWTOs

`ng g c navbar`

#### navbar.component.html

```html

<nav>
  <ul>
    <li>
      <a [routerLink]="['route']">my route</a>
    </li>
    <!-- ... -->
  </ul>  
</nav>
```

If you'd like to use _bootstrap 4_: 

https://getbootstrap.com/docs/4.0/components/navbar/
