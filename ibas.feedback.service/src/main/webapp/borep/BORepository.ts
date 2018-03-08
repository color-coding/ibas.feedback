/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace feedback {
    export namespace bo {

        /** 业务对象仓库 */
        export class BORepositoryFeedback extends ibas.BORepositoryApplication implements IBORepositoryFeedback {

            /** 创建此模块的后端与前端数据的转换者 */
            protected createConverter(): ibas.IDataConverter {
                return new DataConverter;
            }

            /**
             * 查询 建议
             * @param fetcher 查询者
             */
            fetchSuggestion(fetcher: ibas.IFetchCaller<bo.Suggestion>): void {
                super.fetch(bo.Suggestion.name, fetcher);
            }
            /**
             * 保存 建议
             * @param saver 保存者
             */
            saveSuggestion(saver: ibas.ISaveCaller<bo.Suggestion>): void {
                super.save(bo.Suggestion.name, saver);
            }

            /** 获取文件地址 */
            toUrl(file: string): string {
                if (!this.address.endsWith("/")) { this.address += "/"; }
                let url: string = this.address.replace("/services/rest/data/", "/services/rest/file/");
                url += ibas.strings.format("{0}?token={1}", file, this.token);
                return encodeURI(url);
            }
            /**
             * 上传屏幕截图
             * @param caller 调用者
             */
            uploadScreenshot(caller: ibas.IUploadFileCaller<ibas.FileData>): void {
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
            downloadScreenshot(caller: ibas.IDownloadFileCaller<Blob>): void {
                if (!this.address.endsWith("/")) { this.address += "/"; }
                let fileRepository: ibas.FileRepositoryDownloadAjax = new ibas.FileRepositoryDownloadAjax();
                fileRepository.address = this.address.replace("/services/rest/data/", "/services/rest/file/");
                fileRepository.token = this.token;
                fileRepository.converter = this.createConverter();
                fileRepository.download("download", caller);
            }
        }
    }
}