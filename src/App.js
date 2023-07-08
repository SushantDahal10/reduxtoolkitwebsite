import Navbar from "./Components/Navbar";
import Cartcontainer from "./Components/Cartcontainer";
import { total, getCartItems } from "./features/cart/Cartslice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./Components/Modal";
function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const isopen = useSelector((store) => store.modal.isopen);
  useEffect(() => {
    dispatch(total());
  }, [cartItems]);
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  if (isLoading)
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );

  return (
    <main>
      {isopen && <Modal></Modal>}

      <Navbar></Navbar>
      <Cartcontainer></Cartcontainer>
    </main>
  );
}
export default App;
