let bookData = [];
let chartList = [];
let favoriteList = [];
let biography = [{"bookId":"1","bookName":"WorkBook","bookType":"Biography","bookUrl":"booksPic/biography/61YrnqgVCZL.png","bookPrice":"40"},{"bookId":"2","bookName":"WorkBook","bookType":"Biography","bookUrl":"booksPic/biography/71wTyzmQ-3L.png","bookPrice":"45"},{"bookId":"3","bookName":"WorkBook","bookType":"Biography","bookUrl":"booksPic/biography/71ZIbyVPvXL.png","bookPrice":"20"},{"bookId":"4","bookName":"WorkBook","bookType":"Biography","bookUrl":"booksPic/biography/81DSi4ECwyL.png","bookPrice":"30"},{"bookId":"5","bookName":"WorkBook","bookType":"Biography","bookUrl":"booksPic/biography/81efRw0BIrL.png","bookPrice":"20"},{"bookId":"6","bookName":"WorkBook","bookType":"Biography","bookUrl":"booksPic/biography/81gFmWxZEmL.png","bookPrice":"15"},{"bookId":"7","bookName":"WorkBook","bookType":"Biography","bookUrl":"booksPic/biography/81phy6wvG-L.png","bookPrice":"10"},{"bookId":"8","bookName":"WorkBook","bookType":"Biography","bookUrl":"booksPic/biography/81Ynvpqm3KS.png","bookPrice":"25"}]
let dictionary = [{"bookId":"1","bookName":"WorkBook","bookType":"Dictionary","bookUrl":"booksPic/dictionary/51jR6z19bKL.png","bookPrice":"40"},{"bookId":"2","bookName":"WorkBook","bookType":"Dictionary","bookUrl":"booksPic/dictionary/51R36yyQ3HL.png","bookPrice":"45"},{"bookId":"3","bookName":"WorkBook","bookType":"Dictionary","bookUrl":"booksPic/dictionary/61AqjgMxpLL.png","bookPrice":"20"},{"bookId":"4","bookName":"WorkBook","bookType":"Dictionary","bookUrl":"booksPic/dictionary/61sL4t4w9LL.png","bookPrice":"30"},{"bookId":"5","bookName":"WorkBook","bookType":"Dictionary","bookUrl":"booksPic/dictionary/71Lvac+tHQL.png","bookPrice":"20"},{"bookId":"6","bookName":"WorkBook","bookType":"Dictionary","bookUrl":"booksPic/dictionary/81Ekpv7AwKL.png","bookPrice":"15"},{"bookId":"7","bookName":"WorkBook","bookType":"Dictionary","bookUrl":"booksPic/dictionary/81fj0Z4n9jL.png","bookPrice":"10"},{"bookId":"8","bookName":"WorkBook","bookType":"Dictionary","bookUrl":"booksPic/dictionary/81m6us1KNaL.png","bookPrice":"25"}]
let classic = [{"bookId":"1","bookName":"WorkBook","bookType":"Classics","bookUrl":"booksPic/classics/B14B6ntSoUS.png","bookPrice":"40"},{"bookId":"2","bookName":"WorkBook","bookType":"Classics","bookUrl":"booksPic/classics/A1Em090aL6L.png","bookPrice":"45"},{"bookId":"3","bookName":"WorkBook","bookType":"Classics","bookUrl":"booksPic/classics/41qlslqAh-L.png","bookPrice":"20"},{"bookId":"4","bookName":"WorkBook","bookType":"Classics","bookUrl":"booksPic/classics/51V4ero2SCL.png","bookPrice":"30"},{"bookId":"5","bookName":"WorkBook","bookType":"Classics","bookUrl":"booksPic/classics/61Bdp7XZhDL.png","bookPrice":"20"},{"bookId":"6","bookName":"WorkBook","bookType":"Classics","bookUrl":"booksPic/classics/71sPouk+bgL.png","bookPrice":"15"},{"bookId":"7","bookName":"WorkBook","bookType":"Classics","bookUrl":"booksPic/classics/81FxtWFGiiL.png","bookPrice":"10"},{"bookId":"8","bookName":"WorkBook","bookType":"Classics","bookUrl":"booksPic/classics/917MsoDE-nL.png","bookPrice":"25"}]
let crime = [{"bookId":"1","bookName":"WorkBook","bookType":"Crime","bookUrl":"booksPic/crime/716wxEjNs-L.png","bookPrice":"40"},{"bookId":"2","bookName":"WorkBook","bookType":"Crime","bookUrl":"booksPic/crime/71H0Y3xiZKL.png","bookPrice":"45"},{"bookId":"3","bookName":"WorkBook","bookType":"Crime","bookUrl":"booksPic/crime/71jFRagkvBL.png","bookPrice":"20"},{"bookId":"4","bookName":"WorkBook","bookType":"Crime","bookUrl":"booksPic/crime/71lWQNC4uCL.png","bookPrice":"30"},{"bookId":"5","bookName":"WorkBook","bookType":"Crime","bookUrl":"booksPic/crime/71nj9ROODiL.png","bookPrice":"20"},{"bookId":"6","bookName":"WorkBook","bookType":"Crime","bookUrl":"booksPic/crime/81dzcYX7gpS.png","bookPrice":"15"},{"bookId":"7","bookName":"WorkBook","bookType":"Crime","bookUrl":"booksPic/crime/81ex95dv2dL.png","bookPrice":"10"},{"bookId":"8","bookName":"WorkBook","bookType":"Crime","bookUrl":"booksPic/crime/91c1SgaqyKL.png","bookPrice":"25"}]
let fantasy = [{"bookId":"1","bookName":"WorkBook","bookType":"Fantasy","bookUrl":"booksPic/healty/91rruvLRl-L.png","bookPrice":"40"},{"bookId":"2","bookName":"WorkBook","bookType":"Fantasy","bookUrl":"booksPic/healty/910SEF8J1NL.png","bookPrice":"45"},{"bookId":"3","bookName":"WorkBook","bookType":"Fantasy","bookUrl":"booksPic/healty/61CaUEPpF3L.png","bookPrice":"20"},{"bookId":"4","bookName":"WorkBook","bookType":"Fantasy","bookUrl":"booksPic/healty/61NdJMwAThS.png","bookPrice":"30"},{"bookId":"5","bookName":"WorkBook","bookType":"Fantasy","bookUrl":"booksPic/healty/61zBUu6cgBL.png","bookPrice":"20"},{"bookId":"6","bookName":"WorkBook","bookType":"Fantasy","bookUrl":"booksPic/healty/71Lvac+tHQL.png","bookPrice":"15"},{"bookId":"7","bookName":"WorkBook","bookType":"Fantasy","bookUrl":"booksPic/healty/81k17unItGL.png","bookPrice":"10"},{"bookId":"8","bookName":"WorkBook","bookType":"Fantasy","bookUrl":"booksPic/healty/81UBpZdE+FL.png","bookPrice":"25"}]
let noval = [{"bookId":"1","bookName":"WorkBook","bookType":"Noval","bookUrl":"booksPic/history/41XEg9r4UcL.png","bookPrice":"40"},{"bookId":"2","bookName":"WorkBook","bookType":"Noval","bookUrl":"booksPic/history/61AjhYCwikL.png","bookPrice":"45"},{"bookId":"3","bookName":"WorkBook","bookType":"Noval","bookUrl":"booksPic/history/61DsrvoY1gL.png","bookPrice":"20"},{"bookId":"4","bookName":"WorkBook","bookType":"Noval","bookUrl":"booksPic/history/61j5s+oFqaL.png","bookPrice":"30"},{"bookId":"5","bookName":"WorkBook","bookType":"Noval","bookUrl":"booksPic/history/71OgjPcg6-L.png","bookPrice":"20"},{"bookId":"6","bookName":"WorkBook","bookType":"Noval","bookUrl":"booksPic/history/81QugSol+WL.png","bookPrice":"15"},{"bookId":"7","bookName":"WorkBook","bookType":"Noval","bookUrl":"booksPic/history/5112YFsXIJL.png","bookPrice":"10"},{"bookId":"8","bookName":"WorkBook","bookType":"Noval","bookUrl":"booksPic/history/A1xkFZX5k-L.png","bookPrice":"25"}]
let science = [{"bookId":"1","bookName":"WorkBook","bookType":"Science","bookUrl":"booksPic/science/61fdrEuPJwL.png","bookPrice":"40"},{"bookId":"2","bookName":"WorkBook","bookType":"Science","bookUrl":"booksPic/science/61P3Dq33sxL.png","bookPrice":"45"},{"bookId":"3","bookName":"WorkBook","bookType":"Science","bookUrl":"booksPic/science/71K8Ji-Dt2L.png","bookPrice":"20"},{"bookId":"4","bookName":"WorkBook","bookType":"Science","bookUrl":"booksPic/science/81CMKSCOz7L.png","bookPrice":"30"},{"bookId":"5","bookName":"WorkBook","bookType":"Science","bookUrl":"booksPic/science/81ekHWX54yL.png","bookPrice":"20"},{"bookId":"6","bookName":"WorkBook","bookType":"Science","bookUrl":"booksPic/science/81GY-i6D1FL.png","bookPrice":"15"},{"bookId":"7","bookName":"WorkBook","bookType":"Science","bookUrl":"booksPic/science/81LcCQJJGuL.png","bookPrice":"10"},{"bookId":"8","bookName":"WorkBook","bookType":"Science","bookUrl":"booksPic/science/81w4i4QZrGL.png","bookPrice":"25"}]
let history = [{"bookId":"1","bookName":"WorkBook","bookType":"History","bookUrl":"booksPic/vaccianed/71pDh5ItViL.png","bookPrice":"40"},{"bookId":"2","bookName":"WorkBook","bookType":"History","bookUrl":"booksPic/vaccianed/71SGL1CXToL.png","bookPrice":"45"},{"bookId":"3","bookName":"WorkBook","bookType":"History","bookUrl":"booksPic/vaccianed/71-Ta5BIwoL.png","bookPrice":"20"},{"bookId":"4","bookName":"WorkBook","bookType":"History","bookUrl":"booksPic/vaccianed/81a2L9U52HL.png","bookPrice":"30"},{"bookId":"5","bookName":"WorkBook","bookType":"History","bookUrl":"booksPic/vaccianed/81BTJMC2IPL.png","bookPrice":"20"},{"bookId":"6","bookName":"WorkBook","bookType":"History","bookUrl":"booksPic/vaccianed/91r-b7xd5zL.png","bookPrice":"15"},{"bookId":"7","bookName":"WorkBook","bookType":"History","bookUrl":"booksPic/vaccianed/711KDFNXEgL.png","bookPrice":"10"},{"bookId":"8","bookName":"WorkBook","bookType":"History","bookUrl":"booksPic/vaccianed/7134-1ZTB-L.png","bookPrice":"25"}]

