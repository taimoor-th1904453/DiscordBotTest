const fetch = require('node-fetch').default;
module.exports = {
    name: 'complement',
    description: 'this is an complement command',
    execute(client, receivedMessage,command, args, Discord){
       // receivedMessage.author.toString()
        if(!args[0]){
            fetch(`https://complimentr.com/api`)
            .then(compliment => compliment.json())
            .then(data => {
                receivedMessage.channel.send( `${receivedMessage.author.toString()} - ${data.compliment}`)
            })
            .catch(()=>{
                receivedMessage.channel.send("I'm feeling down atm ): ")
            })

            return

        }
        var sendertag = args[0]
        fetch(`https://complimentr.com/api`)
        .then(compliment => compliment.json())
        .then(data => {
            receivedMessage.channel.send( `${sendertag} - ${data.compliment}`)
        })
        .catch(()=>{
            receivedMessage.channel.send("I'm feeling down atm ): ")
        })
    }
}