import React, { lazy, Suspense } from 'react';
import App from '../App';
import { Store } from '../Store';
import { IEpisodeProps } from '../types/interfaces';
import { toggleFavAction } from '../Actions';
const EpisodesList = lazy<any>(() => import('./EpisodesList'));
export default function FavPage(): JSX.Element {
	const { state, dispatch } = React.useContext(Store);
	const props: IEpisodeProps = {
		episodes: state.favourites,
		store: { state, dispatch },
		toggleFavAction,
		favourites: state.favourites,
	};
	return (
		<App>
			<Suspense fallback={<div>loading...</div>}>
				<div className="episode-layout">
					<EpisodesList {...props} />
				</div>
			</Suspense>
		</App>
	);
}
