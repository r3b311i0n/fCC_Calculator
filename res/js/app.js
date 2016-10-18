var total = 0;
var clearCheck = false;

function main() {
    iconLoad();
}

function iconLoad() {
    for (let i = 0; i < 6; ++i) {
        let canvas = document.getElementById("icon" + i);
        let context = canvas.getContext("2d");
        let img = new Image();

        img.onload = function () {
            context.drawImage(this, 0, 0, canvas.width, canvas.height);
        };

        switch (i) {
            case 0:
                img.src = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2IDU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NiA1NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPHBhdGggZD0iTTM1LjMxLDUuMDQyYy0wLjUzMi0wLjE1NS0xLjA4NSwwLjE1LTEuMjQsMC42OHMwLjE0OSwxLjA4NSwwLjY4LDEuMjRDNDQuOTA2LDkuOTMyLDUyLDE5LjQwNSw1MiwzMCAgIGMwLDEzLjIzMy0xMC43NjcsMjQtMjQsMjRTNCw0My4yMzMsNCwzMEM0LDE5LjM5MiwxMS4xMDUsOS45MTUsMjEuMjc5LDYuOTUzYzAuNTMtMC4xNTQsMC44MzUtMC43MDksMC42ODEtMS4yMzkgICBjLTAuMTUzLTAuNTMtMC43MDgtMC44MzktMS4yMzktMC42ODFDOS42OTgsOC4yNDEsMiwxOC41MDgsMiwzMGMwLDE0LjMzNywxMS42NjMsMjYsMjYsMjZzMjYtMTEuNjYzLDI2LTI2ICAgQzU0LDE4LjUyMiw0Ni4zMTQsOC4yNiwzNS4zMSw1LjA0MnoiIGZpbGw9IiNEODAwMjciLz4KCTxwYXRoIGQ9Ik0yOCwyN2MwLjU1MywwLDEtMC40NDcsMS0xVjFjMC0wLjU1My0wLjQ0Ny0xLTEtMXMtMSwwLjQ0Ny0xLDF2MjVDMjcsMjYuNTUzLDI3LjQ0NywyNywyOCwyN3oiIGZpbGw9IiNEODAwMjciLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K";
                break;
            case 1:
                img.src = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDM2IDM2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8Zz4KCTxyZWN0IHk9IjEyIiB3aWR0aD0iMzYiIGhlaWdodD0iMiIgZmlsbD0iI0Q4MDAyNyIvPgoJPHJlY3QgeT0iMjIiIHdpZHRoPSIzNiIgaGVpZ2h0PSIyIiBmaWxsPSIjRDgwMDI3Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==";
                break;
            case 2:
                img.src = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQyIDQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MiA0MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+Cjxwb2x5Z29uIHBvaW50cz0iNDIsMjAgMjIsMjAgMjIsMCAyMCwwIDIwLDIwIDAsMjAgMCwyMiAyMCwyMiAyMCw0MiAyMiw0MiAyMiwyMiA0MiwyMiAiIGZpbGw9IiNEODAwMjciLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==";
                break;
            case 3:
                img.src = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQyIDQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MiA0MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxyZWN0IHk9IjIwIiB3aWR0aD0iNDIiIGhlaWdodD0iMiIgZmlsbD0iI0Q4MDAyNyIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                break;
            case 4:
                img.src = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxLjExMiAzMS4xMTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxLjExMiAzMS4xMTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cG9seWdvbiBwb2ludHM9IjMxLjExMiwxLjQxNCAyOS42OTgsMCAxNS41NTYsMTQuMTQyIDEuNDE0LDAgMCwxLjQxNCAxNC4xNDIsMTUuNTU2IDAsMjkuNjk4IDEuNDE0LDMxLjExMiAxNS41NTYsMTYuOTcgICAyOS42OTgsMzEuMTEyIDMxLjExMiwyOS42OTggMTYuOTcsMTUuNTU2ICIgZmlsbD0iI0Q4MDAyNyIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K";
                break;
            case 5:
                img.src = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQyIDQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MiA0MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPHJlY3QgeT0iMjAiIHdpZHRoPSI0MiIgaGVpZ2h0PSIyIiBmaWxsPSIjRDgwMDI3Ii8+Cgk8cGF0aCBkPSJNMjEsMTNjMi43NTcsMCw1LTIuMjQzLDUtNXMtMi4yNDMtNS01LTVzLTUsMi4yNDMtNSw1UzE4LjI0MywxMywyMSwxM3ogTTIxLDVjMS42NTQsMCwzLDEuMzQ2LDMsM3MtMS4zNDYsMy0zLDMgICBzLTMtMS4zNDYtMy0zUzE5LjM0Niw1LDIxLDV6IiBmaWxsPSIjRDgwMDI3Ii8+Cgk8cGF0aCBkPSJNMjEsMjljLTIuNzU3LDAtNSwyLjI0My01LDVzMi4yNDMsNSw1LDVzNS0yLjI0Myw1LTVTMjMuNzU3LDI5LDIxLDI5eiBNMjEsMzdjLTEuNjU0LDAtMy0xLjM0Ni0zLTNzMS4zNDYtMywzLTMgICBzMywxLjM0NiwzLDNTMjIuNjU0LDM3LDIxLDM3eiIgZmlsbD0iI0Q4MDAyNyIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=";
        }
    }
}

