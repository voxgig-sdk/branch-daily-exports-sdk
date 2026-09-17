<?php
declare(strict_types=1);

// BranchDailyExports SDK configuration

class BranchDailyExportsConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "BranchDailyExports",
                "slug" => "branch-daily-exports",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "debug" => [
          'options' => [
            'active' => false,
            'max' => 100,
            'redact' => [
              'authorization',
              'cookie',
              'set-cookie',
              'api-key',
              'apikey',
              'x-api-key',
              'idempotency-key',
            ],
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'onEntry' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "idempotency" => [
          'options' => [
            'active' => false,
            'header' => 'Idempotency-Key',
            'methods' => [
              'POST',
              'PUT',
              'PATCH',
              'DELETE',
            ],
            'ops' => [
              'create',
              'update',
              'remove',
            ],
          ],
          'optspec' => [
            'keygen' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "metrics" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "paging" => [
          'options' => [
            'active' => false,
            'afterVar' => 'after',
            'cursorParam' => 'cursor',
            'firstVar' => 'first',
            'limitParam' => 'limit',
            'pageParam' => 'page',
            'startPage' => 1,
          ],
          'optspec' => [
            'limit' => '`$NUMBER`',
            'ops' => '`$LIST`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://api2.branch.io/v3",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "export" => [],
                ],
            ],
            "entity" => [
        'export' => [
          'fields' => [
            [
              'name' => 'branch_key',
              'req' => true,
              'short' => 'The Branch Key of the originating app obtained in your [Account Settings](https://help.branch.io/using-branch/docs/profile-settings)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'branch_secret',
              'req' => true,
              'short' => 'The Branch Secret Key of the originating app obtained in your [Account Settings](https://help.branch.io/using-branch/docs/profile-settings)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'eo_branch_cta_view',
              'short' => 'N/A',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'eo_click',
              'short' => 'N/A',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'eo_commerce_event',
              'short' => 'N/A',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'eo_content_event',
              'short' => 'N/A',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'eo_custom_event',
              'short' => 'N/A',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'eo_dismissal',
              'short' => 'N/A',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'eo_impression',
              'short' => 'N/A',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'eo_install',
              'short' => 'N/A',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'eo_open',
              'short' => 'N/A',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'eo_pageview',
              'short' => 'N/A',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'eo_reinstall',
              'short' => 'N/A',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'eo_user_lifecycle_event',
              'short' => 'N/A',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'eo_web_session_start',
              'short' => 'N/A',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'eo_web_to_app_auto_redirect',
              'short' => 'N/A',
              'type' => '`$ARRAY`',
            ],
            [
              'format' => 'date',
              'name' => 'export_date',
              'req' => true,
              'short' => 'The UTC date of the requested data export.',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'export',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/export',
                  'segments' => [
                    [
                      'lit' => 'export',
                    ],
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'export',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return BranchDailyExportsFeatures::make_feature($name);
    }
}
