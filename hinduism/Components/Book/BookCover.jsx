export function BookCover({ imageUrl, alt }) {
  return (
    // <div className="w-auto h-auto md:w-50 md:h-50 rounded-full overflow-hidden border-4 border-black shadow-lg">
    <div>
      <img
        src={imageUrl}
        alt={alt}
        className="h-[250px] object-contain p-1 box-shadow bg-orange-500"
      />
      {/* </div> */}
    </div>
  );
}
