import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import "./index.scss";
import QuoteBox from "./quote-box";

class RandomQuote extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "",
    };
    this.getQuotes = this.getQuotes.bind(this);
  }
  componentDidMount() {
    this.getQuotes();
  }

  async getQuotes() {
    await axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((response) => {
        this.setState({
          quote: response.data.value,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div id="wrapper">
        <QuoteBox quote={this.state.quote} clickHandle={this.getQuotes} />
        <span id="dev-name">
          By Justin Huynh <i class="fa-solid fa-heart"></i>
        </span>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RandomQuote />);
