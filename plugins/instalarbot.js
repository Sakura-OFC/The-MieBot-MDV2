//import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let { generateWAMessageFromContent } = (await import(global.baileys)).default 
let handler  = async (m, { conn }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let texto = `🥀 *𝑰𝒏𝒔𝒕𝒂𝒍𝒂𝒄𝒊𝒐𝒏 𝒅𝒆 𝑻𝒉𝒆-𝑴𝒊𝒆𝑩𝒐𝒕-𝑴𝑫𝑽2* 🥀
𝐻𝑜𝑙𝑎 𝑐𝑜𝑚𝑜 𝑒𝑠𝑡𝑎 𝑢𝑠𝑢𝑎𝑟𝑖@ 𝑑𝑒𝑙 𝑏𝑜𝑡 𝑝𝑎𝑟𝑎 𝑖𝑛𝑠𝑡𝑎𝑙𝑎𝑟 𝑒𝑠𝑡𝑒 𝑏𝑜𝑡 𝑒𝑠 𝑛𝑒𝑐𝑒𝑠𝑎𝑟𝑖𝑜 ℎ𝑎𝑏𝑙𝑎𝑟 𝑐𝑜𝑛 𝑚𝑖 𝑐𝑟𝑒𝑑𝑜𝑟𝑎 𝑝𝑎𝑟𝑎 𝑒𝑠𝑡𝑒 𝑝𝑟𝑜𝑐𝑒𝑠𝑜 𝑎𝑞𝑢𝑖 𝑡𝑒 𝑑𝑒𝑗𝑜 𝑠𝑢 𝑐𝑜𝑛𝑡𝑎𝑐𝑡𝑜 , 𝑓𝑎𝑣𝑜𝑟 𝑐𝑜𝑛𝑡𝑎𝑐𝑡𝑎𝑟 𝑠𝑜𝑙𝑜 𝑡𝑒𝑚𝑎 𝑑𝑒𝑙 𝑏𝑜𝑡
𝐍𝐨𝐦𝐛𝐫𝐞: 𝐒𝐚𝐤𝐮𝐫𝐚-𝐎𝐅𝐂
𝐍𝐮𝐦𝐞𝐫𝐨: wa.me/595987138033
` 
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: '🌺𝑻𝒉𝒆-𝑴𝒊𝒆𝑩𝒐𝒕-𝑴𝑫𝑽2🌺', body: null, thumbnail: imagen1, sourceUrl: 'https://youtube/@AdrianOficial905' }, mentionedJid: [m.sender] }}}, aa)
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.command = /^(instalarbot)/i
export default handler

