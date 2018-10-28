/* generate all the things and fill corresponding fields*/
function GenerateAll() {
    document.getElementById('innfl').value = innfl();
    document.getElementById('innul').value = innul();
    document.getElementById('ogrn').value = ogrn();
    document.getElementById('kpp').value = kpp();
    document.getElementById('snils').value = snils();
}

/* add zeros to string */
function zeros(str,lng) {
    var factlength = str.length;
    if (factlength < lng) {
        for (var i = 0;i<(lng-factlength);i++)
            {
                str = '0' + str;
            }
    }
    return str;
}

/* GENERATE SOME PRORVA OF SOME */
function genProrva(str) {
    rezult = '';
    var f_name = str;
    quant = document.getElementById('quantity').value;
    if (!quant || quant.match(/^[\D]+$/) || quant < 1 || quant > 99) quant = 13;
    for (let i = 0;i<quant;i++)
            {
                rezult = rezult + window[f_name]() + '\n';
            }
    els = document.getElementsByClassName('prorva');
    for (let i = 0;i<els.length;i++) {
        els[i].style.color='black';
    }
    document.getElementById('gen_' + f_name + '_prorva').style.color='#009900';
    return rezult;
}
/* INN FL */
export function innfl() {
    var region = zeros(String(Math.floor((Math.random() * 92) + 1)),2);
    var inspection = zeros(String(Math.floor((Math.random() * 99) + 1)),2);
    var numba = zeros(String(Math.floor((Math.random() * 999999) + 1)),6);
    var rezult = region + inspection + numba;
    var kontr = String(((
            7*rezult[0] + 2*rezult[1] + 4*rezult[2] +
            10*rezult[3] + 3*rezult[4] + 5*rezult[5] +
            9*rezult[6] + 4*rezult[7] + 6*rezult[8] +
            8*rezult[9]
        ) % 11) % 10);
    kontr == 10 ? kontr = 0: kontr = kontr;
    rezult = rezult + kontr;
    kontr = String(((
            3*rezult[0] +  7*rezult[1] + 2*rezult[2] +
            4*rezult[3] + 10*rezult[4] + 3*rezult[5] +
            5*rezult[6] +  9*rezult[7] + 4*rezult[8] +
            6*rezult[9] +  8*rezult[10]
        ) % 11) % 10);
    kontr == 10 ? kontr = 0: kontr = kontr;
    rezult = rezult + kontr;
    return rezult;
}

/* INN UL */
export function innul() {
    var region = zeros(String(Math.floor((Math.random() * 92) + 1)),2);
    var inspection = zeros(String(Math.floor((Math.random() * 99) + 1)),2);
    var numba = zeros(String(Math.floor((Math.random() * 99999) + 1)),5);
    var rezult = region + inspection + numba;
    var kontr = String(((
            2*rezult[0] + 4*rezult[1] + 10*rezult[2] +
            3*rezult[3] + 5*rezult[4] + 9*rezult[5] +
            4*rezult[6] + 6*rezult[7] + 8*rezult[8]
        ) % 11) % 10);
    kontr == 10 ? kontr = 0: kontr = kontr;
    rezult = rezult + kontr;
    return rezult;
}

/* OGRN */
export function ogrn() {
    var priznak = String(Math.floor((Math.random() * 9) + 1));
    var godreg = zeros(String(Math.floor((Math.random() * 16) + 1)),2);
    var region = zeros(String(Math.floor((Math.random() * 92) + 1)),2);
    var inspection = zeros(String(Math.floor((Math.random() * 99) + 1)),2);
    var zapis = zeros(String(Math.floor((Math.random() * 99999) + 1)),5);
    var rezult = priznak + godreg + region + inspection + zapis;
    var kontr = String(((rezult) % 11) % 10);
    kontr == 10 ? kontr = 0: kontr = kontr;
    rezult = rezult + kontr;
    return rezult;
}

/* KPP */
export function kpp() {
    var region = zeros(String(Math.floor((Math.random() * 92) + 1)),2);
    var inspection = zeros(String(Math.floor((Math.random() * 99) + 1)),2);
    var prichina = Math.floor((Math.random() * 4) + 1);
    switch (prichina) {
        case 1:
        prichina = '01';
        break
        case 2:
        prichina = '43';
        break
        case 3:
        prichina = '44';
        break
        case 4:
        prichina = '45';
        break
        default:
        prichina = '01';
        break
    }
    var numba = zeros(String(Math.floor((Math.random() * 999) + 1)),3);
    var rezult = region + inspection + prichina + numba;
    return rezult;
}

