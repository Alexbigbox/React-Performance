import { ProductItem } from "./ProductItem"
import { useMemo } from 'react';
import { List, ListRowRenderer } from 'react-virtualized';

interface SearchResultsProps {
    totalPrice: number;
    results: Array<{
        id: number;
        price: number;
        priceFormatted: string;
        title: string;
    }>
    onAddToWishlist: (id: number) => void;
}

export function SearchResults({ totalPrice, results, onAddToWishlist }: SearchResultsProps) {
    const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
        return (
            <div key={key} style={style}>
            <ProductItem 
                product={results[index]}
                onAddToWishlist={onAddToWishlist}
            />
            </div>
        );
    }
    return(
        <div>
            <h2>{totalPrice}</h2>

            <List 
                height={300}
                rowHeight={30}
                width={900}
                overscanRowCount={5}
                rowCount={results.length}
                rowRenderer={rowRenderer}
            
            />


            {/* {results.map(product => {
                return (
                    
                );
            })} */}
            
        </div>
    );
}

// Regras para renderização no React
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

// ----- Formatação dos dados
// 1. Tentar sempre formatar os dados no momento da busca
// 2. Não formatar no momento de exibir as informaçãoes 

// ----- Dynamic import (Code Splitting)
// 1. Usar Lazy loading ( carregamento preguiçoso ). 
// Somente carregar os componentes e libs quando forem usar na app
// lazy no React  -  dynamic no 'next/dynamic'

// react-virtualized
// Virtualização.. renderizar apenas o que vai aparecer em tela