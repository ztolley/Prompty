import React from "react";
import {
  ColorDanger600,
  ColorNeutral600,
  Spacing11,
  Spacing6,
} from "@royalnavy/design-tokens";
import {
  BUTTON_ICON_POSITION,
  ButtonProps,
  Modal,
} from "@royalnavy/react-component-library";
import styled from "styled-components";
import { IconLoader } from "@royalnavy/icon-library";

type DangerDialogProps = {
  bodyText: string;
  errorText?: string;
  isOpen: boolean;
  isLoading?: boolean;
  onProceed: () => void;
  onReturn: () => void;
  proceedButtonText: string;
  returnButtonText: string;
  title: string;
};

const ModalBody = styled.div`
  color: ${ColorNeutral600};
  padding: ${Spacing11};
`;

const ErrorText = styled.div`
  color: ${ColorDanger600};
  margin-bottom: ${Spacing6};
`;

const StyledModal = styled(Modal)`
  article {
    width: 30rem;
  }

  header span {
    color: ${ColorDanger600};
  }
`;

export const DangerModal: React.FC<DangerDialogProps> = ({
  bodyText,
  errorText,
  isLoading = false,
  isOpen,
  onProceed,
  onReturn,
  proceedButtonText,
  returnButtonText,
  title,
}) => {
  const primaryButton: ButtonProps = {
    children: proceedButtonText,
    color: "danger",
    isDisabled: isLoading,
    icon: isLoading ? <IconLoader /> : undefined,
    iconPosition: BUTTON_ICON_POSITION.LEFT,
    onClick: onProceed,
  };

  const secondaryButton: ButtonProps = {
    children: returnButtonText,
    onClick: onReturn,
    variant: "secondary",
  };

  return (
    <StyledModal
      data-testid="danger-modal"
      isOpen={isOpen}
      onClose={onReturn}
      primaryButton={primaryButton}
      tertiaryButton={secondaryButton}
      title={title}
    >
      <ModalBody>
        {errorText && (
          <ErrorText data-testid="danger-modal-error">{errorText}</ErrorText>
        )}
        {bodyText}
      </ModalBody>
    </StyledModal>
  );
};
