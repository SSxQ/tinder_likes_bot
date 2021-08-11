// время в секундах

var likes_per_set_min = 5; //минимальное количество лайков за сет
var likes_per_set_max = 10; //максимальное количество лайков за сет
var likes_sleep_min = 3; // минимальное время задержки между лайками
var likes_sleep_max = 10; //максимальное время задержки между лайками
var delay_sets_min = 30; //минимальное время задержки между сетами
var delay_sets_max = 90; //максимальное время задержки между сетами

var enable_swiping = true;
var likes_cnt = 0;

var current_likes_goal = getRandomInt(likes_per_set_min, likes_per_set_max);
while (enable_swiping == true) {
    let banner_close_btn = document.getElementsByClassName('button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Ell Bdrs(100px) Px(24px) Px(20px)--s Py(0) Mih(40px) C($c-secondary) C($c-base):h Fw($semibold) focus-button-style D(b) Mx(a)')
    let like_button = document.getElementsByClassName('button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgc($c-like-green):a')[0];
    
    if (banner_close_btn.length > 0){
        banner_close_btn[0].click();
        console.log(`Закончились лайки. Завершаю работу`);
        break;
    }

    likes_cnt++;
    like_button.click();

    if (likes_cnt == current_likes_goal) {
        let delay_time = getRandom(delay_sets_min, delay_sets_max);
        console.log(`Поставлено ${current_likes_goal} лайков. Засыпаю на ${delay_time}`);
        await sleep(delay_time);
        likes_cnt = 0;
        current_likes_goal = getRandomInt(likes_per_set_min, likes_per_set_max);
        console.log(`Проснулся. Текущая цель - ${current_likes_goal} лайков`);
    }
    else {
        let sleep_time = getRandom(likes_sleep_min, likes_sleep_max);
        console.log(`[${likes_cnt}/${current_likes_goal}] Поставлен лайк. Следующий будет через ${sleep_time}`);
        await sleep(sleep_time);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms*1000));
  }
  
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
  
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
