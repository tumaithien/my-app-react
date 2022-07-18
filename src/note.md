## State

State là thông tin được lưu bên trong trong 1 components và thuộc về component đó. Component có thể thay đổi thông tin của state

Hook cho phép người dùng sử dụng state và những tính năng khác của React mà không cần sử dụng class component.
Hook chỉ được sử dụng trong functional component

stateless functional component: component nhưng không sử dụng state
statefull functional component: component có sử dụng state

1. enabling state: useState(...)
2. initialize state: useState(false)
3. reading state:
4. update state

re-render: mỗi khi state trong components thay đổi thì sẽ re render lại components

Nguyên tắc sử dụng Hook:

- Sử dụng ở phía trên cùng.
- Không được viết trong câu điều kiện, không dc viết trong funtion...

## Stale state

Stale state dễ xảy ra khi sử dụng 1 biến ngoài scope. Để khắc phục cần sử dụng call back để gọi lại biến trước đó và xử lý

Object destructuring:

useReducer: + reducer: + initialState: Object là giá trị khởi tạo + action: là 1 plan object bao gồm {type: thuộc tính bắt buộc, payload: null (optional)}

## Khi sử dụng useState và useReducer

## React redux

- Chỉ xử lý những tác vụ đồng bộ.
- Action: là 1 plant object bao gồm type là thuộc tính bắt buộc

## React cập nhật State như thế nào

- React chỉ cập nhật state theo giá trị khởi tạo ban đầu khi gọi hàm. Để có thể cập nhật State liên tục trong nhiều hàm thì cần sử dụng Callback để cập nhật giá trị previous State đúng.

## Cách fix khi cài đặt các thư viện bị lỗi

- Xóa file package-lock.json
- npm install -g rimraf
- rimraf node_modules
- npm install

## UseEffect

- Sử dụng khi cần target vào các dom trong giao diện
- side-effects : những tác vụ xử lý trong function nhưng lại gây ảnh hưởng ra bên ngoài. (Việc fetching data, thiết lập các subscription, và việc thay đổi DOM trong React component,)
- useEffect(callback, []): nhận vào 2 tham số. thứ nhất là 1 callback, thứ 2 là 1 dependency.
- Cơ chế hoạt động của useEffect:

* Mounted: khi load ra 1 components thì sẽ gọi callback 1 lần.
* Update: khi tới tiến trình này thì sẽ kiểm tra xem deps có thay đổi hay không. Nếu không thay đổi, thì sẽ kết thúc tiến trình và load ra components. Nếu có thay đổi, thì sẽ rerender lại component và load ra những thay đổi trong components.
* Unmount: khi chuyển trang, thì sẽ kết thúc tiến trình load lại component trong useEffects.

- Lưu ý: Khi làm input resize thì nên sử dụng useLayoutEffect thay vì useEffect để tránh bị giật khi resize

## Cleanup trong useEffect

- Cơ chế hoạt động:

* Mounted: khi 1 component sẽ bắt đầu chạy code trong callback (side-effect) trong useEffect.
* Update: khi tới tiến trình này thì sẽ kiểm tra xem dep có thay đổi hay không. Nếu không thay đổi thì sẽ kết thúc tiến trình và load ra component. Nếu có thay đổi, trước khi chạy vào side-effect thì sẽ cleanup những side effect trước đó.
* Unmouted: khi component tới tiến trình này thì sẽ chạy cleanup thêm 1 lần nữa.

## Sự khác nhau giữa State và Ref

- Khi State thay đổi thì component bị re-render lại, nhưng ngược lại khi Ref thay đổi thì component không bị re-render lại.

## Ref.current trong useEffect

- Trong quá trình Mounting thì Ref.current là undentify thì sẽ không set và gán giá trị được. Nên cần viết hàm xử lý bên trong useEffect để thực thi khi component đã render xong.

## Form

## Formik

- Lưu ý khi có quá nhiều trường input, textarea hay select trong 1 component thì nên tạo 1 state để lưu trữ tất cả các thông tin của các trường
- Khi sử dụng useField thì chú ý nó đã là 1 Object thì cần phải sử dụng spread operator để ko sai
- isSubmitting trong Formik là trạng thái và mặc định là false. Khi click btn submit thì isSubmitting sẽ là true.

