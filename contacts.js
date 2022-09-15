const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const allContacts = JSON.parse(data);
  return allContacts;
}

async function getContactById(contactId) {
  const allContacts = await listContacts();
  const contact = allContacts.find((item) => parseInt(item.id) === contactId);
  if (!contact) {
    return null;
  }
  return contact;
}

async function removeContact(contactId) {
  const allContacts = await listContacts();
  const idx = allContacts.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  const [delContact] = allContacts.splice(idx, 1);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts));
  return delContact;
}

async function addContact(name, email, phone) {
  const allContacts = await listContacts();
  const newContact = { id: v4(), name, email, phone };
  allContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts));
  return newContact;
}

const contactsOperation = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
module.exports = contactsOperation;
