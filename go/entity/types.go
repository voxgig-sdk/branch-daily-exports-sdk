// Typed models for the BranchDailyExports SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/branch-daily-exports-sdk/go/core"
)

// Export is the typed data model for the export entity.
type Export struct {
	BranchKey string `json:"branch_key"`
	BranchSecret string `json:"branch_secret"`
	EoBranchCtaView *[]any `json:"eo_branch_cta_view,omitempty"`
	EoClick *[]any `json:"eo_click,omitempty"`
	EoCommerceEvent *[]any `json:"eo_commerce_event,omitempty"`
	EoContentEvent *[]any `json:"eo_content_event,omitempty"`
	EoCustomEvent *[]any `json:"eo_custom_event,omitempty"`
	EoDismissal *[]any `json:"eo_dismissal,omitempty"`
	EoImpression *[]any `json:"eo_impression,omitempty"`
	EoInstall *[]any `json:"eo_install,omitempty"`
	EoOpen *[]any `json:"eo_open,omitempty"`
	EoPageview *[]any `json:"eo_pageview,omitempty"`
	EoReinstall *[]any `json:"eo_reinstall,omitempty"`
	EoUserLifecycleEvent *[]any `json:"eo_user_lifecycle_event,omitempty"`
	EoWebSessionStart *[]any `json:"eo_web_session_start,omitempty"`
	EoWebToAppAutoRedirect *[]any `json:"eo_web_to_app_auto_redirect,omitempty"`
	ExportDate string `json:"export_date"`
}

// ExportCreateData is the typed request payload for Export.CreateTyped.
type ExportCreateData struct {
	BranchKey string `json:"branch_key"`
	BranchSecret string `json:"branch_secret"`
	EoBranchCtaView *[]any `json:"eo_branch_cta_view,omitempty"`
	EoClick *[]any `json:"eo_click,omitempty"`
	EoCommerceEvent *[]any `json:"eo_commerce_event,omitempty"`
	EoContentEvent *[]any `json:"eo_content_event,omitempty"`
	EoCustomEvent *[]any `json:"eo_custom_event,omitempty"`
	EoDismissal *[]any `json:"eo_dismissal,omitempty"`
	EoImpression *[]any `json:"eo_impression,omitempty"`
	EoInstall *[]any `json:"eo_install,omitempty"`
	EoOpen *[]any `json:"eo_open,omitempty"`
	EoPageview *[]any `json:"eo_pageview,omitempty"`
	EoReinstall *[]any `json:"eo_reinstall,omitempty"`
	EoUserLifecycleEvent *[]any `json:"eo_user_lifecycle_event,omitempty"`
	EoWebSessionStart *[]any `json:"eo_web_session_start,omitempty"`
	EoWebToAppAutoRedirect *[]any `json:"eo_web_to_app_auto_redirect,omitempty"`
	ExportDate string `json:"export_date"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
