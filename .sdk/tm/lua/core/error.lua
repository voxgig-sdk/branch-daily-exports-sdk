-- BranchDailyExports SDK error

local BranchDailyExportsError = {}
BranchDailyExportsError.__index = BranchDailyExportsError


function BranchDailyExportsError.new(code, msg, ctx)
  local self = setmetatable({}, BranchDailyExportsError)
  self.is_sdk_error = true
  self.sdk = "BranchDailyExports"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function BranchDailyExportsError:error()
  return self.msg
end


function BranchDailyExportsError:__tostring()
  return self.msg
end


return BranchDailyExportsError