let millisecondsToWait = 1000;

var popup = document.getElementById('popupMain');

popup.style.visibility = "hidden";

setEventListeners();

setBookAttributes(biography);

function setBookAttributes(bookList) 
{
    bookData = bookList;

    var detailMain = document.getElementById('detailMain');

    detailMain.style.display = "none";

    var list = document.getElementsByClassName('child');

    for (let index = 0; index < list.length; index++) {
        var parentDiv = list[index];
        parentDiv.id  = "detail_"+bookList[index].bookId;

        for (let i = 0; i < parentDiv.children.length; i++) {
            var child = parentDiv.children[i];

            if (child.classList.contains('bookImage')) {
                child.src = bookList[index].bookUrl;
            }

            Array.prototype.forEach.call(child.children, child => {
                if (child.classList.contains('price')) {
                    child.value = bookList[index].bookPrice;
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

    function clickAddToChart(event) {
        var bookId = event.path[2].id.split("detail_")[1];
        var filterData = bookData.filter(item=>item.bookId==bookId);
        if(filterData.length > 0)
            chartList.push(filterData[0]);
        
        console.log("addChartButton clicked")
    }

    list = document.getElementsByClassName('addFavoriteListButton');

    for (let index = 0; index < list.length; index++) {
        var button = list[index];
        button.addEventListener("click", clickAddFavoriteListButton);
    }

    function clickAddFavoriteListButton(event) {
        console.log("addFavoriteListButton clicked")
    }

    list = document.getElementsByClassName('addRapidBuyButton');

    for (let index = 0; index < list.length; index++) {
        var button = list[index];
        button.addEventListener("click", clickAddRapidBuyButton);
    }

    function clickAddRapidBuyButton(event) {
        console.log("addRapidBuyButton clicked")
    }

    var div          = document.getElementById('myAccounts');
    var accountPopup = document.getElementById('accountPopup');

    accountPopup.classList.add("accountPopupClose");
    accountPopup.classList.remove("accountPopupOpen");
    accountPopup.style.width = "0px";
    accountPopup.style.height = "0px";

    div.addEventListener('click', function (event) {
        console.log("myAccounts clicked")
    });

    div.addEventListener('mouseenter', function (event) {
        if(!accountPopup.classList.contains("accountPopupOpen"))
        {
            accountPopup.classList.add("accountPopupOpen");
            accountPopup.classList.remove("accountPopupClose");
            accountPopup.style.width = "90px";
            accountPopup.style.height = "90px";
        }
    });

    div.addEventListener('mouseleave', function (event) {
        if(!accountPopup.classList.contains("accountPopupClose"))
        {
            accountPopup.classList.add("accountPopupClose");
            accountPopup.classList.remove("accountPopupOpen");
            accountPopup.style.width = "0px";
            accountPopup.style.height = "0px";
        }
    });

    var div = document.getElementById('myFavoriteList');

    div.addEventListener('click', function (event) {
        setPopupTitle('Favori Listesi');

        openPopup();
    });

    var div = document.getElementById('myChart');

    div.addEventListener('click', function (event) {
        setPopupTitle('Sepet Listesi');

        openPopup();
    });

    var div = document.getElementById('webSiteAmblem');

    div.addEventListener('click', function (event) {
        console.log("webSiteAmblem clicked")
    });
}

function setPageAnimation(showDetail, showLoader) {
    var detail = document.getElementById('detailMain');
    var loader = document.getElementById('loader');

    detail.style.display = showDetail;
    detail.style.justifyContent = "space-evenly";
    loader.style.display = showLoader;
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

window.onmouseup = function (e) {
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

function openPopup() {
    $("body :not(.popup)").css("opacity", "0.9");
    
    let table = document.getElementById("detailTable")
    
    if (table == null || table == undefined)
    {
        createTable();
        insertRowToTable(chartList);
        insertRowToTotalAmount(chartList);
    }
    else
    {
        insertRowToTable(chartList);
        insertRowToTotalAmount(chartList);
    }
    popup.style.visibility = "visible";
}

function closePopup() {
    popup.style.visibility = "hidden";
    let table = document.getElementById("detailTable")
    if (table != null || table != undefined)
        table.remove();
    
    $("body :not(.popup)").css("opacity", "1");
}

document.onkeydown = function (evt) {
    if (evt.keyCode == 27) {
        closePopup();
    }
};

function setPopupTitle(title) {
    var popupHeaderSpan = document.getElementById('popupHeaderSpan');
    popupHeaderSpan.innerText = title;
}

function createTable() {
    var body = document.getElementById('popupDetail');
    var table = document.createElement("table");
    table.style.width = "100%";
    table.style.border = "1px solid black";
    table.style.height = "80%"
    table.id = "detailTable";
    table.classList.add("popup")
    body.appendChild(table);
    table = $('#detailTable');
    var row = $('<tr></tr>');
    row.append($('<th>'+"Kitap Linki"+'</th>'));
    row.append($('<th>'+"Kitap Adı"+'</th>'));
    row.append($('<th>'+"Kitap Tipi"+'</th>'));
    row.append($('<th>'+"Kitap Tutarı"+'</th>'));
    table.append(row);
};

function insertRowToTable(tableData)
{
    var table = $('#detailTable');
    var row = $('<tr></tr>');
    $(tableData).each(function (i, rowData) {
        row = $('<tr></tr>');
        $(rowData).each(function (j, cellData) {
            row.append($('<td>'+cellData.bookUrl+'</td>'));
            row.append($('<td>'+cellData.bookName+'</td>'));
            row.append($('<td>'+cellData.bookType+'</td>'));
            row.append($('<td>'+cellData.bookPrice+'</td>'));
        });
        table.append(row);
    });

    return table;
}

function clearChartList()
{
    chartList = [];
}

function clearFavoriteList()
{
    favoriteList = [];
}

function clearList()
{
    clearChartList();
    clearFavoriteList();
    let table = document.getElementById("detailTable")
    if (table != null || table != undefined)
        table.remove();
    createTable()
}

function insertRowToTotalAmount(chartList)
{
    var totalPrice = parseFloat(0);
    chartList.forEach(item=>
    {
        var price = parseFloat(item.bookPrice);
        totalPrice += price
    })

    var table = $('#detailTable');
    row = $('<tr></tr>');

    row.append($('<td>'+"Toplam Tutar"+'</td>'));
    row.append($('<td>'+""+'</td>'));
    row.append($('<td>'+""+'</td>'));
    row.append($('<td>'+totalPrice+'</td>'));
    
    table.append(row);
}