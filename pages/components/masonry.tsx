import images from './helper'
//@ts-ignore
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Zoom from 'react-medium-image-zoom'
import styles from '../../styles/main.module.css'

import 'react-medium-image-zoom/dist/styles.css'

const MasonryGrid = () => {
	return (
		<div className={styles.masonry}>
			<ResponsiveMasonry columnsCountBreakPoints={{500: 1, 750: 2}}>
				<Masonry gutter={20}>
					{images.map((image: any, key: number) => {
						return (
							<Zoom key={key} >
								<img style={{width: '100%'}} src={image.default.src} alt="art" />
							</Zoom>
						);
					})}
				</Masonry>
			</ResponsiveMasonry>
		</div>
	)
}

export default MasonryGrid;