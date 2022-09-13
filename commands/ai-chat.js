const fetch = require('node-fetch').default;
module.exports = {
    name: 'ai-chat',
    aliases: [],
    description: 'this is ai-chat command',
    execute(client, receivedMessage,command, args, Discord) {
        const channel = receivedMessage.guild.channels.cache.find(c => c.name === 'ai-chat');
        if(!channel) return
        const usertext = receivedMessage.content.toString()
        
            const MONKEY_API = 'SE2SoHPqfQ0mkJ9UMf9uXimmK'
           
        fetch(`http://api.brainshop.ai/get?bid=169199&key=5riVVxrFoizwxSiI&uid=${receivedMessage.author.id}&msg=${usertext}`)
        

        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
            channel.send(data.response)
        }, 5000)
            
        })
        .catch(()=>{
            channel.send("I'm Sorry, I didn't quite get that. Let me rest for a bit, I'll reply later Zzz")
        })


    }
}