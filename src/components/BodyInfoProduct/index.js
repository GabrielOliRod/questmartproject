import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import shirts from "../../database/shirtsdb.json";
import pants from "../../database/pantsdb.json";
import shorts from "../../database/shortsdb.json";
import sweatshirts from "../../database/sweatshirtdb.json";
import styles from "./BodyInfoProduct.module.css";

function BodyInfoProduct() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "";

  const navigate = useNavigate();

  const handleLoginPage = () => {
    navigate("/Login&Cadastro");
  };

  // Junta todos os produtos em um array
  const products = [...shirts, ...shorts, ...sweatshirts, ...pants];

  // Busca o produto pelo nome
  const foundProduct = products.find((item) => item.name === name);

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Caso não retornar nenhum produto
  if (!foundProduct) {
    return <p>Produto não encontrado</p>;
  }

  // Tamanhos disponíveis
  const availableSizes = [
    "PP",
    "P",
    "M",
    "G",
    "GG",
    "GGG (XP)",
    "GGG (XM)",
    "GGG (XG)",
  ];

  return (
    <div className={styles.container} /*Container Principal*/>
      <div className={styles.containerBody} /*Container do Produto*/>
        <div className={styles.containerImg}>
          <img src={foundProduct.photo} alt={foundProduct.name} />
        </div>

        <div /*Container das informações do Produto*/
          className={
            styles.containerInfos
          } 
        >
          <h1>{foundProduct.name}</h1>
          <p className={styles.price}>R$ {foundProduct.price}</p>
          <p className={styles.payment}>
            10x de R$ {(foundProduct.price / 10).toFixed(2)}
          </p>

          <div className={styles.sizeSelector} /*Container Seletor de tamanho*/>
            <p>TAMANHO: {selectedSize || "Selecione"}</p>
            <div className={styles.sizeOptions}>
              {availableSizes.map((size) => (
                <button
                  key={size}
                  className={`${styles.sizeButton} ${
                    selectedSize === size ? styles.selectedSize : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                  disabled={size.includes("GGG")}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div
            className={ /*Container Seletor de quantidade*/
              styles.quantitySelector
            } 
          >
            <p>QUANTIDADE</p>
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className={styles.quantityDropdown}
            >
              {[...Array(10).keys()].map( /*Array com as opções de quantidade*/
                (num ) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                )
              )}
            </select>
          </div>

          <button /*Container Botão*/
            type="button"
            className={styles.addToCart}
            onClick={handleLoginPage}
          >
            INCLUIR NO CARRINHO
          </button>
        </div>
      </div>
    </div>
  );
}

export default BodyInfoProduct;
