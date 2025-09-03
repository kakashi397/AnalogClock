import './styles/main.scss';

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

  document.querySelector('#hour').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  document.querySelector('#min').style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
  document.querySelector('#sec').style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
};
setInterval(tickClock, 100);