function appendOperator() {
    clearCheck = false;

    switch (this.id) {
        case "add":
            //noinspection JSJQueryEfficiency
            if (/\s/.test($(".outputText").html().slice(-1))) {
                //noinspection JSJQueryEfficiency
                $(".outputText").html($(".outputText").html().slice(0, length - 2) + "+ ");
            }
            else if (/\d/.test($(".outputText").html().slice(-1))) {
                //noinspection JSJQueryEfficiency
                let expr = $(".outputText").html();
                //noinspection JSJQueryEfficiency
                $(".outputText").html(expr + " + ");
            }
            break;
        case "subtract":
            //noinspection JSJQueryEfficiency
            if (/\s/.test($(".outputText").html().slice(-1))) {
                //noinspection JSJQueryEfficiency
                $(".outputText").html($(".outputText").html().slice(0, length - 2) + "- ");
            }
            //noinspection JSJQueryEfficiency
            else if (/\d/.test($(".outputText").html().slice(-1))) {
                //noinspection JSJQueryEfficiency
                let expr = $(".outputText").html();
                //noinspection JSJQueryEfficiency
                $(".outputText").html(expr + " - ");
            }
            break;
        case "multiply":
            //noinspection JSJQueryEfficiency
            if (/\s/.test($(".outputText").html().slice(-1))) {
                //noinspection JSJQueryEfficiency
                $(".outputText").html($(".outputText").html().slice(0, length - 2) + "* ");
            }
            //noinspection JSJQueryEfficiency
            else if (/\d/.test($(".outputText").html().slice(-1))) {
                //noinspection JSJQueryEfficiency
                let expr = $(".outputText").html();
                //noinspection JSJQueryEfficiency
                $(".outputText").html(expr + " * ");
            }
            break;
        case "divide":
            //noinspection JSJQueryEfficiency
            if (/\s/.test($(".outputText").html().slice(-1))) {
                //noinspection JSJQueryEfficiency
                $(".outputText").html($(".outputText").html().slice(0, length - 2) + "/ ");
            }
            //noinspection JSJQueryEfficiency
            else if (/\d/.test($(".outputText").html().slice(-1))) {
                //noinspection JSJQueryEfficiency
                let expr = $(".outputText").html();
                //noinspection JSJQueryEfficiency
                $(".outputText").html(expr + " / ");
            }
            break;
    }
}

