const createFilename = str => {
  const i = str.indexOf('.')
  let num = str.slice(0, i)

  while (num.length < 4) {
    num = '0' + num
  }
  const filename = num + str.slice(i + 1)
  return `${filename
    .toLowerCase()
    .split(' ')
    .join('_')}.js`
}

const name = '547. Friend Circles'
console.log(createFilename(name))
