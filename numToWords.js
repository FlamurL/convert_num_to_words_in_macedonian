const numbersToWordsMacedonian = {
  0: "нула",
  1: "еден",
  2: "два",
  3: "три",
  4: "четири",
  5: "пет",
  6: "шест",
  7: "седум",
  8: "осум",
  9: "девет",
  10: "десет",
  11: "единаесет",
  12: "дванаесет",
  13: "тринаесет",
  14: "четиринаесет",
  15: "петнаесет",
  16: "шеснаесет",
  17: "седумнаесет",
  18: "осумнаесет",
  19: "деветнаесет",
  20: "дваесет",
  30: "триесет",
  40: "четириесет",
  50: "педесет",
  60: "шестдесет",
  70: "седумдесет",
  80: "осумдесет",
  90: "деветдесет",
  100: "сто",
  200: "двесте",
  300: "триста",
  400: "четиристотини",
  500: "петстотини",
  600: "шестотини",
  700: "седумстотини",
  800: "осумстотини",
  900: "деветстотини",
};

function countdigits(total) {
  const numString = Math.abs(total).toString();

  return numString.length;
}

function number_to_letters(total, sol) {
  let length = countdigits(total);

  if (length > 6) {
    let mill = Math.floor(total / 1000000);

    let lengthofmill = countdigits(mill);

    if (lengthofmill === 3) {
      let left_over = mill - Math.floor(mill % 100);
      let millWord = numbersToWordsMacedonian[left_over];

      sol += millWord;

      if (Math.floor((mill % 100) / 10) === 1) {
        left_over = Math.floor(mill % 100);
        millWord = numbersToWordsMacedonian[left_over];
        sol += millWord;
      } else {
        if (Math.floor((mill % 100) / 10) === 0) {
          left_over = Math.floor(mill % 10);
          if (left_over > 0) {
            millWord = numbersToWordsMacedonian[left_over];

            sol += " и " + millWord;
          }
        } else {
          left_over = Math.floor((mill % 100) - (mill % 10));

          millWord = numbersToWordsMacedonian[left_over];

          sol += millWord;
          left_over = Math.floor(mill % 10);
          if (left_over > 0) {
            millWord = numbersToWordsMacedonian[left_over];

            sol += " и " + millWord;
          }
        }
      }
    } else if (lengthofmill === 2) {
      if (Math.floor(mill / 10) === 1) {
        left_over = Math.floor(mill);

        millWord = numbersToWordsMacedonian[left_over];
        sol += millWord;
      } else {
        let left_over = mill - (mill % 10);
        let millWord = numbersToWordsMacedonian[left_over];
        sol += millWord;
        left_over = mill % 10;
        if (left_over > 0) {
          millWord = numbersToWordsMacedonian[left_over];
          sol += " и " + millWord;
        }
      }
    } else if (lengthofmill === 1) {
      let left_over = mill;
      let millWord = numbersToWordsMacedonian[left_over];
      if (left_over > 1) {
        sol += millWord;
        sol += " милиони ";
      } else {
        sol += "еден милион ";
      }
    }
    if (lengthofmill > 1) {
      sol += " милион ";
    }
    let remainder = total % 1000000;

    return number_to_letters(remainder, sol);
  } else if (length > 3) {
    let thousand = Math.floor(total / 1000);

    let lengthofthousand = countdigits(thousand);

    if (lengthofthousand === 3) {
      let left_over = thousand - Math.floor(thousand % 100);
      let thousandWord = numbersToWordsMacedonian[left_over];
      sol += thousandWord;
      if (Math.floor((thousand % 100) / 10) === 1) {
        left_over = Math.floor(thousand % 100);
        thousandWord = numbersToWordsMacedonian[left_over];
        sol += " " + thousandWord;
      } else {
        if (Math.floor((thousand % 100) / 10) === 0) {
          left_over = Math.floor(thousand % 10);
          if (left_over > 0) {
            thousandWord = numbersToWordsMacedonian[left_over];
            sol += " и " + thousandWord;
          }
        } else {
          left_over = Math.floor((thousand % 100) - (thousand % 10));

          thousandWord = numbersToWordsMacedonian[left_over];

          sol += " " + thousandWord;
          left_over = Math.floor(thousand % 10);
          if (left_over > 0) {
            thousandWord = numbersToWordsMacedonian[left_over];
            sol += " и " + thousandWord;
          }
        }
      }
    } else if (lengthofthousand === 2) {
      if (Math.floor(thousand / 10) === 1) {
        left_over = Math.floor(thousand);
        thousandWord = numbersToWordsMacedonian[left_over];
        sol += thousandWord;
      } else {
        let left_over = thousand - (thousand % 10);
        let thousandWord = numbersToWordsMacedonian[left_over];
        sol += " " + thousandWord;
        left_over = thousand % 10;
        if (left_over > 0) {
          thousandWord = numbersToWordsMacedonian[left_over];
          sol += " и " + thousandWord;
        }
      }
    } else if (lengthofthousand === 1) {
      let left_over = thousand;
      let thousandWord = numbersToWordsMacedonian[left_over];

      if (left_over > 1) {
        sol += thousandWord;
        sol += " илјади ";
      } else {
        sol += "една илјада ";
      }
    }
    if (lengthofthousand > 1) {
      sol += " илјади ";
    }

    let remainder = total % 1000;

    return number_to_letters(remainder, sol);
  } else if (length > 0) {
    if (total === 0) return sol;

    let hundred = Math.floor(total);

    let lengthofhundred = countdigits(hundred);

    if (lengthofhundred === 3) {
      let left_over = hundred - Math.floor(hundred % 100);
      let hundredWord = numbersToWordsMacedonian[left_over];
      sol += hundredWord;
      if (Math.floor((hundred % 100) / 10) === 1) {
        left_over = Math.floor(hundred % 100);
        hundredWord = numbersToWordsMacedonian[left_over];
        sol += " " + hundredWord;
      } else {
        if (Math.floor((hundred % 100) / 10) === 0) {
          left_over = Math.floor(hundred % 10);
          if (left_over > 0) {
            hundredWord = numbersToWordsMacedonian[left_over];
            sol += " и " + hundredWord;
          }
        } else {
          left_over = Math.floor((hundred % 100) - (hundred % 10));

          hundredWord = numbersToWordsMacedonian[left_over];

          sol += " " + hundredWord;
          left_over = Math.floor(hundred % 10);
          if (left_over > 0) {
            hundredWord = numbersToWordsMacedonian[left_over];
            sol += " и " + hundredWord;
          }
        }
      }
    } else if (lengthofhundred === 2) {
      if (Math.floor(hundred / 10) === 1) {
        left_over = Math.floor(hundred);
        hundredWord = numbersToWordsMacedonian[left_over];
        sol += hundredWord;
      } else {
        if (Math.floor((hundred % 100) / 10) === 0) {
          left_over = hundred % 10;
          if (left_over > 0) {
            hundredWord = numbersToWordsMacedonian[left_over];
            sol += " и " + hundredWord;
          }
        } else {
          let left_over = hundred - (hundred % 10);
          let hundredWord = numbersToWordsMacedonian[left_over];
          sol += hundredWord;
          left_over = hundred % 10;
          if (left_over > 0) {
            hundredWord = numbersToWordsMacedonian[left_over];
            sol += " и " + hundredWord;
          }
        }
      }
    } else if (lengthofhundred === 1) {
      let left_over = hundred;
      if (left_over > 0) {
        let hundredWord = numbersToWordsMacedonian[left_over];
        sol += "и " + hundredWord;
      }
    }
    sol += " ";
    return sol;
  }
}

function last_check(total, res) {
  if (countdigits(total) === 3) {
    if (total % 10 === 0) {
      const words = res.split(" ");

      res = words.slice(0, -2).join(" ") + " и ";
      for (let i = words.length - 2; i < words.length; i++) {
        res += words[i] + " ";
      }
    }
  }
  if (countdigits(total) > 3) {
    if (total % 100 === 0) {
      const words = res.split(" ");

      res = words.slice(0, -2).join(" ") + " и ";
      for (let i = words.length - 2; i < words.length; i++) {
        res += words[i] + " ";
      }
    } else if (total % 10 === 0) {
      const words = res.split(" ");

      res = words.slice(0, -2).join(" ") + " и ";
      for (let i = words.length - 2; i < words.length; i++) {
        res += words[i] + " ";
      }
    }
  }
  return res;
}

let total = 39005; //enter the number

let sol = "";
let res = number_to_letters(total, sol);
res += "денари";
res = last_check(total, res);

console.log(res);
