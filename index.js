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

  bot.postMessageToChannel('general', 'bot is running', params);
});

//error handler

bot.on('error', err => {
  console.log(err);
});

//message handler

bot.on('message', data => {
  if (data.type !== 'message') {
    return;
  }

  handleMessage(data.text);
});

//responding to data

function handleMessage(message) {
  if (message.includes(' chucknorris')) {
    chuckJoke();
  } else if (message.includes(' yomama')) {
    yomamaJoke();
  }
}

//tell a joke

function chuckJoke() {
  axios.get('http://api.icndb.com/jokes/random').then(res => {
    const joke = res.data.value.joke;
    const params = {
      icon_emoji: ':laughing:'
    };

    bot.postMessageToChannel('general', `Chuck Norris: ${joke}`, params);
  });
}

function yomamaJoke() {
  axios.get('http://api.yomomma.info').then(res => {
    const joke = res.data.joke;
    const params = {
      icon_emoji: ':laughing:'
    };

    bot.postMessageToChannel('general', `YoMama: ${joke}`, params);
  });
}
