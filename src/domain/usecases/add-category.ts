import { CategoryModel } from "../models"

export interface AddCategory {
    add: (category:AddCategory.Params ) => Promise<AddCategory.Result>
}

export namespace AddCategory {
    export type Params = {
        id: string,
        description: string,
    }
    export type Result = CategoryModel
}

