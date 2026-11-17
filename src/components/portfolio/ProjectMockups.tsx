import styles from "./ProjectMockups.module.css";

// Decorative, CSS-drawn product windows for the project cards.

function BrowserBar({ path }: { path: string }) {
  return (
    <div className={styles.browserBar}>
      <i />
      <i />
      <i />
      <span>{path}</span>
    </div>
  );
}

export function SyncrMockup() {
  return (
    <div className={styles.window}>
      <BrowserBar path="workspace / product-team" />
      <div className={styles.appShell}>
        <aside>
          <b>S</b>
          <i />
          <i />
          <i />
          <i />
        </aside>
        <div className={styles.board}>
          <div className={styles.boardHeader}>
            <span>Product sprint</span>
            <i />
          </div>
          <div className={styles.columns}>
            <div>
              <b>TO DO</b>
              <span />
              <span />
              <span />
            </div>
            <div>
              <b>IN PROGRESS</b>
              <span className={styles.activeCard} />
              <span />
            </div>
            <div>
              <b>DONE</b>
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const phones = [
  { name: "Phone 14 Pro", price: "$999" },
  { name: "Phone 15", price: "$1,099" },
  { name: "Phone 15 Plus", price: "$1,199" },
];

export function StoreMockup() {
  return (
    <div className={styles.window}>
      <BrowserBar path="nice-gadgets / catalog" />
      <div className={styles.storeShell}>
        <header className={styles.storeHeader}>
          <b>NG</b>
          <nav>
            <span>Phones</span>
            <span>Tablets</span>
            <span>Accessories</span>
          </nav>
          <i />
        </header>
        <div className={styles.storeBody}>
          <aside className={styles.storeFilters}>
            <strong>Filters</strong>
            <span />
            <span />
            <span />
            <div>
              <i />
              <i />
            </div>
          </aside>
          <div className={styles.storeCatalog}>
            <div className={styles.storeCatalogHeader}>
              <div>
                <small>Catalog</small>
                <strong>Mobile phones</strong>
              </div>
              <span>24 products</span>
            </div>
            <div className={styles.productGrid}>
              {phones.map((phone) => (
                <div key={phone.name} className={styles.productCard}>
                  <div className={styles.device}>
                    <i />
                    <span />
                  </div>
                  <b>{phone.name}</b>
                  <small>{phone.price}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
