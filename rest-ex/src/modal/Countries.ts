export interface Country{
    "name":string;
    "capital":string;
    "region":string;
    "population":number;
    "nativeName":string;
    "currencies":Currencies[];
    "flag":string;
};

interface Currencies{
    "code":string;
    "name":string;
    "symbol":string;
}