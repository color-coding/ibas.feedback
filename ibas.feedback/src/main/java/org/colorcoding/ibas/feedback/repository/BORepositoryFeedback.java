package org.colorcoding.ibas.feedback.repository;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.ownership.*;
import org.colorcoding.ibas.bobas.repository.*;
import org.colorcoding.ibas.feedback.bo.suggestion.*;

/**
* Feedback仓库
*/
@PermissionGroup("Feedback")
public class BORepositoryFeedback extends BORepositoryServiceApplication implements IBORepositoryFeedbackSvc, IBORepositoryFeedbackApp {

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-建议
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    public OperationResult<Suggestion> fetchSuggestion(ICriteria criteria, String token) {
        return super.fetch(criteria, token, Suggestion.class);
    }

    /**
     * 查询-建议（提前设置用户口令）
     * @param criteria 查询
     * @return 操作结果
     */
    public IOperationResult<ISuggestion> fetchSuggestion(ICriteria criteria) {
        return new OperationResult<ISuggestion>(this.fetchSuggestion(criteria, this.getUserToken()));
    }

    /**
     * 保存-建议
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    public OperationResult<Suggestion> saveSuggestion(Suggestion bo, String token) {
        return super.save(bo, token);
    }

    /**
     * 保存-建议（提前设置用户口令）
     * @param bo 对象实例
     * @return 操作结果
     */
    public IOperationResult<ISuggestion> saveSuggestion(ISuggestion bo) {
        return new OperationResult<ISuggestion>(this.saveSuggestion((Suggestion) bo, this.getUserToken()));
    }

    //--------------------------------------------------------------------------------------------//

}
