import Image from 'next/image';

export default function CheckOut() {
    return (
      <div className="min-h-screen bg-[#FFFFFF] p-4 md:p-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 max-w-7xl mx-auto">
  
          {/* Left Section: Form */}
          <div className="bg-white p-6 w-full md:w-[440px] lg:w-auto">
            <h1 className="text-[21px] font-medium mb-4">How would you like to get your order?</h1>
            <p className="text-[#757575] mb-6 text-sm md:text-base leading-snug">
            Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More
            </p>
  
            {/* Delivery Options */}
            <div className="mb-4">
              <button className="w-full p-3 border border-gray-300 rounded-lg flex items-center justify-start">
                <Image
                  src="/images/icons/image.png"
                  alt="Delivery"
                  className="w-[24px] h-[24px] mr-3"
                />
                <span className="font-medium">Deliver it</span>
              </button>
            </div>
  
            {/* Address Form */}
            <form className="space-y-4">
              <span className="text-[16px] font-medium">Enter your name and address:</span>
              <input
                type="text"
                placeholder="First Name"
                className="p-3 border rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 border rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Address Line 1"
                className="p-3 border rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Address Line 2"
                className="p-3 border rounded-md w-full"
              />
  
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="p-3 border rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="Locality"
                  className="p-3 border rounded-md w-full"
                />
              </div>
  
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <select className="p-3 border rounded-md w-full">
                  <option>State/Territory</option>
                  <option>Maharashtra</option>
                  <option>Karnataka</option>
                </select>
                <select className="p-3 border rounded-md w-full">
                  <option>India</option>
                  <option>United States</option>
                </select>
              </div>
  
              {/* Contact Info */}
              <div>
                <h2 className="text-lg font-medium mt-4 mb-2">What’s your contact information?</h2>
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 border rounded-md w-full mb-2"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="p-3 border rounded-md w-full"
                />
              </div>
  
              {/* PAN */}
              <div>
                <h2 className="text-lg font-medium mt-4 mb-2">What’s your PAN?</h2>
                <input
                  type="text"
                  placeholder="PAN"
                  className="p-3 border rounded-md w-full"
                />
              </div>
  
              {/* Continue */}
              <button className="w-full p-3 bg-[#111111] text-white rounded-lg mt-4">
                Continue
              </button>
            </form>
          </div>
  
          {/* Right Section: Order Summary */}
          <div className="bg-white p-6 w-full md:w-[320px] lg:w-auto">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Image
                  src="/images/image5.png"
                  alt="T-shirt"
                  className="w-[100px] h-[100px] rounded-md border mr-3"
                />
                <div>
                  <p className="font-normal text-[13px]">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</p>
                  <p className="text-gray-500">Qty: 1</p>
                </div>
              </li>
              <li className="flex items-center">
                <Image
                  src="/images/image3.jpg"
                  alt="Shoes"
                  className="w-[100px] h-[100px] rounded-md border mr-3"
                />
                <div>
                  <p className="font-medium">AirMax 90 Shoes - Size 10</p>
                  <p className="text-gray-500">Qty: 1</p>
                </div>
              </li>
            </ul>
            <hr className="my-4" />
            <div className="text-sm font-medium flex justify-between">
              <span>Subtotal:</span>
              <span>₹2,980.00</span>
            </div>
            <div className="text-sm font-medium flex justify-between mt-2">
              <span>Delivery:</span>
              <span>Free</span>
            </div>
            <div className="text-lg font-bold flex justify-between mt-4">
              <span>Total:</span>
              <span>₹2,980.00</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  