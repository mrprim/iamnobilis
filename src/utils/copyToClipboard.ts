const copyToClipboard = async (value: string): Promise<void> => {




  if (!navigator.clipboard) {
    const el = document.createElement('textarea')
    el.value = value
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  } else {
    await navigator.clipboard.writeText(value)
  }
}

export default copyToClipboard;