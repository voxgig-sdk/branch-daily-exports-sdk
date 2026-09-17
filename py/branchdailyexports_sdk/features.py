# BranchDailyExports SDK feature factory

from branchdailyexports_sdk.feature.base_feature import BranchDailyExportsBaseFeature
from branchdailyexports_sdk.feature.debug_feature import BranchDailyExportsDebugFeature
from branchdailyexports_sdk.feature.idempotency_feature import BranchDailyExportsIdempotencyFeature
from branchdailyexports_sdk.feature.metrics_feature import BranchDailyExportsMetricsFeature
from branchdailyexports_sdk.feature.paging_feature import BranchDailyExportsPagingFeature
from branchdailyexports_sdk.feature.ratelimit_feature import BranchDailyExportsRatelimitFeature
from branchdailyexports_sdk.feature.retry_feature import BranchDailyExportsRetryFeature
from branchdailyexports_sdk.feature.test_feature import BranchDailyExportsTestFeature
from branchdailyexports_sdk.feature.timeout_feature import BranchDailyExportsTimeoutFeature


_FEATURES = {
    "base": lambda: BranchDailyExportsBaseFeature(),
    "debug": lambda: BranchDailyExportsDebugFeature(),
    "idempotency": lambda: BranchDailyExportsIdempotencyFeature(),
    "metrics": lambda: BranchDailyExportsMetricsFeature(),
    "paging": lambda: BranchDailyExportsPagingFeature(),
    "ratelimit": lambda: BranchDailyExportsRatelimitFeature(),
    "retry": lambda: BranchDailyExportsRetryFeature(),
    "test": lambda: BranchDailyExportsTestFeature(),
    "timeout": lambda: BranchDailyExportsTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
