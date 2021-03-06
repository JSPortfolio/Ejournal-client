'use strict'

const store = require('../store.js')

// SIGNUP SUCCESS/FAILURE: user interface functions related to signing up
const signUpSuccess = function (data) {

  $('#sign-up :text').val('')
  $('#sign-up :password').val('')

  console.log('SIGNED UP!')

  // put in handlebars
}

const signUpFail = function (error) {

  $('#sign-up :text').val('')
  $('#sign-up :password').val('')

  //  $('#message').html('<h1>ERROR! FAILURE TO SIGN UP</h1>')
  //  $('#message').removeClass()
  //  $('#message').addClass('failure')

  console.log('FAILURE TO SIGN UP: ', error)
}

// SIGNIN SUCCESS/FAILURE: user interace functions related to signing in
const signInSuccess = function (data) {

  store.user = data.user

  $('#sign-in :text').val('')
  $('#sign-in :password').val('')

  $('#entrance-view').hide()
  $('#user-view').show()

//  $('#message').html('<h1>SIGN-IN SUCCESSFUL!</h1>')
//  $('#message').removeClass()
//  $('#message').addClass('success')
}

const signInFail = function (error) {

  $('#sign-in :text').val('')
  $('#sign-in :password').val('')

  //  $('#message').html('<h1>ERROR! FAILURE TO SIGN IN!</h1>')
  //  $('#message').removeClass()
  //  $('#message').addClass('failure')

  console.log('FAILUE TO SIGN IN: ', error)
}

// CHANGEPASSWORD SUCCESS/FAILURE: user interface functions related to changing password
const changePasswordSuccess = function () {

  $('#change-password :password').val('')

//  $('#message').html('<h1>USER PASSWORD CHANGED!</h1>')
//  $('#message').removeClass()
//  $('#message').addClass('success')

  console.log('CHANGED PASSWORD')
}

const changePasswordFail = function (error) {

  $('#change-password :password').val('')

  //  $('#message').html('<h1>USER PASSWORD NOT CHANGED!</h1>')
  //  $('#message').removeClass()
  //  $('#message').addClass('failure')

  console.log('FAILURE TO CHANGE PASSWORD: ', error)
}

// SIGNOUT SUCCESS/FAILURE: user interface functions related to signing out
const signOutSuccess = function () {

  store.user = ''

  $('#user-view').hide()
  $('#entrance-view').show()

  console.log('SIGNED OUT')

//  $('#message').html('<h1>SIGNOUT SUCCESSFUL!</h1>')
//  $('#message').removeClass()
//  $('#message').addClass('success')
}

const signOutFail = function (error) {
//  $('#message').html('<h1>ERROR! USER NOT SIGNED OUT!</h1>')
//  $('#message').removeClass()
//  $('#message').addClass('failure')

  console.log('FAILURE TO SIGN OUT: ', error)
}

module.exports = {
  signUpSuccess,

  signUpFail,

  signInSuccess,

  signInFail,

  changePasswordSuccess,

  changePasswordFail,

  signOutSuccess,

  signOutFail
}
