<?php
declare(strict_types=1);

// BranchDailyExports SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class BranchDailyExportsMakeContext
{
    public static function call(array $ctxmap, ?BranchDailyExportsContext $basectx): BranchDailyExportsContext
    {
        return new BranchDailyExportsContext($ctxmap, $basectx);
    }
}
