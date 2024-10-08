import { LoadingStatusType } from '../../../types/types';
import { IFilmSlider } from '../featureFilmsSliderNew/featureFilmsSliderNewTypes';

export interface IFilmsSliderPopularSlice {
    filmsSliderPopular: IFilmSlider[] | [];
    loadingStatus: LoadingStatusType;
}
