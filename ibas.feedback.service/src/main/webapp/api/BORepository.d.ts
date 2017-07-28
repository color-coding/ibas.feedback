/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    FetchCaller,
    SaveCaller
} from "ibas/index";
import * as bo from "./bo/index"

/** 业务仓库 */
export interface IBORepositoryFeedback {

    /**
     * 查询 建议
     * @param fetcher 查询者
     */
    fetchSuggestion(fetcher: FetchCaller<bo.ISuggestion>);
    /**
     * 保存 建议
     * @param saver 保存者
     */
    saveSuggestion(saver: SaveCaller<bo.ISuggestion>);


}
