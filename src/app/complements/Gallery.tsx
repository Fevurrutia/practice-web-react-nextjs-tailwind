import Image from "next/image";

const Gallery = () => {
  return (
    <div
      id="gallery"
      className="container mx-auto p-10 mt-14  max-w-4xl rounded-md shadow-lg shadow-gray-900 bg-slate-200 "
    >
      <p className="text-4xl font-bold text-center mb-5 uppercase text-slate-500">
        Gallery
      </p>
      <div className="grid grid-cols-3 gap-10">
        <div className="group">
          <Image
            src="/images/1.jpg"
            alt="imagen 1"
            width={200}
            height={300}
            className="mx-auto rounded-md bg-cover shadow-lg shadow-gray-900 cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="group">
          <Image
            src="/images/2.jpg"
            alt="imagen 2"
            width={200}
            height={300}
            className="mx-auto rounded-md bg-cover shadow-lg shadow-gray-900 cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="group">
          <Image
            src="/images/3.jpg"
            alt="imagen 3"
            width={200}
            height={300}
            className="mx-auto rounded-md bg-cover shadow-lg shadow-gray-900 cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="group">
          <Image
            src="/images/4.jpg"
            alt="imagen 4"
            width={200}
            height={300}
            className="mx-auto rounded-md bg-cover shadow-lg shadow-gray-900 cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="group">
          <Image
            src="/images/5.jpg"
            alt="imagen 5"
            width={200}
            height={300}
            className="mx-auto rounded-md bg-cover shadow-lg shadow-gray-900 cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="group">
          <Image
            src="/images/6.jpg"
            alt="imagen 6"
            width={200}
            height={300}
            className="mx-auto rounded-md bg-cover shadow-lg shadow-gray-900 cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="group">
          <Image
            src="/images/7.jpg"
            alt="imagen 7"
            width={200}
            height={300}
            className="mx-auto rounded-md bg-cover shadow-lg shadow-gray-900 cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="group">
          <Image
            src="/images/8.jpg"
            alt="imagen 8"
            width={200}
            height={300}
            className="mx-auto rounded-md bg-cover shadow-lg shadow-gray-900 cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="group">
          <Image
            src="/images/9.jpg"
            alt="imagen 9"
            width={200}
            height={300}
            className="mx-auto rounded-md bg-cover shadow-lg shadow-gray-900 cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
