-- BranchDailyExports SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "BranchDailyExports",
      slug = "branch-daily-exports",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["debug"] = {
        ["options"] = {
          ["active"] = false,
          ["max"] = 100,
          ["redact"] = {
            "authorization",
            "cookie",
            "set-cookie",
            "api-key",
            "apikey",
            "x-api-key",
            "idempotency-key",
          },
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["onEntry"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["idempotency"] = {
        ["options"] = {
          ["active"] = false,
          ["header"] = "Idempotency-Key",
          ["methods"] = {
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
          },
          ["ops"] = {
            "create",
            "update",
            "remove",
          },
        },
        ["optspec"] = {
          ["keygen"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["metrics"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["paging"] = {
        ["options"] = {
          ["active"] = false,
          ["afterVar"] = "after",
          ["cursorParam"] = "cursor",
          ["firstVar"] = "first",
          ["limitParam"] = "limit",
          ["pageParam"] = "page",
          ["startPage"] = 1,
        },
        ["optspec"] = {
          ["limit"] = "`$NUMBER`",
          ["ops"] = "`$LIST`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://api2.branch.io/v3",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["export"] = {},
      },
    },
    entity = {
      ["export"] = {
        ["fields"] = {
          {
            ["name"] = "branch_key",
            ["req"] = true,
            ["short"] = "The Branch Key of the originating app obtained in your [Account Settings](https://help.branch.io/using-branch/docs/profile-settings)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "branch_secret",
            ["req"] = true,
            ["short"] = "The Branch Secret Key of the originating app obtained in your [Account Settings](https://help.branch.io/using-branch/docs/profile-settings)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "eo_branch_cta_view",
            ["short"] = "N/A",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "eo_click",
            ["short"] = "N/A",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "eo_commerce_event",
            ["short"] = "N/A",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "eo_content_event",
            ["short"] = "N/A",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "eo_custom_event",
            ["short"] = "N/A",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "eo_dismissal",
            ["short"] = "N/A",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "eo_impression",
            ["short"] = "N/A",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "eo_install",
            ["short"] = "N/A",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "eo_open",
            ["short"] = "N/A",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "eo_pageview",
            ["short"] = "N/A",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "eo_reinstall",
            ["short"] = "N/A",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "eo_user_lifecycle_event",
            ["short"] = "N/A",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "eo_web_session_start",
            ["short"] = "N/A",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "eo_web_to_app_auto_redirect",
            ["short"] = "N/A",
            ["type"] = "`$ARRAY`",
          },
          {
            ["format"] = "date",
            ["name"] = "export_date",
            ["req"] = true,
            ["short"] = "The UTC date of the requested data export.",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "export",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/export",
                ["segments"] = {
                  {
                    ["lit"] = "export",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "export",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
