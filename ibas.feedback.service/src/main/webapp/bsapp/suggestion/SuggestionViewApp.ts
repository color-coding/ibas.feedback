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
import { SuggestionEditApp } from "./SuggestionEditApp";

/** 查看应用-建议 */
export class SuggestionViewApp extends ibas.BOViewService<ISuggestionViewView> {

    /** 应用标识 */
    static APPLICATION_ID: string = "d2ef60dc-864a-4209-9075-9bbc091f442f";
    /** 应用名称 */
    static APPLICATION_NAME: string = "feedback_app_suggestion_view";
    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = bo.Suggestion.BUSINESS_OBJECT_CODE;
    /** 构造函数 */
    constructor() {
        super();
        this.id = SuggestionViewApp.APPLICATION_ID;
        this.name = SuggestionViewApp.APPLICATION_NAME;
        this.boCode = SuggestionViewApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
        this.view.editDataEvent = this.editData;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
        if (ibas.objects.isNull(this.viewData)) {
            return;
        }
        this.view.showSuggestion(this.viewData);
        if (!ibas.objects.isNull(this.viewData.screenshot)) {
            let that: this = this;
            let criteria: ibas.ICriteria = new ibas.Criteria();
            let condition: ibas.ICondition = criteria.conditions.create();
            condition.alias = ibas.CRITERIA_CONDITION_ALIAS_FILE_NAME;
            condition.value = this.viewData.screenshot;
            let boRepository: BORepositoryFeedback = new BORepositoryFeedback();
            boRepository.downloadScreenshot({
                criteria: criteria,
                onCompleted(opRslt: ibas.IOperationResult<Blob>): void {
                    try {
                        if (opRslt.resultCode !== 0) {
                            throw new Error(opRslt.message);
                        }
                        let blob: Blob = opRslt.resultObjects.firstOrDefault();
                        if (!ibas.objects.isNull(blob)) {
                            let fileReader: FileReader = new FileReader();
                            fileReader.onload = function (e: ProgressEvent): void {
                                let dataUrl: string = (<any>e.target).result;
                                that.view.showScreenshot(dataUrl);
                            };
                            fileReader.readAsDataURL(blob);
                        }

                    } catch (error) {
                        that.messages(error);
                    }
                }
            });
        }
    }
    /** 编辑数据，参数：目标数据 */
    protected editData(): void {
        let app: SuggestionEditApp = new SuggestionEditApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        app.run(this.viewData);
    }
    /** 运行,覆盖原方法 */
    run(): void;
    run(data: bo.Suggestion): void;
    run(): void {
        if (arguments[0] instanceof bo.Suggestion) {
            this.viewData = arguments[0];
            this.show();
        } else {
            super.run.apply(this, arguments);
        }
    }
    private viewData: bo.Suggestion;
    /** 查询数据 */
    protected fetchData(criteria: ibas.ICriteria | string): void {
        this.busy(true);
        let that: this = this;
        if (typeof criteria === "string") {
            criteria = new ibas.Criteria();
            // 添加查询条件

        }
        let boRepository: BORepositoryFeedback = new BORepositoryFeedback();
        boRepository.fetchSuggestion({
            criteria: criteria,
            onCompleted(opRslt: ibas.IOperationResult<bo.Suggestion>): void {
                try {
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    that.viewData = opRslt.resultObjects.firstOrDefault();
                    that.viewShowed();
                } catch (error) {
                    that.messages(error);
                }
            }
        });
        this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
    }
    /** 获取服务的契约 */
    protected getServiceProxies(): ibas.IServiceProxy<ibas.IServiceContract>[] {
        return [];
    }
}
/** 视图-建议 */
export interface ISuggestionViewView extends ibas.IBOViewView {

    /** 显示数据 */
    showSuggestion(data: bo.Suggestion): void;
    /** 展示屏幕截图 */
    showScreenshot(dataUrl: string): void;
}
/** 建议连接服务映射 */
export class SuggestionLinkServiceMapping extends ibas.BOLinkServiceMapping {
    /** 构造函数 */
    constructor() {
        super();
        this.id = SuggestionViewApp.APPLICATION_ID;
        this.name = SuggestionViewApp.APPLICATION_NAME;
        this.boCode = SuggestionViewApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 创建服务实例 */
    create(): ibas.IService<ibas.IBOLinkServiceCaller> {
        return new SuggestionViewApp();
    }
}
