import { useState } from 'react';
import { useEdgeStore } from '../utils/edgestore';

const Temp = () => {
	const [file, setFile] = useState();

	const { edgestore } = useEdgeStore();
	return (
		<div>
			<div>Temp</div>

<<<<<<< HEAD
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
=======
      <input
        type="file"
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
                category: "temp",
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
>>>>>>> 3a879b8cfbecc2ca7b18f17a4aac8fbe282ac991
};



export default Temp