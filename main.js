//問題
const question = [
    {
        q: "野菜",
        a: ["は", "く", "さ", "い"]
    },
    {
        q: "虫",
        a: ["こ", "お", "ろ", "ぎ"]
    },
    {
        q: "動物",
        a: ["ラ", "イ", "オ", "ン"]
    },
    {
        q: "文房具",
        a: ["え", "ん", "ぴ", "つ"]
    },
    {
        q: "国",
        a: ["ア", "メ", "リ", "カ"]
    },
    {
        q: "野菜",
        a: ["だ", "い", "こ", "ん"]
    },
    {
        q: "虫",
        a: ["み", "つ", "ば", "ち"]
    },
    {
        q: "動物",
        a: ["シ", "マ", "ウ", "マ"]
    },
    {
        q: "文房具",
        a: ["け", "し", "ご", "む"]
    },
    {
        q: "国",
        a: ["イ", "ギ", "リ", "ス"]
    },
        {
        q: "野菜",
        a: ["に", "ん", "じ", "ん"]
    },
    {
        q: "虫",
        a: ["か", "ま", "き", "り"]
    },
    {
        q: "動物",
        a: ["ア", "ザ", "ラ", "シ"]
    },
    {
        q: "文房具",
        a: ["そ", "ろ", "ば", "ん"]
    },
    {
        q: "国",
        a: ["メ", "キ", "シ", "コ"]
    },
    {
        q: "野菜",
        a: ["し", "い", "た", "け"]
    },
    {
        q: "虫",
        a: ["ク", "ワ", "ガ", "タ"]
    },
    {
        q: "動物",
        a: ["い", "の", "し", "し"]
    },
    {
        q: "文房具",
        a: ["ふ", "う", "と", "う"]
    },
    {
        q: "国",
        a: ["オ", "ラ", "ン", "ダ"]
    },
        {
        q: "野菜",
        a: ["え", "だ", "ま", "め"]
    },
    {
        q: "遊び",
        a: ["あ", "や", "と", "り"]
    },
    {
        q: "動物",
        a: ["オ", "オ", "カ", "ミ"]
    },
    {
        q: "赤いもの",
        a: ["あ", "か", "お", "に"]
    },
    {
        q: "国",
        a: ["フ", "ラ", "ン", "ス"]
    },
    {
        q: "野菜",
        a: ["た", "ま", "ね", "ぎ"]
    },
    {
        q: "遊び",
        a: ["け", "ん", "だ", "ま"]
    },
    {
        q: "動物",
        a: ["ト", "ナ", "カ", "イ"]
    },
    {
        q: "赤いもの",
        a: ["う", "め", "ぼ", "し"]
    },
    {
        q: "国",
        a: ["ブ", "ラ", "ジ", "ル"]
    },
        {
        q: "野菜",
        a: ["に", "ん", "に", "く"]
    },
    {
        q: "遊び",
        a: ["お", "て", "だ", "ま"]
    },
    {
        q: "動物",
        a: ["ニ", "ワ", "ト", "リ"]
    },
    {
        q: "赤いもの",
        a: ["ひ", "の", "た", "ま"]
    },
    {
        q: "国",
        a: ["イ", "タ", "リ", "ア"]
    },
    {
        q: "野菜",
        a: ["れ", "ん", "こ", "ん"]
    },
    {
        q: "遊び",
        a: ["お", "は", "じ", "き"]
    },
    {
        q: "動物",
        a: ["ハ", "イ", "エ", "ナ"]
    },
    {
        q: "赤いもの",
        a: ["ゆ", "う", "や", "け"]
    },
    {
        q: "国",
        a: ["エ", "ジ", "プ", "ト"]
    },
        {
        q: "スポーツ",
        a: ["た", "い", "そ", "う"]
    },
    {
        q: "遊び",
        a: ["た", "け", "う", "ま"]
    },
    {
        q: "動物",
        a: ["ペ", "ン", "ギ", "ン"]
    },
    {
        q: "家具",
        a: ["ご", "み", "ば", "こ"]
    },
    {
        q: "国",
        a: ["ス", "ペ", "イ", "ン"]
    },
    {
        q: "スポーツ",
        a: ["す", "い", "え", "い"]
    },
    {
        q: "遊び",
        a: ["し", "り", "と", "り"]
    },
    {
        q: "動物",
        a: ["カ", "モ", "シ", "カ"]
    },
    {
        q: "家具",
        a: ["ざ", "ぶ", "と", "ん"]
    },
    {
        q: "国",
        a: ["ベ", "ト", "ナ", "ム"]
    },
    {
        q: "県",
        a: ["あ", "お", "も", "り"]
    },
    {
        q: "県",
        a: ["ふ", "く", "し", "ま"]
    },
    {
        q: "県",
        a: ["さ", "い", "た", "ま"]
    },
    {
        q: "県",
        a: ["か", "な", "が", "わ"]
    },
    {
        q: "県",
        a: ["い", "し", "か", "わ"]
    },
    {
        q: "県",
        a: ["ひ", "ろ", "し", "ま"]
    },
    {
        q: "県",
        a: ["と", "く", "し", "ま"]
    },
    {
        q: "県",
        a: ["ふ", "く", "お", "か"]
    },
    {
        q: "県",
        a: ["み", "や", "ざ", "き"]
    },
    {
        q: "県",
        a: ["お", "き", "な", "わ"]
    },
        {
        q: "仕事",
        a: ["せ", "い", "び", "し"]
    },
    {
        q: "仕事",
        a: ["え", "き", "い", "ん"]
    },
    {
        q: "仕事",
        a: ["せ", "ん", "せ", "い"]
    },
    {
        q: "仕事",
        a: ["タ", "レ", "ン", "ト"]
    },
    {
        q: "身体",
        a: ["く", "ち", "び", "る"]
    },
    {
        q: "身体",
        a: ["て", "の", "ひ", "ら"]
    },
    {
        q: "身体",
        a: ["つ", "ま", "さ", "き"]
    },
    {
        q: "身体",
        a: ["お", "や", "ゆ", "び"]
    },
    {
        q: "乗り物",
        a: ["ひ", "こ", "う", "き"]
    },
    {
        q: "乗り物",
        a: ["ち", "か", "て", "つ"]
    },
        {
        q: "乗り物",
        a: ["ク", "ラ", "ウ", "ン"]
    },
    {
        q: "乗り物",
        a: ["タ", "ク", "シ", "ー"]
    },
    {
        q: "身に着けるもの",
        a: ["エ", "プ", "ロ", "ン"]
    },
    {
        q: "身に着けるもの",
        a: ["セ", "ー", "タ", "ー"]
    },
    {
        q: "身に着けるもの",
        a: ["せ", "い", "ふ", "く"]
    },
    {
        q: "身に着けるもの",
        a: ["て", "ぶ", "く", "ろ"]
    },
    {
        q: "身に着けるもの",
        a: ["な", "が", "ぐ", "つ"]
    },
    {
        q: "身に着けるもの",
        a: ["ネ", "ク", "タ", "イ"]
    },
    {
        q: "身に着けるもの",
        a: ["も", "も", "ひ", "き"]
    },
    {
        q: "身に着けるもの",
        a: ["よ", "う", "ふ", "く"]
    },
    {
        q: "大事なもの",
        a: ["け", "ん", "こ", "う"]
    },
    {
        q: "大事なもの",
        a: ["き", "ん", "に", "く"]
    },
    {
        q: "大事なもの",
        a: ["へ", "そ", "く", "り"]
    },
    {
        q: "大事な人",
        a: ["こ", "い", "び", "と"]
    },
    {
        q: "大事なこと",
        a: ["あ", "い", "さ", "つ"]
    },
    {
        q: "多いと嬉しい",
        a: ["ボ", "ー", "ナ", "ス"]
    },
    {
        q: "植物を使った伝統文化",
        a: ["ぼ", "ん", "さ", "い"]
    },
    {
        q: "植物を使った伝統文化",
        a: ["い", "け", "ば", "な"]
    },
    {
        q: "車のご飯",
        a: ["ガ", "ソ", "リ", "ン"]
    },
    {
        q: "黒くて苦い",
        a: ["コ", "ー", "ヒ", "ー"]
    },
        {
        q: "暑い",
        a: ["た", "い", "よ", "う"]
    },
    {
        q: "手をふく",
        a: ["お", "し", "ぼ", "り"]
    },
    {
        q: "朝と夕に届く",
        a: ["し", "ん", "ぶ", "ん"]
    },
    {
        q: "遊具",
        a: ["ブ", "ラ", "ン", "コ"]
    },
    {
        q: "遊具",
        a: ["シ", "ー", "ソ", "ー"]
    },
    {
        q: "とても怖い",
        a: ["ど", "ろ", "ぼ", "う"]
    },
    {
        q: "とても怖い",
        a: ["ゆ", "う", "れ", "い"]
    },
    {
        q: "とても怖い",
        a: ["カ", "ミ", "ナ", "リ"]
    },
    {
        q: "とても怖い",
        a: ["ウ", "イ", "ル", "ス"]
    },
    {
        q: "タイルが有名",
        a: ["か", "さ", "は", "ら"]
    },
];

