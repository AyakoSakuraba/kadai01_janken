function janken(user) {
    // コンピュータの手の画像ファイル名を配列に保存
    let pcJankens = ['imgcom1.jpg', 'imgcom2.jpg', 'imgcom3.jpg'];

    // ユーザの手の画像ファイル名を配列に保存
    let userJankens = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

    //  コンピュータの手を乱数(0～2）で作成
    let pc = Math.floor(Math.random() * 3);

    // ユーザの手の画像を表示するimgタグをDOMツリーから検索
    let userImg = document.getElementById("userImg");
    // 検索したimgタグのsrc属性に該当するファイル名を設定
    userImg.src = "img/" + userJankens[user];

    // コンピュータの手の画像を表示するimgタグをDOMツリーから検索
    let pcImg = document.getElementById("pcImg");
    // 検索したimgタグのsrc属性に該当するファイル名を設定
    pcImg.src = "img/" + pcJankens[pc];

    // ユーザから見た勝敗結果(文字列)を2次元配列に保存
    let result = [['北海道の勝ち', '北海道の負け', 'あいこ'],
        ['北海道の負け', 'あいこ', '北海道の勝ち'],
        ['あいこ', '北海道の勝ち', '北海道の負け']];

    // 勝敗結果を
    document.getElementById("result").textContent = result[user][pc];
}