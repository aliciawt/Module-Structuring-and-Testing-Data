function getCardValue(card) {
    const rank = card.slice(0, -1);
    if (rank === "A") return 11;
    if (rank === "K" || rank === "Q" || rank === "J") return 10;
    const num = Number(rank);
    if (num >= 2 && num <= 10) return num;
    return "Invalid card rank.";
}

module.exports = getCardValue;