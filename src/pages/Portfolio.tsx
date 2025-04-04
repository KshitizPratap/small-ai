const Portfolio = () => {
  return (
    <section id="notion-portfolio" className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 gradient-text">
            Portfolio
          </h2>
          <p className="text-base md:text-lg text-smallai-gray-light max-w-2xl mx-auto px-2">
            View our detailed portfolio and case studies
          </p>
        </div>

        <div className="glass-card p-1 md:p-3 shadow-glow mb-8 md:mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] via-[#9B87F5] to-[#48A7FF] opacity-30 rounded-xl"></div>

          <div className="relative bg-smallai-black rounded-lg overflow-hidden">
            <iframe
              src="https://legend-barge-759.notion.site/ebd/1c8e5852cfdb806bb421e7ec85238b9c?v=1c8e5852cfdb81508a17000c5273b6c1"
              width="100%"
              height="300"
              className="z-10 relative h-[200vh] lg:h-[600px]"
              title="Notion Portfolio"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Abstract background elements - responsive positions */}
      <div className="hidden md:block absolute bottom-10 md:bottom-20 left-5 md:left-20 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-[#9B87F5] rounded-full opacity-10 blur-[60px] md:blur-[100px]"></div>
      <div className="hidden md:block absolute top-20 md:top-40 right-5 md:right-20 w-36 sm:w-52 md:w-72 h-36 sm:h-52 md:h-72 bg-[#FF6B6B] rounded-full opacity-10 blur-[60px] md:blur-[100px]"></div>
    </section>
  );
};

export default Portfolio;
