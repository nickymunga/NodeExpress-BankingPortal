const express = require('express');
const { accounts, writeJSON } = require('../data');

const router = express.Router();

function routerFunction() {
  router.route('/payment')
    .get((req, res) => {
      res.render(
        'payment',
        {
          account: accounts.credit
        }
      )
    })
    .post((req, res) => {
      accounts.credit.balance = parseInt(accounts.credit.balance) - parseInt(req.body.amount);
      accounts.credit.available = parseInt(accounts.credit.available) + parseInt(req.body.amount);
      writeJSON();
      res.render(
        'payment',
        {
          message: "Payment Successful",
          account: accounts.credit
        }
      )
    });

  router.route('/transfer')
    .get((req, res) => {
      res.render('transfer', {});
    })
    .post((req, res) => {
      console.log(req);
      const { from, to, amount } = req.body;
      accounts[from].balance = parseInt(accounts[from].balance) - parseInt(amount);
      accounts[to].balance = parseInt(accounts[to].balance) + parseInt(amount);
      writeJSON();
      res.render(
        'transfer',
        {
          message: 'Transfer Completed'
        }
      )
    });
  return router;
}

module.exports = routerFunction;