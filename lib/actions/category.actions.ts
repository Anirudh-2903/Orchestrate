"use server";

import { CreateCategoryParams } from "@/types";
import { handleError } from "../utils";
import { connectDB } from "../database";
import Category from "../database/models/category.model";

export const getAllCategories = async () => {
    try {
        // Create Category
        await connectDB();
        const categories = await Category.find();
        return JSON.parse(JSON.stringify(categories));
    } catch (error) {
        handleError(error);
    }
};

export const createCategory = async ({categoryName}: CreateCategoryParams) => {
    try {
        // Create Category
        await connectDB();
        const newCategory = await Category.create({name: categoryName});
        return JSON.parse(JSON.stringify(newCategory));
    } catch (error) {
        handleError(error);
    }
};