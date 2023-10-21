import Card from "./CardTemplate";
import { generateCreditCardNumber, obfuscateCardNumber } from "./utils";

const RandomCard = ({ className = "" }) => {
    const id = Math.random().toString(36).substring(2, 15);
    const cardNumber = generateCreditCardNumber();
    const cardAddress = "";
    const cvv = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    const expirationDate = `${Math.floor(Math.random() * (12 - 1 + 1)) + 1}/${
        Math.floor(Math.random() * (27 - 24 + 1)) + 24
    }`;

    return (
        <Card
            className={`${className}`}
            id={id}
            cvv={cvv}
            expirationDate={expirationDate}
            cardNumber={obfuscateCardNumber(cardNumber)}
            cardAddress={cardAddress}
        />
    );
};

export default RandomCard;
