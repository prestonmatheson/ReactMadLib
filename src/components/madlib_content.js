import React, { Component } from 'react';
class MadLibContent extends Component {
  render() {
    this.count = 1
    const data = this.props.data;
    return (
      <div className={data.completedForm ? 'show-content' : 'hide-content'}>
        <div className="content-wrapper">
           Ladies and gentlemen, this is {this.renderLabel(data.color)} Barber, your sportscaster, bringing you the last inning of the game 
           between the Cleveland <b>{this.renderLabel(data.pluralNoun)}</b> and the <b>{this.renderLabel(data.adjectiveOne)}</b> Yankees. <b>{this.renderLabel(data.celebrityOne)}</b> is 
           pitching for the Yankees. Here's the pitch! It's low <b>{this.renderLabel(data.adjectiveTwo)}</b> ball that just cuts the inside of the <b> 
           {this.renderLabel(data.nounOne)}</b> for a strike. That makes the count <b>{this.renderLabel(data.numberOne)}</b> strikes and <b>{this.renderLabel(data.numberTwo)}</b> 
           balls. Now here's the next pitch. The batter swings and connects. It's a long, high <b>{this.renderLabel(data.nounTwo)}</b> out to <b> 
           {this.renderLabel(data.adjectiveThree)}</b> field. But <b>{this.renderLabel(data.celebrityTwo)}</b> is coming up fast and has it for the second out. The next batter 
           up is <b>{this.renderLabel(data.celebrityThree)}</b> the Cleveland <b>{this.renderLabel(data.adjectiveFour)}</b>-stop. Here's the pitch... and it's hit... a short ground 
           ball to third <b>{this.renderLabel(data.nounThree)}</b>. <b>{this.renderLabel(data.celebrityFour)}</b> scoops it up and throws it to first base for an out and the 
           game is over. And the Yankees move into second place in the <b>{this.renderLabel(data.adjectiveFive)}</b> League!
        </div>
      </div>
      )
  }

  renderLabel = function(state) {
    return (
      <span> 
        <label className="black-label">{this.count++}</label><b>{state}</b>
      </span>
    )
  }.bind(this);
}

export default MadLibContent;