'use strict';

const {
  Op
} = require("sequelize");
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */

const names = [
  "Ahmad Yuneda Alfajr",
  "Ahmad Dendy Prasongko Putra",
  "Ahmad Ilham",
  "Aulia Ardi Utami",
  "Deka Mersandi",
  "Devi Indriyana Putri",
  "Ghifari Astaudi` Ukumullah",
  "I Gede Ariawan Eka Putra",
  "Ida Bagus Gede Suprapta",
  "Mahardhika Chandra Nur Ikhsan",
  "Maria Natalia",
  "Muhammad Nur Fadli",
  "Narantyo Maulana Adhi Nugraha",
  "Nilam Cahya",
  "Nur Aini Lailla Asri",
  "Ramadhan Yudha Pratama",
  "Rizki Oktavianus",
  "Safira Tyas Wandita",
  "Tito Anggoro",
  "Tubagus Muhammad Eza Rizqi",
  "Wahyu Priyo Atmaja",
  "Yudha Gana Prasetyo Wibowo"
];

module.exports = {
  async up(queryInterface, Sequelize) {
    const password = "12345678"
    const encryptedPassword = bcrypt.hashSync(password, 10)

    const users = names.map((name) => {
      const splitName = name.split(' ');
      let emailBuild = splitName[0] + splitName[splitName.length - 1];

      return ({
        name,
        email: `${emailBuild.toLowerCase()}@gmail.com`,
        password: encryptedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    })

    await queryInterface.bulkInsert('Users', users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {
      name: {
        [Op.in]: names
      }
    }, {})
  }
};