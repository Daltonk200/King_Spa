// app/components/CategoryIcons.jsx

const CategoryIcons = ({ icons }) => {
    return (
      <div className="flex overflow-x-scroll space-x-4 py-4 hide-scrollbar">
        {icons.map((icon, index) => (
          <div key={index} className="flex-shrink-0 w-16 h-16">
            <img src={icon.src} alt={icon.alt} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    );
  };
  
  export default CategoryIcons;
  