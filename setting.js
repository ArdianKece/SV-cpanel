/*
    CREDIST !!!
        Hallo Sis, here are the names who have been registered in creating/helping in the development of this script

        *BIG TAHNKS TO*

        > Hw Mods [ Base ]
        > Rerez Hosting [ Developer ]
        > HyuuXyz [My Team]
        > KyuuRzy [ My Team ]
        > CeliaOffc [ My Team]
        > DiiOffc [ My Team ]

        d above is developer
        
    SAYA SANGAT BERTERIMA KASIH JIKA KALIAN MEMBIARKAN CREDIT INI TANMPA MENGHAPUS ATAU MENGGANTI NYA 
    TOLONG HARGAI YAA 

*/

const fs = require('fs')
const chalk = require('chalk')
//=================================================//
// System
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'REREZZ HOSTING' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.owner = ['6285216955233'] // ubah aja pake nomor lu
global.botname = 'IZANAMI - MD' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'Rezz session' //Gausah Juga
global.idchannel = '120363289337334615@newsletter'
global.linkgc = 'https://whatsapp.com/channel/0029Vacg4bA17Emy2r4cgc0M'
global.thumbnail = 'https://telegra.ph/file/24b24857cf823991a2c5f.jpg'
global.foter1 = 'IZANAMI - MD'
global.foter2 = 'IZABAMI - MD BY REREZ'
global.autobio = false // AutoBio
global.autoread = false // ReadChat 
global.Ghost = '`'
global.packname = 'IZANAMI'
global.author = 'REREZ HOST'
global.skizo = "REZZ HOST"
global.wm = "REREZ HOSTING"
//=================================================//
global.onlypc = false
global.onlygc = false
//=================================================//
//cpanel
global.domain = "https://punzz.my-website.my.id"
global.apikey = "ptla_PhqlA6zjVZZDYEtJe70HxJOpeA8ZIA93mleD15etrb0"
global.capikey = "ptlc_itlB3tJyHbl"
global.egg = "15"
global.loc = "1"

//Send Pay
global.dana = "-"
global.ovo = "-"
global.gopay = "-"
global.qris = "https://telegra.ph/file/e30b7d90487c97a366534.jpg"

//limit & balance
global.limitawal = 10
global.balanceawal = 10000

global.wlcm = []
global.wlcmm = []

global.delaypushkontak = 5500
global.delayjpm = 5500

// DATABASE GAME
global.family100 = {};
global.suit = {};
global.tictactoe = {};

// CUMAN SIMBOL MENU UBAH AJA SESUKA KALIAN
global.atas = '┏━━━━━━━━━━━━━━━━'
global.tengah = '┣━━━━━━━━━━━━━━━━'
global.bawah = '┗━━━━━━━━━━━━━━━━'
global.garis = '┃'
//mess
global.mess = {
    premium: ('ᴀᴋꜱᴇꜱ ᴅɪ ᴛᴏʟᴀᴋ! ᴋʜᴜꜱᴜꜱ ᴘʀᴇᴍɪᴜᴍ!'),
    done: ('ᴘʀosᴇs...'),
    owner: ('ᴀᴋꜱᴇꜱ ᴅɪ ᴛᴏʟᴀᴋ! ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ!'),
    wait: ('ᴘʀosᴇs...!'),
    group: 'κнusus ԍʀouᴘ cнᴀт!',
    admin: 'κнusus ᴀᴅмιɴ ԍʀouᴘ!',
    botAdmin: 'ʙoт нᴀʀus ᴀᴅмιɴ!',
    linkvalid: 'ʟιɴκ тᴀuтᴀɴ тιᴅᴀκ vᴀʟιᴅ!', 
    error: 'ᴇʀoʀ тᴇʀנᴀᴅι κᴇsᴀʟᴀнᴀɴ!',
    limit: `ʟιмιт κᴀмu suᴅᴀн нᴀʙιs!\nκᴇтικ .ʙuʏʟιмιт uɴтuκ мᴇмʙᴇʟι ʟιмιт`,
    regis: (`κᴀмu ʙᴇʟoм тᴇʀᴅᴀғтᴀʀ\nsιʟᴀнκᴀɴ ᴅᴀғтᴀʀ ᴅᴇɴԍᴀɴ cᴀʀᴀ .ᴅᴀғтᴀʀ`),
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})