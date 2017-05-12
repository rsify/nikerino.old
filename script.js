;(function () {
	const $name = document.querySelector('#lead .name')
	const $before = document.querySelector('#lead .name .before')
	const $after = document.querySelector('#lead .name .after')

	const buttons = {
		github: {
			before: 'github.com/'
		},
		mail: {
			after: '@nikerino.com'
		},
		keybase: {
			before: 'keybase.io/'
		},
		steam: {
			before: '/id/'
		}
	}

	for (var button in buttons) {
		const data = buttons[button]
		const $el = document.querySelector('#lead .buttons .' + button)

		// mouseenter mouseleave
		$el.addEventListener('mouseenter', function () {
			const els = {
				before: $before,
				after: $after
			}

			;['before', 'after'].forEach(function (x) {
				els[x].textContent = data[x] || ''

				if (els[x].textContent !== '') {
					els[x].classList.add('animate-fade-in')

					setTimeout(function () {
						els[x].classList.remove('animate-fade-in')
					}, 300)
				}
			})
		})

		$el.addEventListener('mouseleave', function () {
			$before.classList.remove('animate-fade-in')
			$after.classList.remove('animate-fade-in')

			$before.textContent = ''
			$after.textContent = ''
		})
	}

	// credit: Robert Penner http://robertpenner.com/easing/
	function easeInOutQuad (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	}

	const $ups = document.querySelectorAll('a.scroll-up')
	$ups.forEach(function (x) {
		x.addEventListener('click', function (e) {
			e.preventDefault()
			const b = window.scrollY
			const c = -window.scrollY
			const d = 1500
			let s = null

			const f = function () {
				window.requestAnimationFrame(function (t) {
					if (s === null) s = t
					window.scrollTo(0, easeInOutQuad(null, t - s, b, c, d))
					if ((t - s) < d) f()
				})
			}

			f()
		})
	})
})()
