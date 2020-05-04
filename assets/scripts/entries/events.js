'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')

const ui = require('./ui.js')

const onGetEntries = function (event) {
  event.preventDefault()

  console.log('1')

  api.getEntries()

    .then(ui.getEntriesSuccess)

    .catch(ui.failure)
}

const onGetUserEntries = function (event) {
  event.preventDefault()

  api.getUserEntries()

    .then(ui.getUserEntriesSuccess)

    .catch(ui.failure)
}

module.exports = {
  onGetEntries,

  onGetUserEntries
}
