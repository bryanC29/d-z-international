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
          <div className="m-10 border-2 border-slate-50 h-auto  text-white rounded-xl p-2">
            <p className="text-center text-3xl mb-2">Basic Info</p>
            <hr />
            <p className="m-5 text-xl border rounded-lg p-2">Name: John Doe</p>
            <p className="m-5 text-xl border rounded-lg p-2">Name: John Doe</p>
            <p className="m-5 text-xl border rounded-lg p-2">Name: John Doe</p>
            <p className="m-5 text-xl border rounded-lg p-2">Name: John Doe</p>
          </div>
          <div className="m-10 border-2 border-slate-50 h-auto  text-white rounded-xl p-2">
            <p className="text-center text-3xl mb-2">Contact Info</p>
            <hr />
            <p className="m-5 text-xl border rounded-lg p-2">
              Mobile no.: 9876543210{' '}
            </p>
            <p className="m-5 text-xl border rounded-lg p-2">
              Mobile no.: 9876543210{' '}
            </p>
            <p className="m-5 text-xl border rounded-lg p-2">
              Mobile no.: 9876543210{' '}
            </p>
            <p className="m-5 text-xl border rounded-lg p-2">
              Mobile no.: 9876543210{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
