var room = [{
    id: "TEST01",
    name: "Standard",
    img: "https://www.hoteljob.vn/files/VB2-%E1%BA%A3nh%20HTJ/cac-loai-phong-trong-khach-san.jpg",
    price: "$100",
    sdetail:"phòng tiêu chuẩn trong khách sạn",
    kind: "Gia đình",
    square: "4m2",
    detail: "Standard - phòng tiêu chuẩn trong khách sạn, là loại phòng đơn giản nhất với những trang bị tối thiểu, có diện tích nhỏ, ở tầng thấp, không có view hoặc view không đẹp. Đây là loại phòng có mức giá thấp nhất trong khách sạn. Một số khách sạn sẽ không có loại phòng standard vì tất cả các phòng đều có view đẹp và được trang bị những thiết bị tiện nghi nhất.",
},
{
    id: "TEST02",
    name: "Superior",
    img: "https://www.hoteljob.vn/files/VB2-%E1%BA%A3nh%20HTJ/cac-loai-phong-trong-khach-san-1.jpg",
    price: "$999",
    sdetail:" chất lượng cao hơn STD",
    kind: "Gia đình",
    square: "10m2",
    detail: "Đây là loại phòng có chất lượng cao hơn STD với diện tích lớn hơn, được trang bị nhiều trang thiết bị tiện nghi, có view đẹp. Vì chất lượng phòng tốt hơn nên mức giá thuê phòng Superior cũng sẽ cao hơn STD.",
},
{
    id: "TEST03",
    name: "Superior",
    img: "https://www.hoteljob.vn/files/VB2-%E1%BA%A3nh%20HTJ/cac-loai-phong-trong-khach-san-1.jpg",
    price: "$999",
    sdetail:" chất lượng cao hơn STD",
    kind: "Gia đình",
    square: "10m2",
    detail: "Đây là loại phòng có chất lượng cao hơn STD với diện tích lớn hơn, được trang bị nhiều trang thiết bị tiện nghi, có view đẹp. Vì chất lượng phòng tốt hơn nên mức giá thuê phòng Superior cũng sẽ cao hơn STD.",
},  ];
// đẩy mảng product vào bộ nhớ
function save() {
    localStorage.setItem('listRoom', JSON.stringify(room));
}

// product nhận dữ liệu tử mảng listProduct thong localStorage
function load() {
    room = JSON.parse(localStorage.getItem('listRoom'));
}
// xuất sản phẩm ra html
if (localStorage.getItem("listRoom") != null) {
    load();
}
var listLocal = function() {
    var listRoom = "";
    for (var i in room) {
        var data = JSON.parse(JSON.stringify(room[i]));
        var listRoom = `
        <div class="card">
        <div class="card-image">
        <img src="${data.img}"class="img-fluid" alt="alternative">
        </div>
        <div class="card-body">
            <h3 class="card-title">${data.name}</h3>
            <p>${data.sdetail}</p>
            <ul class="list-unstyled li-space-lg">
                <li class="media">
                    <i class="fas fa-square"></i>
                    <div class="media-body">${data.kind}</div>
                </li>
                <li class="media">
                    <i class="fas fa-square"></i>
                    <div class="media-body">${data.square}</div>
                </li>
            </ul>
            <p class="price">Starting at <span>${data.price}</span></p>
            <div class="media-body"><div class="buttons">
            <div class="container2" data-toggle="modal" data-target="#watch" onclick="chitiet('${data.id}')" >
                <a class="btn effect04" data-sm-link-text="CHỌN NGAY" target="blank" ><span >BOOK</span></a>
            </div>
          </div></div>
        </div>`;
        document.getElementById("banchay").innerHTML += listRoom;
    }
    save();
}
listLocal();
document.getElementById("haha").innerHTML = room.length;

function chitiet(id) {
    let html = "";
    let allRoom = JSON.parse(localStorage.getItem('listRoom'));
    let rooms = allRoom.filter(rooms => {
        return rooms.id == id;
    });
    return rooms.map((a) => {
        html = `<div class="wrapper">
                    <div class="product-img">
                        <img src="${a.img}" >
                    </div>
                    <div class="product-info">
                        <div class="product-text">
                            <h1>${a.name}</h1>
                            <h2>${a.kind}</h2>
                            <p>${a.detail}</p>
          </div>
          <div class="product-price-btn">
            <p><span>${a.price}</span></p><br/>
            <button type="button">buy now</button>
          </div>
        </div>
      </div>`;
        document.getElementById("print_watch").innerHTML = html;
    });
}