* useField: là 1 object

## React-hook-form

- isValid: Kiểm tra form đã valid hay chưa? Luôn luôn trả về false. Để fix lỗi khi isValid bị false dù form đã valid thì thêm thuộc tính mode: "onChage"
  ở useform.
- isDirty: Kiểm tra đã có click chuột vào input hay chưa? Khi đã click thì trả về true, ngược lại trả về false.
- dirtyField: trả về 1 object. Khi thay đổi các trường trong form thì sẽ trả về thuộc tính theo name của các trường về true.
- Lưu ý: Reset form luôn luôn để sau cùng khi đã trả dữ liệu lên sever.
- useControl:
  - Khi sử dụng control trong input thì cần set giá trị mặc định cho input đó để không xảy ra lỗi uncontrol và controlled

## Context

- Sử dụng Context để truyền dữ liệu từ Component tổng xuống component mà mình muốn, không cần thiết phải truyền qua component theo các cấp (DropDrilling).

## Lazy initialization

- Để giải quyết tình trạng re-render lại dữ liệu trong Local Storage. Là 1 func trả về đúng giá trị đó và chỉ chạy đúng 1 lần

## React Router

- Các state hay dùng: Link Active NavLink Outlet Nested routes useParam useSearchParam NotFound useNavigate

## Swiper

- grabCursor: Chạm để kéo các slider.
- spaceBetween: khoảng cách giữa các slide

## Swr

- Khi làm chức năng loadmore bằng button sử dụng swr infinite

## Advance React

- HOC: higher order component pattern là 1 component chứa 1 component khác (chia sẻ các logic giữa các components). Ưu điểm: chia sẻ logic của các component với nhau. Nhược: dễ bị ghi đè dữ liệu nếu đặt trùng tên props, higher order component hell lồng nhau
- High order fuction: map, fillter, some, every, reduce
- Lifting state
- Render props: chia sẻ prop giữa các component với nhau. Dễ bị trùng tên với state, và điểm yếu là dễ bị render props nhiều component trong nhau. Khó quản lý

## React composition

- Sepecialized Component: Nhận props và thực hiện 1 chức năng cụ thể
- Container Component: Component cha sẽ ráp lại những Sepecialized Component bên trong
- Compount component: truyền dữ liệu và thực hiện các chức năng thông qua context chứ không cần phải truyền qua props drilling.
- Props collection:

## Control props

- Khởi tạo các component pattern cho phép các lập trình viên khác có thể can thiệp vào thông qua props

## Inversion of control

- Mức độ linh hoạt và control

## Tối ưu Re-render

- React-memo: Component sẽ bị re-render khi state của nó thay đổi (trong ví dụ là count). Component sẽ bị re-render khi nó có props truyền vào thay đổi

## Recap chương 11

1. higher order component
2. render props
3. custom hook
4. props collections, props getter
5. control props
6. state reducer

## FireBase

- Là 1 real time database
- Fetching single document

## Ôn tập mô hình redux cơ bản

- Redux là 1 thư viện của JS giúp chúng ta quản lý State
- Chỉ xử lý trong những tác vụ đồng bộ.
- UI: React giao diện người dùng.
- Action: An action is a plain JavaScript object { type: ACT\_????, payload: null} (lưu ý: payload luôn truyền giá trị vào trong obj)
- Reducer: Function

  - Input: 2 tham số truyền vào state và action.
  - Output: state mới

- UI -> dispatch action -> reducer xử lý dữ liệu -> store -> đổ vào UI ( re-render )

- reducer (initState)
  - Đôi khi trong các project phức tạp cần tách nhỏ nhiều reducer ra
  - Có 1 hàm dc hỗ trợ từ Redux để gom các hàm nhỏ lại thành RootReducer: combineReducers(reducers)
- const store = createSore(reducer)
- index.js -> React -> <Provider store={store}><App /></Provider>

- useSelector(state -> state.????)
- const dispatch = useDispatch()

Action type, Action Creator

## Xử lý form trong React:

- Đặt hàm onChange để lưu trữ value
- Đặt tên name trùng với key trong obj khi sử dụng hook useState
- value = obj hook đã set State.
- Lưu ý khi setForm thì phải copy dữ liệu từ state form
