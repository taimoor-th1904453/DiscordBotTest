require('dotenv').config()
module.exports = (Discord, client, receivedMessage) =>{
   const prefix = process.env.PREFIX;
   console.log("This is prefix")
   console.log(prefix)
   console.log("=======================")
   
    if(receivedMessage.author.bot) return;
      if(!(receivedMessage.channel.type === 'dm')){
        const channel = receivedMessage.guild.channels.cache.find(c => c.name === 'ai-chat');
       if(receivedMessage.channel === channel){
           client.commands.get('ai-chat').execute(client, receivedMessage,Discord);
       return;
       }   
     }
    //  console.log(receivedMessage);  
    
    const args = receivedMessage.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.find(a => a.aliases && a.aliases.includes(command));
    // console.log(cmd)

    if (receivedMessage.mentions.has(client.user)) {
        client.commands.get('bottagreply').execute(client, receivedMessage, args, Discord);
    }
    // console.log(receivedMessage.content);
    if(receivedMessage.channel.type === 'dm'){
	    console.log(receivedMessage.content);
        client.commands.get('dm').execute(client, receivedMessage,command, args, Discord);
    }
//console.log(receivedMessage.content);
	
  

   if(!receivedMessage.content.startsWith(prefix) || !cmd) return;
	 if(receivedMessage.content.startsWith(prefix) || cmd){
	try {
// console.log("Prefix executed")
// console.log(cmd)
		cmd.execute(client, receivedMessage,command, args, Discord);
		return;
	} catch (error) {
		console.error(error);
		console.log('there was an error trying to execute that command!');
	}}
   
	
    
   	
}
