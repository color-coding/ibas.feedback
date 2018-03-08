/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace feedback {
    export namespace app {

        export class SuggestionFunc extends ibas.ModuleFunction {

            /** 功能标识 */
            static FUNCTION_ID = "3ed917d2-0133-42ea-a1f3-23b5a7ca145b";
            /** 功能名称 */
            static FUNCTION_NAME = "feedback_func_suggestion";
            /** 构造函数 */
            constructor() {
                super();
                this.id = SuggestionFunc.FUNCTION_ID;
                this.name = SuggestionFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: SuggestionListApp = new SuggestionListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}