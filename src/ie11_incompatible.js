// eslint-disable-next-line no-unused-vars
function ie11Incompatible () {
  var text = 'Hello world!'
  var capitalText = text.toUpperCase()
  var startsWithHello = capitalText.startsWith('Hello')

  console.info(startsWithHello)
}
