import { ProductItem } from "./ProductItem"
import { useMemo } from 'react';

interface SearchResultsProps {
    totalPrice: number;
    results: Array<{
        id: number;
        price: number;
        priceFormatted: string;
        title: string;
    }>
}

export function SearchResults({ totalPrice, results }: SearchResultsProps) {

    return(
        <div>
            <h2>{totalPrice}</h2>
            {results.map(product => {
                return (
                    <ProductItem product={product} />
                );
            })}
            
        </div>
    );
}


// 1. Criar uma novar versão do componente
// 2. Comparar com a versão anterior 
// 3. Se houverem alteracoes, vai atualizar o que alterou

// ---- use memo
// 1. Pure Functional Componentes 
// 2. Render too often 
// 3. Re-renders with same props
// 4. Medium to big size


// ----- utilize useMemo
//
// 1. Cálculos pesados
// 2. Igualdade referencial (quando a gente repassa aquela informação a um componente filho)