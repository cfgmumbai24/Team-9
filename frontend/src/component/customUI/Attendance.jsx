import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { LuFileSignature } from 'react-icons/lu';

export default function Attendance() {
	const [openModal, setOpenModal] = useState(true);

	return (
		<Modal show={openModal} size='md' onClose={() => setOpenModal(false)} popup>
			<Modal.Header />
			<Modal.Body>
				<div className='text-center'>
					<LuFileSignature className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
					<h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
						Please Mark Your Attendance
					</h3>
					<div className='flex justify-center gap-4'>
						<Button color='success' onClick={() => setOpenModal(false)}>
							{'Present'}
						</Button>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
}
