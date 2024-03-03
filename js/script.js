
let COUNT_ID = 4;

$(function () {

    // Every time the user opens the list, all to-do checkboxes should not be checked
    $("#to-do .form-check-input").prop("checked", false);

    // Every time the user opens the list, all done checkboxes should be checked
    $("#done .form-check-input").prop("checked", true);

    $("#btn-new").click(function () {

        let name = prompt("What is the name?");

        if (name === undefined || name === null) {
            return;
        }

        // Remove all empty spaces at the beginning and at the end of the string
        name = name.trim();

        if (name === "") {
            return;
        }

        $("#to-do").append(`
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <input class="form-check-input me-1" type="checkbox" value="" id="${COUNT_ID}">
                <div class="ms-2 me-auto">
                    <label class="form-check-label me-austo " for="${COUNT_ID}">${name}</label>
                </div>
                <button class="btn btn-sm btn-danger btn-delete"><i class="bi bi-trash"></i></button>
            </li>
        `)

        COUNT_ID++
    });


    $(document).on("click", ".btn-delete", function () {
        if (confirm("Are you sure?")) {
            $(this).parent().remove();
        }
    });

    $(document).on("change", "#to-do .form-check-input", function () {

        $("#done").append($(this).parent().clone())

        $(this).parent().remove();
    });

    $(document).on("change", "#done .form-check-input", function () {

        $("#to-do").append($(this).parent().clone())

        $(this).parent().remove();
    });

    $.get("http://localhost:3000/items", function (items) {

        for (let item of items) {

            if (item.done) {
                $("#done").append(`
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <input class="form-check-input me-1" type="checkbox" value="" id="${COUNT_ID}">
                        <div class="ms-2 me-auto">
                            <label class="form-check-label me-austo " for="${COUNT_ID}">${item.name}</label>
                        </div>
                        <button class="btn btn-sm btn-danger btn-delete"><i class="bi bi-trash"></i></button>
                    </li>
                `)
            } else {
                $("#to-do").append(`
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <input class="form-check-input me-1" type="checkbox" value="" id="${COUNT_ID}">
                        <div class="ms-2 me-auto">
                            <label class="form-check-label me-austo " for="${COUNT_ID}">${item.name}</label>
                        </div>
                        <button class="btn btn-sm btn-danger btn-delete"><i class="bi bi-trash"></i></button>
                    </li>
                `)
            }

            COUNT_ID++
        }
    })

});