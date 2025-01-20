function banner() {
  return (
    <div className="bg-gradient-to-bl from-amber-300 to-slate-100 rounded ">
      <div className="px-10 pt-10 ">
        <h2 className="text-md font-bold text-gray-600">SPRING 2016</h2>
        <h2 className="text-4xl font-bold text-gray-900">
          Men <span className="text-yellow-400">Fashion</span>
        </h2>
        <p className="text-lg text-gray-700 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          culpa?
        </p>
        <button className="mt-4 bg-blue-600 text-white hover:bg-white hover:text-blue-400 px-6 py-2 rounded duration-300">
          Shop Now
        </button>
      </div>

      <div className=" bottom-0 mt-8">
        <div className="bg-blue-800 flex items-center justify-around">
          <div className="text-white text-center">
            <div className="font-bold">MONEY BACK</div>
            <div>30 days money back guarantee</div>
          </div>

          <div className="text-white text-center">
            <div className="font-bold">FREE SHIPPING</div>
            <div>shipping on orders above $99</div>
          </div>

          <div className="text-white text-center">
            <div className="font-bold">SPECIAL SALE</div>
            <div>extra $5 off on all items</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default banner;
