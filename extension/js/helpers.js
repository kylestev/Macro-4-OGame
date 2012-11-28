function updateReport() {
    var res = { };
    var report = $('.fragment.spy2');
    var cargoes = { small: 0, large: 0 };

    $.each($('tr', $(report)), function(row) {
        var children = $(this).children();

        for (var i = 0; i < children.length - 1; i+=2) {
            res[children[i].innerText.replace(":", "").toLowerCase()] = parseInt(children[i + 1].innerText.replace(/\./g, ""));
        };
    });

    if ((Math.max(res.metal, res.crystal, res.deuterium) == res.crystal) || 
        (Math.max(res.metal, res.crystal, res.deuterium) == res.deuterium && 
            res.metal < (res.metal + res.crystal + res.deuterium) / 3)) {
        // case 1
        cargoes.small = Math.ceil((res.metal + res.crystal + res.deuterium) / 10000);
        cargoes.large = Math.ceil((res.metal + res.crystal + res.deuterium) / 50000);
    } else if ((Math.max(res.metal, res.crystal, res.deuterium) == res.metal &&
        res.crystal < (1.5 * res.metal + 0.75 * res.crystal + 0.75 * res.deuterium) / 3) ||
        (Math.max(res.metal, res.crystal, res.deuterium) == res.deuterium && 
            res.metal > (res.metal + res.crystal + res.deuterium) / 3)) {
        // case 2
        cargoes.small = Math.ceil((1.5 * res.metal + 0.75 * res.crystal + 0.75 * res.deuterium) / 10000);
        cargoes.large = Math.ceil((1.5 * res.metal + 0.75 * res.crystal + 0.75 * res.deuterium) / 50000);
    } else if ((Math.max(res.metal, res.crystal, res.deuterium) == res.metal)) {
        // case 3
        cargoes.small = Math.ceil((2 * res.metal + res.deuterium) / 10000);
        cargoes.large = Math.ceil((2 * res.metal + res.deuterium) / 50000);
    } else {
        // default
        cargoes.small = Math.ceil((res.metal + res.crystal + res.deuterium) / 10000);
        cargoes.large = Math.ceil((res.metal + res.crystal + res.deuterium) / 50000);
    }

    $('tbody', report).append("<tr>\
            <td class='item'>Small Cargoes</td>\
            <td>" + cargoes.small + "</td>\
            <td class='item'>Large Cargoes</td>\
            <td>" + cargoes.large + "</td>\
        </tr>");

    console.log(res);
    console.log(cargoes);
}
