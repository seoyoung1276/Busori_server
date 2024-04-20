const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const app = express();


app.use(bodyParser.json())
app.use('/', routes);

app.set('port', process.env.PORT || 3000);

sequelize.sync()
    .then(() => {
        console.log('database sync')
    })
    .catch((err) => {{
        console.error('err:', err)
    }})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
})