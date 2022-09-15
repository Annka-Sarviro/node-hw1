const listContacts = require("./listContacts");
const { v4 } = require("uuid");
const updateContact = require("./updateContact");

async function addContact(name, email, phone) {
  const allContacts = await listContacts();
  const newContact = { id: v4(), name, email, phone };
  allContacts.push(newContact);
  updateContact(allContacts);
  return newContact;
}

module.exports = addContact;
