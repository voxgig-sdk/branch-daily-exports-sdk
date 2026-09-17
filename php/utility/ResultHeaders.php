<?php
declare(strict_types=1);

// BranchDailyExports SDK utility: result_headers

class BranchDailyExportsResultHeaders
{
    public static function call(BranchDailyExportsContext $ctx): ?BranchDailyExportsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
