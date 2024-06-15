import { useState } from 'react';
import { useEdgeStore } from '../utils/edgestore';

const Temp = () => {
	const [file, setFile] = useState();

	const { edgestore } = useEdgeStore();
	return (
		<div>
			<div>Temp</div>

			<input
				type='file'
				onChange={(e) => {
					setFile(e.target.files?.[0]);
				}}
			/>
			<button
				onClick={async () => {
					if (file) {
						const res = await edgestore.publicFiles.upload({
							file,
							onProgressChange: (progress) => {
								// you can use this to show a progress bar
								console.log(progress);
							},
							input: {
								category: 'temp',
							},
						});
						// you can run some server action or api here
						// to add the necessary data to your database
						console.log(res);
					}
				}}
			>
				Upload
			</button>
		</div>
	);
};

export default Temp;