//top画面
const scenetop = document.querySelector("#start");
//game画面
const scecegame = document.querySelector("#game");
//正解不正解表示画面
const next = document.querySelector("#next");
const field = document.querySelector("#field");
const select = document.querySelectorAll(".select");
const answer = document.querySelectorAll(".answer");

//選択された答えを順番に格納
let answers = [];
//問題番号を管理
let questionnum = 0;


init();
function init() {
    changescene(scecegame, scenetop);
    scenetop.addEventListener('click', gamestart, false);
}

function changescene(hiddenscene, visiblescene) {
    hiddenscene.classList.add("is-hidden");
    hiddenscene.classList.remove("is-visible");
    visiblescene.classList.add("is-visible");
}

function gamestart() {
    changescene(scenetop, scecegame);
    showQuestion()
}

// 【JavaScript】配列の要素をランダムに表示する(ブックマーク)を応用して追加
function shuffle(array) {
    for(let i = (question.length - 1); i > 0; i--) {
        const j = Math.floor(Math.random() * (i - 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// クイズ開始時に選択肢をシャッフル
shuffle(question);

//並べ替えクイズの処理
function showQuestion() {
    //答えを格納している配列を初期化
    answers.length = 0; 
    for (let i = 0; i < 4; i++) {
        answer[i].textContent = i + 1;
    }

    //問題の解答シャッフル Fisher–Yatesアルゴリズムを用いる
    //値渡しコピーで配列に代入
    let shufflea = question[questionnum].a.concat(); 
    for (let i = shufflea.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        let tmp = shufflea[i];
        shufflea[i] = shufflea[r];
        shufflea[r] = tmp;
    }

    //問題文挿入
    document.querySelector("h1").textContent = question[questionnum].q;
    //回答選択肢挿入
    for (let i = 0; i < shufflea.length; i++) {
        select[i].classList.remove('is-hidden');
        select[i].textContent = shufflea[i];
    }

    let count = 0;
    //選択された答えを消す 
    for (let i = 0; i < shufflea.length; i++) {
        select[i].onclick = () => {
            console.log(count);
            select[i].classList.add('is-hidden');
            //選択された答えを移動
            answer[count].textContent = select[i].textContent;
            answers.push(answer[count].textContent);
            count += 1;
            if (count == shufflea.length) {
                count = 0;
                Judgment();
            }
        }
    }
}

//正解かどうか判定
function Judgment() {
    changescene(scecegame, next);
    if (JSON.stringify(question[questionnum].a) == JSON.stringify(answers)) {
        next.innerHTML = "<p style='font-size:3em;color:#f00;'>正解です！!</p><button onclick='nextquestion()'>さぁ、次に進みましょう　　　　　　　　　　　　　　　！！！</button>";

    } else {
        next.innerHTML = "<p style='font-size:3em;color:#000;'>不正解...</p><button onclick='nextquestion()'>さぁ、次に進みましょう　　　　　　　　　　　　　　　！！！</button>";
    }
}

//次の問題ボタンが押された時の処理
function nextquestion() {
    questionnum++
    if (Object.keys(question).length > questionnum) {
        changescene(next, scecegame);
        showQuestion();
    } else {
        questionnum = 0;
        changescene(next, scecegame);
        showQuestion();
    }
}
