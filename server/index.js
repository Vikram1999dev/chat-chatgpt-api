const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

// you need to make sure that you're parsing the request body correctly.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { Configuration, OpenAIApi } = require('openai');

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: 'xx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  }),
);

app.post('/recieve', async (req, res) => {
  console.log(req.body);
  const result = await openAi.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: req.body.message }],
  });

  res.status(200).send(result.data.choices[0].message.content);
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
