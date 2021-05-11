# 1.memo
for me

### 서버 백그라운드 실행 forever
```
sudo npm install -g forever
forever start app.js or forever start ./bin/www
forever list
forever stop 0
ps -ef | grep node
```
### CORS, favicon, control access allow origin
```
1. cmd
npm install cors

2. app.js
var cors = require('cors');

app.use(cors());
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
});

3. cmd
npm install serve-favicon

4. app.js
var favicon = require('serve-favicon')
app.use(favicon(path.join('./public/images','favicon.ico')));

5. index.pug
extends layout

block content
  h1= title
  p Welcome to #{title}
  link(rel='shortcut icon', href='~/favicon.ico')
  
6. index.html
router.get('/', function (req, res, next) {
  // res.send('회의실 예약 앱 - 웹 서버');
  res.render('index',
    {
      title : 'Hey'
    }
  );
});

7. sudo로 명령실행
```

### 서버 백그라운드 실행 forever
```
sudo npm install -g forever
forever start app.js or forever start ./bin/www
forever list
forever stop 0
ps -ef | grep node
```

### 명령어 Command
```
npm install
npm start
```
### 모듈, 라이브러리 Module , library
1. mariaDB, express
```
src : https://ing-yeo.net/2020/02/study-nodejs-database-mariadb/

npm i -g express-generator
express FOLDER_NAME --view=pug
npm i
npm start
npm i mariadb
```
2. excel
```
using require(XLSX) :
https://stackoverflow.com/questions/30859901/parse-xlsx-with-node-and-create-json

using require(excel to json) :
https://medium.com/@samanthaneal/how-to-convert-excel-to-json-with-node-js-31f18d1231d3

xlsx write example :
https://github.com/SheetJS/js-xlsx/issues/817
```

### 문법 ,syntax
1. json-array
```javascript
var student = [];
var obj = {
    'first_name': name,
    'last_name': name,
    'age': age,
}
student.push(obj);
```

### 설치 환경 구성
Ubuntu Server 18.0.4
1. nodejs
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
npm -v
sudo apt-get install build-essential
```


### 명령어 Command
```
npm install
npm start
```

### 모듈, 라이브러리 Module , library
1. mariaDB, express
```
src : https://ing-yeo.net/2020/02/study-nodejs-database-mariadb/

npm i -g express-generator
express FOLDER_NAME --view=pug
npm i
npm start
npm i mariadb
```
2. excel
```
using require(XLSX) :
https://stackoverflow.com/questions/30859901/parse-xlsx-with-node-and-create-json

using require(excel to json) :
https://medium.com/@samanthaneal/how-to-convert-excel-to-json-with-node-js-31f18d1231d3

xlsx write example :
https://github.com/SheetJS/js-xlsx/issues/817
```

### 문법 ,syntax
1. json-array
```javascript
var student = [];
var obj = {
    'first_name': name,
    'last_name': name,
    'age': age,
}
student.push(obj);
```