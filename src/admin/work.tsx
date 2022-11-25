import {
  Create,
  ReferenceInput,
  SimpleForm,
  TextInput,
  SelectInput,
} from "react-admin";

export const WorkCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" fullWidth />
      <TextInput
        source="description"
        multiline={true}
        label="Short description"
      />
      <ReferenceInput source="category_id" reference="category">
        <SelectInput />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
export const WorkEdit = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" fullWidth />
      <TextInput
        source="description"
        multiline={true}
        label="Short description"
      />
      <ReferenceInput source="category_id" reference="category">
        <SelectInput />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
