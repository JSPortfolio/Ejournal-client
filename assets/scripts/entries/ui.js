'use strict'

const store = require('../store.js')

const entryList = require('../templates/entry-list.handlebars')

const getEntriesSucces = function (data) {

  const showEntries = entryList({entries: data.entries})

  $('#entry-view').html(showEntries)

}

module.exports = {
  getEntriesSucces
}
