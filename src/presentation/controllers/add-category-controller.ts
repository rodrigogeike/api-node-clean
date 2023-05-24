import { AddCategory } from "../../domain/usecases/add-category";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";


export class AddCategoryController implements Controller {
    constructor(
        private readonly validation: Validation,
        private readonly addCategory: AddCategory
    ) {

    }

    async handle (request: AddCategoryController.Request): Promise<HttpResponse> {
        try {
          const error = this.validation.validate(request)
          if (error) {
            return badRequest(error)
          }
          await this.addSurvey.add({
            ...request,
            date: new Date()
          })
          return noContent()
        } catch (error) {
          return serverError(error)
        }
      }


}

export namespace AddCategoryController {
    export type Request = {
        description: string
    }
}