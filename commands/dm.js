const fetch = require("node-fetch").default;
module.exports = {
  name: "dm",
  aliases: [],
  description: "this is dm command",
  async execute(client, receivedMessage, command, args, Discord) {
    const usertext = receivedMessage.content.toString();

    const monkey_api = "SE2SoHPqfQ0mkJ9UMf9uXimmK";

    const regex = /\p{Extended_Pictographic}/u;
    const isEmoji = regex.test(receivedMessage.content);
    console.log(regex.test(receivedMessage.content));
    if (isEmoji)
      return receivedMessage.channel.send(
        "Please don't use emojis with me... I won't understand Emojis."
      );

    await fetch(
      `http://api.brainshop.ai/get?bid=169199&key=5riVVxrFoizwxSiI&uid=${receivedMessage.author.id}&msg=${usertext}`
    )
      .then((response) => response.json())
      .then((data) => {
        receivedMessage.channel.send(data.cnt);
      });
    // .catch(()=>{
    //     receivedMessage.channel.send("I'm Sorry, I didn't quite get that. Let me rest for a bit, I'll reply later Zzz")
    // })
  },
};
