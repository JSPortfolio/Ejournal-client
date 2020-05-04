'use strict'

const store = require('../store.js')

const entryList = require('../templates/entry-list.handlebars')

const userEntryList = require('../templates/entry-personal-list.handlebars')

const singleEntry = require('../templates/entry-single.handlebars')

const getEntriesSuccess = function (data) {
  const showEntries = entryList({entries: data.entries})

  $('#entry-view').html(showEntries)

  console.log('ENTRIES RETRIEVED')
}

const getUserEntriesSuccess = function (data) {
  const showUserEntries = userEntryList({entries: data.entries})

  $('#entry-view').html(showUserEntries)

  console.log(data)

  console.log('PERSONAL ENTRIES RETRIEVED')
}

const viewSingleEntrySuccess = function (data) {

  const showSingleEntry = singleEntry({entry: data.entry})

  $('#entry-view').html(showSingleEntry)

  console.log('SINGLE ENTRY VIEW')
}

module.exports = {
  getEntriesSuccess,

  getUserEntriesSuccess,

  viewSingleEntrySuccess
}
