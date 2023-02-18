const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('deletar')
        .setDescription('Limpa todas as mensagens do canal.'),

    async execute(interaction) {
        const channel = interaction.channel;

        try {
            const messages = await channel.messages.fetch();
            channel.bulkDelete(messages);
            await channel.send('Todas as mensagens foram limpas deste canal.');
          } catch (error) {
            console.error(error);
            await interaction.reply('Houve um erro ao executar o comando de deletar mensagens.');
          }
    },
};
