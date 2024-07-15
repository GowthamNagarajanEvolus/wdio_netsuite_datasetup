const netsuiteTestdata = require('../../testdata/netsuite.json')
const netsuitePage = require('../../../pages/netsuitePage')

const accountId = netsuiteTestdata.evolusCredit_AccountId;

describe(`Netsuite_orderCancellation_evolusCredit_${accountId}`, () => {

  it(`netsuite_orderCancellation_evolusCredit_${accountId}`, async () => {
    await netsuitePage.orderCancellation(accountId);
  });


});
