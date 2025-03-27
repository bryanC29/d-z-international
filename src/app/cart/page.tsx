// import QuantitySelector from "@/components/quantifier/page"
// import cartItem from '@/components/cartItem/page';
import CartItem from '@/components/cartItem/page';
import data from 'C:/Users/ap705/OneDrive/Desktop/list.json';

export default function cart() {
  return (
    <>
      <div className="md:p-6 px-3 py-6 bg-neutral-800">
        <div className=" bg-black md:mx-20 md:py-10 py-6 md:px-3 px-2 rounded-2xl">
          <p className="text-4xl mb-8 text-center text-white">Shopping Cart</p>
          <hr className="mb-5" />
          {data.map((item, index) => (
            <CartItem
              key={index}
              name={item.productName}
              image={item.productImage}
              size={item.size}
              quantity={item.quantity}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
