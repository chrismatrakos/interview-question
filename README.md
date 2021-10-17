### Description
A simple rest API that can provide full text search over all the attributes in a given dataset.  

### Setup locally
Make sure node.js and npm packet manager are installed in you machine.  
You can verify by running in the command line  
  ```node -v```  
  ```npm -v```  
  
Clone the repo locally and cd at "interview-question" folder.  
At the root directory of "interview-question" folder run the following command:  
```npm install```  
The above command will get all dependencies needed to run the application.  
The packages are specified in package.json and package-lock.json file.  
  
### Start the server  
At the root directory run from the terminal the command  
```node app.js```  
This is the entry point of the appication.  
The server will start running and listening on port 8080.  
The output ```http server listening at port 8080``` will be printed in the terminal.  
Open your broswer and go to ```http://localhost:8080``` and you should see ```Sample Node API Version1```.  

### How to use  
Ways to access the data / Run HTTP GET request.  
### 1st way, from the browser  
If you browse to ```http://localhost:8080/v1``` then there will be an ouput of  
 all the data that are stored in data.json file.
  
If you browse to ```http://localhost:8080/v1/search?attribute=priority&value=high```  
 then there will be an ouput of all the data that are stored in data.json file that match the attribute and value in the url.   
You can replace the attribute and value in the query with any other attribue of value you want to search.  
 
### 2nd way to get the data from the terminal.
Run the curl commands
```bash 
  curl http://localhost:8080/v1
``` 
to get all data

### Example 1
```bash
curl "localhost:8080/v1/search?attribute=subject&value=missing"
```
to get all data with attribute subject and value missing.
### Example 2
```bash
curl "localhost:8080/v1/search?attribute=priority&value=high"
```
to get all data with attibute priority and value high.