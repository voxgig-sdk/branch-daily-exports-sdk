# BranchDailyExports SDK utility: make_context

from branchdailyexports_sdk.core.context import BranchDailyExportsContext


def make_context_util(ctxmap, basectx):
    return BranchDailyExportsContext(ctxmap, basectx)
