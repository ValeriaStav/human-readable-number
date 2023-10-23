module.exports = function toReadable(num) {
    let units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    let teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    switch (true) {
        case num < 10:
            return units[num];
        case num < 20:
            return teens[num - 10];
        case num < 100 && num % 10 == 0:
            return tens[num / 10 - 2];
        case num < 100:
            return `${tens[Math.trunc(num / 10) - 2]} ${units[num % 10]}`;
        case num % 100 === 0:
            return `${units[num / 100]} hundred`;
        case num % 100 === 10:
            return `${units[Math.trunc(num / 100)]} hundred ${teens[0]}`;
        case num % 10 === 0:
            return `${units[Math.trunc(num / 100)]} hundred ${
                tens[(num % 100) / 10 - 2]
            }`;
        case num % 100 < 10:
            return `${units[Math.trunc(num / 100)]} hundred ${
                units[num % 100]
            }`;
        case num % 100 < 20:
            return `${units[Math.trunc(num / 100)]} hundred ${
                teens[(num % 100) - 10]
            }`;
        default:
            return `${units[Math.trunc(num / 100)]} hundred ${
                tens[Math.trunc((num % 100) / 10) - 2]
            } ${units[(num % 100) % 10]}`;
    }
};
