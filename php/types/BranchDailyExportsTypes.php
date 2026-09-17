<?php
declare(strict_types=1);

// Typed models for the BranchDailyExports SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Export entity data model. */
class Export
{
    public string $branch_key;
    public string $branch_secret;
    public ?array $eo_branch_cta_view = null;
    public ?array $eo_click = null;
    public ?array $eo_commerce_event = null;
    public ?array $eo_content_event = null;
    public ?array $eo_custom_event = null;
    public ?array $eo_dismissal = null;
    public ?array $eo_impression = null;
    public ?array $eo_install = null;
    public ?array $eo_open = null;
    public ?array $eo_pageview = null;
    public ?array $eo_reinstall = null;
    public ?array $eo_user_lifecycle_event = null;
    public ?array $eo_web_session_start = null;
    public ?array $eo_web_to_app_auto_redirect = null;
    public string $export_date;
}

/** Request payload for Export#create. */
class ExportCreateData
{
    public string $branch_key;
    public string $branch_secret;
    public ?array $eo_branch_cta_view = null;
    public ?array $eo_click = null;
    public ?array $eo_commerce_event = null;
    public ?array $eo_content_event = null;
    public ?array $eo_custom_event = null;
    public ?array $eo_dismissal = null;
    public ?array $eo_impression = null;
    public ?array $eo_install = null;
    public ?array $eo_open = null;
    public ?array $eo_pageview = null;
    public ?array $eo_reinstall = null;
    public ?array $eo_user_lifecycle_event = null;
    public ?array $eo_web_session_start = null;
    public ?array $eo_web_to_app_auto_redirect = null;
    public string $export_date;
}

