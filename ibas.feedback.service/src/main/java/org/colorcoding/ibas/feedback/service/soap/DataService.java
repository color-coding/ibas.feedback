package org.colorcoding.ibas.feedback.service.soap;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.cxf.WebServicePath;
import org.colorcoding.ibas.feedback.repository.*;
import org.colorcoding.ibas.feedback.bo.suggestion.*;

/**
* Feedback 数据服务JSON
*/
@WebService
@WebServicePath("data")
public class DataService extends BORepositoryFeedback {

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-建议
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<Suggestion> fetchSuggestion(@WebParam(name = "criteria") Criteria criteria, @WebParam(name = "token") String token) {
        return super.fetchSuggestion(criteria, token);
    }

    /**
     * 保存-建议
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<Suggestion> saveSuggestion(@WebParam(name = "bo") Suggestion bo, @WebParam(name = "token") String token) {
        return super.saveSuggestion(bo, token);
    }

    //--------------------------------------------------------------------------------------------//

}
