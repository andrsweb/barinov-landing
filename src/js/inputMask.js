import Inputmask from "inputmask";

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	maskForInput('+7 (999)999 99 99', 'main-form-tel')
	maskForInput('+7 (999)999 99 99', 'load-tel')
})

const maskForInput = (mask, id) => {
	const selector = document.getElementById(id)

	if( ! selector ) return

	Inputmask({ 'mask': mask, 'placeholder': '-', }).mask(selector)
}