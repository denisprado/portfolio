import { Admin, ListGuesser, Resource, EditGuesser } from "react-admin";
import { dataProvider } from "utils/dataProvider";
import { CategoryCreate } from "./category";
import { WorkCreate, WorkEdit } from "./work";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="work"
      list={ListGuesser}
      edit={WorkEdit}
      create={WorkCreate}
    />
    <Resource
      name="category"
      list={ListGuesser}
      edit={EditGuesser}
      create={CategoryCreate}
      recordRepresentation="name"
    />
  </Admin>
);

export default App;
