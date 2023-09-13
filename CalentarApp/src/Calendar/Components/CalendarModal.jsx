import { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";

import "../../styles.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { addHours, differenceInSeconds } from "date-fns";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);
import "react-datepicker/dist/react-datepicker.css";

import { useCalendarStore, useUiStore } from "../../hooks";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement();

export const CalendarModal = () => {
  const { isDateModalOpen, closeModal } = useUiStore();

  const { activeEvents, startSavingEvent } = useCalendarStore();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formValues, setFormValues] = useState({
    title: "",
    notes: "",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  //useMemo para que cuando el formValues.title cambie y el formSubmited tambien cambie el estilo del imput hay error
  const titleClass = useMemo(() => {
    if (!formSubmitted) return "";
    return formValues.title.length > 0 ? "is-valid" : "is-invalid";
  }, [formValues.title, formSubmitted]);

  const onCloseModal = () => {
    closeModal();
  };

  const onInputChange = ({ target }) => {
    setFormValues({ ...formValues, [target.name]: target.value });
  };

  const onDateChange = (event, chaning) => {
    setFormValues({ ...formValues, [chaning]: event });
  };

  useEffect(() => {
    //si no hago el if el valor de formvalues al inicial va a ser = a null y los campos van a aparece vacios o van a romper
    if (activeEvents !== null) {
      setFormValues({ ...activeEvents });
    }
  }, [activeEvents]);

  const onSubmitForm = async (event) => {
    event.preventDefault();

    //forma de saber que el form se intento postear
    setFormSubmitted(true);
    //forma de saber que el form se intento postear

    //forma de ver la diferencia de horario entre inicio y fin de evento
    const difference = differenceInSeconds(formValues.end, formValues.start);
    //forma de ver la diferencia de horario entre inicio y fin de evento
   
    if (isNaN(difference) || difference <= 0) {
      Swal.fire("Fechas incorrectas", "Revisar fechas ingresadas", "error");

      return;
    }

    if (formValues.title.length <= 0) {
      alert("Falta titulo");
      return;
    }
    console.log("form values",formValues)
    await startSavingEvent(formValues);
    closeModal();
  };
  
  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo">
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={onSubmitForm}>
        <div className="m-4">
          <div className="form-group mb-2">
            <label>Fecha y hora inicio</label>
            <br />
            <DatePicker
              selected={formValues.start}
              onChange={(event) => onDateChange(event, "start")}
              dateFormat="Pp"
              className="form-control"
              showTimeSelect
              locale="es"
              timeCaption="Hora"
            />
          </div>

          <div className="form-group mb-2">
            <label>Fecha y hora fin</label>
            <br />
            <DatePicker
              selected={formValues.end}
              onChange={(event) => onDateChange(event, "end")}
              minDate={formValues.start}
              dateFormat="Pp"
              className="form-control"
              showTimeSelect
              locale="es"
              timeCaption="Hora"
            />
          </div>

          <hr />
          <div className="form-group mb-2">
            <label>Titulo y notas</label>
            <input
              type="text"
              className={`form-control ${titleClass}`}
              placeholder="Título del evento"
              name="title"
              value={formValues.title}
              onChange={onInputChange}
              autoComplete="off"
            />
            <small id="emailHelp" className="form-text text-muted">
              Una descripción corta
            </small>
          </div>

          <div className="form-group mb-2">
            <textarea
              type="text"
              className="form-control"
              placeholder="Notas"
              rows="5"
              F
              name="notes"
              value={formValues.notes}
              onChange={onInputChange}></textarea>
            <small id="emailHelp" className="form-text text-muted">
              Información adicional
            </small>
          </div>

          <button type="submit" className="btn btn-outline-primary btn-block">
            <i className="far fa-save"></i>
            <span> Guardar</span>
          </button>
        </div>
      </form>
    </Modal>
  );
};
