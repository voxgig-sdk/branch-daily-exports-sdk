# Typed models for the BranchDailyExports SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class ExportRequired(TypedDict):
    branch_key: str
    branch_secret: str
    export_date: str


class Export(ExportRequired, total=False):
    eo_branch_cta_view: list
    eo_click: list
    eo_commerce_event: list
    eo_content_event: list
    eo_custom_event: list
    eo_dismissal: list
    eo_impression: list
    eo_install: list
    eo_open: list
    eo_pageview: list
    eo_reinstall: list
    eo_user_lifecycle_event: list
    eo_web_session_start: list
    eo_web_to_app_auto_redirect: list


class ExportCreateDataRequired(TypedDict):
    branch_key: str
    branch_secret: str
    export_date: str


class ExportCreateData(ExportCreateDataRequired, total=False):
    eo_branch_cta_view: list
    eo_click: list
    eo_commerce_event: list
    eo_content_event: list
    eo_custom_event: list
    eo_dismissal: list
    eo_impression: list
    eo_install: list
    eo_open: list
    eo_pageview: list
    eo_reinstall: list
    eo_user_lifecycle_event: list
    eo_web_session_start: list
    eo_web_to_app_auto_redirect: list
