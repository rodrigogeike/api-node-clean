import { AddCategoryRepository, AddCategorytRepository } from '../../../data/protocols/db';
import { AddCategory } from '../../../domain/usecases/add-category';
import { MongoHelper } from '../../../infra/db'

export class CategoryMongoRepository implements AddCategoryRepository {

   async add(data: AddCategorytRepository.Params): Promise<AddCategorytRepository.Result> {
      const categoryCollection = MongoHelper.getCollection('category')
      const result = await categoryCollection.insertOne(data)
      return result.insertedId !== null

   }


}