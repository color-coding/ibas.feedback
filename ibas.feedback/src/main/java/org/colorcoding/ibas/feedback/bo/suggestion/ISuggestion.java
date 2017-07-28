package org.colorcoding.ibas.feedback.bo.suggestion;

import org.colorcoding.ibas.bobas.bo.*;
import org.colorcoding.ibas.bobas.data.*;
import org.colorcoding.ibas.feedback.data.*;

/**
* 建议 接口
* 
*/
public interface ISuggestion extends IBOSimple {

    /**
    * 获取-系统标识
    * 
    * @return 值
    */
    String getSystemId();

    /**
    * 设置-系统标识
    * 
    * @param value 值
    */
    void setSystemId(String value);


    /**
    * 获取-模块标识
    * 
    * @return 值
    */
    String getModuleId();

    /**
    * 设置-模块标识
    * 
    * @param value 值
    */
    void setModuleId(String value);


    /**
    * 获取-应用标识
    * 
    * @return 值
    */
    String getApplicationId();

    /**
    * 设置-应用标识
    * 
    * @param value 值
    */
    void setApplicationId(String value);


    /**
    * 获取-建议人
    * 
    * @return 值
    */
    String getSuggester();

    /**
    * 设置-建议人
    * 
    * @param value 值
    */
    void setSuggester(String value);


    /**
    * 获取-主题
    * 
    * @return 值
    */
    String getSubject();

    /**
    * 设置-主题
    * 
    * @param value 值
    */
    void setSubject(String value);


    /**
    * 获取-标签
    * 
    * @return 值
    */
    String getTags();

    /**
    * 设置-标签
    * 
    * @param value 值
    */
    void setTags(String value);


    /**
    * 获取-内容
    * 
    * @return 值
    */
    String getContent();

    /**
    * 设置-内容
    * 
    * @param value 值
    */
    void setContent(String value);


    /**
    * 获取-截图
    * 
    * @return 值
    */
    String getScreenshot();

    /**
    * 设置-截图
    * 
    * @param value 值
    */
    void setScreenshot(String value);


    /**
    * 获取-是否关闭
    * 
    * @return 值
    */
    emYesNo getClosed();

    /**
    * 设置-是否关闭
    * 
    * @param value 值
    */
    void setClosed(emYesNo value);


    /**
    * 获取-对象键值
    * 
    * @return 值
    */
    Integer getObjectKey();

    /**
    * 设置-对象键值
    * 
    * @param value 值
    */
    void setObjectKey(Integer value);


    /**
    * 获取-对象类型
    * 
    * @return 值
    */
    String getObjectCode();

    /**
    * 设置-对象类型
    * 
    * @param value 值
    */
    void setObjectCode(String value);


    /**
    * 获取-数据源
    * 
    * @return 值
    */
    String getDataSource();

    /**
    * 设置-数据源
    * 
    * @param value 值
    */
    void setDataSource(String value);


    /**
    * 获取-创建日期
    * 
    * @return 值
    */
    DateTime getCreateDate();

    /**
    * 设置-创建日期
    * 
    * @param value 值
    */
    void setCreateDate(DateTime value);


    /**
    * 获取-创建时间
    * 
    * @return 值
    */
    Short getCreateTime();

    /**
    * 设置-创建时间
    * 
    * @param value 值
    */
    void setCreateTime(Short value);


    /**
    * 获取-修改日期
    * 
    * @return 值
    */
    DateTime getUpdateDate();

    /**
    * 设置-修改日期
    * 
    * @param value 值
    */
    void setUpdateDate(DateTime value);


    /**
    * 获取-修改时间
    * 
    * @return 值
    */
    Short getUpdateTime();

    /**
    * 设置-修改时间
    * 
    * @param value 值
    */
    void setUpdateTime(Short value);


    /**
    * 获取-创建动作标识
    * 
    * @return 值
    */
    String getCreateActionId();

    /**
    * 设置-创建动作标识
    * 
    * @param value 值
    */
    void setCreateActionId(String value);


    /**
    * 获取-更新动作标识
    * 
    * @return 值
    */
    String getUpdateActionId();

    /**
    * 设置-更新动作标识
    * 
    * @param value 值
    */
    void setUpdateActionId(String value);


    /**
    * 获取-实例号（版本）
    * 
    * @return 值
    */
    Integer getLogInst();

    /**
    * 设置-实例号（版本）
    * 
    * @param value 值
    */
    void setLogInst(Integer value);


    /**
    * 获取-创建用户
    * 
    * @return 值
    */
    Integer getCreateUserSign();

    /**
    * 设置-创建用户
    * 
    * @param value 值
    */
    void setCreateUserSign(Integer value);


    /**
    * 获取-修改用户
    * 
    * @return 值
    */
    Integer getUpdateUserSign();

    /**
    * 设置-修改用户
    * 
    * @param value 值
    */
    void setUpdateUserSign(Integer value);



}
