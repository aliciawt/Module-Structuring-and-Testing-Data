function getOrdinalNumber(num) {
 if ((num === "11") || (num === "12") || (num === "13")) return `${num}th`;
 if (num.slice(-1) === "1") return `${num}st`;
 if (num.slice(-1) === "2") return `${num}nd`;
 if (num.slice(-1) === "3") return `${num}rd`;
 else return `${num}th`;
}

module.exports = getOrdinalNumber;