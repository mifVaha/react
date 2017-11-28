import {eventChannel, END} from 'redux-saga';

const categoriesGenerator = () => {
    const count = 10;
    const categories = [];

    for (let i = 0; i < count; i++) {
        const category = {
            id: i,
            title: "category" + i
        };
        categories.push(category);
    }
    return categories;
};

const getSubCAtegories = (id: number) => {
    const count = 5;
    let subid = 1;
    const catgories = categoriesGenerator();
    const subcategories = [{}];
    catgories.map((cat: any) => {
        for (let i = 0; i < count; i++) {
            const subcategory = {
                id: subid,
                catid: cat.id,
                title: "subcategory" + i
            };
            subcategories.push(subcategory);
            subid++;
        }
    });

    return subcategories;
};

export default class Api {
    static getCategories() {
        return categoriesGenerator();
    }
    static getSubCategories(id: number) {
        return getSubCAtegories(id);
    }
}
