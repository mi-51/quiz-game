const quiz = [
  {
    question: "楽天イーグルスが初のリーグ優勝＆日本一になったのは何年？",
    answers: [
      "2011年",
      "2012年",
      "2013年",
      "2014年"
    ],
    correct: "2013年"
  },
  {
    question: "野球で１試合に一人でヒット、２塁打、３塁打、HR全て打つことを何と言う？",
    answers: [
      "グランドスラム",
      "サイクルヒット",
      "タイムリー",
      "クリーンアップ"
    ],
    correct: "サイクルヒット"
  },
  {
    question: "パ・リーグの「パ」は何の略？",
    answers: [
      "パシフィック",
      "パントラル",
      "パッション",
      "パラダイス"
    ],
    correct: "パシフィック"
  },
  {
    question: "2019年に広島に移籍した長野久義選手の背番号は何番？",
    answers: [
      "1番",
      "3番",
      "5番",
      "7番",
    ],
    correct: "5番"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
let $button = document.getElementsByTagName("button"); //変数の前に「$」をつけるのが主流
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  // let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setQuiz();

const clickHundler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert('不正解');
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    //問題数あり
    setQuiz();
  } else {
    //問題数なし
    window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
  }
};

//正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    clickHundler(e);
  })
  handleIndex++;
};