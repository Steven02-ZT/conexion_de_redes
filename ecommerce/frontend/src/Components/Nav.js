import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from 'react-router-dom'

import { AiOutlineSearch,AiOutlineShoppingCart,AiOutlineDown } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'

import { logout } from '../Actions/User_actions'

function Nav() {

  const user = useSelector((state) => state.user)
  const {userInfo} = user

  const dropMenu = () => {
    let menu = document.getElementById('dropDown')
    let menu2 = document.getElementById('dropDown2')
    if (menu.style.visibility === "visible"){
      menu.style.visibility = "hidden"
      menu2.style.visibility = "hidden"
    }else{
      menu.style.visibility = "visible"
      menu2.style.visibility = "visible"
    }
  }

  const dispatch = useDispatch()
  const logoutHeandler = () => {
    dispatch(logout())
  }

  const [search,setSearch] = useState('')
  const searcgHeandler = () => {
    window.location.replace(`productos?search=${search}`)
  }

  function menu(){
    if (window.innerWidth <= 1000 ){
      document.querySelector('#nav-lg').style.display = 'none'
      document.querySelector('#iconNav').style.display = 'flex'
    }
  }

  useEffect(() => {
    menu()
  })

  const showMenuHeandler = () => {
    let menu = document.querySelector('#nav-sm')
    if (menu.style.display === "none"){
      menu.style.display = "block"
    }else{
      menu.style.display = "none"
    } 
  }

  return (
      <div className="place-items-center h-28  bg-blue-800" style={{"position":"sticky","top":"0","zIndex":"99"}}>
        <section className="relative w-full h-full pt-2">
          <nav className="flex justify-center shadow-2xl text-white w-full h-2/3" id="nav">
          <Link className=" menu-image h-5/6 w-1/6" to={"/"}></Link>
          <button  onClick={showMenuHeandler} className="w-4/6 justify-end" style={{'display':'none'}} id="iconNav">
            <FiMenu className="text-white w-14 h-16" id="showMenu"/>
          </button>
          {/*nav bar large*/ }
          <div className="px-5 xl:px-12 grid-gap-6 grid items-center grid-cols-10 h-full w-5/6" id="nav-lg">
              <div className="col-span-6 w-full h-full flex justify-center items-center radius-xl">
                <input type="text" className="h-3/5 w-5/6 rounded-l-xl text-slate-400" id="search"
                value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button className="bg-slate-400 h-3/5 w-1/6 rounded-r-xl flex justify-center items-center"
                onClick={searcgHeandler}>
                  <AiOutlineSearch className="text-2xl"/>
                </button>
              </div>
              <div className="grid grid-cols-3 grid-gap-2 col-span-4 h-5/6 text-sm items-center">
                  <Link className="m-auto" to={'/productos'}>Productos</Link>
                  <Link className="flex justify-center items-center" to={'/carrito'}>Carrito&nbsp;<AiOutlineShoppingCart/></Link>
                  <div className="m-auto text-slate-400 flex">
                    {userInfo ? (
                      <div className="relative">
                        <button type="button" onClick={dropMenu}>Hi!&nbsp;{userInfo.given_name}&nbsp;<AiOutlineDown className="inline"/></button>
                        <div className="absolute bg-gray-900 w-full text-white rounded-lg" id="dropDown" style={{'visibility':'hidden'}}>
                          <ul className="p-2">
                            <li className="font-thin mt-2 border-b pb-2"><Link to={"/myUser"}>Perfil</Link></li>
                            <li className="font-thin mt-2 border-b pb-2"><button type="button" onClick={logoutHeandler}>Logout</button></li>
                          </ul>
                        </div>
                      </div>
                    ):(
                      <div>
                        <a href="https://ecommercecr-demo.auth.us-east-2.amazoncognito.com/login?client_id=63f1ft2k9kj462locrqosmj5u4&response_type=code&scope=email+openid+profile&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin%2Fcallback">Logear</a>
                        &nbsp;|&nbsp;
                        <a href="https://ecommercecr-demo.auth.us-east-2.amazoncognito.com/signup?client_id=63f1ft2k9kj462locrqosmj5u4&response_type=code&scope=email+openid+profile&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin%2Fcallback">Registrarse</a>
                      </div>
                    )}
                  </div>
              </div>
            </div>
          {/*nav bar medium-small*/ }
            <div className="px-5 xl:px-12 grid-gap-6 grid items-center w-full absolute bg-blue-800 top-20" id="nav-sm" 
            style={{'display':'none','height':'auto'}}>
              <div className="w-full h-28 flex justify-center items-center radius-xl">
                <input type="text" className="h-3/5 w-4/6 rounded-l-xl text-slate-400" id="search"
                value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button className="bg-slate-400 h-3/5 w-1/6 rounded-r-xl flex justify-center items-center"
                onClick={searcgHeandler}>
                  <AiOutlineSearch className="text-2xl"/>
                </button>
              </div>
              <div className="grid grid-cols-3 grid-gap-2 h-28 text-xl items-center">
                  <Link className="m-auto" to={'/productos'}>Productos</Link>
                  <Link className="flex justify-center items-center" to={'/carrito'}>Carrito&nbsp;<AiOutlineShoppingCart/></Link>
                  <div className="m-auto text-slate-400 flex">
                    {userInfo ? (
                      <div className="relative">
                        <button type="button" onClick={dropMenu}>Hi!&nbsp;{userInfo.given_name}&nbsp;<AiOutlineDown className="inline"/></button>
                        <div className="absolute bg-gray-900 w-full text-white rounded-lg" id="dropDown2" style={{'visibility':'hidden'}}>
                          <ul className="p-2">
                            <li className="font-thin mt-2 border-b pb-2"><Link to={"/myUser"}>Perfil</Link></li>
                            <li className="font-thin mt-2 border-b pb-2"><button type="button" onClick={logoutHeandler}>Logout</button></li>
                          </ul>
                        </div>
                      </div>
                    ):(
                      <div>
                        <a href="https://ecommercecr-demo.auth.us-east-2.amazoncognito.com/login?client_id=63f1ft2k9kj462locrqosmj5u4&response_type=code&scope=email+openid+profile&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin%2Fcallback">Logear</a>
                        &nbsp;|&nbsp;
                        <a href="https://ecommercecr-demo.auth.us-east-2.amazoncognito.com/signup?client_id=63f1ft2k9kj462locrqosmj5u4&response_type=code&scope=email+openid+profile&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin%2Fcallback">Registrarse</a>
                      </div>
                    )}
                  </div>
              </div>
            </div>
          </nav>
          <nav className="bg-blue-800 flex justify-left  w-full h-1/3 " id="nav2">
            <ul className="flex justify-left items-center text-slate-100 border-t-2 border-slate-400 w-full h-full">
              <li className="m-2 ml-5 mr-5">
              <Link to={"/marcas"} id="NavBrandsOption">Nuestras marcas</Link>
              </li>
              <li className="m-2 ml-5 mr-5">
                <Link to={"/empresa"}>Empresa</Link>
              </li>
              {/*<li className="m-2 ml-5 mr-5">Contactenos</li>*/}
            </ul>
          </nav>
        </section>
      </div>
  );
}

export default Nav;
