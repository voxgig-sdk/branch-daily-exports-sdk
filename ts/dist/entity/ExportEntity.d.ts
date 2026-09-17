import { BranchDailyExportsEntityBase } from '../BranchDailyExportsEntityBase';
import type { BranchDailyExportsSDK } from '../BranchDailyExportsSDK';
import type { Control } from '../types';
import type { Export, ExportCreateData } from '../BranchDailyExportsTypes';
declare class ExportEntity extends BranchDailyExportsEntityBase<Export> {
    constructor(client: BranchDailyExportsSDK, entopts: any);
    make(this: ExportEntity): ExportEntity;
    create(this: any, reqdata?: ExportCreateData, ctrl?: Control): Promise<ExportEntity>;
}
export { ExportEntity };
