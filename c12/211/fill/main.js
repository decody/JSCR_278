// 캔버스 요소 참조
const canvas = document.querySelector('#my-canvas');
// 컨텍스트 가져오기
const context = canvas.getContext('2d');
// 색상 지정
context.fillStyle = 'red';
// 정사각형 생성
context.fillRect(0, 0, 100, 100);
