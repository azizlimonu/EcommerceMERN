const PayButton = ({ cartItems }) => {

  const handleCheckout = () => {
    // soon added axios post method for stripe
    console.log("checkout triggered");
    console.log("cartItems", cartItems);
  }

  return (
    <>
      <button onClick={() => handleCheckout()}>Check out</button>
    </>
  );
};

export default PayButton;
