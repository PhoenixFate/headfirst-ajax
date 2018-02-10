package ch02;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CheckName extends HttpServlet{

	/**
	 * 
	 */
	private static final long serialVersionUID = -8269094344079880119L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String username=request.getParameter("username");
		if(username.equals("bill")||username.equals("ted")){
			response.setContentType("text/plain");
			PrintWriter out=response.getWriter();
			out.print("denied");
		}else{
			response.setContentType("text/plain");
			PrintWriter out=response.getWriter();
			out.print("okay");
		}
			
	}
	
	
}
