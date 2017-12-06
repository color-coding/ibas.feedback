/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

// 共享的数据
import {
    strings,
    MODULE_REPOSITORY_NAME_TEMPLATE,
} from "ibas/index";

/** 模块-标识 */
export const CONSOLE_ID: string = "420471fe-047f-4c73-ae26-fe9da158b614";
/** 模块-名称 */
export const CONSOLE_NAME: string = "Feedback";
/** 模块-版本 */
export const CONSOLE_VERSION: string = "0.1.0";
/** 业务仓库名称 */
export const BO_REPOSITORY_FEEDBACK: string = strings.format(MODULE_REPOSITORY_NAME_TEMPLATE, CONSOLE_NAME);
/** 模块-标识 */
export const CONSOLEUSERS_ID: string = "420471fe-047f-4c73-ae26-fe9da158b615";
/** 模块-名称 */
export const CONSOLEUSERS_NAME: string = "FeedbackUsers";
/** 模块-版本 */
export const CONSOLEUSERS_VERSION: string = "0.1.0";
/** 业务仓库名称 */
export const BO_REPOSITORY_FEEDBACKUSERS: string = strings.format(MODULE_REPOSITORY_NAME_TEMPLATE, CONSOLEUSERS_NAME);
/** 业务对象编码-建议 */
export const BO_CODE_SUGGESTION: string = "${Company}_FB_SUGGESTION";
