import Inputmask from "inputmask";

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	maskForInput('+7 (---)--- -- --', 'main-form-tel')
})

const maskForInput = (mask, id) => {
	const selector = document.getElementById(id)

	if( ! selector ) return

	Inputmask({ 'mask': mask, 'placeholder': '-', }).mask(selector)
}