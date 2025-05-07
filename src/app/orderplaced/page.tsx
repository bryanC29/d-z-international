import { CheckBoxRounded } from '@mui/icons-material';
import Link from 'next/link';

export default function OrderPlaced() {
  return (
    <div className="bg-black text-center h-screen text-white p-3">
      <CheckBoxRounded
        className="mx-auto mt-20 text-green-500 "
        style={{ fontSize: 100 }}
      />
      <h1 className="text-3xl font-bold">Order Placed</h1>
      <p className="mt-4 text-lg">Thank you for your order!</p>
      <p className="mt-2 mb-4 text-lg">
        Your order has been successfully placed.
      </p>

      <Link
        href="/"
        className="font-semibold transition-all underline underline-offset-2 hover:text-neutral-400 italic text-xl"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
