1行目〜43行目、問題を定義する部分
--------------------------------------------------------------------
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
]
--------------------------------------------------------------------
定数の中に配列 > 問題の箱 > 問題文と選択肢、答えのデータ

                               quiz
                                |
        -------------------------------------------------
        |               |               |               |         
       1問目           2問目            3問目            4問目
        ｜     
    -------------------------       
    |           |           |
question      answers     correct



44行目〜48行目 定数・変数の定義
--------------------------------------------------------------------
Line44 
  const quizLength = quiz.length;
    →１行目で定義したquizの長さを「.length」で取得しそのデータを「quizLength」に格納
    →「配列名.length」で配列の最後のインデックスに +1 した値を返す。

Line45  
  let quizIndex = 0;
    →変数「quizIndex」を用意し０を代入

Line46  
  let score = 0;
    →変数「score」を用意し0を代入、初期スコア＝０ということ。

Line47  
  let $button = document.getElementsByTagName("button"); 
    →buttonタグ取得を「$button」に代入することで
    →要素か変数かを見分ける方法として、変数の前に「$」をつけるのが主流

Line48  
  const buttonLength = $button.length;
    →ボタンタグの個数を「.length」で取得した値を「buttonLength」に格納
--------------------------------------------------------------------



51行目〜60行目 クイズの問題文、選択肢を定義
--------------------------------------------------------------------
51   const setQuiz = () => {
52     document.getElementById("js-question").textContent = quiz[quizIndex].question;
53     let buttonIndex = 0;
54     let buttonLength = $button.length;
55     while (buttonIndex < buttonLength) {
56       $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
57       buttonIndex++;
58     }
59   }
60   setQuiz();
--------------------------------------------------------------------
51  const setQuiz = () => {
      →アロー関数。書き換えるのなら↓
        const setQuiz = function(){
          処理プログラム
        };


52  document.getElementById("js-question").textContent = quiz[quizIndex].question;

      >document.getElementById("js-question")
        →js-animationのIDがついた要素を取得する

      >.textContent
        →取得した要素内のテキスト情報を出力

      >quiz[quizIndex].question
        →quiz = 問題配列を格納している定数
        →[quizIndex] = quizの何番目の配列か。実際には数値がでる。参照元は「45行目」
        →.question = quiz配列内のquestionに入れている情報

    js-animationのIDがついた要素を取得してそこにはquizの該当配列ボックス内の


53  let buttonIndex = 0;
      →変数「quizIndex」を用意し０を代入



54  let buttonLength = $button.length;
      →ボタンタグの個数を「.length」で取得した値を「buttonLength」に格納
      →48行目でも同じこと書いているから消してOK


55  while (buttonIndex < buttonLength) {
      →buttonIndex が buttonLength よりも小さいとき、以下を繰り返す


56  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
      >$button[buttonIndex]

      >.textContent
        →取得した要素内のテキスト情報を出力

      >  

57  buttonIndex++;


60  setQuiz();
      →関数「setQuiz」の呼び出し

