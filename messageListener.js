import pkg from "discord.js";
import "dotenv/config";
const { Client, GatewayIntentBits } = pkg;

const channelId = process.env.FIELD_REPORT_CHANNEL;

const discordClient = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

discordClient.once("ready", (c) => {
  console.log(`Logged in as ${c.user.tag}`);
});

discordClient.on("messageCreate", async (messageObject) => {
  if (messageObject.author.bot) return;
  if (messageObject.channel.id !== channelId) return;

  let mentionedUsers = messageObject.mentions.users;
  console.log(mentionedUsers);

  await messageObject.react("📣");
});

export async function startChannelListener() {
  discordClient.login(process.env.DISCORD_BOT_TOKEN);
}
