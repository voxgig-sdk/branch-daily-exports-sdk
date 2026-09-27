
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BranchDailyExportsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = BranchDailyExportsSDK.test()
    equal(testsdk instanceof BranchDailyExportsSDK, true,
      'BranchDailyExportsSDK.test() must return a client synchronously')
  })

})
