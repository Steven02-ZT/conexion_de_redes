import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { DualRing } from "react-loading-io";

import { AiOutlineDownload } from "react-icons/ai";

import { getProductById } from "../../Actions/Products_actions";

import ProductImagesView from './productImagesView'

function Producto() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [qty, setQty] = useState("");

  useEffect(() => {
    dispatch(getProductById(id));
    setQty("1");
  }, [id]);

  const productstate = useSelector((state) => state.product);
  const { error, loading, product } = productstate;

  let general = {},
    categories = [];
  try {
    general = product.general || {};
    categories = product.categorys || [];
  } catch {}

  const navigate = useNavigate();
  function addToCartHeandler() {
    navigate(`/carrito/${id}?qty=${qty}`);
  }


  return (
    <div className="grid gap-2 w-full product h-fit">
      {loading ? (
        <div className="col-span-4 justify-center flex flex-col">
          <div className="flex"><DualRing size={50} /></div>
        </div>
      ) : error ? (
        <div className="col-span-4 justify-center flex flex-col">
          <div className="flex"><DualRing size={50} /><h1 className="p-5 text-blue-950 text-2xl font-semibold">Up!!</h1></div>
          <div><p className="p-5 text-blue-800 text-md">Intenta volver a cargar la página.</p></div>
        </div>
      ) : (
        <div className="h-fit">
          <div className="w-full grid gap-2 grid-cols-12 topPart" style={{ height: "400px" }} >
            <div className="col-span-4">
              {general.images ? (
                <ProductImagesView/>
              ):"loading"}
            </div>
            <div className="col-span-8 bg-gray-900 gap-2 information">
              <div className="h-2/5 grid grid-cols-8 gap-px items-end border-b border-white">
                <h1 className="text-3xl font-bold text-white col-span-5 ml-5 mb-5">
                  {general.name}
                </h1>
                <h2 className="text-3xl text-pink-200 col-span-3 w-full font-semibold text-center mb-5">
                  $<span>{general.price}</span>
                </h2>
              </div>
              <div className="h-3/5 grid grid-cols-8 gap-px items-center generalInformation">
                <div className="col-span-5 text-white font-thin ml-5 h-full overflow-auto">
                  <p>{general.description}</p>
                </div>
                <div className="grid justify-center items-center col-span-3">
                  <div>
                    <div className="flex pb-5">
                      <label
                        htmlFor="qty"
                        className="text-white text-xl font-thin"
                      >
                        Cantidad:&nbsp;
                      </label>
                      <select
                        name="qty"
                        id="qty"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                        className="bg-orange-300 border-0 outline-0 rounded-lg text-gray-700 h-9"
                      >
                        {[...Array(general.stock).keys()].map((x) => (
                          <option value={x + 1} key={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    {general.stock > 0 ? (
                      <button
                        type="button"
                        onClick={addToCartHeandler}
                        className="bg-slate-300 w-40 p-1 m-2 rounded-lg text-gray-700"
                      >
                        Agregar al carrito
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="bg-gray-500 w-40 p-1 m-2 rounded-lg text-gray-700"
                        disabled
                      >
                        Agregar al carrito
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-12 gap-2 mt-5 botPart"
            style={{ height: "300px" }}
          >
            <div className="col-span-3 col-start-4 md:col-span-6 md:col-start-1 flex justify-center">
              <div className="m-10">
                <h1 className="text-3xl text-blue-900">Categorías:</h1>
                <ul className="ml-7 mt-3 mb-5">
                  {categories.map((categorie) => (
                    <li
                      key={categorie.id}
                      className="text-gray-500 font-thin list-disc text-xl p-1"
                    >
                      {categorie.name}
                    </li>
                  ))}
                </ul>

                <a
                  className="p-3 bg-blue-800 text-white rounded-md flex items-center mb-2"
                  href={general.pdf}
                  target="_blank"
                >
                  <AiOutlineDownload />
                  &nbsp;Manual
                </a>

                <a
                  href={`mailto:gerencia@conexionderedes.com?subject=${encodeURIComponent(
                    general.name
                  )}&body=${encodeURIComponent('Hola, \n\nQuisiera obtener más información sobre este producto')}`}
                  className="p-3 bg-slate-400 text-white rounded-md flex items-center"
                  target="_blank"
                >
                  Envianos un correo
                </a>
              </div>
            </div>
            <div className="col-span-3 md:col-span-6 w-full flex justify-center ">
              <ul className="m-10">
                <li className="flex p-1">
                  <h1 className="text-xl font-semibold text-blue-900">
                    Estado:
                  </h1>
                  &nbsp;
                  {general.stock > 0 ? (
                    <p className="text-gray-500 font-thin text-lg">
                      En existencia
                    </p>
                  ) : (
                    <p className="text-gray-500 font-thin text-lg">Agotado</p>
                  )}
                </li>
                <li className="flex p-1">
                  <h1 className="text-xl font-semibold text-blue-900">
                    Fabricante:
                  </h1>
                  &nbsp;
                  <p className="text-gray-500 font-thin text-lg">
                    {general.brand}
                  </p>
                </li>
                <li className="flex p-1">
                  <h1 className="text-xl font-semibold text-blue-900">
                    Tamaño:
                  </h1>
                  &nbsp;
                  <ul className="text-gray-500 font-thin text-lg">
                    <li>largo: {general.large}cm</li>
                    <li>ancho: {general.broad}cm</li>
                    <li>alto: {general.height}cm</li>
                  </ul>
                </li>
                <li className="flex p-1">
                  <h1 className="text-xl font-semibold text-blue-900">
                    Color:
                  </h1>
                  &nbsp;
                  <p className="text-gray-500 font-thin text-lg">
                    {general.color}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Producto;
