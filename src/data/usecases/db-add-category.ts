import { AddCategory } from "../../domain/usecases/add-category";


export class DbAddCategory implements AddCategory {


    constructor(){

    }

    async add (category: AddCategory.Params) : Promise<AddCategory.Result>{

    }

}