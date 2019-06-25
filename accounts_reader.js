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
      console.log(recordBuffer);
      accounts.push(recordBuffer.join("\n"));
      recordBuffer = [];
    }
  });

  return accounts;
};

module.exports = AccountsReader;
