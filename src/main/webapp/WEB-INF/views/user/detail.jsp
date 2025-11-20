<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>사용자 ${empty user ? '추가' : '수정'}</title>
</head>
<body>
    <h1>사용자 ${empty user ? '추가' : '수정'}</h1>
    
    <form method="post" action="${pageContext.request.contextPath}/user/">
        <table style="border-collapse: collapse;">
            <tr>
                <td style="padding: 8px;"><label for="name">이름:</label></td>
                <td style="padding: 8px;">
                    <input type="text" id="name" name="name" 
                           value="${user.name}" required style="width: 200px; padding: 4px;">
                </td>
            </tr>
            <tr>
                <td style="padding: 8px;"><label for="email">이메일:</label></td>
                <td style="padding: 8px;">
                    <input type="email" id="email" name="email" 
                           value="${user.email}" required style="width: 200px; padding: 4px;">
                </td>
            </tr>
            <tr>
                <td colspan="2" style="padding: 8px; text-align: center;">
                    <button type="submit" style="padding: 8px 16px; margin-right: 8px;">
                        ${empty user ? '추가' : '수정'}
                    </button>
                    <a href="${pageContext.request.contextPath}/user/" 
                       style="padding: 8px 16px; text-decoration: none; border: 1px solid #ccc; background-color: #f0f0f0;">
                        취소
                    </a>
                </td>
            </tr>
        </table>
    </form>
    
    <br>
    <a href="${pageContext.request.contextPath}/user/">목록으로 돌아가기</a>
</body>
</html>


