const overlayStyles = {
  dark: 'bg-gradient-to-br from-petrol-dark/93 via-petrol/88 to-petrol-dark/92',
  light: 'bg-gradient-to-b from-white/94 via-white/90 to-white/96',
  medium: 'bg-gradient-to-br from-white/90 via-gray-50/92 to-white/94',
};

const SectionBackground = ({ image, overlay = 'light', className = '' }) => {
  const isExternal = image.startsWith('http');

  return (
    <div className={`absolute inset-0 z-0 ${className}`} aria-hidden="true">
      {isExternal ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${image}")` }}
        />
      )}
      <div className={`absolute inset-0 ${overlayStyles[overlay]}`} />
    </div>
  );
};

export default SectionBackground;
