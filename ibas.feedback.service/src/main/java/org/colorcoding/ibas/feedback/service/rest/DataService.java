package org.colorcoding.ibas.feedback.service.rest;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.HeaderParam;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.feedback.MyConfiguration;
import org.colorcoding.ibas.feedback.bo.suggestion.Suggestion;
import org.colorcoding.ibas.feedback.repository.BORepositoryFeedback;

/**
 * Feedback 数据服务JSON
 */
@Path("data")
public class DataService extends BORepositoryFeedback {

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-建议
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchSuggestion")
	public OperationResult<Suggestion> fetchSuggestion(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchSuggestion(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-建议
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveSuggestion")
	public OperationResult<Suggestion> saveSuggestion(Suggestion bo, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.saveSuggestion(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//

}
