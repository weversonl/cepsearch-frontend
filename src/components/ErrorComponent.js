import { VscError } from "react-icons/vsc";

function ErrorComponent() {
  return (
    <main className="cepNotFound">
      <VscError size={120} color="red" className="errorLogo" />
      <span className="messageError">
        Não foi possível buscar o CEP informado!
      </span>
    </main>
  );
}

export default ErrorComponent;