/*
//LOS BOTONES NO FUNKA EL LA NUEVA ACTUALIZACIÓN DE WHATSAPP :(
let handler  = async (m, { conn, usedPrefix, command }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let picture = './media/menus/Menu1.jpg'
await m.reply(`╰⊱🔰⊱ *𝑰𝒏𝒔𝒕𝒂𝒍𝒂𝒄𝒊𝒐𝒏* ⊱🔰⊱╮`)
let instalar = `*◄┢┅͜͡✇⟬↯ື ►ஜ۩💥۩ஜ◄ ↯ື⟭✇͜͡┅┧►*

💥 𝙔𝙖 𝙥𝙪𝙚𝙙𝙚 𝙞𝙣𝙨𝙩𝙖𝙡𝙖𝙧 𝙖 𝙏𝙝𝙚-𝙇𝙤𝙡𝙞𝘽𝙤𝙩-𝙈𝘿 ❕

*𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝘾𝙄𝙊𝙉*
*https://youtu.be/gh5NajZOTA8*

✨ *Si necesitas ayuda entra al grupo del bot*
📌 *${global.nna}*

💛 *Si tienes dudas o necesitas ayuda en el proceso de la instalación puede escribir me a este número (No es Bot el número)*

📲 *Wa.me/5492266466080*

❗ *_Solo para temas de instalación_*

───────•••───────`

conn.sendButton(m.chat, instalar, `✨ 𝙍𝙀𝙌𝙐𝙄𝙎𝙄𝙏𝙊𝙎 𝙋𝘼𝙍𝘼 𝙇𝘼 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝘾𝙄𝙊𝙉 ✨

✅ _1 GB de almacenamiento_
✅ _Aplicación Termux (actualizada)_
✅ _Un WhatsApp recomiendo el WhatsApp normal_
✅ _Un número virtual (si es ofc mejor)_
✅ _2 dispositivos o una PC para escanear_

───────•••───────

✨ 𝙂𝙄𝙏𝙃𝙐𝘽 > 𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙄𝙊
*_Visita mí repositorio 😸 para más información, si te agrada el Bot apoya me con una ⭐️ ¡Gracias!_*

${md}

───────•••───────

📌 *𝙋𝘼𝙎𝙊 𝙋𝘼𝙍𝘼 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝙀𝙇 𝘽𝙊𝙏 𝙀𝙇 𝙏𝙀𝙍𝙈𝙐𝙓*
📌 *𝙊𝙋𝘾𝙄𝙊𝙉: 1 𝙂𝙄𝙏𝙃𝙐𝘽*

🔸 termux-setup-storage
🔸 apt update
🔸 pkg upgrade
🔸 pkg install git -y
🔸 pkg install nodejs -y
🔸 pkg install ffmpeg -y
🔸 pkg install imagemagick -y
🔸 git clone https://github.com/elrebelde21/The-LoliBot-MD
🔸 cd The-LoliBot-MD
🔸 npm install
🔸 ls
🔸 npm start

📌 *𝙊𝙋𝘾𝙄𝙊𝙉: 2 𝘼𝙍𝘾𝙃𝙄𝙑𝙊*
*https://youtu.be/i1xjB4bmYCc*

🔸 termux-setup-storage
🔸 apt update 
🔸 pkg upgrade 
🔸 pkg install git -y
🔸 pkg install nodejs -y
🔸 pkg install ffmpeg -y
🔸 pkg install imagemagick -y
🔸 pkg install yarn
🔸 cd storage/downloads/Lolibot
🔸 ls
🔸 npm start

───────•••───────

📌 𝗜𝗡𝗦𝗧𝗔𝗟𝗔𝗥 𝗘𝗡 𝗕𝗢𝗫𝗠𝗜𝗡𝗘

*𝙏𝙝𝙚-𝙇𝙤𝙡𝙞𝘽𝙤𝙩-𝙈𝘿 : 𝘽𝙤𝙭𝙈𝙞𝙣𝙚*
*_https://youtu.be/wWyBHtKzx9Q_*

_Pagina Oficial_ 
_https://boxmineworld.com_

_Panel_
_https://panel.boxmineworld.com_

───────•••───────

📌 𝗜𝗡𝗦𝗧𝗔𝗟𝗔𝗥 𝗘𝗡 𝙍𝙀𝙋𝙇𝙄𝙏 

*𝙏𝙝𝙚-𝙇𝙤𝙡𝙞𝘽𝙤𝙩-𝙈𝘿 : 𝙍𝙀𝙋𝙇𝙄𝙏*
https://youtu.be/SMjCcfuyWQE

_Pagina Oficial_ 
https://replit.com/

───────•••───────


*◄┢┅͜͡✇⟬↯ື ►ஜ۩💥۩ஜ◄ ↯ື⟭✇͜͡┅┧►*\n\n💥 INFO EXTRA 💥\n➤ Se sugiere leer el archivo README.md \n➤ Bot compartible con WhatsApp multi device \n➤ Para habilitar el /añadir y el /sacar usa /enable restrict \n- Puede ocasionar que el numero se vaya a soporte \n➤ Cualquier cosa hablame solo por tema del bot🔰🤖\nSaludos 🔰🤖\n\n${wm}`, picture, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨  ✅', '.cuentasgb']], fkontak, m)}

handler.command = /^(instalarbot|instalargatabot|instalargata|procesobot|botproceso|procesodelbot|botinstall|installbot)/i
export default handler
*/
