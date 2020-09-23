$(document).ready(function () {
    let outputValue = $("#output-value");
    let value = outputValue.val();
    $(".number, #plus, #minus, #multiple, #drop, #dot").click(function () {
        if ($(this).attr('data-role') === "number") {
            outputValue.val(outputValue.val() + $(this).val());
        } else {
            if ($(this).attr("data-role") !== "") {
                outputValue.val(outputValue.val() + $(this).val());
            }
        }
    })
    $("#equal").click(function () {
        outputValue.val(eval(outputValue.val()));
    })
    $("#del").click(function () {

        outputValue.val(value.substring((0, value.length - 1)));
    })
    $("#clear").click(function () {
        outputValue.val("");
        $(this).val("AC");

    })
    $(".operator, .number").click(function () {
        $("#clear").val("C")
    })
    // function getFormattedNumber(num) {
    //     let n = Number(num);
    //     return n.toLocaleString("en");
    // }


})