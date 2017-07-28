package org.colorcoding.ibas.feedback.repository;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.repository.*;
import org.colorcoding.ibas.feedback.bo.suggestion.*;

/**
* Feedback仓库服务
*/
public interface IBORepositoryFeedbackSvc extends IBORepositorySmartService {


    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-建议
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<Suggestion> fetchSuggestion(ICriteria criteria, String token);

    /**
     * 保存-建议
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<Suggestion> saveSuggestion(Suggestion bo, String token);

    //--------------------------------------------------------------------------------------------//

}
