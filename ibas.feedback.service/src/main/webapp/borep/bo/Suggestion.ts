/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    emYesNo,
    emDocumentStatus,
    emBOStatus,
    emApprovalStatus,
    BusinessObject,
    BusinessObjects,
    BOMasterData,
    BOMasterDataLine,
    BODocument,
    BODocumentLine,
    BOSimple,
    BOSimpleLine,
    config,
} from "ibas/index";
import {
    ISuggestion,
    BO_CODE_SUGGESTION,
} from "../../api/index";

/** 建议 */
export class Suggestion extends BOSimple<Suggestion> implements ISuggestion {

    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = BO_CODE_SUGGESTION;
    /** 构造函数 */
    constructor() {
        super();
    }
    /** 映射的属性名称-系统标识 */
    static PROPERTY_SYSTEMID_NAME: string = "SystemId";
    /** 获取-系统标识 */
    get systemId(): string {
        return this.getProperty<string>(Suggestion.PROPERTY_SYSTEMID_NAME);
    }
    /** 设置-系统标识 */
    set systemId(value: string) {
        this.setProperty(Suggestion.PROPERTY_SYSTEMID_NAME, value);
    }

    /** 映射的属性名称-模块标识 */
    static PROPERTY_MODULEID_NAME: string = "ModuleId";
    /** 获取-模块标识 */
    get moduleId(): string {
        return this.getProperty<string>(Suggestion.PROPERTY_MODULEID_NAME);
    }
    /** 设置-模块标识 */
    set moduleId(value: string) {
        this.setProperty(Suggestion.PROPERTY_MODULEID_NAME, value);
    }

    /** 映射的属性名称-应用标识 */
    static PROPERTY_APPLICATIONID_NAME: string = "ApplicationId";
    /** 获取-应用标识 */
    get applicationId(): string {
        return this.getProperty<string>(Suggestion.PROPERTY_APPLICATIONID_NAME);
    }
    /** 设置-应用标识 */
    set applicationId(value: string) {
        this.setProperty(Suggestion.PROPERTY_APPLICATIONID_NAME, value);
    }

    /** 映射的属性名称-建议人 */
    static PROPERTY_SUGGESTER_NAME: string = "Suggester";
    /** 获取-建议人 */
    get suggester(): string {
        return this.getProperty<string>(Suggestion.PROPERTY_SUGGESTER_NAME);
    }
    /** 设置-建议人 */
    set suggester(value: string) {
        this.setProperty(Suggestion.PROPERTY_SUGGESTER_NAME, value);
    }

    /** 映射的属性名称-主题 */
    static PROPERTY_SUBJECT_NAME: string = "Subject";
    /** 获取-主题 */
    get subject(): string {
        return this.getProperty<string>(Suggestion.PROPERTY_SUBJECT_NAME);
    }
    /** 设置-主题 */
    set subject(value: string) {
        this.setProperty(Suggestion.PROPERTY_SUBJECT_NAME, value);
    }

    /** 映射的属性名称-标签 */
    static PROPERTY_TAGS_NAME: string = "Tags";
    /** 获取-标签 */
    get tags(): string {
        return this.getProperty<string>(Suggestion.PROPERTY_TAGS_NAME);
    }
    /** 设置-标签 */
    set tags(value: string) {
        this.setProperty(Suggestion.PROPERTY_TAGS_NAME, value);
    }

    /** 映射的属性名称-内容 */
    static PROPERTY_CONTENT_NAME: string = "Content";
    /** 获取-内容 */
    get content(): string {
        return this.getProperty<string>(Suggestion.PROPERTY_CONTENT_NAME);
    }
    /** 设置-内容 */
    set content(value: string) {
        this.setProperty(Suggestion.PROPERTY_CONTENT_NAME, value);
    }

    /** 映射的属性名称-截图 */
    static PROPERTY_SCREENSHOT_NAME: string = "Screenshot";
    /** 获取-截图 */
    get screenshot(): string {
        return this.getProperty<string>(Suggestion.PROPERTY_SCREENSHOT_NAME);
    }
    /** 设置-截图 */
    set screenshot(value: string) {
        this.setProperty(Suggestion.PROPERTY_SCREENSHOT_NAME, value);
    }

    /** 映射的属性名称-是否关闭 */
    static PROPERTY_CLOSED_NAME: string = "Closed";
    /** 获取-是否关闭 */
    get closed(): emYesNo {
        return this.getProperty<emYesNo>(Suggestion.PROPERTY_CLOSED_NAME);
    }
    /** 设置-是否关闭 */
    set closed(value: emYesNo) {
        this.setProperty(Suggestion.PROPERTY_CLOSED_NAME, value);
    }

    /** 映射的属性名称-对象键值 */
    static PROPERTY_OBJECTKEY_NAME: string = "ObjectKey";
    /** 获取-对象键值 */
    get objectKey(): number {
        return this.getProperty<number>(Suggestion.PROPERTY_OBJECTKEY_NAME);
    }
    /** 设置-对象键值 */
    set objectKey(value: number) {
        this.setProperty(Suggestion.PROPERTY_OBJECTKEY_NAME, value);
    }

