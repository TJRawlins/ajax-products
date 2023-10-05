const url = "http://localhost:5555/api/products";

// GET ALL
const productList = () => {
    return $.getJSON(`${url}`);
}

// GET BY ID
const product = () => {
    let data = document.URL.split("?")[1];
    let id = Number(data.split("=")[1]);
    return $.getJSON(`${url}/${id}`)
}

// POST
const postProduct = () => {
    $.ajax({
        method: "POST",
        url: "http://localhost:5555/api/vendors/",
        data: JSON.stringify(vendor),
        contentType: "application/json"
    })
}