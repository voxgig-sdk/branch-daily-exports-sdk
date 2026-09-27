# BranchDailyExports SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "BranchDailyExports",
            "slug": "branch-daily-exports",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "debug": {
        "options": {
          "active": False,
          "max": 100,
          "redact": [
            "authorization",
            "cookie",
            "set-cookie",
            "api-key",
            "apikey",
            "x-api-key",
            "idempotency-key",
          ],
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "onEntry": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "idempotency": {
        "options": {
          "active": False,
          "header": "Idempotency-Key",
          "methods": [
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
          ],
          "ops": [
            "create",
            "update",
            "remove",
          ],
        },
        "optspec": {
          "keygen": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "metrics": {
        "options": {
          "active": False,
        },
        "optspec": {
          "now": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "paging": {
        "options": {
          "active": False,
          "afterVar": "after",
          "cursorParam": "cursor",
          "firstVar": "first",
          "limitParam": "limit",
          "pageParam": "page",
          "startPage": 1,
        },
        "optspec": {
          "limit": "`$NUMBER`",
          "ops": "`$LIST`",
        },
        "strict": False,
        "transport": "none",
      },
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api2.branch.io/v3",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "export": {},
            },
        },
        "entity": {
      "export": {
        "fields": [
          {
            "name": "branch_key",
            "title": "Branch Key",
            "type": "`$STRING`",
            "req": True,
            "short": "The Branch Key of the originating app obtained in your [Account Settings](https://help.branch.io/using-branch/docs/profile-settings)",
          },
          {
            "name": "branch_secret",
            "title": "Branch Secret",
            "type": "`$STRING`",
            "req": True,
            "short": "The Branch Secret Key of the originating app obtained in your [Account Settings](https://help.branch.io/using-branch/docs/profile-settings)",
          },
          {
            "name": "eo_branch_cta_view",
            "title": "Eo Branch Cta View",
            "type": "`$ARRAY`",
            "short": "N/A",
          },
          {
            "name": "eo_click",
            "title": "Eo Click",
            "type": "`$ARRAY`",
            "short": "N/A",
          },
          {
            "name": "eo_commerce_event",
            "title": "Eo Commerce Event",
            "type": "`$ARRAY`",
            "short": "N/A",
          },
          {
            "name": "eo_content_event",
            "title": "Eo Content Event",
            "type": "`$ARRAY`",
            "short": "N/A",
          },
          {
            "name": "eo_custom_event",
            "title": "Eo Custom Event",
            "type": "`$ARRAY`",
            "short": "N/A",
          },
          {
            "name": "eo_dismissal",
            "title": "Eo Dismissal",
            "type": "`$ARRAY`",
            "short": "N/A",
          },
          {
            "name": "eo_impression",
            "title": "Eo Impression",
            "type": "`$ARRAY`",
            "short": "N/A",
          },
          {
            "name": "eo_install",
            "title": "Eo Install",
            "type": "`$ARRAY`",
            "short": "N/A",
          },
          {
            "name": "eo_open",
            "title": "Eo Open",
            "type": "`$ARRAY`",
            "short": "N/A",
          },
          {
            "name": "eo_pageview",
            "title": "Eo Pageview",
            "type": "`$ARRAY`",
            "short": "N/A",
          },
          {
            "name": "eo_reinstall",
            "title": "Eo Reinstall",
            "type": "`$ARRAY`",
            "short": "N/A",
          },
          {
            "name": "eo_user_lifecycle_event",
            "title": "Eo User Lifecycle Event",
            "type": "`$ARRAY`",
            "short": "N/A",
          },
          {
            "name": "eo_web_session_start",
            "title": "Eo Web Session Start",
            "type": "`$ARRAY`",
            "short": "N/A",
          },
          {
            "name": "eo_web_to_app_auto_redirect",
            "title": "Eo Web To App Auto Redirect",
            "type": "`$ARRAY`",
            "short": "N/A",
          },
          {
            "name": "export_date",
            "title": "Export Date",
            "type": "`$STRING`",
            "req": True,
            "short": "The UTC date of the requested data export.",
            "format": "date",
          },
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
                    "lit": "export",
                  },
                ],
                "parts": [
                  "export",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
