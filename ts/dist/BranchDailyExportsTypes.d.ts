export interface Export {
    branch_key: string;
    branch_secret: string;
    eo_branch_cta_view?: any[];
    eo_click?: any[];
    eo_commerce_event?: any[];
    eo_content_event?: any[];
    eo_custom_event?: any[];
    eo_dismissal?: any[];
    eo_impression?: any[];
    eo_install?: any[];
    eo_open?: any[];
    eo_pageview?: any[];
    eo_reinstall?: any[];
    eo_user_lifecycle_event?: any[];
    eo_web_session_start?: any[];
    eo_web_to_app_auto_redirect?: any[];
    export_date: string;
}
export interface ExportCreateData {
    branch_key: string;
    branch_secret: string;
    eo_branch_cta_view?: any[];
    eo_click?: any[];
    eo_commerce_event?: any[];
    eo_content_event?: any[];
    eo_custom_event?: any[];
    eo_dismissal?: any[];
    eo_impression?: any[];
    eo_install?: any[];
    eo_open?: any[];
    eo_pageview?: any[];
    eo_reinstall?: any[];
    eo_user_lifecycle_event?: any[];
    eo_web_session_start?: any[];
    eo_web_to_app_auto_redirect?: any[];
    export_date: string;
}
