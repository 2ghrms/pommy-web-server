<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Pommy Home</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .container { max-width: 600px; margin: auto; text-align: center; }
        a.button {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 24px;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 4px;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>Pommy Dynamic Web Project</h1>
    <p>환영합니다! 아래 버튼을 클릭해 사용자 목록 페이지로 이동하세요.</p>
    <a class="button" href="${pageContext.request.contextPath}/user/">사용자 목록 바로가기</a>
</div>
</body>
</html>



