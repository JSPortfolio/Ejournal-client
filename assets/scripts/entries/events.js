'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')

const ui = require('./ui.js')

const onGetEntries = function (event) {
  event.preventDefault()

  api.getEntries()

    .then(ui.getEntriesSucces)

    .catch(ui.failure)
}

module.exports = {
  onGetEntries
}
