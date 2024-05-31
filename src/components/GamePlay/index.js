import {Component} from 'react'

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import './index.css'

import {
  GamePlayMainContainer,
  GameRulesView,
  PopUpView,
  PopUpImage,
} from './styledComponents'

import GameScore from '../GameScore'
import GameResult from '../GameResults'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GamePlay extends Component {
  state = {
    score: 0,
    isShow: true,
    text: '',
    newArray: [],
  }

  restartGame = () => this.setState({isShow: true})

  updateResult = (you, opponent) => {
    if (you.id === 'ROCK') {
      switch (opponent.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'

        default:
          return 'IT IS DRAW'
      }
    } else if (you.id === 'PAPER') {
      switch (opponent.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'

        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (opponent.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'

        default:
          return 'IT IS DRAW'
      }
    }
  }

  opponentRandomChoice = id => {
    const {score} = this.state
    const opponent = choicesList[Math.floor(Math.random() * choicesList.length)]
    // console.log(opponent)
    const you = choicesList.filter(eachItem => eachItem.id === id)
    // console.log(you[0])
    const result = this.updateResult(you[0], opponent)

    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }

    this.setState({
      score: newScore,
      isShow: false,
      text: result,
      newArray: [you[0], opponent],
    })
  }

  render() {
    const {isShow, text, score, newArray} = this.state
    return (
      <GamePlayMainContainer>
        <GameScore score={score} />
        <GameResult
          choicesList={choicesList}
          text={text}
          isShow={isShow}
          newArray={newArray}
          opponentRandomChoice={this.opponentRandomChoice}
          restartGame={this.restartGame}
        />

        <GameRulesView>
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                RULES
              </button>
            }
          >
            {close => (
              <PopUpView>
                <button
                  type="button"
                  className="trigger-button-close"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>

                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopUpView>
            )}
          </Popup>
        </GameRulesView>
      </GamePlayMainContainer>
    )
  }
}

export default GamePlay
