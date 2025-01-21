import Banner from "./components/banner";
import NewProducts from "./components/productsDisplay";
import Categories from "./components/categories";
import HotDeals from "./components/hotDeals";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid grid-cols-12 gap-x-6 py-6 px-16">
        <div className="col-span-3">
          <Categories />
          <HotDeals />
        </div>

        <div className="col-span-9">
          <Banner />
          <NewProducts title="Explore New Products" category="new" />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 px-16 py-8">
        <div className="col-span-4 bg-yellow-300 text-center p-4 h-40 rounded">
          Banner-1
        </div>
        <div className="col-span-8 bg-yellow-300 text-center p-4 h-40 rounded">
          Banner-2
        </div>
      </div>
    </div>
  );
}
