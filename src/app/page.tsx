import './styles.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h2 className="text-center text-white font-semibold bg-gray-900 p-3 text-2xl uppercase">
        Shop now
      </h2>

      <div className="bg-black text-white py-4">
        <p className="text-white text-center text-3xl font-semibold pb-2">
          Top Categories
        </p>
        <div className="flex justify-around flex-wrap">
          <Link href="/categories/belts" className="m-6">
            <Image
              className="rounded-full mb-2 border-[0.3rem] border-white"
              src="/belt2-5.jpg"
              alt="Product - Belt"
              height={180}
              width={180}
            />
            <p className="text-center text-lg">Belts</p>
          </Link>
          <Link href="/categories/belts" className="m-6">
            <Image
              className="rounded-full mb-2 border-[0.3rem] border-white"
              src="/belt2-5.jpg"
              alt="Product - Belt"
              height={180}
              width={180}
            />
            <p className="text-center text-lg">Belts</p>
          </Link>
          <Link href="/categories" className="m-6">
            <Image
              className="rounded-full mb-2 border-[0.3rem] border-white"
              src="/belt2-5.jpg"
              alt="Product - Belt"
              height={180}
              width={180}
            />
            <p className="text-center text-lg">Belts</p>
          </Link>
          <Link href="/categories" className="m-6">
            <Image
              className="rounded-full mb-2 border-[0.3rem] border-white"
              src="/belt2-5.jpg"
              alt="Product - Belt"
              height={180}
              width={180}
            />
            <p className="text-center text-lg">Belts</p>
          </Link>
          <Link href="/categories" className="m-6">
            <Image
              className="rounded-full mb-2 border-[0.3rem] border-white"
              src="/belt2-5.jpg"
              alt="Product - Belt"
              height={180}
              width={180}
            />
            <p className="text-center text-lg">Explore more</p>
          </Link>
        </div>
      </div>

      <div className="luxury">
        <p className="text-white text-center text-3xl font-semibold pb-2">
          Luxurious Fineness
        </p>
      </div>
    </>
  );
}
