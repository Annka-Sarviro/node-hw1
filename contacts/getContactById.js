const listContacts = require("./listContacts");

async function getContactById(contactId) {
  const allContacts = await listContacts();
  const contact = allContacts.find((item) => parseInt(item.id) === contactId);
  if (!contact) {
    return null;
  }
  return contact;
}

module.exports = getContactById;
