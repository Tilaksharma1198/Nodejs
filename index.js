exports.handler = async (event) => {
    var response = {
        statusCode: 404,
        body: JSON.stringify({
            Error: "No routes",
        }),
    };
    if (event.path === "/api/getproduct") {
        response = {
            statusCode: 200,
            body: JSON.stringify({
                ProductName: "Shoes",
                Price: "$100",
            }),
        };
    }
    if (event.path === "/api/getuser") {
        response = {
            statusCode: 200,
            body: JSON.stringify({
                UserName: "Sk Shamim Iqbal",
                Email: "iqbalshamim00@gmail.com",
            }),
        };
    }
    return response;
};
