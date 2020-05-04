const store = require('../store')
const config = require('../config')

function getEntries () {
  return $.ajax({
    url: config.apiUrl + '/entries',
    method: 'GET'
  })
}

function viewEntry (id) {
  return $.ajax({
    url: config.apiUrl + '/entries/' + id,
    method: 'GET'
  })
}

function createEntry (data) {
  return $.ajax({
    url: config.apiUrl + '/entries',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

function updateEntry (data, id) {
  return $.ajax({
    url: config.apiUrl + '/entries/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

function deleteEntry (id) {
  return $.ajax({
    url: config.apiUrl + '/entries/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

function getUserEntries (data) {
  return $.ajax({
    url: config.apiUrl + '/entries_pass/',

    method: 'GET',

    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getEntries,
  viewEntry,
  createEntry,
  updateEntry,
  deleteEntry,
  getUserEntries
}
