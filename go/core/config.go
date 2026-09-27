package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "BranchDailyExports",
			"slug": "branch-daily-exports",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api2.branch.io/v3",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"export": map[string]any{},
			},
		},
		"entity": map[string]any{
			"export": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "branch_key",
						"title": "Branch Key",
						"type": "`$STRING`",
						"req": true,
						"short": "The Branch Key of the originating app obtained in your [Account Settings](https://help.branch.io/using-branch/docs/profile-settings)",
					},
					map[string]any{
						"name": "branch_secret",
						"title": "Branch Secret",
						"type": "`$STRING`",
						"req": true,
						"short": "The Branch Secret Key of the originating app obtained in your [Account Settings](https://help.branch.io/using-branch/docs/profile-settings)",
					},
					map[string]any{
						"name": "eo_branch_cta_view",
						"title": "Eo Branch Cta View",
						"type": "`$ARRAY`",
						"short": "N/A",
					},
					map[string]any{
						"name": "eo_click",
						"title": "Eo Click",
						"type": "`$ARRAY`",
						"short": "N/A",
					},
					map[string]any{
						"name": "eo_commerce_event",
						"title": "Eo Commerce Event",
						"type": "`$ARRAY`",
						"short": "N/A",
					},
					map[string]any{
						"name": "eo_content_event",
						"title": "Eo Content Event",
						"type": "`$ARRAY`",
						"short": "N/A",
					},
					map[string]any{
						"name": "eo_custom_event",
						"title": "Eo Custom Event",
						"type": "`$ARRAY`",
						"short": "N/A",
					},
					map[string]any{
						"name": "eo_dismissal",
						"title": "Eo Dismissal",
						"type": "`$ARRAY`",
						"short": "N/A",
					},
					map[string]any{
						"name": "eo_impression",
						"title": "Eo Impression",
						"type": "`$ARRAY`",
						"short": "N/A",
					},
					map[string]any{
						"name": "eo_install",
						"title": "Eo Install",
						"type": "`$ARRAY`",
						"short": "N/A",
					},
					map[string]any{
						"name": "eo_open",
						"title": "Eo Open",
						"type": "`$ARRAY`",
						"short": "N/A",
					},
					map[string]any{
						"name": "eo_pageview",
						"title": "Eo Pageview",
						"type": "`$ARRAY`",
						"short": "N/A",
					},
					map[string]any{
						"name": "eo_reinstall",
						"title": "Eo Reinstall",
						"type": "`$ARRAY`",
						"short": "N/A",
					},
					map[string]any{
						"name": "eo_user_lifecycle_event",
						"title": "Eo User Lifecycle Event",
						"type": "`$ARRAY`",
						"short": "N/A",
					},
					map[string]any{
						"name": "eo_web_session_start",
						"title": "Eo Web Session Start",
						"type": "`$ARRAY`",
						"short": "N/A",
					},
					map[string]any{
						"name": "eo_web_to_app_auto_redirect",
						"title": "Eo Web To App Auto Redirect",
						"type": "`$ARRAY`",
						"short": "N/A",
					},
					map[string]any{
						"name": "export_date",
						"title": "Export Date",
						"type": "`$STRING`",
						"req": true,
						"short": "The UTC date of the requested data export.",
						"format": "date",
					},
				},
				"name": "export",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/export",
								"segments": []any{
									map[string]any{
										"lit": "export",
									},
								},
								"parts": []any{
									"export",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
