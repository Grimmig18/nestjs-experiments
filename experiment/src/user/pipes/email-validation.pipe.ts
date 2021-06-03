import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
// import * as emailValidator from 'email-validator'
// import { getUserEntryByEmail } from "src/util/json-utils";
// import { User } from "../dto/user.model";

@ValidatorConstraint({ name: 'Check if Email is registered', async: false })
export class EmailValidationPipe implements ValidatorConstraintInterface {
  validate(email: string, args: ValidationArguments) {
    // console.log(email)
    // console.log(args)

    // // Check if email is already registered
    // // Read JSON files by email
    // try {
    //     getUserEntryByEmail(email)
    //     return false
    // } catch(e) {
    //     if(e.status !== 404) return false
    //     console.log(e)
    // }   

    // // Check if email is of valid format
    // return emailValidator.validate(email)
    return null
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return 'Email ($value) is already registered or invalid.';
  }
}