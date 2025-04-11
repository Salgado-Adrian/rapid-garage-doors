const images = [
    "/images/garage1.jpg",
    "/images/garage2.jpg",
    "/images/garage3.jpg",
    "/images/garage4.jpg",
    "/images/garage5.jpg",
    "/images/garage6.jpg",
  ];
  
  export default function Gallery() {
    return (
    <section id="gallery" className="py-16 px-4 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Garage Door Inspiration</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <img
          key={index}
            src={src}
            alt={`Garage Door ${index + 1}`}
            className="rounded-lg shadow hover:scale-105 transition-transform duration-300"
        />
        ))}
        </div>
    </section>

    );
  }
  