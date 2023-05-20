import { CategoryModel } from "../../../../domain/models"
import { AddCategory } from "../../../../domain/usecases/add-category"


export interface AddCategoryRepository {
    add: (data: AddCategorytRepository.Params) => Promise<AddCategorytRepository.Result>
}

export namespace AddCategorytRepository {
    export type Params = AddCategory.Params
    export type Result = CategoryModel
}
