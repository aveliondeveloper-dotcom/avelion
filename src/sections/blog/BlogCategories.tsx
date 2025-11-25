import React from "react";

interface Category {
  id: string;
  label: string;
}

interface Props {
  categories: Category[];
  active: string;
  onSelect: (id: string) => void;
}

export default function BlogCategories({ categories, active, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-16 px-6">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`
            px-6 py-2 rounded-full text-sm border transition-all
            ${
              active === cat.id
                ? "bg-avelion-primary text-white border-avelion-primary"
                : "border-avelion-neutral-600 hover:bg-avelion-neutral-700"
            }
          `}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
