const fs = require("fs")

global.APIs = { // API Prefix

  // nama: 'https://website'

  bx: 'https://bx-hunter.herokuapp.com',

  dhnjing: 'https://dhnjing.xyz',

  kotzyy: 'https://api.kotzyy.xyz',

  hardianto: 'https://hardianto-chan.herokuapp.com',

  jonaz: 'https://jonaz-api-v2.herokuapp.com',

  neoxr: 'https://neoxr-api.herokuapp.com',

  nrtm: 'https://nurutomo.herokuapp.com',

  pencarikode: 'https://pencarikode.xyz',

  xteam: 'https://api.xteam.xyz',

  zahir: 'https://zahirr-web.herokuapp.com',

  zekais: 'http://zekais-api.herokuapp.com',

  zeks: 'https://api.zeks.xyz',

}

global.APIKeys = { // APIKey nya disini

  // 'https://website': 'apikey'

  'https://api.kotzyy.xyz': 'KotzKey', //Free Register Apikey https://kotzyy.xyz/users/register

  'https://bx-hunter.herokuapp.com': 'Ikyy69',

  'https://hardianto-chan.herokuapp.com': 'hardianto',

  'https://neoxr-api.herokuapp.com': 'yntkts',

  'https://pencarikode.xyz': 'pais',

  'https://api.xteam.xyz': 'apikeymu',

  'https://zahirr-web.herokuapp.com': 'zahirgans',

  'https://api.zeks.xyz': 'apivinz',

}

userbot = {

Prem: JSON.parse(fs.readFileSync('./db/premium.json')),

 owner:  [ "94753943957", "15877941582"],

  MONGO_URI: "mongodb+srv://zanDb:veth0581@cluster0.eyx0e.mongodb.net/<mydb>?retryWrites=true&w=majority",

   mess: {

   wait: "WAIT 🧘‍♂️...",

   api: "Maaf terjadi kesalahan", 

   success: "DONE 🙂",

   SudahAktif: "DONE🙂🧘‍♂️.",

   SudahNonaktif: "AFTER OK 🙂.",

   KhususGrup: "GROUP ONLY 🙂",

   KhususPribadi: "INBOX ONLY 🌝",

   GrupAdmin: "ADMIN ONLY 🙂",

   BotAdmin: "බොට් හට ඇඩ්මින් අවශ්‍යය වේ 😒",

   KhususOwner: "owner only",

   KhususPremium: "VIP MEMBERS ONLY 🙂"

   },

   error: {

   Iv: "Link එක වැරදී 😒",

   tombol: "Silahkam Masukkan prameter on/off",

   forget: "😒."

   },

   simple: {

   expiredQr: "[!] SCAN THIS 😒 ",

   credentials: "updated!",

   opendocs: "open docs is complete!", 

   readBaileys: "DONE baileys",

   connecting: "connecting🧘‍♂️",

   refresh: "RESTART😮‍💨\n"

   },

   prefix: ["."],

   gexp: 50,

   limit: 100,

   eror: "Eror",

   waits: "WAIT🧘‍♂️",

   butmag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHDLrd0_DwHnJfuZ_pRMOAbLi3-ot-NxyPA&usqp=CAU',

   packname: "BOT KINGDOM ❤️",

   author: '@_BOTKINGDOMTeam',

    setting: {

    admin: "only admin",

    group: "only group",

    owner: "owner only pack",

    jadibot: "jadibot only",

    botadmin: "bot harus menjadi admin",

    daftar: "belum terdaftar silahkan ketik prefix + verify ",

    nsfw: "FITUR BELUM DIAKTIFKAN!"

    }

}

module.exports = userbot
