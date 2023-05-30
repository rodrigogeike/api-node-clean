import { AddCategory } from "../../domain/usecases/add-category";
import { Controller, HttpResponse, Validation } from "../../presentation/protocols";
import { badRequest, serverError, noContent } from '../../presentation/helpers'


export class AddCategoryController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly addCategory: AddCategory
  ) {

  }
  async handle(request: AddCategoryController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      await this.addCategory.add({
        ...request
      })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }


}

export namespace AddCategoryController {
  export type Request = {
    id: string,
    description: string
  }
}