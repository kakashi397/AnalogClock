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

setInterval(tickClock, 100); // 0.1秒ごとに表示更新




/* ----- 
文字盤の数字と目盛りを生成するコード
----- */
const clock = document.querySelector('.clock'); //時計を取得
const test = () => {
  for (let i = 1; i <= 60; i++) {
    const tick = document.createElement('span'); // spanを60個生成

    if (i % 15 === 0) { // 15の倍数の時
      tick.classList.add('clock__number');
      tick.textContent = (i / 5) === 12 ? 12 : i / 5;
    } else if (i % 5 === 0) { // 5の倍数の時
      tick.classList.add('clock__major-tick');
    } else { // 上記以外の時
      tick.classList.add('clock__minor-tick');
    }

    const degree = i * 6;

    tick.style.transform = `translate(-50%, -50%) rotate(${degree}deg) translateY(-230px) rotate(-${degree}deg)`;
    clock.appendChild(tick);
  }
}
test();