const Marquee = () => {
  return (
    <>
      <section className="marquee-section">
        <div className="marquee">
          <div className="marquee-group">
            <div className="text" data-text="Luxury">
              Luxury
            </div>
            <div className="text" data-text="Cruize">
              Cruize
            </div>
            <div className="text" data-text="Yacht">
              Yacht
            </div>
            <div className="text" data-text="Ship">
              Ship
            </div>
            <div className="text" data-text="Rental">
              Rental
            </div>
          </div>
          <div aria-hidden="true" className="marquee-group">
            <div className="text" data-text="Luxury">
              Luxury
            </div>
            <div className="text" data-text="Cruize">
              Cruize
            </div>
            <div className="text" data-text="Yacht">
              Yacht
            </div>
            <div className="text" data-text="Ship">
              Ship
            </div>
            <div className="text" data-text="Rental">
              Rental
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Marquee;
