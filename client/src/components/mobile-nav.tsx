import { useLocation } from "wouter";
import { Home, BookOpen, TrendingUp, User } from "lucide-react";

export default function MobileNav() {
  const [location, setLocation] = useLocation();

  const navItems = [
    { icon: Home, label: "Trang Chủ", path: "/" },
    { icon: BookOpen, label: "Nội Dung", path: "/" },
    { icon: TrendingUp, label: "Tiến Độ", path: "/" },
    { icon: User, label: "Hồ Sơ", path: "/" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 md:hidden">
      <div className="flex items-center justify-around">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setLocation(item.path)}
            className={`flex flex-col items-center space-y-1 ${
              location === item.path ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
