'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')

const ui = require('./ui.js')

//  ONSIGNUP: function to call api and ui functions related
//  to signing up feature
const onSignUp = function (event) {
  event.preventDefault()

  api.signUp(getFormFields(event.target))

    .then(ui.signUpSuccess)

    .catch(ui.signUpFail)
}

// ONSIGNIN: function to call api and ui function related
// to signing in feature
const onSignIn = function (event) {
  event.preventDefault()

  api.signIn(getFormFields(event.target))

    .then(ui.signInSuccess)

    .catch(ui.signInFail)
}

// ONCHANGEPASSWORD: function to call api and
// ui functions related to changing user's password
const onChangePassword = function (event) {
  event.preventDefault()

  api.changePassword(getFormFields(event.target))

    .then(ui.changePasswordSuccess)

    .catch(ui.changePasswordFail)
}

// ONSIGNOUT: function to call api and ui
// functions related to logging user out
const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()

    .then(ui.signOutSuccess)

    .catch(ui.signOutSuccess)
}

module.exports = {
  onSignUp,

  onSignIn,

  onChangePassword,

  onSignOut
}
