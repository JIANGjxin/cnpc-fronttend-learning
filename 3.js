const change = (type, value) => {
    let CNY;
    switch (type) {
        case "USD":
        CNY = value * 6.33;
            break;
        case "JPY":
        CNY = value * 0.06;
            break;
        case "EUR":
        CNY = value * 7.81;
            break;
        case "RUB":
        CNY = value * 0.11;
            break;
        case "CHF":
        CNY = value * 6.65;
    }
    return CNY;
}
console.log(change("RUB", 100));