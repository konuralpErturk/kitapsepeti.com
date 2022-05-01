let bookData = [];
let biography = [{ "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/biography/61YrnqgVCZL.png", "bookPrice": "40" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/biography/71wTyzmQ-3L.png", "bookPrice": "45" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/biography/71ZIbyVPvXL.png", "bookPrice": "20" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/biography/81DSi4ECwyL.png", "bookPrice": "30" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/biography/81efRw0BIrL.png", "bookPrice": "20" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/biography/81gFmWxZEmL.png", "bookPrice": "15" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/biography/81phy6wvG-L.png", "bookPrice": "10" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/biography/81Ynvpqm3KS.png", "bookPrice": "25" }]
let dictionary = [{"bookName":"WorkBook","bookType":"Biography","bookUrl":"booksPic/dictionary/51jR6z19bKL.png","bookPrice":"40"},{"bookName":"WorkBook","bookType":"Biography","bookUrl":"booksPic/dictionary/51R36yyQ3HL.png","bookPrice":"45"},{"bookName":"WorkBook","bookType":"Biography","bookUrl":"booksPic/dictionary/61AqjgMxpLL.png","bookPrice":"20"},{"bookName":"WorkBook","bookType":"Biography","bookUrl":"booksPic/dictionary/61sL4t4w9LL.png","bookPrice":"30"},{"bookName":"WorkBook","bookType":"Biography","bookUrl":"booksPic/dictionary/71Lvac+tHQL.png","bookPrice":"20"},{"bookName":"WorkBook","bookType":"Biography","bookUrl":"booksPic/dictionary/81Ekpv7AwKL.png","bookPrice":"15"},{"bookName":"WorkBook","bookType":"Biography","bookUrl":"booksPic/dictionary/81fj0Z4n9jL.png","bookPrice":"10"},{"bookName":"WorkBook","bookType":"Biography","bookUrl":"booksPic/dictionary/81m6us1KNaL.png","bookPrice":"25"}]
let classic = [{ "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/classics/B14B6ntSoUS.png", "bookPrice": "40" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/classics/A1Em090aL6L.png", "bookPrice": "45" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/classics/41qlslqAh-L.png", "bookPrice": "20" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/classics/51V4ero2SCL.png", "bookPrice": "30" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/classics/61Bdp7XZhDL.png", "bookPrice": "20" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/classics/71sPouk+bgL.png", "bookPrice": "15" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/classics/81FxtWFGiiL.png", "bookPrice": "10" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/classics/917MsoDE-nL.png", "bookPrice": "25" }]
let crime = [{ "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/crime/716wxEjNs-L.png", "bookPrice": "40" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/crime/71H0Y3xiZKL.png", "bookPrice": "45" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/crime/71jFRagkvBL.png", "bookPrice": "20" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/crime/71lWQNC4uCL.png", "bookPrice": "30" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/crime/71nj9ROODiL.png", "bookPrice": "20" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/crime/81dzcYX7gpS.png", "bookPrice": "15" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/crime/81ex95dv2dL.png", "bookPrice": "10" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/crime/91c1SgaqyKL.png", "bookPrice": "25" }]
let fantasy = [{ "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/healty/91rruvLRl-L.png", "bookPrice": "40" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/healty/910SEF8J1NL.png", "bookPrice": "45" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/healty/61CaUEPpF3L.png", "bookPrice": "20" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/healty/61NdJMwAThS.png", "bookPrice": "30" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/healty/61zBUu6cgBL.png", "bookPrice": "20" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/healty/71Lvac+tHQL.png", "bookPrice": "15" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/healty/81k17unItGL.png", "bookPrice": "10" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/healty/81UBpZdE+FL.png", "bookPrice": "25" }]
let noval = [{ "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/history/41XEg9r4UcL.png", "bookPrice": "40" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/history/61AjhYCwikL.png", "bookPrice": "45" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/history/61DsrvoY1gL.png", "bookPrice": "20" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/history/61j5s+oFqaL.png", "bookPrice": "30" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/history/71OgjPcg6-L.png", "bookPrice": "20" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/history/81QugSol+WL.png", "bookPrice": "15" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/history/5112YFsXIJL.png", "bookPrice": "10" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/history/A1xkFZX5k-L.png", "bookPrice": "25" }]
let science = [{ "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/science/61fdrEuPJwL.png", "bookPrice": "40" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/science/61P3Dq33sxL.png", "bookPrice": "45" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/science/71K8Ji-Dt2L.png", "bookPrice": "20" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/science/81CMKSCOz7L.png", "bookPrice": "30" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/science/81ekHWX54yL.png", "bookPrice": "20" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/science/81GY-i6D1FL.png", "bookPrice": "15" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/science/81LcCQJJGuL.png", "bookPrice": "10" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/science/81w4i4QZrGL.png", "bookPrice": "25" }]
let history = [{ "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/vaccianed/71pDh5ItViL.png", "bookPrice": "40" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/vaccianed/71SGL1CXToL.png", "bookPrice": "45" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/vaccianed/71-Ta5BIwoL.png", "bookPrice": "20" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/vaccianed/81a2L9U52HL.png", "bookPrice": "30" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/vaccianed/81BTJMC2IPL.png", "bookPrice": "20" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/vaccianed/91r-b7xd5zL.png", "bookPrice": "15" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/vaccianed/711KDFNXEgL.png", "bookPrice": "10" }, { "bookName": "WorkBook", "bookType": "Biography", "bookUrl": "booksPic/vaccianed/7134-1ZTB-L.png", "bookPrice": "25" }]

let millisecondsToWait = 1000;

setEventListeners();

bookData = biography;

setBookAttributes(bookData);

function setBookAttributes(bookData)
{
    var detailMain = document.getElementById('detailMain');

    detailMain.style.display="none";

    var list = document.getElementsByClassName('child');

    for (let index = 0; index < list.length; index++) {
        var price = list[index];

        for (let i = 0; i < price.children.length; i++) {
            var child = price.children[i];

            if (child.classList.contains('bookImage')) {
                child.src = bookData[index].bookUrl;
            }

            Array.prototype.forEach.call(child.children, child => {
                if (child.classList.contains('price')) {
                    child.value = bookData[index].bookPrice;
                }
            });
        }
    }

    $(detailMain).fadeIn("1000");
}

function setEventListeners() {
    var list = document.getElementsByClassName('addChartButton');

    for (let index = 0; index < list.length; index++) {
        var button = list[index];
        button.addEventListener("click", clickAddToChart);
    }

    function clickAddToChart() {
        console.log("addChartButton clicked")
    }

    list = document.getElementsByClassName('addFavoriteListButton');

    for (let index = 0; index < list.length; index++) {
        var button = list[index];
        button.addEventListener("click", clickAddFavoriteListButton);
    }

    function clickAddFavoriteListButton() {
        console.log("addFavoriteListButton clicked")
    }

    list = document.getElementsByClassName('addRapidBuyButton');

    for (let index = 0; index < list.length; index++) {
        var button = list[index];
        button.addEventListener("click", clickAddRapidBuyButton);
    }

    function clickAddRapidBuyButton() {
        console.log("addRapidBuyButton clicked")
    }

    var div = document.getElementById('myAccounts');

    div.addEventListener('click', function (event) {
        console.log("myAccounts clicked")
    });

    var div = document.getElementById('myFavoriteList');

    div.addEventListener('click', function (event) {
        console.log("myFavoriteList clicked")
    });

    var div = document.getElementById('myChart');

    div.addEventListener('click', function (event) {
        console.log("myChart clicked")
    });

    var div = document.getElementById('webSiteAmblem');

    div.addEventListener('click', function (event) {
        console.log("webSiteAmblem clicked")
    });
}

function setPageAnimation(showDetail, showLoader) {
    var detail = document.getElementById('detailMain');
    var loader = document.getElementById('loader');

    detail.style.display=showDetail;
    detail.style.justifyContent="space-evenly";
    loader.style.display=showLoader;
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

window.onmouseup = function (e) 
{
    var href = e.target.innerHTML;

    switch (href) {
        case "Biyografi":
            setBookAttributes(biography);
            break;
        case "Sözlük":
            setBookAttributes(dictionary);
            break;
        case "Klasik":
            setBookAttributes(classic);
            break;
        case "Suç":
            setBookAttributes(crime);
            break;
        case "Fantezi":
            setBookAttributes(fantasy);
            break;
        case "Roman":
            setBookAttributes(noval);
            break;
        case "Bilim":
            setBookAttributes(science);
            break;
        case "Tarih":
            setBookAttributes(history);
            break;
        default:
    }
};