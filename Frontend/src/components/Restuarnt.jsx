import { useNavigate } from "react-router-dom";

const BRANDS = [
  {
    id: "mcd",
    name: "McDonald's London",
    logo: "/Images/similar1.jpg",
    bg: "#CF2027",
    path: "/mcdonalds",
  },
  {
    id: "papa",
    name: "Papa Johns",
    logo: "/Images/similar2.jpg",
    bg: "#0D5B2A",
    path: "/papajohns",
  },
  {
    id: "kfc",
    name: "KFC West London",
    logo: "/Images/kfc.png",
    bg: "#C9151B",
    path: "/kfc",
  },
  {
    id: "texas",
    name: "Texas Chicken",
    logo: "/Images/similar3.jpg",
    bg: "#133C7A",
    path: "/texaschicken",
  },
  {
    id: "bk",
    name: "Burger King",
    logo: "/Images/similar5.png",
    bg: "#F08E28",
    path: "/burgerking",
  },
  {
    id: "shaurma",
    name: "Shaurma 1",
    logo: "/Images/similar4.jpg",
    bg: "#E84C2A",
    path: "/shaurma",
  },
];

const BrandCard = ({ item }) => {
  const navigate = useNavigate();
  const handleError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = "https://via.placeholder.com/200x120.png?text=Logo";
  };

  return (
    <div
      className="group block overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md cursor-pointer"
      onClick={() => navigate(item.path)}
    >
      {/* Logo fills the card. Use object-contain for logos that need padding (eg. McDonald's) to avoid awkward cropping */}
      {/* Logo fills the card. Wrap image in overflow-hidden container so only the image scales */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={item.logo}
          alt={item.name}
          onError={handleError}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      {/* Name below with orange background and white text */}
      <div className="bg-[#FF9F1C] py-3 text-center rounded-b-2xl">
        <h3 className="text-[13px] px-3 font-semibold text-white truncate">
          {item.name}
        </h3>
      </div>
    </div>
  );
};

const RestaurantsSection = () => {
  return (
    <section id="restaurants" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-foreground">
          Popular Restaurants
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {BRANDS.map((brand) => (
            <BrandCard key={brand.id} item={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
