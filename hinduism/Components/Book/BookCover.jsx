export function BookCover({ imageUrl, alt }) {
  return (
    // <div className="w-auto h-auto md:w-50 md:h-50 rounded-full overflow-hidden border-4 border-black shadow-lg">
    <div>
      <img
        src={imageUrl}
        alt={alt}
        className="w-auto h-50 object-contain p-2 bg-orange-500"
      />
      {/* </div> */}
    </div>
  );
}
