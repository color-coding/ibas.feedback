/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as openui5 from "openui5/index";
import * as bo from "../../../borep/bo/index";
import { ISuggestionViewView } from "../../../bsapp/suggestion/index";

/**
 * 查看视图-建议
 */
export class SuggestionViewView extends ibas.BOViewView implements ISuggestionViewView {

    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.image = new sap.m.Image("", {

        });
        this.form = new sap.ui.layout.form.SimpleForm("", {
            editable: false,
            content: [
                new sap.ui.core.Title("", { text: ibas.i18n.prop("feedback_suggestion_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_suggester") }),
                new sap.m.Input("", {
                    editable: false,
                }).bindProperty("value", {
                    path: "/suggester"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_subject") }),
                new sap.m.Input("", {
                    editable: false,
                }).bindProperty("value", {
                    path: "/subject"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_tags") }),
                new sap.m.Tokenizer("", {
                }).bindProperty("editable", {
                    path: "/tags",
                    formatter: function (value: string): boolean {
                        if (ibas.objects.isNull(value)) {
                            return false;
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
                        return false;
                    },
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_content") }),
                new sap.m.TextArea("", {
                    editable: false,
                    rows: 3
                }).bindProperty("value", {
                    path: "/content"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("feedback_application_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_objectkey") }),
                new sap.m.Input("", {
                    editable: false,
                }).bindProperty("value", {
                    path: "/objectKey"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_systemid") }),
                new sap.m.Input("", {
                    editable: false,
                }).bindProperty("selectedKey", {
                    path: "/systemId"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_moduleid") }),
                new sap.m.Input("", {
                    editable: false,
                }).bindProperty("value", {
                    path: "/moduleId"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_applicationid") }),
                new sap.m.Input("", {
                    editable: false,
                }).bindProperty("value", {
                    path: "/applicationId"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_suggestion_closed") }),
                new sap.m.Select("", {
                    enabled: false,
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
            subHeader: new sap.m.Bar("", {
                contentLeft: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_edit"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://edit",
                        press: function (): void {
                            that.fireViewEvents(that.editDataEvent);
                        }
                    })
                ],
                contentRight: [
                    new sap.m.Button("", {
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://action",
                        press: function (event: any): void {
                            that.fireViewEvents(that.callServicesEvent, {
                                displayServices(services: ibas.IServiceAgent[]): void {
                                    if (ibas.objects.isNull(services) || services.length === 0) {
                                        return;
                                    }
                                    let popover: sap.m.Popover = new sap.m.Popover("", {
                                        showHeader: false,
                                        placement: sap.m.PlacementType.Bottom,
                                    });
                                    for (let service of services) {
                                        popover.addContent(new sap.m.Button({
                                            text: ibas.i18n.prop(service.name),
                                            type: sap.m.ButtonType.Transparent,
                                            icon: service.icon,
                                            press: function (): void {
                                                service.run();
                                                popover.close();
                                            }
                                        }));
                                    }
                                    (<any>popover).addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                    popover.openBy(event.getSource(), true);
                                }
                            });
                        }
                    })
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
    /** 显示数据 */
    showSuggestion(data: bo.Suggestion): void {
        this.form.setModel(new sap.ui.model.json.JSONModel(data));
    }
    /** 展示屏幕截图 */
    showScreenshot(dataUrl: string): void {
        this.image.setSrc(dataUrl);
    }
}
