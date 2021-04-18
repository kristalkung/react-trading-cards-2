function TradingCard(props) {
  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <img src={props.imgUrl} />
      <p>Skill: {props.skill} </p>
    </div>
  );
}

function TradingCardContainer() {

  const [cards, updateCards] = React.useState([]);

  React.useEffect(() => {
    fetch('/cards.json')
    .then((response) => response.json())
    .then((data) => updateCards(data.cards))
  }, [])

  const tradingCards = [];

  for (const currentCard of cards) {
    tradingCards.push(
      <TradingCard
        key={currentCard.name}
        name={currentCard.name}
        skill={currentCard.skill}
        imgUrl={currentCard.imgUrl}
      />
    );
  }

  return (
    <div>{tradingCards}</div>
  );
}

function TradingCardForm() {
  return (
    <form>
      <h2>Add New Trading Card</h2>
    
      Name <input type="text" id="nameField" /> Skill
      <input type="text" id="skillField" />
      <button id="submit">Add</button>
    
      <h2>Trading Cards</h2>
    </form>
  );
}

function AddTradingCard() {
  const name = $("#nameField").val();
  const skill = $("#skillField").val();

  // React.useEffect(() => {
  //   fetch(//our form data)
  //   .then((response) => response.json())
  //   .then((data) => updateCards(data.cards))
  // }, [])
}

ReactDOM.render(
  <TradingCardContainer />,
  document.getElementById('container')
);

ReactDOM.render(
  <TradingCardForm />,
  document.getElementById('new-card-form')
);
