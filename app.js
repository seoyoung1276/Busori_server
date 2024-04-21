const express = require('express');
const routes = require('./routes');
const session = require('express-session');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const app = express();


app.use(bodyParser.json())


app.use(session ({
    secret: 'secret',
    resave: false,  // 매 req마다 세션을 계속 다시 저장하는 옵션? 
    saveUninitialized: true,  
    cookie: {
        maxAge : 1000 * 60 * 60  //쿠키 유효시간 1시간 
    }
}))


app.use('/', routes);

app.set('port', process.env.PORT || 3000);

app.use(express.static('static'));

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