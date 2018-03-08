/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../3rdparty/ibas/index.d.ts" />
/// <reference path="../api/index.ts" />
/// <reference path="./bo/Suggestion.ts" />
/// <reference path="./DataConverter.ts" />
/// <reference path="./BORepository.ts" />

namespace feedback {
    export namespace bo {
        // 注册业务对象仓库到工厂
        ibas.boFactory.register(BO_REPOSITORY_FEEDBACK, BORepositoryFeedback);
        // 注册业务对象到工厂
        ibas.boFactory.register(Suggestion.BUSINESS_OBJECT_CODE, Suggestion);
    }
}