const { Client, Events, GatewayIntentBits } = require('discord.js');

const dotenv = require('dotenv');
dotenv.config();
const { TOKEN, CLIENT_ID, SERVER_ID } = process.env;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
	console.log(`Pronto! logado como ${c.user.tag}`);
});

client.login(TOKEN);