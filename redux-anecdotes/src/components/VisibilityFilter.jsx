//import { filterChange } from "../reducers/filterReducer";
import { useDispatch } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

const VisibilityFilter = () => {
  const dispatch = useDispatch();

  // Función para manejar el cambio en el campo de entrada del filtro
  const handleChange = (event) => {
    // Despacha la acción setFilter con el valor del campo de entrada
    dispatch(setFilter(event.target.value));
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      <form>
        filter
        <input type="text" onChange={handleChange} />
      </form>
    </div>
  );
};

export default VisibilityFilter;
