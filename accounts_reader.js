// Accounts
const RAW_CHAR_WIDTH = 3;
const RAW_TO_VALUE = [];
/*
[
  " _ " +
  "| |" +
  "|_|"
] = "0";
*/
RAW_TO_VALUE[" _ | ||_|"] = "0";
/*
[
  "   " +
  "  |" +
  "  |"
] = "1";
*/
RAW_TO_VALUE["     |  |"] = "1";
/*
[
  " _ " +
  " _|" +
  "|_ "
] = "2";
*/
RAW_TO_VALUE[" _  _||_ "] = "2";
/*
[
  " _ " +
  " _|" +
  " _|"
] = "3";
*/
RAW_TO_VALUE[" _  _| _|"] = "3";
/*
[
  "   " +
  "|_|" +
  "  |"
] = "4";
*/
RAW_TO_VALUE["   |_|  |"] = "4";
/*
[
  " _ " +
  "|_ " +
  " _|"
] = "5";
*/
RAW_TO_VALUE[" _ |_  _|"] = "5";
/*
[
  " _ " +
  "|_ " +
  "|_|"
] = "6";
*/
RAW_TO_VALUE[" _ |_ |_|"] = "6";
/*
[
  " _ " +
  "  |" +
  "  |"
] = "7";
*/
RAW_TO_VALUE[" _   |  |"] = "7";
/*
[
  " _ " +
  "|_|" +
  "|_|"
] = "8";
*/
RAW_TO_VALUE[" _ |_||_|"] = "8";
/*
[
  " _ " +
  "|_|" +
  " _|"
] = "9";
*/
RAW_TO_VALUE[" _ |_| _|"] = "9";

const parse = rawAccountText => {
  const accountLines = rawAccountText;
  const cacheAccountNumber = [];
  for (let digitPlace = 0; digitPlace < 9; digitPlace += 1) {
    let digitIndex = "";
    // eslint-disable-next-line no-loop-func
    [0, 1, 2].forEach(indexOfAccountLine => {
      digitIndex += accountLines[indexOfAccountLine].slice(
        digitPlace * RAW_CHAR_WIDTH,
        (digitPlace + 1) * RAW_CHAR_WIDTH
      );
    });
    cacheAccountNumber.push(RAW_TO_VALUE[digitIndex] || "?");
  }
  return cacheAccountNumber.join("");
};

// AccountsReader

class AccountsReader {
  constructor(fileData) {
    this.fileData = fileData;
    this.accounts = this.accounts.bind(this);
    this.MAX_LENGTH = 4;
  }
}

AccountsReader.prototype.accounts = function prototypeAccounts() {
  const inputLines = this.fileData.split("\n");
  const accounts = [];
  let recordBuffer = [];

  inputLines.forEach(inputLine => {
    recordBuffer.push(inputLine);
    if (recordBuffer.length === this.MAX_LENGTH) {
      accounts.push(parse(recordBuffer));
      recordBuffer = [];
    }
  });

  return accounts;
};

module.exports = AccountsReader;
