/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../c/suggestion/index.ts" />
namespace feedback {
    export namespace ui {
        export namespace m {
            /**
             * 视图-建议
             */
            export class SuggestionView extends c.SuggestionView {
                /** 屏幕截图布局 */
                protected get screenShotLayout(): { width: string, height: string } {
                    return {
                        /** 屏幕宽度-2*padding */
                        width: ibas.strings.format("calc({0}px - 2 * 1rem)", window.innerWidth),
                        /** 屏幕高度- 2*padding - title高度 - FeedInput高度 */
                        height: ibas.strings.format("calc({0}px - 2 * 1rem - 3rem - 80px)", window.innerHeight)
                    };
                }
                /** 是否桌面端 */
                protected get isDesktop(): boolean {
                    return false;
                }
            }
        }
    }
}