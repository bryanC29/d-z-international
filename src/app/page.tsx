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

      <div className="luxury p-4">
        <p className="text-white text-center text-3xl font-semibold pb-2">
          Luxurious Fineness
        </p>

        <div className="flex flex-col md:flex-row shadow-xl bg-black m-4 text-white rounded-lg">
          <Image
            src="/leather-belts.webp"
            className="rounded-lg"
            alt=""
            width={500}
            height={200}
          />
          <div className="p-4">
            <p className="text-2xl font-bold">Gifts for Him</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore doloribus id pariatur facilis qui voluptas ipsum,
              molestiae, neque earum, repudiandae fugiat atque doloremque. Quas
              rerum obcaecati, sed ab accusamus quasi id molestias provident
              aliquid non ducimus dolorum necessitatibus beatae deserunt
              molestiae veniam expedita cumque laboriosam commodi, aliquam
            </p>
            <p className="text-lg my-4">
              Starting @ <span className="bg-red-600">Rs. 199</span>
            </p>
            <Link href="">
              <button className="p-2 border border-white rounded-md transition hover:bg-white hover:text-black">
                Shop now
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row shadow-xl bg-black m-4 text-white rounded-lg">
          <Image
            src="/women-handbag.jpg"
            className="rounded-lg"
            alt=""
            width={600}
            height={200}
          />
          <div className="p-4">
            <p className="text-2xl font-bold">Gifts for Her</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore doloribus id pariatur facilis qui voluptas ipsum,
              molestiae, neque earum, repudiandae fugiat atque doloremque. Quas
              rerum obcaecati, sed ab accusamus quasi id molestias provident
              aliquid non ducimus dolorum necessitatibus beatae deserunt
              molestiae veniam expedita cumque laboriosam commodi, aliquam
            </p>
            <p className="text-lg my-4">
              Starting @ <span className="bg-red-600">Rs. 199</span>
            </p>
            <Link href="">
              <button className="p-2 border border-white rounded-md transition hover:bg-white hover:text-black">
                Shop now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
