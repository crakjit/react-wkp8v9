import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Form,
  Field,
  FormElement,
  FormRenderProps,
} from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';

import {
  FormTimePicker,
  FormNumericTextBox,
  FormInput,
  FormCheckbox,
  FormMaskedTextBox,
  FormTextArea,
} from './form-components';

import {
  termsValidator,
  emailValidator,
  nameValidator,
  phoneValidator,
  guestsValidator,
  nightsValidator,
  arrivalDateValidator,
} from './validators';

const App = () => {
  const handleSubmit = (dataItem: { [name: string]: any }) =>
    alert(JSON.stringify(dataItem, null, 2));
  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps: FormRenderProps) => (
        <FormElement style={{ width: 400 }}>
          <fieldset className={'k-form-fieldset'}>
            <legend className={'k-form-legend'}>
              BOOK YOUR DREAM VACATION TODAY
            </legend>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Field
                id={'arrivalDate'}
                name={'arrivalDate'}
                label={'Arrival Date'}
                hint={'Hint: Should be greater than today'}
                component={FormTimePicker}
                value={new Date()}
                validator={arrivalDateValidator}
                wrapperStyle={{ width: '90%', marginRight: '18px' }}
              />
            </div>
            <div className="k-form-buttons">
              <Button
                themeColor={'primary'}
                type={'submit'}
                disabled={!formRenderProps.allowSubmit}
              >
                Send Reservation Request
              </Button>
              <Button onClick={formRenderProps.onFormReset}>Clear</Button>
            </div>
          </fieldset>
        </FormElement>
      )}
    />
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
