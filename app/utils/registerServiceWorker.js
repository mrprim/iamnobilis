export default async workerPath => {
  if (!('serviceWorker' in navigator)) {
    console.log('Browser does not support ServiceWorkers')
  }

  window.addEventListener('load', onLoad(workerPath))
}

const onLoad = workerPath => () => navigator.serviceWorker.register(workerPath).then(success, error)

const success = ({ scope }) => console.log('ServiceWorker registration successful with scope: ', scope)
const error = err => console.log('ServiceWorker registration failed: ', err)
