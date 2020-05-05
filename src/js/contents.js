import React from "react";
import ReactDOM from "react-dom";

const QuoteButton = () => {
  const element = (
    <button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small c-message_actions__button" type="button">
      <i className="c-icon c-icon--add-reaction" type="add-reaction">
      </i>
    </button>
  );
  return element;
}

let messages = document.getElementsByClassName('c-message_kit__hover');
console.log(messages);

for(let i = 0; i < messages.length; i++) {
  messages[i].addEventListener('mouseover', () => {
    setTimeout(() => {  // Slackオリジナルのhoverの後にbuttonを追加するため処理を遅らせる

      console.log('[DEBUG] mouse over' + i);
      // 初回のhover検知のみ要素を追加
      const hoverRoot = messages[i].querySelector('button').parentNode;
      console.log('hoverRoot');
      if (hoverRoot.querySelector('.easyQuote') != null) {
        return;
      }

      // ボタン挿入用の要素を作成
      let quoteArea = document.createElement('span');
      quoteArea.className = 'easyQuote';
      hoverRoot.insertBefore(quoteArea, hoverRoot.firstChild);

      console.log('[DEBUG] button log');
      console.log(hoverRoot);

      ReactDOM.render(<QuoteButton />, document.querySelector(".easyQuote"));

    }, 10);
  }, false);
}
