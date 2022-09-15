const fetch = require('node-fetch').default;
module.exports = {
    name: 'ai-chat',
    aliases: [],
    description: 'this is ai-chat command',
    async execute(client, receivedMessage,command, args, Discord) {
        const channel = receivedMessage.guild.channels.cache.find(c => c.name === 'ai-chat');
        if(!channel) return
        const usertext = receivedMessage.content.toString()
        console.log(usertext)
        
            const MONKEY_API = 'SE2SoHPqfQ0mkJ9UMf9uXimmK'

            const regex = /\p{Extended_Pictographic}/u
            const isEmoji = regex.test(receivedMessage.content)
            console.log(regex.test(receivedMessage.content))
            if(isEmoji) return channel.send("Please don't use emojis with me... I won't understand Emojis.")
            
           
         const  response = await fetch(`http://api.brainshop.ai/get?bid=169199&key=5riVVxrFoizwxSiI&uid=${receivedMessage.author.id}&msg=${usertext}`)
        // console.log(response)
         const data  = await response.json()
         const reply = data.cnt;
        console.log(reply);
        channel.send(reply)
        // .then(response => {
        //     console.log(response)
        //     response.json()
        // })
        // .then(data => {
        //     setTimeout(() => {
        //     channel.send(data.response)
        // }, 5000)
            
        // })
        // .catch(()=>{
        //     channel.send("I'm Sorry, I didn't quite get that. Let me rest for a bit, I'll reply later Zzz")
        // })


    }
}