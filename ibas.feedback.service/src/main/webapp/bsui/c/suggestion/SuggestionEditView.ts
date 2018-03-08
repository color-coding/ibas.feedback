/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as openui5 from "openui5/index";
import * as bo from "../../../borep/bo/index";
import { ISuggestionEditView } from "../../../bsapp/suggestion/index";

/**
 * 编辑视图-建议
 */
export class SuggestionEditView extends ibas.BOEditView implements ISuggestionEditView {
    /** 删除数据事件 */
    deleteDataEvent: Function;
    /** 新建数据事件，参数1：是否克隆 */
    createDataEvent: Function;

    /** 绘制视图 */
    draw(): any {
        let that: this = this;
        this.image = new sap.m.Image("", {

        });
        this.form = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            content: [
                new sap.ui.core.Title("", { text: ibas.i18n.prop("feedback_suggestion_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_suggester") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/suggester"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_subject") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/subject"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_tags") }),
                new sap.m.MultiInput("", {
                    enableMultiLineMode: true,
                    showValueHelp: false,
                    placeholder: ibas.i18n.prop("feedback_placeholder_suggestion_tags"),
                    change: function (oEvent: sap.ui.base.Event): void {
                        let value: string = oEvent.getParameter("value");
                        let tokens: Array<sap.m.Token> = [];
                        for (let item of value.split(/\s+/)) {
                            if (item === "") { continue; }
                            tokens.push(new sap.m.Token("", {
                                key: item,
                                text: item
                            }));
                        }
                        this.setTokens(tokens);
                    },
                    tokenUpdate: function (oEvent: sap.ui.base.Event): void {
                        if (oEvent.getParameter("type") === "removed") {
                            let value: string = "";
                            for (let token of this.getTokens()) {
                                value = value.concat(token.getKey(), " ");
                            }
                            this.setValue(value.trim());
                        }
                    },
                    modelContextChange: function (oEvent: sap.ui.base.Event): void {
                        let value: string = this.getValue();
                        if (ibas.objects.isNull(value)) {
                            return;
                        }
                        let tokens: Array<sap.m.Token> = [];
                        for (let item of value.split(/\s+/)) {
                            if (item === "") { continue; }
                            tokens.push(new sap.m.Token("", {
                                key: item,
                                text: item
                            }));
                        }
                        this.setTokens(tokens);
                    },
                }).bindProperty("value", {
                    path: "/tags"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_content") }),
                new sap.m.TextArea("", {
                    rows: 3
                }).bindProperty("value", {
                    path: "/content"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("feedback_application_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_objectkey") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/objectKey"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_systemid") }),
                new sap.m.Input("", {
                }).bindProperty("selectedKey", {
                    path: "/systemId"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_moduleid") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/moduleId"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_applicationid") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/applicationId"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_closed") }),
                new sap.m.Select("", {
                    items: openui5.utils.createComboBoxItems(ibas.emYesNo)
                }).bindProperty("selectedKey", {
                    path: "/closed",
                    type: "sap.ui.model.type.Integer"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_suggestion_screenshot") }),
                this.image
            ]
        });
        this.page = new sap.m.Page("", {
            showHeader: false,
            subHeader: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_data_save"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://save",
                        press: function (): void {
                            that.fireViewEvents(that.saveDataEvent);
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_data_delete"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://delete",
                        press: function (): void {
                            that.fireViewEvents(that.deleteDataEvent);
                        }
                    }),
                    new sap.m.ToolbarSeparator(""),
                    new sap.m.MenuButton("", {
                        text: ibas.strings.format("{0}/{1}",
                            ibas.i18n.prop("shell_data_new"), ibas.i18n.prop("shell_data_clone")),
                        icon: "sap-icon://create",
                        type: sap.m.ButtonType.Transparent,
                        menu: new sap.m.Menu("", {
                            items: [
                                new sap.m.MenuItem("", {
                                    text: ibas.i18n.prop("shell_data_new"),
                                    icon: "sap-icon://create",
                                    press: function (): void {
                                        // 创建新的对象
                                        that.fireViewEvents(that.createDataEvent, false);
                                    }
                                }),
                                new sap.m.MenuItem("", {
                                    text: ibas.i18n.prop("shell_data_clone"),
                                    icon: "sap-icon://copy",
                                    press: function (): void {
                                        // 复制当前对象
                                        that.fireViewEvents(that.createDataEvent, true);
                                    }
                                }),
                            ],
                        })
                    }),
                ]
            }),
            content: [this.form]
        });
        this.id = this.page.getId();
        return this.page;
    }
    private page: sap.m.Page;
    private form: sap.ui.layout.form.SimpleForm;
    private image: sap.m.Image;
    /** 改变视图状态 */
    private changeViewStatus(data: bo.Suggestion): void {
        if (ibas.objects.isNull(data)) {
            return;
        }
        // 新建时：禁用删除，
        if (data.isNew) {
            if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                openui5.utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
            }
        }
        // 不可编辑：已批准，
    }

    /** 显示数据 */
    showSuggestion(data: bo.Suggestion): void {
        this.form.setModel(new sap.ui.model.json.JSONModel(data));
        // 监听属性改变，并更新控件
        openui5.utils.refreshModelChanged(this.form, data);
        // 改变视图状态
        this.changeViewStatus(data);
    }
    /** 展示屏幕截图 */
    showScreenshot(dataUrl: string): void {
        this.image.setSrc(dataUrl);
    }
}
