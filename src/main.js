import './styles/main.scss';


/* ----- 
針を動かすコード
----- */
const tickClock = () => {
  /* 現在の時分秒を取得 */
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  /* 時針分針秒針が進む角度を求めている */
  const hourDeg = (hour % 12) * 30 + (min / 60) * 30
  const minDeg = min * 6 + (sec / 60) * 6;
  const secDeg = sec * 6

  /* 求めた角度をtransformプロパティの値にあててる */
  document.querySelector('#hour').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  document.querySelector('#min').style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
  document.querySelector('#sec').style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
};


/* ----- 
文字盤の数字と目盛りを生成するコード
----- */
const clock = document.querySelector('.clock'); //時計を取得
const makeClockFace = () => {
  for (let i = 1; i <= 60; i++) {
    const tick = document.createElement('span'); // spanを60個生成
    const degree = i * 6;
    
    if (i % 15 === 0) { // 15の倍数の時
      tick.classList.add('clock__number');
      tick.textContent = (i / 5) === 12 ? 12 : i / 5;
      tick.style.transform = `translate(-50%, -50%) rotate(${degree}deg) translateY(-230px) rotate(-${degree}deg)`;
    } else if (i % 5 === 0) { // 5の倍数の時
      tick.classList.add('clock__major-tick');
      tick.style.transform = `translate(-50%, -50%) rotate(${degree}deg) translateY(-270px)`;
    } else { // 上記以外の時
      tick.classList.add('clock__minor-tick');
      tick.style.transform = `translate(-50%, -50%) rotate(${degree}deg) translateY(-290px)`;
    }
    
    clock.appendChild(tick);
  }
}



setInterval(tickClock, 100); // 0.1秒ごとに表示更新
makeClockFace();