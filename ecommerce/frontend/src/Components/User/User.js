import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getOrders } from "../../Actions/order_actions";

function User() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  let { userInfo } = data;

  const userOrders = useSelector((state) => state.userOrders);
  let { orders } = userOrders;

  useEffect(() => {
    dispatch(getOrders());
  }, [getOrders, dispatch]);

  return (
    <div className="w-screen h-auto user">
      <section className="w-1/2 grid p-14 pt-10 gap-3 userInfo">
        <h1 className="text-gray-800 text-3xl uppercase">
          Información de usuario:
        </h1>
        <div className="border-b pb-5 flex items-center">
          <h1 className="text-gray-600 text-2xl mr-5 uppercase">Nombre:</h1>
          <h3 className="text-gray-500 font-thin">{userInfo.given_name}</h3>
        </div>
        <div className="border-b pb-5 flex items-center">
          <h1 className="text-gray-600 text-2xl mr-5 uppercase">Apellido:</h1>
          <h3 className="text-gray-500 font-thin">{userInfo.family_name}</h3>
        </div>
        <div className="border-b pb-5 flex items-center">
          <h1 className="text-gray-600 text-2xl mr-5 uppercase">Usuario:</h1>
          <h3 className="text-gray-500 font-thin">{userInfo.username}</h3>
        </div>
        <div className="border-b pb-5 flex items-center">
          <h1 className="text-gray-600 text-2xl mr-5 uppercase">Email:</h1>
          <h3 className="text-gray-500 font-thin">{userInfo.email}</h3>
        </div>
      </section>
      {orders ? (
        <section className="pl-14 w-3/4 m-auto userOrders pr-14">
          <h1 className="text-3xl text-gray-600 uppercase pb-5">
            Ordenes realizadas
          </h1>
          <div className="w-full">
            <div className="shadow overflow-hidden rounded border-b border-gray-200 tableBox">
              <table className="min-w-full bg-white text-center">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-xl">
                      Id
                    </th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-xl">
                      Pagado
                    </th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-xl">
                      Entregado
                    </th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-xl">
                      Total de compra
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {orders.map((element) => (
                    <tr key={element.id} className="border-0 border-b h-16 text-lg">
                      <td className="text-blue-700">
                        <Link to={`/order/${element.id}`}>{element.id}</Link>
                      </td>
                      <td>{element.isPaid ? "Si" : "No"}</td>
                      <td>{element.isDelivered ? "Si" : "No"}</td>
                      <td>{element.totalPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : (
        <h1>No hay ordernes por mostrar</h1>
      )}
    </div>
  );
}

export default User;
