import React, { useEffect, useState, useMemo } from "react";
import styles from "./Products.module.css";
import { PiHeartLight, PiHeartFill } from "react-icons/pi";
import Loader from "../Loader/Loader";

const Products = ({ columns }) => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        // Assign SEO-friendly names to images (example)
        const enhanced = data.map((item, idx) => ({
          ...item,
          seoName: item.title.toLowerCase().replace(/\s+/g, "-"),
        }));

        setProducts(enhanced);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const toggleFavorite = (id) =>
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));

  const productList = useMemo(
    () =>
      products.map((product, index) => (
        <article
          key={product.id}
          className={styles.card}
          itemScope
          itemType="https://schema.org/Product"
        >
          <div className={styles.imageWrapper}>
            {index === 0 && (
              <div className={`${styles.badge} ${styles.newBadge}`}>
                NEW PRODUCT
              </div>
            )}
            {index === 1 && (
              <div className={`${styles.badge} ${styles.outBadge}`}>
                OUT OF STOCK
              </div>
            )}
            <img
              src={product.image}
              alt={product.title}
              title={product.title}
              loading="lazy"
              className={styles.productImage}
              itemProp="image"
            />
          </div>

          <div className={styles.infoSection}>
            <h2 className={styles.productName} itemProp="name">
              {product.title.length > 26
                ? `${product.title.slice(0, 25)}...`
                : product.title}
            </h2>

            <div className={styles.priceRow}>
              <p className={styles.signText}>
                <span className={styles.signLink}>Sign in</span> or Create an
                account to see pricing
              </p>

              <button
                onClick={() => toggleFavorite(product.id)}
                className={styles.heartButton}
                aria-label="Toggle favorite"
              >
                {favorites[product.id] ? (
                  <PiHeartFill
                    className={`${styles.heartIcon} ${styles.heartActive}`}
                  />
                ) : (
                  <PiHeartLight className={styles.heartIcon} />
                )}
              </button>
            </div>
          </div>

          {/* ✅ Structured data for schema */}
          <meta itemProp="sku" content={`product-${product.id}`} />
          <meta itemProp="brand" content="FakeStore" />
          <meta itemProp="description" content={product.description} />
        </article>
      )),
    [products, favorites]
  );

  if (loading) return <Loader count={8} />;

  return (
    <section className={styles.productsWrapper}>
      <div
        className={styles.productsGrid}
        // style={{
        //   gridTemplateColumns: `repeat(${columns}, 1fr)`,
        // }}
      >
        {productList}
      </div>
    </section>
  );
};

export default Products;
