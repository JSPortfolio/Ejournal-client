'use strict'

const authenticationEvents = require('./authentication/events.js')

const entryEvents = require('./entries/events.js')


// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {

  // VIEW PAGE STARTING EVENTS
  $('#entrance-view').show()
  $('#user-view').hide()

  // USER CREDENTIALS EVENT LISTENERS
  $('#sign-up').on('submit', authenticationEvents.onSignUp)
  $('#sign-in').on('submit', authenticationEvents.onSignIn)
  $('#change-password').on('submit', authenticationEvents.onChangePassword)
  $('#sign-out').on('submit', authenticationEvents.onSignOut)

  // VIEW ENTRIES EVENT LISTENERS
  $('#view-all').on('click', entryEvents.onGetEntries)
  $('#view-user-entries').on('click', entryEvents.onGetUserEntries)
  $('#entry-view').on('click', '.view-entry', entryEvents.onViewEntry)

})
