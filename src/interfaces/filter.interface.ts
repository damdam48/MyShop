type Icon = 'bi-binoculars-fill' | 'bi-tags-fill' | 'bi-coin';
type InputType = 'text' | 'checkbox' | 'radio';
export type CategoryName = 'Gadgets Lumineux' | 'Technologie Futuriste' | 'Café et Code';
type PriceName = 'Tous les prix' | 'Moins de 100€' | 'Entre 100 et 200€' | 'Plus de 200€';
export type PriceType = 'all' | '0-100' | '100-200' | '200+';

interface FilterInterface {
    title: string;
    icon: Icon;
    inputType: InputType;
    placeholder?: string;
    value: string | CategoryName[];
    items?: {
        id: number;
        name: string;
        value?: string;
    }[];
}

interface SearchFilterInterface extends FilterInterface {
    title: 'Rechercher';
    icon: 'bi-binoculars-fill';
    inputType: 'text';
    value: string;
    placeholder: 'Chercher';
}


interface CategoriesFilterInterface extends FilterInterface {
    title: 'Catégories';
    icon: 'bi-tags-fill';
    inputType: 'checkbox';
    value: CategoryName[];
    items: {
        id: number;
        name: CategoryName;
    }[];
}



interface PricesFilterInterface extends FilterInterface {
    title: 'Prix';
    icon: 'bi-coin';
    inputType: 'radio';
    value: PriceType;
    items: {
        id: number;
        name: PriceName;
        value: PriceType;
    }[];
}

export interface FiltersInterface {
    search: SearchFilterInterface;
    categories: CategoriesFilterInterface;
    prices: PricesFilterInterface;
}