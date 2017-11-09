/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "./bo/index";
import { IBORepositoryFeedback, BO_REPOSITORY_FEEDBACK } from "../api/index";
import { DataConverter4fb } from "./DataConverters";

/** 业务对象仓库 */
export class BORepositoryFeedback extends ibas.BORepositoryApplication implements IBORepositoryFeedback {

    /** 创建此模块的后端与前端数据的转换者 */
    protected createConverter(): ibas.IDataConverter {
        return new DataConverter4fb;
    }

    /**
     * 查询 建议
     * @param fetcher 查询者
     */
    fetchSuggestion(fetcher: ibas.FetchCaller<bo.Suggestion>): void {
        super.fetch(bo.Suggestion.name, fetcher);
    }
    /**
     * 保存 建议
     * @param saver 保存者
     */
    saveSuggestion(saver: ibas.SaveCaller<bo.Suggestion>): void {
        super.save(bo.Suggestion.name, saver);
    }

    /**
     * 上传屏幕截图
     * @param caller 调用者
     */
    uploadScreenshot(caller: ibas.UploadFileCaller): void {
        if (!this.address.endsWith("/")) { this.address += "/"; }
        let fileRepository: ibas.FileRepositoryUploadAjax = new ibas.FileRepositoryUploadAjax();
        fileRepository.address = this.address.replace("/services/rest/data/", "/services/rest/file/");
        fileRepository.token = this.token;
        fileRepository.converter = this.createConverter();
        fileRepository.upload("upload", caller);
    }
    /**
     * 下载屏幕截图
     * @param caller 调用者
     */
    downloadScreenshot(caller: ibas.DownloadFileCaller): void {
        if (!this.address.endsWith("/")) { this.address += "/"; }
        let fileRepository: ibas.FileRepositoryDownloadAjax = new ibas.FileRepositoryDownloadAjax();
        fileRepository.address = this.address.replace("/services/rest/data/", "/services/rest/file/");
        fileRepository.token = this.token;
        fileRepository.converter = this.createConverter();
        fileRepository.download("download", caller);
    }
}
// 注册业务对象仓库到工厂
ibas.boFactory.register(BO_REPOSITORY_FEEDBACK, BORepositoryFeedback);