function enterNumber() {
    if (clearCheck === true) {
        $(".outputText").html("");
    }
    clearCheck = false;

    switch (this.id) {
        case "zero":
            //noinspection JSJQueryEfficiency
            if ($(".outputText").html() === "0" || $(".outputText").html() == "fCC Calculator") {
                $(".outputText").html("0");
            }
            else {
                //noinspection JSJQueryEfficiency
                let expr = $(".outputText").html();
                //noinspection JSJQueryEfficiency
                $(".outputText").html(expr + "0");
            }
            break;
        case "one":
            //noinspection JSJQueryEfficiency
            if ($(".outputText").html() === "0" || $(".outputText").html() == "fCC Calculator") {
                $(".outputText").html("1");
            }
            else {
                //noinspection JSJQueryEfficiency
                let expr = $(".outputText").html();
                //noinspection JSJQueryEfficiency
                $(".outputText").html(expr + "1");
            }
            break;
        case "two":
            //noinspection JSJQueryEfficiency
            if ($(".outputText").html() === "0" || $(".outputText").html() == "fCC Calculator") {
                $(".outputText").html("2");
            }
            else {
                //noinspection JSJQueryEfficiency
                let expr = $(".outputText").html();
                //noinspection JSJQueryEfficiency
                $(".outputText").html(expr + "2");
            }
            break;
        case "three":
            //noinspection JSJQueryEfficiency
            if ($(".outputText").html() === "0" || $(".outputText").html() == "fCC Calculator") {
                $(".outputText").html("3");
            }
            else {
                //noinspection JSJQueryEfficiency
                let expr = $(".outputText").html();
                //noinspection JSJQueryEfficiency
                $(".outputText").html(expr + "3");
            }
            break;
        case "four":
            //noinspection JSJQueryEfficiency
            if ($(".outputText").html() === "0" || $(".outputText").html() == "fCC Calculator") {
                $(".outputText").html("4");
            }
            else {
                //noinspection JSJQueryEfficiency
                let expr = $(".outputText").html();
                //noinspection JSJQueryEfficiency
                $(".outputText").html(expr + "4");
            }
            break;
        case "five":
            //noinspection JSJQueryEfficiency
            if ($(".outputText").html() === "0" || $(".outputText").html() == "fCC Calculator") {
                $(".outputText").html("5");
            }
            else {
                //noinspection JSJQueryEfficiency
                let expr = $(".outputText").html();
                //noinspection JSJQueryEfficiency
                $(".outputText").html(expr + "5");
            }
            break;
        case "six":
            //noinspection JSJQueryEfficiency
            if ($(".outputText").html() === "0" || $(".outputText").html() == "fCC Calculator") {
                $(".outputText").html("6");
            }
            else {
                //noinspection JSJQueryEfficiency
                let expr = $(".outputText").html();
                //noinspection JSJQueryEfficiency
                $(".outputText").html(expr + "6");
            }
            break;
        case "seven":
            //noinspection JSJQueryEfficiency
            if ($(".outputText").html() === "0" || $(".outputText").html() == "fCC Calculator") {
                $(".outputText").html("7");
            }
            else {
                //noinspection JSJQueryEfficiency
                let expr = $(".outputText").html();
                //noinspection JSJQueryEfficiency
                $(".outputText").html(expr + "7");
            }
            break;
        case "eight":
            //noinspection JSJQueryEfficiency
            if ($(".outputText").html() === "0" || $(".outputText").html() == "fCC Calculator") {
                $(".outputText").html("8");
            }
            else {
                //noinspection JSJQueryEfficiency
                let expr = $(".outputText").html();
                //noinspection JSJQueryEfficiency
                $(".outputText").html(expr + "8");
            }
            break;
        case "nine":
            //noinspection JSJQueryEfficiency
            if ($(".outputText").html() === "0" || $(".outputText").html() == "fCC Calculator") {
                $(".outputText").html("9");
            }
            else {
                //noinspection JSJQueryEfficiency
                let expr = $(".outputText").html();
                //noinspection JSJQueryEfficiency
                $(".outputText").html(expr + "9");
            }
            break;
        case "decimal":
            //noinspection JSJQueryEfficiency
            if ($(".outputText").html() === "0" || $(".outputText").html() == "fCC Calculator") {
                $(".outputText").html(".");
            }
            else {
                //noinspection JSJQueryEfficiency
                let expr = $(".outputText").html();
                //noinspection JSJQueryEfficiency
                $(".outputText").html(expr + ".");
            }
            break;
    }
}

$("#zero").on("click", enterNumber);

$("#one").on("click", enterNumber);

$("#two").on("click", enterNumber);

$("#three").on("click", enterNumber);

$("#four").on("click", enterNumber);

$("#five").on("click", enterNumber);

$("#six").on("click", enterNumber);

$("#seven").on("click", enterNumber);

$("#eight").on("click", enterNumber);

$("#nine").on("click", enterNumber);

$("#decimal").on("click", enterNumber);

$("#add").on("click", appendOperator);

$("#subtract").on("click", appendOperator);

$("#multiply").on("click", appendOperator);

$("#divide").on("click", appendOperator);

$("#eq").on("click", function () {
    //noinspection JSJQueryEfficiency
    total = eval($(".outputText").html());
    //noinspection JSJQueryEfficiency
    $(".outputText").html(total);

    clearCheck = true;
});

$("#pwr").on("click", function () {
    $(".outputText").html("0");
});

$(window).ready(main());