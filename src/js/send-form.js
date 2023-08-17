document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	submitForm( '.main-form' )
	submitForm( '.load-form' )
	submitForm( '.confirm-form' )
} )

const submitForm = ( selector ) => {
	const forms	= document.querySelectorAll( selector )
	const popup = document.querySelector('.confirm-popup')

	if( ! forms.length ) return

	forms.forEach( form => {
		form.addEventListener( 'submit', e => {
			e.preventDefault()

			const
				request			= new XMLHttpRequest(),
				formData		= new FormData( form ),
				formType		= form.dataset.type,
				isRedirect	= form.dataset.thanksRedirect,
				isConfirm	= form.dataset.confirm

			formData.append( 'func', formType )
			request.open( 'post', 'send-form.php', true )
			request.responseType = 'json'

			request.addEventListener( 'load', () => {
				// All is good.
				if( request.status === 200 ){
					// Success response.
					if( request.response.success ){
						form.classList.add( 'success' )
						form.classList.remove( 'error' )
						form.reset()
						if(isConfirm) popup.classList.add('showed')
						if( isRedirect ) setTimeout(() => location.href = 'thank-you.html', 1000)
					}	else {	// We've caught an error.
						return
					}
				}
			} )

			request.send( formData )
		} )
	} )
}