import ReactDOM from "react-dom";
import { DangerModal } from "./DangerModal";

interface DiscardConfig {
  bodyText: string;
  proceedText: string;
  returnText: string;
  title: string;
}

const defaultDiscardConfig: DiscardConfig = {
  bodyText: `Are you sure you want to cancel editing this thing?`,
  proceedText: "Yes, discard changes",
  returnText: "Return and edit",
  title: "Discard changes",
};

/**
 *
 * @param message   A plain string to use as the body text in the confirmation dialog or an object
 *                  encoded as a json string including the DiscardConfig properties
 * @param callback  A function to call back to indicate if the router should leave the page (boolean) => void
 */
const UserConfirmation = (
  message: string,
  callback: (shouldLeavePage: boolean) => void
) => {
  const container = document.createElement("div");
  container.setAttribute("data-testid", "confirmation-dialog-container");
  document.body.appendChild(container);

  const discardConfig: DiscardConfig =
    message.indexOf("}") > 0
      ? {
          ...defaultDiscardConfig,
          ...JSON.parse(message),
        }
      : {
          ...defaultDiscardConfig,
          bodyText: message,
        };

  const closeModal = (callbackState: boolean) => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
    callback(callbackState);
  };

  ReactDOM.render(
    <DangerModal
      bodyText={discardConfig.bodyText}
      isOpen
      onProceed={() => {
        closeModal(true);
      }}
      onReturn={() => {
        closeModal(false);
      }}
      proceedButtonText={discardConfig.proceedText}
      returnButtonText={discardConfig.returnText}
      title={discardConfig.title}
    />,
    container
  );
};

export default UserConfirmation;
