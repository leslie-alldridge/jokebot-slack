const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
  token: 'xoxb-455614632803-454972998912-lYfacRjn4WsTdbfmnEGXnUPn',
  name: 'JokeBot'
});

//when bot starts up

bot.on('start', () => {
  const params = {
    icon_emoji: ':smiley:'
  };

  bot.postMessageToUser('Leslie', 'bot is running', params);
});
