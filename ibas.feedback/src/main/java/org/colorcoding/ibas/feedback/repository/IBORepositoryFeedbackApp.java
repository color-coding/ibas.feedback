package org.colorcoding.ibas.feedback.repository;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.repository.*;
import org.colorcoding.ibas.feedback.bo.suggestion.*;

/**
* Feedback仓库应用
*/
public interface IBORepositoryFeedbackApp extends IBORepositoryApplication {

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-建议
     * @param criteria 查询
     * @return 操作结果
     */
    IOperationResult<ISuggestion> fetchSuggestion(ICriteria criteria);

    /**
     * 保存-建议
     * @param bo 对象实例
     * @return 操作结果
     */
    IOperationResult<ISuggestion> saveSuggestion(ISuggestion bo);

    //--------------------------------------------------------------------------------------------//

}
