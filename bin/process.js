#!/usr/bin/env node
const fs = require("fs");
const AccountsReader = require("../accounts_reader.js");

(function startProcess() {
  const inputFile = process.argv[2];

  fs.readFile(inputFile, "utf8", (err, data) => {
    if (err) {
      console.error("Could not open file %s: %s", inputFile, err);
      process.exit(1);
    }
    const reader = new AccountsReader(data);
    const formattedAccounts = reader.accounts();
    console.log("From reader", formattedAccounts);
  });
})();
