const fetch = require('node-fetch').default;
module.exports = {
    name: 'ai-chat',
    aliases: [],
    description: 'this is ai-chat command',
    execute(client, receivedMessage,command, args, Discord) {
        const channel = receivedMessage.guild.channels.cache.find(c => c.name === 'ai-chat');
        if(!channel) return
        const usertext = receivedMessage.content.toString()
        
            const monkey_api = process.env.MONKEY_API
           
        fetch(`https://api.monkedev.com/fun/chat?msg=${usertext}&uid=${receivedMessage.author.id}&key=${monkey_api}`)
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
