<?php
declare(strict_types=1);

// BranchDailyExports SDK utility: result_body

class BranchDailyExportsResultBody
{
    public static function call(BranchDailyExportsContext $ctx): ?BranchDailyExportsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
