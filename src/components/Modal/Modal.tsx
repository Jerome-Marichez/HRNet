import "./Modal.scss";

interface ModalProps {
	isOpen: boolean;
	contentBody: string | JSX.Element;
	onClose: () => void;

	closeButton?: JSX.Element;
	contentFooter?: JSX.Element;
	contentHeader?: JSX.Element;

	verticalAlign?: string;
	backgroundColor?: string;
	modalRadius?: string;
	modalBackground?: string;
	modalShadow?: string;
	modalMaxWidth?: string;
}
/**
 * 
 * @param isOpen A boolean with state True if Modal is show, false if Modal is not show
 * @param contentBody A content body display inside modal can be string or a JSX.Element
 * @param onClose A callback function enabled at Click of Exit Button ex: "onClose={() => { setModalOpen(false); }}" 
 * @param closeButton A optional parameter who allow to display a JSX.Element as a Close Button
 * @param contentHeader A optional paramater who allow to display a JSX.Element as a Header
 * @param contentFooter A optional paramater who allow to display a JSX.Element as a footer
 * @param backgroundColor A optional parameter to set background color behind Modal (ex: "rgba(0, 0, 0, 0.75)")
 * @param verticalAlign A optional parameter who allow to display Modal in center top or bottom (check: https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align to see options) * @param backgroundColor A optional paramater to set Background Color behind Modal (ex: "rgba(0, 0, 0, 0.75)")
 * @param modalRadius A optional parameter to set radius of Modal Form (ex: "8px")
 * @param modalBackground A optional parameter to set css background propriety (ex: "grey")
 * @param modalShadow A optional parameter to set box-shadow propriety (ex: "0 0 10px #000")
 * @param modalMaxWidth A optional parameter to set max-width propriety of modal (ex: "500px")
 * @returns A Modal with his content
 */
export default function Modal(props: ModalProps): JSX.Element {

	const { isOpen, contentBody, onClose } = props; // Minimal Props
	const { closeButton, contentFooter, contentHeader } = props; // Custom JSX.Element Props
	const { backgroundColor, verticalAlign, modalRadius, modalBackground, modalShadow, modalMaxWidth } = props; // CSS Custom Propriety 

	return (
		<div className="blocker" style={{
			display: isOpen ? "inline-block" : "none",
			backgroundColor: backgroundColor ? backgroundColor : "rgba(0, 0, 0, 0.75)",
		}}>
			<div className="modal"
				style={{
					verticalAlign: verticalAlign ? verticalAlign : "middle",
					maxWidth: modalMaxWidth ? modalMaxWidth : "500px",
					background: modalBackground ? modalBackground : "#FFF",
					borderRadius: modalRadius ? modalRadius : "8px",
					boxShadow: modalShadow ? modalShadow : "0 0 10px #000"
				}}>
				{contentHeader ? contentHeader : ""}
				{contentBody}
				{contentFooter ? contentFooter : ""}
				<a href="#close-modal" onClick={onClose} className={closeButton ? "close-modal-custom" : "close-modal"}>
					{closeButton ? closeButton : "Close"}
				</a>
			</div>
		</div>
	);
}