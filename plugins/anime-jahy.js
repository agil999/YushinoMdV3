import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.xteam.xyz/randomimage/jahy?APIKEY=Apikeymu'
	conn.sendButton(m.chat, 'Wangy :jahy: wangy (≧ω≦)', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(jahy)$/i
handler.tags = ['anime', 'premium', 'ytta']
handler.help = ['tobat subhanallah']
handler.premium = true

export default handler
