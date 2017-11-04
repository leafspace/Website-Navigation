var isAdd = false;

function getWebsite() {
    var website = document.getElementById("website").value;

    var dataList = [
        {websiteName:'个人简历网站', websiteStr:"http://leafspace.coding.me/WebPage-Resume/", websiteLink:"<a href='http://leafspace.coding.me/WebPage-Resume/' target='_blank' class='view-link'>Let's go</a>"},
        {websiteName:'MyPad Wamp 根目录', websiteStr:"http://" + website + ":8080/", websiteLink:"<a href='http://" + website + ":8080' target='_blank' class='view-link'>Let's go</a>"},
        {websiteName:'MyPad Apache 根目录', websiteStr:"http://" + website + ":8090", websiteLink:"<a href='http://" + website + ":8090' target='_blank' class='view-link'>Let's go</a>"},
        {websiteName:'My Cloud Wamp 根目录', websiteStr:"http://106.15.95.23/", websiteLink:"<a href='http://106.15.95.23/' target='_blank' class='view-link'>Let's go</a>"},
        {websiteName:'Windows Hello 日志系统', websiteStr:"http://" + website + ":8090/Windows_Hello_Log_System/", websiteLink:"<a href='http://" + website + ":8090/Windows_Hello_Log_System/' target='_blank' class='view-link'>Let's go</a>"}];

    if (isAdd == true) {
        return;
    }
    var tableBody = document.getElementById('table-body');
    for(var i = 0; i < dataList.length; i++) {
        var tableRow = getDataRow(dataList[i]);
        tableBody.appendChild(tableRow);
    }
    isAdd = true;
}



function getDataRow(r_data) {
    var row = document.createElement('tr');
    var websiteName = document.createElement('td');
    websiteName.innerHTML = r_data.websiteName;
    row.appendChild(websiteName);

    var websiteStr = document.createElement('td');
    websiteStr.innerHTML = r_data.websiteStr;
    row.appendChild(websiteStr);

    var websiteLink = document.createElement('td');
    websiteLink.innerHTML = r_data.websiteLink;
    row.appendChild(websiteLink);
    return row;
}