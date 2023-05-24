import { AddCategory } from "../../domain/usecases/add-category";
import { AddCategoryRepository } from "../protocols/db/category/add-category-repository";


export class DbAddCategory implements AddCategory {
    constructor(private readonly addCategoryRepository: AddCategoryRepository) {
    }
    async add(category: AddCategory.Params): Promise<AddCategory.Result> {
        let result = await this.addCategoryRepository.add({ ...category })
        return result
    }

}