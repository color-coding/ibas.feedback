package org.colorcoding.ibas.feedback.service.rest;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.data.FileData;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.repository.jersey.FileRepositoryService;
import org.colorcoding.ibas.feedback.MyConfiguration;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

@Path("file")
public class FileService extends FileRepositoryService {
    /**
     * 工作目录
     */
    public final static String WORK_FOLDER = MyConfiguration.getConfigValue(
            MyConfiguration.CONFIG_ITEM_FEEDBACK_FILE_FOLDER,
            MyConfiguration.getDataFolder() + File.separator + "feedback_files");

    public FileService() {
        // 设置工作目录，资源目录下的报表目录
        this.getRepository().setRepositoryFolder(FileService.WORK_FOLDER);
    }

    @POST
    @Path("upload")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Produces(MediaType.APPLICATION_JSON)
    public OperationResult<FileData> upload(@FormDataParam("file") InputStream fileStream,
            @FormDataParam("file") FormDataContentDisposition fileDisposition, @QueryParam("token") String token) {
        return super.save(fileStream, fileDisposition, token);
    }

    @POST
    @Path("download")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_OCTET_STREAM)
    public byte[] download(Criteria criteria, @QueryParam("token") String token,
                           @Context HttpServletResponse response) {
        try {
            // 获取导出的文件
            IOperationResult<FileData> opRsltFileFeedback =  super.fetch(criteria,token);
            FileData fileData = opRsltFileFeedback.getResultObjects().firstOrDefault();
            if (fileData != null) {
                // 数据存在，尝试转为字节数组
                File file = new File(fileData.getLocation());
                long fileSize = file.length();
                if (fileSize > Integer.MAX_VALUE) {
                    throw new Exception(I18N.prop("msg_bobas_invalid_data"));
                }
                FileInputStream inputStream = new FileInputStream(file);
                byte[] buffer = new byte[(int) fileSize];
                int offset = 0;
                int numRead = 0;
                while (offset < buffer.length
                        && (numRead = inputStream.read(buffer, offset, buffer.length - offset)) >= 0) {
                    offset += numRead;
                }
                inputStream.close();
                response.setHeader("content-disposition",
                        String.format("attachment;filename=%s", fileData.getFileName()));// 为文件命名
                // response.addHeader("content-type", "application/xml");
                return buffer;
            } else {
                // 无效的导出数据
                response.setHeader("content-disposition", "attachment;filename=INVALID_DATA");// 为文件命名
                // response.addHeader("content-type", "application/xml");
                return new byte[] {};
            }
        } catch (Exception e) {
            Logger.log(e);
            throw new WebApplicationException(500);
        }
    }
}
