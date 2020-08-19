const express = require('express');
const { accounts } = require('../data');

const router = express.Router();

function routerFunction(){
  router.get('/check', (req, res) => {
    res.render(
      'account', 
      {
        title: 'Savings Account Summary',
        account: accounts.savings,
      })
  })
  router.route('/savings')
  .get((req, res) => {
    res.render(
      'account', 
      {
        title: 'Savings Account Summary',
        account: accounts.savings,
      })
    });

  router.route('/credit',)
    .get((req, res) => {
    res.render(
      'account', 
      {
        title: 'Credit Account Summary',
        account: accounts.credit,
      }
    );
  });

  router.route('/checking')
  .get((req, res) => {
    res.render(
      'account', 
      {
        title: 'Checking Account Summary',
        account: accounts.checking,
      }
    );
  }); 
  return router;
}

module.exports = routerFunction;