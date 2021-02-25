import React, { useState } from 'react';
import Modal from '../Common/Modal';
import PartnerModal from './PartnerModal';
import RegisterForm from './RegisterForm';

export default function Register(): JSX.Element {
	const [modalDisplay, setmodalDisplay] = useState(false);

	function toggleModal() {
		setmodalDisplay(!modalDisplay);
	}

	return (
		<>
			<Modal Body={() => <PartnerModal toggleModal={toggleModal} />} isVisible={modalDisplay} />
			<RegisterForm toggleModal={toggleModal} modalDisplay={modalDisplay} />
		</>
	);
}