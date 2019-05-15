const arrowLeft = document.getElementById("arrow-left")
const arrowRight = document.getElementById("arrow-right")
const photoHandler = document.getElementById("photo-handler")

function shift(){
  if (document.documentElement.clientWidth > 800)
	return 0.5
  else
	return 1 
}

function perc(px){
  return px / document.documentElement.clientWidth
}

function px(perc){
  return perc * document.documentElement.clientWidth
}

function round(px_val){
  const px50 = px(0.5)
  return Math.round(px_val / px50) * px50
}

function animate(from, to, time, func){
    const start = Date.now()
    const dif = to - from

    const interval = setInterval(function(){
      const perc = (Date.now() - start) / time
      if (perc >= 1){
        clearInterval(interval)
        func(to)
        refreshArrows()
      }else{
        func(from + (dif * perc))
      }
    })
}

function refreshArrows(){
  if (photoHandler.scrollLeft == 0)
    arrowLeft.classList.add("hidden")
  else
    arrowLeft.classList.remove("hidden")

  if (Math.round(photoHandler.scrollLeft - (photoHandler.scrollWidth-photoHandler.clientWidth)) == 0)
    arrowRight.classList.add("hidden")
  else
    arrowRight.classList.remove("hidden")
}

function clickLeft(e){
  const from = photoHandler.scrollLeft
  const to = round(px(perc(photoHandler.scrollLeft) - shift()))

  animate(from, to, 300, function(x){photoHandler.scrollLeft = x})
}

function clickRight(e){
  const from = photoHandler.scrollLeft
  const to = round(px(perc(photoHandler.scrollLeft) + shift()))

  animate(from, to, 300, function(x){photoHandler.scrollLeft = x})
}

arrowLeft.addEventListener("click", clickLeft)
arrowRight.addEventListener("click", clickRight)
