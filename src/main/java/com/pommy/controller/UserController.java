package com.pommy.controller;

import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.pommy.model.User;
import com.pommy.service.UserService;
import com.pommy.service.UserServiceImpl;

/**
 * User 관련 요청을 처리하는 서블릿 컨트롤러
 * 예시 구현
 */
@WebServlet("/user/*")
public class UserController extends HttpServlet {

    private UserService userService;

    @Override
    public void init() throws ServletException {
        super.init();
        userService = new UserServiceImpl();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String path = request.getPathInfo();

        if (path != null && path.equals("/detail")) {
            renderUserDetail(request, response);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String path = request.getPathInfo();

        if (path == null || path.equals("/")) {
            handleUserCreate(request, response);
        }
    }

    /**
     * 사용자 상세 페이지 렌더링
     */
    private void renderUserDetail(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String id = request.getParameter("id");
        if (id != null && !id.isEmpty()) {
            try {
                User user = userService.getUserById(Long.parseLong(id));
                request.setAttribute("user", user);
            } catch (NumberFormatException e) {
                response.sendError(HttpServletResponse.SC_BAD_REQUEST, "잘못된 ID 형식입니다.");
                return;
            }
        }
        request.getRequestDispatcher("/WEB-INF/views/user/detail.jsp")
                .forward(request, response);
    }

    /**
     * 사용자 생성 처리
     */
    private void handleUserCreate(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String nickname = request.getParameter("nickname");

        if (username != null && password != null && nickname != null
                && !username.isEmpty() && !password.isEmpty() && !nickname.isEmpty()) {
            User user = new User(username, password, nickname);
            userService.createUser(user);
        }

        response.sendRedirect(request.getContextPath() + "/user/");
    }
}
