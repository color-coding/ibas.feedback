/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { utils } from "openui5/typings/ibas.utils";
import * as bo from "../../../borep/bo/index";
import { ISuggestionView } from "../../../bsapp/suggestion/index";
/**
 * 视图-建议
 */
export class SuggestionView extends ibas.BOResidentView implements ISuggestionView {
    /** 提交 */
    submitEvent: Function;
    /** 绘制工具条视图 */
    darwBar(): any {
        let that: this = this;
        // 不重复创建工具条钮
        if (ibas.objects.isNull(this.bar)) {
            this.bar = new sap.m.Button("", {
                icon: "sap-icon://theater",
                type: sap.m.ButtonType.Transparent,
                press: function (): void {
                    that.fireViewEvents(that.showFullViewEvent);
                }
            });
        }
        return this.bar;
    }
    private bar: sap.m.Button;
    private document: Node;
    private image: sap.m.Image;
    private layout: sap.ui.layout.VerticalLayout;
    /** 激活完整视图事件 */
    showFullViewEvent: Function;
    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.document = window.document.cloneNode(true);
        this.image = new sap.m.Image("", {
            width: ibas.strings.format("{0}px", window.innerWidth * 0.5)
        });
        this.layout = new sap.ui.layout.VerticalLayout("", {
            content: [
                // this.image,
                new sap.ui.core.HTML("", {
                    content: ibas.strings.format(" \
                        <div class='sapUiBusy' style='width: {0}px;height: {1}px; \
                        background-repeat: no-repeat;background-position: center; display:block'> \
                            <canvas class='screenShotCanvas' width='{2}' height='{3}' \
                            style='width: {0}px;height: {1}px;visibility: hidden;'> \
                            </canvas> \
                        </div>", window.innerWidth * 0.5, window.innerHeight * 0.5, window.innerWidth, window.innerHeight)
                }),
                new sap.ui.core.HTML("", {
                    content: "<div class='tools-fixed tools-draggable' ></div>"
                }),
                new sap.m.FeedInput("", {
                    maxLength: 0,
                    placeholder: ibas.i18n.prop("sys_shell_submit_suggestion"),
                    icon: "",// 当前用户的头像
                    showIcon: true,
                    iconDensityAware: true,
                    post: function (oEvent: sap.ui.base.Event): void {
                        // 提交
                        let content: string = oEvent.getParameter("value");
                        let canvas: HTMLCanvasElement = <any>document.getElementsByClassName("screenShotCanvas")[0];
                        canvas.toBlob((blob: Blob) => {
                            let fileData: FormData = new FormData();
                            fileData.append("file", blob, ibas.uuids.random() + ".png");
                            that.fireViewEvents(that.submitEvent, fileData, content);
                        });
                    }
                }),
            ]
        });
        return this.layout;
    }
    /** 显示屏幕截图 */
    showScreenShot(): void {
        let that: this = this;
        require(
            [
                "../../../3rdparty/rasterizeHTML.allinone",
                "../../../3rdparty/canvastools.min",
                "css!../../../3rdparty/canvastools.min"
            ],
            function (rasterizeHTML: any, CanvasTools: any): void {
                let canvas: HTMLCanvasElement = <any>document.getElementsByClassName("screenShotCanvas")[0];
                let tools: Element = document.getElementsByClassName("tools-fixed")[0];
                rasterizeHTML.drawDocument(that.document, canvas, {
                    width: window.innerWidth,
                    height: window.innerHeight
                }).then(function success(renderResult: any): void {
                    canvas.style.visibility = "visible";
                    let canvasTools: any = new CanvasTools(canvas, { container: tools });
                }, function error(e: any): void {
                    // empty
                });
            });
    }
}