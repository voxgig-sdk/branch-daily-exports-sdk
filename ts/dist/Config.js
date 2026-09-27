"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const DebugFeature_1 = require("./feature/debug/DebugFeature");
const IdempotencyFeature_1 = require("./feature/idempotency/IdempotencyFeature");
const MetricsFeature_1 = require("./feature/metrics/MetricsFeature");
const PagingFeature_1 = require("./feature/paging/PagingFeature");
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    debug: DebugFeature_1.DebugFeature,
    idempotency: IdempotencyFeature_1.IdempotencyFeature,
    metrics: MetricsFeature_1.MetricsFeature,
    paging: PagingFeature_1.PagingFeature,
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'BranchDailyExports',
        slug: "branch-daily-exports",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        debug: {
            "options": {
                "active": false,
                "max": 100,
                "redact": [
                    "authorization",
                    "cookie",
                    "set-cookie",
                    "api-key",
                    "apikey",
                    "x-api-key",
                    "idempotency-key"
                ]
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "onEntry": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "none"
        },
        idempotency: {
            "options": {
                "active": false,
                "header": "Idempotency-Key",
                "methods": [
                    "POST",
                    "PUT",
                    "PATCH",
                    "DELETE"
                ],
                "ops": [
                    "create",
                    "update",
                    "remove"
                ]
            },
            "optspec": {
                "keygen": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "none"
        },
        metrics: {
            "options": {
                "active": false
            },
            "optspec": {
                "now": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "none"
        },
        paging: {
            "options": {
                "active": false,
                "afterVar": "after",
                "cursorParam": "cursor",
                "firstVar": "first",
                "limitParam": "limit",
                "pageParam": "page",
                "startPage": 1
            },
            "optspec": {
                "limit": "`$NUMBER`",
                "ops": "`$LIST`"
            },
            "strict": false,
            "transport": "none"
        },
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://api2.branch.io/v3",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            export: {},
        }
    };
    entity = {
        "export": {
            "fields": [
                {
                    "name": "branch_key",
                    "title": "Branch Key",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The Branch Key of the originating app obtained in your [Account Settings](https://help.branch.io/using-branch/docs/profile-settings)"
                },
                {
                    "name": "branch_secret",
                    "title": "Branch Secret",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The Branch Secret Key of the originating app obtained in your [Account Settings](https://help.branch.io/using-branch/docs/profile-settings)"
                },
                {
                    "name": "eo_branch_cta_view",
                    "title": "Eo Branch Cta View",
                    "type": "`$ARRAY`",
                    "short": "N/A"
                },
                {
                    "name": "eo_click",
                    "title": "Eo Click",
                    "type": "`$ARRAY`",
                    "short": "N/A"
                },
                {
                    "name": "eo_commerce_event",
                    "title": "Eo Commerce Event",
                    "type": "`$ARRAY`",
                    "short": "N/A"
                },
                {
                    "name": "eo_content_event",
                    "title": "Eo Content Event",
                    "type": "`$ARRAY`",
                    "short": "N/A"
                },
                {
                    "name": "eo_custom_event",
                    "title": "Eo Custom Event",
                    "type": "`$ARRAY`",
                    "short": "N/A"
                },
                {
                    "name": "eo_dismissal",
                    "title": "Eo Dismissal",
                    "type": "`$ARRAY`",
                    "short": "N/A"
                },
                {
                    "name": "eo_impression",
                    "title": "Eo Impression",
                    "type": "`$ARRAY`",
                    "short": "N/A"
                },
                {
                    "name": "eo_install",
                    "title": "Eo Install",
                    "type": "`$ARRAY`",
                    "short": "N/A"
                },
                {
                    "name": "eo_open",
                    "title": "Eo Open",
                    "type": "`$ARRAY`",
                    "short": "N/A"
                },
                {
                    "name": "eo_pageview",
                    "title": "Eo Pageview",
                    "type": "`$ARRAY`",
                    "short": "N/A"
                },
                {
                    "name": "eo_reinstall",
                    "title": "Eo Reinstall",
                    "type": "`$ARRAY`",
                    "short": "N/A"
                },
                {
                    "name": "eo_user_lifecycle_event",
                    "title": "Eo User Lifecycle Event",
                    "type": "`$ARRAY`",
                    "short": "N/A"
                },
                {
                    "name": "eo_web_session_start",
                    "title": "Eo Web Session Start",
                    "type": "`$ARRAY`",
                    "short": "N/A"
                },
                {
                    "name": "eo_web_to_app_auto_redirect",
                    "title": "Eo Web To App Auto Redirect",
                    "type": "`$ARRAY`",
                    "short": "N/A"
                },
                {
                    "name": "export_date",
                    "title": "Export Date",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The UTC date of the requested data export.",
                    "format": "date"
                }
            ],
            "name": "export",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/export",
                            "segments": [
                                {
                                    "lit": "export"
                                }
                            ],
                            "parts": [
                                "export"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map