//contact.js
const fs = require("fs");
const validator = require("validator");

// Membuat folder jika belum ada
const lokasiDirr = "./data";
if (!fs.existsSync(lokasiDirr)) {
  fs.mkdirSync(lokasiDirr);
}

//membuat file contacts.json jika belum ada
const filePath = `./data/contacts.json`;
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]", "utf-8");
}

//menyimpan data ke JSON
const saveContact = (nama, mobile, email) => {
  // Membuat objek "contact" dengan data yang sudah dikumpulkan sebelumnya.
  const contact = { nama, mobile, email };

  //validasi email user
  if (email) {
    if (!validator.isEmail(email)) {
      console.log("Email yang dimasukan Invalid!!");
      return false;
    }
  }

  // validasi nomor handphone user
  if (mobile) {
    if (!validator.isMobilePhone(mobile, "id-ID")) {
      console.log("Nomor yang dimasukan Invalid!!");
      return false;
    }
  }
  //Membaca file JSON
  const file = fs.readFileSync(filePath, "utf8");
  const contacts = JSON.parse(file);

  //menambah kontak baru
  contacts.push(contact);

  //menyimpan data yang sudah diperbarui
  fs.writeFileSync(filePath, JSON.stringify(contacts));
  console.log("Terima kasih, data sudah tersimpan!!");
};

module.exports = { saveContact };
