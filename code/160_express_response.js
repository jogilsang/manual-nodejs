
// 160_express_response
// res.render () : 템플릿 랜더링
// res.end() : 응답 프로세스 종료
// res.send() : 응답전송
// res.json() : JSON 응답전송
// res.redirect() : 요청경로 재지정

// req.headers : 요청 헤더의 추출
// req.query : GET 방식으로 요청한 매개변수 추출
// req.body : POST 방식으로 요청한 매개변수 추출
// req.params : 라우팅 매개변수 추출
// req.baseUrl
// req.hostname
// req.protocol

const express = require('express');
const app = express();

app.get('/', (request, response) => {
    const result = [];
    const multipleNumber = 9;

    result.push(5);
    response.send(result);
});

app.get('/error', (request,response) => {
    response.status(404).send('404 error');
});

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});