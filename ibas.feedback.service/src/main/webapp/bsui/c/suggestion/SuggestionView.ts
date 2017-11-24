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
    private document: Document;
    private image: sap.m.Image;
    private layout: sap.ui.layout.VerticalLayout;
    /** 激活完整视图事件 */
    showFullViewEvent: Function;
    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.document = <any>window.document.cloneNode(true);
        this.image = new sap.m.Image("", {
            width: ibas.strings.format("{0}px", window.innerWidth * 0.5)
        });
        this.layout = new sap.ui.layout.VerticalLayout("", {
            content: [
                // this.image,
                new sap.ui.core.HTML("", {
                    content: ibas.strings.format(" \
                        <div class='screenshotDiv' > \
                            <canvas class='screenshotCanvas' width='{2}' height='{3}' \
                            style='width: {0}px;height: {1}px;visibility: hidden;'> \
                            </canvas> \
                        </div>", window.innerWidth * 0.5, window.innerHeight * 0.5, window.innerWidth, window.innerHeight)
                }),
                new sap.ui.core.HTML("", {
                    content: "<div class='tools-fixed tools-draggable' ></div>"
                }),
                new sap.m.FeedInput("", {
                    maxLength: 0,
                    placeholder: ibas.i18n.prop("shell_submit_suggestion"),
                    icon: "",// 当前用户的头像
                    showIcon: true,
                    iconDensityAware: true,
                    post: function (oEvent: sap.ui.base.Event): void {
                        // 提交
                        let content: string = oEvent.getParameter("value");
                        let canvas: HTMLCanvasElement = <any>document.getElementsByClassName("screenshotCanvas")[0];
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
        let target: Element = document.getElementsByClassName("screenshotDiv")[0];
        // 设置loading动画
        let spinner: any = new (<any>window).Spinner({
            lines: 13 // the number of lines to draw
            , length: 28 // the length of each line
            , width: 14 // the line thickness
            , radius: 42 // the radius of the inner circle
            , scale: 0.25 // scales overall size of the spinner
            , corners: 1 // corner roundness (0..1)
            , color: "#000" // #rgb or #rrggbb or array of colors
            , opacity: 0.25 // opacity of the lines
            , rotate: 0 // the rotation offset
            , direction: 1 // 1: clockwise, -1: counterclockwise
            , speed: 1 // rounds per second
            , trail: 60 // afterglow percentage
            , fps: 20 // frames per second when using setTimeout() as a fallback for CSS
            , zIndex: 2e9 // the z-index (defaults to 2000000000)
            , className: "spinner" // the CSS class to assign to the spinner
            , top: "50%" // top position relative to parent
            , left: "50%" // left position relative to parent
            , shadow: false // whether to render a shadow
            , hwaccel: false // whether to use hardware acceleration
            , position: "absolute" // element positioning
        }).spin(target);
        require(
            [
                "../../../3rdparty/rasterizeHTML.allinone",
                "../../../3rdparty/canvastools.min",
                "css!../../../3rdparty/canvastools.min"
            ],
            function (rasterizeHTML: any, CanvasTools: any): void {
                // 移除document中的script,否则会引发沙盒环境下script不允许执行的问题
                let length: number = that.document.head.childNodes.length;
                for (let i: number = length - 1; i >= 0; i--) {
                    let node: Node = that.document.head.childNodes[i];
                    if (node.nodeName.toUpperCase() === "SCRIPT") {
                        that.document.head.removeChild(node);
                    }
                }
                length = that.document.body.childNodes.length;
                for (let i: number = length - 1; i >= 0; i--) {
                    let node: Node = that.document.body.childNodes[i];
                    if (node.nodeName.toUpperCase() === "SCRIPT") {
                        that.document.body.removeChild(node);
                    }
                }
                let canvas: HTMLCanvasElement = <any>document.getElementsByClassName("screenshotCanvas")[0];
                let tools: Element = document.getElementsByClassName("tools-fixed")[0];
                rasterizeHTML.drawDocument(that.document, canvas, {
                    width: window.innerWidth,
                    height: window.innerHeight
                }).then(function success(renderResult: any): void {
                    // 关闭loading动画
                    spinner.spin();
                    canvas.style.visibility = "visible";
                    let canvasTools: any = new CanvasTools(canvas, { container: tools });
                }, function error(e: any): void {
                    // empty
                });
            });
    }
}