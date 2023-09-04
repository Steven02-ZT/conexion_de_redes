import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  handleTokenExchange,
  handlerUserInfoExchange,
} from "../../Actions/User_actions";

function LogCallback() {
  const [searchParams] = useSearchParams();
  let code = searchParams.get("code");
  const dispatch = useDispatch();

  const isDispatched = useRef(false);
  const navigate = useNavigate()
  useEffect(() => {
    if (!isDispatched.current) {
        isDispatched.current = true;
        dispatch(handleTokenExchange(code));
        navigate('/')
    }
  }, [dispatch]);

  return (
    <div className="font-light text-2xl flex justify-center items-center h-60">
      <h1>Loading...</h1>
    </div>
  );
}

export default LogCallback;
