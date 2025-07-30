const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center mb-10">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
       To get New Product/Tech info ASAP
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex justify-center items-center gap-3 mx-auto my-6  pl-3"
      >
        <input
          type="email"
          placeholder="Enter your email."
          className="md:w-full px-4 py-3 rounded-3xl border-2 md:text-lg sm:flex-1 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-[#054895] ml-2 text-white text-xs md:text-lg px-4 py-2 "
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
