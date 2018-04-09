const parseUrlObjectString = string => {
  if (!string) return

  try {
    return JSON.parse(decodeURIComponent(string))
  } catch (ex) {
    console.log('Unable to parse URL paramater', ex)
  }
}

module.exports = parseUrlObjectString
