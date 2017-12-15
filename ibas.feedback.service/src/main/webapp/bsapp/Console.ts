/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { CONSOLE_ID, CONSOLE_NAME, CONSOLE_VERSION } from "../api/index";
import { SuggestionFunc, SuggestionChooseServiceMapping, SuggestionLinkServiceMapping, SuggestionApp } from "./suggestion/index";

/** 模块控制台 */
export class Console extends ibas.ModuleConsole {
    /** 构造函数 */
    constructor() {
        super();
        this.id = CONSOLE_ID;
        this.name = CONSOLE_NAME;
        this.version = CONSOLE_VERSION;
        this.copyright = ibas.i18n.prop("shell_license");
    }
    private _navigation: ibas.IViewNavigation;
    /** 创建视图导航 */
    navigation(): ibas.IViewNavigation {
        return this._navigation;
    }
    /** 初始化 */
    protected registers(): void {
        // 注册功能
        this.register(new SuggestionFunc());
        // 注册服务应用
        this.register(new SuggestionChooseServiceMapping());
        this.register(new SuggestionLinkServiceMapping());
        // 注册常驻应用
    }
    /** 运行 */
    run(): void {
        // 加载语言-框架默认
        ibas.i18n.load(this.rootUrl + "resources/languages/feedback.json");
        ibas.i18n.load(this.rootUrl + "resources/languages/enums.json");
        ibas.i18n.load(this.rootUrl + "resources/languages/bo/suggestion.json");
        // 设置资源属性
        this.description = ibas.i18n.prop(this.name.toLowerCase());
        this.icon = ibas.i18n.prop(this.name.toLowerCase() + "_icon");
        // 先加载ui导航
        let uiModules: string[] = [];
        if (!ibas.config.get(ibas.CONFIG_ITEM_DISABLE_PLATFORM_VIEW, false)
            && this.plantform === ibas.emPlantform.PHONE) {
            // 使用m类型视图
            uiModules.push("../bsui/m/Navigation");
        } else {
            // 使用c类型视图
            uiModules.push("../bsui/c/Navigation");
        }
        let that: this = this;
        require(uiModules, function (ui: any): void {
            // 设置导航
            that._navigation = new ui.default();
            // 调用初始化
            that.initialize();
        });
        // 保留基类方法
        super.run();
    }
}

/** 模块控制台 */
export class ConsoleUsers extends ibas.ModuleConsole {
    /** 模块-标识 */
    static CONSOLE_ID: string = "420471fe-047f-4c73-ae26-fe9da158b615";
    /** 模块-名称 */
    static CONSOLE_NAME: string = "FeedbackUsers";
    /** 模块-版本 */
    static CONSOLE_VERSION: string = "0.1.0";
    /** 构造函数 */
    constructor() {
        super();
        this.id = ConsoleUsers.CONSOLE_ID;
        this.name = ConsoleUsers.CONSOLE_NAME;
        this.version = ConsoleUsers.CONSOLE_VERSION;
    }
    private _navigation: ibas.IViewNavigation;
    /** 创建视图导航 */
    navigation(): ibas.IViewNavigation {
        return this._navigation;
    }
    /** 初始化 */
    protected registers(): void {
        // 注册功能
        // 注册服务应用
        // 注册常驻应用
        this.register(new SuggestionApp());

    }
    /** 运行 */
    run(): void {
        // 加载语言-框架默认
        ibas.i18n.load(this.rootUrl + "resources/languages/feedback.json");
        ibas.i18n.load(this.rootUrl + "resources/languages/bo/suggestion.json");
        ibas.i18n.load(this.rootUrl + "resources/languages/enums.json");
        // 设置资源属性
        this.description = ibas.i18n.prop(this.name.toLowerCase());
        this.icon = ibas.i18n.prop(this.name.toLowerCase() + "_icon");
        // 先加载ui导航
        let uiModules: string[] = [];
        if (!ibas.config.get(ibas.CONFIG_ITEM_DISABLE_PLATFORM_VIEW, false)
            && this.plantform === ibas.emPlantform.PHONE) {
            // 使用m类型视图
            uiModules.push("../bsui/m/Navigation");
        } else {
            // 使用c类型视图
            uiModules.push("../bsui/c/Navigation");
        }
        let that: this = this;
        require(uiModules, function (ui: any): void {
            // 设置导航
            that._navigation = new ui.default();
            // 调用初始化
            that.initialize();
        });
        // 保留基类方法
        super.run();
    }
    /** 设置业务仓库地址 */
    setRepository(address: string): boolean {
        address = ibas.urls.normalize(address);
        let repositoryName: string = ibas.strings.format(ibas.MODULE_REPOSITORY_NAME_TEMPLATE, CONSOLE_NAME);
        let configName: string = ibas.strings.format(ibas.CONFIG_ITEM_TEMPLATE_REMOTE_REPOSITORY_ADDRESS, repositoryName);
        ibas.config.set(configName, address);
        ibas.logger.log(ibas.emMessageLevel.DEBUG, "repository: register [{0}]'s default address [{1}].", repositoryName, address);
        return super.setRepository(address);
    }
}
