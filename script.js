const numberInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

const romanNumerals = (num) => {
    const romanNum = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let roman = '';

    for (let key in romanNum) {
        while (num >= romanNum[key]) {
            roman += key;
            num -= romanNum[key];
        }
    }

    return roman;
}

const showOutput = () => {
    const inputInt = parseInt(numberInput.value);

    if (inputInt === '') {
        output.innerText = 'Please enter a valid number';
        return;
    } else if (inputInt < 1) {
        output.innerText = 'Please enter a number greater than or equal to 1';
        return;
    } else if (inputInt > 3999) {
        output.innerText = 'Please enter a number less than or equal to 3999';
        return;
    } else  {
        output.innerText = `${romanNumerals(inputInt)}`;
    }
}

convertButton.addEventListener('click', showOutput);