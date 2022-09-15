const listContacts = require("./listContacts");
const updateContact = require("./updateContact");

async function removeContact(contactId) {
  const allContacts = await listContacts();
  const idx = allContacts.findIndex(
    (item) => item.id.toString() === contactId.toString()
  );
  if (idx === -1) {
    return null;
  }
  const [delContact] = allContacts.splice(idx, 1);
  updateContact(allContacts);
  return delContact;
}

module.exports = removeContact;
