const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const removeContact = require("./removeContact");
const addContact = require("./addContact");

const contactsOperation = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
module.exports = contactsOperation;
