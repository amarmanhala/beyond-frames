const Newsletter = () => {
  return (
    <section className="bg-red-100 text-red-950 py-16 px-8 text-center rounded-2xl mx-24">
      <h2 className="text-3xl font-bold mb-4">New Collection Launching Soon</h2>
      <p className="text-red-950 max-w-2xl mx-auto mb-6">
        Discover unique artwork and premium frames. Get notified when new
        collections launch and enjoy exclusive early access.
      </p>
      <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800">
        Subscribe
      </button>
    </section>
  );
};

export default Newsletter;
