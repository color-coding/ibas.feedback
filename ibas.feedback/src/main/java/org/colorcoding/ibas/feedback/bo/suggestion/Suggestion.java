package org.colorcoding.ibas.feedback.bo.suggestion;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObject;
import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.mapping.BOCode;
import org.colorcoding.ibas.bobas.mapping.DbField;
import org.colorcoding.ibas.bobas.mapping.DbFieldType;
import org.colorcoding.ibas.feedback.MyConfiguration;

/**
 * 获取-建议
 * 
 */
@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = Suggestion.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlRootElement(name = Suggestion.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@BOCode(Suggestion.BUSINESS_OBJECT_CODE)
public class Suggestion extends BusinessObject<Suggestion> implements ISuggestion {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -3871930365781002047L;

	/**
	 * 当前类型
	 */
	private static final Class<?> MY_CLASS = Suggestion.class;

	/**
	 * 数据库表
	 */
	public static final String DB_TABLE_NAME = "${Company}_FB_SUGGESTION";

	/**
	 * 业务对象编码
	 */
	public static final String BUSINESS_OBJECT_CODE = "${Company}_FB_SUGGESTION";

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "Suggestion";

	/**
	 * 属性名称-系统标识
	 */
	private static final String PROPERTY_SYSTEMID_NAME = "SystemId";

	/**
	 * 系统标识 属性
	 */
	@DbField(name = "SystemId", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_SYSTEMID = registerProperty(PROPERTY_SYSTEMID_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-系统标识
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SYSTEMID_NAME)
	public final String getSystemId() {
		return this.getProperty(PROPERTY_SYSTEMID);
	}

	/**
	 * 设置-系统标识
	 * 
	 * @param value
	 *            值
	 */
	public final void setSystemId(String value) {
		this.setProperty(PROPERTY_SYSTEMID, value);
	}

	/**
	 * 属性名称-模块标识
	 */
	private static final String PROPERTY_MODULEID_NAME = "ModuleId";

	/**
	 * 模块标识 属性
	 */
	@DbField(name = "ModuleId", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_MODULEID = registerProperty(PROPERTY_MODULEID_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-模块标识
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_MODULEID_NAME)
	public final String getModuleId() {
		return this.getProperty(PROPERTY_MODULEID);
	}

	/**
	 * 设置-模块标识
	 * 
	 * @param value
	 *            值
	 */
	public final void setModuleId(String value) {
		this.setProperty(PROPERTY_MODULEID, value);
	}

	/**
	 * 属性名称-应用标识
	 */
	private static final String PROPERTY_APPLICATIONID_NAME = "ApplicationId";

	/**
	 * 应用标识 属性
	 */
	@DbField(name = "AppId", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_APPLICATIONID = registerProperty(PROPERTY_APPLICATIONID_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-应用标识
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_APPLICATIONID_NAME)
	public final String getApplicationId() {
		return this.getProperty(PROPERTY_APPLICATIONID);
	}

	/**
	 * 设置-应用标识
	 * 
	 * @param value
	 *            值
	 */
	public final void setApplicationId(String value) {
		this.setProperty(PROPERTY_APPLICATIONID, value);
	}

	/**
	 * 属性名称-建议人
	 */
	private static final String PROPERTY_SUGGESTER_NAME = "Suggester";

	/**
	 * 建议人 属性
	 */
	@DbField(name = "Suggester", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_SUGGESTER = registerProperty(PROPERTY_SUGGESTER_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-建议人
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SUGGESTER_NAME)
	public final String getSuggester() {
		return this.getProperty(PROPERTY_SUGGESTER);
	}

	/**
	 * 设置-建议人
	 * 
	 * @param value
	 *            值
	 */
	public final void setSuggester(String value) {
		this.setProperty(PROPERTY_SUGGESTER, value);
	}

	/**
	 * 属性名称-主题
	 */
	private static final String PROPERTY_SUBJECT_NAME = "Subject";

	/**
	 * 主题 属性
	 */
	@DbField(name = "Subject", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_SUBJECT = registerProperty(PROPERTY_SUBJECT_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-主题
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SUBJECT_NAME)
	public final String getSubject() {
		return this.getProperty(PROPERTY_SUBJECT);
	}

	/**
	 * 设置-主题
	 * 
	 * @param value
	 *            值
	 */
	public final void setSubject(String value) {
		this.setProperty(PROPERTY_SUBJECT, value);
	}

	/**
	 * 属性名称-标签
	 */
	private static final String PROPERTY_TAGS_NAME = "Tags";

	/**
	 * 标签 属性
	 */
	@DbField(name = "Tags", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_TAGS = registerProperty(PROPERTY_TAGS_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-标签
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_TAGS_NAME)
	public final String getTags() {
		return this.getProperty(PROPERTY_TAGS);
	}

	/**
	 * 设置-标签
	 * 
	 * @param value
	 *            值
	 */
	public final void setTags(String value) {
		this.setProperty(PROPERTY_TAGS, value);
	}

	/**
	 * 属性名称-内容
	 */
	private static final String PROPERTY_CONTENT_NAME = "Content";

	/**
	 * 内容 属性
	 */
	@DbField(name = "Content", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_CONTENT = registerProperty(PROPERTY_CONTENT_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-内容
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CONTENT_NAME)
	public final String getContent() {
		return this.getProperty(PROPERTY_CONTENT);
	}

	/**
	 * 设置-内容
	 * 
	 * @param value
	 *            值
	 */
	public final void setContent(String value) {
		this.setProperty(PROPERTY_CONTENT, value);
	}

	/**
	 * 属性名称-截图
	 */
	private static final String PROPERTY_SCREENSHOT_NAME = "Screenshot";

	/**
	 * 截图 属性
	 */
	@DbField(name = "Screenshot", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_SCREENSHOT = registerProperty(PROPERTY_SCREENSHOT_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-截图
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SCREENSHOT_NAME)
	public final String getScreenshot() {
		return this.getProperty(PROPERTY_SCREENSHOT);
	}

	/**
	 * 设置-截图
	 * 
	 * @param value
	 *            值
	 */
	public final void setScreenshot(String value) {
		this.setProperty(PROPERTY_SCREENSHOT, value);
	}

	/**
	 * 属性名称-是否关闭
	 */
	private static final String PROPERTY_CLOSED_NAME = "Closed";

	/**
	 * 是否关闭 属性
	 */
	@DbField(name = "Closed", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emYesNo> PROPERTY_CLOSED = registerProperty(PROPERTY_CLOSED_NAME, emYesNo.class,
			MY_CLASS);

	/**
	 * 获取-是否关闭
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CLOSED_NAME)
	public final emYesNo getClosed() {
		return this.getProperty(PROPERTY_CLOSED);
	}

	/**
	 * 设置-是否关闭
	 * 
	 * @param value
	 *            值
	 */
	public final void setClosed(emYesNo value) {
		this.setProperty(PROPERTY_CLOSED, value);
	}

	/**
	 * 属性名称-对象键值
	 */
	private static final String PROPERTY_OBJECTKEY_NAME = "ObjectKey";

	/**
	 * 对象键值 属性
	 */
	@DbField(name = "ObjectKey", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = true)
	public static final IPropertyInfo<Integer> PROPERTY_OBJECTKEY = registerProperty(PROPERTY_OBJECTKEY_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-对象键值
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_OBJECTKEY_NAME)
	public final Integer getObjectKey() {
		return this.getProperty(PROPERTY_OBJECTKEY);
	}

	/**
	 * 设置-对象键值
	 * 
	 * @param value
	 *            值
	 */
	public final void setObjectKey(Integer value) {
		this.setProperty(PROPERTY_OBJECTKEY, value);
	}

	/**
	 * 属性名称-对象类型
	 */
	private static final String PROPERTY_OBJECTCODE_NAME = "ObjectCode";

	/**
	 * 对象类型 属性
	 */
	@DbField(name = "ObjectCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_OBJECTCODE = registerProperty(PROPERTY_OBJECTCODE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-对象类型
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_OBJECTCODE_NAME)
	public final String getObjectCode() {
		return this.getProperty(PROPERTY_OBJECTCODE);
	}

	/**
	 * 设置-对象类型
	 * 
	 * @param value
	 *            值
	 */
	public final void setObjectCode(String value) {
		this.setProperty(PROPERTY_OBJECTCODE, value);
	}

	/**
	 * 属性名称-数据源
	 */
	private static final String PROPERTY_DATASOURCE_NAME = "DataSource";

	/**
	 * 数据源 属性
	 */
	@DbField(name = "DataSource", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_DATASOURCE = registerProperty(PROPERTY_DATASOURCE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-数据源
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DATASOURCE_NAME)
	public final String getDataSource() {
		return this.getProperty(PROPERTY_DATASOURCE);
	}

	/**
	 * 设置-数据源
	 * 
	 * @param value
	 *            值
	 */
	public final void setDataSource(String value) {
		this.setProperty(PROPERTY_DATASOURCE, value);
	}

	/**
	 * 属性名称-创建日期
	 */
	private static final String PROPERTY_CREATEDATE_NAME = "CreateDate";

	/**
	 * 创建日期 属性
	 */
	@DbField(name = "CreateDate", type = DbFieldType.DATE, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<DateTime> PROPERTY_CREATEDATE = registerProperty(PROPERTY_CREATEDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-创建日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CREATEDATE_NAME)
	public final DateTime getCreateDate() {
		return this.getProperty(PROPERTY_CREATEDATE);
	}

	/**
	 * 设置-创建日期
	 * 
	 * @param value
	 *            值
	 */
	public final void setCreateDate(DateTime value) {
		this.setProperty(PROPERTY_CREATEDATE, value);
	}

	/**
	 * 属性名称-创建时间
	 */
	private static final String PROPERTY_CREATETIME_NAME = "CreateTime";

	/**
	 * 创建时间 属性
	 */
	@DbField(name = "CreateTime", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Short> PROPERTY_CREATETIME = registerProperty(PROPERTY_CREATETIME_NAME,
			Short.class, MY_CLASS);

	/**
	 * 获取-创建时间
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CREATETIME_NAME)
	public final Short getCreateTime() {
		return this.getProperty(PROPERTY_CREATETIME);
	}

	/**
	 * 设置-创建时间
	 * 
	 * @param value
	 *            值
	 */
	public final void setCreateTime(Short value) {
		this.setProperty(PROPERTY_CREATETIME, value);
	}

	/**
	 * 属性名称-修改日期
	 */
	private static final String PROPERTY_UPDATEDATE_NAME = "UpdateDate";

	/**
	 * 修改日期 属性
	 */
	@DbField(name = "UpdateDate", type = DbFieldType.DATE, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<DateTime> PROPERTY_UPDATEDATE = registerProperty(PROPERTY_UPDATEDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-修改日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATEDATE_NAME)
	public final DateTime getUpdateDate() {
		return this.getProperty(PROPERTY_UPDATEDATE);
	}

	/**
	 * 设置-修改日期
	 * 
	 * @param value
	 *            值
	 */
	public final void setUpdateDate(DateTime value) {
		this.setProperty(PROPERTY_UPDATEDATE, value);
	}

	/**
	 * 属性名称-修改时间
	 */
	private static final String PROPERTY_UPDATETIME_NAME = "UpdateTime";

	/**
	 * 修改时间 属性
	 */
	@DbField(name = "UpdateTime", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Short> PROPERTY_UPDATETIME = registerProperty(PROPERTY_UPDATETIME_NAME,
			Short.class, MY_CLASS);

	/**
	 * 获取-修改时间
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATETIME_NAME)
	public final Short getUpdateTime() {
		return this.getProperty(PROPERTY_UPDATETIME);
	}

	/**
	 * 设置-修改时间
	 * 
	 * @param value
	 *            值
	 */
	public final void setUpdateTime(Short value) {
		this.setProperty(PROPERTY_UPDATETIME, value);
	}

	/**
	 * 属性名称-创建动作标识
	 */
	private static final String PROPERTY_CREATEACTIONID_NAME = "CreateActionId";

	/**
	 * 创建动作标识 属性
	 */
	@DbField(name = "CreateActId", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_CREATEACTIONID = registerProperty(PROPERTY_CREATEACTIONID_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-创建动作标识
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CREATEACTIONID_NAME)
	public final String getCreateActionId() {
		return this.getProperty(PROPERTY_CREATEACTIONID);
	}

	/**
	 * 设置-创建动作标识
	 * 
	 * @param value
	 *            值
	 */
	public final void setCreateActionId(String value) {
		this.setProperty(PROPERTY_CREATEACTIONID, value);
	}

	/**
	 * 属性名称-更新动作标识
	 */
	private static final String PROPERTY_UPDATEACTIONID_NAME = "UpdateActionId";

	/**
	 * 更新动作标识 属性
	 */
	@DbField(name = "UpdateActId", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_UPDATEACTIONID = registerProperty(PROPERTY_UPDATEACTIONID_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-更新动作标识
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATEACTIONID_NAME)
	public final String getUpdateActionId() {
		return this.getProperty(PROPERTY_UPDATEACTIONID);
	}

	/**
	 * 设置-更新动作标识
	 * 
	 * @param value
	 *            值
	 */
	public final void setUpdateActionId(String value) {
		this.setProperty(PROPERTY_UPDATEACTIONID, value);
	}

	/**
	 * 属性名称-实例号（版本）
	 */
	private static final String PROPERTY_LOGINST_NAME = "LogInst";

	/**
	 * 实例号（版本） 属性
	 */
	@DbField(name = "LogInst", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_LOGINST = registerProperty(PROPERTY_LOGINST_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-实例号（版本）
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LOGINST_NAME)
	public final Integer getLogInst() {
		return this.getProperty(PROPERTY_LOGINST);
	}

	/**
	 * 设置-实例号（版本）
	 * 
	 * @param value
	 *            值
	 */
	public final void setLogInst(Integer value) {
		this.setProperty(PROPERTY_LOGINST, value);
	}

	/**
	 * 属性名称-创建用户
	 */
	private static final String PROPERTY_CREATEUSERSIGN_NAME = "CreateUserSign";

	/**
	 * 创建用户 属性
	 */
	@DbField(name = "Creator", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_CREATEUSERSIGN = registerProperty(PROPERTY_CREATEUSERSIGN_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-创建用户
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CREATEUSERSIGN_NAME)
	public final Integer getCreateUserSign() {
		return this.getProperty(PROPERTY_CREATEUSERSIGN);
	}

	/**
	 * 设置-创建用户
	 * 
	 * @param value
	 *            值
	 */
	public final void setCreateUserSign(Integer value) {
		this.setProperty(PROPERTY_CREATEUSERSIGN, value);
	}

	/**
	 * 属性名称-修改用户
	 */
	private static final String PROPERTY_UPDATEUSERSIGN_NAME = "UpdateUserSign";

	/**
	 * 修改用户 属性
	 */
	@DbField(name = "Updator", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_UPDATEUSERSIGN = registerProperty(PROPERTY_UPDATEUSERSIGN_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-修改用户
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATEUSERSIGN_NAME)
	public final Integer getUpdateUserSign() {
		return this.getProperty(PROPERTY_UPDATEUSERSIGN);
	}

	/**
	 * 设置-修改用户
	 * 
	 * @param value
	 *            值
	 */
	public final void setUpdateUserSign(Integer value) {
		this.setProperty(PROPERTY_UPDATEUSERSIGN, value);
	}

	/**
	 * 初始化数据
	 */
	@Override
	protected void initialize() {
		super.initialize();// 基类初始化，不可去除
		this.setObjectCode(MyConfiguration.applyVariables(BUSINESS_OBJECT_CODE));

	}

}
