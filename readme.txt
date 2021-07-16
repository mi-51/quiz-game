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



62行目〜79行 定数clickHandler関数の定義
---------------------------------------------------------------------
62  const clickHundler = (e) => {
63    if (quiz[quizIndex].correct === e.target.textContent) {
64      window.alert("正解！");
65      score++;
66    } else {
67      window.alert('不正解');
68    }
69
70    quizIndex++;
71
72    if (quizIndex < quizLength) {
73      //問題数あり
74      setQuiz();
75    } else {
76      //問題数なし
77      window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
78    }
79  };
---------------------------------------------------------------------
62  const clickHundler = (e) => {
      アロー関数


63  if (quiz[quizIndex].correct === e.target.textContent) {
      →[quizIndex]で何番目の問題かを取得しそのクイズの正解と
        クリックしたところに書かれている文字が同じならば


64  window.alert("正解！");
      →ウィンドウアラートに「正解！」と表示


65  score++;
      →scoreに＋1する


66  } else {
      →不正解の場合


67   window.alert('不正解');    
      →ウィンドウアラートに「不正解」と表示


70  quizIndex++;
      →そしてクイズの問題番号に＋1する


72  if (quizIndex < quizLength) {
      →もしクイズの問題数がクイズの長さより小さかったら


74  setQuiz();               
      →関数「setQuiz」の呼び出し


75  window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
      →もし最後の問題だった時はウィンドウアラートに回答結果を表示



82行目〜88行目 正誤判定
--------------------------------------------------------------
82  let handleIndex = 0;
83  while (handleIndex < buttonLength) {
84    $button[handleIndex].addEventListener('click', (e) => {
85      clickHundler(e);
86    })
87    handleIndex++;
88  };
--------------------------------------------------------------
82  let handleIndex = 0;
      →変数handleIndexを0で定義


83   while (handleIndex < buttonLength) {
      →もしボタンの数がhandleIndexより大きい時は以下を繰り返す


84  $button[handleIndex].addEventListener('click', (e) => {
      →ボタンタグ取得


85  clickHundler(e);
      →clickHandler関数を呼び出し


87  handleIndex++;
      →handleIndexを＋1する            