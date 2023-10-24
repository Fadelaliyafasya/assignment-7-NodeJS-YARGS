//main.js

const contacts = require("./contact");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "add new contact",
  builder: {
    nama: {
      describe: "Contact Name",
      demandOption: true,
      type: "string",
    },

    email: {
      describe: "Contact Email",
      demandOption: false,
      type: "string",
    },

    mobile: {
      describe: "Contact mobile phone number",
      demandOption: true,
      type: "string",
    },
  },

  handler(argv) {
    contacts.saveContact(argv.nama, argv.mobile, argv.email);
  },
});

yargs.parse();
