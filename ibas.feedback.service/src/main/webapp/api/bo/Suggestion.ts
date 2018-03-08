/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace feedback {
    export namespace bo {

        /** 建议 */
        export interface ISuggestion extends ibas.IBOSimple {

            /** 系统标识 */
            systemId: string;

            /** 模块标识 */
            moduleId: string;

            /** 应用标识 */
            applicationId: string;

            /** 建议人 */
            suggester: string;

            /** 主题 */
            subject: string;

            /** 标签 */
            tags: string;

            /** 内容 */
            content: string;

            /** 截图 */
            screenshot: string;

            /** 是否关闭 */
            closed: ibas.emYesNo;

            /** 对象键值 */
            objectKey: number;

            /** 对象类型 */
            objectCode: string;

            /** 数据源 */
            dataSource: string;

            /** 创建日期 */
            createDate: Date;

            /** 创建时间 */
            createTime: number;

            /** 修改日期 */
            updateDate: Date;

            /** 修改时间 */
            updateTime: number;

            /** 创建动作标识 */
            createActionId: string;

            /** 更新动作标识 */
            updateActionId: string;

            /** 实例号（版本） */
            logInst: number;

            /** 创建用户 */
            createUserSign: number;

            /** 修改用户 */
            updateUserSign: number;
        }
    }

}


