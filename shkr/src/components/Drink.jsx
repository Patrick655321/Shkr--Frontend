function Drink(props) {
    const drink = props.drinkInfo
    return (
        <div>
            <img
                style={{
                    height: 200,
                }}
                src={drink.image}
                alt="Pink Robot"
            ></img>
            <div
                style={{
                    fontSize: 25,
                    fontWeight: 700,
                    marginBottom: 10,
                }}
            >
                {drink.name}
            </div>
            <div>
                {drink.measure1}ml of {drink.ingredient1}.
            </div>
            <div>
                {drink.measure2}ml of {drink.ingredient2}.
            </div>
            <div>
                {drink.measure3}ml of {drink.ingredient2}.
            </div>
            <div
                style={{
                    marginBottom: 10,
                }}
            >
                {drink.garnish} for a garnish.
            </div>
            <div>{drink.method}</div>
        </div>
    );
}

export default Drink;
