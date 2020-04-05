# css-bem-classes

### Usage

```
import classNames from 'css-bem-classes';

const cn = classNames('button', { element: '__', modifier: '_' }); // { element: '__', modifier: '_' } by default
cn() // => "button"
cn({ color: 'red' }) // => "button button_color_red"
cn({ required: true }) // => "button button_required"
cn('icon') // => "button__icon"
cn('icon', { search: true }) // => "button__icon button__icon_search"
cn('icon', { color: 'red' }) // => "button__icon button__icon_color_red"
cn('icon', { search: true, color: 'red' }) // => "button__icon button__icon_search button__icon_color_red"
```