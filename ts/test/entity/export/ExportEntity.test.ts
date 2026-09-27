

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { BranchDailyExportsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ExportEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BRANCH_DAILY_EXPORTS_TEST_LIVE=TRUE.
  afterEach(liveDelay('BRANCH_DAILY_EXPORTS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BranchDailyExportsSDK.test()
    const ent = testsdk.Export()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BRANCH_DAILY_EXPORTS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'export.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"branch_key":{"a":true,"h":"Branch Key","n":"branch_key","r":true,"sh":"The Branch Key of the originating app obtained in your [Account Settings](https://help.branch.io/using-branch/docs/profile-settings)","t":"`$STRING`","key$":"branch_key","index$":0},"branch_secret":{"a":true,"h":"Branch Secret","n":"branch_secret","r":true,"sh":"The Branch Secret Key of the originating app obtained in your [Account Settings](https://help.branch.io/using-branch/docs/profile-settings)","t":"`$STRING`","key$":"branch_secret","index$":1},"eo_branch_cta_view":{"a":true,"h":"Eo Branch Cta View","n":"eo_branch_cta_view","r":false,"sh":"N/A","t":"`$ARRAY`","key$":"eo_branch_cta_view","index$":2},"eo_click":{"a":true,"h":"Eo Click","n":"eo_click","r":false,"sh":"N/A","t":"`$ARRAY`","key$":"eo_click","index$":3},"eo_commerce_event":{"a":true,"h":"Eo Commerce Event","n":"eo_commerce_event","r":false,"sh":"N/A","t":"`$ARRAY`","key$":"eo_commerce_event","index$":4},"eo_content_event":{"a":true,"h":"Eo Content Event","n":"eo_content_event","r":false,"sh":"N/A","t":"`$ARRAY`","key$":"eo_content_event","index$":5},"eo_custom_event":{"a":true,"h":"Eo Custom Event","n":"eo_custom_event","r":false,"sh":"N/A","t":"`$ARRAY`","key$":"eo_custom_event","index$":6},"eo_dismissal":{"a":true,"h":"Eo Dismissal","n":"eo_dismissal","r":false,"sh":"N/A","t":"`$ARRAY`","key$":"eo_dismissal","index$":7},"eo_impression":{"a":true,"h":"Eo Impression","n":"eo_impression","r":false,"sh":"N/A","t":"`$ARRAY`","key$":"eo_impression","index$":8},"eo_install":{"a":true,"h":"Eo Install","n":"eo_install","r":false,"sh":"N/A","t":"`$ARRAY`","key$":"eo_install","index$":9},"eo_open":{"a":true,"h":"Eo Open","n":"eo_open","r":false,"sh":"N/A","t":"`$ARRAY`","key$":"eo_open","index$":10},"eo_pageview":{"a":true,"h":"Eo Pageview","n":"eo_pageview","r":false,"sh":"N/A","t":"`$ARRAY`","key$":"eo_pageview","index$":11},"eo_reinstall":{"a":true,"h":"Eo Reinstall","n":"eo_reinstall","r":false,"sh":"N/A","t":"`$ARRAY`","key$":"eo_reinstall","index$":12},"eo_user_lifecycle_event":{"a":true,"h":"Eo User Lifecycle Event","n":"eo_user_lifecycle_event","r":false,"sh":"N/A","t":"`$ARRAY`","key$":"eo_user_lifecycle_event","index$":13},"eo_web_session_start":{"a":true,"h":"Eo Web Session Start","n":"eo_web_session_start","r":false,"sh":"N/A","t":"`$ARRAY`","key$":"eo_web_session_start","index$":14},"eo_web_to_app_auto_redirect":{"a":true,"h":"Eo Web To App Auto Redirect","n":"eo_web_to_app_auto_redirect","r":false,"sh":"N/A","t":"`$ARRAY`","key$":"eo_web_to_app_auto_redirect","index$":15},"export_date":{"a":true,"fo":"date","h":"Export Date","n":"export_date","r":true,"sh":"The UTC date of the requested data export.","t":"`$STRING`","key$":"export_date","index$":16}},"name":"export","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /export","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/export","q":{},"r":{},"s":[{"lit":"export"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"export","name__orig":"export","Name":"Export","name_":"export","name-":"export","NAME":"EXPORT","index$":0}, {"active":true,"entity":"export","key$":"BasicExportFlow","kind":"basic","name":"BasicExportFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"export_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Export', {"POST /export":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"Daily Exports Request Body","properties":{"branch_key":{"description":"The Branch Key of the originating app obtained in your [Account Settings](https://help.branch.io/using-branch/docs/profile-settings)","type":"string","example":"key_live_xxxx","key$":"branch_key"},"branch_secret":{"description":"The Branch Secret Key of the originating app obtained in your [Account Settings](https://help.branch.io/using-branch/docs/profile-settings)","type":"string","example":"secret_live_xxxx","key$":"branch_secret"},"export_date":{"description":"The UTC date of the requested data export.","type":"string","format":"date","example":"2023-05-19","key$":"export_date"}},"required":["branch_key","branch_secret","export_date"],"x-ref":"#/components/schemas/daily_exports_body","index$":1}}}},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const export_ref01_ent = client.Export()
    let export_ref01_data = setup.data.new.export['export_ref01']

    export_ref01_data = (await export_ref01_ent.create(export_ref01_data)).data()
    assert(null != export_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/export/ExportTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = BranchDailyExportsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['export01','export02','export03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BRANCH_DAILY_EXPORTS_TEST_EXPORT_ENTID': idmap,
    'BRANCH_DAILY_EXPORTS_TEST_LIVE': 'FALSE',
    'BRANCH_DAILY_EXPORTS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['BRANCH_DAILY_EXPORTS_TEST_EXPORT_ENTID']

  const live = 'TRUE' === env.BRANCH_DAILY_EXPORTS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BRANCH_DAILY_EXPORTS_TEST_EXPORT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new BranchDailyExportsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.BRANCH_DAILY_EXPORTS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
