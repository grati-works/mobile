import { ModalWrapper, ModalContentWrapper, ModalBackground } from "./styles";

export function Modal({ isOpen = false, toggleFunction, children, padding = 32 }) {
    return isOpen && (
        <ModalWrapper>
            <ModalContentWrapper padding={padding}>
                {children}
            </ModalContentWrapper>
            <ModalBackground onPress={toggleFunction} />
        </ModalWrapper>
    )
}