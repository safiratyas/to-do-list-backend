# TO DO LIST BACKEND

Person Behind The Scene👨‍👧‍👧 :

```
Safira Tyas Wandita 👩
```
## How it works
Kindly check below to know how to install and use this repository. I also put my Heroku link which is connect with my Github.

### Install Project
```sh
npm install
```
### Configurating Sequelize
```sh
npx sequelize init
```
### Create Database Using Sequelize
```sh
npx sequelize db:create
```
### Migrate Database Using Sequelize
```sh
npx sequelize db:migrate
```
### Seed Database Using Sequelize
```sh
npx sequelize db:seed:all
```

## 🚀Features

Users :
```
✔️Post Login (with Token)
✔️Post Register
✔️Get Whoami (with Token)
✔️Put Detail User (with Token)
✔️Get User ID (with Token)
✔️Get All Users (with Token)
```
List :
```
✔️Post Create List (with Token)
✔️Update List (with Token)
✔️Delete List (with Token)
✔️Get List By ID (with Token)
✔️Get All Lists(with Token)
```
### Check this link below for the heroku deploy

Heroku Link: https://checklist-todolist.herokuapp.com/documentation/

## Apa Kegunaan JSON pada REST API?
```sh
JSON (JavaScript Object Notation) merupakan bagian (subset) dari Javascript yang digunakan untuk pertukaran dan penyimpanan data. 

REST API membentuk back-end untuk aplikasi mobile dan web. Ketika mengembangkan aplikasi, kadang-kadang kita tidak memiliki REST API yang siap digunakan untuk tujuan pengembangan. Untuk melihat mobile atau web app beraksi, kita memerlukan server yang melempar beberapa data JSON dummy.

Saat itulah REST API tiruan berfungsi. json-server menyediakan fungsi untuk mendirikan sebuah server REST API tiruan.
```

## Bagaimana REST API Bekerja?

```sh
REST merupakan singkatan dari Representational State Transfer. Yang merupakan gaya arsitektur untuk merancang aplikasi yang saling terhubung. Dengan menggunakan HTTP sederhana untuk memungkinkan komunikasi antar mesin. Jadi, alih-alih menggunakan URL untuk memanipulasi beberapa informasi pengguna, REST mengirimkan permintaan HTTP seperti GET, POST, DELETE, dll ke URL untuk memanipulasi data.

Pada dasarnya rest api memiliki cara kerja yang dimulai oleh rest client yang mana bagian tersebut akan melakukan akses data atau resource pada rest server.

Sementara itu, masing-masing dari resource tersebut dibedakan berdasarkan pada Global ID atau URIs yaitu Universal Resource Identifier. Karena itulah data yang diberikan oleh rest server itu tadi pun dapat berupa format text, XML, atau bahkan JSON. 
```