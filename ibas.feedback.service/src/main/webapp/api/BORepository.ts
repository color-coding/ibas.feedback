/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace feedback {
    export namespace bo {
        /** 业务仓库 */
        export interface IBORepositoryFeedback extends ibas.IBORepositoryApplication {
            /**
             * 查询 建议
             * @param fetcher 查询者
             */
            fetchSuggestion(fetcher: ibas.IFetchCaller<bo.ISuggestion>): void;
            /**
             * 保存 建议
             * @param saver 保存者
             */
            saveSuggestion(saver: ibas.ISaveCaller<bo.ISuggestion>): void;
            /** 获取文件地址 */
            toUrl(file: string): string;
            /**
             * 上传屏幕截图
             * @param caller 调用者
             */
            uploadScreenshot(caller: ibas.IUploadFileCaller<ibas.FileData>): void;
            /**
             * 下载屏幕截图
             * @param caller 调用者
             */
            downloadScreenshot(caller: ibas.IDownloadFileCaller<Blob>): void;

        }
    }
}