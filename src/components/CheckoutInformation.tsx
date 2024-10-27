import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckoutInformation: React.FC = () => {
    const [paymentMethod, setPaymentMethod] = useState("");
    const [differentAddress, setDifferentAddress] = useState(false);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full bg-white p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-blue-500 mb-6"><Link to='/'>HAVANA</Link></h2>
                <div className='grid grid-cols-2'>

                    <div className="p-4 w-full max-w-md mx-auto bg-white rounded-md">
                        <h2 className="text-lg font-semibold mb-4">Thông tin mua hàng</h2>

                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="text"
                                placeholder="Họ và tên"
                                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <div className="relative">
                                <input
                                    type="tel"
                                    placeholder="Số điện thoại"
                                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                                />
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <div className='flex items-center'>
                                        <img className='size-4 me-2 rounded' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAkFBMVEXaJR3//wDZHhTjaWbYDx7upxHYAB7ZHh3ZFx7++ADZGx3/+wDZEh732Anyvw799APsoBLrmhP54AjeQxv43AjdOhvngBXzww3wtQ/0xwz1zgvjaRjvrxDeSRrqlRPpkBTohhXlehblcxfiYhj77AX20grbLhz76AbgVBnjZxjcNBvhXBn87wTvrBDxuQ7ldRbT9e9AAAAELklEQVR4nO3d6XaiQBAFYHsGqxEw7olL3OOSaJL3f7tRQWVpBTQZ7Or7/c7MgXu4AnbXsVQCAAAAAAAAAAAAAAAAAAAAAAAAgLNl0QfweKwXq+hDeDRyKIay6IN4MF5DNLyiD+LBUFM0qeiDeCyyJYRooTxh3miXyQjlCaP2LpM2yhMiO2Kvg/KceeNDJmOU54yqh0yqKM/ZUvjwfH9ij4NMxnbRh/IwaBFkskB5jqQ4wo0nYE9OmUxQHh/1T5n0UR6fJ87whHJgP4cyeUZ59kLVQXkC4eqgPAf2NJLJFOXZVacXyaSH8uyuEzeSiYvrpGTPRNQModBLLJMXlMepxDKpOEUfUtGceHWEGJgeCj0lMnkyvTxOLZFJzfDrxHlPRCLEu9mh0Jciky+zy2NvFZnUjH5CceaKSISYm1weq6vMpGvy9hxPVR0htgZ/YSA3ykiE2DD8/l5amdDrhUxeKdt/oFF0ctAtZ1FPPrAFd556pn/fHWgUit24cLI/q6HVTdsavv16ItuhZrcnx1M9of6kJ0+/pxiauukndjN3quULgNep/lok7Y6mjzCS6r8USZk0uuHE0PzS3fYetbmWvTmyZS/9HHPqlbS6BSvQJP0sc5lofZH4rM7qBxN5a2n2UKImL77W5NfV+MM1igbxRZzbuDMGvTmyl4v0M061WOr+4RohaXR3JA02vTmy1ve9Fb6tGfXmyHHueSt8clj15oSmN0fyzPAi8Xkf7ZsSaXZYPJSoSSrfEMknuw/XqPxvhbV3tr05smU/PYeQvvZvfFnQOD2JkzH7i8RntbK+Fa50+xr6dpS1PgbtNF+mpxEwZkDQzv41kzFjGpmrY1B5ltkXflxDyhMbxLjOkDENyvNVviljGnnWTN2iD/a/sL9zRCLEtwnlyVUdQ8qTGMS4zoQxjcQMU5oZ/1AUgxjXGTCm4eVd/nI13WmSnWKGyVdpXAqLfXmUgxg71Q9aXtjWxH5Mg9RXQ51kSZJ6B2mFeSbOQHXW241/2rRR7r9nPiBoqarTO63x2U58svZQHt5fQKqqE9l4pNrWVGNdHsUMUzO28chqNRN/w3rGKTnD9JpY45P0mfgjzuWh2CJgZaCqRWJbE+fyyHX0XBcX1vgSa4VrvgvGVnSz3+jy2nhsrZBxeSj8+HF91CQ67LJlW55Idb5SNlDIyFsA2/JYoRtKhlET+j5/cfvJtTx0WjqvZho1CQ27rJiWRw6PZ1jPuPEoNOzC9AcBrGDf1jbHqMnprbDMszyWX518oya29N8KVywzCaozybthL3grZFkeb//ZsLph1MQfdqlz/FqWmreOmhyGXTj+msb+FzGUb3xZ0MDl+GsaXrl9x65Ou1Qt8yuPnN21G1rSjN91Urr3lBhGAgAAAAAAAAAAAAAAAAAAAAAAAAAAAACgkz8QV/oLcf8Agm46TsQaDiQAAAAASUVORK5CYII=" alt="" />
                                        🇻🇳</div>
                                </span>
                            </div>

                            <input
                                type="text"
                                placeholder="Địa chỉ"
                                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <select className="text-gray-500 w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Tỉnh thành</option>
                                {/* Add province options here */}
                            </select>

                            <select className="text-gray-500 w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Quận huyện</option>
                                {/* Add district options here */}
                            </select>

                            <select className="text-gray-500 w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Phường xã</option>
                                {/* Add ward options here */}
                            </select>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="differentAddress"
                                    checked={differentAddress}
                                    onChange={() => setDifferentAddress(!differentAddress)}
                                    className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-0"
                                />
                                <label htmlFor="differentAddress" className="ml-2 text-gray-700">
                                    Giao hàng đến địa chỉ khác
                                </label>
                            </div>

                            <textarea
                                placeholder="Ghi chú (tùy chọn)"
                                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={3}
                            ></textarea>
                        </div>
                    </div>

                    <div className="p-4 w-full max-w-md mx-auto bg-white rounded-md">
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold mb-2">Vận chuyển</h2>
                            <div className="p-3 bg-blue-100 text-blue-700 rounded-md">
                                Vui lòng nhập thông tin giao hàng
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold mb-2">Thanh toán</h2>
                            <div className="space-y-2">
                                <label className="flex items-center p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-100">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="chuyen-khoan"
                                        checked={paymentMethod === "chuyen-khoan"}
                                        onChange={() => setPaymentMethod("chuyen-khoan")}
                                        className="form-radio text-blue-500 mr-3"
                                    />
                                    <span className="flex-grow">Chuyển khoản</span>
                                    <span><img className='size-6' src="https://cdn-icons-png.flaticon.com/512/4934/4934666.png" alt="" /></span>
                                </label>
                                {paymentMethod === "chuyen-khoan" && (
                                    <div className="p-3 text-base text-[#545454] bg-[#fbfbfb] rounded-md">
                                        {/* <h3 className="text-md font-semibold">Thông tin chuyển khoản</h3> */}
                                        <p className='py-7'>Bạn chuyển vào tài khoản bên dưới, Bộ phận hỗ trợ của Havana sẽ liên hệ để xác nhận.</p>
                                        <p>Ngân hàng số Timo by Ban Viet Bank (Timo by Ban Viet Bank)</p>
                                        <p className='py-5'>NGUYEN PHUC THUC NHI</p>
                                        <p>0935608348</p>
                                    </div>
                                )}

                                <label className="flex items-center p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-100">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="cod"
                                        checked={paymentMethod === "cod"}
                                        onChange={() => setPaymentMethod("cod")}
                                        className="form-radio text-blue-500 mr-3"
                                    />
                                    <span className="flex-grow">Thu hộ (COD)</span>
                                    <span><img className='size-6' src="https://cdn-icons-png.flaticon.com/512/4934/4934666.png" alt="" /></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutInformation;
