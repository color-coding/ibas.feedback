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
    private layout: sap.ui.layout.VerticalLayout;
    private form: sap.m.ResponsivePopover;
    /** 激活完整视图事件 */
    showFullViewEvent: Function;
    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.document = <any>window.document.cloneNode(true);
        this.layout = new sap.ui.layout.VerticalLayout("", {
            content: [
                // this.image,
                new sap.ui.core.HTML("", {
                    content: ibas.strings.format(" \
                        <div class='screenshotDiv' > \
                            <canvas class='screenshotCanvas' width='{2}' height='{3}' \
                            style='width: {0};height: {1};visibility: hidden;'> \
                            </canvas> \
                        </div>", this.screenShotLayout.width, this.screenShotLayout.height,
                        window.innerWidth, window.innerHeight)
                }),
                new sap.m.FeedInput("", {
                    maxLength: 0,
                    placeholder: ibas.i18n.prop("feedback_msg_submit_suggestion"),
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
            ],
        });
        if (this.isDesktop) {
            this.layout.insertContent(
                new sap.ui.core.HTML("", {
                    content: "<div class='tools-fixed tools-draggable' ></div>"
                }), 1);
        }
        this.form = new sap.m.ResponsivePopover("", {
            title: ibas.i18n.prop("feedback_app_suggestion_tucao"),
            showCloseButton: true,
            placement: sap.m.PlacementType.Bottom,
            content: [
                this.layout
            ],
        });
        return this.form;
    }
    /** 屏幕截图布局 */
    protected get screenShotLayout(): { width: string, height: string } {
        return {
            width: ibas.strings.format("{0}px", window.innerWidth * 0.5),
            height: ibas.strings.format("{0}px", window.innerHeight * 0.5)
        };
    }
    /** 是否桌面端 */
    protected get isDesktop(): boolean {
        return true;
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
            ],
            function (rasterizeHTML: any): void {
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
                    if (that.isDesktop) {
                        // 仅桌面端可编辑截图
                        require(
                            [
                                "../../../3rdparty/canvastools.min",
                                "css!../../../3rdparty/canvastools.min"
                            ], function (CanvasTools: any): void {
                                let canvasTools: any = new CanvasTools(canvas, { container: tools });
                            });
                    }
                }, function error(e: any): void {
                    // empty
                });
            });

    }
}