/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";

/** 应用-建议 */
export class SuggestionApp extends ibas.ResidentApplication<ISuggestionView> {

    /** 应用标识 */
    static APPLICATION_ID: string = "7b8d3e3d-8396-470d-9730-44da36d54640";
    /** 应用名称 */
    static APPLICATION_NAME: string = "tucao_app_suggestion";

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
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        //
    }
}
/** 视图-建议 */
export interface ISuggestionView extends ibas.IResidentView {
    /** 提交 */
    submitEvent: Function;
}