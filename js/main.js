navigator.mediaDevices
  .getUserMedia({ audio: false, video: { width: 800, height: 600 } })
  .then(function (mediaStream) {
    const video = document.getElementById('sourcevid')
    video.srcObject = mediaStream

    video.onloadedmetadata = function (e) {
      video.play()
    }
  })
  .catch(function (err) {
    console.log(`${err.name}: ${err.message}`)
  })

// take picture
document.getElementById('savepic').addEventListener('click', clone)
function clone () {
  const vivi = document.getElementById('sourcevid')
  const canvas1 = document.getElementById('cvs').getContext('2d')
  canvas1.drawImage(vivi, 0, 0, 400, 300)
  const base64 = document.getElementById('cvs').toDataURL('image/png') // l'image au format base 64
  document.getElementById('tar').value = ''
  document.getElementById('tar').value = base64
}

// ladder controller
document.getElementById('ladder').addEventListener('input', evt => {
  const src = document.getElementById('sourcevid')
  src.style.width = evt.target.value + '%'
})
