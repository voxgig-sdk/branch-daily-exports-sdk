# BranchDailyExports SDK exists test

import pytest
from branchdailyexports_sdk import BranchDailyExportsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = BranchDailyExportsSDK.test(None, None)
        assert testsdk is not None