    /** 映射的属性名称-对象类型 */
    static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
    /** 获取-对象类型 */
    get objectCode(): string {
        return this.getProperty<string>(Suggestion.PROPERTY_OBJECTCODE_NAME);
    }
    /** 设置-对象类型 */
    set objectCode(value: string) {
        this.setProperty(Suggestion.PROPERTY_OBJECTCODE_NAME, value);
    }

    /** 映射的属性名称-数据源 */
    static PROPERTY_DATASOURCE_NAME: string = "DataSource";
    /** 获取-数据源 */
    get dataSource(): string {
        return this.getProperty<string>(Suggestion.PROPERTY_DATASOURCE_NAME);
    }
    /** 设置-数据源 */
    set dataSource(value: string) {
        this.setProperty(Suggestion.PROPERTY_DATASOURCE_NAME, value);
    }

    /** 映射的属性名称-创建日期 */
    static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
    /** 获取-创建日期 */
    get createDate(): Date {
        return this.getProperty<Date>(Suggestion.PROPERTY_CREATEDATE_NAME);
    }
    /** 设置-创建日期 */
    set createDate(value: Date) {
        this.setProperty(Suggestion.PROPERTY_CREATEDATE_NAME, value);
    }

    /** 映射的属性名称-创建时间 */
    static PROPERTY_CREATETIME_NAME: string = "CreateTime";
    /** 获取-创建时间 */
    get createTime(): number {
        return this.getProperty<number>(Suggestion.PROPERTY_CREATETIME_NAME);
    }
    /** 设置-创建时间 */
    set createTime(value: number) {
        this.setProperty(Suggestion.PROPERTY_CREATETIME_NAME, value);
    }

    /** 映射的属性名称-修改日期 */
    static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
    /** 获取-修改日期 */
    get updateDate(): Date {
        return this.getProperty<Date>(Suggestion.PROPERTY_UPDATEDATE_NAME);
    }
    /** 设置-修改日期 */
    set updateDate(value: Date) {
        this.setProperty(Suggestion.PROPERTY_UPDATEDATE_NAME, value);
    }

    /** 映射的属性名称-修改时间 */
    static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
    /** 获取-修改时间 */
    get updateTime(): number {
        return this.getProperty<number>(Suggestion.PROPERTY_UPDATETIME_NAME);
    }
    /** 设置-修改时间 */
    set updateTime(value: number) {
        this.setProperty(Suggestion.PROPERTY_UPDATETIME_NAME, value);
    }

    /** 映射的属性名称-创建动作标识 */
    static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
    /** 获取-创建动作标识 */
    get createActionId(): string {
        return this.getProperty<string>(Suggestion.PROPERTY_CREATEACTIONID_NAME);
    }
    /** 设置-创建动作标识 */
    set createActionId(value: string) {
        this.setProperty(Suggestion.PROPERTY_CREATEACTIONID_NAME, value);
    }

    /** 映射的属性名称-更新动作标识 */
    static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
    /** 获取-更新动作标识 */
    get updateActionId(): string {
        return this.getProperty<string>(Suggestion.PROPERTY_UPDATEACTIONID_NAME);
    }
    /** 设置-更新动作标识 */
    set updateActionId(value: string) {
        this.setProperty(Suggestion.PROPERTY_UPDATEACTIONID_NAME, value);
    }

    /** 映射的属性名称-实例号（版本） */
    static PROPERTY_LOGINST_NAME: string = "LogInst";
    /** 获取-实例号（版本） */
    get logInst(): number {
        return this.getProperty<number>(Suggestion.PROPERTY_LOGINST_NAME);
    }
    /** 设置-实例号（版本） */
    set logInst(value: number) {
        this.setProperty(Suggestion.PROPERTY_LOGINST_NAME, value);
    }

    /** 映射的属性名称-创建用户 */
    static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
    /** 获取-创建用户 */
    get createUserSign(): number {
        return this.getProperty<number>(Suggestion.PROPERTY_CREATEUSERSIGN_NAME);
    }
    /** 设置-创建用户 */
    set createUserSign(value: number) {
        this.setProperty(Suggestion.PROPERTY_CREATEUSERSIGN_NAME, value);
    }

    /** 映射的属性名称-修改用户 */
    static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
    /** 获取-修改用户 */
    get updateUserSign(): number {
        return this.getProperty<number>(Suggestion.PROPERTY_UPDATEUSERSIGN_NAME);
    }
    /** 设置-修改用户 */
    set updateUserSign(value: number) {
        this.setProperty(Suggestion.PROPERTY_UPDATEUSERSIGN_NAME, value);
    }



    /** 初始化数据 */
    protected init(): void {
        this.objectCode = config.applyVariables(Suggestion.BUSINESS_OBJECT_CODE);
    }
}


