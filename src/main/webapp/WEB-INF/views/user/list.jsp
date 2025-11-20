<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>사용자 목록</title>
</head>
<body>
    <h1>사용자 목록</h1>
    
    <table border="1" style="width: 100%; border-collapse: collapse;">
        <thead>
            <tr style="background-color: #f0f0f0;">
                <th style="padding: 8px;">ID</th>
                <th style="padding: 8px;">이름</th>
                <th style="padding: 8px;">이메일</th>
                <th style="padding: 8px;">생성일</th>
            </tr>
        </thead>
        <tbody>
            <c:choose>
                <c:when test="${empty users}">
                    <tr>
                        <td colspan="4" style="text-align: center; padding: 20px;">
                            등록된 사용자가 없습니다.
                        </td>
                    </tr>
                </c:when>
                <c:otherwise>
                    <c:forEach var="user" items="${users}">
                        <tr>
                            <td style="padding: 8px;">${user.id}</td>
                            <td style="padding: 8px;">${user.name}</td>
                            <td style="padding: 8px;">${user.email}</td>
                            <td style="padding: 8px;">${user.createdAt}</td>
                        </tr>
                    </c:forEach>
                </c:otherwise>
            </c:choose>
        </tbody>
    </table>
    
    <br>
    <a href="${pageContext.request.contextPath}/user/detail">사용자 추가</a>
</body>
</html>

