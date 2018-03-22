const w = new Worker('worker.js')
const canvas = document.getElementById('c')
const offscreen = canvas.transferControlToOffscreen()
w.postMessage({canvas: offscreen}, [offscreen])
