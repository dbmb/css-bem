import { Delim } from './types';

const cssBem = function(block: string, delim: Delim = { element: '__', modifier: '_' }) {
  const modifier = (modified: string, modifiers: string[]): string =>
    `${modified}${delim.modifier}${modifiers.join(delim.modifier)}`

  return (...classes: any[]): string => {
    let element: string = ''

    return classes.length ?
      classes.reduce((classesList: string[], item: any) => {
        if (!element) {
          if (typeof item === 'object') {
            classesList.push(block)
          } else {
            element = item
          }
        }
        const blockElement: string = `${block}${delim.element}${element}`

        return classesList.concat(
          typeof item === 'string' && blockElement ||
          Object.keys(item)
            .reduce((elem: string[], key: string) => (
              elem.concat(
                item[key] && modifier(
                  element ? blockElement : block,
                  [key, item[key]].filter(el => el !== true)
                ) || []
              )
            ), [])
            .join(' ')
        )
      }, [] as string[]).join(' ') :
      block
  }
}

export default cssBem
