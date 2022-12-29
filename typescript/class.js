"use strict";
//hàm constructor sẽ được chạy ngay khi khởi tạo class mới.
// ờ ví dụ trên khi khai báo new Greeter(“world”) thì việc đâu tiên sẽ là chạy hàm constructor gán message “world” vào biến greeting của class. 
//Hơn nữa, cũng giống như các ngôn ngữ lập trình hướng đối tượng khác. chúng ta cũng có thể dễ dàng sử dụng kế thừa trong typeScript.
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(meters = 0) {
        return this.name + " moved " + meters + "m.";
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    move(meters = 5) {
        return super.move(meters);
    }
}
var ranLuc = new Snake("Ran Luc");
ranLuc.move(); // = Ran Luc moved 5 m.
ranLuc.move(34); // = Ran Luc moved 34 m.
