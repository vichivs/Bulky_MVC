$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    $('#tblData').DataTable({
        "ajax": {
            "url": "/Admin/Product/GetAll",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { data: 'title', "width": "25%" },
            { data: 'isbn', "width": "15%" },
            { data: 'listPrice', "width": "10%" },
            { data: 'author', "width": "20%" },
            { data: 'category.name', "width": "15%" },
            {
                data: 'id',
                "render": function (data, type, row) {
                    return `
                        <a href="/Admin/Product/Upsert/${data}" class="btn btn-primary">
                            <i class="bi bi-pencil"></i>  Edit
                        </a>
                        <a href="/Admin/Product/Delete/${data}" class="btn btn-danger">
                            <i class="bi bi-trash-fill"></i>  Delete
                        </a>`;
                },
                "width": "25%"
            }
        ]
    });
}
