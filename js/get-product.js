$(() => {
    product()
        .done((res) => {
            getProduct(res);
            console.log(res);
            
        });
        $("#remove").toggleClass("hide")
        $("#remove-initial").on("click", () => {
            $("#remove").toggleClass("hide")
            $("#remove-initial").toggleClass("hide")
        })
    })
    
const getProduct = (p) => {
    let tbody = $("#tbody");
    tbody.empty();
    let tr = $("<tr></tr>");
    $(`<td>${p.id}</td>`).appendTo(tr);
    $(`<td>${p.partNbr}</td>`).appendTo(tr);
    $(`<td>${p.name}</td>`).appendTo(tr);
    $(`<td>${p.price}</td>`).appendTo(tr);
    tr.appendTo(tbody)
}