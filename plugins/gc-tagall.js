let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `👨🏻‍💻💙➢ 𝐁𝐨𝐭 𝐁𝐨𝐭𝐜𝐢𝐭𝐨 𝐩𝐚𝐫𝐚 𝐮𝐬𝐭𝐞𝐝𝐞𝐬 𝐁𝐞𝐛𝐞𝐬:  ${pesan}`
let teks = `     
👨🏻‍💻💙 𝐑𝐞𝐯𝐢𝐯𝐚𝐧 𝐁𝐨𝐭𝐬-𝐆𝐞𝐫𝐚𝐥 𝐁𝐨𝐭 💙👨🏻‍💻 \n\n ${oi}\n\n 👨🏻‍💻💙➢𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `👨🏻‍💻💙≽ @${mem.id.split('@')[0]}\n`}
teks += `𝐆𝐞𝐫𝐚𝐥 𝐁𝐨𝐭 👨🏻‍💻💙 `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler
