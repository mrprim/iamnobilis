const getQueryParam = (key: string): string | null => {
  const url = new URL(window.location.href)
  return url.searchParams.get(key);
}

const setQueryParam = (key: string, value: string): void => {
  if ('URLSearchParams' in window) {
    const url = new URL(window.location.href)
    url.searchParams.set(key, value)
    history.pushState(null, '', url);
  }
}


export { setQueryParam, getQueryParam }