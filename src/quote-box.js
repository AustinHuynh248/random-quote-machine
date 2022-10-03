import React from "react";

class QuoteBox extends React.Component {
  render() {
    const quote = this.props.quote;
    const encodedString = encodeURIComponent(quote);
    const caption = encodeURIComponent("Chuck Norris The Kings!!");
    const hashtags = "chucknorris,quotes,freecodecamp";
    const canonicalUrl = encodeURIComponent(
      "https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine"
    );

    return (
      <div id="quote-box">
        <h1 id="text">
          <i class="fa-solid fa-quote-left"></i>
          {quote}
        </h1>
        <h4 id="author">- chuck Norris</h4>
        <div className="quote-box_button">
          <button type="button" onClick={this.props.clickHandle} id="new-quote">
            <i class="fa-solid fa-plus"></i>New Quote
          </button>
          <div id="quote-share-button">
            <a
              href={`https://twitter.com/intent/tweet?hashtags=${hashtags}&text=${encodedString}`}
              id="tweet-quote"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href={`https://www.tumblr.com/widgets/share/tool?tags=${hashtags}&posttype=quote&caption=${caption}&content=${quote}&canonicalUrl=${canonicalUrl}`}
              id="tweet-box"
            >
              <i className="fa-brands fa-tumblr"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
