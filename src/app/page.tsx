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

      <div className="bg-black w-full overflow-hidden">
        <p className="text-white text-3xl text-center font-bold py-5">
          Show Stopper
        </p>
        <div className="p-5 flex flex-row flex-nowrap whitespace-nowrap gap-5 animate-marquee overflow-hidden w-max">
          <div className="min-w-60 h-80 bg-slate-50 rounded-lg relative bg-[url(/avng.jpg)] justify-end flex flex-col">
            <div className="bg-slate-100 bg-opacity-30 p-4 rounded-b-lg gap-2">
              <p className="text-lg font-bold opacity-">HandBags</p>
              <p>@ rs. 2999</p>
              <button className="mt-2 bg-slate-600 w-full rounded-md">
                Add to cart
              </button>
            </div>
            {/* <Image
              src="/avng.jpg"
              alt="img"
              layout="fill"
              objectFit="fill"
              className="rounded-lg"
            /> */}
          </div>
          <div className="min-w-60 h-80 bg-slate-50 rounded-lg relative bg-[url(/avng.jpg)] justify-end flex flex-col">
            <div className="bg-slate-100 bg-opacity-30 p-4 rounded-b-lg gap-2">
              <p className="text-lg font-bold opacity-">HandBags</p>
              <p>@ rs. 2999</p>
              <button className="mt-2 bg-slate-600 w-full rounded-md">
                Add to cart
              </button>
            </div>
            {/* <Image
              src="/avng.jpg"
              alt="img"
              layout="fill"
              objectFit="fill"
              className="rounded-lg"
            /> */}
          </div>
          <div className="min-w-60 h-80 bg-slate-50 rounded-lg relative bg-[url(/avng.jpg)] justify-end flex flex-col">
            <div className="bg-slate-100 bg-opacity-30 p-4 rounded-b-lg gap-2">
              <p className="text-lg font-bold opacity-">HandBags</p>
              <p>@ rs. 2999</p>
              <button className="mt-2 bg-slate-600 w-full rounded-md">
                Add to cart
              </button>
            </div>
            {/* <Image
              src="/avng.jpg"
              alt="img"
              layout="fill"
              objectFit="fill"
              className="rounded-lg"
            /> */}
          </div>
          <div className="min-w-60 h-80 bg-slate-50 rounded-lg relative bg-[url(/avng.jpg)] justify-end flex flex-col">
            <div className="bg-slate-100 bg-opacity-30 p-4 rounded-b-lg gap-2">
              <p className="text-lg font-bold opacity-">HandBags</p>
              <p>@ rs. 2999</p>
              <button className="mt-2 bg-slate-600 w-full rounded-md">
                Add to cart
              </button>
            </div>
            {/* <Image
              src="/avng.jpg"
              alt="img"
              layout="fill"
              objectFit="fill"
              className="rounded-lg"
            /> */}
          </div>
          <div className="min-w-60 h-80 bg-slate-50 rounded-lg relative bg-[url(/avng.jpg)] justify-end flex flex-col">
            <div className="bg-slate-100 bg-opacity-30 p-4 rounded-b-lg gap-2">
              <p className="text-lg font-bold opacity-">HandBags</p>
              <p>@ rs. 2999</p>
              <button className="mt-2 bg-slate-600 w-full rounded-md">
                Add to cart
              </button>
            </div>
            {/* <Image
              src="/avng.jpg"
              alt="img"
              layout="fill"
              objectFit="fill"
              className="rounded-lg"
            /> */}
          </div>
          <div className="min-w-60 h-80 bg-slate-50 rounded-lg relative bg-[url(/avng.jpg)] justify-end flex flex-col">
            <div className="bg-slate-100 bg-opacity-30 p-4 rounded-b-lg gap-2">
              <p className="text-lg font-bold opacity-">HandBags</p>
              <p>@ rs. 2999</p>
              <button className="mt-2 bg-slate-600 w-full rounded-md">
                Add to cart
              </button>
            </div>
            {/* <Image
              src="/avng.jpg"
              alt="img"
              layout="fill"
              objectFit="fill"
              className="rounded-lg"
            /> */}
          </div>
          <div className="min-w-60 h-80 bg-slate-50 rounded-lg relative bg-[url(/avng.jpg)] justify-end flex flex-col">
            <div className="bg-slate-100 bg-opacity-30 p-4 rounded-b-lg gap-2">
              <p className="text-lg font-bold opacity-">HandBags</p>
              <p>@ rs. 2999</p>
              <button className="mt-2 bg-slate-600 w-full rounded-md">
                Add to cart
              </button>
            </div>
            {/* <Image
              src="/avng.jpg"
              alt="img"
              layout="fill"
              objectFit="fill"
              className="rounded-lg"
            /> */}
          </div>
        </div>
      </div>

      <div className="bg-neutral-900 w-full overflow-hidden">
        <p className="text-white text-3xl text-center font-bold py-5">
          Customer Satisfaction
        </p>
        <div className="p-5 flex flex-row flex-nowrap gap-5 animate-marquee overflow-hidden w-max">
          <div className="min-w-60 h-96 bg-slate-50 rounded-lg flex-col flex max-w-64">
            <div className="bg-slate-600 rounded-full h-36 w-36 my-5 mx-14"></div>
            <p className="p-2 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              libero sed rem nemo enim deleniti obcaecati, error
            </p>
            {/* <Image
              src="/avng.jpg"
              alt="img"
              layout="fill"
              objectFit="fill"
              className="rounded-lg"
            /> */}
            <p className="text-center font-bold">RATING</p>
          </div>
          <div className="min-w-60 h-96 bg-slate-50 rounded-lg flex-col flex max-w-64">
            <div className="bg-slate-600 rounded-full h-36 w-36 my-5 mx-14"></div>
            <p className="p-2 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              libero sed rem nemo enim deleniti obcaecati, error
            </p>
            {/* <Image
              src="/avng.jpg"
              alt="img"
              layout="fill"
              objectFit="fill"
              className="rounded-lg"
            /> */}
            <p className="text-center font-bold">RATING</p>
          </div>
          <div className="min-w-60 h-96 bg-slate-50 rounded-lg flex-col flex max-w-64">
            <div className="bg-slate-600 rounded-full h-36 w-36 my-5 mx-14"></div>
            <p className="p-2 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              libero sed rem nemo enim deleniti obcaecati, error
            </p>
            {/* <Image
              src="/avng.jpg"
              alt="img"
              layout="fill"
              objectFit="fill"
              className="rounded-lg"
            /> */}
            <p className="text-center font-bold">RATING</p>
          </div>
          <div className="min-w-60 h-96 bg-slate-50 rounded-lg flex-col flex max-w-64">
            <div className="bg-slate-600 rounded-full h-36 w-36 my-5 mx-14"></div>
            <p className="p-2 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              libero sed rem nemo enim deleniti obcaecati, error
            </p>
            {/* <Image
              src="/avng.jpg"
              alt="img"
              layout="fill"
              objectFit="fill"
              className="rounded-lg"
            /> */}
            <p className="text-center font-bold">RATING</p>
          </div>
          <div className="min-w-60 h-96 bg-slate-50 rounded-lg flex-col flex max-w-64">
            <div className="bg-slate-600 rounded-full h-36 w-36 my-5 mx-14"></div>
            <p className="p-2 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              libero sed rem nemo enim deleniti obcaecati, error
            </p>
            {/* <Image
              src="/avng.jpg"
              alt="img"
              layout="fill"
              objectFit="fill"
              className="rounded-lg"
            /> */}
            <p className="text-center font-bold">RATING</p>
          </div>
          <div className="min-w-60 h-96 bg-slate-50 rounded-lg flex-col flex max-w-64">
            <div className="bg-slate-600 rounded-full h-36 w-36 my-5 mx-14"></div>
            <p className="p-2 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              libero sed rem nemo enim deleniti obcaecati, error
            </p>
            {/* <Image
              src="/avng.jpg"
              alt="img"
              layout="fill"
              objectFit="fill"
              className="rounded-lg"
            /> */}
            <p className="text-center font-bold">RATING</p>
          </div>
          <div className="min-w-60 h-96 bg-slate-50 rounded-lg flex-col flex max-w-64">
            <div className="bg-slate-600 rounded-full h-36 w-36 my-5 mx-14"></div>
            <p className="p-2 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              libero sed rem nemo enim deleniti obcaecati, error
            </p>
            {/* <Image
              src="/avng.jpg"
              alt="img"
              layout="fill"
              objectFit="fill"
              className="rounded-lg"
            /> */}
            <p className="text-center font-bold">RATING</p>
          </div>
        </div>
      </div>
    </>
  );
}
