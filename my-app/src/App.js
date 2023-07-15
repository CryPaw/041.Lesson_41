import logo from './logo.svg';
import './App.css';
import React,{ Component }  from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
      count5: 0,
      emojiWin: "",
      emoji1: "🙊",
      emoji2: "😈",
      emoji3: "😏",
      emoji4: "👍",
      emoji5: "💜",
    }
  }


  counter1 = () => {
    this.setState({count1: this.state.count1 + 1})
  };
  counter2 = () => {
    this.setState({count2: this.state.count2 + 1})
  };
  counter3 = () => {
    this.setState({count3: this.state.count3 + 1})
  };
  counter4 = () => {
    this.setState({count4: this.state.count4 + 1})
  };
  counter5 = () => {
    this.setState({count5: this.state.count5 + 1})
  };

  btnHandler = () => {
    if (this.state.count1 > this.state.count2 && this.state.count1 > this.state.count3 && this.state.count1 > this.state.count4 && this.state.count1 > this.state.count5) {
      return this.setState({emojiWin: ""}), this.setState({emojiWin: this.state.emoji1}), console.log(this.state.emojiWin)
    }else if (this.state.count2 > this.state.count1 && this.state.count2 > this.state.count3 && this.state.count2 > this.state.count4 && this.state.count2 > this.state.count5) {
      return this.setState({emojiWin: ""}), this.setState({emojiWin: this.state.emoji2}), console.log(this.state.emojiWin)
    }else if (this.state.count3 > this.state.count1 && this.state.count3 > this.state.count2 && this.state.count3 > this.state.count4 && this.state.count3 > this.state.count5) {
      return this.setState({emojiWin: ""}), this.setState({emojiWin: this.state.emoji3}), console.log(this.state.emojiWin)
    }else if (this.state.count4 > this.state.count1 && this.state.count4 > this.state.count2 && this.state.count4 > this.state.count3 && this.state.count4 > this.state.count5) {
      return this.setState({emojiWin: ""}), this.setState({emojiWin: this.state.emoji4}), console.log(this.state.emojiWin)
    }else if (this.state.count5 > this.state.count1 && this.state.count5 > this.state.count2 && this.state.count5 > this.state.count3 && this.state.count5 > this.state.count4) {
      return this.setState({emojiWin: ""}), this.setState({emojiWin: this.state.emoji5}), console.log(this.state.emojiWin)
    }else {
      return this.setState({emojiWin: ""}), console.log(this.state.emojiWin)
    }

    // this.state.count1 > this.state.count2 && this.state.count3 && this.state.count4 && this.state.count5 ? this.setState({emojiWin: this.state.emoji1}) : this.setState({emojiWin: ""});
    // this.state.count2 > this.state.count1 && this.state.count3 && this.state.count4 && this.state.count5 ? this.setState({emojiWin: this.state.emoji2}) : this.setState({emojiWin: ""});
    // this.state.count3 > this.state.count1 && this.state.count2 && this.state.count4 && this.state.count5 ? this.setState({emojiWin: this.state.emoji3}) : this.setState({emojiWin: ""});
    // this.state.count4 > this.state.count1 && this.state.count2 && this.state.count3 && this.state.count5 ? this.setState({emojiWin: this.state.emoji4}) : this.setState({emojiWin: ""});
    // this.state.count5 > this.state.count1 && this.state.count2 && this.state.count3 && this.state.count4 ? this.setState({emojiWin: this.state.emoji5}) : this.setState({emojiWin: ""});

  }

  render() {
    return (
      <div className="container">
          <h1>Голосование</h1>
          <div className="voting" id="vot">
              <button id="b1" onClick={this.counter1}>🙊</button>
              <button id="b2" onClick={this.counter2}>😈</button>
              <button id="b3" onClick={this.counter3}>😏</button>
              <button id="b4" onClick={this.counter4}>👍</button>
              <button id="b5" onClick={this.counter5}>💜</button>
              <div className="сount_area">
                  <ul className="countar">
                      <li className="county1">{this.state.count1}</li>
                      <li className="county2">{this.state.count2}</li>
                      <li className="county3">{this.state.count3}</li>
                      <li className="county4">{this.state.count4}</li>
                      <li className="county5">{this.state.count5}</li>
                  </ul>
              </div>
          </div>
          <br/>
        <button className="bestEmoji" onClick={this.btnHandler}>Результаты</button>
        
        <div className='emojiWinner'>
        <br/>
        {this.state.emojiWin}
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <CounterClass/>
    </div>
  );
}

export default App;
