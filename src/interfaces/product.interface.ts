export interface ProductInterface {
    productId: number;
    name: string;
    description: string;
    price: number;
    illustration: string;
    createdAt: string;
    updateAt: string | null;
    categoryId: number;
    category: {
        categoryId: number;
        name: string;
        description: string;
    }
}