/* SNILS */
export function snils() {
    var rand1 = zeros(String(Math.floor((Math.random() * 998) + 2)),3);
    var rand2 = zeros(String(Math.floor((Math.random() * 999) + 1)),3);
    var rand3 = zeros(String(Math.floor((Math.random() * 999) + 1)),3);
    var rezult = rand1 + rand2 + rand3;
    var kontr = String(9*rezult[0] + 8*rezult[1] + 7*rezult[2] +
                6*rezult[3] + 5*rezult[4] + 4*rezult[5] +
                3*rezult[6] + 2*rezult[7] + 1*rezult[8]);
    if (kontr < 100) {
        kontr = kontr;
    }
    else if (kontr > 101) {
        kontr = String(kontr % 101);
        kontr = zeros(kontr,2);
        if (kontr > 99) {
            kontr = '00';
        }
    }
    else {
        kontr = '00';
    }
    rezult = rezult + kontr;
    return rezult;
}

// check validity of INN
function is_valid_inn(i)
{
    if ( i.match(/\D/) ) return false;
    var inn = i.match(/(\d)/g);
    if ( inn.length == 10 )
    {
        return inn[9] == String(((
            2*inn[0] + 4*inn[1] + 10*inn[2] +
            3*inn[3] + 5*inn[4] +  9*inn[5] +
            4*inn[6] + 6*inn[7] +  8*inn[8]
        ) % 11) % 10);
    }
    else if ( inn.length == 12 )
    {
        return inn[10] == String(((
            7*inn[0] + 2*inn[1] + 4*inn[2] +
            10*inn[3] + 3*inn[4] + 5*inn[5] +
            9*inn[6] + 4*inn[7] + 6*inn[8] +
            8*inn[9]
        ) % 11) % 10) && inn[11] == String(((
            3*inn[0] +  7*inn[1] + 2*inn[2] +
            4*inn[3] + 10*inn[4] + 3*inn[5] +
            5*inn[6] +  9*inn[7] + 4*inn[8] +
            6*inn[9] +  8*inn[10]
        ) % 11) % 10);
    }
    return false;
}

/* IIN */
function iin() {
    var kontr = '10';
    while (kontr == '10') {
        var sex = String(Math.floor((Math.random() * 2))); /* 0 -> male, 1 -> female */
        var birth_yy = zeros(String(Math.floor((Math.random() * 100))),2); /* 00..99 */
        var birth_mm = zeros(String(Math.floor((Math.random() * 12) + 1)),2); /* 01..12 */
        var birth_dd = zeros(String(Math.floor((Math.random() * 28) + 1)),2); /* 01..28 */
        var century = 20;
        if (Math.floor(birth_yy) <= 18 && Math.floor(birth_yy) > 0) {
            century = 21;
        }
        else {
            century = 20;
        }
        var seventh = 3 + Math.floor(sex);
        if (century == 21) {seventh = seventh + 2};
        seventh = String(seventh);
        var justice = zeros(String(Math.floor((Math.random() * 9999) + 1)),4);
        rezult = birth_yy + birth_mm + birth_dd + seventh + justice;
        kontr = String((
                1*rezult[0] + 2*rezult[1] + 3*rezult[2] +
                4*rezult[3] + 5*rezult[4] + 6*rezult[5] +
                7*rezult[6] + 8*rezult[7] +9*rezult[8] +
                10*rezult[9] + 11*rezult[10]
            ) % 11);
        if (kontr == '10') {
            kontr = String((
                3*rezult[0] + 4*rezult[1] + 5*rezult[2] +
                6*rezult[3] + 7*rezult[4] + 8*rezult[5] +
                9*rezult[6] + 10*rezult[7] +11*rezult[8] +
                1*rezult[9] + 2*rezult[10]
            ) % 11);
        }
    }
    rezult = rezult + kontr;
    var who = '';
    Math.floor(sex) > 0 ? who = who + 'Женщина': who = who + 'Мужчина'
    Math.floor(birth_yy) <= 18 && Math.floor(birth_yy) > 0  ? who = who + ' рождения в 21 веке' + '(' + birth_dd + '.' + birth_mm + '.' + birth_yy + ')': who = who + ' рождения в 20 веке' + '(' + birth_dd + '.' + birth_mm + '.' + birth_yy + ')';
    document.getElementById('who_kaz').innerText = who;
    return rezult;
}