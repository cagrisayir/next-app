'use client';
import React, { ReactEventHandler, useState } from 'react';
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CloudinaryResult {
	public_id: string;
}

const UploadPage = () => {
	const [publicId, setPublicId] = useState('');

	return (
		<>
			{publicId && (
				<CldImage src={publicId} width={270} height={180} alt={'image'} />
			)}
			<CldUploadWidget
				uploadPreset='en0n3quz'
				options={{
					sources: ['camera', 'local'],
					multiple: false,
					maxFiles: 5,
				}}
				onUpload={(result, widget) => {
					if (result.event !== 'success') return;
					const info = result.info as CloudinaryResult;
					setPublicId(info.public_id);
				}}
			>
				{({ open }) => {
					function handleOnClick(e: any) {
						e.preventDefault();
						open();
					}
					return (
						<button className='btn btn-primary' onClick={handleOnClick}>
							Upload an Image
						</button>
					);
				}}
			</CldUploadWidget>
		</>
	);
};

export default UploadPage;
