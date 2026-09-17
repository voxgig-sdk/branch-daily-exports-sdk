"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ExportEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BRANCH_DAILY_EXPORTS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BRANCH_DAILY_EXPORTS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BranchDailyExportsSDK.test();
        const ent = testsdk.Export();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BRANCH_DAILY_EXPORTS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'export.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "branch_key", "req": true, "short": "The Branch Key of the originating app obtained in your [Account Settings](https://help.branch.io/using-branch/docs/profile-settings)", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "branch_secret", "req": true, "short": "The Branch Secret Key of the originating app obtained in your [Account Settings](https://help.branch.io/using-branch/docs/profile-settings)", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "eo_branch_cta_view", "req": false, "short": "N/A", "type": "`$ARRAY`", "index$": 2 }, { "active": true, "name": "eo_click", "req": false, "short": "N/A", "type": "`$ARRAY`", "index$": 3 }, { "active": true, "name": "eo_commerce_event", "req": false, "short": "N/A", "type": "`$ARRAY`", "index$": 4 }, { "active": true, "name": "eo_content_event", "req": false, "short": "N/A", "type": "`$ARRAY`", "index$": 5 }, { "active": true, "name": "eo_custom_event", "req": false, "short": "N/A", "type": "`$ARRAY`", "index$": 6 }, { "active": true, "name": "eo_dismissal", "req": false, "short": "N/A", "type": "`$ARRAY`", "index$": 7 }, { "active": true, "name": "eo_impression", "req": false, "short": "N/A", "type": "`$ARRAY`", "index$": 8 }, { "active": true, "name": "eo_install", "req": false, "short": "N/A", "type": "`$ARRAY`", "index$": 9 }, { "active": true, "name": "eo_open", "req": false, "short": "N/A", "type": "`$ARRAY`", "index$": 10 }, { "active": true, "name": "eo_pageview", "req": false, "short": "N/A", "type": "`$ARRAY`", "index$": 11 }, { "active": true, "name": "eo_reinstall", "req": false, "short": "N/A", "type": "`$ARRAY`", "index$": 12 }, { "active": true, "name": "eo_user_lifecycle_event", "req": false, "short": "N/A", "type": "`$ARRAY`", "index$": 13 }, { "active": true, "name": "eo_web_session_start", "req": false, "short": "N/A", "type": "`$ARRAY`", "index$": 14 }, { "active": true, "name": "eo_web_to_app_auto_redirect", "req": false, "short": "N/A", "type": "`$ARRAY`", "index$": 15 }, { "active": true, "format": "date", "name": "export_date", "req": true, "short": "The UTC date of the requested data export.", "type": "`$STRING`", "index$": 16 }], "name": "export", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /export", "json": "{\"operationId\":\"postDailyExports\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Daily Exports Request Body\",\"properties\":{\"branch_key\":{\"description\":\"The Branch Key of the originating app obtained in your [Account Settings](https://help.branch.io/using-branch/docs/profile-settings)\",\"example\":\"key_live_xxxx\",\"type\":\"string\"},\"branch_secret\":{\"description\":\"The Branch Secret Key of the originating app obtained in your [Account Settings](https://help.branch.io/using-branch/docs/profile-settings)\",\"example\":\"secret_live_xxxx\",\"type\":\"string\"},\"export_date\":{\"description\":\"The UTC date of the requested data export.\",\"example\":\"2023-05-19\",\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"branch_key\",\"branch_secret\",\"export_date\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"eo_branch_cta_view\":{\"description\":\"N/A\",\"items\":{\"example\":\"https://branch-exports-web-usw2.s3.us-west-1.amazonaws.com/api_export/y%3D2023/m%3D05/d%3D19/app_id%3D{APP_ID_HERE}/topic%3Deo_branch_cta_view/unique-csv-file-name-here.csv.gz?X-Amz-Algorithm={AMZ_ALGORITHM_HERE}&X-Amz-Date={AMZ_DATE_HERE}&X-Amz-SignedHeaders={AMZ_SIGNED_HEADERS_HERE}&X-Amz-Expires={AMZ_EXPIRATION_HERE}&X-Amz-Credential={AMZ_CREDENTIAL_HERE}&X-Amz-Signature={AMZ_SIGNATURE_HERE}\\n\",\"type\":\"string\"},\"type\":\"array\"},\"eo_click\":{\"description\":\"N/A\",\"items\":{\"example\":\"https://branch-exports-web-usw2.s3.us-west-1.amazonaws.com/api_export/y%3D2023/m%3D05/d%3D19/app_id%3D{APP_ID_HERE}/topic%3Deo_click/unique-csv-file-name-here.csv.gz?X-Amz-Algorithm={AMZ_ALGORITHM_HERE}&X-Amz-Date={AMZ_DATE_HERE}&X-Amz-SignedHeaders={AMZ_SIGNED_HEADERS_HERE}&X-Amz-Expires={AMZ_EXPIRATION_HERE}&X-Amz-Credential={AMZ_CREDENTIAL_HERE}&X-Amz-Signature={AMZ_SIGNATURE_HERE}\\n\",\"type\":\"string\"},\"type\":\"array\"},\"eo_commerce_event\":{\"description\":\"N/A\",\"items\":{\"example\":\"https://branch-exports-web-usw2.s3.us-west-1.amazonaws.com/api_export/y%3D2023/m%3D05/d%3D19/app_id%3D{APP_ID_HERE}/topic%3Deo_commerce_event/unique-csv-file-name-here.csv.gz?X-Amz-Algorithm={AMZ_ALGORITHM_HERE}&X-Amz-Date={AMZ_DATE_HERE}&X-Amz-SignedHeaders={AMZ_SIGNED_HEADERS_HERE}&X-Amz-Expires={AMZ_EXPIRATION_HERE}&X-Amz-Credential={AMZ_CREDENTIAL_HERE}&X-Amz-Signature={AMZ_SIGNATURE_HERE}\\n\",\"type\":\"string\"},\"type\":\"array\"},\"eo_content_event\":{\"description\":\"N/A\",\"items\":{\"example\":\"https://branch-exports-web-usw2.s3.us-west-1.amazonaws.com/api_export/y%3D2023/m%3D05/d%3D19/app_id%3D{APP_ID_HERE}/topic%3Deo_content_event/unique-csv-file-name-here.csv.gz?X-Amz-Algorithm={AMZ_ALGORITHM_HERE}&X-Amz-Date={AMZ_DATE_HERE}&X-Amz-SignedHeaders={AMZ_SIGNED_HEADERS_HERE}&X-Amz-Expires={AMZ_EXPIRATION_HERE}&X-Amz-Credential={AMZ_CREDENTIAL_HERE}&X-Amz-Signature={AMZ_SIGNATURE_HERE}\\n\",\"type\":\"string\"},\"type\":\"array\"},\"eo_custom_event\":{\"description\":\"N/A\",\"items\":{\"example\":\"\",\"type\":\"string\"},\"type\":\"array\"},\"eo_dismissal\":{\"description\":\"N/A\",\"items\":{\"example\":\"\",\"type\":\"string\"},\"type\":\"array\"},\"eo_impression\":{\"description\":\"N/A\",\"items\":{\"example\":\"\",\"type\":\"string\"},\"type\":\"array\"},\"eo_install\":{\"description\":\"N/A\",\"items\":{\"example\":\"https://branch-exports-web-usw2.s3.us-west-1.amazonaws.com/api_export/y%3D2023/m%3D05/d%3D19/app_id%3D{APP_ID_HERE}/topic%3Deo_install/unique-csv-file-name-here.csv.gz?X-Amz-Algorithm={AMZ_ALGORITHM_HERE}&X-Amz-Date={AMZ_DATE_HERE}&X-Amz-SignedHeaders={AMZ_SIGNED_HEADERS_HERE}&X-Amz-Expires={AMZ_EXPIRATION_HERE}&X-Amz-Credential={AMZ_CREDENTIAL_HERE}&X-Amz-Signature={AMZ_SIGNATURE_HERE}\\n\",\"type\":\"string\"},\"type\":\"array\"},\"eo_open\":{\"description\":\"N/A\",\"items\":{\"example\":\"https://branch-exports-web-usw2.s3.us-west-1.amazonaws.com/api_export/y%3D2023/m%3D05/d%3D19/app_id%3D{APP_ID_HERE}/topic%3Deo_open/unique-csv-file-name-here.csv.gz?X-Amz-Algorithm={AMZ_ALGORITHM_HERE}&X-Amz-Date={AMZ_DATE_HERE}&X-Amz-SignedHeaders={AMZ_SIGNED_HEADERS_HERE}&X-Amz-Expires={AMZ_EXPIRATION_HERE}&X-Amz-Credential={AMZ_CREDENTIAL_HERE}&X-Amz-Signature={AMZ_SIGNATURE_HERE}\\n\",\"type\":\"string\"},\"type\":\"array\"},\"eo_pageview\":{\"description\":\"N/A\",\"items\":{\"example\":\"https://branch-exports-web-usw2.s3.us-west-1.amazonaws.com/api_export/y%3D2023/m%3D05/d%3D19/app_id%3D{APP_ID_HERE}/topic%3Deo_pageview/unique-csv-file-name-here.csv.gz?X-Amz-Algorithm={AMZ_ALGORITHM_HERE}&X-Amz-Date={AMZ_DATE_HERE}&X-Amz-SignedHeaders={AMZ_SIGNED_HEADERS_HERE}&X-Amz-Expires={AMZ_EXPIRATION_HERE}&X-Amz-Credential={AMZ_CREDENTIAL_HERE}&X-Amz-Signature={AMZ_SIGNATURE_HERE}\\n\",\"type\":\"string\"},\"type\":\"array\"},\"eo_reinstall\":{\"description\":\"N/A\",\"items\":{\"example\":\"https://branch-exports-web-usw2.s3.us-west-1.amazonaws.com/api_export/y%3D2023/m%3D05/d%3D19/app_id%3D{APP_ID_HERE}/topic%3Deo_reinstall/unique-csv-file-name-here.csv.gz?X-Amz-Algorithm={AMZ_ALGORITHM_HERE}&X-Amz-Date={AMZ_DATE_HERE}&X-Amz-SignedHeaders={AMZ_SIGNED_HEADERS_HERE}&X-Amz-Expires={AMZ_EXPIRATION_HERE}&X-Amz-Credential={AMZ_CREDENTIAL_HERE}&X-Amz-Signature={AMZ_SIGNATURE_HERE}\\n\",\"type\":\"string\"},\"type\":\"array\"},\"eo_user_lifecycle_event\":{\"description\":\"N/A\",\"items\":{\"example\":\"\",\"type\":\"string\"},\"type\":\"array\"},\"eo_web_session_start\":{\"description\":\"N/A\",\"items\":{\"example\":\"https://branch-exports-web-usw2.s3.us-west-1.amazonaws.com/api_export/y%3D2023/m%3D05/d%3D19/app_id%3D{APP_ID_HERE}/topic%3Deo_web_session_start/unique-csv-file-name-here.csv.gz?X-Amz-Algorithm={AMZ_ALGORITHM_HERE}&X-Amz-Date={AMZ_DATE_HERE}&X-Amz-SignedHeaders={AMZ_SIGNED_HEADERS_HERE}&X-Amz-Expires={AMZ_EXPIRATION_HERE}&X-Amz-Credential={AMZ_CREDENTIAL_HERE}&X-Amz-Signature={AMZ_SIGNATURE_HERE}\\n\",\"type\":\"string\"},\"type\":\"array\"},\"eo_web_to_app_auto_redirect\":{\"description\":\"N/A\",\"items\":{\"example\":\"\",\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Status of aggregate export\"},\"400\":{\"content\":{\"application/json\":{\"examples\":{\"Result\":{\"value\":\"{\\n    \\\"error\\\": {\\n        \\\"message\\\": \\\"Authentication failed !\\\",\\n        \\\"code\\\": 400\\n    }\\n}\"}},\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"example\":\"400\",\"type\":\"integer\"},\"message\":{\"example\":\"Authentication failed !\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Authentication Failed\"},\"429\":{\"content\":{\"application/json\":{\"examples\":{\"Result\":{\"value\":\"{\\n    \\\"error\\\": {\\n        \\\"code\\\": 429,\\n        \\\"message\\\": \\\"Rate limit reached.\\\"\\n    }\\n}\"}},\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"example\":\"429\",\"type\":\"integer\"},\"message\":{\"example\":\"Rate limit reached.\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Rate Limit Reached\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/export", "segments": [{ "lit": "export" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "export", "name__orig": "export", "Name": "Export", "name_": "export", "name-": "export", "NAME": "EXPORT", "index$": 0 }, { "active": true, "entity": "export", "key$": "BasicExportFlow", "kind": "basic", "name": "BasicExportFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "export_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'Export');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const export_ref01_ent = client.Export();
        let export_ref01_data = setup.data.new.export['export_ref01'];
        export_ref01_data = (await export_ref01_ent.create(export_ref01_data)).data();
        (0, node_assert_1.default)(null != export_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/export/ExportTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BranchDailyExportsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['export01', 'export02', 'export03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BRANCH_DAILY_EXPORTS_TEST_EXPORT_ENTID': idmap,
        'BRANCH_DAILY_EXPORTS_TEST_LIVE': 'FALSE',
        'BRANCH_DAILY_EXPORTS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['BRANCH_DAILY_EXPORTS_TEST_EXPORT_ENTID'];
    const live = 'TRUE' === env.BRANCH_DAILY_EXPORTS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BRANCH_DAILY_EXPORTS_TEST_EXPORT_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.BranchDailyExportsSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=ExportEntity.test.js.map