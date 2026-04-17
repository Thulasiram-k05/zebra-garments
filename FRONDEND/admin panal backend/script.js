const API = "http://127.0.0.1:8000/api/products/";

// LOAD DATA
function loadProducts() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
        let rows = "";

        data.forEach(p => {
            rows += `
            <tr>
                <td>${p.s_no}</td>
                <td>${p.company_name}</td>
                <td>${p.cloth}</td>
                <td>${p.gender}</td>
                <td>${p.category}</td>
                <td>${p.price}</td>
                <td>
                    ${p.image ? `<img src="${p.image}" width="50"/>` : "No Image"}
                </td>
                <td>
                    <button class="edit" onclick="editProduct(${p.s_no})">Edit</button>
                    <button class="delete" onclick="deleteProduct(${p.s_no})">Delete</button>
                </td>
            </tr>
            `;
        });

        document.getElementById("productTable").innerHTML = rows;
    });
}


// SAVE (ADD + UPDATE)
function saveProduct() {
    const id = document.getElementById("product_id").value;

    const data = {
        company_name: document.getElementById("company_name").value,
        cloth: document.getElementById("cloth").value,
        gender: document.getElementById("gender").value,
        category: document.getElementById("category").value,
        size: document.getElementById("size").value,
        price: document.getElementById("price").value,
        old_price: document.getElementById("old_price").value,
        image: document.getElementById("image").value,
        description: document.getElementById("description").value,
        status: 1,
        created_by: 1
    };

    if (id) {
        // UPDATE
        fetch(API + id + "/", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(() => {
            alert("Updated!");
            resetForm();
            loadProducts();
        });
    } else {
        // ADD
        fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(() => {
            alert("Added!");
            resetForm();
            loadProducts();
        });
    }
}


// DELETE
function deleteProduct(id) {
    if (confirm("Delete this product?")) {
        fetch(API + id + "/", { method: "DELETE" })
        .then(() => {
            alert("Deleted!");
            loadProducts();
        });
    }
}


// EDIT
function editProduct(id) {
    fetch(API + id + "/")
    .then(res => res.json())
    .then(p => {
        document.getElementById("product_id").value = p.s_no;
        document.getElementById("company_name").value = p.company_name;
        document.getElementById("cloth").value = p.cloth;
        document.getElementById("gender").value = p.gender;
        document.getElementById("category").value = p.category;
        document.getElementById("size").value = p.size;
        document.getElementById("price").value = p.price;
        document.getElementById("old_price").value = p.old_price;
        document.getElementById("image").value = p.image;
        document.getElementById("description").value = p.description;
    });
}


// RESET FORM
function resetForm() {
    document.getElementById("product_id").value = "";
    document.querySelectorAll(".form input").forEach(i => i.value = "");
}


// INIT
loadProducts();