let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let info = `
BOT MASIH DALAM PENGEMBANGAN, CHAT OWNER KALAU MAU PREMIUM GRATIS
`
const sections = [
   {
	title: `${htjava} WKWK ✦-------`,
	rows: [
	    {title: "🔖 TES"},
	]
    }, {
    title: `${htjava} HEHEHE ✦-------`,
	rows: [
	    {title: "🌟 TES"},
	   
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
