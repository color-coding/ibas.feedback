/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace feedback {
    export namespace ui {
        export namespace c {
            /**
             * 编辑视图-建议
             */
            export class SuggestionEditView extends ibas.BOEditView implements app.ISuggestionEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    let formTop: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("feedback_suggestion_information") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_suggester") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "suggester",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_subject") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "subject",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 60
                                })
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
                                path: "tags"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_content") }),
                            new sap.extension.m.TextArea("", {
                                rows: 3
                            }).bindProperty("bindingValue", {
                                path: "content",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 300
                                })
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("feedback_application_information") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_systemid") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "systemId",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 36
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_moduleid") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "moduleId",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 36
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_applicationid") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "applicationId",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 36
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_closed") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: ibas.emYesNo
                            }).bindProperty("bindingValue", {
                                path: "closed",
                                type: new sap.extension.data.YesNo()
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_suggestion_screenshot") }),
                            this.image = new sap.m.Image("", {
                                densityAware: false
                            })
                        ]
                    });
                    return this.page = new sap.extension.m.DataPage("", {
                        showHeader: false,
                        dataInfo: {
                            code: bo.Suggestion.BUSINESS_OBJECT_CODE,
                        },
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
                        content: [
                            formTop,
                        ]
                    });
                }
                private page: sap.extension.m.Page;
                private image: sap.m.Image;
                /** 显示数据 */
                showSuggestion(data: bo.Suggestion): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    sap.extension.pages.changeStatus(this.page);
                }
                /** 展示屏幕截图 */
                showScreenshot(dataUrl: string): void {
                    this.image.setSrc(dataUrl);
                }
            }
        }
    }
}