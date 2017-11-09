/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "../../borep/bo/index";
import { BORepositoryFeedback } from "../../borep/BORepositories";

/** 应用-建议 */
export class SuggestionApp extends ibas.ResidentApplication<ISuggestionView> {

    /** 应用标识 */
    static APPLICATION_ID: string = "7b8d3e3d-8396-470d-9730-44da36d54640";
    /** 应用名称 */
    static APPLICATION_NAME: string = "feedback_app_suggestion_tucao";

    constructor() {
        super();
        this.id = SuggestionApp.APPLICATION_ID;
        this.name = SuggestionApp.APPLICATION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        // 注册视图事件
        super.registerView();
        this.view.submitEvent = this.submitEvent;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        this.editData = new bo.Suggestion();
        if (window.location.hash.startsWith(ibas.URL_HASH_SIGN_FUNCTIONS)) {
            this.editData.applicationId = window.location.hash.replace(ibas.URL_HASH_SIGN_FUNCTIONS, "");
        }
        this.editData.suggester = ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_NAME);
        this.editData.systemId = ibas.enums.toString(ibas.emPlantform, ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM));
        this.view.showScreenShot();
    }
    /** 待编辑的数据 */
    protected editData: bo.Suggestion;
    private submitEvent(data: FormData, content: string): void {
        this.busy(true);
        let that: this = this;
        let boRepository: BORepositoryFeedback = new BORepositoryFeedback();
        boRepository.uploadScreenshot({
            fileData: data,
            onCompleted(opRslt: ibas.IOperationResult<ibas.FileData>): void {
                try {
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    if (opRslt.resultObjects.length === 0) {
                        throw new Error(ibas.i18n.prop("feedback_msg_upload_screenshot")
                            + ibas.i18n.prop("feedback_msg_error"));
                    } else {
                        let fileData: ibas.FileData = opRslt.resultObjects.firstOrDefault();
                        that.editData.screenshot = fileData.fileName;
                        that.editData.content = content;
                        that.saveData();
                    }
                } catch (error) {
                    that.messages(error);
                }
            }
        });
        this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("sys_shell_uploading_file"));
    }
    /** 保存数据 */
    protected saveData(): void {
        let that: this = this;
        let boRepository: BORepositoryFeedback = new BORepositoryFeedback();
        boRepository.saveSuggestion({
            beSaved: this.editData,
            onCompleted(opRslt: ibas.IOperationResult<bo.Suggestion>): void {
                try {
                    that.busy(false);
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    if (opRslt.resultObjects.length >= 0) {
                        that.messages(ibas.emMessageType.SUCCESS,
                            ibas.i18n.prop("sys_shell_data_save") + ibas.i18n.prop("sys_shell_sucessful"));
                    }
                    that.close();
                } catch (error) {
                    that.messages(error);
                }
            }
        });
        this.busy(true);
        this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("sys_shell_saving_data"));
    }
}
/** 视图-建议 */
export interface ISuggestionView extends ibas.IResidentView {
    /** 提交 */
    submitEvent: Function;
    /** 显示屏幕截图 */
    showScreenShot(): void;
}