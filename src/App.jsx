import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const products = [
  {
    id: "p1",
    title: "Яблоки 1 кг",
    price: 39.99,
    image: "https://ogorod-foodmarket.ru/image/cache/catalog/easyphoto/9610/yabloki-royal-gala-1-kg-1-650x650.jpg",
  },
  {
    id: "p2",
    title: "Морковь 1 кг",
    price: 29.5,
    image: "https://sibprod.info/upload/resize_cache/iblock/9a6/1000_1000_19d1669f6609e6dfcaeac28e5aab5b3be/9a6bf9a4785aa2075ee88f2f3ab8eba7.jpg",
  },
  {
    id: "p3",
    title: "Груша 1 кг",
    price: 39.0,
    image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/5713/00005713/norm/00005713.n_1.png?s=1000x1000",
  },
    {
    id: "p4",
    title: "Ананас 1 шт",
    price: 274.25,
    image: "https://imgproxy.kuper.ru/imgproxy/size-500-500/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzE0NTkyMzAvb3JpZ2luYWwvMS8yMDIyLTA4LTIzVDA5JTNBMjMlM0EwNC4xMzgwMDAlMkIwMCUzQTAwLzE0NTkyMzBfMS5qcGc=.jpg",
  },
];

function ProductCard({ product, count, onAdd }) {
  return (
    <div className="card">
      <div className="card__imageWrap">
        <img className="card__image" src={product.image} alt={product.title} />
      </div>
      <div className="card__body">
        <h3 className="card__title">{product.title}</h3>
        <div className="card__price">{product.price.toFixed(2)} ₽</div>
        <div className="card__actions">
          <button className="btn" onClick={() => onAdd(product.id)}>
            Добавить в корзину
          </button>
          <span className="counter" aria-label="Количество этого товара">
            {count}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [qty, setQty] = useState({});

  const handleAdd = (id) => {
    setQty((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const total = useMemo(
    () => Object.values(qty).reduce((sum, n) => sum + n, 0),
    [qty]
  );

  return (
    <div className="app">
      <header className="header">
        <h1>Мини-магазин</h1>
      </header>

      <main className="grid">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            count={qty[p.id] || 0}
            onAdd={handleAdd}
          />
        ))}
      </main>

      <footer className="footer">
        <div className="footer__content">
          <span className="footer__label">Всего в корзине:</span>
          <span className="footer__badge">{total}</span>
        </div>
      </footer>
    </div>
  );
}
