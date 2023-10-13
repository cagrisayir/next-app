import React from 'react';

interface Props {
	params: { photoId: number; id: number };
}

const PhotoPages = ({ params: { photoId, id } }: Props) => {
	return (
		<div>
			PhotoPages {id} {photoId}
		</div>
	);
};

export default PhotoPages;
