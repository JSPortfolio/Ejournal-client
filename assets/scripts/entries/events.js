'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')

const ui = require('./ui.js')

const store = require('../store.js')

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

const onViewEntry = function (event) {
  event.preventDefault()

  store.viewItemID = $(this).data('id')

  console.log(store.viewItemID)

  api.viewEntry(store.viewItemID)
    .then(ui.viewSingleEntrySuccess)

    .catch(ui.failure)
}
module.exports = {
  onGetEntries,

  onGetUserEntries,

  onViewEntry
}
