# manual-nodejs
for me

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
