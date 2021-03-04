
var room = [];

class Room {
    constructor(id, name, img, price, sdetail, kind, square, detail) {
            this.id = id;
            this.name = name;
            this.img = img;
            this.price = price;
            this.sdetail = sdetail;
            this.kind = kind;
            this.square = square;
            this.detail = detail;
        }
        //Hàm thêm sản phẩm
    static addRoom() {
            console.log(room.length);
            var add = new Room(("XUCANA" + parseInt(room.length + 1)), document.getElementById('name').value, document.getElementById('img').value, document.getElementById('price').value, document.getElementById('sdetail').value, document.getElementById('kind').value, document.getElementById('square').value, document.getElementById('detail').value);
            room.push(add);
            localStorage.setItem('listRoom', JSON.stringify(room));
            window.location.reload();
        }
        //Hàm chỉnh sữa update sản phẩm
    static updateRoom(i) {
            var a = room[i];
            document.getElementById('idd').value = a.id;
            document.getElementById('named').value = a.name;
            document.getElementById('imgd').value = a.img;
            document.getElementById('priced').value = a.price;
            document.getElementById('sdetaild').value = a.sdetail;
            document.getElementById('kindd').value = a.kind;
            document.getElementById('squared').value = a.square;
            document.getElementById('detaild').value = a.detail;
            document.getElementById('idd').setAttribute("disable", "disable");
            document.getElementById('submitUpdate').innerHTML = '<button href="" class="btn btn-outline-danger mt-3" onclick="Room.submitUpdate(' + i + ')">Đồng ý</button>';
        }
        //Hàm thêm thông tin vào
    static submitUpdate(i) {
            var a = room[i];
            a.id = document.getElementById('idd').value;
            a.name = document.getElementById('named').value;
            a.img = document.getElementById('imgd').value;
            a.price = document.getElementById('priced').value;
            a.sdetail = document.getElementById('sdetaild').value;
            a.kind = document.getElementById('kindd').value;
            a.square = document.getElementById('squared').value;
            a.detail = document.getElementById('detaild').value;
            localStorage.setItem('listRoom', JSON.stringify(room));
            //Dùng để tự load lại trang
            window.location.reload();
        }
        //Hàm xóa sản phẩm
    static deleteRoom(i) {
        //Phương thức splice() thay đổi phần tử của mảng bằng cách xóa phần tử đang tồn tại và/hoặc thêm phần tử mới.
        room.splice(i, 1);
        localStorage.setItem('listRoom', JSON.stringify(room));
        window.location.reload();
    }
}
//Chức năng in sản phẩm vào bảng
function roomAdmin() {
    var listRoom = "";
    for (const i in room) {
        var data = room[i];
        listRoom += `
    <tr>
    <td>${data.id}</td>
    <td>${data.name}</td>
    <td> <img src="${data.img}" alt="" style="width: 90px; height: 80px;"></td>
    <td> ${data.price}</td>
    <td> ${data.sdetail}</td>
    <td> ${data.kind}</td>
    <td> ${data.square}</td>
    <td> ${data.detail}</td>
    <td> <button onclick="Room.updateRoom(${i})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateRoom"><i class="fas fa-cogs"></i></button>
        <button onclick="Room.deleteRoom(${i})" class="btn btn-out-warning"> <i class="fas fa-trash"> </i></button>
    </td>
</tr>`;
    }
    document.getElementById("room_admin").innerHTML = listRoom;
}

function save() {
    //Bộ nhớ
    localStorage.setItem('listRoom', JSON.stringify(room));
}


function load() {
    room = JSON.parse(localStorage.getItem('listRoom'));
    roomAdmin();
}
if (localStorage.getItem('listRoom') != null) {
    load();
}