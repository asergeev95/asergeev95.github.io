$(document).ready(function () {
    $("button").click(function () {

        url = $("#vk-link").val();
        proceedPost(url);

    });
    $('body').keypress(function (e) {
        if (e.which == 13) {
            url = $("#vk-link").val();
            proceedPost(url);
            return false;    //<---- Add this line
        }
    });
});

function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}

function proceedPost(url) {
    count = 0;
    owner_id = url.substring(url.lastIndexOf("l") + 1, url.indexOf("_"))
    item_id = url.substring(url.indexOf("_") + 1);
    var allUserIDs = [];

    $.ajax({
        url: "https://api.vk.com/method/likes.getList?type=post&owner_id=" + owner_id + "&item_id=" + item_id + "&access_token=905e7fc0875abc172a2b01a0b8eb058df9423a146bc12476b7d86a93c57852886372c69680a125ee1a646&v=5.73",
        async: true,
        success: function (data) {
            count = data.response.count;
            getLikes(0, owner_id, item_id, count, allUserIDs);
        }
    });

    extractUserInfo(allUserIDs);
}

function getLikes(offset, owner_id, item_id, count, allUserIDs) {


    $.ajax({
        url: "https://api.vk.com/method/likes.getList?type=post&owner_id=" + owner_id + "&item_id=" + item_id + "&count=1000&access_token=905e7fc0875abc172a2b01a0b8eb058df9423a146bc12476b7d86a93c57852886372c69680a125ee1a646&v=5.73&offset=" + offset,
        async: true,
        success: function (data) {

            console.log(offset);
            sleep(300);
            data.response.items.forEach(function (element) {
                allUserIDs.push(element);
            });

            if (offset + 1000 < count) {
                getLikes(offset + 1000, owner_id, item_id, count, allUserIDs);
            }
            else {
                console.log("Конец");
                extractUserInfo(allUserIDs);
            }
        }
    });
}

function extractUserInfo(allUserIDs) {
    var subset = [];

    for (var j = 0; j < allUserIDs.length; j += 300) {
        subset = allUserIDs.slice(j, j + 300);
        $.ajax({
            url: "https://api.vk.com/method/users.get?user_ids=" + subset + "&v=5.73&fields=city, sex, bdate, photo_100",
            async: true,
            success: function (data) {
                data.response.forEach(function (person) {
                    if (person["city"] !== undefined) {
                        if (person.city.id === 99 && person.sex === 1) {
                            pageLink = '<a href="https://vk.com/id' + person.id + '" target=_blank>';
                            name = person.first_name + ' ' + person.last_name;
                            birthDate = person.bdate;
                            photo = '<img src="' + person.photo_100 + '" width=100px height=100px style="border-radius:50%"';

                            imageDiv = '<div class="jumbotron radio-inline" style="width:500px;">' + photo + '</div>'
                            infoDiv = '<div style="display:inline-block;margin-left:30px">' + name + '<p style="font-size:16px; color:#adc400;">' + birthDate + '</p>'

                            mainDiv = pageLink + '<div class="row" style="margin-top:30px;">' + imageDiv + ' ' + infoDiv + '</div>' + '</a>'
                            $("ul.container").append(mainDiv);
                        }
                    }
                });
            }

        });
    }
}