How to RUN:  
1. Clone repository into code editor of your choice.  
2. Inside cd lifewayCount do an NPM install from the terminal command line. 
3. From the command line, run 'node server.js'.  This will run the server on localhost PORT 3000.  
4. Go to getpostman.com to make GET and POST requests to the server. 
5. You will choose: POST, from the dropdown menu, then select 'Body', then 'raw', then JSON(application/json) from another drop down menu.  
6. Insert any variation of this JSON, 
{
    "id": 5,
    "message": "IDs cannot be used more than once!"
}

7. If you repeat an ID, you will get a message response.  If you have a unique ID, the APP will count the words and only display the count up to that point.  If the server is restarted, the counter will reset, however, it will increment as IDs are added and POSTed to the server.  
