// JQuery
const post_product = (product) => {
    $.ajax({
        method: "POST",
        url: "http://localhost:5555/api/products/",
        data: JSON.stringify(product),
        contentType: "application/json"
    }).done((res) => {
        console.log(res + "TEST")
        display_product(res)
        document.location = "get-products.html";
    })
    .fail((err) => {
        console.error(err);
    });
}

const getDataFromHtml = () => {
    let product = {};
    product.id = 0;
    product.partNbr = document.getElementById("ppartnbr").value;
    product.name = document.getElementById("pname").value;
    product.price = +document.getElementById("pprice").value;
    product.unit = document.getElementById("punit").value;
    product.photoPath = document.getElementById("pphotopath").value;
    product.vendorId = +document.getElementById("pvendorid").value;
    console.log(product);
    
    return product;
}

const save = () => {
    let product = getDataFromHtml();
    post_product(product);
}

const loaded = () => {
}

const display_product = (product) => {
    document.getElementById("pid").innerText = product.id;
    document.getElementById("ppartnbr").value = product.partNbr;
    document.getElementById("pname").value = product.name; 
    document.getElementById("pprice").value = product.price;
    document.getElementById("punit").value = product.unit;
    document.getElementById("pphotopath").value = product.photoPath;
    document.getElementById("pvendorid").value = product.vendorId;
}