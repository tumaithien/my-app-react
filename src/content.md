# Interview React

1. Sự khác nhau giữa useState và useRef?

- useState: là cập nhật state các component. Khi các giá trị trong state thay đổi thì component sẽ rerender lại và cập nhật ra dom của component
- useRef: dùng cho trường hợp tương tác với dom dùng cho setTimeout và setInterval. Tạo ra 1 reference trong dom và không rerender lại dom.

  2.useEffect hoạt động như thế nào? Và nó dùng để làm gì? (closure, Async, API, Event, Timers, Mounted, unMounted)

- khi component Mounted -> useEffect run (chạy cleanup trước tiên)
