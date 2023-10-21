function generateCreditCardNumber() {
    let cardNumber = "";
    const cardNumberLength = 16;
    const cardNumberPrefix = "4";
    const cardNumberSuffix = Math.floor(Math.random() * (9 - 1 + 1) + 1);

    for (let i = 0; i < cardNumberLength; i++) {
        if (i === 0) {
            cardNumber += cardNumberPrefix;
        } else if (i === cardNumberLength - 1) {
            cardNumber += cardNumberSuffix;
        } else {
            cardNumber += Math.floor(Math.random() * 10);
        }
    }

    return cardNumber;
}

function obfuscateCardNumber(cardNumber) {
    let obfuscatedCardNumber = "";
    for (let i = 0; i < cardNumber.length; i++) {
        if (i === 8) {
            obfuscatedCardNumber += "...";

            obfuscatedCardNumber += cardNumber[i];
        } else {
            obfuscatedCardNumber += cardNumber[i];
        }
    }
    return "0x" + obfuscatedCardNumber;
}

export { generateCreditCardNumber, obfuscateCardNumber };
