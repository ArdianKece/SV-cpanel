/*
    CREDIST !!!
        *BIG TAHNKS TO*

        > Hw Mods [ Base ]
        > Rerez Hosting [ Developer ]
        > HyuuXyz [My Team]
        > KyuuRzy [ My Team ]
        > CeliaOffc [ My Team]
        > DiiOffc [ My Team ]
    SAYA SANGAT BERTERIMA KASIH JIKA KALIAN MEMBIARKAN CREDIT INI TANMPA MENGHAPUS ATAU MENGGANTI NYA 
    TOLONG HARGAI YAA 
    BASE SAMA KAYA KEMARENT INDEX GW ENC KALO LU UBAH PAKE YANG KEMAREN EROR JUGA WAHAHAHA
*/
process.on('uncaughtException', console.error)
require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
const fs = require('fs')
const cron = require('node-cron')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
const fsx = require('fs-extra')
const dns = require('dns');
const FormData = require('form-data')
const gtts = require('node-gtts')
const ytdl = require("ytdl-core")
const cheerio = require('cheerio');
const ms = require("ms");
const crypto = require('crypto')
const https = require('https')
const tkApi = require('@tobyg74/tiktok-api-dl')
const { URL_REGEX } = require('@whiskeysockets/baileys')
const { fileTypeFromBuffer } = require('file-type')
const PhoneNumber = require('awesome-phonenumber')
const { Pixiv } = require('@ibaraki-douji/pixivts')
const pixiv = new Pixiv()
const bingi = require('bing-scraper')
const phd = require('@justalk/pornhub-api')
const xfar = require('xfarr-api')
const dylux = require('api-dylux')
const nou = require("node-os-utils");
const dhn = require('dhn-api')
const g4f = require("g4f")
const path = require('path')
const { pipeline } = require('stream')
const { promisify } = require("util")
const jimp = require('jimp')
const kotz = require("kotz-api");
const zsExtract = require('zs-extract')
const acrcloud = require('acrcloud')
const { ocrSpace } = require('ocr-space-api-wrapper')
const mann = require('d-scrape')
const content = JSON.stringify(m.message)
const isQuotedViewonce = m.quoted ? content.includes('viewOnceMessage') ? true : false : true
const { youtubedl, youtubedl2 } = require('@bochilteam/scraper-sosmed')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const maker = require('mumaker')
const yts = require("yt-search")
const jsobfus = require('javascript-obfuscator')
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const { Configuration, OpenAIApi } = require('openai')
const { exec, spawn, execSync } = require("child_process")
const { addExif } = require('./lib/exif')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, formatp, parseMention, getRandom, getGroupAdmins,generateProfilePicture, toRupiah, shorturl, enumGetKey, sort,pickRandom, toNumber, randomNumber } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const { 
getRegisteredRandomId, 
addRegisteredUser, 
createSerial, 
checkRegisteredUser 
} = require('./lib/register.js')
//=================================================//
module.exports = RezzHost = async (RezzHost, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? appenTextMessage(JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) : (m.mtype == 'templateButtonReplyMessage') ? appenTextMessage(m.msg.selectedId, chatUpdate) : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
 async function appenTextMessage(text, chatUpdate) {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: RezzHost.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, RezzHost.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'}
RezzHost.ev.emit('messages.upsert', msg)}
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : ''
//=================================================//
const Styles = (text, style = 1) => {
var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
};
var replacer = [];
xStr.map((v, i) =>
replacer.push({
original: v,
convert: yStr[style].split('')[i]
})
);
var str = text.toLowerCase().split('');
var output = [];
str.map((v) => {
const find = replacer.find((x) => x.original == v);
find ? output.push(find.convert) : output.push(v);
});
return output.join('');
};
const pushname = m.pushName || "No Name"
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const botNumber = await RezzHost.decodeJid(RezzHost.user.id)
const isRegistered = checkRegisteredUser(m.sender)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await RezzHost.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const jangan = m.isGroup ? ntilink.includes(m.chat) : false	
const welcm = m.isGroup ? wlcm.includes(from) : false
const chat = m.isGroup?[m.chat] : false
const qmsg = (quoted.msg || quoted)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const qtod = m.quoted? "true":"false"
//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Makassar').format('dddd, DD MMMM YYYY')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')


