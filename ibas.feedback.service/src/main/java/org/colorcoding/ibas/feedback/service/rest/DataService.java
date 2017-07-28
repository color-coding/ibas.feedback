package org.colorcoding.ibas.feedback.service.rest;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.feedback.repository.*;
import org.colorcoding.ibas.feedback.bo.suggestion.*;

/**
* Feedback 数据服务JSON
*/
@Path("data")
public class DataService extends BORepositoryFeedback {

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-建议
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("fetchSuggestion")
    public OperationResult<Suggestion> fetchSuggestion(Criteria criteria, @QueryParam("token") String token) {
        return super.fetchSuggestion(criteria, token);
    }

    /**
     * 保存-建议
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("saveSuggestion")
    public OperationResult<Suggestion> saveSuggestion(Suggestion bo, @QueryParam("token") String token) {
        return super.saveSuggestion(bo, token);
    }

    //--------------------------------------------------------------------------------------------//

}
