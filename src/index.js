const cssBem = function(block, delim = { element: '__', modifier: '_' }) {
  const modifier = (modified, modifiers) =>
    `${modified}${delim.modifier}${modifiers.join(delim.modifier)}`

  return (...classes) => {
    let element = ''

    return classes.length ?
      classes.reduce((classesList, item) => {
        if (!element) {
          if (typeof item == 'object') {
            classesList.push(block)
          } else {
            element = item
          }
        }
        const blockElement = `${block}${delim.element}${element}`

        return classesList.concat(
          typeof item == 'string' && blockElement ||
          Object.keys(item)
            .reduce((elem, key) => (
              elem.concat(
                item[key] && modifier(
                  element ? blockElement : block,
                  [key, item[key]].filter(el => el !== true)
                ) || []
              )
            ), [])
            .join(' ')
        )
      }, []).join(' ') :
      block
  }
}

module.exports = cssBem
