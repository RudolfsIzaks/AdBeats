import React from "react";
import "../index.css";
import { useLocation } from "react-router-dom";

function Confirm() {
  const location = useLocation();
  const apiResponse = location.state?.response;

  const [formData, setFormData] = useState({
    email: "",
    order_id: apiResponse.id
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendOut = async (e) => {
    e.preventDefault();
    try {
        // Make the POST request using async/await
        const response = await axios.post(
          'https://aqueous-tor-91749-7319d44de38a.herokuapp.com/auto-mail-order', 
          formData
        );
    
        // Reset the form data after successful submission
        setFormData({
          email: "",
          order_id: apiResponse.id
        });
    
        console.log(response);
    
        // Navigate to the confirmation page with the response data
        navigate("/done");
      } catch (error) {
        // Handle any error that occurs during the API call
        console.error("Error submitting the form:", error);
      }
    };


  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div>
          <h1 className="text-blue font-comic font-bold text-headline-2">
            Free Song Order Confirmed!
          </h1>
          <p className="text-white font-montserrat text-subheadline-3">
            Your Order ID is: {apiResponse.id}
          </p>
          <form onSubmit={handleSendOut} action="submit">
            <label htmlFor="email">Your email to recieve Order ID</label>
            <input
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent outline-none border-b border-b-blue"
            />
            <button
              type="submit"
              className="bg-blue comic_btn font-comic text-2xl font-bold px-5 py-2 border hover:bg-black border-blue transition hover:text-blue hover:scale-110"
            >
              Send ID
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Confirm;
