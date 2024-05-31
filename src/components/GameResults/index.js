import {
  GameContainer,
  GameButton,
  GameImage,
  ResultText,
  ResultImageContainer,
  ResultName,
} from './styledComponents'

import './index.css'

const GameResults = props => {
  const {
    choicesList,
    opponentRandomChoice,
    isShow,
    text,
    newArray,
    restartGame,
  } = props

  const showGame = () => (
    <GameContainer>
      {isShow && (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => opponentRandomChoice(choicesList[0].id)}
          >
            <GameImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </GameButton>

          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => opponentRandomChoice(choicesList[1].id)}
          >
            <GameImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </GameButton>

          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => opponentRandomChoice(choicesList[2].id)}
          >
            <GameImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </GameButton>
        </>
      )}

      {!isShow && (
        <>
          <ResultImageContainer>
            <ResultName>YOU</ResultName>
            <GameImage src={newArray[0].imageUrl} alt="your choice" />
          </ResultImageContainer>

          <ResultImageContainer>
            <ResultName>OPPONENT</ResultName>
            <GameImage src={newArray[1].imageUrl} alt="opponent choice" />
          </ResultImageContainer>

          <ResultImageContainer>
            <ResultText>{text}</ResultText>
            <button
              className="result-button"
              type="button"
              onClick={restartGame}
            >
              PLAY AGAIN
            </button>
          </ResultImageContainer>
        </>
      )}
    </GameContainer>
  )

  return showGame()
}

export default GameResults
