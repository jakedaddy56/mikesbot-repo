const Discord = require('discord.js');

module.exports={
    name: 'clear',
    category: 'moderation',
    run: async(bot, message, args)=>{
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply('no u.');
    if(!args[0] > [100]) return message.channel.send('Woah there buddy! I can only purge **100** messages. Come on now.')
    if(!args[0]) return message.channel.send("Bruh, I'm not blind but I can\'t see a number.");
    message.channel.bulkDelete(args[0]).then(() => {
         message.channel.send(`Cleared **${args[0]}** messages.`)
    });
}}