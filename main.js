const DIRECTIONS = {
  down: 'down',
  up: 'up'
}

function init () {
  const marqueeTarget = document.getElementById('marquee-target')
  const marqueeInstance = window.Marquee3k.init(marqueeTarget)

  let previousScrollY = window.scrollY
  window.addEventListener('scroll', function () {
    const direction = window.scrollY > previousScrollY ? DIRECTIONS.down : DIRECTIONS.up
    previousScrollY = window.scrollY

    marqueeInstance.reverse = direction === DIRECTIONS.down

    console.log(direction)

    marqueeInstance.animate()




  })
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
