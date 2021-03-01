

//093_함수형 프로그래밍

// 명령형 프로그래밍과 함수형 프로그래밍의 차이는?
// 병렬처리와 비동기 작업을 위해서 진행하며, 외부효과에 영향이 없는 함수만을 조합한 프로그래밍이다.

// 함수형 프로그래밍은 일급 함수(first-class), 모든 것을 값, 객체로 취급하는 것
// 일급함수는 따라서 값으로 다룰 수 있는 함수

// 화살표 함수를 두 번 이상 사용하는 방법을 커링(curring)이라고 함

// 095
// WHAT : 재귀함수란?
// 특정결과를 만족할 때 까지, 실행결과를 스스로에게 넘겨주어 스스로를 계속 호출하는 함수

// WHY : 재귀함수를 쓰는이유?
// 함수형 프로그래밍에서 재귀함수는 내부에서 사용하는 값들이 불변성과 순수성을 가짐
// 비동기와 병렬작업을 위해서 불변성과 순수성을 가진 값들이 필요

// HOW : 재귀함수를 효율적으로 어떻게?
// Tail Recursion(꼬리재귀) 최적화를 이용하여 콜 스택을 줄이는 작업이필요

const countdown = (value) => {
    console.log('value : ', value);
    if (value === 0) return value;
    else return countdown(value - 1);
}

console.log('result : ', countdown(20));