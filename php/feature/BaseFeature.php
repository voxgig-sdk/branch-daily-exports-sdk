<?php
declare(strict_types=1);

// BranchDailyExports SDK base feature

class BranchDailyExportsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(BranchDailyExportsContext $ctx, array $options): void {}
    public function PostConstruct(BranchDailyExportsContext $ctx): void {}
    public function PostConstructEntity(BranchDailyExportsContext $ctx): void {}
    public function SetData(BranchDailyExportsContext $ctx): void {}
    public function GetData(BranchDailyExportsContext $ctx): void {}
    public function GetMatch(BranchDailyExportsContext $ctx): void {}
    public function SetMatch(BranchDailyExportsContext $ctx): void {}
    public function PrePoint(BranchDailyExportsContext $ctx): void {}
    public function PreSpec(BranchDailyExportsContext $ctx): void {}
    public function PreRequest(BranchDailyExportsContext $ctx): void {}
    public function PreResponse(BranchDailyExportsContext $ctx): void {}
    public function PreResult(BranchDailyExportsContext $ctx): void {}
    public function PreDone(BranchDailyExportsContext $ctx): void {}
    public function PreUnexpected(BranchDailyExportsContext $ctx): void {}
}
