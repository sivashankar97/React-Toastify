import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer, toast } from "react-toastify";

// default minimum style for autoClose inside
import "./styles.css";

class App extends React.Component {
  state = {
    border: true
  };

  toggleBorder = () => this.setState({ border: !this.state.border });

  render() {
    const { border } = this.state;
    return (
      <div className="App">
        <button
          onClick={() =>
            toast("Disapear after a few sec", {
              autoClose: 1000,
              ...(border && { className: "border" })
            })
          }
        >
          Show notification
        </button>

        <button onClick={this.toggleBorder}>
          {border ? "Hide" : "Show"} border
        </button>
        <ToastContainer autoClose={1000} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