const time2 = moment().tz('Asia/Makassar').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🏙️'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang 🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌇'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🌤️'
}
if(time2 < "10:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Subuh 🌆'
}
if(time2 < "03:00:00"){
var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}
//=================================================//
const { bard } = require('./lib/bard')
RezzHost.autoshalat = RezzHost.autoshalat ? RezzHost.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? RezzHost.user.id : m.sender
	let id = m.chat 
    if(id in RezzHost.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '14:49',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Yogyakarta dan sekitarnya._`
    RezzHost.autoshalat[id] = [
    reply(caption),
    setTimeout(async () => {
    delete RezzHost.autoshalat[m.chat]
    }, 57000)
    ]}}
//BATAS
if (global.onlypc) {
        	if (command&!m.isGroup){
	         return reply(`IZANAMI - MD dalam mode private, gunakan di private chat!`)
	     }
	}
if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await RezzHost.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return RezzHost.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return RezzHost.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return RezzHost.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await RezzHost.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
RezzHost.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
RezzHost.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}
//=================================================//
if (!RezzHost.public) {
if (!m.key.fromMe) return
}
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
RezzHost.sendPresenceUpdate('available', m.chat)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m REREZZ HOSTING \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
            }
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: RezzHost.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, RezzHost.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
RezzHost.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}}
async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await RezzHost.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
try {
ppuser = await RezzHost.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isCreator ? 1000 : limitawal
let balanceUser = isCreator ? 10000 : balanceawal
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.balance)) user.balance = balanceUser
if (!isNumber(user.limit)) user.limit = limitUser
if (!('premium' in user)) user.premium = false
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!('claim' in user)) user.premium = 1
} else global.db.data.users[m.sender] = {
name: pushname,
limit: limitUser,
balance: balanceUser,
premium: false,
afkTime: -1,
afkReason: '',
limit: limitUser,
claim: 1,
}
} catch (err) {
console.log(err)
}
let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (autobio) {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
await RezzHost.updateProfileStatus(`I am ${botname} | Aktif Selama ${uptime} ⏳ | Mode : ${RezzHost.public ? 'Public-Mode' : 'Self-Mode'}`).catch(_ => _)
}
if (autoread) {
RezzHost.readMessages([m.key])
}
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: false,
autoread: false
}
if(!('hadiah' in db.data.settings)) db.data.settings.hadiah = []
if(!('hadiahkadaluwarsa' in db.data.settings)) db.data.settings.hadiahkadaluwarsa = []
if(!('claimprem' in db.data.settings)) db.data.settings.claimprem = []
if(!('claimpremkadaluwarsa' in db.data.settings)) db.data.settings.claimpremkadaluwarsa = []            
if (m?.isGroup && chat) {
if (!('welcome' in chat)) chat.welcome = true
if (!('sWelcome' in chat)) chat.sWelcome = ''
if (!isNumber(chat.cleartime)) chat.clearTime = 0
} else if (m?.isGroup) global.db.data.chats[m.chat] = {
sWelcome: '',
welcome: true,
clearTime: 0
}
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('RezzHost' in chats)) chats.RezzHost = false
} else global.db.data.chats[m.chat] = {
mute: false,
RezzHost: false
}
//================== [ ALL FUNCTION ] ==================//
let limitnya = db.data.users[m?.sender].limit
let balancenya = db.data.users[m?.sender].balance
const isPremium = db.data.users[m?.sender].premium == true ? true : m?.sender == owner ? true : false
async function uselimit() {
if (isCreator) return
db.data.users[m?.sender].limit -= 1}
async function igdl2(url) {
let res = await axios("https://indown.io/");
let _$ = cheerio.load(res.data);
let referer = _$("input[name=referer]").val();
let locale = _$("input[name=locale]").val();
let _token = _$("input[name=_token]").val();
let { data } = await axios.post(
"https://indown.io/download",
new URLSearchParams({
link: url,
referer,
locale,
_token,
}),{
headers: {
cookie: res.headers["set-cookie"].join("; "),
},});
let $ = cheerio.load(data);
let result = [];
let __$ = cheerio.load($("#result").html());
__$("video").each(function () {
let $$ = $(this);
result.push({
type: "video",
thumbnail: $$.attr("poster"),
url: $$.find("source").attr("src"),});});
__$("img").each(function () {
let $$ = $(this);
result.push({
type: "image",
url: $$.attr("src"),
});
});
return result;
}
Array.prototype.rendem = function rendem() {
return this[Math.floor(Math.random() * this.length)];
}
function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function formatter(value) {
return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function calculatePPN(value) {
return value * 0.1;
}
function removeItem(array, item) {
return array.filter(elem => !(elem.jid === item.jid && elem.state === item.state));
}
cron.schedule('00 00 * * *', () => {
let user = Object.keys(global.db.data.users)
for (let jid of user) {
global.db.data.users[jid].claim = 1
if (global.db.data.users[jid].balance < 10000 && global.db.data.users[jid].limit < 1) {
global.db.data.users[jid].limit = limitawal
global.db.data.users[jid].balance = balanceawal
}}}, {
scheduled: true,
timezone: "Asia/Makassar"
})
const totalFitur = () =>{
var mytext = fs.readFileSync("./Rezz Case.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
//=================================================//
switch(command) {
case "menu": {
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let teks = `
Hello, @${m.sender.replace(/@.+/g, '')}\n${ucapanWaktu}\n
${atas}
${garis}乂 Bot Information 乂 
${tengah}
${garis} *Bot Name :* ${botname}
${garis} *Name Owner :* ${ownername}
${garis} *Tanggal:* ${tanggal2}
${tengah}
${garis} *乂 Informasi User 乂*
${tengah}
${garis} *Number* : @${m.sender.split('@')[0]}
${garis} *Status* : ${isCreator ? "Owner" : "User"}
${garis} *User* : ${isPremium ? 'Premium' : 'Free'}
${tengah}
${garis} daftar
${garis} payment
${tengah}
${garis} *[ RAM LIST ]*
${tengah}
${garis} 1gb Nama,Number/Tag
${garis} 2gb Nama,Number/Tag
${garis} 3gb Nama,Number/Tag
${garis} 4gb Nama,Number/Tag
${garis} 5gb Nama,Number/Tag
${garis} 6gb Nama,Number/Tag
${garis} 7gb Nama,Number/Tag
${garis} 8gb Nama,Number/Tag
${garis} 9gb Nama,Number/Tag
${garis} 10gb Nama,Number/Tag
${garis} 11gb Nama,Number/Tag
${garis} 12gb Nama,Number/Tag
${garis} 13gb Nama,Number/Tag
${garis} 14gb Nama,Number/Tag
${garis} 15gb Nama,Number/Tag
${garis} unli Nama,Number/Tag
${tengah}
${garis} *[ OWNER MENU ]*
${tengah}
${garis} selp < owner only >
${garis} public < owner only >
${garis} addadmin < owner only >
${garis} listadmin < owner only >
${garis} listpanel < owner only >
${garis} listusr < owner only >
${garis} listsrv < owner only >
${garis} delusr < owner only >
${garis} delsrv < owner only >
${garis} addgc < owner only >
${garis} dellgc < owner only >
${garis} addprem < owner only >
${garis} delprem < owner only >
${garis} listprem
${bawah}
`
RezzHost.sendMessage(m.chat, {
text: teks,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: wm,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break

//===========================[ PANEL MENU ]=============================\\
case "1gb": case 'cp1gb': case 'panel1gb': {
if (!isPremium) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "1050"
let cpu = "50"
let disk = "1050"
let email = username + "@gmail.com"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${hariini}
┃ *Jam :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: idchannel,
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${hariini}
┃ *O'clock :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "2gb": case 'cp2gb': case 'panel2gb': {
if (!isPremium) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "2050"
let cpu = "100"
let disk = "2050"
let email = username + "@gmail.com"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${hariini}
┃ *Jam :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: idchannel,
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${hariini}
┃ *O'clock :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "3gb": case 'cp3gb': case 'panel3gb': {
if (!isPremium) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "3050"
let cpu = "150"
let disk = "3050"
let email = username + "@gmail.com"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${hariini}
┃ *Jam :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: idchannel,
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${hariini}
┃ *O'clock :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "4gb": case 'cp4gb': case 'panel4gb': {
if (!isPremium) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4050"
let cpu = "200"
let disk = "4050"
let email = username + "@gmail.com"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${hariini}
┃ *Jam :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: idchannel,
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${hariini}
┃ *O'clock :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break

case "5gb": case 'cp5gb': case 'panel5gb': {
if (!isPremium) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "5050"
let cpu = "250"
let disk = "5050"
let email = username + "@gmail.com"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${hariini}
┃ *Jam :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: idchannel,
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${hariini}
┃ *O'clock :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break

case "6gb": case 'cp6gb': case 'panel6gb': {
if (!isPremium) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "6100"
let cpu = "300"
let disk = "6100"
let email = username + "@gmail.com"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${hariini}
┃ *Jam :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: idchannel,
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${hariini}
┃ *O'clock :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "7gb": case 'cp7gb': case 'panel7gb': {
if (!isPremium) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "7100"
let cpu = "350"
let disk = "7100"
let email = username + "@gmail.com"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${hariini}
┃ *Jam :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: idchannel,
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${hariini}
┃ *O'clock :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break

case "8gb": case 'cp8gb': case 'panel8gb': {
if (!isPremium) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "8100"
let cpu = "400"
let disk = "8100"
let email = username + "@gmail.com"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${hariini}
┃ *Jam :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: idchannel,
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${hariini}
┃ *O'clock :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break

case "9gb": case 'cp9gb': case 'panel9gb': {
if (!isPremium) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "9100"
let cpu = "450"
let disk = "9100"
let email = username + "@gmail.com"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${hariini}
┃ *Jam :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: idchannel,
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${hariini}
┃ *O'clock :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "10gb": case 'cp10gb': case 'panel10gb': {
if (!isPremium) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "10100"
let cpu = "500"
let disk = "10100"
let email = username + "@gmail.com"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${hariini}
┃ *Jam :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: idchannel,
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${hariini}
┃ *O'clock :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "11gb": case 'cp11gb': case 'panel11gb': {
if (!isPremium) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "11150"
let cpu = "550"
let disk = "11150"
let email = username + "@gmail.com"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${hariini}
┃ *Jam :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: idchannel,
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${hariini}
┃ *O'clock :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "12gb": case 'cp12gb': case 'panel12gb': {
if (!isPremium) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "12150"
let cpu = "600"
let disk = "12150"
let email = username + "@gmail.com"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${hariini}
┃ *Jam :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: idchannel,
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${hariini}
┃ *O'clock :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "13gb": case 'cp13gb': case 'panel13gb': {
if (!isPremium) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "13150"
let cpu = "650"
let disk = "13150"
let email = username + "@gmail.com"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${hariini}
┃ *Jam :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: idchannel,
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${hariini}
┃ *O'clock :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "14gb": case 'cp14gb': case 'panel14gb': {
if (!isPremium) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "14150"
let cpu = "700"
let disk = "14150"
let email = username + "@gmail.com"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${hariini}
┃ *Jam :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: idchannel,
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${hariini}
┃ *O'clock :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "15gb": case 'cp15gb': case 'panel15gb': {
if (!isPremium) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "15150"
let cpu = "750"
let disk = "15150"
let email = username + "@gmail.com"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${hariini}
┃ *Jam :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: idchannel,
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${hariini}
┃ *O'clock :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "unli": {
if (!isCreator && !isPremium) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${hariini}
┃ *Jam :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: idchannel,
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${hariini}
┃ *O'clock :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
// OWNER MENU

case "addpremium": case "addprem": {
if (!isCreator) return m.reply(mess.owner)
let b = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (args[0] == 'a') {
if (b in db.data.users) {
if (db.data.users[b].premium == true) return m.reply(`User ${args[0]} sudah menjadi *User Premium!*`)
db.data.users[b].limit += 10000
db.data.users[b].balance += 10000000000
db.data.users[b].premium = true
m.reply(`Berhasil update user ${args[1]} ke *User Premium*`) 
} else return m.reply(`User ${args[1]} tidak terdaftar di database bot`)
} else if (args[0] == 'b') {
if (b in db.data.users) {
if (db.data.users[b].premium == true) return m.reply(`User ${args[0]} sudah menjadi *User Premium!*`)
db.data.users[b].limit += 20000
db.data.users[b].balance += 30000000000
db.data.users[b].premium = true
m.reply(`Berhasil update user ${args[1]} ke *User Premium*`) 
} else return m.reply(`User ${args[1]} tidak terdaftar di database bot`)
} else if (args[0] == 'c') {
if (b in db.data.users) {
if (db.data.users[b].premium == true) return m.reply(`User ${args[0]} sudah menjadi *User Premium!*`)
db.data.users[b].limit += 30000
db.data.users[b].balance += 50000000000
db.data.users[b].premium = true
m.reply(`Berhasil update user ${args[1]} ke *User Premium*`) 
} else return m.reply(`User ${args[1]} tidak terdaftar di database bot`)
} else return m.reply("namapaket nomornya")
}
break

case "delpremium": case "delprem": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply("nomornya")
let user = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (db.data.users[user].premium == false) return m.reply(`User ${args[0]} bukan *User Premium!*`)
if (user in db.data.users) {
db.data.users[user].premium = false
m.reply("Berhasil menghapus *User Premium*")
} else return m.reply(`User ${args[0]} tidak terdaftar di database bot`)
}
break
case "listprem": case "listpremium": {
if (!isCreator) return m.reply(mess.owner)
let user = Object.keys(db.data.users)
let ar = []
let urut = 1
var teks = '\n*乂 LIST USER PREMIUM*\n\n'
user.forEach((e) => {
if (db.data.users[e].premium == true) {
let no = urut++
teks += `${no}. @${e.split("@")[0]}\n`
ar.push(e)
}
})
if (ar.length < 1) {
m.reply("Tidak Ada User Premium")
} else {
RezzHost.sendMessage(m?.chat, {text: teks, contextInfo: {mentionedJid: [...ar]}}, {quoted: kalgans})
}}
break

case "public": {
if (!isCreator) return m.reply(mess.owner)
RezzHost.public = true
m.reply(mess.done)
}
break

case "self": {
if (!isCreator) return m.reply(mess.owner)
RezzHost.public = false
m.reply(mess.done)
}
break
case 'daftar': case 'regis': case 'register': {
if (isRegistered) return m.reply('Kamu sudah terdaftar')
const serialUser = createSerial(20)
mzd = `───「 𝗧𝗘𝗥𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 」────

○ Nomor : @${m?.sender.split('@')[0]}
○ Nama : ${pushname}
○ Status : Sukses✅ 
○ Ns : ${serialUser}

Jangan Lupa Baca Rules Ya ${pushname}...
Data User Yang Tersimpan Di Database Bot, Di Jamin Aman Tanpa Tershare (. ❛ ᴗ ❛.)`
veri = m?.sender
if (!m.isGroup) {
addRegisteredUser(m?.sender, pushname, serialUser)
RezzHost.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | R E G I S T E R`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
} else {
addRegisteredUser(m?.sender, pushname, serialUser)
RezzHost.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | R E G I S T E R`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
}
break
case "listsrv": case 'listserver': {
if (!isCreator) return m.reply(`Maaf, Anda tidak dapat melihat daftar server.`);
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
  
for (let server of servers) {
let s = server.attributes;
    
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});
    
let data = await f3.json();
var status = data.attributes ? data.attributes.current_state : s.status;  

}
  
RezzHost.sendList(m.chat, `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`, "Powered By Rerez", {
title: `Total Server: ${res.meta.pagination.count}`, sections: [{
title: "List Servers Panel",
rows: servers.map(a => ({
title: `ID: ${a.attributes.id} - Status: ${status}`,
description: a.attributes.name,
id: `.delsrv ${a.attributes.id}`
}))
}]
})
                
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break;

case "listusr": case 'listuser': {
if (!isCreator) return m.reply(mess.owner)
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
  
messageText = `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
totalUsr = `Total Users: ${res.meta.pagination.count}`;
  
RezzHost.sendList(m.chat, messageText, "Powered By Rerez", {
title: totalUsr, sections: [{
title: "List Users Panel",
rows: users.map(a => ({
title: `ID: ${a.attributes.id} - Status: ${a.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}`,
description: a.attributes.username,
id: `.delusr ${a.attributes.id}`
}))
}]
})
  
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break
case "delusr": case 'deluser': {
if (!isCreator) return m.reply(mess.owner)
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE USER*')
}
break

case "delsrv": case 'delserver': {
if (!isCreator) return m.reply(mess.owner)
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break
case "listpanel": case "listp": case "listserver": {
if (!isCreator) return m.reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "*🌐 LIST SERVER PANEL BOT*\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `*┌ ◦* ID Server *${s.id}*\n`;
messageText += `*│ ◦* Nama Server *${s.name}*\n`
messageText += `*│ ◦* Ram *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*\n`
messageText += `*│ ◦* CPU *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*\n`;
messageText += `*└ ◦* Storage *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
  await RezzHost.sendMessage(m.chat, { text: messageText }, { quoted: m })
}
break

case "listadmin": {
if (!isCreator) return m.reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
let messageText = "Berikut list admin:\n\n";

for (let user of users) {
let u = user.attributes;
if (u.root_admin) {
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}
}

messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

await RezzHost.sendMessage(m.chat, { text: messageText }, { quoted: kalgans });

if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return false
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return false
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if(!isCreator) return false
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
RezzHost.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
console.log(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
