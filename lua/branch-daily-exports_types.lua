-- Typed models for the BranchDailyExports SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Export
---@field branch_key string
---@field branch_secret string
---@field eo_branch_cta_view? table
---@field eo_click? table
---@field eo_commerce_event? table
---@field eo_content_event? table
---@field eo_custom_event? table
---@field eo_dismissal? table
---@field eo_impression? table
---@field eo_install? table
---@field eo_open? table
---@field eo_pageview? table
---@field eo_reinstall? table
---@field eo_user_lifecycle_event? table
---@field eo_web_session_start? table
---@field eo_web_to_app_auto_redirect? table
---@field export_date string

---@class ExportCreateData
---@field branch_key string
---@field branch_secret string
---@field eo_branch_cta_view? table
---@field eo_click? table
---@field eo_commerce_event? table
---@field eo_content_event? table
---@field eo_custom_event? table
---@field eo_dismissal? table
---@field eo_impression? table
---@field eo_install? table
---@field eo_open? table
---@field eo_pageview? table
---@field eo_reinstall? table
---@field eo_user_lifecycle_event? table
---@field eo_web_session_start? table
---@field eo_web_to_app_auto_redirect? table
---@field export_date string

local M = {}

return M
