import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidations {
  static equalsTo(otherField: string) {
    const validator = (FormControl: FormControl) => {
      if (otherField == null) {
        throw new Error('É necessario informar um campo.');
      }

      if (!FormControl.root || !(<FormGroup>FormControl.root).controls) {
        return null;
      }
      const field = (<FormGroup>FormControl.root).get(otherField);

      if (!field) {
        throw new Error('É necessario informar um campo válido.');
      }

      if (field.value !== FormControl.value) {
        return { equalsTo: otherField };
      }

      return null;
    };
    return validator;
  }
}
