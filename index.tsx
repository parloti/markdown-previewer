import React, { Component } from "react";
import { render } from "react-dom";
import { Footer } from "./footer";
import "./style.css";
import marked from "marked";
import { placeholder } from "./placeholder";

marked.setOptions({
  breaks: true
});

interface AppProps {}
interface AppState {
  text: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      text: placeholder
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid min-h-100 m-0">
        <div className="min-h-100 d-flex flex-column justify-content-start align-items-center">
          <textarea  className="w-75" onChange={this.changeHandler} id="editor" value={this.state.text} />
          <div dangerouslySetInnerHTML={{ __html: marked(this.state.text)}} id="preview"></div>{" "}
        </div>
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
