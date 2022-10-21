const url = "https://api.jsonbin.io/v3/b/635a47870e6a79321e360cd2";

const fetchProducts = async () => {
    const response = await fetch(url, {
        headers: {
            "X-MASTER-KEY": "$2b$10$2l5eoFEt2PyWwTwFWMxK9eNM/x/1NARopBxmrarg4lLpBSFJAnym6",
            "X-ACCESS-KEY": "$2b$10$eT1v9z5.yyr3o.bXwNIBHeYd4IWUNl7U27IUXesvRTdhCnQMSQo0e",
        }
    });
    const data = await response.json();
    return data.record;
}

export default fetchProducts;