const cssBem = require('../src/index')

describe('CSS BEM', () => {
  const cn = cssBem('root-block')
  const cx = cssBem('someone-block')

  it('Should return root-block', () => {
    expect(cn()).toBe('root-block')
  })
  it('Should return someone-block', () => {
    expect(cx()).toBe('someone-block')
  })
  it('Blocks should not be equal', () => {
    expect(cn()).not.toBe(cx())
  })
  it('Must return element class', () => {
    expect(cn('title')).toBe('root-block__title')
  })
  it('The class must be different from the previous result', () => {
    cn('title')
    expect(cn('new-title')).toBe('root-block__new-title')
  })
  it('Must return an element class with a logical modifier', () => {
    expect(cn('title', {
      active: true,
    })).toBe('root-block__title root-block__title_active')
  })
  it('Must return an element class with a string modifier', () => {
    expect(cn('title', {
      color: 'red',
    })).toBe('root-block__title root-block__title_color_red')
  })
  it('Must return an element class with modifiers', () => {
    expect(cn('title', {
      active: true,
      valid: false,
      color: 'red',
    })).toBe('root-block__title root-block__title_active root-block__title_color_red')
  })
  it('Must return a block class and a block with a logical modifier', () => {
    expect(cn({ modifier: true })).toBe('root-block root-block_modifier')
  })
  it('Must return a block class and a block with a string modifier', () => {
    expect(cn({ modifier: 'red' })).toBe('root-block root-block_modifier_red')
  })
})
