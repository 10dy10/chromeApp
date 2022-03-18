const img = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg']

const randomImg = img[Math.floor(Math.random() * img.length)]

const bgImg = document.createElement('img')

bgImg.src = `/images/${randomImg}`

document.body.appendChild(bgImg)