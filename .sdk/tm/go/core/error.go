package core

type BranchDailyExportsError struct {
	IsBranchDailyExportsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewBranchDailyExportsError(code string, msg string, ctx *Context) *BranchDailyExportsError {
	return &BranchDailyExportsError{
		IsBranchDailyExportsError: true,
		Sdk:              "BranchDailyExports",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *BranchDailyExportsError) Error() string {
	return e.Msg
}
