'use strict'

const store = require('../store.js')

const entryList = require('../templates/entry-list.handlebars')

const userEntryList = require('../templates/entry-personal-list.handlebars')

const getEntriesSuccess = function (data) {
  const showEntries = entryList({entries: data.entries})

  $('#entry-view').html()

  $('#entry-view').html(showEntries)

  console.log('ENTRIES RETRIEVED')
}

const getUserEntriesSuccess = function (data) {
  const showUserEntries = userEntryList({entries: data.entries})

  $('#entry-view').html(showUserEntries)

  console.log(data)

  console.log('PERSONAL ENTRIES RETRIEVED')
}

module.exports = {
  getEntriesSuccess,

  getUserEntriesSuccess
}
