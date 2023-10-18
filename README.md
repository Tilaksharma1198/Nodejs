```markdown
# AWS Lambda Function for API Routing

This is a simple AWS Lambda function for routing API requests to specific endpoints. It responds with JSON data based on the request path.

## Usage

To use this AWS Lambda function, follow these steps:

1. Create an AWS Lambda function using the provided code.

2. Set up API Gateway or another service to trigger the Lambda function when an HTTP request is made.

3. The Lambda function responds to two specific routes:

   - `/api/getproduct`: Returns product information as JSON.
   - `/api/getuser`: Returns user information as JSON.

4. Deploy the function and API Gateway (if used) to make it publicly accessible.

## Code Explanation

The code is written in JavaScript using the AWS Lambda Node.js runtime. Here's an overview of what the code does:

- It exports an AWS Lambda function that handles incoming events (HTTP requests).

- If the request path is `/api/getproduct`, it responds with product information in JSON format.

- If the request path is `/api/getuser`, it responds with user information in JSON format.

- For any other path, it responds with a 404 error and an error message.

## Sample Request and Response

### Request to `/api/getproduct`

```
GET /api/getproduct
```

Response:

```json
{
    "ProductName": "Shoes",
    "Price": "$100"
}
```

### Request to `/api/getuser`

```
GET /api/getuser
```

Response:

```json
{
    "UserName": "Sk Shamim Iqbal",
    "Email": "iqbalshamim00@gmail.com"
}
```

### Request to Any Other Path

```
GET /api/someotherpath
```

Response:

```json
{
    "Error": "No routes"
}
```

Feel free to replace placeholders with your actual project details, and you can also add information about how to deploy and use the code in your specific environment.