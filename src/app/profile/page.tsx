export default function profile() {
  return (
    <>
      <div className="bg-gray-700 flex flex-row">
        <div className="bg-zinc-600 h-auto w-[22%] sticky flex flex-col items-center">
          <div className="bg-slate-400 rounded-full h-40 w-40 m-10"></div>
          <p className="text-3xl font-semibold">John Doe</p>
          <div className="flex w-full items-center flex-col py-16">
            <p className="text-xl mb-5">see your orders</p>
            <button className="w-[90%] mb-20 h-14 bg-slate-400 rounded-lg">
              Orders
            </button>
            <p className="text-xl mb-5">goto your cart</p>
            <button className="w-[90%] h-14 bg-slate-400 rounded-lg">
              Cart
            </button>
          </div>
        </div>
        <div className="bg-neutral-700 h-auto w-[78%]">
          <div className="bg-white shadow rounded-2xl p-6 space-y-4 m-5 w-[80%]">
            <h2 className="text-xl font-semibold">User Information</h2>
            <div className="space-y-1 flex flex-col gap-5">
              <p>
                <strong>Name:</strong> John Doe
              </p>
              <p>
                <strong>Email:</strong> john@example.com
              </p>
              <p>
                <strong>Phone:</strong> +1 234 567 890
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded ">
                Change Password
              </button>
            </div>
          </div>
          <div className="bg-white shadow rounded-2xl p-6 space-y-4 m-5 w-[80%]">
            <h2 className="text-xl font-semibold">Address Book</h2>
            <div className="space-y-2 flex flex-col gap-5">
              <p>@ 123 Main St, Springfield</p>
              <p>@ 456 Elm St, Metropolis</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded ">
                Add New Address
              </button>
            </div>
          </div>
          <div className="bg-white shadow rounded-2xl p-6 space-y-4 m-5 w-[80%]">
            <h2 className="text-xl font-semibold">Payment Methods</h2>
            <div className="space-y-2 flex flex-col gap-5">
              <p>
                <strong>Card no. :</strong> **** **** **** 4242 (Visa)
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded ">
                Add New Card
              </button>
            </div>
          </div>
          <div className="bg-white shadow rounded-2xl p-6 space-y-4 m-5 w-[80%]">
            <h2 className="text-xl font-semibold">Account Actions</h2>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-4 w-[50%] py-2 rounded ">
                Log Out
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 w-[50%] rounded ">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
