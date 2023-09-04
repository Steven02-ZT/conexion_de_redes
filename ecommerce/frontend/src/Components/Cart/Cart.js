import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useParams, Link, useNavigate } from "react-router-dom";

import { MdDeleteForever } from "react-icons/md";

import { addToCart, removeFromCart } from "../../Actions/Cart_actions";

function Cart() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  let qty = searchParams.get("qty");

  const cart = useSelector((state) => state.cart);
  const {cartItems } = cart;

  const dispatch = useDispatch();
  const navigate  = useNavigate()

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHeandler = (product) => {
    dispatch(removeFromCart(product));
  };

  const checkOutHeandler = () => {
    navigate('/shipping')
  }

  const paymentBtn = () => {
    if (cartItems.length === 0){
      return (<div className="bg-gray-500 rounded-md w-52 h-8 m-auto flex justify-center items-center">
                <button className="font-semibold" disabled>Proceder al pago</button>
              </div>)
    }else{
      return (<div className="bg-slate-400 text-white rounded-md w-52 h-8 m-auto flex justify-center items-center">
                <button className="font-semibold" onClick={() => checkOutHeandler()}>Proceder al pago</button>
              </div>)
    }
  }

  return (
    <div className="w-full bg-gray grid gap-2 grid-cols-12 cart" style={{ height: "500px" }} >
      <div className="col-span-9 h-full grid gap-2" style={{ gridTemplateRows: "10% 80%" }} >
        <h1 className="w-fit h-full text-center flex justify-left items-end text-3xl m-5 text-gray-900 font-thin">Carrito</h1>
        <div className="rounded-lg border border-gray-200 shadow-md m-5" style={{'overflowY':'scroll','height':"450px"}}>
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Producto</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {cartItems.map(element => (
                <tr key={element.product} className="hover:bg-gray-50">
                <th className="gap-3 px-6 py-4 flex justify-center">
                  <div className="h-28 w-28">
                    <Link to={`/productos/${element.product}`}>
                      <img className="h-full w-full object-cover object-center"
                      src={element.image}
                      alt=""/>
                    </Link>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 text-xl font-semibold text-orange-400">{element.name}</span>
                  <p className="text-sm productDescriptionP">{element.description}</p>
                </td>
                <td className="px-6 py-4">
                  <input className="w-16 border-0" pattern="^[0-9]+" min="1" type="number" 
                  value={element.qty} onChange={(e) => dispatch(addToCart(element.product, Number(e.target.value)))}/>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                     {(element.discount > 0) ? (
                        <div className="grid">
                          <p className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-2 py-1 text-sm line-through font-thin text-yellow-600 mb-2">
                            $&nbsp;<span>{element.price}</span>&nbsp;USD
                          </p>
                          <p className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xl font-thin text-yellow-600">
                           ${(element.price - ((element.price * element.discount) / 100)).toFixed(2)}
                          </p>
                        </div>
                     ) : (
                        <p className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xl font-thin text-yellow-600">
                          $&nbsp;<span>{element.price}</span>&nbsp;USD
                        </p>
                     )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4">
                    <button type="button">
                      <MdDeleteForever className="text-2xl text-red-600" onClick={() => removeFromCartHeandler(element.product)}/>
                    </button>
                  </div>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-span-3 grid items-center justify-center h-full w-full">
        <div className="h-auto m-10 paymentCard pb-5">
          <h1 className="p-5 text-xl text-gray-900">Subtotal ({cartItems.reduce((acc, item) => acc + Number(item.qty), 0)})</h1>
          <h3 className="p-5 pt-1 text-gray-500 font-thin">
            us $<span>{cartItems.reduce((acc,item) => acc + (
                (item.discount > 0 ) ? (item.qty * (item.price - (item.price * item.discount)/100)) 
                : (item.qty * item.price)
              ), 0).toFixed(2)}</span>
          </h3>
          
          {paymentBtn()}
        </div>
      </div>
    </div>
  );
}

export default Cart;
