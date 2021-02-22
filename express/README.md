

### Command
1. project - root 폴더생성   
2. npm init -y   
3. npm install --save express   
4. server.js 생성   
```js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        success: true,
    });
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});
```

5. node server.js   

### Reference
https://medium.com/withj-kr/nodejs-express%EB%A1%9C-%EC%84%9C%EB%B2%84-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0-1-express-%EA%B8%B0%EB%B3%B8%EA%B8%B0-c0245b4120bc   
