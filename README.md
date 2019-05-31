# css-bem-classes

### Usage
```
import React from 'react'
import classNames from 'css-bem-classes'

function Example() {
  const cn = classNames('block-name')
  
  return (
    <div className={cn()}> // class="block-name" cn({modifier: true}) class="block-name_modifier"
	  <div 
	    className={cn('element-name', {
		  elementModifierBoolean: true,
		  elementModifierString: 'red',
		})} // class="block-name__element-name block-name__element-name_elementModifierBoolean block-name__element-name_elementModifierString_red"
	  />
    </div>
  )
}
```
 