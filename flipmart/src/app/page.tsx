import Banner from "../components/banner";
import NewProducts from "../components/productsDisplay";
import Categories from "../components/categories";
import HotDeals from "../components/hotDeals";

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
    </div>
  );
}
